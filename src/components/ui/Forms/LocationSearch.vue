<!--
LocationSearch.vue
	Single field address, after lose focus, validates and gives options.

	Uses PositionStack API
-->

<template>

	<div :class="'direction__' + direction">

		<!-- Lightbox -->
			<transition name="lightbox">
			<div class="selections-lightbox show-sm" v-if="editing && smallScreen" @click="editing = false"></div>
		</transition>



 
		<div class="location-search-wrapper" :class="{'editing-selections': editing }">


			<button class="location-search-button" type="button" @click.self="editing = !editing" :class="{'active': editing}">
				<!-- Label for selection -->
				<label v-if="!activeSelection" class="ls_label no-pointer-events placeholder hide-sm">
					{{placeholder}}
				</label>
				<label v-else-if="typeof(activeSelection) == 'string'" class="ls_label no-pointer-events">
					{{activeSelection}}
				</label>
				<label v-else-if="activeSelection.label" class="ls_label no-pointer-events">
					{{activeSelection.label.replace(', MN, USA','')}}
				</label>
				<label v-else-if="activeSelection.name" class="ls_label no-pointer-events">
					{{activeSelection.name}}
				</label>
				
			

				<!-- Dropdown -->
				<i class="ls_button-icon far no-pointer-events " :class="{'fa-search-location': !editing, 'fa-angle-up': editing}"></i>
			</button>


			<!-- Popover -->
			<transition :name="smallScreen ? 'modal' : 'basic'">

				<div class="location-search-popover" v-if="editing" @mouseenter="mouseControls(true)" @mouseleave="mouseControls()">


					<!-- Input -->
					<form class="location-search-input" @submit.prevent="validateAddress()">
						<div class="button-input">
							<input type="text" :placeholder="placeholder ? placeholder : 'Search for a location...'" :value='addressInput' @input='evt=>addressInput=evt.target.value' autocomplete="off" spellcheck="false"/>
							<button class="button" type="submit" :disabled="addressInput.length < 4 || loading">
								<i class="far" :class="{'fa-search': !loading, 'far fa-spinner fa-spin': loading }"></i>
								<span>Search</span>
							</button>
						</div>
					</form>

					<!-- Results -->
					<div class="location-search-list no-scrollbars">


						<!-- Loop for options -->
						<button type="button" v-for="(address, key) in filteredGeocodeResponse" :key="key" @click="selectAddress(key)" :class="{'active': activeSelection && address.label == activeSelection.label}">
							<!-- Icon -->
							<i v-if="activeSelection && address.label == activeSelection.label" class="far fa-check-circle"></i>
							<i
								v-else
								class="far"
								:class="{
									'fa-building': address.type == 'venue',
									'fa-map-marker-alt': address.type == 'address',
									'fa-road': address.type == 'street',
									'fa-house-day': address.type == 'neighbourhood',
									'fa-truck-pickup': address.type == 'localadmin',
									'fa-city': address.type == 'locality',
									'fa-square': address.type == 'county',
									'fa-mailbox': address.type == 'postalcode',
								}">
								<!-- venue, address, street, neighbourhood, borough, localadmin, locality, county, macrocounty, region, macroregion, country, coarse, postalcode -->
							</i>
							<!-- Name -->
							<div class="addr-label" v-if="address.label">{{address.label.replace(', MN, USA','')}}</div>
							<div class="addr-label" v-else-if="address.name">{{address.name}}</div>
							<!-- Type label -->
							<div class="addr-type capitalize" v-if="address.type == 'locality'">City</div>
							<div class="addr-type capitalize" v-else>{{address.type}}</div>
						</button>

						<!-- No Results -->
						<div class="location-search-instructions" v-if="filteredGeocodeResponse == null">
							<p class="small">
								You can search by an exact address, city, neighborhood, or certain venues.
							</p>
						</div>

						<!-- No Results -->
						<button type="button" class="location-search-empty" v-if="filteredGeocodeResponse != null && !filteredGeocodeResponse[0]">
							No Results
							<i class="far fa-empty-set"></i>
						</button>


					</div>

					<!-- No results (custom disabled) -->
					<div class="end-of-selections">
						<a @click="clearAddress()" v-if="showReset && activeSelection">
							<i class="far fa-empty-set"></i> 
							Clear / Reset
						</a>
						<span>
							<i class="far fa-map-marker-alt"></i> 
						</span>
					</div>

					
				</div>

			</transition>

			
		</div>


	</div>

</template>

<script>
import debounce from "lodash/debounce";
import axios from "axios";


export default {
	name: "LocationSearch",
	mixins: [
	],
	components: {
	},
	props: [
		"showReset",
		"direction",
		"icon",
		"placeholder",
		"activeSelection",
	],
	data() {
		return {
			editing: false,
			hideTimer: null,

			addressInput: "",
			addressHold: null,
			geocodeResponse: null,
			addressTypes: ["address", "neighbourhood", "locality"],
			loading: false,
		};
	},
	created() {

	},
	computed: {
		smallScreen(){
			return this.$store.getters["Device/hasSmallScreen"];
		},

		filteredGeocodeResponse(){
			if(this.geocodeResponse){
				return this.geocodeResponse.filter(item => {
					return this.addressTypes.includes(item["type"]) || (item.number && item.street);
				}).sort();
			}else{
				return null;
			}
			
		},
	},
	watch: {
		editing(newVal, oldVal) {
			if(this.smallScreen){
				if(newVal == true){
					this.$store.dispatch("Hold/SCROLL_LOCK", true);
				}else{
					this.$store.dispatch("Hold/SCROLL_LOCK", false);
				}
			}
			
		},
		
	},
	
	mounted(){
	},
	methods: {

		// Validates input address
		validateAddress: function(){

			let _this = this;

			// var apikey = "fd0914ccbaa391aef8261c461daaa3b2";
			var apikey = process.env.VUE_APP_POSITIONSTACK_API;

			if(this.addressInput.length < 4){
				this.hello("At least 4 characters required to search", "far fa-times", "red");
			}else if(this.addressInput == this.addressHold){
				this.hello("Duplicate Search", "far fa-times", "red");
				return;
			}else{
				_this.loading = true;


				var addy = encodeURIComponent(this.addressInput.trim());
				var url = "//api.positionstack.com/v1/forward?access_key=" + apikey + "&query=" + addy + "&country=US&region=Minnesota&bbox_module=1&limit=3";
				
				// Hold address to check against next time
				this.addressHold = this.addressInput;

				// Request
				axios.get(url).then(response => {
					_this.geocodeResponse = response.data.data;
					setTimeout(function(){
						_this.loading = false;
					}, 1000);

				}).catch(e => {
					_this.$log().error(e);
					_this.loading = false;
				});

			}

			
				
		},
		
		// User selects address from suggestions
		selectAddress: function(key){
			this.editing = false;
			var data = this.geocodeResponse[key];
			delete data["bbox_module"];
			delete data["confidence"];
			delete data["continent"];
			delete data["country"];
			delete data["country_code"];
			delete data["map_url"];
			delete data["region_code"];

			// Emit to parent
			this.$emit("changed", data);
		},
		clearAddress: function(){
			// Emit to parent
			this.addressInput = "";
			this.$emit("changed", "");
			this.geocodeResponse = null;
			this.addressHold = null;
		},


		mouseControls: function(show){
			let _this = this;

			// If it's already visible, do nothing
			if(show){
				if(_this.editing){
					clearTimeout(_this.hideTimer);
				}
			}else{
				// Hide after 1 seconds
				this.hideTimer = setTimeout(function(){
					_this.editing = false;
				}, 400);

			}
		},

	}	
};	

</script>

<style lang="scss">


#LocationSearchField{
	width: 100%;
	min-width: 450px;

		@media (max-width: $screenSM) {
			min-width: unset;
		}
}


#locationResults{
	box-sizing: border-box;
	padding: 5px 0 0 0;
	max-width: var(--maxWidthSmall);
	font-family: var(--systemFont);
	max-width: 400px;

	.address{
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-weight: 500;
		font-size: 16px;
		width: 100%;
		box-sizing: border-box;
		padding: 6px 8px 6px 0;
		color: var(--text);
		position: relative;
		line-height: 17px;
		transition: var(--transition);
		border-radius: var(--borderRadius);

		div{
			padding-left: 34px;
			display: block;
			text-align: left;

			&.addr-type{
				font-size: 11px;
				color: var(--textLight);
				margin-top: -1px;
			}
		}

		&:before{
			width: 40px;
			position: absolute;
			height: 100%;
			font-size: 22px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: left;
			content: '\f111';
			font-family: var(--fontAwesome);
		}

		&:hover{
			cursor: pointer;
			text-decoration: underline;
		}

		&.active{
			color: var(--text);
			font-weight: 600;
			transition: var(--transition);

			&:before{
				content: '\f058';
				color: var(--primary);
			}

			&:hover{
				cursor: default;
				text-decoration: none;
			}
		}

		

	}
}














.location-search-wrapper{
	position: relative;
	width: fit-conent;
	
	// On mobile, it's fixed on bottom when editing
	&.editing-selections{
		transition: 0.2s ease;

		@media (max-width: $screenSM) {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			z-index: 5;
		}
	}

	.location-search-button{
		width: 100%;
		font-size: 14px;
		line-height: 16px;
		font-weight: 500;
		border-radius: var(--borderRadius);
		height: auto;
		padding: 0 42px 0 16px;
		background-color: var(--background);
		border: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		transition: 0.15s ease 0.1s;
		min-height: var(--inputHeight);
		height: fit-content;
		min-width: 160px;

		@media (max-width: $screenSM) {
			width:  100%;
			max-width:  unset;
		}

		.ls_selection{
			box-sizing:border-box;
			padding: 0;
			margin: 10px 0 8px 0;
			flex-grow: 3;
			text-align: right;
			text-transform: capitalize;
		}

		// Two labels needed - one with invisible text for spacing, the other to float so it can be vertically centered
		.ls_label{
			box-sizing: border-box;
			padding: 0 0 0 0;
			// color: transparent;
			// transform: scale(0.8);
			transform-origin: center center;
			margin-right: 15px;
			position: relative;
			height: 100%;
			text-transform: capitalize;

			&.placeholder{
				color: var(--textFade);
			}
		}

		// Dropdown icon
		.ls_button-icon{
			padding: 2px 12px 0 0;
			position: absolute;
			right: 0;
			font-size: 16px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 95%;
		}


		// Actively editing selection
		&.active{
			background-color: var(--greyFade);
			border-color: var(--primary);

			@media (max-width: $screenSM) {
				background-color: var(--background);
				max-width: 800px;
				width: 100%;
				font-size: 16px;
				line-height: 18px;
				min-height: 60px;
				height: auto;
				border-radius: 0;
				border: none;
				border-top-left-radius: 25px;
				border-top-right-radius: 25px;
				padding: 0 55px 0 26px;

				.ls_button-icon{
					padding: 10px 30px 0 0;
				}

				label{
					height: fit-content;
					width: 100%;
					position: absolute;
					left: 0;
					font-size: 18px;
					bottom: 100%;
					padding: 10px 0;
					color: var(--white);
				}

				.ls_selection{
					padding: 0;
					margin: 0 0 0 0;
					text-align: left;
					position: absolute;
					top: 50%;

					b{
						font-weight: 600;
						display: inline-block;
						padding: 3px 5px 3px 8px;
						position: relative;
						margin: 0 5px;
						text-align: left;
					}

					&.ls_multi{
						position: unset;
						height: 100%;
						margin-top: 24px;
						min-height: 100%;
						vertical-align: middle;
					}
				}
			}
		}

		// Hover button
		&:hover{
			border-color: var(--primary);
		}

	}

	.location-search-popover{
		position: absolute;
		z-index:15;
		top: 100%;
		top: calc(100% - 1px);
		left: 0;
		background-color: var(--background);
		border-radius: var(--borderRadiusLarge);
		border: 1px solid var(--primary);
		width: 400px;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		padding: 0 0 15px 0;
		box-shadow: var(--shadow-Hover);

		@media (max-width: $screenSM) {
			position: relative;
			width: 100%;
			max-width: unset;
			top: unset;
			left: unset;
			border-radius: 0;
			border: none;
			z-index: 1000;
			box-shadow: none;
		}

	}

	.location-search-input{
		display: block;
		width: 100%;
		box-sizing: border-box;
		padding: 15px 15px 0 15px;
		position: relative;

		input,button{
			border-color: var(--borderFade);
		}
		input{
			font-size: 14px;
			padding-bottom: 1px;
		}
		
	}


	
	// Results
	.location-search-list{
		display: flex;
		flex-direction: column;
		// position: absolute;
		width: 100%;
		padding: 0;
		max-height: 200px;
		overflow: auto;

		@media (max-width: $screenSM) {
			max-height: 50vh;
		}

		.location-search-instructions{
			box-sizing: border-box;
			padding: 15px 20px;
			text-align: center;
			font-size: 14px;
		}

		button,
		.suggestion{
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 11px 22px 11px 22px;
			font-size: 14px;
			color: var(--text);
			font-weight: 500;
			transition: var(--transition);
			text-align: left;
			text-transform: capitalize;
			border-radius: var(--borderRadiusLarge);

			&:first-child{
				margin-top: 15px;
			}
			&:last-child{
				margin-bottom: 15px;
			}

			i{
				margin: 0 8px 0 0;
				padding-top: 2px;
			}
			b{
				font-weight: 700;
			}

			.addr-label{
				flex-grow: 3;
			}
			.addr-type{
				font-size: 10px;
				padding-top: 2px;
			}

			@media (max-width: $screenSM) {
				font-size: 16px;
				padding: 14px 30px;
			}


			&:hover{
				cursor: pointer;
				background-color: var(--greyLight);
				transition: var(--transition);

				.addr-label{
					text-decoration: underline;
				}
			}
			&:focus{
				background-color: var(--grey);
				color: var(--primary);
			}

			&.active{
				color: var(--primary);
			}
			&.hidden{
				display: none;
			}


			// Reset button
			&.location-search-reset{
				text-align: center;
				font-size: 12px;
			}

			// No results button
			&.location-search-empty{
				color: var(--red);
				text-align: center;

				i{
					margin: 0 10px 0 0;
				}
				&:hover,
				&:focus{
					text-decoration: none;
					background-color: var(--background);
				}
			}
		}

		// Disabled
		&.disabled{
			button,
			.suggestion{
				color: var(--textFade);
				&:hover,
				&:focus{
					text-decoration: none;
					background-color: var(--background);
				}
			}
		}


	}


	// End of selections
	.end-of-selections{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		box-sizing: border-box;
		padding: 13px 22px 0 22px;
		color: var(--textFade);
		border-top: 1px solid var(--greyLight);

		@media (max-width: $screenSM) {
			font-size: 14px;
			padding: 18px 22px 3px 22px;
		}

		a{
			font-weight: 400;
			color: var(--red);
		}
	}

}



// Direction Changes - Non mobile only
@media (min-width: $screenSM) {
	.direction__top .location-search-popover{
		top: unset;
		padding: 10px 0 0 0;
		border-radius: var(--borderRadiusLarge);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		bottom: 100%;
		bottom: calc(100% - 1px);
		flex-direction: column-reverse;
	}
	.direction__top	.location-search-popover .location-search-input{
		padding: 5px 15px 15px 15px;
	}

	.direction__top .location-search-button.active{
		border-top-left-radius: 0;
	}

	.direction__top .end-of-selections{
		border-top: none;
		padding: 0 22px 13px 22px;
		border-bottom: 1px solid var(--greyLight);
	}
}

</style>
<!-- 
//! Top Navigation bar
// 	 Bar at top of screen with logo and account/settings dropdown
// 		Visible on all screen sizes
// 			70px height 
// 			Sticky, floating on top of most things (not modals)
-->

<template>

	<div id="topBar" :class="{'disable': $store.getters['Hold/modalOpen']}">

		<!-- USGS Headers -->
		<div id="requiredHeaders">
			<div id="usgsHeader">
				<img src="@/assets/branding/usgs-tagline.png" title="USGS Logo" alt="USGS Logo"/>
			</div>
		</div>


		
		<!-- Branding - Logo -->
		<div id="branding">
			<button id="logo" @click="navigate('/')" tabindex="0" aria-label="Home">
				<img src="@/assets/branding/wim-horizontal-light.png" title="Logo" alt="Logo" v-if="!$store.getters['Settings/darkMode']"/>
				<img src="@/assets/branding/wim-horizontal-dark.png"  title="Logo" alt="Logo" v-else />
			</button>
		</div>

		<!-- Float center - search bar -->
		<div id="centerNav">

			<!-- Page title -->
			<div id="pageTitle">
				<span v-if="$store.getters['Hold/loading']">Loading...</span>
				<span v-else>{{$store.getters['Hold/pageTitle']}}</span>
			</div>

			<div id="pageNavigation">

				<!-- <a class="nav-link" @click="navigate('/')" aria-label="Home" :class="{'is-active': $route.path == '/' }">
					Home
				</a> -->

			</div>

		</div>

		<!--  
			Settings Nav Floated right
		-->
		<nav id="rightNav" aria-label="Menu - More">

			<!-- Nav for signed-in users -->
			<div class="buttons-nav">

				<!-- Dropdown button -->
				<div class="buttons-nav-button">
					<!-- Hover label to show dropdown -->
					<button class="nav-icon-button" :class="{'active': showAccountPopover}" @click="showAccountPopover = !showAccountPopover" aria-label="Account Dropdown">
						<!-- Toggle icon -->
						<i :class="{'far fa-ellipsis-v': !showAccountPopover, 'fas fa-times': showAccountPopover}"></i>
					</button>

					<!-- Popup on click -->
					<span  @mouseleave="showAccountPopover = false">
						<transition name="collapse">
							<AccountPopover v-if="showAccountPopover"></AccountPopover>
						</transition>
					</span>
				</div>

			</div>
		</nav>

		<!-- Popover Backdrop -->
		<transition name="lightbox">
			<div class="lightbox" id="popoverLightbox" @click="showAccountPopover = false" v-if="showAccountPopover && $store.getters['Device/hasSmallScreen']" v-touch:swipe.self="() => showAccountPopover = false"></div>
		</transition>

	</div>
</template>

<script>
// Components
import AccountPopover from "@/components/ui/TopBar/AccountPopover";

export default {
	name: "TopBar",
	components: {
		AccountPopover,
	},
	mixins: [
	],
	data() {
		return {
			showAccountPopover: false,
		};
	},
	watch:{
		$route (to, from){
			this.showAccountPopover = false;
		},
		// Watch showAccountPopover to lock scroll on mobile
		showAccountPopover () {
			if(this.$store.getters["Device/hasSmallScreen"]){
				if(this.showAccountPopover == true){
					this.$store.dispatch("Hold/SCROLL_LOCK", true);
				}else{
					this.$store.dispatch("Hold/SCROLL_LOCK", false);
				}
			}
		}
	},
	methods: {

		// Toggle Map View
		toggleMap: function(){
			this.$store.dispatch("Map/CHANGE_MAP_DISPLAY", "visible");
		}

	}
};
</script>

<style lang="scss">

#requiredHeaders{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	#usgsHeader{
		display: block;
		width: 100%;
		padding: 10px var(--sidePadding);
		background-color: var(--usgsBlue);
		height: fit-content;

		img{
		background-color: var(--usgsBlue);
			height: 55px;
			width: auto;
		}
	}

}


	// Top nav bar
	// Has logo and hover menu for account/dark mode
	#topBar{
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: var(--requiredTopBarHeight) 15px 0 40px;
		box-sizing: border-box;
		height: var(--topBarHeight);
		position: fixed;
		top: 0px;
		z-index: 2;
		transition: all 0.2s ease;
		background-color: var(--background);

		// Adjust padding and height on smaller screens
		@media (max-width: $screenSM) {
			padding: 0 8px 0px 8px;
		}


		// Logo
		#branding{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: auto;
			position: relative;

			@media (max-width: $screenSM) {
				width: 25%;
			}

			#logo{
				transition: var(--transition);
				margin: 0 15px 0 0;
				padding: 0;
				width: fit-content;
				

				img{
					height: 32px;
					width: auto;
					@media (max-width: $screenSM) {
						height: 32px;
					}
				}

				&:hover{
					cursor: pointer;
				}
			}
		}
	}



	// Center Nav
	// Page title on mobile
	// Nav links on desktop
	#centerNav{
		flex-grow: 3;
		// max-width: 800px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;

		// Page Title - Mobile only
		#pageTitle{
			flex-direction: column;
			justify-content: center;
			text-align: center;
			font-size: 13px;
			font-family: var(--sans);
			font-weight: 700;
			letter-spacing: -0.4px;
			display: none;
			overflow: visible;
			width: 100%;

			span{
				text-overflow: ellipsis;
				display: block;
				width: 88%;
				font-weight: 400;
				margin: 0 auto;
				white-space:nowrap;
				overflow: hidden;
				padding: 4px 0;
			}
			@media (max-width: $screenSM) {
				display: flex;
				padding-top: 2px;
			}
		}

		// Nav links - desktop only
		#pageNavigation{
			display: flex;
			flex-grow: 3;
			box-sizing: boder-box;
			padding-left: 15px;

			@media (max-width: $screenSM) {
				display: none;
			}

			.nav-link{
				display: flex;
				flex-direction: column;
				justify-content: center;
				box-sizing: border-box;
				padding: 20px 24px;
				font-size: 14px;
				font-weight: 600;
				color: var(--text);
				font-family: var(--sans);

				&.is-active{
					color: var(--links);
				}

				&.red{
					color: var(--red);
				}
			}
		}

		// Search Bar
		#navSearchWrapper{
			display: flex;
			height: 100%;
			flex-direction: column;
			justify-content: center;
			flex-grow: 3;
			max-width: 400px;
			width: 100%;
			// position: relative;
			// margin: 0 10px;
			position: absolute;
			right: 70px;

			@media (max-width: $screenSM) {
				top: 1px;
				right: 60px;
			}
			@media (max-width: 600px) {
				max-width: 70vw;
				max-width: calc(100% - 60px);
				right: 50px;
			}

			#navSearchInputWrapper{
				display: flex;
				position: relative;
				
				// Search icon - floats over
				.search-icon{
					left: 0px;
					position: absolute;
					padding-left: 12px;
					font-size: 18px;
					color: var(--text);
					opacity: 0.25;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					box-sizing: border-box;

					@media (max-width: $screenSM) {
						font-size: 16px;
					}
				}

				// Text input
				input{
					width: 100%;
					height: 34px;
					padding-left: 44px;
					font-weight: 500;
					border-color: var(--borderLight);
					font-size: 13px;
					position: relative;
					// background-color: transparent;
					// border: 1px solid var(--border);

					&:hover{
						border-color: var(--border);
					}

					&.searching{
						background-color: white;
						border: 1px solid var(--primary);
						box-shadow: var(--shadow);
					}

				}

				// Clear input button
				button{
					position: absolute;
					right: 0;
					height: 100%;
					padding: 0 15px;
					color: var(--text);
					font-size: 18px;
					display: flex;
					flex-direction: column;
					justify-content: center;

					i{
						transition: 0.1s;
						opacity: 0.35;
						&.fa-times{
							color: var(--red);
							position: relative;
							top: 1px;
						}
					}

					&:hover{
						cursor: pointer;

						i{
							opacity: 1;

						}
					}

				}
			}
			

			// Backdrop/lightbox
			.results-backdrop{
				display: block;
				width: 100%;
				height: 500px;
				position: fixed;
				background-color: var(--greyTransparent);
				width: 100vw;
				height: 100vh;
				top: 0;
				left: 0;
			}
		}
	}

	// settings Nav
	// Contained inside top nav- wanted styling seperatet
	nav#rightNav{
		display: flex;
		box-sizing: border-box;
		height: 100%;
		width: 200px;
		justify-content: flex-end;
		position: relative;

		@media (max-width: $screenSM) {
			width: 25%;
		}

		// Username with dropdown
		// For signed in users
		.buttons-nav{
			display: flex;
			// flex-direction: column;
			// justify-content: center;

			.buttons-nav-button{
				position: relative;
				box-sizing: border-box;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				z-index: 10;
				margin-left: 12px;

				@media (max-width: $screenSM) {
					margin-left: 5px;
				}

				&:first-child{
					margin-left: 0;
				}

				// Text and icon
				.nav-icon-button{
					color: var(--text);
					box-sizing: border-box;
					display: flex;
					font-weight: 500;
					flex-direction: column;
					justify-content: center;
					user-select: none;
					padding: 0 0 0 0;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					background-color: var(--background);
					text-align: center;
					font-size: 20px;

					@media (max-width: $screenSM) {
						width: 38px;
						height: 38px;
						font-size: 20px;
						background-color: transparent;
						border: none;
					}

					&.user-photo-button{
						background-size: cover;
						background-position: center center;
					}

					// Icon
					i{
						margin: 0 auto;
						padding-top: 2px;
					}
					// i{
					// 	display: inline-flex;
					// 	flex-direction: column;
					// 	height: 100%;
					// 	justify-content: center;
					// 	font-size: 18px;
					// 	width: 25px;
					// 	text-align: center;
					// 	transition: var(--transition);
					// 	position: relative;
					// 	top: 0;
					// 	margin: 0 auto;
					// }

					// Active icon press
					&:active{
						transform: scale(0.94);

						&.fa-times-circle{
							transform: scale(1.1);
						}
					}

					// Actively open
					&.active{
						background-color: var(--textLight) !important;
						background-blend-mode: multiply;
						i{
							color: var(--background) !important;
						}
					}


					// Hover dropdown
					&:hover{
						cursor: pointer;
						i{
							color: var(--primary);
						}
					}

				}


			}
		}
	}

	#popoverLightbox{
		backdrop-filter: none;
		z-index: 5;
	}
	// Mozilla doesn't support backdrop-filter, set to white instead
	@-moz-document url-prefix() {
		#topBar {
			background: var(--background) !important;
		}
	}



	// Color nav links for themes
	.app-wrapper.theme-green #pageNavigation .nav-link.is-active{color: var(--greenDark) !important;}
	.app-wrapper.theme-red #pageNavigation .nav-link.is-active{color: var(--red) !important;}
	.app-wrapper.theme-yellow #pageNavigation .nav-link.is-active{color: var(--yellowDark) !important;}
	.app-wrapper.theme-orange #pageNavigation .nav-link.is-active{color: var(--orange) !important;}
	.app-wrapper.theme-pink #pageNavigation .nav-link.is-active{color: var(--pink) !important;}
	.app-wrapper.theme-purple #pageNavigation .nav-link.is-active{color: var(--purple) !important;}



</style>
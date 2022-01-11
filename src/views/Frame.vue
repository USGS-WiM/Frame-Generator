<!--
Frame.vue

Frame with conditional rendering to generate the HTML to download
-->

<template>
	<div ref="templateBody" id="templateBody">

		<div v-if="$route.name == 'frame'" id="gnControlBanner">
			
			<!-- Test Mode -->
			<div class="flex">
				<label for="testingToggle" class="ptop-xs">
					Test Mode
				</label>
				<div class="mleft-sm">
					<input id="testingToggle" type="checkbox" class="toggle on-off small" v-model="frame.test_mode"/>
				</div>
			</div>

			<us-form-combobox
				name="SelectTheme"
				:options="['USGS', 'NPS', 'GeoPlatform', 'Blank']"
				v-model="frame.theme"
			/>

		</div>


		<div id="gnWrapper">

			<!-- Test Banner -->
			<div id="gnTest" v-if="frame.test_mode">
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
				<span>TEST</span>
			</div>


			<!-- Banner/Header -->
			<div id="gnHeader" :class="frame.theme" v-if="!frame.esri_header && frame.theme != 'Blank'">

				<a :href="templates[frame.theme].url" target="_blank" :alt="templates[frame.theme].link_alt" :title="templates[frame.theme].link_title">
					<img id="gnLogo" :class="frame.theme" :src="images[frame.theme].logo"/>
				</a>
				<!-- Text Title -->
				<span id="gnHeaderTitle" v-if="templates[frame.theme].header_title">{{templates[frame.theme].header_title}}</span>
			</div>




			<iframe :src="frame.url"></iframe>

			<!-- Footer -->
			<div id="gnFooter" :class="frame.theme" v-if="frame.theme != 'Blank'">
				<span v-for="(link, key) in templates[frame.theme].footerLinks" :key="key" :class="{'block' : link.gap }">
					<a :href="link.url" target="_blank" v-if="link.url">
						{{link.title}}
					</a>
				</span>
			</div>


			<!-- Frame Styles -->
			<v-style>

				body,html{
					padding: 0;
					overflow: hidden;
					margin: 0;
					font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					scrollbar-width: none;
				}
				body::-webkit-scrollbar,
				html::-webkit-scrollbar{
					width: 0px;
					display: none;
				}
				body::-webkit-scrollbar-thumb,
				html::-webkit-scrollbar-thumb{
					display: none;
					width: 0px;
				}
				<!-- App Wrapper -->
				#gnWrapper{
					display: flex;
					flex-direction: column;
					overflow: hidden;
					width: 100%;
					height: 100%;
				}
				<!-- Test Banner -->
				#gnTest{
					background-color: #face00;
					width: 100%;
					font-size: 18px;
					font-weight: bolder;
					display: flex;
					justify-content: space-around;
					padding: 5px;
					font-style: italic;
				}
				<!-- Header -->
				#gnHeader{
					box-sizing: border-box;
					padding: 6px 25px 6px 25px;
					display: flex;
					border-bottom: 2px solid {{templates[frame.theme].borderColor}};
					border-top: 2px solid {{templates[frame.theme].borderColor}};
					background-color: {{templates[frame.theme].backgroundColor}};
				}
				#gnLogo{
					display: block;
					width: auto;
				}
				#gnLogo.USGS{
					height: 50px;
				}
				#gnLogo.GeoPlatform{
					height: 32px;
				}
				#gnLogo.NPS{
					height: 30px;
				}
				#gnHeaderTitle{
					color: white;
					font-size: 16px;
					display: flex;
					letter-spacing: 0.5px;
					flex-direction: column;
					justify-content: center;
					line-height: 16px;
					padding-left: 10px;
					font-weight: 700;
					padding-bottom: 2px;
				}
				<!-- iFrame -->
				iframe{
					height: 100%;
					width: 100%;
					flex-grow: 3;
					background-color: black;
				}
					iframe body{
						overflow-x: hidden;
					}
				#gnFooter{
					box-sizing: border-box;
					padding: 2px 25px 4px 25px;
					color: white;
					border-bottom: 2px solid {{templates[frame.theme].borderColor}};
					border-top: 2px solid {{templates[frame.theme].borderColor}};
					background-color: {{templates[frame.theme].backgroundColor}};
				}
					#gnFooter .block{
						display: block;
					}
					#gnFooter a{
						font-size: 12px;
						color: white;
						text-decoration: none;
						padding-right: 10px;
						display: inline-block;
					}
					#gnFooter a:focus,
					#gnFooter a:hover{
						text-decoration: underline;
					}
			</v-style>


		</div>
	</div>
</template>

<script>
const templateDefinitions = require("@/definitions/templates.js");
const imageDefinitions = require("@/definitions/images_base64.js");

export default {
	name: "frame",

	components: {
	},

	mixins: [
	],

	props: [
		"data",
		"getHTML",
	],

	data() {
		return {

			templates: templateDefinitions.all,
			images: imageDefinitions.all,

			// Default
			default: {
				url: "https://storymaps.arcgis.com/stories/3705e338dce2422eaf60b3f85a9197f6",
				title: "Demo",
				theme: "USGS",

			 	date: this.$date().format("YYYY-MM-DD"),
				person: "Demo Person",
				email: "Demoemail@Email.com",

				meta_description: "Demo Description",
				analytics_id: "AnalyticsID",

				// Other Options
				esri_header: false,
				test_mode: false,
			}
		};
	},

	computed: {
		frame(){
			if(this.data){
				return this.data;
			}else{
				return this.default;
			}
		}

	},

	watch: {
		getHTML(){
			var string = this.$refs.templateBody.innerHTML;
			this.$emit("export", string);
		}
	},
	
	mounted() {
	},
	created: function () {
	},

	beforeDestroy(){
	},
	
	methods: {

	}
};


// If Default header, remove header bars, append ?header to storymap url
		// if(useDefaultHeader){
		// 	console.log("Use Default Header");
		// 	$("div[id=gnHeader]").remove();

		// 	// Append ?header to the URL if it doesnt exist
		// 	if(!storymapURL.endsWith("?header")){
		// 		storymapURL = storymapURL + "?header"
		// 	}
		// }else{
		// 	console.log("Template Header");
		// }

</script>


<style lang="scss">

	#templateBody{
		height: 100%;
	}
	#gnControlBanner{
		display: flex;
		justify-content: center;
		gap: 5%;
		box-sizing: border-box;
		padding: 15px 15px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: var(--requiredTopBarHeight);
		z-index: 50;
		background-color: var(--grey);
	}

</style>
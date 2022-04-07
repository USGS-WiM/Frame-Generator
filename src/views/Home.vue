<!--
Home.vue
-->

<template>
	<div>

		<div class="ptop-lg">
			

			<us-form>

				<div class="padded max-width-large margin-auto">

					<!-- Form step indicator -->
					<!-- <us-step-indicator :step="currentStep" :steps="allSteps" :show-labels="true" :show-step-numbers="true"/> -->
					<us-step-indicator :step="currentStep" :steps="allSteps" :show-step-numbers="true" :show-labels="true"/>

					<!-- Next and back buttons -->
					<div class="mbottom-lg" v-if="currentStep > 0">
						<button class="button mright-xs grey" @click="currentStep--; scrollUp();" :disabled="currentStep <= 0">
							<i class="far fa-angle-left"></i>
							<span>Back</span>
						</button>
						<button class="button" @click="currentStep++; scrollUp();" v-if="currentStep != allSteps.length - 1">
							<span v-if="currentStep == 0">Begin</span>
							<span v-else-if="currentStep < allSteps.length - 1">Next: {{allSteps[currentStep + 1]}}</span>
							<span v-else>Next</span>
							<i class="far fa-angle-right"></i>
						</button>
					</div>

				</div>

				{{currentStep}}


				<!-- Steps -->
				<transition-group name="list">

					<!-- Intro, Info -->
					<div v-if="currentStep == 0" key="0" class="padded max-width-large margin-auto">

						<h1>
							Frame Generator
						</h1>

						<p class="usa-prose">
							This generator takes your StoryMap, Experience, Tableau, or other website url, and puts it into an iFrame between a header and footer. The header will have the logo of the organization you choose as your template, and the footer will include the required links - Privacy Policy, Disciaimer, FOIA, etc.
						</p>
						<p class="usa-prose mbottom-lg">
							It generates a single index.html file with no dependencies that can be uploaded to a web server.
						</p>

					</div>


					<!-- Step One -->
					<!-- Site Details -->
					<div v-if="currentStep == 1" key="1">

						<div class="padded max-width-large margin-auto">

							<fieldset class="mtop-md">
								<legend><h3>{{allSteps[1]}}</h3></legend>

								<!-- URL -->
								<us-form-group 
									label="Frame URL" 
									help-text="The direct embeddable URL to the StoryMap, Experience, Tableau, or other URL you want in a frame." 
									:rules="{required:true}"
									error="">

									<us-form-input name="FrameURL" v-model="form.raw_url" placeholder="https://usgs.maps.arcgis.com/apps/xxxx/index.html?appid=xxxxxxxxxxxxxxx" />

								</us-form-group>
								<button class="button small mtop-xs" @click="updatePreview()" :disabled="!form.raw_url || !urlChange">
									<i class="far fa-history"></i>
									<span>Load URL in Preview</span>
								</button>

								<!-- Theme -->
								<us-form-group label="Header & Footer Theme">
									<us-form-combobox
										name="SelectTheme"
										:options="['USGS', 'NPS', 'GeoPlatform', 'Blank']"
										v-model="form.theme"
									/>
								</us-form-group>

								<div class="flex flex-end">
								<router-link to="/frame" aria-label="Preview Themes" class="button transparent tiny mtop-sm">
									<i class="far fa-eye"/>
									<span>Preview All Themes</span>
								</router-link>
								</div>


								<!-- ESRI Header toggle - only shows if ESRI Url detected -->
								<div class="field mtop-md" v-if="form.url.includes('arcgis')">
									<div class="flex">
										<label for="esriHeader">
											Use ESRI Header
											<small class="block text-fade">This will hide our header and use ESRI's instead.</small>
										</label>
										<div class="mleft-md">
											<input id="esriHeader" type="checkbox" class="toggle yes-no" v-model="form.esri_header"/>
										</div>
									</div>
								</div>

								<!-- Test Mode -->
								<div class="field mtop-md">
									<div class="flex">
										<label for="testingToggle">
											Test Mode
											<small class="block text-fade">This will add a banner to clearly indicate it's in testing.</small>
										</label>
										<div class="mleft-md">
											<input id="testingToggle" type="checkbox" class="toggle on-off" v-model="form.test_mode"/>
										</div>
									</div>
								</div>
								

							</fieldset>

						</div>

						<!-- Preview -->
						<h3 class="mtop-lg align-center margin-auto">Preview</h3>

						<div id="framePreview">
							<i class="far fa-dot-circle" id="webcam"></i>
							<Frame
								:data="form"
							>
							</Frame>

					
						</div>

					</div>


					<!-- Step Two -->
					<div v-if="currentStep == 2" key="2" class="padded max-width-large margin-auto">

						<fieldset class="mtop-lg">
							<legend><h3>Site Meta Details</h3></legend>


							<!-- Title -->
							<us-form-group 
								label="Browser / Tab Title" 
								help-text="This is the name that appears on the browser tab" 
								error="">

								<us-form-input name="FrameTitle" v-model="form.title" />

							</us-form-group>

							<!-- Meta Description -->
							<us-form-group 
								label="Meta Description" 
								help-text="This is the short description displayed on link previews." 
								error="">

								<textarea name="MetaDescription" type="date" v-model="form.meta_description"></textarea>

							</us-form-group>


							<!-- Date -->
							<us-form-group 
								label="Date Published" 
								help-text="This date is added to the website as a meta tag." 
								error="">

								<us-form-input name="FormDate" v-model="form.date" type="date" />

							</us-form-group>


							<!-- Author -->
							<us-form-group 
								label="Author / Point of Contact Name" 
								help-text="The name of the person responsible for this content." 
								error="">

								<us-form-input name="FormPerson" v-model="form.person" type="text" />

							</us-form-group>

							<!-- Contact -->
							<us-form-group 
								label="Email Address" 
								help-text="An email address for the point of contact." 
								error="">

								<us-form-input name="FormEmail" v-model="form.email" type="email" />

							</us-form-group>


							<!-- Optional -->
							<!-- Analytics ID -->
							<us-form-group 
								label="Google Analytics ID" 
								help-text="Optional - If you'd like to track visits for this site, add your Google Analytics tracking ID here. Each page view will be tracked with the page title." 
								error="">

								<us-form-input name="AnalyticsID" placeholder="UA-XXXXXXXX-X" v-model="form.analytics_id" />

							</us-form-group>




							<!-- Previews -->
							<h3 class="mtop-lg">Meta Preview</h3>

							<!-- Google -->
							<h4 class="mtop-sm">Google Search</h4>
							<div id="googlePreview">
								<div id="googleURL">https://geonarrative.usgs.gov/</div>
								<div id="googleTitle">{{form.title || "Your Frame Site"}}</div>
								<div id="googleDescription">{{form.meta_description || "Proident sunt tempor ut dolor veniam id elit incididunt adipisicing magna in occaecat incididunt qui quis eiusmod fugiat cillum"}}</div>
							</div>


							<!-- Microsoft Teams -->
							<h4 class="mtop-sm">Microsoft Teams</h4>
							<div id="teamsPreview">
								<div id="teamsTitle">{{form.title || "Your Frame Site"}}</div>
								<div id="teamsDescription">{{form.meta_description || "Proident sunt tempor ut dolor veniam id elit incididunt adipisicing magna in occaecat incididunt qui quis eiusmod fugiat cillum"}}</div>
								<div id="teamsURL">https://geonarrative.usgs.gov/</div>
							</div>

						</fieldset>

					</div>


					<!-- Step Three -->
					<!-- Download -->
					<div v-if="currentStep == 3" key="3">

						<div class="mtop-md padded max-width-large margin-auto">

					
							
							<h2 v-if="formValid">Your frame is ready.</h2>
							<h2 v-else>Download your frame.</h2>

							<p class="usa-prose">
								Once you click download, a single file (index.html) should download to your device.
							</p>
							<p class="usa-prose">
								You can open the file in your browser (right-click > Open with Chrome) to make sure everything looks good, then simply upload it to a server at the location or path you want it to be viewable at.
							</p>
							<p class="usa-prose">
								If the embedded website is not loading, it's most likely an issue with the URL, or the permissions on ArcGIS or other server.							
							</p>

							<!-- Invalid Form Warning -->
							<Callout
								icon="far fa-exclamation-circle"
								class="mbottom-sm mtop-md max-width-small"
								v-if="!formValid"
								color="red">
								<h4>You have a few things to complete</h4>
								<ul>
									<li v-if="form.url.length < 10">Enter a valid URL</li>
									<li v-if="!form.title">Enter a title</li>
									<li v-if="!form.theme">Select a frame theme</li>
									<li v-if="!form.person">Add an Author/Point of Contact</li>
									<li v-if="!form.email">Add a valid email address</li>
								</ul>

							</Callout>

							<!-- Submit -->
							<button class="button mright-sm mtop-md big" @click="validateForm" variant="primary" :disabled="!formValid">
								Download Frame
							</button>

							<us-tag variant="danger" v-if="!formValid">Form - Invalid</us-tag>
							<us-tag variant="success" v-else-if="formValid">Form -Valid</us-tag>

	
							<Frame
								id="hiddenFrame"
								aria-hidden="true"
								:getHTML="getFrameHTML"
								@export="function(data){frameOutput = data;}"
								:data="form"
							>
							</Frame>


						</div>

					</div>


				</transition-group>
				
				<!-- Next and back buttons -->
				<div class="mtop-lg padded max-width-large margin-auto">
					<button class="button mright-xs grey" @click="currentStep--; scrollUp()" :disabled="currentStep <= 0" v-if="currentStep > 0">
						<i class="far fa-angle-left"></i>
						<span>Back</span>
					</button>
					<button class="button" @click="currentStep++; scrollUp();" v-if="currentStep != allSteps.length - 1">
						<span v-if="currentStep == 0">Begin</span>
						<span v-else-if="currentStep < allSteps.length - 1">Next: {{allSteps[currentStep + 1]}}</span>
						<span v-else>Next</span>
						<i class="far fa-angle-right"></i>
					</button>
				</div>

			</us-form>

			<!-- Spacer -->
			<div class="mbottom-lg"></div>


			<!-- Download Area -->
			<div ref="templateHead" id="templateHead">
				<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
				<title>{{form.title}}</title>
				<meta name="author" :content="form.person + ', ' + form.email">
				<meta name="date" :content="form.date">
				<meta name="description" :content="form.meta_description">
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
				<!-- Favicon -->
				<link rel="shortcut icon" :href="images[form.theme].favicon ? images[form.theme].favicon : images[form.theme].logo"/>
			
				<!-- Test mode no index -->
				<meta name="robots" content="noindex" v-if="form.test_mode">

				<v-script v-if="form.analytics_id">
					(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");
					ga("create", "{{form.analytics_id}}", "auto");
					ga("send", "pageview", "{{form.title}}")'
				</v-script>
			</div>
			


		</div>


	</div>
</template>

<script>
import Callout from "@/components/ui/Common/Callout";
import Frame from "@/views/Frame";
const imageDefinitions = require("@/definitions/images_base64.js");

export default {
	name: "home",

	components: {
		Callout,
		Frame,
	},
	

	mixins: [
	],

	data() {
		return {
			today: new Date(),

			images: imageDefinitions.all,

			currentStep: 0,
			allSteps: ["Introduction", "Frame Content & Preview", "Site Meta Details", "Download"],
			
			// URL has changed
			urlChange: false,

			// Form Data
			form: {
				raw_url: "",
				url: "",
				title: "",
				theme: "USGS",

			 	date: this.$date().format("YYYY-MM-DD"),
				person: "",
				email: "",

				meta_description: "",
				analytics_id: "",

				// Other Options
				esri_header: false,
				test_mode: false,
			},

			// Generated HTML output to download
			getFrameHTML: false,
			frameOutput: "",
			generatedOutput: "",

		};

	},

	computed: {

		formValid: function(){
			if(
				this.form.title &&
				this.form.raw_url && this.form.raw_url.length > 10
			){
				return true;
			}
			else{
				return false;
			}
		},

	},

	watch: {
		"form.raw_url": function(){
			this.urlChange = true;
		}
	},

	mounted() {
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "Frame Generator");
	},
	created: function () {
	},

	beforeDestroy(){
	},
	
	methods: {

		// Validates URL, updates preview
		updatePreview: function(){
			let _this = this;
			this.$store.dispatch("Hold/IS_LOADING");
			this.urlChange = false;

			setTimeout(() => {
				_this.$store.dispatch("Hold/STOP_LOAD");
				_this.form.url = this.form.raw_url;
      		}, 1000);
		},

		// Validate form, get frame html
		validateForm: function(){
			let _this = this;

			this.$store.dispatch("Hold/IS_LOADING");
			this.hello("Preparing", "far fa-ellipsis-h", "yellow");
			this.getFrameHTML = !this.getFrameHTML;

			if(this.urlChange){
				this.updatePreview();
			}

			setTimeout(() => {
				_this.downloadFile();
      		}, 1000);
		},

		// Download
		downloadFile: function(){
			let _this = this;


			var destroyClickedElement = function(event) {
				// remove the link from the DOM
				document.body.removeChild(event.target);
			};

            // Output to Textarea first
			this.generatedOutput = "<html lang='en'><head>";
			// Add Head
			this.generatedOutput = this.generatedOutput + 
				this.$refs.templateHead.innerHTML;
			// Close Head, open body
			this.generatedOutput = this.generatedOutput + 
				"</head><body>";
			// Add Body
			this.generatedOutput = this.generatedOutput + 
				this.frameOutput;
			// Close body, html
			this.generatedOutput = this.generatedOutput + 
				"</body></html>";

			// Take Textarea output and write to file.
            var textToWrite = this.generatedOutput;
            var textFileAsBlob = new Blob([textToWrite], { type: "text/html" });
            var fileNameToSaveAs = "index.html";
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download";
            window.URL = window.URL || window.webkitURL;
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);

			setTimeout(() => {
            	downloadLink.click();
				_this.hello("File downloaded", "far fa-check", "green");
				_this.$store.dispatch("Hold/STOP_LOAD");
      		}, 500);

		},



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


#framePreview{
	width: 96%;
	max-width: 1400px;
	min-height: fit-content;
	box-sizing: border-box;
	border: 1px solid var(--border);
	margin: 0 auto;
	transform: scale(0.8);
	box-sizing: border-box;
	padding: 40px 15px 30px 15px;
	border-radius: 10px;
	display: block;
	position: relative;

	#webcam{
		font-size: 20px;
		margin: 10px auto;
		text-align: center;
		width: 100%;
		position: absolute;
		top: 0;
	}

	iframe{
		min-height: 500px;
	}
}


// Link Previews
#googlePreview{
	display: block;
	max-width: 600px;
	margin: 20px auto;
	font-family: var(--sans);

	#googleURL{
		font-size: 14px;
		color: #202124;
	}
	#googleTitle{
		font-size: 20px;
		line-height: 1.3;
		font-weight: normal;
		padding: 5px 0;
		color: #1a0dab;
	}
	#googleDescription{
		font-size: 14px;
		line-height: 1.58;
		color: var(--text);
		color: #4d5156;
	}

}
// Teams
#teamsPreview{
	display: block;
	max-width: 600px;
	margin: 20px auto;
	font-family: var(--sans);
	background-color: var(--greyLight);
	box-sizing: border-box;
	padding: 15px;
	position: relative;

	&:after{
		font-family: var(--fontAwesome);
		content: "\f00d";
		position: absolute;
		top: 5px;
		right: 5px;
		font-size: 16px;
		font-weight: 400;
		color: var(--textLight);
	}

	#teamsTitle{
		font-size: 15px;
		line-height: 1.3;
		padding: 0 0 5px 0;
		font-weight: normal;
		color: #2D2C2B;
	}
	#teamsDescription{
		font-size: 13px;
		line-height: 1.38;
		color: var(--text);
		font-weight: 300;
		letter-spacing: 0.2px;
		color: #202124;
		margin-bottom: 25px;
	}

	#teamsURL{
		font-size: 14px;
		color: #202124;
		opacity: 0.8;
	}

}


#hiddenFrame,
#templateHead{
	height: 0;
	width: 0;
	visibility: hidden;
	overflow: hidden;
	pointer-events: none;
}

</style>
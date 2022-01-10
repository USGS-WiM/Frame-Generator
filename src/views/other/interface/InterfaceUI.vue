<!--
//!  Interface UI
	  UI Elements
-->

<template>
	<div>

		<!-- Callouts -->
		<div>

			<h3 class="mbottom-sm">
				Callout
				<!-- <small>Callout component</small> -->
			</h3>


			<!-- Blue Callout -->
			<Callout
				icon="far fa-hat-wizard"
				class="mbottom-sm max-width-small"
				color="">
				<span>Regular Callout.</span>
			</Callout>

			<!-- Tiny Callout -->
			<Callout
				icon="far fa-money-bill-alt"
				class="mbottom-sm max-width-small"
				size="small">
				<span>Small Callout.</span>
			</Callout>
			<!-- Giant Callout -->
			<Callout
				icon="far fa-shield-cross"
				class="mbottom-sm max-width-small"
				size="big"
				color="green">
				<span>Big Callout.</span>
			</Callout>
			<!-- Notice Callout -->
			<Callout
				icon="far fa-taxi"
				class="mbottom-sm max-width-small"
				size="giant"
				color="purple">
				<span>Giant Callout.</span>
			</Callout>


			<Toggle title="Component Code" icon="far fa-code" class="max-width" size="small">
					<code><pre>
import Callout from "@/components/ui/Common/Callout";


&lt;Callout
icon=&quot;far fa-star&quot;&gt;

	Callout Body - anything goes here.

&lt;/Callout&gt;

// Props:
// color: [default/primary, red, orange, green, pink, purple, yellow, grey]
// size: [default/blank, small, big, giant]
// icon: font awesome icon string
					</pre></code>
			</Toggle>

		</div>




		<h3 class="mtop-xl">
			Badges
		</h3>

		<!-- Badges -->
		<div class="flex flex-wrap mtop-sm">
			<!-- Blue -->
			<div>
				<div class="badge blue mbottom-xs mright-xs">
					<i class="far fa-tint"></i>
					<span>Blue Badge</span>
				</div>
			</div>
			<!-- Reverse -->
			<div>
				<div class="badge reverse mbottom-xs mright-xs">
					<span>Reverse Badge</span>
					<i class="far fa-sync-alt"></i>
				</div>
			</div>
			<!-- Red -->
			<div>
				<div class="badge red mbottom-xs mright-xs">
					<i class="far fa-fill"></i>
					<span>Red Badge</span>
				</div>
			</div>
			<!-- Small -->
			<div>
				<div class="badge small green mbottom-xs mright-xs">
					<i class="far fa-car"></i>
					<span>Small Badge</span>
				</div>
			</div>
		</div>

		<Toggle title="HTML Code" icon="far fa-code" class="max-width" size="small">
			<code><pre>
&lt;div class="badge"&gt;
  &lt;i class="far fa-star"&gt;&lt;&#47;i&gt;
  &lt;span&gt;Badge&lt;&#47;span&gt;
&lt;&#47;div&gt;

// Colors: default/primary, red, orange, yellow, green, blue, pink, purple, grey, black, transparent,
			</pre></code>
		</Toggle>




		<h3 class="mtop-xl mbottom-sm">
			Toast & Alerts
			<small>Get the user's attention</small>
		</h3>

		<div class="flex gap flex-wrap">
			<div class="mbottom-md">
				<div class="input-group mright-sm mbottom-xs max-width-small">
					<label class="input-group-label" for="toastTitle">Toast Title</label>
					<input type="text" class="small" id="toastTitle" maxlength="15" v-model="testToast.title"/>
				</div>
				<div class="input-group mright-sm mbottom-xs max-width-small">
					<label class="input-group-label" for="toastBody">Toast Body</label>
					<input type="text" class="small" id="toastBody" maxlength="155" v-model="testToast.body"/>
				</div>
				<div class="input-group mright-sm mbottom-xs max-width-small">
					<label class="input-group-label" for="toastIcon">Toast Icon</label>
					<input type="text" class="small" id="toastIcon" maxlength="100" v-model="testToast.icon"/>
				</div>
				<div class="input-group max-width-small">
					<label class="input-group-label" for="toastColor">Color</label>
					<div class="aselect">
						<select v-model="testToast.color" class="small" id="toastColor">
							<option value="">Default (Blue)</option>
							<option value="red">Red</option>
							<option value="green">Green</option>
							<option value="yellow">Yellow</option>
							<option value="orange">Orange</option>
							<option value="grey">Grey</option>
						</select>
					</div>
				</div>
				<!-- Show toast -->
				<button class="button small transparent mtop-sm" @click="toast(testToast.title, testToast.body, testToast.color, testToast.icon);">
					<i class="far fa-bread-slice"></i>
					<span>Show Toast!</span>
				</button>
				<code class="block mtop-xs mbottom-sm">
					<b>Call:</b> toast('Title', 'Toast Body.', 'color', 'icon-string');
				</code>
			</div>


	
			<!-- Hello Alert -->
			<div>
				<div class="input-group mright-sm mbottom-xs max-width-small">
					<label class="input-group-label" for="alertMessage">Alert Message</label>
					<input type="text" class="small" id="alertMessage" maxlength="15" v-model="testHello.message"/>
				</div>
				<div class="input-group mright-sm mbottom-xs max-width-small">
					<label class="input-group-label" for="alertIcon">Alert Icon</label>
					<input type="text" class="small" id="alertIcon" maxlength="100" v-model="testHello.icon"/>
				</div>
				<div class="input-group max-width-small">
					<label class="input-group-label" for="toastColor">Color</label>
					<!-- <input type="text" class="small" id="toastIcon" maxlength="100" v-model="testToast.icon"/> -->
					<div class="aselect">
						<select v-model="testHello.color" class="small" id="toastColor">
							<option value="">Default (Yellow)</option>
							<option value="red">Red</option>
							<option value="green">Green</option>
							<option value="blue">Blue</option>
							<option value="orange">Orange</option>
							<option value="grey">Grey</option>
						</select>
					</div>
				</div>
				<!-- Show Alert -->
				<button class="button small transparent mtop-sm" @click="hello(testHello.message, testHello.icon, testHello.color);">
					<i class="far fa-comment-exclamation"></i>
					<span>Show Alert!</span>
				</button>

				<code class="mtop-xs mbottom-sm block">
					<b>call:</b> hello('Message', 'icon-string', 'color');
				</code>
			</div>

		</div>



		<h3 class="mtop-lg mbottom-sm">
			Cards
			<small>Also click the buttons to view loaders</small>
		</h3>
		<div class="card max-width-small">
			<p>
				This is a simple card wrapper to nest and organize things.
			</p>

			<!-- Card buttons -->
			<div class="card-buttons">
				<!-- Left button -->
				<button class="button small transparent" @click="showDataLoader()">
					<i class="far fa-undo"></i>
					<span>Show Data Loader</span>
				</button>
				<!-- Right button -->
				<button class="button small transparent" @click="showPageLoader()">
					<i class="far fa-spinner"></i>
					<span>Show Page Loader</span>
				</button>
			</div>
		</div>

		<div class="well max-width-small red mtop-md">
			<h5 class="mbottom-xxs">Wells</h5>
			<p>
				Wells are similar to cards or callouts, but simpler. Just a colored background and border around text (or anything else). Add class <code>.well</code> and the color you'd like to a div.
			</p>
		</div>



		<h3 class="mtop-xl mbottom-sm">
			Data & Tables
		</h3>

		<h5 class="mbottom-sm">Simple Table</h5>
		<!-- Simple data table -->
		<div class="max-width-small">
			<div class="simple-table small fill-width">
				<div class="st-row st-header-row">
					<div class="st-30">Table</div>
					<div class="st-30">Header</div>
					<div class="st-40">Row</div>
				</div>
				<div class="st-row">
					<div class="st-30">Now</div>
					<div class="st-30">The</div>
					<div class="st-40">Body</div>
				</div>
				<div class="st-row">
					<div class="st-30">Cool</div>
					<div class="st-30">Another</div>
					<div class="st-40">Row</div>
				</div>
			</div>
		</div>


		<h5 class="mbottom-sm mtop-lg">BreadCrumbs</h5>
		<!-- Breadcrumbs -->
		<div class="breadcrumbs">
			<div class="crumb">
				<span>Breadcrumb</span>
			</div>
			<div class="crumb">
				<span>another</span>
			</div>
			<div class="crumb">
				<span>wow</span>
			</div>
		</div>


		<!-- Spacer -->
		<div class="mbottom-xl"></div>


	</div>
</template>

<script>
// Components
import Toggle from "@/components/ui/Common/Toggle";
import Callout from "@/components/ui/Common/Callout";

export default {
  	name: "InterfaceUI",
  	components: {
		  Toggle,
		  Callout,
	},
	mixins: [
	],
	data() {
		return{
			// Hold/Toggle
			hold: {
				selectedColor: "red",
			},

			testToast:{
				title: "Toast!",
				body: "Click the button to show a toast message",
				color: "",
				icon: "far fa-bread-slice",
			},
			testHello:{
				message: "Little Message",
				color: "",
				icon: "far fa-smile",
			},
		};
	},
	created: function () {
	},
	mounted(){
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "UI Elements");
	},
	methods: {
		// Show then hide data loader
		showDataLoader: function(){
			let _this = this;
			_this.$store.dispatch("Hold/IS_LOADING", "data");
			setTimeout(function(){
				_this.$store.dispatch("Hold/STOP_LOAD");
			}, 4000);
		},
		// Show then hide page loader
		showPageLoader: function(){
			let _this = this;
			_this.$store.dispatch("Hold/IS_LOADING", "page");
			setTimeout(function(){
				_this.$store.dispatch("Hold/STOP_LOAD");
			}, 4000);
		},
	}
};
</script>

<style lang="scss">
	// 
</style>
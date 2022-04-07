<!--
//! App.vue
// Main app component with top bar, router views
// -->

<template>

	<!-- Set classes for different preferences -->
	<div id="app">


		<transition name="load">

			<!-- App wrapper only shown if page mounted -->
			<main class="app-wrapper" v-if="pageMounted">
			
				<!-- Loaders -->
				<transition-group name="load">
					<!-- Data loading -->
					<div id="dataLoading" key="1" v-if="$store.getters['Hold/loading'] == 'data'"><div id="loaderElement"></div></div>
				</transition-group>


				<!-- All page content contained within main -->

				
				<!-- Top bar component -->
				<TopBar v-if="$route.name != 'frame'"></TopBar>


				<!-- Center/Main Content -->
				<div class="body-content" id="mainScrollView">
					<transition name="page" mode="out-in">
						<router-view/>
					</transition>
				</div>

				<footer id="main">
					Created by <a href="https://wim.usgs.gov" target="_blank">WIM</a> at the USGS. 
					Open Source on <a href="https://github.com/USGS-WiM/Frame-Generator" target="_blank">GitHub</a>
					<button aria-label="Toggle Dark" @click="darkMode = !darkMode">
						<i v-bind:class="{ 'far fa-lightbulb-slash': !darkMode, 'far fa-lightbulb-on': darkMode }"></i>
						<span v-if="!darkMode">Dark Mode</span>
						<span v-else>Light Mode</span>
					</button>
				</footer>
				<footer id="required">
					<span v-for="(link, key) in templates['USGS'].footerLinks" :key="key" :class="{'block' : link.gap }">
						<a :href="link.url" target="_blank" v-if="link.url">
							{{link.title}}
						</a>
					</span>
				</footer>



				<!-- Toast Component -->
				<Toast ref="toastComponent"></Toast>

				<!-- Alert Component -->
				<Alert ref="alertComponent"></Alert>

				<!-- Confirm Leave Component -->
				<ConfirmLeave ref="confirmLeaveComponent"></ConfirmLeave>


			</main>

		</transition>

	</div>
</template>


<script>
// Components
import TopBar from "@/components/ui/TopBar/TopBar";
import Alert from "@/components/ui/Common/Alert";
import Toast from "@/components/ui/Common/Toast";
import ConfirmLeave from "@/components/ui/Modals/ConfirmLeave";
const templateDefinitions = require("@/definitions/templates.js");

export default {
	name: "app",
	mixins: [
	],
	components: {
		Alert,
		Toast,
		TopBar,
		ConfirmLeave,
	},
	data() {
		return {
			pageMounted: false,
			templates: templateDefinitions.all,
		};
	},
	created: function () {
	},
	computed: {
		darkMode: {
			get() {
				return this.$store.getters["Settings/darkMode"];
			},
			set(value) {
				this.$store.dispatch("Settings/TOGGLE_DARK_MODE", value);
			},
		}
	},
	watch: {
	},
	mounted() {
		let _this = this;
		_this.pageMounted = true;
	},
	beforeDestroy() { 
	},
	methods: {

	}
};
</script>

<style lang="scss">

	// Data Loading
	#dataLoading{
		display: block;
		position: fixed;
		top: 0;
		left: -5vw;
		width: 110vw;
		height: 5px;
		z-index: 10000;

		#loaderElement{
			display: block;
			position: absolute;
			left: 0;
			height: 100%;
			width: 0px;
			background-color: var(--yellow);
			margin: 0 auto;
			animation: dataLoader 1.8s ease-in-out 0s infinite normal;
		}
	}
	@keyframes dataLoader {
		0.0%{
			width: 0px;
			left: 0%;
		}
		40%{
			width: 60vw;
		}
		60%{
			width: 40vw;
		}
		100%{
			width: 0px;
			left: 100%;
		}
	}


	// Outermost wrapper
	#app {
		display: block;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		min-height: 100%;

		// Inner wrapper only shown on mountt
		.app-wrapper{
			width: 100%;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			display: block;
		}
	}



	// Main view content
	.body-content{
		box-sizing: border-box;
		// to account for header
		width: 100%;
		transition: 0.2s 0.5s;
		height: fit-content;

		@media (max-width: $screenSM) {
			padding: 0 0;
			&.hide-body{
				transition: 0s;
				height: 0;
				min-height: 0;
				max-height: 0;
			}
		}
	}


	footer#main{
		box-sizing: border-box;
		padding: 45px var(--sidePadding) 20px var(--sidePadding);
		text-align: center;
		font-size: 14px;

		button{
			font-weight: 600;
			margin-left: 15px;
			color: var(--text);
		}
	}
	footer#required{
		box-sizing: border-box;
		padding: 12px 25px 14px 25px;
		color: white;
		background-color: var(--usgsBlue);

		.block{
			display: block;
		}
		a{
			font-size: 12px;
			color: white;
			text-decoration: none;
			padding-right: 10px;
			display: inline-block;
		}
		a:focus,
		a:hover{
			text-decoration: underline;
		}
	}


</style>

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
				<a href="https://usgs.gov" target="_blank">
					<img src="@/assets/branding/usgs-tagline.png" title="USGS Logo" alt="USGS Logo"/>
				</a>
			</div>
		</div>


		
		<!-- Branding - Logo -->
		<div id="appBar">

			<!-- Logo -->
			<a href="https://wim.usgs.gov" id="logo" tabindex="0" aria-label="WIM Home">
				<img src="@/assets/branding/wim_stacked_web.png" title="Logo" alt="Logo" v-if="!$store.getters['Settings/darkMode']"/>
				<img src="@/assets/branding/wim_stacked_dark_web.png"  title="Logo" alt="Logo" v-else />
			</a>

			<div id="appName">
				iFrame Generator
			</div>
		</div>
		

	</div>
</template>

<script>
// Components

export default {
	name: "TopBar",
	components: {
	},
	mixins: [
	],
	data() {
		return {
		};
	},
	watch:{
	},
	methods: {

	}
};
</script>

<style lang="scss">


	// Top nav bar
	// Has logo and hover menu for account/dark mode
	#topBar{
		width: 100%;
		box-sizing: border-box;
		z-index: 2;
		transition: all 0.2s ease;
		background-color: var(--background);


		#requiredHeaders{
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




		// App nav bar
		#appBar{
			display: flex;
			background-color: var(--grey);
			box-sizing: border-box;
			justify-content: space-between;
			padding: 15px var(--sidePadding);
			border-top: 1px solid var(--border);
			border-bottom: 1px solid var(--borderFade);

			#logo{
				transition: var(--transition);
				margin: 0 15px 0 0;
				padding: 0;
				width: fit-content;

				img{
					height: 50px;
					width: auto;
					@media (max-width: $screenSM) {
						height: 32px;
					}
				}
				&:hover{
					cursor: pointer;
				}
			}

			// App Name
			#appName{
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-weight: 700;
				color: var(--text);
				font-size: 20px;
				line-height: 22px;
			}
		}
	}


</style>
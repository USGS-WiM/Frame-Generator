<!--
//!  Interface Text
	  Text elements
-->

<template>
	<div>

		<h3 class="mbottom-sm">
			Colors
		</h3>

		<div class="ui-color-display">

			<div class="ui-colors" v-for="color in normal_colors" :key="color">
				<div class="ui-color-box light" :style="'background-color: var(--' + color + 'Fade);'">
					<span>var(--{{color}}Fade)</span>
					<span class="code">{{getCSSVariable(color + 'Fade')}}</span>
				</div>
				<div class="ui-color-box light" :style="'background-color: var(--' + color + 'Light);'">
					<span>var(--{{color}}Light)</span>
					<span class="code">{{getCSSVariable(color + 'Light')}}</span>
				</div>
				<div class="ui-color-box main" :style="'background-color: var(--' + color + ');'">
					<span>var(--{{color}})</span>
					<span class="code">{{getCSSVariable(color)}}</span>
				</div>
				<div class="ui-color-box dark" :style="'background-color: var(--' + color + 'Dark);'">
					<span>var(--{{color}}Dark)</span>
					<span class="code">{{getCSSVariable(color + "Dark")}}</span>
				</div>
			</div>

		</div>

		<div class="ui-color-display mtop-md">

			<div class="ui-colors" v-for="color in black_colors" :key="color" :class="'ui-color-' + color">
				<div class="ui-color-box dark" :style="'background-color: var(--' + color + 'Fade);'">
					<span>var(--{{color}}Fade)</span>
					<span class="code">{{getCSSVariable(color + 'Fade')}}</span>
				</div>
				<div class="ui-color-box dark" :style="'background-color: var(--' + color + 'Light);'">
					<span>var(--{{color}}Light)</span>
					<span class="code">{{getCSSVariable(color + 'Light')}}</span>
				</div>
				<div class="ui-color-box dark main" :style="'background-color: var(--' + color + ');'">
					<span>var(--{{color}})</span>
					<span class="code">{{getCSSVariable(color)}}</span>
				</div>
				<div class="ui-color-box dark" :style="'background-color: var(--' + color + 'Dark);'">
					<span>var(--{{color}}Dark)</span>
					<span class="code">{{getCSSVariable(color + "Dark")}}</span>
				</div>
			</div>

			<!-- Black and White -->
			<div class="ui-colors">
				<div class="ui-color-box dark main" :style="'background-color: var(--black);'">
					<span>var(--black)</span>
					<span class="code">{{getCSSVariable('black')}}</span>
				</div>
				<div class="ui-color-box main" :style="'background-color: var(--white);'">
					<span>var(--white)</span>
					<span class="code">{{getCSSVariable('white')}}</span>
				</div>
			</div>

		</div>


		<h3 class="mbottom-sm mtop-xl">
			Logos
		</h3>


		<div class="ui-logo-display">

			<!-- Logo Only -->
			<div class="ui-logo-wrapper">
				<label>Logo Only</label>
				<div class="ui-logo-image">
					<img class="desktop" alt="Logo" src="@/assets/branding/logo-light.png" title="Logo"/>
				</div>
			</div>
			<div class="ui-logo-wrapper dark">
				<label>Logo Only <i class="far fa-moon"/></label>
				<div class="ui-logo-image">
					<img class="desktop" alt="Logo" src="@/assets/branding/logo-dark.png" title="Logo"/>
				</div>
			</div>


		</div>


		<h3 class="mbottom-sm mtop-xl">
			Other Stuff
		</h3>


		<label class="mbottom-sm">Slack Theme</label>
		<code>
			#2313FF,#FFC2C0,#E2EDFF,#00172E,#FFFFFF,#FFFFFF,#00D09B,#FF3D49,#0B02CE,#FFFFFF
		</code>



		<!-- Spacer -->
		<div class="mbottom-xl"></div>

	</div>
</template>

<script>

export default {
  	name: "interface-colors",
  	components: {
	},
	mixins: [
	],
	data() {
		return{
			normal_colors: [
				"primary",
				"green",
				"orange",
				"red",
				"yellow",
				"pink",
				"purple",
			],
			black_colors: [
				"text",
				"grey",
				"border",
			],
		};
	},
	created: function () {
	},
	mounted(){
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "Colors");
	},
	methods: {
		getCSSVariable: function(name){
			return getComputedStyle(document.documentElement)
				.getPropertyValue("--" + name);
		}
	}
};
</script>

<style lang="scss">
	
	// Color Display
	.ui-color-display{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;

		.ui-colors{
			display: flex;
			flex-direction: column;
			border: 1px solid var(--border);
			border-radius: var(--borderRadiusLarge);

			@media (max-width: $screenSM) {
				flex-grow: 3;
			}

			.ui-color-box{
				display: flex;
				height: 70px;
				width: 200px;
				max-width: 100%;
				padding: 0 15px;
				box-sizing: border-box;
				flex-direction: column;
				justify-content: center;
				text-align: center;
				flex-grow: 3;
				color: var(--text);
				font-weight: 600;

				@media (max-width: $screenSM) {
					width: 100%;
				}

				.code{
					font-size: 16px;
					padding-top: 5px;
				}

				&:first-child{
					border-top-left-radius: var(--borderRadiusLarge);
					border-top-right-radius: var(--borderRadiusLarge);
				}
				&:last-child{
					border-bottom-left-radius: var(--borderRadiusLarge);
					border-bottom-right-radius: var(--borderRadiusLarge);
				}

				&.main{
					height: 120px;
					color: var(--text);
				}
				&.dark{
					color: var(--background);
				}
				&.light{
					color: var(--text);
				}
			}

			&.ui-color-grey{
				.ui-color-box{
					color: var(--text);
				}
			}
		}
	}


	// Logo Display

	.ui-logo-display{
		display: block;
		flex-wrap: wrap;


		.ui-logo-wrapper{
			display: inline-flex;
			flex-direction: column;
			justify-content: center;
			margin: 0 35px 35px 0;
			box-sizing: border-box;
			padding: 15px;
			border-radius: var(--borderRadius);
			background-color: var(--white);


			label{
				color: var(--black);
				padding: 0 0 10px 0;
			}


			&.dark{
				background-color: var(--black);
				label{
					color: var(--white);
				}
			}

			.spacer{
				flex-grow: 3;
			}


			.ui-logo-image{
				width: 100%;
				text-align: center;

				img{
					max-width: 300px;
					height: auto;
					width: auto;
					max-height: 120px;
					margin: 0 auto;
				}

			}
		}
	}

	
</style>
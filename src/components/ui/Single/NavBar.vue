<!--
//! NavBar
 	Mobile navigation bar, bottom float, shows @ screenSM
 
-->

<template>

	<nav id="navigationBar" aria-label="Navigation Menu">
		
		<button class="icon-link" @click="navigate('/')" aria-label="Home" v-bind:class="{'is-active': $route.path == '/'}">
			<i class="far fa-home"></i>
			<span>Home</span>
		</button>

	</nav> <!-- End Nav Links -->

</template>

<script>

export default {
	name: "NavBar",
	mixins: [
	],
	data() {
		return {
		};
	},
	mounted() {
		
	},
	methods: {
	}
};
</script>

<style lang="scss">

	// Main content of sidebar
	#navigationBar{
		display: none;
		box-sizing: border-box;
		position: fixed;
		// 90 offset to account for top bar and padding
		bottom: 0px;
		left: 0px;
		width: 100%;
		padding: 0px 8px;
		height: var(--bottomBarHeight);
		flex-direction: row;
		justify-content: space-around;
		transition: 0.05s ease;
		background-color: var(--greyFade);
		z-index: 1;

		// Hide actual sidebar and all other content on mobile, only show #navigationBar
		@media (max-width: $screenSM) {
			display: flex;
			// background: var(--background);
			// border-top: 1px solid var(--border);
		}

		// Hide if on screen keyboard is visible
		&.hide-keyboard{
			bottom: -65px;
			transition: 0.15s ease;
		}

		// Link elements
		a,
		.icon-link{
			display: block;
			height: 43px;
			text-decoration: none;
			padding: 0;
			box-sizing: border-box;
			text-align: center;
			border-radius: var(--borderRadius);
			height: 100%;
			transition: var(--transition);

			*{
				transition: var(--transition);
			}

			i,
			span{
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 100%;
				text-align: center;
				margin: 0 auto;
				min-width: 100%;
				color: var(--text);
			}

			i{
				text-align: center;
				position: relative;
				font-size: 18px;
				width: 50px;
				box-sizing: border-box;
				display: inline-block;
				margin: 0 auto 4px auto;
				padding: 6px 16px 4px 16px;
				height: fit-content;
				border-radius: 25px;
			}

			span{
				box-sizing: border-box;
				font-family: var(--systemFont);
				font-size: 11.5px;
				letter-spacing: -0.2px;
				font-weight: 500;
				height: fit-content;
				width: 100%;
			}

			// Hover State
			&:hover{
					transition: var(--transition);
					background-color: rgba(236, 242, 255, 0.5);
				*{
					transition: var(--transition);
				}
				&:after,span,i{
					opacity: 1;
					color: var(--text);
				}
				span{
					text-decoration: underline;
				}
			}

			// Active Link
			&.is-active{
				opacity: 1;
				border: none;
				border-radius: 0;
				position: relative;
				background-color: transparent;
				box-shadow: none;
				// background-color: var(--primaryLight);

				i{
					background-color: var(--transparentHighlight);
					// background-color: var(--layer);
					// background-color: var(--activeColor);
					font-weight: 700;
				}

				
				// Chevron right on mobile
				&:after,
				span,
				i{
					opacity: 1;
					color: var(--text);
				}
				&:hover{
					background-color: transparent;
					span{
						text-decoration: none;
					}
				}

			}

			// Active click down
			&:active{
				@media (max-width: $screenSM) {
					// Chevron right
					&:after{
						opacity: 0.5;
						transition: var(--transition);
					}
					i, span{
						opacity: 0.5;
					}
				}
			}

			// Red, admin only
			&.red{
				span,i{
					color: var(--red);
				}
			}
		}
	} // End Sidebar Body



	// Mozilla doesn't support backdrop-filter, set to white instead
	@-moz-document url-prefix() {
		#navigationBar {
			@media (max-width: $screenSM) {
				background: var(--background) !important;
			}
		}
	}
		
</style>
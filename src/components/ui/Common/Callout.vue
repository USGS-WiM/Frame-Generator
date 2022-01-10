<!-- 
//! Callout Component
// Example:
// <Callout icon="fas fa-ban" size="giant" color="red"> <slot> </Callout>
// 
-->

<template>
	<div class="callout" v-bind:class="size + ' ' + color">
		<i class="callout-icon" :class="icon"></i>
		<i class="callout-icon spacer" :class="icon" aria-hidden="true"></i>
		<div class="callout-body">
			<!-- Callout body content -->
			<slot></slot>
		</div>
	</div>
</template>

<script>

/** 
 * @group Interface
 * Lightly-colored text callout display with icon on left, text and other <slot> content on right
 */

export default {
	name: "Callout",
	mixins: [
	],
	components: {
	},
	props: {
		// Predefined callout size classes
		size: {
			// `'small'`, `'big'`, `'giant'`, `'fit'`
			type: String,
			required: false,
   			default: "",
		},
		// Color variable for callout
		color: {
			type: String,
			required: false,
   			default: "primary",
		},
		// Font awesome icon class for left icon
		icon: {
			type: String,
			required: false,
   			default: null,
		},
	},
	data() {
		return {
		};
	},
	created() {

	},
	mounted(){
	},
	methods: {
	}	
};	

</script>

<style lang="scss">
	

	.callout{
		display: flex;
		width: 100%;
		max-width: var(--maxWidth);
		box-sizing: border-box;
		padding: 5px 5px 5px 5px;
		border-radius: var(--borderRadius);
		position: relative;
		background-color: var(--primaryFade);
		border: 1px solid rgba(125,125,175,0.125);

		// Icon
		.callout-icon{
			height: 100%;
			min-height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			box-sizing: border-box;
			font-size: 24px;
			color: var(--primary);
			padding: 8px 14px;
			position: absolute;
			top: 0;
			left: 0;
			margin-left: 5px;

			&.spacer{
				position: relative;
				visibility: hidden;
			}

			@media (max-width: $screenSM) {
			}
		}

		// Text
		.callout-body{
			flex-grow: 3;
			padding: 15px 0 15px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}


		// Colors
		&.red{
			background-color: var(--redFade);
			.callout-icon{
				color: var(--red);
			}
			a{
				color: var(--red);
				&:hover{
					color: var(--redDark);
				}
			}
		}
		// Orange
		&.orange{
			background-color: var(--orangeFade);
			.callout-icon{
				color: var(--orange);
			}
			a{
				color: var(--orange);
				&:hover{
					color: var(--orangeDark);
				}
			}
		}
		// Purple
		&.purple{
			background-color: var(--purpleFade);
			.callout-icon{
				color: var(--purple);
			}
			a{
				color: var(--purple);
				&:hover{
					color: var(--purpleDark);
				}
			}
		}
		// Pink
		&.pink{
			background-color: var(--pinkFade);
			.callout-icon{
				color: var(--pink);
			}
			a{
				color: var(--pink);
				&:hover{
					color: var(--pinkDark);
				}
			}
		}
		// Green
		&.green{
			background-color: var(--greenFade);
			.callout-icon{
				color: var(--green);
			}
			a{
				color: var(--links);
				&:hover{
					color: var(--linksDark);
				}
			}
		}
		// Yellow
		&.yellow{
			background-color: var(--yellowFade);
			.callout-icon{
				color: var(--yellow);
			}
			a{
				color: var(--links);
				&:hover{
					color: var(--linksDark);
				}
			}
		}
		// Grey
		&.grey{
			background-color: var(--greyFade);
			.callout-icon{
				color: var(--text);
			}
			a{
				color: var(--textLight);
				&:hover{
					color: var(--text);
				}
			}
		}

		// Sizing
		// small means lil smaller icon and smaller text
		&.small{
			padding: 0 0 0 0;

			.callout-icon{
				font-size: 18px;
			}
			.callout-body{
				padding: 10px 0 10px 0;
				letter-spacing: 0px;
			}
		}
		// big means bigger icon and bigger text
		&.big{
			padding: 20px 0 20px 0;

			@media (max-width: $screenSM) {
				padding: 20px 0 20px 0;
			}

			.callout-icon{
				font-size: 42px;
				padding: 0 24px 0 20px;
				@media (max-width: $screenSM) {
					font-size: 34px;
				}	
			}
		}
		// Giant makes giant transparent icon
		&.giant{
			padding: 30px 20px 30px 50px;
			.callout-icon{
				font-size: 82px;
				width: 100px;
				opacity: 0.1;
				margin-left: 15px;
				pointer-events: none;
				&.spacer{
					display: none;
				}
			}
		}
		// Unset max width
		&.wide{
			max-width: unset;
			p{
				max-width: unset;
			}
		}
		
		
	}

</style>
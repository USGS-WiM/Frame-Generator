<!-- 
//! Toast
 	Toast element to display messages
 		Added to App component to be available on anay page/view
 		Uses global plugin method to send toast data to home component, which will then relay the data to this component
 		Maybe not the best way, but it made sense to me at the time
 
 		Props: 
 			visible - visiblity of toast
 			icon - Font Awesome full icon class (ex 'far fa-star')
 			color - color class - red, green, yellow, orange, grey, or primary (default)
 			title - Short bold text on top
 			body - the long text for the toast message
 
-->

<template>
	<!-- Toast notificaion -->
	<transition name="toast">

		<!-- <div id="toast" v-bind:class="toastData.color" @click="hideToast(true)"> -->
		<div id="toast" class="focusable" v-bind:class="toastData.color" v-if="toastData.visible" @click="hideToast(true)" tabindex="0" aria-label="Alert" ref="toast">
			
			<!-- Content -->
			<div class="toast-content" v-touch:swipe.self="() => hideToast()">
				<div class="toast-icon">
					<i v-bind:class="toastData.icon"></i>
				</div>
				<div class="toast-text">
					<div class="toast-title">
						{{toastData.title}}
					</div>
					<div class="toast-body">
						{{toastData.body}}
					</div>
					<div class="toast-info" v-if="toastData.path">
						<span v-if="toastData.info" class="hide-sm">Click {{toastData.info}}</span>
						<span v-else class="hide-sm">Click to learn more</span>
						<span v-if="toastData.info" class="show-sm">Tap {{toastData.info}}</span>
						<span v-else class="show-sm">Tap to learn more</span>
					</div>
				</div>
			</div>

			<!-- 5 second progress bar -->
			<div class="toast-bar progress"></div>
		</div>

	</transition>
</template>

<script>

export default {
	name: "Toast",
	data() {
		return {
			toastData: {
				"visible": false,
				"icon": "far fa-bread-slice",
				"color": "red",
				"title": "Test Toast",
				"body": "This is a test toast, you're not supposed to see it.",
				"path": "/more",
				"info": "to learn more",
			}
		};
	},
	methods: {
		//   Show Toast 
		showToast: function(title, body, color, icon, path, info){
			let _this = this;

			// Set new toast data
			// Setting visible to true shows it
			_this.toastData = {
				"visible": true,
				"icon": icon,
				"color": color,
				"title": title,
				"body": body,
				"path": path || "",
				"info": info || ""
			};

			// Focus
			setTimeout(function(){
				_this.$refs.toast.focus();
			}, 100);

			// If navigating, Hide after 6.5 seconds longer time to click
			if(path && path.length){
				setTimeout(function(){
					_this.hideToast();
				}, 6500);
			}
			// Else normal toast, 4 seconds
			else{
				setTimeout(function(){
					_this.hideToast();
				}, 4000);
			}
			
		},
		

		//   Hide Toast 
		hideToast: function(touchAction){
			
			let _this = this;

			setTimeout(function(){
				_this.toastData.visible = false;
				if(_this.toastData.path && touchAction == true){
					_this.navigate(_this.toastData.path);
				}
			}, 0);
		}
	}
};
</script>

<style lang="scss">

	

	//    Toast  
	#toast{
		position: fixed;
		top: 50px;
		right: 55px;
		float: right;
		opacity: 1;
		display: flex;
		flex-direction: column;
		background-color: var(--background);
		border: 2px solid var(--primary);
		border-radius: var(--borderRadius);
		border-top-left-radius: 22px;
		border-bottom-right-radius: 22px;
		border-bottom-left-radius: 22px;
		transition: var(--transition);
		transform: translateY(0px);
		transform-origin: center right;
		box-shadow: var(--shadow);
		z-index: 1000;

		@media (max-width: $screenSM) {
			// top: unset;
			right: unset;
			width: calc(100% - 40px);
			border-radius: 10px;
			top: 20px;
			box-sizing: border-box;
			left: 20px;
		}

		// Transition down when hiding beore unmount
		&.hide{
			// transform: translateY(250px);
			bottom: -250px;
			transition: var(--transition);
		}

		// Hover state increases size a little, brightens close, cursor
		&:hover{
			cursor: pointer;
			transform: translateY(2px);
			transition: var(--bezierTransitionSlow);
		}

		.toast-content{
			flex-grow: 3;
			box-sizing: border-box;
			padding: 22px 10px 22px 20px;
			display: flex;
			color: var(--text);

			// Increase padding on smaller screens
			@media (max-width: $screenSM) {
				padding: 20px 10px 20px 25px;
			}

			// Icon left on toast
			.toast-icon{
				text-align: center;
				font-size: 36px;
				box-sizing: content-box;
				height: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: var(--primary);
			}

			// Body of the toastt
			.toast-text{
				flex-grow: 3;
				display: flex;
				flex-direction: column;
				justify-content: center;
				box-sizing: border-box;
				padding: 0 15px 0 18px;
				max-width: 280px;
				min-width: 160px;
				color: var(--text);
				font-family: var(--systemFont);

				// Adjust spacing on small screens
				@media (max-width: $screenSM) {
					max-width: none;
					padding-left: 20px;
				}

				.toast-title{
					font-size: 15px;
					font-weight: 700;
					letter-spacing: 0.25px;
					padding-bottom: 6px;
					word-wrap: break-word;
				}
				.toast-body{
					font-size: 13px;
					line-height: 18px;
					font-weight: 500;
					color: var(--textLight);
					word-wrap: break-word;
				}
				.toast-info{
					font-size: 12px;
					padding-top: 8px;
					font-weight: 600;
					text-align: right;
				}
			}

		}

		// Progress bar that shows when toast will be dismissed
		.toast-bar{
			position: absolute;
			bottom: 0px;
			right: 0;
			display: block;
			width: 100%;
			height: 4px;
			min-height: 4px;
			max-height: 4px;
			width: 92%;
			margin-right: 5%;

			// Make a bit bigger on mobile
			@media (max-width: $screenSM) {
				width: 100%;
				height: 6px;
				bottom: -1px;
				margin-right: 0;
				min-height: 6px;
				max-height: 6px;
			}

			// Bar that shows progress
			&:after{
				content: " ";
				display:flex;
				width: 0%;
				height: 100%;
				border-bottom-left-radius: 5px;
				background-color: var(--primary);
			}

			// Show progress moving when class is added with v-if
			&.progress:after{
				animation: toastBar 4s 1 0s linear;
			}
		}

		// Color Variations
		// Red
		&.red{
			border-color: var(--red);
			.toast-icon{
				color: var(--red);
			}
			.toast-bar:after{
				background-color: var(--red);
			}
		}
		
		// Green
		&.green{
			border-color: var(--green);
			.toast-icon{
				color: var(--green);
			}
			.toast-bar:after{
				background-color: var(--green);
			}
		}
		// Yellow
		&.yellow{
			border-color: var(--yellow);
			.toast-icon{
				color: var(--yellow);
			}
			.toast-bar:after{
				background-color: var(--yellow);
			}
		}
		// Orange
		&.orange{
			border-color: var(--orange);
			.toast-icon{
				color: var(--orange);
			}
			.toast-bar:after{
				background-color: var(--orange);
			}
		}
		// Grey
		&.grey{
			border-color: var(--text);
			.toast-icon{
				color: var(--text);
			}
			.toast-bar:after{
				background-color: var(--text);
			}
		}
		

	}

	// Animation
	// Makes bar under toast go from left to right
	// 100% width to 0% in 5 seconds.
	@keyframes toastBar{
		0%{width: 0%;}
		1%{width: 100%;}
		100%{width: 0%;}
	}


	// Toast from botttom animation
	// Toast from botttom animation
	.toast-enter-active {
		animation: toast-in-up .22s;
	}
	.toast-leave-active {
		animation: toast-out-up .3s;
	}
	// Comes from top on desktop
	@keyframes toast-in-up {
		0% {
			opacity: 0;
			transform: translateY(-250px);
		}
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	@keyframes toast-out-up {
		0% {
			opacity: 1;
			transform: translateY(0px);
		}
		100% {
			opacity: 0;
			transform: translateY(-250px);
		}
	}

	
</style>
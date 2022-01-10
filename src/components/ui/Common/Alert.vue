<!-- 
//! Alert
 	Alert element to display short messages
 	Called from plugins with hello("message", "fa font-awesome-icon", color) defined in plugins.js
-->

<template>

	<!-- alert notificaion -->
	<transition name="alert">

		<!-- <div id="alert" v-if="!alertVisible" @click="hideAlert()"> -->
		<div id="alert" v-if="alertVisible" @click="alertVisible = false;">
			<b :class="alertColor">
				<i :class="alertIcon"></i>
				<span>{{alertMessage}}</span>
			</b>
		</div>

	</transition>
</template>

<script>

export default {
	name: "Alert",
	data() {
		return {
			alertMessage: "This is an alert",
			alertIcon: "far fa-engine-warning",
			alertVisible: false,
			hideTimer: null,
			alertColor: ""
		};
	},
	mounted(){
	},
	computed: {
	},
	watch: {
	},
	methods: {
		//   Show Alert 
		showAlert: function(message, icon, color){

			let _this = this;

			// If it's already visible, hide it first, then re-call function
			if(_this.alertVisible){
				// Hide alert, clear previous timer so it doesn't hide new alert early
				_this.alertVisible = false;
				clearTimeout(this.hideTimer);
				// re-call alert after 150ms - bounce out and in effect
				setTimeout(function(){
					_this.showAlert(message, icon, color);
				}, 150);
			}else{
				// Else show alert
				
				// Set new alert data
				_this.alertMessage = message;
				_this.alertIcon = icon;
				_this.alertColor = color;
				_this.alertVisible = true;

				// Hide after 2.5 seconds
				this.hideTimer = setTimeout(function(){
					_this.alertVisible = false;
				}, 3500);

			}
		},
	
	}
};
</script>

<style lang="scss">

	

	//    Alert 
	#alert{
		position: fixed;
		left: 0px;
		bottom: 10vh;
		display: flex;
		justify-content: center;
		width: 100%;
		z-index: 1000;

		b{
			background-color: var(--yellow);
			color: var(--black);
			box-sizing: border-box;
			padding: 10px 12px 10px 12px;
			border-radius: 22px;
			font-size: 14px;
			box-shadow: var(--shadow);
			font-weight: 700;
			margin: 0 auto;
			border: 1px solid var(--border);
			max-width: 300px;
			display: flex;
			justify-content: space-between;

			@media (max-width: $screenSM) {
				font-size: 12px;
			}

			span, i{
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			span{
				font-family: var(--systemFont);
			}

			i{
				margin: 0 10px 0 0;
				position: relative;
				transform: scale(1.2);
			}

			&:hover{
				cursor: pointer;
			}

			// Color variations
			&.blue{
				background-color: var(--blue);
				color: var(--white);
			}
			&.red{
				background-color: var(--red);
				color: var(--white);
			}
			&.invert,
			&.grey{
				background-color: var(--text);
				color: var(--background);
			}
			&.green{
				background-color: var(--green);
			}
			&.orange{
				color: var(--white);
				background-color: var(--orange);
			}
		}
	}


	// alert from botttom animation
	// alert from botttom animation
	.alert-enter-active {
		animation: alert-in .1s;
	}
	.alert-leave-active {
		animation: alert-out .15s;
	}
	// Comes from bottom on desktop
	@keyframes alert-in {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		80% {
			transform: scale(1.2);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes alert-out {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		20% {
			transform: scale(1.2);
			opacity: 1;
		}
		100% {
			transform: scale(0);
			opacity: 0;
		}
	}
	
</style>
<!-- 
//! Account Popover Component
	// Top bar, top right button
	// Dropdown with content
	// Dark mode toggle, settings shortcut, signout button
-->
<template>
	<div class="nav-popover">


		<!-- Featured Button -->
		<!-- view profile -->
		<button class="button round small transparent" id="featuredButton" @click="navigate('/')">
			<i class="far fa-user-circle"></i>
			<span>Generate Frame</span>
		</button>


		<div id="ControlPanel">

			<!-- All Users -->
			<button aria-label="Toggle Dark" @click="toggleDarkTheme()">
				<i v-bind:class="{ 'far fa-lightbulb-slash': !$store.getters['Settings/darkMode'], 'far fa-lightbulb-on': $store.getters['Setings/darkMode'] }"></i>
				<span v-if="!$store.getters['Settings/darkMode']">Dark Mode</span>
				<span v-else>Light Mode</span>
			</button>
			<hr v-if="$store.getters['User/getAuth']"/>

			<!-- Everyone -->
			<button @click="navigate('/about')" aria-label="About">
				<i class="far fa-hand-peace"/>
				<span>About The Project</span>
			</button>
			<button @click="navigate('/sponsors')" aria-label="Open Source">
				<i class="fab fa-github"/>
				<span>Open Source</span>
			</button>
			<button @click="navigate('/help')" aria-label="Help & Guide">
				<i class="far fa-question-circle"/>
				<span>Help & User Guide</span>
			</button>

			<!-- Buttons -->
			<hr/>

			<div class="flex flex-between">

				<button @click="navigate('/signin')" class="auth" aria-label="Sign In">
					<i class="far fa-lock"/>
					<span>Sign In</span>
				</button>
				<!-- Sign Up -->
				<button @click="navigate('/register')" class="auth" aria-label="Create Account">
					<i class="far fa-user-plus"/>
					<span>Sign Up</span>
				</button>

			</div>
		</div>

		<!-- Footer -->
		<div class="popover-footer">
			<div>v{{$store.getters['Hold/appVersion']}}</div>
		</div>


	</div>
</template>

<script>
// Mixins

export default {
	name: "AccountPopover",
	mixins: [
	],
	components: {
	},
	props: [
	],
	data() {
		return {
		};
	},
	created() {

	},
	mounted(){
	},
	computed: {

  	},
	methods: {

		// Dark theme button
		toggleDarkTheme: function(){
			let _this = this;
			let flip = !_this.$store.getters["Settings/darkMode"];
			_this.$store.dispatch("User/TOGGLE_DARK_THEME", {on: flip});
		},
	}	
};	

</script>

<style lang="scss">
	

	// Featured Button
	#featuredButton{
		display: block;
		margin: 12px auto 12px auto;
		width: 220px;
	}

	// Control panel shortcuts
	#ControlPanel{
		display: flex;
		flex-direction: column;
		padding: 0 0 0 0;
		margin-top: 0;
		font-family: var(--systemFont);

		hr{
			width: 100%;
			border-top: 1px solid var(--borderFade);
			margin: 0 0 4px 0;
		}
		

		button{
			width: 100%;
			color: var(--text);
			display: flex;
			margin-bottom: 4px;
			border-radius: var(--borderRadius);

			// Authentication buttons, side by side
			&.auth{
				background-color: var(--grey);
				width: 48%;
				height: 100%;
				margin-top: 5px;
				margin-bottom: 0;

				span{
					padding-left: 22px;
				};

				&:last-child{
					background-color: var(--primary);
					color: var(--white);

					&:hover{
						color: var(--white);
						background-color: var(--primary);
					}
				}
			}

			i{
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;
				font-size: 16px;
				height: 34px;
				width: 36px;

				&.fa-user-edit{
					position: relative;
					left: 4px;
				}
			}

			span{
				font-size: 14px;
				font-weight: 500;
				display: flex;
				height: 34px;
				box-sizing: border-box;
				padding: 0 0 2px 18px;
				flex-direction: column;
				justify-content: center;
				white-space: pre;
			}

			&:focus,
			&:hover{
				background-color: var(--greyFade);

				span{
					text-decoration: underline;
				}
			}
			&:active{
				background-color: var(--greyDark);
			}

			&:last-child{
				margin-bottom: 0;
			}
		}
	}

	// Popup on hover
	.nav-popover{
		display: block;
		width: 360px;
		max-width: 80vw;
		position: absolute;
		top: 63px;
		right: 0;
		background-color: var(--background);
		border: 1px solid var(--border);
		box-sizing: border-box;
		border-radius: var(--borderRadius);
		border-radius: 6px;
		transform-origin: top center;
		box-shadow: var(--shadow);
		padding: 12px;
		font-family: var(--systemFont);

		@media (max-width: $screenSM) {
			min-width: 220px;
			max-width: 480px;
			width: 96vw;
			right: 0;
			position: fixed;
			top: 54px;
			right: 2vw;
		}



		&:hover{
			cursor: default;
		}

	}

	.popover-footer{
		font-size: 10px;
		display: flex;
		width: 100%;
		font-weight: 500;
		font-family: var(--monospace);
		justify-content: center;
		box-sizing: border-box;
		padding: 10px 0 0 0;
		
		div{
			margin: 0 0 0 15px;
		}
	}

</style>
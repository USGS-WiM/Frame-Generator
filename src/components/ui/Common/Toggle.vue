<!-- 
//! Toggle Component
-->

<template>
	<div class="toggle-section" :class="size">

		<!-- Header -->
		<button class="toggle-header" title="Toggle Section" @click="isToggled = !isToggled">
			<!-- Icon -->
			<i :class="'toggle-icon ' + icon + ' ' + size"></i>
			<!-- Title -->
			<div class="toggle-title" :class="size">{{title}}</div>
			<!-- Button -->
			<div class="toggle-button">
				<div class="button small transparent">
					<i class="far fa-angle-down" v-if="!isToggled"></i>
					<i class="far fa-angle-up" v-else></i>
					<span v-if="!isToggled">Show</span>
					<span v-else>Hide</span>
				</div>
			</div>
		</button>

		<!-- Toggle body content -->
		<transition name="collapse">
			<div class="toggle-body" v-if="isToggled">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>


export default {
	name: "Toggle",
	mixins: [
	],
	components: {
	},
	props: [
		"title",
		"icon",
		"open",
		"size",
	],
	data() {
		return {
			isToggled: false,
		};
	},
	created() {

	},
	mounted(){

		if(this.open){
			this.isToggled = true;
		}
	},
	methods: {
	}	
};	

</script>

<style lang="scss">
	

	.toggle-section{

		.toggle-header{
			box-sizing: border-box;
			display: flex;
			width: 100%;
			height: 50px;

			.toggle-title, .toggle-button{
				display: flex;
				flex-direction: column;
				height: 100%;
				justify-content: center;
			}

			.toggle-title{
				padding-right: 25px;
				font-size: 16px;
				font-weight: 600;

				&.small{
					font-size: 12px;
				}
			}

			.toggle-icon{
				font-size: 22px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 100%;
				margin-right: 15px;
				text-align: left;
				padding-top: 1px;

				&.small{
					font-size: 18px;
				}
				
			}

			&:hover{
				cursor: pointer;
				.toggle-title{
					text-decoration: underline;
				}
				i{
					top: 2px;
				}
			}
		}

		.toggle-body{
			padding: 15px 5px 15px 25px;
			margin-left: 5px;
			border-left: 2px solid var(--grey);
		}
	}


</style>
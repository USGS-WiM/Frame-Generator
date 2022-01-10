<!-- 
//! Modal Component
 	Show modal with buttons at bottom,
 		Accepts props:  
 			- show: condition to show modal
 			- size: large (default/empty), small
 			- color: primary (default/empty), other button colors
 			- title: Text string for modal title
 			- dismissText: text for dismiss button
 			- confirmText: text for main action/confirm button
 			- confirmIcon: icon for confirm button
 			- disableConfirm: if true, confirm button is disabled
-->

<template>
	<div>

		<!-- Lightbox -->
		<transition name="lightbox">
			<div class="lightbox" v-if="show"></div>
		</transition>
		
		<!-- Modal -->
		<transition name="modal">

			<div class="modal-wrapper" v-on:click.self="closeModal()" v-if="show">

				<div class="modal" tabindex="0" v-bind:class="size" ref="modal">
					<!-- Header -->
					<div class="modal-title">
						{{title}}
					</div>
					<!-- Body Content -->
					<div class="modal-body">
						<slot></slot>
					</div>
					<!-- Footer/Buttons -->
					<div class="modal-footer" v-bind:class="{'center': !dismissText}">
						<!-- Dismiss -->
						<button class="button grey" @click="closeModal()" aria-label="Dismiss" v-if="dismissText">
							<i class="far fa-times"></i>
							<span>{{dismissText}}</span>
						</button>
						<!-- Confirm -->
						<button class="button" v-if="confirmText" v-bind:class="color" @click="confirm()" v-bind:aria-label="confirmText" :disabled="disableConfirm">
							<span>{{confirmText}}</span>
							<i v-bind:class="confirmIcon ? confirmIcon : 'fas fa-long-arrow-right'"></i>
						</button>
					</div>
				</div> <!-- End modal body/form -->

			</div>

		</transition>
	</div>
</template>

<script>

/** 
 * @group Interface
 * Wrapper for modal with lightbox and multiple sizes.
 */

export default {
	name: "Modal",
	mixins: [
	],
	components: {
	},
	props: {
		// Boolean to show/hide modal
		show: {
			type: Boolean,
			required: false,
   			default: false,
		},
		// Modal size
		size: {
			//  `default`, `'small'`
			type: String,
			required: false,
   			default: "default",
		},
		// Modal title / header
		title: {
			type: String,
			required: false,
   			default: null,
		},
		// Color of confirm button
		color: {
			// CSS Color Variable
			type: String,
			required: false,
   			default: "primary",
		},
		// Text for close/dismiss button
		dismissText: {
			type: String,
			required: false,
   			default: "Close",
		},
		// Text for confirm/action button - hidden if empty
		confirmText: {
			type: String,
			required: false,
   			default: null,
		},
		// Boolean to disable confirm button
		disableConfirm: {
			type: Boolean,
			required: false,
   			default: false,
		},
		// Icon for confirm button
		confirmIcon: {
			type: String,
			required: false,
   			default: "far fa-check",
		},

	},
	data() {
		return {
		};
	},
	watch: {
		show () {
			let _this = this;
			if(_this.show){
				setTimeout(function(){
					_this.$refs.modal.focus();
				}, 200);
			}
		}
	},
	created() {

	},
	mounted(){
		
	},
	methods: {

		// Emit close
		closeModal: function(){
			// Notify view to dismiss modal
			this.$emit("dismissed");
		},

		// Emit confirm
		confirm: function(){
			// User pressed action button
			this.$emit("confirmed");
		}
	}	
};	

</script>

<style lang="scss">

</style>
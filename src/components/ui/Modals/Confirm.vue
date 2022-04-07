<!-- 
//! Confirm Component
// 
-->
<template>
	<div>

		<!-- Lightbox -->
		<transition name="lightbox">
			<div class="lightbox" v-if="show"></div>
		</transition>

		<!-- Modal -->
		<transition name="modal">

			<div class="modal-wrapper" v-on:click.self="cancel()" v-if="show" v-touch:swipe.self="() => cancel()">

				<div class="modal small" tabindex="0" ref="modal">
					<!-- Header -->
					<div class="modal-title">
						<span>{{title}}</span>
						<i class="far fa-check-circle"></i>
					</div>
					<!-- Body Content -->
					<div class="modal-body no-scrollbars">
						<p class="padding-none">
							{{body}}
						</p>
					</div>
					<!-- Footer/Buttons -->
					<div class="modal-footer">
						<!-- Dismiss -->
						<button class="button invert" @click="cancel()" :aria-label="cancelText">
							<i class="far fa-times"></i>
							<span>{{cancelText}}</span>
						</button>
						<!-- Leave -->
						<button class="button" @click="confirm()" :aria-label="confirmText">
							<span>{{confirmText}}</span>
							<i class="fas fa-check-circle"></i>
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
 * Small Modal with header, body text, and confirm & cancel buttons.
 */

export default {
	name: "Confirm",
	mixins: [
	],
	components: {
	},
	props: {
		// Modal header / title
		title: {
			type: String,
			required: false,
   			default: "Are you sure?",
		},
		// Body text for modal
		body: {
			type: String,
			required: false,
   			default: "Do you really want to do that?",
		},
		// Text for confirm button
		confirmText: {
			type: String,
			required: false,
   			default: "Yes",
		},
		// Text for cancel button
		cancelText: {
			type: String,
			required: false,
   			default: "No",
		},
	},
	data() {
		return {
			show: false,
		};
	},
	created() {

	},
	mounted(){
		this.show = true;
	},
	methods: {
		// Confirm
		confirm: function(){
			// Notifies view of confirmation
			this.$emit("confirmTrue");
		},
		// Cancel
		cancel: function(){
			// Notifies view of cancellation
			this.$emit("confirmFalse");
		},
	}	
};	

</script>

<style lang="scss">
	

</style>
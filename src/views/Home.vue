<!--
// 
// Home.vue
// _________________________
//	Home view
//
// -->

<template>
	<div>

		<div class="padded">
			<h1>Form Generator</h1>
		</div>


	</div>
</template>

<script>

export default {
	name: "home",

	components: {
	},

	mixins: [
	],

	data() {
		return {
			today: new Date(),

		};
	},

	watch: {
		
	},
	
	mounted() {
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "Form Generator");
	},
	created: function () {
	},

	beforeDestroy(){
	},
	
	methods: {


	}
};

</script>


<style lang="scss">


</style>
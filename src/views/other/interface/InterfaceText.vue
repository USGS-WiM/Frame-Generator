<!--
//!  Interface Text
	  Text elements
-->

<template>
	<div>


		<!-- Font Information -->
		<div class="mtop-sm mbottom-lg">
			<!-- Sans Display -->
			<div class="flex mbottom-xs">
				<div class="mright-sm">Sans (Display)</div>
				<div><a href="https://fonts.google.com/specimen/Poppins" target="_blank" class="text-sans">Poppins</a></div>
			</div>
			<!-- Sans Default -->
			<div class="flex mbottom-xs">
				<div class="mright-sm">Sans (paragraph)</div>
				<div>System Default</div>
			</div>
			<!-- Serif -->
			<div class="flex mbottom-xs">
				<div class="mright-sm">Serif</div>
				<div><a href="https://fonts.google.com/specimen/Crimson+Pro" target="_blank" class="text-serif">Crimson Pro</a></div>
			</div>
			<!-- Monospace -->
			<div class="flex mbottom-xs">
				<div class="mright-sm">Monospace</div>
				<div class="value text-monospace">System Default</div>
			</div>
			<!-- FontAwesome -->
			<div class="flex mbottom-xs">
				<div class="mright-sm">Icon Font</div>
				<div><a href="https://fontawesome.com" target="_blank">Font Awesome Pro</a></div>
			</div>
		</div>

		<!-- h1 -->
		<h1 class="mtop-md">Heading one</h1>
		<h1 class="mtop-md mbottom-sm max-width-small">
			Heading one with a subheading
			<small>Adding a &lt;small&gt; block within your header will give you a subheader at 75%</small>
		</h1>
		<!-- p big -->
		<p class="big">
			Lorem ipsum dolor sit amet, <b>large paragraph</b> consectetur <a href="#">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<!-- h2 -->
		<h2 class="mtop-md">Heading two.</h2>
		<h2 class="mtop-sm max-width">This is a longer heading going to multiple lines hopefully this is enough.</h2>
		<!-- p regular -->
		<p>
			Lorem ipsum dolor sit amet, <b>regular paragraph</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<p class="small">
			Lorem ipsum dolor sit amet, <b>small paragraph</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<!-- h3 -->
		<h3 class="mtop-md">Heading three.</h3>
		<h3 class="mtop-sm max-width">This is an even longer heading going to multiple lines but the text is smaller so I have to make up a lot more.</h3>
		<h3 class="mtop-sm max-width">
			Heading with a button
			<button class="button small transparent mleft-md" @click="hello('Hi!', 'far fa-smile', 'pink')">
				<i class="far fa-mouse"></i>
				<span>Button</span>
			</button>
			<small>You can add a button to a header as well</small>
		</h3>
		<!-- p narrow -->
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<!-- h4 -->
		<h4 class="mtop-md">Heading four.</h4>
		<h4 class="mtop-sm">This is an even longer heading going to multiple lines but the text is smaller so I have to make up a lot more.</h4>
		<p>
			Lorem ipsum dolor sit amet, <b>regular paragraph</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<!-- h5 -->
		<h5 class="mtop-md">Heading 5.</h5>
		<h5 class="mtop-sm">This is an even longer heading going to multiple lines but the text is smaller so I have to make up a lot more.</h5>
		<p>
			Lorem ipsum dolor sit amet, <b>regular paragraph</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<!-- h6 -->
		<h6 class="mtop-md">Heading six.</h6>
		<h6 class="mtop-sm">This is an even longer heading going to multiple lines but the text is smaller so I have to make up a lot more.</h6>
		<p class="mbottom-xl small">
			Lorem ipsum dolor sit amet, <b>.small paragraph</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>


		<!-- Spacer -->
		<div class="mbottom-xl"></div>


	</div>
</template>

<script>

export default {
  	name: "InterfaceText",
  	components: {
	},
	mixins: [
	],
	data() {
		return{
		};
	},
	created: function () {
	},
	mounted(){
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "UI Typography");
	},
	methods: {
	}
};
</script>

<style lang="scss">
	// 
</style>
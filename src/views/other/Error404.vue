<!--
//! 404 page
//  Super simple 404 page
// 	Half large cover image
// 	Half simple 404 message
// 
// TODO: Change #photo404 background image
// TODO: Change 404 message
// 
-->

<template>
	<div id="page404">
		
		<div id="body404">
			<i class="fas fa-unlink"></i>
			<h1>Oops</h1>
			<h3>That page doesn't seem to exist</h3>
		</div>

	</div>
</template>

<script>
	export default {
		name: "error404",
		mixins: [
		],
		components: {
		},
		created: function () {
		},
		methods: {
		}
	};
</script>

<style lang="scss">

	#page404{
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 80vh;

		#body404{
			width: 80%;
			max-width: 500px;
			margin: 0 auto;

			i{
				font-size: 32px;
				float: right;
				color: var(--red);
			}

			h1{
				font-size: 52px;
				line-height: 82px;
			}
			h3{
				line-height: 30px;
			}
		}

	}
	
</style>

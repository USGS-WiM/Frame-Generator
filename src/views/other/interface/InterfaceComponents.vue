<!--
//!  Interface Components
	  Shows components
-->

<template>
	<div>

		<h3 class="mbottom-sm">
			Components
			<small>
				Reusable custom vue components to use throughout the app.
			</small>
		</h3>


		<!-- 
			Toggle
		 -->
		<h5 class="mtop-lg">Toggle</h5>
		<Toggle title="View Toggle Component Code" icon="far fa-code" class="max-width" size="small">
		<pre><code>
// import Toggle from "@/components/ui/Common/Toggle";

&lt;Toggle title=&quot;Toggle Title&quot; icon=&quot;far fa-code&quot; size=&quot;small&quot;&gt;
  Toggle content goes here
&lt;/Toggle&gt;

//Props: 
// size: default/blank or small
// open: true to default open
		</code></pre>
		</Toggle>


		<!-- 
			Tooltip
		 -->
		<h5 class="mtop-lg flex">
			Tooltip
			<Tooltip class="ptop-xxs" color="red" position="right" link="https://hotdi.sh" linkText="Click Here">
				This is the tooltip.
			</Tooltip>

		</h5>
		<Toggle title="View Code" icon="far fa-code" class="max-width" size="small">
		<pre><code>
// import Tooltip from "@/components/ui/Common/Tooltip";

&lt;Tooltip icon="far fa-code" color="red" position="right" link="https://hotdi.sh" linkText="Click Here"&gt;
  This is the tooltip.
&lt;/Tooltip&gt;

//Props: 
// color, icon, link, linktext
// position: default right, or top, left, bottom
		</code></pre>
		</Toggle>


		<!-- 
			Location Search
		 -->
		<h5 class="mtop-lg">
			Location Search
		</h5>
		<p class="small mbottom-xs">Uses PositionStack API to geocode user input location and return full location values</p>
		<LocationSearch 
			:showReset="true"
			class="max-width-small"
			size="full-width"
			:placeholder="'Search for a Location'"
			:activeSelection="hold.location"
			@changed="function(data){hold.location = data;}">
		</LocationSearch>

		<Toggle title="View Code" icon="far fa-code" class="max-width" size="small">
		<pre><code>
// import LocationSearch from "@/components/ui/Forms/LocationSearch";

&lt;LocationSearch 
  :showReset=&quot;true&quot;
  size=&quot;full-width&quot;
  :placeholder=&quot;'Search for a Location'&quot;
  :activeSelection=&quot;hold.location&quot;
  @changed=&quot;function(data){hold.location = data;}&quot;&gt;
&lt;/LocationSearch&gt;

//Props: 
// showReset, direction, icon, placeholder, activeSelection
		</code></pre>
		</Toggle>


		<!-- 
			Selections
		 -->
		<h5 class="mtop-lg">
			Selections
		</h5>
		<p class="small mbottom-xs">Custom select picker with search, multi select</p>
		<Selections 
			:textSearch="true"
			class="filter-bar-item"
			:suggestions="['Dog', 'Cat', 'Cow', 'Monkey', 'Zebra', 'Giraffe']"
			:limit="2" 
			direction="top"
			selectLabel="Select"
			noSelectionText="Select an animal"
			icon="far fa-cow"
			@changed="selectChoice">
		</Selections>

		<Toggle title="View Code" icon="far fa-code" class="max-width mtop-xs" size="small">
		<pre><code>
// import Selections from "@/components/ui/Forms/Selections";

&lt;Selections 
	:textSearch=&quot;true&quot;
	class=&quot;filter-bar-item&quot;
	:suggestions=&quot;['Dog', 'Cat', 'Cow', 'Monkey', 'Zebra', 'Giraffe']&quot;
	:limit=&quot;2&quot; 
	direction=&quot;top&quot;
	selectLabel=&quot;Select&quot;
	noSelectionText=&quot;Select an animal&quot;
	icon=&quot;far fa-cow&quot;
	@changed=&quot;selectChoice&quot;&gt;
&lt;/Selections&gt;

//Props: 
// Too many, check the selections.vue file
		</code></pre>
		</Toggle>

		<!-- Spacer -->
		<div class="mbottom-xl"></div>


	</div>
</template>

<script>
import Toggle from "@/components/ui/Common/Toggle";
import Tooltip from "@/components/ui/Common/Tooltip";
import LocationSearch from "@/components/ui/Forms/LocationSearch";
import Selections from "@/components/ui/Forms/Selections";

export default {
  	name: "InterfaceComponents",
  	components: {
		  Toggle,
		  Tooltip,
		  LocationSearch,
		  Selections,
	},
	mixins: [
	],
	data() {
		return{
			hold: {
				location: null,
				selection: null,
			}
		};
	},
	created: function () {
	},
	mounted(){
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "Components");
	},
	methods: {

		selectChoice: function(value){
			this.hold.selection = value;
		},
	}
};
</script>

<style lang="scss">
	// 
</style>
<!--
//!  Interface
	  Internal interface page to show existing UI elements
-->

<template>
	<div>

		<!-- Section tabs -->
		<div class="tabs page-nav no-scrollbars">

			<!-- Colors -->
			<button class="tab" v-bind:class="{'active': viewTab == 'colors'}" @click="viewTab = 'colors'">
				<i class="far fa-tint"></i>
				<span>Colors & Logos</span>
			</button>

			<!-- UI -->
			<button class="tab" v-bind:class="{'active': viewTab == 'ui'}" @click="viewTab = 'ui'">
				<i class="far fa-bullseye"></i>
				<span>Interface</span>
			</button>
			
			<!-- Forms -->
			<button class="tab" v-bind:class="{'active': viewTab == 'forms'}" @click="viewTab = 'forms'">
				<i class="far fa-i-cursor"></i>
				<span>Forms</span>
			</button>
			
			<!-- Components -->
			<button class="tab" v-bind:class="{'active': viewTab == 'components'}" @click="viewTab = 'components'">
				<i class="far fa-code"></i>
				<span>Components</span>
			</button>
			
			<!-- Typography -->
			<button class="tab" v-bind:class="{'active': viewTab == 'text'}" @click="viewTab = 'text'">
				<i class="far fa-text-size"></i>
				<span>Typography</span>
			</button>

		</div>


		<div class="page">

			<transition-group name="basic">
				<!-- Colors -->
				<InterfaceColors v-if="viewTab == 'colors'" key="1"></InterfaceColors>
				<!-- UI -->
				<InterfaceUI v-if="viewTab == 'ui'" key="3"></InterfaceUI>
				<!-- Forms -->
				<InterfaceForms v-if="viewTab == 'forms'" key="4"></InterfaceForms>
				<!-- Forms -->
				<InterfaceComponents v-if="viewTab == 'components'" key="5"></InterfaceComponents>
				<!-- Text -->
				<InterfaceText v-if="viewTab == 'text'" key="6"></InterfaceText>
			</transition-group>

		</div>
	</div>
</template>

<script>
// Components
import InterfaceColors from "@/views/other/interface/InterfaceColors.vue";
import InterfaceUI from "@/views/other/interface/InterfaceUI.vue";
import InterfaceForms from "@/views/other/interface/InterfaceForms.vue";
import InterfaceComponents from "@/views/other/interface/InterfaceComponents.vue";
import InterfaceText from "@/views/other/interface/InterfaceText.vue";

export default {
  	name: "Interface",
  	components: {
		  InterfaceColors,
		  InterfaceUI,
		  InterfaceForms,
		  InterfaceComponents,
		  InterfaceText,
	},
	mixins: [
	],
	mounted(){
	},
	data() {
		return{
			viewTab: "colors",
		};
	},
	created: function () {
	},
	methods: {
	}
};
</script>

<style lang="scss">
</style>
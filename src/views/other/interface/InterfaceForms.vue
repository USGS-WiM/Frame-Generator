<!--
//!  Forms
	  Form elements
-->

<template>
	<div>

		<h3 class="mbottom-sm">
			Buttons
		</h3>

		<!-- Buttons -->
		<!-- Button -->
		<button class="button mright-sm mbottom-sm">
			<i class="far fa-hand-peace"></i>
			<span>Default</span>
		</button>
		<!-- Green Button -->
		<button class="button green mright-sm mbottom-sm">
			<i class="far fa-badge-dollar"></i>
			<span>Green</span>
		</button>
		<!-- Red Button -->
		<button class="button red mright-sm mbottom-sm">
			<i class="far fa-syringe"></i>
			<span>Red</span>
		</button>
		<!-- Orange Button -->
		<button class="button orange mright-sm mbottom-sm">
			<i class="far fa-cat"></i>
			<span>Orange</span>
		</button>
		<!-- Yellow Button -->
		<button class="button yellow mright-sm mbottom-sm">
			<i class="far fa-sun"></i>
			<span>Yellow</span>
		</button>
		<!-- Purple Button -->
		<button class="button purple mright-sm mbottom-sm">
			<i class="far fa-wine-glass-alt"></i>
			<span>Purple</span>
		</button>
		<!-- Pink Button -->
		<button class="button pink mright-sm mbottom-sm">
			<i class="far fa-pig"></i>
			<span>Pink</span>
		</button>
		<!-- Grey Button -->
		<button class="button grey mright-sm mbottom-sm">
			<i class="far fa-headset"></i>
			<span>Grey</span>
		</button>
		<!-- Invert Button -->
		<button class="button invert mright-sm mbottom-sm">
			<i class="far fa-adjust"></i>
			<span>Invert</span>
		</button>
		<!-- Background Button -->
		<button class="button background mright-sm mbottom-sm">
			<i class="far fa-alien-monster"></i>
			<span>Background</span>
		</button>
		<!-- Transparent Button -->
		<button class="button transparent mright-sm mbottom-sm">
			<i class="far fa-ghost"></i>
			<span>Transparent</span>
		</button>
		<!-- Disabled Button -->
		<button class="button transparent mright-sm mbottom-sm" disabled>
			<i class="far fa-ban"></i>
			<span>Disabled</span>
		</button>


		<!-- Sizes -->
		<!-- Tiny Button -->
		<button class="button tiny mright-sm mbottom-sm">
			<i class="far fa-badge-check"></i>
			<span>Tiny</span>
		</button>
		<!-- Small Button -->
		<button class="button small mright-sm mbottom-sm">
			<i class="far fa-badge-check"></i>
			<span>Small</span>
		</button>
		<!-- Default Button -->
		<button class="button mright-sm mbottom-sm">
			<i class="far fa-badge-check"></i>
			<span>Default</span>
		</button>
		<!-- Big Button -->
		<button class="button big mright-sm mbottom-sm">
			<i class="far fa-badge-check"></i>
			<span>Big</span>
		</button>


		<h3 class="mtop-lg mbottom-sm">
			Tabs
		</h3>
		<!-- Tabs -->
		<div class="tabs no-scrollbars">
			<button class="tab" v-bind:class="{'active': tab == 1}" @click="tab = 1">
				<i class="far fa-spray-can"></i>
				<span>Tab</span>
			</button>
			<button class="tab" v-bind:class="{'active': tab == 2}" @click="tab = 2">
				<i class="far fa-coffin-cross"></i>
				<span>Tab</span>
			</button>
			<button class="tab" v-bind:class="{'active': tab == 3}" @click="tab = 3">
				<i class="far fa-cat-space"></i>
				<span>Tabby</span>
			</button>
		</div>
		
	
		<h3 class="mbottom-sm mtop-lg">
			Labels
		</h3>
		<div class="flex flex-wrap">

			<div class="mright-md">
				<label>Label</label>
			</div>
			<div class="mright-md">
				<label class="small">Small Label</label>
			</div>
			<div class="mright-md">
				<label class="flex">
					<span>Tooltip</span>
					<Tooltip :link="'https://hotdi.sh'" position="top" linkText="Links Too" color="blue" icon="far fa-info-square">
						This is a tooltip. You can put whatever in here and change the icons and links.
					</Tooltip>
				</label>
			</div>


		</div>


		<h3 class="mbottom-sm mtop-lg">
			Inputs
		</h3>
		<div class="flex flex-wrap flex-between max-width-small">
			<!-- Text Input -->
			<div class="max-width-small mright-sm mbottom-sm">
				<input type="text" placeholder="Text Input"/>
			</div>
			<!-- Disabled Input -->
			<div class="max-width-small">
				<input type="text" placeholder="Disabled Input" disabled/>
			</div>
		</div>

			
		<!-- Select -->
		<div class="aselect mtop-sm max-width-small">
			<select>
				<option selected>Select</option>
				<option>One</option>
				<option>Two</option>
				<option>Three</option>
			</select>
		</div>
	
		
		<textarea placeholder="Hey what's up hello textarea" class="mtop-md max-width-small"></textarea>


		<!-- Checkbox and Radio -->
		<div class="flex flex-wrap mtop-md">

			<div class="mright-md mbottom-sm">
				<div>
					<input id="testCheck" type="checkbox" class="check"/>
				</div>
			</div>
			<!-- Disabled -->
			<div class="mright-md mbottom-sm">
				<div>
					<input id="testCheck2" type="checkbox" class="check" disabled/>
				</div>
			</div>
			<!-- Radio -->
			<div class="mright-md mbottom-sm">
				<div>
					<input id="testCheck" type="radio" class="radio"/>
				</div>
			</div>
			<!-- Disabled -->
			<div class="mright-md mbottom-sm">
				<div>
					<input id="testCheck2" type="radio" class="radio" disabled/>
				</div>
			</div>

		</div>



		<div class="flex flex-wrap mtop-sm">

			<!-- Toggles -->
			<div class="mright-md mbottom-sm">
				<div>
					<input type="checkbox" class="toggle"/>
				</div>
			</div>
			<!-- Yes-No -->
			<div class="mright-md mbottom-sm">
				<div>
					<input type="checkbox" class="toggle yes-no"/>
				</div>
			</div>
			<!-- On-Off -->
			<div class="mright-md mbottom-sm">
				<div>
					<input type="checkbox" class="toggle on-off"/>
				</div>
			</div>
			<!-- true-false -->
			<div class="mright-md mbottom-sm">
				<div>
					<input type="checkbox" class="toggle true-false"/>
				</div>
			</div>
			<!-- Disabled -->
			<div class="mright-md mbottom-sm">
				<div>
					<input type="checkbox" class="toggle" disabled />
				</div>
			</div>

		</div>
		

		<!-- Input group -->
		<div class="input-group max-width-small mtop-sm">
			<span class="input-group-label">Label:</span>
			<input type="text" placeholder="With input"/>
		</div>

		<!-- Button Input -->
		<div class="button-input max-width-small mtop-md">
			<input type="text" placeholder="Input with"/>
			<button class="button">
				<i class="far fa-check-circle"></i>
				<span>Button</span>
			</button>
		</div>



		<!-- Range -->
		<div class="mtop-lg max-width-small">
			<input type="range" max="50" min="1" step="0.2"/>
		</div>





		<h3 class="mbottom-sm mtop-xl">
			Custom Form Elements
		</h3>

		<!-- Custom Pickers -->
		<div class="custom-picker no-scrollbars mbottom-lg">
			<label class="option" @click="picker = 1" :class="{'active': picker == 1}">
				<i class="far fa-virus"></i>
				<span>Virus</span>
				<input type="radio" tabindex="0"/>
			</label>
			<label class="option" @click="picker = 2" :class="{'active': picker == 2}">
				<i class="far fa-hotdog"></i>
				<span>Hotdog</span>
				<input type="radio" tabindex="0"/>
			</label>
			<label class="option" @click="picker = 3" :class="{'active': picker == 3}">
				<i class="far fa-rv"></i>
				<span>RV</span>
				<input type="radio" tabindex="0"/>
			</label>
			<label class="option" @click="picker = 4" :class="{'active': picker == 4}">
				<i class="far fa-skull-crossbones"></i>
				<span>Dead</span>
				<input type="radio" tabindex="0"/>
			</label>
		</div>

		<div class="custom-picker horizontal no-scrollbars mbottom-lg">
			<label class="option" @click="picker2 = 1" :class="{'active': picker2 == 1}">
				<i class="far fa-ring"></i>
				<span>Ring</span>
				<input type="radio" tabindex="0"/>
			</label>
			<label class="option" @click="picker2 = 2" :class="{'active': picker2 == 2}">
				<i class="far fa-snowplow"></i>
				<span>Plow</span>
				<input type="radio" tabindex="0"/>
			</label>
			<label class="option" @click="picker2 = 3" :class="{'active': picker2 == 3}">
				<i class="far fa-rocket"></i>
				<span>Rocket</span>
				<input type="radio" tabindex="0"/>
			</label>
			<label class="option" @click="picker2 = 4" :class="{'active': picker2 == 4}">
				<i class="far fa-trophy-alt"></i>
				<span>Trophy</span>
				<input type="radio" tabindex="0"/>
			</label>
		</div>


		<!-- Tags -->
		<ul class="tag-entries small pbottom-sm">
			<li>Tag</li>
			<li>Another Tag</li>
			<li>#tag</li>
			<li>
				Deletable
				<button class="delete-item" aria-label="Delete tag">
					<i class="far fa-times"></i>
				</button>
			</li>
		</ul>


		<!-- Spacer -->
		<div class="mbottom-xl"></div>


	</div>
</template>

<script>
// Components
import Tooltip from "@/components/ui/Common/Tooltip";

export default {
  	name: "InterfaceForms",
  	components: {
		  Tooltip,
	},
	mixins: [
	],
	data() {
		return{
			picker: 1,
			picker2: 3,
			tab: 1,
		};
	},
	created: function () {
	},
	mounted(){
		this.$store.dispatch("Hold/CHANGE_PAGE_TITLE", "UI Forms");
	},
	methods: {
	}
};
</script>

<style lang="scss">
	// 
</style>
//! Settings Store
// Holds settings changeable by user

// $store.dispatch('Hold/STORE_ALERT', {message: 'Something went wrong', icon: 'far fa-exclamation-triangle', color: 'red'})


import Vue from "vue";

import { stateMerge } from "vue-object-merge";
import debounce from "lodash/debounce";


const state = {
	confirm_leave: true,
	dark_theme: null,
	maps: true,
	accessibility: {
		animations: true,
		outlines: true,
	},
};


const mutations = {

	SET_DARK_THEME(state, val){
		state.dark_theme = val;
	},

	SET_ACCESSIBILITY_ANIMATION(state, val){
		state.accessibility.animations = val;
	},

	SET_ACCESSIBILITY_OUTLINES(state, val){
		state.accessibility.outlines = val;
	},

};


const getters = {
	darkMode( state ) {
		return state.dark_theme;
	},
	animations( state ) {
		return state.dark_theme;
	},
	outlines( state ) {
		return state.dark_theme;
	},

};


const actions = {

	// Preferences
	TOGGLE_DARK_THEME({ commit, getters, dispatch }, payload) {
		let _this = this;

		var dark = function(){
			commit("SET_DARK_THEME", true);
			document.documentElement.setAttribute("data-theme", "dark");
			document.querySelector("meta[name=\"theme-color\"]").setAttribute("content",  "#07070f");
		};
		var light = function(){
			commit("SET_DARK_THEME", false);
			document.documentElement.setAttribute("data-theme", "light");
			document.querySelector("meta[name=\"theme-color\"]").setAttribute("content",  "#00172E");
		};

		if(payload.on == true){
			dark();
		}else if(payload.on == false){
			light();
		}
	},

	// Animation Setting
	TOGGLE_ACCESSIBILITY_ANIMATIONS({ commit }, value) {
		commit("SET_ACCESSIBILITY_ANIMATION", value);
	},
	// Outline Setting
	TOGGLE_ACCESSIBILITY_OUTLINES({ commit }, value) {
		commit("SET_ACCESSIBILITY_OUTLINES", value);
	},

	
};


export default {
	namespaced: true,
    state,
    getters,
    actions,
    mutations
};
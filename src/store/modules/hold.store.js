//! Hold Store
// Holds misc info for use throughout app

import { stateMerge } from "vue-object-merge";
import debounce from "lodash/debounce";
import router from '@/router'


const state = {
	// Title of page - used on top bar and tab
	pageTitle: "Home Page",
	// Show loaders
	loading: false,
	// If true, confirm leave dialog appears before next navigate()
	confirmLeave: false,
	// If true, scrolling will lock (ie when modals are visible)
	scrollLock: false,

	// User device geolocation
	geolocation: null,

	// Content
	modalOpen: false,

	// Current App Version
	appVersion: "0.5.00",
};


const mutations = {
    SET_PAGE_TITLE(state, val) {
		state.pageTitle = val;
	},
    SET_LOADING(state, val) {
		state.loading = val;
	},
    SET_CONFIRM_LEAVE(state, val) {
		state.confirmLeave = val;
	},
    SET_SCROLL_LOCK(state, val) {
		state.scrollLock = val;
	},
    SET_GEOLOCATION(state, val) {
		state.geolocation = val;
	},
    SET_MODAL_OPEN(state, val) {
		state.modalOpen = val;
	},
    SET_APP_VERSION(state, val) {
		state.appVersion = val;
	},
};


const getters = {
	dataLoaded( state ) {
		return state.dataLoaded;
	},
	pageTitle( state ) {
		return state.pageTitle;
	},
	loading( state ) {
		return state.loading;
	},
	loginRedirectUrl( state ) {
		return state.loginRedirectURL;
	},
	showConfirmLeave( state ) {
		return state.confirmLeave;
	},
	scrollLock( state ) {
		return state.scrollLock;
	},
	pageTheme( state ) {
		return state.pageTheme;
	},
	geolocation( state ) {
		return state.geolocation;
	},
	viewingContent( state ) {
		return state.viewingContent;
	},
	modalOpen( state ) {
		return state.modalOpen;
	},
	appVersion( state ) {
		return state.appVersion;
	},
};


const actions = {

	CHANGE_PAGE_TITLE({ commit }, value) {
		commit("SET_PAGE_TITLE", value);
		document.title = value;
	},
	
	// Loading
	IS_LOADING({ commit, getters, dispatch }, value) {
		var type = "data";
		if(value == "page"){
			type = "page";
			dispatch("SCROLL_LOCK", true);
		}
		commit("SET_LOADING", type);

		// Auto timeout after 20s if it's not false
		setTimeout(function(){
			if(getters.loading != false){
				dispatch("STOP_LOAD");
			}
		// }, 4000)
		}, 20000);
	},

	STOP_LOAD({ commit, getters, dispatch }) {
		if(getters.loading){
			if(getters.loading == "page"){
				dispatch("SCROLL_LOCK", false);
			}
			commit("SET_LOADING", false);
		}
	},

	CONFIRM_LEAVE({ commit }, value) {
		var x = true;
		if(!value){
			x = false;
		}
		commit("SET_CONFIRM_LEAVE", x);
	},

	SCROLL_LOCK({ commit }, value) {
		commit("SET_SCROLL_LOCK", value);
	},


	// Geolocation
	UPDATE_GEOLOCATION({ commit }, value) {		
		commit("SET_GEOLOCATION", value);
	},

	
	// Open / Close Modal
	MODAL_OPEN({ commit }, data) {		
		commit("SET_MODAL_OPEN", data);
	},


	
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
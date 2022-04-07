//! Plugins
// Global methods to use in any mixin or component
//
// cleanArray(array): removes dupes from array
// 	scrollUp(): scrolls the page to top
// 	deplural(string): removes trailing s from string
// 	isValidURL(url): Returns true if URL is valid
// 	twentyFour(time): Converts 24h to 12hr
// 	lettersAndNumbers(string): Converts string to only letters and numbers and spaces
// 	navigate(route): pushes route to update vue router
// 	tab(url): opens url in new tab
// 	share(shareTextt, alertText): Activates native sharing dialog or falls back to copy to clipboard
// 	copyToClipboard(name, value): Copies value to clipboard, shows toast confirmation
// 	toast(): provides easy this.toast() call to use in any component.
// 	hello(message, icon, color): Shows tiny yellow toast for a brief moment
// 	getGeolocation(): Gets device geolocation and stores in store

import { _ } from "core-js";
import axios from "axios";

export default {

	install(Vue, options){

		// Array Duplicates
		// Removes duplicates in array
		Vue.prototype.cleanArray = function(array) {
			var a = array.concat();
			for(var i=0; i<a.length; ++i) {
				for(var j=i+1; j<a.length; ++j) {
					if(a[i] === a[j])
						a.splice(j--, 1);
				}
			}
			return a;
		};

		// Scroll up
		// Simply scrolls to top of page
		Vue.prototype.scrollUp = function() {
			document.getElementById("mainScrollView").scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			  });
		};


		// Removes S from string if it's the last letter
		Vue.prototype.deplural = function(string) {
			return string.replace(/s$/, "");
		};

		// Removes S from string if it's the last letter
		Vue.prototype.isValidURL = function(url) {
			const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
			this.validUrl = regex.test(url);
			return this.validUrl;
		};


		// Replace underscore with space
		Vue.prototype.twentyFour = function(time) {

			var split = time.split(":");
			var hours = parseInt(split[0]);
			var minutes = split[1];
			var ampm = "am";

			if(hours > 12){
				hours = hours - 12;
				ampm = "pm";
			}

			return hours + ":" + minutes + ampm;
		};

		// Replace string with only letters and numbers
		Vue.prototype.lettersAndNumbers = function(string) {
			return string.replace(/[^a-z0-9 ]/gi,"");
		};

		// Navigate
		// Function to navigate with -> navigate("/route")
		// This lets you use custom elements that are accessible/focusable, rather than router-link
		// then use @click to navigate()
		Vue.prototype.navigate = function(route, confirm) {

			// If same route, don't navigate
			if(route == this.$route.path){
				return;
			}else{

				var confirmLeave = this.$store.getters["Hold/showConfirmLeave"];

				// If confirmLeave is true
				if(confirmLeave){
					// Show confirmation
					this.$root.$children[0].$refs.confirmLeaveComponent.confirmLeave(route);
				}else{
					// Else no confirmation needed
					this.$router.push(route);
					// document.documentElement.scrollTop = 0;
				}
			}
		};


		// Open url in new tab
		Vue.prototype.tab = function(url) {
			window.open(url, "_blank");
		};


		// Native Sharing
		// Falls back to copy to clipboard
		Vue.prototype.share = function(shareText, alertText ) {
			var text = "Check this out: ";
			var thing = "Link";
			let _this = this;


			if(shareText){
				text = shareText;
			}
			if(alertText){
				thing = alertText;
			}

			if (navigator.share) {
				navigator.share({
					title: document.title,
					text: text,
					url: location.href,
				})
				.catch((error) => _this.$log().error("Error sharing", error));
			}else{
				this.copyToClipboard(thing, location.href);
			}
		};

		// Copy value to device clipboard 
		Vue.prototype.copyToClipboard = function(name, value) {
			// Create input element, append text, copy text, remove element
			var inp =document.createElement("input");
			document.body.appendChild(inp);
			inp.value = value;
			inp.select();
			document.execCommand("copy",false);
			inp.remove();
			// Toast
			if(name){
				this.hello(name + " copied to clipboard. ", "far fa-copy", "blue");
			}
		};

		// Toast & Hello
		// Toast & Hello
		Vue.prototype.toast = function(title, body, color, icon, path, info) {
			this.$root.$children[0].$refs.toastComponent.showToast(title, body, color, icon, path, info);
			if(this.$store.getters["Device/hasSmallScreen"] && this.$store.getters["Device/hasTouch"]){
				navigator.vibrate(15);
			}
		};
		Vue.prototype.hello = function(message, icon, color) {
			this.$root.$children[0].$refs.alertComponent.showAlert(message, icon, color);
			if(this.$store.getters["Device/hasSmallScreen"] && this.$store.getters["Device/hasTouch"]){
				navigator.vibrate(15);
			}
		};

		// Get Geolocation
		Vue.prototype.getGeolocation = function() {
			let _this = this;

			return new Promise((resolve, reject) => {

				var geoloc = null;

				_this.hello("Getting Location...", "far fa-location");

				navigator.geolocation.getCurrentPosition(
					function(position) {
						geoloc = {
							lat: position.coords.latitude,
							lon: position.coords.longitude,
							updated: new Date(),
						};
						_this.$store.dispatch("Hold/UPDATE_GEOLOCATION", geoloc);
						resolve(geoloc);
						_this.hello("Geolocation Updated", "far fa-map-marker-smile", "green");
					},
					function(error){
						_this.$log().error(error.message);
						if(error.code == 3){
							_this.hello("Location Timed Out", "far fa-location-slash", "red");
						}else{
							_this.hello("Unable to access your location", "far fa-location-slash", "red");
						}
						reject(error);
					}, {
						enableHighAccuracy: true,
						timeout : 5000
					}
				);
	
			});


			
		};

	
	}
  
 };
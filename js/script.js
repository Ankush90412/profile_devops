"use strict";

/**
 * Light and Dark Mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme:light)")
	.matches;

 console.log(window.matchMedia("(prefers-color-scheme:dark)"));
 console.log(isDark);

if (sessionStorage.getItem("theme")) {
	$HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
	$HTML.dataset.theme = isDark ? "dark" : "light";
	// sessionStorage.setItem("theme", $HTML.dataset.theme)
}

const changeTheme = () => {
	$HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
	sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);

/**
 * Tab
 */

const /**{NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /**{NodeElement} */[lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /**{NodeElement} */[lastActiveTabBtn] = $tabBtn;

// console.log($tabBtn)
// console.log([lastActiveTab])
// console.log([lastActiveTabBtn])

$tabBtn.forEach(item => {
	// console.log(lastActiveTab.classList);
	// console.log(lastActiveTabBtn.classList);
	// const/**{NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`)
	// console.log($tabContent)
	item.addEventListener("click", function () {
		lastActiveTab.classList.remove("active");
		lastActiveTabBtn.classList.remove("active");
		const/**{NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`)
		$tabContent.classList.add("active");
		this.classList.add("active");

		lastActiveTab = $tabContent;
		lastActiveTabBtn = this;
	})
})
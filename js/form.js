/**
 * HTML Form To Google Sheet
 */
const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit-btn")
const scriptURL = "https://script.google.com/macros/s/AKfycbyiPINZ9xWAD6vXt93zrgGYQK39HHd120L0ZUin-AVm-VojRB-0wGYMFZGy-pxLl5_d/exec"
/**
 * After Submit Form
 */
const popup = document.getElementById("popup");
const sendMsgBtn = document.querySelector("#send_msg_btn")

var spinner = `
<div class="justify-content-center">
	<strong>Loading...</strong>

	<div class="spinner-border text-dark" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
</div>
`


function openPopup() {
	popup.classList.add('open-popup');
}

function closePopup() {
	popup.classList.remove('open-popup');
}
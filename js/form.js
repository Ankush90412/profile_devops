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

form.addEventListener('submit', e => {
	submitButton.disabled = true
	e.preventDefault()
	let requestBody = new FormData(form)

	var temp = sendMsgBtn.innerHTML;
	sendMsgBtn.innerHTML = spinner;

	fetch(scriptURL, { method: 'POST', body: requestBody })
		.then(response => {
			console.log("Response : " + response.status);
			if (response.status == '200') {
				openPopup();
			}
			submitButton.disabled = false
			form.reset();
			sendMsgBtn.innerHTML = temp
			return response.json();
		})
		.then(data => {
			console.log("Response Body : ", data);
		})
		.catch(error => {
			console.error("Error : " + error.message);
			form.reset();
			sendMsgBtn.innerHTML = temp
			submitButton.disabled = false
		})
})

function openPopup() {
	popup.classList.add('open-popup');
}

function closePopup() {
	popup.classList.remove('open-popup');
}
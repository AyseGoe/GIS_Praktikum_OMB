"use strict";
var Client;
(function (Client) {
    const url = "http://localhost:3000/";
    const saveDatePath = "saveDate";
    const form = document.getElementById("myform");
    const sendDateButton = document.getElementById("send-button");
    const display = document.getElementById("display");
    sendDateButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        sendForm(saveDatePath);
    });
    async function sendForm(path) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let urlWithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlWithQuery);
        let text = await response.text();
        display.textContent = text;
    }
})(Client || (Client = {}));
const saveDatePath = "";
//# sourceMappingURL=client.js.map
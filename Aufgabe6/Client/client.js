"use strict";
var Client;
(function (Client) {
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    //  const anderepath: string ="/"  ;
    const myForm = document.getElementById("myform");
    const sendButton = document.getElementById("send-button");
    const convertButton = document.getElementById("convert-button");
    const display = document.getElementById("display");
    const date = document.getElementById("date");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    async function GetDate(url) {
        let response = await fetch(url);
        let responseText = await response.text();
        return responseText;
    }
    async function sendForm() {
        let inputValue = JSON.stringify(date.value);
        let serverAntwort = await GetDate(url + path + `?responseText =${inputValue}`);
        sendForm2(serverAntwort);
        //datezumServer
        //  let formData: FormData = new FormData(myForm); 
        //  let query: URLSearchParams = new URLSearchParams(<any>formData); 
        //  let urlWithQuery: string = url + path + "?" + query.toString(); 
    }
    function sendForm2(ServerResponse) {
        let neudate = document.createElement("p");
        neudate.className = "ServerResponse";
        neudate.textContent = ServerResponse;
        display.appendChild(neudate);
    }
})(Client || (Client = {}));
const convertDatePath = "";
//# sourceMappingURL=client.js.map
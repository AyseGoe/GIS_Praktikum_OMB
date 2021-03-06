"use strict";
//const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform"); 
const sendButton = document.getElementById("sendButton");
const inputInterpret = document.getElementById("interpret");
const inputPrice = document.getElementById("price");
const tabelle = document.getElementById("tabelle");
let removeId = 0;
console.log(sendButton);
//dasTypescript     
const url = "http://localhost:3000";
const path = "/concertEvents";
let eventFromSever = [];
window.addEventListener("load", () => {
    getData();
});
sendButton.addEventListener("click", onSendeButton);
async function getData() {
    let response = await fetch(url + path);
    let responseText = await response.text();
    console.log(responseText);
    eventFromSever = JSON.parse(responseText);
    console.log(eventFromSever);
    for (let i = 0; i < eventFromSever.length; i++) {
        createTr(eventFromSever[i].interpret, eventFromSever[i].price);
    }
}
async function onSendeButton(event) {
    event.preventDefault();
    let Konzert = {
        interpret: inputInterpret.value,
        price: inputPrice.value
    };
    //eventFromSever.push(Konzert);
    console.log(Konzert);
    createTr(Konzert.interpret, Konzert.price);
    sendJSONStringWithPost(url + path, JSON.stringify(Konzert));
    setTimeout(() => {
        clearInput();
    }, 100);
}
async function sendJSONStringWithPost(url, jsonString) {
    await fetch(url, {
        method: "POST",
        body: jsonString
    });
    console.log("event sent");
}
function createTr(interpretWert, priceWert) {
    removeId = removeId + 1;
    let tr = document.createElement("tr");
    let interpret = document.createElement("td");
    let price = document.createElement("td");
    let removeBtnId = "removeBtn" + removeId;
    interpret.textContent = interpretWert;
    price.textContent = priceWert;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeBtn.setAttribute("id", removeBtnId);
    tabelle.appendChild(tr);
    tr.setAttribute("id", "row-" + removeBtnId);
    tr.appendChild(interpret);
    tr.appendChild(price);
    tr.appendChild(removeBtn);
}
function clearInput() {
    inputInterpret.value = "";
    inputPrice.value = "";
}
//# sourceMappingURL=client.js.map
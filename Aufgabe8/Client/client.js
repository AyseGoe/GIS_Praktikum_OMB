"use strict";
//const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform"); 
const sendButton = document.getElementById("send-button");
const inputInterpret = document.getElementById("interpret");
const inputPrice = document.getElementById("price");
const tabelle = document.getElementById("tabelle");
let removeId = 0;
//dasTypescript     
const url = "http://localhost:3000/";
const pathEinzeln = "concertEvents";
const pathAlle = "Konzert";
let eventFromSever = [];
window.addEventListener("load", () => {
    sendForm();
});
sendButton.addEventListener("click", onSendeButton);
async function sendForm() {
    let response = await fetch(url + pathAlle);
    let responseText = await response.text();
    eventFromSever = JSON.parse(responseText);
    console.log(eventFromSever);
    for (let i = 0; i < eventFromSever.length; i++) {
        createTr(eventFromSever[i].interpret, eventFromSever[i].price, eventFromSever[i].save, eventFromSever[i].index);
    }
}
async function onSendeButton(event) {
    event.preventDefault();
    let Konzert = {
        index: eventFromSever.length - 1,
        interpret: inputInterpret.value,
        price: inputPrice.value,
        itemId: "",
        save: ""
    };
    eventFromSever.push(Konzert);
    console.log(Konzert);
    createTr(Konzert.interpret, Konzert.price, Konzert.itemId, Konzert.index);
    sendJSONStringWithPost(url + pathEinzeln, JSON.stringify(Konzert));
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
function createTr(interpretWert, priceWert, save, index) {
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
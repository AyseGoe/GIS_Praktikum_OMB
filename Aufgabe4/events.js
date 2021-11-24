"use strict";
var testNameSpace;
(function (testNameSpace) {
    const inputInterpret = document.getElementById("input.interpret");
    const inputPrice = document.getElementById("input-price");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#submit");
    const tabelle = document.getElementById("Tabelle");
    /*document.getElementById("machEtwas").onclick = displayDate;*/
    myButton.addEventListener("click", () => {
        createTr();
    });
    function createTr() {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = inputInterpret.value;
        td.textContent = inputPrice.value;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        let Tabelle = document.createElement("tr");
        tabelle.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(removeBtn);
        removeBtn.appendChild(removeBtn);
    }
    let arrayFromStorageAsString = localStorage.getItem("localStorageElement");
    let numbersArray = JSON.parse(arrayFromStorageAsString);
    console.log(numbersArray);
    myButton.addEventListener("click", mybuttonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    let array = [12, 15, 17, 20];
    let arrayString = JSON.stringify(array);
    localStorage.setItem("localStorageElement", arrayString);
    function mybuttonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        let _Interpret = document.createElement("td");
        _Interpret.textContent = interpretValue;
        let _price = document.createElement("td");
        let _removeBtn = document.createElement("td");
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        //console.log("button click");
        let arrayFromStorageAsString = localStorage.getItem("localStorageElement");
        let numbersArray = JSON.parse(arrayFromStorageAsString);
        console.log(numbersArray);
        console.log(numbersArray[0] * numbersArray[2]);
        //  display.textContent=interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
    }
})(testNameSpace || (testNameSpace = {}));
//# sourceMappingURL=events.js.map
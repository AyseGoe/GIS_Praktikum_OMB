"use strict";
var testNameSpace;
(function (testNameSpace) {
    const inputInterpret = document.getElementById("input.interpret");
    const inputPrice = document.getElementById("input-price");
    const myButton = document.querySelector("#submit");
    const tabelle = document.getElementById("tabelle");
    let reihe = [];
    let laden = [];
    let speichern;
    window.addEventListener("load", () => {
        //localStorage.clear();
        tabelleLadeen();
    });
    myButton.addEventListener("click", () => {
        createTr(inputInterpret.value, inputPrice.value);
    });
    function createTr(interpretWert, priceWert) {
        let tr = document.createElement("tr");
        let interpret = document.createElement("td");
        let price = document.createElement("td");
        interpret.textContent = interpretWert;
        price.textContent = priceWert;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        tabelle.appendChild(tr);
        tr.appendChild(interpret);
        tr.appendChild(price);
        tr.appendChild(removeBtn);
        let eintrag = {
            interpret: interpret.textContent,
            price: price.textContent
        };
        reihe.push(eintrag);
        speichern = JSON.stringify(reihe);
        localStorage.setItem("einträge", speichern);
        removeBtn.addEventListener("click", function () {
            tabelle.removeChild(tr);
        });
    }
    function tabelleLadeen() {
        if (localStorage.length < 1)
            return;
        laden = JSON.parse(localStorage.getItem("einträge"));
        console.log(laden);
        for (let i = 0; i < laden.length; i++) {
            createTr(laden[i].interpret, laden[i].price);
        }
        reihe = laden;
        laden = [];
    }
})(testNameSpace || (testNameSpace = {}));
//# sourceMappingURL=events.js.map
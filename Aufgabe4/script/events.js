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
    myButton.addEventListener("click", (event) => {
        event.preventDefault();
        createTr(inputInterpret.value, inputPrice.value, true, 0);
        /*localStorage.eintrag = JSON.stringify({
          "inputInterpret" : inputInterpret.value, "Inputprice" : inputPrice.value
        });*/
    });
    let removeId = 0;
    function createTr(interpretWert, priceWert, save, index) {
        removeId = removeId + 1;
        let tr = document.createElement("tr");
        let interpret = document.createElement("td");
        let price = document.createElement("td");
        interpret.textContent = interpretWert;
        price.textContent = priceWert;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        removeBtn.setAttribute("id", "removeBtn" + removeId);
        tabelle.appendChild(tr);
        tr.appendChild(interpret);
        tr.appendChild(price);
        tr.appendChild(removeBtn);
        let speicherIndex = index;
        if (save == true) {
            let eintrag = {
                interpret: interpret.textContent,
                price: price.textContent
            };
            reihe.push(eintrag);
            speicherIndex = reihe.length - 1;
            speichern = JSON.stringify(reihe);
            localStorage.setItem("einträge", speichern);
            /* localStorage.einträge = JSON.stringify({
               "inputInterpret" : inputInterpret.value, "Inputprice" : inputPrice.value
             });*/
        }
        removeBtn.addEventListener("click", function () {
            let localStorageList = JSON.parse(localStorage.getItem("einträge"));
            /*  reihe.splice(speicherIndex, 1);
              speichern = JSON.stringify(reihe);
              localStorage.setItem("einträge", speichern);
             
              tabelle.removeChild(tr);*/
            let buttonId = this.id;
            console.log(buttonId);
            for (var i = 0; i < localStorageList.length; i++) {
                var items = JSON.parse(localStorageList[i]);
                if (reihe.itemId == buttonId) {
                    reihe.splice(i, 1);
                }
            }
        });
        /*localStorage.einträge = JSON.stringify({
          "inputInterpret" : inputInterpret.value, "inputprice" : inputPrice.value
        });*/
    }
    function tabelleLadeen() {
        if (localStorage.length < 1)
            return;
        laden = JSON.parse(localStorage.getItem("einträge"));
        console.log(laden);
        for (let i = 0; i < laden.length; i++) {
            createTr(laden[i].interpret, laden[i].price, false, i);
        }
        reihe = laden;
        laden = [];
    }
})(testNameSpace || (testNameSpace = {}));
//# sourceMappingURL=events.js.map
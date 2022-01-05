"use strict";
var testNameSpace;
(function (testNameSpace) {
    const inputInterpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
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
        if (save == true) {
            let eintrag = {
                interpret: interpret.textContent,
                price: price.textContent,
                itemId: removeBtnId
            };
            reihe.push(eintrag);
            speichern = JSON.stringify(reihe);
            localStorage.setItem("einträge", speichern);
            var interpretValue = document.getElementById("interpret");
            var priceValue = document.getElementById("price");
            interpretValue.value = null;
            priceValue.value = null;
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
            for (var i = 0; i < localStorageList.length; i++) {
                var removedItem = localStorageList[i];
                if (removedItem.itemId == buttonId) {
                    reihe.splice(i, 1);
                }
            }
            speichern = JSON.stringify(reihe);
            localStorage.setItem("einträge", speichern);
            document.getElementById(this.id).parentElement.remove();
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
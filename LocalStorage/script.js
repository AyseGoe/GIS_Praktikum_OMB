"use strict";
var localStorageBeispiel;
(function (localStorageBeispiel) {
    //Variante1
    const inputFeld = document.getElementById("input-element");
    /*Variante 2
    const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-Element");
*/
    const saveButton = document.getElementById("save-button");
    const loadButton = document.getElementById("load- button");
    const display = document.getElementById("display");
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
    console.log("Test");
    //Wa passiert wenn der Buttonn gecklickt wird
    //void kein Rückgabewert
    function saveButtonHandler() {
        console.log("Save Button clicked");
        console.log("aktuelle Input:" + inputFeld.value);
        //muss was eindeutiges sein sonst kann es imm localStorage nicht angezeigt werden
        localStorage.setItem("gis_praktikum_input", inputFeld.value);
    }
    //LocalStorage kann nur Strings abspeichern!
    function loadButtonHandler() {
        console.log("Load Button clicked");
        let valueFromLocalStorage = localStorage.getItem("gis_praktikum_input");
        console.log("aktuelle Wert im Local Storage" + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
        //JSON ermöglicht aus iwelchen Objekten Strings zu generieren, man kann aus dem Objekt ein String machen und aus einem String ein Objekt 
    }
})(localStorageBeispiel || (localStorageBeispiel = {}));
//# sourceMappingURL=script.js.map
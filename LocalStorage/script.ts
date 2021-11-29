namespace localStorageBeispiel {
    //Variante1
    const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-element");
    /*Variante 2
    const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-Element");
*/
    const saveButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("save-button");
    const loadButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("load- button");
    const display: HTMLDivElement = <HTMLDivElement>document.getElementById("display");

    saveButton.addEventListener("click", saveButtonHandler );
    loadButton.addEventListener("click", loadButtonHandler);


    console.log("Test");

    //Wa passiert wenn der Buttonn gecklickt wird
    //void kein Rückgabewert
    function saveButtonHandler(): void {
        console.log("Save Button clicked");
        console.log("aktuelle Input:" + inputFeld.value);
        //muss was eindeutiges sein sonst kann es imm localStorage nicht angezeigt werden
        localStorage.setItem("gis_praktikum_input", inputFeld.value);
    }

    //LocalStorage kann nur Strings abspeichern!
    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("gis_praktikum_input");
        console.log("aktuelle Wert im Local Storage" + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
        //JSON ermöglicht aus iwelchen Objekten Strings zu generieren, man kann aus dem Objekt ein String machen und aus einem String ein Objekt 

    }
}
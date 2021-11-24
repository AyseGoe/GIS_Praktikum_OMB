namespace testNameSpace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input.interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
    const tabelle: HTMLElement = <HTMLElement>document.getElementById("Tabelle");

    /*document.getElementById("machEtwas").onclick = displayDate;*/

    myButton.addEventListener("click", (): void => {
      createTr();
    } );
    
    function createTr() {
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = inputInterpret.value;
    td.textContent = inputPrice.value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";


    let Tabelle: HTMLElement = document.createElement("tr");
    tabelle.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(removeBtn);
    removeBtn.appendChild(removeBtn);
 }

    let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
    let numbersArray: number[] = JSON.parse(arrayFromStorageAsString);
    console.log(numbersArray);

    myButton.addEventListener("click", mybuttonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    

    let array: number[] = [12, 15, 17, 20];
    let arrayString: string = JSON.stringify(array);

    localStorage.setItem("localStorageElement", arrayString);

    function mybuttonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        let _Interpret: HTMLElement = document.createElement("td");
        _Interpret.textContent = interpretValue;
        let _price: HTMLElement = document.createElement("td");
        let _removeBtn: HTMLElement = document.createElement("td");
        let removeBtn: HTMLButtonElement = document.createElement("button");
        removeBtn.textContent = "remove";

        //console.log("button click");
        let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
        let numbersArray: number[] = JSON.parse(arrayFromStorageAsString);
        console.log(numbersArray);
        console.log(numbersArray[0] * numbersArray[2]);

      //  display.textContent=interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
    }
}
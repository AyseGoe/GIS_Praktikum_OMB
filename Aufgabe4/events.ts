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

        let interpretValue:string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);

        //Lösch Button erstellen 
        let new Element: HTMLDivElement = document.createElement("div");
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Löschen";

        newElement.appendChild(deleteButton);

        //fnction von deletButton da Parameter
        deleteButton.addEventListener("click", function(){
          deleteButton(newElement);

        });


      //  display.textContent=interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);

        newElement.appendChild(deleteButton);

    

        //console.log("button click");
        let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
        let numbersArray: number[] = JSON.parse(arrayFromStorageAsString);
        console.log(numbersArray);
        console.log(numbersArray[0] * numbersArray[2]);
    }
    
    function deleteEvent(parentElement: HTMLDivElement): void {
      console.log("deleteEvent wurde aufgerufen!");
      display.removeChild(parentElement);
    }
}
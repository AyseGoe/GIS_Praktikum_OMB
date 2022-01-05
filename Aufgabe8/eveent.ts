namespace testNameSpace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
    const tabelle: HTMLElement = <HTMLElement>document.getElementById("tabelle");

    interface Reihe {
    interpret: string;
    price: string;
    itemId: string;
  }

    let reihe: Reihe[] = [];
    let laden: Reihe[] = [];
    let speichern: string;

    window.addEventListener("load", (): void => {
      //localStorage.clear();
    //  tabelleLadeen();
    });

    myButton.addEventListener("click", (event: Event): void => {
      event.preventDefault();
      createTr(inputInterpret.value, inputPrice.value, true, 0);

      /*localStorage.eintrag = JSON.stringify({
        "inputInterpret" : inputInterpret.value, "Inputprice" : inputPrice.value
      });*/

    });

    let removeId: number = 0;
    
    function createTr(interpretWert: string, priceWert: string, save: boolean, index: number): void {
      removeId = removeId + 1;
      let tr: HTMLElement = document.createElement("tr");
      let interpret: HTMLElement = document.createElement("td");
      let price: HTMLElement = document.createElement("td");
      let removeBtnId: string = "removeBtn" + removeId;

      interpret.textContent = interpretWert;
      price.textContent = priceWert;

      let removeBtn: HTMLElement = document.createElement("button");
      removeBtn.textContent = "remove";
      removeBtn.setAttribute("id", removeBtnId);

      tabelle.appendChild(tr);
      tr.setAttribute("id", "row-" + removeBtnId);
      tr.appendChild(interpret);
      tr.appendChild(price);
      tr.appendChild(removeBtn);

    /*  if (save == true) {
        let eintrag: Reihe = {
          interpret: interpret.textContent,
          price: price.textContent,
          itemId: removeBtnId
        };
  
        reihe.push(eintrag);
  
        speichern = JSON.stringify(reihe);       
        localStorage.setItem("einträge", speichern);    
        var interpretValue = (<HTMLInputElement>document.getElementById("interpret"));
        var priceValue = (<HTMLInputElement>document.getElementById("price"));
        interpretValue.value = null;
        priceValue.value = null;
       /* localStorage.einträge = JSON.stringify({
          "inputInterpret" : inputInterpret.value, "Inputprice" : inputPrice.value
        });*/

namespace testNameSpace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input.interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
    const tabelle: HTMLElement = <HTMLElement>document.getElementById("tabelle");

    interface Reihe {
    interpret: string;
    price: string;
  }

    let reihe: Reihe[] = [];
    let laden: Reihe[] = [];
    let speichern: string;

    window.addEventListener("load", (): void => {
      //localStorage.clear();
      tabelleLadeen();
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

      interpret.textContent = interpretWert;
      price.textContent = priceWert;

      let removeBtn: HTMLElement = document.createElement("button");
      removeBtn.textContent = "remove";
      removeBtn.setAttribute("id", "removeBtn" + removeId);


      tabelle.appendChild(tr);
      tr.appendChild(interpret);
      tr.appendChild(price);
      tr.appendChild(removeBtn);

      let speicherIndex: number = index;

      
      if (save == true) {
        let eintrag: Reihe = {
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

      removeBtn.addEventListener("click", function(): void {
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

    function tabelleLadeen (): void {
      if (localStorage.length < 1)
        return;
      laden = JSON.parse(localStorage.getItem("einträge"));
      console.log(laden);
      for (let i: number = 0; i < laden.length; i++) {
        createTr(laden[i].interpret, laden[i].price, false, i);
      }
      reihe = laden;
      laden = [];
    }
}
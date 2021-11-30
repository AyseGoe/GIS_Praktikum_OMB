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

    myButton.addEventListener("click", (): void => {
      createTr(inputInterpret.value, inputPrice.value);
    } );
    
    function createTr(interpretWert: string, priceWert: string): void {
      let tr: HTMLElement = document.createElement("tr");
      let interpret: HTMLElement = document.createElement("td");
      let price: HTMLElement = document.createElement("td");

      interpret.textContent = interpretWert;
      price.textContent = priceWert;

      let removeBtn: HTMLElement = document.createElement("button");
      removeBtn.textContent = "remove";

      tabelle.appendChild(tr);
      tr.appendChild(interpret);
      tr.appendChild(price);
      tr.appendChild(removeBtn);

      let eintrag: Reihe = {
        interpret: interpret.textContent,
        price: price.textContent
      };

      reihe.push(eintrag);
      speichern = JSON.stringify(reihe);

      localStorage.setItem("einträge", speichern);

      removeBtn.addEventListener("click", function(): void {
        tabelle.removeChild(tr);

      });
    }

    function tabelleLadeen (): void {
      if (localStorage.length < 1)
        return;
      laden = JSON.parse(localStorage.getItem("einträge"));
      console.log(laden);
      for (let i: number = 0; i < laden.length; i++) {
        createTr(laden[i].interpret, laden[i].price);
      }
      reihe = laden;
      laden = [];
    }


}
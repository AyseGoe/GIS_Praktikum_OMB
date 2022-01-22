//const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform"); 
const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendButton"); 
const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
const tabelle: HTMLElement = <HTMLElement>document.getElementById("tabelle");   
let removeId: number = 0;
console.log(sendButton);

//dasTypescript     

const url: string = "http://localhost:3000"; 
const path: string = "/concertEvents";

interface Reihe {
  interpret: string;
  price: string;
}


let eventFromSever: Reihe[] = []; 

window.addEventListener("load", () => {
  getData();
});
sendButton.addEventListener("click", onSendeButton);


async function getData(): Promise<void> {
    let response: Response = await fetch(url + path); 
    let responseText: string = await response.text(); 
    console.log(responseText);
    eventFromSever = JSON.parse(responseText);
    console.log(eventFromSever);

    for ( let i: number = 0; i < eventFromSever.length; i++) {
      createTr(eventFromSever[i].interpret,  eventFromSever[i].price);
     }
} 

async function onSendeButton(event: Event): Promise<void> {
  event.preventDefault();

  let Konzert: Reihe = {
    interpret: inputInterpret.value,
    price: inputPrice.value
  };
 //eventFromSever.push(Konzert);
  console.log(Konzert);

  createTr(Konzert.interpret, Konzert.price);

  sendJSONStringWithPost(url + path, JSON.stringify(Konzert));

  setTimeout(() => {
      clearInput();
  },         100);
}

async function sendJSONStringWithPost(url: RequestInfo, jsonString: string): Promise<void> {
  await fetch(url, {
      method: "POST",
      body: jsonString
  });
  console.log("event sent");
}

function createTr(interpretWert: string, priceWert: string): void {
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
}

function clearInput(): void {
  inputInterpret.value = "";
  inputPrice.value = "";
}



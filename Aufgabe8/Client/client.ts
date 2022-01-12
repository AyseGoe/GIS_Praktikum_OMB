import * as http from "http";
import * as mongo from "mongodb";

const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform"); 
const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button"); 
const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
const tabelle: HTMLElement = <HTMLElement>document.getElementById("tabelle");   
let removeId: number = 0;
     
const url: string = " mongodb://127.0.0.1//3000"; 
const path: string = "/concertEvents"; 
var MongoClient = require("mongodb").MongoClient;
const database: mongo.Collection;


interface Reihe {
  interpret: string;
  price: string;
  itemId: string;
}

let reihe: Reihe[] = [];
let laden: Reihe[] = [];
let speichern: string;

sendButton.addEventListener("click", (event: Event): void => {
  event.preventDefault();
  createTr(inputInterpret.value, inputPrice.value, true, 0);
});

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
}

GET: "mongodb://127.0.0.1//3000";
Host: MongoClient;

async function dbFind(
    db: string,
    collection: string,
    requestObject: any,
    response: http.ServerResponse
  ) {
    let result = await MongoClient
      .db(db)
      .collection(collection)
      .find(requestObject)
      .toArray();
    
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
  }
  
sendButton.addEventListener("click", function (evt: Event) {
    evt.preventDefault();
    sendForm(); 
});

console.log(myForm, sendButton);

async function sendForm(): Promise<void> {

    let formData: FormData = new FormData(myForm); 
    let query: URLSearchParams = new URLSearchParams(<any>formData); 
    let urlWithQuery: string = url + path + "KonzertNr" + query.toString(); 

    let response: Response = await fetch(urlWithQuery); 
    let responseText: string = await response.text(); 
    console.log(responseText);
} 


async (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;
    let url: URL = new URL(request.url || "", ` mongodb://127.0.0.1//3000`);
    console.log("es läuft");
    switch (url.pathname) {
      case "/concertEvents": {
        await MongoClient.connect();
        switch (request.method) {
          case "GET":
            await dbFind(
              "Konzert-Events",
              "Konzert",
              {
                KonzertNr: Number(url.searchParams.get("KonzertNr"))
              },
              response
            );
            console.log("KonzertNr");
            break;
          case "POST":
            let jsonString = "KonzertNr";
            response.on("KonzertNr", data => {
         jsonString += data;
          },
  }  
}

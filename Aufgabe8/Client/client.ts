import * as http from "http";
import * as mongo from "mongodb";

const url: string = "http://127.0.0.1:3000"; 
const path: string = "/concertEvents"; 
var MongoClient = require("mongodb").MongoClient;
const agent = 0;
const user = 0;

class server {
    get server(): boolean {
        return this.server;
    }
}

GET: "http://127.0.0.1:3000"
Host: MongoClient;
user - agent; any : 127.0; .0; .1;

const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform"); 
const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button"); 

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
    let url: URL = new URL(request.url || "", `http://127.0.0.1:3000`);
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
}

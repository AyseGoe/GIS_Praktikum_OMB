namespace Client {

  const url: string = "http://127.0.0.1:3000"; 
  const path: string = "/convertDate"; 
//  const anderepath: string ="/"  ;

  const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform"); 
  const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button"); 
  const convertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("convert-button"); 
  const display: HTMLDivElement = <HTMLDivElement>document.getElementById("display");
  const date: HTMLInputElement = <HTMLInputElement> document.getElementById("date");

  sendButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    sendForm(); 
});

  async function GetDate(url: RequestInfo): Promise<string> {
    let response: Response = await fetch(url); 
    let responseText: string = await response.text(); 

    return responseText;
  }

  async function sendForm(): Promise<void> {
    let inputValue: string = JSON.stringify(date.value);
    let serverAntwort: string = await GetDate(url + path + `?responseText =${inputValue}`);
    sendForm2(serverAntwort);
    //datezumServer
    //  let formData: FormData = new FormData(myForm); 
    //  let query: URLSearchParams = new URLSearchParams(<any>formData); 
    //  let urlWithQuery: string = url + path + "?" + query.toString(); 
  } 
  function sendForm2(ServerResponse: string): void {
    let neudate: HTMLElement = document.createElement("p");
    neudate.className = "ServerResponse";
    neudate.textContent = ServerResponse;
    display.appendChild(neudate);
  }
}
const convertDatePath: string = "";

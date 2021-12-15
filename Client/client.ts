namespace clientNameSpace {

    const url: string = "http://127.0.0.1:3000";
    const path: string = "/convertDate";

    const name: HTMLFormElement = <HTMLFormElement>document.getElementById("name");
    const Senden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#send");

    // tslint:disable-next-line: typedef
    Senden.addEventListener ("click", function (event: Event) {
        event.preventDefault();
        übertragen();
    });

    console.log(name, Senden);

    async function übertragen(): Promise <void> {

        let formData: FormData = new FormData(name);
        
        let query: URLSearchParams = new URLSearchParams(<any>formData); 
        let urlWithQuery: string = url + path + "?" + query.toString();

        let response: Response = await fetch(urlWithQuery); 
        let responseText: string = await response.text(); 
        console.log(responseText);

    }

    async function sendJSONStringWithPOST(url: RequestInfo, jsonString: string ): Promise<void> {

        let response: Response = await fetch(url, {
          method: "post",
          body: jsonString

        });
      }
      
    sendJSONStringWithPOST(
        "http://localhost:3000/",
        JSON.stringify({ test: "Das Datum ist" })
      );   
}

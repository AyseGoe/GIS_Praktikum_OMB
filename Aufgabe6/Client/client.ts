module Client {
    const url: string = "http://localhost:3000/";

    const saveDatePath: string= "saveDate";

    const form: HTMLFormElement = <HTMLFormElement>document.getElementById("myform");
    const sendDateButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    const display: HTMLDivElement = <HTMLDivElement>document.getElementById("display");

    sendDateButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        sendForm(saveDatePath);
    });

    async function sendForm(path: String): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlWithQuery: string = url + path + "?" + query.toString();

        let response: Response = await fetch(urlWithQuery);
        let text: string = await response.text();

        display.textContent = text;
    }
}

const saveDatePath: string = "";


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var Server;
(function (Server) {
    const hostname = "127.0.0.1";
    const port = 3000;
    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Origin", "*");
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        routing(response, url);
        response.end();
    });
    function routing(response, url) {
        let dateString;
        switch (url.pathname) {
            case "/":
                // let today: string = url.searchParams.get("date"); 
                response.write("Server erreichbar");
                break;
            case "/convertDate":
                dateString = convertDate(url.searchParams.get("date") || "");
                response.end(dateString);
                break;
            // case "/convertDate2":
            // let currentDate: Date = new Date();
            //    console.log(date); 
            //   response.write(date); 
            //   break;
            default:
                response.statusCode = 404;
        }
        response.end();
    }
    const monthStrings = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    function convertDate(dateString) {
        let date = new Date(dateString);
        return `Month: ${monthStrings[date.getMonth()]}, Day: ${date.getDate()}, Year: ${date.getFullYear()}`;
    }
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
})(Server || (Server = {}));
//# sourceMappingURL=server.js.map
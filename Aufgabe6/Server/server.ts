import * as http from "http";
namespace Server {  
  const hostname: string = "127.0.0.1"; 
  const port: number = 3000; 

  const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200; 
      response.setHeader("Content-Type", "text/plain"); 
      response.setHeader("Access-Control-Allow-Origin", "*"); 
      let url: URL = new URL(request.url || "", `http://${request.headers.host}`); 
      routing(response, url);
      response.end();
    }
  );

  function routing(response: http.ServerResponse, url: URL): void {
    let dateString: string;
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

  function convertDate(dateString: string): string {
    let date: Date = new Date(dateString);
    return `Month: ${monthStrings[date.getMonth()]
      }, Day: ${date.getDate()}, Year: ${date.getFullYear()}`;
  }

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  }

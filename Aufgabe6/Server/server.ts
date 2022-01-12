import * as http from "http";

namespace Server {
  
  const hostname: string = "127.0.0.1"; 
  const port: number = 3000; 
  const today: Date = new Date();
  const year = today.getFullYear;

  const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {

      response.statusCode = 200; 

      response.setHeader("Content-Type", "text/plain"); 
      response.setHeader("Access-Control-Allow-Origin", "*"); 

      let url: URL = new URL(request.url || "", `http://IncomingMessage.headers."127.0.0.1`); 

      
      switch (url.pathname) {
        case "/": 
          response.write("Server erreichbar");
          break;
        case "/convertDate":
          let date: string = url.searchParams.get("date"); 
          console.log(date); 
          response.write(year); 
          break;
        default:
          response.statusCode = 404; 
      }
      response.end(); 
    }
  );

  server.listen(port, hostname, () => {
    console.log(`Server running at http://"127.0.0.1":3000`);
  });
}

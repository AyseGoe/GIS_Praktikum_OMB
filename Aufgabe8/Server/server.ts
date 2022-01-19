import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017";
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);


async function dbFind (

    db: string,
    collection: string,
    requestObject: any,
    response: http.ServerResponse
  ) {

    let result: any = await mongoClient
      .db(db)
      .collection(collection)
      .find(requestObject)
      .toArray();
    
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
  }
  
const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200;
      response.setHeader("Access-Control-Allow-Origin", "*"); 

      let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
      console.log("es läuft");

      switch (url.pathname) {
        case "/concertEvents": {
          await mongoClient.connect();
          switch (request.method) {
            case "GET":
            //  mongoClient.db("mongodb_test").collection("test_eintraege").insertOne {
            //    "name": "test",
            //    "age": 20

            //  });
              await dbFind(
                "Konzert-Events",
                "Konzert",
                {
                  index: Number(url.searchParams.get("index"))
                },
                response
              );
              break;
            case "POST":
              let jsonString: string = "";
              request.on("data", data => {
                jsonString += data;
              });
              request.on("end", async () => {
                mongoClient
                  .db("Konzert")
                  .collection("Konzert--Events")
                  .insertOne(JSON.parse(jsonString));
              });
              break;
          }
          break;
        }
        case "/Konzert": {
          await mongoClient.connect();
          switch (request.method) {
            case "GET":
              await dbFind("Konzert-Events", "Konzert", {}, response);
              break;
          }
          break;
        }
        default:
          response.statusCode = 404;
      }
      response.end();
    }
  );
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
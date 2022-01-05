import * as http from "http";
import * as mongo from "mongodb";
import * as dotenv from "dotenv";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/mydb";


export const collections: { server?: mongo.Collection } = {};

export async function connectToDatabase () {
    dotenv.config(); 
    const client: mongo.MongoClient = new mongo.MongoClient(process.env.DB_CONN_STRING);            
    await client.connect();       
    const db: mongo.Db = client.db(process.env.DB_NAME);  
    const serverCollection: mongo.Collection = db.collection(process.env.Server_COLLECTION_NAME);
 
     collections.server = serverCollection;       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${serverCollection.collectionName}`);
 }


MongoClient.connect(url, function(err: any, db: any) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

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
  
const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200;
      // response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
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
              request.on("KonzertNr", data => {
                jsonString += data;
              });
              request.on("end", async () => {
                MongoClient
                  .db("Konzert-Events")
                  .collection("Konzert")
                  .insertOne(JSON.parse(jsonString));
              });
              break;
          }
          break;
        }
        case "/Konzert": {
          await MongoClient.connect();
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
    console.log(`Server running at http://127.0.0.1:3000/`);
    console.log("es läuft");
  });
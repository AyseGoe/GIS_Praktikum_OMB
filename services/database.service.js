"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
const mongoDB = require("mongodb");
const dotenv = require("dotenv");
exports.collections = {};
async function connectToDatabase() {
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const gamesCollection = db.collection(process.env.GAMES_COLLECTION_NAME);
    exports.collections.games = gamesCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=database.service.js.map
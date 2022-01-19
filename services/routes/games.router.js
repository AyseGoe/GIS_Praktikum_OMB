"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesRouter = void 0;
// External Dependencies
const express_1 = require("express");
const database_service_1 = require("../services/database.service");
// Global Config
exports.gamesRouter = express_1.default.Router();
exports.gamesRouter.use(express_1.default.json());
// GET
exports.gamesRouter.get("/", async (_req, res) => {
    try {
        const games = (await database_service_1.collections.games.find({}).toArray());
        res.status(200).send(games);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
// POST
// PUT
// DELETE
//# sourceMappingURL=games.router.js.map
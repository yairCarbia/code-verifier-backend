"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("Bienvenido a mi API RESTFULL: EXPRESS+ Nodemon+ Jest + TypeScript + SWAGGER + Mongoose");
});
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 8080⚡");
});
//# sourceMappingURL=app.js.map
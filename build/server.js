"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
dotenv_1.default.config();
var PORT = process.env.PORT;
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use("/images", express_1.default.static(__dirname + "\\assets\\images"));
app.listen(PORT, function () { return console.log("\u2728Server is running on port " + PORT + "\u2728"); });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QARoutes = void 0;
var express_1 = require("express");
var createQA_1 = require("../modules/QA/useCases/createQA");
var createQAItem_1 = require("../modules/QA/useCases/createQAItem");
var listQA_1 = require("../modules/QA/useCases/listQA");
var QARoutes = express_1.Router();
exports.QARoutes = QARoutes;
QARoutes.post("/", function (request, response) {
    return createQA_1.createQAController.handle(request, response);
});
QARoutes.get("/", function (request, response) {
    return listQA_1.listQAController.handle(request, response);
});
QARoutes.post("/:id", function (request, response) {
    return createQAItem_1.createQAItemController.handle(request, response);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAItemRoutes = void 0;
var express_1 = require("express");
var createQAItem_1 = require("../modules/QA/useCases/createQAItem");
var deleteQAItem_1 = require("../modules/QA/useCases/deleteQAItem");
var listQAItem_1 = require("../modules/QA/useCases/listQAItem");
var updateQAItem_1 = require("../modules/QA/useCases/updateQAItem");
var QAItemRoutes = express_1.Router();
exports.QAItemRoutes = QAItemRoutes;
QAItemRoutes.post("/", function (request, response) {
    return createQAItem_1.createQAItemController.handle(request, response);
});
QAItemRoutes.get("/:qaId", function (request, response) {
    return listQAItem_1.listQAItemController.handle(request, response);
});
QAItemRoutes.put("/:qaItemId", function (request, response) {
    return updateQAItem_1.updateQAItemController.handle(request, response);
});
QAItemRoutes.delete("/:qaItemId", function (request, response) {
    return deleteQAItem_1.deleteQAItemController.handle(request, response);
});

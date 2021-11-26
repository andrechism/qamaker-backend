"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAItemImagesRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var uuid_1 = require("uuid");
// import { createCategoryController } from "../modules/cars/useCases/createCategory";
// import { listCategoriesController } from "../modules/cars/useCases/listCategory";
var importImage_1 = require("../modules/QA/useCases/importImage");
var listImage_1 = require("../modules/QA/useCases/listImage");
var QAItemImagesRoutes = express_1.Router();
exports.QAItemImagesRoutes = QAItemImagesRoutes;
var storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./src/assets/images");
    },
    filename: function (req, file, callback) {
        callback(null, uuid_1.v4() + "-" + file.originalname);
    },
});
var upload = multer_1.default({
    storage: storage,
    // dest: "./tmp",
});
// categoriesRoutes.post("/", (request, response) => {
//     return createCategoryController.handle(request, response);
// });
// categoriesRoutes.get("/", (request, response) => {
//     return listCategoriesController.handle(request, response);
// });
// QAItemImagesRoutes.post("/", async (req, res) => {
//     upload(req, res, function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             const FileName = req.file.filename;
//             res.status(200).send({
//                 data: req.file,
//             });
//         }
//     });
// });
QAItemImagesRoutes.get("/:qaItemId", function (request, response) {
    return listImage_1.listQAItemImageController.handle(request, response);
});
QAItemImagesRoutes.post("/:qaItemId", upload.array("files"), function (request, response) {
    return importImage_1.importQAItemImageController.handle(request, response);
});

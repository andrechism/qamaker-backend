import { Router } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

// import { createCategoryController } from "../modules/cars/useCases/createCategory";
// import { listCategoriesController } from "../modules/cars/useCases/listCategory";
import { importQAItemImageController } from "../modules/QA/useCases/importImage";
import { listQAItemImageController } from "../modules/QA/useCases/listImage";

const QAItemImagesRoutes = Router();

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, "./src/assets/images");
    },
    filename(req, file, callback) {
        callback(null, `${uuidv4()}-${file.originalname}`);
    },
});

const upload = multer({
    storage,
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

QAItemImagesRoutes.get("/:qaItemId", (request, response) => {
    return listQAItemImageController.handle(request, response);
});

QAItemImagesRoutes.post(
    "/:qaItemId",
    upload.array("files"),
    (request, response) => {
        return importQAItemImageController.handle(request, response);
    }
);

export { QAItemImagesRoutes };

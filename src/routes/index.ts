import { Router } from "express";

import { QARoutes } from "./qa.routes";
import { QAItemRoutes } from "./qaItem.routes";
import { QAItemImagesRoutes } from "./qaItemImage.routes";

const router = Router();

router.use("/qa", QARoutes);
router.use("/item", QAItemRoutes);
router.use("/image", QAItemImagesRoutes);

export { router };

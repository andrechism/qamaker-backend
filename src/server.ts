import dotenv from "dotenv";
import express from "express";

import { router } from "./routes";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use(router);
app.use("/images", express.static(`${__dirname}\\assets\\images`));

app.listen(PORT, () => console.log(`✨Server is running on port ${PORT}✨`));

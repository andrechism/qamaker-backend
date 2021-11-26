import { QAItemImageRepository } from "../../repositories/implementations/QAItemImageRepository";
import { ImportQAItemImageController } from "./importImageController";
import { ImportImageUseCase } from "./ImportImageUseCase";

const qaItemImageRepository = QAItemImageRepository.getInstance();
const importQAItemImageUseCase = new ImportImageUseCase(qaItemImageRepository);
const importQAItemImageController = new ImportQAItemImageController(
    importQAItemImageUseCase
);

export { importQAItemImageController };

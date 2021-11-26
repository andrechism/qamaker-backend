import { QAItemImageRepository } from "../../repositories/implementations/QAItemImageRepository";
import { ListQAItemImageController } from "./ListQAItemImageController";
import { ListQAItemImageUseCase } from "./ListQAItemImageUseCase";

const qaItemImageRepository = QAItemImageRepository.getInstance();
const listQAItemImageUseCase = new ListQAItemImageUseCase(
    qaItemImageRepository
);
const listQAItemImageController = new ListQAItemImageController(
    listQAItemImageUseCase
);

export { listQAItemImageController };

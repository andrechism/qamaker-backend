import { QARepository } from "../../repositories/implementations/QARepository";
import { CreateQAController } from "./CreateQAController";
import { CreateQAUseCase } from "./CreateQAUseCase";

const categoriesRepository = QARepository.getInstance();
const createQAUseCase = new CreateQAUseCase(categoriesRepository);
const createQAController = new CreateQAController(createQAUseCase);

export { createQAController };

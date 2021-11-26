import { QAItemRepository } from "../../repositories/implementations/QAItemRepository";
import { CreateQAItemController } from "./CreateQAItemController";
import { CreateQAItemUseCase } from "./CreateQAItemUseCase";

const qaItemRepository = QAItemRepository.getInstance();
const createQAItemUseCase = new CreateQAItemUseCase(qaItemRepository);
const createQAItemController = new CreateQAItemController(createQAItemUseCase);

export { createQAItemController };

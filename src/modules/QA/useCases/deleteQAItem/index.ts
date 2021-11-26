import { QAItemRepository } from "../../repositories/implementations/QAItemRepository";
import { DeleteQAItemController } from "./DeleteQAItemController";
import { DeleteQAItemUseCase } from "./DeleteQAItemUseCase";

const qaItemRepository = QAItemRepository.getInstance();
const deleteQAItemUseCase = new DeleteQAItemUseCase(qaItemRepository);
const deleteQAItemController = new DeleteQAItemController(deleteQAItemUseCase);

export { deleteQAItemController };

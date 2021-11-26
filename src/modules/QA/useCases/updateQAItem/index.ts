import { QAItemRepository } from "../../repositories/implementations/QAItemRepository";
import { UpdateQAItemController } from "./UpdateQAItemController";
import { UpdateQAItemUseCase } from "./UpdateQAItemUseCase";

const qaItemRepository = QAItemRepository.getInstance();
const updateQAItemUseCase = new UpdateQAItemUseCase(qaItemRepository);
const updateQAItemController = new UpdateQAItemController(updateQAItemUseCase);

export { updateQAItemController };

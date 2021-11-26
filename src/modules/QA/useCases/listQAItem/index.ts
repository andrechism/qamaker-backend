import { QAItemRepository } from "../../repositories/implementations/QAItemRepository";
import { ListQAItemController } from "./ListQAItemController";
import { ListQAItemUseCase } from "./ListQAItemUseCase";

const qaItemRepository = QAItemRepository.getInstance();
const listQAItemUseCase = new ListQAItemUseCase(qaItemRepository);
const listQAItemController = new ListQAItemController(listQAItemUseCase);

export { listQAItemController };

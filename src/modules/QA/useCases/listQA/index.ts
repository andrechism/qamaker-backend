import { QARepository } from "../../repositories/implementations/QARepository";
import { ListQAController } from "./ListQAController";
import { ListQAUseCase } from "./ListQAUseCase";

const qaRepository = QARepository.getInstance();
const listQAUseCase = new ListQAUseCase(qaRepository);
const listQAController = new ListQAController(listQAUseCase);

export { listQAController };

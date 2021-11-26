import { QA } from "../../model/qa";
import { IQARepository } from "../../repositories/IQARepository";
declare class ListQAUseCase {
    private qaRepository;
    constructor(qaRepository: IQARepository);
    execute(): QA[];
}
export { ListQAUseCase };

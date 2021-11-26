import { QA } from "../../model/qa";
import { IQARepository } from "../../repositories/IQARepository";

class ListQAUseCase {
    constructor(private qaRepository: IQARepository) {}

    execute(): QA[] {
        const categories = this.qaRepository.list();
        return categories;
    }
}

export { ListQAUseCase };

import { QAItem } from "../../model/qaItem";
import { IQAItemRepository } from "../../repositories/IQAItemRepository";

class ListQAItemUseCase {
    constructor(private qaRepository: IQAItemRepository) {}

    execute(qaId: string): QAItem[] {
        const qaItemList = this.qaRepository.list(qaId);
        return qaItemList;
    }
}

export { ListQAItemUseCase };

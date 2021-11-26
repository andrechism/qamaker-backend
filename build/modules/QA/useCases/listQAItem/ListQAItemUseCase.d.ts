import { QAItem } from "../../model/qaItem";
import { IQAItemRepository } from "../../repositories/IQAItemRepository";
declare class ListQAItemUseCase {
    private qaRepository;
    constructor(qaRepository: IQAItemRepository);
    execute(qaId: string): QAItem[];
}
export { ListQAItemUseCase };

import { QAItemImage } from "../../model/qaItemImage";
import { IQAItemImageRepository } from "../../repositories/IQAItemImageRepository";

class ListQAItemImageUseCase {
    constructor(private qaItemImageRepository: IQAItemImageRepository) {}

    execute(qaItemId: string): QAItemImage[] {
        const qaItemList = this.qaItemImageRepository.list(qaItemId);
        return qaItemList;
    }
}

export { ListQAItemImageUseCase };

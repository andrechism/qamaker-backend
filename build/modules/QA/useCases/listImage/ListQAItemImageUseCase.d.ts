import { QAItemImage } from "../../model/qaItemImage";
import { IQAItemImageRepository } from "../../repositories/IQAItemImageRepository";
declare class ListQAItemImageUseCase {
    private qaItemImageRepository;
    constructor(qaItemImageRepository: IQAItemImageRepository);
    execute(qaItemId: string): QAItemImage[];
}
export { ListQAItemImageUseCase };

import { IQAItemImageRepository } from "../../repositories/IQAItemImageRepository";
declare class ImportImageUseCase {
    private QAItemImageRepository;
    constructor(QAItemImageRepository: IQAItemImageRepository);
    execute(qaItemId: string, files: any): Promise<void>;
}
export { ImportImageUseCase };

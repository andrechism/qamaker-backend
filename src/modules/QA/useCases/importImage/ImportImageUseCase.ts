import { IQAItemImageRepository } from "../../repositories/IQAItemImageRepository";

// interface IImportCategory {
//     qaItemId: string;
//     filePath: string;
// }

class ImportImageUseCase {
    constructor(private QAItemImageRepository: IQAItemImageRepository) {}

    // @ts-ignore
    async execute(qaItemId: string, files: any): Promise<void> {
        files.map(async (file) => {
            const { filename } = file;
            this.QAItemImageRepository.create({
                qaItemId,
                filePath: filename,
            });
        });
    }
}

export { ImportImageUseCase };

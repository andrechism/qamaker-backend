import { IQAItemImageRepository } from "../../repositories/IQAItemImageRepository";

// interface IImportCategory {
//     qaItemId: string;
//     filePath: string;
// }

class ImportImageUseCase {
    constructor(private QAItemImageRepository: IQAItemImageRepository) {}

    async execute(
        qaItemId: string,
        files: Express.Multer.File[]
    ): Promise<void> {
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

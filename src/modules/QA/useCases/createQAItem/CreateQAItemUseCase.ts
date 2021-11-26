import { IQAItemRepository } from "../../repositories/IQAItemRepository";

interface IRequest {
    qaId: string;
    title: string;
    description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */

class CreateQAItemUseCase {
    constructor(private qaItemRepository: IQAItemRepository) {}

    execute({ qaId, title, description }: IRequest): void {
        const QATitleAlreadyExists = this.qaItemRepository.findByTitle(title);

        if (QATitleAlreadyExists) {
            throw new Error("QAItem already exists!");
        }

        this.qaItemRepository.create({ qaId, title, description });
    }
}

export { CreateQAItemUseCase };

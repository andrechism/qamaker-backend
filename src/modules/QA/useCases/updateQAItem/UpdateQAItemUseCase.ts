import { IQAItemRepository } from "../../repositories/IQAItemRepository";

interface IRequest {
    qaItemId: string;
    title: string;
    description: string;
    status: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */

class UpdateQAItemUseCase {
    constructor(private qaItemRepository: IQAItemRepository) {}

    execute({ qaItemId, title, description, status }: IRequest): void {
        const QAItemAlreadyExists = this.qaItemRepository.findById(qaItemId);

        if (!QAItemAlreadyExists) {
            throw new Error("QAItem doens't exists!");
        }

        this.qaItemRepository.update({ qaItemId, title, description, status });
    }
}

export { UpdateQAItemUseCase };

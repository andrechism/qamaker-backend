import { IQAItemRepository } from "../../repositories/IQAItemRepository";

interface IRequest {
    qaItemId: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */

class DeleteQAItemUseCase {
    constructor(private qaItemRepository: IQAItemRepository) {}

    execute({ qaItemId }: IRequest): void {
        const QAItemAlreadyExists = this.qaItemRepository.findById(qaItemId);

        if (!QAItemAlreadyExists) {
            throw new Error("QAItem doens't exists!");
        }

        this.qaItemRepository.delete(qaItemId);
    }
}

export { DeleteQAItemUseCase };

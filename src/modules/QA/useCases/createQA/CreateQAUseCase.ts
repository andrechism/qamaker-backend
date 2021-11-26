import { IQARepository } from "../../repositories/IQARepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */

class CreateQAUseCase {
    constructor(private qaRepository: IQARepository) {}

    execute({ name, description }: IRequest): void {
        const QAAlreadyExists = this.qaRepository.findByName(name);

        if (QAAlreadyExists) {
            throw new Error("QA already exists!");
        }

        this.qaRepository.create({ name, description });
    }
}

export { CreateQAUseCase };

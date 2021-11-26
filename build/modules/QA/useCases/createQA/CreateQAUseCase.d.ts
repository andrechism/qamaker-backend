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
declare class CreateQAUseCase {
    private qaRepository;
    constructor(qaRepository: IQARepository);
    execute({ name, description }: IRequest): void;
}
export { CreateQAUseCase };

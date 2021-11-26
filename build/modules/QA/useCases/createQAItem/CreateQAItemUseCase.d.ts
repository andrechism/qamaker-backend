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
declare class CreateQAItemUseCase {
    private qaItemRepository;
    constructor(qaItemRepository: IQAItemRepository);
    execute({ qaId, title, description }: IRequest): void;
}
export { CreateQAItemUseCase };

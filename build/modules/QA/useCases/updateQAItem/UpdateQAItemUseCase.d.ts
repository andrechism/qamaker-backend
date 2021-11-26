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
declare class UpdateQAItemUseCase {
    private qaItemRepository;
    constructor(qaItemRepository: IQAItemRepository);
    execute({ qaItemId, title, description, status }: IRequest): void;
}
export { UpdateQAItemUseCase };

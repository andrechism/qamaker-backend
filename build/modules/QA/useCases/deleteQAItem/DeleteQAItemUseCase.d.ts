import { IQAItemRepository } from "../../repositories/IQAItemRepository";
interface IRequest {
    qaItemId: string;
}
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */
declare class DeleteQAItemUseCase {
    private qaItemRepository;
    constructor(qaItemRepository: IQAItemRepository);
    execute({ qaItemId }: IRequest): void;
}
export { DeleteQAItemUseCase };

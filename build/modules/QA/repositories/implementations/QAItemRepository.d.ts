import { QAItem } from "../../model/qaItem";
import { IQAItemRepository, ICreateQAItemDTO, IUpdateQAItemDTO } from "../IQAItemRepository";
declare class QAItemRepository implements IQAItemRepository {
    private qaItems;
    private static INSTANCE;
    private constructor();
    static getInstance(): QAItemRepository;
    create({ qaId, title, description }: ICreateQAItemDTO): void;
    list(qaId: string): QAItem[];
    findById(id: string): QAItem;
    findByTitle(title: string): QAItem;
    update({ qaItemId, title, description, status }: IUpdateQAItemDTO): void;
    delete(id: string): void;
}
export { QAItemRepository };

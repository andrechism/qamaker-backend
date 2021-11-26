import { QAItem } from "../model/qaItem";
interface ICreateQAItemDTO {
    qaId: string;
    title: string;
    description: string;
}
interface IUpdateQAItemDTO {
    qaItemId: string;
    title: string;
    description: string;
    status: string;
}
interface IQAItemRepository {
    findByTitle(name: string): QAItem;
    findById(id: string): QAItem;
    list(qaId: string): QAItem[];
    create({ qaId, title, description }: ICreateQAItemDTO): void;
    update({ qaItemId, title, description, status }: IUpdateQAItemDTO): void;
    delete(id: string): void;
}
export { IQAItemRepository, ICreateQAItemDTO, IUpdateQAItemDTO };

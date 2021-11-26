import { QAItemImage } from "../model/qaItemImage";
interface ICreateQAItemImageDTO {
    qaItemId: string;
    filePath: string;
}
interface IQAItemImageRepository {
    findById(id: string): QAItemImage;
    list(id: string): QAItemImage[];
    create({ qaItemId, filePath }: ICreateQAItemImageDTO): void;
}
export { IQAItemImageRepository, ICreateQAItemImageDTO };

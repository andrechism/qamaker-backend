import { QAItemImage } from "../../model/qaItemImage";
import { IQAItemImageRepository, ICreateQAItemImageDTO } from "../IQAItemImageRepository";
declare class QAItemImageRepository implements IQAItemImageRepository {
    private imageList;
    private static INSTANCE;
    private constructor();
    static getInstance(): QAItemImageRepository;
    create({ filePath, qaItemId }: ICreateQAItemImageDTO): void;
    list(id: string): QAItemImage[];
    findById(id: string): QAItemImage;
}
export { QAItemImageRepository };

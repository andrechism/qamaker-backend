import { QAItemImage } from "../../model/qaItemImage";
import {
    IQAItemImageRepository,
    ICreateQAItemImageDTO,
} from "../IQAItemImageRepository";

class QAItemImageRepository implements IQAItemImageRepository {
    private imageList: QAItemImage[];

    private static INSTANCE: QAItemImageRepository;

    private constructor() {
        this.imageList = [];
    }

    public static getInstance(): QAItemImageRepository {
        if (!QAItemImageRepository.INSTANCE) {
            QAItemImageRepository.INSTANCE = new QAItemImageRepository();
        }
        return QAItemImageRepository.INSTANCE;
    }

    create({ filePath, qaItemId }: ICreateQAItemImageDTO): void {
        const qaItemImage = new QAItemImage();

        Object.assign(qaItemImage, {
            filePath,
            qaItemId,
            created_at: new Date(),
        });

        this.imageList.push(qaItemImage);
    }

    list(id: string): QAItemImage[] {
        // return this.imageList.filter((image) => image.qaItemId === id);
        console.log(id);
        return this.imageList;
    }

    findById(id: string): QAItemImage {
        const qaItemImage = this.imageList.find(
            (qaItemImage) => qaItemImage.id === id
        );
        return qaItemImage;
    }
}

export { QAItemImageRepository };

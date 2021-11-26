import { QAItem } from "../../model/qaItem";
import {
    IQAItemRepository,
    ICreateQAItemDTO,
    IUpdateQAItemDTO,
} from "../IQAItemRepository";

class QAItemRepository implements IQAItemRepository {
    private qaItems: QAItem[];

    private static INSTANCE: QAItemRepository;

    private constructor() {
        this.qaItems = [];
    }

    public static getInstance(): QAItemRepository {
        if (!QAItemRepository.INSTANCE) {
            QAItemRepository.INSTANCE = new QAItemRepository();
        }
        return QAItemRepository.INSTANCE;
    }

    create({ qaId, title, description }: ICreateQAItemDTO): void {
        const qaItem = new QAItem();

        Object.assign(qaItem, {
            qaId,
            title,
            description,
            created_at: new Date(),
        });

        this.qaItems.push(qaItem);
    }

    list(qaId: string): QAItem[] {
        return this.qaItems.filter((qaItem) => qaItem.qaId === qaId);
    }

    findById(id: string): QAItem {
        const qaItem = this.qaItems.find((qaItem) => qaItem.id === id);
        return qaItem;
    }

    findByTitle(title: string): QAItem {
        const qaItem = this.qaItems.find((qaItem) => qaItem.title === title);
        return qaItem;
    }

    update({ qaItemId, title, description, status }: IUpdateQAItemDTO): void {
        const qaItem = this.qaItems.find((qaItem) => qaItem.id === qaItemId);

        if (qaItem) {
            Object.assign(qaItem, {
                title,
                description,
                status,
                // updated_at: new Date(),
            });
        }
    }

    delete(id: string): void {
        const filteredItems = this.qaItems.filter((item) => item.id !== id);

        this.qaItems = filteredItems;
    }
}

export { QAItemRepository };

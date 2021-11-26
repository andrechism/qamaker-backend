import { QA } from "../../model/qa";
import { IQARepository, ICreateQADTO } from "../IQARepository";

class QARepository implements IQARepository {
    private qaList: QA[];

    private static INSTANCE: QARepository;

    private constructor() {
        this.qaList = [];
    }

    public static getInstance(): QARepository {
        if (!QARepository.INSTANCE) {
            QARepository.INSTANCE = new QARepository();
        }
        return QARepository.INSTANCE;
    }

    create({ name, description }: ICreateQADTO): void {
        const category = new QA();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.qaList.push(category);
    }

    list(): QA[] {
        return this.qaList;
    }

    findByName(name: string): QA {
        const category = this.qaList.find((category) => category.name === name);
        return category;
    }
}

export { QARepository };

import { QA } from "../../model/qa";
import { IQARepository, ICreateQADTO } from "../IQARepository";
declare class QARepository implements IQARepository {
    private qaList;
    private static INSTANCE;
    private constructor();
    static getInstance(): QARepository;
    create({ name, description }: ICreateQADTO): void;
    list(): QA[];
    findByName(name: string): QA;
}
export { QARepository };

import { QA } from "../model/qa";
interface ICreateQADTO {
    name: string;
    description: string;
}
interface IQARepository {
    findByName(name: string): QA;
    list(): QA[];
    create({ name, description }: ICreateQADTO): void;
}
export { IQARepository, ICreateQADTO };

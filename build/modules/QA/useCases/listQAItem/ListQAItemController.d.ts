import { Request, Response } from "express";
import { ListQAItemUseCase } from "./ListQAItemUseCase";
declare class ListQAItemController {
    private listQAItemUseCase;
    constructor(listQAItemUseCase: ListQAItemUseCase);
    handle(request: Request, response: Response): Response;
}
export { ListQAItemController };

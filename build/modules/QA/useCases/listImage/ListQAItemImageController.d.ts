import { Request, Response } from "express";
import { ListQAItemImageUseCase } from "./ListQAItemImageUseCase";
declare class ListQAItemImageController {
    private listQAItemUseCase;
    constructor(listQAItemUseCase: ListQAItemImageUseCase);
    handle(request: Request, response: Response): Response;
}
export { ListQAItemImageController };

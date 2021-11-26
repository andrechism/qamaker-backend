import { Request, Response } from "express";
import { ListQAUseCase } from "./ListQAUseCase";
declare class ListQAController {
    private listQAUseCase;
    constructor(listQAUseCase: ListQAUseCase);
    handle(request: Request, response: Response): Response;
}
export { ListQAController };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQAItemUseCase = void 0;
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */
var CreateQAItemUseCase = /** @class */ (function () {
    function CreateQAItemUseCase(qaItemRepository) {
        this.qaItemRepository = qaItemRepository;
    }
    CreateQAItemUseCase.prototype.execute = function (_a) {
        var qaId = _a.qaId, title = _a.title, description = _a.description;
        var QATitleAlreadyExists = this.qaItemRepository.findByTitle(title);
        if (QATitleAlreadyExists) {
            throw new Error("QAItem already exists!");
        }
        this.qaItemRepository.create({ qaId: qaId, title: title, description: description });
    };
    return CreateQAItemUseCase;
}());
exports.CreateQAItemUseCase = CreateQAItemUseCase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQAItemUseCase = void 0;
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */
var DeleteQAItemUseCase = /** @class */ (function () {
    function DeleteQAItemUseCase(qaItemRepository) {
        this.qaItemRepository = qaItemRepository;
    }
    DeleteQAItemUseCase.prototype.execute = function (_a) {
        var qaItemId = _a.qaItemId;
        var QAItemAlreadyExists = this.qaItemRepository.findById(qaItemId);
        if (!QAItemAlreadyExists) {
            throw new Error("QAItem doens't exists!");
        }
        this.qaItemRepository.delete(qaItemId);
    };
    return DeleteQAItemUseCase;
}());
exports.DeleteQAItemUseCase = DeleteQAItemUseCase;

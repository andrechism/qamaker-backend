"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQAItemUseCase = void 0;
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */
var UpdateQAItemUseCase = /** @class */ (function () {
    function UpdateQAItemUseCase(qaItemRepository) {
        this.qaItemRepository = qaItemRepository;
    }
    UpdateQAItemUseCase.prototype.execute = function (_a) {
        var qaItemId = _a.qaItemId, title = _a.title, description = _a.description, status = _a.status;
        var QAItemAlreadyExists = this.qaItemRepository.findById(qaItemId);
        if (!QAItemAlreadyExists) {
            throw new Error("QAItem doens't exists!");
        }
        this.qaItemRepository.update({ qaItemId: qaItemId, title: title, description: description, status: status });
    };
    return UpdateQAItemUseCase;
}());
exports.UpdateQAItemUseCase = UpdateQAItemUseCase;

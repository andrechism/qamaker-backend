"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQAUseCase = void 0;
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 */
var CreateQAUseCase = /** @class */ (function () {
    function CreateQAUseCase(qaRepository) {
        this.qaRepository = qaRepository;
    }
    CreateQAUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var QAAlreadyExists = this.qaRepository.findByName(name);
        if (QAAlreadyExists) {
            throw new Error("QA already exists!");
        }
        this.qaRepository.create({ name: name, description: description });
    };
    return CreateQAUseCase;
}());
exports.CreateQAUseCase = CreateQAUseCase;

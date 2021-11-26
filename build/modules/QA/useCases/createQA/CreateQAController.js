"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQAController = void 0;
var CreateQAController = /** @class */ (function () {
    function CreateQAController(createCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    CreateQAController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, description = _a.description;
        this.createCategoryUseCase.execute({ name: name, description: description });
        return response.status(201).send();
    };
    return CreateQAController;
}());
exports.CreateQAController = CreateQAController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQAItemController = void 0;
var CreateQAItemController = /** @class */ (function () {
    function CreateQAItemController(createQAItemUseCase) {
        this.createQAItemUseCase = createQAItemUseCase;
    }
    CreateQAItemController.prototype.handle = function (request, response) {
        var _a = request.body, qaId = _a.qaId, title = _a.title, description = _a.description;
        this.createQAItemUseCase.execute({ qaId: qaId, title: title, description: description });
        return response.status(201).send();
    };
    return CreateQAItemController;
}());
exports.CreateQAItemController = CreateQAItemController;

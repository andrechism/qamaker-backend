"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQAItemController = void 0;
var UpdateQAItemController = /** @class */ (function () {
    function UpdateQAItemController(updateQAItemUseCase) {
        this.updateQAItemUseCase = updateQAItemUseCase;
    }
    UpdateQAItemController.prototype.handle = function (request, response) {
        var qaItemId = request.params.qaItemId;
        var _a = request.body, title = _a.title, description = _a.description, status = _a.status;
        this.updateQAItemUseCase.execute({
            qaItemId: qaItemId,
            title: title,
            description: description,
            status: status,
        });
        return response.status(201).send();
    };
    return UpdateQAItemController;
}());
exports.UpdateQAItemController = UpdateQAItemController;

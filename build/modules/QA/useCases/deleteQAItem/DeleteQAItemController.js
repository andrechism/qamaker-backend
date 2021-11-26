"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQAItemController = void 0;
var DeleteQAItemController = /** @class */ (function () {
    function DeleteQAItemController(deleteQAItemUseCase) {
        this.deleteQAItemUseCase = deleteQAItemUseCase;
    }
    DeleteQAItemController.prototype.handle = function (request, response) {
        var qaItemId = request.params.qaItemId;
        this.deleteQAItemUseCase.execute({
            qaItemId: qaItemId,
        });
        return response.status(204).send();
    };
    return DeleteQAItemController;
}());
exports.DeleteQAItemController = DeleteQAItemController;

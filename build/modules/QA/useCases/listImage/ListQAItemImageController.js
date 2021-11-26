"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQAItemImageController = void 0;
var ListQAItemImageController = /** @class */ (function () {
    function ListQAItemImageController(listQAItemUseCase) {
        this.listQAItemUseCase = listQAItemUseCase;
    }
    ListQAItemImageController.prototype.handle = function (request, response) {
        var qaItemId = request.params.qaItemId;
        var all = this.listQAItemUseCase.execute(qaItemId);
        return response.json(all);
    };
    return ListQAItemImageController;
}());
exports.ListQAItemImageController = ListQAItemImageController;

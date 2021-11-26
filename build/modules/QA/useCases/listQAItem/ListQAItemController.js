"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQAItemController = void 0;
var ListQAItemController = /** @class */ (function () {
    function ListQAItemController(listQAItemUseCase) {
        this.listQAItemUseCase = listQAItemUseCase;
    }
    ListQAItemController.prototype.handle = function (request, response) {
        var qaId = request.params.qaId;
        var all = this.listQAItemUseCase.execute(qaId);
        return response.json(all);
    };
    return ListQAItemController;
}());
exports.ListQAItemController = ListQAItemController;

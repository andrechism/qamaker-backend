"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQAController = void 0;
var ListQAController = /** @class */ (function () {
    function ListQAController(listQAUseCase) {
        this.listQAUseCase = listQAUseCase;
    }
    ListQAController.prototype.handle = function (request, response) {
        var all = this.listQAUseCase.execute();
        return response.json(all);
    };
    return ListQAController;
}());
exports.ListQAController = ListQAController;

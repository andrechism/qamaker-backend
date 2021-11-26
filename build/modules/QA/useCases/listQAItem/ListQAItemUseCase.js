"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQAItemUseCase = void 0;
var ListQAItemUseCase = /** @class */ (function () {
    function ListQAItemUseCase(qaRepository) {
        this.qaRepository = qaRepository;
    }
    ListQAItemUseCase.prototype.execute = function (qaId) {
        var qaItemList = this.qaRepository.list(qaId);
        return qaItemList;
    };
    return ListQAItemUseCase;
}());
exports.ListQAItemUseCase = ListQAItemUseCase;

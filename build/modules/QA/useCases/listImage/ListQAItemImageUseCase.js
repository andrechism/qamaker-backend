"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQAItemImageUseCase = void 0;
var ListQAItemImageUseCase = /** @class */ (function () {
    function ListQAItemImageUseCase(qaItemImageRepository) {
        this.qaItemImageRepository = qaItemImageRepository;
    }
    ListQAItemImageUseCase.prototype.execute = function (qaItemId) {
        var qaItemList = this.qaItemImageRepository.list(qaItemId);
        return qaItemList;
    };
    return ListQAItemImageUseCase;
}());
exports.ListQAItemImageUseCase = ListQAItemImageUseCase;

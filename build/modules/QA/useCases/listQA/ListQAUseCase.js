"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQAUseCase = void 0;
var ListQAUseCase = /** @class */ (function () {
    function ListQAUseCase(qaRepository) {
        this.qaRepository = qaRepository;
    }
    ListQAUseCase.prototype.execute = function () {
        var categories = this.qaRepository.list();
        return categories;
    };
    return ListQAUseCase;
}());
exports.ListQAUseCase = ListQAUseCase;

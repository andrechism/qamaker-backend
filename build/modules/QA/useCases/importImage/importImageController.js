"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportQAItemImageController = void 0;
var ImportQAItemImageController = /** @class */ (function () {
    function ImportQAItemImageController(importQAItemImageUseCase) {
        this.importQAItemImageUseCase = importQAItemImageUseCase;
    }
    ImportQAItemImageController.prototype.handle = function (request, response) {
        var qaItemId = request.params.qaItemId;
        var files = request.files;
        this.importQAItemImageUseCase.execute(qaItemId, files);
        return response.send();
    };
    return ImportQAItemImageController;
}());
exports.ImportQAItemImageController = ImportQAItemImageController;

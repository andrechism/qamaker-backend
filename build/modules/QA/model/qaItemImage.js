"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAItemImage = void 0;
var uuid_1 = require("uuid");
var QAItemImage = /** @class */ (function () {
    function QAItemImage() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    return QAItemImage;
}());
exports.QAItemImage = QAItemImage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAItem = void 0;
var uuid_1 = require("uuid");
var QAItem = /** @class */ (function () {
    function QAItem() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
        if (!this.status) {
            this.status = "";
        }
    }
    return QAItem;
}());
exports.QAItem = QAItem;

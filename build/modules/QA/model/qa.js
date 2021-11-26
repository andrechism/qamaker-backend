"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QA = void 0;
var uuid_1 = require("uuid");
var QA = /** @class */ (function () {
    function QA() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    return QA;
}());
exports.QA = QA;

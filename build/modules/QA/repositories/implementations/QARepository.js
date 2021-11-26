"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QARepository = void 0;
var qa_1 = require("../../model/qa");
var QARepository = /** @class */ (function () {
    function QARepository() {
        this.qaList = [];
    }
    QARepository.getInstance = function () {
        if (!QARepository.INSTANCE) {
            QARepository.INSTANCE = new QARepository();
        }
        return QARepository.INSTANCE;
    };
    QARepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var category = new qa_1.QA();
        Object.assign(category, {
            name: name,
            description: description,
            created_at: new Date(),
        });
        this.qaList.push(category);
    };
    QARepository.prototype.list = function () {
        return this.qaList;
    };
    QARepository.prototype.findByName = function (name) {
        var category = this.qaList.find(function (category) { return category.name === name; });
        return category;
    };
    return QARepository;
}());
exports.QARepository = QARepository;

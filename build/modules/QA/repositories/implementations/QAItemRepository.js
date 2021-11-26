"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAItemRepository = void 0;
var qaItem_1 = require("../../model/qaItem");
var QAItemRepository = /** @class */ (function () {
    function QAItemRepository() {
        this.qaItems = [];
    }
    QAItemRepository.getInstance = function () {
        if (!QAItemRepository.INSTANCE) {
            QAItemRepository.INSTANCE = new QAItemRepository();
        }
        return QAItemRepository.INSTANCE;
    };
    QAItemRepository.prototype.create = function (_a) {
        var qaId = _a.qaId, title = _a.title, description = _a.description;
        var qaItem = new qaItem_1.QAItem();
        Object.assign(qaItem, {
            qaId: qaId,
            title: title,
            description: description,
            created_at: new Date(),
        });
        this.qaItems.push(qaItem);
    };
    QAItemRepository.prototype.list = function (qaId) {
        return this.qaItems.filter(function (qaItem) { return qaItem.qaId === qaId; });
    };
    QAItemRepository.prototype.findById = function (id) {
        var qaItem = this.qaItems.find(function (qaItem) { return qaItem.id === id; });
        return qaItem;
    };
    QAItemRepository.prototype.findByTitle = function (title) {
        var qaItem = this.qaItems.find(function (qaItem) { return qaItem.title === title; });
        return qaItem;
    };
    QAItemRepository.prototype.update = function (_a) {
        var qaItemId = _a.qaItemId, title = _a.title, description = _a.description, status = _a.status;
        var qaItem = this.qaItems.find(function (qaItem) { return qaItem.id === qaItemId; });
        if (qaItem) {
            Object.assign(qaItem, {
                title: title,
                description: description,
                status: status,
                // updated_at: new Date(),
            });
        }
    };
    QAItemRepository.prototype.delete = function (id) {
        var filteredItems = this.qaItems.filter(function (item) { return item.id !== id; });
        this.qaItems = filteredItems;
    };
    return QAItemRepository;
}());
exports.QAItemRepository = QAItemRepository;

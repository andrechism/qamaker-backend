"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAItemImageRepository = void 0;
var qaItemImage_1 = require("../../model/qaItemImage");
var QAItemImageRepository = /** @class */ (function () {
    function QAItemImageRepository() {
        this.imageList = [];
    }
    QAItemImageRepository.getInstance = function () {
        if (!QAItemImageRepository.INSTANCE) {
            QAItemImageRepository.INSTANCE = new QAItemImageRepository();
        }
        return QAItemImageRepository.INSTANCE;
    };
    QAItemImageRepository.prototype.create = function (_a) {
        var filePath = _a.filePath, qaItemId = _a.qaItemId;
        var qaItemImage = new qaItemImage_1.QAItemImage();
        Object.assign(qaItemImage, {
            filePath: filePath,
            qaItemId: qaItemId,
            created_at: new Date(),
        });
        this.imageList.push(qaItemImage);
    };
    QAItemImageRepository.prototype.list = function (id) {
        // return this.imageList.filter((image) => image.qaItemId === id);
        console.log(id);
        return this.imageList;
    };
    QAItemImageRepository.prototype.findById = function (id) {
        var qaItemImage = this.imageList.find(function (qaItemImage) { return qaItemImage.id === id; });
        return qaItemImage;
    };
    return QAItemImageRepository;
}());
exports.QAItemImageRepository = QAItemImageRepository;

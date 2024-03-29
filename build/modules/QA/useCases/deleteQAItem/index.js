"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQAItemController = void 0;
var QAItemRepository_1 = require("../../repositories/implementations/QAItemRepository");
var DeleteQAItemController_1 = require("./DeleteQAItemController");
var DeleteQAItemUseCase_1 = require("./DeleteQAItemUseCase");
var qaItemRepository = QAItemRepository_1.QAItemRepository.getInstance();
var deleteQAItemUseCase = new DeleteQAItemUseCase_1.DeleteQAItemUseCase(qaItemRepository);
var deleteQAItemController = new DeleteQAItemController_1.DeleteQAItemController(deleteQAItemUseCase);
exports.deleteQAItemController = deleteQAItemController;

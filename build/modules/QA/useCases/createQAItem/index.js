"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQAItemController = void 0;
var QAItemRepository_1 = require("../../repositories/implementations/QAItemRepository");
var CreateQAItemController_1 = require("./CreateQAItemController");
var CreateQAItemUseCase_1 = require("./CreateQAItemUseCase");
var qaItemRepository = QAItemRepository_1.QAItemRepository.getInstance();
var createQAItemUseCase = new CreateQAItemUseCase_1.CreateQAItemUseCase(qaItemRepository);
var createQAItemController = new CreateQAItemController_1.CreateQAItemController(createQAItemUseCase);
exports.createQAItemController = createQAItemController;
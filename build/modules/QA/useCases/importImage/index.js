"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importQAItemImageController = void 0;
var QAItemImageRepository_1 = require("../../repositories/implementations/QAItemImageRepository");
var importImageController_1 = require("./importImageController");
var ImportImageUseCase_1 = require("./ImportImageUseCase");
var qaItemImageRepository = QAItemImageRepository_1.QAItemImageRepository.getInstance();
var importQAItemImageUseCase = new ImportImageUseCase_1.ImportImageUseCase(qaItemImageRepository);
var importQAItemImageController = new importImageController_1.ImportQAItemImageController(importQAItemImageUseCase);
exports.importQAItemImageController = importQAItemImageController;
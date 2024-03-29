"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listQAController = void 0;
var QARepository_1 = require("../../repositories/implementations/QARepository");
var ListQAController_1 = require("./ListQAController");
var ListQAUseCase_1 = require("./ListQAUseCase");
var qaRepository = QARepository_1.QARepository.getInstance();
var listQAUseCase = new ListQAUseCase_1.ListQAUseCase(qaRepository);
var listQAController = new ListQAController_1.ListQAController(listQAUseCase);
exports.listQAController = listQAController;

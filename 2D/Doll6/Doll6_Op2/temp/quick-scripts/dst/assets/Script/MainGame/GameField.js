
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/GameField.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfa611mBN1Ato8bmVTiNiGw', 'GameField');
// Script/MainGame/GameField.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameField = void 0;
var Circle_1 = require("./Circle");
var Cell_1 = require("./Cell");
var ClassHelpers_1 = require("./ClassHelpers");
var CircleEnums_1 = require("./CircleEnums");
var CircleEnums_2 = require("./CircleEnums");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GamesController_1 = require("./GamesController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameField = /** @class */ (function (_super) {
    __extends(GameField, _super);
    function GameField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Circle = null;
        _this.Cell = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.Hint = null;
        _this.needRandomVoidCell = true;
        _this.ChangeForCreateAnActiveCell = 25;
        _this.iter = 0.1;
        _this.StartCellPosX = -150;
        _this.StartCellPosY = 250;
        _this.lenghtCell = 62;
        _this.widthCell = 62;
        _this.countCircle = 0;
        _this.countProgressStep = 0;
        _this.previousCountCircle = 0;
        _this.busterClick = false;
        _this.Cells = [
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
        ];
        _this.currentI_cell_click = 0;
        _this.currentJ_cell_click = 0;
        _this.timeForCheckFild = 0;
        _this.oneCheckField = true;
        _this.cellExist = false;
        _this.tmpCountCircle = 0;
        _this.horizont = false;
        _this.vertical = false;
        _this.goDestroyThreeInArow = false;
        _this.destroyExisted = false;
        _this.animationStart = true;
        return _this;
    }
    GameField.prototype.onLoad = function () {
        this.node.on('wasClickOnCell', this.workWithClickedCell, this);
        this.node.on('wasTwoClickOnCell', this.workWithTwoClickedCell, this);
        // this.timeForCheckFild = this.Cells.length * this.iter + 0.1;
        this.timeForCheckFild = this.Cells.length * this.iter + 0.1;
    };
    GameField.prototype.start = function () {
        this.createCells();
        // DHH
        // this.setTypeCellsOnIandJ(4, 0, this.Cells.length, 4, 1);
        this.CreateCircles();
    };
    GameField.prototype.onEnable = function () {
        this.createCells();
        // DHH
        // this.setTypeCellsOnIandJ(4, 0, this.Cells.length, 4, 1);
        this.CreateCircles();
        this.destroyTipeColors = new Array(Object.keys(CircleEnums_2.typeColorCircle).length);
        for (var i = 0; i < this.destroyTipeColors.length; i++)
            this.destroyTipeColors[i] = 0;
    };
    GameField.prototype.onDisable = function () {
        this.DestroyCircles();
    };
    GameField.prototype.workWithClickedCell = function () {
        if (constants_1.Constants.countScore >= 10) {
            this.GameController.installHandle();
        }
        this.currentCell = this.getClickCell();
        this.Hint.active = false;
        constants_1.Constants.isClickFirstTime = true;
        if (this.currentCell === this.prewCell)
            this.prewCell = null;
        if (this.currentCell != null) {
            if (!this.buster()) {
                this.setSelectPrewCell();
                if (this.prewCell != null) {
                    this.tmpPrewCell = this.prewCell;
                    this.checkNeighboringCell();
                }
                this.prewCell = this.currentCell;
            }
        }
    };
    GameField.prototype.workWithTwoClickedCell = function () {
        cc.log("clear cells");
        // this.prewCell= null;
        //this.currentCell=null;
    };
    GameField.prototype.checkNeighboringCell = function () {
        if (this.prewCell._circle.getComponent(Circle_1.Circle).CircleTypeColor !== this.currentCell._circle.getComponent(Circle_1.Circle).CircleTypeColor)
            if (this.prewCell !== this.currentCell
                && this.prewCell._circle != null
                && this.currentI_cell_click != null) {
                if (this.prewCell.irow + 1 == this.currentCell.irow
                    && this.prewCell.jcolumn == this.currentCell.jcolumn ||
                    this.prewCell.irow - 1 == this.currentCell.irow
                        && this.prewCell.jcolumn == this.currentCell.jcolumn ||
                    this.prewCell.irow == this.currentCell.irow
                        && this.prewCell.jcolumn + 1 == this.currentCell.jcolumn ||
                    this.prewCell.irow == this.currentCell.irow
                        && this.prewCell.jcolumn - 1 == this.currentCell.jcolumn) {
                    this.node.dispatchEvent(new cc.Event.EventCustom('setBlockTouch', true));
                    constants_1.Constants.isCanTouch = false;
                    this.swapCircles(this.prewCell, this.currentCell);
                    this.needCheckFieldAfterSwapCircle();
                }
            }
    };
    GameField.prototype.needCheckFieldAfterSwapCircle = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
            _this.setCellNoClick(_this.prewCell);
            _this.setCellNoClick(_this.currentCell);
            _this.oneCheckField = true;
        }, this.iter + this.iter + this.iter);
        this.scheduleOnce(function () {
            if (!_this.destroyExisted) {
                cc.log("comeBackCircle");
                _this.node.dispatchEvent(new cc.Event.EventCustom('setUnBlockTouch', true));
                _this.swapCircles(_this.currentCell, _this.tmpPrewCell);
                _this.setCellNoClick(_this.tmpPrewCell);
                _this.setCellNoClick(_this.currentCell);
                _this.prewCell = null;
                _this.currentCell = null;
                _this.tmpPrewCell = null;
            }
            else {
                cc.log("countProgressStep");
                _this.node.dispatchEvent(new cc.Event.EventCustom('setUnBlockTouch', true));
                _this.node.dispatchEvent(new cc.Event.EventCustom('countProgressStep', true));
                _this.prewCell = null;
                _this.currentCell = null;
                _this.tmpPrewCell = null;
            }
        }, this.timeForCheckFild);
    };
    GameField.prototype.swapCircles = function (cell1, cell2) {
        cc.log("swapCirle");
        this.animateMoveCircle(cell1, cell2);
        this.animateMoveCircle(cell2, cell1);
        var tmpCircle = cell2._circle;
        cell2._circle = cell1._circle;
        cell1._circle = tmpCircle;
        this.setCellNoClick(cell1);
        this.setCellNoClick(cell2);
    };
    GameField.prototype.setCellNoClick = function (cell) {
        cell.countClick = 0;
        cell.wasSelectCircle = false;
        cell.wasClick = false;
        cell.setNormalSize();
    };
    GameField.prototype.animateMoveCircle = function (Cell1, Cell2) {
        var _this = this;
        if (Cell1 == null || Cell2 == null)
            return;
        constants_1.Constants.isCanTouch = false;
        // console.log(`checking ${Cell1._circle}`);
        cc.tween(Cell1._circle)
            .parallel(cc.tween().to(this.iter, { scale: 1 }), cc.tween().to(this.iter, { position: Cell2.node.position }))
            .call(function () {
            _this.scheduleOnce(function () {
                constants_1.Constants.isCanTouch = true;
            }, 1);
            cc.log("finish move");
        }).start();
    };
    GameField.prototype.setBuster = function () {
        // cc.log("Buster Set");
        this.busterClick = true;
    };
    GameField.prototype.buster = function () {
        if (this.busterClick)
            if (this.currentCell != null) {
                // this.setSelectPrewCell(cell);
                this.startTypeDestroer(this.currentCell);
                this.animateDestroyCircle(this.currentCell);
                this.setCellNoClick(this.currentCell);
                this.busterClick = false;
                this.eventDestoyArow();
                this.currentCell = null;
                this.node.dispatchEvent(new cc.Event.EventCustom('countProgressStep', true));
                return true;
            }
        return false;
    };
    GameField.prototype.setSelectPrewCell = function () {
        if (this.prewCell != null)
            if (this.prewCell !== this.currentCell && this.prewCell.wasSelectCircle) {
                this.prewCell.selectCircle();
            }
    };
    GameField.prototype.setSelectCurrentCell = function () {
        if (this.currentCell != null)
            if (this.currentCell.wasSelectCircle) {
                this.currentCell.selectCircle();
            }
    };
    GameField.prototype.getClickCell = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++)
                if (this.Cells[j][i].wasClick) {
                    this.Cells[j][i].wasClick = false;
                    // cc.log("clicked")
                    return this.Cells[j][i];
                }
        return null;
    };
    GameField.prototype.clickDestroyCircleInCell = function () {
        this.countCircle--;
        this.node.dispatchEvent(new cc.Event.EventCustom('setPoint', true));
        this.allCirclesMove();
    };
    GameField.prototype.createOneLineCircles = function () {
        for (var i = 0; i < this.Cells[0].length; i++) {
            this.createCircle(this.Cells[0][i]);
        }
        this.allCirclesMove();
        if (this.oneCheckField) {
            this.oneCheckField = false;
            this.needCheckField();
        }
    };
    GameField.prototype.needCheckField = function () {
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
            this.oneCheckField = true;
        }, this.timeForCheckFild);
    };
    GameField.prototype.checkLine = function () {
        this.destroyExisted = false;
        this.InArow();
        this.node.dispatchEvent(new cc.Event.EventCustom('setUnBlockTouch', true));
    };
    GameField.prototype.createCells = function () {
        var xPos = 0;
        var yPos = 0;
        var _cell;
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                _cell = cc.instantiate(this.Cell);
                _cell.setContentSize(this.lenghtCell, this.widthCell);
                _cell.setParent(this.node);
                _cell.setPosition(this.StartCellPosX + xPos, this.StartCellPosY + yPos);
                this.Cells[j][i] = _cell.getComponent(Cell_1.Cell);
                if (i % 2 != 0 && j % 2 == 0) {
                    this.Cells[j][i].setGrayColor();
                }
                if (i % 2 == 0 && j % 2 != 0) {
                    this.Cells[j][i].setGrayColor();
                }
                // if (this.needRandomVoidCell) this.createAnyTypeCell(this.Cells[j][i], 1);
                this.Cells[j][i].jcolumn = j;
                this.Cells[j][i].irow = i;
                xPos = xPos + this.lenghtCell;
            }
            xPos = 0;
            yPos = yPos - this.widthCell;
        }
        constants_1.Constants.Board = this.Cells;
    };
    GameField.prototype.createAnyTypeCell = function (Cell, type) {
        if (Math.floor((Math.random() * this.ChangeForCreateAnActiveCell) + 1) == 1) {
            Cell.typeCell = type;
            Cell.setColorInType();
        }
    };
    GameField.prototype.setTypeCellsOnIandJ = function (i_, j_, iLength, jLegth, type) {
        for (var j = j_; j < jLegth; j++) {
            for (var i = i_; i < iLength; i++) {
                this.Cells[j][i].typeCell = type;
                this.Cells[j][i].setColorInType();
            }
        }
    };
    GameField.prototype.CreateCircles = function () {
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].typeCell == 0) {
                    this.createCircle(this.Cells[j][i]);
                }
                ;
            }
        this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
    };
    GameField.prototype.DestroyCircles = function () {
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].circleIsNotNull()) {
                    this.Cells[j][i]._circle.destroy();
                    this.Cells[j][i]._circle = null;
                }
            }
    };
    GameField.prototype.createCircle = function (Cell) {
        if (!Cell.circleIsNotNull()) {
            Cell._circle = cc.instantiate(this.Circle);
            // Thiết lập loại và màu sắc cho Circle dựa vào circleType
            // let circleType = Cell._circle.getComponent(Circle).CircleTypeColor;
            // do {      
            //   console.log("?");
            //   Cell._circle.getComponent(Circle).setRandomColor(true);
            //   Cell._circle.getComponent(Circle).setColorTipe();
            //   circleType = Cell._circle.getComponent(Circle).CircleTypeColor;
            //   // Thiết lập loại và màu sắc cho Circle dựa vào circleType
            // } while (!this.isValidPlacementForCircle(Cell.jcolumn, Cell.irow, circleType));
            Cell._circle.setParent(this.node);
            Cell._circle.setPosition(Cell.node.position);
            Cell._circle.setContentSize(this.lenghtCell - 15, this.widthCell - 15);
            this.countCircle++;
        }
    };
    GameField.prototype.isValidPlacementForCircle = function (j, i, circleType) {
        // Kiểm tra hàng
        if (i >= 2 && this.Cells[j][i - 1]._circle && this.Cells[j][i - 2]._circle &&
            this.Cells[j][i - 1]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType &&
            this.Cells[j][i - 2]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType) {
            return false;
        }
        // Kiểm tra cột
        if (j >= 2 && this.Cells[j - 1][i]._circle && this.Cells[j - 2][i]._circle &&
            this.Cells[j - 1][i]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType &&
            this.Cells[j - 2][i]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType) {
            return false;
        }
        return true;
    };
    GameField.prototype.allCirclesMove = function () {
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].CellIsNotNull())
                    if (!this.Cells[j][i].circleIsNotNull() && this.Cells[j][i].typeCell == 0) {
                        if (j == 0) {
                            this.scheduleOnce(function () {
                                this.node.dispatchEvent(new cc.Event.EventCustom('moveCircleEnd', true));
                            }, this.iter);
                        }
                        if (j >= 1) {
                            this.swapCircleInCell(i, j, i, j - 1);
                        }
                        if (!this.cellExist) {
                            if (j >= 1 && i < this.Cells[j].length - 1) {
                                if (Math.floor(Math.random() * Math.floor(2)) == 1) {
                                    this.swapCircleInCell(i, j, i - 1, j - 1);
                                    if (!this.cellExist)
                                        this.swapCircleInCell(i, j, i + 1, j - 1);
                                }
                                else
                                    this.swapCircleInCell(i, j, i + 1, j - 1);
                                if (!this.cellExist)
                                    this.swapCircleInCell(i, j, i - 1, j - 1);
                            }
                            if (i == 0 && j >= 1) {
                                this.swapCircleInCell(i, j, i + 1, j - 1);
                            }
                            if (i == this.Cells[j].length - 1 && j >= 1) {
                                this.swapCircleInCell(i, j, i - 1, j - 1);
                            }
                        }
                    }
            }
    };
    GameField.prototype.swapCircleInCell = function (i, j, newi, newj) {
        if (this.validateCircleMove(i, j, newi, newj)) {
            this.Cells[j][i]._circle = this.Cells[newj][newi]._circle;
            this.Cells[newj][newi]._circle = null;
            this.moveCircle(this.Cells[j][i]._circle, this.Cells[j][i].node.position);
            this.cellExist = true;
            return;
        }
        this.cellExist = false;
    };
    GameField.prototype.validateCircleMove = function (i, j, newi, newj) {
        if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].CellIsNotNull(), this.Cells[newj][newi] != null))
            if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].typeCell == 0, this.Cells[newj][newi].typeCell == 0))
                if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i]._circle == null, this.Cells[newj][newi]._circle != null))
                    return true;
        return false;
    };
    GameField.prototype.moveCircle = function (circle, toMove) {
        var _this = this;
        var _circle = circle.getComponent(Circle_1.Circle);
        _circle.inMove = true;
        cc.tween(circle)
            .parallel(cc.tween().to(this.iter, { scale: 1 }), cc.tween().to(this.iter, { position: toMove }))
            .call(function () {
            _this.node.dispatchEvent(new cc.Event.EventCustom('moveCircleEnd', true));
            _circle.inMove = false;
        })
            .start();
    };
    //todo 
    GameField.prototype.fieldOnFilledWithCircles = function () {
        var allcirclenowinfield = 0;
        var allcirclenowinfieldandmove = 0;
        for (var j = 0; j < this.Cells[0].length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++)
                if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].typeCell == 0, this.Cells[j][i].circleIsNotNull())) {
                    if (this.Cells[j][i]._circle.getComponent(Circle_1.Circle).inMove)
                        allcirclenowinfieldandmove++;
                }
        }
        cc.log(allcirclenowinfield);
        cc.log(allcirclenowinfieldandmove);
        if (allcirclenowinfieldandmove == allcirclenowinfield)
            return false;
        return false;
    };
    GameField.prototype.InArow = function () {
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                this.goDestroyThreeInArow = true;
                if (j >= 2) {
                    this.vertical = false;
                    this.horizont = true;
                    this.InArowTmp(i, j, i, j - 1, i, j - 2);
                }
                if (i < this.Cells[j].length - 2) {
                    this.horizont = false;
                    this.vertical = true;
                    this.InArowTmp(i, j, i + 1, j, i + 2, j);
                }
            }
        }
    };
    GameField.prototype.InArowTmp = function (i, j, iOne, jOne, iTwo, jTwo) {
        if (this.Cells[j][i] != null && this.Cells[jOne][iOne] != null && this.Cells[jTwo][iTwo] != null) {
            var tmpBool1 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].typeCell == 0, this.Cells[jOne][iOne].typeCell == 0);
            var tmpBool2 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(tmpBool1, this.Cells[jTwo][iTwo].typeCell == 0);
            if (!tmpBool2)
                return;
            tmpBool1 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].circleIsNotNull(), this.Cells[jOne][iOne].circleIsNotNull());
            tmpBool2 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(tmpBool1, this.Cells[jTwo][iTwo].circleIsNotNull());
            if (!tmpBool2)
                return;
            var tmpBool3 = ClassHelpers_1.CheckerBoolean.EqualsTrheeObj(this.Cells[j][i]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[jOne][iOne]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[jTwo][iTwo]._circle.getComponent(Circle_1.Circle).CircleTypeColor);
            if (!tmpBool3)
                return;
            if (this.vertical) {
                if (i < this.Cells[j].length - 4) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.rainbowSound);
                    this.createRainbowBall(i, j, iOne, jOne, iTwo, jTwo, jTwo, iTwo + 1, jTwo, iTwo + 2, 3);
                }
                if (i < this.Cells[j].length - 3 && this.goDestroyThreeInArow) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.GemSound);
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaSound);
                    this.createLightning(i, j, iOne, jOne, iTwo, jTwo, jTwo, iTwo + 1, 2);
                }
            }
            if (this.horizont) {
                if (j >= 4) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.rainbowSound);
                    this.createRainbowBall(i, j, iOne, jOne, iTwo, jTwo, jTwo - 1, iTwo, jTwo - 2, iTwo, 3);
                }
                if (j >= 3 && this.goDestroyThreeInArow) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.GemSound);
                    this.createLightning(i, j, iOne, jOne, iTwo, jTwo, jTwo - 1, iTwo, 1);
                }
            }
            if (this.goDestroyThreeInArow) {
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.GemSound);
                this.check3Circle(this.Cells[j][i], this.Cells[jOne][iOne], this.Cells[jTwo][iTwo]);
                this.eventDestoyArow();
            }
        }
    };
    GameField.prototype.createRainbowBall = function (i, j, iOne, jOne, iTwo, jTwo, iThree, jThree, iFour, jFour, tipe) {
        if (this.Cells[iThree][jThree] == null || this.Cells[iFour][jFour] == null)
            return;
        var bool1 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[iThree][jThree].typeCell == 0, this.Cells[iThree][jThree].circleIsNotNull());
        var bool2 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[iFour][jFour].typeCell == 0, this.Cells[iFour][jFour].circleIsNotNull());
        if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(bool1, bool2)) {
            var bool3 = ClassHelpers_1.CheckerBoolean.EqualsTrheeObj(this.Cells[jTwo][iTwo]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[iThree][jThree]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[iFour][jFour]._circle.getComponent(Circle_1.Circle).CircleTypeColor);
            if (bool3) {
                cc.log("RainbowCreate");
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaSound2);
                this.Cells[j][i]._circle.getComponent(Circle_1.Circle).setTipe(tipe);
                cc.log(this.Cells[j][i]._circle.getComponent(Circle_1.Circle).CircleType);
                this.check3Circle(this.Cells[jOne][iOne], this.Cells[jTwo][iTwo], this.Cells[iThree][jThree]);
                this.startCheckCircleForDestroy(this.Cells[iFour][jFour]);
                this.goDestroyThreeInArow = false;
                this.eventDestoyArow();
            }
        }
    };
    GameField.prototype.createLightning = function (i, j, iOne, jOne, iTwo, jTwo, iThree, jThree, tipe) {
        if (this.Cells[iThree][jThree] == null)
            return;
        if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[iThree][jThree].typeCell == 0, this.Cells[iThree][jThree].circleIsNotNull()))
            if (ClassHelpers_1.CheckerBoolean.EqualsTwoObj(this.Cells[jTwo][iTwo]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[iThree][jThree]._circle.getComponent(Circle_1.Circle).CircleTypeColor)) {
                console.log("create lightning");
                var circle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
                this.Cells[iThree][jThree].getComponent(cc.Sprite).enabled = false;
                this.Cells[iThree][jThree].node.opacity = 0;
                this.Cells[iThree][jThree]._circle.getComponent(Circle_1.Circle).getComponent(cc.Sprite).enabled = false;
                this.Cells[iThree][jThree]._circle.opacity = 0;
                circle.setTipe(tipe);
                this.check3Circle(this.Cells[jOne][iOne], this.Cells[jTwo][iTwo], this.Cells[iThree][jThree]);
                this.goDestroyThreeInArow = false;
                this.eventDestoyArow();
            }
    };
    GameField.prototype.destroyRainbowBall = function (Cell, circle) {
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].circleIsNotNull())
                    var currentCircle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
                else
                    return;
                if (Cell != this.Cells[j][i] &&
                    circle.CircleTypeColor === currentCircle.CircleTypeColor) {
                    if (circle.CircleType === currentCircle.CircleType)
                        this.animateDestroyCircle(this.Cells[j][i]);
                    else
                        this.startCheckCircleForDestroy(this.Cells[j][i]);
                }
            }
        }
    };
    GameField.prototype.destroyLightningVertical = function (Cell, circle) {
        console.log("boom lightning vertical");
        var j = Cell.jcolumn;
        for (var i = 0; i < this.Cells[j].length; i++) {
            if (Cell != this.Cells[j][i] || this.Cells[j][i].CellIsNotNull())
                return;
            if (this.Cells[j][i].circleIsNotNull())
                var currentCircle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
            else
                return;
            if (circle.CircleType === currentCircle.CircleType)
                this.animateDestroyCircle(this.Cells[j][i]);
            else
                this.startCheckCircleForDestroy(this.Cells[j][i]);
        }
    };
    GameField.prototype.destroyLightningHorizont = function (Cell, circle) {
        console.log("boom lightning horizont");
        var i = Cell.irow;
        var thisCircle = circle.getComponent(Circle_1.Circle);
        for (var j = 0; j < this.Cells.length; j++) {
            if (Cell != this.Cells[j][i] || this.Cells[j][i] != null)
                return;
            if (this.Cells[j][i].circleIsNotNull())
                var currentCircle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
            if (currentCircle == null)
                return;
            if (circle.CircleType === currentCircle.CircleType)
                this.animateDestroyCircle(this.Cells[j][i]);
            else
                this.startCheckCircleForDestroy(this.Cells[j][i]);
        }
    };
    GameField.prototype.destroylightningVerticalAndlightningHorizont = function (Cell, circle) {
        this.destroyLightningVertical(Cell, circle);
        this.destroyLightningHorizont(Cell, circle);
    };
    GameField.prototype.check3Circle = function (Cell1, Cell2, Cell3) {
        this.startCheckCircleForDestroy(Cell1);
        this.startCheckCircleForDestroy(Cell2);
        this.startCheckCircleForDestroy(Cell3);
    };
    GameField.prototype.startCheckCircleForDestroy = function (Cell) {
        this.startTypeDestroer(Cell);
        this.animateDestroyCircle(Cell);
    };
    GameField.prototype.startTypeDestroer = function (Cell) {
        if (Cell.circleIsNotNull()) {
            var circle = Cell._circle.getComponent(Circle_1.Circle);
            switch (circle.CircleType) {
                case CircleEnums_1.tipeCircle.rainbowBall: {
                    this.destroyRainbowBall(Cell, circle);
                    break;
                }
                case CircleEnums_1.tipeCircle.lightningVertical: {
                    this.destroyLightningVertical(Cell, circle);
                    break;
                }
                case CircleEnums_1.tipeCircle.lightningHorizont: {
                    this.destroyLightningHorizont(Cell, circle);
                    break;
                }
                case CircleEnums_1.tipeCircle.normal: {
                    this.animateDestroyCircle(Cell);
                    break;
                }
            }
        }
    };
    GameField.prototype.destroyEveryCircles = function () {
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                this.animateDestroyCircle(this.Cells[j][i]);
            }
        }
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('destroyCircles', true));
        }, this.iter + 0.1);
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
        }, (this.iter + 0.2) * 4);
    };
    GameField.prototype.eventDestoyArow = function () {
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('setBlockTouch', true));
            this.node.dispatchEvent(new cc.Event.EventCustom('destroyCircles', true));
            this.destroyExisted = true;
        }, this.iter + this.iter);
    };
    GameField.prototype.animateDestroyCircle = function (Cell) {
        var _this = this;
        if (Cell == null)
            return;
        Cell.blink.getComponent(cc.Animation).play("Blink_Anim");
        if (constants_1.Constants.isClickFirstTime) {
            constants_1.Constants.countScore += 1;
        }
        cc.tween(Cell._circle)
            .parallel(cc.tween().to(this.iter, { scale: 0 }), cc.tween().to(this.iter, {}))
            .call(function () {
            if (Cell._circle == null)
                return;
            _this.countCircle--;
            _this.getTypeDestroyCircle(Cell._circle.getComponent(Circle_1.Circle));
            _this.node.dispatchEvent(new cc.Event.EventCustom('setPoint', true));
            Cell._circle.destroy();
            Cell._circle = null;
        }).start();
    };
    GameField.prototype.getTypeDestroyCircle = function (circle) {
        this.destroyTipeColors[circle.CircleTypeColor]++;
        // cc.log(this.destroyTipeColors[circle.CircleTypeColor]);
        this.node.dispatchEvent(new cc.Event.EventCustom('setDestroyCirclesType_', true));
    };
    __decorate([
        property(cc.Prefab)
    ], GameField.prototype, "Circle", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameField.prototype, "Cell", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GameField.prototype, "AudioManager", void 0);
    __decorate([
        property(GamesController_1.GameController)
    ], GameField.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GameField.prototype, "Hint", void 0);
    __decorate([
        property
    ], GameField.prototype, "needRandomVoidCell", void 0);
    __decorate([
        property
    ], GameField.prototype, "ChangeForCreateAnActiveCell", void 0);
    __decorate([
        property
    ], GameField.prototype, "iter", void 0);
    __decorate([
        property
    ], GameField.prototype, "StartCellPosX", void 0);
    __decorate([
        property
    ], GameField.prototype, "StartCellPosY", void 0);
    __decorate([
        property
    ], GameField.prototype, "lenghtCell", void 0);
    __decorate([
        property
    ], GameField.prototype, "widthCell", void 0);
    GameField = __decorate([
        ccclass
    ], GameField);
    return GameField;
}(cc.Component));
exports.GameField = GameField;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcR2FtZUZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMsK0JBQThCO0FBQzlCLCtDQUFnRDtBQUNoRCw2Q0FBMkM7QUFDM0MsNkNBQWdEO0FBQ2hELCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQscURBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBc3RCQztRQW50QlMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdiLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxpQ0FBMkIsR0FBVyxFQUFFLENBQUM7UUFFekMsVUFBSSxHQUFXLEdBQUcsQ0FBQztRQUVuQixtQkFBYSxHQUFXLENBQUMsR0FBRyxDQUFDO1FBRTdCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRzVCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUV4QyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUVyQixXQUFLLEdBQWE7WUFDeEIsQ0FBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMsQUFBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMsQUFBQyxFQUFFO1lBQ2YsQ0FBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMs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LElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBanRCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzttREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxnQ0FBYyxDQUFDO3FEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFHckI7UUFEQyxRQUFRO3lEQUNrQztJQUUzQztRQURDLFFBQVE7a0VBQ3dDO0lBRWpEO1FBREMsUUFBUTsyQ0FDa0I7SUFFM0I7UUFEQyxRQUFRO29EQUM0QjtJQUVyQztRQURDLFFBQVE7b0RBQzJCO0lBR3BDO1FBREMsUUFBUTtpREFDdUI7SUFFaEM7UUFEQyxRQUFRO2dEQUNzQjtJQTVCcEIsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQXN0QnJCO0lBQUQsZ0JBQUM7Q0F0dEJELEFBc3RCQyxDQXR0QjhCLEVBQUUsQ0FBQyxTQUFTLEdBc3RCMUM7QUF0dEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSBcIi4vQ2lyY2xlXCI7XHJcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9DZWxsXCI7XHJcbmltcG9ydCB7IENoZWNrZXJCb29sZWFuIH0gZnJvbSBcIi4vQ2xhc3NIZWxwZXJzXCI7XHJcbmltcG9ydCB7IHRpcGVDaXJjbGUgfSBmcm9tIFwiLi9DaXJjbGVFbnVtc1wiO1xyXG5pbXBvcnQgeyB0eXBlQ29sb3JDaXJjbGUgfSBmcm9tIFwiLi9DaXJjbGVFbnVtc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVzQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lRmllbGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIHByaXZhdGUgQ2lyY2xlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgcHJpdmF0ZSBDZWxsOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSBuZWVkUmFuZG9tVm9pZENlbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBwcm9wZXJ0eVxyXG4gIHByaXZhdGUgQ2hhbmdlRm9yQ3JlYXRlQW5BY3RpdmVDZWxsOiBudW1iZXIgPSAyNTtcclxuICBAcHJvcGVydHlcclxuICBwcml2YXRlIGl0ZXI6IG51bWJlciA9IDAuMTtcclxuICBAcHJvcGVydHlcclxuICBwcml2YXRlIFN0YXJ0Q2VsbFBvc1g6IG51bWJlciA9IC0xNTA7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSBTdGFydENlbGxQb3NZOiBudW1iZXIgPSAyNTA7XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIHByaXZhdGUgbGVuZ2h0Q2VsbDogbnVtYmVyID0gNjI7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSB3aWR0aENlbGw6IG51bWJlciA9IDYyO1xyXG5cclxuICBwcml2YXRlIGNvdW50Q2lyY2xlOiBudW1iZXIgPSAwO1xyXG4gIGNvdW50UHJvZ3Jlc3NTdGVwOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzQ291bnRDaXJjbGU6IG51bWJlciA9IDA7XHJcblxyXG4gIGJ1c3RlckNsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgQ2VsbHM6IENlbGxbXVtdID0gW1xyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gIF07XHJcblxyXG4gIGRlc3Ryb3lUaXBlQ29sb3JzOiBudW1iZXJbXTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SV9jZWxsX2NsaWNrOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudEpfY2VsbF9jbGljazogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHRpbWVGb3JDaGVja0ZpbGQ6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgcHJld0NlbGw6IENlbGw7XHJcbiAgcHJpdmF0ZSBjdXJyZW50Q2VsbDogQ2VsbDtcclxuICAvL3RvZG8gXHJcbiAgcHJpdmF0ZSB0bXBQcmV3Q2VsbDogQ2VsbDtcclxuICBwcml2YXRlIG9uZUNoZWNrRmllbGQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLm5vZGUub24oJ3dhc0NsaWNrT25DZWxsJywgdGhpcy53b3JrV2l0aENsaWNrZWRDZWxsLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbignd2FzVHdvQ2xpY2tPbkNlbGwnLCB0aGlzLndvcmtXaXRoVHdvQ2xpY2tlZENlbGwsIHRoaXMpO1xyXG4gICAgLy8gdGhpcy50aW1lRm9yQ2hlY2tGaWxkID0gdGhpcy5DZWxscy5sZW5ndGggKiB0aGlzLml0ZXIgKyAwLjE7XHJcbiAgICB0aGlzLnRpbWVGb3JDaGVja0ZpbGQgPSB0aGlzLkNlbGxzLmxlbmd0aCAqIHRoaXMuaXRlciArIDAuMTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDZWxscygpO1xyXG4gICAgLy8gREhIXHJcbiAgICAvLyB0aGlzLnNldFR5cGVDZWxsc09uSWFuZEooNCwgMCwgdGhpcy5DZWxscy5sZW5ndGgsIDQsIDEpO1xyXG4gICAgdGhpcy5DcmVhdGVDaXJjbGVzKCk7XHJcbiAgfVxyXG5cclxuICBvbkVuYWJsZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlQ2VsbHMoKTtcclxuICAgIC8vIERISFxyXG4gICAgLy8gdGhpcy5zZXRUeXBlQ2VsbHNPbklhbmRKKDQsIDAsIHRoaXMuQ2VsbHMubGVuZ3RoLCA0LCAxKTtcclxuICAgIHRoaXMuQ3JlYXRlQ2lyY2xlcygpO1xyXG4gICAgdGhpcy5kZXN0cm95VGlwZUNvbG9ycyA9IG5ldyBBcnJheShPYmplY3Qua2V5cyh0eXBlQ29sb3JDaXJjbGUpLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVzdHJveVRpcGVDb2xvcnMubGVuZ3RoOyBpKyspIHRoaXMuZGVzdHJveVRpcGVDb2xvcnNbaV0gPSAwO1xyXG4gIH1cclxuXHJcbiAgb25EaXNhYmxlKCkge1xyXG4gICAgdGhpcy5EZXN0cm95Q2lyY2xlcygpO1xyXG4gIH1cclxuXHJcbiAgd29ya1dpdGhDbGlja2VkQ2VsbCgpIHtcclxuICAgIGlmIChDb25zdGFudHMuY291bnRTY29yZSA+PSAxMCkge1xyXG4gICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRDZWxsID0gdGhpcy5nZXRDbGlja0NlbGwoKTtcclxuICAgIHRoaXMuSGludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NsaWNrRmlyc3RUaW1lID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRDZWxsID09PSB0aGlzLnByZXdDZWxsKSB0aGlzLnByZXdDZWxsID0gbnVsbDtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRDZWxsICE9IG51bGwpIHtcclxuICAgICAgaWYgKCF0aGlzLmJ1c3RlcigpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RQcmV3Q2VsbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByZXdDZWxsICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudG1wUHJld0NlbGwgPSB0aGlzLnByZXdDZWxsO1xyXG4gICAgICAgICAgdGhpcy5jaGVja05laWdoYm9yaW5nQ2VsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXdDZWxsID0gdGhpcy5jdXJyZW50Q2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHdvcmtXaXRoVHdvQ2xpY2tlZENlbGwoKSB7XHJcbiAgICBjYy5sb2coXCJjbGVhciBjZWxsc1wiKVxyXG4gICAgLy8gdGhpcy5wcmV3Q2VsbD0gbnVsbDtcclxuICAgIC8vdGhpcy5jdXJyZW50Q2VsbD1udWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY2hlY2tOZWlnaGJvcmluZ0NlbGwoKSB7XHJcbiAgICBpZiAodGhpcy5wcmV3Q2VsbC5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvciAhPT0gdGhpcy5jdXJyZW50Q2VsbC5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcilcclxuICAgICAgaWYgKHRoaXMucHJld0NlbGwgIT09IHRoaXMuY3VycmVudENlbGxcclxuICAgICAgICAmJiB0aGlzLnByZXdDZWxsLl9jaXJjbGUgIT0gbnVsbFxyXG4gICAgICAgICYmIHRoaXMuY3VycmVudElfY2VsbF9jbGljayAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJld0NlbGwuaXJvdyArIDEgPT0gdGhpcy5jdXJyZW50Q2VsbC5pcm93XHJcbiAgICAgICAgICAmJiB0aGlzLnByZXdDZWxsLmpjb2x1bW4gPT0gdGhpcy5jdXJyZW50Q2VsbC5qY29sdW1uIHx8XHJcbiAgICAgICAgICB0aGlzLnByZXdDZWxsLmlyb3cgLSAxID09IHRoaXMuY3VycmVudENlbGwuaXJvd1xyXG4gICAgICAgICAgJiYgdGhpcy5wcmV3Q2VsbC5qY29sdW1uID09IHRoaXMuY3VycmVudENlbGwuamNvbHVtbiB8fFxyXG4gICAgICAgICAgdGhpcy5wcmV3Q2VsbC5pcm93ID09IHRoaXMuY3VycmVudENlbGwuaXJvd1xyXG4gICAgICAgICAgJiYgdGhpcy5wcmV3Q2VsbC5qY29sdW1uICsgMSA9PSB0aGlzLmN1cnJlbnRDZWxsLmpjb2x1bW4gfHxcclxuICAgICAgICAgIHRoaXMucHJld0NlbGwuaXJvdyA9PSB0aGlzLmN1cnJlbnRDZWxsLmlyb3dcclxuICAgICAgICAgICYmIHRoaXMucHJld0NlbGwuamNvbHVtbiAtIDEgPT0gdGhpcy5jdXJyZW50Q2VsbC5qY29sdW1uKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldEJsb2NrVG91Y2gnLCB0cnVlKSk7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zd2FwQ2lyY2xlcyh0aGlzLnByZXdDZWxsLCB0aGlzLmN1cnJlbnRDZWxsKTtcclxuICAgICAgICAgIHRoaXMubmVlZENoZWNrRmllbGRBZnRlclN3YXBDaXJjbGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG5lZWRDaGVja0ZpZWxkQWZ0ZXJTd2FwQ2lyY2xlKCkge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ25lZWRDaGVja0ZpZWxkJywgdHJ1ZSkpO1xyXG4gICAgICB0aGlzLnNldENlbGxOb0NsaWNrKHRoaXMucHJld0NlbGwpO1xyXG4gICAgICB0aGlzLnNldENlbGxOb0NsaWNrKHRoaXMuY3VycmVudENlbGwpO1xyXG4gICAgICB0aGlzLm9uZUNoZWNrRmllbGQgPSB0cnVlO1xyXG4gICAgfSwgdGhpcy5pdGVyICsgdGhpcy5pdGVyICsgdGhpcy5pdGVyKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5kZXN0cm95RXhpc3RlZCkge1xyXG4gICAgICAgIGNjLmxvZyhcImNvbWVCYWNrQ2lyY2xlXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdzZXRVbkJsb2NrVG91Y2gnLCB0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5zd2FwQ2lyY2xlcyh0aGlzLmN1cnJlbnRDZWxsLCB0aGlzLnRtcFByZXdDZWxsKTtcclxuICAgICAgICB0aGlzLnNldENlbGxOb0NsaWNrKHRoaXMudG1wUHJld0NlbGwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2VsbE5vQ2xpY2sodGhpcy5jdXJyZW50Q2VsbCk7XHJcbiAgICAgICAgdGhpcy5wcmV3Q2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50bXBQcmV3Q2VsbCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2MubG9nKFwiY291bnRQcm9ncmVzc1N0ZXBcIilcclxuICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldFVuQmxvY2tUb3VjaCcsIHRydWUpKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ2NvdW50UHJvZ3Jlc3NTdGVwJywgdHJ1ZSkpO1xyXG4gICAgICAgIHRoaXMucHJld0NlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudG1wUHJld0NlbGwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLnRpbWVGb3JDaGVja0ZpbGQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3dhcENpcmNsZXMoY2VsbDEsIGNlbGwyKSB7XHJcbiAgICBjYy5sb2coXCJzd2FwQ2lybGVcIilcclxuICAgIHRoaXMuYW5pbWF0ZU1vdmVDaXJjbGUoY2VsbDEsIGNlbGwyKTtcclxuICAgIHRoaXMuYW5pbWF0ZU1vdmVDaXJjbGUoY2VsbDIsIGNlbGwxKTtcclxuICAgIHZhciB0bXBDaXJjbGUgPSBjZWxsMi5fY2lyY2xlO1xyXG4gICAgY2VsbDIuX2NpcmNsZSA9IGNlbGwxLl9jaXJjbGU7XHJcbiAgICBjZWxsMS5fY2lyY2xlID0gdG1wQ2lyY2xlO1xyXG4gICAgdGhpcy5zZXRDZWxsTm9DbGljayhjZWxsMSk7XHJcbiAgICB0aGlzLnNldENlbGxOb0NsaWNrKGNlbGwyKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNldENlbGxOb0NsaWNrKGNlbGwpIHtcclxuICAgIGNlbGwuY291bnRDbGljayA9IDA7XHJcbiAgICBjZWxsLndhc1NlbGVjdENpcmNsZSA9IGZhbHNlO1xyXG4gICAgY2VsbC53YXNDbGljayA9IGZhbHNlO1xyXG4gICAgY2VsbC5zZXROb3JtYWxTaXplKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlTW92ZUNpcmNsZShDZWxsMSwgQ2VsbDIpIHtcclxuICAgIGlmIChDZWxsMSA9PSBudWxsIHx8IENlbGwyID09IG51bGwpIHJldHVybjtcclxuICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgY2hlY2tpbmcgJHtDZWxsMS5fY2lyY2xlfWApO1xyXG5cclxuICAgIGNjLnR3ZWVuKENlbGwxLl9jaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMSB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBwb3NpdGlvbjogQ2VsbDIubm9kZS5wb3NpdGlvbiB9KVxyXG4gICAgICApXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICBjYy5sb2coXCJmaW5pc2ggbW92ZVwiKTtcclxuICAgICAgfSkuc3RhcnQoKVxyXG4gIH1cclxuXHJcblxyXG4gIHNldEJ1c3RlcigpIHtcclxuICAgIC8vIGNjLmxvZyhcIkJ1c3RlciBTZXRcIik7XHJcbiAgICB0aGlzLmJ1c3RlckNsaWNrID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGJ1c3RlcigpIHtcclxuICAgIGlmICh0aGlzLmJ1c3RlckNsaWNrKVxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Q2VsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTZWxlY3RQcmV3Q2VsbChjZWxsKTtcclxuICAgICAgICB0aGlzLnN0YXJ0VHlwZURlc3Ryb2VyKHRoaXMuY3VycmVudENlbGwpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5jdXJyZW50Q2VsbCk7XHJcbiAgICAgICAgdGhpcy5zZXRDZWxsTm9DbGljayh0aGlzLmN1cnJlbnRDZWxsKTtcclxuICAgICAgICB0aGlzLmJ1c3RlckNsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnY291bnRQcm9ncmVzc1N0ZXAnLCB0cnVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBzZXRTZWxlY3RQcmV3Q2VsbCgpIHtcclxuICAgIGlmICh0aGlzLnByZXdDZWxsICE9IG51bGwpXHJcbiAgICAgIGlmICh0aGlzLnByZXdDZWxsICE9PSB0aGlzLmN1cnJlbnRDZWxsICYmIHRoaXMucHJld0NlbGwud2FzU2VsZWN0Q2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5wcmV3Q2VsbC5zZWxlY3RDaXJjbGUoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHNldFNlbGVjdEN1cnJlbnRDZWxsKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudENlbGwgIT0gbnVsbClcclxuICAgICAgaWYgKHRoaXMuY3VycmVudENlbGwud2FzU2VsZWN0Q2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbC5zZWxlY3RDaXJjbGUoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Q2xpY2tDZWxsKCkge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsaWNrU291bmQpO1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKHRoaXMuQ2VsbHNbal1baV0ud2FzQ2xpY2spIHtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbal1baV0ud2FzQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgIC8vIGNjLmxvZyhcImNsaWNrZWRcIilcclxuICAgICAgICAgIHJldHVybiB0aGlzLkNlbGxzW2pdW2ldO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIGNsaWNrRGVzdHJveUNpcmNsZUluQ2VsbCgpIHtcclxuICAgIHRoaXMuY291bnRDaXJjbGUtLTtcclxuICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0UG9pbnQnLCB0cnVlKSk7XHJcbiAgICB0aGlzLmFsbENpcmNsZXNNb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVPbmVMaW5lQ2lyY2xlcygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUNpcmNsZSh0aGlzLkNlbGxzWzBdW2ldKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsQ2lyY2xlc01vdmUoKTtcclxuICAgIGlmICh0aGlzLm9uZUNoZWNrRmllbGQpIHtcclxuICAgICAgdGhpcy5vbmVDaGVja0ZpZWxkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubmVlZENoZWNrRmllbGQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmVlZENoZWNrRmllbGQoKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbmVlZENoZWNrRmllbGQnLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMub25lQ2hlY2tGaWVsZCA9IHRydWU7XHJcbiAgICB9LCB0aGlzLnRpbWVGb3JDaGVja0ZpbGQpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMaW5lKCkge1xyXG4gICAgdGhpcy5kZXN0cm95RXhpc3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5JbkFyb3coKTtcclxuICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0VW5CbG9ja1RvdWNoJywgdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDZWxscygpIHtcclxuICAgIHZhciB4UG9zOiBudW1iZXIgPSAwO1xyXG4gICAgdmFyIHlQb3M6IG51bWJlciA9IDA7XHJcbiAgICB2YXIgX2NlbGw7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIF9jZWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5DZWxsKTtcclxuICAgICAgICBfY2VsbC5zZXRDb250ZW50U2l6ZSh0aGlzLmxlbmdodENlbGwsIHRoaXMud2lkdGhDZWxsKTtcclxuICAgICAgICBfY2VsbC5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICBfY2VsbC5zZXRQb3NpdGlvbih0aGlzLlN0YXJ0Q2VsbFBvc1ggKyB4UG9zLCB0aGlzLlN0YXJ0Q2VsbFBvc1kgKyB5UG9zKTtcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldID0gX2NlbGwuZ2V0Q29tcG9uZW50KENlbGwpO1xyXG4gICAgICAgIGlmIChpICUgMiAhPSAwICYmIGogJSAyID09IDApIHsgdGhpcy5DZWxsc1tqXVtpXS5zZXRHcmF5Q29sb3IoKTsgfVxyXG4gICAgICAgIGlmIChpICUgMiA9PSAwICYmIGogJSAyICE9IDApIHsgdGhpcy5DZWxsc1tqXVtpXS5zZXRHcmF5Q29sb3IoKTsgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLm5lZWRSYW5kb21Wb2lkQ2VsbCkgdGhpcy5jcmVhdGVBbnlUeXBlQ2VsbCh0aGlzLkNlbGxzW2pdW2ldLCAxKTtcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLmpjb2x1bW4gPSBqO1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baV0uaXJvdyA9IGk7XHJcbiAgICAgICAgeFBvcyA9IHhQb3MgKyB0aGlzLmxlbmdodENlbGw7XHJcbiAgICAgIH1cclxuICAgICAgeFBvcyA9IDA7XHJcbiAgICAgIHlQb3MgPSB5UG9zIC0gdGhpcy53aWR0aENlbGw7XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLkJvYXJkID0gdGhpcy5DZWxscztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQW55VHlwZUNlbGwoQ2VsbCwgdHlwZSkge1xyXG4gICAgaWYgKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiB0aGlzLkNoYW5nZUZvckNyZWF0ZUFuQWN0aXZlQ2VsbCkgKyAxKSA9PSAxKSB7XHJcbiAgICAgIENlbGwudHlwZUNlbGwgPSB0eXBlO1xyXG4gICAgICBDZWxsLnNldENvbG9ySW5UeXBlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFR5cGVDZWxsc09uSWFuZEooaV8sIGpfLCBpTGVuZ3RoLCBqTGVndGgsIHR5cGUpIHtcclxuICAgIGZvciAodmFyIGogPSBqXzsgaiA8IGpMZWd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSBpXzsgaSA8IGlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baV0udHlwZUNlbGwgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baV0uc2V0Q29sb3JJblR5cGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBDcmVhdGVDaXJjbGVzKCkge1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS50eXBlQ2VsbCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUNpcmNsZSh0aGlzLkNlbGxzW2pdW2ldKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ25lZWRDaGVja0ZpZWxkJywgdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBEZXN0cm95Q2lyY2xlcygpIHtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxscy5sZW5ndGg7IGorKylcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQ2VsbHNbal1baV0uY2lyY2xlSXNOb3ROdWxsKCkpIHtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDaXJjbGUoQ2VsbCkge1xyXG4gICAgaWYgKCFDZWxsLmNpcmNsZUlzTm90TnVsbCgpKSB7XHJcbiAgICAgIENlbGwuX2NpcmNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ2lyY2xlKTtcclxuICAgICAgLy8gVGhp4bq/dCBs4bqtcCBsb+G6oWkgdsOgIG3DoHUgc+G6r2MgY2hvIENpcmNsZSBk4buxYSB2w6BvIGNpcmNsZVR5cGVcclxuICAgICAgXHJcbiAgICAgIC8vIGxldCBjaXJjbGVUeXBlID0gQ2VsbC5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcjtcclxuICAgICAgLy8gZG8geyAgICAgIFxyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiP1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAvLyAgIENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5zZXRSYW5kb21Db2xvcih0cnVlKTtcclxuICAgICAgLy8gICBDZWxsLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuc2V0Q29sb3JUaXBlKCk7XHJcbiAgICAgIC8vICAgY2lyY2xlVHlwZSA9IENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3I7XHJcbiAgICAgIC8vICAgLy8gVGhp4bq/dCBs4bqtcCBsb+G6oWkgdsOgIG3DoHUgc+G6r2MgY2hvIENpcmNsZSBk4buxYSB2w6BvIGNpcmNsZVR5cGVcclxuICAgICAgLy8gfSB3aGlsZSAoIXRoaXMuaXNWYWxpZFBsYWNlbWVudEZvckNpcmNsZShDZWxsLmpjb2x1bW4sIENlbGwuaXJvdywgY2lyY2xlVHlwZSkpO1xyXG5cclxuICAgICAgQ2VsbC5fY2lyY2xlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICBDZWxsLl9jaXJjbGUuc2V0UG9zaXRpb24oQ2VsbC5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgQ2VsbC5fY2lyY2xlLnNldENvbnRlbnRTaXplKHRoaXMubGVuZ2h0Q2VsbCAtIDE1LCB0aGlzLndpZHRoQ2VsbCAtIDE1KTtcclxuICAgICAgdGhpcy5jb3VudENpcmNsZSsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZFBsYWNlbWVudEZvckNpcmNsZShqOiBudW1iZXIsIGk6IG51bWJlciwgY2lyY2xlVHlwZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAvLyBLaeG7g20gdHJhIGjDoG5nXHJcbiAgICBpZiAoaSA+PSAyICYmIHRoaXMuQ2VsbHNbal1baSAtIDFdLl9jaXJjbGUgJiYgdGhpcy5DZWxsc1tqXVtpIC0gMl0uX2NpcmNsZSAmJlxyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baSAtIDFdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yID09PSBjaXJjbGVUeXBlICYmXHJcbiAgICAgICAgdGhpcy5DZWxsc1tqXVtpIC0gMl0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3IgPT09IGNpcmNsZVR5cGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gS2nhu4NtIHRyYSBj4buZdFxyXG4gICAgaWYgKGogPj0gMiAmJiB0aGlzLkNlbGxzW2ogLSAxXVtpXS5fY2lyY2xlICYmIHRoaXMuQ2VsbHNbaiAtIDJdW2ldLl9jaXJjbGUgJiZcclxuICAgICAgICB0aGlzLkNlbGxzW2ogLSAxXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvciA9PT0gY2lyY2xlVHlwZSAmJlxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaiAtIDJdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yID09PSBjaXJjbGVUeXBlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIGNlbGxFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBhbGxDaXJjbGVzTW92ZSgpIHtcclxuXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQ2VsbHMubGVuZ3RoOyBqKyspXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLkNlbGxJc05vdE51bGwoKSlcclxuICAgICAgICAgIGlmICghdGhpcy5DZWxsc1tqXVtpXS5jaXJjbGVJc05vdE51bGwoKSAmJiB0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDApIHtcclxuICAgICAgICAgICAgaWYgKGogPT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbW92ZUNpcmNsZUVuZCcsIHRydWUpKTtcclxuICAgICAgICAgICAgICB9LCB0aGlzLml0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChqID49IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSwgaiAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jZWxsRXhpc3QpIHtcclxuICAgICAgICAgICAgICBpZiAoaiA+PSAxICYmIGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDIpKSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcENpcmNsZUluQ2VsbChpLCBqLCBpIC0gMSwgaiAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbEV4aXN0KSB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSArIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5zd2FwQ2lyY2xlSW5DZWxsKGksIGosIGkgKyAxLCBqIC0gMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbEV4aXN0KSB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSAtIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGkgPT0gMCAmJiBqID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dhcENpcmNsZUluQ2VsbChpLCBqLCBpICsgMSwgaiAtIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDEgJiYgaiA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSAtIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3dhcENpcmNsZUluQ2VsbChpLCBqLCBuZXdpLCBuZXdqKSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNpcmNsZU1vdmUoaSwgaiwgbmV3aSwgbmV3aikpIHtcclxuICAgICAgdGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlID0gdGhpcy5DZWxsc1tuZXdqXVtuZXdpXS5fY2lyY2xlO1xyXG4gICAgICB0aGlzLkNlbGxzW25ld2pdW25ld2ldLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICB0aGlzLm1vdmVDaXJjbGUodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLCB0aGlzLkNlbGxzW2pdW2ldLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLmNlbGxFeGlzdCA9IHRydWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2VsbEV4aXN0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlQ2lyY2xlTW92ZShpLCBqLCBuZXdpLCBuZXdqKSB7XHJcbiAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0uQ2VsbElzTm90TnVsbCgpLCB0aGlzLkNlbGxzW25ld2pdW25ld2ldICE9IG51bGwpKVxyXG4gICAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0udHlwZUNlbGwgPT0gMCwgdGhpcy5DZWxsc1tuZXdqXVtuZXdpXS50eXBlQ2VsbCA9PSAwKSlcclxuICAgICAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZSA9PSBudWxsLCB0aGlzLkNlbGxzW25ld2pdW25ld2ldLl9jaXJjbGUgIT0gbnVsbCkpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZUNpcmNsZShjaXJjbGUsIHRvTW92ZSkge1xyXG4gICAgdmFyIF9jaXJjbGUgPSBjaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICBfY2lyY2xlLmluTW92ZSA9IHRydWU7XHJcbiAgICBjYy50d2VlbihjaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMSB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBwb3NpdGlvbjogdG9Nb3ZlIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbW92ZUNpcmNsZUVuZCcsIHRydWUpKTtcclxuICAgICAgICBfY2lyY2xlLmluTW92ZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0bXBDb3VudENpcmNsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgLy90b2RvIFxyXG4gIHByaXZhdGUgZmllbGRPbkZpbGxlZFdpdGhDaXJjbGVzKCkge1xyXG4gICAgdmFyIGFsbGNpcmNsZW5vd2luZmllbGQgPSAwO1xyXG4gICAgdmFyIGFsbGNpcmNsZW5vd2luZmllbGRhbmRtb3ZlID0gMDtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxsc1swXS5sZW5ndGg7IGorKykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbal1baV0uY2lyY2xlSXNOb3ROdWxsKCkpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLmluTW92ZSkgYWxsY2lyY2xlbm93aW5maWVsZGFuZG1vdmUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2MubG9nKGFsbGNpcmNsZW5vd2luZmllbGQpO1xyXG4gICAgY2MubG9nKGFsbGNpcmNsZW5vd2luZmllbGRhbmRtb3ZlKTtcclxuICAgIGlmIChhbGxjaXJjbGVub3dpbmZpZWxkYW5kbW92ZSA9PSBhbGxjaXJjbGVub3dpbmZpZWxkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvcml6b250OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ29EZXN0cm95VGhyZWVJbkFyb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBJbkFyb3coKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ29EZXN0cm95VGhyZWVJbkFyb3cgPSB0cnVlO1xyXG4gICAgICAgIGlmIChqID49IDIpIHtcclxuICAgICAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaG9yaXpvbnQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5JbkFyb3dUbXAoaSwgaiwgaSwgaiAtIDEsIGksIGogLSAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIHRoaXMuaG9yaXpvbnQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5JbkFyb3dUbXAoaSwgaiwgaSArIDEsIGosIGkgKyAyLCBqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIEluQXJvd1RtcChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvKSB7XHJcblxyXG4gICAgaWYgKHRoaXMuQ2VsbHNbal1baV0gIT0gbnVsbCAmJiB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdICE9IG51bGwgJiYgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXSAhPSBudWxsKSB7XHJcbiAgICAgIHZhciB0bXBCb29sMSA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbak9uZV1baU9uZV0udHlwZUNlbGwgPT0gMCk7XHJcbiAgICAgIHZhciB0bXBCb29sMiA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0bXBCb29sMSwgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXS50eXBlQ2VsbCA9PSAwKTtcclxuICAgICAgaWYgKCF0bXBCb29sMikgcmV0dXJuO1xyXG4gICAgICB0bXBCb29sMSA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpLCB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgICAgdG1wQm9vbDIgPSBDaGVja2VyQm9vbGVhbi5jaGVja1R3b0Jvb2xlYW4odG1wQm9vbDEsIHRoaXMuQ2VsbHNbalR3b11baVR3b10uY2lyY2xlSXNOb3ROdWxsKCkpXHJcbiAgICAgIGlmICghdG1wQm9vbDIpIHJldHVybjtcclxuICAgICAgdmFyIHRtcEJvb2wzID0gQ2hlY2tlckJvb2xlYW4uRXF1YWxzVHJoZWVPYmoodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcixcclxuICAgICAgICB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbalR3b11baVR3b10uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3IpO1xyXG4gICAgICBpZiAoIXRtcEJvb2wzKSByZXR1cm47XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDQpIHtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5yYWluYm93U291bmQpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVSYWluYm93QmFsbChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvLCBqVHdvLCBpVHdvICsgMSwgalR3bywgaVR3byArIDIsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoIC0gMyAmJiB0aGlzLmdvRGVzdHJveVRocmVlSW5Bcm93KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suR2VtU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndvYVNvdW5kKTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlTGlnaHRuaW5nKGksIGosIGlPbmUsIGpPbmUsIGlUd28sIGpUd28sIGpUd28sIGlUd28gKyAxLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaG9yaXpvbnQpIHtcclxuICAgICAgICBpZiAoaiA+PSA0KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sucmFpbmJvd1NvdW5kKTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlUmFpbmJvd0JhbGwoaSwgaiwgaU9uZSwgak9uZSwgaVR3bywgalR3bywgalR3byAtIDEsIGlUd28sIGpUd28gLSAyLCBpVHdvLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPj0gMyAmJiB0aGlzLmdvRGVzdHJveVRocmVlSW5Bcm93KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suR2VtU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVMaWdodG5pbmcoaSwgaiwgaU9uZSwgak9uZSwgaVR3bywgalR3bywgalR3byAtIDEsIGlUd28sIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdykge1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5HZW1Tb3VuZCk7XHJcbiAgICAgICAgdGhpcy5jaGVjazNDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSwgdGhpcy5DZWxsc1tqT25lXVtpT25lXSwgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXSk7XHJcbiAgICAgICAgdGhpcy5ldmVudERlc3RveUFyb3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVSYWluYm93QmFsbChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvLCBpVGhyZWUsIGpUaHJlZSwgaUZvdXIsIGpGb3VyLCB0aXBlKSB7XHJcbiAgICBpZiAodGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0gPT0gbnVsbCB8fCB0aGlzLkNlbGxzW2lGb3VyXVtqRm91cl0gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgdmFyIGJvb2wxID0gQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgIHZhciBib29sMiA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2lGb3VyXVtqRm91cl0udHlwZUNlbGwgPT0gMCwgdGhpcy5DZWxsc1tpRm91cl1bakZvdXJdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgIGlmIChDaGVja2VyQm9vbGVhbi5jaGVja1R3b0Jvb2xlYW4oYm9vbDEsIGJvb2wyKSkge1xyXG4gICAgICB2YXIgYm9vbDMgPSBDaGVja2VyQm9vbGVhbi5FcXVhbHNUcmhlZU9iaih0aGlzLkNlbGxzW2pUd29dW2lUd29dLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaUZvdXJdW2pGb3VyXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcik7XHJcbiAgICAgIGlmIChib29sMykge1xyXG4gICAgICAgIGNjLmxvZyhcIlJhaW5ib3dDcmVhdGVcIik7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndvYVNvdW5kMilcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuc2V0VGlwZSh0aXBlKTtcclxuICAgICAgICBjYy5sb2codGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGUpO1xyXG4gICAgICAgIHRoaXMuY2hlY2szQ2lyY2xlKHRoaXMuQ2VsbHNbak9uZV1baU9uZV0sIHRoaXMuQ2VsbHNbalR3b11baVR3b10sIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdKTtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KHRoaXMuQ2VsbHNbaUZvdXJdW2pGb3VyXSk7XHJcbiAgICAgICAgdGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTGlnaHRuaW5nKGksIGosIGlPbmUsIGpPbmUsIGlUd28sIGpUd28sIGlUaHJlZSwgalRocmVlLCB0aXBlKSB7XHJcbiAgICBpZiAodGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS50eXBlQ2VsbCA9PSAwLCB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS5jaXJjbGVJc05vdE51bGwoKSkpXHJcbiAgICAgIGlmIChDaGVja2VyQm9vbGVhbi5FcXVhbHNUd29PYmoodGhpcy5DZWxsc1tqVHdvXVtpVHdvXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcixcclxuICAgICAgICB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBsaWdodG5pbmdcIik7XHJcbiAgICAgICAgdmFyIGNpcmNsZSA9IHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0uX2NpcmNsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBjaXJjbGUuc2V0VGlwZSh0aXBlKTtcclxuICAgICAgICB0aGlzLmNoZWNrM0NpcmNsZSh0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLCB0aGlzLkNlbGxzW2pUd29dW2lUd29dLCB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXSk7XHJcbiAgICAgICAgdGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveVJhaW5ib3dCYWxsKENlbGwsIGNpcmNsZSkge1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpKSB2YXIgY3VycmVudENpcmNsZSA9IHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgICAgICBlbHNlIHJldHVybjtcclxuICAgICAgICBpZiAoQ2VsbCAhPSB0aGlzLkNlbGxzW2pdW2ldICYmXHJcbiAgICAgICAgICBjaXJjbGUuQ2lyY2xlVHlwZUNvbG9yID09PSBjdXJyZW50Q2lyY2xlLkNpcmNsZVR5cGVDb2xvcikge1xyXG4gICAgICAgICAgaWYgKGNpcmNsZS5DaXJjbGVUeXBlID09PSBjdXJyZW50Q2lyY2xlLkNpcmNsZVR5cGUpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3kodGhpcy5DZWxsc1tqXVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveUxpZ2h0bmluZ1ZlcnRpY2FsKENlbGwsIGNpcmNsZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJib29tIGxpZ2h0bmluZyB2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICB2YXIgaiA9IENlbGwuamNvbHVtbjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoQ2VsbCAhPSB0aGlzLkNlbGxzW2pdW2ldIHx8IHRoaXMuQ2VsbHNbal1baV0uQ2VsbElzTm90TnVsbCgpKSByZXR1cm47XHJcbiAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpKSB2YXIgY3VycmVudENpcmNsZSA9IHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgIGlmIChjaXJjbGUuQ2lyY2xlVHlwZSA9PT0gY3VycmVudENpcmNsZS5DaXJjbGVUeXBlKSB0aGlzLmFuaW1hdGVEZXN0cm95Q2lyY2xlKHRoaXMuQ2VsbHNbal1baV0pO1xyXG4gICAgICBlbHNlIHRoaXMuc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3kodGhpcy5DZWxsc1tqXVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lMaWdodG5pbmdIb3Jpem9udChDZWxsLCBjaXJjbGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9vbSBsaWdodG5pbmcgaG9yaXpvbnRcIik7XHJcblxyXG4gICAgdmFyIGkgPSBDZWxsLmlyb3c7XHJcbiAgICB2YXIgdGhpc0NpcmNsZSA9IGNpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxscy5sZW5ndGg7IGorKykge1xyXG4gICAgICBpZiAoQ2VsbCAhPSB0aGlzLkNlbGxzW2pdW2ldIHx8IHRoaXMuQ2VsbHNbal1baV0gIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS5jaXJjbGVJc05vdE51bGwoKSkgdmFyIGN1cnJlbnRDaXJjbGUgPSB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICAgIGlmIChjdXJyZW50Q2lyY2xlID09IG51bGwpIHJldHVybjtcclxuICAgICAgaWYgKGNpcmNsZS5DaXJjbGVUeXBlID09PSBjdXJyZW50Q2lyY2xlLkNpcmNsZVR5cGUpIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSk7XHJcbiAgICAgIGVsc2UgdGhpcy5zdGFydENoZWNrQ2lyY2xlRm9yRGVzdHJveSh0aGlzLkNlbGxzW2pdW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveWxpZ2h0bmluZ1ZlcnRpY2FsQW5kbGlnaHRuaW5nSG9yaXpvbnQoQ2VsbCwgY2lyY2xlKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3lMaWdodG5pbmdWZXJ0aWNhbChDZWxsLCBjaXJjbGUpO1xyXG4gICAgdGhpcy5kZXN0cm95TGlnaHRuaW5nSG9yaXpvbnQoQ2VsbCwgY2lyY2xlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2szQ2lyY2xlKENlbGwxLCBDZWxsMiwgQ2VsbDMpIHtcclxuICAgIHRoaXMuc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3koQ2VsbDEpO1xyXG4gICAgdGhpcy5zdGFydENoZWNrQ2lyY2xlRm9yRGVzdHJveShDZWxsMik7XHJcbiAgICB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KENlbGwzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3koQ2VsbCkge1xyXG4gICAgdGhpcy5zdGFydFR5cGVEZXN0cm9lcihDZWxsKTtcclxuICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUoQ2VsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0VHlwZURlc3Ryb2VyKENlbGwpIHtcclxuICAgIGlmIChDZWxsLmNpcmNsZUlzTm90TnVsbCgpKSB7XHJcbiAgICAgIHZhciBjaXJjbGUgPSBDZWxsLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICAgIHN3aXRjaCAoY2lyY2xlLkNpcmNsZVR5cGUpIHtcclxuICAgICAgICBjYXNlIHRpcGVDaXJjbGUucmFpbmJvd0JhbGw6IHtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveVJhaW5ib3dCYWxsKENlbGwsIGNpcmNsZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aXBlQ2lyY2xlLmxpZ2h0bmluZ1ZlcnRpY2FsOiB7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lMaWdodG5pbmdWZXJ0aWNhbChDZWxsLCBjaXJjbGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGlwZUNpcmNsZS5saWdodG5pbmdIb3Jpem9udDoge1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95TGlnaHRuaW5nSG9yaXpvbnQoQ2VsbCwgY2lyY2xlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRpcGVDaXJjbGUubm9ybWFsOiB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGVEZXN0cm95Q2lyY2xlKENlbGwpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lFdmVyeUNpcmNsZXMoKSB7XHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQ2VsbHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlRGVzdHJveUNpcmNsZSh0aGlzLkNlbGxzW2pdW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ2Rlc3Ryb3lDaXJjbGVzJywgdHJ1ZSkpO1xyXG4gICAgfSwgdGhpcy5pdGVyICsgMC4xKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCduZWVkQ2hlY2tGaWVsZCcsIHRydWUpKTtcclxuICAgIH0sICh0aGlzLml0ZXIgKyAwLjIpICogNCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95RXhpc3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZXZlbnREZXN0b3lBcm93KCkge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldEJsb2NrVG91Y2gnLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnZGVzdHJveUNpcmNsZXMnLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMuZGVzdHJveUV4aXN0ZWQgPSB0cnVlO1xyXG4gICAgfSwgdGhpcy5pdGVyICsgdGhpcy5pdGVyKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvblN0YXJ0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlRGVzdHJveUNpcmNsZShDZWxsKSB7XHJcbiAgICBpZiAoQ2VsbCA9PSBudWxsKSByZXR1cm47XHJcbiAgICBDZWxsLmJsaW5rLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJCbGlua19BbmltXCIpO1xyXG4gICAgaWYgKENvbnN0YW50cy5pc0NsaWNrRmlyc3RUaW1lKSB7XHJcbiAgICAgIENvbnN0YW50cy5jb3VudFNjb3JlICs9IDE7XHJcbiAgICB9XHJcbiAgICBjYy50d2VlbihDZWxsLl9jaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMCB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwge30pXHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChDZWxsLl9jaXJjbGUgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY291bnRDaXJjbGUtLTtcclxuICAgICAgICB0aGlzLmdldFR5cGVEZXN0cm95Q2lyY2xlKENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdzZXRQb2ludCcsIHRydWUpKTtcclxuICAgICAgICBDZWxsLl9jaXJjbGUuZGVzdHJveSgpO1xyXG4gICAgICAgIENlbGwuX2NpcmNsZSA9IG51bGw7XHJcblxyXG4gICAgICB9KS5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBnZXRUeXBlRGVzdHJveUNpcmNsZShjaXJjbGUpIHtcclxuICAgIHRoaXMuZGVzdHJveVRpcGVDb2xvcnNbY2lyY2xlLkNpcmNsZVR5cGVDb2xvcl0rKztcclxuICAgIC8vIGNjLmxvZyh0aGlzLmRlc3Ryb3lUaXBlQ29sb3JzW2NpcmNsZS5DaXJjbGVUeXBlQ29sb3JdKTtcclxuICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0RGVzdHJveUNpcmNsZXNUeXBlXycsIHRydWUpKTtcclxuICB9XHJcblxyXG59Il19
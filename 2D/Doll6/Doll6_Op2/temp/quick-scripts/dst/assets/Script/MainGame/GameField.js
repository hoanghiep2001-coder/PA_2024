
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
        // console.log("fill board");
        // Constants.isCanTouch = true;
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
                if (this.Cells[j][i].typeCell == 0)
                    this.createCircle(this.Cells[j][i]);
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
        if (!Cell.circleIsNotNull() && Cell.typeCell == 0) {
            Cell._circle = cc.instantiate(this.Circle);
            Cell._circle.setParent(this.node);
            Cell._circle.setPosition(Cell.node.position);
            Cell._circle.setContentSize(this.lenghtCell - 15, this.widthCell - 15);
            this.countCircle++;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcR2FtZUZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMsK0JBQThCO0FBQzlCLCtDQUFnRDtBQUNoRCw2Q0FBMkM7QUFDM0MsNkNBQWdEO0FBQ2hELCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQscURBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBeXJCQztRQXRyQlMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdiLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxpQ0FBMkIsR0FBVyxFQUFFLENBQUM7UUFFekMsVUFBSSxHQUFXLEdBQUcsQ0FBQztRQUVuQixtQkFBYSxHQUFXLENBQUMsR0FBRyxDQUFDO1FBRTdCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRzVCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUV4QyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUVyQixXQUFLLEdBQWE7WUFDeEIsQ0FBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMsQUFBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMsQUFBQyxFQUFFO1lBQ2YsQ0FBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMs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USxDQUFDLHNCQUFZLENBQUM7bURBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsZ0NBQWMsQ0FBQztxREFDYTtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBR3JCO1FBREMsUUFBUTt5REFDa0M7SUFFM0M7UUFEQyxRQUFRO2tFQUN3QztJQUVqRDtRQURDLFFBQVE7MkNBQ2tCO0lBRTNCO1FBREMsUUFBUTtvREFDNEI7SUFFckM7UUFEQyxRQUFRO29EQUMyQjtJQUdwQztRQURDLFFBQVE7aURBQ3VCO0lBRWhDO1FBREMsUUFBUTtnREFDc0I7SUE1QnBCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0F5ckJyQjtJQUFELGdCQUFDO0NBenJCRCxBQXlyQkMsQ0F6ckI4QixFQUFFLENBQUMsU0FBUyxHQXlyQjFDO0FBenJCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmNsZSB9IGZyb20gXCIuL0NpcmNsZVwiO1xyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSBcIi4vQ2VsbFwiO1xyXG5pbXBvcnQgeyBDaGVja2VyQm9vbGVhbiB9IGZyb20gXCIuL0NsYXNzSGVscGVyc1wiO1xyXG5pbXBvcnQgeyB0aXBlQ2lyY2xlIH0gZnJvbSBcIi4vQ2lyY2xlRW51bXNcIjtcclxuaW1wb3J0IHsgdHlwZUNvbG9yQ2lyY2xlIH0gZnJvbSBcIi4vQ2lyY2xlRW51bXNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lc0NvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2FtZUZpZWxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICBwcml2YXRlIENpcmNsZTogY2MuUHJlZmFiID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIHByaXZhdGUgQ2VsbDogY2MuUHJlZmFiID0gbnVsbDtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgSGludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIHByaXZhdGUgbmVlZFJhbmRvbVZvaWRDZWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBAcHJvcGVydHlcclxuICBwcml2YXRlIENoYW5nZUZvckNyZWF0ZUFuQWN0aXZlQ2VsbDogbnVtYmVyID0gMjU7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSBpdGVyOiBudW1iZXIgPSAwLjE7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSBTdGFydENlbGxQb3NYOiBudW1iZXIgPSAtMTUwO1xyXG4gIEBwcm9wZXJ0eVxyXG4gIHByaXZhdGUgU3RhcnRDZWxsUG9zWTogbnVtYmVyID0gMjUwO1xyXG5cclxuICBAcHJvcGVydHlcclxuICBwcml2YXRlIGxlbmdodENlbGw6IG51bWJlciA9IDYyO1xyXG4gIEBwcm9wZXJ0eVxyXG4gIHByaXZhdGUgd2lkdGhDZWxsOiBudW1iZXIgPSA2MjtcclxuXHJcbiAgcHJpdmF0ZSBjb3VudENpcmNsZTogbnVtYmVyID0gMDtcclxuICBjb3VudFByb2dyZXNzU3RlcDogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c0NvdW50Q2lyY2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICBidXN0ZXJDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIENlbGxzOiBDZWxsW11bXSA9IFtcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICAgIFssICwgLCAsICwgLCAsXSxcclxuICBdO1xyXG5cclxuICBkZXN0cm95VGlwZUNvbG9yczogbnVtYmVyW107XHJcblxyXG4gIHByaXZhdGUgY3VycmVudElfY2VsbF9jbGljazogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGN1cnJlbnRKX2NlbGxfY2xpY2s6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSB0aW1lRm9yQ2hlY2tGaWxkOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIHByZXdDZWxsOiBDZWxsO1xyXG4gIHByaXZhdGUgY3VycmVudENlbGw6IENlbGw7XHJcbiAgLy90b2RvIFxyXG4gIHByaXZhdGUgdG1wUHJld0NlbGw6IENlbGw7XHJcbiAgcHJpdmF0ZSBvbmVDaGVja0ZpZWxkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKCd3YXNDbGlja09uQ2VsbCcsIHRoaXMud29ya1dpdGhDbGlja2VkQ2VsbCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oJ3dhc1R3b0NsaWNrT25DZWxsJywgdGhpcy53b3JrV2l0aFR3b0NsaWNrZWRDZWxsLCB0aGlzKTtcclxuICAgIC8vIHRoaXMudGltZUZvckNoZWNrRmlsZCA9IHRoaXMuQ2VsbHMubGVuZ3RoICogdGhpcy5pdGVyICsgMC4xO1xyXG4gICAgdGhpcy50aW1lRm9yQ2hlY2tGaWxkID0gdGhpcy5DZWxscy5sZW5ndGggKiB0aGlzLml0ZXIgKyAwLjE7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQ2VsbHMoKTtcclxuICAgIC8vIERISFxyXG4gICAgLy8gdGhpcy5zZXRUeXBlQ2VsbHNPbklhbmRKKDQsIDAsIHRoaXMuQ2VsbHMubGVuZ3RoLCA0LCAxKTtcclxuICAgIHRoaXMuQ3JlYXRlQ2lyY2xlcygpO1xyXG4gIH1cclxuXHJcbiAgb25FbmFibGUoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUNlbGxzKCk7XHJcbiAgICAvLyBESEhcclxuICAgIC8vIHRoaXMuc2V0VHlwZUNlbGxzT25JYW5kSig0LCAwLCB0aGlzLkNlbGxzLmxlbmd0aCwgNCwgMSk7XHJcbiAgICB0aGlzLkNyZWF0ZUNpcmNsZXMoKTtcclxuICAgIHRoaXMuZGVzdHJveVRpcGVDb2xvcnMgPSBuZXcgQXJyYXkoT2JqZWN0LmtleXModHlwZUNvbG9yQ2lyY2xlKS5sZW5ndGgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRlc3Ryb3lUaXBlQ29sb3JzLmxlbmd0aDsgaSsrKSB0aGlzLmRlc3Ryb3lUaXBlQ29sb3JzW2ldID0gMDtcclxuICB9XHJcblxyXG4gIG9uRGlzYWJsZSgpIHtcclxuICAgIHRoaXMuRGVzdHJveUNpcmNsZXMoKTtcclxuICB9XHJcblxyXG4gIHdvcmtXaXRoQ2xpY2tlZENlbGwoKSB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmNvdW50U2NvcmUgPj0gMTApIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50Q2VsbCA9IHRoaXMuZ2V0Q2xpY2tDZWxsKCk7XHJcbiAgICB0aGlzLkhpbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNDbGlja0ZpcnN0VGltZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Q2VsbCA9PT0gdGhpcy5wcmV3Q2VsbCkgdGhpcy5wcmV3Q2VsbCA9IG51bGw7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Q2VsbCAhPSBudWxsKSB7XHJcbiAgICAgIGlmICghdGhpcy5idXN0ZXIoKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0UHJld0NlbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5wcmV3Q2VsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLnRtcFByZXdDZWxsID0gdGhpcy5wcmV3Q2VsbDtcclxuICAgICAgICAgIHRoaXMuY2hlY2tOZWlnaGJvcmluZ0NlbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV3Q2VsbCA9IHRoaXMuY3VycmVudENlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICB3b3JrV2l0aFR3b0NsaWNrZWRDZWxsKCkge1xyXG4gICAgY2MubG9nKFwiY2xlYXIgY2VsbHNcIilcclxuICAgIC8vIHRoaXMucHJld0NlbGw9IG51bGw7XHJcbiAgICAvL3RoaXMuY3VycmVudENlbGw9bnVsbDtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGNoZWNrTmVpZ2hib3JpbmdDZWxsKCkge1xyXG4gICAgaWYgKHRoaXMucHJld0NlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3IgIT09IHRoaXMuY3VycmVudENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3IpXHJcbiAgICAgIGlmICh0aGlzLnByZXdDZWxsICE9PSB0aGlzLmN1cnJlbnRDZWxsXHJcbiAgICAgICAgJiYgdGhpcy5wcmV3Q2VsbC5fY2lyY2xlICE9IG51bGxcclxuICAgICAgICAmJiB0aGlzLmN1cnJlbnRJX2NlbGxfY2xpY2sgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByZXdDZWxsLmlyb3cgKyAxID09IHRoaXMuY3VycmVudENlbGwuaXJvd1xyXG4gICAgICAgICAgJiYgdGhpcy5wcmV3Q2VsbC5qY29sdW1uID09IHRoaXMuY3VycmVudENlbGwuamNvbHVtbiB8fFxyXG4gICAgICAgICAgdGhpcy5wcmV3Q2VsbC5pcm93IC0gMSA9PSB0aGlzLmN1cnJlbnRDZWxsLmlyb3dcclxuICAgICAgICAgICYmIHRoaXMucHJld0NlbGwuamNvbHVtbiA9PSB0aGlzLmN1cnJlbnRDZWxsLmpjb2x1bW4gfHxcclxuICAgICAgICAgIHRoaXMucHJld0NlbGwuaXJvdyA9PSB0aGlzLmN1cnJlbnRDZWxsLmlyb3dcclxuICAgICAgICAgICYmIHRoaXMucHJld0NlbGwuamNvbHVtbiArIDEgPT0gdGhpcy5jdXJyZW50Q2VsbC5qY29sdW1uIHx8XHJcbiAgICAgICAgICB0aGlzLnByZXdDZWxsLmlyb3cgPT0gdGhpcy5jdXJyZW50Q2VsbC5pcm93XHJcbiAgICAgICAgICAmJiB0aGlzLnByZXdDZWxsLmpjb2x1bW4gLSAxID09IHRoaXMuY3VycmVudENlbGwuamNvbHVtbikge1xyXG4gICAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdzZXRCbG9ja1RvdWNoJywgdHJ1ZSkpO1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc3dhcENpcmNsZXModGhpcy5wcmV3Q2VsbCwgdGhpcy5jdXJyZW50Q2VsbCk7XHJcbiAgICAgICAgICB0aGlzLm5lZWRDaGVja0ZpZWxkQWZ0ZXJTd2FwQ2lyY2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBuZWVkQ2hlY2tGaWVsZEFmdGVyU3dhcENpcmNsZSgpIHtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCduZWVkQ2hlY2tGaWVsZCcsIHRydWUpKTtcclxuICAgICAgdGhpcy5zZXRDZWxsTm9DbGljayh0aGlzLnByZXdDZWxsKTtcclxuICAgICAgdGhpcy5zZXRDZWxsTm9DbGljayh0aGlzLmN1cnJlbnRDZWxsKTtcclxuICAgICAgdGhpcy5vbmVDaGVja0ZpZWxkID0gdHJ1ZTtcclxuICAgIH0sIHRoaXMuaXRlciArIHRoaXMuaXRlciArIHRoaXMuaXRlcik7XHJcbiAgICBcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmRlc3Ryb3lFeGlzdGVkKSB7XHJcbiAgICAgICAgY2MubG9nKFwiY29tZUJhY2tDaXJjbGVcIilcclxuICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldFVuQmxvY2tUb3VjaCcsIHRydWUpKTtcclxuICAgICAgICB0aGlzLnN3YXBDaXJjbGVzKHRoaXMuY3VycmVudENlbGwsIHRoaXMudG1wUHJld0NlbGwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2VsbE5vQ2xpY2sodGhpcy50bXBQcmV3Q2VsbCk7XHJcbiAgICAgICAgdGhpcy5zZXRDZWxsTm9DbGljayh0aGlzLmN1cnJlbnRDZWxsKTtcclxuICAgICAgICB0aGlzLnByZXdDZWxsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRtcFByZXdDZWxsID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYy5sb2coXCJjb3VudFByb2dyZXNzU3RlcFwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0VW5CbG9ja1RvdWNoJywgdHJ1ZSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnY291bnRQcm9ncmVzc1N0ZXAnLCB0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5wcmV3Q2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50bXBQcmV3Q2VsbCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMudGltZUZvckNoZWNrRmlsZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzd2FwQ2lyY2xlcyhjZWxsMSwgY2VsbDIpIHtcclxuICAgIGNjLmxvZyhcInN3YXBDaXJsZVwiKVxyXG4gICAgdGhpcy5hbmltYXRlTW92ZUNpcmNsZShjZWxsMSwgY2VsbDIpO1xyXG4gICAgdGhpcy5hbmltYXRlTW92ZUNpcmNsZShjZWxsMiwgY2VsbDEpO1xyXG4gICAgdmFyIHRtcENpcmNsZSA9IGNlbGwyLl9jaXJjbGU7XHJcbiAgICBjZWxsMi5fY2lyY2xlID0gY2VsbDEuX2NpcmNsZTtcclxuICAgIGNlbGwxLl9jaXJjbGUgPSB0bXBDaXJjbGU7XHJcbiAgICB0aGlzLnNldENlbGxOb0NsaWNrKGNlbGwxKTtcclxuICAgIHRoaXMuc2V0Q2VsbE5vQ2xpY2soY2VsbDIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2V0Q2VsbE5vQ2xpY2soY2VsbCkge1xyXG4gICAgY2VsbC5jb3VudENsaWNrID0gMDtcclxuICAgIGNlbGwud2FzU2VsZWN0Q2lyY2xlID0gZmFsc2U7XHJcbiAgICBjZWxsLndhc0NsaWNrID0gZmFsc2U7XHJcbiAgICBjZWxsLnNldE5vcm1hbFNpemUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFuaW1hdGVNb3ZlQ2lyY2xlKENlbGwxLCBDZWxsMikge1xyXG4gICAgaWYgKENlbGwxID09IG51bGwgfHwgQ2VsbDIgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBjaGVja2luZyAke0NlbGwxLl9jaXJjbGV9YCk7XHJcbiAgICBcclxuICAgIGNjLnR3ZWVuKENlbGwxLl9jaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMSB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBwb3NpdGlvbjogQ2VsbDIubm9kZS5wb3NpdGlvbiB9KVxyXG4gICAgICApXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICBjYy5sb2coXCJmaW5pc2ggbW92ZVwiKTtcclxuICAgICAgfSkuc3RhcnQoKVxyXG4gIH1cclxuXHJcblxyXG4gIHNldEJ1c3RlcigpIHtcclxuICAgIC8vIGNjLmxvZyhcIkJ1c3RlciBTZXRcIik7XHJcbiAgICB0aGlzLmJ1c3RlckNsaWNrID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGJ1c3RlcigpIHtcclxuICAgIGlmICh0aGlzLmJ1c3RlckNsaWNrKVxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Q2VsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTZWxlY3RQcmV3Q2VsbChjZWxsKTtcclxuICAgICAgICB0aGlzLnN0YXJ0VHlwZURlc3Ryb2VyKHRoaXMuY3VycmVudENlbGwpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5jdXJyZW50Q2VsbCk7XHJcbiAgICAgICAgdGhpcy5zZXRDZWxsTm9DbGljayh0aGlzLmN1cnJlbnRDZWxsKTtcclxuICAgICAgICB0aGlzLmJ1c3RlckNsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnY291bnRQcm9ncmVzc1N0ZXAnLCB0cnVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBzZXRTZWxlY3RQcmV3Q2VsbCgpIHtcclxuICAgIGlmICh0aGlzLnByZXdDZWxsICE9IG51bGwpXHJcbiAgICAgIGlmICh0aGlzLnByZXdDZWxsICE9PSB0aGlzLmN1cnJlbnRDZWxsICYmIHRoaXMucHJld0NlbGwud2FzU2VsZWN0Q2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5wcmV3Q2VsbC5zZWxlY3RDaXJjbGUoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHNldFNlbGVjdEN1cnJlbnRDZWxsKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudENlbGwgIT0gbnVsbClcclxuICAgICAgaWYgKHRoaXMuY3VycmVudENlbGwud2FzU2VsZWN0Q2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbC5zZWxlY3RDaXJjbGUoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Q2xpY2tDZWxsKCkge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsaWNrU291bmQpO1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKHRoaXMuQ2VsbHNbal1baV0ud2FzQ2xpY2spIHtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbal1baV0ud2FzQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgIC8vIGNjLmxvZyhcImNsaWNrZWRcIilcclxuICAgICAgICAgIHJldHVybiB0aGlzLkNlbGxzW2pdW2ldO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIGNsaWNrRGVzdHJveUNpcmNsZUluQ2VsbCgpIHtcclxuICAgIHRoaXMuY291bnRDaXJjbGUtLTtcclxuICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0UG9pbnQnLCB0cnVlKSk7XHJcbiAgICB0aGlzLmFsbENpcmNsZXNNb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVPbmVMaW5lQ2lyY2xlcygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUNpcmNsZSh0aGlzLkNlbGxzWzBdW2ldKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsQ2lyY2xlc01vdmUoKTtcclxuICAgIGlmICh0aGlzLm9uZUNoZWNrRmllbGQpIHtcclxuICAgICAgdGhpcy5vbmVDaGVja0ZpZWxkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubmVlZENoZWNrRmllbGQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmVlZENoZWNrRmllbGQoKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbmVlZENoZWNrRmllbGQnLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMub25lQ2hlY2tGaWVsZCA9IHRydWU7XHJcbiAgICB9LCB0aGlzLnRpbWVGb3JDaGVja0ZpbGQpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMaW5lKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJmaWxsIGJvYXJkXCIpO1xyXG5cclxuICAgIC8vIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVzdHJveUV4aXN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuSW5Bcm93KCk7XHJcbiAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldFVuQmxvY2tUb3VjaCcsIHRydWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ2VsbHMoKSB7XHJcblxyXG4gICAgdmFyIHhQb3M6IG51bWJlciA9IDA7XHJcbiAgICB2YXIgeVBvczogbnVtYmVyID0gMDtcclxuICAgIHZhciBfY2VsbDtcclxuXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQ2VsbHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIF9jZWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5DZWxsKTtcclxuICAgICAgICBfY2VsbC5zZXRDb250ZW50U2l6ZSh0aGlzLmxlbmdodENlbGwsIHRoaXMud2lkdGhDZWxsKTtcclxuICAgICAgICBfY2VsbC5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICBfY2VsbC5zZXRQb3NpdGlvbih0aGlzLlN0YXJ0Q2VsbFBvc1ggKyB4UG9zLCB0aGlzLlN0YXJ0Q2VsbFBvc1kgKyB5UG9zKTtcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldID0gX2NlbGwuZ2V0Q29tcG9uZW50KENlbGwpO1xyXG4gICAgICAgIGlmIChpICUgMiAhPSAwICYmIGogJSAyID09IDApIHsgdGhpcy5DZWxsc1tqXVtpXS5zZXRHcmF5Q29sb3IoKTsgfVxyXG4gICAgICAgIGlmIChpICUgMiA9PSAwICYmIGogJSAyICE9IDApIHsgdGhpcy5DZWxsc1tqXVtpXS5zZXRHcmF5Q29sb3IoKTsgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLm5lZWRSYW5kb21Wb2lkQ2VsbCkgdGhpcy5jcmVhdGVBbnlUeXBlQ2VsbCh0aGlzLkNlbGxzW2pdW2ldLCAxKTtcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLmpjb2x1bW4gPSBqO1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baV0uaXJvdyA9IGk7XHJcbiAgICAgICAgeFBvcyA9IHhQb3MgKyB0aGlzLmxlbmdodENlbGw7XHJcbiAgICAgIH1cclxuICAgICAgeFBvcyA9IDA7XHJcbiAgICAgIHlQb3MgPSB5UG9zIC0gdGhpcy53aWR0aENlbGw7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVBbnlUeXBlQ2VsbChDZWxsLCB0eXBlKSB7XHJcbiAgICBpZiAoTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHRoaXMuQ2hhbmdlRm9yQ3JlYXRlQW5BY3RpdmVDZWxsKSArIDEpID09IDEpIHtcclxuICAgICAgQ2VsbC50eXBlQ2VsbCA9IHR5cGU7XHJcbiAgICAgIENlbGwuc2V0Q29sb3JJblR5cGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VHlwZUNlbGxzT25JYW5kSihpXywgal8sIGlMZW5ndGgsIGpMZWd0aCwgdHlwZSkge1xyXG4gICAgZm9yICh2YXIgaiA9IGpfOyBqIDwgakxlZ3RoOyBqKyspIHtcclxuICAgICAgZm9yICh2YXIgaSA9IGlfOyBpIDwgaUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5DZWxsc1tqXVtpXS50eXBlQ2VsbCA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5DZWxsc1tqXVtpXS5zZXRDb2xvckluVHlwZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIENyZWF0ZUNpcmNsZXMoKSB7XHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQ2VsbHMubGVuZ3RoOyBqKyspXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDApIHRoaXMuY3JlYXRlQ2lyY2xlKHRoaXMuQ2VsbHNbal1baV0pO1xyXG4gICAgICB9XHJcbiAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ25lZWRDaGVja0ZpZWxkJywgdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBEZXN0cm95Q2lyY2xlcygpIHtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxscy5sZW5ndGg7IGorKylcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQ2VsbHNbal1baV0uY2lyY2xlSXNOb3ROdWxsKCkpIHtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDaXJjbGUoQ2VsbCkge1xyXG4gICAgaWYgKCFDZWxsLmNpcmNsZUlzTm90TnVsbCgpICYmIENlbGwudHlwZUNlbGwgPT0gMCkge1xyXG4gICAgICBDZWxsLl9jaXJjbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkNpcmNsZSk7XHJcbiAgICAgIENlbGwuX2NpcmNsZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgQ2VsbC5fY2lyY2xlLnNldFBvc2l0aW9uKENlbGwubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgIENlbGwuX2NpcmNsZS5zZXRDb250ZW50U2l6ZSh0aGlzLmxlbmdodENlbGwgLSAxNSwgdGhpcy53aWR0aENlbGwgLSAxNSk7XHJcbiAgICAgIHRoaXMuY291bnRDaXJjbGUrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNlbGxFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBhbGxDaXJjbGVzTW92ZSgpIHtcclxuXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQ2VsbHMubGVuZ3RoOyBqKyspXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLkNlbGxJc05vdE51bGwoKSlcclxuICAgICAgICAgIGlmICghdGhpcy5DZWxsc1tqXVtpXS5jaXJjbGVJc05vdE51bGwoKSAmJiB0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDApIHtcclxuICAgICAgICAgICAgaWYgKGogPT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbW92ZUNpcmNsZUVuZCcsIHRydWUpKTtcclxuICAgICAgICAgICAgICB9LCB0aGlzLml0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChqID49IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSwgaiAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jZWxsRXhpc3QpIHtcclxuICAgICAgICAgICAgICBpZiAoaiA+PSAxICYmIGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDIpKSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcENpcmNsZUluQ2VsbChpLCBqLCBpIC0gMSwgaiAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbEV4aXN0KSB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSArIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5zd2FwQ2lyY2xlSW5DZWxsKGksIGosIGkgKyAxLCBqIC0gMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbEV4aXN0KSB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSAtIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGkgPT0gMCAmJiBqID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dhcENpcmNsZUluQ2VsbChpLCBqLCBpICsgMSwgaiAtIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDEgJiYgaiA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSAtIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3dhcENpcmNsZUluQ2VsbChpLCBqLCBuZXdpLCBuZXdqKSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNpcmNsZU1vdmUoaSwgaiwgbmV3aSwgbmV3aikpIHtcclxuICAgICAgdGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlID0gdGhpcy5DZWxsc1tuZXdqXVtuZXdpXS5fY2lyY2xlO1xyXG4gICAgICB0aGlzLkNlbGxzW25ld2pdW25ld2ldLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICB0aGlzLm1vdmVDaXJjbGUodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLCB0aGlzLkNlbGxzW2pdW2ldLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLmNlbGxFeGlzdCA9IHRydWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2VsbEV4aXN0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlQ2lyY2xlTW92ZShpLCBqLCBuZXdpLCBuZXdqKSB7XHJcbiAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0uQ2VsbElzTm90TnVsbCgpLCB0aGlzLkNlbGxzW25ld2pdW25ld2ldICE9IG51bGwpKVxyXG4gICAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0udHlwZUNlbGwgPT0gMCwgdGhpcy5DZWxsc1tuZXdqXVtuZXdpXS50eXBlQ2VsbCA9PSAwKSlcclxuICAgICAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZSA9PSBudWxsLCB0aGlzLkNlbGxzW25ld2pdW25ld2ldLl9jaXJjbGUgIT0gbnVsbCkpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZUNpcmNsZShjaXJjbGUsIHRvTW92ZSkge1xyXG4gICAgdmFyIF9jaXJjbGUgPSBjaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICBfY2lyY2xlLmluTW92ZSA9IHRydWU7XHJcbiAgICBjYy50d2VlbihjaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMSB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBwb3NpdGlvbjogdG9Nb3ZlIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbW92ZUNpcmNsZUVuZCcsIHRydWUpKTtcclxuICAgICAgICBfY2lyY2xlLmluTW92ZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0bXBDb3VudENpcmNsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgLy90b2RvIFxyXG4gIHByaXZhdGUgZmllbGRPbkZpbGxlZFdpdGhDaXJjbGVzKCkge1xyXG4gICAgdmFyIGFsbGNpcmNsZW5vd2luZmllbGQgPSAwO1xyXG4gICAgdmFyIGFsbGNpcmNsZW5vd2luZmllbGRhbmRtb3ZlID0gMDtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxsc1swXS5sZW5ndGg7IGorKykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbal1baV0uY2lyY2xlSXNOb3ROdWxsKCkpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLmluTW92ZSkgYWxsY2lyY2xlbm93aW5maWVsZGFuZG1vdmUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2MubG9nKGFsbGNpcmNsZW5vd2luZmllbGQpO1xyXG4gICAgY2MubG9nKGFsbGNpcmNsZW5vd2luZmllbGRhbmRtb3ZlKTtcclxuICAgIGlmIChhbGxjaXJjbGVub3dpbmZpZWxkYW5kbW92ZSA9PSBhbGxjaXJjbGVub3dpbmZpZWxkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvcml6b250OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ29EZXN0cm95VGhyZWVJbkFyb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBJbkFyb3coKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ29EZXN0cm95VGhyZWVJbkFyb3cgPSB0cnVlO1xyXG4gICAgICAgIGlmIChqID49IDIpIHtcclxuICAgICAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaG9yaXpvbnQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5JbkFyb3dUbXAoaSwgaiwgaSwgaiAtIDEsIGksIGogLSAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIHRoaXMuaG9yaXpvbnQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5JbkFyb3dUbXAoaSwgaiwgaSArIDEsIGosIGkgKyAyLCBqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIEluQXJvd1RtcChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvKSB7XHJcblxyXG4gICAgaWYgKHRoaXMuQ2VsbHNbal1baV0gIT0gbnVsbCAmJiB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdICE9IG51bGwgJiYgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXSAhPSBudWxsKSB7XHJcbiAgICAgIHZhciB0bXBCb29sMSA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbak9uZV1baU9uZV0udHlwZUNlbGwgPT0gMCk7XHJcbiAgICAgIHZhciB0bXBCb29sMiA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0bXBCb29sMSwgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXS50eXBlQ2VsbCA9PSAwKTtcclxuICAgICAgaWYgKCF0bXBCb29sMikgcmV0dXJuO1xyXG4gICAgICB0bXBCb29sMSA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpLCB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgICAgdG1wQm9vbDIgPSBDaGVja2VyQm9vbGVhbi5jaGVja1R3b0Jvb2xlYW4odG1wQm9vbDEsIHRoaXMuQ2VsbHNbalR3b11baVR3b10uY2lyY2xlSXNOb3ROdWxsKCkpXHJcbiAgICAgIGlmICghdG1wQm9vbDIpIHJldHVybjtcclxuICAgICAgdmFyIHRtcEJvb2wzID0gQ2hlY2tlckJvb2xlYW4uRXF1YWxzVHJoZWVPYmoodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcixcclxuICAgICAgICB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbalR3b11baVR3b10uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3IpO1xyXG4gICAgICBpZiAoIXRtcEJvb2wzKSByZXR1cm47XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDQpIHtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5yYWluYm93U291bmQpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVSYWluYm93QmFsbChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvLCBqVHdvLCBpVHdvICsgMSwgalR3bywgaVR3byArIDIsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoIC0gMyAmJiB0aGlzLmdvRGVzdHJveVRocmVlSW5Bcm93KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suR2VtU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndvYVNvdW5kKTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlTGlnaHRuaW5nKGksIGosIGlPbmUsIGpPbmUsIGlUd28sIGpUd28sIGpUd28sIGlUd28gKyAxLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaG9yaXpvbnQpIHtcclxuICAgICAgICBpZiAoaiA+PSA0KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sucmFpbmJvd1NvdW5kKTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlUmFpbmJvd0JhbGwoaSwgaiwgaU9uZSwgak9uZSwgaVR3bywgalR3bywgalR3byAtIDEsIGlUd28sIGpUd28gLSAyLCBpVHdvLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPj0gMyAmJiB0aGlzLmdvRGVzdHJveVRocmVlSW5Bcm93KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suR2VtU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVMaWdodG5pbmcoaSwgaiwgaU9uZSwgak9uZSwgaVR3bywgalR3bywgalR3byAtIDEsIGlUd28sIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdykge1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5HZW1Tb3VuZCk7XHJcbiAgICAgICAgdGhpcy5jaGVjazNDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSwgdGhpcy5DZWxsc1tqT25lXVtpT25lXSwgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXSk7XHJcbiAgICAgICAgdGhpcy5ldmVudERlc3RveUFyb3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVSYWluYm93QmFsbChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvLCBpVGhyZWUsIGpUaHJlZSwgaUZvdXIsIGpGb3VyLCB0aXBlKSB7XHJcbiAgICBpZiAodGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0gPT0gbnVsbCB8fCB0aGlzLkNlbGxzW2lGb3VyXVtqRm91cl0gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgdmFyIGJvb2wxID0gQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgIHZhciBib29sMiA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2lGb3VyXVtqRm91cl0udHlwZUNlbGwgPT0gMCwgdGhpcy5DZWxsc1tpRm91cl1bakZvdXJdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgIGlmIChDaGVja2VyQm9vbGVhbi5jaGVja1R3b0Jvb2xlYW4oYm9vbDEsIGJvb2wyKSkge1xyXG4gICAgICB2YXIgYm9vbDMgPSBDaGVja2VyQm9vbGVhbi5FcXVhbHNUcmhlZU9iaih0aGlzLkNlbGxzW2pUd29dW2lUd29dLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaUZvdXJdW2pGb3VyXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcik7XHJcbiAgICAgIGlmIChib29sMykge1xyXG4gICAgICAgIGNjLmxvZyhcIlJhaW5ib3dDcmVhdGVcIik7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndvYVNvdW5kMilcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuc2V0VGlwZSh0aXBlKTtcclxuICAgICAgICBjYy5sb2codGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGUpO1xyXG4gICAgICAgIHRoaXMuY2hlY2szQ2lyY2xlKHRoaXMuQ2VsbHNbak9uZV1baU9uZV0sIHRoaXMuQ2VsbHNbalR3b11baVR3b10sIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdKTtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KHRoaXMuQ2VsbHNbaUZvdXJdW2pGb3VyXSk7XHJcbiAgICAgICAgdGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTGlnaHRuaW5nKGksIGosIGlPbmUsIGpPbmUsIGlUd28sIGpUd28sIGlUaHJlZSwgalRocmVlLCB0aXBlKSB7XHJcbiAgICBpZiAodGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS50eXBlQ2VsbCA9PSAwLCB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS5jaXJjbGVJc05vdE51bGwoKSkpXHJcbiAgICAgIGlmIChDaGVja2VyQm9vbGVhbi5FcXVhbHNUd29PYmoodGhpcy5DZWxsc1tqVHdvXVtpVHdvXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcixcclxuICAgICAgICB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcikpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIGxpZ2h0bmluZ1wiKTtcclxuICAgICAgICAgIHZhciBjaXJjbGUgPSB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLl9jaXJjbGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY2lyY2xlLnNldFRpcGUodGlwZSk7XHJcbiAgICAgICAgdGhpcy5jaGVjazNDaXJjbGUodGhpcy5DZWxsc1tqT25lXVtpT25lXSwgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXSwgdGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0pO1xyXG4gICAgICAgIHRoaXMuZ29EZXN0cm95VGhyZWVJbkFyb3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmV2ZW50RGVzdG95QXJvdygpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lSYWluYm93QmFsbChDZWxsLCBjaXJjbGUpIHtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxscy5sZW5ndGg7IGorKykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS5jaXJjbGVJc05vdE51bGwoKSkgdmFyIGN1cnJlbnRDaXJjbGUgPSB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgICAgaWYgKENlbGwgIT0gdGhpcy5DZWxsc1tqXVtpXSAmJlxyXG4gICAgICAgICAgY2lyY2xlLkNpcmNsZVR5cGVDb2xvciA9PT0gY3VycmVudENpcmNsZS5DaXJjbGVUeXBlQ29sb3IpIHtcclxuICAgICAgICAgIGlmIChjaXJjbGUuQ2lyY2xlVHlwZSA9PT0gY3VycmVudENpcmNsZS5DaXJjbGVUeXBlKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVEZXN0cm95Q2lyY2xlKHRoaXMuQ2VsbHNbal1baV0pO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KHRoaXMuQ2VsbHNbal1baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lMaWdodG5pbmdWZXJ0aWNhbChDZWxsLCBjaXJjbGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9vbSBsaWdodG5pbmcgdmVydGljYWxcIik7XHJcbiAgICBcclxuICAgIHZhciBqID0gQ2VsbC5qY29sdW1uO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChDZWxsICE9IHRoaXMuQ2VsbHNbal1baV0gfHwgdGhpcy5DZWxsc1tqXVtpXS5DZWxsSXNOb3ROdWxsKCkpIHJldHVybjtcclxuICAgICAgaWYgKHRoaXMuQ2VsbHNbal1baV0uY2lyY2xlSXNOb3ROdWxsKCkpIHZhciBjdXJyZW50Q2lyY2xlID0gdGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpO1xyXG4gICAgICBlbHNlIHJldHVybjtcclxuICAgICAgaWYgKGNpcmNsZS5DaXJjbGVUeXBlID09PSBjdXJyZW50Q2lyY2xlLkNpcmNsZVR5cGUpIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSk7XHJcbiAgICAgIGVsc2UgdGhpcy5zdGFydENoZWNrQ2lyY2xlRm9yRGVzdHJveSh0aGlzLkNlbGxzW2pdW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveUxpZ2h0bmluZ0hvcml6b250KENlbGwsIGNpcmNsZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJib29tIGxpZ2h0bmluZyBob3Jpem9udFwiKTtcclxuXHJcbiAgICB2YXIgaSA9IENlbGwuaXJvdztcclxuICAgIHZhciB0aGlzQ2lyY2xlID0gY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpO1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGlmIChDZWxsICE9IHRoaXMuQ2VsbHNbal1baV0gfHwgdGhpcy5DZWxsc1tqXVtpXSAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpKSB2YXIgY3VycmVudENpcmNsZSA9IHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgICAgaWYgKGN1cnJlbnRDaXJjbGUgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBpZiAoY2lyY2xlLkNpcmNsZVR5cGUgPT09IGN1cnJlbnRDaXJjbGUuQ2lyY2xlVHlwZSkgdGhpcy5hbmltYXRlRGVzdHJveUNpcmNsZSh0aGlzLkNlbGxzW2pdW2ldKTtcclxuICAgICAgZWxzZSB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KHRoaXMuQ2VsbHNbal1baV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95bGlnaHRuaW5nVmVydGljYWxBbmRsaWdodG5pbmdIb3Jpem9udChDZWxsLCBjaXJjbGUpIHtcclxuICAgIHRoaXMuZGVzdHJveUxpZ2h0bmluZ1ZlcnRpY2FsKENlbGwsIGNpcmNsZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3lMaWdodG5pbmdIb3Jpem9udChDZWxsLCBjaXJjbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVjazNDaXJjbGUoQ2VsbDEsIENlbGwyLCBDZWxsMykge1xyXG4gICAgdGhpcy5zdGFydENoZWNrQ2lyY2xlRm9yRGVzdHJveShDZWxsMSk7XHJcbiAgICB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KENlbGwyKTtcclxuICAgIHRoaXMuc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3koQ2VsbDMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydENoZWNrQ2lyY2xlRm9yRGVzdHJveShDZWxsKSB7XHJcbiAgICB0aGlzLnN0YXJ0VHlwZURlc3Ryb2VyKENlbGwpO1xyXG4gICAgdGhpcy5hbmltYXRlRGVzdHJveUNpcmNsZShDZWxsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRUeXBlRGVzdHJvZXIoQ2VsbCkge1xyXG4gICAgaWYgKENlbGwuY2lyY2xlSXNOb3ROdWxsKCkpIHtcclxuICAgICAgdmFyIGNpcmNsZSA9IENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgICAgc3dpdGNoIChjaXJjbGUuQ2lyY2xlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgdGlwZUNpcmNsZS5yYWluYm93QmFsbDoge1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95UmFpbmJvd0JhbGwoQ2VsbCwgY2lyY2xlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRpcGVDaXJjbGUubGlnaHRuaW5nVmVydGljYWw6IHtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveUxpZ2h0bmluZ1ZlcnRpY2FsKENlbGwsIGNpcmNsZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aXBlQ2lyY2xlLmxpZ2h0bmluZ0hvcml6b250OiB7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lMaWdodG5pbmdIb3Jpem9udChDZWxsLCBjaXJjbGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGlwZUNpcmNsZS5ub3JtYWw6IHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUoQ2VsbCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveUV2ZXJ5Q2lyY2xlcygpIHtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxscy5sZW5ndGg7IGorKykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGVEZXN0cm95Q2lyY2xlKHRoaXMuQ2VsbHNbal1baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnZGVzdHJveUNpcmNsZXMnLCB0cnVlKSk7XHJcbiAgICB9LCB0aGlzLml0ZXIgKyAwLjEpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ25lZWRDaGVja0ZpZWxkJywgdHJ1ZSkpO1xyXG4gICAgfSwgKHRoaXMuaXRlciArIDAuMikgKiA0KTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lFeGlzdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBldmVudERlc3RveUFyb3coKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0QmxvY2tUb3VjaCcsIHRydWUpKTtcclxuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdkZXN0cm95Q2lyY2xlcycsIHRydWUpKTtcclxuICAgICAgdGhpcy5kZXN0cm95RXhpc3RlZCA9IHRydWU7XHJcbiAgICB9LCB0aGlzLml0ZXIgKyB0aGlzLml0ZXIpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uU3RhcnQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIGFuaW1hdGVEZXN0cm95Q2lyY2xlKENlbGwpIHtcclxuICAgIGlmIChDZWxsID09IG51bGwpIHJldHVybjtcclxuICAgIENlbGwuYmxpbmsuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkJsaW5rX0FuaW1cIik7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzQ2xpY2tGaXJzdFRpbWUpIHtcclxuICAgICAgQ29uc3RhbnRzLmNvdW50U2NvcmUgKz0gMTtcclxuICAgIH1cclxuICAgIGNjLnR3ZWVuKENlbGwuX2NpcmNsZSlcclxuICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgIGNjLnR3ZWVuKCkudG8odGhpcy5pdGVyLCB7IHNjYWxlOiAwIH0pLFxyXG4gICAgICAgIGNjLnR3ZWVuKCkudG8odGhpcy5pdGVyLCB7fSlcclxuICAgICAgKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKENlbGwuX2NpcmNsZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb3VudENpcmNsZS0tO1xyXG4gICAgICAgIHRoaXMuZ2V0VHlwZURlc3Ryb3lDaXJjbGUoQ2VsbC5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldFBvaW50JywgdHJ1ZSkpO1xyXG4gICAgICAgIENlbGwuX2NpcmNsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgQ2VsbC5fY2lyY2xlID0gbnVsbDtcclxuXHJcbiAgICAgIH0pLnN0YXJ0KClcclxuICB9XHJcblxyXG4gIGdldFR5cGVEZXN0cm95Q2lyY2xlKGNpcmNsZSkge1xyXG4gICAgdGhpcy5kZXN0cm95VGlwZUNvbG9yc1tjaXJjbGUuQ2lyY2xlVHlwZUNvbG9yXSsrO1xyXG4gICAgLy8gY2MubG9nKHRoaXMuZGVzdHJveVRpcGVDb2xvcnNbY2lyY2xlLkNpcmNsZVR5cGVDb2xvcl0pO1xyXG4gICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdzZXREZXN0cm95Q2lyY2xlc1R5cGVfJywgdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbn0iXX0=
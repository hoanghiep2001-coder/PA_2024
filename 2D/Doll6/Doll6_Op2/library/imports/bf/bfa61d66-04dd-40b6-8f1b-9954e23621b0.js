"use strict";
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
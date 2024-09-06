
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/BaseController');
require('./assets/Script/Controller/BossController');
require('./assets/Script/Controller/CoinController');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/KingController');
require('./assets/Script/Controller/LoadFoodController');
require('./assets/Script/Controller/SpawnController');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/IronSource');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Other/Army');
require('./assets/Script/Other/CTA');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');
require('./assets/Script/Plugin/Singleton');
require('./assets/neutrinoparticles/textures');
require('./neutrinoparticles-runtime/NeutrinoAssembler');
require('./neutrinoparticles-runtime/NeutrinoAssemblerJSB');
require('./neutrinoparticles-runtime/NeutrinoAssemblerWebGL');
require('./neutrinoparticles-runtime/NeutrinoComponent');
require('./neutrinoparticles-runtime/NeutrinoContext');
require('./neutrinoparticles-runtime/NeutrinoSettings');
require('./neutrinoparticles-runtime/neutrinoparticles.js/neutrinoparticles.umd');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoAssemblerJSB.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '908f2U8uBBKHLoXjGNOOkv8', 'NeutrinoAssemblerJSB');
// NeutrinoAssemblerJSB.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var renderer = cc.renderer;
//const gfx = renderer.renderEngine.gfx;
var quadIndices = [0, 1, 3, 1, 2, 3];
var numQuadVertices = 4;
var maxQuadsInDrawCall = 512;
var maxVerticesInDrawCall = numQuadVertices * maxQuadsInDrawCall;
var maxIndicesInDrawCall = quadIndices.length * maxQuadsInDrawCall;
var NeutrinoAssembler = /** @class */ (function (_super) {
    __extends(NeutrinoAssembler, _super);
    function NeutrinoAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentVertex = 0;
        _this._renderStyleIndex = null;
        _this._worldScale = new cc.Vec3();
        return _this;
    }
    NeutrinoAssembler._checkAndCreateCurrentBuffer = function () {
        var bufIndex = NeutrinoAssembler._bufferIndex;
        if (!NeutrinoAssembler._vertexBuffers[bufIndex]) {
            NeutrinoAssembler._vertexBuffers[bufIndex] = new ArrayBuffer(NeutrinoAssembler._vertexFormat._bytes *
                maxVerticesInDrawCall);
            NeutrinoAssembler._vertexFloatBuffers[bufIndex] = new Float32Array(NeutrinoAssembler._vertexBuffers[bufIndex]);
            NeutrinoAssembler._vertexUint32Buffers[bufIndex] = new Uint32Array(NeutrinoAssembler._vertexBuffers[bufIndex]);
        }
        if (!NeutrinoAssembler._indexBuffers[bufIndex]) {
            NeutrinoAssembler._indexBuffers[bufIndex] = new Uint16Array(maxIndicesInDrawCall);
        }
    };
    NeutrinoAssembler._incBuffer = function () {
        ++NeutrinoAssembler._bufferIndex;
        NeutrinoAssembler._numBufferVertices = 0;
        NeutrinoAssembler._numBufferIndices = 0;
        NeutrinoAssembler._startBufferVertex = 0;
        NeutrinoAssembler._startBufferIndex = 0;
        NeutrinoAssembler._checkAndCreateCurrentBuffer();
    };
    NeutrinoAssembler.prototype._prepareForGeometry = function (numVertices, numIndices) {
        if (NeutrinoAssembler._numBufferVertices + numVertices == maxVerticesInDrawCall) {
            var i = 0;
        }
        if (NeutrinoAssembler._numBufferVertices + numVertices > maxVerticesInDrawCall
            || NeutrinoAssembler._numBufferIndices + numIndices > maxIndicesInDrawCall) {
            this._finishDrawCall();
            NeutrinoAssembler._incBuffer();
        }
    };
    NeutrinoAssembler.prototype._commitGeometry = function (numVertices, numIndices) {
        NeutrinoAssembler._numBufferVertices += numVertices;
        NeutrinoAssembler._numBufferIndices += numIndices;
    };
    NeutrinoAssembler._resetGeometryBuffers = function () {
        this._bufferIndex = 0;
        this._numBufferVertices = 0;
        this._numBufferIndices = 0;
        this._startBufferVertex = 0;
        this._startBufferIndex = 0;
        this._checkAndCreateCurrentBuffer();
    };
    NeutrinoAssembler.prototype._finishDrawCall = function () {
        if (NeutrinoAssembler._startBufferIndex === NeutrinoAssembler._numBufferIndices) {
            return;
        }
        var bufIndex = NeutrinoAssembler._bufferIndex;
        var subVertices = new Float32Array(NeutrinoAssembler._vertexBuffers[bufIndex], NeutrinoAssembler._startBufferVertex * NeutrinoAssembler._vertexFormat._bytes, ((NeutrinoAssembler._numBufferVertices - NeutrinoAssembler._startBufferVertex) * NeutrinoAssembler._vertexFormat._bytes) / 4);
        var subIndices = new Uint16Array(NeutrinoAssembler._indexBuffers[bufIndex].buffer, NeutrinoAssembler._startBufferIndex * 2, NeutrinoAssembler._numBufferIndices - NeutrinoAssembler._startBufferIndex);
        this.updateIAData(this._drawCallIndex, NeutrinoAssembler._vertexFormat._nativeObj, subVertices, subIndices);
        var effect = this._renderComp.materials[this._renderStyleIndex].effect;
        this.updateEffect(this._drawCallIndex, effect._nativeObj);
        NeutrinoAssembler._startBufferVertex = NeutrinoAssembler._numBufferVertices;
        NeutrinoAssembler._startBufferIndex = NeutrinoAssembler._numBufferIndices;
        ++this._drawCallIndex;
    };
    NeutrinoAssembler.prototype.updateRenderData = function (comp) {
        this.fillBuffers(comp);
        comp.node._renderFlag |= cc.RenderFlow.FLAG_UPDATE_RENDER_DATA;
    };
    NeutrinoAssembler.prototype.fillBuffers = function (comp) {
        if (!comp._neutrinoEffect || !comp.context.loaded()) {
            return;
        }
        this.reset(); // CustomAssembler.reset()
        NeutrinoAssembler._resetGeometryBuffers();
        this._drawCallIndex = 0;
        this._currentVertex = 0;
        this._renderStyleIndex = null;
        this._worldScale = comp._worldScale;
        comp._neutrinoEffect.fillGeometryBuffers([1, 0, 0], [0, 1, 0], [0, 0, -1]);
        this._finishDrawCall();
    };
    // Methods called by neutrinoEffect
    NeutrinoAssembler.prototype.initialize = function (maxNumVertices, texChannels, indices, maxNumRenderCalls) {
    };
    NeutrinoAssembler.prototype.beforeQuad = function (renderStyleIndex) {
        if (this._renderStyleIndex !== renderStyleIndex) {
            this._finishDrawCall();
            this._renderStyleIndex = renderStyleIndex;
        }
        this._prepareForGeometry(numQuadVertices, quadIndices.length);
    };
    NeutrinoAssembler.prototype.pushVertex = function (vertex) {
        var bufIndex = NeutrinoAssembler._bufferIndex;
        var floatsPerVertex = NeutrinoAssembler._vertexFormat._bytes / 4;
        var floatsBuffer = NeutrinoAssembler._vertexFloatBuffers[bufIndex];
        var uintsBuffer = NeutrinoAssembler._vertexUint32Buffers[bufIndex];
        var floatsStart = (NeutrinoAssembler._numBufferVertices + this._currentVertex) * floatsPerVertex;
        var x = vertex.position[0] * this._worldScale.x;
        var y = vertex.position[1] * this._worldScale.y;
        var z = vertex.position[2] * this._worldScale.z;
        floatsBuffer[floatsStart++] = x;
        floatsBuffer[floatsStart++] = y;
        floatsBuffer[floatsStart++] = z;
        floatsBuffer[floatsStart++] = vertex.texCoords[0][0];
        floatsBuffer[floatsStart++] = 1.0 - vertex.texCoords[0][1];
        uintsBuffer[floatsStart++] =
            (vertex.color[0]) |
                (vertex.color[1] << 8) |
                (vertex.color[2] << 16) |
                (vertex.color[3] << 24);
        ++this._currentVertex;
        if (this._currentVertex == 4) {
            var idicesBuffer = NeutrinoAssembler._indexBuffers[bufIndex];
            for (var i = 0; i < quadIndices.length; ++i) {
                idicesBuffer[NeutrinoAssembler._numBufferIndices + i] =
                    (NeutrinoAssembler._numBufferVertices - NeutrinoAssembler._startBufferVertex)
                        + quadIndices[i];
            }
            this._commitGeometry(numQuadVertices, quadIndices.length);
            this._currentVertex = 0;
        }
    };
    NeutrinoAssembler.prototype.pushRenderCall = function (rc) {
    };
    NeutrinoAssembler.prototype.cleanup = function () {
    };
    NeutrinoAssembler._vertexFormat = cc.gfx.VertexFormat.XYZ_UV_Color;
    NeutrinoAssembler._vertexBuffers = [];
    NeutrinoAssembler._vertexFloatBuffers = [];
    NeutrinoAssembler._vertexUint32Buffers = [];
    NeutrinoAssembler._indexBuffers = [];
    return NeutrinoAssembler;
}(cc.MeshRenderer.__assembler__));
exports.default = NeutrinoAssembler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Bc3NlbWJsZXJKU0IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLEdBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNsQyx3Q0FBd0M7QUFFeEMsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQztBQUMxQixJQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztBQUMvQixJQUFNLHFCQUFxQixHQUFHLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztBQUNuRSxJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7QUFFckU7SUFBK0MscUNBQTZCO0lBQTVFO1FBQUEscUVBZ0xDO1FBL0tHLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDOztJQTZLaEMsQ0FBQztJQTlKVSw4Q0FBNEIsR0FBbkM7UUFDSSxJQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLENBQUM7UUFFaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU07Z0JBQy9GLHFCQUFxQixDQUFDLENBQUM7WUFDM0IsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsY0FB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QUM7WUFFL0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7b0JBQ2pELENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7MEJBQzNFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsRUFBRTtJQUNqQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtJQUNBLENBQUM7SUExS00sK0JBQWEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDakQsZ0NBQWMsR0FBa0IsRUFBRSxDQUFDO0lBQ25DLHFDQUFtQixHQUFtQixFQUFFLENBQUM7SUFDekMsc0NBQW9CLEdBQWtCLEVBQUUsQ0FBQztJQUN6QywrQkFBYSxHQUFrQixFQUFFLENBQUM7SUF1SzdDLHdCQUFDO0NBaExELEFBZ0xDLENBaEw4QyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FnTDNFO2tCQWhMb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vQ29tcG9uZW50IGZyb20gJy4vTmV1dHJpbm9Db21wb25lbnQnO1xyXG5cclxuY29uc3QgcmVuZGVyZXIgPSA8YW55PmNjLnJlbmRlcmVyO1xyXG4vL2NvbnN0IGdmeCA9IHJlbmRlcmVyLnJlbmRlckVuZ2luZS5nZng7XHJcblxyXG5jb25zdCBxdWFkSW5kaWNlcyA9IFswLCAxLCAzLCAxLCAyLCAzXTtcclxuY29uc3QgbnVtUXVhZFZlcnRpY2VzID0gNDtcclxuY29uc3QgbWF4UXVhZHNJbkRyYXdDYWxsID0gNTEyO1xyXG5jb25zdCBtYXhWZXJ0aWNlc0luRHJhd0NhbGwgPSBudW1RdWFkVmVydGljZXMgKiBtYXhRdWFkc0luRHJhd0NhbGw7XHJcbmNvbnN0IG1heEluZGljZXNJbkRyYXdDYWxsID0gcXVhZEluZGljZXMubGVuZ3RoICogbWF4UXVhZHNJbkRyYXdDYWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1dHJpbm9Bc3NlbWJsZXIgZXh0ZW5kcyBjYy5NZXNoUmVuZGVyZXIuX19hc3NlbWJsZXJfXyB7XHJcbiAgICBfY3VycmVudFZlcnRleCA9IDA7XHJcbiAgICBfcmVuZGVyU3R5bGVJbmRleCA9IG51bGw7XHJcbiAgICBfd29ybGRTY2FsZSA9IG5ldyBjYy5WZWMzKCk7XHJcblxyXG4gICAgc3RhdGljIF92ZXJ0ZXhGb3JtYXQgPSBjYy5nZnguVmVydGV4Rm9ybWF0LlhZWl9VVl9Db2xvcjtcclxuICAgIHN0YXRpYyBfdmVydGV4QnVmZmVyczogQXJyYXlCdWZmZXJbXSA9IFtdO1xyXG4gICAgc3RhdGljIF92ZXJ0ZXhGbG9hdEJ1ZmZlcnM6IEZsb2F0MzJBcnJheVtdID0gW107XHJcbiAgICBzdGF0aWMgX3ZlcnRleFVpbnQzMkJ1ZmZlcnM6IFVpbnQzMkFycmF5W10gPSBbXTtcclxuICAgIHN0YXRpYyBfaW5kZXhCdWZmZXJzOiBVaW50MTZBcnJheVtdID0gW107XHJcbiAgICBzdGF0aWMgX2J1ZmZlckluZGV4OiBudW1iZXI7XHJcbiAgICBzdGF0aWMgX251bUJ1ZmZlclZlcnRpY2VzOiBudW1iZXI7XHJcbiAgICBzdGF0aWMgX251bUJ1ZmZlckluZGljZXM6IG51bWJlcjtcclxuICAgIHN0YXRpYyBfc3RhcnRCdWZmZXJWZXJ0ZXg6IG51bWJlcjtcclxuICAgIHN0YXRpYyBfc3RhcnRCdWZmZXJJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIF9kcmF3Q2FsbEluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIF9jaGVja0FuZENyZWF0ZUN1cnJlbnRCdWZmZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYnVmSW5kZXggPSBOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcblxyXG4gICAgICAgIGlmICghTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleEJ1ZmZlcnNbYnVmSW5kZXhdKSB7XHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhCdWZmZXJzW2J1ZkluZGV4XSA9IG5ldyBBcnJheUJ1ZmZlcihOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4Rm9ybWF0Ll9ieXRlcyAqXHJcbiAgICAgICAgICAgICAgICBtYXhWZXJ0aWNlc0luRHJhd0NhbGwpO1xyXG4gICAgICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4RmxvYXRCdWZmZXJzW2J1ZkluZGV4XSA9IG5ldyBGbG9hdDMyQXJyYXkoTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleEJ1ZmZlcnNbYnVmSW5kZXhdKTtcclxuICAgICAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleFVpbnQzMkJ1ZmZlcnNbYnVmSW5kZXhdID0gbmV3IFVpbnQzMkFycmF5KE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhCdWZmZXJzW2J1ZkluZGV4XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIU5ldXRyaW5vQXNzZW1ibGVyLl9pbmRleEJ1ZmZlcnNbYnVmSW5kZXhdKSB7XHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9pbmRleEJ1ZmZlcnNbYnVmSW5kZXhdID0gbmV3IFVpbnQxNkFycmF5KG1heEluZGljZXNJbkRyYXdDYWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9pbmNCdWZmZXIoKSB7XHJcbiAgICAgICAgKytOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlclZlcnRpY2VzID0gMDtcclxuICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVySW5kaWNlcyA9IDA7XHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3N0YXJ0QnVmZmVyVmVydGV4ID0gMDtcclxuICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX2NoZWNrQW5kQ3JlYXRlQ3VycmVudEJ1ZmZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wcmVwYXJlRm9yR2VvbWV0cnkobnVtVmVydGljZXM6IG51bWJlciwgbnVtSW5kaWNlczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJWZXJ0aWNlcyArIG51bVZlcnRpY2VzID09IG1heFZlcnRpY2VzSW5EcmF3Q2FsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVyVmVydGljZXMgKyBudW1WZXJ0aWNlcyA+IG1heFZlcnRpY2VzSW5EcmF3Q2FsbFxyXG4gICAgICAgICAgICB8fCBOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVySW5kaWNlcyArIG51bUluZGljZXMgPiBtYXhJbmRpY2VzSW5EcmF3Q2FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmluaXNoRHJhd0NhbGwoKTtcclxuICAgICAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9pbmNCdWZmZXIoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX2NvbW1pdEdlb21ldHJ5KG51bVZlcnRpY2VzOiBudW1iZXIsIG51bUluZGljZXM6IG51bWJlcikge1xyXG4gICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJWZXJ0aWNlcyArPSBudW1WZXJ0aWNlcztcclxuICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVySW5kaWNlcyArPSBudW1JbmRpY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfcmVzZXRHZW9tZXRyeUJ1ZmZlcnMoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fYnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuX251bUJ1ZmZlclZlcnRpY2VzID0gMDtcclxuICAgICAgICB0aGlzLl9udW1CdWZmZXJJbmRpY2VzID0gMDtcclxuICAgICAgICB0aGlzLl9zdGFydEJ1ZmZlclZlcnRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tBbmRDcmVhdGVDdXJyZW50QnVmZmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2ZpbmlzaERyYXdDYWxsKCkge1xyXG4gICAgICAgIGlmIChOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJJbmRleCA9PT0gTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlckluZGljZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnVmSW5kZXggPSBOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YlZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4QnVmZmVyc1tidWZJbmRleF0sXHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9zdGFydEJ1ZmZlclZlcnRleCAqIE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhGb3JtYXQuX2J5dGVzLFxyXG4gICAgICAgICAgICAoKE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJWZXJ0aWNlcyAtIE5ldXRyaW5vQXNzZW1ibGVyLl9zdGFydEJ1ZmZlclZlcnRleCkgKiBOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4Rm9ybWF0Ll9ieXRlcykgLyA0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ViSW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShOZXV0cmlub0Fzc2VtYmxlci5faW5kZXhCdWZmZXJzW2J1ZkluZGV4XS5idWZmZXIsIFxyXG4gICAgICAgICAgICBOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJJbmRleCAqIDIsXHJcbiAgICAgICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9udW1CdWZmZXJJbmRpY2VzIC0gTmV1dHJpbm9Bc3NlbWJsZXIuX3N0YXJ0QnVmZmVySW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUlBRGF0YSh0aGlzLl9kcmF3Q2FsbEluZGV4LCBOZXV0cmlub0Fzc2VtYmxlci5fdmVydGV4Rm9ybWF0Ll9uYXRpdmVPYmosXHJcbiAgICAgICAgICAgIHN1YlZlcnRpY2VzLCBzdWJJbmRpY2VzKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5fcmVuZGVyQ29tcC5tYXRlcmlhbHNbdGhpcy5fcmVuZGVyU3R5bGVJbmRleF0uZWZmZWN0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWZmZWN0KHRoaXMuX2RyYXdDYWxsSW5kZXgsIGVmZmVjdC5fbmF0aXZlT2JqKTtcclxuXHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3N0YXJ0QnVmZmVyVmVydGV4ID0gTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlclZlcnRpY2VzO1xyXG4gICAgICAgIE5ldXRyaW5vQXNzZW1ibGVyLl9zdGFydEJ1ZmZlckluZGV4ID0gTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlckluZGljZXM7XHJcbiAgICAgICAgKyt0aGlzLl9kcmF3Q2FsbEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlbmRlckRhdGEgKGNvbXApIHsgXHJcbiAgICAgICAgdGhpcy5maWxsQnVmZmVycyhjb21wKTtcclxuICAgICAgICBjb21wLm5vZGUuX3JlbmRlckZsYWcgfD0gY2MuUmVuZGVyRmxvdy5GTEFHX1VQREFURV9SRU5ERVJfREFUQTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsQnVmZmVycyAoY29tcCkge1xyXG4gICAgICAgIGlmICghY29tcC5fbmV1dHJpbm9FZmZlY3QgfHwgIWNvbXAuY29udGV4dC5sb2FkZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlc2V0KCk7IC8vIEN1c3RvbUFzc2VtYmxlci5yZXNldCgpXHJcbiAgICAgICAgTmV1dHJpbm9Bc3NlbWJsZXIuX3Jlc2V0R2VvbWV0cnlCdWZmZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZHJhd0NhbGxJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFZlcnRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyU3R5bGVJbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fd29ybGRTY2FsZSA9IGNvbXAuX3dvcmxkU2NhbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29tcC5fbmV1dHJpbm9FZmZlY3QuZmlsbEdlb21ldHJ5QnVmZmVycyhbMSwgMCwgMF0sIFswLCAxLCAwXSwgWzAsIDAsIC0xXSk7XHJcbiAgICAgICAgdGhpcy5fZmluaXNoRHJhd0NhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzIGNhbGxlZCBieSBuZXV0cmlub0VmZmVjdFxyXG5cclxuICAgIGluaXRpYWxpemUobWF4TnVtVmVydGljZXMsIHRleENoYW5uZWxzLCBpbmRpY2VzLCBtYXhOdW1SZW5kZXJDYWxscykge1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVF1YWQocmVuZGVyU3R5bGVJbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJTdHlsZUluZGV4ICE9PSByZW5kZXJTdHlsZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmlzaERyYXdDYWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlclN0eWxlSW5kZXggPSByZW5kZXJTdHlsZUluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9wcmVwYXJlRm9yR2VvbWV0cnkobnVtUXVhZFZlcnRpY2VzLCBxdWFkSW5kaWNlcy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hWZXJ0ZXgodmVydGV4KSB7XHJcbiAgICAgICAgY29uc3QgYnVmSW5kZXggPSBOZXV0cmlub0Fzc2VtYmxlci5fYnVmZmVySW5kZXg7XHJcbiAgICAgICAgY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleEZvcm1hdC5fYnl0ZXMgLyA0O1xyXG4gICAgICAgIGNvbnN0IGZsb2F0c0J1ZmZlciA9IE5ldXRyaW5vQXNzZW1ibGVyLl92ZXJ0ZXhGbG9hdEJ1ZmZlcnNbYnVmSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHVpbnRzQnVmZmVyID0gTmV1dHJpbm9Bc3NlbWJsZXIuX3ZlcnRleFVpbnQzMkJ1ZmZlcnNbYnVmSW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgZmxvYXRzU3RhcnQgPSAoTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlclZlcnRpY2VzICsgdGhpcy5fY3VycmVudFZlcnRleCkgKiBmbG9hdHNQZXJWZXJ0ZXg7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSB2ZXJ0ZXgucG9zaXRpb25bMF0gKiB0aGlzLl93b3JsZFNjYWxlLng7XHJcbiAgICAgICAgY29uc3QgeSA9IHZlcnRleC5wb3NpdGlvblsxXSAqIHRoaXMuX3dvcmxkU2NhbGUueTtcclxuICAgICAgICBjb25zdCB6ID0gdmVydGV4LnBvc2l0aW9uWzJdICogdGhpcy5fd29ybGRTY2FsZS56O1xyXG5cclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQrK10gPSB4O1xyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCsrXSA9IHk7XHJcbiAgICAgICAgZmxvYXRzQnVmZmVyW2Zsb2F0c1N0YXJ0KytdID0gejtcclxuXHJcbiAgICAgICAgZmxvYXRzQnVmZmVyW2Zsb2F0c1N0YXJ0KytdID0gdmVydGV4LnRleENvb3Jkc1swXVswXTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQrK10gPSAxLjAgLSB2ZXJ0ZXgudGV4Q29vcmRzWzBdWzFdO1xyXG5cclxuICAgICAgICB1aW50c0J1ZmZlcltmbG9hdHNTdGFydCsrXSA9IFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzBdKSB8XHJcbiAgICAgICAgICAgICh2ZXJ0ZXguY29sb3JbMV0gPDwgOCkgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzJdIDw8IDE2KSB8XHJcbiAgICAgICAgICAgICh2ZXJ0ZXguY29sb3JbM10gPDwgMjQpO1xyXG5cclxuICAgICAgICArK3RoaXMuX2N1cnJlbnRWZXJ0ZXg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VmVydGV4ID09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWRpY2VzQnVmZmVyID0gTmV1dHJpbm9Bc3NlbWJsZXIuX2luZGV4QnVmZmVyc1tidWZJbmRleF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1YWRJbmRpY2VzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZGljZXNCdWZmZXJbTmV1dHJpbm9Bc3NlbWJsZXIuX251bUJ1ZmZlckluZGljZXMgKyBpXSA9IFxyXG4gICAgICAgICAgICAgICAgICAgIChOZXV0cmlub0Fzc2VtYmxlci5fbnVtQnVmZmVyVmVydGljZXMgLSBOZXV0cmlub0Fzc2VtYmxlci5fc3RhcnRCdWZmZXJWZXJ0ZXgpIFxyXG4gICAgICAgICAgICAgICAgICAgICsgcXVhZEluZGljZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEdlb21ldHJ5KG51bVF1YWRWZXJ0aWNlcywgcXVhZEluZGljZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFZlcnRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1c2hSZW5kZXJDYWxsKHJjKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/neutrinoparticles.js/neutrinoparticles.umd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab558HOKv9Bq5K2NwBWDZL+', 'neutrinoparticles.umd');
// neutrinoparticles.js/neutrinoparticles.umd.js

"use strict";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.Neutrino = {}));
})(void 0, function (exports) {
  'use strict';

  function Context() {
    var ctx = this;

    this.equalv3_ = function (a, b) {
      return a[0] == b[0] && a[1] == b[1] && a[2] == b[2];
    };

    this.equalq_ = function (a, b) {
      return a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3];
    };

    this.a = function (r, a, b) {
      r[0] = a[0] + b[0];
      r[1] = a[1] + b[1];
    };

    this.b = function (a, b) {
      return [a[0] + b[0], a[1] + b[1]];
    };

    this.y = function (r, a, s) {
      r[0] = a[0] + s;
      r[1] = a[1] + s;
    };

    this.z = function (a, s) {
      return [a[0] + s, a[1] + s];
    };

    this.c = function (r, a, b) {
      r[0] = a[0] + b[0];
      r[1] = a[1] + b[1];
      r[2] = a[2] + b[2];
    };

    this.d = function (a, b) {
      return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
    };

    this.C = function (r, a, s) {
      r[0] = a[0] + s;
      r[1] = a[1] + s;
      r[2] = a[2] + s;
    };

    this.D = function (a, s) {
      return [a[0] + s, a[1] + s, a[2] + s];
    };

    this.addq = function (r, a, b) {
      r[0] = a[0] + b[0];
      r[1] = a[1] + b[1];
      r[2] = a[2] + b[2];
      r[3] = a[3] + b[3];
    };

    this.addq_ = function (a, b) {
      return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
    };

    this.e = function (r, a, b) {
      r[0] = a[0] - b[0];
      r[1] = a[1] - b[1];
    };

    this.f = function (a, b) {
      return [a[0] - b[0], a[1] - b[1]];
    };

    this.A = function (r, a, s) {
      r[0] = a[0] - s;
      r[1] = a[1] - s;
    };

    this.B = function (a, s) {
      return [a[0] - s, a[1] - s];
    };

    this.nf = function (r, s, a) {
      r[0] = s - a[0];
      r[1] = s - a[1];
    };

    this.of = function (s, a) {
      return [s - a[0], s - a[1]];
    };

    this.g = function (r, a, b) {
      r[0] = a[0] - b[0];
      r[1] = a[1] - b[1];
      r[2] = a[2] - b[2];
    };

    this.h = function (a, b) {
      return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    };

    this.E = function (r, a, s) {
      r[0] = a[0] - s;
      r[1] = a[1] - s;
      r[2] = a[2] - s;
    };

    this.F = function (a, s) {
      return [a[0] - s, a[1] - s, a[2] - s];
    };

    this.rf = function (r, s, a) {
      r[0] = s - a[0];
      r[1] = s - a[1];
      r[2] = s - a[2];
    };

    this.sf = function (s, a) {
      return [s - a[0], s - a[1], s - a[2]];
    };

    this.i = function (r, a, b) {
      r[0] = a[0] * b[0];
      r[1] = a[1] * b[1];
    };

    this.j = function (a, b) {
      return [a[0] * b[0], a[1] * b[1]];
    };

    this.k = function (r, a, b) {
      r[0] = a[0] * b[0];
      r[1] = a[1] * b[1];
      r[2] = a[2] * b[2];
    };

    this.l = function (a, b) {
      return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
    };

    this.m = function (r, a, b) {
      r[0] = a[0] / b[0];
      r[1] = a[1] / b[1];
    };

    this.n = function (a, b) {
      return [a[0] / b[0], a[1] / b[1]];
    };

    this.o = function (r, a, b) {
      r[0] = a[0] / b[0];
      r[1] = a[1] / b[1];
      r[2] = a[2] / b[2];
    };

    this.p = function (a, b) {
      return [a[0] / b[0], a[1] / b[1], a[2] / b[2]];
    };

    this.H = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    };

    this.dotq_ = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    };

    this.q = function (r, a, s) {
      r[0] = a[0] * s;
      r[1] = a[1] * s;
    };

    this.r = function (a, s) {
      return [a[0] * s, a[1] * s];
    };

    this.s = function (r, a, s) {
      r[0] = a[0] / s;
      r[1] = a[1] / s;
    };

    this.t = function (a, s) {
      return [a[0] / s, a[1] / s];
    };

    this.u = function (r, a, s) {
      r[0] = a[0] * s;
      r[1] = a[1] * s;
      r[2] = a[2] * s;
    };

    this.v = function (a, s) {
      return [a[0] * s, a[1] * s, a[2] * s];
    };

    this.w = function (r, a, s) {
      r[0] = a[0] / s;
      r[1] = a[1] / s;
      r[2] = a[2] / s;
    };

    this.x = function (a, s) {
      return [a[0] / s, a[1] / s, a[2] / s];
    };

    this.y = function (r, a, s) {
      r[0] = a[0] + s;
      r[1] = a[1] + s;
    };

    this.z = function (a, s) {
      return [a[0] + s, a[1] + s];
    };

    this.A = function (r, a, s) {
      r[0] = a[0] - s;
      r[1] = a[1] - s;
    };

    this.B = function (a, s) {
      return [a[0] - s, a[1] - s];
    };

    this.G = function (a, b) {
      return a[0] * b[0] + a[1] * b[1];
    };

    this.H = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    };

    this.I = function (r, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];
      r[0] = ay * bz - az * by;
      r[1] = az * bx - ax * bz;
      r[2] = ax * by - ay * bx;
    };

    this.J = function (a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];
      return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
    };

    this.K = function (a) {
      return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
    };

    this.L = function (a) {
      return a[0] * a[0] + a[1] * a[1];
    };

    this.M = function (r, a) {
      ctx.q(r, a, 1.0 / ctx.K(a));
    };

    this.N = function (a) {
      return ctx.r(a, 1.0 / ctx.K(a));
    };

    this.O = function (a) {
      return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
    };

    this.P = function (a) {
      return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    };

    this.Q = function (r, a) {
      ctx.u(r, a, 1.0 / ctx.O(a));
    };

    this.R = function (a) {
      return ctx.v(a, 1.0 / ctx.O(a));
    };

    this.S = function (r, a) {
      r[0] = a[0];
      r[1] = a[1];
    };

    this.T = function (r, a) {
      r[0] = a[0];
      r[1] = a[1];
      r[2] = a[2];
    };

    this.U = function (r, a) {
      r[0] = a[0];
      r[1] = a[1];
      r[2] = a[2];
      r[3] = a[3];
    };

    this.V = function (r, x, y) {
      r[0] = x;
      r[1] = y;
    };

    this.W = function (r, x, y, z) {
      r[0] = x;
      r[1] = y;
      r[2] = z;
    };

    this.X = function (a, b, i) {
      return a + (b - a) * i;
    };

    this.Y = function (r, a, b, i) {
      r[0] = a[0] + (b[0] - a[0]) * i;
      r[1] = a[1] + (b[1] - a[1]) * i;
    };

    this.Z = function (a, b, i) {
      return [a[0] + (b[0] - a[0]) * i, a[1] + (b[1] - a[1]) * i];
    };

    this.ab = function (r, a, b, i) {
      r[0] = a[0] + (b[0] - a[0]) * i;
      r[1] = a[1] + (b[1] - a[1]) * i;
      r[2] = a[2] + (b[2] - a[2]) * i;
    };

    this.bb = function (a, b, i) {
      return [a[0] + (b[0] - a[0]) * i, a[1] + (b[1] - a[1]) * i, a[2] + (b[2] - a[2]) * i];
    };

    this.slerpq = function (r, x, y, a) {
      var cosTheta = ctx.dotq_(x, y);
      var z = [];

      if (cosTheta < 0) {
        ctx.negq(z, y);
        cosTheta = -cosTheta;
      } else {
        ctx.U(z, y);
      }

      if (1.0 - cosTheta < Number.EPSILON) {
        r[0] = ctx.X(x[0], y[0], a);
        r[1] = ctx.X(x[1], y[1], a);
        r[2] = ctx.X(x[2], y[2], a);
        r[3] = ctx.X(x[3], y[3], a);
      } else {
        var Md = ctx.acos_(cosTheta);
        ctx.mulqscalar(r, ctx.addq_(ctx.mulqscalar_(x, ctx.sin_((1.0 - a) * Md)), ctx.mulqscalar_(z, ctx.sin_(a * Md))), 1.0 / ctx.sin_(Md));
      }
    };

    this.slerpq_ = function (x, y, a) {
      var r = [];
      slerpq(r, x, y, a);
      return r;
    }; //trigonometry


    this.acos_ = function (a) {
      return Math.acos(a);
    };

    this.sin_ = function (a) {
      return Math.sin(a);
    };

    this.cos_ = function (a) {
      return Math.cos(a);
    }; // random


    this.taus88 = function (seed) {
      if (!seed) seed = 0;
      var value0, value1, value2;

      this.seed = function (s0) {
        s0 &= 0xFFFFFFFF;
        value0 = s0 < 2 ? s0 + 2 : s0;
        value1 = s0 < 8 ? s0 + 8 : s0;
        value2 = s0 < 16 ? s0 + 16 : s0;
      };

      this.rand = function () {
        var b = ((value0 << 13 ^ value0) & 0xFFFFFFFF) >>> 19;
        value0 = ((value0 & 0xFFFFFFFE) << 12 ^ b) >>> 0;
        b = ((value1 << 2 ^ value1) & 0xFFFFFFFF) >>> 25;
        value1 = ((value1 & 0xFFFFFFF8) << 4 ^ b) >>> 0;
        b = ((value2 << 3 ^ value2) & 0xFFFFFFFF) >>> 11;
        value2 = ((value2 & 0xFFFFFFF0) << 17 ^ b) >>> 0;
        var engine = (value0 ^ value1 ^ value2) >>> 0;
        return engine / 4294967296.0;
      };

      this.seed(seed);
    };

    this.cb = function (r, radius) {
      this.randv2gen(r, radius, function () {
        return Math.random();
      });
    };

    this.randv2gen = function (r, radius, gen) {
      var Md = gen() * Math.PI * 2.0;
      r[0] = radius * ctx.cos_(Md);
      r[1] = radius * ctx.sin_(Md);
    };

    this.db = function (r, radius) {
      this.randv3gen(r, radius, function () {
        return Math.random();
      });
    };

    this.randv3gen = function (r, radius, gen) {
      var theta = gen() * Math.PI * 2.0;
      var z = -1.0 + gen() * 2.0;
      var sqrtInvZ2 = radius * Math.sqrt(1.0 - z * z);
      r[0] = sqrtInvZ2 * ctx.cos_(theta);
      r[1] = sqrtInvZ2 * ctx.sin_(theta);
      r[2] = radius * z;
    };

    this.yb = function (r, x, y, Nd, gen) {
      var dispx = x + gen() * Nd[0];
      var dispy = y + gen() * Nd[1];
      ctx.V(r, dispx, dispy);
    };

    this.eb = function (r, a) {
      ctx.V(-a[0], -a[1]);
    };

    this.fb = function (a) {
      return [-a[0], -a[1]];
    };

    this.gb = function (r, a) {
      ctx.W(-a[0], -a[1], -a[2]);
    };

    this.hb = function (a) {
      return [-a[0], -a[1], -a[2]];
    };

    this.negq = function (r, a) {
      r[0] = -a[0];
      r[1] = -a[1];
      r[2] = -a[2];
      r[3] = -a[3];
    };

    this.negq_ = function (a) {
      return [-a[0], -a[1], -a[2], -a[3]];
    };

    this.ib = function (degrees) {
      return degrees / 180.0 * Math.PI;
    };

    this.jb = function (radians) {
      return radians / Math.PI * 180.0;
    };

    this.Ae = function (value) {
      return value < 0 ? -1 : 1;
    };

    this.ob = function (x, y, z, q) {
      var x2 = 2.0 * q[0] * q[0];
      var y2 = 2.0 * q[1] * q[1];
      var z2 = 2.0 * q[2] * q[2];
      var xy = 2.0 * q[0] * q[1];
      var xz = 2.0 * q[0] * q[2];
      var yz = 2.0 * q[1] * q[2];
      var wz = 2.0 * q[3] * q[2];
      var wy = 2.0 * q[3] * q[1];
      var wx = 2.0 * q[3] * q[0];
      x[0] = 1.0 - y2 - z2;
      x[1] = xy + wz;
      x[2] = xz - wy;
      y[0] = xy - wz;
      y[1] = 1.0 - x2 - z2;
      y[2] = yz + wx;
      z[0] = xz + wy;
      z[1] = yz - wx;
      z[2] = 1.0 - x2 - y2;
    };

    this.pb = function (q, x, y, z) {
      var tr = x[0] + y[1] + z[2];

      if (tr > 0) {
        var S = Math.sqrt(tr + 1.0) * 2;
        q[3] = 0.25 * S;
        q[0] = (y[2] - z[1]) / S;
        q[1] = (z[0] - x[2]) / S;
        q[2] = (x[1] - y[0]) / S;
      } else if (x[0] > y[1] & x[0] > z[2]) {
        var S = Math.sqrt(1.0 + x[0] - y[1] - z[2]) * 2;
        q[3] = (y[2] - z[1]) / S;
        q[0] = 0.25 * S;
        q[1] = (x[1] + y[0]) / S;
        q[2] = (z[0] + x[2]) / S;
      } else if (y[1] > z[2]) {
        var S = Math.sqrt(1.0 + y[1] - x[0] - z[2]) * 2;
        q[3] = (z[0] - x[2]) / S;
        q[0] = (x[1] + y[0]) / S;
        q[1] = 0.25 * S;
        q[2] = (y[2] + z[1]) / S;
      } else {
        var S = Math.sqrt(1.0 + z[2] - x[0] - y[1]) * 2;
        q[3] = (x[1] - y[0]) / S;
        q[0] = (z[0] + x[2]) / S;
        q[1] = (y[2] + z[1]) / S;
        q[2] = 0.25 * S;
      }
    };

    this.
    /**/
    axes2quat = this.pb;

    this.qb = function (q, x, a) {
      var ha = ctx.ib(a) * 0.5,
          s = Math.sin(ha);
      q[0] = x[0] * s;
      q[1] = x[1] * s;
      q[2] = x[2] * s;
      q[3] = Math.cos(ha);
    };

    this.
    /**/
    axisangle2quat = this.qb;

    this.axisangle2quat_ = function (x, a) {
      var ha = ctx.ib(a) * 0.5,
          s = Math.sin(ha);
      return [x[0] * s, x[1] * s, x[2] * s, ctx.cos_(ha)];
    };

    this.
    /**/
    axisangle2quat_ = this.axisangle2quat_;

    this.rb = function (r, v, q) {
      var x = v[0];
      var y = v[1];
      var z = v[2];
      var qx = q[0];
      var qy = q[1];
      var qz = q[2];
      var qw = q[3];
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;
      r[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      r[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      r[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    };

    this.sb = function (r, a, b) {
      var qax = a[0],
          qay = a[1],
          qaz = a[2],
          qaw = a[3];
      var qbx = b[0],
          qby = b[1],
          qbz = b[2],
          qbw = b[3];
      r[0] = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      r[1] = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      r[2] = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      r[3] = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    };

    this.mulqscalar = function (r, a, s) {
      r[0] = a[0] * s;
      r[1] = a[1] * s;
      r[2] = a[2] * s;
      r[3] = a[3] * s;
    };

    this.mulqscalar_ = function (a, s) {
      return [a[0] * s, a[1] * s, a[2] * s, a[3] * s];
    };

    this.tb = function (r, Hf, degree, scale, v) {
      var rad = ctx.ib(degree);
      var cos = Math.cos(rad) * scale;
      var sin = Math.sin(rad) * scale;
      r[0] = Hf[0] + cos * v[0] - sin * v[1];
      r[1] = Hf[1] + sin * v[0] + cos * v[1];
    };

    this.ub = function (r, Hf, degree, scale, v) {
      var rad = ctx.ib(degree);
      var cos = Math.cos(rad) / scale;
      var sin = Math.sin(rad) / scale;
      r[0] = cos * v[0] + sin * v[1] - Hf[0] * cos - Hf[1] * sin;
      r[1] = cos * v[1] - sin * v[0] + Hf[0] * sin - Hf[1] * cos;
    };

    this.vb = function (val) {
      if (val < 0) return Math.floor(ctx.yd - 1 + val % ctx.yd);else return Math.floor(val % ctx.yd);
    };

    function colorCompToHex_(c) {
      return c < 16 ? "0" + c.toString(16) : c.toString(16);
    }

    this.ff = function (rgb) {
      return "#" + colorCompToHex_(Math.floor(rgb[0] * 255)) + colorCompToHex_(Math.floor(rgb[1] * 255)) + colorCompToHex_(Math.floor(rgb[2] * 255));
    };

    this.tf = function (vf, xf, yf, a, b, zf) {
      var ca = ctx.f(a, vf);
      var cb = ctx.f(b, vf);
      var wf = ctx.r(xf, yf);

      if (ca[0] < -wf[0] && cb[0] < -wf[0] || ca[0] > wf[0] && cb[0] > wf[0] || ca[1] < -wf[1] && cb[1] < -wf[1] || ca[1] > wf[1] && cb[1] > wf[1]) {
        return false;
      }

      if (ca[0] <= wf[0] && ca[0] >= -wf[0] && ca[1] <= wf[1] && ca[1] >= -wf[1]) return true;
      if (zf < 0.000001) return false;
      if (cb[0] <= wf[0] && cb[0] >= -wf[0] && cb[1] <= wf[1] && cb[1] >= -wf[1]) return true;
      var Af = ctx.f(b, a);
      ctx.s(Af, Af, zf);
      var Bf = [-Af[1], Af[0]];
      var Cf = Math.abs(ctx.G(Bf, cb));

      if (Math.abs(ctx.G(Bf, wf)) >= Cf) {
        var Df = [-xf[1], xf[0]];

        if (ctx.G(Df, ca) * ctx.G(Df, cb) <= 0.0) {
          return true;
        }
      } else if (Math.abs(ctx.G(Bf, [wf[0], -wf[1]])) >= Cf) {
        var _Df = [xf[1], xf[0]];

        if (ctx.G(_Df, ca) * ctx.G(_Df, cb) <= 0.0) {
          return true;
        }
      }

      return false;
    };

    this.uf = function (vf, xf, yf, a, b, zf, Ef) {
      var ca = ctx.f(a, vf);
      var cb = ctx.f(b, vf);
      var wf = ctx.r(xf, yf);
      if (zf < 0.000001) return false;

      if (ca[0] < -wf[0] && cb[0] < -wf[0] || ca[0] > wf[0] && cb[0] > wf[0] || ca[1] < -wf[1] && cb[1] < -wf[1] || ca[1] > wf[1] && cb[1] > wf[1]) {
        return false;
      }

      var Af = ctx.f(b, a);
      ctx.s(Af, Af, zf);
      var Bf = [-Af[1], Af[0]];
      var Cf = Math.abs(ctx.G(Bf, cb));

      if (Ef) {
        if (Math.abs(ctx.G(Bf, wf)) >= Cf) {
          var Df = [-xf[1], xf[0]];

          if (ctx.G(Df, ca) * ctx.G(Df, cb) <= 0.0) {
            return true;
          }
        }
      } else {
        if (Math.abs(ctx.G(Bf, [wf[0], -wf[1]])) >= Cf) {
          var _Df2 = [xf[1], xf[0]];

          if (ctx.G(_Df2, ca) * ctx.G(_Df2, cb) <= 0.0) {
            return true;
          }
        }
      }

      return false;
    };

    this.wb = function (r, x, y, z) {
      var rgbDisp = 3 * (y * ctx.yd + x);
      var view = ctx.zd[z];
      r[0] = view.getUint8(rgbDisp);
      r[1] = view.getUint8(rgbDisp + 1);
      r[2] = view.getUint8(rgbDisp + 2);
    };

    this.xb = function (r, Hf) {
      if (ctx.zd == null) {
        ctx.W(r, 128, 128, 128);
        return;
      }

      var scaledPosX = Hf[0] * ctx.yd;
      var scaledPosY = Hf[1] * ctx.yd;
      var scaledPosZ = Hf[2] * ctx.yd;
      var floorX = Math.floor(scaledPosX);
      var floorY = Math.floor(scaledPosY);
      var floorZ = Math.floor(scaledPosZ);
      var fracX = scaledPosX - floorX;
      var fracY = scaledPosY - floorY;
      var fracZ = scaledPosZ - floorZ;
      var noiseX = ctx.vb(floorX);
      var noiseX1 = ctx.vb(floorX + 1);
      var noiseY = ctx.vb(floorY);
      var noiseY1 = ctx.vb(floorY + 1);
      var noiseZ = ctx.vb(floorZ);
      var noiseZ1 = ctx.vb(floorZ + 1);
      var value000 = [],
          value001 = [],
          value010 = [],
          value011 = [],
          value100 = [],
          value101 = [],
          value110 = [],
          value111 = [];
      ctx.wb(value000, noiseX, noiseY, noiseZ);
      ctx.wb(value001, noiseX, noiseY, noiseZ1);
      ctx.wb(value010, noiseX, noiseY1, noiseZ);
      ctx.wb(value011, noiseX, noiseY1, noiseZ1);
      ctx.wb(value100, noiseX1, noiseY, noiseZ);
      ctx.wb(value101, noiseX1, noiseY, noiseZ1);
      ctx.wb(value110, noiseX1, noiseY1, noiseZ);
      ctx.wb(value111, noiseX1, noiseY1, noiseZ1);
      var value00 = [],
          value01 = [],
          value10 = [],
          value11 = [];
      ctx.ab(value00, value000, value001, fracZ);
      ctx.ab(value01, value010, value011, fracZ);
      ctx.ab(value10, value100, value101, fracZ);
      ctx.ab(value11, value110, value111, fracZ);
      var value0 = [],
          value1 = [];
      ctx.ab(value0, value00, value01, fracY);
      ctx.ab(value1, value10, value11, fracY);
      ctx.ab(r, value0, value1, fracX);
    };

    this.ImageDesc = function (image, x, y, width, height) {
      this.image = image;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    };

    this.RenderCall = function (startIndex, numIndices, renderStyleIndex) {
      this.startIndex = startIndex;
      this.numIndices = numIndices;
      this.renderStyleIndex = renderStyleIndex;
    };

    this.SubRect = function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    };

    this.Camera2D = function () {};

    this.Camera2D.prototype.tb = function (Hf, Nd) {
      return true;
    };

    this.Camera3D = function (
    /**/
    screenSize,
    /**/
    horizAngle) {
      this.Qd = ctx.r(
      /**/
      screenSize, 0.5);
      this.z = -(
      /**/
      screenSize[0] * 0.5) / Math.tan(ctx.ib(
      /**/
      horizAngle * 0.5));
    };

    this.Camera3D.prototype.
    /**/
    transform = function (
    /**/
    pos,
    /**/
    size) {
      if (
      /**/
      pos[2] < this.z) return false;
      var scale = -this.z / (
      /**/
      pos[2] - this.z);
      ctx.a(
      /**/
      pos, ctx.r(ctx.f(
      /**/
      pos, this.Qd), scale), this.Qd);
      ctx.q(
      /**/
      size,
      /**/
      size, scale);
      return true;
    };

    this.zd = null;
    this.yd = 0;

    this.initializeNoise = function (path, onloadcallback, onfailcallback) {
      if (!path) {
        alert("path should be defined");
      }

      if (this.zd != null) {
        onloadcallback();
        return;
      }

      if (path == null || path == undefined) path = this.defaultPath;
      var request = new XMLHttpRequest();
      request.open("GET", path + "neutrinoparticles.noise.bin", true);
      request.responseType = "arraybuffer";
      request.ctx = this;

      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          if (request.status >= 200 && request.status < 300 || request.status == 304) {
            var zd = request.response;
            var ctx = request.ctx;
            var view = new DataView(zd, 0, 4);
            var planeSize = view.getUint32(0, true);
            ctx.zd = [];
            ctx.yd = planeSize;

            for (var planeIndex = 0; planeIndex < planeSize; ++planeIndex) {
              ctx.zd[planeIndex] = new DataView(zd, 4
              /*Nd*/
              + 3 * planeSize * planeSize * planeIndex);
            }

            if (onloadcallback) onloadcallback();
          } else {
            if (onfailcallback) onfailcallback();
          }
        }
      };

      request.send();
    };

    this.NoiseGenerator = function () {
      var catmullRom_ = function catmullRom_(p0, p1, p2, p3, t) {
        return 0.5 * (2.0 * p1 + (-p0 + p2) * t + (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t * t + (-p0 + 3.0 * p1 - 3.0 * p2 + p3) * (t * t * t));
      };

      var catmullRomv3_ = function catmullRomv3_(p0, p1, p2, p3, t) {
        return [catmullRom_(p0[0], p1[0], p2[0], p3[0], t), catmullRom_(p0[1], p1[1], p2[1], p3[1], t), catmullRom_(p0[2], p1[2], p2[2], p3[2], t)];
      };

      var clamp_ = function clamp_(a, from, to) {
        return a < from ? from : a > to ? to : a;
      };

      var imageSize = 64;
      var image = [];
      var tempBuffer = [];
      var tausGenerator = new ctx.taus88(120); // 120 - hardcoded starting seed

      var rand = function rand() {
        return tausGenerator.rand();
      };

      var amp = 0.7; // hardcoded amplitude of perlin zd

      var fadeDegree = 1.2; // hardcoded fade degree of each octave

      var prevStep = imageSize;
      var step, Nd, octSize, octSize2, octMaskSize, octPixels, octZ, octY; // mix step variables

      var numMixStepIterations = 0;
      var mixStepIteration = 0;

      for (var i = prevStep >>> 1; i > 0; i >>>= 1) {
        var _octSize = Math.floor(imageSize / i);

        numMixStepIterations += _octSize * _octSize;
      }

      var States = {
        INITIAL_FILL: 0,
        MIX_STEP_INIT: 1,
        MIX_STEP_PROCESS: 2,
        SCALING: 3,
        DATA_VIEWS: 4,
        FINISHED: 5
      };
      var Progress = {
        INIT: 0.01,
        MIX: 0.9,
        SCALING: 0.95,
        DATA_VIEWS: 1.0
      };
      var state = States.INITIAL_FILL;
      this.progress = 0.0;

      var initialFill = function initialFill() {
        for (var z = 0; z < imageSize; ++z) {
          var imageZ = image[z] = [];

          for (var y = 0; y < imageSize; ++y) {
            var imageZY = imageZ[y] = [];

            for (var x = 0; x < imageSize; ++x) {
              var imageZYX = imageZY[x] = [0.0, 0.0, 0.0];
            }
          }
        }

        state = States.MIX_STEP_INIT;
        this.progress = Progress.INIT;
      };

      var mixStepInit = function mixStepInit() {
        step = prevStep >>> 1;
        Nd = imageSize;
        octSize = Math.floor(Nd / step);
        octSize2 = octSize * octSize;
        octMaskSize = Math.max(octSize - 1, 1);
        octPixels = octSize * octSize * octSize;
        octZ = 0;
        octY = 0;

        for (var i = 0; i < octPixels; ++i) {
          tempBuffer[i] = []; // order is inverted to satisfy c++ obsolete order

          tempBuffer[i][2] = rand() * 2.0 - 1.0;
          tempBuffer[i][1] = rand() * 2.0 - 1.0;
          tempBuffer[i][0] = rand() * 2.0 - 1.0;
        }

        state = States.MIX_STEP_PROCESS;
      };

      var mixStepProcess = function mixStepProcess() {
        for (var octX = 0; octX < octSize; ++octX) {
          var octZ0 = octZ - 1 >>> 0 & octMaskSize;
          var octZ1 = octZ >>> 0 & octMaskSize;
          var octZ2 = octZ + 1 >>> 0 & octMaskSize;
          var octZ3 = octZ + 2 >>> 0 & octMaskSize;
          var octY0 = octY - 1 >>> 0 & octMaskSize;
          var octY1 = octY >>> 0 & octMaskSize;
          var octY2 = octY + 1 >>> 0 & octMaskSize;
          var octY3 = octY + 2 >>> 0 & octMaskSize;
          var octX0 = octX - 1 >>> 0 & octMaskSize;
          var octX1 = octX >>> 0 & octMaskSize;
          var octX2 = octX + 1 >>> 0 & octMaskSize;
          var octX3 = octX + 2 >>> 0 & octMaskSize;
          var values = //zyx
          [[[tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX3]]], [[tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX3]]], [[tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX3]]], [[tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX3]]]];

          for (var inZ = 0; inZ < step; ++inZ) {
            var interpZ = inZ / step;
            var imageZ = octZ * step + inZ;
            var valuesP = //yx
            [[catmullRomv3_(values[0][0][0], values[1][0][0], values[2][0][0], values[3][0][0], interpZ), catmullRomv3_(values[0][0][1], values[1][0][1], values[2][0][1], values[3][0][1], interpZ), catmullRomv3_(values[0][0][2], values[1][0][2], values[2][0][2], values[3][0][2], interpZ), catmullRomv3_(values[0][0][3], values[1][0][3], values[2][0][3], values[3][0][3], interpZ)], [catmullRomv3_(values[0][1][0], values[1][1][0], values[2][1][0], values[3][1][0], interpZ), catmullRomv3_(values[0][1][1], values[1][1][1], values[2][1][1], values[3][1][1], interpZ), catmullRomv3_(values[0][1][2], values[1][1][2], values[2][1][2], values[3][1][2], interpZ), catmullRomv3_(values[0][1][3], values[1][1][3], values[2][1][3], values[3][1][3], interpZ)], [catmullRomv3_(values[0][2][0], values[1][2][0], values[2][2][0], values[3][2][0], interpZ), catmullRomv3_(values[0][2][1], values[1][2][1], values[2][2][1], values[3][2][1], interpZ), catmullRomv3_(values[0][2][2], values[1][2][2], values[2][2][2], values[3][2][2], interpZ), catmullRomv3_(values[0][2][3], values[1][2][3], values[2][2][3], values[3][2][3], interpZ)], [catmullRomv3_(values[0][2][0], values[1][3][0], values[2][3][0], values[3][3][0], interpZ), catmullRomv3_(values[0][2][1], values[1][3][1], values[2][3][1], values[3][3][1], interpZ), catmullRomv3_(values[0][2][2], values[1][3][2], values[2][3][2], values[3][3][2], interpZ), catmullRomv3_(values[0][2][3], values[1][3][3], values[2][3][3], values[3][3][3], interpZ)]];

            for (var inY = 0; inY < step; ++inY) {
              var interpY = inY / step;
              var imageY = octY * step + inY;
              var value0 = catmullRomv3_(valuesP[0][0], valuesP[1][0], valuesP[2][0], valuesP[3][0], interpY);
              var value1 = catmullRomv3_(valuesP[0][1], valuesP[1][1], valuesP[2][1], valuesP[3][1], interpY);
              var value2 = catmullRomv3_(valuesP[0][2], valuesP[1][2], valuesP[2][2], valuesP[3][2], interpY);
              var value3 = catmullRomv3_(valuesP[0][3], valuesP[1][3], valuesP[2][3], valuesP[3][3], interpY);

              for (var inX = 0; inX < step; ++inX) {
                var interpX = inX / step;
                var imageX = octX * step + inX;
                var octResult = catmullRomv3_(value0, value1, value2, value3, interpX);
                var result = ctx.d(ctx.v(octResult, amp), image[imageZ][imageY][imageX]);
                var clampedResult = [clamp_(result[0], -1.0, 1.0), clamp_(result[1], -1.0, 1.0), clamp_(result[2], -1.0, 1.0)];
                image[imageZ][imageY][imageX] = clampedResult;
              }
            }
          }
        }

        mixStepIteration++;
        this.progress = Progress.INIT + (Progress.MIX - Progress.INIT) * (mixStepIteration / numMixStepIterations);
        octY++;

        if (octY >= octSize) {
          octY = 0;
          octZ++;

          if (octZ >= octSize) {
            octZ = 0;
            prevStep = step;
            amp = Math.pow(amp, fadeDegree);

            if (prevStep <= 1) {
              state = States.SCALING;
              this.progress = Progress.MIX;
            } else {
              state = States.MIX_STEP_INIT;
            }
          }
        }
      }; // hardcoded scaling of the image to make it more symethric


      var scaling = function scaling() {
        var low = [-1.0, -1.0, -1.0];
        var high = [0.5, 0.7, 1.0];

        for (var z = 0; z < imageSize; ++z) {
          var imageZ = image[z];

          for (var y = 0; y < imageSize; ++y) {
            var imageZY = imageZ[y];

            for (var x = 0; x < imageSize; ++x) {
              var imageZYX = imageZY[x];
              imageZYX[0] = ctx.X(low[0], high[0], imageZYX[0] * 0.5 + 0.5);
              imageZYX[1] = ctx.X(low[1], high[1], imageZYX[1] * 0.5 + 0.5);
              imageZYX[2] = ctx.X(low[2], high[2], imageZYX[2] * 0.5 + 0.5);
            }
          }
        }

        state = States.DATA_VIEWS;
        this.progress = Progress.SCALING;
      }; // filling zd DataViews


      var dataViews = function dataViews() {
        ctx.yd = imageSize;
        ctx.zd = [];

        for (var z = 0; z < imageSize; ++z) {
          var imageZ = image[z];
          var plane = new ArrayBuffer(imageSize * imageSize * 3);
          var view = new DataView(plane);

          for (var y = 0; y < imageSize; ++y) {
            var imageZY = imageZ[y];

            for (var x = 0; x < imageSize; ++x) {
              var imageZYX = imageZY[x];
              var rgbOffset = (y * imageSize + x) * 3;
              view.setUint8(rgbOffset + 0, Math.floor(clamp_(256.0 * (imageZYX[0] * 0.5 + 0.5) - 0.5, 0.0, 255.0)));
              view.setUint8(rgbOffset + 1, Math.floor(clamp_(256.0 * (imageZYX[1] * 0.5 + 0.5) - 0.5, 0.0, 255.0)));
              view.setUint8(rgbOffset + 2, Math.floor(clamp_(256.0 * (imageZYX[2] * 0.5 + 0.5) - 0.5, 0.0, 255.0)));
            }
          }

          ctx.zd[z] = view;
        }

        state = States.FINISHED;
        this.progress = Progress.DATA_VIEWS;
      };

      this.step = function () {
        switch (state) {
          case States.INITIAL_FILL:
            initialFill.call(this);
            break;

          case States.MIX_STEP_INIT:
            mixStepInit.call(this);
            break;

          case States.MIX_STEP_PROCESS:
            mixStepProcess.call(this);
            break;

          case States.SCALING:
            scaling.call(this);
            break;

          case States.DATA_VIEWS:
            dataViews.call(this);
            break;
        }

        return state == States.FINISHED;
      };
    };

    this.cf = document.createElement('canvas');
    this.cf.width = 0;
    this.cf.height = 0;
    this.bf = this.cf.getContext('2d');

    this.af = function (minWidth, minHeight) {
      if (this.cf.width < minWidth || this.cf.height < minHeight) {
        this.cf.width = minWidth;
        this.cf.height = minHeight;
        this.bf = this.cf.getContext('2d');
      }
    };

    this.effects = [];

    this.loadEffect = function (effectFilePath, onSuccessFunc, onFailFunc) {
      if (this.effects[effectFilePath] != undefined) {
        var effectModel = this.effects[effectFilePath];

        if (effectModel instanceof Array) {
          effectModel[effectModel.length] = [onSuccessFunc, onFailFunc];
          return;
        }

        onSuccessFunc(effectModel);
        return;
      }

      this.effects[effectFilePath] = [[onSuccessFunc, onFailFunc]];
      var request = new XMLHttpRequest();
      request.open("GET", effectFilePath, true);
      request.responseType = "text";
      request.ctx = this;

      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          var callbacks = this.ctx.effects[effectFilePath];

          if (request.status >= 200 && request.status < 300 || request.status == 304) {
            var evalText = "(function(ctx) {\n" + request.responseText + "\nreturn new NeutrinoEffect(ctx);\n})(this.ctx);";
            var effectModel = eval(evalText);
            this.ctx.effects[effectFilePath] = effectModel;
            callbacks.forEach(function (callback) {
              callback[0](effectModel);
            });
          } else {
            callbacks.forEach(function (callback) {
              callback[1]();
            });
          }
        }
      };

      request.send();
    };

    this.removeEffect = function (effectFilePath) {
      delete this.effects[effectFilePath];
    };
  }

  exports.Context = Context;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
}); //# sourceMappingURL=neutrinoparticles.umd.js.map

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcbmV1dHJpbm9wYXJ0aWNsZXMuanNcXG5ldXRyaW5vcGFydGljbGVzLnVtZC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJOZXV0cmlubyIsIkNvbnRleHQiLCJjdHgiLCJlcXVhbHYzXyIsImEiLCJiIiwiZXF1YWxxXyIsInIiLCJ5IiwicyIsInoiLCJjIiwiZCIsIkMiLCJEIiwiYWRkcSIsImFkZHFfIiwiZSIsImYiLCJBIiwiQiIsIm5mIiwib2YiLCJnIiwiaCIsIkUiLCJGIiwicmYiLCJzZiIsImkiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwiSCIsImRvdHFfIiwicSIsInQiLCJ1IiwidiIsInciLCJ4IiwiRyIsIkkiLCJheCIsImF5IiwiYXoiLCJieCIsImJ5IiwiYnoiLCJKIiwiSyIsIk1hdGgiLCJzcXJ0IiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwiYWIiLCJiYiIsInNsZXJwcSIsImNvc1RoZXRhIiwibmVncSIsIk51bWJlciIsIkVQU0lMT04iLCJNZCIsImFjb3NfIiwibXVscXNjYWxhciIsIm11bHFzY2FsYXJfIiwic2luXyIsInNsZXJwcV8iLCJhY29zIiwic2luIiwiY29zXyIsImNvcyIsInRhdXM4OCIsInNlZWQiLCJ2YWx1ZTAiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJzMCIsInJhbmQiLCJlbmdpbmUiLCJjYiIsInJhZGl1cyIsInJhbmR2MmdlbiIsInJhbmRvbSIsImdlbiIsIlBJIiwiZGIiLCJyYW5kdjNnZW4iLCJ0aGV0YSIsInNxcnRJbnZaMiIsInliIiwiTmQiLCJkaXNweCIsImRpc3B5IiwiZWIiLCJmYiIsImdiIiwiaGIiLCJuZWdxXyIsImliIiwiZGVncmVlcyIsImpiIiwicmFkaWFucyIsIkFlIiwidmFsdWUiLCJvYiIsIngyIiwieTIiLCJ6MiIsInh5IiwieHoiLCJ5eiIsInd6Iiwid3kiLCJ3eCIsInBiIiwidHIiLCJheGVzMnF1YXQiLCJxYiIsImhhIiwiYXhpc2FuZ2xlMnF1YXQiLCJheGlzYW5nbGUycXVhdF8iLCJyYiIsInF4IiwicXkiLCJxeiIsInF3IiwiaXgiLCJpeSIsIml6IiwiaXciLCJzYiIsInFheCIsInFheSIsInFheiIsInFhdyIsInFieCIsInFieSIsInFieiIsInFidyIsInRiIiwiSGYiLCJkZWdyZWUiLCJzY2FsZSIsInJhZCIsInViIiwidmIiLCJ2YWwiLCJmbG9vciIsInlkIiwiY29sb3JDb21wVG9IZXhfIiwidG9TdHJpbmciLCJmZiIsInJnYiIsInRmIiwidmYiLCJ4ZiIsInlmIiwiemYiLCJjYSIsIndmIiwiQWYiLCJCZiIsIkNmIiwiYWJzIiwiRGYiLCJfRGYiLCJ1ZiIsIkVmIiwiX0RmMiIsIndiIiwicmdiRGlzcCIsInZpZXciLCJ6ZCIsImdldFVpbnQ4IiwieGIiLCJzY2FsZWRQb3NYIiwic2NhbGVkUG9zWSIsInNjYWxlZFBvc1oiLCJmbG9vclgiLCJmbG9vclkiLCJmbG9vcloiLCJmcmFjWCIsImZyYWNZIiwiZnJhY1oiLCJub2lzZVgiLCJub2lzZVgxIiwibm9pc2VZIiwibm9pc2VZMSIsIm5vaXNlWiIsIm5vaXNlWjEiLCJ2YWx1ZTAwMCIsInZhbHVlMDAxIiwidmFsdWUwMTAiLCJ2YWx1ZTAxMSIsInZhbHVlMTAwIiwidmFsdWUxMDEiLCJ2YWx1ZTExMCIsInZhbHVlMTExIiwidmFsdWUwMCIsInZhbHVlMDEiLCJ2YWx1ZTEwIiwidmFsdWUxMSIsIkltYWdlRGVzYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJSZW5kZXJDYWxsIiwic3RhcnRJbmRleCIsIm51bUluZGljZXMiLCJyZW5kZXJTdHlsZUluZGV4IiwiU3ViUmVjdCIsIkNhbWVyYTJEIiwicHJvdG90eXBlIiwiQ2FtZXJhM0QiLCJzY3JlZW5TaXplIiwiaG9yaXpBbmdsZSIsIlFkIiwidGFuIiwidHJhbnNmb3JtIiwicG9zIiwic2l6ZSIsImluaXRpYWxpemVOb2lzZSIsInBhdGgiLCJvbmxvYWRjYWxsYmFjayIsIm9uZmFpbGNhbGxiYWNrIiwiYWxlcnQiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UGF0aCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJEYXRhVmlldyIsInBsYW5lU2l6ZSIsImdldFVpbnQzMiIsInBsYW5lSW5kZXgiLCJzZW5kIiwiTm9pc2VHZW5lcmF0b3IiLCJjYXRtdWxsUm9tXyIsInAwIiwicDEiLCJwMiIsInAzIiwiY2F0bXVsbFJvbXYzXyIsImNsYW1wXyIsImZyb20iLCJ0byIsImltYWdlU2l6ZSIsInRlbXBCdWZmZXIiLCJ0YXVzR2VuZXJhdG9yIiwiYW1wIiwiZmFkZURlZ3JlZSIsInByZXZTdGVwIiwic3RlcCIsIm9jdFNpemUiLCJvY3RTaXplMiIsIm9jdE1hc2tTaXplIiwib2N0UGl4ZWxzIiwib2N0WiIsIm9jdFkiLCJudW1NaXhTdGVwSXRlcmF0aW9ucyIsIm1peFN0ZXBJdGVyYXRpb24iLCJfb2N0U2l6ZSIsIlN0YXRlcyIsIklOSVRJQUxfRklMTCIsIk1JWF9TVEVQX0lOSVQiLCJNSVhfU1RFUF9QUk9DRVNTIiwiU0NBTElORyIsIkRBVEFfVklFV1MiLCJGSU5JU0hFRCIsIlByb2dyZXNzIiwiSU5JVCIsIk1JWCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJpbml0aWFsRmlsbCIsImltYWdlWiIsImltYWdlWlkiLCJpbWFnZVpZWCIsIm1peFN0ZXBJbml0IiwibWF4IiwibWl4U3RlcFByb2Nlc3MiLCJvY3RYIiwib2N0WjAiLCJvY3RaMSIsIm9jdFoyIiwib2N0WjMiLCJvY3RZMCIsIm9jdFkxIiwib2N0WTIiLCJvY3RZMyIsIm9jdFgwIiwib2N0WDEiLCJvY3RYMiIsIm9jdFgzIiwidmFsdWVzIiwiaW5aIiwiaW50ZXJwWiIsInZhbHVlc1AiLCJpblkiLCJpbnRlcnBZIiwiaW1hZ2VZIiwidmFsdWUzIiwiaW5YIiwiaW50ZXJwWCIsImltYWdlWCIsIm9jdFJlc3VsdCIsInJlc3VsdCIsImNsYW1wZWRSZXN1bHQiLCJwb3ciLCJzY2FsaW5nIiwibG93IiwiaGlnaCIsImRhdGFWaWV3cyIsInBsYW5lIiwiQXJyYXlCdWZmZXIiLCJyZ2JPZmZzZXQiLCJzZXRVaW50OCIsImNhbGwiLCJjZiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJmIiwiZ2V0Q29udGV4dCIsImFmIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJlZmZlY3RzIiwibG9hZEVmZmVjdCIsImVmZmVjdEZpbGVQYXRoIiwib25TdWNjZXNzRnVuYyIsIm9uRmFpbEZ1bmMiLCJlZmZlY3RNb2RlbCIsIkFycmF5IiwibGVuZ3RoIiwiY2FsbGJhY2tzIiwiZXZhbFRleHQiLCJyZXNwb25zZVRleHQiLCJldmFsIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwicmVtb3ZlRWZmZWN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsV0FBVUEsTUFBVixFQUFrQkMsT0FBbEIsRUFBMkI7QUFDM0IsU0FBT0MsT0FBUCxLQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFdBQWpELEdBQStERixPQUFPLENBQUNDLE9BQUQsQ0FBdEUsR0FDQSxPQUFPRSxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxNQUFNLENBQUNDLEdBQXZDLEdBQTZDRCxNQUFNLENBQUMsQ0FBQyxTQUFELENBQUQsRUFBY0gsT0FBZCxDQUFuRCxJQUNDRCxNQUFNLEdBQUdBLE1BQU0sSUFBSU0sSUFBbkIsRUFBeUJMLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDTyxRQUFQLEdBQWtCLEVBQW5CLENBRGpDLENBREE7QUFHQSxDQUpBLFVBSVEsVUFBVUwsT0FBVixFQUFtQjtBQUFFOztBQUU3QixXQUFTTSxPQUFULEdBQW1CO0FBQ2pCLFFB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QixJQUF5Qk4sT0FBTyxDQUFDTSxNQUFSLEdBQWlCLEdBQTFDLElBQWlETixPQUFPLENBQUNNLE1BQVIsSUFBa0IsR0FBdkUsRUFBNEU7QUFFMUUsZ0JBQUkwRyxRQUFRLEdBQUcsdUJBQ2ZoSCxPQUFPLENBQUNpSCxZQURPLEdBRWYsa0RBRkE7QUFHQSxnQkFBSUwsV0FBVyxHQUFHTSxJQUFJLENBQUNGLFFBQUQsQ0FBdEI7QUFDQSxpQkFBS3BXLEdBQUwsQ0FBUzJWLE9BQVQsQ0FBaUJFLGNBQWpCLElBQW1DRyxXQUFuQztBQUVBRyxZQUFBQSxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBVUMsUUFBVixFQUFvQjtBQUNwQ0EsY0FBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUixXQUFaO0FBQ0QsYUFGRDtBQUlELFdBWkQsTUFZTztBQUNMRyxZQUFBQSxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBVUMsUUFBVixFQUFvQjtBQUNwQ0EsY0FBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNELGFBRkQ7QUFHRDtBQUNGO0FBQ0YsT0F0QkQ7O0FBd0JBcEgsTUFBQUEsT0FBTyxDQUFDWSxJQUFSO0FBQ0QsS0E5Q0Q7O0FBZ0RBLFNBQUt5RyxZQUFMLEdBQW9CLFVBQVVaLGNBQVYsRUFBMEI7QUFDNUMsYUFBTyxLQUFLRixPQUFMLENBQWFFLGNBQWIsQ0FBUDtBQUNELEtBRkQ7QUFHRDs7QUFFRHBXLEVBQUFBLE9BQU8sQ0FBQ00sT0FBUixHQUFrQkEsT0FBbEI7QUFFQTJXLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQmxYLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU4SCxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUE3QztBQUVBLENBN3lDQSxDQUFELEVBOHlDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcclxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcclxuXHQoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLk5ldXRyaW5vID0ge30pKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHRmdW5jdGlvbiBDb250ZXh0KCkge1xyXG5cdCAgdmFyIGN0eCA9IHRoaXM7XHJcblxyXG5cdCAgdGhpcy5lcXVhbHYzXyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0ICAgIHJldHVybiBhWzBdID09IGJbMF0gJiYgYVsxXSA9PSBiWzFdICYmIGFbMl0gPT0gYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5lcXVhbHFfID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gPT0gYlswXSAmJiBhWzFdID09IGJbMV0gJiYgYVsyXSA9PSBiWzJdICYmIGFbM10gPT0gYlszXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5hID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSArIGJbMV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuYiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy55ID0gZnVuY3Rpb24gKHIsIGEsIHMpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBzO1xyXG5cdCAgICByWzFdID0gYVsxXSArIHM7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMueiA9IGZ1bmN0aW9uIChhLCBzKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIHMsIGFbMV0gKyBzXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5jID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSArIGJbMV07XHJcblx0ICAgIHJbMl0gPSBhWzJdICsgYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5kID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5DID0gZnVuY3Rpb24gKHIsIGEsIHMpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBzO1xyXG5cdCAgICByWzFdID0gYVsxXSArIHM7XHJcblx0ICAgIHJbMl0gPSBhWzJdICsgcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5EID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgcywgYVsxXSArIHMsIGFbMl0gKyBzXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5hZGRxID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSArIGJbMV07XHJcblx0ICAgIHJbMl0gPSBhWzJdICsgYlsyXTtcclxuXHQgICAgclszXSA9IGFbM10gKyBiWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmFkZHFfID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdLCBhWzNdICsgYlszXV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuZSA9IGZ1bmN0aW9uIChyLCBhLCBiKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdIC0gYlswXTtcclxuXHQgICAgclsxXSA9IGFbMV0gLSBiWzFdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmYgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuQSA9IGZ1bmN0aW9uIChyLCBhLCBzKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdIC0gcztcclxuXHQgICAgclsxXSA9IGFbMV0gLSBzO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkIgPSBmdW5jdGlvbiAoYSwgcykge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLSBzLCBhWzFdIC0gc107XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMubmYgPSBmdW5jdGlvbiAociwgcywgYSkge1xyXG5cdCAgICByWzBdID0gcyAtIGFbMF07XHJcblx0ICAgIHJbMV0gPSBzIC0gYVsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5vZiA9IGZ1bmN0aW9uIChzLCBhKSB7XHJcblx0ICAgIHJldHVybiBbcyAtIGFbMF0sIHMgLSBhWzFdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5nID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gLSBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSAtIGJbMV07XHJcblx0ICAgIHJbMl0gPSBhWzJdIC0gYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5oID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5FID0gZnVuY3Rpb24gKHIsIGEsIHMpIHtcclxuXHQgICAgclswXSA9IGFbMF0gLSBzO1xyXG5cdCAgICByWzFdID0gYVsxXSAtIHM7XHJcblx0ICAgIHJbMl0gPSBhWzJdIC0gcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5GID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC0gcywgYVsxXSAtIHMsIGFbMl0gLSBzXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yZiA9IGZ1bmN0aW9uIChyLCBzLCBhKSB7XHJcblx0ICAgIHJbMF0gPSBzIC0gYVswXTtcclxuXHQgICAgclsxXSA9IHMgLSBhWzFdO1xyXG5cdCAgICByWzJdID0gcyAtIGFbMl07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuc2YgPSBmdW5jdGlvbiAocywgYSkge1xyXG5cdCAgICByZXR1cm4gW3MgLSBhWzBdLCBzIC0gYVsxXSwgcyAtIGFbMl1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmkgPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAqIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdICogYlsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5qID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICogYlswXSwgYVsxXSAqIGJbMV1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmsgPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAqIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdICogYlsxXTtcclxuXHQgICAgclsyXSA9IGFbMl0gKiBiWzJdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmwgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gKiBiWzBdLCBhWzFdICogYlsxXSwgYVsyXSAqIGJbMl1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLm0gPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAvIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gYlsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5uID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC8gYlswXSwgYVsxXSAvIGJbMV1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLm8gPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAvIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gYlsxXTtcclxuXHQgICAgclsyXSA9IGFbMl0gLyBiWzJdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnAgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLyBiWzBdLCBhWzFdIC8gYlsxXSwgYVsyXSAvIGJbMl1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkggPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmRvdHFfID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnEgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAqIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdICogcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICogcywgYVsxXSAqIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnMgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAvIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy50ID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC8gcywgYVsxXSAvIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnUgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAqIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdICogcztcclxuXHQgICAgclsyXSA9IGFbMl0gKiBzO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnYgPSBmdW5jdGlvbiAoYSwgcykge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gKiBzLCBhWzFdICogcywgYVsyXSAqIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLncgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAvIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gcztcclxuXHQgICAgclsyXSA9IGFbMl0gLyBzO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnggPSBmdW5jdGlvbiAoYSwgcykge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLyBzLCBhWzFdIC8gcywgYVsyXSAvIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnkgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSArIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdICsgcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy56ID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgcywgYVsxXSArIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkEgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAtIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdIC0gcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5CID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC0gcywgYVsxXSAtIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkcgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5IID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5JID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgdmFyIGF4ID0gYVswXSxheSA9IGFbMV0sYXogPSBhWzJdO1xyXG5cdCAgICB2YXIgYnggPSBiWzBdLGJ5ID0gYlsxXSxieiA9IGJbMl07XHJcblxyXG5cdCAgICByWzBdID0gYXkgKiBieiAtIGF6ICogYnk7XHJcblx0ICAgIHJbMV0gPSBheiAqIGJ4IC0gYXggKiBiejtcclxuXHQgICAgclsyXSA9IGF4ICogYnkgLSBheSAqIGJ4O1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkogPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICB2YXIgYXggPSBhWzBdLGF5ID0gYVsxXSxheiA9IGFbMl07XHJcblx0ICAgIHZhciBieCA9IGJbMF0sYnkgPSBiWzFdLGJ6ID0gYlsyXTtcclxuXHJcblx0ICAgIHJldHVybiBbYXkgKiBieiAtIGF6ICogYnksXHJcblx0ICAgIGF6ICogYnggLSBheCAqIGJ6LFxyXG5cdCAgICBheCAqIGJ5IC0gYXkgKiBieF07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuSyA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBhWzBdICogYVswXSArIGFbMV0gKiBhWzFdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLk0gPSBmdW5jdGlvbiAociwgYSkge1xyXG5cdCAgICBjdHgucShyLCBhLCAxLjAgLyBjdHguSyhhKSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTiA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBjdHgucihhLCAxLjAgLyBjdHguSyhhKSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTyA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5QID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5RID0gZnVuY3Rpb24gKHIsIGEpIHtcclxuXHQgICAgY3R4LnUociwgYSwgMS4wIC8gY3R4Lk8oYSkpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLlIgPSBmdW5jdGlvbiAoYSkge1xyXG5cdCAgICByZXR1cm4gY3R4LnYoYSwgMS4wIC8gY3R4Lk8oYSkpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLlMgPSBmdW5jdGlvbiAociwgYSkge1xyXG5cdCAgICByWzBdID0gYVswXTtcclxuXHQgICAgclsxXSA9IGFbMV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuVCA9IGZ1bmN0aW9uIChyLCBhKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXTtcclxuXHQgICAgclsyXSA9IGFbMl07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuVSA9IGZ1bmN0aW9uIChyLCBhKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXTtcclxuXHQgICAgclsyXSA9IGFbMl07XHJcblx0ICAgIHJbM10gPSBhWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLlYgPSBmdW5jdGlvbiAociwgeCwgeSkge1xyXG5cdCAgICByWzBdID0geDtcclxuXHQgICAgclsxXSA9IHk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuVyA9IGZ1bmN0aW9uIChyLCB4LCB5LCB6KSB7XHJcblx0ICAgIHJbMF0gPSB4O1xyXG5cdCAgICByWzFdID0geTtcclxuXHQgICAgclsyXSA9IHo7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuWCA9IGZ1bmN0aW9uIChhLCBiLCBpKSB7XHJcblx0ICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuWSA9IGZ1bmN0aW9uIChyLCBhLCBiLCBpKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdICsgKGJbMF0gLSBhWzBdKSAqIGk7XHJcblx0ICAgIHJbMV0gPSBhWzFdICsgKGJbMV0gLSBhWzFdKSAqIGk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuWiA9IGZ1bmN0aW9uIChhLCBiLCBpKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIChiWzBdIC0gYVswXSkgKiBpLFxyXG5cdCAgICBhWzFdICsgKGJbMV0gLSBhWzFdKSAqIGldO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmFiID0gZnVuY3Rpb24gKHIsIGEsIGIsIGkpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyAoYlswXSAtIGFbMF0pICogaTtcclxuXHQgICAgclsxXSA9IGFbMV0gKyAoYlsxXSAtIGFbMV0pICogaTtcclxuXHQgICAgclsyXSA9IGFbMl0gKyAoYlsyXSAtIGFbMl0pICogaTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5iYiA9IGZ1bmN0aW9uIChhLCBiLCBpKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIChiWzBdIC0gYVswXSkgKiBpLFxyXG5cdCAgICBhWzFdICsgKGJbMV0gLSBhWzFdKSAqIGksXHJcblx0ICAgIGFbMl0gKyAoYlsyXSAtIGFbMl0pICogaV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuc2xlcnBxID0gZnVuY3Rpb24gKHIsIHgsIHksIGEpIHtcclxuXHQgICAgdmFyIGNvc1RoZXRhID0gY3R4LmRvdHFfKHgsIHkpO1xyXG5cclxuXHQgICAgdmFyIHogPSBbXTtcclxuXHJcblx0ICAgIGlmIChjb3NUaGV0YSA8IDApIHtcclxuXHQgICAgICBjdHgubmVncSh6LCB5KTtcclxuXHQgICAgICBjb3NUaGV0YSA9IC1jb3NUaGV0YTtcclxuXHQgICAgfSBlbHNlXHJcblx0ICAgIHtcclxuXHQgICAgICBjdHguVSh6LCB5KTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKDEuMCAtIGNvc1RoZXRhIDwgTnVtYmVyLkVQU0lMT04pIHtcclxuXHQgICAgICByWzBdID0gY3R4LlgoeFswXSwgeVswXSwgYSk7XHJcblx0ICAgICAgclsxXSA9IGN0eC5YKHhbMV0sIHlbMV0sIGEpO1xyXG5cdCAgICAgIHJbMl0gPSBjdHguWCh4WzJdLCB5WzJdLCBhKTtcclxuXHQgICAgICByWzNdID0gY3R4LlgoeFszXSwgeVszXSwgYSk7XHJcblx0ICAgIH0gZWxzZVxyXG5cdCAgICB7XHJcblx0ICAgICAgdmFyIE1kID0gY3R4LmFjb3NfKGNvc1RoZXRhKTtcclxuXHJcblx0ICAgICAgY3R4Lm11bHFzY2FsYXIociwgY3R4LmFkZHFfKGN0eC5tdWxxc2NhbGFyXyh4LCBjdHguc2luXygoMS4wIC0gYSkgKiBNZCkpLCBjdHgubXVscXNjYWxhcl8oeiwgY3R4LnNpbl8oYSAqIE1kKSkpLFxyXG5cdCAgICAgIDEuMCAvIGN0eC5zaW5fKE1kKSk7XHJcblx0ICAgIH1cclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5zbGVycHFfID0gZnVuY3Rpb24gKHgsIHksIGEpIHtcclxuXHQgICAgdmFyIHIgPSBbXTtcclxuXHQgICAgc2xlcnBxKHIsIHgsIHksIGEpO1xyXG5cdCAgICByZXR1cm4gcjtcclxuXHQgIH07XHJcblxyXG5cdCAgLy90cmlnb25vbWV0cnlcclxuXHJcblx0ICB0aGlzLmFjb3NfID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIE1hdGguYWNvcyhhKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5zaW5fID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIE1hdGguc2luKGEpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmNvc18gPSBmdW5jdGlvbiAoYSkge1xyXG5cdCAgICByZXR1cm4gTWF0aC5jb3MoYSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIC8vIHJhbmRvbVxyXG5cclxuXHQgIHRoaXMudGF1czg4ID0gZnVuY3Rpb24gKHNlZWQpXHJcblx0ICB7XHJcblx0ICAgIGlmICghc2VlZClcclxuXHQgICAgc2VlZCA9IDA7XHJcblxyXG5cdCAgICB2YXIgdmFsdWUwLCB2YWx1ZTEsIHZhbHVlMjtcclxuXHJcblx0ICAgIHRoaXMuc2VlZCA9IGZ1bmN0aW9uIChzMCkge1xyXG5cdCAgICAgIHMwICY9IDB4RkZGRkZGRkY7XHJcblxyXG5cdCAgICAgIHZhbHVlMCA9IHMwIDwgMiA/IHMwICsgMiA6IHMwO1xyXG5cdCAgICAgIHZhbHVlMSA9IHMwIDwgOCA/IHMwICsgOCA6IHMwO1xyXG5cdCAgICAgIHZhbHVlMiA9IHMwIDwgMTYgPyBzMCArIDE2IDogczA7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB0aGlzLnJhbmQgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgdmFyIGIgPSAoKHZhbHVlMCA8PCAxMyBeIHZhbHVlMCkgJiAweEZGRkZGRkZGKSA+Pj4gMTk7XHJcblx0ICAgICAgdmFsdWUwID0gKCh2YWx1ZTAgJiAweEZGRkZGRkZFKSA8PCAxMiBeIGIpID4+PiAwO1xyXG5cclxuXHQgICAgICBiID0gKCh2YWx1ZTEgPDwgMiBeIHZhbHVlMSkgJiAweEZGRkZGRkZGKSA+Pj4gMjU7XHJcblx0ICAgICAgdmFsdWUxID0gKCh2YWx1ZTEgJiAweEZGRkZGRkY4KSA8PCA0IF4gYikgPj4+IDA7XHJcblxyXG5cdCAgICAgIGIgPSAoKHZhbHVlMiA8PCAzIF4gdmFsdWUyKSAmIDB4RkZGRkZGRkYpID4+PiAxMTtcclxuXHQgICAgICB2YWx1ZTIgPSAoKHZhbHVlMiAmIDB4RkZGRkZGRjApIDw8IDE3IF4gYikgPj4+IDA7XHJcblxyXG5cdCAgICAgIHZhciBlbmdpbmUgPSAodmFsdWUwIF4gdmFsdWUxIF4gdmFsdWUyKSA+Pj4gMDtcclxuXHQgICAgICByZXR1cm4gZW5naW5lIC8gNDI5NDk2NzI5Ni4wO1xyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgdGhpcy5zZWVkKHNlZWQpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmNiID0gZnVuY3Rpb24gKHIsIHJhZGl1cykge1xyXG5cdCAgICB0aGlzLnJhbmR2MmdlbihyLCByYWRpdXMsIGZ1bmN0aW9uICgpIHtyZXR1cm4gTWF0aC5yYW5kb20oKTt9KTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yYW5kdjJnZW4gPSBmdW5jdGlvbiAociwgcmFkaXVzLCBnZW4pIHtcclxuXHQgICAgdmFyIE1kID0gZ2VuKCkgKiBNYXRoLlBJICogMi4wO1xyXG5cdCAgICByWzBdID0gcmFkaXVzICogY3R4LmNvc18oTWQpO1xyXG5cdCAgICByWzFdID0gcmFkaXVzICogY3R4LnNpbl8oTWQpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmRiID0gZnVuY3Rpb24gKHIsIHJhZGl1cykge1xyXG5cdCAgICB0aGlzLnJhbmR2M2dlbihyLCByYWRpdXMsIGZ1bmN0aW9uICgpIHtyZXR1cm4gTWF0aC5yYW5kb20oKTt9KTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yYW5kdjNnZW4gPSBmdW5jdGlvbiAociwgcmFkaXVzLCBnZW4pIHtcclxuXHQgICAgdmFyIHRoZXRhID0gZ2VuKCkgKiBNYXRoLlBJICogMi4wO1xyXG5cdCAgICB2YXIgeiA9IC0xLjAgKyBnZW4oKSAqIDIuMDtcclxuXHQgICAgdmFyIHNxcnRJbnZaMiA9IHJhZGl1cyAqIE1hdGguc3FydCgxLjAgLSB6ICogeik7XHJcblx0ICAgIHJbMF0gPSBzcXJ0SW52WjIgKiBjdHguY29zXyh0aGV0YSk7XHJcblx0ICAgIHJbMV0gPSBzcXJ0SW52WjIgKiBjdHguc2luXyh0aGV0YSk7XHJcblx0ICAgIHJbMl0gPSByYWRpdXMgKiB6O1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnliID0gZnVuY3Rpb24gKHIsIHgsIHksIE5kLCBnZW4pIHtcclxuXHQgICAgdmFyIGRpc3B4ID0geCArIGdlbigpICogTmRbMF07XHJcblx0ICAgIHZhciBkaXNweSA9IHkgKyBnZW4oKSAqIE5kWzFdO1xyXG5cdCAgICBjdHguVihyLCBkaXNweCwgZGlzcHkpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmViID0gZnVuY3Rpb24gKHIsIGEpIHtcclxuXHQgICAgY3R4LlYoLWFbMF0sIC1hWzFdKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5mYiA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBbLWFbMF0sIC1hWzFdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5nYiA9IGZ1bmN0aW9uIChyLCBhKSB7XHJcblx0ICAgIGN0eC5XKC1hWzBdLCAtYVsxXSwgLWFbMl0pO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmhiID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIFstYVswXSwgLWFbMV0sIC1hWzJdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5uZWdxID0gZnVuY3Rpb24gKHIsIGEpIHtcclxuXHQgICAgclswXSA9IC1hWzBdO1xyXG5cdCAgICByWzFdID0gLWFbMV07XHJcblx0ICAgIHJbMl0gPSAtYVsyXTtcclxuXHQgICAgclszXSA9IC1hWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLm5lZ3FfID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIFstYVswXSwgLWFbMV0sIC1hWzJdLCAtYVszXV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuaWIgPSBmdW5jdGlvbiAoZGVncmVlcykge1xyXG5cdCAgICByZXR1cm4gZGVncmVlcyAvIDE4MC4wICogTWF0aC5QSTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5qYiA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XHJcblx0ICAgIHJldHVybiByYWRpYW5zIC8gTWF0aC5QSSAqIDE4MC4wO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkFlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0ICAgIHJldHVybiB2YWx1ZSA8IDAgPyAtMSA6IDE7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMub2IgPSBmdW5jdGlvbiAoeCwgeSwgeiwgcSkge1xyXG5cdCAgICB2YXIgeDIgPSAyLjAgKiBxWzBdICogcVswXTtcclxuXHQgICAgdmFyIHkyID0gMi4wICogcVsxXSAqIHFbMV07XHJcblx0ICAgIHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdCAgICB2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHQgICAgdmFyIHh6ID0gMi4wICogcVswXSAqIHFbMl07XHJcblx0ICAgIHZhciB5eiA9IDIuMCAqIHFbMV0gKiBxWzJdO1xyXG5cdCAgICB2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHQgICAgdmFyIHd5ID0gMi4wICogcVszXSAqIHFbMV07XHJcblx0ICAgIHZhciB3eCA9IDIuMCAqIHFbM10gKiBxWzBdO1xyXG5cclxuXHQgICAgeFswXSA9IDEuMCAtIHkyIC0gejI7XHJcblx0ICAgIHhbMV0gPSB4eSArIHd6O1xyXG5cdCAgICB4WzJdID0geHogLSB3eTtcclxuXHJcblx0ICAgIHlbMF0gPSB4eSAtIHd6O1xyXG5cdCAgICB5WzFdID0gMS4wIC0geDIgLSB6MjtcclxuXHQgICAgeVsyXSA9IHl6ICsgd3g7XHJcblxyXG5cdCAgICB6WzBdID0geHogKyB3eTtcclxuXHQgICAgelsxXSA9IHl6IC0gd3g7XHJcblx0ICAgIHpbMl0gPSAxLjAgLSB4MiAtIHkyO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnBiID0gZnVuY3Rpb24gKHEsIHgsIHksIHopIHtcclxuXHQgICAgdmFyIHRyID0geFswXSArIHlbMV0gKyB6WzJdO1xyXG5cclxuXHQgICAgaWYgKHRyID4gMCkge1xyXG5cdCAgICAgIHZhciBTID0gTWF0aC5zcXJ0KHRyICsgMS4wKSAqIDI7XHJcblx0ICAgICAgcVszXSA9IDAuMjUgKiBTO1xyXG5cdCAgICAgIHFbMF0gPSAoeVsyXSAtIHpbMV0pIC8gUztcclxuXHQgICAgICBxWzFdID0gKHpbMF0gLSB4WzJdKSAvIFM7XHJcblx0ICAgICAgcVsyXSA9ICh4WzFdIC0geVswXSkgLyBTO1xyXG5cdCAgICB9IGVsc2UgaWYgKHhbMF0gPiB5WzFdICYgeFswXSA+IHpbMl0pIHtcclxuXHQgICAgICB2YXIgUyA9IE1hdGguc3FydCgxLjAgKyB4WzBdIC0geVsxXSAtIHpbMl0pICogMjtcclxuXHQgICAgICBxWzNdID0gKHlbMl0gLSB6WzFdKSAvIFM7XHJcblx0ICAgICAgcVswXSA9IDAuMjUgKiBTO1xyXG5cdCAgICAgIHFbMV0gPSAoeFsxXSArIHlbMF0pIC8gUztcclxuXHQgICAgICBxWzJdID0gKHpbMF0gKyB4WzJdKSAvIFM7XHJcblx0ICAgIH0gZWxzZSBpZiAoeVsxXSA+IHpbMl0pIHtcclxuXHQgICAgICB2YXIgUyA9IE1hdGguc3FydCgxLjAgKyB5WzFdIC0geFswXSAtIHpbMl0pICogMjtcclxuXHQgICAgICBxWzNdID0gKHpbMF0gLSB4WzJdKSAvIFM7XHJcblx0ICAgICAgcVswXSA9ICh4WzFdICsgeVswXSkgLyBTO1xyXG5cdCAgICAgIHFbMV0gPSAwLjI1ICogUztcclxuXHQgICAgICBxWzJdID0gKHlbMl0gKyB6WzFdKSAvIFM7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgdmFyIFMgPSBNYXRoLnNxcnQoMS4wICsgelsyXSAtIHhbMF0gLSB5WzFdKSAqIDI7XHJcblx0ICAgICAgcVszXSA9ICh4WzFdIC0geVswXSkgLyBTO1xyXG5cdCAgICAgIHFbMF0gPSAoelswXSArIHhbMl0pIC8gUztcclxuXHQgICAgICBxWzFdID0gKHlbMl0gKyB6WzFdKSAvIFM7XHJcblx0ICAgICAgcVsyXSA9IDAuMjUgKiBTO1xyXG5cdCAgICB9XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuIC8qKi9heGVzMnF1YXQgPSB0aGlzLnBiO1xyXG5cclxuXHQgIHRoaXMucWIgPSBmdW5jdGlvbiAocSwgeCwgYSkge1xyXG5cdCAgICB2YXIgaGEgPSBjdHguaWIoYSkgKiAwLjUscyA9IE1hdGguc2luKGhhKTtcclxuXHQgICAgcVswXSA9IHhbMF0gKiBzO1xyXG5cdCAgICBxWzFdID0geFsxXSAqIHM7XHJcblx0ICAgIHFbMl0gPSB4WzJdICogcztcclxuXHQgICAgcVszXSA9IE1hdGguY29zKGhhKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy4gLyoqL2F4aXNhbmdsZTJxdWF0ID0gdGhpcy5xYjtcclxuXHJcblx0ICB0aGlzLmF4aXNhbmdsZTJxdWF0XyA9IGZ1bmN0aW9uICh4LCBhKSB7XHJcblx0ICAgIHZhciBoYSA9IGN0eC5pYihhKSAqIDAuNSxzID0gTWF0aC5zaW4oaGEpO1xyXG5cdCAgICByZXR1cm4gW3hbMF0gKiBzLCB4WzFdICogcywgeFsyXSAqIHMsIGN0eC5jb3NfKGhhKV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuIC8qKi9heGlzYW5nbGUycXVhdF8gPSB0aGlzLmF4aXNhbmdsZTJxdWF0XztcclxuXHJcblx0ICB0aGlzLnJiID0gZnVuY3Rpb24gKHIsIHYsIHEpIHtcclxuXHQgICAgdmFyIHggPSB2WzBdO1xyXG5cdCAgICB2YXIgeSA9IHZbMV07XHJcblx0ICAgIHZhciB6ID0gdlsyXTtcclxuXHJcblx0ICAgIHZhciBxeCA9IHFbMF07XHJcblx0ICAgIHZhciBxeSA9IHFbMV07XHJcblx0ICAgIHZhciBxeiA9IHFbMl07XHJcblx0ICAgIHZhciBxdyA9IHFbM107XHJcblxyXG5cdCAgICB2YXIgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XHJcblx0ICAgIHZhciBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcclxuXHQgICAgdmFyIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xyXG5cdCAgICB2YXIgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xyXG5cclxuXHQgICAgclswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XHJcblx0ICAgIHJbMV0gPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6O1xyXG5cdCAgICByWzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5zYiA9IGZ1bmN0aW9uIChyLCBhLCBiKSB7XHJcblx0ICAgIHZhciBxYXggPSBhWzBdLHFheSA9IGFbMV0scWF6ID0gYVsyXSxxYXcgPSBhWzNdO1xyXG5cdCAgICB2YXIgcWJ4ID0gYlswXSxxYnkgPSBiWzFdLHFieiA9IGJbMl0scWJ3ID0gYlszXTtcclxuXHJcblx0ICAgIHJbMF0gPSBxYXggKiBxYncgKyBxYXcgKiBxYnggKyBxYXkgKiBxYnogLSBxYXogKiBxYnk7XHJcblx0ICAgIHJbMV0gPSBxYXkgKiBxYncgKyBxYXcgKiBxYnkgKyBxYXogKiBxYnggLSBxYXggKiBxYno7XHJcblx0ICAgIHJbMl0gPSBxYXogKiBxYncgKyBxYXcgKiBxYnogKyBxYXggKiBxYnkgLSBxYXkgKiBxYng7XHJcblx0ICAgIHJbM10gPSBxYXcgKiBxYncgLSBxYXggKiBxYnggLSBxYXkgKiBxYnkgLSBxYXogKiBxYno7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMubXVscXNjYWxhciA9IGZ1bmN0aW9uIChyLCBhLCBzKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdICogcztcclxuXHQgICAgclsxXSA9IGFbMV0gKiBzO1xyXG5cdCAgICByWzJdID0gYVsyXSAqIHM7XHJcblx0ICAgIHJbM10gPSBhWzNdICogcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5tdWxxc2NhbGFyXyA9IGZ1bmN0aW9uIChhLCBzKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSAqIHMsIGFbMV0gKiBzLCBhWzJdICogcywgYVszXSAqIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnRiID0gZnVuY3Rpb24gKHIsIEhmLCBkZWdyZWUsIHNjYWxlLCB2KSB7XHJcblx0ICAgIHZhciByYWQgPSBjdHguaWIoZGVncmVlKTtcclxuXHQgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCkgKiBzY2FsZTtcclxuXHQgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCkgKiBzY2FsZTtcclxuXHQgICAgclswXSA9IEhmWzBdICsgY29zICogdlswXSAtIHNpbiAqIHZbMV07XHJcblx0ICAgIHJbMV0gPSBIZlsxXSArIHNpbiAqIHZbMF0gKyBjb3MgKiB2WzFdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnViID0gZnVuY3Rpb24gKHIsIEhmLCBkZWdyZWUsIHNjYWxlLCB2KSB7XHJcblx0ICAgIHZhciByYWQgPSBjdHguaWIoZGVncmVlKTtcclxuXHQgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCkgLyBzY2FsZTtcclxuXHQgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCkgLyBzY2FsZTtcclxuXHJcblx0ICAgIHJbMF0gPSBjb3MgKiB2WzBdICsgc2luICogdlsxXSAtIEhmWzBdICogY29zIC0gSGZbMV0gKiBzaW47XHJcblx0ICAgIHJbMV0gPSBjb3MgKiB2WzFdIC0gc2luICogdlswXSArIEhmWzBdICogc2luIC0gSGZbMV0gKiBjb3M7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMudmIgPSBmdW5jdGlvbiAodmFsKSB7XHJcblx0ICAgIGlmICh2YWwgPCAwKVxyXG5cdCAgICByZXR1cm4gTWF0aC5mbG9vcihjdHgueWQgLSAxICsgdmFsICUgY3R4LnlkKTtlbHNlXHJcblxyXG5cdCAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwgJSBjdHgueWQpO1xyXG5cdCAgfTtcclxuXHJcblx0ICBmdW5jdGlvbiBjb2xvckNvbXBUb0hleF8oYykge1xyXG5cdCAgICByZXR1cm4gYyA8IDE2ID8gXCIwXCIgKyBjLnRvU3RyaW5nKDE2KSA6IGMudG9TdHJpbmcoMTYpO1xyXG5cdCAgfVxyXG5cclxuXHQgIHRoaXMuZmYgPSBmdW5jdGlvbiAocmdiKSB7XHJcblx0ICAgIHJldHVybiBcIiNcIiArXHJcblx0ICAgIGNvbG9yQ29tcFRvSGV4XyhNYXRoLmZsb29yKHJnYlswXSAqIDI1NSkpICtcclxuXHQgICAgY29sb3JDb21wVG9IZXhfKE1hdGguZmxvb3IocmdiWzFdICogMjU1KSkgK1xyXG5cdCAgICBjb2xvckNvbXBUb0hleF8oTWF0aC5mbG9vcihyZ2JbMl0gKiAyNTUpKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy50ZiA9IGZ1bmN0aW9uICh2ZiwgeGYsIHlmLCBhLCBiLCB6Zikge1xyXG5cdCAgICB2YXIgY2EgPSBjdHguZihhLCB2Zik7XHJcblx0ICAgIHZhciBjYiA9IGN0eC5mKGIsIHZmKTtcclxuXHJcblx0ICAgIHZhciB3ZiA9IGN0eC5yKHhmLCB5Zik7XHJcblxyXG5cdCAgICBpZiAoY2FbMF0gPCAtd2ZbMF0gJiYgY2JbMF0gPCAtd2ZbMF0gfHxcclxuXHQgICAgY2FbMF0gPiB3ZlswXSAmJiBjYlswXSA+IHdmWzBdIHx8XHJcblx0ICAgIGNhWzFdIDwgLXdmWzFdICYmIGNiWzFdIDwgLXdmWzFdIHx8XHJcblx0ICAgIGNhWzFdID4gd2ZbMV0gJiYgY2JbMV0gPiB3ZlsxXSlcclxuXHQgICAge1xyXG5cdCAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKGNhWzBdIDw9IHdmWzBdICYmIGNhWzBdID49IC13ZlswXSAmJiBjYVsxXSA8PSB3ZlsxXSAmJiBjYVsxXSA+PSAtd2ZbMV0pXHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cclxuXHQgICAgaWYgKHpmIDwgMC4wMDAwMDEpXHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHJcblx0ICAgIGlmIChjYlswXSA8PSB3ZlswXSAmJiBjYlswXSA+PSAtd2ZbMF0gJiYgY2JbMV0gPD0gd2ZbMV0gJiYgY2JbMV0gPj0gLXdmWzFdKVxyXG5cdCAgICByZXR1cm4gdHJ1ZTtcclxuXHJcblx0ICAgIHZhciBBZiA9IGN0eC5mKGIsIGEpO2N0eC5zKEFmLCBBZiwgemYpO1xyXG5cdCAgICB2YXIgQmYgPSBbLUFmWzFdLCBBZlswXV07XHJcblx0ICAgIHZhciBDZiA9IE1hdGguYWJzKGN0eC5HKEJmLCBjYikpO1xyXG5cclxuXHQgICAgaWYgKE1hdGguYWJzKGN0eC5HKEJmLCB3ZikpID49IENmKSB7XHJcblx0ICAgICAgdmFyIERmID0gWy14ZlsxXSwgeGZbMF1dO1xyXG5cdCAgICAgIGlmIChjdHguRyhEZiwgY2EpICogY3R4LkcoRGYsIGNiKSA8PSAwLjApIHtcclxuXHQgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfSBlbHNlIGlmIChNYXRoLmFicyhjdHguRyhCZiwgW3dmWzBdLCAtd2ZbMV1dKSkgPj0gQ2YpIHtcclxuXHQgICAgICB2YXIgX0RmID0gW3hmWzFdLCB4ZlswXV07XHJcblx0ICAgICAgaWYgKGN0eC5HKF9EZiwgY2EpICogY3R4LkcoX0RmLCBjYikgPD0gMC4wKSB7XHJcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy51ZiA9IGZ1bmN0aW9uICh2ZiwgeGYsIHlmLCBhLCBiLCB6ZiwgRWYpIHtcclxuXHQgICAgdmFyIGNhID0gY3R4LmYoYSwgdmYpO1xyXG5cdCAgICB2YXIgY2IgPSBjdHguZihiLCB2Zik7XHJcblxyXG5cdCAgICB2YXIgd2YgPSBjdHgucih4ZiwgeWYpO1xyXG5cclxuXHQgICAgaWYgKHpmIDwgMC4wMDAwMDEpXHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHJcblx0ICAgIGlmIChjYVswXSA8IC13ZlswXSAmJiBjYlswXSA8IC13ZlswXSB8fFxyXG5cdCAgICBjYVswXSA+IHdmWzBdICYmIGNiWzBdID4gd2ZbMF0gfHxcclxuXHQgICAgY2FbMV0gPCAtd2ZbMV0gJiYgY2JbMV0gPCAtd2ZbMV0gfHxcclxuXHQgICAgY2FbMV0gPiB3ZlsxXSAmJiBjYlsxXSA+IHdmWzFdKVxyXG5cdCAgICB7XHJcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgQWYgPSBjdHguZihiLCBhKTtjdHgucyhBZiwgQWYsIHpmKTtcclxuXHQgICAgdmFyIEJmID0gWy1BZlsxXSwgQWZbMF1dO1xyXG5cdCAgICB2YXIgQ2YgPSBNYXRoLmFicyhjdHguRyhCZiwgY2IpKTtcclxuXHJcblx0ICAgIGlmIChFZikge1xyXG5cdCAgICAgIGlmIChNYXRoLmFicyhjdHguRyhCZiwgd2YpKSA+PSBDZikge1xyXG5cdCAgICAgICAgdmFyIERmID0gWy14ZlsxXSwgeGZbMF1dO1xyXG5cdCAgICAgICAgaWYgKGN0eC5HKERmLCBjYSkgKiBjdHguRyhEZiwgY2IpIDw9IDAuMCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgaWYgKE1hdGguYWJzKGN0eC5HKEJmLCBbd2ZbMF0sIC13ZlsxXV0pKSA+PSBDZikge1xyXG5cdCAgICAgICAgdmFyIF9EZjIgPSBbeGZbMV0sIHhmWzBdXTtcclxuXHQgICAgICAgIGlmIChjdHguRyhfRGYyLCBjYSkgKiBjdHguRyhfRGYyLCBjYikgPD0gMC4wKSB7XHJcblx0ICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLndiID0gZnVuY3Rpb24gKHIsIHgsIHksIHopIHtcclxuXHQgICAgdmFyIHJnYkRpc3AgPSAzICogKHkgKiBjdHgueWQgKyB4KTtcclxuXHQgICAgdmFyIHZpZXcgPSBjdHguemRbel07XHJcblxyXG5cdCAgICByWzBdID0gdmlldy5nZXRVaW50OChyZ2JEaXNwKTtcclxuXHQgICAgclsxXSA9IHZpZXcuZ2V0VWludDgocmdiRGlzcCArIDEpO1xyXG5cdCAgICByWzJdID0gdmlldy5nZXRVaW50OChyZ2JEaXNwICsgMik7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMueGIgPSBmdW5jdGlvbiAociwgSGYpIHtcclxuXHQgICAgaWYgKGN0eC56ZCA9PSBudWxsKSB7XHJcblx0ICAgICAgY3R4LlcociwgMTI4LCAxMjgsIDEyOCk7XHJcblx0ICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgc2NhbGVkUG9zWCA9IEhmWzBdICogY3R4LnlkO1xyXG5cdCAgICB2YXIgc2NhbGVkUG9zWSA9IEhmWzFdICogY3R4LnlkO1xyXG5cdCAgICB2YXIgc2NhbGVkUG9zWiA9IEhmWzJdICogY3R4LnlkO1xyXG5cclxuXHQgICAgdmFyIGZsb29yWCA9IE1hdGguZmxvb3Ioc2NhbGVkUG9zWCk7XHJcblx0ICAgIHZhciBmbG9vclkgPSBNYXRoLmZsb29yKHNjYWxlZFBvc1kpO1xyXG5cdCAgICB2YXIgZmxvb3JaID0gTWF0aC5mbG9vcihzY2FsZWRQb3NaKTtcclxuXHJcblx0ICAgIHZhciBmcmFjWCA9IHNjYWxlZFBvc1ggLSBmbG9vclg7XHJcblx0ICAgIHZhciBmcmFjWSA9IHNjYWxlZFBvc1kgLSBmbG9vclk7XHJcblx0ICAgIHZhciBmcmFjWiA9IHNjYWxlZFBvc1ogLSBmbG9vclo7XHJcblxyXG5cdCAgICB2YXIgbm9pc2VYID0gY3R4LnZiKGZsb29yWCk7XHJcblx0ICAgIHZhciBub2lzZVgxID0gY3R4LnZiKGZsb29yWCArIDEpO1xyXG5cdCAgICB2YXIgbm9pc2VZID0gY3R4LnZiKGZsb29yWSk7XHJcblx0ICAgIHZhciBub2lzZVkxID0gY3R4LnZiKGZsb29yWSArIDEpO1xyXG5cdCAgICB2YXIgbm9pc2VaID0gY3R4LnZiKGZsb29yWik7XHJcblx0ICAgIHZhciBub2lzZVoxID0gY3R4LnZiKGZsb29yWiArIDEpO1xyXG5cclxuXHQgICAgdmFyIHZhbHVlMDAwID0gW10sdmFsdWUwMDEgPSBbXSx2YWx1ZTAxMCA9IFtdLHZhbHVlMDExID0gW10sXHJcblx0ICAgIHZhbHVlMTAwID0gW10sdmFsdWUxMDEgPSBbXSx2YWx1ZTExMCA9IFtdLHZhbHVlMTExID0gW107XHJcblxyXG5cdCAgICBjdHgud2IodmFsdWUwMDAsIG5vaXNlWCwgbm9pc2VZLCBub2lzZVopO1xyXG5cdCAgICBjdHgud2IodmFsdWUwMDEsIG5vaXNlWCwgbm9pc2VZLCBub2lzZVoxKTtcclxuXHQgICAgY3R4LndiKHZhbHVlMDEwLCBub2lzZVgsIG5vaXNlWTEsIG5vaXNlWik7XHJcblx0ICAgIGN0eC53Yih2YWx1ZTAxMSwgbm9pc2VYLCBub2lzZVkxLCBub2lzZVoxKTtcclxuXHQgICAgY3R4LndiKHZhbHVlMTAwLCBub2lzZVgxLCBub2lzZVksIG5vaXNlWik7XHJcblx0ICAgIGN0eC53Yih2YWx1ZTEwMSwgbm9pc2VYMSwgbm9pc2VZLCBub2lzZVoxKTtcclxuXHQgICAgY3R4LndiKHZhbHVlMTEwLCBub2lzZVgxLCBub2lzZVkxLCBub2lzZVopO1xyXG5cdCAgICBjdHgud2IodmFsdWUxMTEsIG5vaXNlWDEsIG5vaXNlWTEsIG5vaXNlWjEpO1xyXG5cclxuXHQgICAgdmFyIHZhbHVlMDAgPSBbXSx2YWx1ZTAxID0gW10sdmFsdWUxMCA9IFtdLHZhbHVlMTEgPSBbXTtcclxuXHQgICAgY3R4LmFiKHZhbHVlMDAsIHZhbHVlMDAwLCB2YWx1ZTAwMSwgZnJhY1opO1xyXG5cdCAgICBjdHguYWIodmFsdWUwMSwgdmFsdWUwMTAsIHZhbHVlMDExLCBmcmFjWik7XHJcblx0ICAgIGN0eC5hYih2YWx1ZTEwLCB2YWx1ZTEwMCwgdmFsdWUxMDEsIGZyYWNaKTtcclxuXHQgICAgY3R4LmFiKHZhbHVlMTEsIHZhbHVlMTEwLCB2YWx1ZTExMSwgZnJhY1opO1xyXG5cclxuXHQgICAgdmFyIHZhbHVlMCA9IFtdLHZhbHVlMSA9IFtdO1xyXG5cdCAgICBjdHguYWIodmFsdWUwLCB2YWx1ZTAwLCB2YWx1ZTAxLCBmcmFjWSk7XHJcblx0ICAgIGN0eC5hYih2YWx1ZTEsIHZhbHVlMTAsIHZhbHVlMTEsIGZyYWNZKTtcclxuXHJcblx0ICAgIGN0eC5hYihyLCB2YWx1ZTAsIHZhbHVlMSwgZnJhY1gpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkltYWdlRGVzYyA9IGZ1bmN0aW9uIChpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdCAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0ICAgIHRoaXMueCA9IHg7XHJcblx0ICAgIHRoaXMueSA9IHk7XHJcblx0ICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHQgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuUmVuZGVyQ2FsbCA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBudW1JbmRpY2VzLCByZW5kZXJTdHlsZUluZGV4KSB7XHJcblx0ICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcblx0ICAgIHRoaXMubnVtSW5kaWNlcyA9IG51bUluZGljZXM7XHJcblx0ICAgIHRoaXMucmVuZGVyU3R5bGVJbmRleCA9IHJlbmRlclN0eWxlSW5kZXg7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuU3ViUmVjdCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0ICAgIHRoaXMueCA9IHg7XHJcblx0ICAgIHRoaXMueSA9IHk7XHJcblx0ICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHQgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuQ2FtZXJhMkQgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuQ2FtZXJhMkQucHJvdG90eXBlLnRiID0gZnVuY3Rpb24gKEhmLCBOZCkge1xyXG5cdCAgICByZXR1cm4gdHJ1ZTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5DYW1lcmEzRCA9IGZ1bmN0aW9uICggLyoqL3NjcmVlblNpemUsIC8qKi9ob3JpekFuZ2xlKSB7XHJcblx0ICAgIHRoaXMuUWQgPSBjdHguciggLyoqL3NjcmVlblNpemUsIDAuNSk7XHJcblx0ICAgIHRoaXMueiA9IC0oIC8qKi9zY3JlZW5TaXplWzBdICogMC41KSAvIE1hdGgudGFuKGN0eC5pYiggLyoqL2hvcml6QW5nbGUgKiAwLjUpKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5DYW1lcmEzRC5wcm90b3R5cGUuIC8qKi90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoIC8qKi9wb3MsIC8qKi9zaXplKSB7XHJcblx0ICAgIGlmICggLyoqL3Bvc1syXSA8IHRoaXMueilcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHQgICAgdmFyIHNjYWxlID0gLXRoaXMueiAvICggLyoqL3Bvc1syXSAtIHRoaXMueik7XHJcblx0ICAgIGN0eC5hKCAvKiovcG9zLCBjdHgucihjdHguZiggLyoqL3BvcywgdGhpcy5RZCksIHNjYWxlKSwgdGhpcy5RZCk7XHJcblx0ICAgIGN0eC5xKCAvKiovc2l6ZSwgLyoqL3NpemUsIHNjYWxlKTtcclxuXHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnpkID0gbnVsbDtcclxuXHQgIHRoaXMueWQgPSAwO1xyXG5cclxuXHQgIHRoaXMuaW5pdGlhbGl6ZU5vaXNlID0gZnVuY3Rpb24gKHBhdGgsIG9ubG9hZGNhbGxiYWNrLCBvbmZhaWxjYWxsYmFjaykge1xyXG5cclxuXHQgICAgaWYgKCFwYXRoKSB7XHJcblx0ICAgICAgYWxlcnQoXCJwYXRoIHNob3VsZCBiZSBkZWZpbmVkXCIpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZiAodGhpcy56ZCAhPSBudWxsKSB7XHJcblx0ICAgICAgb25sb2FkY2FsbGJhY2soKTtcclxuXHQgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmIChwYXRoID09IG51bGwgfHwgcGF0aCA9PSB1bmRlZmluZWQpXHJcblx0ICAgIHBhdGggPSB0aGlzLmRlZmF1bHRQYXRoO1xyXG5cclxuXHQgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHQgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHBhdGggKyBcIm5ldXRyaW5vcGFydGljbGVzLm5vaXNlLmJpblwiLCB0cnVlKTtcclxuXHQgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblx0ICAgIHJlcXVlc3QuY3R4ID0gdGhpcztcclxuXHQgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcblx0ICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwIHx8IHJlcXVlc3Quc3RhdHVzID09IDMwNCkge1xyXG5cdCAgICAgICAgICB2YXIgemQgPSByZXF1ZXN0LnJlc3BvbnNlO1xyXG5cdCAgICAgICAgICB2YXIgY3R4ID0gcmVxdWVzdC5jdHg7XHJcblxyXG5cdCAgICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyh6ZCwgMCwgNCk7XHJcblx0ICAgICAgICAgIHZhciBwbGFuZVNpemUgPSB2aWV3LmdldFVpbnQzMigwLCB0cnVlKTtcclxuXHJcblx0ICAgICAgICAgIGN0eC56ZCA9IFtdO1xyXG5cdCAgICAgICAgICBjdHgueWQgPSBwbGFuZVNpemU7XHJcblxyXG5cdCAgICAgICAgICBmb3IgKHZhciBwbGFuZUluZGV4ID0gMDsgcGxhbmVJbmRleCA8IHBsYW5lU2l6ZTsgKytwbGFuZUluZGV4KSB7XHJcblx0ICAgICAgICAgICAgY3R4LnpkW3BsYW5lSW5kZXhdID0gbmV3IERhdGFWaWV3KHpkLFxyXG5cdCAgICAgICAgICAgIDQgLypOZCovICsgMyAqIHBsYW5lU2l6ZSAqIHBsYW5lU2l6ZSAqIHBsYW5lSW5kZXgpO1xyXG5cdCAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICBpZiAob25sb2FkY2FsbGJhY2spXHJcblx0ICAgICAgICAgIG9ubG9hZGNhbGxiYWNrKCk7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICBpZiAob25mYWlsY2FsbGJhY2spXHJcblx0ICAgICAgICAgIG9uZmFpbGNhbGxiYWNrKCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgcmVxdWVzdC5zZW5kKCk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTm9pc2VHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdCAgICB2YXIgY2F0bXVsbFJvbV8gPSBmdW5jdGlvbiBjYXRtdWxsUm9tXyhwMCwgcDEsIHAyLCBwMywgdCkge1xyXG5cdCAgICAgIHJldHVybiAwLjUgKiAoMi4wICogcDEgKyAoLXAwICsgcDIpICogdCArICgyLjAgKiBwMCAtIDUuMCAqIHAxICsgNC4wICogcDIgLSBwMykgKiB0ICogdCArXHJcblx0ICAgICAgKC1wMCArIDMuMCAqIHAxIC0gMy4wICogcDIgKyBwMykgKiAodCAqIHQgKiB0KSk7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB2YXIgY2F0bXVsbFJvbXYzXyA9IGZ1bmN0aW9uIGNhdG11bGxSb212M18ocDAsIHAxLCBwMiwgcDMsIHQpIHtcclxuXHQgICAgICByZXR1cm4gW1xyXG5cdCAgICAgIGNhdG11bGxSb21fKHAwWzBdLCBwMVswXSwgcDJbMF0sIHAzWzBdLCB0KSxcclxuXHQgICAgICBjYXRtdWxsUm9tXyhwMFsxXSwgcDFbMV0sIHAyWzFdLCBwM1sxXSwgdCksXHJcblx0ICAgICAgY2F0bXVsbFJvbV8ocDBbMl0sIHAxWzJdLCBwMlsyXSwgcDNbMl0sIHQpXTtcclxuXHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB2YXIgY2xhbXBfID0gZnVuY3Rpb24gY2xhbXBfKGEsIGZyb20sIHRvKSB7XHJcblx0ICAgICAgcmV0dXJuIGEgPCBmcm9tID8gZnJvbSA6IGEgPiB0byA/IHRvIDogYTtcclxuXHQgICAgfTtcclxuXHJcblx0ICAgIHZhciBpbWFnZVNpemUgPSA2NDtcclxuXHQgICAgdmFyIGltYWdlID0gW107XHJcblx0ICAgIHZhciB0ZW1wQnVmZmVyID0gW107XHJcblx0ICAgIHZhciB0YXVzR2VuZXJhdG9yID0gbmV3IGN0eC50YXVzODgoMTIwKTsgLy8gMTIwIC0gaGFyZGNvZGVkIHN0YXJ0aW5nIHNlZWRcclxuXHQgICAgdmFyIHJhbmQgPSBmdW5jdGlvbiByYW5kKCkge3JldHVybiB0YXVzR2VuZXJhdG9yLnJhbmQoKTt9O1xyXG5cdCAgICB2YXIgYW1wID0gMC43OyAvLyBoYXJkY29kZWQgYW1wbGl0dWRlIG9mIHBlcmxpbiB6ZFxyXG5cdCAgICB2YXIgZmFkZURlZ3JlZSA9IDEuMjsgLy8gaGFyZGNvZGVkIGZhZGUgZGVncmVlIG9mIGVhY2ggb2N0YXZlXHJcblx0ICAgIHZhciBwcmV2U3RlcCA9IGltYWdlU2l6ZTtcclxuXHJcblx0ICAgIHZhciBzdGVwLCBOZCwgb2N0U2l6ZSwgb2N0U2l6ZTIsIG9jdE1hc2tTaXplLCBvY3RQaXhlbHMsIG9jdFosIG9jdFk7IC8vIG1peCBzdGVwIHZhcmlhYmxlc1xyXG5cclxuXHQgICAgdmFyIG51bU1peFN0ZXBJdGVyYXRpb25zID0gMDtcclxuXHQgICAgdmFyIG1peFN0ZXBJdGVyYXRpb24gPSAwO1xyXG5cclxuXHQgICAgZm9yICh2YXIgaSA9IHByZXZTdGVwID4+PiAxOyBpID4gMDsgaSA+Pj49IDEpIHtcclxuXHQgICAgICB2YXIgX29jdFNpemUgPSBNYXRoLmZsb29yKGltYWdlU2l6ZSAvIGkpO1xyXG5cdCAgICAgIG51bU1peFN0ZXBJdGVyYXRpb25zICs9IF9vY3RTaXplICogX29jdFNpemU7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciBTdGF0ZXMgPSB7XHJcblx0ICAgICAgSU5JVElBTF9GSUxMOiAwLFxyXG5cdCAgICAgIE1JWF9TVEVQX0lOSVQ6IDEsXHJcblx0ICAgICAgTUlYX1NURVBfUFJPQ0VTUzogMixcclxuXHQgICAgICBTQ0FMSU5HOiAzLFxyXG5cdCAgICAgIERBVEFfVklFV1M6IDQsXHJcblx0ICAgICAgRklOSVNIRUQ6IDUgfTtcclxuXHJcblxyXG5cdCAgICB2YXIgUHJvZ3Jlc3MgPSB7XHJcblx0ICAgICAgSU5JVDogMC4wMSxcclxuXHQgICAgICBNSVg6IDAuOSxcclxuXHQgICAgICBTQ0FMSU5HOiAwLjk1LFxyXG5cdCAgICAgIERBVEFfVklFV1M6IDEuMCB9O1xyXG5cclxuXHJcblx0ICAgIHZhciBzdGF0ZSA9IFN0YXRlcy5JTklUSUFMX0ZJTEw7XHJcblxyXG5cdCAgICB0aGlzLnByb2dyZXNzID0gMC4wO1xyXG5cclxuXHQgICAgdmFyIGluaXRpYWxGaWxsID0gZnVuY3Rpb24gaW5pdGlhbEZpbGwoKSB7XHJcblx0ICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBpbWFnZVNpemU7ICsreikge1xyXG5cdCAgICAgICAgdmFyIGltYWdlWiA9IGltYWdlW3pdID0gW107XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBpbWFnZVNpemU7ICsreSkge1xyXG5cdCAgICAgICAgICB2YXIgaW1hZ2VaWSA9IGltYWdlWlt5XSA9IFtdO1xyXG5cclxuXHQgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBpbWFnZVNpemU7ICsreCkge1xyXG5cdCAgICAgICAgICAgIHZhciBpbWFnZVpZWCA9IGltYWdlWllbeF0gPSBbMC4wLCAwLjAsIDAuMF07XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHN0YXRlID0gU3RhdGVzLk1JWF9TVEVQX0lOSVQ7XHJcblx0ICAgICAgdGhpcy5wcm9ncmVzcyA9IFByb2dyZXNzLklOSVQ7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB2YXIgbWl4U3RlcEluaXQgPSBmdW5jdGlvbiBtaXhTdGVwSW5pdCgpIHtcclxuXHJcblx0ICAgICAgc3RlcCA9IHByZXZTdGVwID4+PiAxO1xyXG5cdCAgICAgIE5kID0gaW1hZ2VTaXplO1xyXG5cdCAgICAgIG9jdFNpemUgPSBNYXRoLmZsb29yKE5kIC8gc3RlcCk7XHJcblx0ICAgICAgb2N0U2l6ZTIgPSBvY3RTaXplICogb2N0U2l6ZTtcclxuXHQgICAgICBvY3RNYXNrU2l6ZSA9IE1hdGgubWF4KG9jdFNpemUgLSAxLCAxKTtcclxuXHQgICAgICBvY3RQaXhlbHMgPSBvY3RTaXplICogb2N0U2l6ZSAqIG9jdFNpemU7XHJcblx0ICAgICAgb2N0WiA9IDA7XHJcblx0ICAgICAgb2N0WSA9IDA7XHJcblxyXG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2N0UGl4ZWxzOyArK2kpIHtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbaV0gPSBbXTtcclxuXHQgICAgICAgIC8vIG9yZGVyIGlzIGludmVydGVkIHRvIHNhdGlzZnkgYysrIG9ic29sZXRlIG9yZGVyXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW2ldWzJdID0gcmFuZCgpICogMi4wIC0gMS4wO1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltpXVsxXSA9IHJhbmQoKSAqIDIuMCAtIDEuMDtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbaV1bMF0gPSByYW5kKCkgKiAyLjAgLSAxLjA7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBzdGF0ZSA9IFN0YXRlcy5NSVhfU1RFUF9QUk9DRVNTO1xyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgdmFyIG1peFN0ZXBQcm9jZXNzID0gZnVuY3Rpb24gbWl4U3RlcFByb2Nlc3MoKSB7XHJcblx0ICAgICAgZm9yICh2YXIgb2N0WCA9IDA7IG9jdFggPCBvY3RTaXplOyArK29jdFgpIHtcclxuXHQgICAgICAgIHZhciBvY3RaMCA9IG9jdFogLSAxID4+PiAwICYgb2N0TWFza1NpemU7XHJcblx0ICAgICAgICB2YXIgb2N0WjEgPSBvY3RaID4+PiAwICYgb2N0TWFza1NpemU7XHJcblx0ICAgICAgICB2YXIgb2N0WjIgPSBvY3RaICsgMSA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cdCAgICAgICAgdmFyIG9jdFozID0gb2N0WiArIDIgPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHJcblx0ICAgICAgICB2YXIgb2N0WTAgPSBvY3RZIC0gMSA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cdCAgICAgICAgdmFyIG9jdFkxID0gb2N0WSA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cdCAgICAgICAgdmFyIG9jdFkyID0gb2N0WSArIDEgPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHQgICAgICAgIHZhciBvY3RZMyA9IG9jdFkgKyAyID4+PiAwICYgb2N0TWFza1NpemU7XHJcblxyXG5cdCAgICAgICAgdmFyIG9jdFgwID0gb2N0WCAtIDEgPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHQgICAgICAgIHZhciBvY3RYMSA9IG9jdFggPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHQgICAgICAgIHZhciBvY3RYMiA9IG9jdFggKyAxID4+PiAwICYgb2N0TWFza1NpemU7XHJcblx0ICAgICAgICB2YXIgb2N0WDMgPSBvY3RYICsgMiA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cclxuXHQgICAgICAgIHZhciB2YWx1ZXMgPSAvL3p5eFxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDNdXV0sXHJcblxyXG5cclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYM11dXSxcclxuXHJcblxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgzXV1dLFxyXG5cclxuXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDNdXV1dO1xyXG5cclxuXHJcblxyXG5cclxuXHQgICAgICAgIGZvciAodmFyIGluWiA9IDA7IGluWiA8IHN0ZXA7ICsraW5aKSB7XHJcblx0ICAgICAgICAgIHZhciBpbnRlcnBaID0gaW5aIC8gc3RlcDtcclxuXHQgICAgICAgICAgdmFyIGltYWdlWiA9IG9jdFogKiBzdGVwICsgaW5aO1xyXG5cclxuXHQgICAgICAgICAgdmFyIHZhbHVlc1AgPSAvL3l4XHJcblx0ICAgICAgICAgIFtcclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVswXVswXSwgdmFsdWVzWzFdWzBdWzBdLCB2YWx1ZXNbMl1bMF1bMF0sIHZhbHVlc1szXVswXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzBdWzFdLCB2YWx1ZXNbMV1bMF1bMV0sIHZhbHVlc1syXVswXVsxXSwgdmFsdWVzWzNdWzBdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMF1bMl0sIHZhbHVlc1sxXVswXVsyXSwgdmFsdWVzWzJdWzBdWzJdLCB2YWx1ZXNbM11bMF1bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVswXVszXSwgdmFsdWVzWzFdWzBdWzNdLCB2YWx1ZXNbMl1bMF1bM10sIHZhbHVlc1szXVswXVszXSwgaW50ZXJwWildLFxyXG5cclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsxXVswXSwgdmFsdWVzWzFdWzFdWzBdLCB2YWx1ZXNbMl1bMV1bMF0sIHZhbHVlc1szXVsxXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzFdWzFdLCB2YWx1ZXNbMV1bMV1bMV0sIHZhbHVlc1syXVsxXVsxXSwgdmFsdWVzWzNdWzFdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMV1bMl0sIHZhbHVlc1sxXVsxXVsyXSwgdmFsdWVzWzJdWzFdWzJdLCB2YWx1ZXNbM11bMV1bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsxXVszXSwgdmFsdWVzWzFdWzFdWzNdLCB2YWx1ZXNbMl1bMV1bM10sIHZhbHVlc1szXVsxXVszXSwgaW50ZXJwWildLFxyXG5cclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVswXSwgdmFsdWVzWzFdWzJdWzBdLCB2YWx1ZXNbMl1bMl1bMF0sIHZhbHVlc1szXVsyXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzJdWzFdLCB2YWx1ZXNbMV1bMl1bMV0sIHZhbHVlc1syXVsyXVsxXSwgdmFsdWVzWzNdWzJdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMl1bMl0sIHZhbHVlc1sxXVsyXVsyXSwgdmFsdWVzWzJdWzJdWzJdLCB2YWx1ZXNbM11bMl1bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVszXSwgdmFsdWVzWzFdWzJdWzNdLCB2YWx1ZXNbMl1bMl1bM10sIHZhbHVlc1szXVsyXVszXSwgaW50ZXJwWildLFxyXG5cclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVswXSwgdmFsdWVzWzFdWzNdWzBdLCB2YWx1ZXNbMl1bM11bMF0sIHZhbHVlc1szXVszXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzJdWzFdLCB2YWx1ZXNbMV1bM11bMV0sIHZhbHVlc1syXVszXVsxXSwgdmFsdWVzWzNdWzNdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMl1bMl0sIHZhbHVlc1sxXVszXVsyXSwgdmFsdWVzWzJdWzNdWzJdLCB2YWx1ZXNbM11bM11bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVszXSwgdmFsdWVzWzFdWzNdWzNdLCB2YWx1ZXNbMl1bM11bM10sIHZhbHVlc1szXVszXVszXSwgaW50ZXJwWildXTtcclxuXHJcblxyXG5cclxuXHQgICAgICAgICAgZm9yICh2YXIgaW5ZID0gMDsgaW5ZIDwgc3RlcDsgKytpblkpIHtcclxuXHQgICAgICAgICAgICB2YXIgaW50ZXJwWSA9IGluWSAvIHN0ZXA7XHJcblx0ICAgICAgICAgICAgdmFyIGltYWdlWSA9IG9jdFkgKiBzdGVwICsgaW5ZO1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgdmFsdWUwID0gY2F0bXVsbFJvbXYzXyh2YWx1ZXNQWzBdWzBdLCB2YWx1ZXNQWzFdWzBdLCB2YWx1ZXNQWzJdWzBdLFxyXG5cdCAgICAgICAgICAgIHZhbHVlc1BbM11bMF0sIGludGVycFkpO1xyXG5cdCAgICAgICAgICAgIHZhciB2YWx1ZTEgPSBjYXRtdWxsUm9tdjNfKHZhbHVlc1BbMF1bMV0sIHZhbHVlc1BbMV1bMV0sIHZhbHVlc1BbMl1bMV0sXHJcblx0ICAgICAgICAgICAgdmFsdWVzUFszXVsxXSwgaW50ZXJwWSk7XHJcblx0ICAgICAgICAgICAgdmFyIHZhbHVlMiA9IGNhdG11bGxSb212M18odmFsdWVzUFswXVsyXSwgdmFsdWVzUFsxXVsyXSwgdmFsdWVzUFsyXVsyXSxcclxuXHQgICAgICAgICAgICB2YWx1ZXNQWzNdWzJdLCBpbnRlcnBZKTtcclxuXHQgICAgICAgICAgICB2YXIgdmFsdWUzID0gY2F0bXVsbFJvbXYzXyh2YWx1ZXNQWzBdWzNdLCB2YWx1ZXNQWzFdWzNdLCB2YWx1ZXNQWzJdWzNdLFxyXG5cdCAgICAgICAgICAgIHZhbHVlc1BbM11bM10sIGludGVycFkpO1xyXG5cclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpblggPSAwOyBpblggPCBzdGVwOyArK2luWCkge1xyXG5cdCAgICAgICAgICAgICAgdmFyIGludGVycFggPSBpblggLyBzdGVwO1xyXG5cdCAgICAgICAgICAgICAgdmFyIGltYWdlWCA9IG9jdFggKiBzdGVwICsgaW5YO1xyXG5cclxuXHQgICAgICAgICAgICAgIHZhciBvY3RSZXN1bHQgPSBjYXRtdWxsUm9tdjNfKHZhbHVlMCwgdmFsdWUxLCB2YWx1ZTIsIHZhbHVlMywgaW50ZXJwWCk7XHJcblx0ICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY3R4LmQoY3R4LnYob2N0UmVzdWx0LCBhbXApLCBpbWFnZVtpbWFnZVpdW2ltYWdlWV1baW1hZ2VYXSk7XHJcblx0ICAgICAgICAgICAgICB2YXIgY2xhbXBlZFJlc3VsdCA9IFtcclxuXHQgICAgICAgICAgICAgIGNsYW1wXyhyZXN1bHRbMF0sIC0xLjAsIDEuMCksXHJcblx0ICAgICAgICAgICAgICBjbGFtcF8ocmVzdWx0WzFdLCAtMS4wLCAxLjApLFxyXG5cdCAgICAgICAgICAgICAgY2xhbXBfKHJlc3VsdFsyXSwgLTEuMCwgMS4wKV07XHJcblxyXG5cclxuXHQgICAgICAgICAgICAgIGltYWdlW2ltYWdlWl1baW1hZ2VZXVtpbWFnZVhdID0gY2xhbXBlZFJlc3VsdDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIG1peFN0ZXBJdGVyYXRpb24rKztcclxuXHQgICAgICB0aGlzLnByb2dyZXNzID0gUHJvZ3Jlc3MuSU5JVCArIChQcm9ncmVzcy5NSVggLSBQcm9ncmVzcy5JTklUKSAqIChtaXhTdGVwSXRlcmF0aW9uIC8gbnVtTWl4U3RlcEl0ZXJhdGlvbnMpO1xyXG5cclxuXHQgICAgICBvY3RZKys7XHJcblx0ICAgICAgaWYgKG9jdFkgPj0gb2N0U2l6ZSkge1xyXG5cdCAgICAgICAgb2N0WSA9IDA7XHJcblx0ICAgICAgICBvY3RaKys7XHJcblx0ICAgICAgICBpZiAob2N0WiA+PSBvY3RTaXplKSB7XHJcblx0ICAgICAgICAgIG9jdFogPSAwO1xyXG5cclxuXHQgICAgICAgICAgcHJldlN0ZXAgPSBzdGVwO1xyXG5cdCAgICAgICAgICBhbXAgPSBNYXRoLnBvdyhhbXAsIGZhZGVEZWdyZWUpO1xyXG5cclxuXHQgICAgICAgICAgaWYgKHByZXZTdGVwIDw9IDEpIHtcclxuXHQgICAgICAgICAgICBzdGF0ZSA9IFN0YXRlcy5TQ0FMSU5HO1xyXG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBQcm9ncmVzcy5NSVg7XHJcblx0ICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgc3RhdGUgPSBTdGF0ZXMuTUlYX1NURVBfSU5JVDtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfTtcclxuXHJcblx0ICAgIC8vIGhhcmRjb2RlZCBzY2FsaW5nIG9mIHRoZSBpbWFnZSB0byBtYWtlIGl0IG1vcmUgc3ltZXRocmljXHJcblx0ICAgIHZhciBzY2FsaW5nID0gZnVuY3Rpb24gc2NhbGluZygpIHtcclxuXHQgICAgICB2YXIgbG93ID0gWy0xLjAsIC0xLjAsIC0xLjBdO1xyXG5cdCAgICAgIHZhciBoaWdoID0gWzAuNSwgMC43LCAxLjBdO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IGltYWdlU2l6ZTsgKyt6KSB7XHJcblx0ICAgICAgICB2YXIgaW1hZ2VaID0gaW1hZ2Vbel07XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBpbWFnZVNpemU7ICsreSkge1xyXG5cdCAgICAgICAgICB2YXIgaW1hZ2VaWSA9IGltYWdlWlt5XTtcclxuXHJcblx0ICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgaW1hZ2VTaXplOyArK3gpIHtcclxuXHQgICAgICAgICAgICB2YXIgaW1hZ2VaWVggPSBpbWFnZVpZW3hdO1xyXG5cdCAgICAgICAgICAgIGltYWdlWllYWzBdID0gY3R4LlgobG93WzBdLCBoaWdoWzBdLCBpbWFnZVpZWFswXSAqIDAuNSArIDAuNSk7XHJcblx0ICAgICAgICAgICAgaW1hZ2VaWVhbMV0gPSBjdHguWChsb3dbMV0sIGhpZ2hbMV0sIGltYWdlWllYWzFdICogMC41ICsgMC41KTtcclxuXHQgICAgICAgICAgICBpbWFnZVpZWFsyXSA9IGN0eC5YKGxvd1syXSwgaGlnaFsyXSwgaW1hZ2VaWVhbMl0gKiAwLjUgKyAwLjUpO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBzdGF0ZSA9IFN0YXRlcy5EQVRBX1ZJRVdTO1xyXG5cdCAgICAgIHRoaXMucHJvZ3Jlc3MgPSBQcm9ncmVzcy5TQ0FMSU5HO1xyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgLy8gZmlsbGluZyB6ZCBEYXRhVmlld3NcclxuXHQgICAgdmFyIGRhdGFWaWV3cyA9IGZ1bmN0aW9uIGRhdGFWaWV3cygpIHtcclxuXHQgICAgICBjdHgueWQgPSBpbWFnZVNpemU7XHJcblx0ICAgICAgY3R4LnpkID0gW107XHJcblxyXG5cdCAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgaW1hZ2VTaXplOyArK3opIHtcclxuXHQgICAgICAgIHZhciBpbWFnZVogPSBpbWFnZVt6XTtcclxuXHJcblx0ICAgICAgICB2YXIgcGxhbmUgPSBuZXcgQXJyYXlCdWZmZXIoaW1hZ2VTaXplICogaW1hZ2VTaXplICogMyk7XHJcblx0ICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhwbGFuZSk7XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBpbWFnZVNpemU7ICsreSkge1xyXG5cdCAgICAgICAgICB2YXIgaW1hZ2VaWSA9IGltYWdlWlt5XTtcclxuXHJcblx0ICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgaW1hZ2VTaXplOyArK3gpIHtcclxuXHQgICAgICAgICAgICB2YXIgaW1hZ2VaWVggPSBpbWFnZVpZW3hdO1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgcmdiT2Zmc2V0ID0gKHkgKiBpbWFnZVNpemUgKyB4KSAqIDM7XHJcblx0ICAgICAgICAgICAgdmlldy5zZXRVaW50OChyZ2JPZmZzZXQgKyAwLFxyXG5cdCAgICAgICAgICAgIE1hdGguZmxvb3IoY2xhbXBfKDI1Ni4wICogKGltYWdlWllYWzBdICogMC41ICsgMC41KSAtIDAuNSwgMC4wLCAyNTUuMCkpKTtcclxuXHQgICAgICAgICAgICB2aWV3LnNldFVpbnQ4KHJnYk9mZnNldCArIDEsXHJcblx0ICAgICAgICAgICAgTWF0aC5mbG9vcihjbGFtcF8oMjU2LjAgKiAoaW1hZ2VaWVhbMV0gKiAwLjUgKyAwLjUpIC0gMC41LCAwLjAsIDI1NS4wKSkpO1xyXG5cdCAgICAgICAgICAgIHZpZXcuc2V0VWludDgocmdiT2Zmc2V0ICsgMixcclxuXHQgICAgICAgICAgICBNYXRoLmZsb29yKGNsYW1wXygyNTYuMCAqIChpbWFnZVpZWFsyXSAqIDAuNSArIDAuNSkgLSAwLjUsIDAuMCwgMjU1LjApKSk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBjdHguemRbel0gPSB2aWV3O1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgc3RhdGUgPSBTdGF0ZXMuRklOSVNIRUQ7XHJcblx0ICAgICAgdGhpcy5wcm9ncmVzcyA9IFByb2dyZXNzLkRBVEFfVklFV1M7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB0aGlzLnN0ZXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgc3dpdGNoIChzdGF0ZSkge1xyXG5cdCAgICAgICAgY2FzZSBTdGF0ZXMuSU5JVElBTF9GSUxMOmluaXRpYWxGaWxsLmNhbGwodGhpcyk7YnJlYWs7XHJcblx0ICAgICAgICBjYXNlIFN0YXRlcy5NSVhfU1RFUF9JTklUOm1peFN0ZXBJbml0LmNhbGwodGhpcyk7YnJlYWs7XHJcblx0ICAgICAgICBjYXNlIFN0YXRlcy5NSVhfU1RFUF9QUk9DRVNTOm1peFN0ZXBQcm9jZXNzLmNhbGwodGhpcyk7YnJlYWs7XHJcblx0ICAgICAgICBjYXNlIFN0YXRlcy5TQ0FMSU5HOnNjYWxpbmcuY2FsbCh0aGlzKTticmVhaztcclxuXHQgICAgICAgIGNhc2UgU3RhdGVzLkRBVEFfVklFV1M6ZGF0YVZpZXdzLmNhbGwodGhpcyk7YnJlYWs7fVxyXG5cclxuXHJcblx0ICAgICAgcmV0dXJuIHN0YXRlID09IFN0YXRlcy5GSU5JU0hFRDtcclxuXHQgICAgfTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5jZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdCAgdGhpcy5jZi53aWR0aCA9IDA7XHJcblx0ICB0aGlzLmNmLmhlaWdodCA9IDA7XHJcblx0ICB0aGlzLmJmID0gdGhpcy5jZi5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHQgIHRoaXMuYWYgPSBmdW5jdGlvbiAobWluV2lkdGgsIG1pbkhlaWdodCkge1xyXG5cdCAgICBpZiAodGhpcy5jZi53aWR0aCA8IG1pbldpZHRoIHx8IHRoaXMuY2YuaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcblx0ICAgICAgdGhpcy5jZi53aWR0aCA9IG1pbldpZHRoO1xyXG5cdCAgICAgIHRoaXMuY2YuaGVpZ2h0ID0gbWluSGVpZ2h0O1xyXG5cdCAgICAgIHRoaXMuYmYgPSB0aGlzLmNmLmdldENvbnRleHQoJzJkJyk7XHJcblx0ICAgIH1cclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5lZmZlY3RzID0gW107XHJcblxyXG5cdCAgdGhpcy5sb2FkRWZmZWN0ID0gZnVuY3Rpb24gKGVmZmVjdEZpbGVQYXRoLCBvblN1Y2Nlc3NGdW5jLCBvbkZhaWxGdW5jKSB7XHJcblxyXG5cdCAgICBpZiAodGhpcy5lZmZlY3RzW2VmZmVjdEZpbGVQYXRoXSAhPSB1bmRlZmluZWQpIHtcclxuXHJcblx0ICAgICAgdmFyIGVmZmVjdE1vZGVsID0gdGhpcy5lZmZlY3RzW2VmZmVjdEZpbGVQYXRoXTtcclxuXHJcblx0ICAgICAgaWYgKGVmZmVjdE1vZGVsIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHQgICAgICAgIGVmZmVjdE1vZGVsW2VmZmVjdE1vZGVsLmxlbmd0aF0gPSBbb25TdWNjZXNzRnVuYywgb25GYWlsRnVuY107XHJcblx0ICAgICAgICByZXR1cm47XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBvblN1Y2Nlc3NGdW5jKGVmZmVjdE1vZGVsKTtcclxuXHQgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHRoaXMuZWZmZWN0c1tlZmZlY3RGaWxlUGF0aF0gPSBbW29uU3VjY2Vzc0Z1bmMsIG9uRmFpbEZ1bmNdXTtcclxuXHJcblx0ICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0ICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBlZmZlY3RGaWxlUGF0aCwgdHJ1ZSk7XHJcblx0ICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJ0ZXh0XCI7XHJcblx0ICAgIHJlcXVlc3QuY3R4ID0gdGhpcztcclxuXHQgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcblx0ICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jdHguZWZmZWN0c1tlZmZlY3RGaWxlUGF0aF07XHJcblxyXG5cdCAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDMwMCB8fCByZXF1ZXN0LnN0YXR1cyA9PSAzMDQpIHtcclxuXHJcblx0ICAgICAgICAgIHZhciBldmFsVGV4dCA9IFwiKGZ1bmN0aW9uKGN0eCkge1xcblwiICtcclxuXHQgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgK1xyXG5cdCAgICAgICAgICBcIlxcbnJldHVybiBuZXcgTmV1dHJpbm9FZmZlY3QoY3R4KTtcXG59KSh0aGlzLmN0eCk7XCI7XHJcblx0ICAgICAgICAgIHZhciBlZmZlY3RNb2RlbCA9IGV2YWwoZXZhbFRleHQpO1xyXG5cdCAgICAgICAgICB0aGlzLmN0eC5lZmZlY3RzW2VmZmVjdEZpbGVQYXRoXSA9IGVmZmVjdE1vZGVsO1xyXG5cclxuXHQgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblx0ICAgICAgICAgICAgY2FsbGJhY2tbMF0oZWZmZWN0TW9kZWwpO1xyXG5cdCAgICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuXHQgICAgICAgICAgICBjYWxsYmFja1sxXSgpO1xyXG5cdCAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yZW1vdmVFZmZlY3QgPSBmdW5jdGlvbiAoZWZmZWN0RmlsZVBhdGgpIHtcclxuXHQgICAgZGVsZXRlIHRoaXMuZWZmZWN0c1tlZmZlY3RGaWxlUGF0aF07XHJcblx0ICB9O1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcclxuXHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbn0pKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ldXRyaW5vcGFydGljbGVzLnVtZC5qcy5tYXBcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoAssemblerWebGL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32e92P2G2hLrY8BaVp0+NVh', 'NeutrinoAssemblerWebGL');
// NeutrinoAssemblerWebGL.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var indices = [0, 1, 3, 1, 2, 3];
var NeutrinoAssembler = /** @class */ (function (_super) {
    __extends(NeutrinoAssembler, _super);
    function NeutrinoAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initialized = false;
        _this._currentVertex = 0;
        _this._renderStyleIndex = null;
        _this._vertexFormat = cc.gfx.VertexFormat.XYZ_UV_Color;
        _this._buffer = null;
        _this._bufferOffsetInfo = null;
        _this._modelBatcher = null;
        _this._worldScale = new cc.Vec3();
        return _this;
    }
    NeutrinoAssembler.prototype.fillBuffers = function (comp, modelBatcher) {
        if (!comp._neutrinoEffect || !comp.context.loaded()) {
            return;
        }
        if (!this._initialized) {
            this._buffer = modelBatcher.getBuffer('mesh', this._vertexFormat);
            this._initialized = true;
        }
        this._modelBatcher = modelBatcher;
        this._renderStyleIndex = null;
        this._worldScale = comp._worldScale;
        comp._neutrinoEffect.fillGeometryBuffers([1, 0, 0], [0, 1, 0], [0, 0, -1]);
    };
    // Methods called by neutrinoEffect
    NeutrinoAssembler.prototype.initialize = function (maxNumVertices, texChannels, indices, maxNumRenderCalls) {
    };
    NeutrinoAssembler.prototype.beforeQuad = function (renderStyleIndex) {
        if (this._renderStyleIndex !== renderStyleIndex) {
            var material = this._renderComp.materials[renderStyleIndex];
            if (material) {
                if (material.getHash() !== this._modelBatcher.material.getHash()) {
                    this._modelBatcher._flush();
                    this._modelBatcher.material = material;
                }
            }
            this._renderStyleIndex = renderStyleIndex;
        }
        this._bufferOffsetInfo = this._buffer.request(4, indices.length);
    };
    NeutrinoAssembler.prototype.pushVertex = function (vertex) {
        var oi = this._bufferOffsetInfo;
        var floatsPerVertex = this._vertexFormat._bytes / 4;
        var buffer = this._buffer;
        var floatsBuffer = buffer._vData;
        var uintsBuffer = buffer._uintVData;
        var floatsStart = oi.byteOffset / 4 + this._currentVertex * floatsPerVertex;
        var x = vertex.position[0] * this._worldScale.x;
        var y = vertex.position[1] * this._worldScale.y;
        var z = vertex.position[2] * this._worldScale.z;
        floatsBuffer[floatsStart + 0] = x;
        floatsBuffer[floatsStart + 1] = y;
        floatsBuffer[floatsStart + 2] = z;
        floatsBuffer[floatsStart + 3] = vertex.texCoords[0][0];
        floatsBuffer[floatsStart + 4] = 1.0 - vertex.texCoords[0][1];
        uintsBuffer[floatsStart + 5] =
            (vertex.color[0]) |
                (vertex.color[1] << 8) |
                (vertex.color[2] << 16) |
                (vertex.color[3] << 24);
        ++this._currentVertex;
        if (this._currentVertex == 4) {
            var idicesBuffer = buffer._iData;
            for (var i = 0; i < indices.length; ++i) {
                idicesBuffer[oi.indiceOffset + i] = oi.vertexOffset + indices[i];
            }
            this._currentVertex = 0;
        }
    };
    NeutrinoAssembler.prototype.pushRenderCall = function (rc) {
    };
    NeutrinoAssembler.prototype.cleanup = function () {
    };
    return NeutrinoAssembler;
}(cc.Assembler));
exports.default = NeutrinoAssembler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Bc3NlbWJsZXJXZWJHTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUE2RkM7UUE1Rkcsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG1CQUFhLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ2pELGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFxRmhDLENBQUM7SUFuRkcsdUNBQVcsR0FBWCxVQUFhLElBQUksRUFBRSxZQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJ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LEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLEVBQUU7SUFDakIsQ0FBQztJQUVELG1DQUFPLEdBQVA7SUFDQSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQTdGQSxBQTZGQyxDQTdGOEMsRUFBRSxDQUFDLFNBQVMsR0E2RjFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vQ29tcG9uZW50IGZyb20gJy4vTmV1dHJpbm9Db21wb25lbnQnO1xyXG5cclxuY29uc3QgaW5kaWNlcyA9IFswLCAxLCAzLCAxLCAyLCAzXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldXRyaW5vQXNzZW1ibGVyIGV4dGVuZHMgY2MuQXNzZW1ibGVyIHtcclxuICAgIF9pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgX2N1cnJlbnRWZXJ0ZXggPSAwO1xyXG4gICAgX3JlbmRlclN0eWxlSW5kZXggPSBudWxsO1xyXG4gICAgX3ZlcnRleEZvcm1hdCA9IGNjLmdmeC5WZXJ0ZXhGb3JtYXQuWFlaX1VWX0NvbG9yO1xyXG4gICAgX2J1ZmZlciA9IG51bGw7XHJcbiAgICBfYnVmZmVyT2Zmc2V0SW5mbyA9IG51bGw7XHJcbiAgICBfbW9kZWxCYXRjaGVyID0gbnVsbDtcclxuICAgIF93b3JsZFNjYWxlID0gbmV3IGNjLlZlYzMoKTtcclxuXHJcbiAgICBmaWxsQnVmZmVycyAoY29tcCwgbW9kZWxCYXRjaGVyKSB7XHJcbiAgICAgICAgaWYgKCFjb21wLl9uZXV0cmlub0VmZmVjdCB8fCAhY29tcC5jb250ZXh0LmxvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gbW9kZWxCYXRjaGVyLmdldEJ1ZmZlcignbWVzaCcsIHRoaXMuX3ZlcnRleEZvcm1hdCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX21vZGVsQmF0Y2hlciA9IG1vZGVsQmF0Y2hlcjtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTdHlsZUluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl93b3JsZFNjYWxlID0gY29tcC5fd29ybGRTY2FsZTtcclxuICAgICAgICBcclxuICAgICAgICBjb21wLl9uZXV0cmlub0VmZmVjdC5maWxsR2VvbWV0cnlCdWZmZXJzKFsxLCAwLCAwXSwgWzAsIDEsIDBdLCBbMCwgMCwgLTFdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzIGNhbGxlZCBieSBuZXV0cmlub0VmZmVjdFxyXG5cclxuICAgIGluaXRpYWxpemUobWF4TnVtVmVydGljZXMsIHRleENoYW5uZWxzLCBpbmRpY2VzLCBtYXhOdW1SZW5kZXJDYWxscykge1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVF1YWQocmVuZGVyU3R5bGVJbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJTdHlsZUluZGV4ICE9PSByZW5kZXJTdHlsZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5fcmVuZGVyQ29tcC5tYXRlcmlhbHNbcmVuZGVyU3R5bGVJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsLmdldEhhc2goKSAhPT0gdGhpcy5fbW9kZWxCYXRjaGVyLm1hdGVyaWFsLmdldEhhc2goKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZGVsQmF0Y2hlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbEJhdGNoZXIubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyU3R5bGVJbmRleCA9IHJlbmRlclN0eWxlSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldEluZm8gPSB0aGlzLl9idWZmZXIucmVxdWVzdCg0LCBpbmRpY2VzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaFZlcnRleCh2ZXJ0ZXgpIHtcclxuICAgICAgICBjb25zdCBvaSA9IHRoaXMuX2J1ZmZlck9mZnNldEluZm87XHJcbiAgICAgICAgY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gdGhpcy5fdmVydGV4Rm9ybWF0Ll9ieXRlcyAvIDQ7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xyXG5cclxuICAgICAgICBjb25zdCBmbG9hdHNCdWZmZXIgPSBidWZmZXIuX3ZEYXRhO1xyXG4gICAgICAgIGNvbnN0IHVpbnRzQnVmZmVyID0gYnVmZmVyLl91aW50VkRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IGZsb2F0c1N0YXJ0ID0gb2kuYnl0ZU9mZnNldCAvIDQgKyB0aGlzLl9jdXJyZW50VmVydGV4ICogZmxvYXRzUGVyVmVydGV4O1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gdmVydGV4LnBvc2l0aW9uWzBdICogdGhpcy5fd29ybGRTY2FsZS54O1xyXG4gICAgICAgIGNvbnN0IHkgPSB2ZXJ0ZXgucG9zaXRpb25bMV0gKiB0aGlzLl93b3JsZFNjYWxlLnk7XHJcbiAgICAgICAgY29uc3QgeiA9IHZlcnRleC5wb3NpdGlvblsyXSAqIHRoaXMuX3dvcmxkU2NhbGUuejtcclxuXHJcbiAgICAgICAgZmxvYXRzQnVmZmVyW2Zsb2F0c1N0YXJ0ICsgMF0gPSB4O1xyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCArIDFdID0geTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQgKyAyXSA9IHo7XHJcblxyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCArIDNdID0gdmVydGV4LnRleENvb3Jkc1swXVswXTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQgKyA0XSA9IDEuMCAtIHZlcnRleC50ZXhDb29yZHNbMF1bMV07XHJcblxyXG4gICAgICAgIHVpbnRzQnVmZmVyW2Zsb2F0c1N0YXJ0ICsgNV0gPSBcclxuICAgICAgICAgICAgKHZlcnRleC5jb2xvclswXSkgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzFdIDw8IDgpIHxcclxuICAgICAgICAgICAgKHZlcnRleC5jb2xvclsyXSA8PCAxNikgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzNdIDw8IDI0KTtcclxuXHJcbiAgICAgICAgKyt0aGlzLl9jdXJyZW50VmVydGV4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZlcnRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkaWNlc0J1ZmZlciA9IGJ1ZmZlci5faURhdGE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlkaWNlc0J1ZmZlcltvaS5pbmRpY2VPZmZzZXQgKyBpXSA9IG9pLnZlcnRleE9mZnNldCArIGluZGljZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRWZXJ0ZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoUmVuZGVyQ2FsbChyYykge1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5500GPiiNIKKYfuHMFpUCR', 'NeutrinoContext');
// NeutrinoContext.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Neutrino = require("./neutrinoparticles.js/neutrinoparticles.umd");
var _a = cc._decorator, ccclass = _a.ccclass, mixins = _a.mixins;
var materialDescs = [
    { uuid: '97KN8e0flOjpWQPC0zIOoR', name: 'NeutrinoNormal' },
    { uuid: 'c5T9A8r8FHY5DeeJSjTP0k', name: 'NeutrinoNormalPremul' },
    { uuid: '369MNzEcVL3Jj5UF9gvCfR', name: 'NeutrinoAdd' },
    { uuid: 'baTMgpxLlFqrJF04VcDxPF', name: 'NeutrinoAddPremul' },
    { uuid: 'a74/Nyb0dDYrv5zAZoAlVP', name: 'NeutrinoMultiply' },
    { uuid: '04mmqJExZKjqgZH4ovqGK7', name: 'NeutrinoMultiplyPremul' },
];
var materialsBundleName = 'neutrinoparticles-materials';
var NeutrinoContext = /** @class */ (function () {
    function NeutrinoContext() {
        this.neutrinoContext = new Neutrino.Context();
        this.materials = new Array(materialDescs.length);
        this._materialsLeftToLoad = this.materials.length;
        this._bundlesLeftToLoad = 0;
        this._noiseGenerationStep = null;
        this._noiseGenerated = false;
        this._texturesBundle = null;
        cc.EventTarget.call(this);
        if (CC_DEV) {
            this._startLoadingForDev();
        }
        else {
            this._startLoadingForBuild();
        }
    }
    NeutrinoContext_1 = NeutrinoContext;
    NeutrinoContext.instance = function () {
        if (!this._singleInstance) {
            this._singleInstance = new NeutrinoContext_1();
        }
        return this._singleInstance;
    };
    NeutrinoContext.prototype.loaded = function () {
        return this._materialsLeftToLoad === 0 && this._bundlesLeftToLoad === 0;
    };
    NeutrinoContext.prototype.startNoiseTextureGeneration = function () {
        if (this._noiseGenerated) {
            return;
        }
        var _this = this;
        var noiseGenerator = new this.neutrinoContext.NoiseGenerator();
        var timerId;
        this._noiseGenerationStep = function () {
            for (var i = 0; i < 100; ++i) {
                if (noiseGenerator.step()) {
                    clearInterval(timerId);
                    _this._noiseGenerationStep = null;
                    _this._noiseGenerated = true;
                    noiseGenerator = null;
                    break;
                }
            }
        };
        timerId = setInterval(this._noiseGenerationStep, 0);
    };
    NeutrinoContext.prototype.ensureNoiseTextureIsGenerated = function () {
        if (this._noiseGenerated) {
            return;
        }
        if (!this._noiseGenerationStep) {
            this.startNoiseTextureGeneration();
        }
        while (this._noiseGenerationStep) {
            this._noiseGenerationStep();
        }
    };
    NeutrinoContext.prototype.texturesBundle = function () {
        return this._texturesBundle;
    };
    NeutrinoContext.prototype._startLoadingForDev = function () {
        var _this = this;
        var _loop_1 = function (matIndex) {
            var _matIndex = matIndex;
            cc.assetManager.loadAny(materialDescs[matIndex].uuid, function (err, material) {
                if (err) {
                    cc.error("NeutrinoContext: can't load material with UUID='" + materialDescs[_matIndex].uuid + "'. " + err);
                    return;
                }
                _this._materialLoaded(material, _matIndex);
            });
        };
        for (var matIndex = 0; matIndex < this.materials.length; ++matIndex) {
            _loop_1(matIndex);
        }
    };
    NeutrinoContext.prototype._startLoadingForBuild = function () {
        var _this_1 = this;
        var _this = this;
        ++this._bundlesLeftToLoad;
        cc.assetManager.loadBundle(materialsBundleName, function (err, bundle) {
            if (err) {
                cc.error("NeutrinoContext: failed to load bundle '" + materialsBundleName + "'. " + err);
                return;
            }
            --_this_1._bundlesLeftToLoad;
            var _loop_2 = function (matIndex) {
                var _matIndex = matIndex;
                bundle.load(materialDescs[matIndex].name, function (err, material) {
                    if (err) {
                        cc.error("NeutrinoContext: can't load material '" + materialDescs[_matIndex].name + "'. " + err);
                        return;
                    }
                    _this._materialLoaded(material, _matIndex);
                });
            };
            for (var matIndex = 0; matIndex < _this_1.materials.length; ++matIndex) {
                _loop_2(matIndex);
            }
        });
        ++this._bundlesLeftToLoad;
        var texturesBundleName = 'neutrinoparticles/textures';
        cc.assetManager.loadBundle(texturesBundleName, function (err, bundle) {
            if (err) {
                cc.error("NeutrinoContext: failed to load bundle '" + texturesBundleName + "'");
                return;
            }
            cc.log("NeutrinoContext: Loaded bundle " + texturesBundleName);
            --_this_1._bundlesLeftToLoad;
            _this_1._texturesBundle = bundle;
            _this_1._checkAndEmitLoadedStatus();
        });
    };
    NeutrinoContext.prototype._materialLoaded = function (material, index) {
        this.materials[index] = material;
        --this._materialsLeftToLoad;
        this._checkAndEmitLoadedStatus();
    };
    NeutrinoContext.prototype._checkAndEmitLoadedStatus = function () {
        if (this.loaded()) {
            this.emit('loaded');
        }
    };
    var NeutrinoContext_1;
    NeutrinoContext = NeutrinoContext_1 = __decorate([
        ccclass('NeutrinoContext'),
        mixins(cc.EventTarget)
    ], NeutrinoContext);
    return NeutrinoContext;
}());
exports.default = NeutrinoContext;
cc.game.once(cc.game.EVENT_GAME_INITED, function () {
    NeutrinoContext.instance().startNoiseTextureGeneration();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Db250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXlFO0FBRW5FLElBQUEsS0FBb0IsRUFBRSxDQUFDLFVBQVUsRUFBaEMsT0FBTyxhQUFBLEVBQUUsTUFBTSxZQUFpQixDQUFDO0FBRXhDLElBQU0sYUFBYSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0lBQzVELEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTtDQUNyRSxDQUFDO0FBRUYsSUFBTSxtQkFBbUIsR0FBRyw2QkFBNkIsQ0FBQztBQUkxRDtJQVdJO1FBVkEsb0JBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxjQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR3BDLHlCQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdDLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2Qix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO3dCQW5CZ0IsZUFBZTtJQXFCekIsd0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQkFBZSxFQUFFLENBQUM7U0FDaEQ7UUFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQscURBQTJCLEdBQTNCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0QsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLENBQUMsb0JBQW9CLEdBQUc7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztvQkFDbEMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQzdCLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLE1BQU07aUJBQ1Q7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUVGLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx1REFBNkIsR0FBN0I7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM1QixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztTQUN0QztRQUVELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVPLDZDQUFtQixHQUEzQjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztnQ0FFUixRQUFRO1lBQ2IsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBRXpCLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBUTtnQkFDaEUsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBbUQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksV0FBTSxHQUFLLENBQUMsQ0FBQztvQkFDdEcsT0FBTztpQkFDVjtnQkFDRCxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQzs7UUFUUCxLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRO29CQUExRCxRQUFRO1NBVWhCO0lBQ0wsQ0FBQztJQUVPLCtDQUFxQixHQUE3QjtRQUFBLG1CQXVDQztRQXRDRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFakIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDMUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUN4RCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLDZDQUEyQyxtQkFBbUIsV0FBTSxHQUFLLENBQUMsQ0FBQztnQkFDcEYsT0FBTzthQUNWO1lBRUQsRUFBRSxPQUFJLENBQUMsa0JBQWtCLENBQUM7b0NBRWpCLFFBQVE7Z0JBQ2IsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBUTtvQkFDcEQsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBeUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksV0FBTSxHQUFLLENBQUMsQ0FBQzt3QkFDNUYsT0FBTztxQkFDVjtvQkFDRCxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7O1lBVFAsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLE9BQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUTt3QkFBMUQsUUFBUTthQVVoQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDMUIsSUFBTSxrQkFBa0IsR0FBRyw0QkFBNEIsQ0FBQztRQUN4RCxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3ZELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTJDLGtCQUFrQixNQUFHLENBQUMsQ0FBQztnQkFDM0UsT0FBTzthQUNWO1lBRUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBa0Msa0JBQW9CLENBQUMsQ0FBQztZQUUvRCxFQUFFLE9BQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUMxQixPQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixPQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx5Q0FBZSxHQUF2QixVQUF3QixRQUFRLEVBQUUsS0FBSztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUM1QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU8sbURBQXlCLEdBQWpDO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7SUE5SWdCLGVBQWU7UUFGbkMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQzFCLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO09BQ0YsZUFBZSxDQStJbkM7SUFBRCxzQkFBQztDQS9JRCxBQStJQyxJQUFBO2tCQS9Jb0IsZUFBZTtBQWlKcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtJQUNwQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE5ldXRyaW5vIGZyb20gJy4vbmV1dHJpbm9wYXJ0aWNsZXMuanMvbmV1dHJpbm9wYXJ0aWNsZXMudW1kJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBtaXhpbnN9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IG1hdGVyaWFsRGVzY3MgPSBbXHJcbiAgICB7IHV1aWQ6ICc5N0tOOGUwZmxPanBXUVBDMHpJT29SJywgbmFtZTogJ05ldXRyaW5vTm9ybWFsJyB9LFxyXG4gICAgeyB1dWlkOiAnYzVUOUE4cjhGSFk1RGVlSlNqVFAwaycsIG5hbWU6ICdOZXV0cmlub05vcm1hbFByZW11bCcgfSxcclxuICAgIHsgdXVpZDogJzM2OU1OekVjVkwzSmo1VUY5Z3ZDZlInLCBuYW1lOiAnTmV1dHJpbm9BZGQnIH0sXHJcbiAgICB7IHV1aWQ6ICdiYVRNZ3B4TGxGcXJKRjA0VmNEeFBGJywgbmFtZTogJ05ldXRyaW5vQWRkUHJlbXVsJyB9LFxyXG4gICAgeyB1dWlkOiAnYTc0L055YjBkRFlydjV6QVpvQWxWUCcsIG5hbWU6ICdOZXV0cmlub011bHRpcGx5JyB9LFxyXG4gICAgeyB1dWlkOiAnMDRtbXFKRXhaS2pxZ1pING92cUdLNycsIG5hbWU6ICdOZXV0cmlub011bHRpcGx5UHJlbXVsJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgbWF0ZXJpYWxzQnVuZGxlTmFtZSA9ICduZXV0cmlub3BhcnRpY2xlcy1tYXRlcmlhbHMnO1xyXG5cclxuQGNjY2xhc3MoJ05ldXRyaW5vQ29udGV4dCcpXHJcbkBtaXhpbnMoY2MuRXZlbnRUYXJnZXQpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldXRyaW5vQ29udGV4dCB7XHJcbiAgICBuZXV0cmlub0NvbnRleHQgPSBuZXcgTmV1dHJpbm8uQ29udGV4dCgpO1xyXG4gICAgbWF0ZXJpYWxzID0gbmV3IEFycmF5KG1hdGVyaWFsRGVzY3MubGVuZ3RoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2luZ2xlSW5zdGFuY2U6IE5ldXRyaW5vQ29udGV4dDtcclxuICAgIHByaXZhdGUgX21hdGVyaWFsc0xlZnRUb0xvYWQgPSB0aGlzLm1hdGVyaWFscy5sZW5ndGg7XHJcbiAgICBwcml2YXRlIF9idW5kbGVzTGVmdFRvTG9hZCA9IDA7XHJcbiAgICBwcml2YXRlIF9ub2lzZUdlbmVyYXRpb25TdGVwID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25vaXNlR2VuZXJhdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF90ZXh0dXJlc0J1bmRsZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIGNjLkV2ZW50VGFyZ2V0LmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChDQ19ERVYpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nRm9yRGV2KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nRm9yQnVpbGQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlKCkgOiBOZXV0cmlub0NvbnRleHQge1xyXG4gICAgICAgIGlmICghdGhpcy5fc2luZ2xlSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2luZ2xlSW5zdGFuY2UgPSBuZXcgTmV1dHJpbm9Db250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsc0xlZnRUb0xvYWQgPT09IDAgJiYgdGhpcy5fYnVuZGxlc0xlZnRUb0xvYWQgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ub2lzZUdlbmVyYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBub2lzZUdlbmVyYXRvciA9IG5ldyB0aGlzLm5ldXRyaW5vQ29udGV4dC5Ob2lzZUdlbmVyYXRvcigpO1xyXG4gICAgICAgIGxldCB0aW1lcklkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX25vaXNlR2VuZXJhdGlvblN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2lzZUdlbmVyYXRvci5zdGVwKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbm9pc2VHZW5lcmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vaXNlR2VuZXJhdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnN1cmVOb2lzZVRleHR1cmVJc0dlbmVyYXRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbm9pc2VHZW5lcmF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vaXNlR2VuZXJhdGlvblN0ZXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dHVyZXNCdW5kbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVzQnVuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0TG9hZGluZ0ZvckRldigpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzOyAgICAgICAgXHJcblxyXG4gICAgICAgIGZvciAobGV0IG1hdEluZGV4ID0gMDsgbWF0SW5kZXggPCB0aGlzLm1hdGVyaWFscy5sZW5ndGg7ICsrbWF0SW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IF9tYXRJbmRleCA9IG1hdEluZGV4O1xyXG5cclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRBbnkobWF0ZXJpYWxEZXNjc1ttYXRJbmRleF0udXVpZCwgKGVyciwgbWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgTmV1dHJpbm9Db250ZXh0OiBjYW4ndCBsb2FkIG1hdGVyaWFsIHdpdGggVVVJRD0nJHttYXRlcmlhbERlc2NzW19tYXRJbmRleF0udXVpZH0nLiAke2Vycn1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fbWF0ZXJpYWxMb2FkZWQobWF0ZXJpYWwsIF9tYXRJbmRleCk7XHJcbiAgICAgICAgICAgIH0pOyAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydExvYWRpbmdGb3JCdWlsZCgpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzOyAgXHJcblxyXG4gICAgICAgICsrdGhpcy5fYnVuZGxlc0xlZnRUb0xvYWQ7XHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUobWF0ZXJpYWxzQnVuZGxlTmFtZSwgKGVyciwgYnVuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBOZXV0cmlub0NvbnRleHQ6IGZhaWxlZCB0byBsb2FkIGJ1bmRsZSAnJHttYXRlcmlhbHNCdW5kbGVOYW1lfScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAtLXRoaXMuX2J1bmRsZXNMZWZ0VG9Mb2FkO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbWF0SW5kZXggPSAwOyBtYXRJbmRleCA8IHRoaXMubWF0ZXJpYWxzLmxlbmd0aDsgKyttYXRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9tYXRJbmRleCA9IG1hdEluZGV4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChtYXRlcmlhbERlc2NzW21hdEluZGV4XS5uYW1lLCAoZXJyLCBtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYE5ldXRyaW5vQ29udGV4dDogY2FuJ3QgbG9hZCBtYXRlcmlhbCAnJHttYXRlcmlhbERlc2NzW19tYXRJbmRleF0ubmFtZX0nLiAke2Vycn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbWF0ZXJpYWxMb2FkZWQobWF0ZXJpYWwsIF9tYXRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICArK3RoaXMuX2J1bmRsZXNMZWZ0VG9Mb2FkO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVzQnVuZGxlTmFtZSA9ICduZXV0cmlub3BhcnRpY2xlcy90ZXh0dXJlcyc7XHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUodGV4dHVyZXNCdW5kbGVOYW1lLCAoZXJyLCBidW5kbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYE5ldXRyaW5vQ29udGV4dDogZmFpbGVkIHRvIGxvYWQgYnVuZGxlICcke3RleHR1cmVzQnVuZGxlTmFtZX0nYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhgTmV1dHJpbm9Db250ZXh0OiBMb2FkZWQgYnVuZGxlICR7dGV4dHVyZXNCdW5kbGVOYW1lfWApO1xyXG5cclxuICAgICAgICAgICAgLS10aGlzLl9idW5kbGVzTGVmdFRvTG9hZDtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZXNCdW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQW5kRW1pdExvYWRlZFN0YXR1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21hdGVyaWFsTG9hZGVkKG1hdGVyaWFsLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzW2luZGV4XSA9IG1hdGVyaWFsO1xyXG4gICAgICAgIC0tdGhpcy5fbWF0ZXJpYWxzTGVmdFRvTG9hZDtcclxuICAgICAgICB0aGlzLl9jaGVja0FuZEVtaXRMb2FkZWRTdGF0dXMoKTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tBbmRFbWl0TG9hZGVkU3RhdHVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jYy5nYW1lLm9uY2UoY2MuZ2FtZS5FVkVOVF9HQU1FX0lOSVRFRCwgKCkgPT4ge1xyXG4gICAgTmV1dHJpbm9Db250ZXh0Lmluc3RhbmNlKCkuc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCk7XHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe372iH4fZOBLxITCZbQxJ2', 'NeutrinoComponent');
// NeutrinoComponent.ts

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
var NeutrinoSettings_1 = require("./NeutrinoSettings");
var NeutrinoContext_1 = require("./NeutrinoContext");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// Cached temporary values.
var _gnwprMat0 = new cc.Mat4();
var _gnwprMat1 = new cc.Mat4();
var _gnwprQuat0 = new cc.Quat();
var _gnwprVec0 = new cc.Vec3();
var _uWPM = new cc.Mat4();
var _nwpos = [0, 0, 0, 0];
var _nwrot = [0, 0, 0, 0];
function propertyValueToNpValue(value) {
    if (value instanceof cc.Vec2) {
        return [value.x, value.y];
    }
    else if (value instanceof cc.Vec3) {
        return [value.x, value.y, value.z];
    }
    else {
        return value;
    }
}
var NeutrinoComponent = /** @class */ (function (_super) {
    __extends(NeutrinoComponent, _super);
    function NeutrinoComponent() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.context = null;
        _this_1._neutrinoEffectModel = null;
        _this_1._neutrinoEffect = null;
        _this_1._spriteFrames = null;
        _this_1._emitterPropsOnStart = {};
        _this_1._texturesRemap = null;
        _this_1._waitingForContext = false;
        _this_1._resetInProgress = false;
        _this_1._numTexturesLoading = 0;
        _this_1._errorOnLoad = false;
        _this_1._worldScale = new cc.Vec3();
        _this_1._destructed = false;
        _this_1._serialized = false;
        _this_1._worldParentId = '';
        _this_1._texturesPrefixPath = '';
        _this_1._spriteAtlas = null;
        _this_1._pausedOnStart = false;
        _this_1._pausedGeneratorsOnStart = false;
        // If true, the component will be destroyed when the effect is empty.
        _this_1.destroyWhenEmpty = false;
        // If true, the node of the component will be destroyed when the effect is empty.
        _this_1.destroyNodeWhenEmpty = false;
        return _this_1;
    }
    Object.defineProperty(NeutrinoComponent.prototype, "worldParent", {
        get: function () {
            return this._findWorldParent();
        },
        set: function (value) {
            this._worldParentId = value ? value.uuid : '';
            this._waitForContextAndReset();
            if (CC_EDITOR) {
                var settings = NeutrinoSettings_1.default.instance();
                if (settings) {
                    settings.defaultWorldParent = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "texturesPrefixPath", {
        get: function () {
            return this._texturesPrefixPath;
        },
        set: function (value) {
            this._texturesPrefixPath = value;
            this._waitForContextAndReset();
            if (CC_EDITOR) {
                var settings = NeutrinoSettings_1.default.instance();
                if (settings) {
                    settings.defaultTexturesPrefixPath = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "spriteAtlas", {
        get: function () {
            return this._spriteAtlas;
        },
        set: function (value) {
            this._spriteAtlas = value;
            this._waitForContextAndReset();
            if (CC_EDITOR) {
                var settings = NeutrinoSettings_1.default.instance();
                if (settings) {
                    settings.defaultSpriteAtlas = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "pausedOnStart", {
        get: function () {
            return this._pausedOnStart;
        },
        set: function (value) {
            this._pausedOnStart = value;
            this._waitForContextAndReset();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "pausedGeneratorsOnStart", {
        get: function () {
            return this._pausedGeneratorsOnStart;
        },
        set: function (value) {
            this._pausedGeneratorsOnStart = value;
            this._waitForContextAndReset();
        },
        enumerable: false,
        configurable: true
    });
    NeutrinoComponent.prototype.resetInEditor = function () {
        this._waitForContextAndReset();
    };
    NeutrinoComponent.prototype.onLoad = function () {
        this.context = NeutrinoContext_1.default.instance();
        this.context.ensureNoiseTextureIsGenerated();
        if (!this._serialized) {
            this._serialized = true;
            var settings = NeutrinoSettings_1.default.instance();
            if (settings) {
                this._texturesPrefixPath = settings.defaultTexturesPrefixPath;
                this._spriteAtlas = settings.defaultSpriteAtlas;
                if (settings.defaultWorldParent) {
                    this._worldParentId = settings.defaultWorldParent.uuid;
                }
            }
        }
        this._waitForContextAndReset();
    };
    NeutrinoComponent.prototype.onDestroy = function () {
        if (this._spriteFrames) {
            this._spriteFrames.forEach(function (spriteFrame) {
                if (spriteFrame) {
                    spriteFrame.decRef();
                }
            });
            this._spriteFrames.length = 0;
        }
        if (this._waitingForContext) {
            this.context.off('loaded', this._reset, this);
        }
        this._destructed = true;
    };
    NeutrinoComponent.prototype.update = function (dt) {
        if (!this._neutrinoEffect) {
            return;
        }
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect.update(dt, _nwpos, _nwrot);
        var worldParent = this.worldParent;
        if (worldParent) {
            worldParent.getWorldMatrix(_uWPM);
            this.materials.forEach(function (material) {
                material.setProperty('worldParentMat', _uWPM);
            });
        }
        else {
            this.materials.forEach(function (material) {
                material.setProperty('worldParentMat', cc.Mat4.IDENTITY);
            });
        }
        if (!CC_EDITOR && !this.paused()) {
            if (this.destroyWhenEmpty || this.destroyNodeWhenEmpty) {
                var empty = (this.getNumParticles() === 0);
                if (empty) {
                    if (this.destroyNodeWhenEmpty) {
                        this.node.destroy();
                    }
                    else {
                        this.destroy();
                    }
                }
            }
        }
    };
    /**
     * The component is fully loaded and ready to render.
     * @method ready
     * @return {Boolean} - true if the component is ready to render.
     */
    NeutrinoComponent.prototype.ready = function () {
        return this._neutrinoEffect !== null;
    };
    /**
     * Restarts the effect. Current position and rotation of the node is used
     * to start simulating the effect.
     * @method restart
     */
    NeutrinoComponent.prototype.restart = function () {
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect.restart(_nwpos, _nwrot);
    };
    /**
     * Effect jumps to the current position and rotation of the node without trail
     * effect. Usually used as subsequent call of changing position and rotation.
     * In other words teleports the effect to current position of the node.
     * @method resetPositionRotation
     */
    NeutrinoComponent.prototype.resetPositionRotation = function () {
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect.resetPosition(_nwpos, _nwrot);
    };
    /**
     * Pauses the effect. If effect is not loaded yet, it will be started paused.
     * All particles are frozen when the effect is paused.
     * @method pause
     */
    NeutrinoComponent.prototype.pause = function () {
        if (this.ready()) {
            this._neutrinoEffect.pauseAllEmitters();
        }
        this._pausedOnStart = true;
    };
    /**
     * Unpauses the effect. If the effect is not loaded yet, is will be started unpaused.
     * All particles continues to simulate when the effect is unpaused.
     * @method unpause
     */
    NeutrinoComponent.prototype.unpause = function () {
        if (this.ready()) {
            this._neutrinoEffect.unpauseAllEmitters();
        }
        this._pausedOnStart = false;
    };
    /**
     * Returns true if the effect is paused.
     * @method paused
     * @return {Boolean} - true, if the effect is paused.
     */
    NeutrinoComponent.prototype.paused = function () {
        if (this.ready()) {
            return this._neutrinoEffect.areAllEmittersPaused();
        }
        else {
            return this._pausedOnStart;
        }
    };
    /**
     * Pauses generators. If the effect is not loaded yet, it will be started with paused
     * generators. When generators are paused, no new particles are created, however
     * all created particles continue to simulate.
     * @method pauseGenerators
     */
    NeutrinoComponent.prototype.pauseGenerators = function () {
        if (this.ready()) {
            this._neutrinoEffect.pauseGeneratorsInAllEmitters();
        }
        this._pausedGeneratorsOnStart = true;
    };
    /**
     * Unpauses generators. If the effect is not loaded yet, it will be started with unpaused
     * generators. When generators are unpaused, they generate new particles when
     * necessary.
     * @method unpauseGenerators
     */
    NeutrinoComponent.prototype.unpauseGenerators = function () {
        if (this.ready()) {
            this._neutrinoEffect.unpauseGeneratorsInAllEmitters();
        }
        this._pausedGeneratorsOnStart = false;
    };
    /**
     * Returns true, if generators in the effect are paused.
     * @method generatorsPaused
     * @return {Boolean} - true, if generators are paused
     */
    NeutrinoComponent.prototype.generatorsPaused = function () {
        if (this.ready()) {
            return this._neutrinoEffect.areGeneratorsInAllEmittersPaused();
        }
        else {
            return this._pausedGeneratorsOnStart;
        }
    };
    /**
     * Sets emitter property in all standalone emitters in the effect.
     * @method setPropertyInAllEmitters
     * @param {string} name Name of the property to change.
     * @param {Number | cc.Vec2 | cc.Vec3} value Value of the property.
     * @example
     * effect.setPropertyInAllEmitters('Color', new cc.Vec3(1, 0, 0));
     */
    NeutrinoComponent.prototype.setPropertyInAllEmitters = function (name, value) {
        var npValue = propertyValueToNpValue(value);
        if (this.ready()) {
            this._neutrinoEffect.setPropertyInAllEmitters(name, npValue);
        }
        else {
            this._emitterPropsOnStart[name] = npValue;
        }
    };
    /**
     * Returns a number of active particles in the effect. You can use it to find out if the
     * effect is finished playing.
     * @return {Number} Number of active particles in the effect.
     */
    NeutrinoComponent.prototype.getNumParticles = function () {
        if (this._neutrinoEffect) {
            return this._neutrinoEffect.getNumParticles();
        }
        return 0;
    };
    /**
     * This method is an override of RenderComponent._checkBacth (thank you guys for great spelling!)
     * Here we ignore materials and just check cullingMask. The rest of materials
     * check will be in NeutrinoAssembler.fillBuffers().
     */
    NeutrinoComponent.prototype._checkBacth = function (renderer, cullingMask) {
        if (renderer.cullingMask !== cullingMask) {
            renderer._flush();
            renderer.cullingMask = cullingMask;
        }
        // NeutrinoComponent don't use renderer.node and it can be unchanged.
        // Setting up this property should be done due to consistency with
        // other components and their behavior. However, it will break Spine
        // integration which doesn't expect that attached components will change
        // the renderer.node.
        //renderer.node = renderer._dummyNode;
    };
    NeutrinoComponent.prototype._waitForContextAndReset = function () {
        if (!this.context) {
            return;
        }
        if (!this.context.loaded()) {
            this._waitingForContext = true;
            this.context.once('loaded', this._reset, this);
            return;
        }
        this._reset();
    };
    /**
     * Resets the component: tries to recreate NeutrinoEffect and reload all resources.
     */
    NeutrinoComponent.prototype._reset = function () {
        if (this._resetInProgress || this._destructed) {
            return;
        }
        this._waitingForContext = false;
        var EffectClass = this.getEffectClass();
        if (!EffectClass) {
            cc.error(this.__classname__ + ": you shouldn't use NeutrinoComponent by itself. Use generated effect classes instead.");
            return;
        }
        this._resetInProgress = true;
        this._errorOnLoad = false;
        this._neutrinoEffectModel = new EffectClass(this.context.neutrinoContext);
        this._neutrinoEffect = null;
        // Load textures.
        var numTextures = this._neutrinoEffectModel.textures.length;
        this._spriteFrames = new Array(numTextures);
        this._numTexturesLoading = this._spriteFrames.length;
        for (var texIndex = 0; texIndex < numTextures; ++texIndex) {
            var texturePath = this._texturesPrefixPath + this._neutrinoEffectModel.textures[texIndex];
            var texturePathNoExt = texturePath.replace(/\.[^/.]+$/, "");
            if (this.spriteAtlas) {
                var spriteFrame = this.spriteAtlas.getSpriteFrame(texturePathNoExt);
                if (spriteFrame) {
                    spriteFrame.addRef();
                    this._spriteFrames[texIndex] = spriteFrame;
                    --this._numTexturesLoading;
                }
                else {
                    cc.warn(this.__classname__ + ": Can't load sprite '" + texturePathNoExt + "' from sprite atlas. Will try to load single texture.");
                    this._loadTexture(texIndex, texturePathNoExt);
                }
            }
            else {
                this._loadTexture(texIndex, texturePathNoExt);
            }
        }
        if (this._numTexturesLoading === 0) {
            // TODO: deffer this to the end of the frame
            this._onTexturesLoaded();
        }
    };
    /**
     * Requests standalone texture for load.
     */
    NeutrinoComponent.prototype._loadTexture = function (texIndex, texturePath) {
        var _this_1 = this;
        var _this = this;
        var texturesDb = this.getTexturesDatabase();
        var textureDesc = texturesDb.find(function (tex) { return tex.path === texturePath; });
        var textureLoadFinished = function () {
            --_this._numTexturesLoading;
            if (_this._numTexturesLoading === 0) {
                _this._onTexturesLoaded();
            }
        };
        if (!textureDesc) {
            cc.error(this.__classname__ + ": Can't find texture '" + texturePath + ".");
            this._errorOnLoad = true;
            textureLoadFinished();
            return;
        }
        if (CC_DEV) {
            cc.assetManager.loadAny(textureDesc.uuid, function (err, spriteFrame) {
                if (_this_1._destructed) {
                    return;
                }
                if (err) {
                    cc.error(_this.__classname__ + ": Can't load texture '" + texturePath + "'. " + err);
                    _this._errorOnLoad = true;
                }
                else if (!spriteFrame) {
                    // Redundant check to remove error on multiple reloading in row.
                    cc.warn(_this.__classname__ + ": Loading flow wrong behavior found #1 (don't worry about it)");
                    _this._errorOnLoad = true;
                }
                else {
                    if (spriteFrame instanceof cc.Texture2D) {
                        spriteFrame = new cc.SpriteFrame(spriteFrame);
                    }
                    spriteFrame.addRef();
                    if (!_this._spriteFrames) {
                        // Redundant check to remove error on multiple reloading in row.
                        cc.warn(_this.__classname__ + ": Loading flow wrong behavior found #2 (don't worry about it)");
                        _this._errorOnLoad = true;
                    }
                    else {
                        _this._spriteFrames[texIndex] = spriteFrame;
                    }
                }
                textureLoadFinished();
            });
        }
        else {
            this.context.texturesBundle().load(textureDesc.path, cc.SpriteFrame, function (err, spriteFrame) {
                if (_this_1._destructed) {
                    return;
                }
                if (err) {
                    cc.error(_this.__classname__ + ": Can't load sprite frame '" + texturePath + "'. " + err);
                    _this._errorOnLoad = true;
                }
                else {
                    spriteFrame.addRef();
                    _this._spriteFrames[texIndex] = spriteFrame;
                }
                textureLoadFinished();
            });
        }
    };
    /**
     * When everything is loaded - create neutrino effect.
     */
    NeutrinoComponent.prototype._onTexturesLoaded = function () {
        var _this_1 = this;
        if (this._errorOnLoad) {
            this._resetInProgress = false;
            return;
        }
        this.materials.length = 0;
        var materialsSetupError = false;
        this._neutrinoEffectModel.renderStyles.forEach(function (renderStyle, renderStyleIndex) {
            var texIndex = renderStyle.textureIndices[0];
            var spriteFrame = _this_1._spriteFrames[texIndex];
            if (!spriteFrame) {
                // Redundant check to remove error on multiple reloading in row.
                cc.warn(_this_1.__classname__ + ": Loading flow wrong behavior found #3 (don't worry about it)");
                materialsSetupError = true;
                return;
            }
            var texture = spriteFrame.getTexture();
            if (!texture) {
                // Redundant check to remove error on multiple reloading in row.
                cc.warn(_this_1.__classname__ + ": Loading flow wrong behavior found #4 (don't worry about it)");
                materialsSetupError = true;
                return;
            }
            var materialIndex = _this_1._neutrinoEffectModel.materials[renderStyle.materialIndex];
            var material = _this_1.context.materials[materialIndex * 2 +
                (texture.hasPremultipliedAlpha() ? 1 : 0)];
            if (!material) {
                // Redundant check to remove error on multiple reloading in row.
                cc.warn(_this_1.__classname__ + ": Loading flow wrong behavior found #5 (don't worry about it)");
                materialsSetupError = true;
                return;
            }
            var matVar = _this_1.setMaterial(renderStyleIndex, material);
            matVar.setProperty('texture', texture);
        }, this);
        if (materialsSetupError) {
            this._resetInProgress = false;
            return;
        }
        this._initTexturesRemap();
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect = this._neutrinoEffectModel.createWGLInstance(_nwpos, _nwrot, this._assembler, {
            paused: this._pausedOnStart,
            generatorsPaused: this._pausedGeneratorsOnStart
        });
        this._neutrinoEffect.texturesRemap = this._texturesRemap;
        for (var prop in this._emitterPropsOnStart) {
            this._neutrinoEffect.setPropertyInAllEmitters(prop, this._emitterPropsOnStart[prop]);
        }
        this._emitterPropsOnStart = {};
        this._resetInProgress = false;
    };
    /**
     * In case some of textures are placed on atlases we need to prepare remapping structure for
     * neutrinoparticles.js.
     */
    NeutrinoComponent.prototype._initTexturesRemap = function () {
        var remapNeeded = false;
        for (var texIndex = 0; texIndex < this._spriteFrames.length; ++texIndex) {
            var spriteFrame = this._spriteFrames[texIndex];
            if (spriteFrame.uv[6] !== 1 ||
                spriteFrame.uv[0] !== 0 ||
                spriteFrame.uv[7] !== 0 ||
                spriteFrame.uv[1] !== 1) {
                remapNeeded = true;
                break;
            }
        }
        if (!remapNeeded) {
            this._texturesRemap = [];
            return;
        }
        this._texturesRemap = new Array(this._spriteFrames.length);
        for (var texIndex = 0; texIndex < this._spriteFrames.length; ++texIndex) {
            var spriteFrame = this._spriteFrames[texIndex];
            this._texturesRemap[texIndex] = new this.context.neutrinoContext.SubRect(spriteFrame.uv[0], 1 - spriteFrame.uv[1], spriteFrame.uv[6] - spriteFrame.uv[0], spriteFrame.uv[1] - spriteFrame.uv[7]);
        }
    };
    NeutrinoComponent.prototype._getNeutrinoWorldPositionRotation = function (position, rotation) {
        var worldMatrix = _gnwprMat0;
        var worldRotation = _gnwprQuat0;
        var worldPosition = _gnwprVec0;
        var worldScale = this._worldScale;
        this.node.getWorldMatrix(worldMatrix);
        var worldParent = this.worldParent;
        if (worldParent) {
            var worldParentMatrix = _gnwprMat1;
            worldParent.getWorldMatrix(worldParentMatrix);
            cc.Mat4.invert(worldParentMatrix, worldParentMatrix);
            cc.Mat4.multiply(worldMatrix, worldParentMatrix, worldMatrix);
        }
        cc.Mat4.getRotation(worldRotation, worldMatrix);
        worldMatrix.getTranslation(worldPosition);
        worldMatrix.getScale(worldScale);
        position[0] = worldPosition.x / worldScale.x;
        position[1] = worldPosition.y / worldScale.y;
        position[2] = worldPosition.z / worldScale.z;
        rotation[0] = worldRotation.x;
        rotation[1] = worldRotation.y;
        rotation[2] = worldRotation.z;
        rotation[3] = worldRotation.w;
    };
    NeutrinoComponent.prototype._findWorldParent = function () {
        var node = this.node;
        do {
            if (node.uuid == this._worldParentId) {
                return node;
            }
            node = node.parent;
        } while (node);
        return null;
    };
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_serialized", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_worldParentId", void 0);
    __decorate([
        property(cc.Node)
    ], NeutrinoComponent.prototype, "worldParent", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_texturesPrefixPath", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "texturesPrefixPath", null);
    __decorate([
        property(cc.SpriteAtlas)
    ], NeutrinoComponent.prototype, "_spriteAtlas", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], NeutrinoComponent.prototype, "spriteAtlas", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_pausedOnStart", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "pausedOnStart", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_pausedGeneratorsOnStart", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "pausedGeneratorsOnStart", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "destroyWhenEmpty", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "destroyNodeWhenEmpty", void 0);
    NeutrinoComponent = __decorate([
        ccclass
    ], NeutrinoComponent);
    return NeutrinoComponent;
}(cc.RenderComponent));
exports.default = NeutrinoComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQywyQkFBMkI7QUFDM0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTVCLFNBQVMsc0JBQXNCLENBQUMsS0FBaUM7SUFDN0QsSUFBSSxLQUFLLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7U0FBTSxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FB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Q0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sNENBQWdCLEdBQXhCO1FBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixHQUFHO1lBQ0MsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0QixRQUFRLElBQUksRUFBRTtRQUVmLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUF4bUJEO1FBREMsUUFBUTswREFDbUI7SUFHNUI7UUFEQyxRQUFROzZEQUNtQjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUdqQjtJQWVEO1FBREMsUUFBUTtrRUFDd0I7SUFHakM7UUFEQyxRQUFROytEQUdSO0lBZUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyREFDb0I7SUFHN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFHeEI7SUFlRDtRQURDLFFBQVE7NkRBQ3NCO0lBRy9CO1FBREMsUUFBUTswREFHUjtJQVFEO1FBREMsUUFBUTt1RUFDd0I7SUFHakM7UUFEQyxRQUFRO29FQUdSO0lBU0Q7UUFEQyxRQUFROytEQUNnQjtJQUl6QjtRQURDLFFBQVE7bUVBQ29CO0lBaEhILGlCQUFpQjtRQUQ5QyxPQUFPO09BQ3NCLGlCQUFpQixDQThuQjlDO0lBQUQsd0JBQUM7Q0E5bkJELEFBOG5CQyxDQTluQnVELEVBQUUsQ0FBQyxlQUFlLEdBOG5CekU7a0JBOW5CNkIsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vU2V0dGluZ3MgZnJvbSAnLi9OZXV0cmlub1NldHRpbmdzJztcclxuaW1wb3J0IE5ldXRyaW5vQ29udGV4dCBmcm9tICcuL05ldXRyaW5vQ29udGV4dCc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8vIENhY2hlZCB0ZW1wb3JhcnkgdmFsdWVzLlxyXG5jb25zdCBfZ253cHJNYXQwID0gbmV3IGNjLk1hdDQoKTtcclxuY29uc3QgX2dud3ByTWF0MSA9IG5ldyBjYy5NYXQ0KCk7XHJcbmNvbnN0IF9nbndwclF1YXQwID0gbmV3IGNjLlF1YXQoKTtcclxuY29uc3QgX2dud3ByVmVjMCA9IG5ldyBjYy5WZWMzKCk7XHJcbmNvbnN0IF91V1BNID0gbmV3IGNjLk1hdDQoKTtcclxuY29uc3QgX253cG9zID0gWzAsIDAsIDAsIDBdO1xyXG5jb25zdCBfbndyb3QgPSBbMCwgMCwgMCwgMF07XHJcblxyXG5mdW5jdGlvbiBwcm9wZXJ0eVZhbHVlVG9OcFZhbHVlKHZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUueCwgdmFsdWUueV07XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMykge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUueCwgdmFsdWUueSwgdmFsdWUuel07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTmV1dHJpbm9Db21wb25lbnQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQge1xyXG4gICAgY29udGV4dDogTmV1dHJpbm9Db250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9uZXV0cmlub0VmZmVjdE1vZGVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25ldXRyaW5vRWZmZWN0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyUHJvcHNPblN0YXJ0ID0ge307XHJcbiAgICBwcml2YXRlIF90ZXh0dXJlc1JlbWFwID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3dhaXRpbmdGb3JDb250ZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzZXRJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9udW1UZXh0dXJlc0xvYWRpbmc6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9lcnJvck9uTG9hZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dvcmxkU2NhbGUgPSBuZXcgY2MuVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfZGVzdHJ1Y3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfc2VyaWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfd29ybGRQYXJlbnRJZCA9ICcnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2V0IHdvcmxkUGFyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kV29ybGRQYXJlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd29ybGRQYXJlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl93b3JsZFBhcmVudElkID0gdmFsdWUgPyB2YWx1ZS51dWlkIDogJyc7XHJcbiAgICAgICAgdGhpcy5fd2FpdEZvckNvbnRleHRBbmRSZXNldCgpO1xyXG5cclxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gTmV1dHJpbm9TZXR0aW5ncy5pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmRlZmF1bHRXb3JsZFBhcmVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZXNQcmVmaXhQYXRoID0gJyc7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBnZXQgdGV4dHVyZXNQcmVmaXhQYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlc1ByZWZpeFBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRleHR1cmVzUHJlZml4UGF0aCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVzUHJlZml4UGF0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IE5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0VGV4dHVyZXNQcmVmaXhQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgcHJpdmF0ZSBfc3ByaXRlQXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gIG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgZ2V0IHNwcml0ZUF0bGFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVBdGxhcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3ByaXRlQXRsYXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVBdGxhcyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IE5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0U3ByaXRlQXRsYXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX3BhdXNlZE9uU3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGdldCBwYXVzZWRPblN0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRPblN0YXJ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgcGF1c2VkT25TdGFydCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlZE9uU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl93YWl0Rm9yQ29udGV4dEFuZFJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBfcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGdldCBwYXVzZWRHZW5lcmF0b3JzT25TdGFydCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBhdXNlZEdlbmVyYXRvcnNPblN0YXJ0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl93YWl0Rm9yQ29udGV4dEFuZFJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdHJ1ZSwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGRlc3Ryb3llZCB3aGVuIHRoZSBlZmZlY3QgaXMgZW1wdHkuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlc3Ryb3lXaGVuRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBJZiB0cnVlLCB0aGUgbm9kZSBvZiB0aGUgY29tcG9uZW50IHdpbGwgYmUgZGVzdHJveWVkIHdoZW4gdGhlIGVmZmVjdCBpcyBlbXB0eS5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVzdHJveU5vZGVXaGVuRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgICByZXNldEluRWRpdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gTmV1dHJpbm9Db250ZXh0Lmluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuc3VyZU5vaXNlVGV4dHVyZUlzR2VuZXJhdGVkKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2VyaWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBOZXV0cmlub1NldHRpbmdzLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzUHJlZml4UGF0aCA9IHNldHRpbmdzLmRlZmF1bHRUZXh0dXJlc1ByZWZpeFBhdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVBdGxhcyA9IHNldHRpbmdzLmRlZmF1bHRTcHJpdGVBdGxhcztcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5kZWZhdWx0V29ybGRQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93b3JsZFBhcmVudElkID0gc2V0dGluZ3MuZGVmYXVsdFdvcmxkUGFyZW50LnV1aWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZUZyYW1lcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXMuZm9yRWFjaCgoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmRlY1JlZigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3dhaXRpbmdGb3JDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5vZmYoJ2xvYWRlZCcsIHRoaXMuX3Jlc2V0LCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Rlc3RydWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbmV1dHJpbm9FZmZlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZ2V0TmV1dHJpbm9Xb3JsZFBvc2l0aW9uUm90YXRpb24oX253cG9zLCBfbndyb3QpO1xyXG4gICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0LnVwZGF0ZShkdCwgX253cG9zLCBfbndyb3QpO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBhcmVudCA9IHRoaXMud29ybGRQYXJlbnQ7XHJcbiAgICAgICAgaWYgKHdvcmxkUGFyZW50KSB7XHJcbiAgICAgICAgICAgIHdvcmxkUGFyZW50LmdldFdvcmxkTWF0cml4KF91V1BNKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnd29ybGRQYXJlbnRNYXQnLCBfdVdQTSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnd29ybGRQYXJlbnRNYXQnLCBjYy5NYXQ0LklERU5USVRZKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUNDX0VESVRPUiAmJiAhdGhpcy5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95V2hlbkVtcHR5IHx8IHRoaXMuZGVzdHJveU5vZGVXaGVuRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5ID0gKHRoaXMuZ2V0TnVtUGFydGljbGVzKCkgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVzdHJveU5vZGVXaGVuRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IGlzIGZ1bGx5IGxvYWRlZCBhbmQgcmVhZHkgdG8gcmVuZGVyLlxyXG4gICAgICogQG1ldGhvZCByZWFkeVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gLSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaXMgcmVhZHkgdG8gcmVuZGVyLlxyXG4gICAgICovXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmV1dHJpbm9FZmZlY3QgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0YXJ0cyB0aGUgZWZmZWN0LiBDdXJyZW50IHBvc2l0aW9uIGFuZCByb3RhdGlvbiBvZiB0aGUgbm9kZSBpcyB1c2VkXHJcbiAgICAgKiB0byBzdGFydCBzaW11bGF0aW5nIHRoZSBlZmZlY3QuXHJcbiAgICAgKiBAbWV0aG9kIHJlc3RhcnRcclxuICAgICAqLyAgIFxyXG4gICAgcmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nZXROZXV0cmlub1dvcmxkUG9zaXRpb25Sb3RhdGlvbihfbndwb3MsIF9ud3JvdCk7XHJcbiAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QucmVzdGFydChfbndwb3MsIF9ud3JvdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFZmZlY3QganVtcHMgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIHJvdGF0aW9uIG9mIHRoZSBub2RlIHdpdGhvdXQgdHJhaWxcclxuICAgICAqIGVmZmVjdC4gVXN1YWxseSB1c2VkIGFzIHN1YnNlcXVlbnQgY2FsbCBvZiBjaGFuZ2luZyBwb3NpdGlvbiBhbmQgcm90YXRpb24uXHJcbiAgICAgKiBJbiBvdGhlciB3b3JkcyB0ZWxlcG9ydHMgdGhlIGVmZmVjdCB0byBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBub2RlLlxyXG4gICAgICogQG1ldGhvZCByZXNldFBvc2l0aW9uUm90YXRpb25cclxuICAgICAqL1xyXG4gICAgcmVzZXRQb3NpdGlvblJvdGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX2dldE5ldXRyaW5vV29ybGRQb3NpdGlvblJvdGF0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5yZXNldFBvc2l0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlcyB0aGUgZWZmZWN0LiBJZiBlZmZlY3QgaXMgbm90IGxvYWRlZCB5ZXQsIGl0IHdpbGwgYmUgc3RhcnRlZCBwYXVzZWQuXHJcbiAgICAgKiBBbGwgcGFydGljbGVzIGFyZSBmcm96ZW4gd2hlbiB0aGUgZWZmZWN0IGlzIHBhdXNlZC5cclxuICAgICAqIEBtZXRob2QgcGF1c2VcclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BhdXNlZE9uU3RhcnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5wYXVzZXMgdGhlIGVmZmVjdC4gSWYgdGhlIGVmZmVjdCBpcyBub3QgbG9hZGVkIHlldCwgaXMgd2lsbCBiZSBzdGFydGVkIHVucGF1c2VkLlxyXG4gICAgICogQWxsIHBhcnRpY2xlcyBjb250aW51ZXMgdG8gc2ltdWxhdGUgd2hlbiB0aGUgZWZmZWN0IGlzIHVucGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCB1bnBhdXNlXHJcbiAgICAgKi9cclxuICAgIHVucGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC51bnBhdXNlQWxsRW1pdHRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkT25TdGFydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBlZmZlY3QgaXMgcGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCBwYXVzZWRcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IC0gdHJ1ZSwgaWYgdGhlIGVmZmVjdCBpcyBwYXVzZWQuXHJcbiAgICAgKi9cclxuICAgIHBhdXNlZCgpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV1dHJpbm9FZmZlY3QuYXJlQWxsRW1pdHRlcnNQYXVzZWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkT25TdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXVzZXMgZ2VuZXJhdG9ycy4gSWYgdGhlIGVmZmVjdCBpcyBub3QgbG9hZGVkIHlldCwgaXQgd2lsbCBiZSBzdGFydGVkIHdpdGggcGF1c2VkXHJcbiAgICAgKiBnZW5lcmF0b3JzLiBXaGVuIGdlbmVyYXRvcnMgYXJlIHBhdXNlZCwgbm8gbmV3IHBhcnRpY2xlcyBhcmUgY3JlYXRlZCwgaG93ZXZlclxyXG4gICAgICogYWxsIGNyZWF0ZWQgcGFydGljbGVzIGNvbnRpbnVlIHRvIHNpbXVsYXRlLlxyXG4gICAgICogQG1ldGhvZCBwYXVzZUdlbmVyYXRvcnNcclxuICAgICAqL1xyXG4gICAgcGF1c2VHZW5lcmF0b3JzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wYXVzZWRHZW5lcmF0b3JzT25TdGFydCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnBhdXNlcyBnZW5lcmF0b3JzLiBJZiB0aGUgZWZmZWN0IGlzIG5vdCBsb2FkZWQgeWV0LCBpdCB3aWxsIGJlIHN0YXJ0ZWQgd2l0aCB1bnBhdXNlZFxyXG4gICAgICogZ2VuZXJhdG9ycy4gV2hlbiBnZW5lcmF0b3JzIGFyZSB1bnBhdXNlZCwgdGhleSBnZW5lcmF0ZSBuZXcgcGFydGljbGVzIHdoZW5cclxuICAgICAqIG5lY2Vzc2FyeS4gXHJcbiAgICAgKiBAbWV0aG9kIHVucGF1c2VHZW5lcmF0b3JzXHJcbiAgICAgKi9cclxuICAgIHVucGF1c2VHZW5lcmF0b3JzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QudW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BhdXNlZEdlbmVyYXRvcnNPblN0YXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUsIGlmIGdlbmVyYXRvcnMgaW4gdGhlIGVmZmVjdCBhcmUgcGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCBnZW5lcmF0b3JzUGF1c2VkXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAtIHRydWUsIGlmIGdlbmVyYXRvcnMgYXJlIHBhdXNlZFxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0b3JzUGF1c2VkKCkgOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXV0cmlub0VmZmVjdC5hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRHZW5lcmF0b3JzT25TdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGVtaXR0ZXIgcHJvcGVydHkgaW4gYWxsIHN0YW5kYWxvbmUgZW1pdHRlcnMgaW4gdGhlIGVmZmVjdC5cclxuICAgICAqIEBtZXRob2Qgc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBjaGFuZ2UuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlciB8IGNjLlZlYzIgfCBjYy5WZWMzfSB2YWx1ZSBWYWx1ZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogZWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycygnQ29sb3InLCBuZXcgY2MuVmVjMygxLCAwLCAwKSk7XHJcbiAgICAgKi9cclxuICAgIHNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgICAgIGNvbnN0IG5wVmFsdWUgPSBwcm9wZXJ0eVZhbHVlVG9OcFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5zZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMobmFtZSwgbnBWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZW1pdHRlclByb3BzT25TdGFydFtuYW1lXSA9IG5wVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBudW1iZXIgb2YgYWN0aXZlIHBhcnRpY2xlcyBpbiB0aGUgZWZmZWN0LiBZb3UgY2FuIHVzZSBpdCB0byBmaW5kIG91dCBpZiB0aGVcclxuICAgICAqIGVmZmVjdCBpcyBmaW5pc2hlZCBwbGF5aW5nLlxyXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBOdW1iZXIgb2YgYWN0aXZlIHBhcnRpY2xlcyBpbiB0aGUgZWZmZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXROdW1QYXJ0aWNsZXMoKSA6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25ldXRyaW5vRWZmZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXV0cmlub0VmZmVjdC5nZXROdW1QYXJ0aWNsZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFuIG92ZXJyaWRlIG9mIFJlbmRlckNvbXBvbmVudC5fY2hlY2tCYWN0aCAodGhhbmsgeW91IGd1eXMgZm9yIGdyZWF0IHNwZWxsaW5nISlcclxuICAgICAqIEhlcmUgd2UgaWdub3JlIG1hdGVyaWFscyBhbmQganVzdCBjaGVjayBjdWxsaW5nTWFzay4gVGhlIHJlc3Qgb2YgbWF0ZXJpYWxzXHJcbiAgICAgKiBjaGVjayB3aWxsIGJlIGluIE5ldXRyaW5vQXNzZW1ibGVyLmZpbGxCdWZmZXJzKCkuXHJcbiAgICAgKi9cclxuICAgIF9jaGVja0JhY3RoIChyZW5kZXJlciwgY3VsbGluZ01hc2spIHtcclxuICAgICAgICBpZiAocmVuZGVyZXIuY3VsbGluZ01hc2sgIT09IGN1bGxpbmdNYXNrKSB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLl9mbHVzaCgpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5jdWxsaW5nTWFzayA9IGN1bGxpbmdNYXNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTmV1dHJpbm9Db21wb25lbnQgZG9uJ3QgdXNlIHJlbmRlcmVyLm5vZGUgYW5kIGl0IGNhbiBiZSB1bmNoYW5nZWQuXHJcbiAgICAgICAgLy8gU2V0dGluZyB1cCB0aGlzIHByb3BlcnR5IHNob3VsZCBiZSBkb25lIGR1ZSB0byBjb25zaXN0ZW5jeSB3aXRoXHJcbiAgICAgICAgLy8gb3RoZXIgY29tcG9uZW50cyBhbmQgdGhlaXIgYmVoYXZpb3IuIEhvd2V2ZXIsIGl0IHdpbGwgYnJlYWsgU3BpbmVcclxuICAgICAgICAvLyBpbnRlZ3JhdGlvbiB3aGljaCBkb2Vzbid0IGV4cGVjdCB0aGF0IGF0dGFjaGVkIGNvbXBvbmVudHMgd2lsbCBjaGFuZ2VcclxuICAgICAgICAvLyB0aGUgcmVuZGVyZXIubm9kZS5cclxuICAgICAgICBcclxuICAgICAgICAvL3JlbmRlcmVyLm5vZGUgPSByZW5kZXJlci5fZHVtbXlOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQubG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2FpdGluZ0ZvckNvbnRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQub25jZSgnbG9hZGVkJywgdGhpcy5fcmVzZXQsIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRzIHRoZSBjb21wb25lbnQ6IHRyaWVzIHRvIHJlY3JlYXRlIE5ldXRyaW5vRWZmZWN0IGFuZCByZWxvYWQgYWxsIHJlc291cmNlcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2V0SW5Qcm9ncmVzcyB8fCB0aGlzLl9kZXN0cnVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dhaXRpbmdGb3JDb250ZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBFZmZlY3RDbGFzcyA9IHRoaXMuZ2V0RWZmZWN0Q2xhc3MoKTtcclxuXHJcbiAgICAgICAgaWYgKCFFZmZlY3RDbGFzcykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgJHt0aGlzLl9fY2xhc3NuYW1lX199OiB5b3Ugc2hvdWxkbid0IHVzZSBOZXV0cmlub0NvbXBvbmVudCBieSBpdHNlbGYuIFVzZSBnZW5lcmF0ZWQgZWZmZWN0IGNsYXNzZXMgaW5zdGVhZC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVzZXRJblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9lcnJvck9uTG9hZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdE1vZGVsID0gbmV3IEVmZmVjdENsYXNzKHRoaXMuY29udGV4dC5uZXV0cmlub0NvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0ID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2FkIHRleHR1cmVzLlxyXG4gICAgICAgIGNvbnN0IG51bVRleHR1cmVzID0gdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC50ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlRnJhbWVzID0gbmV3IEFycmF5KG51bVRleHR1cmVzKTtcclxuICAgICAgICB0aGlzLl9udW1UZXh0dXJlc0xvYWRpbmcgPSB0aGlzLl9zcHJpdGVGcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0ZXhJbmRleCA9IDA7IHRleEluZGV4IDwgbnVtVGV4dHVyZXM7ICsrdGV4SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZVBhdGggPSB0aGlzLl90ZXh0dXJlc1ByZWZpeFBhdGggKyB0aGlzLl9uZXV0cmlub0VmZmVjdE1vZGVsLnRleHR1cmVzW3RleEluZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZVBhdGhOb0V4dCA9IHRleHR1cmVQYXRoLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZUF0bGFzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUodGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS5hZGRSZWYoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS10aGlzLl9udW1UZXh0dXJlc0xvYWRpbmc7ICAgIFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke3RoaXMuX19jbGFzc25hbWVfX306IENhbid0IGxvYWQgc3ByaXRlICcke3RleHR1cmVQYXRoTm9FeHR9JyBmcm9tIHNwcml0ZSBhdGxhcy4gV2lsbCB0cnkgdG8gbG9hZCBzaW5nbGUgdGV4dHVyZS5gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZSh0ZXhJbmRleCwgdGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZSh0ZXhJbmRleCwgdGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9udW1UZXh0dXJlc0xvYWRpbmcgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogZGVmZmVyIHRoaXMgdG8gdGhlIGVuZCBvZiB0aGUgZnJhbWVcclxuICAgICAgICAgICAgdGhpcy5fb25UZXh0dXJlc0xvYWRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcXVlc3RzIHN0YW5kYWxvbmUgdGV4dHVyZSBmb3IgbG9hZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZFRleHR1cmUodGV4SW5kZXg6IG51bWJlciwgdGV4dHVyZVBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZXNEYiA9IHRoaXMuZ2V0VGV4dHVyZXNEYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVEZXNjID0gdGV4dHVyZXNEYi5maW5kKHRleCA9PiB0ZXgucGF0aCA9PT0gdGV4dHVyZVBhdGgpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZEZpbmlzaGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAtLV90aGlzLl9udW1UZXh0dXJlc0xvYWRpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX251bVRleHR1cmVzTG9hZGluZyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX29uVGV4dHVyZXNMb2FkZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghdGV4dHVyZURlc2MpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogQ2FuJ3QgZmluZCB0ZXh0dXJlICcke3RleHR1cmVQYXRofS5gKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZXh0dXJlTG9hZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDQ19ERVYpIHtcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRBbnkodGV4dHVyZURlc2MudXVpZCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZXN0cnVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgJHtfdGhpcy5fX2NsYXNzbmFtZV9ffTogQ2FuJ3QgbG9hZCB0ZXh0dXJlICcke3RleHR1cmVQYXRofScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke190aGlzLl9fY2xhc3NuYW1lX199OiBMb2FkaW5nIGZsb3cgd3JvbmcgYmVoYXZpb3IgZm91bmQgIzEgKGRvbid0IHdvcnJ5IGFib3V0IGl0KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSBpbnN0YW5jZW9mIGNjLlRleHR1cmUyRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9zcHJpdGVGcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkdW5kYW50IGNoZWNrIHRvIHJlbW92ZSBlcnJvciBvbiBtdWx0aXBsZSByZWxvYWRpbmcgaW4gcm93LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke190aGlzLl9fY2xhc3NuYW1lX199OiBMb2FkaW5nIGZsb3cgd3JvbmcgYmVoYXZpb3IgZm91bmQgIzIgKGRvbid0IHdvcnJ5IGFib3V0IGl0KWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZXJyb3JPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlTG9hZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50ZXh0dXJlc0J1bmRsZSgpLmxvYWQodGV4dHVyZURlc2MucGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVzdHJ1Y3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYCR7X3RoaXMuX19jbGFzc25hbWVfX306IENhbid0IGxvYWQgc3ByaXRlIGZyYW1lICcke3RleHR1cmVQYXRofScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRleHR1cmVMb2FkRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZCAtIGNyZWF0ZSBuZXV0cmlubyBlZmZlY3QuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX29uVGV4dHVyZXNMb2FkZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Vycm9yT25Mb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFscy5sZW5ndGggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtYXRlcmlhbHNTZXR1cEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC5yZW5kZXJTdHlsZXMuZm9yRWFjaCgocmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4SW5kZXggPSByZW5kZXJTdHlsZS50ZXh0dXJlSW5kaWNlc1swXTtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoIXNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWR1bmRhbnQgY2hlY2sgdG8gcmVtb3ZlIGVycm9yIG9uIG11bHRpcGxlIHJlbG9hZGluZyBpbiByb3cuXHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKGAke3RoaXMuX19jbGFzc25hbWVfX306IExvYWRpbmcgZmxvdyB3cm9uZyBiZWhhdmlvciBmb3VuZCAjMyAoZG9uJ3Qgd29ycnkgYWJvdXQgaXQpYCk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNTZXR1cEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogTG9hZGluZyBmbG93IHdyb25nIGJlaGF2aW9yIGZvdW5kICM0IChkb24ndCB3b3JyeSBhYm91dCBpdClgKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1NldHVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC5tYXRlcmlhbHNbcmVuZGVyU3R5bGUubWF0ZXJpYWxJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5jb250ZXh0Lm1hdGVyaWFsc1ttYXRlcmlhbEluZGV4ICogMiArXHJcbiAgICAgICAgICAgICAgICAodGV4dHVyZS5oYXNQcmVtdWx0aXBsaWVkQWxwaGEoKSA/IDEgOiAwKV07XHJcbiAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogTG9hZGluZyBmbG93IHdyb25nIGJlaGF2aW9yIGZvdW5kICM1IChkb24ndCB3b3JyeSBhYm91dCBpdClgKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1NldHVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdFZhciA9IHRoaXMuc2V0TWF0ZXJpYWwocmVuZGVyU3R5bGVJbmRleCwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBtYXRWYXIuc2V0UHJvcGVydHkoJ3RleHR1cmUnLCB0ZXh0dXJlKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsc1NldHVwRXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRUZXh0dXJlc1JlbWFwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2dldE5ldXRyaW5vV29ybGRQb3NpdGlvblJvdGF0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdCA9IHRoaXMuX25ldXRyaW5vRWZmZWN0TW9kZWwuY3JlYXRlV0dMSW5zdGFuY2UoXHJcbiAgICAgICAgICAgIF9ud3BvcywgX253cm90LCB0aGlzLl9hc3NlbWJsZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogdGhpcy5fcGF1c2VkT25TdGFydCxcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRvcnNQYXVzZWQ6IHRoaXMuX3BhdXNlZEdlbmVyYXRvcnNPblN0YXJ0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC50ZXh0dXJlc1JlbWFwID0gdGhpcy5fdGV4dHVyZXNSZW1hcDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLl9lbWl0dGVyUHJvcHNPblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhwcm9wLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJQcm9wc09uU3RhcnRbcHJvcF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZW1pdHRlclByb3BzT25TdGFydCA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9yZXNldEluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluIGNhc2Ugc29tZSBvZiB0ZXh0dXJlcyBhcmUgcGxhY2VkIG9uIGF0bGFzZXMgd2UgbmVlZCB0byBwcmVwYXJlIHJlbWFwcGluZyBzdHJ1Y3R1cmUgZm9yXHJcbiAgICAgKiBuZXV0cmlub3BhcnRpY2xlcy5qcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdFRleHR1cmVzUmVtYXAoKSB7XHJcbiAgICAgICAgbGV0IHJlbWFwTmVlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgdGV4SW5kZXggPSAwOyB0ZXhJbmRleCA8IHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGg7ICsrdGV4SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUudXZbNl0gIT09IDEgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLnV2WzBdICE9PSAwIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS51dls3XSAhPT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUudXZbMV0gIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1hcE5lZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlbWFwTmVlZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzUmVtYXAgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZXNSZW1hcCA9IG5ldyBBcnJheSh0aGlzLl9zcHJpdGVGcmFtZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGV4SW5kZXggPSAwOyB0ZXhJbmRleCA8IHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGg7ICsrdGV4SW5kZXgpIFxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG5cclxuXHRcdFx0dGhpcy5fdGV4dHVyZXNSZW1hcFt0ZXhJbmRleF0gPSBuZXcgdGhpcy5jb250ZXh0Lm5ldXRyaW5vQ29udGV4dC5TdWJSZWN0KFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUudXZbMF0sIDEgLSBzcHJpdGVGcmFtZS51dlsxXSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLnV2WzZdIC0gc3ByaXRlRnJhbWUudXZbMF0sXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS51dlsxXSAtIHNwcml0ZUZyYW1lLnV2WzddKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXROZXV0cmlub1dvcmxkUG9zaXRpb25Sb3RhdGlvbihwb3NpdGlvbjogbnVtYmVyW10sIHJvdGF0aW9uOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gX2dud3ByTWF0MDtcclxuICAgICAgICBjb25zdCB3b3JsZFJvdGF0aW9uID1fZ253cHJRdWF0MDtcclxuICAgICAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gX2dud3ByVmVjMDtcclxuICAgICAgICBjb25zdCB3b3JsZFNjYWxlID0gdGhpcy5fd29ybGRTY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFdvcmxkTWF0cml4KHdvcmxkTWF0cml4KTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQYXJlbnQgPSB0aGlzLndvcmxkUGFyZW50O1xyXG4gICAgICAgIGlmICh3b3JsZFBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBhcmVudE1hdHJpeCA9IF9nbndwck1hdDE7XHJcbiAgICAgICAgICAgIHdvcmxkUGFyZW50LmdldFdvcmxkTWF0cml4KHdvcmxkUGFyZW50TWF0cml4KTtcclxuICAgICAgICAgICAgY2MuTWF0NC5pbnZlcnQod29ybGRQYXJlbnRNYXRyaXgsIHdvcmxkUGFyZW50TWF0cml4KTtcclxuICAgICAgICAgICAgY2MuTWF0NC5tdWx0aXBseSh3b3JsZE1hdHJpeCwgd29ybGRQYXJlbnRNYXRyaXgsIHdvcmxkTWF0cml4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLk1hdDQuZ2V0Um90YXRpb24od29ybGRSb3RhdGlvbiwgd29ybGRNYXRyaXgpO1xyXG4gICAgICAgIHdvcmxkTWF0cml4LmdldFRyYW5zbGF0aW9uKHdvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIHdvcmxkTWF0cml4LmdldFNjYWxlKHdvcmxkU2NhbGUpO1xyXG5cclxuICAgICAgICBwb3NpdGlvblswXSA9IHdvcmxkUG9zaXRpb24ueCAvIHdvcmxkU2NhbGUueDtcclxuICAgICAgICBwb3NpdGlvblsxXSA9IHdvcmxkUG9zaXRpb24ueSAvIHdvcmxkU2NhbGUueTtcclxuICAgICAgICBwb3NpdGlvblsyXSA9IHdvcmxkUG9zaXRpb24ueiAvIHdvcmxkU2NhbGUuejtcclxuICAgICAgICByb3RhdGlvblswXSA9IHdvcmxkUm90YXRpb24ueDtcclxuICAgICAgICByb3RhdGlvblsxXSA9IHdvcmxkUm90YXRpb24ueTtcclxuICAgICAgICByb3RhdGlvblsyXSA9IHdvcmxkUm90YXRpb24uejtcclxuICAgICAgICByb3RhdGlvblszXSA9IHdvcmxkUm90YXRpb24udztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maW5kV29ybGRQYXJlbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUudXVpZCA9PSB0aGlzLl93b3JsZFBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKG5vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBnZXRFZmZlY3RDbGFzcygpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBnZXRUZXh0dXJlc0RhdGFiYXNlKCkgOiBhbnk7XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoSettings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbcd0MmKjROJoyVC6K9nt1e', 'NeutrinoSettings');
// NeutrinoSettings.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * NeutrinoSettings component is a container for default values of NeutrinoComponent
 * properties. Instance of this class should be a singleton in the scope of a scene
 * and has to be accessed only via cc.NeutrinoSettings.instance() static method. This
 * method creates a node with name '__NeutrinoParticles__' in the root of the scene
 * and attaches NeutrinoSettings component to it. Further properties of the component
 * can be changed in the editor or programmatically.
 */
var NeutrinoSettings = /** @class */ (function (_super) {
    __extends(NeutrinoSettings, _super);
    function NeutrinoSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultWorldParent = null;
        _this.defaultTexturesPrefixPath = '';
        _this.defaultSpriteAtlas = null;
        return _this;
    }
    NeutrinoSettings_1 = NeutrinoSettings;
    NeutrinoSettings.instance = function () {
        var canvas = cc.find('Canvas');
        if (!canvas) {
            return null;
        }
        var settings = canvas.getComponent(NeutrinoSettings_1);
        if (!settings) {
            settings = canvas.addComponent(NeutrinoSettings_1);
            settings.defaultWorldParent = canvas;
        }
        return settings;
    };
    var NeutrinoSettings_1;
    __decorate([
        property(cc.Node)
    ], NeutrinoSettings.prototype, "defaultWorldParent", void 0);
    __decorate([
        property
    ], NeutrinoSettings.prototype, "defaultTexturesPrefixPath", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], NeutrinoSettings.prototype, "defaultSpriteAtlas", void 0);
    NeutrinoSettings = NeutrinoSettings_1 = __decorate([
        ccclass
    ], NeutrinoSettings);
    return NeutrinoSettings;
}(cc.Component));
exports.default = NeutrinoSettings;
cc.NeutrinoSettings = NeutrinoSettings;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9TZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7Ozs7OztHQU9HO0FBR0g7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF3QkM7UUF0Qkcsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLCtCQUF5QixHQUFHLEVBQUUsQ0FBQztRQUcvQix3QkFBa0IsR0FBRyxJQUFJLENBQUM7O0lBZ0I5QixDQUFDO3lCQXhCb0IsZ0JBQWdCO0lBVTFCLHlCQUFRLEdBQWY7UUFDSSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBZ0IsQ0FBQyxDQUFDO1lBQ2pELFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7U0FDeEM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dFQUNRO0lBRzFCO1FBREMsUUFBUTt1RUFDc0I7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnRUFDQztJQVJULGdCQUFnQjtRQURuQyxPQUFPO09BQ1ksZ0JBQWdCLENBd0JwQztJQUFELHVCQUFDO0NBeEJELEFBd0JDLENBeEI2QyxFQUFFLENBQUMsU0FBUyxHQXdCekQ7a0JBeEJvQixnQkFBZ0I7QUEwQnJDLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIE5ldXRyaW5vU2V0dGluZ3MgY29tcG9uZW50IGlzIGEgY29udGFpbmVyIGZvciBkZWZhdWx0IHZhbHVlcyBvZiBOZXV0cmlub0NvbXBvbmVudFxyXG4gKiBwcm9wZXJ0aWVzLiBJbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHNob3VsZCBiZSBhIHNpbmdsZXRvbiBpbiB0aGUgc2NvcGUgb2YgYSBzY2VuZVxyXG4gKiBhbmQgaGFzIHRvIGJlIGFjY2Vzc2VkIG9ubHkgdmlhIGNjLk5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKSBzdGF0aWMgbWV0aG9kLiBUaGlzXHJcbiAqIG1ldGhvZCBjcmVhdGVzIGEgbm9kZSB3aXRoIG5hbWUgJ19fTmV1dHJpbm9QYXJ0aWNsZXNfXycgaW4gdGhlIHJvb3Qgb2YgdGhlIHNjZW5lXHJcbiAqIGFuZCBhdHRhY2hlcyBOZXV0cmlub1NldHRpbmdzIGNvbXBvbmVudCB0byBpdC4gRnVydGhlciBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnRcclxuICogY2FuIGJlIGNoYW5nZWQgaW4gdGhlIGVkaXRvciBvciBwcm9ncmFtbWF0aWNhbGx5LlxyXG4gKi9cclxuXHJcbiBAY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXV0cmlub1NldHRpbmdzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGVmYXVsdFdvcmxkUGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlZmF1bHRUZXh0dXJlc1ByZWZpeFBhdGggPSAnJztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXHJcbiAgICBkZWZhdWx0U3ByaXRlQXRsYXMgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIDogTmV1dHJpbm9TZXR0aW5ncyB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSBjYW52YXMuZ2V0Q29tcG9uZW50KE5ldXRyaW5vU2V0dGluZ3MpO1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MgPSBjYW52YXMuYWRkQ29tcG9uZW50KE5ldXRyaW5vU2V0dGluZ3MpO1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0V29ybGRQYXJlbnQgPSBjYW52YXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNjLk5ldXRyaW5vU2V0dGluZ3MgPSBOZXV0cmlub1NldHRpbmdzOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dd47KelZZLyadMohM05ouJ', 'NeutrinoAssembler');
// NeutrinoAssembler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NeutrinoAssemblerWebGL_1 = require("./NeutrinoAssemblerWebGL");
var NeutrinoAssemblerJSB_1 = require("./NeutrinoAssemblerJSB");
var NeutrinoAssembler = CC_JSB ? NeutrinoAssemblerJSB_1.default : NeutrinoAssemblerWebGL_1.default;
exports.default = NeutrinoAssembler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Bc3NlbWJsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsK0RBQTBEO0FBRTFELElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyw4QkFBb0IsQ0FBQyxDQUFDLENBQUMsZ0NBQXNCLENBQUM7QUFDakYsa0JBQWUsaUJBQWlCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV1dHJpbm9Bc3NlbWJsZXJXZWJHTCBmcm9tICcuL05ldXRyaW5vQXNzZW1ibGVyV2ViR0wnO1xyXG5pbXBvcnQgTmV1dHJpbm9Bc3NlbWJsZXJKU0IgZnJvbSAnLi9OZXV0cmlub0Fzc2VtYmxlckpTQic7XHJcblxyXG5jb25zdCBOZXV0cmlub0Fzc2VtYmxlciA9IENDX0pTQiA/IE5ldXRyaW5vQXNzZW1ibGVySlNCIDogTmV1dHJpbm9Bc3NlbWJsZXJXZWJHTDtcclxuZXhwb3J0IGRlZmF1bHQgTmV1dHJpbm9Bc3NlbWJsZXI7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/textures.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e0b7pYCxFA27qiwxcad20V', 'textures');
// neutrinoparticles/textures.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [{ "uuid": "a0b2248f-8fdf-4295-889a-38f2012cf28d", "path": "textures" }];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXHRleHR1cmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0JBQWUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxzQ0FBc0MsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFt7XCJ1dWlkXCI6XCJhMGIyMjQ4Zi04ZmRmLTQyOTUtODg5YS0zOGYyMDEyY2YyOGRcIixcInBhdGhcIjpcInRleHR1cmVzXCJ9XTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/BossController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c056/xdspPmoaGSWmCeGgR', 'BossController');
// Script/Controller/BossController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BossController = /** @class */ (function (_super) {
    __extends(BossController, _super);
    function BossController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.blast1 = null;
        _this.blast2 = null;
        _this.blast3 = null;
        return _this;
    }
    BossController.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.heliSound);
        this.scheduleOnce(function () {
            _this.blast1.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
        }, 0.5);
        this.scheduleOnce(function () {
            _this.blast2.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
        }, 0.7);
        this.scheduleOnce(function () {
            _this.blast3.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
        }, 1);
        cc.tween(this.node)
            .to(1, { scale: constants_1.Constants.scaleBoss, x: -40, y: -30 })
            .call(function () {
            constants_1.Constants.isWin = true;
            constants_1.Constants.isPauseGame = true;
        })
            .start();
    };
    __decorate([
        property(AudioManager_1.default)
    ], BossController.prototype, "AudioManager", void 0);
    __decorate([
        property(sp.Skeleton)
    ], BossController.prototype, "blast1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], BossController.prototype, "blast2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], BossController.prototype, "blast3", void 0);
    BossController = __decorate([
        ccclass
    ], BossController);
    return BossController;
}(cc.Component));
exports.default = BossController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCb3NzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBcUNDO1FBbENHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxZQUFNLEdBQWdCLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWdCLElBQUksQ0FBQzs7SUEyQi9CLENBQUM7SUF4QmEsOEJBQUssR0FBZjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxxQkFBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7YUFDbkQsSUFBSSxDQUFDO1lBQ0YscUJBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tEQUNLO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ0s7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDSztJQVZWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FxQ2xDO0lBQUQscUJBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzJDLEVBQUUsQ0FBQyxTQUFTLEdBcUN2RDtrQkFyQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3NzQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBibGFzdDE6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGJsYXN0Mjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgYmxhc3QzOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suaGVsaVNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsYXN0MS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsYXN0Mi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgIH0sIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsYXN0My5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5lYXJ0aFF1YWtlU291bmQpO1xyXG4gICAgICAgIH0sIDEpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDEsIHtzY2FsZTogQ29uc3RhbnRzLnNjYWxlQm9zcywgeDogLTQwLCB5OiAtMzB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchArea = {};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxTQUFTLEdBQUcsRUFFakIsQ0FBQTtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBRlMsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRWxELGFBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgIHN0YXRpYyBUb3VjaEFyZWE6IHR5cGVvZiBUb3VjaEFyZWEgPSBUb3VjaEFyZWE7XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/CTA.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71158ED8B1KhJK96FnjvNWK', 'CTA');
// Script/Other/CTA.ts

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
var GameController_1 = require("../Controller/GameController");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.AudioManager = null;
        _this.btn = null;
        _this.overlay = null;
        _this.PS = null;
        _this.Next = null;
        _this.tryAgain = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        // cc.tween(this.overlay)
        // .to(0.5, {opacity: 100})
        // .start();
        this.activeTweenForBtn();
        if (constants_1.Constants.isLoose) {
            this.tryAgain.active = true;
            this.Next.active = false;
        }
        else {
            this.tryAgain.active = false;
            this.Next.active = true;
            this.PS.resetSystem();
        }
        this.scheduleOnce(function () {
            // this.btn.opacity = 255;
            // this.tryAgain.opacity = 255;
            // this.Next.opacity = 255;
            if (constants_1.Constants.isLoose) {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.failSound);
            }
            else {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
            }
        }, 1.5);
        this.btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    NewClass.prototype.activeTweenForBtn = function () {
        cc.tween(this.btn)
            .repeatForever(cc.tween(this.btn)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
    };
    __decorate([
        property(GameController_1.GameController)
    ], NewClass.prototype, "GameController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], NewClass.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "overlay", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NewClass.prototype, "PS", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Next", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tryAgain", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQ1RBLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0RDO1FBNURHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFFBQUUsR0FBc0IsSUFBSSxDQUFDO1FBRzdCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUE2QzdCLENBQUM7SUExQ2Esd0JBQUssR0FBZjtRQUFBLGlCQStCQztRQTlCRyx5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLFlBQVk7UUFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFHLHFCQUFTLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QjtRQUdELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCwwQkFBMEI7WUFDMUIsK0JBQStCO1lBQy9CLDJCQUEyQjtZQUMzQixJQUFHLHFCQUFTLENBQUMsT0FBTyxFQUFFO2dCQUNsQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvRDtpQkFBTTtnQkFDSCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5RDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVQLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwRixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFHTyxvQ0FBaUIsR0FBekI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDakIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNiLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDeEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQ2pFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBM0REO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzt3Q0FDQztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFsQlIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStENUI7SUFBRCxlQUFDO0NBL0RELEFBK0RDLENBL0RxQyxFQUFFLENBQUMsU0FBUyxHQStEakQ7a0JBL0RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQUzogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTmV4dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRyeUFnYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMub3ZlcmxheSlcclxuICAgICAgICAvLyAudG8oMC41LCB7b3BhY2l0eTogMTAwfSlcclxuICAgICAgICAvLyAuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVR3ZWVuRm9yQnRuKCk7XHJcblxyXG4gICAgICAgIGlmKENvbnN0YW50cy5pc0xvb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QWdhaW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5OZXh0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QWdhaW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuTmV4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlBTLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJ0bi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRyeUFnYWluLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuTmV4dC5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBpZihDb25zdGFudHMuaXNMb29zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmZhaWxTb3VuZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2luU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMS41KVxyXG5cclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgICB0aGlzLm92ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlVHdlZW5Gb3JCdG4oKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5idG4pXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC40NSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC41IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgICkuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2ee0thttREWqwEqyE59c5l', 'Singleton');
// Script/Plugin/Singleton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Singleton = /** @class */ (function (_super) {
    __extends(Singleton, _super);
    function Singleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Singleton.Instance = function (c) {
        if (this._instance == null) {
            this._instance = new c();
        }
        return this._instance;
    };
    Singleton._instance = null;
    Singleton = __decorate([
        ccclass
    ], Singleton);
    return Singleton;
}(cc.Component));
exports.default = Singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFNpbmdsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyw2QkFBWTtJQUF0RDs7SUFVQSxDQUFDO0lBTmlCLGtCQUFRLEdBQXRCLFVBQTBCLENBQWU7UUFDckMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQVBhLG1CQUFTLEdBQUcsSUFBSSxDQUFDO0lBRmQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVU3QjtJQUFELGdCQUFDO0NBVkQsQUFVQyxDQVZ5QyxFQUFFLENBQUMsU0FBUyxHQVVyRDtrQkFWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGV0b248VD4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlPFQ+KGM6IHtuZXcoKTogVDsgfSkgOiBUe1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/CoinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f60c4CpqFlH750A1K4ORO4l', 'CoinController');
// Script/Controller/CoinController.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinController = /** @class */ (function (_super) {
    __extends(CoinController, _super);
    function CoinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.frameUnlockArmies = [];
        _this.frameUpgrade = null;
        _this.label = null;
        _this.tempEnemyDie = 0;
        _this.isTweenRunning = false;
        return _this;
    }
    CoinController.prototype.start = function () {
    };
    CoinController.prototype.increaseCoin = function (fromValue, toValue) {
        var _this = this;
        if (this.isTweenRunning)
            return;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.coinSound);
        this.label.string = String(fromValue);
        cc.tween(constants_1.Constants)
            .to(0.5, { currentCoin: toValue }, {
            progress: function (start, end, current, t) {
                var newValue = Math.floor(cc.misc.lerp(start, end, t));
                _this.label.string = newValue.toString();
                return newValue;
            },
        })
            .call(function () {
            _this.isTweenRunning = false;
        })
            .start();
    };
    CoinController.prototype.checkUnlockArmy = function () {
        for (var index = 0; index < this.frameUnlockArmies.length; index++) {
            var node = this.frameUnlockArmies[index];
            var cost = node.getChildByName("Label").getComponent(cc.Label);
            if (constants_1.Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            }
            else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    };
    CoinController.prototype.checkEnableFrameUpgrade = function () {
        var node = this.frameUpgrade;
        if (node) {
            var cost = node.getChildByName("Label").getComponent(cc.Label);
            if (constants_1.Constants.currentCoin < Number(cost.string)) {
                node.color = cc.color(113, 113, 113, 255);
            }
            else {
                node.color = cc.color(255, 255, 255, 255);
            }
        }
    };
    CoinController.prototype.update = function (dt) {
        this.checkUnlockArmy();
        // this.checkEnableFrameUpgrade();
        if (this.tempEnemyDie !== constants_1.Constants.enemyDie) {
            var toValue = constants_1.Constants.enemyDie * 30;
            this.increaseCoin(constants_1.Constants.currentCoin, toValue);
        }
        this.tempEnemyDie = constants_1.Constants.enemyDie;
    };
    __decorate([
        property(AudioManager_1.default)
    ], CoinController.prototype, "AudioManager", void 0);
    __decorate([
        property([cc.Node])
    ], CoinController.prototype, "frameUnlockArmies", void 0);
    __decorate([
        property(cc.Node)
    ], CoinController.prototype, "frameUpgrade", void 0);
    __decorate([
        property(cc.Label)
    ], CoinController.prototype, "label", void 0);
    CoinController = __decorate([
        ccclass
    ], CoinController);
    return CoinController;
}(cc.Component));
exports.default = CoinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxDb2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOEVDO1FBNUVHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUlsQyx1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFFbEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUFpRXBDLENBQUM7SUE5RGEsOEJBQUssR0FBZjtJQUVBLENBQUM7SUFHTSxxQ0FBWSxHQUFuQixVQUFvQixTQUFpQixFQUFFLE9BQWU7UUFBdEQsaUJBa0JDO1FBakJHLElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQy9CLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLENBQUM7U0FDSixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdPLHdDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRSxJQUFHLHFCQUFTLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDN0M7U0FDSjtJQUNMLENBQUM7SUFHTyxnREFBdUIsR0FBL0I7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLElBQUcsSUFBSSxFQUFFO1lBQ0wsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLElBQUcscUJBQVMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM3QztTQUNKO0lBQ0wsQ0FBQztJQUdTLCtCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLGtDQUFrQztRQUVsQyxJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUsscUJBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDekMsSUFBSSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDcEQ7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7SUEzRUQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUlsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2REFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0k7SUFWTixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOEVsQztJQUFELHFCQUFDO0NBOUVELEFBOEVDLENBOUUyQyxFQUFFLENBQUMsU0FBUyxHQThFdkQ7a0JBOUVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGZyYW1lVW5sb2NrQXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZnJhbWVVcGdyYWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgdGVtcEVuZW15RGllOiBudW1iZXIgPSAwO1xyXG4gICAgaXNUd2VlblJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlQ29pbihmcm9tVmFsdWU6IG51bWJlciwgdG9WYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUd2VlblJ1bm5pbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvaW5Tb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKGZyb21WYWx1ZSk7XHJcbiAgICAgICAgY2MudHdlZW4oQ29uc3RhbnRzKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IGN1cnJlbnRDb2luOiB0b1ZhbHVlIH0sIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoc3RhcnQsIGVuZCwgY3VycmVudCwgdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IE1hdGguZmxvb3IoY2MubWlzYy5sZXJwKHN0YXJ0LCBlbmQsIHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IG5ld1ZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1R3ZWVuUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1VubG9ja0FybXkoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZnJhbWVVbmxvY2tBcm1pZXMubGVuZ3RoOyBpbmRleCsrKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmZyYW1lVW5sb2NrQXJtaWVzW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgY29zdCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBpZihDb25zdGFudHMuY3VycmVudENvaW4gPCBOdW1iZXIoY29zdC5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNvbG9yID0gY2MuY29sb3IoMTEzLCAxMTMsIDExMywgMjU1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRW5hYmxlRnJhbWVVcGdyYWRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5mcmFtZVVwZ3JhZGU7XHJcbiAgICAgICAgaWYobm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3N0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmKENvbnN0YW50cy5jdXJyZW50Q29pbiA8IE51bWJlcihjb3N0LnN0cmluZykpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuY29sb3IgPSBjYy5jb2xvcigxMTMsIDExMywgMTEzLCAyNTUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tVbmxvY2tBcm15KCk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja0VuYWJsZUZyYW1lVXBncmFkZSgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnRlbXBFbmVteURpZSAhPT0gQ29uc3RhbnRzLmVuZW15RGllKSB7XHJcbiAgICAgICAgICAgIGxldCB0b1ZhbHVlID0gQ29uc3RhbnRzLmVuZW15RGllICogMzA7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VDb2luKENvbnN0YW50cy5jdXJyZW50Q29pbiwgdG9WYWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZW1wRW5lbXlEaWUgPSBDb25zdGFudHMuZW5lbXlEaWU7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/LoadFoodController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8aaf1Qac2lG3aTwixhAfLvl', 'LoadFoodController');
// Script/Controller/LoadFoodController.ts

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
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadFoodController = /** @class */ (function (_super) {
    __extends(LoadFoodController, _super);
    function LoadFoodController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overlay = null;
        _this.label = null;
        _this.unitCosts = [];
        _this.unitFrames = [];
        return _this;
    }
    LoadFoodController.prototype.start = function () {
        // this.label.string = String(Constants.food);
    };
    LoadFoodController.prototype.increaseFood = function () {
        var _this = this;
        this.overlay.scaleX = 0;
        if (constants_1.Constants.isPauseGame)
            return;
        cc.tween(this.overlay)
            .to(1.2, { scaleX: 1 })
            .call(function () {
            constants_1.Constants.food += 1;
            _this.increaseFood();
        })
            .start();
    };
    LoadFoodController.prototype.checkEnableCost = function () {
        for (var index = 0; index < this.unitCosts.length; index++) {
            var label = this.unitCosts[index];
            if (Number(this.label.string) >= Number(label.string)) {
                if (index === 0) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if (index === 1 && constants_1.Constants.isCanBuyArmyLv2) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if (index === 2 && constants_1.Constants.isCanBuyArmyLv3) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
            }
            else {
                label.node.color = cc.Color.RED;
                if (index === 1 && constants_1.Constants.isCanBuyArmyLv2)
                    this.unitFrames[index].opacity = 255;
                if (index === 2 && constants_1.Constants.isCanBuyArmyLv3)
                    this.unitFrames[index].opacity = 255;
                this.unitFrames[index].opacity = 0;
            }
        }
    };
    LoadFoodController.prototype.update = function (dt) {
        // if(Constants.isPauseGame) return;
        this.label.string = String(constants_1.Constants.food);
        this.checkEnableCost();
    };
    __decorate([
        property(cc.Node)
    ], LoadFoodController.prototype, "overlay", void 0);
    __decorate([
        property(cc.Label)
    ], LoadFoodController.prototype, "label", void 0);
    __decorate([
        property([cc.Label])
    ], LoadFoodController.prototype, "unitCosts", void 0);
    __decorate([
        property([cc.Node])
    ], LoadFoodController.prototype, "unitFrames", void 0);
    LoadFoodController = __decorate([
        ccclass
    ], LoadFoodController);
    return LoadFoodController;
}(cc.Component));
exports.default = LoadFoodController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxMb2FkRm9vZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBbUVDO1FBakVHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQWUsRUFBRSxDQUFDO1FBRTNCLGdCQUFVLEdBQWMsRUFBRSxDQUFDOztJQTBEL0IsQ0FBQztJQXZEYSxrQ0FBSyxHQUFmO1FBQ0ksOENBQThDO0lBQ2xELENBQUM7SUFHTSx5Q0FBWSxHQUFuQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUcscUJBQVMsQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUVqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNwQixJQUFJLENBQUM7WUFDRixxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQU1PLDRDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsRCxJQUFHLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDckM7Z0JBQ0QsSUFBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFO29CQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNyQztnQkFDRCxJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3JDO2FBQ0o7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLElBQUcsS0FBSyxLQUFLLENBQUMsSUFBSSxxQkFBUyxDQUFDLGVBQWU7b0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNsRixJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBR1MsbUNBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lEQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNPO0lBVFYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FtRXRDO0lBQUQseUJBQUM7Q0FuRUQsQUFtRUMsQ0FuRStDLEVBQUUsQ0FBQyxTQUFTLEdBbUUzRDtrQkFuRW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRm9vZENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXHJcbiAgICB1bml0Q29zdHM6IGNjLkxhYmVsW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICB1bml0RnJhbWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKENvbnN0YW50cy5mb29kKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlRm9vZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc2NhbGVYID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBpZihDb25zdGFudHMuaXNQYXVzZUdhbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vdmVybGF5KVxyXG4gICAgICAgIC50bygxLjIsIHtzY2FsZVg6IDF9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmZvb2QgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZUZvb2QoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRW5hYmxlQ29zdCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy51bml0Q29zdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy51bml0Q29zdHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZihOdW1iZXIodGhpcy5sYWJlbC5zdHJpbmcpID49IE51bWJlcihsYWJlbC5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMSAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RnJhbWVzW2luZGV4XS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAyICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRGcmFtZXNbaW5kZXhdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAxICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIpIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAyICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMpIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmKENvbnN0YW50cy5pc1BhdXNlR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKENvbnN0YW50cy5mb29kKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0VuYWJsZUNvc3QoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var LoadFoodController_1 = require("./LoadFoodController");
var SpawnController_1 = require("./SpawnController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.LoadFoodController = null;
        _this.SpawnController = null;
        // Node
        _this.CTA = null;
        // state
        _this.isCollideBaseFlag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
    };
    GamePlay.prototype.resetGame = function () {
        constants_1.Constants.allyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.enemyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.isStartGame = false;
        constants_1.Constants.isPauseGame = false;
        constants_1.Constants.isCanBuyArmyLv2 = false;
        constants_1.Constants.isCanBuyArmyLv3 = false;
        constants_1.Constants.isUpgrade = false;
        constants_1.Constants.isWin = false;
        constants_1.Constants.isLoose = false;
        constants_1.Constants.isCollideBase = false;
        constants_1.Constants.food = 6;
        constants_1.Constants.enemyDie = 0;
        constants_1.Constants.currentCoin = 0;
        constants_1.Constants.EnemyBaseHeal = 1;
        constants_1.Constants.AllyBaseHeal = 1;
        constants_1.Constants.allyArmies = [];
        constants_1.Constants.enemyArmies = [];
        cc.director.loadScene("game");
    };
    GamePlay.prototype.initGame = function () {
        constants_1.Constants.allyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.enemyArmies.forEach(function (army) { return army.destroy(); });
        constants_1.Constants.isStartGame = false;
        constants_1.Constants.isPauseGame = false;
        constants_1.Constants.isCanBuyArmyLv2 = false;
        constants_1.Constants.isCanBuyArmyLv3 = false;
        constants_1.Constants.isUpgrade = false;
        constants_1.Constants.isWin = false;
        constants_1.Constants.isLoose = false;
        constants_1.Constants.isCollideBase = false;
        constants_1.Constants.food = 6;
        constants_1.Constants.enemyDie = 0;
        constants_1.Constants.currentCoin = 0;
        constants_1.Constants.EnemyBaseHeal = 1;
        constants_1.Constants.AllyBaseHeal = 1;
        constants_1.Constants.allyArmies = [];
        constants_1.Constants.enemyArmies = [];
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.5;
        this.initGame();
        cc.view.setResizeCallback(function () {
            if (constants_1.Constants.ironSource.isEndGame)
                return;
            _this.resetGame();
        });
    };
    GamePlay.prototype.spawnArmy = function (index) {
        constants_1.Constants.isPauseGame = false;
        !constants_1.Constants.isStartGame && this.LoadFoodController.increaseFood();
        !constants_1.Constants.isStartGame && this.SpawnController.SpawnEnemies();
        constants_1.Constants.isStartGame = true;
        switch (index) {
            case 1:
                // spawn army lv1
                if (constants_1.Constants.food >= 3) {
                    constants_1.Constants.food -= 3;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 1);
                }
                break;
            case 2:
                // spawn army lv2
                if (constants_1.Constants.food >= 4 && constants_1.Constants.isCanBuyArmyLv2) {
                    constants_1.Constants.food -= 4;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 2);
                }
                break;
            case 3:
                // spawn army lv3
                if (constants_1.Constants.food >= 5 && constants_1.Constants.isCanBuyArmyLv3) {
                    constants_1.Constants.food -= 5;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 3);
                }
                break;
            default:
                console.log("can not spawn");
                break;
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(LoadFoodController_1.default)
    ], GamePlay.prototype, "LoadFoodController", void 0);
    __decorate([
        property(SpawnController_1.default)
    ], GamePlay.prototype, "SpawnController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNEhDO1FBMUhDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUU5QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsUUFBUTtRQUNSLHVCQUFpQixHQUFZLEtBQUssQ0FBQzs7SUE2R3JDLENBQUM7SUExR1cseUJBQU0sR0FBaEI7UUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGdCQUFnQixDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUMvQyw0Q0FBNEM7SUFDOUMsQ0FBQztJQUdNLDRCQUFTLEdBQWhCO1FBQ0UscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3JELHFCQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFB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QUFNO1lBQ1I7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsNEJBQWtCLENBQUM7d0RBQ2lCO0lBRTlDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7cURBQ2M7SUFJeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQVpELFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0SDVCO0lBQUQsZUFBQztDQTVIRCxBQTRIQyxDQTVIcUMsRUFBRSxDQUFDLFNBQVMsR0E0SGpEO2tCQTVIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IExvYWRGb29kQ29udHJvbGxlciBmcm9tIFwiLi9Mb2FkRm9vZENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFNwYXduQ29udHJvbGxlciBmcm9tIFwiLi9TcGF3bkNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KExvYWRGb29kQ29udHJvbGxlcilcclxuICBMb2FkRm9vZENvbnRyb2xsZXI6IExvYWRGb29kQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFNwYXduQ29udHJvbGxlcilcclxuICBTcGF3bkNvbnRyb2xsZXI6IFNwYXduQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIC8vIE5vZGVcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGlzQ29sbGlkZUJhc2VGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGxldCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAvLyBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyByZXNldEdhbWUoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcy5mb3JFYWNoKGFybXkgPT4gYXJteS5kZXN0cm95KCkpO1xyXG4gICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLmZvckVhY2goYXJteSA9PiBhcm15LmRlc3Ryb3koKSk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1dpbiA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzTG9vc2UgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NvbGxpZGVCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgQ29uc3RhbnRzLmZvb2QgPSA2O1xyXG4gICAgQ29uc3RhbnRzLmVuZW15RGllID0gMDtcclxuICAgIENvbnN0YW50cy5jdXJyZW50Q29pbiA9IDA7XHJcbiAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCA9IDE7XHJcbiAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsID0gMTtcclxuICAgIENvbnN0YW50cy5hbGx5QXJtaWVzID0gW107XHJcbiAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMgPSBbXTtcclxuXHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaW5pdEdhbWUoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuYWxseUFybWllcy5mb3JFYWNoKGFybXkgPT4gYXJteS5kZXN0cm95KCkpO1xyXG4gICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLmZvckVhY2goYXJteSA9PiBhcm15LmRlc3Ryb3koKSk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gZmFsc2U7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc1dpbiA9IGZhbHNlO1xyXG4gICAgQ29uc3RhbnRzLmlzTG9vc2UgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NvbGxpZGVCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgQ29uc3RhbnRzLmZvb2QgPSA2O1xyXG4gICAgQ29uc3RhbnRzLmVuZW15RGllID0gMDtcclxuICAgIENvbnN0YW50cy5jdXJyZW50Q29pbiA9IDA7XHJcbiAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCA9IDE7XHJcbiAgICBDb25zdGFudHMuQWxseUJhc2VIZWFsID0gMTtcclxuICAgIENvbnN0YW50cy5hbGx5QXJtaWVzID0gW107XHJcbiAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMgPSBbXTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5iZ1NvdW5kLnZvbHVtZSA9IDAuNTtcclxuXHJcbiAgICB0aGlzLmluaXRHYW1lKCk7XHJcblxyXG4gICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGlmKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNwYXduQXJteShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgICFDb25zdGFudHMuaXNTdGFydEdhbWUgJiYgdGhpcy5Mb2FkRm9vZENvbnRyb2xsZXIuaW5jcmVhc2VGb29kKCk7XHJcbiAgICAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduRW5lbWllcygpO1xyXG4gICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gdHJ1ZTtcclxuXHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICAvLyBzcGF3biBhcm15IGx2MVxyXG4gICAgICAgIGlmIChDb25zdGFudHMuZm9vZCA+PSAzKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSAzO1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjJcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gNCAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYyKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSA0O1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjNcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gNSAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzKSB7XHJcbiAgICAgICAgICBDb25zdGFudHMuZm9vZCAtPSA1O1xyXG4gICAgICAgICAgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25QbGF5ZXJBcm15KENvbnN0YW50cy5Bcm15U2tpbi5BbGx5LCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW4gbm90IHNwYXduXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/KingController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de5b51lmitFXq1nuMymTFt2', 'KingController');
// Script/Controller/KingController.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var Responsive_1 = require("../Plugin/Responsive");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KingController = /** @class */ (function (_super) {
    __extends(KingController, _super);
    function KingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Base = null;
        _this.HealthBar = null;
        _this.CTA = null;
        _this.Responsive = null;
        _this.AudioManager = null;
        _this.spine = null;
        _this.collider = null;
        _this.skin = "";
        _this.speed = 25;
        _this.canRun = true;
        _this.isBase = false;
        _this.isLive = true;
        _this.isAttacking = false;
        _this.isReadyToFight = false;
        _this.pauseFlag = false;
        _this.rigidbody = null;
        return _this;
    }
    KingController_1 = KingController;
    KingController.prototype.start = function () {
        var _this = this;
        this.AudioManager = this.node.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
        // active run to Base
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.HelpMe);
            _this.runToBase();
            _this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
        }, 0.2);
        this.schedule(function () {
            if (constants_1.Constants.isLoose || constants_1.Constants.isWin)
                return;
            _this.playSoundHelpMe();
        }, 2);
    };
    KingController.prototype.playSoundHelpMe = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.HelpMe);
    };
    KingController.prototype.runToBase = function () {
        var _this = this;
        var basePos = this.Base.getPosition();
        var currentDevice = this.Responsive.device;
        var calculateTime = null;
        switch (currentDevice) {
            case "horizontal_IPX":
                calculateTime = 23;
                break;
            case "horizontal_Tablet":
                calculateTime = 13.5;
                break;
            case "vertical_IPX":
                calculateTime = 13;
                break;
            case "vertical_Mobile":
                calculateTime = 13;
                break;
            default:
                break;
        }
        cc.tween(this.node)
            .to(calculateTime, { x: basePos.x }, { easing: cc.easing.smooth })
            .call(function () {
            // run to base Successfully
            cc.tween(_this.node)
                .to(0.5, { opacity: 0 })
                .start();
            if (_this.isLive) {
                constants_1.Constants.isPauseGame = true;
                constants_1.Constants.isWin = true;
                _this.CTA.active = true;
            }
        })
            .start();
    };
    KingController.prototype.die = function () {
        constants_1.Constants.isLoose = true;
        constants_1.Constants.isPauseGame = true;
        this.CTA.active = true;
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.node.getComponent(KingController_1).enabled = false;
    };
    KingController.prototype.checkDie = function () {
        var _this = this;
        this.isLive = false;
        this.spine.timeScale = 0.3;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
        this.HealthBar.active = false;
        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
        this.die();
    };
    KingController.prototype.decreaseHealth = function () {
        var random = cc.math.randomRangeInt(0, 4);
        switch (random) {
            case 0:
                this.spine.node.getChildByName("Vfx_1").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 1:
                this.spine.node.getChildByName("Vfx_2").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 2:
                this.spine.node.getChildByName("Vfx_3").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            case 3:
                this.spine.node.getChildByName("Vfx_4").getComponent(cc.Animation).play("VFx_Bleeding");
                break;
            default:
                break;
        }
        this.HealthBar.scaleX -= 0.05;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
    };
    KingController.prototype.update = function (dt) {
        // this.checkPause();
        if (this.HealthBar.scaleX <= 0.1 && this.isLive) {
            this.checkDie();
        }
        // this.checkRun();
    };
    var KingController_1;
    __decorate([
        property(cc.Node)
    ], KingController.prototype, "Base", void 0);
    __decorate([
        property(cc.Node)
    ], KingController.prototype, "HealthBar", void 0);
    __decorate([
        property(cc.Node)
    ], KingController.prototype, "CTA", void 0);
    __decorate([
        property(Responsive_1.default)
    ], KingController.prototype, "Responsive", void 0);
    KingController = KingController_1 = __decorate([
        ccclass
    ], KingController);
    return KingController;
}(cc.Component));
exports.default = KingController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxLaW5nQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTBKQztRQXhKRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixXQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBK0huQyxDQUFDO3VCQTFKb0IsY0FBYztJQThCckIsOEJBQUssR0FBZjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNwRCxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUMvRCxJ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SSxDQUFDO3FEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQztzREFDUztJQVhiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwSmxDO0lBQUQscUJBQUM7Q0ExSkQsQUEwSkMsQ0ExSjJDLEVBQUUsQ0FBQyxTQUFTLEdBMEp2RDtrQkExSm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgUmVzcG9uc2l2ZSBmcm9tIFwiLi4vUGx1Z2luL1Jlc3BvbnNpdmVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW5nQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJhc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGVhbHRoQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFJlc3BvbnNpdmUpXHJcbiAgICBSZXNwb25zaXZlOiBSZXNwb25zaXZlID0gbnVsbDtcclxuXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBzcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgY29sbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBza2luOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDI1O1xyXG5cclxuICAgIGNhblJ1bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0Jhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0F0dGFja2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSZWFkeVRvRmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwYXVzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudFxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJBdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KEF1ZGlvTWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5zcGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZlIHJ1biB0byBCYXNlXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suSGVscE1lKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub0Jhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgfSwgMC4yKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuaXNMb29zZSB8fCBDb25zdGFudHMuaXNXaW4pIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U291bmRIZWxwTWUoKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5U291bmRIZWxwTWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkhlbHBNZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcnVuVG9CYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBiYXNlUG9zID0gdGhpcy5CYXNlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREZXZpY2UgPSB0aGlzLlJlc3BvbnNpdmUuZGV2aWNlO1xyXG4gICAgICAgIGxldCBjYWxjdWxhdGVUaW1lOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnREZXZpY2UpIHtcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxfSVBYXCI6XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lID0gMjM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxfVGFibGV0XCI6XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lID0gMTMuNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWxfSVBYXCI6XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lID0gMTM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsX01vYmlsZVwiOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZSA9IDEzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKGNhbGN1bGF0ZVRpbWUsIHsgeDogYmFzZVBvcy54IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc21vb3RoIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJ1biB0byBiYXNlIFN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzTG9vc2UgPSB0cnVlO1xyXG4gICAgICAgIENvbnN0YW50cy5pc1BhdXNlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEtpbmdDb250cm9sbGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwaW5lLnRpbWVTY2FsZSA9IDAuMztcclxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uRGllLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlSGVhbHRoKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgcmFuZG9tID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCA0KTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyYW5kb20pIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiVmZ4XzFcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlZGeF9CbGVlZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJWZnhfMlwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVkZ4X0JsZWVkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlZmeF8zXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJWRnhfQmxlZWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiVmZ4XzRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlZGeF9CbGVlZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkhlYWx0aEJhci5zY2FsZVggLT0gMC4wNTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja1BhdXNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8PSAwLjEgJiYgdGhpcy5pc0xpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RpZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmNoZWNrUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.epicwarrior.stoneage");
                return;
            }
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
            //     return;
            // }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.epicwarrior.stoneage");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXlEQztRQXZERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBdUR0QyxDQUFDO0lBcERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR00sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsMkVBQTJFLENBQUMsQ0FBQztnQkFDeEYsT0FBTzthQUNWO1lBRUQsOEZBQThGO1lBQzlGLHVFQUF1RTtZQUN2RSxjQUFjO1lBQ2QsSUFBSTtZQUVKLEtBQUssQ0FBQyxJQUFJLENBQUMsMkVBQTJFLENBQUMsQ0FBQztZQUN4RixPQUFPO1NBQ1Y7UUFDRCwyRUFBMkU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO3dEQUNXO0lBRnpCLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0F5RDFCO0lBQUQscUJBQUM7Q0F6REQsQUF5REMsQ0F6RG1DLEVBQUUsQ0FBQyxTQUFTLEdBeUQvQztBQXpEWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4gXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFsbEhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluc3RhbGxcIik7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgICB3aW5kb3cuZ2FtZUVuZCAmJiB3aW5kb3cuZ2FtZUVuZCgpO1xyXG5cclxuICAgICAgICAvL0lmIGFkIG5ldHdvcmsgaXMgdGlrdG9rXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocGxheWFibGVTREspICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgd2luZG93LnBsYXlhYmxlU0RLLm9wZW5BcHBTdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIEV4aXRBcGkuZXhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3cm9rIGlzIGlyb25zb3VyY2VzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBkYXBpLm9wZW5TdG9yZVVybCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIHN1cHBvcnQgTVJBSUQgMi4wXHJcbiAgICAgICAgaWYgKHR5cGVvZihtcmFpZCkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYW4uZXBpY3dhcnJpb3Iuc3RvbmVhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgLy8gICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkNjQ0OTI2OTczMz9tdD04XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5lcGljd2Fycmlvci5zdG9uZWFnZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var IronSource_1 = require("../Data/IronSource");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // Node
        _this.CTA = null;
        _this.hidemask = null;
        _this.hand = null;
        _this.btn_SpawnArmys = [];
        _this.btn_install = null;
        _this.btn_upgrade = null;
        _this.btn_BuyArmys = [];
        _this.ps_upgrade = [];
        _this.Lv1Troops = [];
        _this.Lv2Troops = [];
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
        // this.Lv2Troops.forEach(troop => troop.active = false);
    };
    TouchAreaController.prototype.registerEvent = function () {
        // hidemask
        // this.hidemask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _this = this;
        var _loop_1 = function (index) {
            var btn = this_1.btn_SpawnArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                if (constants_1.Constants.isLoose || constants_1.Constants.isWin || _this.CTA.active)
                    return;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
                _this.GamePlay.spawnArmy(index + 1);
                _this.hand.active = false;
                // this.IronSource.handleIronSourcePlaySound();
            }, this_1);
        };
        var this_1 = this;
        // btn spawn army
        for (var index = 0; index < this.btn_SpawnArmys.length; index++) {
            _loop_1(index);
        }
        ;
        var _loop_2 = function (index) {
            var btn = this_2.btn_BuyArmys[index];
            btn.on(cc.Node.EventType.TOUCH_START, function () {
                if (constants_1.Constants.isToStore) {
                    _this.GameController.installHandle();
                    return;
                }
                // handle buy lv2 army
                if (index === 0) {
                    if (constants_1.Constants.currentCoin >= 60) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv2 = true;
                        constants_1.Constants.enemyDie -= 2;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
                // handle buy lv3 army
                else {
                    if (constants_1.Constants.currentCoin >= 90) {
                        _this.AudioManager.playSound(constants_1.Constants.SoundTrack.buySound);
                        console.log("buyed");
                        constants_1.Constants.isCanBuyArmyLv3 = true;
                        constants_1.Constants.enemyDie -= 3;
                        _this.btn_SpawnArmys[index + 1].getChildByName("frame").active = true;
                        btn.active = false;
                    }
                    else {
                        console.log("-- can not buy");
                    }
                }
            }, this_2);
        };
        var this_2 = this;
        // btn buy army
        for (var index = 0; index < this.btn_BuyArmys.length; index++) {
            _loop_2(index);
        }
        // btn upgrade
        // this.btn_upgrade.on(cc.Node.EventType.TOUCH_START, () => {
        //   this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
        //   if (Constants.currentCoin >= 120) {
        //     console.log("Upgraded");
        //     Constants.isUpgrade = true;
        //     Constants.enemyDie -= 4;
        //     this.AudioManager.playSound(Constants.SoundTrack.UpgradeSound);
        //     this.btn_upgrade.parent.active = false;
        //     this.ps_upgrade.forEach(ps => ps.resetSystem());
        //     this.Lv2Troops.forEach(troop => troop.active = true);
        //     this.Lv1Troops.forEach(troop => troop.active = false);
        //   } else {
        //     console.log("Fail");
        //   }
        // }, this);
        // btn install
        // this.btn_install.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hidemask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hand", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_SpawnArmys", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_install", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "btn_BuyArmys", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], TouchAreaController.prototype, "ps_upgrade", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv1Troops", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Lv2Troops", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBeUpDO1FBeEpDLFlBQVk7UUFFWixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBSXJCLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSTVCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBSTdCLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQyxlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGVBQVMsR0FBYyxFQUFFLENBQUM7O0lBbUg1QixDQUFDO0lBaEhXLG9DQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLG1DQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIseURBQXlEO0lBQzNELENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUVFLFdBQVc7UUFDWCw0RkFBNEY7UUFIOUYsaUJBbUdDO2dDQTdGVSxLQUFLO1lBQ1osSUFBTSxHQUFHLEdBQUcsT0FB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O0lBRXJDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNNO0lBdENmLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBeUovQjtJQUFELDBCQUFDO0NBekpELEFBeUpDLENBekp3QyxFQUFFLENBQUMsU0FBUyxHQXlKcEQ7QUF6Slksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuLi9EYXRhL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoSXJvblNvdXJjZSlcclxuICBJcm9uU291cmNlOiBJcm9uU291cmNlID0gbnVsbDtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIE5vZGVcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhpZGVtYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgYnRuX1NwYXduQXJteXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJ0bl9pbnN0YWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBidG5fdXBncmFkZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGJ0bl9CdXlBcm15czogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICBAcHJvcGVydHkoW2NjLlBhcnRpY2xlU3lzdGVtXSlcclxuICBwc191cGdyYWRlOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBMdjFUcm9vcHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgTHYyVHJvb3BzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgLy8gdGhpcy5MdjJUcm9vcHMuZm9yRWFjaCh0cm9vcCA9PiB0cm9vcC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGhpZGVtYXNrXHJcbiAgICAvLyB0aGlzLmhpZGVtYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIC8vIGJ0biBzcGF3biBhcm15XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5idG5fU3Bhd25Bcm15cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idG5fU3Bhd25Bcm15c1tpbmRleF07XHJcbiAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzVG9TdG9yZSkge1xyXG4gICAgICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlzTG9vc2UgfHwgQ29uc3RhbnRzLmlzV2luIHx8IHRoaXMuQ1RBLmFjdGl2ZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGlja1NvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5zcGF3bkFybXkoaW5kZXggKyAxKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgLy8gdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBidG4gYnV5IGFybXlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ0bl9CdXlBcm15cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idG5fQnV5QXJteXNbaW5kZXhdO1xyXG4gICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGJ1eSBsdjIgYXJteVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYnV5U291bmQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJidXllZFwiKTtcclxuXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIgPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlEaWUgLT0gMjtcclxuICAgICAgICAgICAgdGhpcy5idG5fU3Bhd25Bcm15c1tpbmRleCArIDFdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBidXkgbHYzIGFybXlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuY3VycmVudENvaW4gPj0gOTApIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJ1eVNvdW5kKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnV5ZWRcIik7XHJcblxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDYW5CdXlBcm15THYzID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15RGllIC09IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX1NwYXduQXJteXNbaW5kZXggKyAxXS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIGNhbiBub3QgYnV5XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBidG4gdXBncmFkZVxyXG4gICAgLy8gdGhpcy5idG5fdXBncmFkZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suVXBncmFkZVNvdW5kKTtcclxuICAgIC8vICAgaWYgKENvbnN0YW50cy5jdXJyZW50Q29pbiA+PSAxMjApIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlVwZ3JhZGVkXCIpO1xyXG4gICAgLy8gICAgIENvbnN0YW50cy5pc1VwZ3JhZGUgPSB0cnVlO1xyXG4gICAgLy8gICAgIENvbnN0YW50cy5lbmVteURpZSAtPSA0O1xyXG4gICAgLy8gICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5VcGdyYWRlU291bmQpO1xyXG4gICAgLy8gICAgIHRoaXMuYnRuX3VwZ3JhZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMucHNfdXBncmFkZS5mb3JFYWNoKHBzID0+IHBzLnJlc2V0U3lzdGVtKCkpO1xyXG4gICAgLy8gICAgIHRoaXMuTHYyVHJvb3BzLmZvckVhY2godHJvb3AgPT4gdHJvb3AuYWN0aXZlID0gdHJ1ZSk7XHJcbiAgICAvLyAgICAgdGhpcy5MdjFUcm9vcHMuZm9yRWFjaCh0cm9vcCA9PiB0cm9vcC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJGYWlsXCIpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gfSwgdGhpcyk7XHJcblxyXG5cclxuICAgIC8vIGJ0biBpbnN0YWxsXHJcbiAgICAvLyB0aGlzLmJ0bl9pbnN0YWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var ArmySkin;
(function (ArmySkin) {
    ArmySkin["Ally"] = "ally";
    ArmySkin["Enemy"] = "enemy";
})(ArmySkin || (ArmySkin = {}));
var ArmyAnim;
(function (ArmyAnim) {
    ArmyAnim["Attack"] = "Attack";
    ArmyAnim["Die"] = "Die";
    ArmyAnim["Hurt"] = "Hurt";
    ArmyAnim["Run"] = "Run";
})(ArmyAnim || (ArmyAnim = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
    isHor: false,
    isVer: false,
    speedCalculated: 0,
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["ArmyLv1HitSound"] = "ArmyLv1HitSound";
    SoundTrack["ArmyLv2HitSound"] = "ArmyLv2HitSound";
    SoundTrack["ArmyLv3HitSound"] = "ArmyLv3HitSound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["buySound"] = "buySound";
    SoundTrack["coinSound"] = "coinSound";
    SoundTrack["failSound"] = "failSound";
    SoundTrack["winSound"] = "winSound";
    SoundTrack["earthQuakeSound"] = "earthQuakeSound";
    SoundTrack["heliSound"] = "heliSound";
    SoundTrack["UpgradeSound"] = "UpgradeSound";
    SoundTrack["Lv2_Kinife"] = "Lv2_Kinife";
    SoundTrack["Lv2_Gun"] = "Lv2_Gun";
    SoundTrack["Lv2_Tank"] = "Lv2_Tank";
    SoundTrack["HelpMe"] = "HelpMe";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = false;
    Constants.isToStore = false;
    Constants.isStartGame = false;
    Constants.isHasResult = false;
    Constants.isGainCoin = false;
    Constants.isPauseGame = false;
    Constants.isWin = false;
    Constants.isLoose = false;
    Constants.isCollideBase = false;
    Constants.isCanBuyArmyLv2 = false;
    Constants.isCanBuyArmyLv3 = false;
    Constants.isUpgrade = false;
    Constants.currentCoin = 0;
    Constants.increaseCoin = 10;
    Constants.enemyDie = 0;
    Constants.food = 6;
    Constants.EnemyBaseHeal = 1;
    Constants.AllyBaseHeal = 1;
    Constants.scaleBoss = 0.5;
    Constants.scaleArmy = 0;
    Constants.enemyArmies = [];
    Constants.allyArmies = [];
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    // Army Side
    Constants.ArmySkin = ArmySkin;
    // Army Anim
    Constants.ArmyAnim = ArmyAnim;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx5QkFBYSxDQUFBO0lBQ2IsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUdELElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULDZCQUFpQixDQUFBO0lBQ2pCLHVCQUFXLENBQUE7SUFDWCx5QkFBYSxDQUFBO0lBQ2IsdUJBQVcsQ0FBQTtBQUNmLENBQUMsRUFMSSxRQUFRLEtBQVIsUUFBUSxRQUtaO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7SUFDakIsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztJQUNaLGVBQWUsRUFBRSxDQUFDO0NBQ3JCLENBQUE7QUFHRCxJQUFLLFVBa0JKO0FBbEJELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLGlEQUFtQyxDQUFBO0lBQ25DLGlEQUFtQyxDQUFBO0lBQ25DLGlEQUFtQyxDQUFBO0lBQ25DLHVDQUF5QixDQUFBO0lBQ3pCLG1DQUFxQixDQUFBO0lBQ3JCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0lBQ3ZCLG1DQUFxQixDQUFBO0lBQ3JCLGlEQUFtQyxDQUFBO0lBQ25DLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0lBRTdCLHVDQUF5QixDQUFBO0lBQ3pCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0lBQ3JCLCtCQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFsQkksVUFBVSxLQUFWLFVBQVUsUUFrQmQ7QUFHRDtJQUFBO0lBdURBLENBQUM7SUFyREcsWUFBWTtJQUNMLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLG9CQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLGVBQUssR0FBWSxLQUFLLENBQUM7SUFDdkIsaUJBQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsdUJBQWEsR0FBWSxLQUFLLENBQUM7SUFFL0IseUJBQWUsR0FBWSxLQUFLLENBQUM7SUFDakMseUJBQWUsR0FBWSxLQUFLLENBQUM7SUFDakMsbUJBQVMsR0FBWSxLQUFLLENBQUM7SUFFM0IscUJBQVcsR0FBVyxDQUFDLENBQUM7SUFDeEIsc0JBQVksR0FBVyxFQUFFLENBQUM7SUFDMUIsa0JBQVEsR0FBVyxDQUFDLENBQUM7SUFDckIsY0FBSSxHQUFXLENBQUMsQ0FBQztJQUNqQix1QkFBYSxHQUFXLENBQUMsQ0FBQztJQUMxQixzQkFBWSxHQUFXLENBQUMsQ0FBQztJQUN6QixtQkFBUyxHQUFXLEdBQUcsQ0FBQztJQUN4QixtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUV0QixxQkFBVyxHQUFjLEVBQUUsQ0FBQztJQUM1QixvQkFBVSxHQUFjLEVBQUUsQ0FBQztJQUdsQyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsWUFBWTtJQUNMLGtCQUFRLEdBQW9CLFFBQVEsQ0FBQztJQUc1QyxZQUFZO0lBQ0wsa0JBQVEsR0FBb0IsUUFBUSxDQUFDO0lBRWhELGdCQUFDO0NBdkRELEFBdURDLElBQUE7QUF2RFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmVudW0gQXJteVNraW4ge1xyXG4gICAgQWxseSA9IFwiYWxseVwiLFxyXG4gICAgRW5lbXkgPSBcImVuZW15XCJcclxufVxyXG5cclxuXHJcbmVudW0gQXJteUFuaW0ge1xyXG4gICAgQXR0YWNrID0gXCJBdHRhY2tcIixcclxuICAgIERpZSA9IFwiRGllXCIsXHJcbiAgICBIdXJ0ID0gXCJIdXJ0XCIsXHJcbiAgICBSdW4gPSBcIlJ1blwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxuICAgIGlzSG9yOiBmYWxzZSxcclxuICAgIGlzVmVyOiBmYWxzZSxcclxuICAgIHNwZWVkQ2FsY3VsYXRlZDogMCxcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBBcm15THYxSGl0U291bmQgPSBcIkFybXlMdjFIaXRTb3VuZFwiLFxyXG4gICAgQXJteUx2MkhpdFNvdW5kID0gXCJBcm15THYySGl0U291bmRcIixcclxuICAgIEFybXlMdjNIaXRTb3VuZCA9IFwiQXJteUx2M0hpdFNvdW5kXCIsXHJcbiAgICBjbGlja1NvdW5kID0gXCJjbGlja1NvdW5kXCIsXHJcbiAgICBidXlTb3VuZCA9IFwiYnV5U291bmRcIixcclxuICAgIGNvaW5Tb3VuZCA9IFwiY29pblNvdW5kXCIsXHJcbiAgICBmYWlsU291bmQgPSBcImZhaWxTb3VuZFwiLFxyXG4gICAgd2luU291bmQgPSBcIndpblNvdW5kXCIsXHJcbiAgICBlYXJ0aFF1YWtlU291bmQgPSBcImVhcnRoUXVha2VTb3VuZFwiLFxyXG4gICAgaGVsaVNvdW5kID0gXCJoZWxpU291bmRcIixcclxuICAgIFVwZ3JhZGVTb3VuZCA9IFwiVXBncmFkZVNvdW5kXCIsXHJcblxyXG4gICAgTHYyX0tpbmlmZSA9IFwiTHYyX0tpbmlmZVwiLFxyXG4gICAgTHYyX0d1biA9IFwiTHYyX0d1blwiLFxyXG4gICAgTHYyX1RhbmsgPSBcIkx2Ml9UYW5rXCIsXHJcbiAgICBIZWxwTWUgPSBcIkhlbHBNZVwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNTdGFydEdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0hhc1Jlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzR2FpbkNvaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1BhdXNlR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNMb29zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ29sbGlkZUJhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNDYW5CdXlBcm15THYyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDYW5CdXlBcm15THYzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNVcGdyYWRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnRDb2luOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGluY3JlYXNlQ29pbjogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgZW5lbXlEaWU6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgZm9vZDogbnVtYmVyID0gNjtcclxuICAgIHN0YXRpYyBFbmVteUJhc2VIZWFsOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIEFsbHlCYXNlSGVhbDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBzY2FsZUJvc3M6IG51bWJlciA9IDAuNTtcclxuICAgIHN0YXRpYyBzY2FsZUFybXk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIGVuZW15QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHN0YXRpYyBhbGx5QXJtaWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG5cclxuICAgIC8vIEFybXkgU2lkZVxyXG4gICAgc3RhdGljIEFybXlTa2luOiB0eXBlb2YgQXJteVNraW4gPSBBcm15U2tpbjtcclxuXHJcblxyXG4gICAgLy8gQXJteSBBbmltXHJcbiAgICBzdGF0aWMgQXJteUFuaW06IHR5cGVvZiBBcm15QW5pbSA9IEFybXlBbmltO1xyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/IronSource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c0ang8TBDWqCvjXG1XKDi', 'IronSource');
// Script/Data/IronSource.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IronSource = /** @class */ (function (_super) {
    __extends(IronSource, _super);
    function IronSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
        // protected update(dt: number): void {
        //   this.handleMuteSoundIronSource();
        // }
    }
    IronSource.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    IronSource.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], IronSource.prototype, "AudioManager", void 0);
    IronSource = __decorate([
        ccclass
    ], IronSource);
    return IronSource;
}(cc.Component));
exports.default = IronSource;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxJcm9uU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUFqQ0Msa0JBQVksR0FBaUIsSUFBSSxDQUFDOztRQThCbEMsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQS9CUSw4Q0FBeUIsR0FBaEM7UUFDRSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUdPLDhDQUF5QixHQUFqQztRQUNFLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxGLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDM0cscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7b0RBQ1c7SUFIZixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0M5QjtJQUFELGlCQUFDO0NBcENELEFBb0NDLENBcEN1QyxFQUFFLENBQUMsU0FBUyxHQW9DbkQ7a0JBcENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJcm9uU291cmNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/BaseController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff0ebeMo+dPNqttw4fwK25C', 'BaseController');
// Script/Controller/BaseController.ts

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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseController = /** @class */ (function (_super) {
    __extends(BaseController, _super);
    function BaseController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.baseLose = null;
        _this.HealthBar = null;
        _this.baseSide = "";
        _this.baseLv2 = null;
        _this.rigidbody = null;
        _this.collider = null;
        _this.isUpgrade = false;
        return _this;
    }
    BaseController.prototype.start = function () {
        if (this.baseSide === "Player") {
            this.baseLv2 = this.node.getChildByName("base").getChildByName("baseLv2");
        }
    };
    BaseController.prototype.update = function (dt) {
        if (this.baseSide === "Player" && !constants_1.Constants.isHasResult) {
            if (this.HealthBar.scaleX < 0.05) {
                constants_1.Constants.isHasResult = true;
                constants_1.Constants.isPauseGame = true;
                constants_1.Constants.isLoose = true;
                this.HealthBar.active = false;
                this.baseLose.active = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
                this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = constants_1.Constants.AllyBaseHeal;
        }
        if (this.baseSide === "Enemy" && !constants_1.Constants.isHasResult) {
            if (this.HealthBar.scaleX < 0.05) {
                constants_1.Constants.isHasResult = true;
                constants_1.Constants.isPauseGame = true;
                this.baseLose.active = true;
                this.HealthBar.active = false;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.earthQuakeSound);
                this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
                this.node.getChildByName("base").getChildByName("HealBar").active = false;
                this.GamePlay.CTA.active = true;
            }
            this.HealthBar.scaleX = constants_1.Constants.EnemyBaseHeal;
        }
        // upgradeBase
        if (this.baseSide === "Player" && constants_1.Constants.isUpgrade && !this.isUpgrade) {
            this.isUpgrade = true;
            this.node.getChildByName("base").getComponent(cc.Sprite).enabled = false;
            this.baseLv2.active = true;
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], BaseController.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], BaseController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], BaseController.prototype, "baseLose", void 0);
    __decorate([
        property(cc.Node)
    ], BaseController.prototype, "HealthBar", void 0);
    __decorate([
        property(cc.String)
    ], BaseController.prototype, "baseSide", void 0);
    BaseController = __decorate([
        ccclass
    ], BaseController);
    return BaseController;
}(cc.Component));
exports.default = BaseController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWlFQztRQS9ERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBMEIsSUFBSSxDQUFDO1FBRXZDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBZ0QvQixDQUFDO0lBN0NhLDhCQUFLLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQztJQUdTLCtCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3RELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFO2dCQUM5QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHFCQUFTLENBQUMsV0FB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cUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRTJDLEVBQUUsQ0FBQyxTQUFTLEdBaUV2RDtrQkFqRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFzZUxvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIZWFsdGhCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGJhc2VTaWRlOiBTdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGJhc2VMdjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIGlzVXBncmFkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZVNpZGUgPT09IFwiUGxheWVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlTHYyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImJhc2VMdjJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlU2lkZSA9PT0gXCJQbGF5ZXJcIiAmJiAhQ29uc3RhbnRzLmlzSGFzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkhlYWx0aEJhci5zY2FsZVggPCAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIYXNSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pc0xvb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGVhbHRoQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlTG9zZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmVhcnRoUXVha2VTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFsQmFyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkhlYWx0aEJhci5zY2FsZVggPSBDb25zdGFudHMuQWxseUJhc2VIZWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZVNpZGUgPT09IFwiRW5lbXlcIiAmJiAhQ29uc3RhbnRzLmlzSGFzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkhlYWx0aEJhci5zY2FsZVggPCAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIYXNSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzUGF1c2VHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZUxvc2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGVhbHRoQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmVhcnRoUXVha2VTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFsQmFyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkhlYWx0aEJhci5zY2FsZVggPSBDb25zdGFudHMuRW5lbXlCYXNlSGVhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVwZ3JhZGVCYXNlXHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZVNpZGUgPT09IFwiUGxheWVyXCIgJiYgQ29uc3RhbnRzLmlzVXBncmFkZSAmJiAhdGhpcy5pc1VwZ3JhZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1VwZ3JhZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlTHYyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/Army.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e890fnTUplJe5ZAPuR2b1Xy', 'Army');
// Script/Other/Army.ts

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
var KingController_1 = require("../Controller/KingController");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Army = /** @class */ (function (_super) {
    __extends(Army, _super);
    function Army() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HealthBar = null;
        _this.AudioManager = null;
        _this.spine = null;
        _this.collider = null;
        _this.skin = "";
        _this.speed = 25;
        _this.canRun = true;
        _this.isBase = false;
        _this.isLive = true;
        _this.isAttacking = false;
        _this.isReadyToFight = false;
        _this.pauseFlag = false;
        _this.rigidbody = null;
        _this.collisionCount = 0;
        return _this;
    }
    Army_1 = Army;
    Army.prototype.start = function () {
        this.AudioManager = this.node.parent.parent.parent.parent.parent.parent
            .getChildByName("AudioManager").getComponent(AudioManager_1.default);
        this.spine = this.node.getChildByName("Spine").getComponent(sp.Skeleton);
        this.collider = this.getComponent(cc.BoxCollider);
    };
    Army.prototype.onCollisionEnter = function (o, s) {
        // enemy collide with king
        if (this.skin === "enemy" && o.tag === 7) {
            this.collisionCount++;
            this.setCollisionForEnemy(o);
            this.canRun = false;
            return;
        }
        if ((o.tag === 1 || o.tag === 0 || o.tag === 2) && s.tag !== 9) {
            this.collisionCount++;
            this.skin === constants_1.Constants.ArmySkin.Ally && this.setCollisionForAlly(o);
            this.skin === constants_1.Constants.ArmySkin.Enemy && this.setCollisionForEnemy(o);
            this.canRun = false;
            return;
        }
        if (o.tag === 9) {
            this.isReadyToFight = true;
        }
        if (this.collisionCount < 0)
            this.collisionCount = 0;
    };
    Army.prototype.onCollisionStay = function (o, s) {
        if ((o.tag === 1 || o.tag === 0) && s.tag !== 9) {
            this.canRun = false;
        }
    };
    Army.prototype.onCollisionExit = function (o, s) {
        if (o.tag === 9) {
            this.isReadyToFight = false;
        }
        if (!this.isLive)
            return;
        if ((o.tag === 1 || o.tag === 0 || o.tag === 2) || (this.skin === "enemy" && o.tag === 7) && !this.isAttacking) {
            this.collisionCount--;
            if (this.collisionCount === 0) {
                this.canRun = true;
                this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
            }
        }
        if (this.collisionCount < 0)
            this.collisionCount = 0;
    };
    Army.prototype.setCollisionForAlly = function (o) {
        // hit enemy base || enemy army
        if (o.tag === 0 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            if (this.node.name === "Army_Lv2")
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv2HitSound);
            this.checkDoneAttackAnim(false, o);
        }
        // hit enemy base
        if (o.tag === 0) {
            // Constants.isCollideBase = true;
            this.isBase = true;
        }
    };
    Army.prototype.setCollisionForEnemy = function (o) {
        // hit ally base || ally army
        if (o.tag === 1 || o.tag === 2) {
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            this.checkDoneAttackAnim(false, o);
        }
        if (o.tag === 7) {
            this.isAttacking = true;
            this.canRun = false;
            !(this.spine.animation === "Attack") && this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Attack, true);
            this.checkDoneAttackAnim(true, o);
        }
        // hit ally base
        if (o.tag === 1) {
            this.isBase = true;
        }
    };
    Army.prototype.checkDoneAttackAnim = function (isKing, o) {
        var _this = this;
        this.spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Attack") {
                // nếu là king thì mới cho đấm king
                if (isKing && o.getComponent(KingController_1.default)) {
                    o.getComponent(KingController_1.default).decreaseHealth();
                    _this.isAttacking = false;
                    _this.collisionCount--;
                    if (_this.collisionCount === 0) {
                        _this.canRun = true;
                        _this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
                    }
                    return;
                }
                if (o) {
                    var VFx_bleed = o.node.getChildByName("Spine").getChildByName("Vfx_1").getComponent(cc.Animation);
                    VFx_bleed.play();
                }
                _this.isBase
                    ? _this.handleDecreaseHealthBase()
                    : _this.handleDecreaseHealthArmy();
            }
        });
    };
    Army.prototype.handleDecreaseHealthBase = function () {
        if (this.skin === "ally" && this.node.name === "Army_Lv3") {
            constants_1.Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
            return;
        }
        if (this.node.name === "Army2_Lv3") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
            var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
            spineAttackOfTank.node.active = true;
            spineAttackOfTank.setAnimation(0, "2", false);
            constants_1.Constants.EnemyBaseHeal -= 0.2;
            return;
        }
        if (this.node.name === "Army2_Lv2") {
            constants_1.Constants.EnemyBaseHeal -= 0.1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
            return;
        }
        if (this.skin === "ally" && this.node.name === "Army_Lv2") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.EnemyBaseHeal -= 0.08;
            return;
        }
        if (this.skin === "ally") {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            constants_1.Constants.EnemyBaseHeal -= 0.05;
        }
        if (this.skin === "enemy") {
            constants_1.Constants.AllyBaseHeal -= 0.05;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
        }
    };
    Army.prototype.handleDecreaseHealthArmy = function () {
        if (this.skin === "ally") {
            if (this.node.name === "Army_Lv3") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv3HitSound);
                return;
            }
            if (this.node.name === "Army2_Lv3") {
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Tank);
                var spineAttackOfTank = this.node.getChildByName("Blast").getComponent(sp.Skeleton);
                spineAttackOfTank.node.active = true;
                spineAttackOfTank.setAnimation(0, "2", false);
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 1;
                return;
            }
            if (this.node.name === "Army2_Lv2") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.5;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Gun);
                return;
            }
            if (this.node.name === "Army_Lv2") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
                return;
            }
            if (this.node.name === "Army2_Lv1") {
                constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.3;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Lv2_Kinife);
                return;
            }
            constants_1.Constants.enemyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
            return;
        }
        else {
            if (constants_1.Constants.allyArmies[0]) {
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.ArmyLv1HitSound);
                constants_1.Constants.allyArmies[0].getComponent(Army_1).HealthBar.scaleX -= 0.2;
            }
        }
    };
    Army.prototype.die = function () {
        this.node.getComponent(cc.Collider).enabled = false;
        this.node.getComponent(cc.Collider).destroy();
        this.node.getComponent(Army_1).enabled = false;
        // decrease the first ally/enemy in constant array;
        if (this.skin === "enemy") {
            constants_1.Constants.enemyDie += 1;
            constants_1.Constants.enemyArmies.splice(0, 1);
        }
        else {
            constants_1.Constants.allyArmies.splice(0, 1);
        }
    };
    Army.prototype.checkDie = function () {
        var _this = this;
        this.isLive = false;
        this.spine.timeScale = 0.3;
        this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Die, false);
        this.HealthBar.active = false;
        cc.tween(this.node)
            .to(1, { opacity: 0 })
            .call(function () { return _this.node.destroy(); })
            .start();
        this.die();
    };
    Army.prototype.checkRun = function () {
        if (!this.isLive)
            return;
        var firstEnemyPos = null;
        var targetPos = null;
        if (this.skin === "ally" && this.canRun) {
            var currentPos = this.node.getPosition();
            this.isReadyToFight
                ? firstEnemyPos = this.roadToEnemyPos(currentPos, "ally")
                : firstEnemyPos = currentPos;
            if (this.node.name === "Army_Lv3" || this.node.name === "Army2_Lv3") {
                targetPos = new cc.Vec2(currentPos.x + 25 + constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
                return;
            }
            if (this.node.name === "Army" || this.node.name === "Army2_Lv2"
                || this.node.name === "Army2_Lv1" || this.node.name === "Army_Lv2") {
                targetPos = new cc.Vec2(currentPos.x + 10 + constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
                this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
            }
        }
        if (this.skin === "enemy" && this.canRun) {
            var currentPos = this.node.getPosition();
            this.isReadyToFight
                ? firstEnemyPos = this.roadToEnemyPos(currentPos, "enemy")
                : firstEnemyPos = currentPos;
            if (constants_1.Constants.isRotate) {
                targetPos = new cc.Vec2(currentPos.x - 30 - constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
            }
            else {
                targetPos = new cc.Vec2(currentPos.x - 20 - constants_1.Constants.Responsive.speedCalculated, firstEnemyPos.y);
            }
            this.node.setPosition(currentPos.lerp(targetPos, 0.02, currentPos));
        }
    };
    Army.prototype.roadToEnemyPos = function (currentPos, yourSide) {
        if (yourSide === "ally") {
            if (constants_1.Constants.enemyArmies[0]) {
                return constants_1.Constants.enemyArmies[0].getPosition();
            }
            else {
                return currentPos;
            }
        }
        else {
            if (constants_1.Constants.allyArmies[0]) {
                return constants_1.Constants.allyArmies[0].getPosition();
            }
            else {
                return currentPos;
            }
        }
    };
    Army.prototype.checkPause = function () {
        if (constants_1.Constants.isPauseGame) {
            this.canRun = false;
        }
        if (constants_1.Constants.isPauseGame && !this.pauseFlag) {
            this.canRun = false;
            this.collider.enabled = false;
            this.pauseFlag = true;
            this.spine.setAnimation(0, constants_1.Constants.ArmyAnim.Run, true);
            return;
        }
        if (!constants_1.Constants.isPauseGame) {
            this.pauseFlag = false;
        }
    };
    Army.prototype.update = function (dt) {
        this.checkPause();
        if (this.HealthBar.scaleX <= 0.1 && this.isLive) {
            this.checkDie();
        }
        this.checkRun();
    };
    var Army_1;
    __decorate([
        property(cc.Node)
    ], Army.prototype, "HealthBar", void 0);
    Army = Army_1 = __decorate([
        ccclass
    ], Army);
    return Army;
}(cc.Component));
exports.default = Army;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcQXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTBXQztRQXhXRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixvQkFBYyxHQUFXLENBQUMsQ0FBQzs7SUFzVnZDLENBQUM7YUExV29CLElBQUk7SUF1Qlgsb0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDbEUsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FB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QUssQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFHUyxxQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOztJQXZXRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBRlQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTBXeEI7SUFBRCxXQUFDO0NBMVdELEFBMFdDLENBMVdpQyxFQUFFLENBQUMsU0FBUyxHQTBXN0M7a0JBMVdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtpbmdDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0tpbmdDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL1BsdWdpbi9TaW5nbGV0b25cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcm15IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGVhbHRoQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBzcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgY29sbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBza2luOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDI1O1xyXG5cclxuICAgIGNhblJ1bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0Jhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0F0dGFja2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSZWFkeVRvRmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwYXVzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbGxpc2lvbkNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LnBhcmVudC5wYXJlbnRcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChBdWRpb01hbmFnZXIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIobzogY2MuUGh5c2ljc0NvbGxpZGVyLCBzOiBjYy5Db2xsaWRlcikge1xyXG5cclxuICAgICAgICAvLyBlbmVteSBjb2xsaWRlIHdpdGgga2luZ1xyXG4gICAgICAgIGlmKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiICYmIG8udGFnID09PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xsaXNpb25Gb3JFbmVteShvKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChvLnRhZyA9PT0gMSB8fCBvLnRhZyA9PT0gMCB8fCBvLnRhZyA9PT0gMikgJiYgcy50YWcgIT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25Db3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4gPT09IENvbnN0YW50cy5Bcm15U2tpbi5BbGx5ICYmIHRoaXMuc2V0Q29sbGlzaW9uRm9yQWxseShvKTtcclxuICAgICAgICAgICAgdGhpcy5za2luID09PSBDb25zdGFudHMuQXJteVNraW4uRW5lbXkgJiYgdGhpcy5zZXRDb2xsaXNpb25Gb3JFbmVteShvKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG8udGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeVRvRmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkNvdW50IDwgMCkgdGhpcy5jb2xsaXNpb25Db3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uU3RheShvOiBjYy5QaHlzaWNzQ29sbGlkZXIsIHMpIHtcclxuICAgICAgICBpZiAoKG8udGFnID09PSAxIHx8IG8udGFnID09PSAwKSAmJiBzLnRhZyAhPT0gOSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FeGl0KG8sIHMpIHtcclxuICAgICAgICBpZiAoby50YWcgPT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5VG9GaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoKG8udGFnID09PSAxIHx8IG8udGFnID09PSAwIHx8IG8udGFnID09PSAyKSB8fCAodGhpcy5za2luID09PSBcImVuZW15XCIgJiYgby50YWcgPT09IDcpICYmICF0aGlzLmlzQXR0YWNraW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uQ291bnQtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25Db3VudCA8IDApIHRoaXMuY29sbGlzaW9uQ291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpc2lvbkZvckFsbHkobzogY2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaGl0IGVuZW15IGJhc2UgfHwgZW5lbXkgYXJteVxyXG4gICAgICAgIGlmIChvLnRhZyA9PT0gMCB8fCBvLnRhZyA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAhKHRoaXMuc3BpbmUuYW5pbWF0aW9uID09PSBcIkF0dGFja1wiKSAmJiB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uQXR0YWNrLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYyXCIpIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYySGl0U291bmQpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0oZmFsc2UsIG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGl0IGVuZW15IGJhc2VcclxuICAgICAgICBpZiAoby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLmlzQ29sbGlkZUJhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpc2lvbkZvckVuZW15KG86IGNjLlBoeXNpY3NDb2xsaWRlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGhpdCBhbGx5IGJhc2UgfHwgYWxseSBhcm15XHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxIHx8IG8udGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0oZmFsc2UsIG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoby50YWcgPT09IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICEodGhpcy5zcGluZS5hbmltYXRpb24gPT09IFwiQXR0YWNrXCIpICYmIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5BdHRhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRG9uZUF0dGFja0FuaW0odHJ1ZSwgbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoaXQgYWxseSBiYXNlXHJcbiAgICAgICAgaWYgKG8udGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEb25lQXR0YWNrQW5pbShpc0tpbmc6IGJvb2xlYW4sIG86Y2MuUGh5c2ljc0NvbGxpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09PSBcIkF0dGFja1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbuG6v3UgbMOgIGtpbmcgdGjDrCBt4bubaSBjaG8gxJHhuqVtIGtpbmdcclxuICAgICAgICAgICAgICAgIGlmKGlzS2luZyAmJiBvLmdldENvbXBvbmVudChLaW5nQ29udHJvbGxlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudChLaW5nQ29udHJvbGxlcikuZGVjcmVhc2VIZWFsdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25Db3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgQ29uc3RhbnRzLkFybXlBbmltLlJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFZGeF9ibGVlZCA9IG8ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpLmdldENoaWxkQnlOYW1lKFwiVmZ4XzFcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgVkZ4X2JsZWVkLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Jhc2VcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhCYXNlKClcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFuZGxlRGVjcmVhc2VIZWFsdGhBcm15KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURlY3JlYXNlSGVhbHRoQmFzZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImFsbHlcIiAmJiB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjNIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjNcIikge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX1RhbmspO1xyXG4gICAgICAgICAgICBsZXQgc3BpbmVBdHRhY2tPZlRhbmsgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCbGFzdFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwaW5lQXR0YWNrT2ZUYW5rLnNldEFuaW1hdGlvbigwLCBcIjJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjJcIikge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRW5lbXlCYXNlSGVhbCAtPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfR3VuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteV9MdjJcIikge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkVuZW15QmFzZUhlYWwgLT0gMC4wODtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FbmVteUJhc2VIZWFsIC09IDAuMDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5za2luID09PSBcImVuZW15XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLkFsbHlCYXNlSGVhbCAtPSAwLjA1O1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suQXJteUx2MUhpdFNvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRGVjcmVhc2VIZWFsdGhBcm15KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiYWxseVwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2M1wiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC41O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjNIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjNcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkx2Ml9UYW5rKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcGluZUF0dGFja09mVGFuayA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJsYXN0XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzcGluZUF0dGFja09mVGFuay5zZXRBbmltYXRpb24oMCwgXCIyXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYyXCIpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5lbmVteUFybWllc1swXS5nZXRDb21wb25lbnQoQXJteSkuSGVhbHRoQmFyLnNjYWxlWCAtPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTHYyX0d1bik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjFcIikge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuMztcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5MdjJfS2luaWZlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldENvbXBvbmVudChBcm15KS5IZWFsdGhCYXIuc2NhbGVYIC09IDAuMjtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkFybXlMdjFIaXRTb3VuZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmFsbHlBcm1pZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5Bcm15THYxSGl0U291bmQpO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmFsbHlBcm1pZXNbMF0uZ2V0Q29tcG9uZW50KEFybXkpLkhlYWx0aEJhci5zY2FsZVggLT0gMC4yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEFybXkpLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gZGVjcmVhc2UgdGhlIGZpcnN0IGFsbHkvZW5lbXkgaW4gY29uc3RhbnQgYXJyYXk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJlbmVteVwiKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5lbmVteURpZSArPSAxO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuZW5lbXlBcm1pZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tEaWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwaW5lLnRpbWVTY2FsZSA9IDAuMztcclxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBDb25zdGFudHMuQXJteUFuaW0uRGllLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5IZWFsdGhCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1J1bigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMaXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEVuZW15UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2tpbiA9PT0gXCJhbGx5XCIgJiYgdGhpcy5jYW5SdW4pIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeVRvRmlnaHRcclxuICAgICAgICAgICAgICAgID8gZmlyc3RFbmVteVBvcyA9IHRoaXMucm9hZFRvRW5lbXlQb3MoY3VycmVudFBvcywgXCJhbGx5XCIpXHJcbiAgICAgICAgICAgICAgICA6IGZpcnN0RW5lbXlQb3MgPSBjdXJyZW50UG9zO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09PSBcIkFybXlfTHYzXCIgfHwgdGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteTJfTHYzXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKGN1cnJlbnRQb3MueCArIDI1ICsgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkLCBmaXJzdEVuZW15UG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3MubGVycCh0YXJnZXRQb3MsIDAuMDIsIGN1cnJlbnRQb3MpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT09IFwiQXJteVwiIHx8IHRoaXMubm9kZS5uYW1lID09PSBcIkFybXkyX0x2MlwiXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15Ml9MdjFcIiB8fCB0aGlzLm5vZGUubmFtZSA9PT0gXCJBcm15X0x2MlwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIoY3VycmVudFBvcy54ICsgMTAgKyBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQsIGZpcnN0RW5lbXlQb3MueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNraW4gPT09IFwiZW5lbXlcIiAmJiB0aGlzLmNhblJ1bikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5VG9GaWdodFxyXG4gICAgICAgICAgICAgICAgPyBmaXJzdEVuZW15UG9zID0gdGhpcy5yb2FkVG9FbmVteVBvcyhjdXJyZW50UG9zLCBcImVuZW15XCIpXHJcbiAgICAgICAgICAgICAgICA6IGZpcnN0RW5lbXlQb3MgPSBjdXJyZW50UG9zO1xyXG5cclxuICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmlzUm90YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRQb3MgPSBuZXcgY2MuVmVjMihjdXJyZW50UG9zLnggLSAzMCAtIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCwgZmlyc3RFbmVteVBvcy55KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKGN1cnJlbnRQb3MueCAtIDIwIC0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkLCBmaXJzdEVuZW15UG9zLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4wMiwgY3VycmVudFBvcykpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByb2FkVG9FbmVteVBvcyhjdXJyZW50UG9zOiBjYy5WZWMyLCB5b3VyU2lkZTogc3RyaW5nKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKHlvdXJTaWRlID09PSBcImFsbHlcIikge1xyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuYWxseUFybWllc1swXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5hbGx5QXJtaWVzWzBdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1BhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5SdW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXNQYXVzZUdhbWUgJiYgIXRoaXMucGF1c2VGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIENvbnN0YW50cy5Bcm15QW5pbS5SdW4sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUNvbnN0YW50cy5pc1BhdXNlR2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja1BhdXNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuSGVhbHRoQmFyLnNjYWxlWCA8PSAwLjEgJiYgdGhpcy5pc0xpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0RpZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var BaseController_1 = require("../Controller/BaseController");
var CoinController_1 = require("../Controller/CoinController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemyBase = null;
        _this.allyBase = null;
        _this.CoinController = null;
        _this.King = null;
        _this.Environment = null;
        _this.Options = null;
        _this.CTA_logo = null;
        _this.Bg_Hor = null;
        _this.Bg_Ver = null;
        _this.FrameFood = null;
        _this.LoadFood = null;
        _this.Options_Layout = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.start = function () {
        this.Bg_Hor = this.Environment.getChildByName("Bg_Hor");
        this.Bg_Ver = this.Environment.getChildByName("Bg_Ver");
        this.FrameFood = this.Options.getChildByName("Framefood");
        this.LoadFood = this.Options.getChildByName("LoadFoodController");
        this.Options_Layout = this.Options.getChildByName("Layout");
    };
    Responsive.prototype.handleRotate = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        constants_1.Constants.Responsive.speedCalculated = 20;
        constants_1.Constants.scaleArmy = 0.5;
        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;
        this.CoinController.node.scale = 1;
        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);
        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);
        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;
        optionsLayout.spacingX = 140;
        optionsChild.forEach(function (child) {
            child.scale = 1.15;
        });
        this.King.scaleX = -0.5;
        this.King.scaleY = 0.5;
        this.CTA_logo.scale = 0.4;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.speedCalculated = 10;
        constants_1.Constants.scaleArmy = 0.5;
        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;
        this.CoinController.node.scale = 1;
        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);
        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);
        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;
        optionsLayout.spacingX = 120;
        optionsChild.forEach(function (child) {
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });
        this.King.scaleX = -0.5;
        this.King.scaleY = 0.5;
        this.CTA_logo.scale = 0.4;
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;
        this.CoinController.node.scale = 0.8;
        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25);
        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        this.FrameFood.setScale(10, 0.25);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.22, 0.24);
        this.LoadFood.getComponent(cc.Widget).left = -2;
        this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignLeft = true;
        optionsWidget.right = 67;
        optionsWidget.left = 177;
        optionsWidget.bottom = 34;
        optionsLayout.spacingX = 55;
        optionsChild.forEach(function (child) {
            child.scale = 0.6;
        });
        this.CTA_logo.scale = 0.3;
        this.King.scaleX = -0.25;
        this.King.scaleY = 0.25;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        constants_1.Constants.Responsive.speedCalculated = 0;
        constants_1.Constants.scaleArmy = 0.25;
        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;
        this.CoinController.node.scale = 0.8;
        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25);
        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        this.FrameFood.setScale(10, 0.25);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.22, 0.24);
        this.LoadFood.getComponent(cc.Widget).left = -2;
        this.LoadFood.getComponent(cc.Widget).bottom = -2;
        this.Options_Layout.setScale(1, 1);
        var optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        var optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        var optionsChild = this.Options_Layout.children;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignLeft = true;
        optionsWidget.right = 67;
        optionsWidget.left = 177;
        optionsWidget.bottom = 34;
        optionsLayout.spacingX = 55;
        this.King.scaleX = -0.25;
        this.King.scaleY = 0.25;
        optionsChild.forEach(function (child) {
            child.scale = 0.6;
        });
        this.CTA_logo.scale = 0.3;
        // if (height / width > 1.5) {
        //     this.CoinController.node.scale = 0.8;
        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
        //     optionsLayout.spacingX = 70;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // } else {
        //     this.CoinController.node.scale = 0.8;
        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
        //     // optionsLayout.spacingX = 50;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(BaseController_1.default)
    ], Responsive.prototype, "enemyBase", void 0);
    __decorate([
        property(BaseController_1.default)
    ], Responsive.prototype, "allyBase", void 0);
    __decorate([
        property(CoinController_1.default)
    ], Responsive.prototype, "CoinController", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "King", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Options", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "CTA_logo", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUMxRCwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyWEM7UUF4WEcsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBd1ZoRCxDQUFDO0lBclZhLDBCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdB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QUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUcxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFD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QUVqQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO2dEQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7c0RBQ2E7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQW5CUixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMlg5QjtJQUFELGlCQUFDO0NBM1hELEFBMlhDLENBM1h1QyxFQUFFLENBQUMsU0FBUyxHQTJYbkQ7a0JBM1hvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0Jhc2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCBDb2luQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9Db2luQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQmFzZUNvbnRyb2xsZXIpXHJcbiAgICBlbmVteUJhc2U6IEJhc2VDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCYXNlQ29udHJvbGxlcilcclxuICAgIGFsbHlCYXNlOiBCYXNlQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQ29pbkNvbnRyb2xsZXIpXHJcbiAgICBDb2luQ29udHJvbGxlcjogQ29pbkNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgS2luZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbnZpcm9ubWVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9sb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQmdfSG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEJnX1ZlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGcmFtZUZvb2Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgTG9hZEZvb2Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgT3B0aW9uc19MYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5CZ19Ib3IgPSB0aGlzLkVudmlyb25tZW50LmdldENoaWxkQnlOYW1lKFwiQmdfSG9yXCIpO1xyXG4gICAgICAgIHRoaXMuQmdfVmVyID0gdGhpcy5FbnZpcm9ubWVudC5nZXRDaGlsZEJ5TmFtZShcIkJnX1ZlclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QgPSB0aGlzLk9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoXCJGcmFtZWZvb2RcIik7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZCA9IHRoaXMuT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkxvYWRGb29kQ29udHJvbGxlclwiKTtcclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0ID0gdGhpcy5PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAoaGVpZ2h0IC8gd2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JJcFgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuc3BlZWRDYWxjdWxhdGVkID0gMjA7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5CZ19Ib3IuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkJnX1Zlci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSA4MDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuNCwgMC40KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjEwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gODA7XHJcbiAgICAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuNCwgMC40KTtcclxuXHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMyk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjMxNiwgMC4zMTYpO1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTEwO1xyXG5cclxuICAgICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5sZWZ0ID0gMzA7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5yaWdodCA9IC0xMzA7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5ib3R0b20gPSA2NTtcclxuXHJcbiAgICAgICAgb3B0aW9uc0xheW91dC5zcGFjaW5nWCA9IDE0MDtcclxuICAgICAgICBvcHRpb25zQ2hpbGQuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLnNjYWxlID0gMS4xNTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5LaW5nLnNjYWxlWCA9IC0wLjU7XHJcbiAgICAgICAgdGhpcy5LaW5nLnNjYWxlWSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCA9IDEwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQmdfSG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5CZ19WZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMTA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gODA7XHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIxMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDgwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjQsIDAuNCk7XHJcblxyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLnNldFNjYWxlKDEwLCAwLjMpO1xyXG4gICAgICAgIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIHRoaXMuTG9hZEZvb2Quc2V0U2NhbGUoMC4zMTYsIDAuMzE2KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtNTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0xMDtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zX0xheW91dC5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zQ2hpbGQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQubGVmdCA9IDMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAtMTMwO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gNjU7XHJcblxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSAxMjA7XHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiT3BcIikgPyBjaGlsZC5zY2FsZSA9IDEuMTUgOiBjaGlsZC5zY2FsZSA9IDAuNDE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVggPSAtMC41O1xyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX2xvZ28uc2NhbGUgPSAwLjQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpZHRoIC8gaGVpZ2h0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXBob25lWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5zcGVlZENhbGN1bGF0ZWQgPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5zY2FsZUFybXkgPSAwLjI1O1xyXG5cclxuICAgICAgICB0aGlzLkJnX0hvci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJnX1Zlci5hY3RpdmUgPSB0cnVlOyAgXHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDMwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4yNSk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjIyLCAwLjI0KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNXaWRnZXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSA2NztcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmxlZnQgPSAxNzc7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNDtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTU7XHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDAuNjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuMztcclxuXHJcbiAgICAgICAgdGhpcy5LaW5nLnNjYWxlWCA9IC0wLjI1O1xyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVkgPSAwLjI1O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9NT0JJTEUgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLnNwZWVkQ2FsY3VsYXRlZCA9IDA7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuMjU7XHJcblxyXG4gICAgICAgIHRoaXMuQmdfSG9yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQmdfVmVyLmFjdGl2ZSA9IHRydWU7ICBcclxuXHJcblxyXG4gICAgICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDMwO1xyXG4gICAgICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4yNSk7XHJcbiAgICAgICAgdGhpcy5GcmFtZUZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTU7XHJcbiAgICAgICAgdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjIyLCAwLjI0KTtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC0yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnNXaWRnZXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbnNXaWRnZXQucmlnaHQgPSA2NztcclxuICAgICAgICBvcHRpb25zV2lkZ2V0LmxlZnQgPSAxNzc7XHJcbiAgICAgICAgb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNDtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTU7XHJcblxyXG4gICAgICAgIHRoaXMuS2luZy5zY2FsZVggPSAtMC4yNTtcclxuICAgICAgICB0aGlzLktpbmcuc2NhbGVZID0gMC4yNTtcclxuXHJcbiAgICAgICAgb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDAuNjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuMztcclxuXHJcbiAgICAgICAgLy8gaWYgKGhlaWdodCAvIHdpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5Db2luQ29udHJvbGxlci5ub2RlLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLnNjYWxlID0gMC44NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDMwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKDAuMjUsIDAuMjUpXHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDIyMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmVteUJhc2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuc2V0U2NhbGUoLTAuMjUsIDAuMjUpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5zZXRTY2FsZSgxMCwgMC4xMyk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuRnJhbWVGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IC01O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLnNldFNjYWxlKDAuMTIsIDAuMTIpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkxvYWRGb29kLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAtMjtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtMjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuT3B0aW9uc19MYXlvdXQuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvcHRpb25zV2lkZ2V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAvLyAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLk9wdGlvbnNfTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIC8vICAgICAvLyBsZXQgb3B0aW9uc0NoaWxkID0gdGhpcy5PcHRpb25zX0xheW91dC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNXaWRnZXQuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQucmlnaHQgPSAzMDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5ib3R0b20gPSAzNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNMYXlvdXQuc3BhY2luZ1ggPSA3MDtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc0NoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIk9wXCIpID8gY2hpbGQuc2NhbGUgPSAwLjUgOiBjaGlsZC5zY2FsZSA9IDAuMjtcclxuICAgICAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuQ29pbkNvbnRyb2xsZXIubm9kZS5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2Uubm9kZS5zY2FsZSA9IDAuODU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxseUJhc2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjIwO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFsbHlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAzMDtcclxuICAgICAgICAvLyAgICAgdGhpcy5hbGx5QmFzZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFzZVwiKS5zZXRTY2FsZSgwLjI1LCAwLjI1KVxyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuc2NhbGUgPSAwLjg1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZW15QmFzZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAyMjA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5lbXlCYXNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLnNldFNjYWxlKC0wLjI1LCAwLjI1KTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5GcmFtZUZvb2Quc2V0U2NhbGUoMTAsIDAuMTMpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkZyYW1lRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtNTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5zZXRTY2FsZSgwLjEyLCAwLjEyKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5Mb2FkRm9vZC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gLTI7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuTG9hZEZvb2QuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gLTI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLk9wdGlvbnNfTGF5b3V0LnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgIC8vICAgICBsZXQgb3B0aW9uc1dpZGdldCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5PcHRpb25zX0xheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAvLyAgICAgLy8gbGV0IG9wdGlvbnNDaGlsZCA9IHRoaXMuT3B0aW9uc19MYXlvdXQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICBvcHRpb25zV2lkZ2V0LmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgb3B0aW9uc1dpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgLy8gb3B0aW9uc1dpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zV2lkZ2V0LnJpZ2h0ID0gMzA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNXaWRnZXQuYm90dG9tID0gMzU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAvLyBvcHRpb25zTGF5b3V0LnNwYWNpbmdYID0gNTA7XHJcbiAgICAgICAgLy8gICAgIC8vIG9wdGlvbnNDaGlsZC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJPcFwiKSA/IGNoaWxkLnNjYWxlID0gMC41IDogY2hpbGQuc2NhbGUgPSAwLjI7XHJcbiAgICAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.ArmyLv1HitSound = null;
        _this.ArmyLv2HitSound = null;
        _this.ArmyLv3HitSound = null;
        _this.earthQuakeSound = null;
        _this.clickSound = null;
        _this.buySound = null;
        _this.coinSound = null;
        _this.failSound = null;
        _this.winSound = null;
        _this.heliSound = null;
        _this.UpgradeSound = null;
        _this.HelpMe = null;
        _this.Lv2_Kinife = null;
        _this.Lv2_Gun = null;
        _this.Lv2_Tank = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        this.normalNetwork(soundName);
    };
    AudioManager.prototype.normalNetwork = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "HelpMe":
                    this.HelpMe.play();
                    break;
                case "earthQuakeSound":
                    this.earthQuakeSound.play();
                    break;
                case "UpgradeSound":
                    this.UpgradeSound.play();
                    break;
                case "heliSound":
                    this.heliSound.play();
                    break;
                case "ArmyLv1HitSound":
                    this.ArmyLv1HitSound.play();
                    break;
                case "ArmyLv2HitSound":
                    this.ArmyLv2HitSound.play();
                    break;
                case "ArmyLv3HitSound":
                    this.ArmyLv3HitSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "buySound":
                    this.buySound.play();
                    break;
                case "coinSound":
                    this.coinSound.play();
                    break;
                case "failSound":
                    this.failSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "UpgradeSound":
                    this.UpgradeSound.play();
                    break;
                case "Lv2_Kinife":
                    this.Lv2_Kinife.play();
                    break;
                case "Lv2_Gun":
                    this.Lv2_Gun.play();
                    break;
                case "Lv2_Tank":
                    this.Lv2_Tank.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "HelpMe":
                this.HelpMe.stop();
                break;
            case "UpgradeSound":
                this.UpgradeSound.stop();
                break;
            case "earthQuakeSound":
                this.earthQuakeSound.stop();
                break;
            case "heliSound":
                this.heliSound.stop();
                break;
            case "ArmyLv1HitSound":
                this.ArmyLv1HitSound.stop();
                break;
            case "ArmyLv2HitSound":
                this.ArmyLv2HitSound.stop();
                break;
            case "ArmyLv3HitSound":
                this.ArmyLv3HitSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "buySound":
                this.buySound.stop();
                break;
            case "coinSound":
                this.coinSound.stop();
                break;
            case "failSound":
                this.failSound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "UpgradeSound":
                this.UpgradeSound.stop();
                break;
            case "Lv2_Kinife":
                this.Lv2_Kinife.stop();
                break;
            case "Lv2_Gun":
                this.Lv2_Gun.stop();
                break;
            case "Lv2_Tank":
                this.Lv2_Tank.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.UpgradeSound.stop();
        this.Lv2_Kinife.stop();
        this.Lv2_Gun.stop();
        this.Lv2_Tank.stop();
        this.HelpMe.stop();
        this.bgSound.stop();
        this.ArmyLv1HitSound.stop();
        this.ArmyLv2HitSound.stop();
        this.ArmyLv3HitSound.stop();
        this.earthQuakeSound.stop();
        this.clickSound.stop();
        this.buySound.stop();
        this.coinSound.stop();
        this.heliSound.stop();
        this.UpgradeSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ArmyLv1HitSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ArmyLv2HitSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ArmyLv3HitSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "earthQuakeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "buySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "coinSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "failSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "winSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "heliSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "UpgradeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "HelpMe", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Lv2_Kinife", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Lv2_Gun", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Lv2_Tank", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpTEM7UUEvS0csU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQW1CLElBQUksQ0FBQzs7SUE4SXBDLENBQUM7SUE1SVUsZ0NBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sb0NBQWEsR0FBckIsVUFBc0IsU0FBUztRQUMzQixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwRSxR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aEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNXO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ0s7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ087SUFuQ2YsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlMaEM7SUFBRCxtQkFBQztDQWpMRCxBQWlMQyxDQWpMeUMsRUFBRSxDQUFDLFNBQVMsR0FpTHJEO2tCQWpMb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBBcm15THYxSGl0U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEFybXlMdjJIaXRTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgQXJteUx2M0hpdFNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBlYXJ0aFF1YWtlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNsaWNrU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJ1eVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjb2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGZhaWxTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGhlbGlTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgVXBncmFkZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBIZWxwTWU6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBMdjJfS2luaWZlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBMdjJfR3VuOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBMdjJfVGFuazogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5U291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vcm1hbE5ldHdvcmsoc291bmROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5vcm1hbE5ldHdvcmsoc291bmROYW1lKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIZWxwTWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IZWxwTWUucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJlYXJ0aFF1YWtlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVhcnRoUXVha2VTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVXBncmFkZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGdyYWRlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImhlbGlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVsaVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcm15THYxSGl0U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFybXlMdjFIaXRTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJteUx2MkhpdFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Bcm15THYySGl0U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFybXlMdjNIaXRTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXJteUx2M0hpdFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJidXlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV5U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvaW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29pblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJmYWlsU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJVcGdyYWRlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZ3JhZGVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTHYyX0tpbmlmZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTHYyX0tpbmlmZS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTHYyX0d1blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTHYyX0d1bi5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTHYyX1RhbmtcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkx2Ml9UYW5rLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkhlbHBNZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSGVscE1lLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlVwZ3JhZGVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5VcGdyYWRlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlYXJ0aFF1YWtlU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZWFydGhRdWFrZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaGVsaVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlbGlTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFybXlMdjFIaXRTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Bcm15THYxSGl0U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcm15THYySGl0U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuQXJteUx2MkhpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJteUx2M0hpdFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFybXlMdjNIaXRTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsaWNrU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29pblNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW5Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZhaWxTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWlsU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlVwZ3JhZGVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5VcGdyYWRlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMdjJfS2luaWZlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkx2Ml9LaW5pZmUuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMdjJfR3VuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkx2Ml9HdW4uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMdjJfVGFua1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5MdjJfVGFuay5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuVXBncmFkZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkx2Ml9LaW5pZmUuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuTHYyX0d1bi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5MdjJfVGFuay5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5IZWxwTWUuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5Bcm15THYxSGl0U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuQXJteUx2MkhpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkFybXlMdjNIaXRTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5lYXJ0aFF1YWtlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5idXlTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jb2luU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuaGVsaVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLlVwZ3JhZGVTb3VuZC5zdG9wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/SpawnController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe46aRT4+tC+aNQcYlNw6Y+', 'SpawnController');
// Script/Controller/SpawnController.ts

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
var constants_1 = require("../Data/constants");
var Army_1 = require("../Other/Army");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpawnController = /** @class */ (function (_super) {
    __extends(SpawnController, _super);
    function SpawnController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Base = null;
        _this.AllyPoints = [];
        _this.EnemyPoints = [];
        _this.Army_Lv1 = null;
        _this.Army_Lv2 = null;
        _this.Army_Lv3 = null;
        _this.Army2_Lv1 = null;
        _this.Army2_Lv2 = null;
        _this.Army2_Lv3 = null;
        _this.enemySpawnTime = 1;
        return _this;
    }
    SpawnController.prototype.start = function () {
        // if(Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);
        this.spawnTroopsCatchKing();
        // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
    };
    SpawnController.prototype.spawnTroopsCatchKing = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 2);
            _this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
        }, 0.5);
    };
    SpawnController.prototype.SpawnEnemies = function () {
        var _this = this;
        this.schedule(function () {
            var random = cc.math.randomRangeInt(1, 3);
            if (constants_1.Constants.isPauseGame)
                return;
            _this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, random);
        }, this.enemySpawnTime, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnEnemyArmy = function (skin, level) {
        if ((constants_1.Constants.isCanBuyArmyLv3 || constants_1.Constants.isUpgrade) && this.enemySpawnTime === 0.3) {
            console.log("up spawn time");
            this.enemySpawnTime = 1.5;
        }
        var random = cc.math.randomRangeInt(0, 5);
        // create Army
        var newArmy = null;
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
                break;
            default:
                break;
        }
        constants_1.Constants.enemyArmies.push(newArmy);
        // caculate Scale
        newArmy.scaleX = -constants_1.Constants.scaleArmy;
        newArmy.scaleY = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.EnemyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        newArmy.group = "Enemy";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        // console.log("Enemy - Group: " + newArmy.group);
    };
    SpawnController.prototype.SpawnPlayerArmy = function (skin, level) {
        var random = cc.math.randomRangeInt(0, 5);
        var newArmy;
        if (!constants_1.Constants.isUpgrade) {
            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army_Lv2);
                    break;
                case 3:
                    newArmy = cc.instantiate(this.Army_Lv3);
                    break;
                default:
                    break;
            }
        }
        else {
            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army2_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army2_Lv2);
                    break;
                case 3:
                    newArmy = cc.instantiate(this.Army2_Lv3);
                    break;
                default:
                    break;
            }
        }
        // create Army
        constants_1.Constants.allyArmies.push(newArmy);
        console.log("Allies:" + constants_1.Constants.allyArmies.length);
        // caculate Scale
        newArmy.scale = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.AllyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        // armyComponent.tag = 1;
        newArmy.group = "Ally";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.9;
    };
    __decorate([
        property(cc.Node)
    ], SpawnController.prototype, "Base", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "AllyPoints", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "EnemyPoints", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv3", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv3", void 0);
    SpawnController = __decorate([
        ccclass
    ], SpawnController);
    return SpawnController;
}(cc.Component));
exports.default = SpawnController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTcGF3bkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHNDQUFpQztBQUUzQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW1LQztRQWpLRyxVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBRTNCLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBRzVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDOztJQTRJL0IsQ0FBQztJQXpJYSwrQkFBSyxHQUFmO1FBQ0ksbUVBQW1FO1FBRW5FLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTVCLGlEQUFpRDtJQUNyRCxDQUFDO0lBR08sOENBQW9CLEdBQTVCO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsb0RBQW9EO1lBQ3BELG9EQUFvRDtZQUNwRCxvREFBb0Q7UUFDeEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FB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QUFtS0MsQ0FuSzRDLEVBQUUsQ0FBQyxTQUFTLEdBbUt4RDtrQkFuS29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEFybXkgZnJvbSBcIi4uL090aGVyL0FybXlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGF3bkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCYXNlOiBjYy5Ob2RlICA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEFsbHlQb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEVuZW15UG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteV9MdjE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteV9MdjI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteV9MdjM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEFybXkyX0x2MTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBBcm15Ml9MdjI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgQXJteTJfTHYzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGVuZW15U3Bhd25UaW1lOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYoQ29uc3RhbnRzLmVuZW15QXJtaWVzWzBdKSBDb25zdGFudHMuZW5lbXlBcm1pZXMuc3BsaWNlKDAsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLnNwYXduVHJvb3BzQ2F0Y2hLaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15KTtcclxuICAgIH0gIFxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNwYXduVHJvb3BzQ2F0Y2hLaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5TcGF3bkVuZW15QXJteShDb25zdGFudHMuQXJteVNraW4uRW5lbXksIDIpO1xyXG4gICAgICAgICAgICB0aGlzLlNwYXduRW5lbXlBcm15KENvbnN0YW50cy5Bcm15U2tpbi5FbmVteSwgMik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15LCAyKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5TcGF3bkVuZW15QXJteShDb25zdGFudHMuQXJteVNraW4uRW5lbXksIDIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLlNwYXduRW5lbXlBcm15KENvbnN0YW50cy5Bcm15U2tpbi5FbmVteSwgMik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMSwgMyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlzUGF1c2VHYW1lKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuU3Bhd25FbmVteUFybXkoQ29uc3RhbnRzLkFybXlTa2luLkVuZW15LCByYW5kb20pO1xyXG4gICAgICAgIH0sIHRoaXMuZW5lbXlTcGF3blRpbWUsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU3Bhd25FbmVteUFybXkoc2tpbjogc3RyaW5nLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmKChDb25zdGFudHMuaXNDYW5CdXlBcm15THYzIHx8IENvbnN0YW50cy5pc1VwZ3JhZGUpICYmIHRoaXMuZW5lbXlTcGF3blRpbWUgPT09IDAuMykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwIHNwYXduIHRpbWVcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmVuZW15U3Bhd25UaW1lID0gMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMCwgNSlcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIEFybXlcclxuICAgICAgICBsZXQgbmV3QXJteTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmVuZW15QXJtaWVzLnB1c2gobmV3QXJteSk7XHJcblxyXG4gICAgICAgIC8vIGNhY3VsYXRlIFNjYWxlXHJcbiAgICAgICAgbmV3QXJteS5zY2FsZVggPSAtQ29uc3RhbnRzLnNjYWxlQXJteTtcclxuICAgICAgICBuZXdBcm15LnNjYWxlWSA9IENvbnN0YW50cy5zY2FsZUFybXk7XHJcblxyXG4gICAgICAgIC8vIHNldCBQb3NcclxuICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLkVuZW15UG9pbnRzW3JhbmRvbV07XHJcbiAgICAgICAgbGV0IGFybXlDb21wb25lbnQgPSBuZXdBcm15LmdldENvbXBvbmVudChBcm15KTtcclxuICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRQb3NpdGlvbihwb2ludC5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgIGFybXlDb21wb25lbnQuc2tpbiA9IHNraW47XHJcbiAgICAgICAgbmV3QXJteS5ncm91cCA9IFwiRW5lbXlcIjtcclxuICAgICAgICBsZXQgc3BpbmUgPSBuZXdBcm15LmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRW5lbXkgLSBHcm91cDogXCIgKyBuZXdBcm15Lmdyb3VwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNwYXduUGxheWVyQXJteShza2luOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCA1KVxyXG4gICAgICAgIGxldCBuZXdBcm15OiBjYy5Ob2RlO1xyXG5cclxuICAgICAgICBpZighQ29uc3RhbnRzLmlzVXBncmFkZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteV9MdjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXlfTHYyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15X0x2Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FybXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkFybXkyX0x2MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXJteTJfTHYyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcm15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5Bcm15Ml9MdjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjcmVhdGUgQXJteVxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIENvbnN0YW50cy5hbGx5QXJtaWVzLnB1c2gobmV3QXJteSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbGxpZXM6XCIgKyBDb25zdGFudHMuYWxseUFybWllcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAvLyBjYWN1bGF0ZSBTY2FsZVxyXG4gICAgICAgIG5ld0FybXkuc2NhbGUgPSBDb25zdGFudHMuc2NhbGVBcm15O1xyXG5cclxuICAgICAgICAvLyBzZXQgUG9zXHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5BbGx5UG9pbnRzW3JhbmRvbV07XHJcbiAgICAgICAgbGV0IGFybXlDb21wb25lbnQgPSBuZXdBcm15LmdldENvbXBvbmVudChBcm15KTtcclxuICAgICAgICBwb2ludC5wYXJlbnQuYWRkQ2hpbGQobmV3QXJteSk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgbmV3QXJteS5zZXRQb3NpdGlvbihwb2ludC5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNraW4gJiBncm91cFxyXG4gICAgICAgIGFybXlDb21wb25lbnQuc2tpbiA9IHNraW47XHJcbiAgICAgICAgLy8gYXJteUNvbXBvbmVudC50YWcgPSAxO1xyXG4gICAgICAgIG5ld0FybXkuZ3JvdXAgPSBcIkFsbHlcIjtcclxuICAgICAgICBsZXQgc3BpbmUgPSBuZXdBcm15LmdldENoaWxkQnlOYW1lKFwiU3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pO1xyXG4gICAgICAgIHNwaW5lLnRpbWVTY2FsZSA9IDAuOTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

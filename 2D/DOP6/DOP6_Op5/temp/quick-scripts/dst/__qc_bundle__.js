
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
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/MaskGamePlay');
require('./assets/Script/Controller/NodeController');
require('./assets/Script/Controller/Scratchable');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/AnimData');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Colorizer');
require('./assets/Script/Plugin/Responsive');
require('./assets/neutrinoparticles/components/NeutrinoEffect_Heart');
require('./assets/neutrinoparticles/components/NeutrinoEffect_NoNameEffect');
require('./assets/neutrinoparticles/components/NeutrinoEffect_Rain');
require('./assets/neutrinoparticles/exported_effects/Heart');
require('./assets/neutrinoparticles/exported_effects/NoNameEffect');
require('./assets/neutrinoparticles/exported_effects/Rain');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Bc3NlbWJsZXJXZWJHTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUE2RkM7UUE1Rkcsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG1CQUFhLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ2pELGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFxRmhDLENBQUM7SUFuRkcsdUNBQVcsR0FBWCxVQUFhLElBQUksRUFBRSxZQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXBDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxtQ0FBbUM7SUFFbkMsc0NBQVUsR0FBVixVQUFXLGNBQWMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGlCQUFpQjtJQUNsRSxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLGdCQUFnQjtRQUN2QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxnQkFBZ0IsRUFBRTtZQUM3QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlELElBQUksUUFBUSxFQUFFO2dCQUNWLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7aUJBQzFDO2FBQ0o7WUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7U0FDN0M7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLE1BQU07UUFDYixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFNUIsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRXRDLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDO1FBRTlFLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWxELFlBQVksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLFlBQVksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxZQUFZLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELFdBQVcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLEVBQUU7SUFDakIsQ0FBQztJQUVELG1DQUFPLEdBQVA7SUFDQSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQTdGQSxBQTZGQyxDQTdGOEMsRUFBRSxDQUFDLFNBQVMsR0E2RjFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vQ29tcG9uZW50IGZyb20gJy4vTmV1dHJpbm9Db21wb25lbnQnO1xyXG5cclxuY29uc3QgaW5kaWNlcyA9IFswLCAxLCAzLCAxLCAyLCAzXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldXRyaW5vQXNzZW1ibGVyIGV4dGVuZHMgY2MuQXNzZW1ibGVyIHtcclxuICAgIF9pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgX2N1cnJlbnRWZXJ0ZXggPSAwO1xyXG4gICAgX3JlbmRlclN0eWxlSW5kZXggPSBudWxsO1xyXG4gICAgX3ZlcnRleEZvcm1hdCA9IGNjLmdmeC5WZXJ0ZXhGb3JtYXQuWFlaX1VWX0NvbG9yO1xyXG4gICAgX2J1ZmZlciA9IG51bGw7XHJcbiAgICBfYnVmZmVyT2Zmc2V0SW5mbyA9IG51bGw7XHJcbiAgICBfbW9kZWxCYXRjaGVyID0gbnVsbDtcclxuICAgIF93b3JsZFNjYWxlID0gbmV3IGNjLlZlYzMoKTtcclxuXHJcbiAgICBmaWxsQnVmZmVycyAoY29tcCwgbW9kZWxCYXRjaGVyKSB7XHJcbiAgICAgICAgaWYgKCFjb21wLl9uZXV0cmlub0VmZmVjdCB8fCAhY29tcC5jb250ZXh0LmxvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gbW9kZWxCYXRjaGVyLmdldEJ1ZmZlcignbWVzaCcsIHRoaXMuX3ZlcnRleEZvcm1hdCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX21vZGVsQmF0Y2hlciA9IG1vZGVsQmF0Y2hlcjtcclxuICAgICAgICB0aGlzLl9yZW5kZXJTdHlsZUluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl93b3JsZFNjYWxlID0gY29tcC5fd29ybGRTY2FsZTtcclxuICAgICAgICBcclxuICAgICAgICBjb21wLl9uZXV0cmlub0VmZmVjdC5maWxsR2VvbWV0cnlCdWZmZXJzKFsxLCAwLCAwXSwgWzAsIDEsIDBdLCBbMCwgMCwgLTFdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzIGNhbGxlZCBieSBuZXV0cmlub0VmZmVjdFxyXG5cclxuICAgIGluaXRpYWxpemUobWF4TnVtVmVydGljZXMsIHRleENoYW5uZWxzLCBpbmRpY2VzLCBtYXhOdW1SZW5kZXJDYWxscykge1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVF1YWQocmVuZGVyU3R5bGVJbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJTdHlsZUluZGV4ICE9PSByZW5kZXJTdHlsZUluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5fcmVuZGVyQ29tcC5tYXRlcmlhbHNbcmVuZGVyU3R5bGVJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsLmdldEhhc2goKSAhPT0gdGhpcy5fbW9kZWxCYXRjaGVyLm1hdGVyaWFsLmdldEhhc2goKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZGVsQmF0Y2hlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbEJhdGNoZXIubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyU3R5bGVJbmRleCA9IHJlbmRlclN0eWxlSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldEluZm8gPSB0aGlzLl9idWZmZXIucmVxdWVzdCg0LCBpbmRpY2VzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaFZlcnRleCh2ZXJ0ZXgpIHtcclxuICAgICAgICBjb25zdCBvaSA9IHRoaXMuX2J1ZmZlck9mZnNldEluZm87XHJcbiAgICAgICAgY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gdGhpcy5fdmVydGV4Rm9ybWF0Ll9ieXRlcyAvIDQ7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xyXG5cclxuICAgICAgICBjb25zdCBmbG9hdHNCdWZmZXIgPSBidWZmZXIuX3ZEYXRhO1xyXG4gICAgICAgIGNvbnN0IHVpbnRzQnVmZmVyID0gYnVmZmVyLl91aW50VkRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IGZsb2F0c1N0YXJ0ID0gb2kuYnl0ZU9mZnNldCAvIDQgKyB0aGlzLl9jdXJyZW50VmVydGV4ICogZmxvYXRzUGVyVmVydGV4O1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gdmVydGV4LnBvc2l0aW9uWzBdICogdGhpcy5fd29ybGRTY2FsZS54O1xyXG4gICAgICAgIGNvbnN0IHkgPSB2ZXJ0ZXgucG9zaXRpb25bMV0gKiB0aGlzLl93b3JsZFNjYWxlLnk7XHJcbiAgICAgICAgY29uc3QgeiA9IHZlcnRleC5wb3NpdGlvblsyXSAqIHRoaXMuX3dvcmxkU2NhbGUuejtcclxuXHJcbiAgICAgICAgZmxvYXRzQnVmZmVyW2Zsb2F0c1N0YXJ0ICsgMF0gPSB4O1xyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCArIDFdID0geTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQgKyAyXSA9IHo7XHJcblxyXG4gICAgICAgIGZsb2F0c0J1ZmZlcltmbG9hdHNTdGFydCArIDNdID0gdmVydGV4LnRleENvb3Jkc1swXVswXTtcclxuICAgICAgICBmbG9hdHNCdWZmZXJbZmxvYXRzU3RhcnQgKyA0XSA9IDEuMCAtIHZlcnRleC50ZXhDb29yZHNbMF1bMV07XHJcblxyXG4gICAgICAgIHVpbnRzQnVmZmVyW2Zsb2F0c1N0YXJ0ICsgNV0gPSBcclxuICAgICAgICAgICAgKHZlcnRleC5jb2xvclswXSkgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzFdIDw8IDgpIHxcclxuICAgICAgICAgICAgKHZlcnRleC5jb2xvclsyXSA8PCAxNikgfFxyXG4gICAgICAgICAgICAodmVydGV4LmNvbG9yWzNdIDw8IDI0KTtcclxuXHJcbiAgICAgICAgKyt0aGlzLl9jdXJyZW50VmVydGV4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZlcnRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkaWNlc0J1ZmZlciA9IGJ1ZmZlci5faURhdGE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlkaWNlc0J1ZmZlcltvaS5pbmRpY2VPZmZzZXQgKyBpXSA9IG9pLnZlcnRleE9mZnNldCArIGluZGljZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRWZXJ0ZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoUmVuZGVyQ2FsbChyYykge1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFudXAoKSB7XHJcbiAgICB9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Db250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXlFO0FBRW5FLElBQUEsS0FBb0IsRUFBRSxDQUFDLFVBQVUsRUFBaEMsT0FBTyxhQUFBLEVBQUUsTUFBTSxZQUFpQixDQUFDO0FBRXhDLElBQU0sYUFBYSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0lBQzVELEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTtDQUNyRSxDQUFDO0FBRUYsSUFBTSxtQkFBbUIsR0FBRyw2QkFBNkIsQ0FBQztBQUkxRDtJQVdJO1FBVkEsb0JBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxjQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR3BDLHlCQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdDLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2Qix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHM0IsRUFBRSxDQUFDLFdBQVcsQ0FB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QUFDLEdBQUcsQ0FBQyxvQ0FBa0Msa0JBQW9CLENBQUMsQ0FBQztZQUUvRCxFQUFFLE9BQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUMxQixPQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixPQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx5Q0FBZSxHQUF2QixVQUF3QixRQUFRLEVBQUUsS0FBSztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUM1QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU8sbURBQXlCLEdBQWpDO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7SUE5SWdCLGVBQWU7UUFGbkMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQzFCLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO09BQ0YsZUFBZSxDQStJbkM7SUFBRCxzQkFBQztDQS9JRCxBQStJQyxJQUFBO2tCQS9Jb0IsZUFBZTtBQWlKcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtJQUNwQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE5ldXRyaW5vIGZyb20gJy4vbmV1dHJpbm9wYXJ0aWNsZXMuanMvbmV1dHJpbm9wYXJ0aWNsZXMudW1kJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBtaXhpbnN9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IG1hdGVyaWFsRGVzY3MgPSBbXHJcbiAgICB7IHV1aWQ6ICc5N0tOOGUwZmxPanBXUVBDMHpJT29SJywgbmFtZTogJ05ldXRyaW5vTm9ybWFsJyB9LFxyXG4gICAgeyB1dWlkOiAnYzVUOUE4cjhGSFk1RGVlSlNqVFAwaycsIG5hbWU6ICdOZXV0cmlub05vcm1hbFByZW11bCcgfSxcclxuICAgIHsgdXVpZDogJzM2OU1OekVjVkwzSmo1VUY5Z3ZDZlInLCBuYW1lOiAnTmV1dHJpbm9BZGQnIH0sXHJcbiAgICB7IHV1aWQ6ICdiYVRNZ3B4TGxGcXJKRjA0VmNEeFBGJywgbmFtZTogJ05ldXRyaW5vQWRkUHJlbXVsJyB9LFxyXG4gICAgeyB1dWlkOiAnYTc0L055YjBkRFlydjV6QVpvQWxWUCcsIG5hbWU6ICdOZXV0cmlub011bHRpcGx5JyB9LFxyXG4gICAgeyB1dWlkOiAnMDRtbXFKRXhaS2pxZ1pING92cUdLNycsIG5hbWU6ICdOZXV0cmlub011bHRpcGx5UHJlbXVsJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgbWF0ZXJpYWxzQnVuZGxlTmFtZSA9ICduZXV0cmlub3BhcnRpY2xlcy1tYXRlcmlhbHMnO1xyXG5cclxuQGNjY2xhc3MoJ05ldXRyaW5vQ29udGV4dCcpXHJcbkBtaXhpbnMoY2MuRXZlbnRUYXJnZXQpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldXRyaW5vQ29udGV4dCB7XHJcbiAgICBuZXV0cmlub0NvbnRleHQgPSBuZXcgTmV1dHJpbm8uQ29udGV4dCgpO1xyXG4gICAgbWF0ZXJpYWxzID0gbmV3IEFycmF5KG1hdGVyaWFsRGVzY3MubGVuZ3RoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2luZ2xlSW5zdGFuY2U6IE5ldXRyaW5vQ29udGV4dDtcclxuICAgIHByaXZhdGUgX21hdGVyaWFsc0xlZnRUb0xvYWQgPSB0aGlzLm1hdGVyaWFscy5sZW5ndGg7XHJcbiAgICBwcml2YXRlIF9idW5kbGVzTGVmdFRvTG9hZCA9IDA7XHJcbiAgICBwcml2YXRlIF9ub2lzZUdlbmVyYXRpb25TdGVwID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25vaXNlR2VuZXJhdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF90ZXh0dXJlc0J1bmRsZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIGNjLkV2ZW50VGFyZ2V0LmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChDQ19ERVYpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nRm9yRGV2KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nRm9yQnVpbGQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlKCkgOiBOZXV0cmlub0NvbnRleHQge1xyXG4gICAgICAgIGlmICghdGhpcy5fc2luZ2xlSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2luZ2xlSW5zdGFuY2UgPSBuZXcgTmV1dHJpbm9Db250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsc0xlZnRUb0xvYWQgPT09IDAgJiYgdGhpcy5fYnVuZGxlc0xlZnRUb0xvYWQgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ub2lzZUdlbmVyYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBub2lzZUdlbmVyYXRvciA9IG5ldyB0aGlzLm5ldXRyaW5vQ29udGV4dC5Ob2lzZUdlbmVyYXRvcigpO1xyXG4gICAgICAgIGxldCB0aW1lcklkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX25vaXNlR2VuZXJhdGlvblN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2lzZUdlbmVyYXRvci5zdGVwKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbm9pc2VHZW5lcmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vaXNlR2VuZXJhdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnN1cmVOb2lzZVRleHR1cmVJc0dlbmVyYXRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbm9pc2VHZW5lcmF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vaXNlR2VuZXJhdGlvblN0ZXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dHVyZXNCdW5kbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVzQnVuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0TG9hZGluZ0ZvckRldigpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzOyAgICAgICAgXHJcblxyXG4gICAgICAgIGZvciAobGV0IG1hdEluZGV4ID0gMDsgbWF0SW5kZXggPCB0aGlzLm1hdGVyaWFscy5sZW5ndGg7ICsrbWF0SW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IF9tYXRJbmRleCA9IG1hdEluZGV4O1xyXG5cclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRBbnkobWF0ZXJpYWxEZXNjc1ttYXRJbmRleF0udXVpZCwgKGVyciwgbWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgTmV1dHJpbm9Db250ZXh0OiBjYW4ndCBsb2FkIG1hdGVyaWFsIHdpdGggVVVJRD0nJHttYXRlcmlhbERlc2NzW19tYXRJbmRleF0udXVpZH0nLiAke2Vycn1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fbWF0ZXJpYWxMb2FkZWQobWF0ZXJpYWwsIF9tYXRJbmRleCk7XHJcbiAgICAgICAgICAgIH0pOyAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydExvYWRpbmdGb3JCdWlsZCgpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzOyAgXHJcblxyXG4gICAgICAgICsrdGhpcy5fYnVuZGxlc0xlZnRUb0xvYWQ7XHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUobWF0ZXJpYWxzQnVuZGxlTmFtZSwgKGVyciwgYnVuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBOZXV0cmlub0NvbnRleHQ6IGZhaWxlZCB0byBsb2FkIGJ1bmRsZSAnJHttYXRlcmlhbHNCdW5kbGVOYW1lfScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAtLXRoaXMuX2J1bmRsZXNMZWZ0VG9Mb2FkO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbWF0SW5kZXggPSAwOyBtYXRJbmRleCA8IHRoaXMubWF0ZXJpYWxzLmxlbmd0aDsgKyttYXRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9tYXRJbmRleCA9IG1hdEluZGV4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChtYXRlcmlhbERlc2NzW21hdEluZGV4XS5uYW1lLCAoZXJyLCBtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYE5ldXRyaW5vQ29udGV4dDogY2FuJ3QgbG9hZCBtYXRlcmlhbCAnJHttYXRlcmlhbERlc2NzW19tYXRJbmRleF0ubmFtZX0nLiAke2Vycn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbWF0ZXJpYWxMb2FkZWQobWF0ZXJpYWwsIF9tYXRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICArK3RoaXMuX2J1bmRsZXNMZWZ0VG9Mb2FkO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVzQnVuZGxlTmFtZSA9ICduZXV0cmlub3BhcnRpY2xlcy90ZXh0dXJlcyc7XHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUodGV4dHVyZXNCdW5kbGVOYW1lLCAoZXJyLCBidW5kbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYE5ldXRyaW5vQ29udGV4dDogZmFpbGVkIHRvIGxvYWQgYnVuZGxlICcke3RleHR1cmVzQnVuZGxlTmFtZX0nYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhgTmV1dHJpbm9Db250ZXh0OiBMb2FkZWQgYnVuZGxlICR7dGV4dHVyZXNCdW5kbGVOYW1lfWApO1xyXG5cclxuICAgICAgICAgICAgLS10aGlzLl9idW5kbGVzTGVmdFRvTG9hZDtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZXNCdW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQW5kRW1pdExvYWRlZFN0YXR1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21hdGVyaWFsTG9hZGVkKG1hdGVyaWFsLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzW2luZGV4XSA9IG1hdGVyaWFsO1xyXG4gICAgICAgIC0tdGhpcy5fbWF0ZXJpYWxzTGVmdFRvTG9hZDtcclxuICAgICAgICB0aGlzLl9jaGVja0FuZEVtaXRMb2FkZWRTdGF0dXMoKTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tBbmRFbWl0TG9hZGVkU3RhdHVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jYy5nYW1lLm9uY2UoY2MuZ2FtZS5FVkVOVF9HQU1FX0lOSVRFRCwgKCkgPT4ge1xyXG4gICAgTmV1dHJpbm9Db250ZXh0Lmluc3RhbmNlKCkuc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCk7XHJcbn0pOyJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQywyQkFBMkI7QUFDM0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTVCLFNBQVMsc0JBQXNCLENBQUMsS0FBaUM7SUFDN0QsSUFBSSxLQUFLLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7U0FBTSxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO1NBQU07UUFDSCxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUM7QUFHRDtJQUF3RCxxQ0FBa0I7SUFBMUU7UUFBQSx1RUE4bkJDO1FBN25CRyxlQUFPLEdBQW9CLElBQUksQ0FBQztRQUV4Qiw0QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsdUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQWEsR0FBcUIsSUFBSSxDQUFDO1FBQ3ZDLDRCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QiwwQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0Isd0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLDJCQUFtQixHQUFXLENBQUMsQ0FBQztRQUNoQyxvQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixtQkFBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLG1CQUFXLEdBQUcsS0FBSyxDQUFDO1FBR3BCLG1CQUFXLEdBQUcsS0FBSyxDQUFDO1FBR3BCLHNCQUFjLEdBQUcsRUFBRSxDQUFDO1FBb0JwQiwyQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFvQnpCLG9CQUFZLEdBQW9CLElBQUksQ0FBQztRQW9CckMsc0JBQWMsR0FBRyxLQUFLLENBQUM7UUFhL0IsZ0NBQXdCLEdBQUcsS0FBSyxDQUFDO1FBWWpDLHFFQUFxRTtRQUVyRSx3QkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsaUZBQWlGO1FBRWpGLDRCQUFvQixHQUFHLEtBQUssQ0FBQzs7SUE4Z0JqQyxDQUFDO0lBdG1CRyxzQkFBSSwwQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO2FBRUQsVUFBZ0IsS0FBSztZQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBRS9CLElBQUksU0FBUyxFQUFFO2dCQUNYLElBQU0sUUFBUSxHQUFHLDBCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO2lCQUN2QzthQUNKO1FBQ0wsQ0FBQzs7O09BWkE7SUFrQkQsc0JBQUksaURBQWtCO2FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQzthQUVELFVBQXVCLEtBQUs7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUUvQixJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFNLFFBQVEsR0FBRywwQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0MsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztpQkFDOUM7YUFDSjtRQUNMLENBQUM7OztPQVpBO0lBa0JELHNCQUFJLDBDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQUs7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFFL0IsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsSUFBTSxRQUFRLEdBQUcsMEJBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdDLElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7aUJBQ3ZDO2FBQ0o7UUFDTCxDQUFDOzs7T0FaQTtJQWtCRCxzQkFBSSw0Q0FBYTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBa0IsS0FBSztZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNuQyxDQUFDOzs7T0FMQTtJQVdELHNCQUFJLHNEQUF1QjthQUEzQjtZQUNJLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQ3pDLENBQUM7YUFFRCxVQUE0QixLQUFLO1lBQzdCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7WUFDdEMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDbkMsQ0FBQzs7O09BTEE7SUFlRCx5Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQU0sUUFBUSxHQUFHLDBCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRTdDLElBQUksUUFBUSxFQUFFO2dCQUNWLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMseUJBQXlCLENBQUM7Z0JBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2dCQUNoRCxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2lCQUMxRDthQUNKO1NBQ0o7UUFFRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQVc7Z0JBQ25DLElBQUksV0FBVyxFQUFFO29CQUNiLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDeEI7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxXQUFXLEVBQUU7WUFDYixXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDNUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQzVCLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3BELElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLEtBQUssRUFBRTtvQkFDUCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTt3QkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDdkI7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNsQjtpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlDQUFLLEdBQUw7UUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGlEQUFxQixHQUFyQjtRQUNJLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUNBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtDQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQ3REO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwyQ0FBZSxHQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDZDQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDRDQUFnQixHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxFQUFFLENBQUM7U0FDbEU7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxvREFBd0IsR0FBeEIsVUFBeUIsSUFBWSxFQUFFLEtBQWlDO1FBQ3BFLElBQU0sT0FBTyxHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDN0M7SUFDUixDQUFDO0lBRUU7Ozs7T0FJRztJQUNILDJDQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVFOzs7O09BSUc7SUFDSCx1Q0FBVyxHQUFYLFVBQWEsUUFBUSxFQUFFLFdBQVc7UUFDOUIsSUFBSSxRQUFRLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUN0QyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDdEM7UUFFRCxxRUFBcUU7UUFDckUsa0VBQWtFO1FBQ2xFLG9FQUFvRTtRQUNwRSx3RUFBd0U7UUFDeEUscUJBQXFCO1FBRXJCLHNDQUFzQztJQUMxQyxDQUFDO0lBRU8sbURBQXVCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxrQ0FBTSxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMzQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsYUFBYSwyRkFBd0YsQ0FBQyxDQUFDO1lBQ3hILE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsaUJBQWlCO1FBQ2pCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBRXJELEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUU7WUFDdkQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUYsSUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU5RCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3RFLElBQUksV0FBVyxFQUFFO29CQUNiLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUM7b0JBQzNDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxhQUFhLDZCQUF3QixnQkFBZ0IsMERBQXVELENBQUMsQ0FBQztvQkFDOUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDakQ7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxDQUFDLEVBQUU7WUFDaEMsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ssd0NBQVksR0FBcEIsVUFBcUIsUUFBZ0IsRUFBRSxXQUFtQjtRQUExRCxtQkFvRUM7UUFuRUcsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzlDLElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBRXJFLElBQU0sbUJBQW1CLEdBQUc7WUFDeEIsRUFBRSxLQUFLLENBQUMsbUJBQW1CLENBQUM7WUFFNUIsSUFBSSxLQUFLLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUM3QjtRQUNMLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxhQUFhLDhCQUF5QixXQUFXLE1BQUcsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLG1CQUFtQixFQUFFLENBQUM7WUFDdEIsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDUixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLFdBQVc7Z0JBQ3ZELElBQUksT0FBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsT0FBTztpQkFDVjtnQkFFRCxJQUFJLEdBQUcsRUFBRTtvQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFJLEtBQUssQ0FBQyxhQUFhLDhCQUF5QixXQUFXLFdBQU0sR0FBSyxDQUFDLENBQUM7b0JBQ2hGLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtxQkFBTSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNyQixnRUFBZ0U7b0JBQ2hFLEVBQUUsQ0FBQyxJQUFJLENBQUksS0FBSyxDQUFDLGFBQWEsa0VBQStELENBQUMsQ0FBQztvQkFDL0YsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7aUJBQzdCO3FCQUFNO29CQUNILElBQUksV0FBVyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUU7d0JBQ3JDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ2pEO29CQUNELFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7d0JBQ3RCLGdFQUFnRTt3QkFDaEUsRUFBRSxDQUFDLElBQUksQ0FBSSxLQUFLLENBQUMsYUFBYSxrRUFBK0QsQ0FBQyxDQUFDO3dCQUMvRixLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUM7cUJBQy9DO2lCQUNKO2dCQUVELG1CQUFtQixFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBRyxFQUFFLFdBQVc7Z0JBQ2xGLElBQUksT0FBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsT0FBTztpQkFDVjtnQkFFRCxJQUFJLEdBQUcsRUFBRTtvQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFJLEtBQUssQ0FBQyxhQUFhLG1DQUE4QixXQUFXLFdBQU0sR0FBSyxDQUFDLENBQUM7b0JBQ3JGLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDSCxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3JCLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDO2lCQUMvQztnQkFFRCxtQkFBbUIsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyw2Q0FBaUIsR0FBekI7UUFBQSxtQkFpRUM7UUFoRUcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRWhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsV0FBVyxFQUFFLGdCQUFnQjtZQUN6RSxJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQU0sV0FBVyxHQUFHLE9BQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDZCxnRUFBZ0U7Z0JBQ2hFLEVBQUUsQ0FBQyxJQUFJLENBQUksT0FBSSxDQUFDLGFBQWEsa0VBQStELENBQUMsQ0FBQztnQkFDOUYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPO2FBQ1Y7WUFDRCxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixnRUFBZ0U7Z0JBQ2hFLEVBQUUsQ0FBQyxJQUFJLENBQUksT0FBSSxDQUFDLGFBQWEsa0VBQStELENBQUMsQ0FBQztnQkFDOUYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPO2FBQ1Y7WUFFRCxJQUFNLGFBQWEsR0FBRyxPQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRixJQUFNLFFBQVEsR0FBRyxPQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQztnQkFDckQsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsZ0VBQWdFO2dCQUNoRSxFQUFFLENBQUMsSUFBSSxDQUFJLE9BQUksQ0FBQyxhQUFhLGtFQUErRCxDQUFDLENBQUM7Z0JBQzlGLG1CQUFtQixHQUFHLElBQUksQ0FBQztnQkFDM0IsT0FBTzthQUNWO1lBQ0QsSUFBTSxNQUFNLEdBQUcsT0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLG1CQUFtQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FDOUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUMvQjtZQUNJLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYztZQUMzQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCO1NBQ2xELENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFekQsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDSyw4Q0FBa0IsR0FBMUI7UUFDSSxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFO1lBQ3JFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDdkIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUN2QixXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckIsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDbkIsTUFBTTthQUNUO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDekIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNELEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFDN0U7WUFDQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQzNELFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3hDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDckMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7SUFDQyxDQUFDO0lBRU8sNkRBQWlDLEdBQXpDLFVBQTBDLFFBQWtCLEVBQUUsUUFBa0I7UUFDNUUsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQU0sYUFBYSxHQUFFLFdBQVcsQ0FBQztRQUNqQyxJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUM7UUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUM7WUFDckMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDckQsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELFdBQVcsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVqQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sNENBQWdCLEdBQXhCO1FBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixHQUFHO1lBQ0MsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0QixRQUFRLElBQUksRUFBRTtRQUVmLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUF4bUJEO1FBREMsUUFBUTswREFDbUI7SUFHNUI7UUFEQyxRQUFROzZEQUNtQjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUdqQjtJQWVEO1FBREMsUUFBUTtrRUFDd0I7SUFHakM7UUFEQyxRQUFROytEQUdSO0lBZUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyREFDb0I7SUFHN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFHeEI7SUFlRDtRQURDLFFBQVE7NkRBQ3NCO0lBRy9CO1FBREMsUUFBUTswREFHUjtJQVFEO1FBREMsUUFBUTt1RUFDd0I7SUFHakM7UUFEQyxRQUFRO29FQUdSO0lBU0Q7UUFEQyxRQUFROytEQUNnQjtJQUl6QjtRQURDLFFBQVE7bUVBQ29CO0lBaEhILGlCQUFpQjtRQUQ5QyxPQUFPO09BQ3NCLGlCQUFpQixDQThuQjlDO0lBQUQsd0JBQUM7Q0E5bkJELEFBOG5CQyxDQTluQnVELEVBQUUsQ0FBQyxlQUFlLEdBOG5CekU7a0JBOW5CNkIsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vU2V0dGluZ3MgZnJvbSAnLi9OZXV0cmlub1NldHRpbmdzJztcclxuaW1wb3J0IE5ldXRyaW5vQ29udGV4dCBmcm9tICcuL05ldXRyaW5vQ29udGV4dCc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8vIENhY2hlZCB0ZW1wb3JhcnkgdmFsdWVzLlxyXG5jb25zdCBfZ253cHJNYXQwID0gbmV3IGNjLk1hdDQoKTtcclxuY29uc3QgX2dud3ByTWF0MSA9IG5ldyBjYy5NYXQ0KCk7XHJcbmNvbnN0IF9nbndwclF1YXQwID0gbmV3IGNjLlF1YXQoKTtcclxuY29uc3QgX2dud3ByVmVjMCA9IG5ldyBjYy5WZWMzKCk7XHJcbmNvbnN0IF91V1BNID0gbmV3IGNjLk1hdDQoKTtcclxuY29uc3QgX253cG9zID0gWzAsIDAsIDAsIDBdO1xyXG5jb25zdCBfbndyb3QgPSBbMCwgMCwgMCwgMF07XHJcblxyXG5mdW5jdGlvbiBwcm9wZXJ0eVZhbHVlVG9OcFZhbHVlKHZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUueCwgdmFsdWUueV07XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMykge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUueCwgdmFsdWUueSwgdmFsdWUuel07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTmV1dHJpbm9Db21wb25lbnQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQge1xyXG4gICAgY29udGV4dDogTmV1dHJpbm9Db250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9uZXV0cmlub0VmZmVjdE1vZGVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25ldXRyaW5vRWZmZWN0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyUHJvcHNPblN0YXJ0ID0ge307XHJcbiAgICBwcml2YXRlIF90ZXh0dXJlc1JlbWFwID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3dhaXRpbmdGb3JDb250ZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzZXRJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9udW1UZXh0dXJlc0xvYWRpbmc6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9lcnJvck9uTG9hZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dvcmxkU2NhbGUgPSBuZXcgY2MuVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfZGVzdHJ1Y3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfc2VyaWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfd29ybGRQYXJlbnRJZCA9ICcnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2V0IHdvcmxkUGFyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kV29ybGRQYXJlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd29ybGRQYXJlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl93b3JsZFBhcmVudElkID0gdmFsdWUgPyB2YWx1ZS51dWlkIDogJyc7XHJcbiAgICAgICAgdGhpcy5fd2FpdEZvckNvbnRleHRBbmRSZXNldCgpO1xyXG5cclxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gTmV1dHJpbm9TZXR0aW5ncy5pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmRlZmF1bHRXb3JsZFBhcmVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZXNQcmVmaXhQYXRoID0gJyc7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBnZXQgdGV4dHVyZXNQcmVmaXhQYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlc1ByZWZpeFBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRleHR1cmVzUHJlZml4UGF0aCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVzUHJlZml4UGF0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IE5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0VGV4dHVyZXNQcmVmaXhQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgcHJpdmF0ZSBfc3ByaXRlQXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gIG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgZ2V0IHNwcml0ZUF0bGFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVBdGxhcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3ByaXRlQXRsYXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVBdGxhcyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IE5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0U3ByaXRlQXRsYXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX3BhdXNlZE9uU3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGdldCBwYXVzZWRPblN0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRPblN0YXJ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgcGF1c2VkT25TdGFydCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlZE9uU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl93YWl0Rm9yQ29udGV4dEFuZFJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBfcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGdldCBwYXVzZWRHZW5lcmF0b3JzT25TdGFydCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBhdXNlZEdlbmVyYXRvcnNPblN0YXJ0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl93YWl0Rm9yQ29udGV4dEFuZFJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdHJ1ZSwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGRlc3Ryb3llZCB3aGVuIHRoZSBlZmZlY3QgaXMgZW1wdHkuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlc3Ryb3lXaGVuRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBJZiB0cnVlLCB0aGUgbm9kZSBvZiB0aGUgY29tcG9uZW50IHdpbGwgYmUgZGVzdHJveWVkIHdoZW4gdGhlIGVmZmVjdCBpcyBlbXB0eS5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVzdHJveU5vZGVXaGVuRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgICByZXNldEluRWRpdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gTmV1dHJpbm9Db250ZXh0Lmluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuc3VyZU5vaXNlVGV4dHVyZUlzR2VuZXJhdGVkKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2VyaWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBOZXV0cmlub1NldHRpbmdzLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzUHJlZml4UGF0aCA9IHNldHRpbmdzLmRlZmF1bHRUZXh0dXJlc1ByZWZpeFBhdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVBdGxhcyA9IHNldHRpbmdzLmRlZmF1bHRTcHJpdGVBdGxhcztcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5kZWZhdWx0V29ybGRQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93b3JsZFBhcmVudElkID0gc2V0dGluZ3MuZGVmYXVsdFdvcmxkUGFyZW50LnV1aWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZUZyYW1lcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXMuZm9yRWFjaCgoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmRlY1JlZigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3dhaXRpbmdGb3JDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5vZmYoJ2xvYWRlZCcsIHRoaXMuX3Jlc2V0LCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Rlc3RydWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbmV1dHJpbm9FZmZlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZ2V0TmV1dHJpbm9Xb3JsZFBvc2l0aW9uUm90YXRpb24oX253cG9zLCBfbndyb3QpO1xyXG4gICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0LnVwZGF0ZShkdCwgX253cG9zLCBfbndyb3QpO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBhcmVudCA9IHRoaXMud29ybGRQYXJlbnQ7XHJcbiAgICAgICAgaWYgKHdvcmxkUGFyZW50KSB7XHJcbiAgICAgICAgICAgIHdvcmxkUGFyZW50LmdldFdvcmxkTWF0cml4KF91V1BNKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnd29ybGRQYXJlbnRNYXQnLCBfdVdQTSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnd29ybGRQYXJlbnRNYXQnLCBjYy5NYXQ0LklERU5USVRZKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUNDX0VESVRPUiAmJiAhdGhpcy5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95V2hlbkVtcHR5IHx8IHRoaXMuZGVzdHJveU5vZGVXaGVuRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5ID0gKHRoaXMuZ2V0TnVtUGFydGljbGVzKCkgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVzdHJveU5vZGVXaGVuRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IGlzIGZ1bGx5IGxvYWRlZCBhbmQgcmVhZHkgdG8gcmVuZGVyLlxyXG4gICAgICogQG1ldGhvZCByZWFkeVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gLSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaXMgcmVhZHkgdG8gcmVuZGVyLlxyXG4gICAgICovXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmV1dHJpbm9FZmZlY3QgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0YXJ0cyB0aGUgZWZmZWN0LiBDdXJyZW50IHBvc2l0aW9uIGFuZCByb3RhdGlvbiBvZiB0aGUgbm9kZSBpcyB1c2VkXHJcbiAgICAgKiB0byBzdGFydCBzaW11bGF0aW5nIHRoZSBlZmZlY3QuXHJcbiAgICAgKiBAbWV0aG9kIHJlc3RhcnRcclxuICAgICAqLyAgIFxyXG4gICAgcmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nZXROZXV0cmlub1dvcmxkUG9zaXRpb25Sb3RhdGlvbihfbndwb3MsIF9ud3JvdCk7XHJcbiAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QucmVzdGFydChfbndwb3MsIF9ud3JvdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFZmZlY3QganVtcHMgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIHJvdGF0aW9uIG9mIHRoZSBub2RlIHdpdGhvdXQgdHJhaWxcclxuICAgICAqIGVmZmVjdC4gVXN1YWxseSB1c2VkIGFzIHN1YnNlcXVlbnQgY2FsbCBvZiBjaGFuZ2luZyBwb3NpdGlvbiBhbmQgcm90YXRpb24uXHJcbiAgICAgKiBJbiBvdGhlciB3b3JkcyB0ZWxlcG9ydHMgdGhlIGVmZmVjdCB0byBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBub2RlLlxyXG4gICAgICogQG1ldGhvZCByZXNldFBvc2l0aW9uUm90YXRpb25cclxuICAgICAqL1xyXG4gICAgcmVzZXRQb3NpdGlvblJvdGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX2dldE5ldXRyaW5vV29ybGRQb3NpdGlvblJvdGF0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5yZXNldFBvc2l0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlcyB0aGUgZWZmZWN0LiBJZiBlZmZlY3QgaXMgbm90IGxvYWRlZCB5ZXQsIGl0IHdpbGwgYmUgc3RhcnRlZCBwYXVzZWQuXHJcbiAgICAgKiBBbGwgcGFydGljbGVzIGFyZSBmcm96ZW4gd2hlbiB0aGUgZWZmZWN0IGlzIHBhdXNlZC5cclxuICAgICAqIEBtZXRob2QgcGF1c2VcclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BhdXNlZE9uU3RhcnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5wYXVzZXMgdGhlIGVmZmVjdC4gSWYgdGhlIGVmZmVjdCBpcyBub3QgbG9hZGVkIHlldCwgaXMgd2lsbCBiZSBzdGFydGVkIHVucGF1c2VkLlxyXG4gICAgICogQWxsIHBhcnRpY2xlcyBjb250aW51ZXMgdG8gc2ltdWxhdGUgd2hlbiB0aGUgZWZmZWN0IGlzIHVucGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCB1bnBhdXNlXHJcbiAgICAgKi9cclxuICAgIHVucGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC51bnBhdXNlQWxsRW1pdHRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkT25TdGFydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBlZmZlY3QgaXMgcGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCBwYXVzZWRcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IC0gdHJ1ZSwgaWYgdGhlIGVmZmVjdCBpcyBwYXVzZWQuXHJcbiAgICAgKi9cclxuICAgIHBhdXNlZCgpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV1dHJpbm9FZmZlY3QuYXJlQWxsRW1pdHRlcnNQYXVzZWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkT25TdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXVzZXMgZ2VuZXJhdG9ycy4gSWYgdGhlIGVmZmVjdCBpcyBub3QgbG9hZGVkIHlldCwgaXQgd2lsbCBiZSBzdGFydGVkIHdpdGggcGF1c2VkXHJcbiAgICAgKiBnZW5lcmF0b3JzLiBXaGVuIGdlbmVyYXRvcnMgYXJlIHBhdXNlZCwgbm8gbmV3IHBhcnRpY2xlcyBhcmUgY3JlYXRlZCwgaG93ZXZlclxyXG4gICAgICogYWxsIGNyZWF0ZWQgcGFydGljbGVzIGNvbnRpbnVlIHRvIHNpbXVsYXRlLlxyXG4gICAgICogQG1ldGhvZCBwYXVzZUdlbmVyYXRvcnNcclxuICAgICAqL1xyXG4gICAgcGF1c2VHZW5lcmF0b3JzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wYXVzZWRHZW5lcmF0b3JzT25TdGFydCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnBhdXNlcyBnZW5lcmF0b3JzLiBJZiB0aGUgZWZmZWN0IGlzIG5vdCBsb2FkZWQgeWV0LCBpdCB3aWxsIGJlIHN0YXJ0ZWQgd2l0aCB1bnBhdXNlZFxyXG4gICAgICogZ2VuZXJhdG9ycy4gV2hlbiBnZW5lcmF0b3JzIGFyZSB1bnBhdXNlZCwgdGhleSBnZW5lcmF0ZSBuZXcgcGFydGljbGVzIHdoZW5cclxuICAgICAqIG5lY2Vzc2FyeS4gXHJcbiAgICAgKiBAbWV0aG9kIHVucGF1c2VHZW5lcmF0b3JzXHJcbiAgICAgKi9cclxuICAgIHVucGF1c2VHZW5lcmF0b3JzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QudW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BhdXNlZEdlbmVyYXRvcnNPblN0YXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUsIGlmIGdlbmVyYXRvcnMgaW4gdGhlIGVmZmVjdCBhcmUgcGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCBnZW5lcmF0b3JzUGF1c2VkXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAtIHRydWUsIGlmIGdlbmVyYXRvcnMgYXJlIHBhdXNlZFxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0b3JzUGF1c2VkKCkgOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXV0cmlub0VmZmVjdC5hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRHZW5lcmF0b3JzT25TdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGVtaXR0ZXIgcHJvcGVydHkgaW4gYWxsIHN0YW5kYWxvbmUgZW1pdHRlcnMgaW4gdGhlIGVmZmVjdC5cclxuICAgICAqIEBtZXRob2Qgc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBjaGFuZ2UuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlciB8IGNjLlZlYzIgfCBjYy5WZWMzfSB2YWx1ZSBWYWx1ZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogZWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycygnQ29sb3InLCBuZXcgY2MuVmVjMygxLCAwLCAwKSk7XHJcbiAgICAgKi9cclxuICAgIHNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgICAgIGNvbnN0IG5wVmFsdWUgPSBwcm9wZXJ0eVZhbHVlVG9OcFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5zZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMobmFtZSwgbnBWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZW1pdHRlclByb3BzT25TdGFydFtuYW1lXSA9IG5wVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBudW1iZXIgb2YgYWN0aXZlIHBhcnRpY2xlcyBpbiB0aGUgZWZmZWN0LiBZb3UgY2FuIHVzZSBpdCB0byBmaW5kIG91dCBpZiB0aGVcclxuICAgICAqIGVmZmVjdCBpcyBmaW5pc2hlZCBwbGF5aW5nLlxyXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBOdW1iZXIgb2YgYWN0aXZlIHBhcnRpY2xlcyBpbiB0aGUgZWZmZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXROdW1QYXJ0aWNsZXMoKSA6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25ldXRyaW5vRWZmZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXV0cmlub0VmZmVjdC5nZXROdW1QYXJ0aWNsZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFuIG92ZXJyaWRlIG9mIFJlbmRlckNvbXBvbmVudC5fY2hlY2tCYWN0aCAodGhhbmsgeW91IGd1eXMgZm9yIGdyZWF0IHNwZWxsaW5nISlcclxuICAgICAqIEhlcmUgd2UgaWdub3JlIG1hdGVyaWFscyBhbmQganVzdCBjaGVjayBjdWxsaW5nTWFzay4gVGhlIHJlc3Qgb2YgbWF0ZXJpYWxzXHJcbiAgICAgKiBjaGVjayB3aWxsIGJlIGluIE5ldXRyaW5vQXNzZW1ibGVyLmZpbGxCdWZmZXJzKCkuXHJcbiAgICAgKi9cclxuICAgIF9jaGVja0JhY3RoIChyZW5kZXJlciwgY3VsbGluZ01hc2spIHtcclxuICAgICAgICBpZiAocmVuZGVyZXIuY3VsbGluZ01hc2sgIT09IGN1bGxpbmdNYXNrKSB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLl9mbHVzaCgpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5jdWxsaW5nTWFzayA9IGN1bGxpbmdNYXNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTmV1dHJpbm9Db21wb25lbnQgZG9uJ3QgdXNlIHJlbmRlcmVyLm5vZGUgYW5kIGl0IGNhbiBiZSB1bmNoYW5nZWQuXHJcbiAgICAgICAgLy8gU2V0dGluZyB1cCB0aGlzIHByb3BlcnR5IHNob3VsZCBiZSBkb25lIGR1ZSB0byBjb25zaXN0ZW5jeSB3aXRoXHJcbiAgICAgICAgLy8gb3RoZXIgY29tcG9uZW50cyBhbmQgdGhlaXIgYmVoYXZpb3IuIEhvd2V2ZXIsIGl0IHdpbGwgYnJlYWsgU3BpbmVcclxuICAgICAgICAvLyBpbnRlZ3JhdGlvbiB3aGljaCBkb2Vzbid0IGV4cGVjdCB0aGF0IGF0dGFjaGVkIGNvbXBvbmVudHMgd2lsbCBjaGFuZ2VcclxuICAgICAgICAvLyB0aGUgcmVuZGVyZXIubm9kZS5cclxuICAgICAgICBcclxuICAgICAgICAvL3JlbmRlcmVyLm5vZGUgPSByZW5kZXJlci5fZHVtbXlOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQubG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2FpdGluZ0ZvckNvbnRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQub25jZSgnbG9hZGVkJywgdGhpcy5fcmVzZXQsIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRzIHRoZSBjb21wb25lbnQ6IHRyaWVzIHRvIHJlY3JlYXRlIE5ldXRyaW5vRWZmZWN0IGFuZCByZWxvYWQgYWxsIHJlc291cmNlcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2V0SW5Qcm9ncmVzcyB8fCB0aGlzLl9kZXN0cnVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dhaXRpbmdGb3JDb250ZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBFZmZlY3RDbGFzcyA9IHRoaXMuZ2V0RWZmZWN0Q2xhc3MoKTtcclxuXHJcbiAgICAgICAgaWYgKCFFZmZlY3RDbGFzcykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgJHt0aGlzLl9fY2xhc3NuYW1lX199OiB5b3Ugc2hvdWxkbid0IHVzZSBOZXV0cmlub0NvbXBvbmVudCBieSBpdHNlbGYuIFVzZSBnZW5lcmF0ZWQgZWZmZWN0IGNsYXNzZXMgaW5zdGVhZC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVzZXRJblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9lcnJvck9uTG9hZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdE1vZGVsID0gbmV3IEVmZmVjdENsYXNzKHRoaXMuY29udGV4dC5uZXV0cmlub0NvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0ID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2FkIHRleHR1cmVzLlxyXG4gICAgICAgIGNvbnN0IG51bVRleHR1cmVzID0gdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC50ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlRnJhbWVzID0gbmV3IEFycmF5KG51bVRleHR1cmVzKTtcclxuICAgICAgICB0aGlzLl9udW1UZXh0dXJlc0xvYWRpbmcgPSB0aGlzLl9zcHJpdGVGcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0ZXhJbmRleCA9IDA7IHRleEluZGV4IDwgbnVtVGV4dHVyZXM7ICsrdGV4SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZVBhdGggPSB0aGlzLl90ZXh0dXJlc1ByZWZpeFBhdGggKyB0aGlzLl9uZXV0cmlub0VmZmVjdE1vZGVsLnRleHR1cmVzW3RleEluZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZVBhdGhOb0V4dCA9IHRleHR1cmVQYXRoLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZUF0bGFzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUodGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS5hZGRSZWYoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS10aGlzLl9udW1UZXh0dXJlc0xvYWRpbmc7ICAgIFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke3RoaXMuX19jbGFzc25hbWVfX306IENhbid0IGxvYWQgc3ByaXRlICcke3RleHR1cmVQYXRoTm9FeHR9JyBmcm9tIHNwcml0ZSBhdGxhcy4gV2lsbCB0cnkgdG8gbG9hZCBzaW5nbGUgdGV4dHVyZS5gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZSh0ZXhJbmRleCwgdGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZSh0ZXhJbmRleCwgdGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9udW1UZXh0dXJlc0xvYWRpbmcgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogZGVmZmVyIHRoaXMgdG8gdGhlIGVuZCBvZiB0aGUgZnJhbWVcclxuICAgICAgICAgICAgdGhpcy5fb25UZXh0dXJlc0xvYWRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcXVlc3RzIHN0YW5kYWxvbmUgdGV4dHVyZSBmb3IgbG9hZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZFRleHR1cmUodGV4SW5kZXg6IG51bWJlciwgdGV4dHVyZVBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZXNEYiA9IHRoaXMuZ2V0VGV4dHVyZXNEYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVEZXNjID0gdGV4dHVyZXNEYi5maW5kKHRleCA9PiB0ZXgucGF0aCA9PT0gdGV4dHVyZVBhdGgpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZEZpbmlzaGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAtLV90aGlzLl9udW1UZXh0dXJlc0xvYWRpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX251bVRleHR1cmVzTG9hZGluZyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX29uVGV4dHVyZXNMb2FkZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghdGV4dHVyZURlc2MpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogQ2FuJ3QgZmluZCB0ZXh0dXJlICcke3RleHR1cmVQYXRofS5gKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZXh0dXJlTG9hZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDQ19ERVYpIHtcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRBbnkodGV4dHVyZURlc2MudXVpZCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZXN0cnVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgJHtfdGhpcy5fX2NsYXNzbmFtZV9ffTogQ2FuJ3QgbG9hZCB0ZXh0dXJlICcke3RleHR1cmVQYXRofScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke190aGlzLl9fY2xhc3NuYW1lX199OiBMb2FkaW5nIGZsb3cgd3JvbmcgYmVoYXZpb3IgZm91bmQgIzEgKGRvbid0IHdvcnJ5IGFib3V0IGl0KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSBpbnN0YW5jZW9mIGNjLlRleHR1cmUyRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9zcHJpdGVGcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkdW5kYW50IGNoZWNrIHRvIHJlbW92ZSBlcnJvciBvbiBtdWx0aXBsZSByZWxvYWRpbmcgaW4gcm93LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke190aGlzLl9fY2xhc3NuYW1lX199OiBMb2FkaW5nIGZsb3cgd3JvbmcgYmVoYXZpb3IgZm91bmQgIzIgKGRvbid0IHdvcnJ5IGFib3V0IGl0KWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZXJyb3JPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlTG9hZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50ZXh0dXJlc0J1bmRsZSgpLmxvYWQodGV4dHVyZURlc2MucGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVzdHJ1Y3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYCR7X3RoaXMuX19jbGFzc25hbWVfX306IENhbid0IGxvYWQgc3ByaXRlIGZyYW1lICcke3RleHR1cmVQYXRofScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRleHR1cmVMb2FkRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZCAtIGNyZWF0ZSBuZXV0cmlubyBlZmZlY3QuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX29uVGV4dHVyZXNMb2FkZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Vycm9yT25Mb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFscy5sZW5ndGggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtYXRlcmlhbHNTZXR1cEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC5yZW5kZXJTdHlsZXMuZm9yRWFjaCgocmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4SW5kZXggPSByZW5kZXJTdHlsZS50ZXh0dXJlSW5kaWNlc1swXTtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoIXNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWR1bmRhbnQgY2hlY2sgdG8gcmVtb3ZlIGVycm9yIG9uIG11bHRpcGxlIHJlbG9hZGluZyBpbiByb3cuXHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKGAke3RoaXMuX19jbGFzc25hbWVfX306IExvYWRpbmcgZmxvdyB3cm9uZyBiZWhhdmlvciBmb3VuZCAjMyAoZG9uJ3Qgd29ycnkgYWJvdXQgaXQpYCk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNTZXR1cEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogTG9hZGluZyBmbG93IHdyb25nIGJlaGF2aW9yIGZvdW5kICM0IChkb24ndCB3b3JyeSBhYm91dCBpdClgKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1NldHVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC5tYXRlcmlhbHNbcmVuZGVyU3R5bGUubWF0ZXJpYWxJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5jb250ZXh0Lm1hdGVyaWFsc1ttYXRlcmlhbEluZGV4ICogMiArXHJcbiAgICAgICAgICAgICAgICAodGV4dHVyZS5oYXNQcmVtdWx0aXBsaWVkQWxwaGEoKSA/IDEgOiAwKV07XHJcbiAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogTG9hZGluZyBmbG93IHdyb25nIGJlaGF2aW9yIGZvdW5kICM1IChkb24ndCB3b3JyeSBhYm91dCBpdClgKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1NldHVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdFZhciA9IHRoaXMuc2V0TWF0ZXJpYWwocmVuZGVyU3R5bGVJbmRleCwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBtYXRWYXIuc2V0UHJvcGVydHkoJ3RleHR1cmUnLCB0ZXh0dXJlKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsc1NldHVwRXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRUZXh0dXJlc1JlbWFwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2dldE5ldXRyaW5vV29ybGRQb3NpdGlvblJvdGF0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdCA9IHRoaXMuX25ldXRyaW5vRWZmZWN0TW9kZWwuY3JlYXRlV0dMSW5zdGFuY2UoXHJcbiAgICAgICAgICAgIF9ud3BvcywgX253cm90LCB0aGlzLl9hc3NlbWJsZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogdGhpcy5fcGF1c2VkT25TdGFydCxcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRvcnNQYXVzZWQ6IHRoaXMuX3BhdXNlZEdlbmVyYXRvcnNPblN0YXJ0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC50ZXh0dXJlc1JlbWFwID0gdGhpcy5fdGV4dHVyZXNSZW1hcDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLl9lbWl0dGVyUHJvcHNPblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhwcm9wLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJQcm9wc09uU3RhcnRbcHJvcF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZW1pdHRlclByb3BzT25TdGFydCA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9yZXNldEluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluIGNhc2Ugc29tZSBvZiB0ZXh0dXJlcyBhcmUgcGxhY2VkIG9uIGF0bGFzZXMgd2UgbmVlZCB0byBwcmVwYXJlIHJlbWFwcGluZyBzdHJ1Y3R1cmUgZm9yXHJcbiAgICAgKiBuZXV0cmlub3BhcnRpY2xlcy5qcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdFRleHR1cmVzUmVtYXAoKSB7XHJcbiAgICAgICAgbGV0IHJlbWFwTmVlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgdGV4SW5kZXggPSAwOyB0ZXhJbmRleCA8IHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGg7ICsrdGV4SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUudXZbNl0gIT09IDEgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLnV2WzBdICE9PSAwIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS51dls3XSAhPT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUudXZbMV0gIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1hcE5lZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlbWFwTmVlZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzUmVtYXAgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZXNSZW1hcCA9IG5ldyBBcnJheSh0aGlzLl9zcHJpdGVGcmFtZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGV4SW5kZXggPSAwOyB0ZXhJbmRleCA8IHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGg7ICsrdGV4SW5kZXgpIFxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG5cclxuXHRcdFx0dGhpcy5fdGV4dHVyZXNSZW1hcFt0ZXhJbmRleF0gPSBuZXcgdGhpcy5jb250ZXh0Lm5ldXRyaW5vQ29udGV4dC5TdWJSZWN0KFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUudXZbMF0sIDEgLSBzcHJpdGVGcmFtZS51dlsxXSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLnV2WzZdIC0gc3ByaXRlRnJhbWUudXZbMF0sXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS51dlsxXSAtIHNwcml0ZUZyYW1lLnV2WzddKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXROZXV0cmlub1dvcmxkUG9zaXRpb25Sb3RhdGlvbihwb3NpdGlvbjogbnVtYmVyW10sIHJvdGF0aW9uOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gX2dud3ByTWF0MDtcclxuICAgICAgICBjb25zdCB3b3JsZFJvdGF0aW9uID1fZ253cHJRdWF0MDtcclxuICAgICAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gX2dud3ByVmVjMDtcclxuICAgICAgICBjb25zdCB3b3JsZFNjYWxlID0gdGhpcy5fd29ybGRTY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFdvcmxkTWF0cml4KHdvcmxkTWF0cml4KTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQYXJlbnQgPSB0aGlzLndvcmxkUGFyZW50O1xyXG4gICAgICAgIGlmICh3b3JsZFBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBhcmVudE1hdHJpeCA9IF9nbndwck1hdDE7XHJcbiAgICAgICAgICAgIHdvcmxkUGFyZW50LmdldFdvcmxkTWF0cml4KHdvcmxkUGFyZW50TWF0cml4KTtcclxuICAgICAgICAgICAgY2MuTWF0NC5pbnZlcnQod29ybGRQYXJlbnRNYXRyaXgsIHdvcmxkUGFyZW50TWF0cml4KTtcclxuICAgICAgICAgICAgY2MuTWF0NC5tdWx0aXBseSh3b3JsZE1hdHJpeCwgd29ybGRQYXJlbnRNYXRyaXgsIHdvcmxkTWF0cml4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLk1hdDQuZ2V0Um90YXRpb24od29ybGRSb3RhdGlvbiwgd29ybGRNYXRyaXgpO1xyXG4gICAgICAgIHdvcmxkTWF0cml4LmdldFRyYW5zbGF0aW9uKHdvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIHdvcmxkTWF0cml4LmdldFNjYWxlKHdvcmxkU2NhbGUpO1xyXG5cclxuICAgICAgICBwb3NpdGlvblswXSA9IHdvcmxkUG9zaXRpb24ueCAvIHdvcmxkU2NhbGUueDtcclxuICAgICAgICBwb3NpdGlvblsxXSA9IHdvcmxkUG9zaXRpb24ueSAvIHdvcmxkU2NhbGUueTtcclxuICAgICAgICBwb3NpdGlvblsyXSA9IHdvcmxkUG9zaXRpb24ueiAvIHdvcmxkU2NhbGUuejtcclxuICAgICAgICByb3RhdGlvblswXSA9IHdvcmxkUm90YXRpb24ueDtcclxuICAgICAgICByb3RhdGlvblsxXSA9IHdvcmxkUm90YXRpb24ueTtcclxuICAgICAgICByb3RhdGlvblsyXSA9IHdvcmxkUm90YXRpb24uejtcclxuICAgICAgICByb3RhdGlvblszXSA9IHdvcmxkUm90YXRpb24udztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maW5kV29ybGRQYXJlbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUudXVpZCA9PSB0aGlzLl93b3JsZFBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKG5vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBnZXRFZmZlY3RDbGFzcygpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBnZXRUZXh0dXJlc0RhdGFiYXNlKCkgOiBhbnk7XHJcbn1cclxuXHJcbiJdfQ==
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
cc._RF.push(module, 'fd7f0tQ5EtOT5oxbOnhkx87', 'textures');
// neutrinoparticles/textures.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [{ "uuid": "ed3a71b2-2121-4ee5-87b5-56098a27ebf1", "path": "electricity2x2" }, { "uuid": "4d364072-e5bd-48cb-813b-21c6b50da89a", "path": "particle_texture" }, { "uuid": "001e8ed5-fb98-4daa-b091-34faa603fd3b", "path": "raindrops" }, { "uuid": "16bd4bea-e4de-4ec0-862f-b190fffa54b1", "path": "sparkleBlink" }, { "uuid": "985cf9a5-95ee-43c3-86e8-d799cd732230", "path": "star_glow_white" }, { "uuid": "a0b2248f-8fdf-4295-889a-38f2012cf28d", "path": "textures" }];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXHRleHR1cmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0JBQWUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxzQ0FBc0MsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxzQ0FBc0MsRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxzQ0FBc0MsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsc0NBQXNDLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLHNDQUFzQyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLHNDQUFzQyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW3tcInV1aWRcIjpcImVkM2E3MWIyLTIxMjEtNGVlNS04N2I1LTU2MDk4YTI3ZWJmMVwiLFwicGF0aFwiOlwiZWxlY3RyaWNpdHkyeDJcIn0se1widXVpZFwiOlwiNGQzNjQwNzItZTViZC00OGNiLTgxM2ItMjFjNmI1MGRhODlhXCIsXCJwYXRoXCI6XCJwYXJ0aWNsZV90ZXh0dXJlXCJ9LHtcInV1aWRcIjpcIjAwMWU4ZWQ1LWZiOTgtNGRhYS1iMDkxLTM0ZmFhNjAzZmQzYlwiLFwicGF0aFwiOlwicmFpbmRyb3BzXCJ9LHtcInV1aWRcIjpcIjE2YmQ0YmVhLWU0ZGUtNGVjMC04NjJmLWIxOTBmZmZhNTRiMVwiLFwicGF0aFwiOlwic3BhcmtsZUJsaW5rXCJ9LHtcInV1aWRcIjpcIjk4NWNmOWE1LTk1ZWUtNDNjMy04NmU4LWQ3OTljZDczMjIzMFwiLFwicGF0aFwiOlwic3Rhcl9nbG93X3doaXRlXCJ9LHtcInV1aWRcIjpcImEwYjIyNDhmLThmZGYtNDI5NS04ODlhLTM4ZjIwMTJjZjI4ZFwiLFwicGF0aFwiOlwidGV4dHVyZXNcIn1dO1xuIl19
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
cc._RF.push(module, 'd0b68xTANVBsaIBjAI8Yj1K', 'constants');
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
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["eraserSound"] = "eraserSound";
    SoundTrack["successSound"] = "successSound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["LoseSound"] = "LoseSound";
    SoundTrack["passSound"] = "passSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.isDoneEraser = false;
    Constants.currentLv = 1;
    Constants.touchPoint = null;
    Constants.levelObjectDoneIndex = 0;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFPSjtBQVBELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHlDQUEyQixDQUFBO0lBQzNCLDJDQUE2QixDQUFBO0lBQzdCLHVDQUF5QixDQUFBO0lBQ3pCLHFDQUF1QixDQUFBO0lBQ3ZCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFQSSxVQUFVLEtBQVYsVUFBVSxRQU9kO0FBR0Q7SUFBQTtJQTZCQSxDQUFDO0lBM0JHLFlBQVk7SUFDTCwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxJQUFJLENBQUM7SUFDM0Isc0JBQVksR0FBWSxLQUFLLENBQUM7SUFFOUIsbUJBQVMsR0FBVyxDQUFDLENBQUM7SUFFdEIsb0JBQVUsR0FBWSxJQUFJLENBQUM7SUFDM0IsOEJBQW9CLEdBQVcsQ0FBQyxDQUFDO0lBR3hDLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQTdCRCxBQTZCQyxJQUFBO0FBN0JZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEV2ZW50IHtcclxuICAgIHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIixcclxuICAgIHRvdWNoTW92ZSA9IFwidG91Y2htb3ZlXCIsXHJcbiAgICB0b3VjaEVuZCA9IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsID0gXCJ0b3VjaGNhbmNlbFwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBlcmFzZXJTb3VuZCA9IFwiZXJhc2VyU291bmRcIixcclxuICAgIHN1Y2Nlc3NTb3VuZCA9IFwic3VjY2Vzc1NvdW5kXCIsXHJcbiAgICBjbGlja1NvdW5kID0gXCJjbGlja1NvdW5kXCIsXHJcbiAgICBMb3NlU291bmQgPSBcIkxvc2VTb3VuZFwiLFxyXG4gICAgcGFzc1NvdW5kID0gXCJwYXNzU291bmRcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgaXNDbGlja0dhbWVTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDYW5Ub3VjaDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgaXNEb25lRXJhc2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHN0YXRpYyBjdXJyZW50THY6IG51bWJlciA9IDE7XHJcblxyXG4gICAgc3RhdGljIHRvdWNoUG9pbnQ6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIGxldmVsT2JqZWN0RG9uZUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/components/NeutrinoEffect_NoNameEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bb25IT42FMX7RFDjsIrhww', 'NeutrinoEffect_NoNameEffect');
// neutrinoparticles/components/NeutrinoEffect_NoNameEffect.ts

"use strict";
// !!! This file is generated by NeutrinoParticles extension package.
// !!! Don't modify it manually.
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
var NeutrinoEffect = require("../exported_effects/NoNameEffect.js");
var textures_1 = require("../textures");
var NeutrinoComponent_1 = require("NeutrinoComponent");
var NeutrinoAssembler_1 = require("NeutrinoAssembler");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus, menu = _a.menu;
var NeutrinoEffectComponent = /** @class */ (function (_super) {
    __extends(NeutrinoEffectComponent, _super);
    function NeutrinoEffectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeutrinoEffectComponent.prototype.getEffectClass = function () { return NeutrinoEffect; };
    NeutrinoEffectComponent.prototype.getTexturesDatabase = function () { return textures_1.default; };
    NeutrinoEffectComponent = __decorate([
        ccclass,
        executeInEditMode,
        playOnFocus,
        menu('i18n:MAIN_MENU.component.renderers/NeutrinoComponent/NoNameEffect')
    ], NeutrinoEffectComponent);
    return NeutrinoEffectComponent;
}(NeutrinoComponent_1.default));
exports.default = NeutrinoEffectComponent;
cc.Assembler.register(NeutrinoEffectComponent, NeutrinoAssembler_1.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGNvbXBvbmVudHNcXE5ldXRyaW5vRWZmZWN0X05vTmFtZUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQXFFO0FBQ3JFLGdDQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLG9FQUFzRTtBQUN0RSx3Q0FBbUM7QUFDbkMsdURBQWtEO0FBQ2xELHVEQUFrRDtBQUU1QyxJQUFBLEtBQWtELEVBQUUsQ0FBQyxVQUFVLEVBQTlELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLFdBQVcsaUJBQUEsRUFBRSxJQUFJLFVBQWlCLENBQUM7QUFNdEU7SUFBcUQsMkNBQWlCO0lBQXRFOztJQUdBLENBQUM7SUFGQSxnREFBYyxHQUFkLGNBQW1CLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzQyxxREFBbUIsR0FBbkIsY0FBd0IsT0FBTyxrQkFBUSxDQUFDLENBQUMsQ0FBQztJQUZ0Qix1QkFBdUI7UUFKM0MsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsSUFBSSxDQUFDLG1FQUFtRSxDQUFDO09BQ3JELHVCQUF1QixDQUczQztJQUFELDhCQUFDO0NBSEQsQUFHQyxDQUhvRCwyQkFBaUIsR0FHckU7a0JBSG9CLHVCQUF1QjtBQUs1QyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBaUIsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gISEhIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgTmV1dHJpbm9QYXJ0aWNsZXMgZXh0ZW5zaW9uIHBhY2thZ2UuXG4vLyAhISEgRG9uJ3QgbW9kaWZ5IGl0IG1hbnVhbGx5LlxuXG5pbXBvcnQgKiBhcyBOZXV0cmlub0VmZmVjdCBmcm9tICcuLi9leHBvcnRlZF9lZmZlY3RzL05vTmFtZUVmZmVjdC5qcyc7XG5pbXBvcnQgdGV4dHVyZXMgZnJvbSAnLi4vdGV4dHVyZXMnO1xuaW1wb3J0IE5ldXRyaW5vQ29tcG9uZW50IGZyb20gJ05ldXRyaW5vQ29tcG9uZW50JztcbmltcG9ydCBOZXV0cmlub0Fzc2VtYmxlciBmcm9tICdOZXV0cmlub0Fzc2VtYmxlcic7XG5cbmNvbnN0IHtjY2NsYXNzLCBleGVjdXRlSW5FZGl0TW9kZSwgcGxheU9uRm9jdXMsIG1lbnV9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHBsYXlPbkZvY3VzXG5AbWVudSgnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnJlbmRlcmVycy9OZXV0cmlub0NvbXBvbmVudC9Ob05hbWVFZmZlY3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1dHJpbm9FZmZlY3RDb21wb25lbnQgZXh0ZW5kcyBOZXV0cmlub0NvbXBvbmVudCB7XG5cdGdldEVmZmVjdENsYXNzKCkgeyByZXR1cm4gTmV1dHJpbm9FZmZlY3Q7IH1cblx0Z2V0VGV4dHVyZXNEYXRhYmFzZSgpIHsgcmV0dXJuIHRleHR1cmVzOyB9XG59XG5cbmNjLkFzc2VtYmxlci5yZWdpc3RlcihOZXV0cmlub0VmZmVjdENvbXBvbmVudCwgTmV1dHJpbm9Bc3NlbWJsZXIpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Colorizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50ec2lJW4pG/5sN64RwegCY', 'Colorizer');
// Script/Plugin/Colorizer.ts

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
var NeutrinoEffect_Heart_1 = require("../../neutrinoparticles/components/NeutrinoEffect_Heart");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Colorizer = /** @class */ (function (_super) {
    __extends(Colorizer, _super);
    function Colorizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colorizer.prototype.start = function () {
        var effect = this.node.getComponent(NeutrinoEffect_Heart_1.default);
        if (effect) {
            effect.setPropertyInAllEmitters('Color', // Name of the property
            new cc.Vec3(0.92, 0, 0.92) // cc.Vec3(R, G, B) - red color
            );
        }
    };
    Colorizer = __decorate([
        ccclass
    ], Colorizer);
    return Colorizer;
}(cc.Component));
exports.default = Colorizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXENvbG9yaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnR0FBMEY7QUFFcEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBYUEsQ0FBQztJQVhhLHlCQUFLLEdBQWY7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyw4QkFBbUIsQ0FBQyxDQUFDO1FBRWpFLElBQUksTUFBTSxFQUFFO1lBQ1gsTUFBTSxDQUFDLHdCQUF3QixDQUNsQixPQUFPLEVBQWlCLHVCQUF1QjtZQUMvQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBSSwrQkFBK0I7YUFDaEUsQ0FBQztTQUNYO0lBRUMsQ0FBQztJQVpnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBYTdCO0lBQUQsZ0JBQUM7Q0FiRCxBQWFDLENBYnNDLEVBQUUsQ0FBQyxTQUFTLEdBYWxEO2tCQWJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IE5ldXRyaW5vRWZmZWN0SGVhcnQgZnJvbSBcIi4uLy4uL25ldXRyaW5vcGFydGljbGVzL2NvbXBvbmVudHMvTmV1dHJpbm9FZmZlY3RfSGVhcnRcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JpemVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChOZXV0cmlub0VmZmVjdEhlYXJ0KTtcclxuICAgICAgICBcclxuXHRcdGlmIChlZmZlY3QpIHtcclxuXHRcdFx0ZWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhcclxuICAgICAgICAgICAgICAgICdDb2xvcicsICAgICAgICAgICAgICAgIC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMygwLjkyLCAwLCAwLjkyKSAgICAvLyBjYy5WZWMzKFIsIEcsIEIpIC0gcmVkIGNvbG9yXHJcbiAgICAgICAgICAgICk7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/MaskGamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af3b25w7AVJa7LI1CskCfDP', 'MaskGamePlay');
// Script/Controller/MaskGamePlay.js

"use strict";

var Scratchable = require("Scratchable");

cc.Class({
  "extends": cc.Component,
  properties: {
    pointClear: cc.Node,
    touchArea: cc.Node
  },
  onLoad: function onLoad() {
    this.scratchables = this.getComponentsInChildren(Scratchable);
  },
  update: function update(dt) {
    this.isTouch = this.touchArea.getComponent("TouchAreaController").isTouch;

    if (this.pointClear.active && this.isTouch) {
      var point = cc.v2(this.pointClear.x + cc.winSize.width / 2, this.pointClear.y + cc.winSize.height / 2);
      this.scratchables.forEach(function (scratchable) {
        if (scratchable.isScratchable && scratchable.isInBound(point)) {
          scratchable.scratchHole(point);
        }
      });
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNYXNrR2FtZVBsYXkuanMiXSwibmFtZXMiOlsiU2NyYXRjaGFibGUiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb2ludENsZWFyIiwiTm9kZSIsInRvdWNoQXJlYSIsIm9uTG9hZCIsInNjcmF0Y2hhYmxlcyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwidXBkYXRlIiwiZHQiLCJpc1RvdWNoIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwicG9pbnQiLCJ2MiIsIngiLCJ3aW5TaXplIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiZm9yRWFjaCIsInNjcmF0Y2hhYmxlIiwiaXNTY3JhdGNoYWJsZSIsImlzSW5Cb3VuZCIsInNjcmF0Y2hIb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBM0I7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETDtBQUVWQyxJQUFBQSxTQUFTLEVBQUVOLEVBQUUsQ0FBQ0s7QUFGSixHQUhMO0FBUVBFLEVBQUFBLE1BUk8sb0JBUUU7QUFDUCxTQUFLQyxZQUFMLEdBQW9CLEtBQUtDLHVCQUFMLENBQTZCWCxXQUE3QixDQUFwQjtBQUNELEdBVk07QUFZUFksRUFBQUEsTUFaTyxrQkFZQUMsRUFaQSxFQVlJO0FBQ1QsU0FBS0MsT0FBTCxHQUFlLEtBQUtOLFNBQUwsQ0FBZU8sWUFBZixDQUE0QixxQkFBNUIsRUFBbURELE9BQWxFOztBQUNBLFFBQUksS0FBS1IsVUFBTCxDQUFnQlUsTUFBaEIsSUFBMEIsS0FBS0YsT0FBbkMsRUFBNEM7QUFDMUMsVUFBSUcsS0FBSyxHQUFHZixFQUFFLENBQUNnQixFQUFILENBQ1YsS0FBS1osVUFBTCxDQUFnQmEsQ0FBaEIsR0FBb0JqQixFQUFFLENBQUNrQixPQUFILENBQVdDLEtBQVgsR0FBbUIsQ0FEN0IsRUFFVixLQUFLZixVQUFMLENBQWdCZ0IsQ0FBaEIsR0FBb0JwQixFQUFFLENBQUNrQixPQUFILENBQVdHLE1BQVgsR0FBb0IsQ0FGOUIsQ0FBWjtBQUlBLFdBQUtiLFlBQUwsQ0FBa0JjLE9BQWxCLENBQTBCLFVBQUNDLFdBQUQsRUFBaUI7QUFDekMsWUFBSUEsV0FBVyxDQUFDQyxhQUFaLElBQTZCRCxXQUFXLENBQUNFLFNBQVosQ0FBc0JWLEtBQXRCLENBQWpDLEVBQStEO0FBQzdEUSxVQUFBQSxXQUFXLENBQUNHLFdBQVosQ0FBd0JYLEtBQXhCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7QUFDRjtBQXpCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTY3JhdGNoYWJsZSA9IHJlcXVpcmUoXCJTY3JhdGNoYWJsZVwiKTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHBvaW50Q2xlYXI6IGNjLk5vZGUsXG4gICAgdG91Y2hBcmVhOiBjYy5Ob2RlLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNjcmF0Y2hhYmxlcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oU2NyYXRjaGFibGUpO1xuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuaXNUb3VjaCA9IHRoaXMudG91Y2hBcmVhLmdldENvbXBvbmVudChcIlRvdWNoQXJlYUNvbnRyb2xsZXJcIikuaXNUb3VjaDtcbiAgICBpZiAodGhpcy5wb2ludENsZWFyLmFjdGl2ZSAmJiB0aGlzLmlzVG91Y2gpIHtcbiAgICAgIHZhciBwb2ludCA9IGNjLnYyKFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueCArIGNjLndpblNpemUud2lkdGggLyAyLFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueSArIGNjLndpblNpemUuaGVpZ2h0IC8gMlxuICAgICAgKTtcbiAgICAgIHRoaXMuc2NyYXRjaGFibGVzLmZvckVhY2goKHNjcmF0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGlmIChzY3JhdGNoYWJsZS5pc1NjcmF0Y2hhYmxlICYmIHNjcmF0Y2hhYmxlLmlzSW5Cb3VuZChwb2ludCkpIHtcbiAgICAgICAgICBzY3JhdGNoYWJsZS5zY3JhdGNoSG9sZShwb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/NoNameEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b46864GGMVEva0o9vqyqOmM', 'NoNameEffect');
// neutrinoparticles/exported_effects/NoNameEffect.js

"use strict";

// e4a034bf-d6cf-4b0f-8c80-e6e2e2eb972e
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['NoNameEffect'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['NoNameEffect'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function NoNameEffect(ctx) {
    var Db = this;

    var ne = function ne(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;

      if (this.Bd.we.pe.length > 0) {
        this.we = this.Bd.we.pe[0];
        this.Lc = [ne.prototype.Ec, ne.prototype.Fc][this.we.xe];
      } else this.we = null;
    };

    ne.prototype = {
      Ec: function Ec(fe, Ab, Xb) {
        var Gc = ctx.ib(Xb.Md);
        var Hc = Math.cos(Gc);
        var Ic = Math.sin(Gc);
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * Hc, ye * Ic, ze * -Ic, ze * Hc, Ab[0], Ab[1]);
      },
      Fc: function Fc(fe, Ab, Xb) {
        var q = Xb.Mc;
        var z2 = 2.0 * q[2] * q[2];
        var xy = 2.0 * q[0] * q[1];
        var wz = 2.0 * q[3] * q[2];
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * (1.0 - 2.0 * q[1] * q[1] - z2), ye * (xy + wz), ze * (wz - xy), ze * (2.0 * q[0] * q[0] + z2 - 1.0), Ab[0], Ab[1]);
      },
      Pc: function Pc(fe, Xb, ge) {
        Xb.vc(fe, -1, ge);

        if (this.we) {
          if (this.Be != null && !Xb.oc) {
            if (Xb.Od > 0.001) {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Ab = Xb.Ab.slice();
              var Nd = Xb.Nd.slice();

              if (!ge || ge.
              /**/
              transform(Ab, Nd)) {
                var df = Math.abs(Nd[0]);
                var ef = Math.abs(Nd[1]);

                if (df > 0.001 && ef > 0.001) {
                  fe.save();
                  this.Lc(fe, Ab, Xb);
                  fe.translate(-df * Xb.Pd[0], -ef * (1 - Xb.Pd[1]));
                  fe.globalAlpha *= Xb.Od;

                  if (Xb.gf[0] < 0.999 || Xb.gf[1] < 0.999 || Xb.gf[2] < 0.999) {
                    if (df >= 1 && ef >= 1) {
                      var Ye = df < this.Tc ? df : this.Tc;
                      var Ze = ef < this.Uc ? ef : this.Uc;
                      ctx.af(Ye, Ze);
                      ctx.bf.globalCompositeOperation = "copy";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "multiply";
                      ctx.bf.fillStyle = ctx.ff(Xb.gf);
                      ctx.bf.fillRect(0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "destination-atop";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      fe.drawImage(ctx.cf, 0, 0, Ye, Ze, 0, 0, df, ef);
                    }
                  } else {
                    fe.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, df, ef);
                  }

                  fe.restore();
                }
              }
            }
          }
        }

        Xb.vc(fe, 1, ge);
      },
      Hd: function Hd(fe, ge) {
        fe.save();

        if (this.we) {
          fe.globalCompositeOperation = this.Ld.materials[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].materialIndex];
          this.Be = this.Ld.textureDescs[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];
        } else {
          this.Be = null;
        }

        if (this.Be) {
          this.Tc = this.Be.width / this.we.Rc;
          this.Uc = this.Be.height / this.we.Sc;
        }

        function kd(a, b) {
          if (a.Ab[2] > b.Ab[2]) return 1;
          if (a.Ab[2] < b.Ab[2]) return -1;
          return 0;
        }

        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 2:
            this.Bd.tc.sort(kd);

            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;
        }

        fe.restore();
      }
    };

    var oe = function oe(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;
      if (this.Bd.we.pe.length > 0) this.we = this.Bd.we.pe[0];else this.we = null;
      this.vertex = [{
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }];
    };

    oe.prototype = {
      qe: function qe(Xb, se, re, te, renderBuffer) {
        Xb.Ce(-1, se, re, te, renderBuffer);

        if (this.we) {
          if (!Xb.oc) {
            var v0 = this.vertex[0];
            var v1 = this.vertex[1];
            var v2 = this.vertex[2];
            var v3 = this.vertex[3];
            var Fe = [],
                Ge = [];

            if (this.we.xe == 0) {
              var a = ctx.ib(Xb.Md);
              var s = -Math.sin(a);
              var c = Math.cos(a);
              Fe[0] = se[0] * c + re[0] * s;
              Fe[1] = se[1] * c + re[1] * s;
              Fe[2] = se[2] * c + re[2] * s;
              Ge[0] = -se[0] * s + re[0] * c;
              Ge[1] = -se[1] * s + re[1] * c;
              Ge[2] = -se[2] * s + re[2] * c;
            } else {
              var q = Xb.Mc;
              var z2 = 2.0 * q[2] * q[2];
              var xy = 2.0 * q[0] * q[1];
              var wz = 2.0 * q[3] * q[2];
              Fe[0] = 1.0 - 2.0 * q[1] * q[1] - z2;
              Fe[1] = xy + wz;
              Fe[2] = 2.0 * q[0] * q[2] - 2.0 * q[3] * q[1];
              Ge[0] = xy - wz;
              Ge[1] = 1.0 - 2.0 * q[0] * q[0] - z2;
              Ge[2] = 2.0 * q[1] * q[2] + 2.0 * q[3] * q[0];
            }

            var He = [],
                Ie = [],
                Je = [],
                Ke = [];
            ctx.u(He, Fe, -Xb.Nd[0] * Xb.Pd[0]);
            ctx.u(Ie, Fe, Xb.Nd[0] * (1.0 - Xb.Pd[0]));
            ctx.u(Je, Ge, -Xb.Nd[1] * Xb.Pd[1]);
            ctx.u(Ke, Ge, Xb.Nd[1] * (1.0 - Xb.Pd[1]));
            ctx.c(v0.
            /**/
            position, He, Je);
            ctx.c(v0.
            /**/
            position, v0.
            /**/
            position, Xb.Ab);
            ctx.c(v1.
            /**/
            position, He, Ke);
            ctx.c(v1.
            /**/
            position, v1.
            /**/
            position, Xb.Ab);
            ctx.c(v2.
            /**/
            position, Ie, Ke);
            ctx.c(v2.
            /**/
            position, v2.
            /**/
            position, Xb.Ab);
            ctx.c(v3.
            /**/
            position, Ie, Je);
            ctx.c(v3.
            /**/
            position, v3.
            /**/
            position, Xb.Ab);
            {
              var rgb = ctx.v(Xb.gf, 255);
              v0.
              /**/
              color = v1.
              /**/
              color = v2.
              /**/
              color = v3.
              /**/
              color = [rgb[0], rgb[1], rgb[2], Xb.Od * 255];
            }
            {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Pe, Qe, Re, Se;
              var We = this.Ld.texturesRemap[this.Ld.
              /**/
              model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];

              if (We) {
                var Ue = We.width / this.we.Rc;
                var Ve = We.height / this.we.Sc;
                var Pe = We.x + De * Ue;
                var Qe = Pe + Ue;
                var Re = We.y + We.height - Ee * Ve;
                var Se = Re - Ve;
              } else {
                var Ue = 1.0 / this.we.Rc;
                var Ve = 1.0 / this.we.Sc;
                var Pe = De * Ue;
                var Qe = Pe + Ue;
                var Re = 1.0 - Ee * Ve;
                var Se = Re - Ve;
              }

              v0.
              /**/
              texCoords[0] = [Pe, Se];
              v1.
              /**/
              texCoords[0] = [Pe, Re];
              v2.
              /**/
              texCoords[0] = [Qe, Re];
              v3.
              /**/
              texCoords[0] = [Qe, Se];
            }

            if (renderBuffer.beforeQuad) {
              renderBuffer.beforeQuad(this.we.renderStyleIndex);
            }

            renderBuffer.pushVertex(v0);
            renderBuffer.pushVertex(v1);
            renderBuffer.pushVertex(v2);
            renderBuffer.pushVertex(v3);

            if (!renderBuffer.__lastRenderCall) {
              renderBuffer.__lastRenderCall = new ctx.RenderCall(0, 6, this.we.renderStyleIndex);
            } else {
              var lastRenderCall = renderBuffer.__lastRenderCall;

              if (lastRenderCall.renderStyleIndex == this.we.renderStyleIndex) {
                lastRenderCall.numIndices += 6;
              } else {
                renderBuffer.pushRenderCall(lastRenderCall);
                renderBuffer.__lastRenderCall = new ctx.RenderCall(lastRenderCall.startIndex + lastRenderCall.numIndices, 6, this.we.renderStyleIndex);
              }
            }
          }
        }

        Xb.Ce(1, se, re, te, renderBuffer);
      },
      ue: function ue(se, re, te, renderBuffer) {
        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 2:
            this.Bd.tc.forEach(function (Xb) {
              Xb.depth = ctx.H(te, Xb.Ab);
            });
            this.Bd.tc.sort(function (a, b) {
              if (a.depth < b.depth) return 1;
              if (a.depth > b.depth) return -1;
              return 0;
            });
            this.Bd.tc.forEach(function (Xb) {
              this.qe(Xb, se, re, te, renderBuffer);
            }, this);
            break;
        }
      }
    };

    var ld = function ld(Ld, we, ve) {
      var Vb = this;
      this.Ld = Ld;
      this.we = we; // Eb

      function Eb() {
        this.Fb = 0;
        this.Gb = 1;
        this.Hb = null;
        this.Ib = null;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.Ob = this.Gb;
          this.Fb = 0;
        };

        this.Nb();
      }

      Eb.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var Rb = Vb.Rb;
          var systemTime = Ld.Rb;
          var Sb = Qb;
          var ic = 0;

          if (this.zb > 0.000001) {
            var Tb = this.Ob + Qb * this.zb;

            while (Tb >= 1.0) {
              var Ub = this.zb < 0.001 ? 0.0 : (1.0 - this.Ob) / this.zb;
              Sb -= Ub;
              Rb += Ub;
              systemTime += Ub;

              if (this.Hb != null && Rb > this.Hb) {
                Vb.disactivate();
                break;
              }

              Vb.Rb = Rb;
              Ld.Rb = systemTime;
              if (Ab && Qb > 0) ctx.ab(Vb.Ab, Ab, Vb.Bb, Sb / Qb);
              if (Mc && Qb > 0) ctx.slerpq(Vb.Mc, Mc, Vb.prevRotation, Sb / Qb); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Sb);
                ++ic;
              }

              this.Ob = 0.0;
              Tb -= 1.0;

              if (this.Ib != null && ++this.Fb >= this.Ib) {
                Vb.disactivate();
                break;
              }
            }

            this.Ob = Tb;
          }

          Rb += Sb;
          Vb.Rb = Rb;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // ac

      function ac() {
        this.Gb = 1;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.bc = this.Gb;
        };

        this.Nb();
      }

      ac.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var cc = Vb.Rb;
          var dc = cc + Qb;
          var systemTimeBeforeFrame = Ld.Rb;
          var systemTimeAfterFrame = systemTimeBeforeFrame + Qb;
          var ec = Ab ? ctx.O(ctx.h(Ab, Vb.Bb)) : 0;
          var ic = 0;

          if (ec > 0.000001) {
            var fc = ec / this.rd;
            var Tb = this.bc + fc;
            var hc = fc < 0.001 ? 1.0 - this.bc : (1.0 - this.bc) / fc;
            var jc = [];

            while (Tb > 1.0) {
              var kc = cc + hc * Qb;
              if (Ab) ctx.ab(jc, Vb.Bb, Ab, hc);
              Vb.Rb = kc;
              ctx.T(Vb.Ab, jc);
              Ld.Rb = ctx.X(systemTimeBeforeFrame, systemTimeAfterFrame, hc); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Qb * (1.0 - hc));
                ++ic;
              }

              hc += 1.0 / fc;
              Tb -= 1.0;
            }

            this.bc = Tb;
          }

          Vb.Rb = dc;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // mc

      function mc() {
        this.Ab = [];
        this.Pd = [];
        this.Nd = [];
        this.gf = [];
        this.Kc = [];
      }

      mc.prototype = {
        nc: function nc() {
          this.oc = false;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            pc.Bd.Jd(this.Ab, null);
            if (pc.Ad.sd) pc.Bd.disactivate();
          }
        },
        Yb: function Yb() {
          Vb.we.fd(Vb, this); // IMPL

          this.nc();
        },
        Zb: function Zb() {
          Vb.we.gd(Vb, this); // IMPL

          this.nc();
        },
        Id: function Id(Qb) {
          Vb.we.qc(Qb, Vb, this); // IMPL

          this.rc(Qb);
        },
        pc: function pc(je) {
          return this.Kc[je].Bd;
        },
        rc: function rc(Qb) {
          for (var i = 0; i < this.Kc.length; i++) {
            this.Kc[i].Bd.Id(Qb, this.Ab, null);
          }
        },
        uc: function uc(md, nd) {
          this.Kc.push({
            Bd: new ld(Ld, md, ve),
            Ad: nd
          });
        },
        vc: function vc(fe, xc, ge) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.Hd(fe, ge);
          }
        },
        Ce: function Ce(xc, se, re, te, renderBuffer) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.ue(se, re, te, renderBuffer);
          }
        },
        wc: function wc(fe) {
          this.oc = true;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];

            if (pc.Ad.sd) {
              pc.Bd.activate();
              pc.Bd.Id(0);
            } else pc.Bd.disactivate();
          }
        },
        yc: function yc(Gd) {
          for (var i = 0; i < this.Kc.length; ++i) {
            this.Kc[i].Bd.Ed(Gd);
          }
        }
      }; // zc

      function zc() {}

      zc.prototype.Ac = function (Xb) {
        return Vb.we.Cc(Vb, Xb, this); // IMPL
      }; // ld Ad


      this.Ab = [];
      this.Bb = [];
      this.Mc = [];
      this.prevRotation = [];
      this.tc = [];
      this.sc = [];
      this.Wc = new zc();
      this.construct = new ve(this.Ld, this);
      this.Yc = [];
      this.ad = [];

      this.dd = function () {
        this.vd = new Eb();
      };

      this.ed = function () {
        this.vd = new ac();
      };

      this.we.ud(this); // IMPL

      for (var Wb = 0; Wb < this.jd; ++Wb) {
        var Xb = new mc();

        for (var id = 0; id < this.Yc.length; ++id) {
          var hd = this.Yc[id];
          Xb.uc(hd.Db, hd.Ad);
        }

        this.sc.push(Xb);
      }

      this.Nb = function (Ab, Mc) {
        ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
        ctx.T(this.Bb, this.Ab);
        ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        ctx.U(this.prevRotation, this.Mc);
        this.Rb = 0.0;
        this.wd = 0.0;
        this.Zc = true;
        this.paused_ = false;
        this.generatorsPaused_ = false;
        ctx.W(this.ad, 0, 0, 0);
      };
    };

    ld.prototype.Jd = function (Ab, Mc) {
      this.Nb(Ab, Mc);
      this.sc.push.apply(this.sc, this.tc);
      this.tc.length = 0;
      this.vd.Jd();
    };

    ld.prototype.Id = function (Qb, Ab, Mc) {
      if (this.paused_) {
        this.Td(Ab, Mc);
        return;
      }

      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);

        if (Qb > 0.0001) {
          var shift = [];
          ctx.g(shift, Ab, this.Bb);
          ctx.T(this.ad, shift);
          ctx.w(this.ad, this.ad, Qb);
        } else {
          ctx.W(this.ad, 0, 0, 0);
        }
      } else {
        ctx.W(this.ad, 0, 0, 0);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
      }

      var ic;

      if (this.Zc && !this.generatorsPaused_) {
        ic = this.vd.Id(Qb, Ab, Mc);
      } else {
        if (Ab) ctx.T(this.Ab, Ab);
        if (Mc) ctx.U(this.Mc, Mc);
        ic = 0;
        this.Rb += Qb;
      }

      for (var Wb = ic; Wb < this.tc.length;) {
        var Xb = this.tc[Wb];

        if (!Xb.oc) {
          Xb.Id(Qb);

          if (this.Wc.Ac(this.tc[Wb])) {
            Xb.wc();
            if (this.xd(Wb)) continue;
          }
        } else {
          Xb.rc(Qb);
          if (this.xd(Wb)) continue;
        }

        ++Wb;
      }
    };

    ld.prototype.xd = function (je) {
      var Xb = this.tc[je];
      var ready = true;

      for (var id = 0; id < Xb.Kc.length; ++id) {
        var Bd = Xb.Kc[id].Bd;

        if (Bd.activated() || Bd.tc.length > 0) {
          ready = false;
          break;
        }
      }

      if (ready) {
        this.sc.push(this.tc[je]);
        this.tc.splice(je, 1);
        return true;
      }

      return false;
    };

    ld.prototype.Hd = function (fe, ge) {
      this.construct.Hd(fe, ge);
    };

    ld.prototype.ue = function (se, re, te, renderBuffer) {
      this.construct.ue(se, re, te, renderBuffer);
    };

    ld.prototype.Td = function (Ab, Mc) {
      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);
        ctx.T(this.Ab, Ab);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
        ctx.U(this.Mc, Mc);
      }
    };

    ld.prototype.uc = function (md, nd) {
      this.Yc.push({
        Db: md,
        Ad: nd
      });
    };

    ld.prototype.
    /**/
    pause = function () {
      this.paused_ = true;
    };

    ld.prototype.
    /**/
    unpause = function () {
      this.paused_ = false;
    };

    ld.prototype.
    /**/
    paused = function () {
      return this.paused_;
    };

    ld.prototype.
    /**/
    pauseGenerators = function () {
      this.generatorsPaused_ = true;
    };

    ld.prototype.
    /**/
    unpauseGenerators = function () {
      this.generatorsPaused_ = false;
    };

    ld.prototype.
    /**/
    generatorsPaused = function () {
      return this.generatorsPaused_;
    };

    ld.prototype.activate = function () {
      this.Zc = true;
    };

    ld.prototype.disactivate = function () {
      this.Zc = false;
    };

    ld.prototype.activated = function () {
      return this.Zc;
    };

    ld.prototype.
    /**/
    getNumParticles = function () {
      return this.tc.length;
    };

    var ke = function ke() {
      var Cb = this;

      this._init = function (we, Ab, Mc, ve, options) {
        this.
        /**/
        model = we;
        this.Ab = [];
        this.Mc = []; // ke Ad

        this.od = [];

        this.pd = function (md) {
          var Bd = new ld(this, md, ve);
          Bd.Nb(this.Ab, this.Mc);
          this["_".concat(md.name)] = Bd;
          this.od.push(Bd);
        };

        this.Nb = function (Ab, Mc) {
          this.Cd = 0.0;
          this.Rb = 0.0;
          ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
          ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        };

        this.Nb(Ab, Mc);
        this.
        /**/
        model.qd(this); // IMPL

        this._presimNeeded = true;

        if (options.generatorsPaused) {
          this.
          /**/
          pauseGeneratorsInAllEmitters();
        }

        if (options.paused) {
          this.
          /**/
          pauseAllEmitters();
        } else {
          this.zeroUpdate();
          this.
          /**/
          update(this.Ud, Ab, Mc);
          this._presimNeeded = false;
        }
      };
    };

    ke.prototype.
    /**/
    restart = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      this.Nb(
      /**/
      position ?
      /**/
      position : this.Ab,
      /**/
      rotation ?
      /**/
      rotation : this.Mc);
      this._presimNeeded = true;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Jd(this.Ab, this.Mc);
      }

      this._presimNeeded = true;

      if (options && options.generatorsPaused) {
        this.
        /**/
        pauseGeneratorsInAllEmitters();
      }

      if (options && options.paused) {
        this.
        /**/
        pauseAllEmitters();
      } else {
        this.zeroUpdate();
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
        this._presimNeeded = false;
      }
    };

    ke.prototype.zeroUpdate = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(0, this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    update = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      if (this.Dd > 0.0) this.updateFixed(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation);else this.updateFlex(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation);
    };

    ke.prototype.updateFixed = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      var updatedTime = 0.0;
      var hc = [];
      ctx.T(hc, this.Ab);
      var frameRotation = [];
      ctx.U(frameRotation, this.Mc);
      if (
      /**/
      position && ctx.equalv3_(
      /**/
      position, this.Ab))
        /**/
        position = null;
      if (
      /**/
      rotation && ctx.equalq_(
      /**/
      rotation, this.Mc))
        /**/
        rotation = null;

      while (
      /**/
      dt - updatedTime + this.Cd >= this.Dd) {
        var cc = this.Rb;
        if (
        /**/
        position) ctx.ab(hc, this.Ab,
        /**/
        position, updatedTime /
        /**/
        dt);
        if (
        /**/
        rotation) ctx.slerpq(frameRotation, this.Mc,
        /**/
        rotation, updatedTime /
        /**/
        dt);

        for (var i = 0; i < this.od.length; ++i) {
          this.od[i].Id(this.Dd, hc, frameRotation);
          this.Rb = cc;
        }

        updatedTime += this.Dd - this.Cd;
        this.Cd = 0.0;
        this.Rb = cc + this.Dd;
      }

      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
      this.Cd +=
      /**/
      dt - updatedTime;
    };

    ke.prototype.updateFlex = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      var cc = this.Rb;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(
        /**/
        dt,
        /**/
        position,
        /**/
        rotation);
        this.Rb = cc;
      }

      this.Rb = cc +
      /**/
      dt;
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
    };

    ke.prototype.
    /**/
    resetPosition = function (
    /**/
    position,
    /**/
    rotation) {
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Td(this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    setPropertyInAllEmitters = function (
    /**/
    name,
    /**/
    value) {
      var propName = "_".concat(
      /**/
      name);

      if (
      /**/
      value instanceof Array) {
        if (
        /**/
        value.length == 2) {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.S(this.od[i][propName],
            /**/
            value);
          }
        } else {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.T(this.od[i][propName],
            /**/
            value);
          }
        }
      } else {
        for (var i = 0; i < this.od.length; ++i) {
          this.od[i][propName] =
          /**/
          value;
        }
      }
    };

    ke.prototype.
    /**/
    pauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pause();
      }
    };

    ke.prototype.
    /**/
    unpauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpause();
      }

      this.zeroUpdate();

      if (this._presimNeeded) {
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
        this._presimNeeded = false;
      }
    };

    ke.prototype.
    /**/
    areAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].paused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    pauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pauseGenerators();
      }
    };

    ke.prototype.
    /**/
    unpauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpauseGenerators();
      }
    };

    ke.prototype.
    /**/
    areGeneratorsInAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].generatorsPaused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    getNumParticles = function () {
      var numParticles = 0;

      for (var i = 0; i < this.od.length; ++i) {
        numParticles += this.od[i].getNumParticles();
      }

      return numParticles;
    };

    var le = function le() {
      this._init = function (we, Ab, Mc, renderBuffer, options) {
        le.prototype._init.call(this, we, Ab, Mc, oe, options);

        this.texturesRemap = [];
        var indices = [];
        {
          var verDisp;

          for (var Wb = 0; Wb < this.
          /**/
          model.Xe; ++Wb) {
            verDisp = Wb * 4;
            indices.push(verDisp + 0, verDisp + 3, verDisp + 1, verDisp + 1, verDisp + 3, verDisp + 2);
          }
        }
        this.renderBuffer = renderBuffer;
        this.renderBuffer.initialize(this.
        /**/
        model.Xe * 4, [2], indices, this.
        /**/
        model.Xe);
        this.renderBuffer.__numIndices = 0;
      };
    };

    le.prototype = new ke();

    le.prototype.
    /**/
    fillGeometryBuffers = function (
    /**/
    cameraRight,
    /**/
    cameraUp,
    /**/
    cameraDir) {
      this.renderBuffer.cleanup();
      this.renderBuffer.__lastRenderCall = null;
      this.od.forEach(function (Bd) {
        Bd.ue(
        /**/
        cameraRight,
        /**/
        cameraUp,
        /**/
        cameraDir, this.renderBuffer);
      }, this);
      if (this.renderBuffer.__lastRenderCall) this.renderBuffer.pushRenderCall(this.renderBuffer.__lastRenderCall);
    };

    var me = function me() {
      this._init = function (we, Ab, Mc, options) {
        me.prototype._init.call(this, we, Ab, Mc, ne, options);

        this.materials = [];
        this.
        /**/
        model.materials.forEach(function (value) {
          this.materials.push(['source-over', 'lighter', 'multiply'][value]);
        }, this);
        this.
        /**/
        textureDescs = [];
      };
    };

    me.prototype = new ke();

    me.prototype.
    /**/
    draw = function (
    /**/
    context,
    /**/
    camera) {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Hd(
        /**/
        context,
        /**/
        camera);
      }
    };

    this.createWGLInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    renderBuffer,
    /**/
    options) {
      var Ld = new le();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      renderBuffer,
      /**/
      options || {});

      return Ld;
    };

    this.createCanvas2DInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      var Ld = new me();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      options || {});

      return Ld;
    };

    this.textures = ['sparkleBlink.png'];
    this.materials = [0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 100;

    function Emitter_DefaultEmitter() {
      var _1 = [],
          _3,
          _4,
          _5,
          _6 = [],
          _9 = [],
          _10 = [],
          _10fs = [],
          _10vs = [],
          _10rw = [],
          _10rwn = [],
          _10rwl,
          _10v = [],
          _10p = [],
          _10dtl,
          _10dtp,
          _10df,
          _10fsd = [],
          _12,
          _11,
          _13,
          _14,
          _14i0,
          _14s0 = [],
          _15,
          _16,
          _17;

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._14 = [[[1, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 10;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 10;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        _3 = -100 + Bd.Ld.rand() * (100 - -100);
        _4 = -100 + Bd.Ld.rand() * (100 - -100);
        _5 = -100 + Bd.Ld.rand() * (100 - -100);
        ctx.W(_6, _3, _4, _5);
        Xb._7 = [];
        ctx.rb(Xb._7, _6, Bd.Mc);
        ctx.c(Xb._7, Bd.ad, Xb._7);
        Xb._8 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        _3 = -100 + Bd.Ld.rand() * (100 - -100);
        _4 = -100 + Bd.Ld.rand() * (100 - -100);
        _5 = -100 + Bd.Ld.rand() * (100 - -100);
        ctx.W(_6, _3, _4, _5);
        Xb._7 = [];
        ctx.rb(Xb._7, _6, Bd.Mc);
        ctx.c(Xb._7, Bd.ad, Xb._7);
        Xb._8 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_9, 0, -100, 0);
        ctx.T(_10fs, _9);
        ctx.T(_10vs, [0, 0, 0]);
        ctx.u(_10v, _10fs, Qb);
        ctx.c(_10v, _10v, Xb._7);
        ctx.u(_10p, _10v, Qb);
        ctx.c(_10p, _10p, Xb._2);
        ctx.T(Xb._2, _10p);
        ctx.T(Xb._7, _10v);
        ctx.T(Xb.Ab, Xb._2);
        _12 = 30;
        _11 = 2;
        _13 = Xb._ / _11;
        _14i0 = _13 < 0 ? 0 : _13 > 1 ? 1 : _13;
        ctx.V(_14s0, 0, (_14i0 - 0) * 1);
        _14 = Db.nb(Bd._14[0][_14s0[0]], _14s0[1]);
        _15 = _12 * _14;
        _16 = 1;
        _17 = _16;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._8;
        ctx.V(Xb.Nd, _15, _15);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = _17;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _11 = 2;
        if (Xb._ > _11) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 0;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_DefaultEmitter());
    };

    this.nb = function (funcValues, je) {
      var indexInt = Math.floor(je);
      var nextInt = indexInt + 1;
      return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt);
    };
  }

  return NoNameEffect;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXE5vTmFtZUVmZmVjdC5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJOZXV0cmlub0VmZmVjdCIsIm5hbWVzcGFjZSIsIl9fbGFzdF9fIiwic2VsZiIsIk5vTmFtZUVmZmVjdCIsImN0eCIsIkRiIiwibmUiLCJMZCIsIkJkIiwid2UiLCJwZSIsImxlbmd0aCIsIkxjIiwicHJvdG90eXBlIiwiRWMiLCJGYyIsInhlIiwiZmUiLCJBYiIsIlhiIiwiR2MiLCJpYiIsIk1kIiwiSGMiLCJNYXRoIiwiY29zIiwiSWMiLCJzaW4iLCJ5ZSIsIkFlIiwiTmQiLCJ6ZSIsInRyYW5zZm9ybSIsInEiLCJNYyIsInoyIiwieHkiLCJ3eiIsIlBjIiwiZ2UiLCJ2YyIsIkJlIiwib2MiLCJPZCIsIkRlIiwiZmxvb3IiLCJRYyIsIlJjIiwiRWUiLCJzbGljZSIsImRmIiwiYWJzIiwiZWYiLCJzYXZlIiwidHJhbnNsYXRlIiwiUGQiLCJnbG9iYWxBbHBoYSIsImdmIiwiWWUiLCJUYyIsIlplIiwiVWMiLCJhZiIsImJmIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZHJhd0ltYWdlIiwiaW1hZ2UiLCJ4IiwieSIsImZpbGxTdHlsZSIsImZmIiwiZmlsbFJlY3QiLCJjZiIsInJlc3RvcmUiLCJIZCIsIm1hdGVyaWFscyIsIm1vZGVsIiwicmVuZGVyU3R5bGVzIiwicmVuZGVyU3R5bGVJbmRleCIsIm1hdGVyaWFsSW5kZXgiLCJ0ZXh0dXJlRGVzY3MiLCJ0ZXh0dXJlSW5kaWNlcyIsIndpZHRoIiwiaGVpZ2h0IiwiU2MiLCJrZCIsImEiLCJiIiwiVmMiLCJXYiIsInRjIiwic29ydCIsIm9lIiwidmVydGV4IiwicG9zaXRpb24iLCJjb2xvciIsInRleENvb3JkcyIsInFlIiwic2UiLCJyZSIsInRlIiwicmVuZGVyQnVmZmVyIiwiQ2UiLCJ2MCIsInYxIiwidjIiLCJ2MyIsIkZlIiwiR2UiLCJzIiwiYyIsIkhlIiwiSWUiLCJKZSIsIktlIiwidSIsInJnYiIsInYiLCJQZSIsIlFlIiwiUmUiLCJTZSIsIldlIiwidGV4dHVyZXNSZW1hcCIsIlVlIiwiVmUiLCJiZWZvcmVRdWFkIiwicHVzaFZlcnRleCIsIl9fbGFzdFJlbmRlckNhbGwiLCJSZW5kZXJDYWxsIiwibGFzdFJlbmRlckNhbGwiLCJudW1JbmRpY2VzIiwicHVzaFJlbmRlckNhbGwiLCJzdGFydEluZGV4IiwidWUiLCJmb3JFYWNoIiwiZGVwdGgiLCJIIiwibGQiLCJ2ZSIsIlZiIiwiRWIiLCJGYiIsIkdiIiwiSGIiLCJJYiIsIktiIiwiTGIiLCJNYiIsIk5iIiwiT2IiLCJKZCIsIklkIiwiUWIiLCJQYiIsIlJiIiwic3lzdGVtVGltZSIsIlNiIiwiaWMiLCJ6YiIsIlRiIiwiVWIiLCJkaXNhY3RpdmF0ZSIsImFiIiwiQmIiLCJzbGVycHEiLCJwcmV2Um90YXRpb24iLCJKYiIsInNjIiwicG9wIiwidW5zaGlmdCIsIlliIiwiWmIiLCJUIiwiVSIsImFjIiwiYmMiLCJjYyIsImRjIiwic3lzdGVtVGltZUJlZm9yZUZyYW1lIiwic3lzdGVtVGltZUFmdGVyRnJhbWUiLCJlYyIsIk8iLCJoIiwiZmMiLCJyZCIsImhjIiwiamMiLCJrYyIsIlgiLCJtYyIsIktjIiwibmMiLCJpIiwicGMiLCJBZCIsInNkIiwiZmQiLCJnZCIsInFjIiwicmMiLCJqZSIsInVjIiwibWQiLCJuZCIsInB1c2giLCJ4YyIsIndjIiwiYWN0aXZhdGUiLCJ5YyIsIkdkIiwiRWQiLCJ6YyIsIkFjIiwiQ2MiLCJXYyIsImNvbnN0cnVjdCIsIlljIiwiYWQiLCJkZCIsInZkIiwiZWQiLCJ1ZCIsImpkIiwiaWQiLCJoZCIsIndkIiwiWmMiLCJwYXVzZWRfIiwiZ2VuZXJhdG9yc1BhdXNlZF8iLCJXIiwiYXBwbHkiLCJUZCIsInNoaWZ0IiwiZyIsInciLCJ4ZCIsInJlYWR5IiwiYWN0aXZhdGVkIiwic3BsaWNlIiwicGF1c2UiLCJ1bnBhdXNlIiwicGF1c2VkIiwicGF1c2VHZW5lcmF0b3JzIiwidW5wYXVzZUdlbmVyYXRvcnMiLCJnZW5lcmF0b3JzUGF1c2VkIiwiZ2V0TnVtUGFydGljbGVzIiwia2UiLCJDYiIsIl9pbml0Iiwib3B0aW9ucyIsIm9kIiwicGQiLCJjb25jYXQiLCJuYW1lIiwiQ2QiLCJxZCIsIl9wcmVzaW1OZWVkZWQiLCJwYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwicGF1c2VBbGxFbWl0dGVycyIsInplcm9VcGRhdGUiLCJ1cGRhdGUiLCJVZCIsInJlc3RhcnQiLCJyb3RhdGlvbiIsImR0IiwiRGQiLCJ1cGRhdGVGaXhlZCIsInVwZGF0ZUZsZXgiLCJ1cGRhdGVkVGltZSIsImZyYW1lUm90YXRpb24iLCJlcXVhbHYzXyIsImVxdWFscV8iLCJyZXNldFBvc2l0aW9uIiwic2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzIiwidmFsdWUiLCJwcm9wTmFtZSIsIkFycmF5IiwiUyIsInVucGF1c2VBbGxFbWl0dGVycyIsImFyZUFsbEVtaXR0ZXJzUGF1c2VkIiwidW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwiYXJlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnNQYXVzZWQiLCJudW1QYXJ0aWNsZXMiLCJsZSIsImNhbGwiLCJpbmRpY2VzIiwidmVyRGlzcCIsIlhlIiwiaW5pdGlhbGl6ZSIsIl9fbnVtSW5kaWNlcyIsImZpbGxHZW9tZXRyeUJ1ZmZlcnMiLCJjYW1lcmFSaWdodCIsImNhbWVyYVVwIiwiY2FtZXJhRGlyIiwiY2xlYW51cCIsIm1lIiwiZHJhdyIsImNvbnRleHQiLCJjYW1lcmEiLCJjcmVhdGVXR0xJbnN0YW5jZSIsImNyZWF0ZUNhbnZhczJESW5zdGFuY2UiLCJ0ZXh0dXJlcyIsIkVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIiLCJfMSIsIl8zIiwiXzQiLCJfNSIsIl82IiwiXzkiLCJfMTAiLCJfMTBmcyIsIl8xMHZzIiwiXzEwcnciLCJfMTByd24iLCJfMTByd2wiLCJfMTB2IiwiXzEwcCIsIl8xMGR0bCIsIl8xMGR0cCIsIl8xMGRmIiwiXzEwZnNkIiwiXzEyIiwiXzExIiwiXzEzIiwiXzE0IiwiXzE0aTAiLCJfMTRzMCIsIl8xNSIsIl8xNiIsIl8xNyIsIl8iLCJfMiIsInJiIiwicmFuZCIsIl83IiwiXzgiLCJWIiwibmIiLCJyYW5kb20iLCJmdW5jVmFsdWVzIiwiaW5kZXhJbnQiLCJuZXh0SW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0MsV0FBVUEsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBckQsRUFBa0U7QUFDOURBLElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkQsT0FBTyxFQUF4QjtBQUNILEdBRkQsTUFFTyxJQUFJLE9BQU9HLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBM0MsRUFBZ0Q7QUFDbkRELElBQUFBLE1BQU0sQ0FBQyxDQUFDLFNBQUQsQ0FBRCxFQUFjLFVBQVVGLE9BQVYsRUFBbUI7QUFDbkMsT0FBQ0YsSUFBSSxDQUFDTSxjQUFMLEdBQXNCSixPQUF2QixFQUFnQyxjQUFoQyxJQUFrREQsT0FBTyxFQUF6RDtBQUNILEtBRkssQ0FBTjtBQUdILEdBSk0sTUFJQTtBQUNILFFBQUlNLFNBQVMsR0FBSVAsSUFBSSxDQUFDTSxjQUFMLEtBQXdCTixJQUFJLENBQUNNLGNBQUwsR0FBc0IsRUFBOUMsQ0FBakI7QUFDQUMsSUFBQUEsU0FBUyxDQUFDQyxRQUFWLEdBQXFCRCxTQUFTLENBQUMsY0FBRCxDQUFULEdBQTRCTixPQUFPLEVBQXhEO0FBQ0g7QUFDSixDQVhBLEVBV0MsT0FBT1EsSUFBUCxLQUFnQixXQUFoQixHQUE4QkEsSUFBOUIsU0FYRCxFQVc0QyxZQUFZO0FBRXpELFdBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLFFBQUlDLEVBQUUsR0FBRyxJQUFUOztBQUVBLFFB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SSxDQUFDMlQsTUFBTCxFQUFQO0FBQXVCLE9BQTlDOztBQUNBNVUsTUFBQUEsRUFBRSxDQUFDcVAsRUFBSCxDQUFNLElBQUltRCxzQkFBSixFQUFOO0FBQ0EsS0FMRDs7QUFNQyxTQUFLbUMsRUFBTCxHQUFVLFVBQVNFLFVBQVQsRUFBcUIzSSxFQUFyQixFQUF5QjtBQUFLLFVBQUk0SSxRQUFRLEdBQUc3VCxJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSTZJLE9BQU8sR0FBR0QsUUFBUSxHQUFHLENBQXpCO0FBQStCLGFBQU9qVixHQUFHLENBQUN5TCxDQUFKLENBQU11SixVQUFVLENBQUNDLFFBQUQsQ0FBaEIsRUFBNEJELFVBQVUsQ0FBQ0UsT0FBRCxDQUF0QyxFQUFpRDdJLEVBQUUsR0FBRzRJLFFBQXRELENBQVA7QUFBMkUsS0FBcEw7QUFHRDs7QUFFRCxTQUFPbFYsWUFBUDtBQUNDLENBendDQSxDQUFEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlNGEwMzRiZi1kNmNmLTRiMGYtOGM4MC1lNmUyZTJlYjk3MmVcclxuXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgICAgICAgICAocm9vdC5OZXV0cmlub0VmZmVjdCA9IGV4cG9ydHMpWydOb05hbWVFZmZlY3QnXSA9IGZhY3RvcnkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IChyb290Lk5ldXRyaW5vRWZmZWN0IHx8IChyb290Lk5ldXRyaW5vRWZmZWN0ID0ge30pKTtcclxuICAgICAgICBuYW1lc3BhY2UuX19sYXN0X18gPSBuYW1lc3BhY2VbJ05vTmFtZUVmZmVjdCddID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5mdW5jdGlvbiBOb05hbWVFZmZlY3QoY3R4KSB7XHJcblx0dmFyIERiID0gdGhpcztcclxuXHJcblx0dmFyIG5lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblxyXG5cdFx0XHR0aGlzLkxjID0gW25lLnByb3RvdHlwZS5FYyxcclxuXHRcdFx0XHRuZS5wcm90b3R5cGUuRmNdW3RoaXMud2UueGVdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdG5lLnByb3RvdHlwZSA9IHtcclxuXHRcdEVjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgR2MgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHR2YXIgSGMgPSBNYXRoLmNvcyhHYyk7XHJcblx0XHRcdHZhciBJYyA9IE1hdGguc2luKEdjKTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybSh5ZSAqIEhjLCB5ZSAqIEljLCB6ZSAqIC1JYywgemUgKiBIYywgQWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0RmM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oXHJcblx0XHRcdFx0eWUgKiAoMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MiksXHJcblx0XHRcdFx0eWUgKiAoeHkgKyB3eiksXHJcblx0XHRcdFx0emUgKiAod3ogLSB4eSksXHJcblx0XHRcdFx0emUgKiAoMi4wICogcVswXSAqIHFbMF0gKyB6MiAtIDEuMCksXHJcblx0XHRcdFx0QWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0UGM6IGZ1bmN0aW9uIChmZSwgWGIsIGdlKSB7XHJcblx0XHRcdFhiLnZjKGZlLCAtMSwgZ2UpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuQmUgIT0gbnVsbCAmJiAhWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoWGIuT2QgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBBYiA9IFhiLkFiLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBOZCA9IFhiLk5kLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdGlmICghZ2UgfHwgZ2UuLyoqL3RyYW5zZm9ybShBYiwgTmQpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBkZiA9IE1hdGguYWJzKE5kWzBdKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZWYgPSBNYXRoLmFicyhOZFsxXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkZiA+IDAuMDAxICYmIGVmID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLnNhdmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuTGMoZmUsIEFiLCBYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUudHJhbnNsYXRlKC1kZiAqIFhiLlBkWzBdLCAtZWYgKiAoMSAtIFhiLlBkWzFdKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5nbG9iYWxBbHBoYSAqPSBYYi5PZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoWGIuZ2ZbMF0gPCAwLjk5OSB8fCBYYi5nZlsxXSA8IDAuOTk5IHx8IFhiLmdmWzJdIDwgMC45OTkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRmID49IDEgJiYgZWYgPj0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBZZSA9IGRmIDwgdGhpcy5UYyA/IGRmIDogdGhpcy5UYztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWmUgPSBlZiA8IHRoaXMuVWMgPyBlZiA6IHRoaXMuVWM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5hZihZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJjb3B5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibXVsdGlwbHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFN0eWxlID0gY3R4LmZmKFhiLmdmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFJlY3QoMCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tYXRvcFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZShjdHguY2YsIDAsIDAsIFllLCBaZSwgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIudmMoZmUsIDEsIGdlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0SGQ6IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdFx0ZmUuc2F2ZSgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHRcdFx0XHRmZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB0aGlzLkxkLm1hdGVyaWFsc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS5tYXRlcmlhbEluZGV4XTtcclxuXHRcdFx0XHR0aGlzLkJlID0gdGhpcy5MZC50ZXh0dXJlRGVzY3NbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuQmUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5CZSkge1xyXG5cdFx0XHRcdHRoaXMuVGMgPSB0aGlzLkJlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHR0aGlzLlVjID0gdGhpcy5CZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBrZChhLCBiKSB7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPiBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPCBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGtkKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgb2UgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblxyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnZlcnRleCA9IFtcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9XTtcclxuXHR9XHJcblxyXG5cdG9lLnByb3RvdHlwZSA9IHtcclxuXHRcdHFlOiBmdW5jdGlvbiAoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRYYi5DZSgtMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICghWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgdjAgPSB0aGlzLnZlcnRleFswXTtcclxuXHRcdFx0XHRcdHZhciB2MSA9IHRoaXMudmVydGV4WzFdO1xyXG5cdFx0XHRcdFx0dmFyIHYyID0gdGhpcy52ZXJ0ZXhbMl07XHJcblx0XHRcdFx0XHR2YXIgdjMgPSB0aGlzLnZlcnRleFszXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgRmUgPSBbXSwgR2UgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy53ZS54ZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHZhciBhID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0XHRcdFx0dmFyIHMgPSAtTWF0aC5zaW4oYSk7XHJcblx0XHRcdFx0XHRcdHZhciBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IHNlWzBdICogYyArIHJlWzBdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSBzZVsxXSAqIGMgKyByZVsxXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gc2VbMl0gKiBjICsgcmVbMl0gKiBzO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSAtc2VbMF0gKiBzICsgcmVbMF0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IC1zZVsxXSAqIHMgKyByZVsxXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gLXNlWzJdICogcyArIHJlWzJdICogYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHRcdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0XHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdFx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSAxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHh5ICsgd3o7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gMi4wICogcVswXSAqIHFbMl0gLSAyLjAgKiBxWzNdICogcVsxXTtcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0geHkgLSB3ejtcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAxLjAgLSAyLjAgKiBxWzBdICogcVswXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IDIuMCAqIHFbMV0gKiBxWzJdICsgMi4wICogcVszXSAqIHFbMF07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIEhlID0gW10sIEllID0gW10sIEplID0gW10sIEtlID0gW107XHJcblx0XHRcdFx0XHRjdHgudShIZSwgRmUsIC1YYi5OZFswXSAqIFhiLlBkWzBdKTtcclxuXHRcdFx0XHRcdGN0eC51KEllLCBGZSwgWGIuTmRbMF0gKiAoMS4wIC0gWGIuUGRbMF0pKTtcclxuXHRcdFx0XHRcdGN0eC51KEplLCBHZSwgLVhiLk5kWzFdICogWGIuUGRbMV0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoS2UsIEdlLCBYYi5OZFsxXSAqICgxLjAgLSBYYi5QZFsxXSkpO1xyXG5cclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgSGUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgdjAuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIEhlLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIHYxLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCBJZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCB2Mi4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgSWUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgdjMuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgcmdiID0gY3R4LnYoWGIuZ2YsIDI1NSk7XHJcblx0XHRcdFx0XHRcdHYwLi8qKi9jb2xvciA9IHYxLi8qKi9jb2xvciA9IHYyLi8qKi9jb2xvciA9IHYzLi8qKi9jb2xvciA9IFtyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdLCBYYi5PZCAqIDI1NV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBQZSwgUWUsIFJlLCBTZTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBXZSA9IHRoaXMuTGQudGV4dHVyZXNSZW1hcFt0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdFx0XHRcdGlmIChXZSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IFdlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSBXZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBXZS54ICsgRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9IChXZS55ICsgV2UuaGVpZ2h0IC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSAxLjAgLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IDEuMCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoMS4wIC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0djAuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgU2VdO1xyXG5cdFx0XHRcdFx0XHR2MS4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYyLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djMuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgU2VdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCh0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYwKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYxKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYyKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIXJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKDAsIDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGFzdFJlbmRlckNhbGwgPSByZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsYXN0UmVuZGVyQ2FsbC5yZW5kZXJTdHlsZUluZGV4ID09IHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMgKz0gNjtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFJlbmRlckNhbGwobGFzdFJlbmRlckNhbGwpO1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwuc3RhcnRJbmRleCArIGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMsXHJcblx0XHRcdFx0XHRcdFx0XHQ2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi5DZSgxLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1ZTogZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdFhiLmRlcHRoID0gY3R4LkgodGUsIFhiLkFiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA8IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoID4gYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGxkID0gZnVuY3Rpb24gKExkLCB3ZSwgdmUpIHtcclxuXHRcdHZhciBWYiA9IHRoaXM7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLndlID0gd2U7XHJcblxyXG5cdFx0Ly8gRWJcclxuXHJcblx0XHRmdW5jdGlvbiBFYigpIHtcclxuXHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLkhiID0gbnVsbDtcclxuXHRcdFx0dGhpcy5JYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuT2IgPSB0aGlzLkdiO1xyXG5cdFx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RWIucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIFJiID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgU2IgPSBRYjtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy56YiA+IDAuMDAwMDAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5PYiArIFFiICogdGhpcy56YjtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPj0gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBVYiA9IHRoaXMuemIgPCAwLjAwMSA/IDAuMCA6ICgxLjAgLSB0aGlzLk9iKSAvIHRoaXMuemI7XHJcblx0XHRcdFx0XHRcdFNiIC09IFViO1xyXG5cdFx0XHRcdFx0XHRSYiArPSBVYjtcclxuXHRcdFx0XHRcdFx0c3lzdGVtVGltZSArPSBVYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkhiICE9IG51bGwgJiYgUmIgPiB0aGlzLkhiKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBzeXN0ZW1UaW1lO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoVmIuQWIsIEFiLCBWYi5CYiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoTWMgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5zbGVycHEoVmIuTWMsIE1jLCBWYi5wcmV2Um90YXRpb24sIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFNiKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLk9iID0gMC4wO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5JYiAhPSBudWxsICYmICsrdGhpcy5GYiA+PSB0aGlzLkliKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuT2IgPSBUYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0UmIgKz0gU2I7XHJcblx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWNcclxuXHJcblx0XHRmdW5jdGlvbiBhYygpIHtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuYmMgPSB0aGlzLkdiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIGNjID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIGRjID0gY2MgKyBRYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUJlZm9yZUZyYW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVBZnRlckZyYW1lID0gc3lzdGVtVGltZUJlZm9yZUZyYW1lICsgUWI7XHJcblx0XHRcdFx0dmFyIGVjID0gQWIgPyBjdHguTyhjdHguaChBYiwgVmIuQmIpKSA6IDA7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKGVjID4gMC4wMDAwMDEpIHtcclxuXHRcdFx0XHRcdHZhciBmYyA9IGVjIC8gdGhpcy5yZDtcclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuYmMgKyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgaGMgPSBmYyA8IDAuMDAxID9cclxuXHRcdFx0XHRcdFx0MS4wIC0gdGhpcy5iYyA6ICgxLjAgLSB0aGlzLmJjKSAvIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBqYyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIga2MgPSBjYyArIGhjICogUWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKGpjLCBWYi5CYiwgQWIsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0ga2M7XHJcblx0XHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBqYyk7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gY3R4Llgoc3lzdGVtVGltZUJlZm9yZUZyYW1lLCBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFFiICogKDEuMCAtIGhjKSk7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aGMgKz0gMS4wIC8gZmM7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLmJjID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRWYi5SYiA9IGRjO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtY1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1jKCkge1xyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuUGQgPSBbXTtcclxuXHRcdFx0dGhpcy5OZCA9IFtdO1xyXG5cdFx0XHR0aGlzLmdmID0gW107XHJcblx0XHRcdHRoaXMuS2MgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRtYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdG5jOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblx0XHRcdFx0XHRwYy5CZC5KZCh0aGlzLkFiLCBudWxsKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WWI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5mZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRaYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmdkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRWYi53ZS5xYyhRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHRoaXMucmMoUWIpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cGM6IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLktjW2plXS5CZDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJjOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuSWQoUWIsIHRoaXMuQWIsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVjOiBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHRcdFx0dGhpcy5LYy5wdXNoKHtcclxuXHRcdFx0XHRcdEJkOiBuZXcgbGQoTGQsIG1kLCB2ZSksXHJcblx0XHRcdFx0XHRBZDogbmRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHZjOiBmdW5jdGlvbiAoZmUsIHhjLCBnZSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLkhkKGZlLCBnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Q2U6IGZ1bmN0aW9uICh4Yywgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR3YzogZnVuY3Rpb24gKGZlKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IHRydWU7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZCkge1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5hY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5JZCgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR5YzogZnVuY3Rpb24gKEdkKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLkVkKEdkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB6Y1xyXG5cclxuXHRcdGZ1bmN0aW9uIHpjKCkge1xyXG5cdFx0fVxyXG5cclxuXHRcdHpjLnByb3RvdHlwZS5BYyA9IGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRyZXR1cm4gVmIud2UuQ2MoVmIsIFhiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxkIEFkXHJcblxyXG5cdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0dGhpcy5CYiA9IFtdO1xyXG5cdFx0dGhpcy5NYyA9IFtdO1xyXG5cdFx0dGhpcy5wcmV2Um90YXRpb24gPSBbXTtcclxuXHRcdHRoaXMudGMgPSBbXTtcclxuXHRcdHRoaXMuc2MgPSBbXTtcclxuXHRcdHRoaXMuV2MgPSBuZXcgemMoKTtcclxuXHRcdHRoaXMuY29uc3RydWN0ID0gbmV3IHZlKHRoaXMuTGQsIHRoaXMpO1xyXG5cdFx0dGhpcy5ZYyA9IFtdO1xyXG5cdFx0dGhpcy5hZCA9IFtdO1xyXG5cclxuXHRcdHRoaXMuZGQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgRWIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IGFjKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZS51ZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLmpkOyArK1diKSB7XHJcblx0XHRcdHZhciBYYiA9IG5ldyBtYygpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IHRoaXMuWWMubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdFx0dmFyIGhkID0gdGhpcy5ZY1tpZF07XHJcblx0XHRcdFx0WGIudWMoaGQuRGIsIGhkLkFkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zYy5wdXNoKFhiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0dGhpcy53ZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0XHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkpkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cclxuXHRcdHRoaXMuc2MucHVzaC5hcHBseSh0aGlzLnNjLCB0aGlzLnRjKTtcclxuXHRcdHRoaXMudGMubGVuZ3RoID0gMDtcclxuXHJcblx0XHR0aGlzLnZkLkpkKCk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSWQgPSBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdXNlZF8pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuVGQoQWIsIE1jKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0aWYgKFFiID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0dmFyIHNoaWZ0ID0gW107XHJcblx0XHRcdFx0Y3R4Lmcoc2hpZnQsIEFiLCB0aGlzLkJiKTtcclxuXHRcdFx0XHRjdHguVCh0aGlzLmFkLCBzaGlmdCk7XHJcblx0XHRcdFx0Y3R4LncodGhpcy5hZCwgdGhpcy5hZCwgUWIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGljO1xyXG5cclxuXHRcdGlmICh0aGlzLlpjICYmICF0aGlzLmdlbmVyYXRvcnNQYXVzZWRfKSB7XHJcblx0XHRcdGljID0gdGhpcy52ZC5JZChRYiwgQWIsIE1jKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cclxuXHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHJcblx0XHRcdGljID0gMDtcclxuXHRcdFx0dGhpcy5SYiArPSBRYjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IGljOyBXYiA8IHRoaXMudGMubGVuZ3RoOykge1xyXG5cdFx0XHR2YXIgWGIgPSB0aGlzLnRjW1diXTtcclxuXHJcblx0XHRcdGlmICghWGIub2MpIHtcclxuXHRcdFx0XHRYYi5JZChRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLldjLkFjKHRoaXMudGNbV2JdKSkge1xyXG5cdFx0XHRcdFx0WGIud2MoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRYYi5yYyhRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQrK1diO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGxkLnByb3RvdHlwZS54ZCA9IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0dmFyIFhiID0gdGhpcy50Y1tqZV07XHJcblxyXG5cdFx0dmFyIHJlYWR5ID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgWGIuS2MubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdHZhciBCZCA9IFhiLktjW2lkXS5CZDtcclxuXHJcblx0XHRcdGlmIChCZC5hY3RpdmF0ZWQoKSB8fCBCZC50Yy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0cmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChyZWFkeSkge1xyXG5cdFx0XHR0aGlzLnNjLnB1c2godGhpcy50Y1tqZV0pO1xyXG5cdFx0XHR0aGlzLnRjLnNwbGljZShqZSwgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5IZCA9IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LkhkKGZlLCBnZSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWUgPSBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLlRkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKSB7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVjID0gZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0dGhpcy5ZYy5wdXNoKHsgRGI6IG1kLCBBZDogbmQgfSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dlbmVyYXRvcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0b3JzUGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmRpc2FjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLlpjO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50Yy5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHR2YXIga2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgQ2IgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgdmUsIG9wdGlvbnMpIHtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwgPSB3ZTtcclxuXHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5NYyA9IFtdO1xyXG5cclxuXHRcdFx0Ly8ga2UgQWRcclxuXHJcblx0XHRcdHRoaXMub2QgPSBbXTtcclxuXHJcblx0XHRcdHRoaXMucGQgPSBmdW5jdGlvbiAobWQpIHtcclxuXHRcdFx0XHR2YXIgQmQgPSBuZXcgbGQodGhpcywgbWQsIHZlKTtcclxuXHRcdFx0XHRCZC5OYih0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdFx0XHR0aGlzW1wiX1wiLmNvbmNhdChtZC5uYW1lKV0gPSBCZDtcclxuXHRcdFx0XHR0aGlzLm9kLnB1c2goQmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0XHRcdHRoaXMuQ2QgPSAwLjA7XHJcblx0XHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5xZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmdlbmVyYXRvcnNQYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgQWIsIE1jKTtcclxuXHRcdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXN0YXJ0ID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cclxuXHRcdHRoaXMuTmIoLyoqL3Bvc2l0aW9uID8gLyoqL3Bvc2l0aW9uIDogdGhpcy5BYiwgLyoqL3JvdGF0aW9uID8gLyoqL3JvdGF0aW9uIDogdGhpcy5NYyk7XHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkpkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0dGhpcy4vKiovdXBkYXRlKHRoaXMuVWQsIHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS56ZXJvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoMCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VwZGF0ZSA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHRpZiAodGhpcy5EZCA+IDAuMClcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy51cGRhdGVGbGV4KC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZpeGVkID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdHZhciB1cGRhdGVkVGltZSA9IDAuMDtcclxuXHRcdHZhciBoYyA9IFtdO1xyXG5cdFx0Y3R4LlQoaGMsIHRoaXMuQWIpO1xyXG5cdFx0dmFyIGZyYW1lUm90YXRpb24gPSBbXTtcclxuXHRcdGN0eC5VKGZyYW1lUm90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24gJiYgY3R4LmVxdWFsdjNfKC8qKi9wb3NpdGlvbiwgdGhpcy5BYikpXHJcblx0XHRcdC8qKi9wb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbiAmJiBjdHguZXF1YWxxXygvKiovcm90YXRpb24sIHRoaXMuTWMpKVxyXG5cdFx0XHQvKiovcm90YXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHdoaWxlICgoLyoqL2R0IC0gdXBkYXRlZFRpbWUpICsgdGhpcy5DZCA+PSB0aGlzLkRkKSB7XHJcblx0XHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRcdGN0eC5hYihoYywgdGhpcy5BYiwgLyoqL3Bvc2l0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRcdGN0eC5zbGVycHEoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYywgLyoqL3JvdGF0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldLklkKHRoaXMuRGQsIGhjLCBmcmFtZVJvdGF0aW9uKTtcclxuXHJcblx0XHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVkVGltZSArPSB0aGlzLkRkIC0gdGhpcy5DZDtcclxuXHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5SYiA9IGNjICsgdGhpcy5EZDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0dGhpcy5DZCArPSAvKiovZHQgLSB1cGRhdGVkVGltZTtcclxuXHR9XHJcblx0XHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZsZXggPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUmIgPSBjYyArIC8qKi9kdDtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cdFxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5UZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKC8qKi9uYW1lLCAvKiovdmFsdWUpIHtcclxuXHRcdHZhciBwcm9wTmFtZSA9IFwiX1wiLmNvbmNhdCgvKiovbmFtZSk7XHJcblxyXG5cdFx0aWYgKC8qKi92YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGlmICgvKiovdmFsdWUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5TKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5UKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV1bcHJvcE5hbWVdID0gLyoqL3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi9wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3ByZXNpbU5lZWRlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVBbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0ucGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0uZ2VuZXJhdG9yc1BhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBudW1QYXJ0aWNsZXMgPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRudW1QYXJ0aWNsZXMgKz0gdGhpcy5vZFtpXS5nZXROdW1QYXJ0aWNsZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVtUGFydGljbGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdHZhciBsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgcmVuZGVyQnVmZmVyLCBvcHRpb25zKSB7XHJcblx0XHRcdGxlLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG9lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZXNSZW1hcCA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgdmVyRGlzcDtcclxuXHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy4vKiovbW9kZWwuWGU7ICsrV2IpIHtcclxuXHRcdFx0XHRcdHZlckRpc3AgPSBXYiAqIDQ7XHJcblx0XHRcdFx0XHRpbmRpY2VzLnB1c2godmVyRGlzcCArIDAsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlciA9IHJlbmRlckJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuaW5pdGlhbGl6ZSh0aGlzLi8qKi9tb2RlbC5YZSAqIDQsIFsyXSwgaW5kaWNlcywgdGhpcy4vKiovbW9kZWwuWGUpO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX251bUluZGljZXMgPSAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdGxlLnByb3RvdHlwZS4vKiovZmlsbEdlb21ldHJ5QnVmZmVycyA9IGZ1bmN0aW9uICgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpcikge1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuY2xlYW51cCgpO1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vZC5mb3JFYWNoKGZ1bmN0aW9uIChCZCkge1xyXG5cdFx0XHRCZC51ZSgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpciwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpO1xyXG5cdH1cclxuXHJcblx0dmFyIG1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCBvcHRpb25zKSB7XHJcblx0XHRcdG1lLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG5lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMubWF0ZXJpYWxzID0gW107XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLm1hdGVyaWFscy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goWydzb3VyY2Utb3ZlcicsICdsaWdodGVyJywgJ211bHRpcGx5J11bdmFsdWVdKTtcclxuXHRcdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0XHR0aGlzLi8qKi90ZXh0dXJlRGVzY3MgPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRtZS5wcm90b3R5cGUuLyoqL2RyYXcgPSBmdW5jdGlvbiAoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkhkKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlV0dMSW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbGUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZUNhbnZhczJESW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbWUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cdHRoaXMudGV4dHVyZXMgPSBbJ3NwYXJrbGVCbGluay5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFswXTtcclxuXHR0aGlzLnJlbmRlclN0eWxlcyA9IFt7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlswXX1dO1xyXG5cdHRoaXMuWGUgPSAxMDA7XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIoKSB7XHJcblxyXG5cdFx0dmFyIF8xID0gW10sIF8zLCBfNCwgXzUsIF82ID0gW10sIF85ID0gW10sIF8xMD1bXSwgXzEwZnM9W10sIF8xMHZzPVtdLCBfMTBydz1bXSwgXzEwcnduPVtdLCBfMTByd2wsIF8xMHY9W10sIF8xMHA9W10sIF8xMGR0bCwgXzEwZHRwLCBfMTBkZiwgXzEwZnNkPVtdLCBfMTIsIF8xMSwgXzEzLCBfMTQsIF8xNGkwLCBfMTRzMCA9IFtdLCBfMTUsIF8xNiwgXzE3O1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzoxLFNjOjEscmVuZGVyU3R5bGVJbmRleDowfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIkRlZmF1bHRFbWl0dGVyXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl8xNCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMSwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5qZCA9IDEwMDtcclxuXHRcdFx0QmQuVmMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTWIgPSBmdW5jdGlvbih2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDEwO1xyXG5cdFx0XHR2ZC5HYiA9IDE7XHJcblx0XHRcdHZkLkpiID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDEwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzEsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fMiA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzIsIF8xLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgWGIuXzIpO1xyXG5cdFx0XHRfMyA9IC0xMDAgKyBCZC5MZC5yYW5kKCkgKiAoMTAwIC0gLTEwMCk7XHJcblx0XHRcdF80ID0gLTEwMCArIEJkLkxkLnJhbmQoKSAqICgxMDAgLSAtMTAwKTtcclxuXHRcdFx0XzUgPSAtMTAwICsgQmQuTGQucmFuZCgpICogKDEwMCAtIC0xMDApO1xyXG5cdFx0XHRjdHguVyhfNiwgXzMsIF80LCBfNSk7XHJcblx0XHRcdFhiLl83ID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fNywgXzYsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzcsIEJkLmFkLCBYYi5fNyk7XHJcblx0XHRcdFhiLl84ID0gMDtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8yLCBfMSwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIFhiLl8yKTtcclxuXHRcdFx0XzMgPSAtMTAwICsgQmQuTGQucmFuZCgpICogKDEwMCAtIC0xMDApO1xyXG5cdFx0XHRfNCA9IC0xMDAgKyBCZC5MZC5yYW5kKCkgKiAoMTAwIC0gLTEwMCk7XHJcblx0XHRcdF81ID0gLTEwMCArIEJkLkxkLnJhbmQoKSAqICgxMDAgLSAtMTAwKTtcclxuXHRcdFx0Y3R4LlcoXzYsIF8zLCBfNCwgXzUpO1xyXG5cdFx0XHRYYi5fNyA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzcsIF82LCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl83LCBCZC5hZCwgWGIuXzcpO1xyXG5cdFx0XHRYYi5fOCA9IDA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyArPSBRYjtcclxuXHRcdFx0Y3R4LlcoXzksIDAsIC0xMDAsIDApO1xyXG5cdFx0XHRjdHguVChfMTBmcywgXzkpO1xyXG5cdFx0XHRjdHguVChfMTB2cywgWzAsMCwwXSk7XHJcblx0XHRcdGN0eC51KF8xMHYsIF8xMGZzLCBRYik7XHJcblx0XHRcdGN0eC5jKF8xMHYsIF8xMHYsIFhiLl83KTtcclxuXHRcdFx0Y3R4LnUoXzEwcCwgXzEwdiwgUWIpO1xyXG5cdFx0XHRjdHguYyhfMTBwLCBfMTBwLCBYYi5fMik7XHJcblx0XHRcdGN0eC5UKFhiLl8yLCBfMTBwKTtcclxuXHRcdFx0Y3R4LlQoWGIuXzcsIF8xMHYpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0XHRfMTIgPSAzMDtcclxuXHRcdFx0XzExID0gMjtcclxuXHRcdFx0XzEzID0gKFhiLl8gLyBfMTEpO1xyXG5cdFx0XHRfMTRpMD0oXzEzPDA/MDooXzEzPjE/MTpfMTMpKTtcclxuXHRcdFx0Y3R4LlYoXzE0czAsMCwoXzE0aTAtMCkqMSk7XHJcblx0XHRcdF8xNCA9IERiLm5iKEJkLl8xNFswXVtfMTRzMFswXV0sXzE0czBbMV0pO1xyXG5cdFx0XHRfMTUgPSAoXzEyICogXzE0KTtcclxuXHRcdFx0XzE2ID0gMTtcclxuXHRcdFx0XzE3ID0gXzE2O1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl84O1xyXG5cdFx0XHRjdHguVihYYi5OZCxfMTUsXzE1KTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsWzEsMSwxXSk7XHJcblx0XHRcdFhiLk9kID0gXzE3O1xyXG5cdFx0XHRYYi5RYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzExID0gMjtcclxuXHRcdFx0aWYgKFhiLl8gPiBfMTEpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHRoaXMucWQgPSBmdW5jdGlvbihMZCkge1xyXG5cdFx0TGQuRGQgPSAwLjAzMzMzMzM7XHJcblx0XHRMZC5VZCA9IDA7XHJcblx0XHRMZC5yYW5kID0gZnVuY3Rpb24oKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpOyB9O1xyXG5cdFx0TGQucGQobmV3IEVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIoKSk7XHJcblx0fVxyXG5cdFx0dGhpcy5uYiA9IGZ1bmN0aW9uKGZ1bmNWYWx1ZXMsIGplKSB7IFx0XHRcdHZhciBpbmRleEludCA9IE1hdGguZmxvb3IoamUpOyBcdFx0XHR2YXIgbmV4dEludCA9IGluZGV4SW50ICsgMTsgXHRcdFx0cmV0dXJuIGN0eC5YKGZ1bmNWYWx1ZXNbaW5kZXhJbnRdLCBmdW5jVmFsdWVzW25leHRJbnRdLCBqZSAtIGluZGV4SW50KTsgXHRcdH1cclxuXHJcblxyXG59XHJcblxyXG5yZXR1cm4gTm9OYW1lRWZmZWN0O1xyXG59KSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '583f8lznOlEMIzaakSFrhxZ', 'NodeController');
// Script/Controller/NodeController.ts

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
var NodeController = /** @class */ (function (_super) {
    __extends(NodeController, _super);
    function NodeController() {
        // ScratchAbles
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // UI
        _this.content = null;
        _this.hideMask = null;
        _this.shape_wrong = null;
        _this.FX_confetti = null;
        _this.Scenes = [];
        _this.objects = [];
        return _this;
    }
    NodeController.prototype.start = function () {
        var _this = this;
        this.content.children.forEach(function (node) { return node.name.includes("Scene") && _this.Scenes.push(node); });
        this.Scenes.find(function (scene) {
            scene.children.forEach(function (child) { return child.name.includes("object") && _this.objects.push(child); });
        });
        this.shape_wrong = this.content.getChildByName("shape");
        this.FX_confetti = this.content.getChildByName("ConfettiBase").getComponentInChildren(cc.ParticleSystem);
    };
    __decorate([
        property(cc.Node)
    ], NodeController.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], NodeController.prototype, "hideMask", void 0);
    NodeController = __decorate([
        ccclass
    ], NodeController);
    return NodeController;
}(cc.Component));
exports.default = NodeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUVJLGVBQWU7UUFGbkIscUVBZ0NDO1FBMUJHLEtBQUs7UUFFTCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBQ3RDLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFDdkIsYUFBTyxHQUFjLEVBQUUsQ0FBQzs7SUFnQjVCLENBQUM7SUFiYSw4QkFBSyxHQUFmO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6RCxDQUF5RCxDQUFDLENBQUE7UUFDOUYsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTdHLENBQUM7SUF0QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBWFIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdDbEM7SUFBRCxxQkFBQztDQWhDRCxBQWdDQyxDQWhDMkMsRUFBRSxDQUFDLFNBQVMsR0FnQ3ZEO2tCQWhDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFNjcmF0Y2hBYmxlc1xyXG4gICAgXHJcblxyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHNoYXBlX3dyb25nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZYX2NvbmZldHRpOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBTY2VuZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgb2JqZWN0czogY2MuTm9kZVtdID0gW107XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5uYW1lLmluY2x1ZGVzKFwiU2NlbmVcIikgJiYgdGhpcy5TY2VuZXMucHVzaChub2RlKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5TY2VuZXMuZmluZChzY2VuZSA9PiB7XHJcbiAgICAgICAgICAgIHNjZW5lLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIm9iamVjdFwiKSAmJiB0aGlzLm9iamVjdHMucHVzaChjaGlsZCkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhcGVfd3JvbmcgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFwZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkZYX2NvbmZldHRpID0gdGhpcy5jb250ZW50LmdldENoaWxkQnlOYW1lKFwiQ29uZmV0dGlCYXNlXCIpLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuUGFydGljbGVTeXN0ZW0pOyAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Scratchable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '836a9YKgBxFXYKE5BcLsYH1', 'Scratchable');
// Script/Controller/Scratchable.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDone: 0,
    isWin: cc.Boolean,
    eraserRadius: {
      type: cc.Int,
      "default": 60
    }
  },
  start: function start() {
    this.percentToWin = 1;
    var mask = this.getComponentInChildren(cc.Mask);
    this.graphics = mask._graphics;
    this.graphics.fillColor = cc.color(255, 255, 255, 0);
    this.reset();
  },
  calculateProgress: function calculateProgress() {
    if (!this.isScratchable) {
      return;
    }

    var hitItemCount = 0;
    this.polygonPointsList.forEach(function (item) {
      if (!item.isHit) return;
      hitItemCount += 1;
    });
    this.progress = hitItemCount / this.polygonPointsList.length;

    if (this.progress >= this.percentToWin) {
      this.isWin = true;
      this.isDone = 1;
    }

    if (this.isWin) {
      this.fillInstantly();
      this.completed = true;
      this.isScratchable = false;
      this.node.dispatchEvent(new cc.Event.EventCustom("completed", this));
    }
  },
  reset: function reset() {
    this.callbackFlag = true;
    this.graphics.clear();
    this.tempDrawPoints = [];
    this.polygonPointsList = [];
    this.progress = 0;
    this.completed = false;
    this.isScratchable = true;
    this.initPolygonList();
  },
  initPolygonList: function initPolygonList() {
    for (var x = 0; x < this.node.width; x += this.eraserRadius) {
      for (var y = 0; y < this.node.height; y += this.eraserRadius) {
        this.polygonPointsList.push({
          rect: cc.rect(x - this.node.width / 2, y - this.node.height / 2, this.eraserRadius, this.eraserRadius),
          isHit: false
        });
      }
    }
  },
  scratchHole: function scratchHole(pos) {
    pos = this.node.convertToNodeSpaceAR(pos);
    var stencil = this.graphics;
    var len = this.tempDrawPoints.length;
    this.tempDrawPoints.push(pos);
    this.calculateProgress();

    if (len <= 1) {
      stencil.circle(pos.x, pos.y, this.eraserRadius / 2);
      stencil.fill();
      this.polygonPointsList.forEach(function (item) {
        if (item.isHit) return;
        var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
        var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
        if (xFlag && yFlag) item.isHit = true;
      });
    } else {
      var prevPos = this.tempDrawPoints[len - 2];
      var curPos = this.tempDrawPoints[len - 1];
      stencil.moveTo(prevPos.x, prevPos.y);
      stencil.lineTo(curPos.x, curPos.y);
      stencil.lineWidth = this.eraserRadius;
      stencil.lineCap = cc.Graphics.LineCap.ROUND;
      stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
      stencil.strokeColor = cc.color(255, 255, 255, 255);
      stencil.stroke();
      this.polygonPointsList.forEach(function (item) {
        item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
      });
    }
  },
  resetProgress: function resetProgress() {
    this.clearInstantly();
    this.polygonPointsList = [];
    this.tempDrawPoints = [];
    this.progress = 0;
    this.initPolygonList();
  },
  isInBound: function isInBound(point) {
    return true;
  },
  clearInstantly: function clearInstantly() {
    this.graphics.clear();
  },
  fillInstantly: function fillInstantly() {
    this.graphics.moveTo(0, 0);
    this.graphics.rect(0, 0, this.node.width, this.node.height);
    this.graphics.fill();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTY3JhdGNoYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzRG9uZSIsImlzV2luIiwiQm9vbGVhbiIsImVyYXNlclJhZGl1cyIsInR5cGUiLCJJbnQiLCJzdGFydCIsInBlcmNlbnRUb1dpbiIsIm1hc2siLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiTWFzayIsImdyYXBoaWNzIiwiX2dyYXBoaWNzIiwiZmlsbENvbG9yIiwiY29sb3IiLCJyZXNldCIsImNhbGN1bGF0ZVByb2dyZXNzIiwiaXNTY3JhdGNoYWJsZSIsImhpdEl0ZW1Db3VudCIsInBvbHlnb25Qb2ludHNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpc0hpdCIsInByb2dyZXNzIiwibGVuZ3RoIiwiZmlsbEluc3RhbnRseSIsImNvbXBsZXRlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJFdmVudEN1c3RvbSIsImNhbGxiYWNrRmxhZyIsImNsZWFyIiwidGVtcERyYXdQb2ludHMiLCJpbml0UG9seWdvbkxpc3QiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwicHVzaCIsInJlY3QiLCJzY3JhdGNoSG9sZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3RlbmNpbCIsImxlbiIsImNpcmNsZSIsImZpbGwiLCJ4RmxhZyIsInlGbGFnIiwicHJldlBvcyIsImN1clBvcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJHcmFwaGljcyIsIkxpbmVDYXAiLCJST1VORCIsImxpbmVKb2luIiwiTGluZUpvaW4iLCJzdHJva2VDb2xvciIsInN0cm9rZSIsIkludGVyc2VjdGlvbiIsImxpbmVSZWN0IiwicmVzZXRQcm9ncmVzcyIsImNsZWFySW5zdGFudGx5IiwiaXNJbkJvdW5kIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QyxNQUFsQyxFQUEwQzlCLElBQUksQ0FBQ21CLElBQS9DLENBRGhCO0FBRUQsT0FIRDtBQUlEO0FBQ0YsR0FsSE07QUFxSFB5QixFQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDekIsU0FBS0MsY0FBTDtBQUNBLFNBQUsvQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtjLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS1csZUFBTDtBQUNELEdBM0hNO0FBOEhQaUMsRUFBQUEsU0FBUyxFQUFFLG1CQUFVQyxLQUFWLEVBQWlCO0FBQzFCLFdBQU8sSUFBUDtBQUNELEdBaElNO0FBbUlQRixFQUFBQSxjQUFjLEVBQUUsMEJBQVk7QUFDMUIsU0FBS3ZELFFBQUwsQ0FBY3FCLEtBQWQ7QUFDRCxHQXJJTTtBQXdJUFAsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3pCLFNBQUtkLFFBQUwsQ0FBY3lDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxTQUFLekMsUUFBTCxDQUFjNkIsSUFBZCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLYixJQUFMLENBQVVTLEtBQW5DLEVBQTBDLEtBQUtULElBQUwsQ0FBVVcsTUFBcEQ7QUFDQSxTQUFLM0IsUUFBTCxDQUFjb0MsSUFBZDtBQUNEO0FBNUlNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGlzRG9uZTogMCxcbiAgICBpc1dpbjogY2MuQm9vbGVhbixcbiAgICBlcmFzZXJSYWRpdXM6IHtcbiAgICAgIHR5cGU6IGNjLkludCxcbiAgICAgIGRlZmF1bHQ6IDYwLFxuICAgIH0sXG4gIH0sXG5cblxuICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucGVyY2VudFRvV2luID0gMTtcbiAgICBsZXQgbWFzayA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5NYXNrKTtcbiAgICB0aGlzLmdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH0sXG5cblxuICBjYWxjdWxhdGVQcm9ncmVzcygpIHtcblxuICAgIGlmICghdGhpcy5pc1NjcmF0Y2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBoaXRJdGVtQ291bnQgPSAwO1xuICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKCFpdGVtLmlzSGl0KSByZXR1cm47XG4gICAgICBoaXRJdGVtQ291bnQgKz0gMTtcbiAgICB9KTtcbiAgICB0aGlzLnByb2dyZXNzID0gaGl0SXRlbUNvdW50IC8gdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSB0aGlzLnBlcmNlbnRUb1dpbikge1xuICAgICAgdGhpcy5pc1dpbiA9IHRydWU7XG4gICAgICB0aGlzLmlzRG9uZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNXaW4pIHtcbiAgICAgIHRoaXMuZmlsbEluc3RhbnRseSgpO1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pc1NjcmF0Y2hhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oXCJjb21wbGV0ZWRcIiwgdGhpcykpO1xuICAgIH1cbiAgfSxcblxuXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWxsYmFja0ZsYWcgPSB0cnVlO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdCA9IFtdO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1NjcmF0Y2hhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmluaXRQb2x5Z29uTGlzdCgpO1xuICB9LFxuXG5cbiAgaW5pdFBvbHlnb25MaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm5vZGUud2lkdGg7IHggKz0gdGhpcy5lcmFzZXJSYWRpdXMpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ub2RlLmhlaWdodDsgeSArPSB0aGlzLmVyYXNlclJhZGl1cykge1xuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoXG4gICAgICAgICAgICB4IC0gdGhpcy5ub2RlLndpZHRoIC8gMixcbiAgICAgICAgICAgIHkgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMuZXJhc2VyUmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5lcmFzZXJSYWRpdXNcbiAgICAgICAgICApLFxuICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG5cbiAgc2NyYXRjaEhvbGU6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICBsZXQgc3RlbmNpbCA9IHRoaXMuZ3JhcGhpY3M7XG4gICAgY29uc3QgbGVuID0gdGhpcy50ZW1wRHJhd1BvaW50cy5sZW5ndGg7XG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cy5wdXNoKHBvcyk7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZVByb2dyZXNzKCk7XG5cbiAgICBpZiAobGVuIDw9IDEpIHtcbiAgICAgIHN0ZW5jaWwuY2lyY2xlKHBvcy54LCBwb3MueSwgdGhpcy5lcmFzZXJSYWRpdXMgLyAyKTtcbiAgICAgIHN0ZW5jaWwuZmlsbCgpO1xuXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaXNIaXQpIHJldHVybjtcbiAgICAgICAgY29uc3QgeEZsYWcgPVxuICAgICAgICAgIHBvcy54ID4gaXRlbS5yZWN0LnggJiYgcG9zLnggPCBpdGVtLnJlY3QueCArIGl0ZW0ucmVjdC53aWR0aDtcbiAgICAgICAgY29uc3QgeUZsYWcgPVxuICAgICAgICAgIHBvcy55ID4gaXRlbS5yZWN0LnkgJiYgcG9zLnkgPCBpdGVtLnJlY3QueSArIGl0ZW0ucmVjdC5oZWlnaHQ7XG4gICAgICAgIGlmICh4RmxhZyAmJiB5RmxhZykgaXRlbS5pc0hpdCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByZXZQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDJdO1xuICAgICAgbGV0IGN1clBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMV07XG5cbiAgICAgIHN0ZW5jaWwubW92ZVRvKHByZXZQb3MueCwgcHJldlBvcy55KTtcbiAgICAgIHN0ZW5jaWwubGluZVRvKGN1clBvcy54LCBjdXJQb3MueSk7XG4gICAgICBzdGVuY2lsLmxpbmVXaWR0aCA9IHRoaXMuZXJhc2VyUmFkaXVzO1xuICAgICAgc3RlbmNpbC5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcbiAgICAgIHN0ZW5jaWwubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgc3RlbmNpbC5zdHJva2UoKTtcblxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uaXNIaXQgPVxuICAgICAgICAgIGl0ZW0uaXNIaXQgfHwgY2MuSW50ZXJzZWN0aW9uLmxpbmVSZWN0KHByZXZQb3MsIGN1clBvcywgaXRlbS5yZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuXG4gIHJlc2V0UHJvZ3Jlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsZWFySW5zdGFudGx5KCk7XG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdCA9IFtdO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLmluaXRQb2x5Z29uTGlzdCgpO1xuICB9LFxuXG5cbiAgaXNJbkJvdW5kOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuXG4gIGNsZWFySW5zdGFudGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICB9LFxuXG4gIFxuICBmaWxsSW5zdGFudGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XG4gICAgdGhpcy5ncmFwaGljcy5yZWN0KDAsIDAsIHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG4gIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/AnimData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbde4TkwLVC/rZeCM2fqz7N', 'AnimData');
// Script/Data/AnimData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimData = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Chure;
(function (Chure) {
    Chure["Level01_A"] = "Level/Level01_A";
    Chure["Level01_C"] = "Level/Level01_C";
})(Chure || (Chure = {}));
var Codau;
(function (Codau) {
    Codau["Level01_A"] = "Level/Level01_A";
    Codau["Level01_B"] = "Level/Level01_B";
    Codau["Level01_C"] = "Level/Level01_C";
})(Codau || (Codau = {}));
var NycChuRe;
(function (NycChuRe) {
    NycChuRe["Level01_A"] = "Level/Level01_A";
    NycChuRe["Level01_B"] = "Level/Level01_B";
    NycChuRe["Level01_C"] = "Level/Level01_C";
    NycChuRe["Level02_A"] = "Level/Level02_A";
    NycChuRe["Level02_B"] = "Level/Level02_B";
    NycChuRe["Level03_A"] = "Level/Level03_A";
    NycChuRe["Level03_B"] = "Level/Level03_B";
    NycChuRe["Level03_C"] = "Level/Level03_C";
})(NycChuRe || (NycChuRe = {}));
var Door;
(function (Door) {
    Door["Level01_A"] = "Level01_A";
    Door["Level01_B"] = "Level01_B";
    Door["Level01_C"] = "Level01_C";
})(Door || (Door = {}));
var Boy;
(function (Boy) {
    Boy["Level02_A"] = "Level/Level02_A";
    Boy["Level02_B"] = "Level/Level02_B";
    Boy["Level03_A"] = "Level/Level03_A";
    Boy["Level03_B"] = "Level/Level03_B";
    Boy["Level03_C"] = "Level/Level03_C";
})(Boy || (Boy = {}));
var Girl;
(function (Girl) {
    Girl["Level02_A"] = "Level/Level02_A";
    Girl["Level02_B"] = "Level/Level02_B";
})(Girl || (Girl = {}));
var AnimData = /** @class */ (function () {
    function AnimData() {
    }
    AnimData.Chure = Chure;
    AnimData.Codau = Codau;
    AnimData.NycChuRe = NycChuRe;
    AnimData.Door = Door;
    AnimData.Boy = Boy;
    AnimData.Girl = Girl;
    return AnimData;
}());
exports.AnimData = AnimData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxBbmltRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDTixzQ0FBNkIsQ0FBQTtJQUM3QixzQ0FBNkIsQ0FBQTtBQUNqQyxDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtBQUdELElBQUssS0FJSjtBQUpELFdBQUssS0FBSztJQUNOLHNDQUE2QixDQUFBO0lBQzdCLHNDQUE2QixDQUFBO0lBQzdCLHNDQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFKSSxLQUFLLEtBQUwsS0FBSyxRQUlUO0FBR0QsSUFBSyxRQVNKO0FBVEQsV0FBSyxRQUFRO0lBQ1QseUNBQTZCLENBQUE7SUFDN0IseUNBQTZCLENBQUE7SUFDN0IseUNBQTZCLENBQUE7SUFDN0IseUNBQTZCLENBQUE7SUFDN0IseUNBQTZCLENBQUE7SUFDN0IseUNBQTZCLENBQUE7SUFDN0IseUNBQTZCLENBQUE7SUFDN0IseUNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQVRJLFFBQVEsS0FBUixRQUFRLFFBU1o7QUFHRCxJQUFLLElBSUo7QUFKRCxXQUFLLElBQUk7SUFDTCwrQkFBdUIsQ0FBQTtJQUN2QiwrQkFBdUIsQ0FBQTtJQUN2QiwrQkFBdUIsQ0FBQTtBQUMzQixDQUFDLEVBSkksSUFBSSxLQUFKLElBQUksUUFJUjtBQUdELElBQUssR0FNSjtBQU5ELFdBQUssR0FBRztJQUNKLG9DQUE2QixDQUFBO0lBQzdCLG9DQUE2QixDQUFBO0lBQzdCLG9DQUE2QixDQUFBO0lBQzdCLG9DQUE2QixDQUFBO0lBQzdCLG9DQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFOSSxHQUFHLEtBQUgsR0FBRyxRQU1QO0FBR0QsSUFBSyxJQUdKO0FBSEQsV0FBSyxJQUFJO0lBQ0wscUNBQTZCLENBQUE7SUFDN0IscUNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQUhJLElBQUksS0FBSixJQUFJLFFBR1I7QUFHRDtJQUFBO0lBYUEsQ0FBQztJQVpVLGNBQUssR0FBaUIsS0FBSyxDQUFDO0lBRTVCLGNBQUssR0FBaUIsS0FBSyxDQUFDO0lBRTVCLGlCQUFRLEdBQW9CLFFBQVEsQ0FBQztJQUVyQyxhQUFJLEdBQWdCLElBQUksQ0FBQztJQUV6QixZQUFHLEdBQWUsR0FBRyxDQUFDO0lBRXRCLGFBQUksR0FBZ0IsSUFBSSxDQUFDO0lBRXBDLGVBQUM7Q0FiRCxBQWFDLElBQUE7QUFiWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBDaHVyZSB7XHJcbiAgICBMZXZlbDAxX0EgPSBcIkxldmVsL0xldmVsMDFfQVwiLFxyXG4gICAgTGV2ZWwwMV9DID0gXCJMZXZlbC9MZXZlbDAxX0NcIixcclxufVxyXG5cclxuXHJcbmVudW0gQ29kYXUge1xyXG4gICAgTGV2ZWwwMV9BID0gXCJMZXZlbC9MZXZlbDAxX0FcIixcclxuICAgIExldmVsMDFfQiA9IFwiTGV2ZWwvTGV2ZWwwMV9CXCIsXHJcbiAgICBMZXZlbDAxX0MgPSBcIkxldmVsL0xldmVsMDFfQ1wiLFxyXG59XHJcblxyXG5cclxuZW51bSBOeWNDaHVSZSB7XHJcbiAgICBMZXZlbDAxX0EgPSBcIkxldmVsL0xldmVsMDFfQVwiLFxyXG4gICAgTGV2ZWwwMV9CID0gXCJMZXZlbC9MZXZlbDAxX0JcIixcclxuICAgIExldmVsMDFfQyA9IFwiTGV2ZWwvTGV2ZWwwMV9DXCIsXHJcbiAgICBMZXZlbDAyX0EgPSBcIkxldmVsL0xldmVsMDJfQVwiLFxyXG4gICAgTGV2ZWwwMl9CID0gXCJMZXZlbC9MZXZlbDAyX0JcIixcclxuICAgIExldmVsMDNfQSA9IFwiTGV2ZWwvTGV2ZWwwM19BXCIsXHJcbiAgICBMZXZlbDAzX0IgPSBcIkxldmVsL0xldmVsMDNfQlwiLFxyXG4gICAgTGV2ZWwwM19DID0gXCJMZXZlbC9MZXZlbDAzX0NcIixcclxufVxyXG5cclxuXHJcbmVudW0gRG9vciB7XHJcbiAgICBMZXZlbDAxX0EgPSBcIkxldmVsMDFfQVwiLFxyXG4gICAgTGV2ZWwwMV9CID0gXCJMZXZlbDAxX0JcIixcclxuICAgIExldmVsMDFfQyA9IFwiTGV2ZWwwMV9DXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIEJveSB7XHJcbiAgICBMZXZlbDAyX0EgPSBcIkxldmVsL0xldmVsMDJfQVwiLFxyXG4gICAgTGV2ZWwwMl9CID0gXCJMZXZlbC9MZXZlbDAyX0JcIixcclxuICAgIExldmVsMDNfQSA9IFwiTGV2ZWwvTGV2ZWwwM19BXCIsXHJcbiAgICBMZXZlbDAzX0IgPSBcIkxldmVsL0xldmVsMDNfQlwiLFxyXG4gICAgTGV2ZWwwM19DID0gXCJMZXZlbC9MZXZlbDAzX0NcIixcclxufVxyXG5cclxuXHJcbmVudW0gR2lybCB7XHJcbiAgICBMZXZlbDAyX0EgPSBcIkxldmVsL0xldmVsMDJfQVwiLFxyXG4gICAgTGV2ZWwwMl9CID0gXCJMZXZlbC9MZXZlbDAyX0JcIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltRGF0YSB7XHJcbiAgICBzdGF0aWMgQ2h1cmU6IHR5cGVvZiBDaHVyZSA9IENodXJlO1xyXG5cclxuICAgIHN0YXRpYyBDb2RhdTogdHlwZW9mIENvZGF1ID0gQ29kYXU7XHJcblxyXG4gICAgc3RhdGljIE55Y0NodVJlOiB0eXBlb2YgTnljQ2h1UmUgPSBOeWNDaHVSZTtcclxuXHJcbiAgICBzdGF0aWMgRG9vcjogdHlwZW9mIERvb3IgPSBEb29yO1xyXG5cclxuICAgIHN0YXRpYyBCb3k6IHR5cGVvZiBCb3kgPSBCb3k7XHJcbiAgICBcclxuICAgIHN0YXRpYyBHaXJsOiB0eXBlb2YgR2lybCA9IEdpcmw7XHJcblxyXG59XHJcbiJdfQ==
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
cc._RF.push(module, '16092J/6+9HR5x8fJSUKKad', 'AudioManager');
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
        _this.eraserSound = null;
        _this.successSound = null;
        _this.clickSound = null;
        _this.LoseSound = null;
        _this.femaleLaughSound = null;
        _this.passSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "passSound":
                    this.passSound.play();
                    break;
                case "femaleLaughSound":
                    this.femaleLaughSound.play();
                    break;
                case "eraserSound":
                    this.eraserSound.play();
                    break;
                case "LoseSound":
                    this.LoseSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "successSound":
                    this.successSound.play();
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
            case "femaleLaughSound":
                this.femaleLaughSound.stop();
                break;
            case "passSound":
                this.passSound.stop();
                break;
            case "eraserSound":
                this.eraserSound.stop();
                break;
            case "LoseSound":
                this.LoseSound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "successSound":
                this.successSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.passSound.stop();
        this.bgSound.stop();
        this.femaleLaughSound.stop();
        this.eraserSound.stop();
        this.successSound.stop();
        this.clickSound.stop();
        this.LoseSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "eraserSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "successSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "LoseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "femaleLaughSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "passSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFzRkM7UUFwRkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFtQixJQUFJLENBQUM7UUFFeEMsZUFBUyxHQUFtQixJQUFJLENBQUM7O0lBc0VyQyxDQUFDO0lBbkVVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3BFLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssV0FBVztvQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNWLEtBQUssa0JBQWtCO29CQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdCLE1BQU07Z0JBQ1YsS0FBSyxhQUFhO29CQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1YsS0FBSyxXQUFXO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1YsS0FBSyxZQUFZO29CQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1YsS0FBSyxjQUFjO29CQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1Y7b0JBQ0ksTUFBTTthQUNiO1NBQ0o7SUFDTCxDQUFDO0lBRU0sZ0NBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssa0JBQWtCO2dCQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzdCLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFqRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNVO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQWhCaEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXNGaEM7SUFBRCxtQkFBQztDQXRGRCxBQXNGQyxDQXRGeUMsRUFBRSxDQUFDLFNBQVMsR0FzRnJEO2tCQXRGb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBlcmFzZXJTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc3VjY2Vzc1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjbGlja1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBMb3NlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGZlbWFsZUxhdWdoU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHBhc3NTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBhc3NTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJmZW1hbGVMYXVnaFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZW1hbGVMYXVnaFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJlcmFzZXJTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJhc2VyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxvc2VTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTG9zZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmVtYWxlTGF1Z2hTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5mZW1hbGVMYXVnaFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGFzc1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3NTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVyYXNlclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVyYXNlclNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTG9zZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsaWNrU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN1Y2Nlc3NTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhc3NTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmZlbWFsZUxhdWdoU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZXJhc2VyU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3VjY2Vzc1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmNsaWNrU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuTG9zZVNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
cc._RF.push(module, 'd5c01VUSP5G8p7xJENgTwyO', 'Responsive');
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
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.BG = null;
        _this.scratchable = null;
        _this.CTA_Btn = null;
        _this.CTA_logo = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
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
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
        // this.scratchable.x = -35;
        // this.scratchable.y = -71;
        // this.scratchable.scale = 0.62;
        // this.BG.x = 0;
        // this.BG.y = -50;
        // this.BG.scale = 0.62;
        this.CTA_logo.scale = 0.5;
        this.CTA_Btn.scale = 0.5;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
        // this.BG.x = 0;
        // this.BG.y = -50;
        // this.BG.scale = 0.62;
        this.CTA_logo.scale = 0.5;
        this.CTA_Btn.scale = 0.5;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
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
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        // this.scratchable.x = -35;
        // this.scratchable.y = -71;
        // this.scratchable.scale = 0.48;
        // this.BG.x = 0;
        // this.BG.y = -50;
        // this.BG.scale = 0.5;
        this.CTA_logo.scale = 0.48;
        this.CTA_Btn.scale = 0.4;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        // this.scratchable.x = -35;
        // this.scratchable.y = -71;
        // this.scratchable.scale = 0.62;
        // this.BG.x = 0;
        // this.BG.y = -50;
        // this.BG.scale = 0.62;
        this.CTA_logo.scale = 0.54;
        this.CTA_Btn.scale = 0.4;
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
        //     this.cancelBtn.scale = 0.45;
        // } else {    
        //     // Ipad
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
        //     this.cancelBtn.scale = 0.45;
        // }
    };
    Responsive.prototype.unActiveLogo = function () {
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "BG", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "CTA_Btn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBcU5DO1FBbk5HLFlBQVk7UUFFWixRQUFFLEdBQVksSUFBSSxDQUFDO1FBR25CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFnTWhELENBQUM7SUE5TGEsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFHTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBR08sa0NBQWEsR0FBckI7UUFDSSxJ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RUFBRSxDQUFDLFNBQVMsR0FxTm5EO2tCQXJOb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZVBsYXlcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJHOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjcmF0Y2hhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY3JhdGNoYWJsZS54ID0gLTM1O1xyXG4gICAgICAgIC8vIHRoaXMuc2NyYXRjaGFibGUueSA9IC03MTtcclxuICAgICAgICAvLyB0aGlzLnNjcmF0Y2hhYmxlLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5CRy54ID0gMDtcclxuICAgICAgICAvLyB0aGlzLkJHLnkgPSAtNTA7XHJcbiAgICAgICAgLy8gdGhpcy5CRy5zY2FsZSA9IDAuNjI7XHJcblxyXG5cclxuICAgICAgICB0aGlzLkNUQV9sb2dvLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHRoaXMuQ1RBX0J0bi5zY2FsZSA9IDAuNTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX1RBQkxFVDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJob3Jpem9uX1RhYmxldFwiO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkJHLnggPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuQkcueSA9IC01MDtcclxuICAgICAgICAvLyB0aGlzLkJHLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLkNUQV9CdG4uc2NhbGUgPSAwLjU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmN1cnJlbnREZXZpY2UgPSBcInZlcnRpY2FsX21vYmlsZVwiO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNjcmF0Y2hhYmxlLnggPSAtMzU7XHJcbiAgICAgICAgLy8gdGhpcy5zY3JhdGNoYWJsZS55ID0gLTcxO1xyXG4gICAgICAgIC8vIHRoaXMuc2NyYXRjaGFibGUuc2NhbGUgPSAwLjQ4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuQkcueCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5CRy55ID0gLTUwO1xyXG4gICAgICAgIC8vIHRoaXMuQkcuc2NhbGUgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX2xvZ28uc2NhbGUgPSAwLjQ4O1xyXG4gICAgICAgIHRoaXMuQ1RBX0J0bi5zY2FsZSA9IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwidmVydGljYWxfbW9iaWxlXCI7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2NyYXRjaGFibGUueCA9IC0zNTtcclxuICAgICAgICAvLyB0aGlzLnNjcmF0Y2hhYmxlLnkgPSAtNzE7XHJcbiAgICAgICAgLy8gdGhpcy5zY3JhdGNoYWJsZS5zY2FsZSA9IDAuNjI7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuQkcueCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5CRy55ID0gLTUwO1xyXG4gICAgICAgIC8vIHRoaXMuQkcuc2NhbGUgPSAwLjYyO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9sb2dvLnNjYWxlID0gMC41NDtcclxuICAgICAgICB0aGlzLkNUQV9CdG4uc2NhbGUgPSAwLjQ7XHJcblxyXG4gICAgICAgIC8vIGlmKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNykge1xyXG4gICAgICAgIC8vICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXNcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm95LnNjYWxlID0gMTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ib3kueSA9IDA7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JhdGNoYWJsZS5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NyYXRjaGFibGUueSA9IDEyLjM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5iZ0Rvb3Iuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJnRG9vci55ID0gMTIuMztcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmdpcmwuc2NhbGUgPSAxO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdpcmwueSA9IDA7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyLnggPSAxMjg7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyLnkgPSAtMzI7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5sYW1wLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxhbXAueCA9IC03MztcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2wuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbC54ID0gNjA7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXh0LnNjYWxlID0gMC4zODtcclxuICAgICAgICAvLyAgICAgdGhpcy50ZXh0LnkgPSAxODI7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW5jZWxCdG4uc2NhbGUgPSAwLjQ1O1xyXG5cclxuICAgICAgICAvLyB9IGVsc2UgeyAgICBcclxuICAgICAgICAvLyAgICAgLy8gSXBhZFxyXG4gICAgICAgIC8vICAgICB0aGlzLmJveS5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm95LnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NyYXRjaGFibGUuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNjcmF0Y2hhYmxlLnkgPSAxMi4zO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmdEb29yLnNjYWxlID0gMC40NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5iZ0Rvb3IueSA9IDEyLjM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5naXJsLnNjYWxlID0gMTtcclxuICAgICAgICAvLyAgICAgdGhpcy5naXJsLnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci54ID0gMTI4O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci55ID0gLTMyO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMubGFtcC5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy5sYW1wLnggPSAtNzM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2wueCA9IDYwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGV4dC5zY2FsZSA9IDAuMzg7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGV4dC55ID0gMTgyO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FuY2VsQnRuLnNjYWxlID0gMC40NTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdW5BY3RpdmVMb2dvKCk6IHZvaWQge1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
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
cc._RF.push(module, 'cb238j6V3ZEJ5t9cUnXoMCl', 'TouchAreaController');
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
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var NodeController_1 = require("./NodeController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeController = null;
        _this.CTA_Btn = null;
        _this.CTA_Overlay = null;
        // state
        _this.isTouch = false;
        _this.isActiveCTA = false;
        _this.startTouchPos = null;
        // đây là đồ vật khi tương tác touch
        _this.currentInteractObject = null;
        // đây là vị trí của đồ vật khi lần đầu tương tác touch
        _this.ObjectPrevPos = null;
        // đây là vùng impact
        _this.currentAreaToImpact = null;
        // fx của đồ vật tương đương scene
        _this.currentFX = null;
        // scene hiện tại đang tương tác
        _this.curentScene = null;
        return _this;
    }
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodeController.objects.forEach(function (obj) {
            obj.on(cc.Node.EventType.TOUCH_START, _this.touchStart, _this);
            obj.on(cc.Node.EventType.TOUCH_MOVE, _this.touchMove, _this);
            obj.on(cc.Node.EventType.TOUCH_END, _this.touchEnd, _this);
            obj.on(cc.Node.EventType.TOUCH_CANCEL, _this.touchEnd, _this);
        });
        this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg && aplovin
        // this.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // iroonsoource
        this.NodeController.hideMask.on(cc.Node.EventType.TOUCH_START, this.GamePlay.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.touchStart = function (e) {
        this.GamePlay.handleIronSourcePlaySound();
        if (!constants_1.Constants.isCanTouch)
            return;
        this.isTouch = true;
        this.currentInteractObject = e.target;
        this.ObjectPrevPos = this.currentInteractObject.getPosition();
        this.curentScene = this.currentInteractObject.parent;
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.currentInteractObject.setPosition(convertedPos);
        this.startTouchPos = convertedPos;
        this.currentAreaToImpact = this.curentScene.getChildByName("circle");
        this.currentFX = this.curentScene.getChildByName("FX_doneStep").children[0].getComponent(cc.ParticleSystem);
        var hint = this.curentScene.getChildByName("Hint");
        hint.active = false;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || !this.isTouch)
            return;
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.currentInteractObject.setPosition(convertedPos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        if (!constants_1.Constants.isCanTouch || !this.isTouch)
            return;
        this.isTouch = false;
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        if (this.isTouchInteractArea()) {
            this.GamePlay.handleDoneLevel(this.currentFX, this.curentScene, this.currentInteractObject);
        }
        else {
            this.GamePlay.handleDragWrong(convertedPos, this.ObjectPrevPos, this.currentInteractObject);
        }
    };
    TouchAreaController.prototype.isTouchInteractArea = function () {
        var result = false;
        if (this.currentInteractObject.name === "object_true") {
            var objBdx = this.currentInteractObject.getBoundingBox();
            var areaBdx = this.currentAreaToImpact.getBoundingBox();
            if (areaBdx.intersects(objBdx))
                return true;
        }
        return result;
    };
    TouchAreaController.prototype.offEvent = function () {
        this.isActiveCTA = false;
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_START);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_MOVE);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_END);
        this.NodeController.hideMask.off(cc.Node.EventType.TOUCH_CANCEL);
    };
    TouchAreaController.prototype.update = function (dt) {
        this.GamePlay.handleMuteSoundIronSource();
    };
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(NodeController_1.default)
    ], TouchAreaController.prototype, "NodeController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA_Btn", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA_Overlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.default = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsbURBQWtEO0FBQ2xELHVDQUFrQztBQUNsQyxtREFBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUFvSkM7UUFsSkcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUl0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLFFBQVE7UUFDUixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG9DQUFvQztRQUNwQywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsdURBQXVEO1FBQ3ZELG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRWxDLHFCQUFxQjtRQUNyQix5QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFFcEMsa0NBQWtDO1FBQ2xDLGVBQVMsR0FBc0IsSUFBSSxDQUFDO1FBRXBDLGdDQUFnQztRQUNoQyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFpSGhDLENBQUM7SUE5R2EsbUNBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8s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cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2RlQ29udHJvbGxlciBmcm9tIFwiLi9Ob2RlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTmV1dHJpbm9FZmZlY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL25ldXRyaW5vcGFydGljbGVzL2NvbXBvbmVudHMvTmV1dHJpbm9FZmZlY3RfTm9OYW1lRWZmZWN0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICAgIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTm9kZUNvbnRyb2xsZXIpXHJcbiAgICBOb2RlQ29udHJvbGxlcjogTm9kZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfT3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0FjdGl2ZUNUQTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhcnRUb3VjaFBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgLy8gxJHDonkgbMOgIMSR4buTIHbhuq10IGtoaSB0xrDGoW5nIHTDoWMgdG91Y2hcclxuICAgIGN1cnJlbnRJbnRlcmFjdE9iamVjdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIMSRw6J5IGzDoCB24buLIHRyw60gY+G7p2EgxJHhu5MgduG6rXQga2hpIGzhuqduIMSR4bqndSB0xrDGoW5nIHTDoWMgdG91Y2hcclxuICAgICAgICBPYmplY3RQcmV2UG9zOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICAvLyDEkcOieSBsw6AgdsO5bmcgaW1wYWN0XHJcbiAgICBjdXJyZW50QXJlYVRvSW1wYWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBmeCBj4bunYSDEkeG7kyB24bqtdCB0xrDGoW5nIMSRxrDGoW5nIHNjZW5lXHJcbiAgICBjdXJyZW50Rlg6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuXHJcbiAgICAvLyBzY2VuZSBoaeG7h24gdOG6oWkgxJFhbmcgdMawxqFuZyB0w6FjXHJcbiAgICBjdXJlbnRTY2VuZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIub2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgIG9iai5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgb2JqLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgb2JqLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIG9iai5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9CdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIG10ZyAmJiBhcGxvdmluXHJcbiAgICAgICAgLy8gdGhpcy5DVEFfT3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gaXJvb25zb291cmNlXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5oaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lUGxheS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnRlcmFjdE9iamVjdCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLk9iamVjdFByZXZQb3MgPSB0aGlzLmN1cnJlbnRJbnRlcmFjdE9iamVjdC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cmVudFNjZW5lID0gdGhpcy5jdXJyZW50SW50ZXJhY3RPYmplY3QucGFyZW50O1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW50ZXJhY3RPYmplY3Quc2V0UG9zaXRpb24oY29udmVydGVkUG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFRvdWNoUG9zID0gY29udmVydGVkUG9zO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBcmVhVG9JbXBhY3QgPSB0aGlzLmN1cmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRGWCA9IHRoaXMuY3VyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJGWF9kb25lU3RlcFwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG5cclxuICAgICAgICBsZXQgaGludCA9IHRoaXMuY3VyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJIaW50XCIpO1xyXG4gICAgICAgIGhpbnQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoTW92ZShlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgIXRoaXMuaXNUb3VjaCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEludGVyYWN0T2JqZWN0LnNldFBvc2l0aW9uKGNvbnZlcnRlZFBvcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmQoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCB8fCAhdGhpcy5pc1RvdWNoKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUb3VjaEludGVyYWN0QXJlYSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuaGFuZGxlRG9uZUxldmVsKHRoaXMuY3VycmVudEZYLCB0aGlzLmN1cmVudFNjZW5lLCB0aGlzLmN1cnJlbnRJbnRlcmFjdE9iamVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5oYW5kbGVEcmFnV3JvbmcoY29udmVydGVkUG9zLCB0aGlzLk9iamVjdFByZXZQb3MsIHRoaXMuY3VycmVudEludGVyYWN0T2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXNUb3VjaEludGVyYWN0QXJlYSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEludGVyYWN0T2JqZWN0Lm5hbWUgPT09IFwib2JqZWN0X3RydWVcIikge1xyXG4gICAgICAgICAgICBsZXQgb2JqQmR4ID0gdGhpcy5jdXJyZW50SW50ZXJhY3RPYmplY3QuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgbGV0IGFyZWFCZHggPSB0aGlzLmN1cnJlbnRBcmVhVG9JbXBhY3QuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZihhcmVhQmR4LmludGVyc2VjdHMob2JqQmR4KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvZmZFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlQ1RBID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5oaWRlTWFzay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuaGlkZU1hc2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuaGlkZU1hc2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5oaWRlTWFzay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
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
var AnimData_1 = require("../Data/AnimData");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var NodeController_1 = require("./NodeController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeController = null;
        _this.CTA = null;
        _this.CTA_btn = null;
        // state
        _this.isDoneEraser = false;
        _this.timeoutId = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.initGame();
    };
    GamePlay.prototype.initGame = function () {
        constants_1.Constants.currentLv = 1;
        this.CTA.active = false;
    };
    GamePlay.prototype.handleDragWrong = function (nodeSpaceAR, prevPos, object) {
        constants_1.Constants.isCanTouch = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
        this.NodeController.shape_wrong.active = true;
        this.NodeController.shape_wrong.setPosition(nodeSpaceAR);
        cc.tween(this.NodeController.shape_wrong)
            .to(0.5, { scale: 0.1, opacity: 255 }, { easing: cc.easing.elasticOut })
            .to(0.5, { opacity: 0, scale: 0 }, { easing: cc.easing.elasticOut })
            .call(function () {
            constants_1.Constants.isCanTouch = true;
            object.setPosition(prevPos);
            cc.log("reset Progress!");
        })
            .start();
        cc.log("drag wrong...");
    };
    GamePlay.prototype.handleDoneLevel = function (fx, currentScene, object) {
        var _this = this;
        constants_1.Constants.isCanTouch = false;
        fx.resetSystem();
        var timeToDoneLevel = null;
        var timeToShowNextLevel = null;
        switch (constants_1.Constants.currentLv) {
            case 1:
                timeToDoneLevel = 2;
                timeToShowNextLevel = 4;
                this.handleDoneScene1(currentScene);
                break;
            case 2:
                timeToDoneLevel = 2;
                timeToShowNextLevel = 4;
                this.handleDoneScene2(currentScene);
                break;
            case 3:
                constants_1.Constants.isCanTouch = true;
                constants_1.Constants.levelObjectDoneIndex += 1;
                currentScene.getChildByName("circle").children[constants_1.Constants.levelObjectDoneIndex - 1].active = true;
                object.active = false;
                if (constants_1.Constants.levelObjectDoneIndex >= 2) {
                    constants_1.Constants.isCanTouch = false;
                    timeToDoneLevel = 2;
                    timeToShowNextLevel = 3;
                    this.handleDoneScene3(currentScene);
                }
                break;
            default:
                break;
        }
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.passSound);
        // show fx
        if (timeToDoneLevel)
            this.scheduleOnce(function () {
                _this.NodeController.FX_confetti.resetSystem();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.successSound);
            }, timeToDoneLevel);
        if (timeToShowNextLevel) {
            constants_1.Constants.currentLv += 1;
            constants_1.Constants.currentLv <= 3
                ? this.showNextLevel(timeToShowNextLevel)
                : this.winGame();
        }
        ;
    };
    GamePlay.prototype.handleDoneScene1 = function (currentScene) {
        var _this = this;
        var chure = currentScene.getChildByName("chure");
        var codau = currentScene.getChildByName("codau");
        var obj = currentScene.getChildByName("object_true");
        var circle = currentScene.getChildByName("circle");
        var result = currentScene.getChildByName("Result_Win");
        var nycChure = result.getChildByName("NycChure");
        var hallDoor = result.getChildByName("Hall_Door");
        var fx_Water = hallDoor.getChildByName("PS_Base")
            .getChildByName("water").getComponent(cc.ParticleSystem);
        obj.active = false;
        circle.active = false;
        chure.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Chure.Level01_C, true);
        codau.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Codau.Level01_C, true);
        var nycChurePos = nycChure.getPosition();
        this.scheduleOnce(function () {
            hallDoor.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Door.Level01_B, false);
            nycChure.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.NycChuRe.Level01_B, true);
            _this.scheduleOnce(function () { fx_Water.resetSystem(); }, 0.2);
            cc.tween(nycChure)
                .to(0.5, { x: nycChurePos.x - 40 })
                .call(function () {
                nycChure.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.NycChuRe.Level01_C, true);
            })
                .start();
        }, 0.25);
    };
    GamePlay.prototype.handleDoneScene2 = function (currentScene) {
        var boy = currentScene.getChildByName("spine_Boy");
        var result_win = currentScene.getChildByName("result_win");
        var girl = currentScene.getChildByName("spine_Girl");
        var nycBoy = currentScene.getChildByName("spine_NycBoy");
        var obj_true = currentScene.getChildByName("object_true");
        var circle = currentScene.getChildByName("circle");
        var FX_Heart = currentScene.getChildByName("FX_Heart");
        boy.active = false;
        circle.active = false;
        obj_true.active = false;
        FX_Heart.active = true;
        result_win.active = true;
        boy.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Boy.Level02_B, true);
        girl.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.Girl.Level02_B, true);
        nycBoy.getComponent(sp.Skeleton).setAnimation(0, AnimData_1.AnimData.NycChuRe.Level02_B, true);
    };
    GamePlay.prototype.handleDoneScene3 = function (currentScene) {
        var boy = currentScene.getChildByName("spine_Boy");
        var nycBoy = currentScene.getChildByName("spine_NycBoy");
        var result = currentScene.getChildByName("Result");
        var fx_rain = currentScene.getChildByName("FX_Rain");
        boy.active = false;
        nycBoy.active = false;
        result.active = true;
        fx_rain.active = true;
    };
    GamePlay.prototype.showNextLevel = function (timeToShowNextLevel) {
        var _this = this;
        this.scheduleOnce(function () {
            constants_1.Constants.isCanTouch = true;
            _this.NodeController.Scenes[constants_1.Constants.currentLv - 2].active = false;
            _this.NodeController.Scenes[constants_1.Constants.currentLv - 1].active = true;
            _this.NodeController.FX_confetti.stopSystem();
        }, timeToShowNextLevel);
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
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
    GamePlay.prototype.activeTweenForBtn = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.CTA_btn)
                .to(0.5, { opacity: 255 })
                .call(function () {
                cc.tween(_this.CTA_btn)
                    .repeatForever(cc.tween(_this.CTA_btn)
                    .to(0.5, { scale: 0.5 })
                    .to(0.5, { scale: 0.45 }, { easing: 'elasticOut' })).start();
            })
                .start();
        }, 1);
    };
    GamePlay.prototype.winGame = function () {
        var _this = this;
        constants_1.Constants.isDoneEraser = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.eraserSound);
        this.isDoneEraser = true;
        this.scheduleOnce(function () {
            _this.CTA.active = true;
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.activeTweenForBtn();
        }, 2);
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeController_1.default)
    ], GamePlay.prototype, "NodeController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_btn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBNEM7QUFDNUMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK1JDO1FBOVJHLFNBQVM7UUFFVCxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUl0QyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsUUFBUTtRQUNSLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBNlE3QixDQUFDO0lBMVFhLHlCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFDSSw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHTywyQkFBUSxHQUFoQjtRQUNJLHFCQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUdNLGtDQUFlLEdBQXRCLFVBQXVCLFdBQW9CLEVBQUUsT0FBZ0IsRUFBRSxNQUFlO1FBQzFFLHFCQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMs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O2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztvREFDYTtJQUl0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFiUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK1I1QjtJQUFELGVBQUM7Q0EvUkQsQUErUkMsQ0EvUnFDLEVBQUUsQ0FBQyxTQUFTLEdBK1JqRDtrQkEvUm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV1dHJpbm9FZmZlY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL25ldXRyaW5vcGFydGljbGVzL2NvbXBvbmVudHMvTmV1dHJpbm9FZmZlY3RfTm9OYW1lRWZmZWN0XCI7XHJcbmltcG9ydCB7IEFuaW1EYXRhIH0gZnJvbSBcIi4uL0RhdGEvQW5pbURhdGFcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZUNvbnRyb2xsZXIgZnJvbSBcIi4vTm9kZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBTY3JpcHRcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KE5vZGVDb250cm9sbGVyKVxyXG4gICAgTm9kZUNvbnRyb2xsZXI6IE5vZGVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGlzRG9uZUVyYXNlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdGltZW91dElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaW5pdEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMdiA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRHJhZ1dyb25nKG5vZGVTcGFjZUFSOiBjYy5WZWMyLCBwcmV2UG9zOiBjYy5WZWMyLCBvYmplY3Q6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suTG9zZVNvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udHJvbGxlci5zaGFwZV93cm9uZy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLnNoYXBlX3dyb25nLnNldFBvc2l0aW9uKG5vZGVTcGFjZUFSKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udHJvbGxlci5zaGFwZV93cm9uZylcclxuICAgICAgICAgICAgLnRvKFxyXG4gICAgICAgICAgICAgICAgMC41LFxyXG4gICAgICAgICAgICAgICAgeyBzY2FsZTogMC4xLCBvcGFjaXR5OiAyNTUgfSxcclxuICAgICAgICAgICAgICAgIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdC5zZXRQb3NpdGlvbihwcmV2UG9zKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInJlc2V0IFByb2dyZXNzIVwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy5sb2coXCJkcmFnIHdyb25nLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRG9uZUxldmVsKGZ4OiBjYy5QYXJ0aWNsZVN5c3RlbSwgY3VycmVudFNjZW5lOiBjYy5Ob2RlLCBvYmplY3Q6IGNjLk5vZGUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZngucmVzZXRTeXN0ZW0oKTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVUb0RvbmVMZXZlbDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVUb1Nob3dOZXh0TGV2ZWw6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoQ29uc3RhbnRzLmN1cnJlbnRMdikge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aW1lVG9Eb25lTGV2ZWwgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb1Nob3dOZXh0TGV2ZWwgPSA0O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9uZVNjZW5lMShjdXJyZW50U2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aW1lVG9Eb25lTGV2ZWwgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVUb1Nob3dOZXh0TGV2ZWwgPSA0O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9uZVNjZW5lMihjdXJyZW50U2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmxldmVsT2JqZWN0RG9uZUluZGV4ICs9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpLmNoaWxkcmVuW0NvbnN0YW50cy5sZXZlbE9iamVjdERvbmVJbmRleCAtIDFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoQ29uc3RhbnRzLmxldmVsT2JqZWN0RG9uZUluZGV4ID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lVG9Eb25lTGV2ZWwgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lVG9TaG93TmV4dExldmVsID0gMztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEb25lU2NlbmUzKGN1cnJlbnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5wYXNzU291bmQpO1xyXG5cclxuICAgICAgICAvLyBzaG93IGZ4XHJcbiAgICAgICAgaWYodGltZVRvRG9uZUxldmVsKSB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuRlhfY29uZmV0dGkucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnN1Y2Nlc3NTb3VuZCk7XHJcbiAgICAgICAgfSwgdGltZVRvRG9uZUxldmVsKTtcclxuXHJcbiAgICAgICAgaWYodGltZVRvU2hvd05leHRMZXZlbCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudEx2ICs9IDE7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5jdXJyZW50THYgPD0gM1xyXG4gICAgICAgICAgICA/IHRoaXMuc2hvd05leHRMZXZlbCh0aW1lVG9TaG93TmV4dExldmVsKVxyXG4gICAgICAgICAgICA6IHRoaXMud2luR2FtZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRG9uZVNjZW5lMShjdXJyZW50U2NlbmU6IGNjLk5vZGUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGNodXJlID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2h1cmVcIik7XHJcbiAgICAgICAgbGV0IGNvZGF1ID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY29kYXVcIik7XHJcbiAgICAgICAgbGV0IG9iaiA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIm9iamVjdF90cnVlXCIpO1xyXG4gICAgICAgIGxldCBjaXJjbGUgPSBjdXJyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIlJlc3VsdF9XaW5cIik7XHJcbiAgICAgICAgbGV0IG55Y0NodXJlID0gcmVzdWx0LmdldENoaWxkQnlOYW1lKFwiTnljQ2h1cmVcIik7XHJcbiAgICAgICAgbGV0IGhhbGxEb29yID0gcmVzdWx0LmdldENoaWxkQnlOYW1lKFwiSGFsbF9Eb29yXCIpO1xyXG4gICAgICAgIGxldCBmeF9XYXRlciA9IGhhbGxEb29yLmdldENoaWxkQnlOYW1lKFwiUFNfQmFzZVwiKVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ3YXRlclwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG5cclxuXHJcbiAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNpcmNsZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2h1cmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuQ2h1cmUuTGV2ZWwwMV9DLCB0cnVlKTtcclxuXHJcbiAgICAgICAgY29kYXUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuQ29kYXUuTGV2ZWwwMV9DLCB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IG55Y0NodXJlUG9zID0gbnljQ2h1cmUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBoYWxsRG9vci5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBBbmltRGF0YS5Eb29yLkxldmVsMDFfQiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgbnljQ2h1cmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuTnljQ2h1UmUuTGV2ZWwwMV9CLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgZnhfV2F0ZXIucmVzZXRTeXN0ZW0oKTsgfSwgMC4yKVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4obnljQ2h1cmUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHg6IG55Y0NodXJlUG9zLnggLSA0MCB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG55Y0NodXJlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIEFuaW1EYXRhLk55Y0NodVJlLkxldmVsMDFfQywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgMC4yNSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEb25lU2NlbmUyKGN1cnJlbnRTY2VuZTogY2MuTm9kZSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgYm95ID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwic3BpbmVfQm95XCIpO1xyXG4gICAgICAgIGxldCByZXN1bHRfd2luID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwicmVzdWx0X3dpblwiKTtcclxuICAgICAgICBsZXQgZ2lybCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX0dpcmxcIik7XHJcbiAgICAgICAgbGV0IG55Y0JveSA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX055Y0JveVwiKTtcclxuICAgICAgICBsZXQgb2JqX3RydWUgPSBjdXJyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RfdHJ1ZVwiKTtcclxuICAgICAgICBsZXQgY2lyY2xlID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpO1xyXG4gICAgICAgIGxldCBGWF9IZWFydCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkZYX0hlYXJ0XCIpO1xyXG5cclxuICAgICAgICBib3kuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2lyY2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIG9ial90cnVlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIEZYX0hlYXJ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmVzdWx0X3dpbi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBib3kuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuQm95LkxldmVsMDJfQiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGdpcmwuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuR2lybC5MZXZlbDAyX0IsIHRydWUpO1xyXG5cclxuICAgICAgICBueWNCb3kuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgQW5pbURhdGEuTnljQ2h1UmUuTGV2ZWwwMl9CLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEb25lU2NlbmUzKGN1cnJlbnRTY2VuZTogY2MuTm9kZSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgYm95ID0gY3VycmVudFNjZW5lLmdldENoaWxkQnlOYW1lKFwic3BpbmVfQm95XCIpO1xyXG4gICAgICAgIGxldCBueWNCb3kgPSBjdXJyZW50U2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZV9OeWNCb3lcIik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIlJlc3VsdFwiKTtcclxuICAgICAgICBsZXQgZnhfcmFpbiA9IGN1cnJlbnRTY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkZYX1JhaW5cIik7XHJcblxyXG4gICAgICAgIGJveS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBueWNCb3kuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgcmVzdWx0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZnhfcmFpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dOZXh0TGV2ZWwodGltZVRvU2hvd05leHRMZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLlNjZW5lc1tDb25zdGFudHMuY3VycmVudEx2IC0gMl0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250cm9sbGVyLlNjZW5lc1tDb25zdGFudHMuY3VycmVudEx2IC0gMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRyb2xsZXIuRlhfY29uZmV0dGkuc3RvcFN5c3RlbSgpO1xyXG4gICAgICAgIH0sIHRpbWVUb1Nob3dOZXh0TGV2ZWwpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVR3ZWVuRm9yQnRuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQ1RBX2J0bilcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5DVEFfYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQ1RBX2J0bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgd2luR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNEb25lRXJhc2VyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZXJhc2VyU291bmQpO1xyXG5cclxuICAgICAgICB0aGlzLmlzRG9uZUVyYXNlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5DVEEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5DVEEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNUQV9BbmltXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVR3ZWVuRm9yQnRuKCk7XHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxufVxyXG4iXX0=
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
cc._RF.push(module, 'dfec3bBGHdHY4ShHxSUTm+E', 'GameController');
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
        this.AudioManager.stopAllSound();
        constants_1.Constants.ironSource.isEndGame = true;
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
                mraid.open("https://play.google.com/store/apps/details?id=com.tvc.deletestory");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1577759626?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.tvc.deletestory");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXdEQztRQXRERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBc0R0QyxDQUFDO0lBcERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR00sc0NBQWEsR0FBcEI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFDaEYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDaEYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBd0QxQjtJQUFELHFCQUFDO0NBeERELEFBd0RDLENBeERtQyxFQUFFLENBQUMsU0FBUyxHQXdEL0M7QUF4RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFsbEhhbmRsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnN0YWxsXCIpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy5kZWxldGVzdG9yeVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9hcHAvaWQxNTc3NzU5NjI2P210PThcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy5kZWxldGVzdG9yeVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/components/NeutrinoEffect_Rain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e460bV59OtLFLd7HtK8tYYP', 'NeutrinoEffect_Rain');
// neutrinoparticles/components/NeutrinoEffect_Rain.ts

"use strict";
// !!! This file is generated by NeutrinoParticles extension package.
// !!! Don't modify it manually.
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
var NeutrinoEffect = require("../exported_effects/Rain.js");
var textures_1 = require("../textures");
var NeutrinoComponent_1 = require("NeutrinoComponent");
var NeutrinoAssembler_1 = require("NeutrinoAssembler");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus, menu = _a.menu;
var NeutrinoEffectComponent = /** @class */ (function (_super) {
    __extends(NeutrinoEffectComponent, _super);
    function NeutrinoEffectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeutrinoEffectComponent.prototype.getEffectClass = function () { return NeutrinoEffect; };
    NeutrinoEffectComponent.prototype.getTexturesDatabase = function () { return textures_1.default; };
    NeutrinoEffectComponent = __decorate([
        ccclass,
        executeInEditMode,
        playOnFocus,
        menu('i18n:MAIN_MENU.component.renderers/NeutrinoComponent/Rain')
    ], NeutrinoEffectComponent);
    return NeutrinoEffectComponent;
}(NeutrinoComponent_1.default));
exports.default = NeutrinoEffectComponent;
cc.Assembler.register(NeutrinoEffectComponent, NeutrinoAssembler_1.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGNvbXBvbmVudHNcXE5ldXRyaW5vRWZmZWN0X1JhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFxRTtBQUNyRSxnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyw0REFBOEQ7QUFDOUQsd0NBQW1DO0FBQ25DLHVEQUFrRDtBQUNsRCx1REFBa0Q7QUFFNUMsSUFBQSxLQUFrRCxFQUFFLENBQUMsVUFBVSxFQUE5RCxPQUFPLGFBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsSUFBSSxVQUFpQixDQUFDO0FBTXRFO0lBQXFELDJDQUFpQjtJQUF0RTs7SUFHQSxDQUFDO0lBRkEsZ0RBQWMsR0FBZCxjQUFtQixPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0MscURBQW1CLEdBQW5CLGNBQXdCLE9BQU8sa0JBQVEsQ0FBQyxDQUFDLENBQUM7SUFGdEIsdUJBQXVCO1FBSjNDLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsV0FBVztRQUNYLElBQUksQ0FBQywyREFBMkQsQ0FBQztPQUM3Qyx1QkFBdUIsQ0FHM0M7SUFBRCw4QkFBQztDQUhELEFBR0MsQ0FIb0QsMkJBQWlCLEdBR3JFO2tCQUhvQix1QkFBdUI7QUFLNUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsMkJBQWlCLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vICEhISBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IE5ldXRyaW5vUGFydGljbGVzIGV4dGVuc2lvbiBwYWNrYWdlLlxuLy8gISEhIERvbid0IG1vZGlmeSBpdCBtYW51YWxseS5cblxuaW1wb3J0ICogYXMgTmV1dHJpbm9FZmZlY3QgZnJvbSAnLi4vZXhwb3J0ZWRfZWZmZWN0cy9SYWluLmpzJztcbmltcG9ydCB0ZXh0dXJlcyBmcm9tICcuLi90ZXh0dXJlcyc7XG5pbXBvcnQgTmV1dHJpbm9Db21wb25lbnQgZnJvbSAnTmV1dHJpbm9Db21wb25lbnQnO1xuaW1wb3J0IE5ldXRyaW5vQXNzZW1ibGVyIGZyb20gJ05ldXRyaW5vQXNzZW1ibGVyJztcblxuY29uc3Qge2NjY2xhc3MsIGV4ZWN1dGVJbkVkaXRNb2RlLCBwbGF5T25Gb2N1cywgbWVudX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AcGxheU9uRm9jdXNcbkBtZW51KCdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucmVuZGVyZXJzL05ldXRyaW5vQ29tcG9uZW50L1JhaW4nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1dHJpbm9FZmZlY3RDb21wb25lbnQgZXh0ZW5kcyBOZXV0cmlub0NvbXBvbmVudCB7XG5cdGdldEVmZmVjdENsYXNzKCkgeyByZXR1cm4gTmV1dHJpbm9FZmZlY3Q7IH1cblx0Z2V0VGV4dHVyZXNEYXRhYmFzZSgpIHsgcmV0dXJuIHRleHR1cmVzOyB9XG59XG5cbmNjLkFzc2VtYmxlci5yZWdpc3RlcihOZXV0cmlub0VmZmVjdENvbXBvbmVudCwgTmV1dHJpbm9Bc3NlbWJsZXIpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/components/NeutrinoEffect_Heart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '726f5OW+gxI2ZZ3qbx5jtq0', 'NeutrinoEffect_Heart');
// neutrinoparticles/components/NeutrinoEffect_Heart.ts

"use strict";
// !!! This file is generated by NeutrinoParticles extension package.
// !!! Don't modify it manually.
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
var NeutrinoEffect = require("../exported_effects/Heart.js");
var textures_1 = require("../textures");
var NeutrinoComponent_1 = require("NeutrinoComponent");
var NeutrinoAssembler_1 = require("NeutrinoAssembler");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus, menu = _a.menu;
var NeutrinoEffectHeart = /** @class */ (function (_super) {
    __extends(NeutrinoEffectHeart, _super);
    function NeutrinoEffectHeart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeutrinoEffectHeart.prototype.getEffectClass = function () { return NeutrinoEffect; };
    NeutrinoEffectHeart.prototype.getTexturesDatabase = function () { return textures_1.default; };
    NeutrinoEffectHeart = __decorate([
        ccclass,
        executeInEditMode,
        playOnFocus,
        menu('i18n:MAIN_MENU.component.renderers/NeutrinoComponent/Heart')
    ], NeutrinoEffectHeart);
    return NeutrinoEffectHeart;
}(NeutrinoComponent_1.default));
exports.default = NeutrinoEffectHeart;
cc.Assembler.register(NeutrinoEffectHeart, NeutrinoAssembler_1.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGNvbXBvbmVudHNcXE5ldXRyaW5vRWZmZWN0X0hlYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDckUsZ0NBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsNkRBQStEO0FBQy9ELHdDQUFtQztBQUNuQyx1REFBa0Q7QUFDbEQsdURBQWtEO0FBRTVDLElBQUEsS0FBa0QsRUFBRSxDQUFDLFVBQVUsRUFBOUQsT0FBTyxhQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLElBQUksVUFBaUIsQ0FBQztBQU10RTtJQUFpRCx1Q0FBaUI7SUFBbEU7O0lBR0EsQ0FBQztJQUZBLDRDQUFjLEdBQWQsY0FBbUIsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNDLGlEQUFtQixHQUFuQixjQUF3QixPQUFPLGtCQUFRLENBQUMsQ0FBQyxDQUFDO0lBRnRCLG1CQUFtQjtRQUp2QyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxJQUFJLENBQUMsNERBQTRELENBQUM7T0FDOUMsbUJBQW1CLENBR3ZDO0lBQUQsMEJBQUM7Q0FIRCxBQUdDLENBSGdELDJCQUFpQixHQUdqRTtrQkFIb0IsbUJBQW1CO0FBS3hDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLDJCQUFpQixDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAhISEgVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBOZXV0cmlub1BhcnRpY2xlcyBleHRlbnNpb24gcGFja2FnZS5cbi8vICEhISBEb24ndCBtb2RpZnkgaXQgbWFudWFsbHkuXG5cbmltcG9ydCAqIGFzIE5ldXRyaW5vRWZmZWN0IGZyb20gJy4uL2V4cG9ydGVkX2VmZmVjdHMvSGVhcnQuanMnO1xuaW1wb3J0IHRleHR1cmVzIGZyb20gJy4uL3RleHR1cmVzJztcbmltcG9ydCBOZXV0cmlub0NvbXBvbmVudCBmcm9tICdOZXV0cmlub0NvbXBvbmVudCc7XG5pbXBvcnQgTmV1dHJpbm9Bc3NlbWJsZXIgZnJvbSAnTmV1dHJpbm9Bc3NlbWJsZXInO1xuXG5jb25zdCB7Y2NjbGFzcywgZXhlY3V0ZUluRWRpdE1vZGUsIHBsYXlPbkZvY3VzLCBtZW51fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBwbGF5T25Gb2N1c1xuQG1lbnUoJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5yZW5kZXJlcnMvTmV1dHJpbm9Db21wb25lbnQvSGVhcnQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1dHJpbm9FZmZlY3RIZWFydCBleHRlbmRzIE5ldXRyaW5vQ29tcG9uZW50IHtcblx0Z2V0RWZmZWN0Q2xhc3MoKSB7IHJldHVybiBOZXV0cmlub0VmZmVjdDsgfVxuXHRnZXRUZXh0dXJlc0RhdGFiYXNlKCkgeyByZXR1cm4gdGV4dHVyZXM7IH1cbn1cblxuY2MuQXNzZW1ibGVyLnJlZ2lzdGVyKE5ldXRyaW5vRWZmZWN0SGVhcnQsIE5ldXRyaW5vQXNzZW1ibGVyKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Heart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6be790F625EgbAmG2yzZeeV', 'Heart');
// neutrinoparticles/exported_effects/Heart.js

"use strict";

// 799db075-9b95-459a-a7dd-d47684d03d6d
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Heart'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Heart'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Heart(ctx) {
    var Db = this;

    var ne = function ne(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;

      if (this.Bd.we.pe.length > 0) {
        this.we = this.Bd.we.pe[0];
        this.Lc = [ne.prototype.Ec, ne.prototype.Fc][this.we.xe];
      } else this.we = null;
    };

    ne.prototype = {
      Ec: function Ec(fe, Ab, Xb) {
        var Gc = ctx.ib(Xb.Md);
        var Hc = Math.cos(Gc);
        var Ic = Math.sin(Gc);
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * Hc, ye * Ic, ze * -Ic, ze * Hc, Ab[0], Ab[1]);
      },
      Fc: function Fc(fe, Ab, Xb) {
        var q = Xb.Mc;
        var z2 = 2.0 * q[2] * q[2];
        var xy = 2.0 * q[0] * q[1];
        var wz = 2.0 * q[3] * q[2];
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * (1.0 - 2.0 * q[1] * q[1] - z2), ye * (xy + wz), ze * (wz - xy), ze * (2.0 * q[0] * q[0] + z2 - 1.0), Ab[0], Ab[1]);
      },
      Pc: function Pc(fe, Xb, ge) {
        Xb.vc(fe, -1, ge);

        if (this.we) {
          if (this.Be != null && !Xb.oc) {
            if (Xb.Od > 0.001) {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Ab = Xb.Ab.slice();
              var Nd = Xb.Nd.slice();

              if (!ge || ge.
              /**/
              transform(Ab, Nd)) {
                var df = Math.abs(Nd[0]);
                var ef = Math.abs(Nd[1]);

                if (df > 0.001 && ef > 0.001) {
                  fe.save();
                  this.Lc(fe, Ab, Xb);
                  fe.translate(-df * Xb.Pd[0], -ef * (1 - Xb.Pd[1]));
                  fe.globalAlpha *= Xb.Od;

                  if (Xb.gf[0] < 0.999 || Xb.gf[1] < 0.999 || Xb.gf[2] < 0.999) {
                    if (df >= 1 && ef >= 1) {
                      var Ye = df < this.Tc ? df : this.Tc;
                      var Ze = ef < this.Uc ? ef : this.Uc;
                      ctx.af(Ye, Ze);
                      ctx.bf.globalCompositeOperation = "copy";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "multiply";
                      ctx.bf.fillStyle = ctx.ff(Xb.gf);
                      ctx.bf.fillRect(0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "destination-atop";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      fe.drawImage(ctx.cf, 0, 0, Ye, Ze, 0, 0, df, ef);
                    }
                  } else {
                    fe.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, df, ef);
                  }

                  fe.restore();
                }
              }
            }
          }
        }

        Xb.vc(fe, 1, ge);
      },
      Hd: function Hd(fe, ge) {
        fe.save();

        if (this.we) {
          fe.globalCompositeOperation = this.Ld.materials[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].materialIndex];
          this.Be = this.Ld.textureDescs[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];
        } else {
          this.Be = null;
        }

        if (this.Be) {
          this.Tc = this.Be.width / this.we.Rc;
          this.Uc = this.Be.height / this.we.Sc;
        }

        function kd(a, b) {
          if (a.Ab[2] > b.Ab[2]) return 1;
          if (a.Ab[2] < b.Ab[2]) return -1;
          return 0;
        }

        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 2:
            this.Bd.tc.sort(kd);

            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;
        }

        fe.restore();
      }
    };

    var oe = function oe(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;
      if (this.Bd.we.pe.length > 0) this.we = this.Bd.we.pe[0];else this.we = null;
      this.vertex = [{
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }];
    };

    oe.prototype = {
      qe: function qe(Xb, se, re, te, renderBuffer) {
        Xb.Ce(-1, se, re, te, renderBuffer);

        if (this.we) {
          if (!Xb.oc) {
            var v0 = this.vertex[0];
            var v1 = this.vertex[1];
            var v2 = this.vertex[2];
            var v3 = this.vertex[3];
            var Fe = [],
                Ge = [];

            if (this.we.xe == 0) {
              var a = ctx.ib(Xb.Md);
              var s = -Math.sin(a);
              var c = Math.cos(a);
              Fe[0] = se[0] * c + re[0] * s;
              Fe[1] = se[1] * c + re[1] * s;
              Fe[2] = se[2] * c + re[2] * s;
              Ge[0] = -se[0] * s + re[0] * c;
              Ge[1] = -se[1] * s + re[1] * c;
              Ge[2] = -se[2] * s + re[2] * c;
            } else {
              var q = Xb.Mc;
              var z2 = 2.0 * q[2] * q[2];
              var xy = 2.0 * q[0] * q[1];
              var wz = 2.0 * q[3] * q[2];
              Fe[0] = 1.0 - 2.0 * q[1] * q[1] - z2;
              Fe[1] = xy + wz;
              Fe[2] = 2.0 * q[0] * q[2] - 2.0 * q[3] * q[1];
              Ge[0] = xy - wz;
              Ge[1] = 1.0 - 2.0 * q[0] * q[0] - z2;
              Ge[2] = 2.0 * q[1] * q[2] + 2.0 * q[3] * q[0];
            }

            var He = [],
                Ie = [],
                Je = [],
                Ke = [];
            ctx.u(He, Fe, -Xb.Nd[0] * Xb.Pd[0]);
            ctx.u(Ie, Fe, Xb.Nd[0] * (1.0 - Xb.Pd[0]));
            ctx.u(Je, Ge, -Xb.Nd[1] * Xb.Pd[1]);
            ctx.u(Ke, Ge, Xb.Nd[1] * (1.0 - Xb.Pd[1]));
            ctx.c(v0.
            /**/
            position, He, Je);
            ctx.c(v0.
            /**/
            position, v0.
            /**/
            position, Xb.Ab);
            ctx.c(v1.
            /**/
            position, He, Ke);
            ctx.c(v1.
            /**/
            position, v1.
            /**/
            position, Xb.Ab);
            ctx.c(v2.
            /**/
            position, Ie, Ke);
            ctx.c(v2.
            /**/
            position, v2.
            /**/
            position, Xb.Ab);
            ctx.c(v3.
            /**/
            position, Ie, Je);
            ctx.c(v3.
            /**/
            position, v3.
            /**/
            position, Xb.Ab);
            {
              var rgb = ctx.v(Xb.gf, 255);
              v0.
              /**/
              color = v1.
              /**/
              color = v2.
              /**/
              color = v3.
              /**/
              color = [rgb[0], rgb[1], rgb[2], Xb.Od * 255];
            }
            {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Pe, Qe, Re, Se;
              var We = this.Ld.texturesRemap[this.Ld.
              /**/
              model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];

              if (We) {
                var Ue = We.width / this.we.Rc;
                var Ve = We.height / this.we.Sc;
                var Pe = We.x + De * Ue;
                var Qe = Pe + Ue;
                var Re = We.y + We.height - Ee * Ve;
                var Se = Re - Ve;
              } else {
                var Ue = 1.0 / this.we.Rc;
                var Ve = 1.0 / this.we.Sc;
                var Pe = De * Ue;
                var Qe = Pe + Ue;
                var Re = 1.0 - Ee * Ve;
                var Se = Re - Ve;
              }

              v0.
              /**/
              texCoords[0] = [Pe, Se];
              v1.
              /**/
              texCoords[0] = [Pe, Re];
              v2.
              /**/
              texCoords[0] = [Qe, Re];
              v3.
              /**/
              texCoords[0] = [Qe, Se];
            }

            if (renderBuffer.beforeQuad) {
              renderBuffer.beforeQuad(this.we.renderStyleIndex);
            }

            renderBuffer.pushVertex(v0);
            renderBuffer.pushVertex(v1);
            renderBuffer.pushVertex(v2);
            renderBuffer.pushVertex(v3);

            if (!renderBuffer.__lastRenderCall) {
              renderBuffer.__lastRenderCall = new ctx.RenderCall(0, 6, this.we.renderStyleIndex);
            } else {
              var lastRenderCall = renderBuffer.__lastRenderCall;

              if (lastRenderCall.renderStyleIndex == this.we.renderStyleIndex) {
                lastRenderCall.numIndices += 6;
              } else {
                renderBuffer.pushRenderCall(lastRenderCall);
                renderBuffer.__lastRenderCall = new ctx.RenderCall(lastRenderCall.startIndex + lastRenderCall.numIndices, 6, this.we.renderStyleIndex);
              }
            }
          }
        }

        Xb.Ce(1, se, re, te, renderBuffer);
      },
      ue: function ue(se, re, te, renderBuffer) {
        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 2:
            this.Bd.tc.forEach(function (Xb) {
              Xb.depth = ctx.H(te, Xb.Ab);
            });
            this.Bd.tc.sort(function (a, b) {
              if (a.depth < b.depth) return 1;
              if (a.depth > b.depth) return -1;
              return 0;
            });
            this.Bd.tc.forEach(function (Xb) {
              this.qe(Xb, se, re, te, renderBuffer);
            }, this);
            break;
        }
      }
    };

    var ld = function ld(Ld, we, ve) {
      var Vb = this;
      this.Ld = Ld;
      this.we = we; // Eb

      function Eb() {
        this.Fb = 0;
        this.Gb = 1;
        this.Hb = null;
        this.Ib = null;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.Ob = this.Gb;
          this.Fb = 0;
        };

        this.Nb();
      }

      Eb.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var Rb = Vb.Rb;
          var systemTime = Ld.Rb;
          var Sb = Qb;
          var ic = 0;

          if (this.zb > 0.000001) {
            var Tb = this.Ob + Qb * this.zb;

            while (Tb >= 1.0) {
              var Ub = this.zb < 0.001 ? 0.0 : (1.0 - this.Ob) / this.zb;
              Sb -= Ub;
              Rb += Ub;
              systemTime += Ub;

              if (this.Hb != null && Rb > this.Hb) {
                Vb.disactivate();
                break;
              }

              Vb.Rb = Rb;
              Ld.Rb = systemTime;
              if (Ab && Qb > 0) ctx.ab(Vb.Ab, Ab, Vb.Bb, Sb / Qb);
              if (Mc && Qb > 0) ctx.slerpq(Vb.Mc, Mc, Vb.prevRotation, Sb / Qb); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Sb);
                ++ic;
              }

              this.Ob = 0.0;
              Tb -= 1.0;

              if (this.Ib != null && ++this.Fb >= this.Ib) {
                Vb.disactivate();
                break;
              }
            }

            this.Ob = Tb;
          }

          Rb += Sb;
          Vb.Rb = Rb;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // ac

      function ac() {
        this.Gb = 1;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.bc = this.Gb;
        };

        this.Nb();
      }

      ac.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var cc = Vb.Rb;
          var dc = cc + Qb;
          var systemTimeBeforeFrame = Ld.Rb;
          var systemTimeAfterFrame = systemTimeBeforeFrame + Qb;
          var ec = Ab ? ctx.O(ctx.h(Ab, Vb.Bb)) : 0;
          var ic = 0;

          if (ec > 0.000001) {
            var fc = ec / this.rd;
            var Tb = this.bc + fc;
            var hc = fc < 0.001 ? 1.0 - this.bc : (1.0 - this.bc) / fc;
            var jc = [];

            while (Tb > 1.0) {
              var kc = cc + hc * Qb;
              if (Ab) ctx.ab(jc, Vb.Bb, Ab, hc);
              Vb.Rb = kc;
              ctx.T(Vb.Ab, jc);
              Ld.Rb = ctx.X(systemTimeBeforeFrame, systemTimeAfterFrame, hc); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Qb * (1.0 - hc));
                ++ic;
              }

              hc += 1.0 / fc;
              Tb -= 1.0;
            }

            this.bc = Tb;
          }

          Vb.Rb = dc;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // mc

      function mc() {
        this.Ab = [];
        this.Pd = [];
        this.Nd = [];
        this.gf = [];
        this.Kc = [];
      }

      mc.prototype = {
        nc: function nc() {
          this.oc = false;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            pc.Bd.Jd(this.Ab, null);
            if (pc.Ad.sd) pc.Bd.disactivate();
          }
        },
        Yb: function Yb() {
          Vb.we.fd(Vb, this); // IMPL

          this.nc();
        },
        Zb: function Zb() {
          Vb.we.gd(Vb, this); // IMPL

          this.nc();
        },
        Id: function Id(Qb) {
          Vb.we.qc(Qb, Vb, this); // IMPL

          this.rc(Qb);
        },
        pc: function pc(je) {
          return this.Kc[je].Bd;
        },
        rc: function rc(Qb) {
          for (var i = 0; i < this.Kc.length; i++) {
            this.Kc[i].Bd.Id(Qb, this.Ab, null);
          }
        },
        uc: function uc(md, nd) {
          this.Kc.push({
            Bd: new ld(Ld, md, ve),
            Ad: nd
          });
        },
        vc: function vc(fe, xc, ge) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.Hd(fe, ge);
          }
        },
        Ce: function Ce(xc, se, re, te, renderBuffer) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.ue(se, re, te, renderBuffer);
          }
        },
        wc: function wc(fe) {
          this.oc = true;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];

            if (pc.Ad.sd) {
              pc.Bd.activate();
              pc.Bd.Id(0);
            } else pc.Bd.disactivate();
          }
        },
        yc: function yc(Gd) {
          for (var i = 0; i < this.Kc.length; ++i) {
            this.Kc[i].Bd.Ed(Gd);
          }
        }
      }; // zc

      function zc() {}

      zc.prototype.Ac = function (Xb) {
        return Vb.we.Cc(Vb, Xb, this); // IMPL
      }; // ld Ad


      this.Ab = [];
      this.Bb = [];
      this.Mc = [];
      this.prevRotation = [];
      this.tc = [];
      this.sc = [];
      this.Wc = new zc();
      this.construct = new ve(this.Ld, this);
      this.Yc = [];
      this.ad = [];

      this.dd = function () {
        this.vd = new Eb();
      };

      this.ed = function () {
        this.vd = new ac();
      };

      this.we.ud(this); // IMPL

      for (var Wb = 0; Wb < this.jd; ++Wb) {
        var Xb = new mc();

        for (var id = 0; id < this.Yc.length; ++id) {
          var hd = this.Yc[id];
          Xb.uc(hd.Db, hd.Ad);
        }

        this.sc.push(Xb);
      }

      this.Nb = function (Ab, Mc) {
        ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
        ctx.T(this.Bb, this.Ab);
        ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        ctx.U(this.prevRotation, this.Mc);
        this.Rb = 0.0;
        this.wd = 0.0;
        this.Zc = true;
        this.paused_ = false;
        this.generatorsPaused_ = false;
        ctx.W(this.ad, 0, 0, 0);
      };
    };

    ld.prototype.Jd = function (Ab, Mc) {
      this.Nb(Ab, Mc);
      this.sc.push.apply(this.sc, this.tc);
      this.tc.length = 0;
      this.vd.Jd();
    };

    ld.prototype.Id = function (Qb, Ab, Mc) {
      if (this.paused_) {
        this.Td(Ab, Mc);
        return;
      }

      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);

        if (Qb > 0.0001) {
          var shift = [];
          ctx.g(shift, Ab, this.Bb);
          ctx.T(this.ad, shift);
          ctx.w(this.ad, this.ad, Qb);
        } else {
          ctx.W(this.ad, 0, 0, 0);
        }
      } else {
        ctx.W(this.ad, 0, 0, 0);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
      }

      var ic;

      if (this.Zc && !this.generatorsPaused_) {
        ic = this.vd.Id(Qb, Ab, Mc);
      } else {
        if (Ab) ctx.T(this.Ab, Ab);
        if (Mc) ctx.U(this.Mc, Mc);
        ic = 0;
        this.Rb += Qb;
      }

      for (var Wb = ic; Wb < this.tc.length;) {
        var Xb = this.tc[Wb];

        if (!Xb.oc) {
          Xb.Id(Qb);

          if (this.Wc.Ac(this.tc[Wb])) {
            Xb.wc();
            if (this.xd(Wb)) continue;
          }
        } else {
          Xb.rc(Qb);
          if (this.xd(Wb)) continue;
        }

        ++Wb;
      }
    };

    ld.prototype.xd = function (je) {
      var Xb = this.tc[je];
      var ready = true;

      for (var id = 0; id < Xb.Kc.length; ++id) {
        var Bd = Xb.Kc[id].Bd;

        if (Bd.activated() || Bd.tc.length > 0) {
          ready = false;
          break;
        }
      }

      if (ready) {
        this.sc.push(this.tc[je]);
        this.tc.splice(je, 1);
        return true;
      }

      return false;
    };

    ld.prototype.Hd = function (fe, ge) {
      this.construct.Hd(fe, ge);
    };

    ld.prototype.ue = function (se, re, te, renderBuffer) {
      this.construct.ue(se, re, te, renderBuffer);
    };

    ld.prototype.Td = function (Ab, Mc) {
      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);
        ctx.T(this.Ab, Ab);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
        ctx.U(this.Mc, Mc);
      }
    };

    ld.prototype.uc = function (md, nd) {
      this.Yc.push({
        Db: md,
        Ad: nd
      });
    };

    ld.prototype.
    /**/
    pause = function () {
      this.paused_ = true;
    };

    ld.prototype.
    /**/
    unpause = function () {
      this.paused_ = false;
    };

    ld.prototype.
    /**/
    paused = function () {
      return this.paused_;
    };

    ld.prototype.
    /**/
    pauseGenerators = function () {
      this.generatorsPaused_ = true;
    };

    ld.prototype.
    /**/
    unpauseGenerators = function () {
      this.generatorsPaused_ = false;
    };

    ld.prototype.
    /**/
    generatorsPaused = function () {
      return this.generatorsPaused_;
    };

    ld.prototype.activate = function () {
      this.Zc = true;
    };

    ld.prototype.disactivate = function () {
      this.Zc = false;
    };

    ld.prototype.activated = function () {
      return this.Zc;
    };

    ld.prototype.
    /**/
    getNumParticles = function () {
      return this.tc.length;
    };

    var ke = function ke() {
      var Cb = this;

      this._init = function (we, Ab, Mc, ve, options) {
        this.
        /**/
        model = we;
        this.Ab = [];
        this.Mc = []; // ke Ad

        this.od = [];

        this.pd = function (md) {
          var Bd = new ld(this, md, ve);
          Bd.Nb(this.Ab, this.Mc);
          this["_".concat(md.name)] = Bd;
          this.od.push(Bd);
        };

        this.Nb = function (Ab, Mc) {
          this.Cd = 0.0;
          this.Rb = 0.0;
          ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
          ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        };

        this.Nb(Ab, Mc);
        this.
        /**/
        model.qd(this); // IMPL

        this._presimNeeded = true;

        if (options.generatorsPaused) {
          this.
          /**/
          pauseGeneratorsInAllEmitters();
        }

        if (options.paused) {
          this.
          /**/
          pauseAllEmitters();
        } else {
          this.zeroUpdate();
          this.
          /**/
          update(this.Ud, Ab, Mc);
          this._presimNeeded = false;
        }
      };
    };

    ke.prototype.
    /**/
    restart = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      this.Nb(
      /**/
      position ?
      /**/
      position : this.Ab,
      /**/
      rotation ?
      /**/
      rotation : this.Mc);
      this._presimNeeded = true;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Jd(this.Ab, this.Mc);
      }

      this._presimNeeded = true;

      if (options && options.generatorsPaused) {
        this.
        /**/
        pauseGeneratorsInAllEmitters();
      }

      if (options && options.paused) {
        this.
        /**/
        pauseAllEmitters();
      } else {
        this.zeroUpdate();
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
        this._presimNeeded = false;
      }
    };

    ke.prototype.zeroUpdate = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(0, this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    update = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      if (this.Dd > 0.0) this.updateFixed(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation);else this.updateFlex(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation);
    };

    ke.prototype.updateFixed = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      var updatedTime = 0.0;
      var hc = [];
      ctx.T(hc, this.Ab);
      var frameRotation = [];
      ctx.U(frameRotation, this.Mc);
      if (
      /**/
      position && ctx.equalv3_(
      /**/
      position, this.Ab))
        /**/
        position = null;
      if (
      /**/
      rotation && ctx.equalq_(
      /**/
      rotation, this.Mc))
        /**/
        rotation = null;

      while (
      /**/
      dt - updatedTime + this.Cd >= this.Dd) {
        var cc = this.Rb;
        if (
        /**/
        position) ctx.ab(hc, this.Ab,
        /**/
        position, updatedTime /
        /**/
        dt);
        if (
        /**/
        rotation) ctx.slerpq(frameRotation, this.Mc,
        /**/
        rotation, updatedTime /
        /**/
        dt);

        for (var i = 0; i < this.od.length; ++i) {
          this.od[i].Id(this.Dd, hc, frameRotation);
          this.Rb = cc;
        }

        updatedTime += this.Dd - this.Cd;
        this.Cd = 0.0;
        this.Rb = cc + this.Dd;
      }

      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
      this.Cd +=
      /**/
      dt - updatedTime;
    };

    ke.prototype.updateFlex = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      var cc = this.Rb;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(
        /**/
        dt,
        /**/
        position,
        /**/
        rotation);
        this.Rb = cc;
      }

      this.Rb = cc +
      /**/
      dt;
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
    };

    ke.prototype.
    /**/
    resetPosition = function (
    /**/
    position,
    /**/
    rotation) {
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Td(this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    setPropertyInAllEmitters = function (
    /**/
    name,
    /**/
    value) {
      var propName = "_".concat(
      /**/
      name);

      if (
      /**/
      value instanceof Array) {
        if (
        /**/
        value.length == 2) {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.S(this.od[i][propName],
            /**/
            value);
          }
        } else {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.T(this.od[i][propName],
            /**/
            value);
          }
        }
      } else {
        for (var i = 0; i < this.od.length; ++i) {
          this.od[i][propName] =
          /**/
          value;
        }
      }
    };

    ke.prototype.
    /**/
    pauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pause();
      }
    };

    ke.prototype.
    /**/
    unpauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpause();
      }

      this.zeroUpdate();

      if (this._presimNeeded) {
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
        this._presimNeeded = false;
      }
    };

    ke.prototype.
    /**/
    areAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].paused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    pauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pauseGenerators();
      }
    };

    ke.prototype.
    /**/
    unpauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpauseGenerators();
      }
    };

    ke.prototype.
    /**/
    areGeneratorsInAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].generatorsPaused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    getNumParticles = function () {
      var numParticles = 0;

      for (var i = 0; i < this.od.length; ++i) {
        numParticles += this.od[i].getNumParticles();
      }

      return numParticles;
    };

    var le = function le() {
      this._init = function (we, Ab, Mc, renderBuffer, options) {
        le.prototype._init.call(this, we, Ab, Mc, oe, options);

        this.texturesRemap = [];
        var indices = [];
        {
          var verDisp;

          for (var Wb = 0; Wb < this.
          /**/
          model.Xe; ++Wb) {
            verDisp = Wb * 4;
            indices.push(verDisp + 0, verDisp + 3, verDisp + 1, verDisp + 1, verDisp + 3, verDisp + 2);
          }
        }
        this.renderBuffer = renderBuffer;
        this.renderBuffer.initialize(this.
        /**/
        model.Xe * 4, [2], indices, this.
        /**/
        model.Xe);
        this.renderBuffer.__numIndices = 0;
      };
    };

    le.prototype = new ke();

    le.prototype.
    /**/
    fillGeometryBuffers = function (
    /**/
    cameraRight,
    /**/
    cameraUp,
    /**/
    cameraDir) {
      this.renderBuffer.cleanup();
      this.renderBuffer.__lastRenderCall = null;
      this.od.forEach(function (Bd) {
        Bd.ue(
        /**/
        cameraRight,
        /**/
        cameraUp,
        /**/
        cameraDir, this.renderBuffer);
      }, this);
      if (this.renderBuffer.__lastRenderCall) this.renderBuffer.pushRenderCall(this.renderBuffer.__lastRenderCall);
    };

    var me = function me() {
      this._init = function (we, Ab, Mc, options) {
        me.prototype._init.call(this, we, Ab, Mc, ne, options);

        this.materials = [];
        this.
        /**/
        model.materials.forEach(function (value) {
          this.materials.push(['source-over', 'lighter', 'multiply'][value]);
        }, this);
        this.
        /**/
        textureDescs = [];
      };
    };

    me.prototype = new ke();

    me.prototype.
    /**/
    draw = function (
    /**/
    context,
    /**/
    camera) {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Hd(
        /**/
        context,
        /**/
        camera);
      }
    };

    this.createWGLInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    renderBuffer,
    /**/
    options) {
      var Ld = new le();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      renderBuffer,
      /**/
      options || {});

      return Ld;
    };

    this.createCanvas2DInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      var Ld = new me();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      options || {});

      return Ld;
    };

    this.textures = ['particle_texture.png'];
    this.materials = [0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 100;

    function Emitter_DefaultEmitter() {
      var _1 = [],
          _3 = [],
          _7 = [],
          _8 = [],
          _8fs = [],
          _8vs = [],
          _8rw = [],
          _8rwn = [],
          _8rwl,
          _8v = [],
          _8p = [],
          _8dtl,
          _8dtp,
          _8df,
          _8fsd = [],
          _10,
          _9;

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter";

      this.ud = function (Bd) {
        Bd._Color = [1, 1, 1];
        Bd.dd();
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 10;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 10;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        ctx.randv3gen(_3, 100, Bd.Ld.rand);
        Xb._4 = [];
        ctx.T(Xb._4, _3);
        Xb._5 = 0;
        Xb._6 = [];
        ctx.T(Xb._6, Bd._Color);
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        ctx.randv3gen(_3, 100, Bd.Ld.rand);
        Xb._4 = [];
        ctx.T(Xb._4, _3);
        Xb._5 = 0;
        Xb._6 = [];
        ctx.T(Xb._6, Bd._Color);
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_7, 0, 100, 0);
        ctx.T(_8fs, _7);
        ctx.T(_8vs, [0, 0, 0]);
        ctx.u(_8v, _8fs, Qb);
        ctx.c(_8v, _8v, Xb._4);
        ctx.u(_8p, _8v, Qb);
        ctx.c(_8p, _8p, Xb._2);
        ctx.T(Xb._2, _8p);
        ctx.T(Xb._4, _8v);
        ctx.T(Xb.Ab, Xb._2);
        _10 = 30;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._5;
        ctx.V(Xb.Nd, _10, _10);
        ctx.T(Xb.gf, Xb._6);
        Xb.Od = 1;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _9 = 2;
        if (Xb._ > _9) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 0;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_DefaultEmitter());
    };
  }

  return Heart;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXEhlYXJ0LmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIk5ldXRyaW5vRWZmZWN0IiwibmFtZXNwYWNlIiwiX19sYXN0X18iLCJzZWxmIiwiSGVhcnQiLCJjdHgiLCJEYiIsIm5lIiwiTGQiLCJCZCIsIndlIiwicGUiLCJsZW5ndGgiLCJMYyIsInByb3RvdHlwZSIsIkVjIiwiRmMiLCJ4ZSIsImZlIiwiQWIiLCJYYiIsIkdjIiwiaWIiLCJNZCIsIkhjIiwiTWF0aCIsImNvcyIsIkljIiwic2luIiwieWUiLCJBZSIsIk5kIiwiemUiLCJ0cmFuc2Zvcm0iLCJxIiwiTWMiLCJ6MiIsInh5Iiwid3oiLCJQYyIsImdlIiwidmMiLCJCZSIsIm9jIiwiT2QiLCJEZSIsImZsb29yIiwiUWMiLCJSYyIsIkVlIiwic2xpY2UiLCJkZiIsImFicyIsImVmIiwic2F2ZSIsInRyYW5zbGF0ZSIsIlBkIiwiZ2xvYmFsQWxwaGEiLCJnZiIsIlllIiwiVGMiLCJaZSIsIlVjIiwiYWYiLCJiZiIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRyYXdJbWFnZSIsImltYWdlIiwieCIsInkiLCJmaWxsU3R5bGUiLCJmZiIsImZpbGxSZWN0IiwiY2YiLCJyZXN0b3JlIiwiSGQiLCJtYXRlcmlhbHMiLCJtb2RlbCIsInJlbmRlclN0eWxlcyIsInJlbmRlclN0eWxlSW5kZXgiLCJtYXRlcmlhbEluZGV4IiwidGV4dHVyZURlc2NzIiwidGV4dHVyZUluZGljZXMiLCJ3aWR0aCIsImhlaWdodCIsIlNjIiwia2QiLCJhIiwiYiIsIlZjIiwiV2IiLCJ0YyIsInNvcnQiLCJvZSIsInZlcnRleCIsInBvc2l0aW9uIiwiY29sb3IiLCJ0ZXhDb29yZHMiLCJxZSIsInNlIiwicmUiLCJ0ZSIsInJlbmRlckJ1ZmZlciIsIkNlIiwidjAiLCJ2MSIsInYyIiwidjMiLCJGZSIsIkdlIiwicyIsImMiLCJIZSIsIkllIiwiSmUiLCJLZSIsInUiLCJyZ2IiLCJ2IiwiUGUiLCJRZSIsIlJlIiwiU2UiLCJXZSIsInRleHR1cmVzUmVtYXAiLCJVZSIsIlZlIiwiYmVmb3JlUXVhZCIsInB1c2hWZXJ0ZXgiLCJfX2xhc3RSZW5kZXJDYWxsIiwiUmVuZGVyQ2FsbCIsImxhc3RSZW5kZXJDYWxsIiwibnVtSW5kaWNlcyIsInB1c2hSZW5kZXJDYWxsIiwic3RhcnRJbmRleCIsInVlIiwiZm9yRWFjaCIsImRlcHRoIiwiSCIsImxkIiwidmUiLCJWYiIsIkViIiwiRmIiLCJHYiIsIkhiIiwiSWIiLCJLYiIsIkxiIiwiTWIiLCJOYiIsIk9iIiwiSmQiLCJJZCIsIlFiIiwiUGIiLCJSYiIsInN5c3RlbVRpbWUiLCJTYiIsImljIiwiemIiLCJUYiIsIlViIiwiZGlzYWN0aXZhdGUiLCJhYiIsIkJiIiwic2xlcnBxIiwicHJldlJvdGF0aW9uIiwiSmIiLCJzYyIsInBvcCIsInVuc2hpZnQiLCJZYiIsIlpiIiwiVCIsIlUiLCJhYyIsImJjIiwiY2MiLCJkYyIsInN5c3RlbVRpbWVCZWZvcmVGcmFtZSIsInN5c3RlbVRpbWVBZnRlckZyYW1lIiwiZWMiLCJPIiwiaCIsImZjIiwicmQiLCJoYyIsImpjIiwia2MiLCJYIiwibWMiLCJLYyIsIm5jIiwiaSIsInBjIiwiQWQiLCJzZCIsImZkIiwiZ2QiLCJxYyIsInJjIiwiamUiLCJ1YyIsIm1kIiwibmQiLCJwdXNoIiwieGMiLCJ3YyIsImFjdGl2YXRlIiwieWMiLCJHZCIsIkVkIiwiemMiLCJBYyIsIkNjIiwiV2MiLCJjb25zdHJ1Y3QiLCJZYyIsImFkIiwiZGQiLCJ2ZCIsImVkIiwidWQiLCJqZCIsImlkIiwiaGQiLCJ3ZCIsIlpjIiwicGF1c2VkXyIsImdlbmVyYXRvcnNQYXVzZWRfIiwiVyIsImFwcGx5IiwiVGQiLCJzaGlmdCIsImciLCJ3IiwieGQiLCJyZWFkeSIsImFjdGl2YXRlZCIsInNwbGljZSIsInBhdXNlIiwidW5wYXVzZSIsInBhdXNlZCIsInBhdXNlR2VuZXJhdG9ycyIsInVucGF1c2VHZW5lcmF0b3JzIiwiZ2VuZXJhdG9yc1BhdXNlZCIsImdldE51bVBhcnRpY2xlcyIsImtlIiwiQ2IiLCJfaW5pdCIsIm9wdGlvbnMiLCJvZCIsInBkIiwiY29uY2F0IiwibmFtZSIsIkNkIiwicWQiLCJfcHJlc2ltTmVlZGVkIiwicGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsInBhdXNlQWxsRW1pdHRlcnMiLCJ6ZXJvVXBkYXRlIiwidXBkYXRlIiwiVWQiLCJyZXN0YXJ0Iiwicm90YXRpb24iLCJkdCIsIkRkIiwidXBkYXRlRml4ZWQiLCJ1cGRhdGVGbGV4IiwidXBkYXRlZFRpbWUiLCJmcmFtZVJvdGF0aW9uIiwiZXF1YWx2M18iLCJlcXVhbHFfIiwicmVzZXRQb3NpdGlvbiIsInNldFByb3BlcnR5SW5BbGxFbWl0dGVycyIsInZhbHVlIiwicHJvcE5hbWUiLCJBcnJheSIsIlMiLCJ1bnBhdXNlQWxsRW1pdHRlcnMiLCJhcmVBbGxFbWl0dGVyc1BhdXNlZCIsInVucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsImFyZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzUGF1c2VkIiwibnVtUGFydGljbGVzIiwibGUiLCJjYWxsIiwiaW5kaWNlcyIsInZlckRpc3AiLCJYZSIsImluaXRpYWxpemUiLCJfX251bUluZGljZXMiLCJmaWxsR2VvbWV0cnlCdWZmZXJzIiwiY2FtZXJhUmlnaHQiLCJjYW1lcmFVcCIsImNhbWVyYURpciIsImNsZWFudXAiLCJtZSIsImRyYXciLCJjb250ZXh0IiwiY2FtZXJhIiwiY3JlYXRlV0dMSW5zdGFuY2UiLCJjcmVhdGVDYW52YXMyREluc3RhbmNlIiwidGV4dHVyZXMiLCJFbWl0dGVyX0RlZmF1bHRFbWl0dGVyIiwiXzEiLCJfMyIsIl83IiwiXzgiLCJfOGZzIiwiXzh2cyIsIl84cnciLCJfOHJ3biIsIl84cndsIiwiXzh2IiwiXzhwIiwiXzhkdGwiLCJfOGR0cCIsIl84ZGYiLCJfOGZzZCIsIl8xMCIsIl85IiwiX0NvbG9yIiwiXyIsIl8yIiwicmFuZHYzZ2VuIiwicmFuZCIsIl80IiwiXzUiLCJfNiIsIlYiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQyxXQUFVQSxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUN0QixNQUFJLE9BQU9DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0MsTUFBUCxLQUFrQixXQUFyRCxFQUFrRTtBQUM5REEsSUFBQUEsTUFBTSxDQUFDRCxPQUFQLEdBQWlCRCxPQUFPLEVBQXhCO0FBQ0gsR0FGRCxNQUVPLElBQUksT0FBT0csTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsTUFBTSxDQUFDQyxHQUEzQyxFQUFnRDtBQUNuREQsSUFBQUEsTUFBTSxDQUFDLENBQUMsU0FBRCxDQUFELEVBQWMsVUFBVUYsT0FBVixFQUFtQjtBQUNuQyxPQUFDRixJQUFJLENBQUNNLGNBQUwsR0FBc0JKLE9BQXZCLEVBQWdDLE9BQWhDLElBQTJDRCxPQUFPLEVBQWxEO0FBQ0gsS0FGSyxDQUFOO0FBR0gsR0FKTSxNQUlBO0FBQ0gsUUFBSU0sU0FBUyxHQUFJUCxJQUFJLENBQUNNLGNBQUwsS0FBd0JOLElBQUksQ0FBQ00sY0FBTCxHQUFzQixFQUE5QyxDQUFqQjtBQUNBQyxJQUFBQSxTQUFTLENBQUNDLFFBQVYsR0FBcUJELFNBQVMsQ0FBQyxPQUFELENBQVQsR0FBcUJOLE9BQU8sRUFBakQ7QUFDSDtBQUNKLENBWEEsRUFXQyxPQUFPUSxJQUFQLEtBQWdCLFdBQWhCLEdBQThCQSxJQUE5QixTQVhELEVBVzRDLFlBQVk7QUFFekQsV0FBU0MsS0FBVCxDQUFlQyxHQUFmLEVBQW9CO0FBQ25CLFFBQUlDLEVBQUUsR0FBRyxJQUFUOztBQUVBLFFBQUlDLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUMxQixXQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7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O0FBQ0EsT0FKRDtBQU9BOztBQUVELFNBQUtoRSxFQUFMLEdBQVUsVUFBU3pQLEVBQVQsRUFBYTtBQUN0QkEsTUFBQUEsRUFBRSxDQUFDbVEsRUFBSCxHQUFRLFNBQVI7QUFDQW5RLE1BQUFBLEVBQUUsQ0FBQytQLEVBQUgsR0FBUSxDQUFSOztBQUNBL1AsTUFBQUEsRUFBRSxDQUFDOFQsSUFBSCxHQUFVLFlBQVc7QUFBRSxlQUFPN1MsSUFBSSxDQUFDa1QsTUFBTCxFQUFQO0FBQXVCLE9BQTlDOztBQUNBblUsTUFBQUEsRUFBRSxDQUFDcVAsRUFBSCxDQUFNLElBQUltRCxzQkFBSixFQUFOO0FBQ0EsS0FMRDtBQU9BOztBQUVELFNBQU81UyxLQUFQO0FBQ0MsQ0FydkNBLENBQUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDc5OWRiMDc1LTliOTUtNDU5YS1hN2RkLWQ0NzY4NGQwM2Q2ZFxyXG5cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydleHBvcnRzJ10sIGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgICAgICAgICAgIChyb290Lk5ldXRyaW5vRWZmZWN0ID0gZXhwb3J0cylbJ0hlYXJ0J10gPSBmYWN0b3J5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAocm9vdC5OZXV0cmlub0VmZmVjdCB8fCAocm9vdC5OZXV0cmlub0VmZmVjdCA9IHt9KSk7XHJcbiAgICAgICAgbmFtZXNwYWNlLl9fbGFzdF9fID0gbmFtZXNwYWNlWydIZWFydCddID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5mdW5jdGlvbiBIZWFydChjdHgpIHtcclxuXHR2YXIgRGIgPSB0aGlzO1xyXG5cclxuXHR2YXIgbmUgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLkJkID0gQmQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuQmQud2UucGUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLndlID0gdGhpcy5CZC53ZS5wZVswXTtcclxuXHJcblx0XHRcdHRoaXMuTGMgPSBbbmUucHJvdG90eXBlLkVjLFxyXG5cdFx0XHRcdG5lLnByb3RvdHlwZS5GY11bdGhpcy53ZS54ZV07XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMud2UgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0bmUucHJvdG90eXBlID0ge1xyXG5cdFx0RWM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBHYyA9IGN0eC5pYihYYi5NZCk7XHJcblx0XHRcdHZhciBIYyA9IE1hdGguY29zKEdjKTtcclxuXHRcdFx0dmFyIEljID0gTWF0aC5zaW4oR2MpO1xyXG5cdFx0XHR2YXIgeWUgPSBjdHguQWUoWGIuTmRbMF0pO1xyXG5cdFx0XHR2YXIgemUgPSBjdHguQWUoWGIuTmRbMV0pO1xyXG5cdFx0XHRmZS4vKiovdHJhbnNmb3JtKHllICogSGMsIHllICogSWMsIHplICogLUljLCB6ZSAqIEhjLCBBYlswXSwgQWJbMV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRGYzogZnVuY3Rpb24gKGZlLCBBYiwgWGIpIHtcclxuXHRcdFx0dmFyIHEgPSBYYi5NYztcclxuXHRcdFx0dmFyIHoyID0gMi4wICogcVsyXSAqIHFbMl07XHJcblx0XHRcdHZhciB4eSA9IDIuMCAqIHFbMF0gKiBxWzFdO1xyXG5cdFx0XHR2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybShcclxuXHRcdFx0XHR5ZSAqICgxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyKSxcclxuXHRcdFx0XHR5ZSAqICh4eSArIHd6KSxcclxuXHRcdFx0XHR6ZSAqICh3eiAtIHh5KSxcclxuXHRcdFx0XHR6ZSAqICgyLjAgKiBxWzBdICogcVswXSArIHoyIC0gMS4wKSxcclxuXHRcdFx0XHRBYlswXSwgQWJbMV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRQYzogZnVuY3Rpb24gKGZlLCBYYiwgZ2UpIHtcclxuXHRcdFx0WGIudmMoZmUsIC0xLCBnZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5CZSAhPSBudWxsICYmICFYYi5vYykge1xyXG5cclxuXHRcdFx0XHRcdGlmIChYYi5PZCA+IDAuMDAxKSB7XHJcblx0XHRcdFx0XHRcdHZhciBEZSA9IE1hdGguZmxvb3IoWGIuUWMgJSB0aGlzLndlLlJjKTtcclxuXHRcdFx0XHRcdFx0dmFyIEVlID0gTWF0aC5mbG9vcihYYi5RYyAvIHRoaXMud2UuUmMpO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIEFiID0gWGIuQWIuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0dmFyIE5kID0gWGIuTmQuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFnZSB8fCBnZS4vKiovdHJhbnNmb3JtKEFiLCBOZCkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGRmID0gTWF0aC5hYnMoTmRbMF0pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBlZiA9IE1hdGguYWJzKE5kWzFdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRmID4gMC4wMDEgJiYgZWYgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmUuc2F2ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5MYyhmZSwgQWIsIFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmZS50cmFuc2xhdGUoLWRmICogWGIuUGRbMF0sIC1lZiAqICgxIC0gWGIuUGRbMV0pKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLmdsb2JhbEFscGhhICo9IFhiLk9kO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChYYi5nZlswXSA8IDAuOTk5IHx8IFhiLmdmWzFdIDwgMC45OTkgfHwgWGIuZ2ZbMl0gPCAwLjk5OSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGYgPj0gMSAmJiBlZiA+PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIFllID0gZGYgPCB0aGlzLlRjID8gZGYgOiB0aGlzLlRjO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBaZSA9IGVmIDwgdGhpcy5VYyA/IGVmIDogdGhpcy5VYztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmFmKFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImNvcHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJtdWx0aXBseVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5maWxsU3R5bGUgPSBjdHguZmYoWGIuZ2YpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5maWxsUmVjdCgwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1hdG9wXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmUuZHJhd0ltYWdlKGN0eC5jZiwgMCwgMCwgWWUsIFplLCAwLCAwLCBkZiwgZWYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmUuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYywgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi52YyhmZSwgMSwgZ2UpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRIZDogZnVuY3Rpb24gKGZlLCBnZSkge1xyXG5cdFx0XHRmZS5zYXZlKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cdFx0XHRcdGZlLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHRoaXMuTGQubWF0ZXJpYWxzW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLm1hdGVyaWFsSW5kZXhdO1xyXG5cdFx0XHRcdHRoaXMuQmUgPSB0aGlzLkxkLnRleHR1cmVEZXNjc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5CZSA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLkJlKSB7XHJcblx0XHRcdFx0dGhpcy5UYyA9IHRoaXMuQmUud2lkdGggLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdHRoaXMuVWMgPSB0aGlzLkJlLmhlaWdodCAvIHRoaXMud2UuU2M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGtkKGEsIGIpIHtcclxuXHRcdFx0XHRpZiAoYS5BYlsyXSA+IGIuQWJbMl0pXHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRpZiAoYS5BYlsyXSA8IGIuQWJbMl0pXHJcblx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXRjaCAodGhpcy5CZC5WYykge1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSB0aGlzLkJkLnRjLmxlbmd0aDsgV2ItLSA+IDA7KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLnNvcnQoa2QpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZlLnJlc3RvcmUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBvZSA9IGZ1bmN0aW9uIChMZCwgQmQpIHtcclxuXHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLkJkID0gQmQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuQmQud2UucGUubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMud2UgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMudmVydGV4ID0gW1xyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH1dO1xyXG5cdH1cclxuXHJcblx0b2UucHJvdG90eXBlID0ge1xyXG5cdFx0cWU6IGZ1bmN0aW9uIChYYiwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFhiLkNlKC0xLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKCFYYi5vYykge1xyXG5cclxuXHRcdFx0XHRcdHZhciB2MCA9IHRoaXMudmVydGV4WzBdO1xyXG5cdFx0XHRcdFx0dmFyIHYxID0gdGhpcy52ZXJ0ZXhbMV07XHJcblx0XHRcdFx0XHR2YXIgdjIgPSB0aGlzLnZlcnRleFsyXTtcclxuXHRcdFx0XHRcdHZhciB2MyA9IHRoaXMudmVydGV4WzNdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBGZSA9IFtdLCBHZSA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLndlLnhlID09IDApIHtcclxuXHRcdFx0XHRcdFx0dmFyIGEgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHRcdFx0XHR2YXIgcyA9IC1NYXRoLnNpbihhKTtcclxuXHRcdFx0XHRcdFx0dmFyIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcblx0XHRcdFx0XHRcdEZlWzBdID0gc2VbMF0gKiBjICsgcmVbMF0gKiBzO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHNlWzFdICogYyArIHJlWzFdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMl0gPSBzZVsyXSAqIGMgKyByZVsyXSAqIHM7XHJcblxyXG5cdFx0XHRcdFx0XHRHZVswXSA9IC1zZVswXSAqIHMgKyByZVswXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzFdID0gLXNlWzFdICogcyArIHJlWzFdICogYztcclxuXHRcdFx0XHRcdFx0R2VbMl0gPSAtc2VbMl0gKiBzICsgcmVbMl0gKiBjO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdFx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHRcdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0XHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IDEuMCAtIDIuMCAqIHFbMV0gKiBxWzFdIC0gejI7XHJcblx0XHRcdFx0XHRcdEZlWzFdID0geHkgKyB3ejtcclxuXHRcdFx0XHRcdFx0RmVbMl0gPSAyLjAgKiBxWzBdICogcVsyXSAtIDIuMCAqIHFbM10gKiBxWzFdO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSB4eSAtIHd6O1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IDEuMCAtIDIuMCAqIHFbMF0gKiBxWzBdIC0gejI7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gMi4wICogcVsxXSAqIHFbMl0gKyAyLjAgKiBxWzNdICogcVswXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgSGUgPSBbXSwgSWUgPSBbXSwgSmUgPSBbXSwgS2UgPSBbXTtcclxuXHRcdFx0XHRcdGN0eC51KEhlLCBGZSwgLVhiLk5kWzBdICogWGIuUGRbMF0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSWUsIEZlLCBYYi5OZFswXSAqICgxLjAgLSBYYi5QZFswXSkpO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSmUsIEdlLCAtWGIuTmRbMV0gKiBYYi5QZFsxXSk7XHJcblx0XHRcdFx0XHRjdHgudShLZSwgR2UsIFhiLk5kWzFdICogKDEuMCAtIFhiLlBkWzFdKSk7XHJcblxyXG5cdFx0XHRcdFx0Y3R4LmModjAuLyoqL3Bvc2l0aW9uLCBIZSwgSmUpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjAuLyoqL3Bvc2l0aW9uLCB2MC4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYxLi8qKi9wb3NpdGlvbiwgSGUsIEtlKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYxLi8qKi9wb3NpdGlvbiwgdjEuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2Mi4vKiovcG9zaXRpb24sIEllLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2Mi4vKiovcG9zaXRpb24sIHYyLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjMuLyoqL3Bvc2l0aW9uLCBJZSwgSmUpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjMuLyoqL3Bvc2l0aW9uLCB2My4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciByZ2IgPSBjdHgudihYYi5nZiwgMjU1KTtcclxuXHRcdFx0XHRcdFx0djAuLyoqL2NvbG9yID0gdjEuLyoqL2NvbG9yID0gdjIuLyoqL2NvbG9yID0gdjMuLyoqL2NvbG9yID0gW3JnYlswXSwgcmdiWzFdLCByZ2JbMl0sIFhiLk9kICogMjU1XTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciBEZSA9IE1hdGguZmxvb3IoWGIuUWMgJSB0aGlzLndlLlJjKTtcclxuXHRcdFx0XHRcdFx0dmFyIEVlID0gTWF0aC5mbG9vcihYYi5RYyAvIHRoaXMud2UuUmMpO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIFBlLCBRZSwgUmUsIFNlO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIFdlID0gdGhpcy5MZC50ZXh0dXJlc1JlbWFwW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLnRleHR1cmVJbmRpY2VzWzBdXTtcclxuXHRcdFx0XHRcdFx0aWYgKFdlKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFVlID0gV2Uud2lkdGggLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IFdlLmhlaWdodCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IFdlLnggKyBEZSAqIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBRZSA9IFBlICsgVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFJlID0gKFdlLnkgKyBXZS5oZWlnaHQgLSBFZSAqIFZlKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2UgPSBSZSAtIFZlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IDEuMCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFZlID0gMS4wIC8gdGhpcy53ZS5TYztcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFBlID0gRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9ICgxLjAgLSBFZSAqIFZlKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2UgPSBSZSAtIFZlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2MC4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBTZV07XHJcblx0XHRcdFx0XHRcdHYxLi8qKi90ZXhDb29yZHNbMF0gPSBbUGUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djIuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgUmVdO1xyXG5cdFx0XHRcdFx0XHR2My4vKiovdGV4Q29vcmRzWzBdID0gW1FlLCBTZV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJlbmRlckJ1ZmZlci5iZWZvcmVRdWFkKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5iZWZvcmVRdWFkKHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjApO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjEpO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjIpO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjMpO1xyXG5cclxuXHRcdFx0XHRcdGlmICghcmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpIHtcclxuXHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBuZXcgY3R4LlJlbmRlckNhbGwoMCwgNiwgdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBsYXN0UmVuZGVyQ2FsbCA9IHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxhc3RSZW5kZXJDYWxsLnJlbmRlclN0eWxlSW5kZXggPT0gdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwubnVtSW5kaWNlcyArPSA2O1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoUmVuZGVyQ2FsbChsYXN0UmVuZGVyQ2FsbCk7XHJcblx0XHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBuZXcgY3R4LlJlbmRlckNhbGwoXHJcblx0XHRcdFx0XHRcdFx0XHRsYXN0UmVuZGVyQ2FsbC5zdGFydEluZGV4ICsgbGFzdFJlbmRlckNhbGwubnVtSW5kaWNlcyxcclxuXHRcdFx0XHRcdFx0XHRcdDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFhiLkNlKDEsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVlOiBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdHN3aXRjaCAodGhpcy5CZC5WYykge1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKHRoaXMuQmQudGNbV2JdLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKHRoaXMuQmQudGNbV2JdLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuZm9yRWFjaChmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0XHRcdFx0WGIuZGVwdGggPSBjdHguSCh0ZSwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoIDwgYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRcdFx0aWYgKGEuZGVwdGggPiBiLmRlcHRoKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgbGQgPSBmdW5jdGlvbiAoTGQsIHdlLCB2ZSkge1xyXG5cdFx0dmFyIFZiID0gdGhpcztcclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMud2UgPSB3ZTtcclxuXHJcblx0XHQvLyBFYlxyXG5cclxuXHRcdGZ1bmN0aW9uIEViKCkge1xyXG5cdFx0XHR0aGlzLkZiID0gMDtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuSGIgPSBudWxsO1xyXG5cdFx0XHR0aGlzLkliID0gbnVsbDtcclxuXHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdHRoaXMuTGIgPSAxO1xyXG5cclxuXHRcdFx0VmIud2UuTWIodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5PYiA9IHRoaXMuR2I7XHJcblx0XHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRFYi5wcm90b3R5cGUgPSB7XHJcblx0XHRcdEpkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblx0XHRcdFx0VmIud2UuUGIoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR2YXIgUmIgPSBWYi5SYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZSA9IExkLlJiO1xyXG5cdFx0XHRcdHZhciBTYiA9IFFiO1xyXG5cdFx0XHRcdHZhciBpYyA9IDA7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnpiID4gMC4wMDAwMDEpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgVGIgPSB0aGlzLk9iICsgUWIgKiB0aGlzLnpiO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+PSAxLjApIHtcclxuXHRcdFx0XHRcdFx0dmFyIFViID0gdGhpcy56YiA8IDAuMDAxID8gMC4wIDogKDEuMCAtIHRoaXMuT2IpIC8gdGhpcy56YjtcclxuXHRcdFx0XHRcdFx0U2IgLT0gVWI7XHJcblx0XHRcdFx0XHRcdFJiICs9IFViO1xyXG5cdFx0XHRcdFx0XHRzeXN0ZW1UaW1lICs9IFViO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuSGIgIT0gbnVsbCAmJiBSYiA+IHRoaXMuSGIpIHtcclxuXHRcdFx0XHRcdFx0XHRWYi5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRWYi5SYiA9IFJiO1xyXG5cdFx0XHRcdFx0XHRMZC5SYiA9IHN5c3RlbVRpbWU7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5hYihWYi5BYiwgQWIsIFZiLkJiLCBTYiAvIFFiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChNYyAmJiBRYiA+IDApXHJcblx0XHRcdFx0XHRcdFx0Y3R4LnNsZXJwcShWYi5NYywgTWMsIFZiLnByZXZSb3RhdGlvbiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgdGhlIGZ1dHVyZSB3aGVuIEpiIHdvdWxkIGJlIGV4dGVybmFsXHJcblx0XHRcdFx0XHRcdHRoaXMuTGIgPSB0aGlzLkpiO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuSmI7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoVmIuc2MubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuSmIgPT0gMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSBXYiAvICh0aGlzLkpiIC0gMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBYYiA9IFZiLnNjLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFZiLnRjLnVuc2hpZnQoWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoV2IgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlliKCk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWmIoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0WGIuSWQoU2IpO1xyXG5cdFx0XHRcdFx0XHRcdCsraWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuT2IgPSAwLjA7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkliICE9IG51bGwgJiYgKyt0aGlzLkZiID49IHRoaXMuSWIpIHtcclxuXHRcdFx0XHRcdFx0XHRWYi5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5PYiA9IFRiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRSYiArPSBTYjtcclxuXHRcdFx0XHRWYi5SYiA9IFJiO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY1xyXG5cclxuXHRcdGZ1bmN0aW9uIGFjKCkge1xyXG5cdFx0XHR0aGlzLkdiID0gMTtcclxuXHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdHRoaXMuTGIgPSAxO1xyXG5cclxuXHRcdFx0VmIud2UuTWIodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5iYyA9IHRoaXMuR2I7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRhYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdEpkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblx0XHRcdFx0VmIud2UuUGIoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR2YXIgY2MgPSBWYi5SYjtcclxuXHRcdFx0XHR2YXIgZGMgPSBjYyArIFFiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lQmVmb3JlRnJhbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUFmdGVyRnJhbWUgPSBzeXN0ZW1UaW1lQmVmb3JlRnJhbWUgKyBRYjtcclxuXHRcdFx0XHR2YXIgZWMgPSBBYiA/IGN0eC5PKGN0eC5oKEFiLCBWYi5CYikpIDogMDtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAoZWMgPiAwLjAwMDAwMSkge1xyXG5cdFx0XHRcdFx0dmFyIGZjID0gZWMgLyB0aGlzLnJkO1xyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5iYyArIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBoYyA9IGZjIDwgMC4wMDEgP1xyXG5cdFx0XHRcdFx0XHQxLjAgLSB0aGlzLmJjIDogKDEuMCAtIHRoaXMuYmMpIC8gZmM7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGpjID0gW107XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKFRiID4gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBrYyA9IGNjICsgaGMgKiBRYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoamMsIFZiLkJiLCBBYiwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBrYztcclxuXHRcdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIGpjKTtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBjdHguWChzeXN0ZW1UaW1lQmVmb3JlRnJhbWUsIHN5c3RlbVRpbWVBZnRlckZyYW1lLCBoYyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgdGhlIGZ1dHVyZSB3aGVuIEpiIHdvdWxkIGJlIGV4dGVybmFsXHJcblx0XHRcdFx0XHRcdHRoaXMuTGIgPSB0aGlzLkpiO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuSmI7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoVmIuc2MubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuSmIgPT0gMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSBXYiAvICh0aGlzLkpiIC0gMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBYYiA9IFZiLnNjLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFZiLnRjLnVuc2hpZnQoWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoV2IgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlliKCk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWmIoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0WGIuSWQoUWIgKiAoMS4wIC0gaGMpKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRoYyArPSAxLjAgLyBmYztcclxuXHRcdFx0XHRcdFx0VGIgLT0gMS4wO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuYmMgPSBUYjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFZiLlJiID0gZGM7XHJcblxyXG5cdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBBYik7XHJcblxyXG5cdFx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRcdGN0eC5VKFZiLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1jXHJcblxyXG5cdFx0ZnVuY3Rpb24gbWMoKSB7XHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5QZCA9IFtdO1xyXG5cdFx0XHR0aGlzLk5kID0gW107XHJcblx0XHRcdHRoaXMuZ2YgPSBbXTtcclxuXHRcdFx0dGhpcy5LYyA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1jLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0bmM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLm9jID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHRcdFx0XHRcdHBjLkJkLkpkKHRoaXMuQWIsIG51bGwpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZClcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRZYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmZkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFpiOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0VmIud2UuZ2QoVmIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHRcdFx0dGhpcy5uYygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYikge1xyXG5cdFx0XHRcdFZiLndlLnFjKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dGhpcy5yYyhRYik7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRwYzogZnVuY3Rpb24gKGplKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuS2NbamVdLkJkO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmM6IGZ1bmN0aW9uIChRYikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5LY1tpXS5CZC5JZChRYiwgdGhpcy5BYiwgbnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dWM6IGZ1bmN0aW9uIChtZCwgbmQpIHtcclxuXHRcdFx0XHR0aGlzLktjLnB1c2goe1xyXG5cdFx0XHRcdFx0QmQ6IG5ldyBsZChMZCwgbWQsIHZlKSxcclxuXHRcdFx0XHRcdEFkOiBuZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dmM6IGZ1bmN0aW9uIChmZSwgeGMsIGdlKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQuSGQoZmUsIGdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRDZTogZnVuY3Rpb24gKHhjLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhjID09IHBjLkFkLnhjKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHdjOiBmdW5jdGlvbiAoZmUpIHtcclxuXHRcdFx0XHR0aGlzLm9jID0gdHJ1ZTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHBjLkFkLnNkKSB7XHJcblx0XHRcdFx0XHRcdHBjLkJkLmFjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdHBjLkJkLklkKDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHljOiBmdW5jdGlvbiAoR2QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuRWQoR2QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHpjXHJcblxyXG5cdFx0ZnVuY3Rpb24gemMoKSB7XHJcblx0XHR9XHJcblxyXG5cdFx0emMucHJvdG90eXBlLkFjID0gZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdHJldHVybiBWYi53ZS5DYyhWYiwgWGIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbGQgQWRcclxuXHJcblx0XHR0aGlzLkFiID0gW107XHJcblx0XHR0aGlzLkJiID0gW107XHJcblx0XHR0aGlzLk1jID0gW107XHJcblx0XHR0aGlzLnByZXZSb3RhdGlvbiA9IFtdO1xyXG5cdFx0dGhpcy50YyA9IFtdO1xyXG5cdFx0dGhpcy5zYyA9IFtdO1xyXG5cdFx0dGhpcy5XYyA9IG5ldyB6YygpO1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QgPSBuZXcgdmUodGhpcy5MZCwgdGhpcyk7XHJcblx0XHR0aGlzLlljID0gW107XHJcblx0XHR0aGlzLmFkID0gW107XHJcblxyXG5cdFx0dGhpcy5kZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy52ZCA9IG5ldyBFYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgYWMoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLndlLnVkKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuamQ7ICsrV2IpIHtcclxuXHRcdFx0dmFyIFhiID0gbmV3IG1jKCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgdGhpcy5ZYy5sZW5ndGg7ICsraWQpIHtcclxuXHRcdFx0XHR2YXIgaGQgPSB0aGlzLlljW2lkXTtcclxuXHRcdFx0XHRYYi51YyhoZC5EYiwgaGQuQWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjLnB1c2goWGIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jID8gTWMgOiBbMCwgMCwgMCwgMV0pO1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblxyXG5cdFx0XHR0aGlzLlJiID0gMC4wO1xyXG5cdFx0XHR0aGlzLndkID0gMC4wO1xyXG5cdFx0XHR0aGlzLlpjID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5wYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSBmYWxzZTtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSmQgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHR0aGlzLk5iKEFiLCBNYyk7XHJcblxyXG5cdFx0dGhpcy5zYy5wdXNoLmFwcGx5KHRoaXMuc2MsIHRoaXMudGMpO1xyXG5cdFx0dGhpcy50Yy5sZW5ndGggPSAwO1xyXG5cclxuXHRcdHRoaXMudmQuSmQoKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5JZCA9IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblxyXG5cdFx0aWYgKHRoaXMucGF1c2VkXylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5UZChBYiwgTWMpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRpZiAoUWIgPiAwLjAwMDEpIHtcclxuXHRcdFx0XHR2YXIgc2hpZnQgPSBbXTtcclxuXHRcdFx0XHRjdHguZyhzaGlmdCwgQWIsIHRoaXMuQmIpO1xyXG5cdFx0XHRcdGN0eC5UKHRoaXMuYWQsIHNoaWZ0KTtcclxuXHRcdFx0XHRjdHgudyh0aGlzLmFkLCB0aGlzLmFkLCBRYik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoTWMpXHJcblx0XHR7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaWM7XHJcblxyXG5cdFx0aWYgKHRoaXMuWmMgJiYgIXRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8pIHtcclxuXHRcdFx0aWMgPSB0aGlzLnZkLklkKFFiLCBBYiwgTWMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblxyXG5cdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cclxuXHRcdFx0aWMgPSAwO1xyXG5cdFx0XHR0aGlzLlJiICs9IFFiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gaWM7IFdiIDwgdGhpcy50Yy5sZW5ndGg7KSB7XHJcblx0XHRcdHZhciBYYiA9IHRoaXMudGNbV2JdO1xyXG5cclxuXHRcdFx0aWYgKCFYYi5vYykge1xyXG5cdFx0XHRcdFhiLklkKFFiKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuV2MuQWModGhpcy50Y1tXYl0pKSB7XHJcblx0XHRcdFx0XHRYYi53YygpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFhiLnJjKFFiKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMueGQoV2IpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCsrV2I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0bGQucHJvdG90eXBlLnhkID0gZnVuY3Rpb24gKGplKSB7XHJcblx0XHR2YXIgWGIgPSB0aGlzLnRjW2plXTtcclxuXHJcblx0XHR2YXIgcmVhZHkgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGlkID0gMDsgaWQgPCBYYi5LYy5sZW5ndGg7ICsraWQpIHtcclxuXHRcdFx0dmFyIEJkID0gWGIuS2NbaWRdLkJkO1xyXG5cclxuXHRcdFx0aWYgKEJkLmFjdGl2YXRlZCgpIHx8IEJkLnRjLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRyZWFkeSA9IGZhbHNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJlYWR5KSB7XHJcblx0XHRcdHRoaXMuc2MucHVzaCh0aGlzLnRjW2plXSk7XHJcblx0XHRcdHRoaXMudGMuc3BsaWNlKGplLCAxKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkhkID0gZnVuY3Rpb24gKGZlLCBnZSkge1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QuSGQoZmUsIGdlKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS51ZSA9IGZ1bmN0aW9uIChzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LnVlKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuVGQgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHR0aGlzLndkID0gdGhpcy5SYjtcclxuXHJcblx0XHRpZiAoQWIpIHtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoTWMpIHtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWMgPSBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHR0aGlzLlljLnB1c2goeyBEYjogbWQsIEFkOiBuZCB9KTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnBhdXNlZF8gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi91bnBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhdXNlZF87XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi91bnBhdXNlR2VuZXJhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovZ2VuZXJhdG9yc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdlbmVyYXRvcnNQYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuZGlzYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLlpjID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuYWN0aXZhdGVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuWmM7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dldE51bVBhcnRpY2xlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRjLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHZhciBrZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBDYiA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCB2ZSwgb3B0aW9ucykge1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbCA9IHdlO1xyXG5cclxuXHRcdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0XHR0aGlzLk1jID0gW107XHJcblxyXG5cdFx0XHQvLyBrZSBBZFxyXG5cclxuXHRcdFx0dGhpcy5vZCA9IFtdO1xyXG5cclxuXHRcdFx0dGhpcy5wZCA9IGZ1bmN0aW9uIChtZCkge1xyXG5cdFx0XHRcdHZhciBCZCA9IG5ldyBsZCh0aGlzLCBtZCwgdmUpO1xyXG5cdFx0XHRcdEJkLk5iKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHRcdHRoaXNbXCJfXCIuY29uY2F0KG1kLm5hbWUpXSA9IEJkO1xyXG5cdFx0XHRcdHRoaXMub2QucHVzaChCZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0XHR0aGlzLlJiID0gMC4wO1xyXG5cdFx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiID8gQWIgOiBbMCwgMCwgMF0pO1xyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jID8gTWMgOiBbMCwgMCwgMCwgMV0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKEFiLCBNYyk7XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLnFkKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuZ2VuZXJhdG9yc1BhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMucGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy4vKiovcGF1c2VBbGxFbWl0dGVycygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMuLyoqL3VwZGF0ZSh0aGlzLlVkLCBBYiwgTWMpO1xyXG5cdFx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3Jlc3RhcnQgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblxyXG5cdFx0dGhpcy5OYigvKiovcG9zaXRpb24gPyAvKiovcG9zaXRpb24gOiB0aGlzLkFiLCAvKiovcm90YXRpb24gPyAvKiovcm90YXRpb24gOiB0aGlzLk1jKTtcclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSmQodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdlbmVyYXRvcnNQYXVzZWQpIHtcclxuXHRcdFx0dGhpcy4vKiovcGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMucGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlQWxsRW1pdHRlcnMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnplcm9VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgwLCB0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdXBkYXRlID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdGlmICh0aGlzLkRkID4gMC4wKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZUZpeGVkKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnVwZGF0ZUZsZXgoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUudXBkYXRlRml4ZWQgPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0dmFyIHVwZGF0ZWRUaW1lID0gMC4wO1xyXG5cdFx0dmFyIGhjID0gW107XHJcblx0XHRjdHguVChoYywgdGhpcy5BYik7XHJcblx0XHR2YXIgZnJhbWVSb3RhdGlvbiA9IFtdO1xyXG5cdFx0Y3R4LlUoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbiAmJiBjdHguZXF1YWx2M18oLyoqL3Bvc2l0aW9uLCB0aGlzLkFiKSlcclxuXHRcdFx0LyoqL3Bvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uICYmIGN0eC5lcXVhbHFfKC8qKi9yb3RhdGlvbiwgdGhpcy5NYykpXHJcblx0XHRcdC8qKi9yb3RhdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0d2hpbGUgKCgvKiovZHQgLSB1cGRhdGVkVGltZSkgKyB0aGlzLkNkID49IHRoaXMuRGQpIHtcclxuXHRcdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdFx0Y3R4LmFiKGhjLCB0aGlzLkFiLCAvKiovcG9zaXRpb24sIHVwZGF0ZWRUaW1lIC8gLyoqL2R0KTtcclxuXHJcblx0XHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdFx0Y3R4LnNsZXJwcShmcmFtZVJvdGF0aW9uLCB0aGlzLk1jLCAvKiovcm90YXRpb24sIHVwZGF0ZWRUaW1lIC8gLyoqL2R0KTtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV0uSWQodGhpcy5EZCwgaGMsIGZyYW1lUm90YXRpb24pO1xyXG5cclxuXHRcdFx0XHR0aGlzLlJiID0gY2M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZWRUaW1lICs9IHRoaXMuRGQgLSB0aGlzLkNkO1xyXG5cdFx0XHR0aGlzLkNkID0gMC4wO1xyXG5cdFx0XHR0aGlzLlJiID0gY2MgKyB0aGlzLkRkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHR0aGlzLkNkICs9IC8qKi9kdCAtIHVwZGF0ZWRUaW1lO1xyXG5cdH1cclxuXHRcclxuXHRrZS5wcm90b3R5cGUudXBkYXRlRmxleCA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHR2YXIgY2MgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLklkKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdFx0XHR0aGlzLlJiID0gY2M7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5SYiA9IGNjICsgLyoqL2R0O1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHR9XHJcblx0XHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXNldFBvc2l0aW9uID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLlRkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9zZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoLyoqL25hbWUsIC8qKi92YWx1ZSkge1xyXG5cdFx0dmFyIHByb3BOYW1lID0gXCJfXCIuY29uY2F0KC8qKi9uYW1lKTtcclxuXHJcblx0XHRpZiAoLyoqL3ZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0aWYgKC8qKi92YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0Y3R4LlModGhpcy5vZFtpXVtwcm9wTmFtZV0sIC8qKi92YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0Y3R4LlQodGhpcy5vZFtpXVtwcm9wTmFtZV0sIC8qKi92YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0dGhpcy5vZFtpXVtwcm9wTmFtZV0gPSAvKiovdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcGF1c2VBbGxFbWl0dGVycyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3BhdXNlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VBbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHJcblx0XHRpZiAodGhpcy5fcHJlc2ltTmVlZGVkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3VwZGF0ZSh0aGlzLlVkLCB0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL2FyZUFsbEVtaXR0ZXJzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmICghdGhpcy5vZFtpXS5wYXVzZWQoKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi9wYXVzZUdlbmVyYXRvcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3VucGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL2FyZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmICghdGhpcy5vZFtpXS5nZW5lcmF0b3JzUGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL2dldE51bVBhcnRpY2xlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG51bVBhcnRpY2xlcyA9IDA7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdG51bVBhcnRpY2xlcyArPSB0aGlzLm9kW2ldLmdldE51bVBhcnRpY2xlcygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudW1QYXJ0aWNsZXM7XHJcblx0fVxyXG5cclxuXHJcblx0dmFyIGxlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCByZW5kZXJCdWZmZXIsIG9wdGlvbnMpIHtcclxuXHRcdFx0bGUucHJvdG90eXBlLl9pbml0LmNhbGwodGhpcywgd2UsIEFiLCBNYywgb2UsIG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0dGhpcy50ZXh0dXJlc1JlbWFwID0gW107XHJcblxyXG5cdFx0XHR2YXIgaW5kaWNlcyA9IFtdO1xyXG5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciB2ZXJEaXNwO1xyXG5cdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLi8qKi9tb2RlbC5YZTsgKytXYikge1xyXG5cdFx0XHRcdFx0dmVyRGlzcCA9IFdiICogNDtcclxuXHRcdFx0XHRcdGluZGljZXMucHVzaCh2ZXJEaXNwICsgMCwgdmVyRGlzcCArIDMsIHZlckRpc3AgKyAxLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDMsIHZlckRpc3AgKyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyID0gcmVuZGVyQnVmZmVyO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5pbml0aWFsaXplKHRoaXMuLyoqL21vZGVsLlhlICogNCwgWzJdLCBpbmRpY2VzLCB0aGlzLi8qKi9tb2RlbC5YZSk7XHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLl9fbnVtSW5kaWNlcyA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZS5wcm90b3R5cGUgPSBuZXcga2UoKTtcclxuXHJcblx0bGUucHJvdG90eXBlLi8qKi9maWxsR2VvbWV0cnlCdWZmZXJzID0gZnVuY3Rpb24gKC8qKi9jYW1lcmFSaWdodCwgLyoqL2NhbWVyYVVwLCAvKiovY2FtZXJhRGlyKSB7XHJcblx0XHR0aGlzLnJlbmRlckJ1ZmZlci5jbGVhbnVwKCk7XHJcblx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLm9kLmZvckVhY2goZnVuY3Rpb24gKEJkKSB7XHJcblx0XHRcdEJkLnVlKC8qKi9jYW1lcmFSaWdodCwgLyoqL2NhbWVyYVVwLCAvKiovY2FtZXJhRGlyLCB0aGlzLnJlbmRlckJ1ZmZlcik7XHJcblx0XHR9LCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbClcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIucHVzaFJlbmRlckNhbGwodGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCk7XHJcblx0fVxyXG5cclxuXHR2YXIgbWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIG9wdGlvbnMpIHtcclxuXHRcdFx0bWUucHJvdG90eXBlLl9pbml0LmNhbGwodGhpcywgd2UsIEFiLCBNYywgbmUsIG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0dGhpcy5tYXRlcmlhbHMgPSBbXTtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwubWF0ZXJpYWxzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdFx0dGhpcy5tYXRlcmlhbHMucHVzaChbJ3NvdXJjZS1vdmVyJywgJ2xpZ2h0ZXInLCAnbXVsdGlwbHknXVt2YWx1ZV0pO1xyXG5cdFx0XHR9LCB0aGlzKTtcclxuXHJcblx0XHRcdHRoaXMuLyoqL3RleHR1cmVEZXNjcyA9IFtdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bWUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdG1lLnByb3RvdHlwZS4vKiovZHJhdyA9IGZ1bmN0aW9uICgvKiovY29udGV4dCwgLyoqL2NhbWVyYSkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSGQoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5jcmVhdGVXR0xJbnN0YW5jZSA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL3JlbmRlckJ1ZmZlciwgLyoqL29wdGlvbnMpIHtcclxuXHRcdHZhciBMZCA9IG5ldyBsZSgpO1xyXG5cdFx0TGQuX2luaXQodGhpcywgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zIHx8IHt9KTtcclxuXHRcdHJldHVybiBMZDtcclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlQ2FudmFzMkRJbnN0YW5jZSA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMpIHtcclxuXHRcdHZhciBMZCA9IG5ldyBtZSgpO1xyXG5cdFx0TGQuX2luaXQodGhpcywgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zIHx8IHt9KTtcclxuXHRcdHJldHVybiBMZDtcclxuXHR9XHJcblx0dGhpcy50ZXh0dXJlcyA9IFsncGFydGljbGVfdGV4dHVyZS5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFswXTtcclxuXHR0aGlzLnJlbmRlclN0eWxlcyA9IFt7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlswXX1dO1xyXG5cdHRoaXMuWGUgPSAxMDA7XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIoKSB7XHJcblxyXG5cdFx0dmFyIF8xID0gW10sIF8zID0gW10sIF83ID0gW10sIF84PVtdLCBfOGZzPVtdLCBfOHZzPVtdLCBfOHJ3PVtdLCBfOHJ3bj1bXSwgXzhyd2wsIF84dj1bXSwgXzhwPVtdLCBfOGR0bCwgXzhkdHAsIF84ZGYsIF84ZnNkPVtdLCBfMTAsIF85O1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzoxLFNjOjEscmVuZGVyU3R5bGVJbmRleDowfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIkRlZmF1bHRFbWl0dGVyXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLl9Db2xvciA9IFsxLDEsMV07XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMTA7XHJcblx0XHRcdHZkLkdiID0gMTtcclxuXHRcdFx0dmQuSmIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUGIgPSBmdW5jdGlvbihRYiwgQmQsIHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMTA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgXzEpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF8zLCAxMDAsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fNCwgXzMpO1xyXG5cdFx0XHRYYi5fNSA9IDA7XHJcblx0XHRcdFhiLl82ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl82LCBCZC5fQ29sb3IpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2QgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzEsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fMiA9IFtdO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIF8xKTtcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfMywgMTAwLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzQgPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzQsIF8zKTtcclxuXHRcdFx0WGIuXzUgPSAwO1xyXG5cdFx0XHRYYi5fNiA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fNiwgQmQuX0NvbG9yKTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fICs9IFFiO1xyXG5cdFx0XHRjdHguVyhfNywgMCwgMTAwLCAwKTtcclxuXHRcdFx0Y3R4LlQoXzhmcywgXzcpO1xyXG5cdFx0XHRjdHguVChfOHZzLCBbMCwwLDBdKTtcclxuXHRcdFx0Y3R4LnUoXzh2LCBfOGZzLCBRYik7XHJcblx0XHRcdGN0eC5jKF84diwgXzh2LCBYYi5fNCk7XHJcblx0XHRcdGN0eC51KF84cCwgXzh2LCBRYik7XHJcblx0XHRcdGN0eC5jKF84cCwgXzhwLCBYYi5fMik7XHJcblx0XHRcdGN0eC5UKFhiLl8yLCBfOHApO1xyXG5cdFx0XHRjdHguVChYYi5fNCwgXzh2KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdFx0XzEwID0gMzA7XHJcblx0XHRcdGN0eC5TKFhiLlBkLFswLjUsMC41XSk7XHJcblx0XHRcdFhiLk1kID0gWGIuXzU7XHJcblx0XHRcdGN0eC5WKFhiLk5kLF8xMCxfMTApO1xyXG5cdFx0XHRjdHguVChYYi5nZixYYi5fNik7XHJcblx0XHRcdFhiLk9kID0gMTtcclxuXHRcdFx0WGIuUWMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF85ID0gMjtcclxuXHRcdFx0aWYgKFhiLl8gPiBfOSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5xZCA9IGZ1bmN0aW9uKExkKSB7XHJcblx0XHRMZC5EZCA9IDAuMDMzMzMzMztcclxuXHRcdExkLlVkID0gMDtcclxuXHRcdExkLnJhbmQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCk7IH07XHJcblx0XHRMZC5wZChuZXcgRW1pdHRlcl9EZWZhdWx0RW1pdHRlcigpKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5yZXR1cm4gSGVhcnQ7XHJcbn0pKTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Rain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00106gQMVpJmqoLm+twhjVK', 'Rain');
// neutrinoparticles/exported_effects/Rain.js

"use strict";

// 55123900-93ea-44a7-87e3-8f9bc79a3f54
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Rain'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Rain'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Rain(ctx) {
    var Db = this;

    var ne = function ne(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;

      if (this.Bd.we.pe.length > 0) {
        this.we = this.Bd.we.pe[0];
        this.Lc = [ne.prototype.Ec, ne.prototype.Fc][this.we.xe];
      } else this.we = null;
    };

    ne.prototype = {
      Ec: function Ec(fe, Ab, Xb) {
        var Gc = ctx.ib(Xb.Md);
        var Hc = Math.cos(Gc);
        var Ic = Math.sin(Gc);
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * Hc, ye * Ic, ze * -Ic, ze * Hc, Ab[0], Ab[1]);
      },
      Fc: function Fc(fe, Ab, Xb) {
        var q = Xb.Mc;
        var z2 = 2.0 * q[2] * q[2];
        var xy = 2.0 * q[0] * q[1];
        var wz = 2.0 * q[3] * q[2];
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * (1.0 - 2.0 * q[1] * q[1] - z2), ye * (xy + wz), ze * (wz - xy), ze * (2.0 * q[0] * q[0] + z2 - 1.0), Ab[0], Ab[1]);
      },
      Pc: function Pc(fe, Xb, ge) {
        Xb.vc(fe, -1, ge);

        if (this.we) {
          if (this.Be != null && !Xb.oc) {
            if (Xb.Od > 0.001) {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Ab = Xb.Ab.slice();
              var Nd = Xb.Nd.slice();

              if (!ge || ge.
              /**/
              transform(Ab, Nd)) {
                var df = Math.abs(Nd[0]);
                var ef = Math.abs(Nd[1]);

                if (df > 0.001 && ef > 0.001) {
                  fe.save();
                  this.Lc(fe, Ab, Xb);
                  fe.translate(-df * Xb.Pd[0], -ef * (1 - Xb.Pd[1]));
                  fe.globalAlpha *= Xb.Od;

                  if (Xb.gf[0] < 0.999 || Xb.gf[1] < 0.999 || Xb.gf[2] < 0.999) {
                    if (df >= 1 && ef >= 1) {
                      var Ye = df < this.Tc ? df : this.Tc;
                      var Ze = ef < this.Uc ? ef : this.Uc;
                      ctx.af(Ye, Ze);
                      ctx.bf.globalCompositeOperation = "copy";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "multiply";
                      ctx.bf.fillStyle = ctx.ff(Xb.gf);
                      ctx.bf.fillRect(0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "destination-atop";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      fe.drawImage(ctx.cf, 0, 0, Ye, Ze, 0, 0, df, ef);
                    }
                  } else {
                    fe.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, df, ef);
                  }

                  fe.restore();
                }
              }
            }
          }
        }

        Xb.vc(fe, 1, ge);
      },
      Hd: function Hd(fe, ge) {
        fe.save();

        if (this.we) {
          fe.globalCompositeOperation = this.Ld.materials[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].materialIndex];
          this.Be = this.Ld.textureDescs[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];
        } else {
          this.Be = null;
        }

        if (this.Be) {
          this.Tc = this.Be.width / this.we.Rc;
          this.Uc = this.Be.height / this.we.Sc;
        }

        function kd(a, b) {
          if (a.Ab[2] > b.Ab[2]) return 1;
          if (a.Ab[2] < b.Ab[2]) return -1;
          return 0;
        }

        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 2:
            this.Bd.tc.sort(kd);

            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;
        }

        fe.restore();
      }
    };

    var oe = function oe(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;
      if (this.Bd.we.pe.length > 0) this.we = this.Bd.we.pe[0];else this.we = null;
      this.vertex = [{
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }];
    };

    oe.prototype = {
      qe: function qe(Xb, se, re, te, renderBuffer) {
        Xb.Ce(-1, se, re, te, renderBuffer);

        if (this.we) {
          if (!Xb.oc) {
            var v0 = this.vertex[0];
            var v1 = this.vertex[1];
            var v2 = this.vertex[2];
            var v3 = this.vertex[3];
            var Fe = [],
                Ge = [];

            if (this.we.xe == 0) {
              var a = ctx.ib(Xb.Md);
              var s = -Math.sin(a);
              var c = Math.cos(a);
              Fe[0] = se[0] * c + re[0] * s;
              Fe[1] = se[1] * c + re[1] * s;
              Fe[2] = se[2] * c + re[2] * s;
              Ge[0] = -se[0] * s + re[0] * c;
              Ge[1] = -se[1] * s + re[1] * c;
              Ge[2] = -se[2] * s + re[2] * c;
            } else {
              var q = Xb.Mc;
              var z2 = 2.0 * q[2] * q[2];
              var xy = 2.0 * q[0] * q[1];
              var wz = 2.0 * q[3] * q[2];
              Fe[0] = 1.0 - 2.0 * q[1] * q[1] - z2;
              Fe[1] = xy + wz;
              Fe[2] = 2.0 * q[0] * q[2] - 2.0 * q[3] * q[1];
              Ge[0] = xy - wz;
              Ge[1] = 1.0 - 2.0 * q[0] * q[0] - z2;
              Ge[2] = 2.0 * q[1] * q[2] + 2.0 * q[3] * q[0];
            }

            var He = [],
                Ie = [],
                Je = [],
                Ke = [];
            ctx.u(He, Fe, -Xb.Nd[0] * Xb.Pd[0]);
            ctx.u(Ie, Fe, Xb.Nd[0] * (1.0 - Xb.Pd[0]));
            ctx.u(Je, Ge, -Xb.Nd[1] * Xb.Pd[1]);
            ctx.u(Ke, Ge, Xb.Nd[1] * (1.0 - Xb.Pd[1]));
            ctx.c(v0.
            /**/
            position, He, Je);
            ctx.c(v0.
            /**/
            position, v0.
            /**/
            position, Xb.Ab);
            ctx.c(v1.
            /**/
            position, He, Ke);
            ctx.c(v1.
            /**/
            position, v1.
            /**/
            position, Xb.Ab);
            ctx.c(v2.
            /**/
            position, Ie, Ke);
            ctx.c(v2.
            /**/
            position, v2.
            /**/
            position, Xb.Ab);
            ctx.c(v3.
            /**/
            position, Ie, Je);
            ctx.c(v3.
            /**/
            position, v3.
            /**/
            position, Xb.Ab);
            {
              var rgb = ctx.v(Xb.gf, 255);
              v0.
              /**/
              color = v1.
              /**/
              color = v2.
              /**/
              color = v3.
              /**/
              color = [rgb[0], rgb[1], rgb[2], Xb.Od * 255];
            }
            {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Pe, Qe, Re, Se;
              var We = this.Ld.texturesRemap[this.Ld.
              /**/
              model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];

              if (We) {
                var Ue = We.width / this.we.Rc;
                var Ve = We.height / this.we.Sc;
                var Pe = We.x + De * Ue;
                var Qe = Pe + Ue;
                var Re = We.y + We.height - Ee * Ve;
                var Se = Re - Ve;
              } else {
                var Ue = 1.0 / this.we.Rc;
                var Ve = 1.0 / this.we.Sc;
                var Pe = De * Ue;
                var Qe = Pe + Ue;
                var Re = 1.0 - Ee * Ve;
                var Se = Re - Ve;
              }

              v0.
              /**/
              texCoords[0] = [Pe, Se];
              v1.
              /**/
              texCoords[0] = [Pe, Re];
              v2.
              /**/
              texCoords[0] = [Qe, Re];
              v3.
              /**/
              texCoords[0] = [Qe, Se];
            }

            if (renderBuffer.beforeQuad) {
              renderBuffer.beforeQuad(this.we.renderStyleIndex);
            }

            renderBuffer.pushVertex(v0);
            renderBuffer.pushVertex(v1);
            renderBuffer.pushVertex(v2);
            renderBuffer.pushVertex(v3);

            if (!renderBuffer.__lastRenderCall) {
              renderBuffer.__lastRenderCall = new ctx.RenderCall(0, 6, this.we.renderStyleIndex);
            } else {
              var lastRenderCall = renderBuffer.__lastRenderCall;

              if (lastRenderCall.renderStyleIndex == this.we.renderStyleIndex) {
                lastRenderCall.numIndices += 6;
              } else {
                renderBuffer.pushRenderCall(lastRenderCall);
                renderBuffer.__lastRenderCall = new ctx.RenderCall(lastRenderCall.startIndex + lastRenderCall.numIndices, 6, this.we.renderStyleIndex);
              }
            }
          }
        }

        Xb.Ce(1, se, re, te, renderBuffer);
      },
      ue: function ue(se, re, te, renderBuffer) {
        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 2:
            this.Bd.tc.forEach(function (Xb) {
              Xb.depth = ctx.H(te, Xb.Ab);
            });
            this.Bd.tc.sort(function (a, b) {
              if (a.depth < b.depth) return 1;
              if (a.depth > b.depth) return -1;
              return 0;
            });
            this.Bd.tc.forEach(function (Xb) {
              this.qe(Xb, se, re, te, renderBuffer);
            }, this);
            break;
        }
      }
    };

    var ld = function ld(Ld, we, ve) {
      var Vb = this;
      this.Ld = Ld;
      this.we = we; // Eb

      function Eb() {
        this.Fb = 0;
        this.Gb = 1;
        this.Hb = null;
        this.Ib = null;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.Ob = this.Gb;
          this.Fb = 0;
        };

        this.Nb();
      }

      Eb.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var Rb = Vb.Rb;
          var systemTime = Ld.Rb;
          var Sb = Qb;
          var ic = 0;

          if (this.zb > 0.000001) {
            var Tb = this.Ob + Qb * this.zb;

            while (Tb >= 1.0) {
              var Ub = this.zb < 0.001 ? 0.0 : (1.0 - this.Ob) / this.zb;
              Sb -= Ub;
              Rb += Ub;
              systemTime += Ub;

              if (this.Hb != null && Rb > this.Hb) {
                Vb.disactivate();
                break;
              }

              Vb.Rb = Rb;
              Ld.Rb = systemTime;
              if (Ab && Qb > 0) ctx.ab(Vb.Ab, Ab, Vb.Bb, Sb / Qb);
              if (Mc && Qb > 0) ctx.slerpq(Vb.Mc, Mc, Vb.prevRotation, Sb / Qb); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Sb);
                ++ic;
              }

              this.Ob = 0.0;
              Tb -= 1.0;

              if (this.Ib != null && ++this.Fb >= this.Ib) {
                Vb.disactivate();
                break;
              }
            }

            this.Ob = Tb;
          }

          Rb += Sb;
          Vb.Rb = Rb;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // ac

      function ac() {
        this.Gb = 1;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.bc = this.Gb;
        };

        this.Nb();
      }

      ac.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var cc = Vb.Rb;
          var dc = cc + Qb;
          var systemTimeBeforeFrame = Ld.Rb;
          var systemTimeAfterFrame = systemTimeBeforeFrame + Qb;
          var ec = Ab ? ctx.O(ctx.h(Ab, Vb.Bb)) : 0;
          var ic = 0;

          if (ec > 0.000001) {
            var fc = ec / this.rd;
            var Tb = this.bc + fc;
            var hc = fc < 0.001 ? 1.0 - this.bc : (1.0 - this.bc) / fc;
            var jc = [];

            while (Tb > 1.0) {
              var kc = cc + hc * Qb;
              if (Ab) ctx.ab(jc, Vb.Bb, Ab, hc);
              Vb.Rb = kc;
              ctx.T(Vb.Ab, jc);
              Ld.Rb = ctx.X(systemTimeBeforeFrame, systemTimeAfterFrame, hc); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Qb * (1.0 - hc));
                ++ic;
              }

              hc += 1.0 / fc;
              Tb -= 1.0;
            }

            this.bc = Tb;
          }

          Vb.Rb = dc;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // mc

      function mc() {
        this.Ab = [];
        this.Pd = [];
        this.Nd = [];
        this.gf = [];
        this.Kc = [];
      }

      mc.prototype = {
        nc: function nc() {
          this.oc = false;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            pc.Bd.Jd(this.Ab, null);
            if (pc.Ad.sd) pc.Bd.disactivate();
          }
        },
        Yb: function Yb() {
          Vb.we.fd(Vb, this); // IMPL

          this.nc();
        },
        Zb: function Zb() {
          Vb.we.gd(Vb, this); // IMPL

          this.nc();
        },
        Id: function Id(Qb) {
          Vb.we.qc(Qb, Vb, this); // IMPL

          this.rc(Qb);
        },
        pc: function pc(je) {
          return this.Kc[je].Bd;
        },
        rc: function rc(Qb) {
          for (var i = 0; i < this.Kc.length; i++) {
            this.Kc[i].Bd.Id(Qb, this.Ab, null);
          }
        },
        uc: function uc(md, nd) {
          this.Kc.push({
            Bd: new ld(Ld, md, ve),
            Ad: nd
          });
        },
        vc: function vc(fe, xc, ge) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.Hd(fe, ge);
          }
        },
        Ce: function Ce(xc, se, re, te, renderBuffer) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.ue(se, re, te, renderBuffer);
          }
        },
        wc: function wc(fe) {
          this.oc = true;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];

            if (pc.Ad.sd) {
              pc.Bd.activate();
              pc.Bd.Id(0);
            } else pc.Bd.disactivate();
          }
        },
        yc: function yc(Gd) {
          for (var i = 0; i < this.Kc.length; ++i) {
            this.Kc[i].Bd.Ed(Gd);
          }
        }
      }; // zc

      function zc() {}

      zc.prototype.Ac = function (Xb) {
        return Vb.we.Cc(Vb, Xb, this); // IMPL
      }; // ld Ad


      this.Ab = [];
      this.Bb = [];
      this.Mc = [];
      this.prevRotation = [];
      this.tc = [];
      this.sc = [];
      this.Wc = new zc();
      this.construct = new ve(this.Ld, this);
      this.Yc = [];
      this.ad = [];

      this.dd = function () {
        this.vd = new Eb();
      };

      this.ed = function () {
        this.vd = new ac();
      };

      this.we.ud(this); // IMPL

      for (var Wb = 0; Wb < this.jd; ++Wb) {
        var Xb = new mc();

        for (var id = 0; id < this.Yc.length; ++id) {
          var hd = this.Yc[id];
          Xb.uc(hd.Db, hd.Ad);
        }

        this.sc.push(Xb);
      }

      this.Nb = function (Ab, Mc) {
        ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
        ctx.T(this.Bb, this.Ab);
        ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        ctx.U(this.prevRotation, this.Mc);
        this.Rb = 0.0;
        this.wd = 0.0;
        this.Zc = true;
        this.paused_ = false;
        this.generatorsPaused_ = false;
        ctx.W(this.ad, 0, 0, 0);
      };
    };

    ld.prototype.Jd = function (Ab, Mc) {
      this.Nb(Ab, Mc);
      this.sc.push.apply(this.sc, this.tc);
      this.tc.length = 0;
      this.vd.Jd();
    };

    ld.prototype.Id = function (Qb, Ab, Mc) {
      if (this.paused_) {
        this.Td(Ab, Mc);
        return;
      }

      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);

        if (Qb > 0.0001) {
          var shift = [];
          ctx.g(shift, Ab, this.Bb);
          ctx.T(this.ad, shift);
          ctx.w(this.ad, this.ad, Qb);
        } else {
          ctx.W(this.ad, 0, 0, 0);
        }
      } else {
        ctx.W(this.ad, 0, 0, 0);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
      }

      var ic;

      if (this.Zc && !this.generatorsPaused_) {
        ic = this.vd.Id(Qb, Ab, Mc);
      } else {
        if (Ab) ctx.T(this.Ab, Ab);
        if (Mc) ctx.U(this.Mc, Mc);
        ic = 0;
        this.Rb += Qb;
      }

      for (var Wb = ic; Wb < this.tc.length;) {
        var Xb = this.tc[Wb];

        if (!Xb.oc) {
          Xb.Id(Qb);

          if (this.Wc.Ac(this.tc[Wb])) {
            Xb.wc();
            if (this.xd(Wb)) continue;
          }
        } else {
          Xb.rc(Qb);
          if (this.xd(Wb)) continue;
        }

        ++Wb;
      }
    };

    ld.prototype.xd = function (je) {
      var Xb = this.tc[je];
      var ready = true;

      for (var id = 0; id < Xb.Kc.length; ++id) {
        var Bd = Xb.Kc[id].Bd;

        if (Bd.activated() || Bd.tc.length > 0) {
          ready = false;
          break;
        }
      }

      if (ready) {
        this.sc.push(this.tc[je]);
        this.tc.splice(je, 1);
        return true;
      }

      return false;
    };

    ld.prototype.Hd = function (fe, ge) {
      this.construct.Hd(fe, ge);
    };

    ld.prototype.ue = function (se, re, te, renderBuffer) {
      this.construct.ue(se, re, te, renderBuffer);
    };

    ld.prototype.Td = function (Ab, Mc) {
      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);
        ctx.T(this.Ab, Ab);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
        ctx.U(this.Mc, Mc);
      }
    };

    ld.prototype.uc = function (md, nd) {
      this.Yc.push({
        Db: md,
        Ad: nd
      });
    };

    ld.prototype.
    /**/
    pause = function () {
      this.paused_ = true;
    };

    ld.prototype.
    /**/
    unpause = function () {
      this.paused_ = false;
    };

    ld.prototype.
    /**/
    paused = function () {
      return this.paused_;
    };

    ld.prototype.
    /**/
    pauseGenerators = function () {
      this.generatorsPaused_ = true;
    };

    ld.prototype.
    /**/
    unpauseGenerators = function () {
      this.generatorsPaused_ = false;
    };

    ld.prototype.
    /**/
    generatorsPaused = function () {
      return this.generatorsPaused_;
    };

    ld.prototype.activate = function () {
      this.Zc = true;
    };

    ld.prototype.disactivate = function () {
      this.Zc = false;
    };

    ld.prototype.activated = function () {
      return this.Zc;
    };

    ld.prototype.
    /**/
    getNumParticles = function () {
      return this.tc.length;
    };

    var ke = function ke() {
      var Cb = this;

      this._init = function (we, Ab, Mc, ve, options) {
        this.
        /**/
        model = we;
        this.Ab = [];
        this.Mc = []; // ke Ad

        this.od = [];

        this.pd = function (md) {
          var Bd = new ld(this, md, ve);
          Bd.Nb(this.Ab, this.Mc);
          this["_".concat(md.name)] = Bd;
          this.od.push(Bd);
        };

        this.Nb = function (Ab, Mc) {
          this.Cd = 0.0;
          this.Rb = 0.0;
          ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
          ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        };

        this.Nb(Ab, Mc);
        this.
        /**/
        model.qd(this); // IMPL

        this._presimNeeded = true;

        if (options.generatorsPaused) {
          this.
          /**/
          pauseGeneratorsInAllEmitters();
        }

        if (options.paused) {
          this.
          /**/
          pauseAllEmitters();
        } else {
          this.zeroUpdate();
          this.
          /**/
          update(this.Ud, Ab, Mc);
          this._presimNeeded = false;
        }
      };
    };

    ke.prototype.
    /**/
    restart = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      this.Nb(
      /**/
      position ?
      /**/
      position : this.Ab,
      /**/
      rotation ?
      /**/
      rotation : this.Mc);
      this._presimNeeded = true;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Jd(this.Ab, this.Mc);
      }

      this._presimNeeded = true;

      if (options && options.generatorsPaused) {
        this.
        /**/
        pauseGeneratorsInAllEmitters();
      }

      if (options && options.paused) {
        this.
        /**/
        pauseAllEmitters();
      } else {
        this.zeroUpdate();
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
        this._presimNeeded = false;
      }
    };

    ke.prototype.zeroUpdate = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(0, this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    update = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      if (this.Dd > 0.0) this.updateFixed(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation);else this.updateFlex(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation);
    };

    ke.prototype.updateFixed = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      var updatedTime = 0.0;
      var hc = [];
      ctx.T(hc, this.Ab);
      var frameRotation = [];
      ctx.U(frameRotation, this.Mc);
      if (
      /**/
      position && ctx.equalv3_(
      /**/
      position, this.Ab))
        /**/
        position = null;
      if (
      /**/
      rotation && ctx.equalq_(
      /**/
      rotation, this.Mc))
        /**/
        rotation = null;

      while (
      /**/
      dt - updatedTime + this.Cd >= this.Dd) {
        var cc = this.Rb;
        if (
        /**/
        position) ctx.ab(hc, this.Ab,
        /**/
        position, updatedTime /
        /**/
        dt);
        if (
        /**/
        rotation) ctx.slerpq(frameRotation, this.Mc,
        /**/
        rotation, updatedTime /
        /**/
        dt);

        for (var i = 0; i < this.od.length; ++i) {
          this.od[i].Id(this.Dd, hc, frameRotation);
          this.Rb = cc;
        }

        updatedTime += this.Dd - this.Cd;
        this.Cd = 0.0;
        this.Rb = cc + this.Dd;
      }

      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
      this.Cd +=
      /**/
      dt - updatedTime;
    };

    ke.prototype.updateFlex = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      var cc = this.Rb;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(
        /**/
        dt,
        /**/
        position,
        /**/
        rotation);
        this.Rb = cc;
      }

      this.Rb = cc +
      /**/
      dt;
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
    };

    ke.prototype.
    /**/
    resetPosition = function (
    /**/
    position,
    /**/
    rotation) {
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Td(this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    setPropertyInAllEmitters = function (
    /**/
    name,
    /**/
    value) {
      var propName = "_".concat(
      /**/
      name);

      if (
      /**/
      value instanceof Array) {
        if (
        /**/
        value.length == 2) {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.S(this.od[i][propName],
            /**/
            value);
          }
        } else {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.T(this.od[i][propName],
            /**/
            value);
          }
        }
      } else {
        for (var i = 0; i < this.od.length; ++i) {
          this.od[i][propName] =
          /**/
          value;
        }
      }
    };

    ke.prototype.
    /**/
    pauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pause();
      }
    };

    ke.prototype.
    /**/
    unpauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpause();
      }

      this.zeroUpdate();

      if (this._presimNeeded) {
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
        this._presimNeeded = false;
      }
    };

    ke.prototype.
    /**/
    areAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].paused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    pauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pauseGenerators();
      }
    };

    ke.prototype.
    /**/
    unpauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpauseGenerators();
      }
    };

    ke.prototype.
    /**/
    areGeneratorsInAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].generatorsPaused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    getNumParticles = function () {
      var numParticles = 0;

      for (var i = 0; i < this.od.length; ++i) {
        numParticles += this.od[i].getNumParticles();
      }

      return numParticles;
    };

    var le = function le() {
      this._init = function (we, Ab, Mc, renderBuffer, options) {
        le.prototype._init.call(this, we, Ab, Mc, oe, options);

        this.texturesRemap = [];
        var indices = [];
        {
          var verDisp;

          for (var Wb = 0; Wb < this.
          /**/
          model.Xe; ++Wb) {
            verDisp = Wb * 4;
            indices.push(verDisp + 0, verDisp + 3, verDisp + 1, verDisp + 1, verDisp + 3, verDisp + 2);
          }
        }
        this.renderBuffer = renderBuffer;
        this.renderBuffer.initialize(this.
        /**/
        model.Xe * 4, [2], indices, this.
        /**/
        model.Xe);
        this.renderBuffer.__numIndices = 0;
      };
    };

    le.prototype = new ke();

    le.prototype.
    /**/
    fillGeometryBuffers = function (
    /**/
    cameraRight,
    /**/
    cameraUp,
    /**/
    cameraDir) {
      this.renderBuffer.cleanup();
      this.renderBuffer.__lastRenderCall = null;
      this.od.forEach(function (Bd) {
        Bd.ue(
        /**/
        cameraRight,
        /**/
        cameraUp,
        /**/
        cameraDir, this.renderBuffer);
      }, this);
      if (this.renderBuffer.__lastRenderCall) this.renderBuffer.pushRenderCall(this.renderBuffer.__lastRenderCall);
    };

    var me = function me() {
      this._init = function (we, Ab, Mc, options) {
        me.prototype._init.call(this, we, Ab, Mc, ne, options);

        this.materials = [];
        this.
        /**/
        model.materials.forEach(function (value) {
          this.materials.push(['source-over', 'lighter', 'multiply'][value]);
        }, this);
        this.
        /**/
        textureDescs = [];
      };
    };

    me.prototype = new ke();

    me.prototype.
    /**/
    draw = function (
    /**/
    context,
    /**/
    camera) {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Hd(
        /**/
        context,
        /**/
        camera);
      }
    };

    this.createWGLInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    renderBuffer,
    /**/
    options) {
      var Ld = new le();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      renderBuffer,
      /**/
      options || {});

      return Ld;
    };

    this.createCanvas2DInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      var Ld = new me();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      options || {});

      return Ld;
    };

    this.textures = ['raindrops.png'];
    this.materials = [0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 2001;

    function Emitter_Splash() {
      var _1 = [],
          _4,
          _7,
          _6,
          _8,
          _9,
          _9i0,
          _9s0 = [],
          _10;

      this.pe = [{
        xe: 0,
        Rc: 4,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "Splash";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._9 = [[[0, 1, 1], [1, 0.992551, 0.975525, 0.950994, 0.920057, 0.883294, 0.84095, 0.793007, 0.739204, 0.678995, 0.611449, 0.535032, 0.447117, 0.342717, 0.210135, 0, 0]]];
        Bd.jd = 1;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 5;
        vd.Gb = 1;
        vd.Jb = 1;
        vd.Ib = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 5;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        Xb._3 = 0;
        _4 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._5 = _4;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        Xb._3 = 0;
        _4 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._5 = _4;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(Xb.Ab, Xb._2);
        _7 = 30;
        _6 = 0.15;
        _8 = Xb._ / _6;
        _9i0 = _8 < 0 ? 0 : _8 > 1 ? 1 : _8;
        _9i0 < 0.1 ? ctx.V(_9s0, 0, (_9i0 - 0) * 10) : ctx.V(_9s0, 1, (_9i0 - 0.1) * 16.6667);
        _9 = Db.nb(Bd._9[0][_9s0[0]], _9s0[1]);
        _10 = _7 * _9;
        ctx.S(Xb.Pd, [0.5, 0.3]);
        Xb.Md = Xb._3;
        ctx.V(Xb.Nd, _10, _10);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = 0.3;
        Xb.Qc = Xb._5 < 0 ? 0 : Xb._5 >= 4 ? 3 : Xb._5;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _6 = 0.15;
        if (Xb._ > _6) return true;
        return false;
      };
    }

    function Emitter_Drop() {
      var _1,
          _2 = [],
          _2i,
          _2s = [],
          _3 = [],
          _3i,
          _3s = [],
          _4,
          _5 = [],
          _6 = [],
          _8,
          _9 = [],
          _9i,
          _9s = [],
          _10 = [],
          _12,
          _14 = [],
          _15 = [],
          _15x = [],
          _15y = [],
          _15z = [],
          _16 = [],
          _17;

      this.pe = [{
        xe: 1,
        Rc: 4,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "Drop";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._2 = [[[1.60001, 0.639999], [800.36, 2.52], [800.36, 2.52]]];
        Bd._3 = [[[2.71999, -51.2], [801.92, -49.6], [801.92, -49.6]]];
        Bd._9 = [[[143.912, 1001.9], [-149.088, 998.904], [-149.088, 998.904]]];
        Bd.uc(new Emitter_Splash(), {
          xc: 1,
          sd: true
        });
        Bd.jd = 1000;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 900;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 900;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i = Db.kb(_1);
        ctx.V(_2s, 0, (_2i - 0) * 1);
        Db.lb(_2, Bd._2[_2s[0]], _2s[1]);
        _3i = Db.kb(_1);
        ctx.V(_3s, 0, (_3i - 0) * 1);
        Db.lb(_3, Bd._3[_3s[0]], _3s[1]);
        _4 = 0 + Bd.Ld.rand() * (1 - 0);
        ctx.Y(_5, _2, _3, _4);
        ctx.W(_6, _5[0], _5[1], 0);
        Xb._7 = [];
        ctx.rb(Xb._7, _6, Bd.Mc);
        ctx.c(Xb._7, Bd.Ab, Xb._7);
        _8 = 0 + Bd.Ld.rand() * (1 - 0);
        _9i = Db.kb(_8);
        ctx.V(_9s, 0, (_9i - 0) * 1);
        Db.lb(_9, Bd._9[_9s[0]], _9s[1]);
        ctx.W(_10, _9[0], _9[1], 0);
        Xb._11 = [];
        ctx.rb(Xb._11, _10, Bd.Mc);
        ctx.c(Xb._11, Bd.ad, Xb._11);
        _12 = 0.45 + Bd.Ld.rand() * (0.6 - 0.45);
        Xb._13 = _12;
        ctx.T(Xb.Ab, Xb._7);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i = Db.kb(_1);
        ctx.V(_2s, 0, (_2i - 0) * 1);
        Db.lb(_2, Bd._2[_2s[0]], _2s[1]);
        _3i = Db.kb(_1);
        ctx.V(_3s, 0, (_3i - 0) * 1);
        Db.lb(_3, Bd._3[_3s[0]], _3s[1]);
        _4 = 0 + Bd.Ld.rand() * (1 - 0);
        ctx.Y(_5, _2, _3, _4);
        ctx.W(_6, _5[0], _5[1], 0);
        Xb._7 = [];
        ctx.rb(Xb._7, _6, Bd.Mc);
        ctx.c(Xb._7, Bd.Ab, Xb._7);
        _8 = 0 + Bd.Ld.rand() * (1 - 0);
        _9i = Db.kb(_8);
        ctx.V(_9s, 0, (_9i - 0) * 1);
        Db.lb(_9, Bd._9[_9s[0]], _9s[1]);
        ctx.W(_10, _9[0], _9[1], 0);
        Xb._11 = [];
        ctx.rb(Xb._11, _10, Bd.Mc);
        ctx.c(Xb._11, Bd.ad, Xb._11);
        _12 = 0.45 + Bd.Ld.rand() * (0.6 - 0.45);
        Xb._13 = _12;
        ctx.T(Xb.Ab, Xb._7);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(_14, Xb._11);
        ctx.u(_14, _14, Qb);
        ctx.c(_14, _14, Xb._7);
        ctx.T(Xb._7, _14);
        ctx.T(Xb.Ab, Xb._7);
        ctx.Q(_15z, [0, 0, 1]);
        ctx.I(_15y, _15z, Xb._11);
        ctx.Q(_15y, _15y);
        ctx.I(_15x, _15y, _15z);
        ctx.pb(_15, _15x, _15y, _15z);
        ctx.V(_16, 80, 15);
        _17 = 0;
        ctx.S(Xb.Pd, [1, 0.5]);
        ctx.U(Xb.Mc, _15);
        ctx.S(Xb.Nd, _16);
        ctx.T(Xb.gf, [0, 1, 1]);
        Xb.Od = 0.3;
        Xb.Qc = _17 < 0 ? 0 : _17 >= 4 ? 3 : _17;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._13) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 0;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_Splash());
      Ld.pd(new Emitter_Drop());
    };

    this.kb = function (v) {
      return v < 0 ? 0 : v > 1 ? 1 : v;
    };

    this.lb = function (r, path, je) {
      var indexInt = Math.floor(je);
      var lerp = je - indexInt;
      ctx.Y(r, path[indexInt], path[indexInt + 1], lerp);
    };

    this.nb = function (funcValues, je) {
      var indexInt = Math.floor(je);
      var nextInt = indexInt + 1;
      return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt);
    };
  }

  return Rain;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXFJhaW4uanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiTmV1dHJpbm9FZmZlY3QiLCJuYW1lc3BhY2UiLCJfX2xhc3RfXyIsInNlbGYiLCJSYWluIiwiY3R4IiwiRGIiLCJuZSIsIkxkIiwiQmQiLCJ3ZSIsInBlIiwibGVuZ3RoIiwiTGMiLCJwcm90b3R5cGUiLCJFYyIsIkZjIiwieGUiLCJmZSIsIkFiIiwiWGIiLCJHYyIsImliIiwiTWQiLCJIYyIsIk1hdGgiLCJjb3MiLCJJYyIsInNpbiIsInllIiwiQWUiLCJOZCIsInplIiwidHJhbnNmb3JtIiwicSIsIk1jIiwiejIiLCJ4eSIsInd6IiwiUGMiLCJnZSIsInZjIiwiQmUiLCJvYyIsIk9kIiwiRGUiLCJmbG9vciIsIlFjIiwiUmMiLCJFZSIsInNsaWNlIiwiZGYiLCJhYnMiLCJlZiIsInNhdmUiLCJ0cmFuc2xhdGUiLCJQZCIsImdsb2JhbEFscGhhIiwiZ2YiLCJZZSIsIlRjIiwiWmUiLCJVYyIsImFmIiwiYmYiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJkcmF3SW1hZ2UiLCJpbWFnZSIsIngiLCJ5IiwiZmlsbFN0eWxlIiwiZmYiLCJmaWxsUmVjdCIsImNmIiwicmVzdG9yZSIsIkhkIiwibWF0ZXJpYWxzIiwibW9kZWwiLCJyZW5kZXJTdHlsZXMiLCJyZW5kZXJTdHlsZUluZGV4IiwibWF0ZXJpYWxJbmRleCIsInRleHR1cmVEZXNjcyIsInRleHR1cmVJbmRpY2VzIiwid2lkdGgiLCJoZWlnaHQiLCJTYyIsImtkIiwiYSIsImIiLCJWYyIsIldiIiwidGMiLCJzb3J0Iiwib2UiLCJ2ZXJ0ZXgiLCJwb3NpdGlvbiIsImNvbG9yIiwidGV4Q29vcmRzIiwicWUiLCJzZSIsInJlIiwidGUiLCJyZW5kZXJCdWZmZXIiLCJDZSIsInYwIiwidjEiLCJ2MiIsInYzIiwiRmUiLCJHZSIsInMiLCJjIiwiSGUiLCJJZSIsIkplIiwiS2UiLCJ1IiwicmdiIiwidiIsIlBlIiwiUWUiLCJSZSIsIlNlIiwiV2UiLCJ0ZXh0dXJlc1JlbWFwIiwiVWUiLCJWZSIsImJlZm9yZVF1YWQiLCJwdXNoVmVydGV4IiwiX19sYXN0UmVuZGVyQ2FsbCIsIlJlbmRlckNhbGwiLCJsYXN0UmVuZGVyQ2FsbCIsIm51bUluZGljZXMiLCJwdXNoUmVuZGVyQ2FsbCIsInN0YXJ0SW5kZXgiLCJ1ZSIsImZvckVhY2giLCJkZXB0aCIsIkgiLCJsZCIsInZlIiwiVmIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiS2IiLCJMYiIsIk1iIiwiTmIiLCJPYiIsIkpkIiwiSWQiLCJRYiIsIlBiIiwiUmIiLCJzeXN0ZW1UaW1lIiwiU2IiLCJpYyIsInpiIiwiVGIiLCJVYiIsImRpc2FjdGl2YXRlIiwiYWIiLCJCYiIsInNsZXJwcSIsInByZXZSb3RhdGlvbiIsIkpiIiwic2MiLCJwb3AiLCJ1bnNoaWZ0IiwiWWIiLCJaYiIsIlQiLCJVIiwiYWMiLCJiYyIsImNjIiwiZGMiLCJzeXN0ZW1UaW1lQmVmb3JlRnJhbWUiLCJzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSIsImVjIiwiTyIsImgiLCJmYyIsInJkIiwiaGMiLCJqYyIsImtjIiwiWCIsIm1jIiwiS2MiLCJuYyIsImkiLCJwYyIsIkFkIiwic2QiLCJmZCIsImdkIiwicWMiLCJyYyIsImplIiwidWMiLCJtZCIsIm5kIiwicHVzaCIsInhjIiwid2MiLCJhY3RpdmF0ZSIsInljIiwiR2QiLCJFZCIsInpjIiwiQWMiLCJDYyIsIldjIiwiY29uc3RydWN0IiwiWWMiLCJhZCIsImRkIiwidmQiLCJlZCIsInVkIiwiamQiLCJpZCIsImhkIiwid2QiLCJaYyIsInBhdXNlZF8iLCJnZW5lcmF0b3JzUGF1c2VkXyIsIlciLCJhcHBseSIsIlRkIiwic2hpZnQiLCJnIiwidyIsInhkIiwicmVhZHkiLCJhY3RpdmF0ZWQiLCJzcGxpY2UiLCJwYXVzZSIsInVucGF1c2UiLCJwYXVzZWQiLCJwYXVzZUdlbmVyYXRvcnMiLCJ1bnBhdXNlR2VuZXJhdG9ycyIsImdlbmVyYXRvcnNQYXVzZWQiLCJnZXROdW1QYXJ0aWNsZXMiLCJrZSIsIkNiIiwiX2luaXQiLCJvcHRpb25zIiwib2QiLCJwZCIsImNvbmNhdCIsIm5hbWUiLCJDZCIsInFkIiwiX3ByZXNpbU5lZWRlZCIsInBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMiLCJwYXVzZUFsbEVtaXR0ZXJzIiwiemVyb1VwZGF0ZSIsInVwZGF0ZSIsIlVkIiwicmVzdGFydCIsInJvdGF0aW9uIiwiZHQiLCJEZCIsInVwZGF0ZUZpeGVkIiwidXBkYXRlRmxleCIsInVwZGF0ZWRUaW1lIiwiZnJhbWVSb3RhdGlvbiIsImVxdWFsdjNfIiwiZXF1YWxxXyIsInJlc2V0UG9zaXRpb24iLCJzZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMiLCJ2YWx1ZSIsInByb3BOYW1lIiwiQXJyYXkiLCJTIiwidW5wYXVzZUFsbEVtaXR0ZXJzIiwiYXJlQWxsRW1pdHRlcnNQYXVzZWQiLCJ1bnBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMiLCJhcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCIsIm51bVBhcnRpY2xlcyIsImxlIiwiY2FsbCIsImluZGljZXMiLCJ2ZXJEaXNwIiwiWGUiLCJpbml0aWFsaXplIiwiX19udW1JbmRpY2VzIiwiZmlsbEdlb21ldHJ5QnVmZmVycyIsImNhbWVyYVJpZ2h0IiwiY2FtZXJhVXAiLCJjYW1lcmFEaXIiLCJjbGVhbnVwIiwibWUiLCJkcmF3IiwiY29udGV4dCIsImNhbWVyYSIsImNyZWF0ZVdHTEluc3RhbmNlIiwiY3JlYXRlQ2FudmFzMkRJbnN0YW5jZSIsInRleHR1cmVzIiwiRW1pdHRlcl9TcGxhc2giLCJfMSIsIl80IiwiXzciLCJfNiIsIl84IiwiXzkiLCJfOWkwIiwiXzlzMCIsIl8xMCIsIl8iLCJfMiIsInJiIiwiXzMiLCJyYW5kIiwiXzUiLCJWIiwibmIiLCJFbWl0dGVyX0Ryb3AiLCJfMmkiLCJfMnMiLCJfM2kiLCJfM3MiLCJfOWkiLCJfOXMiLCJfMTIiLCJfMTQiLCJfMTUiLCJfMTV4IiwiXzE1eSIsIl8xNXoiLCJfMTYiLCJfMTciLCJrYiIsImxiIiwiWSIsIl8xMSIsIl8xMyIsIlEiLCJJIiwicGIiLCJyYW5kb20iLCJyIiwicGF0aCIsImluZGV4SW50IiwibGVycCIsImZ1bmNWYWx1ZXMiLCJuZXh0SW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0MsV0FBVUEsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBckQsRUFBa0U7QUFDOURBLElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkQsT0FBTyxFQUF4QjtBQUNILEdBRkQsTUFFTyxJQUFJLE9BQU9HLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBM0MsRUFBZ0Q7QUFDbkRELElBQUFBLE1BQU0sQ0FBQyxDQUFDLFNBQUQsQ0FBRCxFQUFjLFVBQVVGLE9BQVYsRUFBbUI7QUFDbkMsT0FBQ0YsSUFBSSxDQUFDTSxjQUFMLEdBQXNCSixPQUF2QixFQUFnQyxNQUFoQyxJQUEwQ0QsT0FBTyxFQUFqRDtBQUNILEtBRkssQ0FBTjtBQUdILEdBSk0sTUFJQTtBQUNILFFBQUlNLFNBQVMsR0FBSVAsSUFBSSxDQUFDTSxjQUFMLEtBQXdCTixJQUFJLENBQUNNLGNBQUwsR0FBc0IsRUFBOUMsQ0FBakI7QUFDQUMsSUFBQUEsU0FBUyxDQUFDQyxRQUFWLEdBQXFCRCxTQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CTixPQUFPLEVBQWhEO0FBQ0g7QUFDSixDQVhBLEVBV0MsT0FBT1EsSUFBUCxLQUFnQixXQUFoQixHQUE4QkEsSUFBOUIsU0FYRCxFQVc0QyxZQUFZO0FBRXpELFdBQVNDLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtBQUNsQixRQUFJQyxFQUFFLEdBQUcsSUFBVDs7QUFFQSxRQUFJ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QSxTQUFLNE4sRUFBTCxHQUFVLFVBQVVRLENBQVYsRUFBYUMsSUFBYixFQUFtQmpKLEVBQW5CLEVBQXVCO0FBQUssVUFBSWtKLFFBQVEsR0FBR25VLElBQUksQ0FBQ3FCLEtBQUwsQ0FBVzRKLEVBQVgsQ0FBZjtBQUFrQyxVQUFJbUosSUFBSSxHQUFHbkosRUFBRSxHQUFHa0osUUFBaEI7QUFBNkJ2VixNQUFBQSxHQUFHLENBQUM4VSxDQUFKLENBQU1PLENBQU4sRUFBU0MsSUFBSSxDQUFDQyxRQUFELENBQWIsRUFBeUJELElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQVosQ0FBN0IsRUFBNkNDLElBQTdDO0FBQXVELEtBQTVKOztBQUVBLFNBQUs1QixFQUFMLEdBQVUsVUFBUzZCLFVBQVQsRUFBcUJwSixFQUFyQixFQUF5QjtBQUFLLFVBQUlrSixRQUFRLEdBQUduVSxJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSXFKLE9BQU8sR0FBR0gsUUFBUSxHQUFHLENBQXpCO0FBQStCLGFBQU92VixHQUFHLENBQUN5TCxDQUFKLENBQU1nSyxVQUFVLENBQUNGLFFBQUQsQ0FBaEIsRUFBNEJFLFVBQVUsQ0FBQ0MsT0FBRCxDQUF0QyxFQUFpRHJKLEVBQUUsR0FBR2tKLFFBQXRELENBQVA7QUFBMkUsS0FBcEw7QUFHRDs7QUFFRCxTQUFPeFYsSUFBUDtBQUNDLENBbjNDQSxDQUFEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyA1NTEyMzkwMC05M2VhLTQ0YTctODdlMy04ZjliYzc5YTNmNTRcclxuXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgICAgICAgICAocm9vdC5OZXV0cmlub0VmZmVjdCA9IGV4cG9ydHMpWydSYWluJ10gPSBmYWN0b3J5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAocm9vdC5OZXV0cmlub0VmZmVjdCB8fCAocm9vdC5OZXV0cmlub0VmZmVjdCA9IHt9KSk7XHJcbiAgICAgICAgbmFtZXNwYWNlLl9fbGFzdF9fID0gbmFtZXNwYWNlWydSYWluJ10gPSBmYWN0b3J5KCk7XHJcbiAgICB9XHJcbn0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbmZ1bmN0aW9uIFJhaW4oY3R4KSB7XHJcblx0dmFyIERiID0gdGhpcztcclxuXHJcblx0dmFyIG5lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblxyXG5cdFx0XHR0aGlzLkxjID0gW25lLnByb3RvdHlwZS5FYyxcclxuXHRcdFx0XHRuZS5wcm90b3R5cGUuRmNdW3RoaXMud2UueGVdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdG5lLnByb3RvdHlwZSA9IHtcclxuXHRcdEVjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgR2MgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHR2YXIgSGMgPSBNYXRoLmNvcyhHYyk7XHJcblx0XHRcdHZhciBJYyA9IE1hdGguc2luKEdjKTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybSh5ZSAqIEhjLCB5ZSAqIEljLCB6ZSAqIC1JYywgemUgKiBIYywgQWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0RmM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oXHJcblx0XHRcdFx0eWUgKiAoMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MiksXHJcblx0XHRcdFx0eWUgKiAoeHkgKyB3eiksXHJcblx0XHRcdFx0emUgKiAod3ogLSB4eSksXHJcblx0XHRcdFx0emUgKiAoMi4wICogcVswXSAqIHFbMF0gKyB6MiAtIDEuMCksXHJcblx0XHRcdFx0QWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0UGM6IGZ1bmN0aW9uIChmZSwgWGIsIGdlKSB7XHJcblx0XHRcdFhiLnZjKGZlLCAtMSwgZ2UpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuQmUgIT0gbnVsbCAmJiAhWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoWGIuT2QgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBBYiA9IFhiLkFiLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBOZCA9IFhiLk5kLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdGlmICghZ2UgfHwgZ2UuLyoqL3RyYW5zZm9ybShBYiwgTmQpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBkZiA9IE1hdGguYWJzKE5kWzBdKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZWYgPSBNYXRoLmFicyhOZFsxXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkZiA+IDAuMDAxICYmIGVmID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLnNhdmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuTGMoZmUsIEFiLCBYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUudHJhbnNsYXRlKC1kZiAqIFhiLlBkWzBdLCAtZWYgKiAoMSAtIFhiLlBkWzFdKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5nbG9iYWxBbHBoYSAqPSBYYi5PZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoWGIuZ2ZbMF0gPCAwLjk5OSB8fCBYYi5nZlsxXSA8IDAuOTk5IHx8IFhiLmdmWzJdIDwgMC45OTkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRmID49IDEgJiYgZWYgPj0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBZZSA9IGRmIDwgdGhpcy5UYyA/IGRmIDogdGhpcy5UYztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWmUgPSBlZiA8IHRoaXMuVWMgPyBlZiA6IHRoaXMuVWM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5hZihZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJjb3B5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibXVsdGlwbHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFN0eWxlID0gY3R4LmZmKFhiLmdmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFJlY3QoMCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tYXRvcFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZShjdHguY2YsIDAsIDAsIFllLCBaZSwgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIudmMoZmUsIDEsIGdlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0SGQ6IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdFx0ZmUuc2F2ZSgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHRcdFx0XHRmZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB0aGlzLkxkLm1hdGVyaWFsc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS5tYXRlcmlhbEluZGV4XTtcclxuXHRcdFx0XHR0aGlzLkJlID0gdGhpcy5MZC50ZXh0dXJlRGVzY3NbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuQmUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5CZSkge1xyXG5cdFx0XHRcdHRoaXMuVGMgPSB0aGlzLkJlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHR0aGlzLlVjID0gdGhpcy5CZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBrZChhLCBiKSB7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPiBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPCBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGtkKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgb2UgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblxyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnZlcnRleCA9IFtcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9XTtcclxuXHR9XHJcblxyXG5cdG9lLnByb3RvdHlwZSA9IHtcclxuXHRcdHFlOiBmdW5jdGlvbiAoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRYYi5DZSgtMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICghWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgdjAgPSB0aGlzLnZlcnRleFswXTtcclxuXHRcdFx0XHRcdHZhciB2MSA9IHRoaXMudmVydGV4WzFdO1xyXG5cdFx0XHRcdFx0dmFyIHYyID0gdGhpcy52ZXJ0ZXhbMl07XHJcblx0XHRcdFx0XHR2YXIgdjMgPSB0aGlzLnZlcnRleFszXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgRmUgPSBbXSwgR2UgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy53ZS54ZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHZhciBhID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0XHRcdFx0dmFyIHMgPSAtTWF0aC5zaW4oYSk7XHJcblx0XHRcdFx0XHRcdHZhciBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IHNlWzBdICogYyArIHJlWzBdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSBzZVsxXSAqIGMgKyByZVsxXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gc2VbMl0gKiBjICsgcmVbMl0gKiBzO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSAtc2VbMF0gKiBzICsgcmVbMF0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IC1zZVsxXSAqIHMgKyByZVsxXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gLXNlWzJdICogcyArIHJlWzJdICogYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHRcdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0XHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdFx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSAxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHh5ICsgd3o7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gMi4wICogcVswXSAqIHFbMl0gLSAyLjAgKiBxWzNdICogcVsxXTtcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0geHkgLSB3ejtcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAxLjAgLSAyLjAgKiBxWzBdICogcVswXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IDIuMCAqIHFbMV0gKiBxWzJdICsgMi4wICogcVszXSAqIHFbMF07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIEhlID0gW10sIEllID0gW10sIEplID0gW10sIEtlID0gW107XHJcblx0XHRcdFx0XHRjdHgudShIZSwgRmUsIC1YYi5OZFswXSAqIFhiLlBkWzBdKTtcclxuXHRcdFx0XHRcdGN0eC51KEllLCBGZSwgWGIuTmRbMF0gKiAoMS4wIC0gWGIuUGRbMF0pKTtcclxuXHRcdFx0XHRcdGN0eC51KEplLCBHZSwgLVhiLk5kWzFdICogWGIuUGRbMV0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoS2UsIEdlLCBYYi5OZFsxXSAqICgxLjAgLSBYYi5QZFsxXSkpO1xyXG5cclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgSGUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgdjAuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIEhlLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIHYxLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCBJZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCB2Mi4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgSWUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgdjMuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgcmdiID0gY3R4LnYoWGIuZ2YsIDI1NSk7XHJcblx0XHRcdFx0XHRcdHYwLi8qKi9jb2xvciA9IHYxLi8qKi9jb2xvciA9IHYyLi8qKi9jb2xvciA9IHYzLi8qKi9jb2xvciA9IFtyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdLCBYYi5PZCAqIDI1NV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBQZSwgUWUsIFJlLCBTZTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBXZSA9IHRoaXMuTGQudGV4dHVyZXNSZW1hcFt0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdFx0XHRcdGlmIChXZSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IFdlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSBXZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBXZS54ICsgRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9IChXZS55ICsgV2UuaGVpZ2h0IC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSAxLjAgLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IDEuMCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoMS4wIC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0djAuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgU2VdO1xyXG5cdFx0XHRcdFx0XHR2MS4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYyLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djMuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgU2VdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCh0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYwKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYxKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYyKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIXJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKDAsIDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGFzdFJlbmRlckNhbGwgPSByZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsYXN0UmVuZGVyQ2FsbC5yZW5kZXJTdHlsZUluZGV4ID09IHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMgKz0gNjtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFJlbmRlckNhbGwobGFzdFJlbmRlckNhbGwpO1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwuc3RhcnRJbmRleCArIGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMsXHJcblx0XHRcdFx0XHRcdFx0XHQ2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi5DZSgxLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1ZTogZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdFhiLmRlcHRoID0gY3R4LkgodGUsIFhiLkFiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA8IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoID4gYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGxkID0gZnVuY3Rpb24gKExkLCB3ZSwgdmUpIHtcclxuXHRcdHZhciBWYiA9IHRoaXM7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLndlID0gd2U7XHJcblxyXG5cdFx0Ly8gRWJcclxuXHJcblx0XHRmdW5jdGlvbiBFYigpIHtcclxuXHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLkhiID0gbnVsbDtcclxuXHRcdFx0dGhpcy5JYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuT2IgPSB0aGlzLkdiO1xyXG5cdFx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RWIucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIFJiID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgU2IgPSBRYjtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy56YiA+IDAuMDAwMDAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5PYiArIFFiICogdGhpcy56YjtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPj0gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBVYiA9IHRoaXMuemIgPCAwLjAwMSA/IDAuMCA6ICgxLjAgLSB0aGlzLk9iKSAvIHRoaXMuemI7XHJcblx0XHRcdFx0XHRcdFNiIC09IFViO1xyXG5cdFx0XHRcdFx0XHRSYiArPSBVYjtcclxuXHRcdFx0XHRcdFx0c3lzdGVtVGltZSArPSBVYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkhiICE9IG51bGwgJiYgUmIgPiB0aGlzLkhiKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBzeXN0ZW1UaW1lO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoVmIuQWIsIEFiLCBWYi5CYiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoTWMgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5zbGVycHEoVmIuTWMsIE1jLCBWYi5wcmV2Um90YXRpb24sIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFNiKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLk9iID0gMC4wO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5JYiAhPSBudWxsICYmICsrdGhpcy5GYiA+PSB0aGlzLkliKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuT2IgPSBUYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0UmIgKz0gU2I7XHJcblx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWNcclxuXHJcblx0XHRmdW5jdGlvbiBhYygpIHtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuYmMgPSB0aGlzLkdiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIGNjID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIGRjID0gY2MgKyBRYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUJlZm9yZUZyYW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVBZnRlckZyYW1lID0gc3lzdGVtVGltZUJlZm9yZUZyYW1lICsgUWI7XHJcblx0XHRcdFx0dmFyIGVjID0gQWIgPyBjdHguTyhjdHguaChBYiwgVmIuQmIpKSA6IDA7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKGVjID4gMC4wMDAwMDEpIHtcclxuXHRcdFx0XHRcdHZhciBmYyA9IGVjIC8gdGhpcy5yZDtcclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuYmMgKyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgaGMgPSBmYyA8IDAuMDAxID9cclxuXHRcdFx0XHRcdFx0MS4wIC0gdGhpcy5iYyA6ICgxLjAgLSB0aGlzLmJjKSAvIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBqYyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIga2MgPSBjYyArIGhjICogUWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKGpjLCBWYi5CYiwgQWIsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0ga2M7XHJcblx0XHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBqYyk7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gY3R4Llgoc3lzdGVtVGltZUJlZm9yZUZyYW1lLCBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFFiICogKDEuMCAtIGhjKSk7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aGMgKz0gMS4wIC8gZmM7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLmJjID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRWYi5SYiA9IGRjO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtY1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1jKCkge1xyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuUGQgPSBbXTtcclxuXHRcdFx0dGhpcy5OZCA9IFtdO1xyXG5cdFx0XHR0aGlzLmdmID0gW107XHJcblx0XHRcdHRoaXMuS2MgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRtYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdG5jOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblx0XHRcdFx0XHRwYy5CZC5KZCh0aGlzLkFiLCBudWxsKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WWI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5mZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRaYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmdkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRWYi53ZS5xYyhRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHRoaXMucmMoUWIpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cGM6IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLktjW2plXS5CZDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJjOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuSWQoUWIsIHRoaXMuQWIsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVjOiBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHRcdFx0dGhpcy5LYy5wdXNoKHtcclxuXHRcdFx0XHRcdEJkOiBuZXcgbGQoTGQsIG1kLCB2ZSksXHJcblx0XHRcdFx0XHRBZDogbmRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHZjOiBmdW5jdGlvbiAoZmUsIHhjLCBnZSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLkhkKGZlLCBnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Q2U6IGZ1bmN0aW9uICh4Yywgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR3YzogZnVuY3Rpb24gKGZlKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IHRydWU7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZCkge1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5hY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5JZCgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR5YzogZnVuY3Rpb24gKEdkKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLkVkKEdkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB6Y1xyXG5cclxuXHRcdGZ1bmN0aW9uIHpjKCkge1xyXG5cdFx0fVxyXG5cclxuXHRcdHpjLnByb3RvdHlwZS5BYyA9IGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRyZXR1cm4gVmIud2UuQ2MoVmIsIFhiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxkIEFkXHJcblxyXG5cdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0dGhpcy5CYiA9IFtdO1xyXG5cdFx0dGhpcy5NYyA9IFtdO1xyXG5cdFx0dGhpcy5wcmV2Um90YXRpb24gPSBbXTtcclxuXHRcdHRoaXMudGMgPSBbXTtcclxuXHRcdHRoaXMuc2MgPSBbXTtcclxuXHRcdHRoaXMuV2MgPSBuZXcgemMoKTtcclxuXHRcdHRoaXMuY29uc3RydWN0ID0gbmV3IHZlKHRoaXMuTGQsIHRoaXMpO1xyXG5cdFx0dGhpcy5ZYyA9IFtdO1xyXG5cdFx0dGhpcy5hZCA9IFtdO1xyXG5cclxuXHRcdHRoaXMuZGQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgRWIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IGFjKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZS51ZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLmpkOyArK1diKSB7XHJcblx0XHRcdHZhciBYYiA9IG5ldyBtYygpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IHRoaXMuWWMubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdFx0dmFyIGhkID0gdGhpcy5ZY1tpZF07XHJcblx0XHRcdFx0WGIudWMoaGQuRGIsIGhkLkFkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zYy5wdXNoKFhiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0dGhpcy53ZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0XHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkpkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cclxuXHRcdHRoaXMuc2MucHVzaC5hcHBseSh0aGlzLnNjLCB0aGlzLnRjKTtcclxuXHRcdHRoaXMudGMubGVuZ3RoID0gMDtcclxuXHJcblx0XHR0aGlzLnZkLkpkKCk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSWQgPSBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdXNlZF8pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuVGQoQWIsIE1jKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0aWYgKFFiID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0dmFyIHNoaWZ0ID0gW107XHJcblx0XHRcdFx0Y3R4Lmcoc2hpZnQsIEFiLCB0aGlzLkJiKTtcclxuXHRcdFx0XHRjdHguVCh0aGlzLmFkLCBzaGlmdCk7XHJcblx0XHRcdFx0Y3R4LncodGhpcy5hZCwgdGhpcy5hZCwgUWIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGljO1xyXG5cclxuXHRcdGlmICh0aGlzLlpjICYmICF0aGlzLmdlbmVyYXRvcnNQYXVzZWRfKSB7XHJcblx0XHRcdGljID0gdGhpcy52ZC5JZChRYiwgQWIsIE1jKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cclxuXHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHJcblx0XHRcdGljID0gMDtcclxuXHRcdFx0dGhpcy5SYiArPSBRYjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IGljOyBXYiA8IHRoaXMudGMubGVuZ3RoOykge1xyXG5cdFx0XHR2YXIgWGIgPSB0aGlzLnRjW1diXTtcclxuXHJcblx0XHRcdGlmICghWGIub2MpIHtcclxuXHRcdFx0XHRYYi5JZChRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLldjLkFjKHRoaXMudGNbV2JdKSkge1xyXG5cdFx0XHRcdFx0WGIud2MoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRYYi5yYyhRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQrK1diO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGxkLnByb3RvdHlwZS54ZCA9IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0dmFyIFhiID0gdGhpcy50Y1tqZV07XHJcblxyXG5cdFx0dmFyIHJlYWR5ID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgWGIuS2MubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdHZhciBCZCA9IFhiLktjW2lkXS5CZDtcclxuXHJcblx0XHRcdGlmIChCZC5hY3RpdmF0ZWQoKSB8fCBCZC50Yy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0cmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChyZWFkeSkge1xyXG5cdFx0XHR0aGlzLnNjLnB1c2godGhpcy50Y1tqZV0pO1xyXG5cdFx0XHR0aGlzLnRjLnNwbGljZShqZSwgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5IZCA9IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LkhkKGZlLCBnZSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWUgPSBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLlRkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKSB7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVjID0gZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0dGhpcy5ZYy5wdXNoKHsgRGI6IG1kLCBBZDogbmQgfSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dlbmVyYXRvcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0b3JzUGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmRpc2FjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLlpjO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50Yy5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHR2YXIga2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgQ2IgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgdmUsIG9wdGlvbnMpIHtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwgPSB3ZTtcclxuXHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5NYyA9IFtdO1xyXG5cclxuXHRcdFx0Ly8ga2UgQWRcclxuXHJcblx0XHRcdHRoaXMub2QgPSBbXTtcclxuXHJcblx0XHRcdHRoaXMucGQgPSBmdW5jdGlvbiAobWQpIHtcclxuXHRcdFx0XHR2YXIgQmQgPSBuZXcgbGQodGhpcywgbWQsIHZlKTtcclxuXHRcdFx0XHRCZC5OYih0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdFx0XHR0aGlzW1wiX1wiLmNvbmNhdChtZC5uYW1lKV0gPSBCZDtcclxuXHRcdFx0XHR0aGlzLm9kLnB1c2goQmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0XHRcdHRoaXMuQ2QgPSAwLjA7XHJcblx0XHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5xZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmdlbmVyYXRvcnNQYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgQWIsIE1jKTtcclxuXHRcdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXN0YXJ0ID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cclxuXHRcdHRoaXMuTmIoLyoqL3Bvc2l0aW9uID8gLyoqL3Bvc2l0aW9uIDogdGhpcy5BYiwgLyoqL3JvdGF0aW9uID8gLyoqL3JvdGF0aW9uIDogdGhpcy5NYyk7XHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkpkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0dGhpcy4vKiovdXBkYXRlKHRoaXMuVWQsIHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS56ZXJvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoMCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VwZGF0ZSA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHRpZiAodGhpcy5EZCA+IDAuMClcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy51cGRhdGVGbGV4KC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZpeGVkID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdHZhciB1cGRhdGVkVGltZSA9IDAuMDtcclxuXHRcdHZhciBoYyA9IFtdO1xyXG5cdFx0Y3R4LlQoaGMsIHRoaXMuQWIpO1xyXG5cdFx0dmFyIGZyYW1lUm90YXRpb24gPSBbXTtcclxuXHRcdGN0eC5VKGZyYW1lUm90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24gJiYgY3R4LmVxdWFsdjNfKC8qKi9wb3NpdGlvbiwgdGhpcy5BYikpXHJcblx0XHRcdC8qKi9wb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbiAmJiBjdHguZXF1YWxxXygvKiovcm90YXRpb24sIHRoaXMuTWMpKVxyXG5cdFx0XHQvKiovcm90YXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHdoaWxlICgoLyoqL2R0IC0gdXBkYXRlZFRpbWUpICsgdGhpcy5DZCA+PSB0aGlzLkRkKSB7XHJcblx0XHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRcdGN0eC5hYihoYywgdGhpcy5BYiwgLyoqL3Bvc2l0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRcdGN0eC5zbGVycHEoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYywgLyoqL3JvdGF0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldLklkKHRoaXMuRGQsIGhjLCBmcmFtZVJvdGF0aW9uKTtcclxuXHJcblx0XHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVkVGltZSArPSB0aGlzLkRkIC0gdGhpcy5DZDtcclxuXHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5SYiA9IGNjICsgdGhpcy5EZDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0dGhpcy5DZCArPSAvKiovZHQgLSB1cGRhdGVkVGltZTtcclxuXHR9XHJcblx0XHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZsZXggPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUmIgPSBjYyArIC8qKi9kdDtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cdFxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5UZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKC8qKi9uYW1lLCAvKiovdmFsdWUpIHtcclxuXHRcdHZhciBwcm9wTmFtZSA9IFwiX1wiLmNvbmNhdCgvKiovbmFtZSk7XHJcblxyXG5cdFx0aWYgKC8qKi92YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGlmICgvKiovdmFsdWUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5TKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5UKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV1bcHJvcE5hbWVdID0gLyoqL3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi9wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3ByZXNpbU5lZWRlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVBbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0ucGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0uZ2VuZXJhdG9yc1BhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBudW1QYXJ0aWNsZXMgPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRudW1QYXJ0aWNsZXMgKz0gdGhpcy5vZFtpXS5nZXROdW1QYXJ0aWNsZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVtUGFydGljbGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdHZhciBsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgcmVuZGVyQnVmZmVyLCBvcHRpb25zKSB7XHJcblx0XHRcdGxlLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG9lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZXNSZW1hcCA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgdmVyRGlzcDtcclxuXHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy4vKiovbW9kZWwuWGU7ICsrV2IpIHtcclxuXHRcdFx0XHRcdHZlckRpc3AgPSBXYiAqIDQ7XHJcblx0XHRcdFx0XHRpbmRpY2VzLnB1c2godmVyRGlzcCArIDAsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlciA9IHJlbmRlckJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuaW5pdGlhbGl6ZSh0aGlzLi8qKi9tb2RlbC5YZSAqIDQsIFsyXSwgaW5kaWNlcywgdGhpcy4vKiovbW9kZWwuWGUpO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX251bUluZGljZXMgPSAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdGxlLnByb3RvdHlwZS4vKiovZmlsbEdlb21ldHJ5QnVmZmVycyA9IGZ1bmN0aW9uICgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpcikge1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuY2xlYW51cCgpO1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vZC5mb3JFYWNoKGZ1bmN0aW9uIChCZCkge1xyXG5cdFx0XHRCZC51ZSgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpciwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpO1xyXG5cdH1cclxuXHJcblx0dmFyIG1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCBvcHRpb25zKSB7XHJcblx0XHRcdG1lLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG5lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMubWF0ZXJpYWxzID0gW107XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLm1hdGVyaWFscy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goWydzb3VyY2Utb3ZlcicsICdsaWdodGVyJywgJ211bHRpcGx5J11bdmFsdWVdKTtcclxuXHRcdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0XHR0aGlzLi8qKi90ZXh0dXJlRGVzY3MgPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRtZS5wcm90b3R5cGUuLyoqL2RyYXcgPSBmdW5jdGlvbiAoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkhkKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlV0dMSW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbGUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZUNhbnZhczJESW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbWUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cdHRoaXMudGV4dHVyZXMgPSBbJ3JhaW5kcm9wcy5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFswXTtcclxuXHR0aGlzLnJlbmRlclN0eWxlcyA9IFt7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlswXX1dO1xyXG5cdHRoaXMuWGUgPSAyMDAxO1xyXG5cclxuXHRmdW5jdGlvbiBFbWl0dGVyX1NwbGFzaCgpIHtcclxuXHJcblx0XHR2YXIgXzEgPSBbXSwgXzQsIF83LCBfNiwgXzgsIF85LCBfOWkwLCBfOXMwID0gW10sIF8xMDtcclxuXHRcdHRoaXMucGUgPSBbe3hlOjAsUmM6NCxTYzoxLHJlbmRlclN0eWxlSW5kZXg6MH1dO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJTcGxhc2hcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuZGQoKTtcclxuXHRcdFx0QmQuXzkgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsMSwxXSxcclxuXHRcdFx0XHRcdFsxLDAuOTkyNTUxLDAuOTc1NTI1LDAuOTUwOTk0LDAuOTIwMDU3LDAuODgzMjk0LDAuODQwOTUsMC43OTMwMDcsMC43MzkyMDQsMC42Nzg5OTUsMC42MTE0NDksMC41MzUwMzIsMC40NDcxMTcsMC4zNDI3MTcsMC4yMTAxMzUsMCwwXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuamQgPSAxO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNTtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDE7XHJcblx0XHRcdHZkLkliID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fMiwgXzEsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzIsIEJkLkFiLCBYYi5fMik7XHJcblx0XHRcdFhiLl8zID0gMDtcclxuXHRcdFx0XzQgPSAxICsgQmQuTGQucmFuZCgpICogKDQgLSAxKTtcclxuXHRcdFx0WGIuXzUgPSBfNDtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8yLCBfMSwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIFhiLl8yKTtcclxuXHRcdFx0WGIuXzMgPSAwO1xyXG5cdFx0XHRfNCA9IDEgKyBCZC5MZC5yYW5kKCkgKiAoNCAtIDEpO1xyXG5cdFx0XHRYYi5fNSA9IF80O1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucWMgPSBmdW5jdGlvbihRYiwgQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gKz0gUWI7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHRcdF83ID0gMzA7XHJcblx0XHRcdF82ID0gMC4xNTtcclxuXHRcdFx0XzggPSAoWGIuXyAvIF82KTtcclxuXHRcdFx0XzlpMD0oXzg8MD8wOihfOD4xPzE6XzgpKTtcclxuXHRcdFx0XzlpMDwwLjE/Y3R4LlYoXzlzMCwwLChfOWkwLTApKjEwKTpjdHguVihfOXMwLDEsKF85aTAtMC4xKSoxNi42NjY3KTtcclxuXHRcdFx0XzkgPSBEYi5uYihCZC5fOVswXVtfOXMwWzBdXSxfOXMwWzFdKTtcclxuXHRcdFx0XzEwID0gKF83ICogXzkpO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuM10pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl8zO1xyXG5cdFx0XHRjdHguVihYYi5OZCxfMTAsXzEwKTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsWzEsMSwxXSk7XHJcblx0XHRcdFhiLk9kID0gMC4zO1xyXG5cdFx0XHRYYi5RYyA9IChYYi5fNSA8IDApID8gMCA6ICgoWGIuXzUgPj0gNCkgPyAzIDogWGIuXzUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF82ID0gMC4xNTtcclxuXHRcdFx0aWYgKFhiLl8gPiBfNikgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gRW1pdHRlcl9Ecm9wKCkge1xyXG5cclxuXHRcdHZhciBfMSwgXzIgPSBbXSwgXzJpLCBfMnMgPSBbXSwgXzMgPSBbXSwgXzNpLCBfM3MgPSBbXSwgXzQsIF81ID0gW10sIF82ID0gW10sIF84LCBfOSA9IFtdLCBfOWksIF85cyA9IFtdLCBfMTAgPSBbXSwgXzEyLCBfMTQ9W10sIF8xNT1bXSwgXzE1eD1bXSwgXzE1eT1bXSwgXzE1ej1bXSwgXzE2ID0gW10sIF8xNztcclxuXHRcdHRoaXMucGUgPSBbe3hlOjEsUmM6NCxTYzoxLHJlbmRlclN0eWxlSW5kZXg6MH1dO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJEcm9wXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl8yID0gW1xyXG5cdFx0XHRcdFtbMS42MDAwMSwwLjYzOTk5OV0sWzgwMC4zNiwyLjUyXSxbODAwLjM2LDIuNTJdXVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMyA9IFtcclxuXHRcdFx0XHRbWzIuNzE5OTksLTUxLjJdLFs4MDEuOTIsLTQ5LjZdLFs4MDEuOTIsLTQ5LjZdXVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fOSA9IFtcclxuXHRcdFx0XHRbWzE0My45MTIsMTAwMS45XSxbLTE0OS4wODgsOTk4LjkwNF0sWy0xNDkuMDg4LDk5OC45MDRdXVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC51YyhuZXcgRW1pdHRlcl9TcGxhc2goKSwgeyB4YzogMSwgc2Q6IHRydWUgfSk7XHJcblx0XHRcdEJkLmpkID0gMTAwMDtcclxuXHRcdFx0QmQuVmMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTWIgPSBmdW5jdGlvbih2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDkwMDtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0dmQuemIgPSA5MDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5NYz1bXTtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0XzEgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0XzJpID0gRGIua2IoXzEpO1xyXG5cdFx0XHRjdHguVihfMnMsMCwoXzJpLTApKjEpO1xyXG5cdFx0XHREYi5sYihfMiwgQmQuXzJbXzJzWzBdXSwgXzJzWzFdKTtcclxuXHRcdFx0XzNpID0gRGIua2IoXzEpO1xyXG5cdFx0XHRjdHguVihfM3MsMCwoXzNpLTApKjEpO1xyXG5cdFx0XHREYi5sYihfMywgQmQuXzNbXzNzWzBdXSwgXzNzWzFdKTtcclxuXHRcdFx0XzQgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0Y3R4LlkoXzUsIF8yLCBfMywgXzQpO1xyXG5cdFx0XHRjdHguVyhfNiwgXzVbMF0sIF81WzFdLCAwKTtcclxuXHRcdFx0WGIuXzcgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl83LCBfNiwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fNywgQmQuQWIsIFhiLl83KTtcclxuXHRcdFx0XzggPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0XzlpID0gRGIua2IoXzgpO1xyXG5cdFx0XHRjdHguVihfOXMsMCwoXzlpLTApKjEpO1xyXG5cdFx0XHREYi5sYihfOSwgQmQuXzlbXzlzWzBdXSwgXzlzWzFdKTtcclxuXHRcdFx0Y3R4LlcoXzEwLCBfOVswXSwgXzlbMV0sIDApO1xyXG5cdFx0XHRYYi5fMTEgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8xMSwgXzEwLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl8xMSwgQmQuYWQsIFhiLl8xMSk7XHJcblx0XHRcdF8xMiA9IDAuNDUgKyBCZC5MZC5yYW5kKCkgKiAoMC42IC0gMC40NSk7XHJcblx0XHRcdFhiLl8xMyA9IF8xMjtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl83KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLk1jPVtdO1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRfMSA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRfMmkgPSBEYi5rYihfMSk7XHJcblx0XHRcdGN0eC5WKF8ycywwLChfMmktMCkqMSk7XHJcblx0XHRcdERiLmxiKF8yLCBCZC5fMltfMnNbMF1dLCBfMnNbMV0pO1xyXG5cdFx0XHRfM2kgPSBEYi5rYihfMSk7XHJcblx0XHRcdGN0eC5WKF8zcywwLChfM2ktMCkqMSk7XHJcblx0XHRcdERiLmxiKF8zLCBCZC5fM1tfM3NbMF1dLCBfM3NbMV0pO1xyXG5cdFx0XHRfNCA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRjdHguWShfNSwgXzIsIF8zLCBfNCk7XHJcblx0XHRcdGN0eC5XKF82LCBfNVswXSwgXzVbMV0sIDApO1xyXG5cdFx0XHRYYi5fNyA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzcsIF82LCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl83LCBCZC5BYiwgWGIuXzcpO1xyXG5cdFx0XHRfOCA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRfOWkgPSBEYi5rYihfOCk7XHJcblx0XHRcdGN0eC5WKF85cywwLChfOWktMCkqMSk7XHJcblx0XHRcdERiLmxiKF85LCBCZC5fOVtfOXNbMF1dLCBfOXNbMV0pO1xyXG5cdFx0XHRjdHguVyhfMTAsIF85WzBdLCBfOVsxXSwgMCk7XHJcblx0XHRcdFhiLl8xMSA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzExLCBfMTAsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzExLCBCZC5hZCwgWGIuXzExKTtcclxuXHRcdFx0XzEyID0gMC40NSArIEJkLkxkLnJhbmQoKSAqICgwLjYgLSAwLjQ1KTtcclxuXHRcdFx0WGIuXzEzID0gXzEyO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucWMgPSBmdW5jdGlvbihRYiwgQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gKz0gUWI7XHJcblx0XHRcdGN0eC5UKF8xNCwgWGIuXzExKTtcclxuXHRcdFx0Y3R4LnUoXzE0LCBfMTQsIFFiKTtcclxuXHRcdFx0Y3R4LmMoXzE0LCBfMTQsIFhiLl83KTtcclxuXHRcdFx0Y3R4LlQoWGIuXzcsIF8xNCk7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fNyk7XHJcblx0XHRcdGN0eC5RKF8xNXosIFswLDAsMV0pO1xyXG5cdFx0XHRjdHguSShfMTV5LCBfMTV6LCBYYi5fMTEpO1xyXG5cdFx0XHRjdHguUShfMTV5LCBfMTV5KTtcclxuXHRcdFx0Y3R4LkkoXzE1eCwgXzE1eSwgXzE1eik7XHJcblx0XHRcdGN0eC5wYihfMTUsIF8xNXgsIF8xNXksIF8xNXopO1xyXG5cdFx0XHRjdHguVihfMTYsIDgwLCAxNSk7XHJcblx0XHRcdF8xNyA9IDA7XHJcblx0XHRcdGN0eC5TKFhiLlBkLFsxLDAuNV0pO1xyXG5cdFx0XHRjdHguVShYYi5NYywgXzE1KTtcclxuXHRcdFx0Y3R4LlMoWGIuTmQsXzE2KTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsWzAsMSwxXSk7XHJcblx0XHRcdFhiLk9kID0gMC4zO1xyXG5cdFx0XHRYYi5RYyA9IChfMTcgPCAwKSA/IDAgOiAoKF8xNyA+PSA0KSA/IDMgOiBfMTcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdGlmIChYYi5fID4gWGIuXzEzKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHR0aGlzLnFkID0gZnVuY3Rpb24oTGQpIHtcclxuXHRcdExkLkRkID0gMC4wMzMzMzMzO1xyXG5cdFx0TGQuVWQgPSAwO1xyXG5cdFx0TGQucmFuZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKTsgfTtcclxuXHRcdExkLnBkKG5ldyBFbWl0dGVyX1NwbGFzaCgpKTtcclxuXHRcdExkLnBkKG5ldyBFbWl0dGVyX0Ryb3AoKSk7XHJcblx0fVxyXG5cdFx0dGhpcy5rYiA9IGZ1bmN0aW9uICh2KSB7IFx0XHRcdHJldHVybiAodiA8IDApID8gMCA6ICgodiA+IDEpID8gMSA6IHYpOyBcdFx0fVxyXG5cclxuXHRcdHRoaXMubGIgPSBmdW5jdGlvbiAociwgcGF0aCwgamUpIHsgXHRcdFx0dmFyIGluZGV4SW50ID0gTWF0aC5mbG9vcihqZSk7IFx0XHRcdHZhciBsZXJwID0gamUgLSBpbmRleEludDsgXHRcdFx0Y3R4LlkociwgcGF0aFtpbmRleEludF0sIHBhdGhbaW5kZXhJbnQgKyAxXSwgbGVycCk7IFx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYiA9IGZ1bmN0aW9uKGZ1bmNWYWx1ZXMsIGplKSB7IFx0XHRcdHZhciBpbmRleEludCA9IE1hdGguZmxvb3IoamUpOyBcdFx0XHR2YXIgbmV4dEludCA9IGluZGV4SW50ICsgMTsgXHRcdFx0cmV0dXJuIGN0eC5YKGZ1bmNWYWx1ZXNbaW5kZXhJbnRdLCBmdW5jVmFsdWVzW25leHRJbnRdLCBqZSAtIGluZGV4SW50KTsgXHRcdH1cclxuXHJcblxyXG59XHJcblxyXG5yZXR1cm4gUmFpbjtcclxufSkpO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

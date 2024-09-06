
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
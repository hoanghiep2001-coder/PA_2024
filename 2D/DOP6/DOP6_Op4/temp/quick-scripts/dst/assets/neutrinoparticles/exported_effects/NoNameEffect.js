
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

// f21d225e-67fe-413a-a7f5-76227622615f
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
          _3 = [],
          _6 = [],
          _8,
          _9,
          _10,
          _7;

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter";

      this.ud = function (Bd) {
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
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(_6, Xb._4);
        ctx.u(_6, _6, Qb);
        ctx.c(_6, _6, Xb._2);
        ctx.T(Xb._2, _6);
        ctx.T(Xb.Ab, Xb._2);
        _8 = 30;
        _9 = 1;
        _10 = _9;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._5;
        ctx.V(Xb.Nd, _8, _8);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = _10;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _7 = 2;
        if (Xb._ > _7) return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXE5vTmFtZUVmZmVjdC5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJOZXV0cmlub0VmZmVjdCIsIm5hbWVzcGFjZSIsIl9fbGFzdF9fIiwic2VsZiIsIk5vTmFtZUVmZmVjdCIsImN0eCIsIkRiIiwibmUiLCJMZCIsIkJkIiwid2UiLCJwZSIsImxlbmd0aCIsIkxjIiwicHJvdG90eXBlIiwiRWMiLCJGYyIsInhlIiwiZmUiLCJBYiIsIlhiIiwiR2MiLCJpYiIsIk1kIiwiSGMiLCJNYXRoIiwiY29zIiwiSWMiLCJzaW4iLCJ5ZSIsIkFlIiwiTmQiLCJ6ZSIsInRyYW5zZm9ybSIsInEiLCJNYyIsInoyIiwieHkiLCJ3eiIsIlBjIiwiZ2UiLCJ2YyIsIkJlIiwib2MiLCJPZCIsIkRlIiwiZmxvb3IiLCJRYyIsIlJjIiwiRWUiLCJzbGljZSIsImRmIiwiYWJzIiwiZWYiLCJzYXZlIiwidHJhbnNsYXRlIiwiUGQiLCJnbG9iYWxBbHBoYSIsImdmIiwiWWUiLCJUYyIsIlplIiwiVWMiLCJhZiIsImJmIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZHJhd0ltYWdlIiwiaW1hZ2UiLCJ4IiwieSIsImZpbGxTdHlsZSIsImZmIiwiZmlsbFJlY3QiLCJjZiIsInJlc3RvcmUiLCJIZCIsIm1hdGVyaWFscyIsIm1vZGVsIiwicmVuZGVyU3R5bGVzIiwicmVuZGVyU3R5bGVJbmRleCIsIm1hdGVyaWFsSW5kZXgiLCJ0ZXh0dXJlRGVzY3MiLCJ0ZXh0dXJlSW5kaWNlcyIsIndpZHRoIiwiaGVpZ2h0IiwiU2MiLCJrZCIsImEiLCJiIiwiVmMiLCJXYiIsInRjIiwic29ydCIsIm9lIiwidmVydGV4IiwicG9zaXRpb24iLCJjb2xvciIsInRleENvb3JkcyIsInFlIiwic2UiLCJyZSIsInRlIiwicmVuZGVyQnVmZmVyIiwiQ2UiLCJ2MCIsInYxIiwidjIiLCJ2MyIsIkZlIiwiR2UiLCJzIiwiYyIsIkhlIiwiSWUiLCJKZSIsIktlIiwidSIsInJnYiIsInYiLCJQZSIsIlFlIiwiUmUiLCJTZSIsIldlIiwidGV4dHVyZXNSZW1hcCIsIlVlIiwiVmUiLCJiZWZvcmVRdWFkIiwicHVzaFZlcnRleCIsIl9fbGFzdFJlbmRlckNhbGwiLCJSZW5kZXJDYWxsIiwibGFzdFJlbmRlckNhbGwiLCJudW1JbmRpY2VzIiwicHVzaFJlbmRlckNhbGwiLCJzdGFydEluZGV4IiwidWUiLCJmb3JFYWNoIiwiZGVwdGgiLCJIIiwibGQiLCJ2ZSIsIlZiIiwiRWIiLCJGYiIsIkdiIiwiSGIiLCJJYiIsIktiIiwiTGIiLCJNYiIsIk5iIiwiT2IiLCJKZCIsIklkIiwiUWIiLCJQYiIsIlJiIiwic3lzdGVtVGltZSIsIlNiIiwiaWMiLCJ6YiIsIlRiIiwiVWIiLCJkaXNhY3RpdmF0ZSIsImFiIiwiQmIiLCJzbGVycHEiLCJwcmV2Um90YXRpb24iLCJKYiIsInNjIiwicG9wIiwidW5zaGlmdCIsIlliIiwiWmIiLCJUIiwiVSIsImFjIiwiYmMiLCJjYyIsImRjIiwic3lzdGVtVGltZUJlZm9yZUZyYW1lIiwic3lzdGVtVGltZUFmdGVyRnJhbWUiLCJlYyIsIk8iLCJoIiwiZmMiLCJyZCIsImhjIiwiamMiLCJrYyIsIlgiLCJtYyIsIktjIiwibmMiLCJpIiwicGMiLCJBZCIsInNkIiwiZmQiLCJnZCIsInFjIiwicmMiLCJqZSIsInVjIiwibWQiLCJuZCIsInB1c2giLCJ4YyIsIndjIiwiYWN0aXZhdGUiLCJ5YyIsIkdkIiwiRWQiLCJ6YyIsIkFjIiwiQ2MiLCJXYyIsImNvbnN0cnVjdCIsIlljIiwiYWQiLCJkZCIsInZkIiwiZWQiLCJ1ZCIsImpkIiwiaWQiLCJoZCIsIndkIiwiWmMiLCJwYXVzZWRfIiwiZ2VuZXJhdG9yc1BhdXNlZF8iLCJXIiwiYXBwbHkiLCJUZCIsInNoaWZ0IiwiZyIsInciLCJ4ZCIsInJlYWR5IiwiYWN0aXZhdGVkIiwic3BsaWNlIiwicGF1c2UiLCJ1bnBhdXNlIiwicGF1c2VkIiwicGF1c2VHZW5lcmF0b3JzIiwidW5wYXVzZUdlbmVyYXRvcnMiLCJnZW5lcmF0b3JzUGF1c2VkIiwiZ2V0TnVtUGFydGljbGVzIiwia2UiLCJDYiIsIl9pbml0Iiwib3B0aW9ucyIsIm9kIiwicGQiLCJjb25jYXQiLCJuYW1lIiwiQ2QiLCJxZCIsIl9wcmVzaW1OZWVkZWQiLCJwYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwicGF1c2VBbGxFbWl0dGVycyIsInplcm9VcGRhdGUiLCJ1cGRhdGUiLCJVZCIsInJlc3RhcnQiLCJyb3RhdGlvbiIsImR0IiwiRGQiLCJ1cGRhdGVGaXhlZCIsInVwZGF0ZUZsZXgiLCJ1cGRhdGVkVGltZSIsImZyYW1lUm90YXRpb24iLCJlcXVhbHYzXyIsImVxdWFscV8iLCJyZXNldFBvc2l0aW9uIiwic2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzIiwidmFsdWUiLCJwcm9wTmFtZSIsIkFycmF5IiwiUyIsInVucGF1c2VBbGxFbWl0dGVycyIsImFyZUFsbEVtaXR0ZXJzUGF1c2VkIiwidW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwiYXJlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnNQYXVzZWQiLCJudW1QYXJ0aWNsZXMiLCJsZSIsImNhbGwiLCJpbmRpY2VzIiwidmVyRGlzcCIsIlhlIiwiaW5pdGlhbGl6ZSIsIl9fbnVtSW5kaWNlcyIsImZpbGxHZW9tZXRyeUJ1ZmZlcnMiLCJjYW1lcmFSaWdodCIsImNhbWVyYVVwIiwiY2FtZXJhRGlyIiwiY2xlYW51cCIsIm1lIiwiZHJhdyIsImNvbnRleHQiLCJjYW1lcmEiLCJjcmVhdGVXR0xJbnN0YW5jZSIsImNyZWF0ZUNhbnZhczJESW5zdGFuY2UiLCJ0ZXh0dXJlcyIsIkVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIiLCJfMSIsIl8zIiwiXzYiLCJfOCIsIl85IiwiXzEwIiwiXzciLCJfIiwiXzIiLCJyYW5kdjNnZW4iLCJyYW5kIiwiXzQiLCJfNSIsIlYiLCJyYW5k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QUwsR0FBVSxVQUFTelAsRUFBVCxFQUFhO0FBQ3RCQSxNQUFBQSxFQUFFLENBQUNtUSxFQUFILEdBQVEsU0FBUjtBQUNBblEsTUFBQUEsRUFBRSxDQUFDK1AsRUFBSCxHQUFRLENBQVI7O0FBQ0EvUCxNQUFBQSxFQUFFLENBQUNtVCxJQUFILEdBQVUsWUFBVztBQUFFLGVBQU9sUyxJQUFJLENBQUNzUyxNQUFMLEVBQVA7QUFBdUIsT0FBOUM7O0FBQ0F2VCxNQUFBQSxFQUFFLENBQUNxUCxFQUFILENBQU0sSUFBSW1ELHNCQUFKLEVBQU47QUFDQSxLQUxEO0FBT0E7O0FBRUQsU0FBTzVTLFlBQVA7QUFDQyxDQTd1Q0EsQ0FBRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZjIxZDIyNWUtNjdmZS00MTNhLWE3ZjUtNzYyMjc2MjI2MTVmXHJcblxyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICAgICAgICAgICAgKHJvb3QuTmV1dHJpbm9FZmZlY3QgPSBleHBvcnRzKVsnTm9OYW1lRWZmZWN0J10gPSBmYWN0b3J5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAocm9vdC5OZXV0cmlub0VmZmVjdCB8fCAocm9vdC5OZXV0cmlub0VmZmVjdCA9IHt9KSk7XHJcbiAgICAgICAgbmFtZXNwYWNlLl9fbGFzdF9fID0gbmFtZXNwYWNlWydOb05hbWVFZmZlY3QnXSA9IGZhY3RvcnkoKTtcclxuICAgIH1cclxufSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xyXG5cclxuZnVuY3Rpb24gTm9OYW1lRWZmZWN0KGN0eCkge1xyXG5cdHZhciBEYiA9IHRoaXM7XHJcblxyXG5cdHZhciBuZSA9IGZ1bmN0aW9uIChMZCwgQmQpIHtcclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMuQmQgPSBCZDtcclxuXHJcblx0XHRpZiAodGhpcy5CZC53ZS5wZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cclxuXHRcdFx0dGhpcy5MYyA9IFtuZS5wcm90b3R5cGUuRWMsXHJcblx0XHRcdFx0bmUucHJvdG90eXBlLkZjXVt0aGlzLndlLnhlXTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy53ZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRuZS5wcm90b3R5cGUgPSB7XHJcblx0XHRFYzogZnVuY3Rpb24gKGZlLCBBYiwgWGIpIHtcclxuXHRcdFx0dmFyIEdjID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0dmFyIEhjID0gTWF0aC5jb3MoR2MpO1xyXG5cdFx0XHR2YXIgSWMgPSBNYXRoLnNpbihHYyk7XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oeWUgKiBIYywgeWUgKiBJYywgemUgKiAtSWMsIHplICogSGMsIEFiWzBdLCBBYlsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdEZjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeWUgPSBjdHguQWUoWGIuTmRbMF0pO1xyXG5cdFx0XHR2YXIgemUgPSBjdHguQWUoWGIuTmRbMV0pO1xyXG5cdFx0XHRmZS4vKiovdHJhbnNmb3JtKFxyXG5cdFx0XHRcdHllICogKDEuMCAtIDIuMCAqIHFbMV0gKiBxWzFdIC0gejIpLFxyXG5cdFx0XHRcdHllICogKHh5ICsgd3opLFxyXG5cdFx0XHRcdHplICogKHd6IC0geHkpLFxyXG5cdFx0XHRcdHplICogKDIuMCAqIHFbMF0gKiBxWzBdICsgejIgLSAxLjApLFxyXG5cdFx0XHRcdEFiWzBdLCBBYlsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdFBjOiBmdW5jdGlvbiAoZmUsIFhiLCBnZSkge1xyXG5cdFx0XHRYYi52YyhmZSwgLTEsIGdlKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLkJlICE9IG51bGwgJiYgIVhiLm9jKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKFhiLk9kID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0dmFyIERlID0gTWF0aC5mbG9vcihYYi5RYyAlIHRoaXMud2UuUmMpO1xyXG5cdFx0XHRcdFx0XHR2YXIgRWUgPSBNYXRoLmZsb29yKFhiLlFjIC8gdGhpcy53ZS5SYyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgQWIgPSBYYi5BYi5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgTmQgPSBYYi5OZC5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIWdlIHx8IGdlLi8qKi90cmFuc2Zvcm0oQWIsIE5kKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgZGYgPSBNYXRoLmFicyhOZFswXSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGVmID0gTWF0aC5hYnMoTmRbMV0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGYgPiAwLjAwMSAmJiBlZiA+IDAuMDAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5zYXZlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLkxjKGZlLCBBYiwgWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZlLnRyYW5zbGF0ZSgtZGYgKiBYYi5QZFswXSwgLWVmICogKDEgLSBYYi5QZFsxXSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmUuZ2xvYmFsQWxwaGEgKj0gWGIuT2Q7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFhiLmdmWzBdIDwgMC45OTkgfHwgWGIuZ2ZbMV0gPCAwLjk5OSB8fCBYYi5nZlsyXSA8IDAuOTk5KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChkZiA+PSAxICYmIGVmID49IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWWUgPSBkZiA8IHRoaXMuVGMgPyBkZiA6IHRoaXMuVGM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIFplID0gZWYgPCB0aGlzLlVjID8gZWYgOiB0aGlzLlVjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYWYoWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiY29weVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcIm11bHRpcGx5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmZpbGxTdHlsZSA9IGN0eC5mZihYYi5nZik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmZpbGxSZWN0KDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLWF0b3BcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmZS5kcmF3SW1hZ2UoY3R4LmNmLCAwLCAwLCBZZSwgWmUsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZS5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLCAwLCAwLCBkZiwgZWYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZlLnJlc3RvcmUoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFhiLnZjKGZlLCAxLCBnZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdEhkOiBmdW5jdGlvbiAoZmUsIGdlKSB7XHJcblx0XHRcdGZlLnNhdmUoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblx0XHRcdFx0ZmUuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdGhpcy5MZC5tYXRlcmlhbHNbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0ubWF0ZXJpYWxJbmRleF07XHJcblx0XHRcdFx0dGhpcy5CZSA9IHRoaXMuTGQudGV4dHVyZURlc2NzW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLnRleHR1cmVJbmRpY2VzWzBdXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLkJlID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuQmUpIHtcclxuXHRcdFx0XHR0aGlzLlRjID0gdGhpcy5CZS53aWR0aCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0dGhpcy5VYyA9IHRoaXMuQmUuaGVpZ2h0IC8gdGhpcy53ZS5TYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24ga2QoYSwgYikge1xyXG5cdFx0XHRcdGlmIChhLkFiWzJdID4gYi5BYlsyXSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChhLkFiWzJdIDwgYi5BYlsyXSlcclxuXHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpdGNoICh0aGlzLkJkLlZjKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChrZCk7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIG9lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMuQmQgPSBCZDtcclxuXHJcblx0XHRpZiAodGhpcy5CZC53ZS5wZS5sZW5ndGggPiAwKVxyXG5cdFx0XHR0aGlzLndlID0gdGhpcy5CZC53ZS5wZVswXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy53ZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy52ZXJ0ZXggPSBbXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfV07XHJcblx0fVxyXG5cclxuXHRvZS5wcm90b3R5cGUgPSB7XHJcblx0XHRxZTogZnVuY3Rpb24gKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0WGIuQ2UoLTEsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAoIVhiLm9jKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHYwID0gdGhpcy52ZXJ0ZXhbMF07XHJcblx0XHRcdFx0XHR2YXIgdjEgPSB0aGlzLnZlcnRleFsxXTtcclxuXHRcdFx0XHRcdHZhciB2MiA9IHRoaXMudmVydGV4WzJdO1xyXG5cdFx0XHRcdFx0dmFyIHYzID0gdGhpcy52ZXJ0ZXhbM107XHJcblxyXG5cdFx0XHRcdFx0dmFyIEZlID0gW10sIEdlID0gW107XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMud2UueGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgYSA9IGN0eC5pYihYYi5NZCk7XHJcblx0XHRcdFx0XHRcdHZhciBzID0gLU1hdGguc2luKGEpO1xyXG5cdFx0XHRcdFx0XHR2YXIgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSBzZVswXSAqIGMgKyByZVswXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzFdID0gc2VbMV0gKiBjICsgcmVbMV0gKiBzO1xyXG5cdFx0XHRcdFx0XHRGZVsyXSA9IHNlWzJdICogYyArIHJlWzJdICogcztcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0gLXNlWzBdICogcyArIHJlWzBdICogYztcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAtc2VbMV0gKiBzICsgcmVbMV0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IC1zZVsyXSAqIHMgKyByZVsyXSAqIGM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIHEgPSBYYi5NYztcclxuXHRcdFx0XHRcdFx0dmFyIHoyID0gMi4wICogcVsyXSAqIHFbMl07XHJcblx0XHRcdFx0XHRcdHZhciB4eSA9IDIuMCAqIHFbMF0gKiBxWzFdO1xyXG5cdFx0XHRcdFx0XHR2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHJcblx0XHRcdFx0XHRcdEZlWzBdID0gMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MjtcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSB4eSArIHd6O1xyXG5cdFx0XHRcdFx0XHRGZVsyXSA9IDIuMCAqIHFbMF0gKiBxWzJdIC0gMi4wICogcVszXSAqIHFbMV07XHJcblxyXG5cdFx0XHRcdFx0XHRHZVswXSA9IHh5IC0gd3o7XHJcblx0XHRcdFx0XHRcdEdlWzFdID0gMS4wIC0gMi4wICogcVswXSAqIHFbMF0gLSB6MjtcclxuXHRcdFx0XHRcdFx0R2VbMl0gPSAyLjAgKiBxWzFdICogcVsyXSArIDIuMCAqIHFbM10gKiBxWzBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBIZSA9IFtdLCBJZSA9IFtdLCBKZSA9IFtdLCBLZSA9IFtdO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSGUsIEZlLCAtWGIuTmRbMF0gKiBYYi5QZFswXSk7XHJcblx0XHRcdFx0XHRjdHgudShJZSwgRmUsIFhiLk5kWzBdICogKDEuMCAtIFhiLlBkWzBdKSk7XHJcblx0XHRcdFx0XHRjdHgudShKZSwgR2UsIC1YYi5OZFsxXSAqIFhiLlBkWzFdKTtcclxuXHRcdFx0XHRcdGN0eC51KEtlLCBHZSwgWGIuTmRbMV0gKiAoMS4wIC0gWGIuUGRbMV0pKTtcclxuXHJcblx0XHRcdFx0XHRjdHguYyh2MC4vKiovcG9zaXRpb24sIEhlLCBKZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MC4vKiovcG9zaXRpb24sIHYwLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjEuLyoqL3Bvc2l0aW9uLCBIZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjEuLyoqL3Bvc2l0aW9uLCB2MS4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYyLi8qKi9wb3NpdGlvbiwgSWUsIEtlKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYyLi8qKi9wb3NpdGlvbiwgdjIuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2My4vKiovcG9zaXRpb24sIEllLCBKZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2My4vKiovcG9zaXRpb24sIHYzLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIHJnYiA9IGN0eC52KFhiLmdmLCAyNTUpO1xyXG5cdFx0XHRcdFx0XHR2MC4vKiovY29sb3IgPSB2MS4vKiovY29sb3IgPSB2Mi4vKiovY29sb3IgPSB2My4vKiovY29sb3IgPSBbcmdiWzBdLCByZ2JbMV0sIHJnYlsyXSwgWGIuT2QgKiAyNTVdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIERlID0gTWF0aC5mbG9vcihYYi5RYyAlIHRoaXMud2UuUmMpO1xyXG5cdFx0XHRcdFx0XHR2YXIgRWUgPSBNYXRoLmZsb29yKFhiLlFjIC8gdGhpcy53ZS5SYyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgUGUsIFFlLCBSZSwgU2U7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgV2UgPSB0aGlzLkxkLnRleHR1cmVzUmVtYXBbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHRcdFx0XHRpZiAoV2UpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSBXZS53aWR0aCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFZlID0gV2UuaGVpZ2h0IC8gdGhpcy53ZS5TYztcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFBlID0gV2UueCArIERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoV2UueSArIFdlLmhlaWdodCAtIEVlICogVmUpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBTZSA9IFJlIC0gVmU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFVlID0gMS4wIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSAxLjAgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBEZSAqIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBRZSA9IFBlICsgVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFJlID0gKDEuMCAtIEVlICogVmUpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBTZSA9IFJlIC0gVmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHYwLi8qKi90ZXhDb29yZHNbMF0gPSBbUGUsIFNlXTtcclxuXHRcdFx0XHRcdFx0djEuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgUmVdO1xyXG5cdFx0XHRcdFx0XHR2Mi4vKiovdGV4Q29vcmRzWzBdID0gW1FlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYzLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFNlXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAocmVuZGVyQnVmZmVyLmJlZm9yZVF1YWQpIHtcclxuXHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLmJlZm9yZVF1YWQodGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2MCk7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2MSk7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2Mik7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2Myk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG5ldyBjdHguUmVuZGVyQ2FsbCgwLCA2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxhc3RSZW5kZXJDYWxsID0gcmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGw7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGFzdFJlbmRlckNhbGwucmVuZGVyU3R5bGVJbmRleCA9PSB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRsYXN0UmVuZGVyQ2FsbC5udW1JbmRpY2VzICs9IDY7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKGxhc3RSZW5kZXJDYWxsKTtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG5ldyBjdHguUmVuZGVyQ2FsbChcclxuXHRcdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLnN0YXJ0SW5kZXggKyBsYXN0UmVuZGVyQ2FsbC5udW1JbmRpY2VzLFxyXG5cdFx0XHRcdFx0XHRcdFx0NiwgdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIuQ2UoMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dWU6IGZ1bmN0aW9uIChzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0c3dpdGNoICh0aGlzLkJkLlZjKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUodGhpcy5CZC50Y1tXYl0sIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSB0aGlzLkJkLnRjLmxlbmd0aDsgV2ItLSA+IDA7KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUodGhpcy5CZC50Y1tXYl0sIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHRYYi5kZXB0aCA9IGN0eC5IKHRlLCBYYi5BYik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGEuZGVwdGggPCBiLmRlcHRoKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA+IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuZm9yRWFjaChmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZShYYiwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBsZCA9IGZ1bmN0aW9uIChMZCwgd2UsIHZlKSB7XHJcblx0XHR2YXIgVmIgPSB0aGlzO1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy53ZSA9IHdlO1xyXG5cclxuXHRcdC8vIEViXHJcblxyXG5cdFx0ZnVuY3Rpb24gRWIoKSB7XHJcblx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR0aGlzLkdiID0gMTtcclxuXHRcdFx0dGhpcy5IYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuSWIgPSBudWxsO1xyXG5cdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0dGhpcy5MYiA9IDE7XHJcblxyXG5cdFx0XHRWYi53ZS5NYih0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk9iID0gdGhpcy5HYjtcclxuXHRcdFx0XHR0aGlzLkZiID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdEViLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0SmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk5iKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHRcdFx0XHRWYi53ZS5QYihRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHZhciBSYiA9IFZiLlJiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIFNiID0gUWI7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuemIgPiAwLjAwMDAwMSkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuT2IgKyBRYiAqIHRoaXMuemI7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKFRiID49IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgVWIgPSB0aGlzLnpiIDwgMC4wMDEgPyAwLjAgOiAoMS4wIC0gdGhpcy5PYikgLyB0aGlzLnpiO1xyXG5cdFx0XHRcdFx0XHRTYiAtPSBVYjtcclxuXHRcdFx0XHRcdFx0UmIgKz0gVWI7XHJcblx0XHRcdFx0XHRcdHN5c3RlbVRpbWUgKz0gVWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5IYiAhPSBudWxsICYmIFJiID4gdGhpcy5IYikge1xyXG5cdFx0XHRcdFx0XHRcdFZiLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0gUmI7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gc3lzdGVtVGltZTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChBYiAmJiBRYiA+IDApXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKFZiLkFiLCBBYiwgVmIuQmIsIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKE1jICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguc2xlcnBxKFZiLk1jLCBNYywgVmIucHJldlJvdGF0aW9uLCBTYiAvIFFiKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGZvciB0aGUgZnV0dXJlIHdoZW4gSmIgd291bGQgYmUgZXh0ZXJuYWxcclxuXHRcdFx0XHRcdFx0dGhpcy5MYiA9IHRoaXMuSmI7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5KYjsgKytXYikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChWYi5zYy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5KYiA9PSAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IFdiIC8gKHRoaXMuSmIgLSAxKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFhiID0gVmIuc2MucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0VmIudGMudW5zaGlmdChYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChXYiA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWWIoKTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5aYigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRYYi5JZChTYik7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5PYiA9IDAuMDtcclxuXHRcdFx0XHRcdFx0VGIgLT0gMS4wO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuSWIgIT0gbnVsbCAmJiArK3RoaXMuRmIgPj0gdGhpcy5JYikge1xyXG5cdFx0XHRcdFx0XHRcdFZiLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLk9iID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFJiICs9IFNiO1xyXG5cdFx0XHRcdFZiLlJiID0gUmI7XHJcblxyXG5cdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBBYik7XHJcblxyXG5cdFx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRcdGN0eC5VKFZiLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFjXHJcblxyXG5cdFx0ZnVuY3Rpb24gYWMoKSB7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0dGhpcy5MYiA9IDE7XHJcblxyXG5cdFx0XHRWYi53ZS5NYih0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmJjID0gdGhpcy5HYjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFjLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0SmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk5iKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHRcdFx0XHRWYi53ZS5QYihRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHZhciBjYyA9IFZiLlJiO1xyXG5cdFx0XHRcdHZhciBkYyA9IGNjICsgUWI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVCZWZvcmVGcmFtZSA9IExkLlJiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSA9IHN5c3RlbVRpbWVCZWZvcmVGcmFtZSArIFFiO1xyXG5cdFx0XHRcdHZhciBlYyA9IEFiID8gY3R4Lk8oY3R4LmgoQWIsIFZiLkJiKSkgOiAwO1xyXG5cdFx0XHRcdHZhciBpYyA9IDA7XHJcblxyXG5cdFx0XHRcdGlmIChlYyA+IDAuMDAwMDAxKSB7XHJcblx0XHRcdFx0XHR2YXIgZmMgPSBlYyAvIHRoaXMucmQ7XHJcblx0XHRcdFx0XHR2YXIgVGIgPSB0aGlzLmJjICsgZmM7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGhjID0gZmMgPCAwLjAwMSA/XHJcblx0XHRcdFx0XHRcdDEuMCAtIHRoaXMuYmMgOiAoMS4wIC0gdGhpcy5iYykgLyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgamMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPiAxLjApIHtcclxuXHRcdFx0XHRcdFx0dmFyIGtjID0gY2MgKyBoYyAqIFFiO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5hYihqYywgVmIuQmIsIEFiLCBoYyk7XHJcblxyXG5cdFx0XHRcdFx0XHRWYi5SYiA9IGtjO1xyXG5cdFx0XHRcdFx0XHRjdHguVChWYi5BYiwgamMpO1xyXG5cdFx0XHRcdFx0XHRMZC5SYiA9IGN0eC5YKHN5c3RlbVRpbWVCZWZvcmVGcmFtZSwgc3lzdGVtVGltZUFmdGVyRnJhbWUsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGZvciB0aGUgZnV0dXJlIHdoZW4gSmIgd291bGQgYmUgZXh0ZXJuYWxcclxuXHRcdFx0XHRcdFx0dGhpcy5MYiA9IHRoaXMuSmI7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5KYjsgKytXYikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChWYi5zYy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5KYiA9PSAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IFdiIC8gKHRoaXMuSmIgLSAxKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFhiID0gVmIuc2MucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0VmIudGMudW5zaGlmdChYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChXYiA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWWIoKTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5aYigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRYYi5JZChRYiAqICgxLjAgLSBoYykpO1xyXG5cdFx0XHRcdFx0XHRcdCsraWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGhjICs9IDEuMCAvIGZjO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5iYyA9IFRiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0VmIuUmIgPSBkYztcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWNcclxuXHJcblx0XHRmdW5jdGlvbiBtYygpIHtcclxuXHRcdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0XHR0aGlzLlBkID0gW107XHJcblx0XHRcdHRoaXMuTmQgPSBbXTtcclxuXHRcdFx0dGhpcy5nZiA9IFtdO1xyXG5cdFx0XHR0aGlzLktjID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0bWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRuYzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMub2MgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cdFx0XHRcdFx0cGMuQmQuSmQodGhpcy5BYiwgbnVsbCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHBjLkFkLnNkKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFliOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0VmIud2UuZmQoVmIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHRcdFx0dGhpcy5uYygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WmI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5nZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiKSB7XHJcblx0XHRcdFx0VmIud2UucWMoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR0aGlzLnJjKFFiKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHBjOiBmdW5jdGlvbiAoamUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5LY1tqZV0uQmQ7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyYzogZnVuY3Rpb24gKFFiKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLklkKFFiLCB0aGlzLkFiLCBudWxsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1YzogZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0XHRcdHRoaXMuS2MucHVzaCh7XHJcblx0XHRcdFx0XHRCZDogbmV3IGxkKExkLCBtZCwgdmUpLFxyXG5cdFx0XHRcdFx0QWQ6IG5kXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR2YzogZnVuY3Rpb24gKGZlLCB4YywgZ2UpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhjID09IHBjLkFkLnhjKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5IZChmZSwgZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdENlOiBmdW5jdGlvbiAoeGMsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLnVlKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0d2M6IGZ1bmN0aW9uIChmZSkge1xyXG5cdFx0XHRcdHRoaXMub2MgPSB0cnVlO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpIHtcclxuXHRcdFx0XHRcdFx0cGMuQmQuYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0cGMuQmQuSWQoMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0eWM6IGZ1bmN0aW9uIChHZCkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dGhpcy5LY1tpXS5CZC5FZChHZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gemNcclxuXHJcblx0XHRmdW5jdGlvbiB6YygpIHtcclxuXHRcdH1cclxuXHJcblx0XHR6Yy5wcm90b3R5cGUuQWMgPSBmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0cmV0dXJuIFZiLndlLkNjKFZiLCBYYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdH1cclxuXHJcblx0XHQvLyBsZCBBZFxyXG5cclxuXHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdHRoaXMuQmIgPSBbXTtcclxuXHRcdHRoaXMuTWMgPSBbXTtcclxuXHRcdHRoaXMucHJldlJvdGF0aW9uID0gW107XHJcblx0XHR0aGlzLnRjID0gW107XHJcblx0XHR0aGlzLnNjID0gW107XHJcblx0XHR0aGlzLldjID0gbmV3IHpjKCk7XHJcblx0XHR0aGlzLmNvbnN0cnVjdCA9IG5ldyB2ZSh0aGlzLkxkLCB0aGlzKTtcclxuXHRcdHRoaXMuWWMgPSBbXTtcclxuXHRcdHRoaXMuYWQgPSBbXTtcclxuXHJcblx0XHR0aGlzLmRkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IEViKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5lZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy52ZCA9IG5ldyBhYygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2UudWQodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5qZDsgKytXYikge1xyXG5cdFx0XHR2YXIgWGIgPSBuZXcgbWMoKTtcclxuXHJcblx0XHRcdGZvciAodmFyIGlkID0gMDsgaWQgPCB0aGlzLlljLmxlbmd0aDsgKytpZCkge1xyXG5cdFx0XHRcdHZhciBoZCA9IHRoaXMuWWNbaWRdO1xyXG5cdFx0XHRcdFhiLnVjKGhkLkRiLCBoZC5BZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2MucHVzaChYYik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5OYiA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiID8gQWIgOiBbMCwgMCwgMF0pO1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMgPyBNYyA6IFswLCAwLCAwLCAxXSk7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHJcblx0XHRcdHRoaXMuUmIgPSAwLjA7XHJcblx0XHRcdHRoaXMud2QgPSAwLjA7XHJcblx0XHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnBhdXNlZF8gPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5KZCA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdHRoaXMuTmIoQWIsIE1jKTtcclxuXHJcblx0XHR0aGlzLnNjLnB1c2guYXBwbHkodGhpcy5zYywgdGhpcy50Yyk7XHJcblx0XHR0aGlzLnRjLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0dGhpcy52ZC5KZCgpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLklkID0gZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHJcblx0XHRpZiAodGhpcy5wYXVzZWRfKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLlRkKEFiLCBNYyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLndkID0gdGhpcy5SYjtcclxuXHJcblx0XHRpZiAoQWIpIHtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGlmIChRYiA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdHZhciBzaGlmdCA9IFtdO1xyXG5cdFx0XHRcdGN0eC5nKHNoaWZ0LCBBYiwgdGhpcy5CYik7XHJcblx0XHRcdFx0Y3R4LlQodGhpcy5hZCwgc2hpZnQpO1xyXG5cdFx0XHRcdGN0eC53KHRoaXMuYWQsIHRoaXMuYWQsIFFiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChNYylcclxuXHRcdHtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpYztcclxuXHJcblx0XHRpZiAodGhpcy5aYyAmJiAhdGhpcy5nZW5lcmF0b3JzUGF1c2VkXykge1xyXG5cdFx0XHRpYyA9IHRoaXMudmQuSWQoUWIsIEFiLCBNYyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiKTtcclxuXHJcblx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRpYyA9IDA7XHJcblx0XHRcdHRoaXMuUmIgKz0gUWI7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICh2YXIgV2IgPSBpYzsgV2IgPCB0aGlzLnRjLmxlbmd0aDspIHtcclxuXHRcdFx0dmFyIFhiID0gdGhpcy50Y1tXYl07XHJcblxyXG5cdFx0XHRpZiAoIVhiLm9jKSB7XHJcblx0XHRcdFx0WGIuSWQoUWIpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5XYy5BYyh0aGlzLnRjW1diXSkpIHtcclxuXHRcdFx0XHRcdFhiLndjKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMueGQoV2IpKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0WGIucmMoUWIpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0KytXYjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRsZC5wcm90b3R5cGUueGQgPSBmdW5jdGlvbiAoamUpIHtcclxuXHRcdHZhciBYYiA9IHRoaXMudGNbamVdO1xyXG5cclxuXHRcdHZhciByZWFkeSA9IHRydWU7XHJcblxyXG5cdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IFhiLktjLmxlbmd0aDsgKytpZCkge1xyXG5cdFx0XHR2YXIgQmQgPSBYYi5LY1tpZF0uQmQ7XHJcblxyXG5cdFx0XHRpZiAoQmQuYWN0aXZhdGVkKCkgfHwgQmQudGMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHJlYWR5ID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocmVhZHkpIHtcclxuXHRcdFx0dGhpcy5zYy5wdXNoKHRoaXMudGNbamVdKTtcclxuXHRcdFx0dGhpcy50Yy5zcGxpY2UoamUsIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSGQgPSBmdW5jdGlvbiAoZmUsIGdlKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC5IZChmZSwgZ2UpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVlID0gZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5UZCA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChNYykge1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS51YyA9IGZ1bmN0aW9uIChtZCwgbmQpIHtcclxuXHRcdHRoaXMuWWMucHVzaCh7IERiOiBtZCwgQWQ6IG5kIH0pO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3VucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnBhdXNlZF8gPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2VHZW5lcmF0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZW5lcmF0b3JzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF87XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLlpjID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5kaXNhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5aYztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovZ2V0TnVtUGFydGljbGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGMubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0dmFyIGtlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIENiID0gdGhpcztcclxuXHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIHZlLCBvcHRpb25zKSB7XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsID0gd2U7XHJcblxyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuTWMgPSBbXTtcclxuXHJcblx0XHRcdC8vIGtlIEFkXHJcblxyXG5cdFx0XHR0aGlzLm9kID0gW107XHJcblxyXG5cdFx0XHR0aGlzLnBkID0gZnVuY3Rpb24gKG1kKSB7XHJcblx0XHRcdFx0dmFyIEJkID0gbmV3IGxkKHRoaXMsIG1kLCB2ZSk7XHJcblx0XHRcdFx0QmQuTmIodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdFx0dGhpc1tcIl9cIi5jb25jYXQobWQubmFtZSldID0gQmQ7XHJcblx0XHRcdFx0dGhpcy5vZC5wdXNoKEJkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdFx0XHR0aGlzLkNkID0gMC4wO1xyXG5cdFx0XHRcdHRoaXMuUmIgPSAwLjA7XHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdFx0Y3R4LlUodGhpcy5NYywgTWMgPyBNYyA6IFswLCAwLCAwLCAxXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoQWIsIE1jKTtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwucWQodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy4vKiovcGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5wYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblx0XHRcdFx0dGhpcy4vKiovdXBkYXRlKHRoaXMuVWQsIEFiLCBNYyk7XHJcblx0XHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzdGFydCA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMpIHtcclxuXHJcblx0XHR0aGlzLk5iKC8qKi9wb3NpdGlvbiA/IC8qKi9wb3NpdGlvbiA6IHRoaXMuQWIsIC8qKi9yb3RhdGlvbiA/IC8qKi9yb3RhdGlvbiA6IHRoaXMuTWMpO1xyXG5cdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5KZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2VuZXJhdG9yc1BhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wYXVzZWQpIHtcclxuXHRcdFx0dGhpcy4vKiovcGF1c2VBbGxFbWl0dGVycygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblx0XHRcdHRoaXMuLyoqL3VwZGF0ZSh0aGlzLlVkLCB0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuemVyb1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLklkKDAsIHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91cGRhdGUgPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0aWYgKHRoaXMuRGQgPiAwLjApXHJcblx0XHRcdHRoaXMudXBkYXRlRml4ZWQoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudXBkYXRlRmxleCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS51cGRhdGVGaXhlZCA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHR2YXIgdXBkYXRlZFRpbWUgPSAwLjA7XHJcblx0XHR2YXIgaGMgPSBbXTtcclxuXHRcdGN0eC5UKGhjLCB0aGlzLkFiKTtcclxuXHRcdHZhciBmcmFtZVJvdGF0aW9uID0gW107XHJcblx0XHRjdHguVShmcmFtZVJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uICYmIGN0eC5lcXVhbHYzXygvKiovcG9zaXRpb24sIHRoaXMuQWIpKVxyXG5cdFx0XHQvKiovcG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24gJiYgY3R4LmVxdWFscV8oLyoqL3JvdGF0aW9uLCB0aGlzLk1jKSlcclxuXHRcdFx0LyoqL3JvdGF0aW9uID0gbnVsbDtcclxuXHJcblx0XHR3aGlsZSAoKC8qKi9kdCAtIHVwZGF0ZWRUaW1lKSArIHRoaXMuQ2QgPj0gdGhpcy5EZCkge1xyXG5cdFx0XHR2YXIgY2MgPSB0aGlzLlJiO1xyXG5cclxuXHRcdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0XHRjdHguYWIoaGMsIHRoaXMuQWIsIC8qKi9wb3NpdGlvbiwgdXBkYXRlZFRpbWUgLyAvKiovZHQpO1xyXG5cclxuXHRcdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0XHRjdHguc2xlcnBxKGZyYW1lUm90YXRpb24sIHRoaXMuTWMsIC8qKi9yb3RhdGlvbiwgdXBkYXRlZFRpbWUgLyAvKiovZHQpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0dGhpcy5vZFtpXS5JZCh0aGlzLkRkLCBoYywgZnJhbWVSb3RhdGlvbik7XHJcblxyXG5cdFx0XHRcdHRoaXMuUmIgPSBjYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlZFRpbWUgKz0gdGhpcy5EZCAtIHRoaXMuQ2Q7XHJcblx0XHRcdHRoaXMuQ2QgPSAwLjA7XHJcblx0XHRcdHRoaXMuUmIgPSBjYyArIHRoaXMuRGQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cclxuXHRcdHRoaXMuQ2QgKz0gLyoqL2R0IC0gdXBkYXRlZFRpbWU7XHJcblx0fVxyXG5cdFxyXG5cdGtlLnByb3RvdHlwZS51cGRhdGVGbGV4ID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbik7XHJcblx0XHRcdHRoaXMuUmIgPSBjYztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlJiID0gY2MgKyAvKiovZHQ7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHRcclxuXHRrZS5wcm90b3R5cGUuLyoqL3Jlc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uVGQodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3NldFByb3BlcnR5SW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgvKiovbmFtZSwgLyoqL3ZhbHVlKSB7XHJcblx0XHR2YXIgcHJvcE5hbWUgPSBcIl9cIi5jb25jYXQoLyoqL25hbWUpO1xyXG5cclxuXHRcdGlmICgvKiovdmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRpZiAoLyoqL3ZhbHVlLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHRjdHguUyh0aGlzLm9kW2ldW3Byb3BOYW1lXSwgLyoqL3ZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHRjdHguVCh0aGlzLm9kW2ldW3Byb3BOYW1lXSwgLyoqL3ZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldW3Byb3BOYW1lXSA9IC8qKi92YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9wYXVzZUFsbEVtaXR0ZXJzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdW5wYXVzZUFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3VucGF1c2UoKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9wcmVzaW1OZWVkZWQpIHtcclxuXHRcdFx0dGhpcy4vKiovdXBkYXRlKHRoaXMuVWQsIHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovYXJlQWxsRW1pdHRlcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9kW2ldLnBhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3BhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZUdlbmVyYXRvcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovYXJlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9kW2ldLmdlbmVyYXRvcnNQYXVzZWQoKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovZ2V0TnVtUGFydGljbGVzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbnVtUGFydGljbGVzID0gMDtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0bnVtUGFydGljbGVzICs9IHRoaXMub2RbaV0uZ2V0TnVtUGFydGljbGVzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bVBhcnRpY2xlcztcclxuXHR9XHJcblxyXG5cclxuXHR2YXIgbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIHJlbmRlckJ1ZmZlciwgb3B0aW9ucykge1xyXG5cdFx0XHRsZS5wcm90b3R5cGUuX2luaXQuY2FsbCh0aGlzLCB3ZSwgQWIsIE1jLCBvZSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHR0aGlzLnRleHR1cmVzUmVtYXAgPSBbXTtcclxuXHJcblx0XHRcdHZhciBpbmRpY2VzID0gW107XHJcblxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHZlckRpc3A7XHJcblx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuLyoqL21vZGVsLlhlOyArK1diKSB7XHJcblx0XHRcdFx0XHR2ZXJEaXNwID0gV2IgKiA0O1xyXG5cdFx0XHRcdFx0aW5kaWNlcy5wdXNoKHZlckRpc3AgKyAwLCB2ZXJEaXNwICsgMywgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAxLCB2ZXJEaXNwICsgMywgdmVyRGlzcCArIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIgPSByZW5kZXJCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLmluaXRpYWxpemUodGhpcy4vKiovbW9kZWwuWGUgKiA0LCBbMl0sIGluZGljZXMsIHRoaXMuLyoqL21vZGVsLlhlKTtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19udW1JbmRpY2VzID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxlLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRsZS5wcm90b3R5cGUuLyoqL2ZpbGxHZW9tZXRyeUJ1ZmZlcnMgPSBmdW5jdGlvbiAoLyoqL2NhbWVyYVJpZ2h0LCAvKiovY2FtZXJhVXAsIC8qKi9jYW1lcmFEaXIpIHtcclxuXHRcdHRoaXMucmVuZGVyQnVmZmVyLmNsZWFudXAoKTtcclxuXHRcdHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub2QuZm9yRWFjaChmdW5jdGlvbiAoQmQpIHtcclxuXHRcdFx0QmQudWUoLyoqL2NhbWVyYVJpZ2h0LCAvKiovY2FtZXJhVXAsIC8qKi9jYW1lcmFEaXIsIHRoaXMucmVuZGVyQnVmZmVyKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKVxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5wdXNoUmVuZGVyQ2FsbCh0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKTtcclxuXHR9XHJcblxyXG5cdHZhciBtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgb3B0aW9ucykge1xyXG5cdFx0XHRtZS5wcm90b3R5cGUuX2luaXQuY2FsbCh0aGlzLCB3ZSwgQWIsIE1jLCBuZSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHR0aGlzLm1hdGVyaWFscyA9IFtdO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5tYXRlcmlhbHMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLm1hdGVyaWFscy5wdXNoKFsnc291cmNlLW92ZXInLCAnbGlnaHRlcicsICdtdWx0aXBseSddW3ZhbHVlXSk7XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdFx0dGhpcy4vKiovdGV4dHVyZURlc2NzID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtZS5wcm90b3R5cGUgPSBuZXcga2UoKTtcclxuXHJcblx0bWUucHJvdG90eXBlLi8qKi9kcmF3ID0gZnVuY3Rpb24gKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5IZCgvKiovY29udGV4dCwgLyoqL2NhbWVyYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZVdHTEluc3RhbmNlID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucykge1xyXG5cdFx0dmFyIExkID0gbmV3IGxlKCk7XHJcblx0XHRMZC5faW5pdCh0aGlzLCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL3JlbmRlckJ1ZmZlciwgLyoqL29wdGlvbnMgfHwge30pO1xyXG5cdFx0cmV0dXJuIExkO1xyXG5cdH1cclxuXHJcblx0dGhpcy5jcmVhdGVDYW52YXMyREluc3RhbmNlID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cdFx0dmFyIExkID0gbmV3IG1lKCk7XHJcblx0XHRMZC5faW5pdCh0aGlzLCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMgfHwge30pO1xyXG5cdFx0cmV0dXJuIExkO1xyXG5cdH1cclxuXHR0aGlzLnRleHR1cmVzID0gWydzcGFya2xlQmxpbmsucG5nJ107XHJcblx0dGhpcy5tYXRlcmlhbHMgPSBbMF07XHJcblx0dGhpcy5yZW5kZXJTdHlsZXMgPSBbe21hdGVyaWFsSW5kZXg6MCx0ZXh0dXJlSW5kaWNlczpbMF19XTtcclxuXHR0aGlzLlhlID0gMTAwO1xyXG5cclxuXHRmdW5jdGlvbiBFbWl0dGVyX0RlZmF1bHRFbWl0dGVyKCkge1xyXG5cclxuXHRcdHZhciBfMSA9IFtdLCBfMyA9IFtdLCBfNj1bXSwgXzgsIF85LCBfMTAsIF83O1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzoxLFNjOjEscmVuZGVyU3R5bGVJbmRleDowfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIkRlZmF1bHRFbWl0dGVyXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMTA7XHJcblx0XHRcdHZkLkdiID0gMTtcclxuXHRcdFx0dmQuSmIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUGIgPSBmdW5jdGlvbihRYiwgQmQsIHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMTA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgXzEpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF8zLCAxMDAsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fNCwgXzMpO1xyXG5cdFx0XHRYYi5fNSA9IDA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgXzEpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF8zLCAxMDAsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fNCwgXzMpO1xyXG5cdFx0XHRYYi5fNSA9IDA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyArPSBRYjtcclxuXHRcdFx0Y3R4LlQoXzYsIFhiLl80KTtcclxuXHRcdFx0Y3R4LnUoXzYsIF82LCBRYik7XHJcblx0XHRcdGN0eC5jKF82LCBfNiwgWGIuXzIpO1xyXG5cdFx0XHRjdHguVChYYi5fMiwgXzYpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0XHRfOCA9IDMwO1xyXG5cdFx0XHRfOSA9IDE7XHJcblx0XHRcdF8xMCA9IF85O1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl81O1xyXG5cdFx0XHRjdHguVihYYi5OZCxfOCxfOCk7XHJcblx0XHRcdGN0eC5UKFhiLmdmLFsxLDEsMV0pO1xyXG5cdFx0XHRYYi5PZCA9IF8xMDtcclxuXHRcdFx0WGIuUWMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF83ID0gMjtcclxuXHRcdFx0aWYgKFhiLl8gPiBfNykgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5xZCA9IGZ1bmN0aW9uKExkKSB7XHJcblx0XHRMZC5EZCA9IDAuMDMzMzMzMztcclxuXHRcdExkLlVkID0gMDtcclxuXHRcdExkLnJhbmQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCk7IH07XHJcblx0XHRMZC5wZChuZXcgRW1pdHRlcl9EZWZhdWx0RW1pdHRlcigpKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5yZXR1cm4gTm9OYW1lRWZmZWN0O1xyXG59KSk7XHJcbiJdfQ==
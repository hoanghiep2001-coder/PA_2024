
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXE5vTmFtZUVmZmVjdC5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJOZXV0cmlub0VmZmVjdCIsIm5hbWVzcGFjZSIsIl9fbGFzdF9fIiwic2VsZiIsIk5vTmFtZUVmZmVjdCIsImN0eCIsIkRiIiwibmUiLCJMZCIsIkJkIiwid2UiLCJwZSIsImxlbmd0aCIsIkxjIiwicHJvdG90eXBlIiwiRWMiLCJGYyIsInhlIiwiZmUiLCJBYiIsIlhiIiwiR2MiLCJpYiIsIk1kIiwiSGMiLCJNYXRoIiwiY29zIiwiSWMiLCJzaW4iLCJ5ZSIsIkFlIiwiTmQiLCJ6ZSIsInRyYW5zZm9ybSIsInEiLCJNYyIsInoyIiwieHkiLCJ3eiIsIlBjIiwiZ2UiLCJ2YyIsIkJlIiwib2MiLCJPZCIsIkRlIiwiZmxvb3IiLCJRYyIsIlJjIiwiRWUiLCJzbGljZSIsImRmIiwiYWJzIiwiZWYiLCJzYXZlIiwidHJhbnNsYXRlIiwiUGQiLCJnbG9iYWxBbHBoYSIsImdmIiwiWWUiLCJUYyIsIlplIiwiVWMiLCJhZiIsImJmIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZHJhd0ltYWdlIiwiaW1hZ2UiLCJ4IiwieSIsImZpbGxTdHlsZSIsImZmIiwiZmlsbFJlY3QiLCJjZiIsInJlc3RvcmUiLCJIZCIsIm1hdGVyaWFscyIsIm1vZGVsIiwicmVuZGVyU3R5bGVzIiwicmVuZGVyU3R5bGVJbmRleCIsIm1hdGVyaWFsSW5kZXgiLCJ0ZXh0dXJlRGVzY3MiLCJ0ZXh0dXJlSW5kaWNlcyIsIndpZHRoIiwiaGVpZ2h0IiwiU2MiLCJrZCIsImEiLCJiIiwiVmMiLCJXYiIsInRjIiwic29ydCIsIm9lIiwidmVydGV4IiwicG9zaXRpb24iLCJjb2xvciIsInRleENvb3JkcyIsInFlIiwic2UiLCJyZSIsInRlIiwicmVuZGVyQnVmZmVyIiwiQ2UiLCJ2MCIsInYxIiwidjIiLCJ2MyIsIkZlIiwiR2UiLCJzIiwiYyIsIkhlIiwiSWUiLCJKZSIsIktlIiwidSIsInJnYiIsInYiLCJQZSIsIlFlIiwiUmUiLCJTZSIsIldlIiwidGV4dHVyZXNSZW1hcCIsIlVlIiwiVmUiLCJiZWZvcmVRdWFkIiwicHVzaFZlcnRleCIsIl9fbGFzdFJlbmRlckNhbGwiLCJSZW5kZXJDYWxsIiwibGFzdFJlbmRlckNhbGwiLCJudW1JbmRpY2VzIiwicHVzaFJlbmRlckNhbGwiLCJzdGFydEluZGV4IiwidWUiLCJmb3JFYWNoIiwiZGVwdGgiLCJIIiwibGQiLCJ2ZSIsIlZiIiwiRWIiLCJGYiIsIkdiIiwiSGIiLCJJYiIsIktiIiwiTGIiLCJNYiIsIk5iIiwiT2IiLCJKZCIsIklkIiwiUWIiLCJQYiIsIlJiIiwic3lzdGVtVGltZSIsIlNiIiwiaWMiLCJ6YiIsIlRiIiwiVWIiLCJkaXNhY3RpdmF0ZSIsImFiIiwiQmIiLCJzbGVycHEiLCJwcmV2Um90YXRpb24iLCJKYiIsInNjIiwicG9wIiwidW5zaGlmdCIsIlliIiwiWmIiLCJUIiwiVSIsImFjIiwiYmMiLCJjYyIsImRjIiwic3lzdGVtVGltZUJlZm9yZUZyYW1lIiwic3lzdGVtVGltZUFmdGVyRnJhbWUiLCJlYyIsIk8iLCJoIiwiZmMiLCJyZCIsImhjIiwiamMiLCJrYyIsIlgiLCJtYyIsIktjIiwibmMiLCJpIiwicGMiLCJBZCIsInNkIiwiZmQiLCJnZCIsInFjIiwicmMiLCJqZSIsInVjIiwibWQiLCJuZCIsInB1c2giLCJ4YyIsIndjIiwiYWN0aXZhdGUiLCJ5YyIsIkdkIiwiRWQiLCJ6YyIsIkFjIiwiQ2MiLCJXYyIsImNvbnN0cnVjdCIsIlljIiwiYWQiLCJkZCIsInZkIiwiZWQiLCJ1ZCIsImpkIiwiaWQiLCJoZCIsIndkIiwiWmMiLCJwYXVzZWRfIiwiZ2VuZXJhdG9yc1BhdXNlZF8iLCJXIiwiYXBwbHkiLCJUZCIsInNoaWZ0IiwiZyIsInciLCJ4ZCIsInJlYWR5IiwiYWN0aXZhdGVkIiwic3BsaWNlIiwicGF1c2UiLCJ1bnBhdXNlIiwicGF1c2VkIiwicGF1c2VHZW5lcmF0b3JzIiwidW5wYXVzZUdlbmVyYXRvcnMiLCJnZW5lcmF0b3JzUGF1c2VkIiwiZ2V0TnVtUGFydGljbGVzIiwia2UiLCJDYiIsIl9pbml0Iiwib3B0aW9ucyIsIm9kIiwicGQiLCJjb25jYXQiLCJuYW1lIiwiQ2QiLCJxZCIsIl9wcmVzaW1OZWVkZWQiLCJwYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwicGF1c2VBbGxFbWl0dGVycyIsInplcm9VcGRhdGUiLCJ1cGRhdGUiLCJVZCIsInJlc3RhcnQiLCJyb3RhdGlvbiIsImR0IiwiRGQiLCJ1cGRhdGVGaXhlZCIsInVwZGF0ZUZsZXgiLCJ1cGRhdGVkVGltZSIsImZyYW1lUm90YXRpb24iLCJlcXVhbHYzXyIsImVxdWFscV8iLCJyZXNldFBvc2l0aW9uIiwic2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzIiwidmFsdWUiLCJwcm9wTmFtZSIsIkFycmF5IiwiUyIsInVucGF1c2VBbGxFbWl0dGVycyIsImFyZUFsbEVtaXR0ZXJzUGF1c2VkIiwidW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwiYXJlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnNQYXVzZWQiLCJudW1QYXJ0aWNsZXMiLCJsZSIsImNhbGwiLCJpbmRpY2VzIiwidmVyRGlzcCIsIlhlIiwiaW5pdGlhbGl6ZSIsIl9fbnVtSW5kaWNlcyIsImZpbGxHZW9tZXRyeUJ1ZmZlcnMiLCJjYW1lcmFSaWdodCIsImNhbWVyYVVwIiwiY2FtZXJhRGlyIiwiY2xlYW51cCIsIm1lIiwiZHJhdyIsImNvbnRleHQiLCJjYW1lcmEiLCJjcmVhdGVXR0xJbnN0YW5jZSIsImNyZWF0ZUNhbnZhczJESW5zdGFuY2UiLCJ0ZXh0dXJlcyIsIkVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIiLCJfMSIsIl8zIiwiXzQiLCJfNSIsIl82IiwiXzkiLCJfMTAiLCJfMTBmcyIsIl8xMHZzIiwiXzEwcnciLCJfMTByd24iLCJfMTByd2wiLCJfMTB2IiwiXzEwcCIsIl8xMGR0bCIsIl8xMGR0cCIsIl8xMGRmIiwiXzEwZnNkIiwiXzEyIiwiXzExIiwiXzEzIiwiXzE0IiwiXzE0aTAiLCJfMTRzMCIsIl8xNSIsIl8xNiIsIl8xNyIsIl8iLCJfMiIsInJiIiwicmFuZCIsIl83IiwiXzgiLCJWIiwibmIiLCJyYW5kb20iLCJmdW5jVmFsdWVzIiwiaW5kZXhJbnQiLCJuZXh0SW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0MsV0FBVUEsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBckQsRUFBa0U7QUFDOURBLElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkQsT0FBTyxFQUF4QjtBQUNILEdBRkQsTUFFTyxJQUFJLE9BQU9HLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBM0MsRUFBZ0Q7QUFDbkRELElBQUFBLE1BQU0sQ0FBQyxDQUFDLFNBQUQsQ0FBRCxFQUFjLFVBQVVGLE9BQVYsRUFBbUI7QUFDbkMsT0FBQ0YsSUFBSSxDQUFDTSxjQUFMLEdBQXNCSixPQUF2QixFQUFnQyxjQUFoQyxJQUFrREQsT0FBTyxFQUF6RDtBQUNILEtBRkssQ0FBTjtBQUdILEdBSk0sTUFJQTtBQUNILFFBQUlNLFNBQVMsR0FBSVAsSUFBSSxDQUFDTSxjQUFMLEtBQXdCTixJQUFJLENBQUNNLGNBQUwsR0FBc0IsRUFBOUMsQ0FBakI7QUFDQUMsSUFBQUEsU0FBUyxDQUFDQyxRQUFWLEdBQXFCRCxTQUFTLENBQUMsY0FBRCxDQUFULEdBQTRCTixPQUFPLEVBQXhEO0FBQ0g7QUFDSixDQVhBLEVBV0MsT0FBT1EsSUFBUCxLQUFnQixXQUFoQixHQUE4QkEsSUFBOUIsU0FYRCxFQVc0QyxZQUFZO0FBRXpELFdBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLFFBQUlDLEVBQUUsR0FBRyxJQUFUOztBQUVBLFFBQUlDLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUMxQixXQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7O0FBRUEsVUFBSSxLQUFLQSxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzdCLGFBQUtGLEVBQUwsR0FBVSxLQUFLRCxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjLENBQWQsQ0FBVjtBQUVBLGFBQUtFLEVBQUwsR0FBVSxDQUFDTixFQUFFLENBQUNPLFNBQUgsQ0FBYUMsRUFBZCxFQUNUUixFQUFFLENBQUNPLFNBQUgsQ0FBYUUsRUFESixFQUNRLEtBQUtOLEVBQUwsQ0FBUU8sRUFEaEIsQ0FBVjtBQUVBLE9BTEQsTUFPQyxLQUFLUCxFQUFMLEdBQVUsSUFBVjtBQUNELEtBWkQ7O0FBY0FILElBQUFBLEVBQUUsQ0FBQ08sU0FBSCxHQUFlO0FBQ2RDLE1BQUFBLEVBQUUsRUFBRSxZQUFVRyxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3pCLFlBQUlDLEVBQUUsR0FBR2hCLEdBQUcsQ0FBQ2lCLEVBQUosQ0FBT0YsRUFBRSxDQUFDRyxFQUFWLENBQVQ7QUFDQSxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxFQUFULENBQVQ7QUFDQSxZQUFJTSxFQUFFLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTUCxFQUFULENBQVQ7QUFDQSxZQUFJUSxFQUFFLEdBQUd4QixHQUFHLENBQUN5QixFQUFKLENBQU9WLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBUCxDQUFUO0FBQ0EsWUFBSUMsRUFBRSxHQUFHM0IsR0FBRyxDQUFDeUIsRUFBSixDQUFPVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQVAsQ0FBVDtBQUNBYixRQUFBQSxFQUFFO0FBQUM7QUFBSWUsUUFBQUEsU0FBUCxDQUFpQkosRUFBRSxHQUFHTCxFQUF0QixFQUEwQkssRUFBRSxHQUFHRixFQUEvQixFQUFtQ0ssRUFBRSxHQUFHLENBQUNMLEVBQXpDLEVBQTZDSyxFQUFFLEdBQUdSLEVBQWxELEVBQXNETCxFQUFFLENBQUMsQ0FBRCxDQUF4RCxFQUE2REEsRUFBRSxDQUFDLENBQUQsQ0FBL0Q7QUFDQSxPQVJhO0FBVWRILE1BQUFBLEVBQUUsRUFBRSxZQUFVRSxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3pCLFlBQUljLENBQUMsR0FBR2QsRUFBRSxDQUFDZSxFQUFYO0FBQ0EsWUFBSUMsRUFBRSxHQUFHLE1BQU1GLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBdkI7QUFDQSxZQUFJRyxFQUFFLEdBQUcsTUFBTUgsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLFlBQUlJLEVBQUUsR0FBRyxNQUFNSixDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0EsWUFBSUwsRUFBRSxHQUFHeEIsR0FBRyxDQUFDeUIsRUFBSixDQUFPVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQVAsQ0FBVDtBQUNBLFlBQUlDLEVBQUUsR0FBRzNCLEdBQUcsQ0FBQ3lCLEVBQUosQ0FBT1YsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixDQUFQLENBQVQ7QUFDQWIsUUFBQUEsRUFBRTtBQUFDO0FBQUllLFFBQUFBLFNBQVAsQ0FDQ0osRUFBRSxJQUFJLE1BQU0sTUFBTUssQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUEwQkUsRUFBOUIsQ0FESCxFQUVDUCxFQUFFLElBQUlRLEVBQUUsR0FBR0MsRUFBVCxDQUZILEVBR0NOLEVBQUUsSUFBSU0sRUFBRSxHQUFHRCxFQUFULENBSEgsRUFJQ0wsRUFBRSxJQUFJLE1BQU1FLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxHQUFvQkUsRUFBcEIsR0FBeUIsR0FBN0IsQ0FKSCxFQUtDakIsRUFBRSxDQUFDLENBQUQsQ0FMSCxFQUtRQSxFQUFFLENBQUMsQ0FBRCxDQUxWO0FBTUEsT0F2QmE7QUF5QmRvQixNQUFBQSxFQUFFLEVBQUUsWUFBVXJCLEVBQVYsRUFBY0UsRUFBZCxFQUFrQm9CLEVBQWxCLEVBQXNCO0FBQ3pCcEIsUUFBQUEsRUFBRSxDQUFDcUIsRUFBSCxDQUFNdkIsRUFBTixFQUFVLENBQUMsQ0FBWCxFQUFjc0IsRUFBZDs7QUFFQSxZQUFJLEtBQUs5QixFQUFULEVBQWE7QUFFWixjQUFJLEtBQUtnQyxFQUFMLElBQVcsSUFBWCxJQUFtQixDQUFDdEIsRUFBRSxDQUFDdUIsRUFBM0IsRUFBK0I7QUFFOUIsZ0JBQUl2QixFQUFFLENBQUN3QixFQUFILEdBQVEsS0FBWixFQUFtQjtBQUNsQixrQkFBSUMsRUFBRSxHQUFHcEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBQ0Esa0JBQUlDLEVBQUUsR0FBR3hCLElBQUksQ0FBQ3FCLEtBQUwsQ0FBVzFCLEVBQUUsQ0FBQzJCLEVBQUgsR0FBUSxLQUFLckMsRUFBTCxDQUFRc0MsRUFBM0IsQ0FBVDtBQUVBLGtCQUFJN0IsRUFBRSxHQUFHQyxFQUFFLENBQUNELEVBQUgsQ0FBTStCLEtBQU4sRUFBVDtBQUNBLGtCQUFJbkIsRUFBRSxHQUFHWCxFQUFFLENBQUNXLEVBQUgsQ0FBTW1CLEtBQU4sRUFBVDs7QUFDQSxrQkFBSSxDQUFDVixFQUFELElBQU9BLEVBQUU7QUFBQztBQUFJUCxjQUFBQSxTQUFQLENBQWlCZCxFQUFqQixFQUFxQlksRUFBckIsQ0FBWCxFQUFxQztBQUVwQyxvQkFBSW9CLEVBQUUsR0FBRzFCLElBQUksQ0FBQzJCLEdBQUwsQ0FBU3JCLEVBQUUsQ0FBQyxDQUFELENBQVgsQ0FBVDtBQUNBLG9CQUFJc0IsRUFBRSxHQUFHNUIsSUFBSSxDQUFDMkIsR0FBTCxDQUFTckIsRUFBRSxDQUFDLENBQUQsQ0FBWCxDQUFUOztBQUVBLG9CQUFJb0IsRUFBRSxHQUFHLEtBQUwsSUFBY0UsRUFBRSxHQUFHLEtBQXZCLEVBQThCO0FBQzdCbkMsa0JBQUFBLEVBQUUsQ0FBQ29DLElBQUg7QUFDQSx1QkFBS3pDLEVBQUwsQ0FBUUssRUFBUixFQUFZQyxFQUFaLEVBQWdCQyxFQUFoQjtBQUVBRixrQkFBQUEsRUFBRSxDQUFDcUMsU0FBSCxDQUFhLENBQUNKLEVBQUQsR0FBTS9CLEVBQUUsQ0FBQ29DLEVBQUgsQ0FBTSxDQUFOLENBQW5CLEVBQTZCLENBQUNILEVBQUQsSUFBTyxJQUFJakMsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBWCxDQUE3QjtBQUNBdEMsa0JBQUFBLEVBQUUsQ0FBQ3VDLFdBQUgsSUFBa0JyQyxFQUFFLENBQUN3QixFQUFyQjs7QUFFQSxzQkFBSXhCLEVBQUUsQ0FBQ3NDLEVBQUgsQ0FBTSxDQUFOLElBQVcsS0FBWCxJQUFvQnRDLEVBQUUsQ0FBQ3NDLEVBQUgsQ0FBTSxDQUFOLElBQVcsS0FBL0IsSUFBd0N0QyxFQUFFLENBQUNzQyxFQUFILENBQU0sQ0FBTixJQUFXLEtBQXZELEVBQThEO0FBQzdELHdCQUFJUCxFQUFFLElBQUksQ0FBTixJQUFXRSxFQUFFLElBQUksQ0FBckIsRUFBd0I7QUFDdkIsMEJBQUlNLEVBQUUsR0FBR1IsRUFBRSxHQUFHLEtBQUtTLEVBQVYsR0FBZVQsRUFBZixHQUFvQixLQUFLUyxFQUFsQztBQUNBLDBCQUFJQyxFQUFFLEdBQUdSLEVBQUUsR0FBRyxLQUFLUyxFQUFWLEdBQWVULEVBQWYsR0FBb0IsS0FBS1MsRUFBbEM7QUFFQXpELHNCQUFBQSxHQUFHLENBQUMwRCxFQUFKLENBQU9KLEVBQVAsRUFBV0UsRUFBWDtBQUVBeEQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0Msd0JBQVAsR0FBa0MsTUFBbEM7QUFDQTVELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9FLFNBQVAsQ0FBaUIsS0FBS3hCLEVBQUwsQ0FBUXlCLEtBQXpCLEVBQ0MsS0FBS3pCLEVBQUwsQ0FBUTBCLENBQVIsR0FBWSxLQUFLUixFQUFMLEdBQVVmLEVBRHZCLEVBQzJCLEtBQUtILEVBQUwsQ0FBUTJCLENBQVIsR0FBWSxLQUFLUCxFQUFMLEdBQVViLEVBRGpELEVBRUMsS0FBS1csRUFGTixFQUVVLEtBQUtFLEVBRmYsRUFHQyxDQUhELEVBR0ksQ0FISixFQUdPSCxFQUhQLEVBR1dFLEVBSFg7QUFLQXhELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9DLHdCQUFQLEdBQWtDLFVBQWxDO0FBQ0E1RCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPTSxTQUFQLEdBQW1CakUsR0FBRyxDQUFDa0UsRUFBSixDQUFPbkQsRUFBRSxDQUFDc0MsRUFBVixDQUFuQjtBQUNBckQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT1EsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQmIsRUFBdEIsRUFBMEJFLEVBQTFCO0FBRUF4RCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPQyx3QkFBUCxHQUFrQyxrQkFBbEM7QUFDQTVELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9FLFNBQVAsQ0FBaUIsS0FBS3hCLEVBQUwsQ0FBUXlCLEtBQXpCLEVBQ0MsS0FBS3pCLEVBQUwsQ0FBUTBCLENBQVIsR0FBWSxLQUFLUixFQUFMLEdBQVVmLEVBRHZCLEVBQzJCLEtBQUtILEVBQUwsQ0FBUTJCLENBQVIsR0FBWSxLQUFLUCxFQUFMLEdBQVViLEVBRGpELEVBRUMsS0FBS1csRUFGTixFQUVVLEtBQUtFLEVBRmYsRUFHQyxDQUhELEVBR0ksQ0FISixFQUdPSCxFQUhQLEVBR1dFLEVBSFg7QUFLQTNDLHNCQUFBQSxFQUFFLENBQUNnRCxTQUFILENBQWE3RCxHQUFHLENBQUNvRSxFQUFqQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQmQsRUFBM0IsRUFBK0JFLEVBQS9CLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDLEVBQXlDVixFQUF6QyxFQUE2Q0UsRUFBN0M7QUFDQTtBQUNELG1CQXpCRCxNQTBCSztBQUNKbkMsb0JBQUFBLEVBQUUsQ0FBQ2dELFNBQUgsQ0FBYSxLQUFLeEIsRUFBTCxDQUFReUIsS0FBckIsRUFDQyxLQUFLekIsRUFBTCxDQUFRMEIsQ0FBUixHQUFZLEtBQUtSLEVBQUwsR0FBVWYsRUFEdkIsRUFDMkIsS0FBS0gsRUFBTCxDQUFRMkIsQ0FBUixHQUFZLEtBQUtQLEVBQUwsR0FBVWIsRUFEakQsRUFFQyxLQUFLVyxFQUZOLEVBRVUsS0FBS0UsRUFGZixFQUVtQixDQUZuQixFQUVzQixDQUZ0QixFQUV5QlgsRUFGekIsRUFFNkJFLEVBRjdCO0FBR0E7O0FBRURuQyxrQkFBQUEsRUFBRSxDQUFDd0QsT0FBSDtBQUNBO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7O0FBRUR0RCxRQUFBQSxFQUFFLENBQUNxQixFQUFILENBQU12QixFQUFOLEVBQVUsQ0FBVixFQUFhc0IsRUFBYjtBQUNBLE9BMUZhO0FBNEZkbUMsTUFBQUEsRUFBRSxFQUFFLFlBQVV6RCxFQUFWLEVBQWNzQixFQUFkLEVBQWtCO0FBQ3JCdEIsUUFBQUEsRUFBRSxDQUFDb0MsSUFBSDs7QUFFQSxZQUFJLEtBQUs1QyxFQUFULEVBQWE7QUFDWlEsVUFBQUEsRUFBRSxDQUFDK0Msd0JBQUgsR0FBOEIsS0FBS3pELEVBQUwsQ0FBUW9FLFNBQVIsQ0FBa0IsS0FBS3BFLEVBQUw7QUFBUTtBQUFJcUUsVUFBQUEsS0FBWixDQUFrQkMsWUFBbEIsQ0FBK0IsS0FBS3BFLEVBQUwsQ0FBUXFFLGdCQUF2QyxFQUF5REMsYUFBM0UsQ0FBOUI7QUFDQSxlQUFLdEMsRUFBTCxHQUFVLEtBQUtsQyxFQUFMLENBQVF5RSxZQUFSLENBQXFCLEtBQUt6RSxFQUFMO0FBQVE7QUFBSXFFLFVBQUFBLEtBQVosQ0FBa0JDLFlBQWxCLENBQStCLEtBQUtwRSxFQUFMLENBQVFxRSxnQkFBdkMsRUFBeURHLGNBQXpELENBQXdFLENBQXhFLENBQXJCLENBQVY7QUFDQSxTQUhELE1BSUs7QUFDSixlQUFLeEMsRUFBTCxHQUFVLElBQVY7QUFDQTs7QUFFRCxZQUFJLEtBQUtBLEVBQVQsRUFBYTtBQUNaLGVBQUtrQixFQUFMLEdBQVUsS0FBS2xCLEVBQUwsQ0FBUXlDLEtBQVIsR0FBZ0IsS0FBS3pFLEVBQUwsQ0FBUXNDLEVBQWxDO0FBQ0EsZUFBS2MsRUFBTCxHQUFVLEtBQUtwQixFQUFMLENBQVEwQyxNQUFSLEdBQWlCLEtBQUsxRSxFQUFMLENBQVEyRSxFQUFuQztBQUNBOztBQUVELGlCQUFTQyxFQUFULENBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUNqQixjQUFJRCxDQUFDLENBQUNwRSxFQUFGLENBQUssQ0FBTCxJQUFVcUUsQ0FBQyxDQUFDckUsRUFBRixDQUFLLENBQUwsQ0FBZCxFQUNDLE9BQU8sQ0FBUDtBQUNELGNBQUlvRSxDQUFDLENBQUNwRSxFQUFGLENBQUssQ0FBTCxJQUFVcUUsQ0FBQyxDQUFDckUsRUFBRixDQUFLLENBQUwsQ0FBZCxFQUNDLE9BQU8sQ0FBQyxDQUFSO0FBQ0QsaUJBQU8sQ0FBUDtBQUNBOztBQUVELGdCQUFRLEtBQUtWLEVBQUwsQ0FBUWdGLEVBQWhCO0FBQ0MsZUFBSyxDQUFMO0FBQ0MsaUJBQUssSUFBSUMsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLakYsRUFBTCxDQUFRa0YsRUFBUixDQUFXL0UsTUFBakMsRUFBeUMsRUFBRThFLEVBQTNDLEVBQStDO0FBQzlDLG1CQUFLbkQsRUFBTCxDQUFRckIsRUFBUixFQUFZLEtBQUtULEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFaLEVBQTRCbEQsRUFBNUI7QUFDQTs7QUFDRDs7QUFDRCxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJa0QsRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUF6QixFQUFpQzhFLEVBQUUsS0FBSyxDQUF4QyxHQUE0QztBQUMzQyxtQkFBS25ELEVBQUwsQ0FBUXJCLEVBQVIsRUFBWSxLQUFLVCxFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBWixFQUE0QmxELEVBQTVCO0FBQ0E7O0FBQ0Q7O0FBQ0QsZUFBSyxDQUFMO0FBQ0MsaUJBQUsvQixFQUFMLENBQVFrRixFQUFSLENBQVdDLElBQVgsQ0FBZ0JOLEVBQWhCOztBQUVBLGlCQUFLLElBQUlJLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQWpDLEVBQXlDLEVBQUU4RSxFQUEzQyxFQUErQztBQUM5QyxtQkFBS25ELEVBQUwsQ0FBUXJCLEVBQVIsRUFBWSxLQUFLVCxFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBWixFQUE0QmxELEVBQTVCO0FBQ0E7O0FBQ0Q7QUFqQkY7O0FBb0JBdEIsUUFBQUEsRUFBRSxDQUFDd0QsT0FBSDtBQUNBO0FBeklhLEtBQWY7O0FBNElBLFFBQUltQixFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFVckYsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0FBRTFCLFdBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUVBLFVBQUksS0FBS0EsRUFBTCxDQUFRQyxFQUFSLENBQVdDLEVBQVgsQ0FBY0MsTUFBZCxHQUF1QixDQUEzQixFQUNDLEtBQUtGLEVBQUwsR0FBVSxLQUFLRCxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjLENBQWQsQ0FBVixDQURELEtBR0MsS0FBS0QsRUFBTCxHQUFVLElBQVY7QUFFRCxXQUFLb0YsTUFBTCxHQUFjLENBQ2I7QUFBRTtBQUFJQyxRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQURhLEVBRWI7QUFBRTtBQUFJRixRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQUZhLEVBR2I7QUFBRTtBQUFJRixRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQUhhLEVBSWI7QUFBRTtBQUFJRixRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQUphLENBQWQ7QUFLQSxLQWZEOztBQWlCQUosSUFBQUEsRUFBRSxDQUFDL0UsU0FBSCxHQUFlO0FBQ2RvRixNQUFBQSxFQUFFLEVBQUUsWUFBVTlFLEVBQVYsRUFBYytFLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsWUFBMUIsRUFBd0M7QUFDM0NsRixRQUFBQSxFQUFFLENBQUNtRixFQUFILENBQU0sQ0FBQyxDQUFQLEVBQVVKLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLFlBQXRCOztBQUVBLFlBQUksS0FBSzVGLEVBQVQsRUFBYTtBQUVaLGNBQUksQ0FBQ1UsRUFBRSxDQUFDdUIsRUFBUixFQUFZO0FBRVgsZ0JBQUk2RCxFQUFFLEdBQUcsS0FBS1YsTUFBTCxDQUFZLENBQVosQ0FBVDtBQUNBLGdCQUFJVyxFQUFFLEdBQUcsS0FBS1gsTUFBTCxDQUFZLENBQVosQ0FBVDtBQUNBLGdCQUFJWSxFQUFFLEdBQUcsS0FBS1osTUFBTCxDQUFZLENBQVosQ0FBVDtBQUNBLGdCQUFJYSxFQUFFLEdBQUcsS0FBS2IsTUFBTCxDQUFZLENBQVosQ0FBVDtBQUVBLGdCQUFJYyxFQUFFLEdBQUcsRUFBVDtBQUFBLGdCQUFhQyxFQUFFLEdBQUcsRUFBbEI7O0FBRUEsZ0JBQUksS0FBS25HLEVBQUwsQ0FBUU8sRUFBUixJQUFjLENBQWxCLEVBQXFCO0FBQ3BCLGtCQUFJc0UsQ0FBQyxHQUFHbEYsR0FBRyxDQUFDaUIsRUFBSixDQUFPRixFQUFFLENBQUNHLEVBQVYsQ0FBUjtBQUNBLGtCQUFJdUYsQ0FBQyxHQUFHLENBQUNyRixJQUFJLENBQUNHLEdBQUwsQ0FBUzJELENBQVQsQ0FBVDtBQUNBLGtCQUFJd0IsQ0FBQyxHQUFHdEYsSUFBSSxDQUFDQyxHQUFMLENBQVM2RCxDQUFULENBQVI7QUFFQXFCLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRWSxDQUFSLEdBQVlYLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVUsQ0FBNUI7QUFDQUYsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFZLENBQVIsR0FBWVgsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVSxDQUE1QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFULEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVksQ0FBUixHQUFZWCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFVLENBQTVCO0FBRUFELGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFDVixFQUFFLENBQUMsQ0FBRCxDQUFILEdBQVNXLENBQVQsR0FBYVYsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVyxDQUE3QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBQ1YsRUFBRSxDQUFDLENBQUQsQ0FBSCxHQUFTVyxDQUFULEdBQWFWLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVcsQ0FBN0I7QUFDQUYsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQUNWLEVBQUUsQ0FBQyxDQUFELENBQUgsR0FBU1csQ0FBVCxHQUFhVixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFXLENBQTdCO0FBQ0EsYUFaRCxNQWFLO0FBQ0osa0JBQUk3RSxDQUFDLEdBQUdkLEVBQUUsQ0FBQ2UsRUFBWDtBQUNBLGtCQUFJQyxFQUFFLEdBQUcsTUFBTUYsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLGtCQUFJRyxFQUFFLEdBQUcsTUFBTUgsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLGtCQUFJSSxFQUFFLEdBQUcsTUFBTUosQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUVBMEUsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLE1BQU0sTUFBTTFFLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsR0FBMEJFLEVBQWxDO0FBQ0F3RSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVF2RSxFQUFFLEdBQUdDLEVBQWI7QUFDQXNFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxNQUFNMUUsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEdBQW9CLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBMUM7QUFFQTJFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUXhFLEVBQUUsR0FBR0MsRUFBYjtBQUNBdUUsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLE1BQU0sTUFBTTNFLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsR0FBMEJFLEVBQWxDO0FBQ0F5RSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsTUFBTTNFLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxHQUFvQixNQUFNQSxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQTFDO0FBQ0E7O0FBRUQsZ0JBQUk4RSxFQUFFLEdBQUcsRUFBVDtBQUFBLGdCQUFhQyxFQUFFLEdBQUcsRUFBbEI7QUFBQSxnQkFBc0JDLEVBQUUsR0FBRyxFQUEzQjtBQUFBLGdCQUErQkMsRUFBRSxHQUFHLEVBQXBDO0FBQ0E5RyxZQUFBQSxHQUFHLENBQUMrRyxDQUFKLENBQU1KLEVBQU4sRUFBVUosRUFBVixFQUFjLENBQUN4RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQUQsR0FBWVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBMUI7QUFDQW5ELFlBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTUgsRUFBTixFQUFVTCxFQUFWLEVBQWN4RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEtBQVksTUFBTVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBbEIsQ0FBZDtBQUNBbkQsWUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNRixFQUFOLEVBQVVMLEVBQVYsRUFBYyxDQUFDekYsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixDQUFELEdBQVlYLEVBQUUsQ0FBQ29DLEVBQUgsQ0FBTSxDQUFOLENBQTFCO0FBQ0FuRCxZQUFBQSxHQUFHLENBQUMrRyxDQUFKLENBQU1ELEVBQU4sRUFBVU4sRUFBVixFQUFjekYsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixLQUFZLE1BQU1YLEVBQUUsQ0FBQ29DLEVBQUgsQ0FBTSxDQUFOLENBQWxCLENBQWQ7QUFFQW5ELFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTVAsRUFBRTtBQUFDO0FBQUlULFlBQUFBLFFBQWIsRUFBdUJpQixFQUF2QixFQUEyQkUsRUFBM0I7QUFDQTdHLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTVAsRUFBRTtBQUFDO0FBQUlULFlBQUFBLFFBQWIsRUFBdUJTLEVBQUU7QUFBQztBQUFJVCxZQUFBQSxRQUE5QixFQUF3QzNFLEVBQUUsQ0FBQ0QsRUFBM0M7QUFDQWQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNTixFQUFFO0FBQUM7QUFBSVYsWUFBQUEsUUFBYixFQUF1QmlCLEVBQXZCLEVBQTJCRyxFQUEzQjtBQUNBOUcsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNTixFQUFFO0FBQUM7QUFBSVYsWUFBQUEsUUFBYixFQUF1QlUsRUFBRTtBQUFDO0FBQUlWLFlBQUFBLFFBQTlCLEVBQXdDM0UsRUFBRSxDQUFDRCxFQUEzQztBQUNBZCxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1MLEVBQUU7QUFBQztBQUFJWCxZQUFBQSxRQUFiLEVBQXVCa0IsRUFBdkIsRUFBMkJFLEVBQTNCO0FBQ0E5RyxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1MLEVBQUU7QUFBQztBQUFJWCxZQUFBQSxRQUFiLEVBQXVCVyxFQUFFO0FBQUM7QUFBSVgsWUFBQUEsUUFBOUIsRUFBd0MzRSxFQUFFLENBQUNELEVBQTNDO0FBQ0FkLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUosRUFBRTtBQUFDO0FBQUlaLFlBQUFBLFFBQWIsRUFBdUJrQixFQUF2QixFQUEyQkMsRUFBM0I7QUFDQTdHLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUosRUFBRTtBQUFDO0FBQUlaLFlBQUFBLFFBQWIsRUFBdUJZLEVBQUU7QUFBQztBQUFJWixZQUFBQSxRQUE5QixFQUF3QzNFLEVBQUUsQ0FBQ0QsRUFBM0M7QUFFQTtBQUNDLGtCQUFJa0csR0FBRyxHQUFHaEgsR0FBRyxDQUFDaUgsQ0FBSixDQUFNbEcsRUFBRSxDQUFDc0MsRUFBVCxFQUFhLEdBQWIsQ0FBVjtBQUNBOEMsY0FBQUEsRUFBRTtBQUFDO0FBQUlSLGNBQUFBLEtBQVAsR0FBZVMsRUFBRTtBQUFDO0FBQUlULGNBQUFBLEtBQVAsR0FBZVUsRUFBRTtBQUFDO0FBQUlWLGNBQUFBLEtBQVAsR0FBZVcsRUFBRTtBQUFDO0FBQUlYLGNBQUFBLEtBQVAsR0FBZSxDQUFDcUIsR0FBRyxDQUFDLENBQUQsQ0FBSixFQUFTQSxHQUFHLENBQUMsQ0FBRCxDQUFaLEVBQWlCQSxHQUFHLENBQUMsQ0FBRCxDQUFwQixFQUF5QmpHLEVBQUUsQ0FBQ3dCLEVBQUgsR0FBUSxHQUFqQyxDQUE1RDtBQUNBO0FBRUQ7QUFDQyxrQkFBSUMsRUFBRSxHQUFHcEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBQ0Esa0JBQUlDLEVBQUUsR0FBR3hCLElBQUksQ0FBQ3FCLEtBQUwsQ0FBVzFCLEVBQUUsQ0FBQzJCLEVBQUgsR0FBUSxLQUFLckMsRUFBTCxDQUFRc0MsRUFBM0IsQ0FBVDtBQUVBLGtCQUFJdUUsRUFBSixFQUFRQyxFQUFSLEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCO0FBRUEsa0JBQUlDLEVBQUUsR0FBRyxLQUFLbkgsRUFBTCxDQUFRb0gsYUFBUixDQUFzQixLQUFLcEgsRUFBTDtBQUFRO0FBQUlxRSxjQUFBQSxLQUFaLENBQWtCQyxZQUFsQixDQUErQixLQUFLcEUsRUFBTCxDQUFRcUUsZ0JBQXZDLEVBQXlERyxjQUF6RCxDQUF3RSxDQUF4RSxDQUF0QixDQUFUOztBQUNBLGtCQUFJeUMsRUFBSixFQUFRO0FBQ1Asb0JBQUlFLEVBQUUsR0FBR0YsRUFBRSxDQUFDeEMsS0FBSCxHQUFXLEtBQUt6RSxFQUFMLENBQVFzQyxFQUE1QjtBQUNBLG9CQUFJOEUsRUFBRSxHQUFHSCxFQUFFLENBQUN2QyxNQUFILEdBQVksS0FBSzFFLEVBQUwsQ0FBUTJFLEVBQTdCO0FBRUEsb0JBQUlrQyxFQUFFLEdBQUdJLEVBQUUsQ0FBQ3ZELENBQUgsR0FBT3ZCLEVBQUUsR0FBR2dGLEVBQXJCO0FBQ0Esb0JBQUlMLEVBQUUsR0FBR0QsRUFBRSxHQUFHTSxFQUFkO0FBQ0Esb0JBQUlKLEVBQUUsR0FBSUUsRUFBRSxDQUFDdEQsQ0FBSCxHQUFPc0QsRUFBRSxDQUFDdkMsTUFBVixHQUFtQm5DLEVBQUUsR0FBRzZFLEVBQWxDO0FBQ0Esb0JBQUlKLEVBQUUsR0FBR0QsRUFBRSxHQUFHSyxFQUFkO0FBQ0EsZUFSRCxNQVFPO0FBQ04sb0JBQUlELEVBQUUsR0FBRyxNQUFNLEtBQUtuSCxFQUFMLENBQVFzQyxFQUF2QjtBQUNBLG9CQUFJOEUsRUFBRSxHQUFHLE1BQU0sS0FBS3BILEVBQUwsQ0FBUTJFLEVBQXZCO0FBRUEsb0JBQUlrQyxFQUFFLEdBQUcxRSxFQUFFLEdBQUdnRixFQUFkO0FBQ0Esb0JBQUlMLEVBQUUsR0FBR0QsRUFBRSxHQUFHTSxFQUFkO0FBQ0Esb0JBQUlKLEVBQUUsR0FBSSxNQUFNeEUsRUFBRSxHQUFHNkUsRUFBckI7QUFDQSxvQkFBSUosRUFBRSxHQUFHRCxFQUFFLEdBQUdLLEVBQWQ7QUFDQTs7QUFFRHRCLGNBQUFBLEVBQUU7QUFBQztBQUFJUCxjQUFBQSxTQUFQLENBQWlCLENBQWpCLElBQXNCLENBQUNzQixFQUFELEVBQUtHLEVBQUwsQ0FBdEI7QUFDQWpCLGNBQUFBLEVBQUU7QUFBQztBQUFJUixjQUFBQSxTQUFQLENBQWlCLENBQWpCLElBQXNCLENBQUNzQixFQUFELEVBQUtFLEVBQUwsQ0FBdEI7QUFDQWYsY0FBQUEsRUFBRTtBQUFDO0FBQUlULGNBQUFBLFNBQVAsQ0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ3VCLEVBQUQsRUFBS0MsRUFBTCxDQUF0QjtBQUNBZCxjQUFBQSxFQUFFO0FBQUM7QUFBSVYsY0FBQUEsU0FBUCxDQUFpQixDQUFqQixJQUFzQixDQUFDdUIsRUFBRCxFQUFLRSxFQUFMLENBQXRCO0FBQ0E7O0FBRUQsZ0JBQUlwQixZQUFZLENBQUN5QixVQUFqQixFQUE2QjtBQUM1QnpCLGNBQUFBLFlBQVksQ0FBQ3lCLFVBQWIsQ0FBd0IsS0FBS3JILEVBQUwsQ0FBUXFFLGdCQUFoQztBQUNBOztBQUVEdUIsWUFBQUEsWUFBWSxDQUFDMEIsVUFBYixDQUF3QnhCLEVBQXhCO0FBQ0FGLFlBQUFBLFlBQVksQ0FBQzBCLFVBQWIsQ0FBd0J2QixFQUF4QjtBQUNBSCxZQUFBQSxZQUFZLENBQUMwQixVQUFiLENBQXdCdEIsRUFBeEI7QUFDQUosWUFBQUEsWUFBWSxDQUFDMEIsVUFBYixDQUF3QnJCLEVBQXhCOztBQUVBLGdCQUFJLENBQUNMLFlBQVksQ0FBQzJCLGdCQUFsQixFQUFvQztBQUNuQzNCLGNBQUFBLFlBQVksQ0FBQzJCLGdCQUFiLEdBQWdDLElBQUk1SCxHQUFHLENBQUM2SCxVQUFSLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUt4SCxFQUFMLENBQVFxRSxnQkFBakMsQ0FBaEM7QUFDQSxhQUZELE1BRU87QUFDTixrQkFBSW9ELGNBQWMsR0FBRzdCLFlBQVksQ0FBQzJCLGdCQUFsQzs7QUFFQSxrQkFBSUUsY0FBYyxDQUFDcEQsZ0JBQWYsSUFBbUMsS0FBS3JFLEVBQUwsQ0FBUXFFLGdCQUEvQyxFQUFpRTtBQUNoRW9ELGdCQUFBQSxjQUFjLENBQUNDLFVBQWYsSUFBNkIsQ0FBN0I7QUFDQSxlQUZELE1BRU87QUFDTjlCLGdCQUFBQSxZQUFZLENBQUMrQixjQUFiLENBQTRCRixjQUE1QjtBQUNBN0IsZ0JBQUFBLFlBQVksQ0FBQzJCLGdCQUFiLEdBQWdDLElBQUk1SCxHQUFHLENBQUM2SCxVQUFSLENBQy9CQyxjQUFjLENBQUNHLFVBQWYsR0FBNEJILGNBQWMsQ0FBQ0MsVUFEWixFQUUvQixDQUYrQixFQUU1QixLQUFLMUgsRUFBTCxDQUFRcUUsZ0JBRm9CLENBQWhDO0FBR0E7QUFDRDtBQUNEO0FBQ0Q7O0FBRUQzRCxRQUFBQSxFQUFFLENBQUNtRixFQUFILENBQU0sQ0FBTixFQUFTSixFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxZQUFyQjtBQUNBLE9BekhhO0FBMkhkaUMsTUFBQUEsRUFBRSxFQUFFLFlBQVVwQyxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxZQUF0QixFQUFvQztBQUN2QyxnQkFBUSxLQUFLN0YsRUFBTCxDQUFRZ0YsRUFBaEI7QUFDQyxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUFqQyxFQUF5QyxFQUFFOEUsRUFBM0MsRUFBK0M7QUFDOUMsbUJBQUtRLEVBQUwsQ0FBUSxLQUFLekYsRUFBTCxDQUFRa0YsRUFBUixDQUFXRCxFQUFYLENBQVIsRUFBd0JTLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQ0MsRUFBaEMsRUFBb0NDLFlBQXBDO0FBQ0E7O0FBQ0Q7O0FBRUQsZUFBSyxDQUFMO0FBQ0MsaUJBQUssSUFBSVosRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUF6QixFQUFpQzhFLEVBQUUsS0FBSyxDQUF4QyxHQUE0QztBQUMzQyxtQkFBS1EsRUFBTCxDQUFRLEtBQUt6RixFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBUixFQUF3QlMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsWUFBcEM7QUFDQTs7QUFDRDs7QUFFRCxlQUFLLENBQUw7QUFDQyxpQkFBSzdGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVzZDLE9BQVgsQ0FBbUIsVUFBVXBILEVBQVYsRUFBYztBQUNoQ0EsY0FBQUEsRUFBRSxDQUFDcUgsS0FBSCxHQUFXcEksR0FBRyxDQUFDcUksQ0FBSixDQUFNckMsRUFBTixFQUFVakYsRUFBRSxDQUFDRCxFQUFiLENBQVg7QUFDQSxhQUZEO0FBSUEsaUJBQUtWLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0MsSUFBWCxDQUFnQixVQUFVTCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDL0Isa0JBQUlELENBQUMsQ0FBQ2tELEtBQUYsR0FBVWpELENBQUMsQ0FBQ2lELEtBQWhCLEVBQ0MsT0FBTyxDQUFQO0FBQ0Qsa0JBQUlsRCxDQUFDLENBQUNrRCxLQUFGLEdBQVVqRCxDQUFDLENBQUNpRCxLQUFoQixFQUNDLE9BQU8sQ0FBQyxDQUFSO0FBQ0QscUJBQU8sQ0FBUDtBQUNBLGFBTkQ7QUFRQSxpQkFBS2hJLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVzZDLE9BQVgsQ0FBbUIsVUFBVXBILEVBQVYsRUFBYztBQUNoQyxtQkFBSzhFLEVBQUwsQ0FBUTlFLEVBQVIsRUFBWStFLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QkMsWUFBeEI7QUFDQSxhQUZELEVBRUcsSUFGSDtBQUdBO0FBN0JGO0FBK0JBO0FBM0phLEtBQWY7O0FBOEpBLFFBQUlxQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFVbkksRUFBVixFQUFjRSxFQUFkLEVBQWtCa0ksRUFBbEIsRUFBc0I7QUFDOUIsVUFBSUMsRUFBRSxHQUFHLElBQVQ7QUFDQSxXQUFLckksRUFBTCxHQUFVQSxFQUFWO0FBQ0EsV0FBS0UsRUFBTCxHQUFVQSxFQUFWLENBSDhCLENBSzlCOztBQUVBLGVBQVNvSSxFQUFULEdBQWM7QUFDYixhQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLElBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLENBQVY7QUFFQVAsUUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNMkksRUFBTixDQUFTLElBQVQsRUFSYSxDQVFHOztBQUVoQixhQUFLQyxFQUFMLEdBQVUsWUFBWTtBQUNyQixlQUFLQyxFQUFMLEdBQVUsS0FBS1AsRUFBZjtBQUNBLGVBQUtELEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FIRDs7QUFLQSxhQUFLTyxFQUFMO0FBQ0E7O0FBRURSLE1BQUFBLEVBQUUsQ0FBQ2hJLFNBQUgsR0FBZTtBQUNkMEksUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZixlQUFLRixFQUFMO0FBQ0EsU0FIYTtBQUtkRyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjdkksRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCO0FBQ3pCMEcsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNaUosRUFBTixDQUFTRCxFQUFULEVBQWFiLEVBQWIsRUFBaUIsSUFBakIsRUFEeUIsQ0FDRDs7QUFFeEIsY0FBSWUsRUFBRSxHQUFHZixFQUFFLENBQUNlLEVBQVo7QUFDQSxjQUFJQyxVQUFVLEdBQUdySixFQUFFLENBQUNvSixFQUFwQjtBQUNBLGNBQUlFLEVBQUUsR0FBR0osRUFBVDtBQUNBLGNBQUlLLEVBQUUsR0FBRyxDQUFUOztBQUVBLGNBQUksS0FBS0MsRUFBTCxHQUFVLFFBQWQsRUFBd0I7QUFFdkIsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLVixFQUFMLEdBQVVHLEVBQUUsR0FBRyxLQUFLTSxFQUE3Qjs7QUFFQSxtQkFBT0MsRUFBRSxJQUFJLEdBQWIsRUFBa0I7QUFDakIsa0JBQUlDLEVBQUUsR0FBRyxLQUFLRixFQUFMLEdBQVUsS0FBVixHQUFrQixHQUFsQixHQUF3QixDQUFDLE1BQU0sS0FBS1QsRUFBWixJQUFrQixLQUFLUyxFQUF4RDtBQUNBRixjQUFBQSxFQUFFLElBQUlJLEVBQU47QUFDQU4sY0FBQUEsRUFBRSxJQUFJTSxFQUFOO0FBQ0FMLGNBQUFBLFVBQVUsSUFBSUssRUFBZDs7QUFFQSxrQkFBSSxLQUFLakIsRUFBTCxJQUFXLElBQVgsSUFBbUJXLEVBQUUsR0FBRyxLQUFLWCxFQUFqQyxFQUFxQztBQUNwQ0osZ0JBQUFBLEVBQUUsQ0FBQ3NCLFdBQUg7QUFDQTtBQUNBOztBQUVEdEIsY0FBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVFBLEVBQVI7QUFDQXBKLGNBQUFBLEVBQUUsQ0FBQ29KLEVBQUgsR0FBUUMsVUFBUjtBQUVBLGtCQUFJMUksRUFBRSxJQUFJdUksRUFBRSxHQUFHLENBQWYsRUFDQ3JKLEdBQUcsQ0FBQytKLEVBQUosQ0FBT3ZCLEVBQUUsQ0FBQzFILEVBQVYsRUFBY0EsRUFBZCxFQUFrQjBILEVBQUUsQ0FBQ3dCLEVBQXJCLEVBQXlCUCxFQUFFLEdBQUdKLEVBQTlCO0FBRUQsa0JBQUl2SCxFQUFFLElBQUl1SCxFQUFFLEdBQUcsQ0FBZixFQUNDckosR0FBRyxDQUFDaUssTUFBSixDQUFXekIsRUFBRSxDQUFDMUcsRUFBZCxFQUFrQkEsRUFBbEIsRUFBc0IwRyxFQUFFLENBQUMwQixZQUF6QixFQUF1Q1QsRUFBRSxHQUFHSixFQUE1QyxFQWxCZ0IsQ0FvQmpCOztBQUNBLG1CQUFLTixFQUFMLEdBQVUsS0FBS29CLEVBQWY7O0FBRUEsbUJBQUssSUFBSTlFLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBSzhFLEVBQTNCLEVBQStCLEVBQUU5RSxFQUFqQyxFQUFxQztBQUNwQyxvQkFBSW1ELEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTTdKLE1BQU4sSUFBZ0IsQ0FBcEIsRUFDQztBQUVELG9CQUFJLEtBQUs0SixFQUFMLElBQVcsQ0FBZixFQUNDLEtBQUtyQixFQUFMLEdBQVUsQ0FBVixDQURELEtBR0MsS0FBS0EsRUFBTCxHQUFVekQsRUFBRSxJQUFJLEtBQUs4RSxFQUFMLEdBQVUsQ0FBZCxDQUFaO0FBRUQsb0JBQUlwSixFQUFFLEdBQUd5SCxFQUFFLENBQUM0QixFQUFILENBQU1DLEdBQU4sRUFBVDtBQUNBN0IsZ0JBQUFBLEVBQUUsQ0FBQ2xELEVBQUgsQ0FBTWdGLE9BQU4sQ0FBY3ZKLEVBQWQ7QUFFQSxvQkFBSXNFLEVBQUUsSUFBSSxDQUFWLEVBQ0N0RSxFQUFFLENBQUN3SixFQUFILEdBREQsS0FHQ3hKLEVBQUUsQ0FBQ3lKLEVBQUg7QUFFRHpKLGdCQUFBQSxFQUFFLENBQUNxSSxFQUFILENBQU1LLEVBQU47QUFDQSxrQkFBRUMsRUFBRjtBQUNBOztBQUVELG1CQUFLUixFQUFMLEdBQVUsR0FBVjtBQUNBVSxjQUFBQSxFQUFFLElBQUksR0FBTjs7QUFFQSxrQkFBSSxLQUFLZixFQUFMLElBQVcsSUFBWCxJQUFtQixFQUFFLEtBQUtILEVBQVAsSUFBYSxLQUFLRyxFQUF6QyxFQUE2QztBQUM1Q0wsZ0JBQUFBLEVBQUUsQ0FBQ3NCLFdBQUg7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsaUJBQUtaLEVBQUwsR0FBVVUsRUFBVjtBQUNBOztBQUNETCxVQUFBQSxFQUFFLElBQUlFLEVBQU47QUFDQWpCLFVBQUFBLEVBQUUsQ0FBQ2UsRUFBSCxHQUFRQSxFQUFSO0FBRUEsY0FBSXpJLEVBQUosRUFDQ2QsR0FBRyxDQUFDeUssQ0FBSixDQUFNakMsRUFBRSxDQUFDMUgsRUFBVCxFQUFhQSxFQUFiO0FBRUQsY0FBSWdCLEVBQUosRUFDQzlCLEdBQUcsQ0FBQzBLLENBQUosQ0FBTWxDLEVBQUUsQ0FBQzFHLEVBQVQsRUFBYUEsRUFBYjtBQUVELGlCQUFPNEgsRUFBUDtBQUNBO0FBbEZhLE9BQWYsQ0F6QjhCLENBOEc5Qjs7QUFFQSxlQUFTaUIsRUFBVCxHQUFjO0FBQ2IsYUFBS2hDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0csRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUVBUCxRQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU0ySSxFQUFOLENBQVMsSUFBVCxFQUxhLENBS0c7O0FBRWhCLGFBQUtDLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGVBQUsyQixFQUFMLEdBQVUsS0FBS2pDLEVBQWY7QUFDQSxTQUZEOztBQUlBLGFBQUtNLEVBQUw7QUFDQTs7QUFFRDBCLE1BQUFBLEVBQUUsQ0FBQ2xLLFNBQUgsR0FBZTtBQUNkMEksUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZixlQUFLRixFQUFMO0FBQ0EsU0FIYTtBQUtkRyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjdkksRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCO0FBQ3pCMEcsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNaUosRUFBTixDQUFTRCxFQUFULEVBQWFiLEVBQWIsRUFBaUIsSUFBakIsRUFEeUIsQ0FDRDs7QUFFeEIsY0FBSXFDLEVBQUUsR0FBR3JDLEVBQUUsQ0FBQ2UsRUFBWjtBQUNBLGNBQUl1QixFQUFFLEdBQUdELEVBQUUsR0FBR3hCLEVBQWQ7QUFDQSxjQUFJMEIscUJBQXFCLEdBQUc1SyxFQUFFLENBQUNvSixFQUEvQjtBQUNBLGNBQUl5QixvQkFBb0IsR0FBR0QscUJBQXFCLEdBQUcxQixFQUFuRDtBQUNBLGNBQUk0QixFQUFFLEdBQUduSyxFQUFFLEdBQUdkLEdBQUcsQ0FBQ2tMLENBQUosQ0FBTWxMLEdBQUcsQ0FBQ21MLENBQUosQ0FBTXJLLEVBQU4sRUFBVTBILEVBQUUsQ0FBQ3dCLEVBQWIsQ0FBTixDQUFILEdBQTZCLENBQXhDO0FBQ0EsY0FBSU4sRUFBRSxHQUFHLENBQVQ7O0FBRUEsY0FBSXVCLEVBQUUsR0FBRyxRQUFULEVBQW1CO0FBQ2xCLGdCQUFJRyxFQUFFLEdBQUdILEVBQUUsR0FBRyxLQUFLSSxFQUFuQjtBQUNBLGdCQUFJekIsRUFBRSxHQUFHLEtBQUtnQixFQUFMLEdBQVVRLEVBQW5CO0FBRUEsZ0JBQUlFLEVBQUUsR0FBR0YsRUFBRSxHQUFHLEtBQUwsR0FDUixNQUFNLEtBQUtSLEVBREgsR0FDUSxDQUFDLE1BQU0sS0FBS0EsRUFBWixJQUFrQlEsRUFEbkM7QUFHQSxnQkFBSUcsRUFBRSxHQUFHLEVBQVQ7O0FBRUEsbUJBQU8zQixFQUFFLEdBQUcsR0FBWixFQUFpQjtBQUNoQixrQkFBSTRCLEVBQUUsR0FBR1gsRUFBRSxHQUFHUyxFQUFFLEdBQUdqQyxFQUFuQjtBQUVBLGtCQUFJdkksRUFBSixFQUNDZCxHQUFHLENBQUMrSixFQUFKLENBQU93QixFQUFQLEVBQVcvQyxFQUFFLENBQUN3QixFQUFkLEVBQWtCbEosRUFBbEIsRUFBc0J3SyxFQUF0QjtBQUVEOUMsY0FBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVFpQyxFQUFSO0FBQ0F4TCxjQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU1qQyxFQUFFLENBQUMxSCxFQUFULEVBQWF5SyxFQUFiO0FBQ0FwTCxjQUFBQSxFQUFFLENBQUNvSixFQUFILEdBQVF2SixHQUFHLENBQUN5TCxDQUFKLENBQU1WLHFCQUFOLEVBQTZCQyxvQkFBN0IsRUFBbURNLEVBQW5ELENBQVIsQ0FSZ0IsQ0FVaEI7O0FBQ0EsbUJBQUt2QyxFQUFMLEdBQVUsS0FBS29CLEVBQWY7O0FBRUEsbUJBQUssSUFBSTlFLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBSzhFLEVBQTNCLEVBQStCLEVBQUU5RSxFQUFqQyxFQUFxQztBQUNwQyxvQkFBSW1ELEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTTdKLE1BQU4sSUFBZ0IsQ0FBcEIsRUFDQztBQUVELG9CQUFJLEtBQUs0SixFQUFMLElBQVcsQ0FBZixFQUNDLEtBQUtyQixFQUFMLEdBQVUsQ0FBVixDQURELEtBR0MsS0FBS0EsRUFBTCxHQUFVekQsRUFBRSxJQUFJLEtBQUs4RSxFQUFMLEdBQVUsQ0FBZCxDQUFaO0FBRUQsb0JBQUlwSixFQUFFLEdBQUd5SCxFQUFFLENBQUM0QixFQUFILENBQU1DLEdBQU4sRUFBVDtBQUNBN0IsZ0JBQUFBLEVBQUUsQ0FBQ2xELEVBQUgsQ0FBTWdGLE9BQU4sQ0FBY3ZKLEVBQWQ7QUFFQSxvQkFBSXNFLEVBQUUsSUFBSSxDQUFWLEVBQ0N0RSxFQUFFLENBQUN3SixFQUFILEdBREQsS0FHQ3hKLEVBQUUsQ0FBQ3lKLEVBQUg7QUFFRHpKLGdCQUFBQSxFQUFFLENBQUNxSSxFQUFILENBQU1DLEVBQUUsSUFBSSxNQUFNaUMsRUFBVixDQUFSO0FBQ0Esa0JBQUU1QixFQUFGO0FBQ0E7O0FBRUQ0QixjQUFBQSxFQUFFLElBQUksTUFBTUYsRUFBWjtBQUNBeEIsY0FBQUEsRUFBRSxJQUFJLEdBQU47QUFDQTs7QUFFRCxpQkFBS2dCLEVBQUwsR0FBVWhCLEVBQVY7QUFDQTs7QUFFRHBCLFVBQUFBLEVBQUUsQ0FBQ2UsRUFBSCxHQUFRdUIsRUFBUjtBQUVBLGNBQUloSyxFQUFKLEVBQ0NkLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTWpDLEVBQUUsQ0FBQzFILEVBQVQsRUFBYUEsRUFBYjtBQUVELGNBQUlnQixFQUFKLEVBQ0M5QixHQUFHLENBQUMwSyxDQUFKLENBQU1sQyxFQUFFLENBQUMxRyxFQUFULEVBQWFBLEVBQWI7QUFFRCxpQkFBTzRILEVBQVA7QUFDQTtBQTFFYSxPQUFmLENBOUg4QixDQTJNOUI7O0FBRUEsZUFBU2dDLEVBQVQsR0FBYztBQUNiLGFBQUs1SyxFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUtxQyxFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUt6QixFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUsyQixFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUtzSSxFQUFMLEdBQVUsRUFBVjtBQUNBOztBQUVERCxNQUFBQSxFQUFFLENBQUNqTCxTQUFILEdBQWU7QUFDZG1MLFFBQUFBLEVBQUUsRUFBRSxjQUFZO0FBQ2YsZUFBS3RKLEVBQUwsR0FBVSxLQUFWOztBQUVBLGVBQUssSUFBSXVKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGdCQUFJQyxFQUFFLEdBQUcsS0FBS0gsRUFBTCxDQUFRRSxDQUFSLENBQVQ7QUFDQUMsWUFBQUEsRUFBRSxDQUFDMUwsRUFBSCxDQUFNK0ksRUFBTixDQUFTLEtBQUtySSxFQUFkLEVBQWtCLElBQWxCO0FBRUEsZ0JBQUlnTCxFQUFFLENBQUNDLEVBQUgsQ0FBTUMsRUFBVixFQUNDRixFQUFFLENBQUMxTCxFQUFILENBQU0wSixXQUFOO0FBQ0Q7QUFDRCxTQVhhO0FBYWRTLFFBQUFBLEVBQUUsRUFBRSxjQUFZO0FBQ2YvQixVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU00TCxFQUFOLENBQVN6RCxFQUFULEVBQWEsSUFBYixFQURlLENBQ0s7O0FBQ3BCLGVBQUtvRCxFQUFMO0FBQ0EsU0FoQmE7QUFrQmRwQixRQUFBQSxFQUFFLEVBQUUsY0FBWTtBQUNmaEMsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNNkwsRUFBTixDQUFTMUQsRUFBVCxFQUFhLElBQWIsRUFEZSxDQUNLOztBQUNwQixlQUFLb0QsRUFBTDtBQUNBLFNBckJhO0FBdUJkeEMsUUFBQUEsRUFBRSxFQUFFLFlBQVVDLEVBQVYsRUFBYztBQUNqQmIsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNOEwsRUFBTixDQUFTOUMsRUFBVCxFQUFhYixFQUFiLEVBQWlCLElBQWpCLEVBRGlCLENBQ087O0FBRXhCLGVBQUs0RCxFQUFMLENBQVEvQyxFQUFSO0FBQ0EsU0EzQmE7QUE2QmR5QyxRQUFBQSxFQUFFLEVBQUUsWUFBVU8sRUFBVixFQUFjO0FBQ2pCLGlCQUFPLEtBQUtWLEVBQUwsQ0FBUVUsRUFBUixFQUFZak0sRUFBbkI7QUFDQSxTQS9CYTtBQWlDZGdNLFFBQUFBLEVBQUUsRUFBRSxZQUFVL0MsRUFBVixFQUFjO0FBQ2pCLGVBQUssSUFBSXdDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0NzTCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3hDLGlCQUFLRixFQUFMLENBQVFFLENBQVIsRUFBV3pMLEVBQVgsQ0FBY2dKLEVBQWQsQ0FBaUJDLEVBQWpCLEVBQXFCLEtBQUt2SSxFQUExQixFQUE4QixJQUE5QjtBQUNBO0FBQ0QsU0FyQ2E7QUF1Q2R3TCxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0FBQ3JCLGVBQUtiLEVBQUwsQ0FBUWMsSUFBUixDQUFhO0FBQ1pyTSxZQUFBQSxFQUFFLEVBQUUsSUFBSWtJLEVBQUosQ0FBT25JLEVBQVAsRUFBV29NLEVBQVgsRUFBZWhFLEVBQWYsQ0FEUTtBQUVad0QsWUFBQUEsRUFBRSxFQUFFUztBQUZRLFdBQWI7QUFJQSxTQTVDYTtBQThDZHBLLFFBQUFBLEVBQUUsRUFBRSxZQUFVdkIsRUFBVixFQUFjNkwsRUFBZCxFQUFrQnZLLEVBQWxCLEVBQXNCO0FBQ3pCLGVBQUssSUFBSTBKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGdCQUFJQyxFQUFFLEdBQUcsS0FBS0gsRUFBTCxDQUFRRSxDQUFSLENBQVQ7QUFFQSxnQkFBSWEsRUFBRSxJQUFJWixFQUFFLENBQUNDLEVBQUgsQ0FBTVcsRUFBaEIsRUFDQ1osRUFBRSxDQUFDMUwsRUFBSCxDQUFNa0UsRUFBTixDQUFTekQsRUFBVCxFQUFhc0IsRUFBYjtBQUNEO0FBQ0QsU0FyRGE7QUF1RGQrRCxRQUFBQSxFQUFFLEVBQUUsWUFBVXdHLEVBQVYsRUFBYzVHLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsWUFBMUIsRUFBd0M7QUFDM0MsZUFBSyxJQUFJNEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDtBQUVBLGdCQUFJYSxFQUFFLElBQUlaLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNVyxFQUFoQixFQUNDWixFQUFFLENBQUMxTCxFQUFILENBQU04SCxFQUFOLENBQVNwQyxFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxZQUFyQjtBQUNEO0FBQ0QsU0E5RGE7QUFnRWQwRyxRQUFBQSxFQUFFLEVBQUUsWUFBVTlMLEVBQVYsRUFBYztBQUNqQixlQUFLeUIsRUFBTCxHQUFVLElBQVY7O0FBQ0EsZUFBSyxJQUFJdUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDs7QUFFQSxnQkFBSUMsRUFBRSxDQUFDQyxFQUFILENBQU1DLEVBQVYsRUFBYztBQUNiRixjQUFBQSxFQUFFLENBQUMxTCxFQUFILENBQU13TSxRQUFOO0FBQ0FkLGNBQUFBLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTWdKLEVBQU4sQ0FBUyxDQUFUO0FBQ0EsYUFIRCxNQUtDMEMsRUFBRSxDQUFDMUwsRUFBSCxDQUFNMEosV0FBTjtBQUNEO0FBQ0QsU0E1RWE7QUE4RWQrQyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjO0FBQ2pCLGVBQUssSUFBSWpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGlCQUFLRixFQUFMLENBQVFFLENBQVIsRUFBV3pMLEVBQVgsQ0FBYzJNLEVBQWQsQ0FBaUJELEVBQWpCO0FBQ0E7QUFDRDtBQWxGYSxPQUFmLENBck44QixDQTBTOUI7O0FBRUEsZUFBU0UsRUFBVCxHQUFjLENBQ2I7O0FBRURBLE1BQUFBLEVBQUUsQ0FBQ3ZNLFNBQUgsQ0FBYXdNLEVBQWIsR0FBa0IsVUFBVWxNLEVBQVYsRUFBYztBQUMvQixlQUFPeUgsRUFBRSxDQUFDbkksRUFBSCxDQUFNNk0sRUFBTixDQUFTMUUsRUFBVCxFQUFhekgsRUFBYixFQUFpQixJQUFqQixDQUFQLENBRCtCLENBQ0E7QUFDL0IsT0FGRCxDQS9TOEIsQ0FtVDlCOzs7QUFFQSxXQUFLRCxFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtrSixFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtsSSxFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtvSSxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsV0FBSzVFLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBSzhFLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBSytDLEVBQUwsR0FBVSxJQUFJSCxFQUFKLEVBQVY7QUFDQSxXQUFLSSxTQUFMLEdBQWlCLElBQUk3RSxFQUFKLENBQU8sS0FBS3BJLEVBQVosRUFBZ0IsSUFBaEIsQ0FBakI7QUFDQSxXQUFLa04sRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVUsRUFBVjs7QUFFQSxXQUFLQyxFQUFMLEdBQVUsWUFBWTtBQUNyQixhQUFLQyxFQUFMLEdBQVUsSUFBSS9FLEVBQUosRUFBVjtBQUNBLE9BRkQ7O0FBSUEsV0FBS2dGLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGFBQUtELEVBQUwsR0FBVSxJQUFJN0MsRUFBSixFQUFWO0FBQ0EsT0FGRDs7QUFJQSxXQUFLdEssRUFBTCxDQUFRcU4sRUFBUixDQUFXLElBQVgsRUF4VThCLENBd1VaOztBQUVsQixXQUFLLElBQUlySSxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHLEtBQUtzSSxFQUEzQixFQUErQixFQUFFdEksRUFBakMsRUFBcUM7QUFDcEMsWUFBSXRFLEVBQUUsR0FBRyxJQUFJMkssRUFBSixFQUFUOztBQUVBLGFBQUssSUFBSWtDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS1AsRUFBTCxDQUFROU0sTUFBOUIsRUFBc0MsRUFBRXFOLEVBQXhDLEVBQTRDO0FBQzNDLGNBQUlDLEVBQUUsR0FBRyxLQUFLUixFQUFMLENBQVFPLEVBQVIsQ0FBVDtBQUNBN00sVUFBQUEsRUFBRSxDQUFDdUwsRUFBSCxDQUFNdUIsRUFBRSxDQUFDNU4sRUFBVCxFQUFhNE4sRUFBRSxDQUFDOUIsRUFBaEI7QUFDQTs7QUFFRCxhQUFLM0IsRUFBTCxDQUFRcUMsSUFBUixDQUFhMUwsRUFBYjtBQUNBOztBQUVELFdBQUtrSSxFQUFMLEdBQVUsVUFBVW5JLEVBQVYsRUFBY2dCLEVBQWQsRUFBa0I7QUFFM0I5QixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBekI7QUFDQWQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUtULEVBQVgsRUFBZSxLQUFLbEosRUFBcEI7QUFDQWQsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYLEVBQWVBLEVBQUUsR0FBR0EsRUFBSCxHQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF6QjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUtSLFlBQVgsRUFBeUIsS0FBS3BJLEVBQTlCO0FBRUEsYUFBS3lILEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS3VFLEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLElBQVY7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGFBQUtDLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0FqTyxRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU0sS0FBS1osRUFBWCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7QUFDQSxPQWJEO0FBY0EsS0FuV0Q7O0FBcVdBaEYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhMEksRUFBYixHQUFrQixVQUFVckksRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUNuQyxXQUFLbUgsRUFBTCxDQUFRbkksRUFBUixFQUFZZ0IsRUFBWjtBQUVBLFdBQUtzSSxFQUFMLENBQVFxQyxJQUFSLENBQWEwQixLQUFiLENBQW1CLEtBQUsvRCxFQUF4QixFQUE0QixLQUFLOUUsRUFBakM7QUFDQSxXQUFLQSxFQUFMLENBQVEvRSxNQUFSLEdBQWlCLENBQWpCO0FBRUEsV0FBS2lOLEVBQUwsQ0FBUXJFLEVBQVI7QUFDQSxLQVBEOztBQVNBYixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWEySSxFQUFiLEdBQWtCLFVBQVVDLEVBQVYsRUFBY3ZJLEVBQWQsRUFBa0JnQixFQUFsQixFQUFzQjtBQUV2QyxVQUFJLEtBQUtrTSxPQUFULEVBQ0E7QUFDQyxhQUFLSSxFQUFMLENBQVF0TixFQUFSLEVBQVlnQixFQUFaO0FBQ0E7QUFDQTs7QUFFRCxXQUFLZ00sRUFBTCxHQUFVLEtBQUt2RSxFQUFmOztBQUVBLFVBQUl6SSxFQUFKLEVBQVE7QUFDUGQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUtULEVBQVgsRUFBZSxLQUFLbEosRUFBcEI7O0FBQ0EsWUFBSXVJLEVBQUUsR0FBRyxNQUFULEVBQWlCO0FBQ2hCLGNBQUlnRixLQUFLLEdBQUcsRUFBWjtBQUNBck8sVUFBQUEsR0FBRyxDQUFDc08sQ0FBSixDQUFNRCxLQUFOLEVBQWF2TixFQUFiLEVBQWlCLEtBQUtrSixFQUF0QjtBQUNBaEssVUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUs2QyxFQUFYLEVBQWVlLEtBQWY7QUFDQXJPLFVBQUFBLEdBQUcsQ0FBQ3VPLENBQUosQ0FBTSxLQUFLakIsRUFBWCxFQUFlLEtBQUtBLEVBQXBCLEVBQXdCakUsRUFBeEI7QUFDQSxTQUxELE1BTUs7QUFDSnJKLFVBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTSxLQUFLWixFQUFYLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUNBO0FBQ0QsT0FYRCxNQVlLO0FBQ0p0TixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU0sS0FBS1osRUFBWCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7QUFDQTs7QUFFRCxVQUFJeEwsRUFBSixFQUNBO0FBQ0M5QixRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBS1IsWUFBWCxFQUF5QixLQUFLcEksRUFBOUI7QUFDQTs7QUFFRCxVQUFJNEgsRUFBSjs7QUFFQSxVQUFJLEtBQUtxRSxFQUFMLElBQVcsQ0FBQyxLQUFLRSxpQkFBckIsRUFBd0M7QUFDdkN2RSxRQUFBQSxFQUFFLEdBQUcsS0FBSzhELEVBQUwsQ0FBUXBFLEVBQVIsQ0FBV0MsRUFBWCxFQUFldkksRUFBZixFQUFtQmdCLEVBQW5CLENBQUw7QUFDQSxPQUZELE1BR0s7QUFDSixZQUFJaEIsRUFBSixFQUNDZCxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBZjtBQUVELFlBQUlnQixFQUFKLEVBQ0M5QixHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVgsRUFBZUEsRUFBZjtBQUVENEgsUUFBQUEsRUFBRSxHQUFHLENBQUw7QUFDQSxhQUFLSCxFQUFMLElBQVdGLEVBQVg7QUFDQTs7QUFFRCxXQUFLLElBQUloRSxFQUFFLEdBQUdxRSxFQUFkLEVBQWtCckUsRUFBRSxHQUFHLEtBQUtDLEVBQUwsQ0FBUS9FLE1BQS9CLEdBQXdDO0FBQ3ZDLFlBQUlRLEVBQUUsR0FBRyxLQUFLdUUsRUFBTCxDQUFRRCxFQUFSLENBQVQ7O0FBRUEsWUFBSSxDQUFDdEUsRUFBRSxDQUFDdUIsRUFBUixFQUFZO0FBQ1h2QixVQUFBQSxFQUFFLENBQUNxSSxFQUFILENBQU1DLEVBQU47O0FBRUEsY0FBSSxLQUFLOEQsRUFBTCxDQUFRRixFQUFSLENBQVcsS0FBSzNILEVBQUwsQ0FBUUQsRUFBUixDQUFYLENBQUosRUFBNkI7QUFDNUJ0RSxZQUFBQSxFQUFFLENBQUM0TCxFQUFIO0FBRUEsZ0JBQUksS0FBSzZCLEVBQUwsQ0FBUW5KLEVBQVIsQ0FBSixFQUNDO0FBQ0Q7QUFDRCxTQVRELE1BVUs7QUFDSnRFLFVBQUFBLEVBQUUsQ0FBQ3FMLEVBQUgsQ0FBTS9DLEVBQU47QUFFQSxjQUFJLEtBQUttRixFQUFMLENBQVFuSixFQUFSLENBQUosRUFDQztBQUNEOztBQUVELFVBQUVBLEVBQUY7QUFDQTtBQUNELEtBckVEOztBQXVFQWlELElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYStOLEVBQWIsR0FBa0IsVUFBVW5DLEVBQVYsRUFBYztBQUMvQixVQUFJdEwsRUFBRSxHQUFHLEtBQUt1RSxFQUFMLENBQVErRyxFQUFSLENBQVQ7QUFFQSxVQUFJb0MsS0FBSyxHQUFHLElBQVo7O0FBRUEsV0FBSyxJQUFJYixFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHN00sRUFBRSxDQUFDNEssRUFBSCxDQUFNcEwsTUFBNUIsRUFBb0MsRUFBRXFOLEVBQXRDLEVBQTBDO0FBQ3pDLFlBQUl4TixFQUFFLEdBQUdXLEVBQUUsQ0FBQzRLLEVBQUgsQ0FBTWlDLEVBQU4sRUFBVXhOLEVBQW5COztBQUVBLFlBQUlBLEVBQUUsQ0FBQ3NPLFNBQUgsTUFBa0J0TyxFQUFFLENBQUNrRixFQUFILENBQU0vRSxNQUFOLEdBQWUsQ0FBckMsRUFBd0M7QUFDdkNrTyxVQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxVQUFJQSxLQUFKLEVBQVc7QUFDVixhQUFLckUsRUFBTCxDQUFRcUMsSUFBUixDQUFhLEtBQUtuSCxFQUFMLENBQVErRyxFQUFSLENBQWI7QUFDQSxhQUFLL0csRUFBTCxDQUFRcUosTUFBUixDQUFldEMsRUFBZixFQUFtQixDQUFuQjtBQUNBLGVBQU8sSUFBUDtBQUNBOztBQUVELGFBQU8sS0FBUDtBQUNBLEtBckJEOztBQXVCQS9ELElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYTZELEVBQWIsR0FBa0IsVUFBVXpELEVBQVYsRUFBY3NCLEVBQWQsRUFBa0I7QUFDbkMsV0FBS2lMLFNBQUwsQ0FBZTlJLEVBQWYsQ0FBa0J6RCxFQUFsQixFQUFzQnNCLEVBQXRCO0FBQ0EsS0FGRDs7QUFJQW1HLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYXlILEVBQWIsR0FBa0IsVUFBVXBDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLFlBQXRCLEVBQW9DO0FBQ3JELFdBQUttSCxTQUFMLENBQWVsRixFQUFmLENBQWtCcEMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxFQUExQixFQUE4QkMsWUFBOUI7QUFDQSxLQUZEOztBQUlBcUMsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhMk4sRUFBYixHQUFrQixVQUFVdE4sRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUNuQyxXQUFLZ00sRUFBTCxHQUFVLEtBQUt2RSxFQUFmOztBQUVBLFVBQUl6SSxFQUFKLEVBQVE7QUFDUGQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUtULEVBQVgsRUFBZSxLQUFLbEosRUFBcEI7QUFDQWQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUszSixFQUFYLEVBQWVBLEVBQWY7QUFDQTs7QUFFRCxVQUFJZ0IsRUFBSixFQUFRO0FBQ1A5QixRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBS1IsWUFBWCxFQUF5QixLQUFLcEksRUFBOUI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWCxFQUFlQSxFQUFmO0FBQ0E7QUFDRCxLQVpEOztBQWNBd0csSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhNkwsRUFBYixHQUFrQixVQUFVQyxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDbkMsV0FBS2EsRUFBTCxDQUFRWixJQUFSLENBQWE7QUFBRXhNLFFBQUFBLEVBQUUsRUFBRXNNLEVBQU47QUFBVVIsUUFBQUEsRUFBRSxFQUFFUztBQUFkLE9BQWI7QUFDQSxLQUZEOztBQUlBbEUsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUltTyxJQUFBQSxLQUFqQixHQUF5QixZQUFZO0FBQ3BDLFdBQUtaLE9BQUwsR0FBZSxJQUFmO0FBQ0EsS0FGRDs7QUFJQTFGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJb08sSUFBQUEsT0FBakIsR0FBMkIsWUFBWTtBQUN0QyxXQUFLYixPQUFMLEdBQWUsS0FBZjtBQUNBLEtBRkQ7O0FBSUExRixJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSXFPLElBQUFBLE1BQWpCLEdBQTBCLFlBQVk7QUFDckMsYUFBTyxLQUFLZCxPQUFaO0FBQ0EsS0FGRDs7QUFJQTFGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJc08sSUFBQUEsZUFBakIsR0FBbUMsWUFBWTtBQUM5QyxXQUFLZCxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLEtBRkQ7O0FBSUEzRixJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSXVPLElBQUFBLGlCQUFqQixHQUFxQyxZQUFZO0FBQ2hELFdBQUtmLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0EsS0FGRDs7QUFJQTNGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJd08sSUFBQUEsZ0JBQWpCLEdBQW9DLFlBQVk7QUFDL0MsYUFBTyxLQUFLaEIsaUJBQVo7QUFDQSxLQUZEOztBQUlBM0YsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhbU0sUUFBYixHQUF3QixZQUFZO0FBQ25DLFdBQUttQixFQUFMLEdBQVUsSUFBVjtBQUNBLEtBRkQ7O0FBSUF6RixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWFxSixXQUFiLEdBQTJCLFlBQVk7QUFDdEMsV0FBS2lFLEVBQUwsR0FBVSxLQUFWO0FBQ0EsS0FGRDs7QUFJQXpGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYWlPLFNBQWIsR0FBeUIsWUFBWTtBQUNwQyxhQUFPLEtBQUtYLEVBQVo7QUFDQSxLQUZEOztBQUlBekYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUl5TyxJQUFBQSxlQUFqQixHQUFtQyxZQUFZO0FBQzlDLGFBQU8sS0FBSzVKLEVBQUwsQ0FBUS9FLE1BQWY7QUFDQSxLQUZEOztBQUlBLFFBQUk0TyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFZO0FBQ3BCLFVBQUlDLEVBQUUsR0FBRyxJQUFUOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxVQUFVaFAsRUFBVixFQUFjUyxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0J5RyxFQUF0QixFQUEwQitHLE9BQTFCLEVBQW1DO0FBQy9DO0FBQUs7QUFBSTlLLFFBQUFBLEtBQVQsR0FBaUJuRSxFQUFqQjtBQUVBLGFBQUtTLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS2dCLEVBQUwsR0FBVSxFQUFWLENBSitDLENBTS9DOztBQUVBLGFBQUt5TixFQUFMLEdBQVUsRUFBVjs7QUFFQSxhQUFLQyxFQUFMLEdBQVUsVUFBVWpELEVBQVYsRUFBYztBQUN2QixjQUFJbk0sRUFBRSxHQUFHLElBQUlrSSxFQUFKLENBQU8sSUFBUCxFQUFhaUUsRUFBYixFQUFpQmhFLEVBQWpCLENBQVQ7QUFDQW5JLFVBQUFBLEVBQUUsQ0FBQzZJLEVBQUgsQ0FBTSxLQUFLbkksRUFBWCxFQUFlLEtBQUtnQixFQUFwQjtBQUNBLGVBQUssSUFBSTJOLE1BQUosQ0FBV2xELEVBQUUsQ0FBQ21ELElBQWQsQ0FBTCxJQUE0QnRQLEVBQTVCO0FBQ0EsZUFBS21QLEVBQUwsQ0FBUTlDLElBQVIsQ0FBYXJNLEVBQWI7QUFDQSxTQUxEOztBQU9BLGFBQUs2SSxFQUFMLEdBQVUsVUFBVW5JLEVBQVYsRUFBY2dCLEVBQWQsRUFBa0I7QUFDM0IsZUFBSzZOLEVBQUwsR0FBVSxHQUFWO0FBQ0EsZUFBS3BHLEVBQUwsR0FBVSxHQUFWO0FBQ0F2SixVQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBekI7QUFDQWQsVUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYLEVBQWVBLEVBQUUsR0FBR0EsRUFBSCxHQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF6QjtBQUNBLFNBTEQ7O0FBT0EsYUFBS21ILEVBQUwsQ0FBUW5JLEVBQVIsRUFBWWdCLEVBQVo7QUFDQTtBQUFLO0FBQUkwQyxRQUFBQSxLQUFULENBQWVvTCxFQUFmLENBQWtCLElBQWxCLEVBekIrQyxDQXlCdEI7O0FBRXpCLGFBQUtDLGFBQUwsR0FBcUIsSUFBckI7O0FBRUEsWUFBSVAsT0FBTyxDQUFDTCxnQkFBWixFQUE4QjtBQUM3QjtBQUFLO0FBQUlhLFVBQUFBLDRCQUFUO0FBQ0E7O0FBRUQsWUFBSVIsT0FBTyxDQUFDUixNQUFaLEVBQW9CO0FBQ25CO0FBQUs7QUFBSWlCLFVBQUFBLGdCQUFUO0FBQ0EsU0FGRCxNQUVPO0FBQ04sZUFBS0MsVUFBTDtBQUNBO0FBQUs7QUFBSUMsVUFBQUEsTUFBVCxDQUFnQixLQUFLQyxFQUFyQixFQUF5QnBQLEVBQXpCLEVBQTZCZ0IsRUFBN0I7QUFDQSxlQUFLK04sYUFBTCxHQUFxQixLQUFyQjtBQUNBO0FBQ0QsT0F4Q0Q7QUF5Q0EsS0E1Q0Q7O0FBOENBVixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSTBQLElBQUFBLE9BQWpCLEdBQTJCO0FBQVU7QUFBSXpLLElBQUFBLFFBQWQ7QUFBd0I7QUFBSTBLLElBQUFBLFFBQTVCO0FBQXNDO0FBQUlkLElBQUFBLE9BQTFDLEVBQW1EO0FBRTdFLFdBQUtyRyxFQUFMO0FBQVE7QUFBSXZELE1BQUFBLFFBQVE7QUFBRztBQUFJQSxNQUFBQSxRQUFQLEdBQWtCLEtBQUs1RSxFQUEzQztBQUErQztBQUFJc1AsTUFBQUEsUUFBUTtBQUFHO0FBQUlBLE1BQUFBLFFBQVAsR0FBa0IsS0FBS3RPLEVBQWxGO0FBQ0EsV0FBSytOLGFBQUwsR0FBcUIsSUFBckI7O0FBRUEsV0FBSyxJQUFJaEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVcxQyxFQUFYLENBQWMsS0FBS3JJLEVBQW5CLEVBQXVCLEtBQUtnQixFQUE1QjtBQUNBOztBQUVELFdBQUsrTixhQUFMLEdBQXFCLElBQXJCOztBQUVBLFVBQUlQLE9BQU8sSUFBSUEsT0FBTyxDQUFDTCxnQkFBdkIsRUFBeUM7QUFDeEM7QUFBSztBQUFJYSxRQUFBQSw0QkFBVDtBQUNBOztBQUVELFVBQUlSLE9BQU8sSUFBSUEsT0FBTyxDQUFDUixNQUF2QixFQUErQjtBQUM5QjtBQUFLO0FBQUlpQixRQUFBQSxnQkFBVDtBQUNBLE9BRkQsTUFFTztBQUNOLGFBQUtDLFVBQUw7QUFDQTtBQUFLO0FBQUlDLFFBQUFBLE1BQVQsQ0FBZ0IsS0FBS0MsRUFBckIsRUFBeUIsS0FBS3BQLEVBQTlCLEVBQWtDLEtBQUtnQixFQUF2QztBQUNBLGFBQUsrTixhQUFMLEdBQXFCLEtBQXJCO0FBQ0E7QUFDRCxLQXRCRDs7QUF3QkFWLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUgsQ0FBYXVQLFVBQWIsR0FBMEIsWUFBWTtBQUNyQyxXQUFLLElBQUluRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVIsRUFBV3pDLEVBQVgsQ0FBYyxDQUFkLEVBQWlCLEtBQUt0SSxFQUF0QixFQUEwQixLQUFLZ0IsRUFBL0I7QUFDQTtBQUNELEtBSkQ7O0FBTUFxTixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSXdQLElBQUFBLE1BQWpCLEdBQTBCO0FBQVU7QUFBSUksSUFBQUEsRUFBZDtBQUFrQjtBQUFJM0ssSUFBQUEsUUFBdEI7QUFBZ0M7QUFBSTBLLElBQUFBLFFBQXBDLEVBQThDO0FBQ3ZFLFVBQUksS0FBS0UsRUFBTCxHQUFVLEdBQWQsRUFDQyxLQUFLQyxXQUFMO0FBQWlCO0FBQUlGLE1BQUFBLEVBQXJCO0FBQXlCO0FBQUkzSyxNQUFBQSxRQUE3QjtBQUF1QztBQUFJMEssTUFBQUEsUUFBM0MsRUFERCxLQUdDLEtBQUtJLFVBQUw7QUFBZ0I7QUFBSUgsTUFBQUEsRUFBcEI7QUFBd0I7QUFBSTNLLE1BQUFBLFFBQTVCO0FBQXNDO0FBQUkwSyxNQUFBQSxRQUExQztBQUNELEtBTEQ7O0FBT0FqQixJQUFBQSxFQUFFLENBQUMxTyxTQUFILENBQWE4UCxXQUFiLEdBQTJCO0FBQVU7QUFBSUYsSUFBQUEsRUFBZDtBQUFrQjtBQUFJM0ssSUFBQUEsUUFBdEI7QUFBZ0M7QUFBSTBLLElBQUFBLFFBQXBDLEVBQThDO0FBQ3hFLFVBQUlLLFdBQVcsR0FBRyxHQUFsQjtBQUNBLFVBQUluRixFQUFFLEdBQUcsRUFBVDtBQUNBdEwsTUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNYSxFQUFOLEVBQVUsS0FBS3hLLEVBQWY7QUFDQSxVQUFJNFAsYUFBYSxHQUFHLEVBQXBCO0FBQ0ExUSxNQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU1nRyxhQUFOLEVBQXFCLEtBQUs1TyxFQUExQjtBQUVBO0FBQUk7QUFBSTRELE1BQUFBLFFBQVEsSUFBSTFGLEdBQUcsQ0FBQzJRLFFBQUo7QUFBYTtBQUFJakwsTUFBQUEsUUFBakIsRUFBMkIsS0FBSzVFLEVBQWhDLENBQXBCO0FBQ0M7QUFBSTRFLFFBQUFBLFFBQVEsR0FBRyxJQUFYO0FBRUw7QUFBSTtBQUFJMEssTUFBQUEsUUFBUSxJQUFJcFEsR0FBRyxDQUFDNFEsT0FBSjtBQUFZO0FBQUlSLE1BQUFBLFFBQWhCLEVBQTBCLEtBQUt0TyxFQUEvQixDQUFwQjtBQUNDO0FBQUlzTyxRQUFBQSxRQUFRLEdBQUcsSUFBWDs7QUFFTDtBQUFRO0FBQUlDLE1BQUFBLEVBQUUsR0FBR0ksV0FBVixHQUF5QixLQUFLZCxFQUE5QixJQUFvQyxLQUFLVyxFQUFoRCxFQUFvRDtBQUNuRCxZQUFJekYsRUFBRSxHQUFHLEtBQUt0QixFQUFkO0FBRUE7QUFBSTtBQUFJN0QsUUFBQUEsUUFBUixFQUNDMUYsR0FBRyxDQUFDK0osRUFBSixDQUFPdUIsRUFBUCxFQUFXLEtBQUt4SyxFQUFoQjtBQUFvQjtBQUFJNEUsUUFBQUEsUUFBeEIsRUFBa0MrSyxXQUFXO0FBQUc7QUFBSUosUUFBQUEsRUFBcEQ7QUFFRDtBQUFJO0FBQUlELFFBQUFBLFFBQVIsRUFDQ3BRLEdBQUcsQ0FBQ2lLLE1BQUosQ0FBV3lHLGFBQVgsRUFBMEIsS0FBSzVPLEVBQS9CO0FBQW1DO0FBQUlzTyxRQUFBQSxRQUF2QyxFQUFpREssV0FBVztBQUFHO0FBQUlKLFFBQUFBLEVBQW5FOztBQUVELGFBQUssSUFBSXhFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxlQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXekMsRUFBWCxDQUFjLEtBQUtrSCxFQUFuQixFQUF1QmhGLEVBQXZCLEVBQTJCb0YsYUFBM0I7QUFFQSxlQUFLbkgsRUFBTCxHQUFVc0IsRUFBVjtBQUNBOztBQUVENEYsUUFBQUEsV0FBVyxJQUFJLEtBQUtILEVBQUwsR0FBVSxLQUFLWCxFQUE5QjtBQUNBLGFBQUtBLEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS3BHLEVBQUwsR0FBVXNCLEVBQUUsR0FBRyxLQUFLeUYsRUFBcEI7QUFDQTs7QUFFRDtBQUFJO0FBQUk1SyxNQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVg7QUFBZTtBQUFJNEUsTUFBQUEsUUFBbkI7QUFFRDtBQUFJO0FBQUkwSyxNQUFBQSxRQUFSLEVBQ0NwUSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVg7QUFBZTtBQUFJc08sTUFBQUEsUUFBbkI7QUFFRCxXQUFLVCxFQUFMO0FBQVc7QUFBSVUsTUFBQUEsRUFBRSxHQUFHSSxXQUFwQjtBQUNBLEtBeENEOztBQTBDQXRCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUgsQ0FBYStQLFVBQWIsR0FBMEI7QUFBVTtBQUFJSCxJQUFBQSxFQUFkO0FBQWtCO0FBQUkzSyxJQUFBQSxRQUF0QjtBQUFnQztBQUFJMEssSUFBQUEsUUFBcEMsRUFBOEM7QUFDdkUsVUFBSXZGLEVBQUUsR0FBRyxLQUFLdEIsRUFBZDs7QUFFQSxXQUFLLElBQUlzQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVIsRUFBV3pDLEVBQVg7QUFBYztBQUFJaUgsUUFBQUEsRUFBbEI7QUFBc0I7QUFBSTNLLFFBQUFBLFFBQTFCO0FBQW9DO0FBQUkwSyxRQUFBQSxRQUF4QztBQUNBLGFBQUs3RyxFQUFMLEdBQVVzQixFQUFWO0FBQ0E7O0FBRUQsV0FBS3RCLEVBQUwsR0FBVXNCLEVBQUU7QUFBRztBQUFJd0YsTUFBQUEsRUFBbkI7QUFFQTtBQUFJO0FBQUkzSyxNQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVg7QUFBZTtBQUFJNEUsTUFBQUEsUUFBbkI7QUFFRDtBQUFJO0FBQUkwSyxNQUFBQSxRQUFSLEVBQ0NwUSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVg7QUFBZTtBQUFJc08sTUFBQUEsUUFBbkI7QUFDRCxLQWZEOztBQWlCQWpCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJb1EsSUFBQUEsYUFBakIsR0FBaUM7QUFBVTtBQUFJbkwsSUFBQUEsUUFBZDtBQUF3QjtBQUFJMEssSUFBQUEsUUFBNUIsRUFBc0M7QUFFdEU7QUFBSTtBQUFJMUssTUFBQUEsUUFBUixFQUNDMUYsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUszSixFQUFYO0FBQWU7QUFBSTRFLE1BQUFBLFFBQW5CO0FBRUQ7QUFBSTtBQUFJMEssTUFBQUEsUUFBUixFQUNDcFEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYO0FBQWU7QUFBSXNPLE1BQUFBLFFBQW5COztBQUVELFdBQUssSUFBSXZFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXdUMsRUFBWCxDQUFjLEtBQUt0TixFQUFuQixFQUF1QixLQUFLZ0IsRUFBNUI7QUFDQTtBQUNELEtBWEQ7O0FBYUFxTixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSXFRLElBQUFBLHdCQUFqQixHQUE0QztBQUFVO0FBQUlwQixJQUFBQSxJQUFkO0FBQW9CO0FBQUlxQixJQUFBQSxLQUF4QixFQUErQjtBQUMxRSxVQUFJQyxRQUFRLEdBQUcsSUFBSXZCLE1BQUo7QUFBVztBQUFJQyxNQUFBQSxJQUFmLENBQWY7O0FBRUE7QUFBSTtBQUFJcUIsTUFBQUEsS0FBSyxZQUFZRSxLQUF6QixFQUFnQztBQUMvQjtBQUFJO0FBQUlGLFFBQUFBLEtBQUssQ0FBQ3hRLE1BQU4sSUFBZ0IsQ0FBeEIsRUFBMkI7QUFDMUIsZUFBSyxJQUFJc0wsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDN0wsWUFBQUEsR0FBRyxDQUFDa1IsQ0FBSixDQUFNLEtBQUszQixFQUFMLENBQVExRCxDQUFSLEVBQVdtRixRQUFYLENBQU47QUFBNEI7QUFBSUQsWUFBQUEsS0FBaEM7QUFDQTtBQUNELFNBSkQsTUFLSztBQUNKLGVBQUssSUFBSWxGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QzdMLFlBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLOEUsRUFBTCxDQUFRMUQsQ0FBUixFQUFXbUYsUUFBWCxDQUFOO0FBQTRCO0FBQUlELFlBQUFBLEtBQWhDO0FBQ0E7QUFDRDtBQUNELE9BWEQsTUFZSztBQUNKLGFBQUssSUFBSWxGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxlQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXbUYsUUFBWDtBQUF1QjtBQUFJRCxVQUFBQSxLQUEzQjtBQUNBO0FBQ0Q7QUFDRCxLQXBCRDs7QUFzQkE1QixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSXNQLElBQUFBLGdCQUFqQixHQUFvQyxZQUFXO0FBQzlDLFdBQUssSUFBSWxFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUjtBQUFXO0FBQUkrQyxRQUFBQSxLQUFmO0FBQ0E7QUFDRCxLQUpEOztBQU1BTyxJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSTBRLElBQUFBLGtCQUFqQixHQUFzQyxZQUFZO0FBQ2pELFdBQUssSUFBSXRGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUjtBQUFXO0FBQUlnRCxRQUFBQSxPQUFmO0FBQ0E7O0FBQ0QsV0FBS21CLFVBQUw7O0FBRUEsVUFBSSxLQUFLSCxhQUFULEVBQXdCO0FBQ3ZCO0FBQUs7QUFBSUksUUFBQUEsTUFBVCxDQUFnQixLQUFLQyxFQUFyQixFQUF5QixLQUFLcFAsRUFBOUIsRUFBa0MsS0FBS2dCLEVBQXZDO0FBQ0EsYUFBSytOLGFBQUwsR0FBcUIsS0FBckI7QUFDQTtBQUNELEtBVkQ7O0FBWUFWLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJMlEsSUFBQUEsb0JBQWpCLEdBQXdDLFlBQVk7QUFDbkQsV0FBSyxJQUFJdkYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLFlBQUksQ0FBQyxLQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXaUQsTUFBWCxFQUFMLEVBQ0MsT0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0EsS0FORDs7QUFRQUssSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUlxUCxJQUFBQSw0QkFBakIsR0FBZ0QsWUFBWTtBQUMzRCxXQUFLLElBQUlqRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVI7QUFBVztBQUFJa0QsUUFBQUEsZUFBZjtBQUNBO0FBQ0QsS0FKRDs7QUFNQUksSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUk0USxJQUFBQSw4QkFBakIsR0FBa0QsWUFBWTtBQUM3RCxXQUFLLElBQUl4RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVI7QUFBVztBQUFJbUQsUUFBQUEsaUJBQWY7QUFDQTtBQUNELEtBSkQ7O0FBTUFHLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJNlEsSUFBQUEsZ0NBQWpCLEdBQW9ELFlBQVk7QUFDL0QsV0FBSyxJQUFJekYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLFlBQUksQ0FBQyxLQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXb0QsZ0JBQVgsRUFBTCxFQUNDLE9BQU8sS0FBUDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNBLEtBTkQ7O0FBUUFFLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJeU8sSUFBQUEsZUFBakIsR0FBbUMsWUFBVztBQUM3QyxVQUFJcUMsWUFBWSxHQUFHLENBQW5COztBQUVBLFdBQUssSUFBSTFGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QzBGLFFBQUFBLFlBQVksSUFBSSxLQUFLaEMsRUFBTCxDQUFRMUQsQ0FBUixFQUFXcUQsZUFBWCxFQUFoQjtBQUNBOztBQUVELGFBQU9xQyxZQUFQO0FBQ0EsS0FSRDs7QUFXQSxRQUFJQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFZO0FBQ3BCLFdBQUtuQyxLQUFMLEdBQWEsVUFBVWhQLEVBQVYsRUFBY1MsRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCbUUsWUFBdEIsRUFBb0NxSixPQUFwQyxFQUE2QztBQUN6RGtDLFFBQUFBLEVBQUUsQ0FBQy9RLFNBQUgsQ0FBYTRPLEtBQWIsQ0FBbUJvQyxJQUFuQixDQUF3QixJQUF4QixFQUE4QnBSLEVBQTlCLEVBQWtDUyxFQUFsQyxFQUFzQ2dCLEVBQXRDLEVBQTBDMEQsRUFBMUMsRUFBOEM4SixPQUE5Qzs7QUFFQSxhQUFLL0gsYUFBTCxHQUFxQixFQUFyQjtBQUVBLFlBQUltSyxPQUFPLEdBQUcsRUFBZDtBQUVBO0FBQ0MsY0FBSUMsT0FBSjs7QUFDQSxlQUFLLElBQUl0TSxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHO0FBQUs7QUFBSWIsVUFBQUEsS0FBVCxDQUFlb04sRUFBckMsRUFBeUMsRUFBRXZNLEVBQTNDLEVBQStDO0FBQzlDc00sWUFBQUEsT0FBTyxHQUFHdE0sRUFBRSxHQUFHLENBQWY7QUFDQXFNLFlBQUFBLE9BQU8sQ0FBQ2pGLElBQVIsQ0FBYWtGLE9BQU8sR0FBRyxDQUF2QixFQUEwQkEsT0FBTyxHQUFHLENBQXBDLEVBQXVDQSxPQUFPLEdBQUcsQ0FBakQsRUFBb0RBLE9BQU8sR0FBRyxDQUE5RCxFQUFpRUEsT0FBTyxHQUFHLENBQTNFLEVBQThFQSxPQUFPLEdBQUcsQ0FBeEY7QUFDQTtBQUNEO0FBRUQsYUFBSzFMLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsYUFBS0EsWUFBTCxDQUFrQjRMLFVBQWxCLENBQTZCO0FBQUs7QUFBSXJOLFFBQUFBLEtBQVQsQ0FBZW9OLEVBQWYsR0FBb0IsQ0FBakQsRUFBb0QsQ0FBQyxDQUFELENBQXBELEVBQXlERixPQUF6RCxFQUFrRTtBQUFLO0FBQUlsTixRQUFBQSxLQUFULENBQWVvTixFQUFqRjtBQUNBLGFBQUszTCxZQUFMLENBQWtCNkwsWUFBbEIsR0FBaUMsQ0FBakM7QUFDQSxPQWxCRDtBQW1CQSxLQXBCRDs7QUFzQkFOLElBQUFBLEVBQUUsQ0FBQy9RLFNBQUgsR0FBZSxJQUFJME8sRUFBSixFQUFmOztBQUVBcUMsSUFBQUEsRUFBRSxDQUFDL1EsU0FBSDtBQUFhO0FBQUlzUixJQUFBQSxtQkFBakIsR0FBdUM7QUFBVTtBQUFJQyxJQUFBQSxXQUFkO0FBQTJCO0FBQUlDLElBQUFBLFFBQS9CO0FBQXlDO0FBQUlDLElBQUFBLFNBQTdDLEVBQXdEO0FBQzlGLFdBQUtqTSxZQUFMLENBQWtCa00sT0FBbEI7QUFDQSxXQUFLbE0sWUFBTCxDQUFrQjJCLGdCQUFsQixHQUFxQyxJQUFyQztBQUVBLFdBQUsySCxFQUFMLENBQVFwSCxPQUFSLENBQWdCLFVBQVUvSCxFQUFWLEVBQWM7QUFDN0JBLFFBQUFBLEVBQUUsQ0FBQzhILEVBQUg7QUFBTTtBQUFJOEosUUFBQUEsV0FBVjtBQUF1QjtBQUFJQyxRQUFBQSxRQUEzQjtBQUFxQztBQUFJQyxRQUFBQSxTQUF6QyxFQUFvRCxLQUFLak0sWUFBekQ7QUFDQSxPQUZELEVBRUcsSUFGSDtBQUlBLFVBQUksS0FBS0EsWUFBTCxDQUFrQjJCLGdCQUF0QixFQUNDLEtBQUszQixZQUFMLENBQWtCK0IsY0FBbEIsQ0FBaUMsS0FBSy9CLFlBQUwsQ0FBa0IyQixnQkFBbkQ7QUFDRCxLQVZEOztBQVlBLFFBQUl3SyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFZO0FBQ3BCLFdBQUsvQyxLQUFMLEdBQWEsVUFBVWhQLEVBQVYsRUFBY1MsRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCd04sT0FBdEIsRUFBK0I7QUFDM0M4QyxRQUFBQSxFQUFFLENBQUMzUixTQUFILENBQWE0TyxLQUFiLENBQW1Cb0MsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJwUixFQUE5QixFQUFrQ1MsRUFBbEMsRUFBc0NnQixFQUF0QyxFQUEwQzVCLEVBQTFDLEVBQThDb1AsT0FBOUM7O0FBRUEsYUFBSy9LLFNBQUwsR0FBaUIsRUFBakI7QUFDQTtBQUFLO0FBQUlDLFFBQUFBLEtBQVQsQ0FBZUQsU0FBZixDQUF5QjRELE9BQXpCLENBQWlDLFVBQVU0SSxLQUFWLEVBQWlCO0FBQ2pELGVBQUt4TSxTQUFMLENBQWVrSSxJQUFmLENBQW9CLENBQUMsYUFBRCxFQUFnQixTQUFoQixFQUEyQixVQUEzQixFQUF1Q3NFLEtBQXZDLENBQXBCO0FBQ0EsU0FGRCxFQUVHLElBRkg7QUFJQTtBQUFLO0FBQUluTSxRQUFBQSxZQUFULEdBQXdCLEVBQXhCO0FBQ0EsT0FURDtBQVVBLEtBWEQ7O0FBYUF3TixJQUFBQSxFQUFFLENBQUMzUixTQUFILEdBQWUsSUFBSTBPLEVBQUosRUFBZjs7QUFFQWlELElBQUFBLEVBQUUsQ0FBQzNSLFNBQUg7QUFBYTtBQUFJNFIsSUFBQUEsSUFBakIsR0FBd0I7QUFBVTtBQUFJQyxJQUFBQSxPQUFkO0FBQXVCO0FBQUlDLElBQUFBLE1BQTNCLEVBQW1DO0FBQzFELFdBQUssSUFBSTFHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXdkgsRUFBWDtBQUFjO0FBQUlnTyxRQUFBQSxPQUFsQjtBQUEyQjtBQUFJQyxRQUFBQSxNQUEvQjtBQUNBO0FBQ0QsS0FKRDs7QUFNQSxTQUFLQyxpQkFBTCxHQUF5QjtBQUFVO0FBQUk5TSxJQUFBQSxRQUFkO0FBQXdCO0FBQUkwSyxJQUFBQSxRQUE1QjtBQUFzQztBQUFJbkssSUFBQUEsWUFBMUM7QUFBd0Q7QUFBSXFKLElBQUFBLE9BQTVELEVBQXFFO0FBQzdGLFVBQUluUCxFQUFFLEdBQUcsSUFBSXFSLEVBQUosRUFBVDs7QUFDQXJSLE1BQUFBLEVBQUUsQ0FBQ2tQLEtBQUgsQ0FBUyxJQUFUO0FBQWU7QUFBSTNKLE1BQUFBLFFBQW5CO0FBQTZCO0FBQUkwSyxNQUFBQSxRQUFqQztBQUEyQztBQUFJbkssTUFBQUEsWUFBL0M7QUFBNkQ7QUFBSXFKLE1BQUFBLE9BQU8sSUFBSSxFQUE1RTs7QUFDQSxhQUFPblAsRUFBUDtBQUNBLEtBSkQ7O0FBTUEsU0FBS3NTLHNCQUFMLEdBQThCO0FBQVU7QUFBSS9NLElBQUFBLFFBQWQ7QUFBd0I7QUFBSTBLLElBQUFBLFFBQTVCO0FBQXNDO0FBQUlkLElBQUFBLE9BQTFDLEVBQW1EO0FBQ2hGLFVBQUluUCxFQUFFLEdBQUcsSUFBSWlTLEVBQUosRUFBVDs7QUFDQWpTLE1BQUFBLEVBQUUsQ0FBQ2tQLEtBQUgsQ0FBUyxJQUFUO0FBQWU7QUFBSTNKLE1BQUFBLFFBQW5CO0FBQTZCO0FBQUkwSyxNQUFBQSxRQUFqQztBQUEyQztBQUFJZCxNQUFBQSxPQUFPLElBQUksRUFBMUQ7O0FBQ0EsYUFBT25QLEVBQVA7QUFDQSxLQUpEOztBQUtBLFNBQUt1UyxRQUFMLEdBQWdCLENBQUMsa0JBQUQsQ0FBaEI7QUFDQSxTQUFLbk8sU0FBTCxHQUFpQixDQUFDLENBQUQsQ0FBakI7QUFDQSxTQUFLRSxZQUFMLEdBQW9CLENBQUM7QUFBQ0UsTUFBQUEsYUFBYSxFQUFDLENBQWY7QUFBaUJFLE1BQUFBLGNBQWMsRUFBQyxDQUFDLENBQUQ7QUFBaEMsS0FBRCxDQUFwQjtBQUNBLFNBQUsrTSxFQUFMLEdBQVUsR0FBVjs7QUFFQSxhQUFTZSxzQkFBVCxHQUFrQztBQUVqQyxVQUFJQyxFQUFFLEdBQUcsRUFBVDtBQUFBLFVBQWFDLEVBQWI7QUFBQSxVQUFpQkMsRUFBakI7QUFBQSxVQUFxQkMsRUFBckI7QUFBQSxVQUF5QkMsRUFBRSxHQUFHLEVBQTlCO0FBQUEsVUFBa0NDLEVBQUUsR0FBRyxFQUF2QztBQUFBLFVBQTJDQyxHQUFHLEdBQUMsRUFBL0M7QUFBQSxVQUFtREMsS0FBSyxHQUFDLEVBQXpEO0FBQUEsVUFBNkRDLEtBQUssR0FBQyxFQUFuRTtBQUFBLFVBQXVFQyxLQUFLLEdBQUMsRUFBN0U7QUFBQSxVQUFpRkMsTUFBTSxHQUFDLEVBQXhGO0FBQUEsVUFBNEZDLE1BQTVGO0FBQUEsVUFBb0dDLElBQUksR0FBQyxFQUF6RztBQUFBLFVBQTZHQyxJQUFJLEdBQUMsRUFBbEg7QUFBQSxVQUFzSEMsTUFBdEg7QUFBQSxVQUE4SEMsTUFBOUg7QUFBQSxVQUFzSUMsS0FBdEk7QUFBQSxVQUE2SUMsTUFBTSxHQUFDLEVBQXBKO0FBQUEsVUFBd0pDLEdBQXhKO0FBQUEsVUFBNkpDLEdBQTdKO0FBQUEsVUFBa0tDLEdBQWxLO0FBQUEsVUFBdUtDLEdBQXZLO0FBQUEsVUFBNEtDLEtBQTVLO0FBQUEsVUFBbUxDLEtBQUssR0FBRyxFQUEzTDtBQUFBLFVBQStMQyxHQUEvTDtBQUFBLFVBQW9NQyxHQUFwTTtBQUFBLFVBQXlNQyxHQUF6TTs7QUFDQSxXQUFLaFUsRUFBTCxHQUFVLENBQUM7QUFBQ00sUUFBQUEsRUFBRSxFQUFDLENBQUo7QUFBTStCLFFBQUFBLEVBQUUsRUFBQyxDQUFUO0FBQVdxQyxRQUFBQSxFQUFFLEVBQUMsQ0FBZDtBQUFnQk4sUUFBQUEsZ0JBQWdCLEVBQUM7QUFBakMsT0FBRCxDQUFWO0FBQ0EsV0FBS2dMLElBQUwsR0FBWSxnQkFBWjs7QUFFQSxXQUFLaEMsRUFBTCxHQUFVLFVBQVN0TixFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQ21OLEVBQUg7QUFDQW5OLFFBQUFBLEVBQUUsQ0FBQzZULEdBQUgsR0FBUyxDQUNSLENBQ0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FERCxDQURRLENBQVQ7QUFLQTdULFFBQUFBLEVBQUUsQ0FBQ3VOLEVBQUgsR0FBUSxHQUFSO0FBQ0F2TixRQUFBQSxFQUFFLENBQUNnRixFQUFILEdBQVEsQ0FBUjtBQUNBLE9BVEQ7O0FBV0EsV0FBSzRELEVBQUwsR0FBVSxVQUFTd0UsRUFBVCxFQUFhO0FBQ3RCQSxRQUFBQSxFQUFFLENBQUM3RCxFQUFILEdBQVEsRUFBUjtBQUNBNkQsUUFBQUEsRUFBRSxDQUFDN0UsRUFBSCxHQUFRLENBQVI7QUFDQTZFLFFBQUFBLEVBQUUsQ0FBQ3JELEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0FKRDs7QUFNQSxXQUFLYixFQUFMLEdBQVUsVUFBU0QsRUFBVCxFQUFhakosRUFBYixFQUFpQm9OLEVBQWpCLEVBQXFCO0FBQzlCQSxRQUFBQSxFQUFFLENBQUM3RCxFQUFILEdBQVEsRUFBUjtBQUNBLE9BRkQ7O0FBSUEsV0FBS3NDLEVBQUwsR0FBVSxVQUFTN0wsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUN3VCxDQUFILEdBQU8sR0FBUDtBQUNBdlUsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNMEUsRUFBTixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCO0FBQ0E3UixRQUFBQSxFQUFFLENBQUN5VCxFQUFILEdBQVEsRUFBUjtBQUNBeFUsUUFBQUEsR0FBRyxDQUFDeVUsRUFBSixDQUFPMVQsRUFBRSxDQUFDeVQsRUFBVixFQUFjNUIsRUFBZCxFQUFrQnhTLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUN5VCxFQUFULEVBQWFwVSxFQUFFLENBQUNVLEVBQWhCLEVBQW9CQyxFQUFFLENBQUN5VCxFQUF2QjtBQUNBM0IsUUFBQUEsRUFBRSxHQUFHLENBQUMsR0FBRCxHQUFPelMsRUFBRSxDQUFDRCxFQUFILENBQU11VSxJQUFOLE1BQWdCLE1BQU0sQ0FBQyxHQUF2QixDQUFaO0FBQ0E1QixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFELEdBQU8xUyxFQUFFLENBQUNELEVBQUgsQ0FBTXVVLElBQU4sTUFBZ0IsTUFBTSxDQUFDLEdBQXZCLENBQVo7QUFDQTNCLFFBQUFBLEVBQUUsR0FBRyxDQUFDLEdBQUQsR0FBTzNTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNdVUsSUFBTixNQUFnQixNQUFNLENBQUMsR0FBdkIsQ0FBWjtBQUNBMVUsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNOEUsRUFBTixFQUFVSCxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCO0FBQ0FoUyxRQUFBQSxFQUFFLENBQUM0VCxFQUFILEdBQVEsRUFBUjtBQUNBM1UsUUFBQUEsR0FBRyxDQUFDeVUsRUFBSixDQUFPMVQsRUFBRSxDQUFDNFQsRUFBVixFQUFjM0IsRUFBZCxFQUFrQjVTLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUM0VCxFQUFULEVBQWF2VSxFQUFFLENBQUNrTixFQUFoQixFQUFvQnZNLEVBQUUsQ0FBQzRULEVBQXZCO0FBQ0E1VCxRQUFBQSxFQUFFLENBQUM2VCxFQUFILEdBQVEsQ0FBUjtBQUNBNVUsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ3lULEVBQWhCO0FBQ0EsT0FmRDs7QUFpQkEsV0FBS3RJLEVBQUwsR0FBVSxVQUFTOUwsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUN3VCxDQUFILEdBQU8sR0FBUDtBQUNBdlUsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNMEUsRUFBTixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCO0FBQ0E3UixRQUFBQSxFQUFFLENBQUN5VCxFQUFILEdBQVEsRUFBUjtBQUNBeFUsUUFBQUEsR0FBRyxDQUFDeVUsRUFBSixDQUFPMVQsRUFBRSxDQUFDeVQsRUFBVixFQUFjNUIsRUFBZCxFQUFrQnhTLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUN5VCxFQUFULEVBQWFwVSxFQUFFLENBQUNVLEVBQWhCLEVBQW9CQyxFQUFFLENBQUN5VCxFQUF2QjtBQUNBM0IsUUFBQUEsRUFBRSxHQUFHLENBQUMsR0FBRCxHQUFPelMsRUFBRSxDQUFDRCxFQUFILENBQU11VSxJQUFOLE1BQWdCLE1BQU0sQ0FBQyxHQUF2QixDQUFaO0FBQ0E1QixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFELEdBQU8xUyxFQUFFLENBQUNELEVBQUgsQ0FBTXVVLElBQU4sTUFBZ0IsTUFBTSxDQUFDLEdBQXZCLENBQVo7QUFDQTNCLFFBQUFBLEVBQUUsR0FBRyxDQUFDLEdBQUQsR0FBTzNTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNdVUsSUFBTixNQUFnQixNQUFNLENBQUMsR0FBdkIsQ0FBWjtBQUNBMVUsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNOEUsRUFBTixFQUFVSCxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCO0FBQ0FoUyxRQUFBQSxFQUFFLENBQUM0VCxFQUFILEdBQVEsRUFBUjtBQUNBM1UsUUFBQUEsR0FBRyxDQUFDeVUsRUFBSixDQUFPMVQsRUFBRSxDQUFDNFQsRUFBVixFQUFjM0IsRUFBZCxFQUFrQjVTLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUM0VCxFQUFULEVBQWF2VSxFQUFFLENBQUNrTixFQUFoQixFQUFvQnZNLEVBQUUsQ0FBQzRULEVBQXZCO0FBQ0E1VCxRQUFBQSxFQUFFLENBQUM2VCxFQUFILEdBQVEsQ0FBUjtBQUNBNVUsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ3lULEVBQWhCO0FBQ0EsT0FmRDs7QUFpQkEsV0FBS3JJLEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQ3dULENBQUgsSUFBUWxMLEVBQVI7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTStFLEVBQU4sRUFBVSxDQUFWLEVBQWEsQ0FBQyxHQUFkLEVBQW1CLENBQW5CO0FBQ0FqVCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0wSSxLQUFOLEVBQWFGLEVBQWI7QUFDQWpULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTJJLEtBQU4sRUFBYSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFiO0FBQ0FwVCxRQUFBQSxHQUFHLENBQUMrRyxDQUFKLENBQU15TSxJQUFOLEVBQVlMLEtBQVosRUFBbUI5SixFQUFuQjtBQUNBckosUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNOE0sSUFBTixFQUFZQSxJQUFaLEVBQWtCelMsRUFBRSxDQUFDNFQsRUFBckI7QUFDQTNVLFFBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTTBNLElBQU4sRUFBWUQsSUFBWixFQUFrQm5LLEVBQWxCO0FBQ0FySixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0rTSxJQUFOLEVBQVlBLElBQVosRUFBa0IxUyxFQUFFLENBQUN5VCxFQUFyQjtBQUNBeFUsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDeVQsRUFBVCxFQUFhZixJQUFiO0FBQ0F6VCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUM0VCxFQUFULEVBQWFuQixJQUFiO0FBQ0F4VCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDeVQsRUFBaEI7QUFDQVYsUUFBQUEsR0FBRyxHQUFHLEVBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFHLENBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFJalQsRUFBRSxDQUFDd1QsQ0FBSCxHQUFPUixHQUFkO0FBQ0FHLFFBQUFBLEtBQUssR0FBRUYsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVNBLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFRQSxHQUF4QjtBQUNBaFUsUUFBQUEsR0FBRyxDQUFDNlUsQ0FBSixDQUFNVixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsQ0FBeEI7QUFDQUQsUUFBQUEsR0FBRyxHQUFHaFUsRUFBRSxDQUFDNlUsRUFBSCxDQUFNMVUsRUFBRSxDQUFDNlQsR0FBSCxDQUFPLENBQVAsRUFBVUUsS0FBSyxDQUFDLENBQUQsQ0FBZixDQUFOLEVBQTBCQSxLQUFLLENBQUMsQ0FBRCxDQUEvQixDQUFOO0FBQ0FDLFFBQUFBLEdBQUcsR0FBSU4sR0FBRyxHQUFHRyxHQUFiO0FBQ0FJLFFBQUFBLEdBQUcsR0FBRyxDQUFOO0FBQ0FDLFFBQUFBLEdBQUcsR0FBR0QsR0FBTjtBQUNBclUsUUFBQUEsR0FBRyxDQUFDa1IsQ0FBSixDQUFNblEsRUFBRSxDQUFDb0MsRUFBVCxFQUFZLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBWjtBQUNBcEMsUUFBQUEsRUFBRSxDQUFDRyxFQUFILEdBQVFILEVBQUUsQ0FBQzZULEVBQVg7QUFDQTVVLFFBQUFBLEdBQUcsQ0FBQzZVLENBQUosQ0FBTTlULEVBQUUsQ0FBQ1csRUFBVCxFQUFZMFMsR0FBWixFQUFnQkEsR0FBaEI7QUFDQXBVLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ3NDLEVBQVQsRUFBWSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFaO0FBQ0F0QyxRQUFBQSxFQUFFLENBQUN3QixFQUFILEdBQVErUixHQUFSO0FBQ0F2VCxRQUFBQSxFQUFFLENBQUMyQixFQUFILEdBQVEsQ0FBUjtBQUNBLE9BM0JEOztBQTZCQSxXQUFLd0ssRUFBTCxHQUFVLFVBQVM5TSxFQUFULEVBQWFXLEVBQWIsRUFBaUJvTSxFQUFqQixFQUFxQjtBQUM5QjRHLFFBQUFBLEdBQUcsR0FBRyxDQUFOO0FBQ0EsWUFBSWhULEVBQUUsQ0FBQ3dULENBQUgsR0FBT1IsR0FBWCxFQUFnQixPQUFPLElBQVA7QUFDaEIsZUFBTyxLQUFQO0FBQ0EsT0FKRDtBQU9BOztBQUVELFNBQUtuRSxFQUFMLEdBQVUsVUFBU3pQLEVBQVQsRUFBYTtBQUN0QkEsTUFBQUEsRUFBRSxDQUFDbVEsRUFBSCxHQUFRLFNBQVI7QUFDQW5RLE1BQUFBLEVBQUUsQ0FBQytQLEVBQUgsR0FBUSxDQUFSOztBQUNBL1AsTUFBQUEsRUFBRSxDQUFDdVUsSUFBSCxHQUFVLFlBQVc7QUFBRSxlQUFPdFQsSUFBSSxDQUFDMlQsTUFBTCxFQUFQO0FBQXVCLE9BQTlDOztBQUNBNVUsTUFBQUEsRUFBRSxDQUFDcVAsRUFBSCxDQUFNLElBQUltRCxzQkFBSixFQUFOO0FBQ0EsS0FMRDs7QUFNQyxTQUFLbUMsRUFBTCxHQUFVLFVBQVNFLFVBQVQsRUFBcUIzSSxFQUFyQixFQUF5QjtBQUFLLFVBQUk0SSxRQUFRLEdBQUc3VCxJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSTZJLE9BQU8sR0FBR0QsUUFBUSxHQUFHLENBQXpCO0FBQStCLGFBQU9qVixHQUFHLENBQUN5TCxDQUFKLENBQU11SixVQUFVLENBQUNDLFFBQUQsQ0FBaEIsRUFBNEJELFVBQVUsQ0FBQ0UsT0FBRCxDQUF0QyxFQUFpRDdJLEVBQUUsR0FBRzRJLFFBQXRELENBQVA7QUFBMkUsS0FBcEw7QUFHRDs7QUFFRCxTQUFPbFYsWUFBUDtBQUNDLENBendDQSxDQUFEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlNGEwMzRiZi1kNmNmLTRiMGYtOGM4MC1lNmUyZTJlYjk3MmVcclxuXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgICAgICAgICAocm9vdC5OZXV0cmlub0VmZmVjdCA9IGV4cG9ydHMpWydOb05hbWVFZmZlY3QnXSA9IGZhY3RvcnkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IChyb290Lk5ldXRyaW5vRWZmZWN0IHx8IChyb290Lk5ldXRyaW5vRWZmZWN0ID0ge30pKTtcclxuICAgICAgICBuYW1lc3BhY2UuX19sYXN0X18gPSBuYW1lc3BhY2VbJ05vTmFtZUVmZmVjdCddID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5mdW5jdGlvbiBOb05hbWVFZmZlY3QoY3R4KSB7XHJcblx0dmFyIERiID0gdGhpcztcclxuXHJcblx0dmFyIG5lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblxyXG5cdFx0XHR0aGlzLkxjID0gW25lLnByb3RvdHlwZS5FYyxcclxuXHRcdFx0XHRuZS5wcm90b3R5cGUuRmNdW3RoaXMud2UueGVdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdG5lLnByb3RvdHlwZSA9IHtcclxuXHRcdEVjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgR2MgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHR2YXIgSGMgPSBNYXRoLmNvcyhHYyk7XHJcblx0XHRcdHZhciBJYyA9IE1hdGguc2luKEdjKTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybSh5ZSAqIEhjLCB5ZSAqIEljLCB6ZSAqIC1JYywgemUgKiBIYywgQWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0RmM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oXHJcblx0XHRcdFx0eWUgKiAoMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MiksXHJcblx0XHRcdFx0eWUgKiAoeHkgKyB3eiksXHJcblx0XHRcdFx0emUgKiAod3ogLSB4eSksXHJcblx0XHRcdFx0emUgKiAoMi4wICogcVswXSAqIHFbMF0gKyB6MiAtIDEuMCksXHJcblx0XHRcdFx0QWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0UGM6IGZ1bmN0aW9uIChmZSwgWGIsIGdlKSB7XHJcblx0XHRcdFhiLnZjKGZlLCAtMSwgZ2UpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuQmUgIT0gbnVsbCAmJiAhWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoWGIuT2QgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBBYiA9IFhiLkFiLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBOZCA9IFhiLk5kLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdGlmICghZ2UgfHwgZ2UuLyoqL3RyYW5zZm9ybShBYiwgTmQpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBkZiA9IE1hdGguYWJzKE5kWzBdKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZWYgPSBNYXRoLmFicyhOZFsxXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkZiA+IDAuMDAxICYmIGVmID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLnNhdmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuTGMoZmUsIEFiLCBYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUudHJhbnNsYXRlKC1kZiAqIFhiLlBkWzBdLCAtZWYgKiAoMSAtIFhiLlBkWzFdKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5nbG9iYWxBbHBoYSAqPSBYYi5PZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoWGIuZ2ZbMF0gPCAwLjk5OSB8fCBYYi5nZlsxXSA8IDAuOTk5IHx8IFhiLmdmWzJdIDwgMC45OTkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRmID49IDEgJiYgZWYgPj0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBZZSA9IGRmIDwgdGhpcy5UYyA/IGRmIDogdGhpcy5UYztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWmUgPSBlZiA8IHRoaXMuVWMgPyBlZiA6IHRoaXMuVWM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5hZihZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJjb3B5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibXVsdGlwbHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFN0eWxlID0gY3R4LmZmKFhiLmdmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFJlY3QoMCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tYXRvcFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZShjdHguY2YsIDAsIDAsIFllLCBaZSwgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIudmMoZmUsIDEsIGdlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0SGQ6IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdFx0ZmUuc2F2ZSgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHRcdFx0XHRmZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB0aGlzLkxkLm1hdGVyaWFsc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS5tYXRlcmlhbEluZGV4XTtcclxuXHRcdFx0XHR0aGlzLkJlID0gdGhpcy5MZC50ZXh0dXJlRGVzY3NbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuQmUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5CZSkge1xyXG5cdFx0XHRcdHRoaXMuVGMgPSB0aGlzLkJlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHR0aGlzLlVjID0gdGhpcy5CZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBrZChhLCBiKSB7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPiBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPCBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGtkKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgb2UgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblxyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnZlcnRleCA9IFtcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9XTtcclxuXHR9XHJcblxyXG5cdG9lLnByb3RvdHlwZSA9IHtcclxuXHRcdHFlOiBmdW5jdGlvbiAoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRYYi5DZSgtMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICghWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgdjAgPSB0aGlzLnZlcnRleFswXTtcclxuXHRcdFx0XHRcdHZhciB2MSA9IHRoaXMudmVydGV4WzFdO1xyXG5cdFx0XHRcdFx0dmFyIHYyID0gdGhpcy52ZXJ0ZXhbMl07XHJcblx0XHRcdFx0XHR2YXIgdjMgPSB0aGlzLnZlcnRleFszXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgRmUgPSBbXSwgR2UgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy53ZS54ZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHZhciBhID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0XHRcdFx0dmFyIHMgPSAtTWF0aC5zaW4oYSk7XHJcblx0XHRcdFx0XHRcdHZhciBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IHNlWzBdICogYyArIHJlWzBdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSBzZVsxXSAqIGMgKyByZVsxXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gc2VbMl0gKiBjICsgcmVbMl0gKiBzO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSAtc2VbMF0gKiBzICsgcmVbMF0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IC1zZVsxXSAqIHMgKyByZVsxXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gLXNlWzJdICogcyArIHJlWzJdICogYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHRcdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0XHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdFx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSAxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHh5ICsgd3o7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gMi4wICogcVswXSAqIHFbMl0gLSAyLjAgKiBxWzNdICogcVsxXTtcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0geHkgLSB3ejtcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAxLjAgLSAyLjAgKiBxWzBdICogcVswXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IDIuMCAqIHFbMV0gKiBxWzJdICsgMi4wICogcVszXSAqIHFbMF07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIEhlID0gW10sIEllID0gW10sIEplID0gW10sIEtlID0gW107XHJcblx0XHRcdFx0XHRjdHgudShIZSwgRmUsIC1YYi5OZFswXSAqIFhiLlBkWzBdKTtcclxuXHRcdFx0XHRcdGN0eC51KEllLCBGZSwgWGIuTmRbMF0gKiAoMS4wIC0gWGIuUGRbMF0pKTtcclxuXHRcdFx0XHRcdGN0eC51KEplLCBHZSwgLVhiLk5kWzFdICogWGIuUGRbMV0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoS2UsIEdlLCBYYi5OZFsxXSAqICgxLjAgLSBYYi5QZFsxXSkpO1xyXG5cclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgSGUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgdjAuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIEhlLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIHYxLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCBJZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCB2Mi4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgSWUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgdjMuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgcmdiID0gY3R4LnYoWGIuZ2YsIDI1NSk7XHJcblx0XHRcdFx0XHRcdHYwLi8qKi9jb2xvciA9IHYxLi8qKi9jb2xvciA9IHYyLi8qKi9jb2xvciA9IHYzLi8qKi9jb2xvciA9IFtyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdLCBYYi5PZCAqIDI1NV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBQZSwgUWUsIFJlLCBTZTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBXZSA9IHRoaXMuTGQudGV4dHVyZXNSZW1hcFt0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdFx0XHRcdGlmIChXZSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IFdlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSBXZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBXZS54ICsgRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9IChXZS55ICsgV2UuaGVpZ2h0IC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSAxLjAgLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IDEuMCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoMS4wIC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0djAuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgU2VdO1xyXG5cdFx0XHRcdFx0XHR2MS4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYyLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djMuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgU2VdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCh0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYwKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYxKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYyKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIXJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKDAsIDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGFzdFJlbmRlckNhbGwgPSByZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsYXN0UmVuZGVyQ2FsbC5yZW5kZXJTdHlsZUluZGV4ID09IHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMgKz0gNjtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFJlbmRlckNhbGwobGFzdFJlbmRlckNhbGwpO1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwuc3RhcnRJbmRleCArIGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMsXHJcblx0XHRcdFx0XHRcdFx0XHQ2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi5DZSgxLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1ZTogZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdFhiLmRlcHRoID0gY3R4LkgodGUsIFhiLkFiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA8IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoID4gYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGxkID0gZnVuY3Rpb24gKExkLCB3ZSwgdmUpIHtcclxuXHRcdHZhciBWYiA9IHRoaXM7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLndlID0gd2U7XHJcblxyXG5cdFx0Ly8gRWJcclxuXHJcblx0XHRmdW5jdGlvbiBFYigpIHtcclxuXHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLkhiID0gbnVsbDtcclxuXHRcdFx0dGhpcy5JYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuT2IgPSB0aGlzLkdiO1xyXG5cdFx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RWIucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIFJiID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgU2IgPSBRYjtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy56YiA+IDAuMDAwMDAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5PYiArIFFiICogdGhpcy56YjtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPj0gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBVYiA9IHRoaXMuemIgPCAwLjAwMSA/IDAuMCA6ICgxLjAgLSB0aGlzLk9iKSAvIHRoaXMuemI7XHJcblx0XHRcdFx0XHRcdFNiIC09IFViO1xyXG5cdFx0XHRcdFx0XHRSYiArPSBVYjtcclxuXHRcdFx0XHRcdFx0c3lzdGVtVGltZSArPSBVYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkhiICE9IG51bGwgJiYgUmIgPiB0aGlzLkhiKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBzeXN0ZW1UaW1lO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoVmIuQWIsIEFiLCBWYi5CYiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoTWMgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5zbGVycHEoVmIuTWMsIE1jLCBWYi5wcmV2Um90YXRpb24sIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFNiKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLk9iID0gMC4wO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5JYiAhPSBudWxsICYmICsrdGhpcy5GYiA+PSB0aGlzLkliKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuT2IgPSBUYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0UmIgKz0gU2I7XHJcblx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWNcclxuXHJcblx0XHRmdW5jdGlvbiBhYygpIHtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuYmMgPSB0aGlzLkdiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIGNjID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIGRjID0gY2MgKyBRYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUJlZm9yZUZyYW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVBZnRlckZyYW1lID0gc3lzdGVtVGltZUJlZm9yZUZyYW1lICsgUWI7XHJcblx0XHRcdFx0dmFyIGVjID0gQWIgPyBjdHguTyhjdHguaChBYiwgVmIuQmIpKSA6IDA7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKGVjID4gMC4wMDAwMDEpIHtcclxuXHRcdFx0XHRcdHZhciBmYyA9IGVjIC8gdGhpcy5yZDtcclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuYmMgKyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgaGMgPSBmYyA8IDAuMDAxID9cclxuXHRcdFx0XHRcdFx0MS4wIC0gdGhpcy5iYyA6ICgxLjAgLSB0aGlzLmJjKSAvIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBqYyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIga2MgPSBjYyArIGhjICogUWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKGpjLCBWYi5CYiwgQWIsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0ga2M7XHJcblx0XHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBqYyk7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gY3R4Llgoc3lzdGVtVGltZUJlZm9yZUZyYW1lLCBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFFiICogKDEuMCAtIGhjKSk7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aGMgKz0gMS4wIC8gZmM7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLmJjID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRWYi5SYiA9IGRjO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtY1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1jKCkge1xyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuUGQgPSBbXTtcclxuXHRcdFx0dGhpcy5OZCA9IFtdO1xyXG5cdFx0XHR0aGlzLmdmID0gW107XHJcblx0XHRcdHRoaXMuS2MgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRtYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdG5jOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblx0XHRcdFx0XHRwYy5CZC5KZCh0aGlzLkFiLCBudWxsKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WWI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5mZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRaYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmdkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRWYi53ZS5xYyhRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHRoaXMucmMoUWIpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cGM6IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLktjW2plXS5CZDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJjOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuSWQoUWIsIHRoaXMuQWIsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVjOiBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHRcdFx0dGhpcy5LYy5wdXNoKHtcclxuXHRcdFx0XHRcdEJkOiBuZXcgbGQoTGQsIG1kLCB2ZSksXHJcblx0XHRcdFx0XHRBZDogbmRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHZjOiBmdW5jdGlvbiAoZmUsIHhjLCBnZSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLkhkKGZlLCBnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Q2U6IGZ1bmN0aW9uICh4Yywgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR3YzogZnVuY3Rpb24gKGZlKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IHRydWU7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZCkge1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5hY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5JZCgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR5YzogZnVuY3Rpb24gKEdkKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLkVkKEdkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB6Y1xyXG5cclxuXHRcdGZ1bmN0aW9uIHpjKCkge1xyXG5cdFx0fVxyXG5cclxuXHRcdHpjLnByb3RvdHlwZS5BYyA9IGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRyZXR1cm4gVmIud2UuQ2MoVmIsIFhiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxkIEFkXHJcblxyXG5cdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0dGhpcy5CYiA9IFtdO1xyXG5cdFx0dGhpcy5NYyA9IFtdO1xyXG5cdFx0dGhpcy5wcmV2Um90YXRpb24gPSBbXTtcclxuXHRcdHRoaXMudGMgPSBbXTtcclxuXHRcdHRoaXMuc2MgPSBbXTtcclxuXHRcdHRoaXMuV2MgPSBuZXcgemMoKTtcclxuXHRcdHRoaXMuY29uc3RydWN0ID0gbmV3IHZlKHRoaXMuTGQsIHRoaXMpO1xyXG5cdFx0dGhpcy5ZYyA9IFtdO1xyXG5cdFx0dGhpcy5hZCA9IFtdO1xyXG5cclxuXHRcdHRoaXMuZGQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgRWIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IGFjKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZS51ZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLmpkOyArK1diKSB7XHJcblx0XHRcdHZhciBYYiA9IG5ldyBtYygpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IHRoaXMuWWMubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdFx0dmFyIGhkID0gdGhpcy5ZY1tpZF07XHJcblx0XHRcdFx0WGIudWMoaGQuRGIsIGhkLkFkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zYy5wdXNoKFhiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0dGhpcy53ZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0XHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkpkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cclxuXHRcdHRoaXMuc2MucHVzaC5hcHBseSh0aGlzLnNjLCB0aGlzLnRjKTtcclxuXHRcdHRoaXMudGMubGVuZ3RoID0gMDtcclxuXHJcblx0XHR0aGlzLnZkLkpkKCk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSWQgPSBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdXNlZF8pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuVGQoQWIsIE1jKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0aWYgKFFiID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0dmFyIHNoaWZ0ID0gW107XHJcblx0XHRcdFx0Y3R4Lmcoc2hpZnQsIEFiLCB0aGlzLkJiKTtcclxuXHRcdFx0XHRjdHguVCh0aGlzLmFkLCBzaGlmdCk7XHJcblx0XHRcdFx0Y3R4LncodGhpcy5hZCwgdGhpcy5hZCwgUWIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGljO1xyXG5cclxuXHRcdGlmICh0aGlzLlpjICYmICF0aGlzLmdlbmVyYXRvcnNQYXVzZWRfKSB7XHJcblx0XHRcdGljID0gdGhpcy52ZC5JZChRYiwgQWIsIE1jKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cclxuXHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHJcblx0XHRcdGljID0gMDtcclxuXHRcdFx0dGhpcy5SYiArPSBRYjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IGljOyBXYiA8IHRoaXMudGMubGVuZ3RoOykge1xyXG5cdFx0XHR2YXIgWGIgPSB0aGlzLnRjW1diXTtcclxuXHJcblx0XHRcdGlmICghWGIub2MpIHtcclxuXHRcdFx0XHRYYi5JZChRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLldjLkFjKHRoaXMudGNbV2JdKSkge1xyXG5cdFx0XHRcdFx0WGIud2MoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRYYi5yYyhRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQrK1diO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGxkLnByb3RvdHlwZS54ZCA9IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0dmFyIFhiID0gdGhpcy50Y1tqZV07XHJcblxyXG5cdFx0dmFyIHJlYWR5ID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgWGIuS2MubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdHZhciBCZCA9IFhiLktjW2lkXS5CZDtcclxuXHJcblx0XHRcdGlmIChCZC5hY3RpdmF0ZWQoKSB8fCBCZC50Yy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0cmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChyZWFkeSkge1xyXG5cdFx0XHR0aGlzLnNjLnB1c2godGhpcy50Y1tqZV0pO1xyXG5cdFx0XHR0aGlzLnRjLnNwbGljZShqZSwgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5IZCA9IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LkhkKGZlLCBnZSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWUgPSBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLlRkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKSB7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVjID0gZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0dGhpcy5ZYy5wdXNoKHsgRGI6IG1kLCBBZDogbmQgfSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dlbmVyYXRvcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0b3JzUGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmRpc2FjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLlpjO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50Yy5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHR2YXIga2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgQ2IgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgdmUsIG9wdGlvbnMpIHtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwgPSB3ZTtcclxuXHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5NYyA9IFtdO1xyXG5cclxuXHRcdFx0Ly8ga2UgQWRcclxuXHJcblx0XHRcdHRoaXMub2QgPSBbXTtcclxuXHJcblx0XHRcdHRoaXMucGQgPSBmdW5jdGlvbiAobWQpIHtcclxuXHRcdFx0XHR2YXIgQmQgPSBuZXcgbGQodGhpcywgbWQsIHZlKTtcclxuXHRcdFx0XHRCZC5OYih0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdFx0XHR0aGlzW1wiX1wiLmNvbmNhdChtZC5uYW1lKV0gPSBCZDtcclxuXHRcdFx0XHR0aGlzLm9kLnB1c2goQmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0XHRcdHRoaXMuQ2QgPSAwLjA7XHJcblx0XHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5xZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmdlbmVyYXRvcnNQYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgQWIsIE1jKTtcclxuXHRcdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXN0YXJ0ID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cclxuXHRcdHRoaXMuTmIoLyoqL3Bvc2l0aW9uID8gLyoqL3Bvc2l0aW9uIDogdGhpcy5BYiwgLyoqL3JvdGF0aW9uID8gLyoqL3JvdGF0aW9uIDogdGhpcy5NYyk7XHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkpkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0dGhpcy4vKiovdXBkYXRlKHRoaXMuVWQsIHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS56ZXJvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoMCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VwZGF0ZSA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHRpZiAodGhpcy5EZCA+IDAuMClcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy51cGRhdGVGbGV4KC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZpeGVkID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdHZhciB1cGRhdGVkVGltZSA9IDAuMDtcclxuXHRcdHZhciBoYyA9IFtdO1xyXG5cdFx0Y3R4LlQoaGMsIHRoaXMuQWIpO1xyXG5cdFx0dmFyIGZyYW1lUm90YXRpb24gPSBbXTtcclxuXHRcdGN0eC5VKGZyYW1lUm90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24gJiYgY3R4LmVxdWFsdjNfKC8qKi9wb3NpdGlvbiwgdGhpcy5BYikpXHJcblx0XHRcdC8qKi9wb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbiAmJiBjdHguZXF1YWxxXygvKiovcm90YXRpb24sIHRoaXMuTWMpKVxyXG5cdFx0XHQvKiovcm90YXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHdoaWxlICgoLyoqL2R0IC0gdXBkYXRlZFRpbWUpICsgdGhpcy5DZCA+PSB0aGlzLkRkKSB7XHJcblx0XHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRcdGN0eC5hYihoYywgdGhpcy5BYiwgLyoqL3Bvc2l0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRcdGN0eC5zbGVycHEoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYywgLyoqL3JvdGF0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldLklkKHRoaXMuRGQsIGhjLCBmcmFtZVJvdGF0aW9uKTtcclxuXHJcblx0XHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVkVGltZSArPSB0aGlzLkRkIC0gdGhpcy5DZDtcclxuXHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5SYiA9IGNjICsgdGhpcy5EZDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0dGhpcy5DZCArPSAvKiovZHQgLSB1cGRhdGVkVGltZTtcclxuXHR9XHJcblx0XHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZsZXggPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUmIgPSBjYyArIC8qKi9kdDtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cdFxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5UZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKC8qKi9uYW1lLCAvKiovdmFsdWUpIHtcclxuXHRcdHZhciBwcm9wTmFtZSA9IFwiX1wiLmNvbmNhdCgvKiovbmFtZSk7XHJcblxyXG5cdFx0aWYgKC8qKi92YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGlmICgvKiovdmFsdWUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5TKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5UKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV1bcHJvcE5hbWVdID0gLyoqL3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi9wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3ByZXNpbU5lZWRlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVBbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0ucGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0uZ2VuZXJhdG9yc1BhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBudW1QYXJ0aWNsZXMgPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRudW1QYXJ0aWNsZXMgKz0gdGhpcy5vZFtpXS5nZXROdW1QYXJ0aWNsZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVtUGFydGljbGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdHZhciBsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgcmVuZGVyQnVmZmVyLCBvcHRpb25zKSB7XHJcblx0XHRcdGxlLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG9lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZXNSZW1hcCA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgdmVyRGlzcDtcclxuXHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy4vKiovbW9kZWwuWGU7ICsrV2IpIHtcclxuXHRcdFx0XHRcdHZlckRpc3AgPSBXYiAqIDQ7XHJcblx0XHRcdFx0XHRpbmRpY2VzLnB1c2godmVyRGlzcCArIDAsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlciA9IHJlbmRlckJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuaW5pdGlhbGl6ZSh0aGlzLi8qKi9tb2RlbC5YZSAqIDQsIFsyXSwgaW5kaWNlcywgdGhpcy4vKiovbW9kZWwuWGUpO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX251bUluZGljZXMgPSAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdGxlLnByb3RvdHlwZS4vKiovZmlsbEdlb21ldHJ5QnVmZmVycyA9IGZ1bmN0aW9uICgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpcikge1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuY2xlYW51cCgpO1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vZC5mb3JFYWNoKGZ1bmN0aW9uIChCZCkge1xyXG5cdFx0XHRCZC51ZSgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpciwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpO1xyXG5cdH1cclxuXHJcblx0dmFyIG1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCBvcHRpb25zKSB7XHJcblx0XHRcdG1lLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG5lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMubWF0ZXJpYWxzID0gW107XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLm1hdGVyaWFscy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goWydzb3VyY2Utb3ZlcicsICdsaWdodGVyJywgJ211bHRpcGx5J11bdmFsdWVdKTtcclxuXHRcdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0XHR0aGlzLi8qKi90ZXh0dXJlRGVzY3MgPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRtZS5wcm90b3R5cGUuLyoqL2RyYXcgPSBmdW5jdGlvbiAoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkhkKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlV0dMSW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbGUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZUNhbnZhczJESW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbWUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cdHRoaXMudGV4dHVyZXMgPSBbJ3NwYXJrbGVCbGluay5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFswXTtcclxuXHR0aGlzLnJlbmRlclN0eWxlcyA9IFt7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlswXX1dO1xyXG5cdHRoaXMuWGUgPSAxMDA7XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIoKSB7XHJcblxyXG5cdFx0dmFyIF8xID0gW10sIF8zLCBfNCwgXzUsIF82ID0gW10sIF85ID0gW10sIF8xMD1bXSwgXzEwZnM9W10sIF8xMHZzPVtdLCBfMTBydz1bXSwgXzEwcnduPVtdLCBfMTByd2wsIF8xMHY9W10sIF8xMHA9W10sIF8xMGR0bCwgXzEwZHRwLCBfMTBkZiwgXzEwZnNkPVtdLCBfMTIsIF8xMSwgXzEzLCBfMTQsIF8xNGkwLCBfMTRzMCA9IFtdLCBfMTUsIF8xNiwgXzE3O1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzoxLFNjOjEscmVuZGVyU3R5bGVJbmRleDowfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIkRlZmF1bHRFbWl0dGVyXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl8xNCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMSwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5qZCA9IDEwMDtcclxuXHRcdFx0QmQuVmMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTWIgPSBmdW5jdGlvbih2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDEwO1xyXG5cdFx0XHR2ZC5HYiA9IDE7XHJcblx0XHRcdHZkLkpiID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDEwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzEsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fMiA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzIsIF8xLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgWGIuXzIpO1xyXG5cdFx0XHRfMyA9IC0xMDAgKyBCZC5MZC5yYW5kKCkgKiAoMTAwIC0gLTEwMCk7XHJcblx0XHRcdF80ID0gLTEwMCArIEJkLkxkLnJhbmQoKSAqICgxMDAgLSAtMTAwKTtcclxuXHRcdFx0XzUgPSAtMTAwICsgQmQuTGQucmFuZCgpICogKDEwMCAtIC0xMDApO1xyXG5cdFx0XHRjdHguVyhfNiwgXzMsIF80LCBfNSk7XHJcblx0XHRcdFhiLl83ID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fNywgXzYsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzcsIEJkLmFkLCBYYi5fNyk7XHJcblx0XHRcdFhiLl84ID0gMDtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8yLCBfMSwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIFhiLl8yKTtcclxuXHRcdFx0XzMgPSAtMTAwICsgQmQuTGQucmFuZCgpICogKDEwMCAtIC0xMDApO1xyXG5cdFx0XHRfNCA9IC0xMDAgKyBCZC5MZC5yYW5kKCkgKiAoMTAwIC0gLTEwMCk7XHJcblx0XHRcdF81ID0gLTEwMCArIEJkLkxkLnJhbmQoKSAqICgxMDAgLSAtMTAwKTtcclxuXHRcdFx0Y3R4LlcoXzYsIF8zLCBfNCwgXzUpO1xyXG5cdFx0XHRYYi5fNyA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzcsIF82LCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl83LCBCZC5hZCwgWGIuXzcpO1xyXG5cdFx0XHRYYi5fOCA9IDA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyArPSBRYjtcclxuXHRcdFx0Y3R4LlcoXzksIDAsIC0xMDAsIDApO1xyXG5cdFx0XHRjdHguVChfMTBmcywgXzkpO1xyXG5cdFx0XHRjdHguVChfMTB2cywgWzAsMCwwXSk7XHJcblx0XHRcdGN0eC51KF8xMHYsIF8xMGZzLCBRYik7XHJcblx0XHRcdGN0eC5jKF8xMHYsIF8xMHYsIFhiLl83KTtcclxuXHRcdFx0Y3R4LnUoXzEwcCwgXzEwdiwgUWIpO1xyXG5cdFx0XHRjdHguYyhfMTBwLCBfMTBwLCBYYi5fMik7XHJcblx0XHRcdGN0eC5UKFhiLl8yLCBfMTBwKTtcclxuXHRcdFx0Y3R4LlQoWGIuXzcsIF8xMHYpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0XHRfMTIgPSAzMDtcclxuXHRcdFx0XzExID0gMjtcclxuXHRcdFx0XzEzID0gKFhiLl8gLyBfMTEpO1xyXG5cdFx0XHRfMTRpMD0oXzEzPDA/MDooXzEzPjE/MTpfMTMpKTtcclxuXHRcdFx0Y3R4LlYoXzE0czAsMCwoXzE0aTAtMCkqMSk7XHJcblx0XHRcdF8xNCA9IERiLm5iKEJkLl8xNFswXVtfMTRzMFswXV0sXzE0czBbMV0pO1xyXG5cdFx0XHRfMTUgPSAoXzEyICogXzE0KTtcclxuXHRcdFx0XzE2ID0gMTtcclxuXHRcdFx0XzE3ID0gXzE2O1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl84O1xyXG5cdFx0XHRjdHguVihYYi5OZCxfMTUsXzE1KTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsWzEsMSwxXSk7XHJcblx0XHRcdFhiLk9kID0gXzE3O1xyXG5cdFx0XHRYYi5RYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzExID0gMjtcclxuXHRcdFx0aWYgKFhiLl8gPiBfMTEpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHRoaXMucWQgPSBmdW5jdGlvbihMZCkge1xyXG5cdFx0TGQuRGQgPSAwLjAzMzMzMzM7XHJcblx0XHRMZC5VZCA9IDA7XHJcblx0XHRMZC5yYW5kID0gZnVuY3Rpb24oKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpOyB9O1xyXG5cdFx0TGQucGQobmV3IEVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIoKSk7XHJcblx0fVxyXG5cdFx0dGhpcy5uYiA9IGZ1bmN0aW9uKGZ1bmNWYWx1ZXMsIGplKSB7IFx0XHRcdHZhciBpbmRleEludCA9IE1hdGguZmxvb3IoamUpOyBcdFx0XHR2YXIgbmV4dEludCA9IGluZGV4SW50ICsgMTsgXHRcdFx0cmV0dXJuIGN0eC5YKGZ1bmNWYWx1ZXNbaW5kZXhJbnRdLCBmdW5jVmFsdWVzW25leHRJbnRdLCBqZSAtIGluZGV4SW50KTsgXHRcdH1cclxuXHJcblxyXG59XHJcblxyXG5yZXR1cm4gTm9OYW1lRWZmZWN0O1xyXG59KSk7XHJcbiJdfQ==
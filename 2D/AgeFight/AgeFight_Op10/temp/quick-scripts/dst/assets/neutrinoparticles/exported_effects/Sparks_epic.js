
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Sparks_epic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19935/j0w9Fy5yK4u+rWHjs', 'Sparks_epic');
// neutrinoparticles/exported_effects/Sparks_epic.js

"use strict";

// 17afc3d4-2c52-414f-9114-99159fbc63f9
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Sparks_epic'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Sparks_epic'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Sparks_epic(ctx) {
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
          this.updateFixed(this.Ud, Ab, Mc, this.presimFrameTime);
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
        this.updateFixed(this.Ud, this.Ab, this.Mc, this.presimFrameTime);
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
      rotation, this.Dd);else this.updateFlex(
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
    rotation,
    /**/
    frameTime) {
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
      dt - updatedTime + this.Cd >=
      /**/
      frameTime) {
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
          this.od[i].Id(
          /**/
          frameTime, hc, frameRotation);
          this.Rb = cc;
        }

        updatedTime +=
        /**/
        frameTime - this.Cd;
        this.Cd = 0.0;
        this.Rb = cc +
        /**/
        frameTime;
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
        this.updateFixed(this.Ud, this.Ab, this.Mc, this.presimFrameTime);
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

    this.textures = ['spark_orange_glow.png'];
    this.materials = [1];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 800;

    function Emitter_DefaultEmitter() {
      var _1,
          _2 = [],
          _2i,
          _2s = [],
          _3,
          _4 = [],
          _6 = [],
          _8 = [],
          _8i0,
          _8s0 = [],
          _8i1,
          _8s1 = [],
          _8i2,
          _8s2 = [],
          _10,
          _12,
          _13,
          _14 = [],
          _16,
          _18,
          _19,
          _19i0,
          _19s0 = [],
          _20 = [],
          _20a = [],
          _20i = [],
          _21 = [],
          _21fs = [],
          _21vs = [],
          _21rw = [],
          _21rwn = [],
          _21rwl,
          _21v = [],
          _21p = [],
          _21dtl,
          _21dtp,
          _21df,
          _21fsd = [],
          _22 = [],
          _22x = [],
          _22y = [],
          _22z = [],
          _23,
          _24 = [],
          _24i0,
          _24s0 = [],
          _24i1,
          _24s1 = [],
          _25,
          _26 = [],
          _26i0,
          _26s0 = [],
          _26i1,
          _26s1 = [],
          _26i2,
          _26s2 = [],
          _27,
          _27i0,
          _27s0 = [];

      this.pe = [{
        xe: 1,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._2 = [[[-474.8, 357.544], [560.536, 358], [560.536, 358]]];
        Bd._8 = [[[0, 0, 0]], [[-500, -200, -200], [-200, -500, -500]], [[0, 0, 0]]];
        Bd._19 = [[[1000, 840.98, 754.461, 730.229, 756.67, 821.18, 910.671, 1012.09, 1112.92, 1201.56, 1267.68, 1302.38, 1298.22, 1249.27, 1150.97, 1000, 1000]]];
        Bd._24 = [[[1, 1, 1]], [[0.4, 0.406561, 0.421334, 0.443034, 0.470859, 0.504328, 0.543192, 0.587403, 0.637113, 0.692703, 0.754872, 0.824812, 0.904612, 0.998302, 1.11553, 1.3, 1.3]]];
        Bd._26 = [[[1, 1, 1]], [[0.5, 1, 1]], [[0.5, 1, 1]]];
        Bd._27 = [[[0, 1, 1], [1, 1, 1], [1, 0.3, 0.3], [0.3, 0.3, 0.3], [0.3, 1, 1], [1, 1, 1], [1, 0, 0]]];
        Bd.jd = 800;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 250;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 250;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i = Db.kb(_1);
        ctx.V(_2s, 0, (_2i - 0) * 1);
        Db.lb(_2, Bd._2[_2s[0]], _2s[1]);
        _3 = -500 + Bd.Ld.rand() * (500 - -500);
        ctx.W(_4, _2[0], _2[1], _3);
        Xb._5 = [];
        ctx.c(Xb._5, Bd.Ab, _4);
        ctx.randv3gen(_6, 600, Bd.Ld.rand);
        Xb._7 = [];
        ctx.T(Xb._7, _6);
        _8i0 = Bd.Rb < 0 ? 0 : Bd.Rb > 1 ? 1 : Bd.Rb;
        ctx.V(_8s0, 0, (_8i0 - 0) * 1);
        _8i1 = Bd.Rb < 0 ? 0 : Bd.Rb > 4 ? 0 + (Bd.Rb - 0) % 4 : Bd.Rb;
        _8i1 < 2 ? ctx.V(_8s1, 0, (_8i1 - 0) * 0.5) : ctx.V(_8s1, 1, (_8i1 - 2) * 0.5);
        _8i2 = Bd.Rb < 0 ? 0 : Bd.Rb > 1 ? 1 : Bd.Rb;
        ctx.V(_8s2, 0, (_8i2 - 0) * 1);
        ctx.W(_8, Db.nb(Bd._8[0][_8s0[0]], _8s0[1]), Db.nb(Bd._8[1][_8s1[0]], _8s1[1]), Db.nb(Bd._8[2][_8s2[0]], _8s2[1]));
        Xb._9 = [];
        ctx.T(Xb._9, _8);
        _10 = 3 + Bd.Ld.rand() * (4 - 3);
        Xb._11 = _10;
        _12 = 10 + Bd.Ld.rand() * (15 - 10);
        _13 = 10 + Bd.Ld.rand() * (15 - 10);
        ctx.V(_14, _12, _13);
        Xb._15 = [];
        ctx.S(Xb._15, _14);
        _16 = 0.4 + Bd.Ld.rand() * (0.6 - 0.4);
        Xb._17 = _16;
        ctx.T(Xb.Ab, Xb._5);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i = Db.kb(_1);
        ctx.V(_2s, 0, (_2i - 0) * 1);
        Db.lb(_2, Bd._2[_2s[0]], _2s[1]);
        _3 = -500 + Bd.Ld.rand() * (500 - -500);
        ctx.W(_4, _2[0], _2[1], _3);
        Xb._5 = [];
        ctx.c(Xb._5, Bd.Ab, _4);
        ctx.randv3gen(_6, 600, Bd.Ld.rand);
        Xb._7 = [];
        ctx.T(Xb._7, _6);
        _8i0 = Bd.Rb < 0 ? 0 : Bd.Rb > 1 ? 1 : Bd.Rb;
        ctx.V(_8s0, 0, (_8i0 - 0) * 1);
        _8i1 = Bd.Rb < 0 ? 0 : Bd.Rb > 4 ? 0 + (Bd.Rb - 0) % 4 : Bd.Rb;
        _8i1 < 2 ? ctx.V(_8s1, 0, (_8i1 - 0) * 0.5) : ctx.V(_8s1, 1, (_8i1 - 2) * 0.5);
        _8i2 = Bd.Rb < 0 ? 0 : Bd.Rb > 1 ? 1 : Bd.Rb;
        ctx.V(_8s2, 0, (_8i2 - 0) * 1);
        ctx.W(_8, Db.nb(Bd._8[0][_8s0[0]], _8s0[1]), Db.nb(Bd._8[1][_8s1[0]], _8s1[1]), Db.nb(Bd._8[2][_8s2[0]], _8s2[1]));
        Xb._9 = [];
        ctx.T(Xb._9, _8);
        _10 = 3 + Bd.Ld.rand() * (4 - 3);
        Xb._11 = _10;
        _12 = 10 + Bd.Ld.rand() * (15 - 10);
        _13 = 10 + Bd.Ld.rand() * (15 - 10);
        ctx.V(_14, _12, _13);
        Xb._15 = [];
        ctx.S(Xb._15, _14);
        _16 = 0.4 + Bd.Ld.rand() * (0.6 - 0.4);
        Xb._17 = _16;
        ctx.T(Xb.Ab, Xb._5);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        _18 = Xb._ / Xb._11;
        _19i0 = _18 < 0 ? 0 : _18 > 1 ? 1 : _18;
        ctx.V(_19s0, 0, (_19i0 - 0) * 15);
        _19 = Db.nb(Bd._19[0][_19s0[0]], _19s0[1]);
        ctx.u(_20a, [200, 100, 60], Bd.Ld.Rb);
        ctx.c(_20a, _20a, Xb._5);
        ctx.u(_20i, _20a, 1.0 / 2000);
        ctx.xb(_20, _20i);
        ctx.k(_20, _20, [0.0078125, 0.0078125, 0.0078125]);
        ctx.c(_20, _20, [-1, -1, -1]);
        ctx.u(_20, _20, _19);
        ctx.T(_21fs, _20);
        ctx.c(_21fs, _21fs, Xb._9);
        ctx.T(_21vs, [0, 0, 0]);
        _21dtl = Qb;
        ctx.T(_21v, Xb._7);
        ctx.T(_21p, Xb._5);

        while (_21dtl > 0.0001) {
          _21dtp = _21dtl;
          ctx.T(_21fsd, _21fs);
          ctx.g(_21rw, _21vs, _21v);
          _21rwl = ctx.P(_21rw);

          if (_21rwl > 0.0001) {
            _21rwl = Math.sqrt(_21rwl);
            ctx.w(_21rwn, _21rw, _21rwl);
            _21df = 0.01 * Xb._17 * _21rwl;
            if (_21df * _21dtp > 0.2) _21dtp = 0.2 / _21df;
            ctx.c(_21fsd, _21fsd, ctx.v(_21rwn, _21rwl * _21df));
          }

          ctx.c(_21v, _21v, ctx.v(_21fsd, _21dtp));
          ctx.c(_21p, _21p, ctx.v(_21v, _21dtp));
          _21dtl -= _21dtp;
        }

        ctx.T(Xb._5, _21p);
        ctx.T(Xb._7, _21v);
        ctx.T(Xb.Ab, Xb._5);
        ctx.Q(_22z, [0, 0, 1]);
        ctx.I(_22x, Xb._7, _22z);
        ctx.Q(_22x, _22x);
        ctx.I(_22y, _22z, _22x);
        ctx.pb(_22, _22x, _22y, _22z);
        _23 = ctx.O(Xb._7);
        _24i0 = _23 < 0 ? 0 : _23 > 1 ? 1 : _23;
        ctx.V(_24s0, 0, (_24i0 - 0) * 1);
        _24i1 = _23 < 200 ? 200 : _23 > 400 ? 400 : _23;
        ctx.V(_24s1, 0, (_24i1 - 200) * 0.075);
        ctx.V(_24, Db.nb(Bd._24[0][_24s0[0]], _24s0[1]), Db.nb(Bd._24[1][_24s1[0]], _24s1[1]));
        _25 = ctx.j(Xb._15, _24);
        _18 = Xb._ / Xb._11;
        _26i0 = _18 < 0 ? 0 : _18 > 1 ? 1 : _18;
        ctx.V(_26s0, 0, (_26i0 - 0) * 1);
        _26i1 = _18 < 0 ? 0 : _18 > 1 ? 1 : _18;
        ctx.V(_26s1, 0, (_26i1 - 0) * 1);
        _26i2 = _18 < 0 ? 0 : _18 > 1 ? 1 : _18;
        ctx.V(_26s2, 0, (_26i2 - 0) * 1);
        ctx.W(_26, Db.nb(Bd._26[0][_26s0[0]], _26s0[1]), Db.nb(Bd._26[1][_26s1[0]], _26s1[1]), Db.nb(Bd._26[2][_26s2[0]], _26s2[1]));
        _27i0 = _18 < 0.1 ? 0.1 : _18 > 1 ? 1 : _18;
        _27i0 < 0.550358 ? _27i0 < 0.412479 ? _27i0 < 0.2 ? ctx.V(_27s0, 0, (_27i0 - 0.1) * 10) : ctx.V(_27s0, 1, (_27i0 - 0.2) * 4.70635) : _27i0 < 0.473283 ? ctx.V(_27s0, 2, (_27i0 - 0.412479) * 16.4463) : ctx.V(_27s0, 3, (_27i0 - 0.473283) * 12.9744) : _27i0 < 0.9 ? _27i0 < 0.6 ? ctx.V(_27s0, 4, (_27i0 - 0.550358) * 20.1442) : ctx.V(_27s0, 5, (_27i0 - 0.6) * 3.33333) : ctx.V(_27s0, 6, (_27i0 - 0.9) * 10);
        _27 = Db.nb(Bd._27[0][_27s0[0]], _27s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        ctx.U(Xb.Mc, _22);
        ctx.S(Xb.Nd, _25);
        ctx.T(Xb.gf, _26);
        Xb.Od = _27;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._11) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 5;
      Ld.presimFrameTime = 0.1;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_DefaultEmitter());
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

  return Sparks_epic;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXFNwYXJrc19lcGljLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIk5ldXRyaW5vRWZmZWN0IiwibmFtZXNwYWNlIiwiX19sYXN0X18iLCJzZWxmIiwiU3BhcmtzX2VwaWMiLCJjdHgiLCJEYiIsIm5lIiwiTGQiLCJCZCIsIndlIiwicGUiLCJsZW5ndGgiLCJMYyIsInByb3RvdHlwZSIsIkVjIiwiRmMiLCJ4ZSIsImZlIiwiQWIiLCJYYiIsIkdjIiwiaWIiLCJNZCIsIkhjIiwiTWF0aCIsImNvcyIsIkljIiwic2luIiwieWUiLCJBZSIsIk5kIiwiemUiLCJ0cmFuc2Zvcm0iLCJxIiwiTWMiLCJ6MiIsInh5Iiwid3oiLCJQYyIsImdlIiwidmMiLCJCZSIsIm9jIiwiT2QiLCJEZSIsImZsb29yIiwiUWMiLCJSYyIsIkVlIiwic2xpY2UiLCJkZiIsImFicyIsImVmIiwic2F2ZSIsInRyYW5zbGF0ZSIsIlBkIiwiZ2xvYmFsQWxwaGEiLCJnZiIsIlllIiwiVGMiLCJaZSIsIlVjIiwiYWYiLCJiZiIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRyYXdJbWFnZSIsImltYWdlIiwieCIsInkiLCJmaWxsU3R5bGUiLCJmZiIsImZpbGxSZWN0IiwiY2YiLCJyZXN0b3JlIiwiSGQiLCJtYXRlcmlhbHMiLCJtb2RlbCIsInJlbmRlclN0eWxlcyIsInJlbmRlclN0eWxlSW5kZXgiLCJtYXRlcmlhbEluZGV4IiwidGV4dHVyZURlc2NzIiwidGV4dHVyZUluZGljZXMiLCJ3aWR0aCIsImhlaWdodCIsIlNjIiwia2QiLCJhIiwiYiIsIlZjIiwiV2IiLCJ0YyIsInNvcnQiLCJvZSIsInZlcnRleCIsInBvc2l0aW9uIiwiY29sb3IiLCJ0ZXhDb29yZHMiLCJxZSIsInNlIiwicmUiLCJ0ZSIsInJlbmRlckJ1ZmZlciIsIkNlIiwidjAiLCJ2MSIsInYyIiwidjMiLCJGZSIsIkdlIiwicyIsImMiLCJIZSIsIkllIiwiSmUiLCJLZSIsInUiLCJyZ2IiLCJ2IiwiUGUiLCJRZSIsIlJlIiwiU2UiLCJXZSIsInRleHR1cmVzUmVtYXAiLCJVZSIsIlZlIiwiYmVmb3JlUXVhZCIsInB1c2hWZXJ0ZXgiLCJfX2xhc3RSZW5kZXJDYWxsIiwiUmVuZGVyQ2FsbCIsImxhc3RSZW5kZXJDYWxsIiwibnVtSW5kaWNlcyIsInB1c2hSZW5kZXJDYWxsIiwic3RhcnRJbmRleCIsInVlIiwiZm9yRWFjaCIsImRlcHRoIiwiSCIsImxkIiwidmUiLCJWYiIsIkViIiwiRmIiLCJHYiIsIkhiIiwiSWIiLCJLYiIsIkxiIiwiTWIiLCJOYiIsIk9iIiwiSmQiLCJJZCIsIlFiIiwiUGIiLCJSYiIsInN5c3RlbVRpbWUiLCJTYiIsImljIiwiemIiLCJUYiIsIlViIiwiZGlzYWN0aXZhdGUiLCJhYiIsIkJiIiwic2xlcnBxIiwicHJldlJvdGF0aW9uIiwiSmIiLCJzYyIsInBvcCIsInVuc2hpZnQiLCJZYiIsIlpiIiwiVCIsIlUiLCJhYyIsImJjIiwiY2MiLCJkYyIsInN5c3RlbVRpbWVCZWZvcmVGcmFtZSIsInN5c3RlbVRpbWVBZnRlckZyYW1lIiwiZWMiLCJPIiwiaCIsImZjIiwicmQiLCJoYyIsImpjIiwia2MiLCJYIiwibWMiLCJLYyIsIm5jIiwiaSIsInBjIiwiQWQiLCJzZCIsImZkIiwiZ2QiLCJxYyIsInJjIiwiamUiLCJ1YyIsIm1kIiwibmQiLCJwdXNoIiwieGMiLCJ3YyIsImFjdGl2YXRlIiwieWMiLCJHZCIsIkVkIiwiemMiLCJBYyIsIkNjIiwiV2MiLCJjb25zdHJ1Y3QiLCJZYyIsImFkIiwiZGQiLCJ2ZCIsImVkIiwidWQiLCJqZCIsImlkIiwiaGQiLCJ3ZCIsIlpjIiwicGF1c2VkXyIsImdlbmVyYXRvcnNQYXVzZWRfIiwiVyIsImFwcGx5IiwiVGQiLCJzaGlmdCIsImciLCJ3IiwieGQiLCJyZWFkeSIsImFjdGl2YXRlZCIsInNwbGljZSIsInBhdXNlIiwidW5wYXVzZSIsInBhdXNlZCIsInBhdXNlR2VuZXJhdG9ycyIsInVucGF1c2VHZW5lcmF0b3JzIiwiZ2VuZXJhdG9yc1BhdXNlZCIsImdldE51bVBhcnRpY2xlcyIsImtlIiwiQ2IiLCJfaW5pdCIsIm9wdGlvbnMiLCJvZCIsInBkIiwiY29uY2F0IiwibmFtZSIsIkNkIiwicWQiLCJfcHJlc2ltTmVlZGVkIiwicGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsInBhdXNlQWxsRW1pdHRlcnMiLCJ6ZXJvVXBkYXRlIiwidXBkYXRlRml4ZWQiLCJVZCIsInByZXNpbUZyYW1lVGltZSIsInJlc3RhcnQiLCJyb3RhdGlvbiIsInVwZGF0ZSIsImR0IiwiRGQiLCJ1cGRhdGVGbGV4IiwiZnJhbWVUaW1lIiwidXBkYXRlZFRpbWUiLCJmcmFtZVJvdGF0aW9uIiwiZXF1YWx2M18iLCJlcXVhbHFfIiwicmVzZXRQb3NpdGlvbiIsInNldFByb3BlcnR5SW5BbGxFbWl0dGVycyIsInZhbHVlIiwicHJvcE5hbWUiLCJBcnJheSIsIlMiLCJ1bnBhdXNlQWxsRW1pdHRlcnMiLCJhcmVBbGxFbWl0dGVyc1BhdXNlZCIsInVucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsImFyZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzUGF1c2VkIiwibnVtUGFydGljbGVzIiwibGUiLCJjYWxsIiwiaW5kaWNlcyIsInZlckRpc3AiLCJYZSIsImluaXRpYWxpemUiLCJfX251bUluZGljZXMiLCJmaWxsR2VvbWV0cnlCdWZmZXJzIiwiY2FtZXJhUmlnaHQiLCJjYW1lcmFVcCIsImNhbWVyYURpciIsImNsZWFudXAiLCJtZSIsImRyYXciLCJjb250ZXh0IiwiY2FtZXJhIiwiY3JlYXRlV0dMSW5zdGFuY2UiLCJjcmVhdGVDYW52YXMyREluc3RhbmNlIiwidGV4dHVyZXMiLCJFbWl0dGVyX0RlZmF1bHRFbWl0dGVyIiwiXzEiLCJfMiIsIl8yaSIsIl8ycyIsIl8zIiwiXzQiLCJfNiIsIl84IiwiXzhpMCIsIl84czAiLCJfOGkxIiwiXzhzMSIsIl84aTIiLCJfOHMyIiwiXzEwIiwiXzEyIiwiXzEzIiwiXzE0IiwiXzE2IiwiXzE4IiwiXzE5IiwiXzE5aTAiLCJfMTlzMCIsIl8yMCIsIl8yMGEiLCJfMjBpIiwiXzIxIiwiXzIxZnMiLCJfMjF2cyIsIl8yMXJ3IiwiXzIxcnduIiwiXzIxcndsIiwiXzIxdiIsIl8yMXAiLCJfMjFkdGwiLCJfMjFkdHAiLCJfMjFkZiIsIl8yMWZzZCIsIl8yMiIsIl8yMngiLCJfMjJ5IiwiXzIyeiIsIl8yMyIsIl8yNCIsIl8yNGkwIiwiXzI0czAiLCJfMjRpMSIsIl8yNHMxIiwiXzI1IiwiXzI2IiwiXzI2aTAiLCJfMjZzMCIsIl8yNmkxIiwiXzI2czEiLCJfMjZpMiIsIl8yNnMyIiwiXzI3IiwiXzI3aTAiLCJfMjdzMCIsIl8iLCJyYW5kIiwia2IiLCJWIiwibGIiLCJfNSIsInJhbmR2M2dlbiIsIl83IiwibmIiLCJfOSIsIl8xMSIsIl8xNSIsIl8xNyIsInhiIiwiayIsIlAiLCJzcXJ0IiwiUSIsIkkiLCJwYiIsImoiLCJyYW5kb20iLCJyIiwicGF0aCIsImluZGV4SW50IiwibGVycCIsIlkiLCJmdW5jVmFsdWVzIiwibmV4dEludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdDLFdBQVVBLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3RCLE1BQUksT0FBT0MsT0FBUCxLQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFdBQXJELEVBQWtFO0FBQzlEQSxJQUFBQSxNQUFNLENBQUNELE9BQVAsR0FBaUJELE9BQU8sRUFBeEI7QUFDSCxHQUZELE1BRU8sSUFBSSxPQUFPRyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxNQUFNLENBQUNDLEdBQTNDLEVBQWdEO0FBQ25ERCxJQUFBQSxNQUFNLENBQUMsQ0FBQyxTQUFELENBQUQsRUFBYyxVQUFVRixPQUFWLEVBQW1CO0FBQ25DLE9BQUNGLElBQUksQ0FBQ00sY0FBTCxHQUFzQkosT0FBdkIsRUFBZ0Ms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LTJjNTItNDE0Zi05MTE0LTk5MTU5ZmJjNjNmOVxyXG5cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydleHBvcnRzJ10sIGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgICAgICAgICAgIChyb290Lk5ldXRyaW5vRWZmZWN0ID0gZXhwb3J0cylbJ1NwYXJrc19lcGljJ10gPSBmYWN0b3J5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAocm9vdC5OZXV0cmlub0VmZmVjdCB8fCAocm9vdC5OZXV0cmlub0VmZmVjdCA9IHt9KSk7XHJcbiAgICAgICAgbmFtZXNwYWNlLl9fbGFzdF9fID0gbmFtZXNwYWNlWydTcGFya3NfZXBpYyddID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5mdW5jdGlvbiBTcGFya3NfZXBpYyhjdHgpIHtcclxuXHR2YXIgRGIgPSB0aGlzO1xyXG5cclxuXHR2YXIgbmUgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLkJkID0gQmQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuQmQud2UucGUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLndlID0gdGhpcy5CZC53ZS5wZVswXTtcclxuXHJcblx0XHRcdHRoaXMuTGMgPSBbbmUucHJvdG90eXBlLkVjLFxyXG5cdFx0XHRcdG5lLnByb3RvdHlwZS5GY11bdGhpcy53ZS54ZV07XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMud2UgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0bmUucHJvdG90eXBlID0ge1xyXG5cdFx0RWM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBHYyA9IGN0eC5pYihYYi5NZCk7XHJcblx0XHRcdHZhciBIYyA9IE1hdGguY29zKEdjKTtcclxuXHRcdFx0dmFyIEljID0gTWF0aC5zaW4oR2MpO1xyXG5cdFx0XHR2YXIgeWUgPSBjdHguQWUoWGIuTmRbMF0pO1xyXG5cdFx0XHR2YXIgemUgPSBjdHguQWUoWGIuTmRbMV0pO1xyXG5cdFx0XHRmZS4vKiovdHJhbnNmb3JtKHllICogSGMsIHllICogSWMsIHplICogLUljLCB6ZSAqIEhjLCBBYlswXSwgQWJbMV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRGYzogZnVuY3Rpb24gKGZlLCBBYiwgWGIpIHtcclxuXHRcdFx0dmFyIHEgPSBYYi5NYztcclxuXHRcdFx0dmFyIHoyID0gMi4wICogcVsyXSAqIHFbMl07XHJcblx0XHRcdHZhciB4eSA9IDIuMCAqIHFbMF0gKiBxWzFdO1xyXG5cdFx0XHR2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybShcclxuXHRcdFx0XHR5ZSAqICgxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyKSxcclxuXHRcdFx0XHR5ZSAqICh4eSArIHd6KSxcclxuXHRcdFx0XHR6ZSAqICh3eiAtIHh5KSxcclxuXHRcdFx0XHR6ZSAqICgyLjAgKiBxWzBdICogcVswXSArIHoyIC0gMS4wKSxcclxuXHRcdFx0XHRBYlswXSwgQWJbMV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRQYzogZnVuY3Rpb24gKGZlLCBYYiwgZ2UpIHtcclxuXHRcdFx0WGIudmMoZmUsIC0xLCBnZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5CZSAhPSBudWxsICYmICFYYi5vYykge1xyXG5cclxuXHRcdFx0XHRcdGlmIChYYi5PZCA+IDAuMDAxKSB7XHJcblx0XHRcdFx0XHRcdHZhciBEZSA9IE1hdGguZmxvb3IoWGIuUWMgJSB0aGlzLndlLlJjKTtcclxuXHRcdFx0XHRcdFx0dmFyIEVlID0gTWF0aC5mbG9vcihYYi5RYyAvIHRoaXMud2UuUmMpO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIEFiID0gWGIuQWIuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0dmFyIE5kID0gWGIuTmQuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFnZSB8fCBnZS4vKiovdHJhbnNmb3JtKEFiLCBOZCkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGRmID0gTWF0aC5hYnMoTmRbMF0pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBlZiA9IE1hdGguYWJzKE5kWzFdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRmID4gMC4wMDEgJiYgZWYgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmUuc2F2ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5MYyhmZSwgQWIsIFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmZS50cmFuc2xhdGUoLWRmICogWGIuUGRbMF0sIC1lZiAqICgxIC0gWGIuUGRbMV0pKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLmdsb2JhbEFscGhhICo9IFhiLk9kO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChYYi5nZlswXSA8IDAuOTk5IHx8IFhiLmdmWzFdIDwgMC45OTkgfHwgWGIuZ2ZbMl0gPCAwLjk5OSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGYgPj0gMSAmJiBlZiA+PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIFllID0gZGYgPCB0aGlzLlRjID8gZGYgOiB0aGlzLlRjO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBaZSA9IGVmIDwgdGhpcy5VYyA/IGVmIDogdGhpcy5VYztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmFmKFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImNvcHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJtdWx0aXBseVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5maWxsU3R5bGUgPSBjdHguZmYoWGIuZ2YpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5maWxsUmVjdCgwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1hdG9wXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmUuZHJhd0ltYWdlKGN0eC5jZiwgMCwgMCwgWWUsIFplLCAwLCAwLCBkZiwgZWYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmUuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYywgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi52YyhmZSwgMSwgZ2UpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRIZDogZnVuY3Rpb24gKGZlLCBnZSkge1xyXG5cdFx0XHRmZS5zYXZlKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cdFx0XHRcdGZlLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHRoaXMuTGQubWF0ZXJpYWxzW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLm1hdGVyaWFsSW5kZXhdO1xyXG5cdFx0XHRcdHRoaXMuQmUgPSB0aGlzLkxkLnRleHR1cmVEZXNjc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5CZSA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLkJlKSB7XHJcblx0XHRcdFx0dGhpcy5UYyA9IHRoaXMuQmUud2lkdGggLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdHRoaXMuVWMgPSB0aGlzLkJlLmhlaWdodCAvIHRoaXMud2UuU2M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGtkKGEsIGIpIHtcclxuXHRcdFx0XHRpZiAoYS5BYlsyXSA+IGIuQWJbMl0pXHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRpZiAoYS5BYlsyXSA8IGIuQWJbMl0pXHJcblx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXRjaCAodGhpcy5CZC5WYykge1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSB0aGlzLkJkLnRjLmxlbmd0aDsgV2ItLSA+IDA7KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLnNvcnQoa2QpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZlLnJlc3RvcmUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBvZSA9IGZ1bmN0aW9uIChMZCwgQmQpIHtcclxuXHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLkJkID0gQmQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuQmQud2UucGUubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMud2UgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMudmVydGV4ID0gW1xyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH1dO1xyXG5cdH1cclxuXHJcblx0b2UucHJvdG90eXBlID0ge1xyXG5cdFx0cWU6IGZ1bmN0aW9uIChYYiwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFhiLkNlKC0xLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKCFYYi5vYykge1xyXG5cclxuXHRcdFx0XHRcdHZhciB2MCA9IHRoaXMudmVydGV4WzBdO1xyXG5cdFx0XHRcdFx0dmFyIHYxID0gdGhpcy52ZXJ0ZXhbMV07XHJcblx0XHRcdFx0XHR2YXIgdjIgPSB0aGlzLnZlcnRleFsyXTtcclxuXHRcdFx0XHRcdHZhciB2MyA9IHRoaXMudmVydGV4WzNdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBGZSA9IFtdLCBHZSA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLndlLnhlID09IDApIHtcclxuXHRcdFx0XHRcdFx0dmFyIGEgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHRcdFx0XHR2YXIgcyA9IC1NYXRoLnNpbihhKTtcclxuXHRcdFx0XHRcdFx0dmFyIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcblx0XHRcdFx0XHRcdEZlWzBdID0gc2VbMF0gKiBjICsgcmVbMF0gKiBzO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHNlWzFdICogYyArIHJlWzFdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMl0gPSBzZVsyXSAqIGMgKyByZVsyXSAqIHM7XHJcblxyXG5cdFx0XHRcdFx0XHRHZVswXSA9IC1zZVswXSAqIHMgKyByZVswXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzFdID0gLXNlWzFdICogcyArIHJlWzFdICogYztcclxuXHRcdFx0XHRcdFx0R2VbMl0gPSAtc2VbMl0gKiBzICsgcmVbMl0gKiBjO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdFx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHRcdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0XHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IDEuMCAtIDIuMCAqIHFbMV0gKiBxWzFdIC0gejI7XHJcblx0XHRcdFx0XHRcdEZlWzFdID0geHkgKyB3ejtcclxuXHRcdFx0XHRcdFx0RmVbMl0gPSAyLjAgKiBxWzBdICogcVsyXSAtIDIuMCAqIHFbM10gKiBxWzFdO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSB4eSAtIHd6O1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IDEuMCAtIDIuMCAqIHFbMF0gKiBxWzBdIC0gejI7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gMi4wICogcVsxXSAqIHFbMl0gKyAyLjAgKiBxWzNdICogcVswXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgSGUgPSBbXSwgSWUgPSBbXSwgSmUgPSBbXSwgS2UgPSBbXTtcclxuXHRcdFx0XHRcdGN0eC51KEhlLCBGZSwgLVhiLk5kWzBdICogWGIuUGRbMF0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSWUsIEZlLCBYYi5OZFswXSAqICgxLjAgLSBYYi5QZFswXSkpO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSmUsIEdlLCAtWGIuTmRbMV0gKiBYYi5QZFsxXSk7XHJcblx0XHRcdFx0XHRjdHgudShLZSwgR2UsIFhiLk5kWzFdICogKDEuMCAtIFhiLlBkWzFdKSk7XHJcblxyXG5cdFx0XHRcdFx0Y3R4LmModjAuLyoqL3Bvc2l0aW9uLCBIZSwgSmUpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjAuLyoqL3Bvc2l0aW9uLCB2MC4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYxLi8qKi9wb3NpdGlvbiwgSGUsIEtlKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYxLi8qKi9wb3NpdGlvbiwgdjEuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2Mi4vKiovcG9zaXRpb24sIEllLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2Mi4vKiovcG9zaXRpb24sIHYyLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjMuLyoqL3Bvc2l0aW9uLCBJZSwgSmUpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjMuLyoqL3Bvc2l0aW9uLCB2My4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciByZ2IgPSBjdHgudihYYi5nZiwgMjU1KTtcclxuXHRcdFx0XHRcdFx0djAuLyoqL2NvbG9yID0gdjEuLyoqL2NvbG9yID0gdjIuLyoqL2NvbG9yID0gdjMuLyoqL2NvbG9yID0gW3JnYlswXSwgcmdiWzFdLCByZ2JbMl0sIFhiLk9kICogMjU1XTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciBEZSA9IE1hdGguZmxvb3IoWGIuUWMgJSB0aGlzLndlLlJjKTtcclxuXHRcdFx0XHRcdFx0dmFyIEVlID0gTWF0aC5mbG9vcihYYi5RYyAvIHRoaXMud2UuUmMpO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIFBlLCBRZSwgUmUsIFNlO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIFdlID0gdGhpcy5MZC50ZXh0dXJlc1JlbWFwW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLnRleHR1cmVJbmRpY2VzWzBdXTtcclxuXHRcdFx0XHRcdFx0aWYgKFdlKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFVlID0gV2Uud2lkdGggLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IFdlLmhlaWdodCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IFdlLnggKyBEZSAqIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBRZSA9IFBlICsgVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFJlID0gKFdlLnkgKyBXZS5oZWlnaHQgLSBFZSAqIFZlKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2UgPSBSZSAtIFZlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IDEuMCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFZlID0gMS4wIC8gdGhpcy53ZS5TYztcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFBlID0gRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9ICgxLjAgLSBFZSAqIFZlKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2UgPSBSZSAtIFZlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2MC4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBTZV07XHJcblx0XHRcdFx0XHRcdHYxLi8qKi90ZXhDb29yZHNbMF0gPSBbUGUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djIuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgUmVdO1xyXG5cdFx0XHRcdFx0XHR2My4vKiovdGV4Q29vcmRzWzBdID0gW1FlLCBTZV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJlbmRlckJ1ZmZlci5iZWZvcmVRdWFkKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5iZWZvcmVRdWFkKHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjApO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjEpO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjIpO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjMpO1xyXG5cclxuXHRcdFx0XHRcdGlmICghcmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpIHtcclxuXHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBuZXcgY3R4LlJlbmRlckNhbGwoMCwgNiwgdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBsYXN0UmVuZGVyQ2FsbCA9IHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxhc3RSZW5kZXJDYWxsLnJlbmRlclN0eWxlSW5kZXggPT0gdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwubnVtSW5kaWNlcyArPSA2O1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoUmVuZGVyQ2FsbChsYXN0UmVuZGVyQ2FsbCk7XHJcblx0XHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBuZXcgY3R4LlJlbmRlckNhbGwoXHJcblx0XHRcdFx0XHRcdFx0XHRsYXN0UmVuZGVyQ2FsbC5zdGFydEluZGV4ICsgbGFzdFJlbmRlckNhbGwubnVtSW5kaWNlcyxcclxuXHRcdFx0XHRcdFx0XHRcdDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFhiLkNlKDEsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVlOiBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdHN3aXRjaCAodGhpcy5CZC5WYykge1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKHRoaXMuQmQudGNbV2JdLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKHRoaXMuQmQudGNbV2JdLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuZm9yRWFjaChmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0XHRcdFx0WGIuZGVwdGggPSBjdHguSCh0ZSwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoIDwgYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRcdFx0aWYgKGEuZGVwdGggPiBiLmRlcHRoKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgbGQgPSBmdW5jdGlvbiAoTGQsIHdlLCB2ZSkge1xyXG5cdFx0dmFyIFZiID0gdGhpcztcclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMud2UgPSB3ZTtcclxuXHJcblx0XHQvLyBFYlxyXG5cclxuXHRcdGZ1bmN0aW9uIEViKCkge1xyXG5cdFx0XHR0aGlzLkZiID0gMDtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuSGIgPSBudWxsO1xyXG5cdFx0XHR0aGlzLkliID0gbnVsbDtcclxuXHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdHRoaXMuTGIgPSAxO1xyXG5cclxuXHRcdFx0VmIud2UuTWIodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5PYiA9IHRoaXMuR2I7XHJcblx0XHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRFYi5wcm90b3R5cGUgPSB7XHJcblx0XHRcdEpkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblx0XHRcdFx0VmIud2UuUGIoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR2YXIgUmIgPSBWYi5SYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZSA9IExkLlJiO1xyXG5cdFx0XHRcdHZhciBTYiA9IFFiO1xyXG5cdFx0XHRcdHZhciBpYyA9IDA7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnpiID4gMC4wMDAwMDEpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgVGIgPSB0aGlzLk9iICsgUWIgKiB0aGlzLnpiO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+PSAxLjApIHtcclxuXHRcdFx0XHRcdFx0dmFyIFViID0gdGhpcy56YiA8IDAuMDAxID8gMC4wIDogKDEuMCAtIHRoaXMuT2IpIC8gdGhpcy56YjtcclxuXHRcdFx0XHRcdFx0U2IgLT0gVWI7XHJcblx0XHRcdFx0XHRcdFJiICs9IFViO1xyXG5cdFx0XHRcdFx0XHRzeXN0ZW1UaW1lICs9IFViO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuSGIgIT0gbnVsbCAmJiBSYiA+IHRoaXMuSGIpIHtcclxuXHRcdFx0XHRcdFx0XHRWYi5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRWYi5SYiA9IFJiO1xyXG5cdFx0XHRcdFx0XHRMZC5SYiA9IHN5c3RlbVRpbWU7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5hYihWYi5BYiwgQWIsIFZiLkJiLCBTYiAvIFFiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChNYyAmJiBRYiA+IDApXHJcblx0XHRcdFx0XHRcdFx0Y3R4LnNsZXJwcShWYi5NYywgTWMsIFZiLnByZXZSb3RhdGlvbiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgdGhlIGZ1dHVyZSB3aGVuIEpiIHdvdWxkIGJlIGV4dGVybmFsXHJcblx0XHRcdFx0XHRcdHRoaXMuTGIgPSB0aGlzLkpiO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuSmI7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoVmIuc2MubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuSmIgPT0gMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSBXYiAvICh0aGlzLkpiIC0gMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBYYiA9IFZiLnNjLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFZiLnRjLnVuc2hpZnQoWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoV2IgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlliKCk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWmIoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0WGIuSWQoU2IpO1xyXG5cdFx0XHRcdFx0XHRcdCsraWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuT2IgPSAwLjA7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkliICE9IG51bGwgJiYgKyt0aGlzLkZiID49IHRoaXMuSWIpIHtcclxuXHRcdFx0XHRcdFx0XHRWYi5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5PYiA9IFRiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRSYiArPSBTYjtcclxuXHRcdFx0XHRWYi5SYiA9IFJiO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY1xyXG5cclxuXHRcdGZ1bmN0aW9uIGFjKCkge1xyXG5cdFx0XHR0aGlzLkdiID0gMTtcclxuXHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdHRoaXMuTGIgPSAxO1xyXG5cclxuXHRcdFx0VmIud2UuTWIodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5iYyA9IHRoaXMuR2I7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRhYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdEpkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblx0XHRcdFx0VmIud2UuUGIoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR2YXIgY2MgPSBWYi5SYjtcclxuXHRcdFx0XHR2YXIgZGMgPSBjYyArIFFiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lQmVmb3JlRnJhbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUFmdGVyRnJhbWUgPSBzeXN0ZW1UaW1lQmVmb3JlRnJhbWUgKyBRYjtcclxuXHRcdFx0XHR2YXIgZWMgPSBBYiA/IGN0eC5PKGN0eC5oKEFiLCBWYi5CYikpIDogMDtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAoZWMgPiAwLjAwMDAwMSkge1xyXG5cdFx0XHRcdFx0dmFyIGZjID0gZWMgLyB0aGlzLnJkO1xyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5iYyArIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBoYyA9IGZjIDwgMC4wMDEgP1xyXG5cdFx0XHRcdFx0XHQxLjAgLSB0aGlzLmJjIDogKDEuMCAtIHRoaXMuYmMpIC8gZmM7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGpjID0gW107XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKFRiID4gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBrYyA9IGNjICsgaGMgKiBRYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoamMsIFZiLkJiLCBBYiwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBrYztcclxuXHRcdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIGpjKTtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBjdHguWChzeXN0ZW1UaW1lQmVmb3JlRnJhbWUsIHN5c3RlbVRpbWVBZnRlckZyYW1lLCBoYyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgdGhlIGZ1dHVyZSB3aGVuIEpiIHdvdWxkIGJlIGV4dGVybmFsXHJcblx0XHRcdFx0XHRcdHRoaXMuTGIgPSB0aGlzLkpiO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuSmI7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoVmIuc2MubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuSmIgPT0gMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSBXYiAvICh0aGlzLkpiIC0gMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBYYiA9IFZiLnNjLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFZiLnRjLnVuc2hpZnQoWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoV2IgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlliKCk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWmIoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0WGIuSWQoUWIgKiAoMS4wIC0gaGMpKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRoYyArPSAxLjAgLyBmYztcclxuXHRcdFx0XHRcdFx0VGIgLT0gMS4wO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuYmMgPSBUYjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFZiLlJiID0gZGM7XHJcblxyXG5cdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBBYik7XHJcblxyXG5cdFx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRcdGN0eC5VKFZiLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1jXHJcblxyXG5cdFx0ZnVuY3Rpb24gbWMoKSB7XHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5QZCA9IFtdO1xyXG5cdFx0XHR0aGlzLk5kID0gW107XHJcblx0XHRcdHRoaXMuZ2YgPSBbXTtcclxuXHRcdFx0dGhpcy5LYyA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1jLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0bmM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLm9jID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHRcdFx0XHRcdHBjLkJkLkpkKHRoaXMuQWIsIG51bGwpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZClcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRZYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmZkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFpiOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0VmIud2UuZ2QoVmIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHRcdFx0dGhpcy5uYygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYikge1xyXG5cdFx0XHRcdFZiLndlLnFjKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dGhpcy5yYyhRYik7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRwYzogZnVuY3Rpb24gKGplKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuS2NbamVdLkJkO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmM6IGZ1bmN0aW9uIChRYikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5LY1tpXS5CZC5JZChRYiwgdGhpcy5BYiwgbnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dWM6IGZ1bmN0aW9uIChtZCwgbmQpIHtcclxuXHRcdFx0XHR0aGlzLktjLnB1c2goe1xyXG5cdFx0XHRcdFx0QmQ6IG5ldyBsZChMZCwgbWQsIHZlKSxcclxuXHRcdFx0XHRcdEFkOiBuZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dmM6IGZ1bmN0aW9uIChmZSwgeGMsIGdlKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQuSGQoZmUsIGdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRDZTogZnVuY3Rpb24gKHhjLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhjID09IHBjLkFkLnhjKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHdjOiBmdW5jdGlvbiAoZmUpIHtcclxuXHRcdFx0XHR0aGlzLm9jID0gdHJ1ZTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHBjLkFkLnNkKSB7XHJcblx0XHRcdFx0XHRcdHBjLkJkLmFjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdHBjLkJkLklkKDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHljOiBmdW5jdGlvbiAoR2QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuRWQoR2QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHpjXHJcblxyXG5cdFx0ZnVuY3Rpb24gemMoKSB7XHJcblx0XHR9XHJcblxyXG5cdFx0emMucHJvdG90eXBlLkFjID0gZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdHJldHVybiBWYi53ZS5DYyhWYiwgWGIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbGQgQWRcclxuXHJcblx0XHR0aGlzLkFiID0gW107XHJcblx0XHR0aGlzLkJiID0gW107XHJcblx0XHR0aGlzLk1jID0gW107XHJcblx0XHR0aGlzLnByZXZSb3RhdGlvbiA9IFtdO1xyXG5cdFx0dGhpcy50YyA9IFtdO1xyXG5cdFx0dGhpcy5zYyA9IFtdO1xyXG5cdFx0dGhpcy5XYyA9IG5ldyB6YygpO1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QgPSBuZXcgdmUodGhpcy5MZCwgdGhpcyk7XHJcblx0XHR0aGlzLlljID0gW107XHJcblx0XHR0aGlzLmFkID0gW107XHJcblxyXG5cdFx0dGhpcy5kZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy52ZCA9IG5ldyBFYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgYWMoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLndlLnVkKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuamQ7ICsrV2IpIHtcclxuXHRcdFx0dmFyIFhiID0gbmV3IG1jKCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgdGhpcy5ZYy5sZW5ndGg7ICsraWQpIHtcclxuXHRcdFx0XHR2YXIgaGQgPSB0aGlzLlljW2lkXTtcclxuXHRcdFx0XHRYYi51YyhoZC5EYiwgaGQuQWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjLnB1c2goWGIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jID8gTWMgOiBbMCwgMCwgMCwgMV0pO1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblxyXG5cdFx0XHR0aGlzLlJiID0gMC4wO1xyXG5cdFx0XHR0aGlzLndkID0gMC4wO1xyXG5cdFx0XHR0aGlzLlpjID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5wYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSBmYWxzZTtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSmQgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHR0aGlzLk5iKEFiLCBNYyk7XHJcblxyXG5cdFx0dGhpcy5zYy5wdXNoLmFwcGx5KHRoaXMuc2MsIHRoaXMudGMpO1xyXG5cdFx0dGhpcy50Yy5sZW5ndGggPSAwO1xyXG5cclxuXHRcdHRoaXMudmQuSmQoKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5JZCA9IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblxyXG5cdFx0aWYgKHRoaXMucGF1c2VkXylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5UZChBYiwgTWMpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRpZiAoUWIgPiAwLjAwMDEpIHtcclxuXHRcdFx0XHR2YXIgc2hpZnQgPSBbXTtcclxuXHRcdFx0XHRjdHguZyhzaGlmdCwgQWIsIHRoaXMuQmIpO1xyXG5cdFx0XHRcdGN0eC5UKHRoaXMuYWQsIHNoaWZ0KTtcclxuXHRcdFx0XHRjdHgudyh0aGlzLmFkLCB0aGlzLmFkLCBRYik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoTWMpXHJcblx0XHR7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaWM7XHJcblxyXG5cdFx0aWYgKHRoaXMuWmMgJiYgIXRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8pIHtcclxuXHRcdFx0aWMgPSB0aGlzLnZkLklkKFFiLCBBYiwgTWMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblxyXG5cdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cclxuXHRcdFx0aWMgPSAwO1xyXG5cdFx0XHR0aGlzLlJiICs9IFFiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gaWM7IFdiIDwgdGhpcy50Yy5sZW5ndGg7KSB7XHJcblx0XHRcdHZhciBYYiA9IHRoaXMudGNbV2JdO1xyXG5cclxuXHRcdFx0aWYgKCFYYi5vYykge1xyXG5cdFx0XHRcdFhiLklkKFFiKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuV2MuQWModGhpcy50Y1tXYl0pKSB7XHJcblx0XHRcdFx0XHRYYi53YygpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFhiLnJjKFFiKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMueGQoV2IpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCsrV2I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0bGQucHJvdG90eXBlLnhkID0gZnVuY3Rpb24gKGplKSB7XHJcblx0XHR2YXIgWGIgPSB0aGlzLnRjW2plXTtcclxuXHJcblx0XHR2YXIgcmVhZHkgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGlkID0gMDsgaWQgPCBYYi5LYy5sZW5ndGg7ICsraWQpIHtcclxuXHRcdFx0dmFyIEJkID0gWGIuS2NbaWRdLkJkO1xyXG5cclxuXHRcdFx0aWYgKEJkLmFjdGl2YXRlZCgpIHx8IEJkLnRjLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRyZWFkeSA9IGZhbHNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJlYWR5KSB7XHJcblx0XHRcdHRoaXMuc2MucHVzaCh0aGlzLnRjW2plXSk7XHJcblx0XHRcdHRoaXMudGMuc3BsaWNlKGplLCAxKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkhkID0gZnVuY3Rpb24gKGZlLCBnZSkge1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QuSGQoZmUsIGdlKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS51ZSA9IGZ1bmN0aW9uIChzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LnVlKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuVGQgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHR0aGlzLndkID0gdGhpcy5SYjtcclxuXHJcblx0XHRpZiAoQWIpIHtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoTWMpIHtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWMgPSBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHR0aGlzLlljLnB1c2goeyBEYjogbWQsIEFkOiBuZCB9KTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnBhdXNlZF8gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi91bnBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhdXNlZF87XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi91bnBhdXNlR2VuZXJhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovZ2VuZXJhdG9yc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdlbmVyYXRvcnNQYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuZGlzYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLlpjID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuYWN0aXZhdGVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuWmM7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dldE51bVBhcnRpY2xlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRjLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHZhciBrZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBDYiA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCB2ZSwgb3B0aW9ucykge1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbCA9IHdlO1xyXG5cclxuXHRcdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0XHR0aGlzLk1jID0gW107XHJcblxyXG5cdFx0XHQvLyBrZSBBZFxyXG5cclxuXHRcdFx0dGhpcy5vZCA9IFtdO1xyXG5cclxuXHRcdFx0dGhpcy5wZCA9IGZ1bmN0aW9uIChtZCkge1xyXG5cdFx0XHRcdHZhciBCZCA9IG5ldyBsZCh0aGlzLCBtZCwgdmUpO1xyXG5cdFx0XHRcdEJkLk5iKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHRcdHRoaXNbXCJfXCIuY29uY2F0KG1kLm5hbWUpXSA9IEJkO1xyXG5cdFx0XHRcdHRoaXMub2QucHVzaChCZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0XHR0aGlzLlJiID0gMC4wO1xyXG5cdFx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiID8gQWIgOiBbMCwgMCwgMF0pO1xyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jID8gTWMgOiBbMCwgMCwgMCwgMV0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKEFiLCBNYyk7XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLnFkKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuZ2VuZXJhdG9yc1BhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMucGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy4vKiovcGF1c2VBbGxFbWl0dGVycygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlRml4ZWQodGhpcy5VZCwgQWIsIE1jLCB0aGlzLnByZXNpbUZyYW1lVGltZSk7XHJcblx0XHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzdGFydCA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMpIHtcclxuXHJcblx0XHR0aGlzLk5iKC8qKi9wb3NpdGlvbiA/IC8qKi9wb3NpdGlvbiA6IHRoaXMuQWIsIC8qKi9yb3RhdGlvbiA/IC8qKi9yb3RhdGlvbiA6IHRoaXMuTWMpO1xyXG5cdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5KZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2VuZXJhdG9yc1BhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wYXVzZWQpIHtcclxuXHRcdFx0dGhpcy4vKiovcGF1c2VBbGxFbWl0dGVycygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblx0XHRcdHRoaXMudXBkYXRlRml4ZWQodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYywgdGhpcy5wcmVzaW1GcmFtZVRpbWUpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS56ZXJvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoMCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VwZGF0ZSA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHRpZiAodGhpcy5EZCA+IDAuMClcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCB0aGlzLkRkKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy51cGRhdGVGbGV4KC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZpeGVkID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9mcmFtZVRpbWUpIHtcclxuXHRcdHZhciB1cGRhdGVkVGltZSA9IDAuMDtcclxuXHRcdHZhciBoYyA9IFtdO1xyXG5cdFx0Y3R4LlQoaGMsIHRoaXMuQWIpO1xyXG5cdFx0dmFyIGZyYW1lUm90YXRpb24gPSBbXTtcclxuXHRcdGN0eC5VKGZyYW1lUm90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24gJiYgY3R4LmVxdWFsdjNfKC8qKi9wb3NpdGlvbiwgdGhpcy5BYikpXHJcblx0XHRcdC8qKi9wb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbiAmJiBjdHguZXF1YWxxXygvKiovcm90YXRpb24sIHRoaXMuTWMpKVxyXG5cdFx0XHQvKiovcm90YXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHdoaWxlICgoLyoqL2R0IC0gdXBkYXRlZFRpbWUpICsgdGhpcy5DZCA+PSAvKiovZnJhbWVUaW1lKSB7XHJcblx0XHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRcdGN0eC5hYihoYywgdGhpcy5BYiwgLyoqL3Bvc2l0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRcdGN0eC5zbGVycHEoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYywgLyoqL3JvdGF0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldLklkKC8qKi9mcmFtZVRpbWUsIGhjLCBmcmFtZVJvdGF0aW9uKTtcclxuXHJcblx0XHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVkVGltZSArPSAvKiovZnJhbWVUaW1lIC0gdGhpcy5DZDtcclxuXHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5SYiA9IGNjICsgLyoqL2ZyYW1lVGltZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0dGhpcy5DZCArPSAvKiovZHQgLSB1cGRhdGVkVGltZTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS51cGRhdGVGbGV4ID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbik7XHJcblx0XHRcdHRoaXMuUmIgPSBjYztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlJiID0gY2MgKyAvKiovZHQ7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXNldFBvc2l0aW9uID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLlRkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9zZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoLyoqL25hbWUsIC8qKi92YWx1ZSkge1xyXG5cdFx0dmFyIHByb3BOYW1lID0gXCJfXCIuY29uY2F0KC8qKi9uYW1lKTtcclxuXHJcblx0XHRpZiAoLyoqL3ZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0aWYgKC8qKi92YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0Y3R4LlModGhpcy5vZFtpXVtwcm9wTmFtZV0sIC8qKi92YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0Y3R4LlQodGhpcy5vZFtpXVtwcm9wTmFtZV0sIC8qKi92YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0dGhpcy5vZFtpXVtwcm9wTmFtZV0gPSAvKiovdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcGF1c2VBbGxFbWl0dGVycyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3BhdXNlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VBbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHJcblx0XHRpZiAodGhpcy5fcHJlc2ltTmVlZGVkKSB7XHJcblx0XHRcdHRoaXMudXBkYXRlRml4ZWQodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYywgdGhpcy5wcmVzaW1GcmFtZVRpbWUpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovYXJlQWxsRW1pdHRlcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9kW2ldLnBhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3BhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZUdlbmVyYXRvcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovYXJlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9kW2ldLmdlbmVyYXRvcnNQYXVzZWQoKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovZ2V0TnVtUGFydGljbGVzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbnVtUGFydGljbGVzID0gMDtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0bnVtUGFydGljbGVzICs9IHRoaXMub2RbaV0uZ2V0TnVtUGFydGljbGVzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bVBhcnRpY2xlcztcclxuXHR9XHJcblxyXG5cclxuXHR2YXIgbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIHJlbmRlckJ1ZmZlciwgb3B0aW9ucykge1xyXG5cdFx0XHRsZS5wcm90b3R5cGUuX2luaXQuY2FsbCh0aGlzLCB3ZSwgQWIsIE1jLCBvZSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHR0aGlzLnRleHR1cmVzUmVtYXAgPSBbXTtcclxuXHJcblx0XHRcdHZhciBpbmRpY2VzID0gW107XHJcblxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHZlckRpc3A7XHJcblx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuLyoqL21vZGVsLlhlOyArK1diKSB7XHJcblx0XHRcdFx0XHR2ZXJEaXNwID0gV2IgKiA0O1xyXG5cdFx0XHRcdFx0aW5kaWNlcy5wdXNoKHZlckRpc3AgKyAwLCB2ZXJEaXNwICsgMywgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAxLCB2ZXJEaXNwICsgMywgdmVyRGlzcCArIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIgPSByZW5kZXJCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLmluaXRpYWxpemUodGhpcy4vKiovbW9kZWwuWGUgKiA0LCBbMl0sIGluZGljZXMsIHRoaXMuLyoqL21vZGVsLlhlKTtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19udW1JbmRpY2VzID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxlLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRsZS5wcm90b3R5cGUuLyoqL2ZpbGxHZW9tZXRyeUJ1ZmZlcnMgPSBmdW5jdGlvbiAoLyoqL2NhbWVyYVJpZ2h0LCAvKiovY2FtZXJhVXAsIC8qKi9jYW1lcmFEaXIpIHtcclxuXHRcdHRoaXMucmVuZGVyQnVmZmVyLmNsZWFudXAoKTtcclxuXHRcdHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub2QuZm9yRWFjaChmdW5jdGlvbiAoQmQpIHtcclxuXHRcdFx0QmQudWUoLyoqL2NhbWVyYVJpZ2h0LCAvKiovY2FtZXJhVXAsIC8qKi9jYW1lcmFEaXIsIHRoaXMucmVuZGVyQnVmZmVyKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKVxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5wdXNoUmVuZGVyQ2FsbCh0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKTtcclxuXHR9XHJcblxyXG5cdHZhciBtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgb3B0aW9ucykge1xyXG5cdFx0XHRtZS5wcm90b3R5cGUuX2luaXQuY2FsbCh0aGlzLCB3ZSwgQWIsIE1jLCBuZSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHR0aGlzLm1hdGVyaWFscyA9IFtdO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5tYXRlcmlhbHMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLm1hdGVyaWFscy5wdXNoKFsnc291cmNlLW92ZXInLCAnbGlnaHRlcicsICdtdWx0aXBseSddW3ZhbHVlXSk7XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdFx0dGhpcy4vKiovdGV4dHVyZURlc2NzID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtZS5wcm90b3R5cGUgPSBuZXcga2UoKTtcclxuXHJcblx0bWUucHJvdG90eXBlLi8qKi9kcmF3ID0gZnVuY3Rpb24gKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5IZCgvKiovY29udGV4dCwgLyoqL2NhbWVyYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZVdHTEluc3RhbmNlID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucykge1xyXG5cdFx0dmFyIExkID0gbmV3IGxlKCk7XHJcblx0XHRMZC5faW5pdCh0aGlzLCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL3JlbmRlckJ1ZmZlciwgLyoqL29wdGlvbnMgfHwge30pO1xyXG5cdFx0cmV0dXJuIExkO1xyXG5cdH1cclxuXHJcblx0dGhpcy5jcmVhdGVDYW52YXMyREluc3RhbmNlID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cdFx0dmFyIExkID0gbmV3IG1lKCk7XHJcblx0XHRMZC5faW5pdCh0aGlzLCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMgfHwge30pO1xyXG5cdFx0cmV0dXJuIExkO1xyXG5cdH1cclxuXHR0aGlzLnRleHR1cmVzID0gWydzcGFya19vcmFuZ2VfZ2xvdy5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFsxXTtcclxuXHR0aGlzLnJlbmRlclN0eWxlcyA9IFt7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlswXX1dO1xyXG5cdHRoaXMuWGUgPSA4MDA7XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIoKSB7XHJcblxyXG5cdFx0dmFyIF8xLCBfMiA9IFtdLCBfMmksIF8ycyA9IFtdLCBfMywgXzQgPSBbXSwgXzYgPSBbXSwgXzggPSBbXSwgXzhpMCwgXzhzMCA9IFtdLCBfOGkxLCBfOHMxID0gW10sIF84aTIsIF84czIgPSBbXSwgXzEwLCBfMTIsIF8xMywgXzE0ID0gW10sIF8xNiwgXzE4LCBfMTksIF8xOWkwLCBfMTlzMCA9IFtdLCBfMjA9W10sIF8yMGE9W10sIF8yMGk9W10sIF8yMT1bXSwgXzIxZnM9W10sIF8yMXZzPVtdLCBfMjFydz1bXSwgXzIxcnduPVtdLCBfMjFyd2wsIF8yMXY9W10sIF8yMXA9W10sIF8yMWR0bCwgXzIxZHRwLCBfMjFkZiwgXzIxZnNkPVtdLCBfMjI9W10sIF8yMng9W10sIF8yMnk9W10sIF8yMno9W10sIF8yMywgXzI0ID0gW10sIF8yNGkwLCBfMjRzMCA9IFtdLCBfMjRpMSwgXzI0czEgPSBbXSwgXzI1LCBfMjYgPSBbXSwgXzI2aTAsIF8yNnMwID0gW10sIF8yNmkxLCBfMjZzMSA9IFtdLCBfMjZpMiwgXzI2czIgPSBbXSwgXzI3LCBfMjdpMCwgXzI3czAgPSBbXTtcclxuXHRcdHRoaXMucGUgPSBbe3hlOjEsUmM6MSxTYzoxLHJlbmRlclN0eWxlSW5kZXg6MH1dO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJEZWZhdWx0RW1pdHRlclwiO1xyXG5cclxuXHRcdHRoaXMudWQgPSBmdW5jdGlvbihCZCkge1xyXG5cdFx0XHRCZC5kZCgpO1xyXG5cdFx0XHRCZC5fMiA9IFtcclxuXHRcdFx0XHRbWy00NzQuOCwzNTcuNTQ0XSxbNTYwLjUzNiwzNThdLFs1NjAuNTM2LDM1OF1dXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl84ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLDAsMF1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFstNTAwLC0yMDAsLTIwMF0sXHJcblx0XHRcdFx0XHRbLTIwMCwtNTAwLC01MDBdXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTkgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzEwMDAsODQwLjk4LDc1NC40NjEsNzMwLjIyOSw3NTYuNjcsODIxLjE4LDkxMC42NzEsMTAxMi4wOSwxMTEyLjkyLDEyMDEuNTYsMTI2Ny42OCwxMzAyLjM4LDEyOTguMjIsMTI0OS4yNywxMTUwLjk3LDEwMDAsMTAwMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8yNCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMSwxLDFdXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMC40LDAuNDA2NTYxLDAuNDIxMzM0LDAuNDQzMDM0LDAuNDcwODU5LDAuNTA0MzI4LDAuNTQzMTkyLDAuNTg3NDAzLDAuNjM3MTEzLDAuNjkyNzAzLDAuNzU0ODcyLDAuODI0ODEyLDAuOTA0NjEyLDAuOTk4MzAyLDEuMTE1NTMsMS4zLDEuM11cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8yNiA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMSwxLDFdXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMC41LDEsMV1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLjUsMSwxXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuXzI3ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLDEsMV0sXHJcblx0XHRcdFx0XHRbMSwxLDFdLFxyXG5cdFx0XHRcdFx0WzEsMC4zLDAuM10sXHJcblx0XHRcdFx0XHRbMC4zLDAuMywwLjNdLFxyXG5cdFx0XHRcdFx0WzAuMywxLDFdLFxyXG5cdFx0XHRcdFx0WzEsMSwxXSxcclxuXHRcdFx0XHRcdFsxLDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gODAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMjUwO1xyXG5cdFx0XHR2ZC5HYiA9IDE7XHJcblx0XHRcdHZkLkpiID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDI1MDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLk1jPVtdO1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRfMSA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRfMmkgPSBEYi5rYihfMSk7XHJcblx0XHRcdGN0eC5WKF8ycywwLChfMmktMCkqMSk7XHJcblx0XHRcdERiLmxiKF8yLCBCZC5fMltfMnNbMF1dLCBfMnNbMV0pO1xyXG5cdFx0XHRfMyA9IC01MDAgKyBCZC5MZC5yYW5kKCkgKiAoNTAwIC0gLTUwMCk7XHJcblx0XHRcdGN0eC5XKF80LCBfMlswXSwgXzJbMV0sIF8zKTtcclxuXHRcdFx0WGIuXzUgPSBbXTtcclxuXHRcdFx0Y3R4LmMoWGIuXzUsIEJkLkFiLCBfNCk7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzYsIDYwMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl83ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl83LCBfNik7XHJcblx0XHRcdF84aTA9KEJkLlJiPDA/MDooQmQuUmI+MT8xOkJkLlJiKSk7XHJcblx0XHRcdGN0eC5WKF84czAsMCwoXzhpMC0wKSoxKTtcclxuXHRcdFx0XzhpMT0oQmQuUmI8MD8wOihCZC5SYj40PygwKygoQmQuUmItMCklNCkpOkJkLlJiKSk7XHJcblx0XHRcdF84aTE8Mj9jdHguVihfOHMxLDAsKF84aTEtMCkqMC41KTpjdHguVihfOHMxLDEsKF84aTEtMikqMC41KTtcclxuXHRcdFx0XzhpMj0oQmQuUmI8MD8wOihCZC5SYj4xPzE6QmQuUmIpKTtcclxuXHRcdFx0Y3R4LlYoXzhzMiwwLChfOGkyLTApKjEpO1xyXG5cdFx0XHRjdHguVyhfOCwgRGIubmIoQmQuXzhbMF1bXzhzMFswXV0sXzhzMFsxXSksRGIubmIoQmQuXzhbMV1bXzhzMVswXV0sXzhzMVsxXSksRGIubmIoQmQuXzhbMl1bXzhzMlswXV0sXzhzMlsxXSkpO1xyXG5cdFx0XHRYYi5fOSA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fOSwgXzgpO1xyXG5cdFx0XHRfMTAgPSAzICsgQmQuTGQucmFuZCgpICogKDQgLSAzKTtcclxuXHRcdFx0WGIuXzExID0gXzEwO1xyXG5cdFx0XHRfMTIgPSAxMCArIEJkLkxkLnJhbmQoKSAqICgxNSAtIDEwKTtcclxuXHRcdFx0XzEzID0gMTAgKyBCZC5MZC5yYW5kKCkgKiAoMTUgLSAxMCk7XHJcblx0XHRcdGN0eC5WKF8xNCwgXzEyLCBfMTMpO1xyXG5cdFx0XHRYYi5fMTUgPSBbXTtcclxuXHRcdFx0Y3R4LlMoWGIuXzE1LCBfMTQpO1xyXG5cdFx0XHRfMTYgPSAwLjQgKyBCZC5MZC5yYW5kKCkgKiAoMC42IC0gMC40KTtcclxuXHRcdFx0WGIuXzE3ID0gXzE2O1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2QgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuTWM9W107XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdF8xID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF8yaSA9IERiLmtiKF8xKTtcclxuXHRcdFx0Y3R4LlYoXzJzLDAsKF8yaS0wKSoxKTtcclxuXHRcdFx0RGIubGIoXzIsIEJkLl8yW18yc1swXV0sIF8yc1sxXSk7XHJcblx0XHRcdF8zID0gLTUwMCArIEJkLkxkLnJhbmQoKSAqICg1MDAgLSAtNTAwKTtcclxuXHRcdFx0Y3R4LlcoXzQsIF8yWzBdLCBfMlsxXSwgXzMpO1xyXG5cdFx0XHRYYi5fNSA9IFtdO1xyXG5cdFx0XHRjdHguYyhYYi5fNSwgQmQuQWIsIF80KTtcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfNiwgNjAwLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzcgPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzcsIF82KTtcclxuXHRcdFx0XzhpMD0oQmQuUmI8MD8wOihCZC5SYj4xPzE6QmQuUmIpKTtcclxuXHRcdFx0Y3R4LlYoXzhzMCwwLChfOGkwLTApKjEpO1xyXG5cdFx0XHRfOGkxPShCZC5SYjwwPzA6KEJkLlJiPjQ/KDArKChCZC5SYi0wKSU0KSk6QmQuUmIpKTtcclxuXHRcdFx0XzhpMTwyP2N0eC5WKF84czEsMCwoXzhpMS0wKSowLjUpOmN0eC5WKF84czEsMSwoXzhpMS0yKSowLjUpO1xyXG5cdFx0XHRfOGkyPShCZC5SYjwwPzA6KEJkLlJiPjE/MTpCZC5SYikpO1xyXG5cdFx0XHRjdHguVihfOHMyLDAsKF84aTItMCkqMSk7XHJcblx0XHRcdGN0eC5XKF84LCBEYi5uYihCZC5fOFswXVtfOHMwWzBdXSxfOHMwWzFdKSxEYi5uYihCZC5fOFsxXVtfOHMxWzBdXSxfOHMxWzFdKSxEYi5uYihCZC5fOFsyXVtfOHMyWzBdXSxfOHMyWzFdKSk7XHJcblx0XHRcdFhiLl85ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl85LCBfOCk7XHJcblx0XHRcdF8xMCA9IDMgKyBCZC5MZC5yYW5kKCkgKiAoNCAtIDMpO1xyXG5cdFx0XHRYYi5fMTEgPSBfMTA7XHJcblx0XHRcdF8xMiA9IDEwICsgQmQuTGQucmFuZCgpICogKDE1IC0gMTApO1xyXG5cdFx0XHRfMTMgPSAxMCArIEJkLkxkLnJhbmQoKSAqICgxNSAtIDEwKTtcclxuXHRcdFx0Y3R4LlYoXzE0LCBfMTIsIF8xMyk7XHJcblx0XHRcdFhiLl8xNSA9IFtdO1xyXG5cdFx0XHRjdHguUyhYYi5fMTUsIF8xNCk7XHJcblx0XHRcdF8xNiA9IDAuNCArIEJkLkxkLnJhbmQoKSAqICgwLjYgLSAwLjQpO1xyXG5cdFx0XHRYYi5fMTcgPSBfMTY7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fNSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyArPSBRYjtcclxuXHRcdFx0XzE4ID0gKFhiLl8gLyBYYi5fMTEpO1xyXG5cdFx0XHRfMTlpMD0oXzE4PDA/MDooXzE4PjE/MTpfMTgpKTtcclxuXHRcdFx0Y3R4LlYoXzE5czAsMCwoXzE5aTAtMCkqMTUpO1xyXG5cdFx0XHRfMTkgPSBEYi5uYihCZC5fMTlbMF1bXzE5czBbMF1dLF8xOXMwWzFdKTtcclxuXHRcdFx0Y3R4LnUoXzIwYSwgWzIwMCwxMDAsNjBdLCBCZC5MZC5SYik7XHJcblx0XHRcdGN0eC5jKF8yMGEsIF8yMGEsIFhiLl81KTtcclxuXHRcdFx0Y3R4LnUoXzIwaSwgXzIwYSwgMS4wIC8gMjAwMCk7XHJcblx0XHRcdGN0eC54YihfMjAsIF8yMGkpO1xyXG5cdFx0XHRjdHguayhfMjAsIF8yMCwgWzAuMDA3ODEyNSwwLjAwNzgxMjUsMC4wMDc4MTI1XSk7XHJcblx0XHRcdGN0eC5jKF8yMCwgXzIwLCBbLTEsLTEsLTFdKTtcclxuXHRcdFx0Y3R4LnUoXzIwLCBfMjAsIF8xOSk7XHJcblx0XHRcdGN0eC5UKF8yMWZzLCBfMjApO1xyXG5cdFx0XHRjdHguYyhfMjFmcywgXzIxZnMsIFhiLl85KTtcclxuXHRcdFx0Y3R4LlQoXzIxdnMsIFswLDAsMF0pO1xyXG5cdFx0XHRfMjFkdGwgPSBRYjtcclxuXHRcdFx0Y3R4LlQoXzIxdiwgWGIuXzcpO1xyXG5cdFx0XHRjdHguVChfMjFwLCBYYi5fNSk7XHJcblx0XHRcdHdoaWxlIChfMjFkdGwgPiAwLjAwMDEpIHtcclxuXHRcdFx0XHRfMjFkdHAgPSBfMjFkdGw7XHJcblx0XHRcdFx0Y3R4LlQoXzIxZnNkLCBfMjFmcyk7XHJcblx0XHRcdFx0Y3R4LmcoXzIxcncsIF8yMXZzLCBfMjF2KTtcclxuXHRcdFx0XHRfMjFyd2wgPSBjdHguUChfMjFydyk7XHJcblx0XHRcdFx0aWYgKF8yMXJ3bCA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdFx0XzIxcndsID0gTWF0aC5zcXJ0KF8yMXJ3bCk7XHJcblx0XHRcdFx0XHRjdHgudyhfMjFyd24sIF8yMXJ3LCBfMjFyd2wpO1xyXG5cdFx0XHRcdFx0XzIxZGYgPSAwLjAxICogWGIuXzE3ICogXzIxcndsO1xyXG5cdFx0XHRcdFx0aWYgKF8yMWRmICogXzIxZHRwID4gMC4yKVxyXG5cdFx0XHRcdFx0XHRfMjFkdHAgPSAwLjIgLyBfMjFkZjtcclxuXHRcdFx0XHRcdGN0eC5jKF8yMWZzZCwgXzIxZnNkLCBjdHgudihfMjFyd24sIF8yMXJ3bCAqIF8yMWRmKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN0eC5jKF8yMXYsIF8yMXYsIGN0eC52KF8yMWZzZCwgXzIxZHRwKSk7XHJcblx0XHRcdFx0Y3R4LmMoXzIxcCwgXzIxcCwgY3R4LnYoXzIxdiwgXzIxZHRwKSk7XHJcblx0XHRcdFx0XzIxZHRsIC09IF8yMWR0cDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjdHguVChYYi5fNSwgXzIxcCk7XHJcblx0XHRcdGN0eC5UKFhiLl83LCBfMjF2KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl81KTtcclxuXHRcdFx0Y3R4LlEoXzIyeiwgWzAsMCwxXSk7XHJcblx0XHRcdGN0eC5JKF8yMngsIFhiLl83LCBfMjJ6KTtcclxuXHRcdFx0Y3R4LlEoXzIyeCwgXzIyeCk7XHJcblx0XHRcdGN0eC5JKF8yMnksIF8yMnosIF8yMngpO1xyXG5cdFx0XHRjdHgucGIoXzIyLCBfMjJ4LCBfMjJ5LCBfMjJ6KTtcclxuXHRcdFx0XzIzID0gY3R4Lk8oWGIuXzcpO1xyXG5cdFx0XHRfMjRpMD0oXzIzPDA/MDooXzIzPjE/MTpfMjMpKTtcclxuXHRcdFx0Y3R4LlYoXzI0czAsMCwoXzI0aTAtMCkqMSk7XHJcblx0XHRcdF8yNGkxPShfMjM8MjAwPzIwMDooXzIzPjQwMD80MDA6XzIzKSk7XHJcblx0XHRcdGN0eC5WKF8yNHMxLDAsKF8yNGkxLTIwMCkqMC4wNzUpO1xyXG5cdFx0XHRjdHguVihfMjQsIERiLm5iKEJkLl8yNFswXVtfMjRzMFswXV0sXzI0czBbMV0pLERiLm5iKEJkLl8yNFsxXVtfMjRzMVswXV0sXzI0czFbMV0pKTtcclxuXHRcdFx0XzI1ID0gY3R4LmooWGIuXzE1LCBfMjQpO1xyXG5cdFx0XHRfMTggPSAoWGIuXyAvIFhiLl8xMSk7XHJcblx0XHRcdF8yNmkwPShfMTg8MD8wOihfMTg+MT8xOl8xOCkpO1xyXG5cdFx0XHRjdHguVihfMjZzMCwwLChfMjZpMC0wKSoxKTtcclxuXHRcdFx0XzI2aTE9KF8xODwwPzA6KF8xOD4xPzE6XzE4KSk7XHJcblx0XHRcdGN0eC5WKF8yNnMxLDAsKF8yNmkxLTApKjEpO1xyXG5cdFx0XHRfMjZpMj0oXzE4PDA/MDooXzE4PjE/MTpfMTgpKTtcclxuXHRcdFx0Y3R4LlYoXzI2czIsMCwoXzI2aTItMCkqMSk7XHJcblx0XHRcdGN0eC5XKF8yNiwgRGIubmIoQmQuXzI2WzBdW18yNnMwWzBdXSxfMjZzMFsxXSksRGIubmIoQmQuXzI2WzFdW18yNnMxWzBdXSxfMjZzMVsxXSksRGIubmIoQmQuXzI2WzJdW18yNnMyWzBdXSxfMjZzMlsxXSkpO1xyXG5cdFx0XHRfMjdpMD0oXzE4PDAuMT8wLjE6KF8xOD4xPzE6XzE4KSk7XHJcblx0XHRcdF8yN2kwPDAuNTUwMzU4P18yN2kwPDAuNDEyNDc5P18yN2kwPDAuMj9jdHguVihfMjdzMCwwLChfMjdpMC0wLjEpKjEwKTpjdHguVihfMjdzMCwxLChfMjdpMC0wLjIpKjQuNzA2MzUpOl8yN2kwPDAuNDczMjgzP2N0eC5WKF8yN3MwLDIsKF8yN2kwLTAuNDEyNDc5KSoxNi40NDYzKTpjdHguVihfMjdzMCwzLChfMjdpMC0wLjQ3MzI4MykqMTIuOTc0NCk6XzI3aTA8MC45P18yN2kwPDAuNj9jdHguVihfMjdzMCw0LChfMjdpMC0wLjU1MDM1OCkqMjAuMTQ0Mik6Y3R4LlYoXzI3czAsNSwoXzI3aTAtMC42KSozLjMzMzMzKTpjdHguVihfMjdzMCw2LChfMjdpMC0wLjkpKjEwKTtcclxuXHRcdFx0XzI3ID0gRGIubmIoQmQuXzI3WzBdW18yN3MwWzBdXSxfMjdzMFsxXSk7XHJcblx0XHRcdGN0eC5TKFhiLlBkLFswLjUsMC41XSk7XHJcblx0XHRcdGN0eC5VKFhiLk1jLCBfMjIpO1xyXG5cdFx0XHRjdHguUyhYYi5OZCxfMjUpO1xyXG5cdFx0XHRjdHguVChYYi5nZixfMjYpO1xyXG5cdFx0XHRYYi5PZCA9IF8yNztcclxuXHRcdFx0WGIuUWMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdGlmIChYYi5fID4gWGIuXzExKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHR0aGlzLnFkID0gZnVuY3Rpb24oTGQpIHtcclxuXHRcdExkLkRkID0gMC4wMzMzMzMzO1xyXG5cdFx0TGQuVWQgPSA1O1xyXG5cdFx0TGQucHJlc2ltRnJhbWVUaW1lID0gMC4xO1xyXG5cdFx0TGQucmFuZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKTsgfTtcclxuXHRcdExkLnBkKG5ldyBFbWl0dGVyX0RlZmF1bHRFbWl0dGVyKCkpO1xyXG5cdH1cclxuXHRcdHRoaXMua2IgPSBmdW5jdGlvbiAodikgeyBcdFx0XHRyZXR1cm4gKHYgPCAwKSA/IDAgOiAoKHYgPiAxKSA/IDEgOiB2KTsgXHRcdH1cclxuXHJcblx0XHR0aGlzLmxiID0gZnVuY3Rpb24gKHIsIHBhdGgsIGplKSB7IFx0XHRcdHZhciBpbmRleEludCA9IE1hdGguZmxvb3IoamUpOyBcdFx0XHR2YXIgbGVycCA9IGplIC0gaW5kZXhJbnQ7IFx0XHRcdGN0eC5ZKHIsIHBhdGhbaW5kZXhJbnRdLCBwYXRoW2luZGV4SW50ICsgMV0sIGxlcnApOyBcdFx0fVxyXG5cclxuXHRcdHRoaXMubmIgPSBmdW5jdGlvbihmdW5jVmFsdWVzLCBqZSkgeyBcdFx0XHR2YXIgaW5kZXhJbnQgPSBNYXRoLmZsb29yKGplKTsgXHRcdFx0dmFyIG5leHRJbnQgPSBpbmRleEludCArIDE7IFx0XHRcdHJldHVybiBjdHguWChmdW5jVmFsdWVzW2luZGV4SW50XSwgZnVuY1ZhbHVlc1tuZXh0SW50XSwgamUgLSBpbmRleEludCk7IFx0XHR9XHJcblxyXG5cclxufVxyXG5cclxucmV0dXJuIFNwYXJrc19lcGljO1xyXG59KSk7Il19
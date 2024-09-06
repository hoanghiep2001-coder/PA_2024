
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Blast03.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba13b1+ZGRDBreFbcJxA0E+', 'Blast03');
// neutrinoparticles/exported_effects/Blast03.js

"use strict";

// 9cbfe52a-1542-4a73-9d15-7881be585e89
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Blast03'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Blast03'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Blast03(ctx) {
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

    this.textures = ['Free Collection 1/Animated/FlameArc8_small.jpg', 'Free Collection 1/Static/Halos/blastwave1.png', 'Free Collection 1/Static/Glows/Flare2.png', 'Free Collection 1/Static/Glows/Flare10.png', 'Free Collection 1/Static/Smoke/CloudPart.png'];
    this.materials = [1, 0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }, {
      materialIndex: 0,
      textureIndices: [1]
    }, {
      materialIndex: 0,
      textureIndices: [2]
    }, {
      materialIndex: 0,
      textureIndices: [3]
    }, {
      materialIndex: 1,
      textureIndices: [4]
    }];
    this.Xe = 500;

    function Emitter_Blast() {
      var _,
          _i0,
          _s0 = [],
          _2 = [],
          _4 = [],
          _6,
          _8,
          _9 = [],
          _9i0,
          _9s0 = [],
          _9i1,
          _9s1 = [],
          _9i2,
          _9s2 = [],
          _11 = [],
          _13,
          _12,
          _14,
          _15,
          _15i0,
          _15s0 = [],
          _16,
          _16i0,
          _16s0 = [];

      this.pe = [{
        xe: 0,
        Rc: 8,
        Sc: 8,
        renderStyleIndex: 0
      }];
      this.name = "Blast";

      this.ud = function (Bd) {
        Bd._ = [[[20, 20, 20], [0, 0, 0]]];
        Bd.dd();
        Bd._9 = [[[1, 1, 1]], [[0.319595, 0.635811, 0.635811]], [[0.208108, 0.208108, 0.208108]]];
        Bd._15 = [[[0, 1, 1], [1, 1, 1], [1, 0, 0]]];
        Bd._16 = [[[0, 64, 64]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 10;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        _i0 = Bd.Ld.Rb < 0 ? 0 : Bd.Ld.Rb > 4 ? 0 + (Bd.Ld.Rb - 0) % 4 : Bd.Ld.Rb;
        _i0 < 0.6 ? ctx.V(_s0, 0, (_i0 - 0) * 1.66667) : ctx.V(_s0, 1, (_i0 - 0.6) * 0.294118);
        _ = Db.nb(Bd._[0][_s0[0]], _s0[1]);
        vd.zb = _;
      };

      this.fd = function (Bd, Xb) {
        Xb._1 = 0.0;
        ctx.W(_2, 0, 0, 0);
        Xb._3 = [];
        ctx.c(Xb._3, Bd.Ab, _2);
        ctx.randv3gen(_4, 32, Bd.Ld.rand);
        Xb._5 = [];
        ctx.T(Xb._5, _4);
        _6 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._7 = _6;
        _8 = 0 + Bd.Ld.rand() * (1 - 0);
        _9i0 = _8 < 0 ? 0 : _8 > 1 ? 1 : _8;
        ctx.V(_9s0, 0, (_9i0 - 0) * 1);
        _9i1 = _8 < 0 ? 0 : _8 > 1 ? 1 : _8;
        ctx.V(_9s1, 0, (_9i1 - 0) * 1);
        _9i2 = _8 < 0 ? 0 : _8 > 1 ? 1 : _8;
        ctx.V(_9s2, 0, (_9i2 - 0) * 1);
        ctx.W(_9, Db.nb(Bd._9[0][_9s0[0]], _9s0[1]), Db.nb(Bd._9[1][_9s1[0]], _9s1[1]), Db.nb(Bd._9[2][_9s2[0]], _9s2[1]));
        Xb._10 = [];
        ctx.T(Xb._10, _9);
        ctx.T(Xb.Ab, Xb._3);
      };

      this.gd = function (Bd, Xb) {
        Xb._1 = 0.0;
        ctx.W(_2, 0, 0, 0);
        Xb._3 = [];
        ctx.c(Xb._3, Bd.Ab, _2);
        ctx.randv3gen(_4, 32, Bd.Ld.rand);
        Xb._5 = [];
        ctx.T(Xb._5, _4);
        _6 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._7 = _6;
        _8 = 0 + Bd.Ld.rand() * (1 - 0);
        _9i0 = _8 < 0 ? 0 : _8 > 1 ? 1 : _8;
        ctx.V(_9s0, 0, (_9i0 - 0) * 1);
        _9i1 = _8 < 0 ? 0 : _8 > 1 ? 1 : _8;
        ctx.V(_9s1, 0, (_9i1 - 0) * 1);
        _9i2 = _8 < 0 ? 0 : _8 > 1 ? 1 : _8;
        ctx.V(_9s2, 0, (_9i2 - 0) * 1);
        ctx.W(_9, Db.nb(Bd._9[0][_9s0[0]], _9s0[1]), Db.nb(Bd._9[1][_9s1[0]], _9s1[1]), Db.nb(Bd._9[2][_9s2[0]], _9s2[1]));
        Xb._10 = [];
        ctx.T(Xb._10, _9);
        ctx.T(Xb.Ab, Xb._3);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._1 += Qb;
        ctx.T(_11, Xb._5);
        ctx.u(_11, _11, Qb);
        ctx.c(_11, _11, Xb._3);
        ctx.T(Xb._3, _11);
        ctx.T(Xb.Ab, Xb._3);
        _13 = 123;
        _12 = 1.2;
        _14 = Xb._1 / _12;
        _15i0 = _14 < 0 ? 0 : _14 > 1 ? 1 : _14;
        _15i0 < 0.8 ? _15i0 < 0.2 ? ctx.V(_15s0, 0, (_15i0 - 0) * 5) : ctx.V(_15s0, 1, (_15i0 - 0.2) * 1.66667) : ctx.V(_15s0, 2, (_15i0 - 0.8) * 5);
        _15 = Db.nb(Bd._15[0][_15s0[0]], _15s0[1]);
        _16i0 = _14 < 0 ? 0 : _14 > 1 ? 0 + (_14 - 0) % 1 : _14;
        ctx.V(_16s0, 0, (_16i0 - 0) * 1);
        _16 = Db.nb(Bd._16[0][_16s0[0]], _16s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._7;
        ctx.V(Xb.Nd, _13, _13);
        ctx.T(Xb.gf, Xb._10);
        Xb.Od = _15;
        Xb.Qc = _16 < 0 ? 0 : _16 >= 64 ? 63 : _16;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _12 = 1.2;
        if (Xb._1 > _12) return true;
        return false;
      };
    }

    function Emitter_Shockwave() {
      var _1 = [],
          _5,
          _4,
          _6,
          _7,
          _7i0,
          _7s0 = [],
          _8,
          _9,
          _9i0,
          _9s0 = [];

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 1
      }];
      this.name = "Shockwave";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._7 = [[[0, 0.0479595, 0.10855, 0.179953, 0.259913, 0.345832, 0.434909, 0.524314, 0.611351, 0.693599, 0.769009, 0.835944, 0.893186, 0.9399, 0.975581, 1, 1]]];
        Bd._9 = [[[0.3, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 0.25;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 0.25;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        Xb._3 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        Xb._3 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(Xb.Ab, Xb._2);
        _5 = 800;
        _4 = 0.7;
        _6 = Xb._ / _4;
        _7i0 = _6 < 0 ? 0 : _6 > 1 ? 1 : _6;
        ctx.V(_7s0, 0, (_7i0 - 0) * 15);
        _7 = Db.nb(Bd._7[0][_7s0[0]], _7s0[1]);
        _8 = _5 * _7;
        _9i0 = _6 < 0 ? 0 : _6 > 1 ? 1 : _6;
        ctx.V(_9s0, 0, (_9i0 - 0) * 1);
        _9 = Db.nb(Bd._9[0][_9s0[0]], _9s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._3;
        ctx.V(Xb.Nd, _8, _8);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = _9;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _4 = 0.7;
        if (Xb._ > _4) return true;
        return false;
      };
    }

    function Emitter_Sparks() {
      var _1,
          _3 = [],
          _5,
          _6 = [],
          _8,
          _9,
          _10 = [],
          _12 = [],
          _13 = [],
          _13fs = [],
          _13vs = [],
          _13rw = [],
          _13rwn = [],
          _13rwl,
          _13v = [],
          _13p = [],
          _13dtl,
          _13dtp,
          _13df,
          _13fsd = [],
          _14 = [],
          _14x = [],
          _14y = [],
          _14z = [],
          _15,
          _16 = [],
          _16i0,
          _16s0 = [],
          _16i1,
          _16s1 = [],
          _17,
          _18 = [],
          _18i0,
          _18s0 = [],
          _18i1,
          _18s1 = [],
          _18i2,
          _18s2 = [];

      this.pe = [{
        xe: 1,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 2
      }];
      this.name = "Sparks";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._16 = [[[1, 0.987913, 0.968473, 0.94168, 0.907511, 0.86592, 0.816832, 0.760139, 0.695691, 0.623292, 0.542683, 0.453525, 0.355376, 0.24765, 0.129556, 0, 0]], [[1, 0.986913, 0.966618, 0.938898, 0.903549, 0.860389, 0.809266, 0.750071, 0.682749, 0.607317, 0.523887, 0.432682, 0.334064, 0.228563, 0.116897, 0, 0]]];
        Bd._18 = [[[1, 1, 1]], [[1, 0.7, 0.7]], [[1, 0.379741, 0.379741]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 0.25;
        vd.Gb = 1;
        vd.Jb = 40;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 0.25;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0.5 + Bd.Ld.rand() * (1.5 - 0.5);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 100 + Bd.Ld.rand() * (1000 - 100);
        ctx.randv3gen(_6, _5, Bd.Ld.rand);
        Xb._7 = [];
        ctx.T(Xb._7, _6);
        _8 = 5 + Bd.Ld.rand() * (15 - 5);
        _9 = 10 + Bd.Ld.rand() * (30 - 10);
        ctx.V(_10, _8, _9);
        Xb._11 = [];
        ctx.S(Xb._11, _10);
        ctx.T(Xb.Ab, Xb._4);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0.5 + Bd.Ld.rand() * (1.5 - 0.5);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 100 + Bd.Ld.rand() * (1000 - 100);
        ctx.randv3gen(_6, _5, Bd.Ld.rand);
        Xb._7 = [];
        ctx.T(Xb._7, _6);
        _8 = 5 + Bd.Ld.rand() * (15 - 5);
        _9 = 10 + Bd.Ld.rand() * (30 - 10);
        ctx.V(_10, _8, _9);
        Xb._11 = [];
        ctx.S(Xb._11, _10);
        ctx.T(Xb.Ab, Xb._4);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_12, 0, 100, 0);
        ctx.T(_13fs, _12);
        ctx.T(_13vs, [0, 0, 0]);
        _13dtl = Qb;
        ctx.T(_13v, Xb._7);
        ctx.T(_13p, Xb._4);

        while (_13dtl > 0.0001) {
          _13dtp = _13dtl;
          ctx.T(_13fsd, _13fs);
          ctx.g(_13rw, _13vs, _13v);
          _13rwl = ctx.P(_13rw);

          if (_13rwl > 0.0001) {
            _13rwl = Math.sqrt(_13rwl);
            ctx.w(_13rwn, _13rw, _13rwl);
            _13df = 0.01 * 1 * _13rwl;
            if (_13df * _13dtp > 0.2) _13dtp = 0.2 / _13df;
            ctx.c(_13fsd, _13fsd, ctx.v(_13rwn, _13rwl * _13df));
          }

          ctx.c(_13v, _13v, ctx.v(_13fsd, _13dtp));
          ctx.c(_13p, _13p, ctx.v(_13v, _13dtp));
          _13dtl -= _13dtp;
        }

        ctx.T(Xb._4, _13p);
        ctx.T(Xb._7, _13v);
        ctx.T(Xb.Ab, Xb._4);
        ctx.Q(_14z, [0, 0, 1]);
        ctx.I(_14x, Xb._7, _14z);
        ctx.Q(_14x, _14x);
        ctx.I(_14y, _14z, _14x);
        ctx.pb(_14, _14x, _14y, _14z);
        _15 = Xb._ / Xb._2;
        _16i0 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        ctx.V(_16s0, 0, (_16i0 - 0) * 15);
        _16i1 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        ctx.V(_16s1, 0, (_16i1 - 0) * 15);
        ctx.V(_16, Db.nb(Bd._16[0][_16s0[0]], _16s0[1]), Db.nb(Bd._16[1][_16s1[0]], _16s1[1]));
        _17 = ctx.j(Xb._11, _16);
        _18i0 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        ctx.V(_18s0, 0, (_18i0 - 0) * 1);
        _18i1 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        ctx.V(_18s1, 0, (_18i1 - 0) * 1);
        _18i2 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        ctx.V(_18s2, 0, (_18i2 - 0) * 1);
        ctx.W(_18, Db.nb(Bd._18[0][_18s0[0]], _18s0[1]), Db.nb(Bd._18[1][_18s1[0]], _18s1[1]), Db.nb(Bd._18[2][_18s2[0]], _18s2[1]));
        ctx.S(Xb.Pd, [0.5, 0.5]);
        ctx.U(Xb.Mc, _14);
        ctx.S(Xb.Nd, _17);
        ctx.T(Xb.gf, _18);
        Xb.Od = 1;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._2) return true;
        return false;
      };
    }

    function Emitter_Blast_Core() {
      var _1 = [],
          _5,
          _4,
          _6,
          _7,
          _7i0,
          _7s0 = [];

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 3
      }];
      this.name = "Blast_Core";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._7 = [[[0, 0.252391, 0.413907, 0.536299, 0.633869, 0.713413, 0.778892, 0.832889, 0.877221, 0.91323, 0.941945, 0.964184, 0.980605, 0.991755, 0.99809, 1, 1], [1, 0.994276, 0.979138, 0.955237, 0.923054, 0.882925, 0.835057, 0.779525, 0.716271, 0.645085, 0.565564, 0.477047, 0.378502, 0.268299, 0.143747, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 0.25;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 0.25;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        Xb._3 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        Xb._3 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(Xb.Ab, Xb._2);
        _5 = 200;
        _4 = 0.5;
        _6 = Xb._ / _4;
        _7i0 = _6 < 0 ? 0 : _6 > 1 ? 1 : _6;
        _7i0 < 0.2 ? ctx.V(_7s0, 0, (_7i0 - 0) * 75) : ctx.V(_7s0, 1, (_7i0 - 0.2) * 18.75);
        _7 = Db.nb(Bd._7[0][_7s0[0]], _7s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._3;
        ctx.V(Xb.Nd, _5, _5);
        ctx.T(Xb.gf, [1, 0.912, 0.713]);
        Xb.Od = _7;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _4 = 0.5;
        if (Xb._ > _4) return true;
        return false;
      };
    }

    function Emitter_Smoke() {
      var _1 = [],
          _3 = [],
          _5,
          _7,
          _9 = [],
          _10,
          _12,
          _11,
          _13,
          _14,
          _14i0,
          _14s0 = [];

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 4
      }];
      this.name = "Smoke";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._14 = [[[0, 0.00132173, 0.00435881, 0.00908884, 0.0154361, 0.023256, 0.0323214, 0.0423132, 0.0528225, 0.0633654, 0.073415, 0.0824432, 0.0899658, 0.0955805, 0.0989885, 0.1, 0.1], [0.1, 0.098408, 0.0943513, 0.0880255, 0.079805, 0.0702197, 0.059887, 0.0494209, 0.0393534, 0.0300894, 0.0219008, 0.0149435, 0.00928552, 0.00493396, 0.00185696, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 0.25;
        vd.Gb = 0.85;
        vd.Jb = 15;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 0.25;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.randv3gen(_1, 50, Bd.Ld.rand);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        ctx.randv3gen(_3, 20, Bd.Ld.rand);
        Xb._4 = [];
        ctx.T(Xb._4, _3);
        _5 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._6 = _5;
        _7 = -45 + Bd.Ld.rand() * (45 - -45);
        Xb._8 = _7;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.randv3gen(_1, 50, Bd.Ld.rand);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        ctx.randv3gen(_3, 20, Bd.Ld.rand);
        Xb._4 = [];
        ctx.T(Xb._4, _3);
        _5 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._6 = _5;
        _7 = -45 + Bd.Ld.rand() * (45 - -45);
        Xb._8 = _7;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(_9, Xb._4);
        ctx.u(_9, _9, Qb);
        ctx.c(_9, _9, Xb._2);
        ctx.T(Xb._2, _9);
        _10 = Xb._6 + Qb * Xb._8;
        Xb._6 = _10;
        ctx.T(Xb.Ab, Xb._2);
        _12 = 100;
        _11 = 3;
        _13 = Xb._ / _11;
        _14i0 = _13 < 0 ? 0 : _13 > 1 ? 1 : _13;
        _14i0 < 0.4 ? ctx.V(_14s0, 0, (_14i0 - 0) * 37.5) : ctx.V(_14s0, 1, (_14i0 - 0.4) * 25);
        _14 = Db.nb(Bd._14[0][_14s0[0]], _14s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._6;
        ctx.V(Xb.Nd, _12, _12);
        ctx.T(Xb.gf, [0.4, 0.4, 0.4]);
        Xb.Od = _14;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _11 = 3;
        if (Xb._ > _11) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 0;
      Ld.presimFrameTime = 0.1;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_Blast());
      Ld.pd(new Emitter_Shockwave());
      Ld.pd(new Emitter_Sparks());
      Ld.pd(new Emitter_Blast_Core());
      Ld.pd(new Emitter_Smoke());
    };

    this.nb = function (funcValues, je) {
      var indexInt = Math.floor(je);
      var nextInt = indexInt + 1;
      return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt);
    };
  }

  return Blast03;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXEJsYXN0MDMuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiTmV1dHJpbm9FZmZlY3QiLCJuYW1lc3BhY2UiLCJfX2xhc3RfXyIsInNlbGYiLCJCbGFzdDAzIiwiY3R4IiwiRGIiLCJuZSIsIkxkIiwiQmQiLCJ3ZSIsInBlIiwibGVuZ3RoIiwiTGMiLCJwcm90b3R5cGUiLCJFYyIsIkZjIiwieGUiLCJmZSIsIkFiIiwiWGIiLCJHYyIsImliIiwiTWQiLCJIYyIsIk1hdGgiLCJjb3MiLCJJYyIsInNpbiIsInllIiwiQWUiLCJOZCIsInplIiwidHJhbnNmb3JtIiwicSIsIk1jIiwiejIiLCJ4eSIsInd6IiwiUGMiLCJnZSIsInZjIiwiQmUiLCJvYyIsIk9kIiwiRGUiLCJmbG9vciIsIlFjIiwiUmMiLCJFZSIsInNsaWNlIiwiZGYiLCJhYnMiLCJlZiIsInNhdmUiLCJ0cmFuc2xhdGUiLCJQZCIsImdsb2JhbEFscGhhIiwiZ2YiLCJZZSIsIlRjIiwiWmUiLCJVYyIsImFmIiwiYmYiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJkcmF3SW1hZ2UiLCJpbWFnZSIsIngiLCJ5IiwiZmlsbFN0eWxlIiwiZmYiLCJmaWxsUmVjdCIsImNmIiwicmVzdG9yZSIsIkhkIiwibWF0ZXJpYWxzIiwibW9kZWwiLCJyZW5kZXJTdHlsZXMiLCJyZW5kZXJTdHlsZUluZGV4IiwibWF0ZXJpYWxJbmRleCIsInRleHR1cmVEZXNjcyIsInRleHR1cmVJbmRpY2VzIiwid2lkdGgiLCJoZWlnaHQiLCJTYyIsImtkIiwiYSIsImIiLCJWYyIsIldiIiwidGMiLCJzb3J0Iiwib2UiLCJ2ZXJ0ZXgiLCJwb3NpdGlvbiIsImNvbG9yIiwidGV4Q29vcmRzIiwicWUiLCJzZSIsInJlIiwidGUiLCJyZW5kZXJCdWZmZXIiLCJDZSIsInYwIiwidjEiLCJ2MiIsInYzIiwiRmUiLCJHZSIsInMiLCJjIiwiSGUiLCJJZSIsIkplIiwiS2UiLCJ1IiwicmdiIiwidiIsIlBlIiwiUWUiLCJSZSIsIlNlIiwiV2UiLCJ0ZXh0dXJlc1JlbWFwIiwiVWUiLCJWZSIsImJlZm9yZVF1YWQiLCJwdXNoVmVydGV4IiwiX19sYXN0UmVuZGVyQ2FsbCIsIlJlbmRlckNhbGwiLCJsYXN0UmVuZGVyQ2FsbCIsIm51bUluZGljZXMiLCJwdXNoUmVuZGVyQ2FsbCIsInN0YXJ0SW5kZXgiLCJ1ZSIsImZvckVhY2giLCJkZXB0aCIsIkgiLCJsZCIsInZlIiwiVmIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiS2IiLCJMYiIsIk1iIiwiTmIiLCJPYiIsIkpkIiwiSWQiLCJRYiIsIlBiIiwiUmIiLCJzeXN0ZW1UaW1lIiwiU2IiLCJpYyIsInpiIiwiVGIiLCJVYiIsImRpc2FjdGl2YXRlIiwiYWIiLCJCYiIsInNsZXJwcSIsInByZXZSb3RhdGlvbiIsIkpiIiwic2MiLCJwb3AiLCJ1bnNoaWZ0IiwiWWIiLCJaYiIsIlQiLCJVIiwiYWMiLCJiYyIsImNjIiwiZGMiLCJzeXN0ZW1UaW1lQmVmb3JlRnJhbWUiLCJzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSIsImVjIiwiTyIsImgiLCJmYyIsInJkIiwiaGMiLCJqYyIsImtjIiwiWCIsIm1jIiwiS2MiLCJuYyIsImkiLCJwYyIsIkFkIiwic2QiLCJmZCIsImdkIiwicWMiLCJyYyIsImplIiwidWMiLCJtZCIsIm5kIiwicHVzaCIsInhjIiwid2MiLCJhY3RpdmF0ZSIsInljIiwiR2QiLCJFZCIsInpjIiwiQWMiLCJDYyIsIldjIiwiY29uc3RydWN0IiwiWWMiLCJhZCIsImRkIiwidmQiLCJlZCIsInVkIiwiamQiLCJpZCIsImhkIiwid2QiLCJaYyIsInBhdXNlZF8iLCJnZW5lcmF0b3JzUGF1c2VkXyIsIlciLCJhcHBseSIsIlRkIiwic2hpZnQiLCJnIiwidyIsInhkIiwicmVhZHkiLCJhY3RpdmF0ZWQiLCJzcGxpY2UiLCJwYXVzZSIsInVucGF1c2UiLCJwYXVzZWQiLCJwYXVzZUdlbmVyYXRvcnMiLCJ1bnBhdXNlR2VuZXJhdG9ycyIsImdlbmVyYXRvcnNQYXVzZWQiLCJnZXROdW1QYXJ0aWNsZXMiLCJrZSIsIkNiIiwiX2luaXQiLCJvcHRpb25zIiwib2QiLCJwZCIsImNvbmNhdCIsIm5hbWUiLCJDZCIsInFkIiwiX3ByZXNpbU5lZWRlZCIsInBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMiLCJwYXVzZUFsbEVtaXR0ZXJzIiwiemVyb1VwZGF0ZSIsInVwZGF0ZUZpeGVkIiwiVWQiLCJwcmVzaW1GcmFtZVRpbWUiLCJyZXN0YXJ0Iiwicm90YXRpb24iLCJ1cGRhdGUiLCJkdCIsIkRkIiwidXBkYXRlRmxleCIsImZyYW1lVGltZSIsInVwZGF0ZWRUaW1lIiwiZnJhbWVSb3RhdGlvbiIsImVxdWFsdjNfIiwiZXF1YWxxXyIsInJlc2V0UG9zaXRpb24iLCJzZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMiLCJ2YWx1ZSIsInByb3BOYW1lIiwiQXJyYXkiLCJTIiwidW5wYXVzZUFsbEVtaXR0ZXJzIiwiYXJlQWxsRW1pdHRlcnNQYXVzZWQiLCJ1bnBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMiLCJhcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCIsIm51bVBhcnRpY2xlcyIsImxlIiwiY2FsbCIsImluZGljZXMiLCJ2ZXJEaXNwIiwiWGUiLCJpbml0aWFsaXplIiwiX19udW1JbmRpY2VzIiwiZmlsbEdlb21ldHJ5QnVmZmVycyIsImNhbWVyYVJpZ2h0IiwiY2FtZXJhVXAiLCJjYW1lcmFEaXIiLCJjbGVhbnVwIiwibWUiLCJkcmF3IiwiY29udGV4dCIsImNhbWVyYSIsImNyZWF0ZVdHTEluc3RhbmNlIiwiY3JlYXRlQ2FudmFzMkRJbnN0YW5jZSIsInRleHR1cmVzIiwiRW1pdHRlcl9CbGFzdCIsIl8iLCJfaTAiLCJfczAiLCJfMiIsIl80IiwiXzYiLCJfOCIsIl85IiwiXzlpMCIsIl85czAiLCJfOWkxIiwiXzlzMSIsIl85aTIiLCJfOXMyIiwiXzExIiwiXzEzIiwiXzEyIiwiXzE0IiwiXzE1IiwiXzE1aTAiLCJfMTVzMCIsIl8xNiIsIl8xNmkwIiwiXzE2czAiLCJWIiwibmIiLCJfMSIsIl8zIiwicmFuZHYzZ2VuIiwicmFuZCIsIl81IiwiXzciLCJfMTAiLCJFbWl0dGVyX1Nob2Nrd2F2ZSIsIl83aTAiLCJfN3MwIiwiRW1pdHRlcl9TcGFya3MiLCJfMTNmcyIsIl8xM3ZzIiwiXzEzcnciLCJfMTNyd24iLCJfMTNyd2wiLCJfMTN2IiwiXzEzcCIsIl8xM2R0bCIsIl8xM2R0cCIsIl8xM2RmIiwiXzEzZnNkIiwiXzE0eCIsIl8xNHkiLCJfMTR6IiwiXzE2aTEiLCJfMTZzMSIsIl8xNyIsIl8xOCIsIl8xOGkwIiwiXzE4czAiLCJfMThpMSIsIl8xOHMxIiwiXzE4aTIiLCJfMThzMiIsIlAiLCJzcXJ0IiwiUSIsIkkiLCJwYiIsImoiLCJFbWl0dGVyX0JsYXN0X0NvcmUiLCJFbWl0dGVyX1Ntb2tlIiwiXzE0aTAiLCJfMTRzMCIsInJhbmRvbSIsImZ1bmNWYWx1ZXMiLCJpbmRleEludCIsIm5leHRJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQyxXQUFVQSxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUN0QixNQUFJLE9BQU9DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0MsTUFBUCxLQUFrQixXQUFyRCxFQUFrRTtBQUM5REEsSUFBQUEsTUFBTSxDQUFDRCxPQUFQLEdBQWlCRCxPQUFPLEVBQXhCO0FBQ0gsR0FGRCxNQUVPLElBQUksT0FBT0csTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsTUFBTSxDQUFDQyxHQUEzQyxFQUFnRDtBQUNuREQsSUFBQUEsTUFBTSxDQUFDLENBQUMsU0FBRCxDQUFELEVBQWMsVUFBVUYsT0FBVixFQUFtQjtBQUNuQyxPQUFDRixJQUFJLENBQUNNLGNBQUwsR0FBc0JKLE9BQXZCLEVBQWdDLFNBQWhDLElBQTZDRCxPQUFPLEVBQXBEO0FBQ0gsS0FGSyxDQUFO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QSxLQVZEOztBQVdDLFNBQUszQyxFQUFMLEdBQVUsVUFBUytDLFVBQVQsRUFBcUJqTCxFQUFyQixFQUF5QjtBQUFLLFVBQUlrTCxRQUFRLEdBQUduVyxJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSW1MLE9BQU8sR0FBR0QsUUFBUSxHQUFHLENBQXpCO0FBQStCLGFBQU92WCxHQUFHLENBQUN5TCxDQUFKLENBQU02TCxVQUFVLENBQUNDLFFBQUQsQ0FBaEIsRUFBNEJELFVBQVUsQ0FBQ0UsT0FBRCxDQUF0QyxFQUFpRG5MLEVBQUUsR0FBR2tMLFFBQXRELENBQVA7QUFBMkUsS0FBcEw7QUFHRDs7QUFFRCxTQUFPeFgsT0FBUDtBQUNDLENBbHJEQSxDQUFEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyA5Y2JmZTUyYS0xNTQyLTRhNzMtOWQxNS03ODgxYmU1ODVlODlcclxuXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgICAgICAgICAocm9vdC5OZXV0cmlub0VmZmVjdCA9IGV4cG9ydHMpWydCbGFzdDAzJ10gPSBmYWN0b3J5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAocm9vdC5OZXV0cmlub0VmZmVjdCB8fCAocm9vdC5OZXV0cmlub0VmZmVjdCA9IHt9KSk7XHJcbiAgICAgICAgbmFtZXNwYWNlLl9fbGFzdF9fID0gbmFtZXNwYWNlWydCbGFzdDAzJ10gPSBmYWN0b3J5KCk7XHJcbiAgICB9XHJcbn0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbmZ1bmN0aW9uIEJsYXN0MDMoY3R4KSB7XHJcblx0dmFyIERiID0gdGhpcztcclxuXHJcblx0dmFyIG5lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblxyXG5cdFx0XHR0aGlzLkxjID0gW25lLnByb3RvdHlwZS5FYyxcclxuXHRcdFx0XHRuZS5wcm90b3R5cGUuRmNdW3RoaXMud2UueGVdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdG5lLnByb3RvdHlwZSA9IHtcclxuXHRcdEVjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgR2MgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHR2YXIgSGMgPSBNYXRoLmNvcyhHYyk7XHJcblx0XHRcdHZhciBJYyA9IE1hdGguc2luKEdjKTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybSh5ZSAqIEhjLCB5ZSAqIEljLCB6ZSAqIC1JYywgemUgKiBIYywgQWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0RmM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oXHJcblx0XHRcdFx0eWUgKiAoMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MiksXHJcblx0XHRcdFx0eWUgKiAoeHkgKyB3eiksXHJcblx0XHRcdFx0emUgKiAod3ogLSB4eSksXHJcblx0XHRcdFx0emUgKiAoMi4wICogcVswXSAqIHFbMF0gKyB6MiAtIDEuMCksXHJcblx0XHRcdFx0QWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0UGM6IGZ1bmN0aW9uIChmZSwgWGIsIGdlKSB7XHJcblx0XHRcdFhiLnZjKGZlLCAtMSwgZ2UpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuQmUgIT0gbnVsbCAmJiAhWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoWGIuT2QgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBBYiA9IFhiLkFiLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBOZCA9IFhiLk5kLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdGlmICghZ2UgfHwgZ2UuLyoqL3RyYW5zZm9ybShBYiwgTmQpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBkZiA9IE1hdGguYWJzKE5kWzBdKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZWYgPSBNYXRoLmFicyhOZFsxXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkZiA+IDAuMDAxICYmIGVmID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLnNhdmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuTGMoZmUsIEFiLCBYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUudHJhbnNsYXRlKC1kZiAqIFhiLlBkWzBdLCAtZWYgKiAoMSAtIFhiLlBkWzFdKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5nbG9iYWxBbHBoYSAqPSBYYi5PZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoWGIuZ2ZbMF0gPCAwLjk5OSB8fCBYYi5nZlsxXSA8IDAuOTk5IHx8IFhiLmdmWzJdIDwgMC45OTkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRmID49IDEgJiYgZWYgPj0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBZZSA9IGRmIDwgdGhpcy5UYyA/IGRmIDogdGhpcy5UYztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWmUgPSBlZiA8IHRoaXMuVWMgPyBlZiA6IHRoaXMuVWM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5hZihZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJjb3B5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibXVsdGlwbHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFN0eWxlID0gY3R4LmZmKFhiLmdmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFJlY3QoMCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tYXRvcFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZShjdHguY2YsIDAsIDAsIFllLCBaZSwgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIudmMoZmUsIDEsIGdlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0SGQ6IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdFx0ZmUuc2F2ZSgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHRcdFx0XHRmZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB0aGlzLkxkLm1hdGVyaWFsc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS5tYXRlcmlhbEluZGV4XTtcclxuXHRcdFx0XHR0aGlzLkJlID0gdGhpcy5MZC50ZXh0dXJlRGVzY3NbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuQmUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5CZSkge1xyXG5cdFx0XHRcdHRoaXMuVGMgPSB0aGlzLkJlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHR0aGlzLlVjID0gdGhpcy5CZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBrZChhLCBiKSB7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPiBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPCBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGtkKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgb2UgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblxyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnZlcnRleCA9IFtcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9XTtcclxuXHR9XHJcblxyXG5cdG9lLnByb3RvdHlwZSA9IHtcclxuXHRcdHFlOiBmdW5jdGlvbiAoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRYYi5DZSgtMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICghWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgdjAgPSB0aGlzLnZlcnRleFswXTtcclxuXHRcdFx0XHRcdHZhciB2MSA9IHRoaXMudmVydGV4WzFdO1xyXG5cdFx0XHRcdFx0dmFyIHYyID0gdGhpcy52ZXJ0ZXhbMl07XHJcblx0XHRcdFx0XHR2YXIgdjMgPSB0aGlzLnZlcnRleFszXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgRmUgPSBbXSwgR2UgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy53ZS54ZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHZhciBhID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0XHRcdFx0dmFyIHMgPSAtTWF0aC5zaW4oYSk7XHJcblx0XHRcdFx0XHRcdHZhciBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IHNlWzBdICogYyArIHJlWzBdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSBzZVsxXSAqIGMgKyByZVsxXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gc2VbMl0gKiBjICsgcmVbMl0gKiBzO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSAtc2VbMF0gKiBzICsgcmVbMF0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IC1zZVsxXSAqIHMgKyByZVsxXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gLXNlWzJdICogcyArIHJlWzJdICogYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHRcdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0XHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdFx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSAxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHh5ICsgd3o7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gMi4wICogcVswXSAqIHFbMl0gLSAyLjAgKiBxWzNdICogcVsxXTtcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0geHkgLSB3ejtcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAxLjAgLSAyLjAgKiBxWzBdICogcVswXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IDIuMCAqIHFbMV0gKiBxWzJdICsgMi4wICogcVszXSAqIHFbMF07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIEhlID0gW10sIEllID0gW10sIEplID0gW10sIEtlID0gW107XHJcblx0XHRcdFx0XHRjdHgudShIZSwgRmUsIC1YYi5OZFswXSAqIFhiLlBkWzBdKTtcclxuXHRcdFx0XHRcdGN0eC51KEllLCBGZSwgWGIuTmRbMF0gKiAoMS4wIC0gWGIuUGRbMF0pKTtcclxuXHRcdFx0XHRcdGN0eC51KEplLCBHZSwgLVhiLk5kWzFdICogWGIuUGRbMV0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoS2UsIEdlLCBYYi5OZFsxXSAqICgxLjAgLSBYYi5QZFsxXSkpO1xyXG5cclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgSGUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgdjAuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIEhlLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIHYxLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCBJZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCB2Mi4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgSWUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgdjMuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgcmdiID0gY3R4LnYoWGIuZ2YsIDI1NSk7XHJcblx0XHRcdFx0XHRcdHYwLi8qKi9jb2xvciA9IHYxLi8qKi9jb2xvciA9IHYyLi8qKi9jb2xvciA9IHYzLi8qKi9jb2xvciA9IFtyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdLCBYYi5PZCAqIDI1NV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBQZSwgUWUsIFJlLCBTZTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBXZSA9IHRoaXMuTGQudGV4dHVyZXNSZW1hcFt0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdFx0XHRcdGlmIChXZSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IFdlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSBXZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBXZS54ICsgRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9IChXZS55ICsgV2UuaGVpZ2h0IC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSAxLjAgLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IDEuMCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoMS4wIC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0djAuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgU2VdO1xyXG5cdFx0XHRcdFx0XHR2MS4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYyLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djMuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgU2VdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCh0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYwKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYxKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYyKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIXJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKDAsIDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGFzdFJlbmRlckNhbGwgPSByZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsYXN0UmVuZGVyQ2FsbC5yZW5kZXJTdHlsZUluZGV4ID09IHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMgKz0gNjtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFJlbmRlckNhbGwobGFzdFJlbmRlckNhbGwpO1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwuc3RhcnRJbmRleCArIGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMsXHJcblx0XHRcdFx0XHRcdFx0XHQ2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi5DZSgxLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1ZTogZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdFhiLmRlcHRoID0gY3R4LkgodGUsIFhiLkFiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA8IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoID4gYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGxkID0gZnVuY3Rpb24gKExkLCB3ZSwgdmUpIHtcclxuXHRcdHZhciBWYiA9IHRoaXM7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLndlID0gd2U7XHJcblxyXG5cdFx0Ly8gRWJcclxuXHJcblx0XHRmdW5jdGlvbiBFYigpIHtcclxuXHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLkhiID0gbnVsbDtcclxuXHRcdFx0dGhpcy5JYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuT2IgPSB0aGlzLkdiO1xyXG5cdFx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RWIucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIFJiID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgU2IgPSBRYjtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy56YiA+IDAuMDAwMDAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5PYiArIFFiICogdGhpcy56YjtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPj0gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBVYiA9IHRoaXMuemIgPCAwLjAwMSA/IDAuMCA6ICgxLjAgLSB0aGlzLk9iKSAvIHRoaXMuemI7XHJcblx0XHRcdFx0XHRcdFNiIC09IFViO1xyXG5cdFx0XHRcdFx0XHRSYiArPSBVYjtcclxuXHRcdFx0XHRcdFx0c3lzdGVtVGltZSArPSBVYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkhiICE9IG51bGwgJiYgUmIgPiB0aGlzLkhiKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBzeXN0ZW1UaW1lO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoVmIuQWIsIEFiLCBWYi5CYiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoTWMgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5zbGVycHEoVmIuTWMsIE1jLCBWYi5wcmV2Um90YXRpb24sIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFNiKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLk9iID0gMC4wO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5JYiAhPSBudWxsICYmICsrdGhpcy5GYiA+PSB0aGlzLkliKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuT2IgPSBUYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0UmIgKz0gU2I7XHJcblx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWNcclxuXHJcblx0XHRmdW5jdGlvbiBhYygpIHtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuYmMgPSB0aGlzLkdiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIGNjID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIGRjID0gY2MgKyBRYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUJlZm9yZUZyYW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVBZnRlckZyYW1lID0gc3lzdGVtVGltZUJlZm9yZUZyYW1lICsgUWI7XHJcblx0XHRcdFx0dmFyIGVjID0gQWIgPyBjdHguTyhjdHguaChBYiwgVmIuQmIpKSA6IDA7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKGVjID4gMC4wMDAwMDEpIHtcclxuXHRcdFx0XHRcdHZhciBmYyA9IGVjIC8gdGhpcy5yZDtcclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuYmMgKyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgaGMgPSBmYyA8IDAuMDAxID9cclxuXHRcdFx0XHRcdFx0MS4wIC0gdGhpcy5iYyA6ICgxLjAgLSB0aGlzLmJjKSAvIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBqYyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIga2MgPSBjYyArIGhjICogUWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKGpjLCBWYi5CYiwgQWIsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0ga2M7XHJcblx0XHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBqYyk7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gY3R4Llgoc3lzdGVtVGltZUJlZm9yZUZyYW1lLCBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFFiICogKDEuMCAtIGhjKSk7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aGMgKz0gMS4wIC8gZmM7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLmJjID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRWYi5SYiA9IGRjO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtY1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1jKCkge1xyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuUGQgPSBbXTtcclxuXHRcdFx0dGhpcy5OZCA9IFtdO1xyXG5cdFx0XHR0aGlzLmdmID0gW107XHJcblx0XHRcdHRoaXMuS2MgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRtYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdG5jOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblx0XHRcdFx0XHRwYy5CZC5KZCh0aGlzLkFiLCBudWxsKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WWI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5mZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRaYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmdkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRWYi53ZS5xYyhRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHRoaXMucmMoUWIpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cGM6IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLktjW2plXS5CZDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJjOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuSWQoUWIsIHRoaXMuQWIsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVjOiBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHRcdFx0dGhpcy5LYy5wdXNoKHtcclxuXHRcdFx0XHRcdEJkOiBuZXcgbGQoTGQsIG1kLCB2ZSksXHJcblx0XHRcdFx0XHRBZDogbmRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHZjOiBmdW5jdGlvbiAoZmUsIHhjLCBnZSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLkhkKGZlLCBnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Q2U6IGZ1bmN0aW9uICh4Yywgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR3YzogZnVuY3Rpb24gKGZlKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IHRydWU7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZCkge1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5hY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5JZCgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR5YzogZnVuY3Rpb24gKEdkKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLkVkKEdkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB6Y1xyXG5cclxuXHRcdGZ1bmN0aW9uIHpjKCkge1xyXG5cdFx0fVxyXG5cclxuXHRcdHpjLnByb3RvdHlwZS5BYyA9IGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRyZXR1cm4gVmIud2UuQ2MoVmIsIFhiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxkIEFkXHJcblxyXG5cdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0dGhpcy5CYiA9IFtdO1xyXG5cdFx0dGhpcy5NYyA9IFtdO1xyXG5cdFx0dGhpcy5wcmV2Um90YXRpb24gPSBbXTtcclxuXHRcdHRoaXMudGMgPSBbXTtcclxuXHRcdHRoaXMuc2MgPSBbXTtcclxuXHRcdHRoaXMuV2MgPSBuZXcgemMoKTtcclxuXHRcdHRoaXMuY29uc3RydWN0ID0gbmV3IHZlKHRoaXMuTGQsIHRoaXMpO1xyXG5cdFx0dGhpcy5ZYyA9IFtdO1xyXG5cdFx0dGhpcy5hZCA9IFtdO1xyXG5cclxuXHRcdHRoaXMuZGQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgRWIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IGFjKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZS51ZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLmpkOyArK1diKSB7XHJcblx0XHRcdHZhciBYYiA9IG5ldyBtYygpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IHRoaXMuWWMubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdFx0dmFyIGhkID0gdGhpcy5ZY1tpZF07XHJcblx0XHRcdFx0WGIudWMoaGQuRGIsIGhkLkFkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zYy5wdXNoKFhiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0dGhpcy53ZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0XHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkpkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cclxuXHRcdHRoaXMuc2MucHVzaC5hcHBseSh0aGlzLnNjLCB0aGlzLnRjKTtcclxuXHRcdHRoaXMudGMubGVuZ3RoID0gMDtcclxuXHJcblx0XHR0aGlzLnZkLkpkKCk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSWQgPSBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdXNlZF8pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuVGQoQWIsIE1jKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0aWYgKFFiID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0dmFyIHNoaWZ0ID0gW107XHJcblx0XHRcdFx0Y3R4Lmcoc2hpZnQsIEFiLCB0aGlzLkJiKTtcclxuXHRcdFx0XHRjdHguVCh0aGlzLmFkLCBzaGlmdCk7XHJcblx0XHRcdFx0Y3R4LncodGhpcy5hZCwgdGhpcy5hZCwgUWIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGljO1xyXG5cclxuXHRcdGlmICh0aGlzLlpjICYmICF0aGlzLmdlbmVyYXRvcnNQYXVzZWRfKSB7XHJcblx0XHRcdGljID0gdGhpcy52ZC5JZChRYiwgQWIsIE1jKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cclxuXHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHJcblx0XHRcdGljID0gMDtcclxuXHRcdFx0dGhpcy5SYiArPSBRYjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IGljOyBXYiA8IHRoaXMudGMubGVuZ3RoOykge1xyXG5cdFx0XHR2YXIgWGIgPSB0aGlzLnRjW1diXTtcclxuXHJcblx0XHRcdGlmICghWGIub2MpIHtcclxuXHRcdFx0XHRYYi5JZChRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLldjLkFjKHRoaXMudGNbV2JdKSkge1xyXG5cdFx0XHRcdFx0WGIud2MoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRYYi5yYyhRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQrK1diO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGxkLnByb3RvdHlwZS54ZCA9IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0dmFyIFhiID0gdGhpcy50Y1tqZV07XHJcblxyXG5cdFx0dmFyIHJlYWR5ID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgWGIuS2MubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdHZhciBCZCA9IFhiLktjW2lkXS5CZDtcclxuXHJcblx0XHRcdGlmIChCZC5hY3RpdmF0ZWQoKSB8fCBCZC50Yy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0cmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChyZWFkeSkge1xyXG5cdFx0XHR0aGlzLnNjLnB1c2godGhpcy50Y1tqZV0pO1xyXG5cdFx0XHR0aGlzLnRjLnNwbGljZShqZSwgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5IZCA9IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LkhkKGZlLCBnZSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWUgPSBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLlRkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKSB7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVjID0gZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0dGhpcy5ZYy5wdXNoKHsgRGI6IG1kLCBBZDogbmQgfSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dlbmVyYXRvcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0b3JzUGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmRpc2FjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLlpjO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50Yy5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHR2YXIga2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgQ2IgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgdmUsIG9wdGlvbnMpIHtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwgPSB3ZTtcclxuXHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5NYyA9IFtdO1xyXG5cclxuXHRcdFx0Ly8ga2UgQWRcclxuXHJcblx0XHRcdHRoaXMub2QgPSBbXTtcclxuXHJcblx0XHRcdHRoaXMucGQgPSBmdW5jdGlvbiAobWQpIHtcclxuXHRcdFx0XHR2YXIgQmQgPSBuZXcgbGQodGhpcywgbWQsIHZlKTtcclxuXHRcdFx0XHRCZC5OYih0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdFx0XHR0aGlzW1wiX1wiLmNvbmNhdChtZC5uYW1lKV0gPSBCZDtcclxuXHRcdFx0XHR0aGlzLm9kLnB1c2goQmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0XHRcdHRoaXMuQ2QgPSAwLjA7XHJcblx0XHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5xZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmdlbmVyYXRvcnNQYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUZpeGVkKHRoaXMuVWQsIEFiLCBNYywgdGhpcy5wcmVzaW1GcmFtZVRpbWUpO1xyXG5cdFx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3Jlc3RhcnQgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblxyXG5cdFx0dGhpcy5OYigvKiovcG9zaXRpb24gPyAvKiovcG9zaXRpb24gOiB0aGlzLkFiLCAvKiovcm90YXRpb24gPyAvKiovcm90YXRpb24gOiB0aGlzLk1jKTtcclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSmQodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdlbmVyYXRvcnNQYXVzZWQpIHtcclxuXHRcdFx0dGhpcy4vKiovcGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMucGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlQWxsRW1pdHRlcnMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUZpeGVkKHRoaXMuVWQsIHRoaXMuQWIsIHRoaXMuTWMsIHRoaXMucHJlc2ltRnJhbWVUaW1lKTtcclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuemVyb1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLklkKDAsIHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91cGRhdGUgPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0aWYgKHRoaXMuRGQgPiAwLjApXHJcblx0XHRcdHRoaXMudXBkYXRlRml4ZWQoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgdGhpcy5EZCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudXBkYXRlRmxleCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS51cGRhdGVGaXhlZCA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovZnJhbWVUaW1lKSB7XHJcblx0XHR2YXIgdXBkYXRlZFRpbWUgPSAwLjA7XHJcblx0XHR2YXIgaGMgPSBbXTtcclxuXHRcdGN0eC5UKGhjLCB0aGlzLkFiKTtcclxuXHRcdHZhciBmcmFtZVJvdGF0aW9uID0gW107XHJcblx0XHRjdHguVShmcmFtZVJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uICYmIGN0eC5lcXVhbHYzXygvKiovcG9zaXRpb24sIHRoaXMuQWIpKVxyXG5cdFx0XHQvKiovcG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24gJiYgY3R4LmVxdWFscV8oLyoqL3JvdGF0aW9uLCB0aGlzLk1jKSlcclxuXHRcdFx0LyoqL3JvdGF0aW9uID0gbnVsbDtcclxuXHJcblx0XHR3aGlsZSAoKC8qKi9kdCAtIHVwZGF0ZWRUaW1lKSArIHRoaXMuQ2QgPj0gLyoqL2ZyYW1lVGltZSkge1xyXG5cdFx0XHR2YXIgY2MgPSB0aGlzLlJiO1xyXG5cclxuXHRcdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0XHRjdHguYWIoaGMsIHRoaXMuQWIsIC8qKi9wb3NpdGlvbiwgdXBkYXRlZFRpbWUgLyAvKiovZHQpO1xyXG5cclxuXHRcdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0XHRjdHguc2xlcnBxKGZyYW1lUm90YXRpb24sIHRoaXMuTWMsIC8qKi9yb3RhdGlvbiwgdXBkYXRlZFRpbWUgLyAvKiovZHQpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0dGhpcy5vZFtpXS5JZCgvKiovZnJhbWVUaW1lLCBoYywgZnJhbWVSb3RhdGlvbik7XHJcblxyXG5cdFx0XHRcdHRoaXMuUmIgPSBjYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlZFRpbWUgKz0gLyoqL2ZyYW1lVGltZSAtIHRoaXMuQ2Q7XHJcblx0XHRcdHRoaXMuQ2QgPSAwLjA7XHJcblx0XHRcdHRoaXMuUmIgPSBjYyArIC8qKi9mcmFtZVRpbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cclxuXHRcdHRoaXMuQ2QgKz0gLyoqL2R0IC0gdXBkYXRlZFRpbWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUudXBkYXRlRmxleCA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHR2YXIgY2MgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLklkKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdFx0XHR0aGlzLlJiID0gY2M7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5SYiA9IGNjICsgLyoqL2R0O1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5UZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKC8qKi9uYW1lLCAvKiovdmFsdWUpIHtcclxuXHRcdHZhciBwcm9wTmFtZSA9IFwiX1wiLmNvbmNhdCgvKiovbmFtZSk7XHJcblxyXG5cdFx0aWYgKC8qKi92YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGlmICgvKiovdmFsdWUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5TKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5UKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV1bcHJvcE5hbWVdID0gLyoqL3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi9wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3ByZXNpbU5lZWRlZCkge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUZpeGVkKHRoaXMuVWQsIHRoaXMuQWIsIHRoaXMuTWMsIHRoaXMucHJlc2ltRnJhbWVUaW1lKTtcclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL2FyZUFsbEVtaXR0ZXJzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmICghdGhpcy5vZFtpXS5wYXVzZWQoKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi9wYXVzZUdlbmVyYXRvcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3VucGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL2FyZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmICghdGhpcy5vZFtpXS5nZW5lcmF0b3JzUGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL2dldE51bVBhcnRpY2xlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG51bVBhcnRpY2xlcyA9IDA7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdG51bVBhcnRpY2xlcyArPSB0aGlzLm9kW2ldLmdldE51bVBhcnRpY2xlcygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudW1QYXJ0aWNsZXM7XHJcblx0fVxyXG5cclxuXHJcblx0dmFyIGxlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCByZW5kZXJCdWZmZXIsIG9wdGlvbnMpIHtcclxuXHRcdFx0bGUucHJvdG90eXBlLl9pbml0LmNhbGwodGhpcywgd2UsIEFiLCBNYywgb2UsIG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0dGhpcy50ZXh0dXJlc1JlbWFwID0gW107XHJcblxyXG5cdFx0XHR2YXIgaW5kaWNlcyA9IFtdO1xyXG5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciB2ZXJEaXNwO1xyXG5cdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLi8qKi9tb2RlbC5YZTsgKytXYikge1xyXG5cdFx0XHRcdFx0dmVyRGlzcCA9IFdiICogNDtcclxuXHRcdFx0XHRcdGluZGljZXMucHVzaCh2ZXJEaXNwICsgMCwgdmVyRGlzcCArIDMsIHZlckRpc3AgKyAxLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDMsIHZlckRpc3AgKyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyID0gcmVuZGVyQnVmZmVyO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5pbml0aWFsaXplKHRoaXMuLyoqL21vZGVsLlhlICogNCwgWzJdLCBpbmRpY2VzLCB0aGlzLi8qKi9tb2RlbC5YZSk7XHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLl9fbnVtSW5kaWNlcyA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZS5wcm90b3R5cGUgPSBuZXcga2UoKTtcclxuXHJcblx0bGUucHJvdG90eXBlLi8qKi9maWxsR2VvbWV0cnlCdWZmZXJzID0gZnVuY3Rpb24gKC8qKi9jYW1lcmFSaWdodCwgLyoqL2NhbWVyYVVwLCAvKiovY2FtZXJhRGlyKSB7XHJcblx0XHR0aGlzLnJlbmRlckJ1ZmZlci5jbGVhbnVwKCk7XHJcblx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLm9kLmZvckVhY2goZnVuY3Rpb24gKEJkKSB7XHJcblx0XHRcdEJkLnVlKC8qKi9jYW1lcmFSaWdodCwgLyoqL2NhbWVyYVVwLCAvKiovY2FtZXJhRGlyLCB0aGlzLnJlbmRlckJ1ZmZlcik7XHJcblx0XHR9LCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbClcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIucHVzaFJlbmRlckNhbGwodGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCk7XHJcblx0fVxyXG5cclxuXHR2YXIgbWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIG9wdGlvbnMpIHtcclxuXHRcdFx0bWUucHJvdG90eXBlLl9pbml0LmNhbGwodGhpcywgd2UsIEFiLCBNYywgbmUsIG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0dGhpcy5tYXRlcmlhbHMgPSBbXTtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwubWF0ZXJpYWxzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdFx0dGhpcy5tYXRlcmlhbHMucHVzaChbJ3NvdXJjZS1vdmVyJywgJ2xpZ2h0ZXInLCAnbXVsdGlwbHknXVt2YWx1ZV0pO1xyXG5cdFx0XHR9LCB0aGlzKTtcclxuXHJcblx0XHRcdHRoaXMuLyoqL3RleHR1cmVEZXNjcyA9IFtdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bWUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdG1lLnByb3RvdHlwZS4vKiovZHJhdyA9IGZ1bmN0aW9uICgvKiovY29udGV4dCwgLyoqL2NhbWVyYSkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSGQoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5jcmVhdGVXR0xJbnN0YW5jZSA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL3JlbmRlckJ1ZmZlciwgLyoqL29wdGlvbnMpIHtcclxuXHRcdHZhciBMZCA9IG5ldyBsZSgpO1xyXG5cdFx0TGQuX2luaXQodGhpcywgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zIHx8IHt9KTtcclxuXHRcdHJldHVybiBMZDtcclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlQ2FudmFzMkRJbnN0YW5jZSA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMpIHtcclxuXHRcdHZhciBMZCA9IG5ldyBtZSgpO1xyXG5cdFx0TGQuX2luaXQodGhpcywgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zIHx8IHt9KTtcclxuXHRcdHJldHVybiBMZDtcclxuXHR9XHJcblx0dGhpcy50ZXh0dXJlcyA9IFsnRnJlZSBDb2xsZWN0aW9uIDEvQW5pbWF0ZWQvRmxhbWVBcmM4X3NtYWxsLmpwZycsJ0ZyZWUgQ29sbGVjdGlvbiAxL1N0YXRpYy9IYWxvcy9ibGFzdHdhdmUxLnBuZycsJ0ZyZWUgQ29sbGVjdGlvbiAxL1N0YXRpYy9HbG93cy9GbGFyZTIucG5nJywnRnJlZSBDb2xsZWN0aW9uIDEvU3RhdGljL0dsb3dzL0ZsYXJlMTAucG5nJywnRnJlZSBDb2xsZWN0aW9uIDEvU3RhdGljL1Ntb2tlL0Nsb3VkUGFydC5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFsxLDBdO1xyXG5cdHRoaXMucmVuZGVyU3R5bGVzID0gW3ttYXRlcmlhbEluZGV4OjAsdGV4dHVyZUluZGljZXM6WzBdfSx7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlsxXX0se21hdGVyaWFsSW5kZXg6MCx0ZXh0dXJlSW5kaWNlczpbMl19LHttYXRlcmlhbEluZGV4OjAsdGV4dHVyZUluZGljZXM6WzNdfSx7bWF0ZXJpYWxJbmRleDoxLHRleHR1cmVJbmRpY2VzOls0XX1dO1xyXG5cdHRoaXMuWGUgPSA1MDA7XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfQmxhc3QoKSB7XHJcblxyXG5cdFx0dmFyIF8sIF9pMCwgX3MwID0gW10sIF8yID0gW10sIF80ID0gW10sIF82LCBfOCwgXzkgPSBbXSwgXzlpMCwgXzlzMCA9IFtdLCBfOWkxLCBfOXMxID0gW10sIF85aTIsIF85czIgPSBbXSwgXzExPVtdLCBfMTMsIF8xMiwgXzE0LCBfMTUsIF8xNWkwLCBfMTVzMCA9IFtdLCBfMTYsIF8xNmkwLCBfMTZzMCA9IFtdO1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzo4LFNjOjgscmVuZGVyU3R5bGVJbmRleDowfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIkJsYXN0XCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLl8gPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzIwLDIwLDIwXSxcclxuXHRcdFx0XHRcdFswLDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl85ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFsxLDEsMV1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLjMxOTU5NSwwLjYzNTgxMSwwLjYzNTgxMV1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLjIwODEwOCwwLjIwODEwOCwwLjIwODEwOF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8xNSA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwxLDFdLFxyXG5cdFx0XHRcdFx0WzEsMSwxXSxcclxuXHRcdFx0XHRcdFsxLDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8xNiA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCw2NCw2NF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMTA7XHJcblx0XHRcdHZkLkdiID0gMTtcclxuXHRcdFx0dmQuSmIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUGIgPSBmdW5jdGlvbihRYiwgQmQsIHZkKSB7XHJcblx0XHRcdF9pMD0oQmQuTGQuUmI8MD8wOihCZC5MZC5SYj40PygwKygoQmQuTGQuUmItMCklNCkpOkJkLkxkLlJiKSk7XHJcblx0XHRcdF9pMDwwLjY/Y3R4LlYoX3MwLDAsKF9pMC0wKSoxLjY2NjY3KTpjdHguVihfczAsMSwoX2kwLTAuNikqMC4yOTQxMTgpO1xyXG5cdFx0XHRfID0gRGIubmIoQmQuX1swXVtfczBbMF1dLF9zMFsxXSk7XHJcblx0XHRcdHZkLnpiID0gXztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8xID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMiwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8zID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8zLCBCZC5BYiwgXzIpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF80LCAzMiwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl81ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl81LCBfNCk7XHJcblx0XHRcdF82ID0gMCArIEJkLkxkLnJhbmQoKSAqICgzNjAgLSAwKTtcclxuXHRcdFx0WGIuXzcgPSBfNjtcclxuXHRcdFx0XzggPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0XzlpMD0oXzg8MD8wOihfOD4xPzE6XzgpKTtcclxuXHRcdFx0Y3R4LlYoXzlzMCwwLChfOWkwLTApKjEpO1xyXG5cdFx0XHRfOWkxPShfODwwPzA6KF84PjE/MTpfOCkpO1xyXG5cdFx0XHRjdHguVihfOXMxLDAsKF85aTEtMCkqMSk7XHJcblx0XHRcdF85aTI9KF84PDA/MDooXzg+MT8xOl84KSk7XHJcblx0XHRcdGN0eC5WKF85czIsMCwoXzlpMi0wKSoxKTtcclxuXHRcdFx0Y3R4LlcoXzksIERiLm5iKEJkLl85WzBdW185czBbMF1dLF85czBbMV0pLERiLm5iKEJkLl85WzFdW185czFbMF1dLF85czFbMV0pLERiLm5iKEJkLl85WzJdW185czJbMF1dLF85czJbMV0pKTtcclxuXHRcdFx0WGIuXzEwID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl8xMCwgXzkpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2QgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXzEgPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8yLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzMgPSBbXTtcclxuXHRcdFx0Y3R4LmMoWGIuXzMsIEJkLkFiLCBfMik7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzQsIDMyLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzUgPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzUsIF80KTtcclxuXHRcdFx0XzYgPSAwICsgQmQuTGQucmFuZCgpICogKDM2MCAtIDApO1xyXG5cdFx0XHRYYi5fNyA9IF82O1xyXG5cdFx0XHRfOCA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRfOWkwPShfODwwPzA6KF84PjE/MTpfOCkpO1xyXG5cdFx0XHRjdHguVihfOXMwLDAsKF85aTAtMCkqMSk7XHJcblx0XHRcdF85aTE9KF84PDA/MDooXzg+MT8xOl84KSk7XHJcblx0XHRcdGN0eC5WKF85czEsMCwoXzlpMS0wKSoxKTtcclxuXHRcdFx0XzlpMj0oXzg8MD8wOihfOD4xPzE6XzgpKTtcclxuXHRcdFx0Y3R4LlYoXzlzMiwwLChfOWkyLTApKjEpO1xyXG5cdFx0XHRjdHguVyhfOSwgRGIubmIoQmQuXzlbMF1bXzlzMFswXV0sXzlzMFsxXSksRGIubmIoQmQuXzlbMV1bXzlzMVswXV0sXzlzMVsxXSksRGIubmIoQmQuXzlbMl1bXzlzMlswXV0sXzlzMlsxXSkpO1xyXG5cdFx0XHRYYi5fMTAgPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzEwLCBfOSk7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXzEgKz0gUWI7XHJcblx0XHRcdGN0eC5UKF8xMSwgWGIuXzUpO1xyXG5cdFx0XHRjdHgudShfMTEsIF8xMSwgUWIpO1xyXG5cdFx0XHRjdHguYyhfMTEsIF8xMSwgWGIuXzMpO1xyXG5cdFx0XHRjdHguVChYYi5fMywgXzExKTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8zKTtcclxuXHRcdFx0XzEzID0gMTIzO1xyXG5cdFx0XHRfMTIgPSAxLjI7XHJcblx0XHRcdF8xNCA9IChYYi5fMSAvIF8xMik7XHJcblx0XHRcdF8xNWkwPShfMTQ8MD8wOihfMTQ+MT8xOl8xNCkpO1xyXG5cdFx0XHRfMTVpMDwwLjg/XzE1aTA8MC4yP2N0eC5WKF8xNXMwLDAsKF8xNWkwLTApKjUpOmN0eC5WKF8xNXMwLDEsKF8xNWkwLTAuMikqMS42NjY2Nyk6Y3R4LlYoXzE1czAsMiwoXzE1aTAtMC44KSo1KTtcclxuXHRcdFx0XzE1ID0gRGIubmIoQmQuXzE1WzBdW18xNXMwWzBdXSxfMTVzMFsxXSk7XHJcblx0XHRcdF8xNmkwPShfMTQ8MD8wOihfMTQ+MT8oMCsoKF8xNC0wKSUxKSk6XzE0KSk7XHJcblx0XHRcdGN0eC5WKF8xNnMwLDAsKF8xNmkwLTApKjEpO1xyXG5cdFx0XHRfMTYgPSBEYi5uYihCZC5fMTZbMF1bXzE2czBbMF1dLF8xNnMwWzFdKTtcclxuXHRcdFx0Y3R4LlMoWGIuUGQsWzAuNSwwLjVdKTtcclxuXHRcdFx0WGIuTWQgPSBYYi5fNztcclxuXHRcdFx0Y3R4LlYoWGIuTmQsXzEzLF8xMyk7XHJcblx0XHRcdGN0eC5UKFhiLmdmLFhiLl8xMCk7XHJcblx0XHRcdFhiLk9kID0gXzE1O1xyXG5cdFx0XHRYYi5RYyA9IChfMTYgPCAwKSA/IDAgOiAoKF8xNiA+PSA2NCkgPyA2MyA6IF8xNik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzEyID0gMS4yO1xyXG5cdFx0XHRpZiAoWGIuXzEgPiBfMTIpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfU2hvY2t3YXZlKCkge1xyXG5cclxuXHRcdHZhciBfMSA9IFtdLCBfNSwgXzQsIF82LCBfNywgXzdpMCwgXzdzMCA9IFtdLCBfOCwgXzksIF85aTAsIF85czAgPSBbXTtcclxuXHRcdHRoaXMucGUgPSBbe3hlOjAsUmM6MSxTYzoxLHJlbmRlclN0eWxlSW5kZXg6MX1dO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJTaG9ja3dhdmVcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuZGQoKTtcclxuXHRcdFx0QmQuXzcgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsMC4wNDc5NTk1LDAuMTA4NTUsMC4xNzk5NTMsMC4yNTk5MTMsMC4zNDU4MzIsMC40MzQ5MDksMC41MjQzMTQsMC42MTEzNTEsMC42OTM1OTksMC43NjkwMDksMC44MzU5NDQsMC44OTMxODYsMC45Mzk5LDAuOTc1NTgxLDEsMV1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl85ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLjMsMCwwXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuamQgPSAxMDA7XHJcblx0XHRcdEJkLlZjID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLk1iID0gZnVuY3Rpb24odmQpIHtcclxuXHRcdFx0dmQuemIgPSAwLjI1O1xyXG5cdFx0XHR2ZC5HYiA9IDE7XHJcblx0XHRcdHZkLkpiID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDAuMjU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgXzEpO1xyXG5cdFx0XHRYYi5fMyA9IDA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgXzEpO1xyXG5cdFx0XHRYYi5fMyA9IDA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyArPSBRYjtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdFx0XzUgPSA4MDA7XHJcblx0XHRcdF80ID0gMC43O1xyXG5cdFx0XHRfNiA9IChYYi5fIC8gXzQpO1xyXG5cdFx0XHRfN2kwPShfNjwwPzA6KF82PjE/MTpfNikpO1xyXG5cdFx0XHRjdHguVihfN3MwLDAsKF83aTAtMCkqMTUpO1xyXG5cdFx0XHRfNyA9IERiLm5iKEJkLl83WzBdW183czBbMF1dLF83czBbMV0pO1xyXG5cdFx0XHRfOCA9IChfNSAqIF83KTtcclxuXHRcdFx0XzlpMD0oXzY8MD8wOihfNj4xPzE6XzYpKTtcclxuXHRcdFx0Y3R4LlYoXzlzMCwwLChfOWkwLTApKjEpO1xyXG5cdFx0XHRfOSA9IERiLm5iKEJkLl85WzBdW185czBbMF1dLF85czBbMV0pO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl8zO1xyXG5cdFx0XHRjdHguVihYYi5OZCxfOCxfOCk7XHJcblx0XHRcdGN0eC5UKFhiLmdmLFsxLDEsMV0pO1xyXG5cdFx0XHRYYi5PZCA9IF85O1xyXG5cdFx0XHRYYi5RYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzQgPSAwLjc7XHJcblx0XHRcdGlmIChYYi5fID4gXzQpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfU3BhcmtzKCkge1xyXG5cclxuXHRcdHZhciBfMSwgXzMgPSBbXSwgXzUsIF82ID0gW10sIF84LCBfOSwgXzEwID0gW10sIF8xMiA9IFtdLCBfMTM9W10sIF8xM2ZzPVtdLCBfMTN2cz1bXSwgXzEzcnc9W10sIF8xM3J3bj1bXSwgXzEzcndsLCBfMTN2PVtdLCBfMTNwPVtdLCBfMTNkdGwsIF8xM2R0cCwgXzEzZGYsIF8xM2ZzZD1bXSwgXzE0PVtdLCBfMTR4PVtdLCBfMTR5PVtdLCBfMTR6PVtdLCBfMTUsIF8xNiA9IFtdLCBfMTZpMCwgXzE2czAgPSBbXSwgXzE2aTEsIF8xNnMxID0gW10sIF8xNywgXzE4ID0gW10sIF8xOGkwLCBfMThzMCA9IFtdLCBfMThpMSwgXzE4czEgPSBbXSwgXzE4aTIsIF8xOHMyID0gW107XHJcblx0XHR0aGlzLnBlID0gW3t4ZToxLFJjOjEsU2M6MSxyZW5kZXJTdHlsZUluZGV4OjJ9XTtcclxuXHRcdHRoaXMubmFtZSA9IFwiU3BhcmtzXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl8xNiA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMSwwLjk4NzkxMywwLjk2ODQ3MywwLjk0MTY4LDAuOTA3NTExLDAuODY1OTIsMC44MTY4MzIsMC43NjAxMzksMC42OTU2OTEsMC42MjMyOTIsMC41NDI2ODMsMC40NTM1MjUsMC4zNTUzNzYsMC4yNDc2NSwwLjEyOTU1NiwwLDBdXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMSwwLjk4NjkxMywwLjk2NjYxOCwwLjkzODg5OCwwLjkwMzU0OSwwLjg2MDM4OSwwLjgwOTI2NiwwLjc1MDA3MSwwLjY4Mjc0OSwwLjYwNzMxNywwLjUyMzg4NywwLjQzMjY4MiwwLjMzNDA2NCwwLjIyODU2MywwLjExNjg5NywwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTggPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzEsMSwxXVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzEsMC43LDAuN11cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFsxLDAuMzc5NzQxLDAuMzc5NzQxXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuamQgPSAxMDA7XHJcblx0XHRcdEJkLlZjID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLk1iID0gZnVuY3Rpb24odmQpIHtcclxuXHRcdFx0dmQuemIgPSAwLjI1O1xyXG5cdFx0XHR2ZC5HYiA9IDE7XHJcblx0XHRcdHZkLkpiID0gNDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0dmQuemIgPSAwLjI1O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuTWM9W107XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdF8xID0gMC41ICsgQmQuTGQucmFuZCgpICogKDEuNSAtIDAuNSk7XHJcblx0XHRcdFhiLl8yID0gXzE7XHJcblx0XHRcdGN0eC5XKF8zLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzQgPSBbXTtcclxuXHRcdFx0Y3R4LmMoWGIuXzQsIEJkLkFiLCBfMyk7XHJcblx0XHRcdF81ID0gMTAwICsgQmQuTGQucmFuZCgpICogKDEwMDAgLSAxMDApO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF82LCBfNSwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl83ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl83LCBfNik7XHJcblx0XHRcdF84ID0gNSArIEJkLkxkLnJhbmQoKSAqICgxNSAtIDUpO1xyXG5cdFx0XHRfOSA9IDEwICsgQmQuTGQucmFuZCgpICogKDMwIC0gMTApO1xyXG5cdFx0XHRjdHguVihfMTAsIF84LCBfOSk7XHJcblx0XHRcdFhiLl8xMSA9IFtdO1xyXG5cdFx0XHRjdHguUyhYYi5fMTEsIF8xMCk7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fNCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5NYz1bXTtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0XzEgPSAwLjUgKyBCZC5MZC5yYW5kKCkgKiAoMS41IC0gMC41KTtcclxuXHRcdFx0WGIuXzIgPSBfMTtcclxuXHRcdFx0Y3R4LlcoXzMsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHguYyhYYi5fNCwgQmQuQWIsIF8zKTtcclxuXHRcdFx0XzUgPSAxMDAgKyBCZC5MZC5yYW5kKCkgKiAoMTAwMCAtIDEwMCk7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzYsIF81LCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzcgPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzcsIF82KTtcclxuXHRcdFx0XzggPSA1ICsgQmQuTGQucmFuZCgpICogKDE1IC0gNSk7XHJcblx0XHRcdF85ID0gMTAgKyBCZC5MZC5yYW5kKCkgKiAoMzAgLSAxMCk7XHJcblx0XHRcdGN0eC5WKF8xMCwgXzgsIF85KTtcclxuXHRcdFx0WGIuXzExID0gW107XHJcblx0XHRcdGN0eC5TKFhiLl8xMSwgXzEwKTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl80KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fICs9IFFiO1xyXG5cdFx0XHRjdHguVyhfMTIsIDAsIDEwMCwgMCk7XHJcblx0XHRcdGN0eC5UKF8xM2ZzLCBfMTIpO1xyXG5cdFx0XHRjdHguVChfMTN2cywgWzAsMCwwXSk7XHJcblx0XHRcdF8xM2R0bCA9IFFiO1xyXG5cdFx0XHRjdHguVChfMTN2LCBYYi5fNyk7XHJcblx0XHRcdGN0eC5UKF8xM3AsIFhiLl80KTtcclxuXHRcdFx0d2hpbGUgKF8xM2R0bCA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdF8xM2R0cCA9IF8xM2R0bDtcclxuXHRcdFx0XHRjdHguVChfMTNmc2QsIF8xM2ZzKTtcclxuXHRcdFx0XHRjdHguZyhfMTNydywgXzEzdnMsIF8xM3YpO1xyXG5cdFx0XHRcdF8xM3J3bCA9IGN0eC5QKF8xM3J3KTtcclxuXHRcdFx0XHRpZiAoXzEzcndsID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0XHRfMTNyd2wgPSBNYXRoLnNxcnQoXzEzcndsKTtcclxuXHRcdFx0XHRcdGN0eC53KF8xM3J3biwgXzEzcncsIF8xM3J3bCk7XHJcblx0XHRcdFx0XHRfMTNkZiA9IDAuMDEgKiAxICogXzEzcndsO1xyXG5cdFx0XHRcdFx0aWYgKF8xM2RmICogXzEzZHRwID4gMC4yKVxyXG5cdFx0XHRcdFx0XHRfMTNkdHAgPSAwLjIgLyBfMTNkZjtcclxuXHRcdFx0XHRcdGN0eC5jKF8xM2ZzZCwgXzEzZnNkLCBjdHgudihfMTNyd24sIF8xM3J3bCAqIF8xM2RmKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN0eC5jKF8xM3YsIF8xM3YsIGN0eC52KF8xM2ZzZCwgXzEzZHRwKSk7XHJcblx0XHRcdFx0Y3R4LmMoXzEzcCwgXzEzcCwgY3R4LnYoXzEzdiwgXzEzZHRwKSk7XHJcblx0XHRcdFx0XzEzZHRsIC09IF8xM2R0cDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjdHguVChYYi5fNCwgXzEzcCk7XHJcblx0XHRcdGN0eC5UKFhiLl83LCBfMTN2KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl80KTtcclxuXHRcdFx0Y3R4LlEoXzE0eiwgWzAsMCwxXSk7XHJcblx0XHRcdGN0eC5JKF8xNHgsIFhiLl83LCBfMTR6KTtcclxuXHRcdFx0Y3R4LlEoXzE0eCwgXzE0eCk7XHJcblx0XHRcdGN0eC5JKF8xNHksIF8xNHosIF8xNHgpO1xyXG5cdFx0XHRjdHgucGIoXzE0LCBfMTR4LCBfMTR5LCBfMTR6KTtcclxuXHRcdFx0XzE1ID0gKFhiLl8gLyBYYi5fMik7XHJcblx0XHRcdF8xNmkwPShfMTU8MD8wOihfMTU+MT8xOl8xNSkpO1xyXG5cdFx0XHRjdHguVihfMTZzMCwwLChfMTZpMC0wKSoxNSk7XHJcblx0XHRcdF8xNmkxPShfMTU8MD8wOihfMTU+MT8xOl8xNSkpO1xyXG5cdFx0XHRjdHguVihfMTZzMSwwLChfMTZpMS0wKSoxNSk7XHJcblx0XHRcdGN0eC5WKF8xNiwgRGIubmIoQmQuXzE2WzBdW18xNnMwWzBdXSxfMTZzMFsxXSksRGIubmIoQmQuXzE2WzFdW18xNnMxWzBdXSxfMTZzMVsxXSkpO1xyXG5cdFx0XHRfMTcgPSBjdHguaihYYi5fMTEsIF8xNik7XHJcblx0XHRcdF8xOGkwPShfMTU8MD8wOihfMTU+MT8xOl8xNSkpO1xyXG5cdFx0XHRjdHguVihfMThzMCwwLChfMThpMC0wKSoxKTtcclxuXHRcdFx0XzE4aTE9KF8xNTwwPzA6KF8xNT4xPzE6XzE1KSk7XHJcblx0XHRcdGN0eC5WKF8xOHMxLDAsKF8xOGkxLTApKjEpO1xyXG5cdFx0XHRfMThpMj0oXzE1PDA/MDooXzE1PjE/MTpfMTUpKTtcclxuXHRcdFx0Y3R4LlYoXzE4czIsMCwoXzE4aTItMCkqMSk7XHJcblx0XHRcdGN0eC5XKF8xOCwgRGIubmIoQmQuXzE4WzBdW18xOHMwWzBdXSxfMThzMFsxXSksRGIubmIoQmQuXzE4WzFdW18xOHMxWzBdXSxfMThzMVsxXSksRGIubmIoQmQuXzE4WzJdW18xOHMyWzBdXSxfMThzMlsxXSkpO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRjdHguVShYYi5NYywgXzE0KTtcclxuXHRcdFx0Y3R4LlMoWGIuTmQsXzE3KTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsXzE4KTtcclxuXHRcdFx0WGIuT2QgPSAxO1xyXG5cdFx0XHRYYi5RYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0aWYgKFhiLl8gPiBYYi5fMikgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gRW1pdHRlcl9CbGFzdF9Db3JlKCkge1xyXG5cclxuXHRcdHZhciBfMSA9IFtdLCBfNSwgXzQsIF82LCBfNywgXzdpMCwgXzdzMCA9IFtdO1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzoxLFNjOjEscmVuZGVyU3R5bGVJbmRleDozfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIkJsYXN0X0NvcmVcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuZGQoKTtcclxuXHRcdFx0QmQuXzcgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsMC4yNTIzOTEsMC40MTM5MDcsMC41MzYyOTksMC42MzM4NjksMC43MTM0MTMsMC43Nzg4OTIsMC44MzI4ODksMC44NzcyMjEsMC45MTMyMywwLjk0MTk0NSwwLjk2NDE4NCwwLjk4MDYwNSwwLjk5MTc1NSwwLjk5ODA5LDEsMV0sXHJcblx0XHRcdFx0XHRbMSwwLjk5NDI3NiwwLjk3OTEzOCwwLjk1NTIzNywwLjkyMzA1NCwwLjg4MjkyNSwwLjgzNTA1NywwLjc3OTUyNSwwLjcxNjI3MSwwLjY0NTA4NSwwLjU2NTU2NCwwLjQ3NzA0NywwLjM3ODUwMiwwLjI2ODI5OSwwLjE0Mzc0NywwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5qZCA9IDEwMDtcclxuXHRcdFx0QmQuVmMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTWIgPSBmdW5jdGlvbih2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDAuMjU7XHJcblx0XHRcdHZkLkdiID0gMTtcclxuXHRcdFx0dmQuSmIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUGIgPSBmdW5jdGlvbihRYiwgQmQsIHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMC4yNTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LmMoWGIuXzIsIEJkLkFiLCBfMSk7XHJcblx0XHRcdFhiLl8zID0gMDtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LmMoWGIuXzIsIEJkLkFiLCBfMSk7XHJcblx0XHRcdFhiLl8zID0gMDtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fICs9IFFiO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0XHRfNSA9IDIwMDtcclxuXHRcdFx0XzQgPSAwLjU7XHJcblx0XHRcdF82ID0gKFhiLl8gLyBfNCk7XHJcblx0XHRcdF83aTA9KF82PDA/MDooXzY+MT8xOl82KSk7XHJcblx0XHRcdF83aTA8MC4yP2N0eC5WKF83czAsMCwoXzdpMC0wKSo3NSk6Y3R4LlYoXzdzMCwxLChfN2kwLTAuMikqMTguNzUpO1xyXG5cdFx0XHRfNyA9IERiLm5iKEJkLl83WzBdW183czBbMF1dLF83czBbMV0pO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl8zO1xyXG5cdFx0XHRjdHguVihYYi5OZCxfNSxfNSk7XHJcblx0XHRcdGN0eC5UKFhiLmdmLFsxLDAuOTEyLDAuNzEzXSk7XHJcblx0XHRcdFhiLk9kID0gXzc7XHJcblx0XHRcdFhiLlFjID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLkNjID0gZnVuY3Rpb24oQmQsIFhiLCBXYykge1xyXG5cdFx0XHRfNCA9IDAuNTtcclxuXHRcdFx0aWYgKFhiLl8gPiBfNCkgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gRW1pdHRlcl9TbW9rZSgpIHtcclxuXHJcblx0XHR2YXIgXzEgPSBbXSwgXzMgPSBbXSwgXzUsIF83LCBfOT1bXSwgXzEwLCBfMTIsIF8xMSwgXzEzLCBfMTQsIF8xNGkwLCBfMTRzMCA9IFtdO1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzoxLFNjOjEscmVuZGVyU3R5bGVJbmRleDo0fV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIlNtb2tlXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl8xNCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwwLjAwMTMyMTczLDAuMDA0MzU4ODEsMC4wMDkwODg4NCwwLjAxNTQzNjEsMC4wMjMyNTYsMC4wMzIzMjE0LDAuMDQyMzEzMiwwLjA1MjgyMjUsMC4wNjMzNjU0LDAuMDczNDE1LDAuMDgyNDQzMiwwLjA4OTk2NTgsMC4wOTU1ODA1LDAuMDk4OTg4NSwwLjEsMC4xXSxcclxuXHRcdFx0XHRcdFswLjEsMC4wOTg0MDgsMC4wOTQzNTEzLDAuMDg4MDI1NSwwLjA3OTgwNSwwLjA3MDIxOTcsMC4wNTk4ODcsMC4wNDk0MjA5LDAuMDM5MzUzNCwwLjAzMDA4OTQsMC4wMjE5MDA4LDAuMDE0OTQzNSwwLjAwOTI4NTUyLDAuMDA0OTMzOTYsMC4wMDE4NTY5NiwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5qZCA9IDEwMDtcclxuXHRcdFx0QmQuVmMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTWIgPSBmdW5jdGlvbih2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDAuMjU7XHJcblx0XHRcdHZkLkdiID0gMC44NTtcclxuXHRcdFx0dmQuSmIgPSAxNTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDAuMjU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF8xLCA1MCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgXzEpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF8zLCAyMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl80ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl80LCBfMyk7XHJcblx0XHRcdF81ID0gMCArIEJkLkxkLnJhbmQoKSAqICgzNjAgLSAwKTtcclxuXHRcdFx0WGIuXzYgPSBfNTtcclxuXHRcdFx0XzcgPSAtNDUgKyBCZC5MZC5yYW5kKCkgKiAoNDUgLSAtNDUpO1xyXG5cdFx0XHRYYi5fOCA9IF83O1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2QgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfMSwgNTAsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fMiA9IFtdO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIF8xKTtcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfMywgMjAsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fNCwgXzMpO1xyXG5cdFx0XHRfNSA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMzYwIC0gMCk7XHJcblx0XHRcdFhiLl82ID0gXzU7XHJcblx0XHRcdF83ID0gLTQ1ICsgQmQuTGQucmFuZCgpICogKDQ1IC0gLTQ1KTtcclxuXHRcdFx0WGIuXzggPSBfNztcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fICs9IFFiO1xyXG5cdFx0XHRjdHguVChfOSwgWGIuXzQpO1xyXG5cdFx0XHRjdHgudShfOSwgXzksIFFiKTtcclxuXHRcdFx0Y3R4LmMoXzksIF85LCBYYi5fMik7XHJcblx0XHRcdGN0eC5UKFhiLl8yLCBfOSk7XHJcblx0XHRcdF8xMCA9IFhiLl82ICsgUWIgKiBYYi5fODtcclxuXHRcdFx0WGIuXzYgPSBfMTA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHRcdF8xMiA9IDEwMDtcclxuXHRcdFx0XzExID0gMztcclxuXHRcdFx0XzEzID0gKFhiLl8gLyBfMTEpO1xyXG5cdFx0XHRfMTRpMD0oXzEzPDA/MDooXzEzPjE/MTpfMTMpKTtcclxuXHRcdFx0XzE0aTA8MC40P2N0eC5WKF8xNHMwLDAsKF8xNGkwLTApKjM3LjUpOmN0eC5WKF8xNHMwLDEsKF8xNGkwLTAuNCkqMjUpO1xyXG5cdFx0XHRfMTQgPSBEYi5uYihCZC5fMTRbMF1bXzE0czBbMF1dLF8xNHMwWzFdKTtcclxuXHRcdFx0Y3R4LlMoWGIuUGQsWzAuNSwwLjVdKTtcclxuXHRcdFx0WGIuTWQgPSBYYi5fNjtcclxuXHRcdFx0Y3R4LlYoWGIuTmQsXzEyLF8xMik7XHJcblx0XHRcdGN0eC5UKFhiLmdmLFswLjQsMC40LDAuNF0pO1xyXG5cdFx0XHRYYi5PZCA9IF8xNDtcclxuXHRcdFx0WGIuUWMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF8xMSA9IDM7XHJcblx0XHRcdGlmIChYYi5fID4gXzExKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHR0aGlzLnFkID0gZnVuY3Rpb24oTGQpIHtcclxuXHRcdExkLkRkID0gMC4wMzMzMzMzO1xyXG5cdFx0TGQuVWQgPSAwO1xyXG5cdFx0TGQucHJlc2ltRnJhbWVUaW1lID0gMC4xO1xyXG5cdFx0TGQucmFuZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKTsgfTtcclxuXHRcdExkLnBkKG5ldyBFbWl0dGVyX0JsYXN0KCkpO1xyXG5cdFx0TGQucGQobmV3IEVtaXR0ZXJfU2hvY2t3YXZlKCkpO1xyXG5cdFx0TGQucGQobmV3IEVtaXR0ZXJfU3BhcmtzKCkpO1xyXG5cdFx0TGQucGQobmV3IEVtaXR0ZXJfQmxhc3RfQ29yZSgpKTtcclxuXHRcdExkLnBkKG5ldyBFbWl0dGVyX1Ntb2tlKCkpO1xyXG5cdH1cclxuXHRcdHRoaXMubmIgPSBmdW5jdGlvbihmdW5jVmFsdWVzLCBqZSkgeyBcdFx0XHR2YXIgaW5kZXhJbnQgPSBNYXRoLmZsb29yKGplKTsgXHRcdFx0dmFyIG5leHRJbnQgPSBpbmRleEludCArIDE7IFx0XHRcdHJldHVybiBjdHguWChmdW5jVmFsdWVzW2luZGV4SW50XSwgZnVuY1ZhbHVlc1tuZXh0SW50XSwgamUgLSBpbmRleEludCk7IFx0XHR9XHJcblxyXG5cclxufVxyXG5cclxucmV0dXJuIEJsYXN0MDM7XHJcbn0pKTsiXX0=
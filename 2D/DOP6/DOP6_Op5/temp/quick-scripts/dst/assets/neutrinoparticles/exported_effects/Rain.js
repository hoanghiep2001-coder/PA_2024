
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
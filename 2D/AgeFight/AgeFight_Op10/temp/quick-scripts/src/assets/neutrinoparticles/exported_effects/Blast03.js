"use strict";
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
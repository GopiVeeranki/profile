!(function () {
  "use strict";
  var t,
    e,
    a,
    r,
    n = {
      996: function (t, e, a) {
        var r;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.PhysicsConfiguration = void 0);
        var n = a(251),
          i = a(855);
        a(842),
          (e.PhysicsConfiguration = n.Configuration.create("physics", {
            handler: {
              macro: [
                "Physics-automatic-bracing-macros",
                "Physics-vector-macros",
                "Physics-vector-chars",
                "Physics-derivative-macros",
                "Physics-expressions-macros",
                "Physics-quick-quad-macros",
                "Physics-bra-ket-macros",
                "Physics-matrix-macros",
              ],
              character: ["Physics-characters"],
              environment: ["Physics-aux-envs"],
            },
            items: ((r = {}), (r[i.AutoOpen.prototype.kind] = i.AutoOpen), r),
            options: { physics: { italicdiff: !1, arrowdel: !1 } },
          }));
      },
      855: function (t, e, a) {
        var r,
          n =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var a in e)
                    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function a() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((a.prototype = e.prototype), new a()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AutoOpen = void 0);
        var i = a(76),
          o = a(398),
          s = a(193),
          c = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              Object.defineProperty(e.prototype, "kind", {
                get: function () {
                  return "auto open";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isOpen", {
                get: function () {
                  return !0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.toMml = function () {
                var e = this.factory.configuration.parser,
                  a = this.getProperty("right");
                if (this.getProperty("smash")) {
                  var r = t.prototype.toMml.call(this),
                    n = e.create("node", "mpadded", [r], {
                      height: 0,
                      depth: 0,
                    });
                  this.Clear(), this.Push(e.create("node", "TeXAtom", [n]));
                }
                a &&
                  this.Push(
                    new s.default(a, e.stack.env, e.configuration).mml()
                  );
                var i = t.prototype.toMml.call(this);
                return o.default.fenced(
                  this.factory.configuration,
                  this.getProperty("open"),
                  i,
                  this.getProperty("close"),
                  this.getProperty("big")
                );
              }),
              (e.prototype.checkItem = function (e) {
                var a = e.getProperty("autoclose");
                return a && a === this.getProperty("close")
                  ? this.getProperty("ignore")
                    ? (this.Clear(), [[], !0])
                    : [[this.toMml()], !0]
                  : t.prototype.checkItem.call(this, e);
              }),
              e
            );
          })(i.BaseItem);
        e.AutoOpen = c;
      },
      842: function (t, e, a) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = a(871),
          n = a(458),
          i = a(108),
          o = a(945),
          s = a(801);
        new r.CommandMap(
          "Physics-automatic-bracing-macros",
          {
            quantity: "Quantity",
            qty: "Quantity",
            pqty: ["Quantity", "(", ")", !0],
            bqty: ["Quantity", "[", "]", !0],
            vqty: ["Quantity", "|", "|", !0],
            Bqty: ["Quantity", "\\{", "\\}", !0],
            absolutevalue: ["Quantity", "|", "|", !0],
            abs: ["Quantity", "|", "|", !0],
            norm: ["Quantity", "\\|", "\\|", !0],
            evaluated: "Eval",
            eval: "Eval",
            order: [
              "Quantity",
              "(",
              ")",
              !0,
              "O",
              i.TexConstant.Variant.CALLIGRAPHIC,
            ],
            commutator: "Commutator",
            comm: "Commutator",
            anticommutator: ["Commutator", "\\{", "\\}"],
            acomm: ["Commutator", "\\{", "\\}"],
            poissonbracket: ["Commutator", "\\{", "\\}"],
            pb: ["Commutator", "\\{", "\\}"],
          },
          n.default
        ),
          new r.CharacterMap("Physics-vector-chars", o.default.mathchar0mi, {
            dotproduct: ["\u22c5", { mathvariant: i.TexConstant.Variant.BOLD }],
            vdot: ["\u22c5", { mathvariant: i.TexConstant.Variant.BOLD }],
            crossproduct: "\xd7",
            cross: "\xd7",
            cp: "\xd7",
            gradientnabla: [
              "\u2207",
              { mathvariant: i.TexConstant.Variant.BOLD },
            ],
            real: ["\u211c", { mathvariant: i.TexConstant.Variant.NORMAL }],
            imaginary: [
              "\u2111",
              { mathvariant: i.TexConstant.Variant.NORMAL },
            ],
          }),
          new r.CommandMap(
            "Physics-vector-macros",
            {
              vnabla: "Vnabla",
              vectorbold: "VectorBold",
              vb: "VectorBold",
              vectorarrow: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
              va: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
              vectorunit: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
              vu: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
              gradient: ["OperatorApplication", "\\vnabla", "(", "["],
              grad: ["OperatorApplication", "\\vnabla", "(", "["],
              divergence: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
              div: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
              curl: ["VectorOperator", "\\vnabla\\crossproduct", "(", "["],
              laplacian: ["OperatorApplication", "\\nabla^2", "(", "["],
            },
            n.default
          ),
          new r.CommandMap(
            "Physics-expressions-macros",
            {
              sin: "Expression",
              sinh: "Expression",
              arcsin: "Expression",
              asin: "Expression",
              cos: "Expression",
              cosh: "Expression",
              arccos: "Expression",
              acos: "Expression",
              tan: "Expression",
              tanh: "Expression",
              arctan: "Expression",
              atan: "Expression",
              csc: "Expression",
              csch: "Expression",
              arccsc: "Expression",
              acsc: "Expression",
              sec: "Expression",
              sech: "Expression",
              arcsec: "Expression",
              asec: "Expression",
              cot: "Expression",
              coth: "Expression",
              arccot: "Expression",
              acot: "Expression",
              exp: ["Expression", !1],
              log: "Expression",
              ln: "Expression",
              det: ["Expression", !1],
              Pr: ["Expression", !1],
              tr: ["Expression", !1],
              trace: ["Expression", !1, "tr"],
              Tr: ["Expression", !1],
              Trace: ["Expression", !1, "Tr"],
              rank: "NamedFn",
              erf: ["Expression", !1],
              Residue: ["Macro", "\\mathrm{Res}"],
              Res: ["OperatorApplication", "\\Residue", "(", "[", "{"],
              principalvalue: ["OperatorApplication", "{\\cal P}"],
              pv: ["OperatorApplication", "{\\cal P}"],
              PV: ["OperatorApplication", "{\\rm P.V.}"],
              Re: ["OperatorApplication", "\\mathrm{Re}", "{"],
              Im: ["OperatorApplication", "\\mathrm{Im}", "{"],
              sine: ["NamedFn", "sin"],
              hypsine: ["NamedFn", "sinh"],
              arcsine: ["NamedFn", "arcsin"],
              asine: ["NamedFn", "asin"],
              cosine: ["NamedFn", "cos"],
              hypcosine: ["NamedFn", "cosh"],
              arccosine: ["NamedFn", "arccos"],
              acosine: ["NamedFn", "acos"],
              tangent: ["NamedFn", "tan"],
              hyptangent: ["NamedFn", "tanh"],
              arctangent: ["NamedFn", "arctan"],
              atangent: ["NamedFn", "atan"],
              cosecant: ["NamedFn", "csc"],
              hypcosecant: ["NamedFn", "csch"],
              arccosecant: ["NamedFn", "arccsc"],
              acosecant: ["NamedFn", "acsc"],
              secant: ["NamedFn", "sec"],
              hypsecant: ["NamedFn", "sech"],
              arcsecant: ["NamedFn", "arcsec"],
              asecant: ["NamedFn", "asec"],
              cotangent: ["NamedFn", "cot"],
              hypcotangent: ["NamedFn", "coth"],
              arccotangent: ["NamedFn", "arccot"],
              acotangent: ["NamedFn", "acot"],
              exponential: ["NamedFn", "exp"],
              logarithm: ["NamedFn", "log"],
              naturallogarithm: ["NamedFn", "ln"],
              determinant: ["NamedFn", "det"],
              Probability: ["NamedFn", "Pr"],
            },
            n.default
          ),
          new r.CommandMap(
            "Physics-quick-quad-macros",
            {
              qqtext: "Qqtext",
              qq: "Qqtext",
              qcomma: ["Macro", "\\qqtext*{,}"],
              qc: ["Macro", "\\qqtext*{,}"],
              qcc: ["Qqtext", "c.c."],
              qif: ["Qqtext", "if"],
              qthen: ["Qqtext", "then"],
              qelse: ["Qqtext", "else"],
              qotherwise: ["Qqtext", "otherwise"],
              qunless: ["Qqtext", "unless"],
              qgiven: ["Qqtext", "given"],
              qusing: ["Qqtext", "using"],
              qassume: ["Qqtext", "assume"],
              qsince: ["Qqtext", "since"],
              qlet: ["Qqtext", "let"],
              qfor: ["Qqtext", "for"],
              qall: ["Qqtext", "all"],
              qeven: ["Qqtext", "even"],
              qodd: ["Qqtext", "odd"],
              qinteger: ["Qqtext", "integer"],
              qand: ["Qqtext", "and"],
              qor: ["Qqtext", "or"],
              qas: ["Qqtext", "as"],
              qin: ["Qqtext", "in"],
            },
            n.default
          ),
          new r.CommandMap(
            "Physics-derivative-macros",
            {
              diffd: "DiffD",
              flatfrac: ["Macro", "\\left.#1\\middle/#2\\right.", 2],
              differential: ["Differential", "\\diffd"],
              dd: ["Differential", "\\diffd"],
              variation: ["Differential", "\\delta"],
              var: ["Differential", "\\delta"],
              derivative: ["Derivative", 2, "\\diffd"],
              dv: ["Derivative", 2, "\\diffd"],
              partialderivative: ["Derivative", 3, "\\partial"],
              pderivative: ["Derivative", 3, "\\partial"],
              pdv: ["Derivative", 3, "\\partial"],
              functionalderivative: ["Derivative", 2, "\\delta"],
              fderivative: ["Derivative", 2, "\\delta"],
              fdv: ["Derivative", 2, "\\delta"],
            },
            n.default
          ),
          new r.CommandMap(
            "Physics-bra-ket-macros",
            {
              bra: "Bra",
              ket: "Ket",
              innerproduct: "BraKet",
              ip: "BraKet",
              braket: "BraKet",
              outerproduct: "KetBra",
              dyad: "KetBra",
              ketbra: "KetBra",
              op: "KetBra",
              expectationvalue: "Expectation",
              expval: "Expectation",
              ev: "Expectation",
              matrixelement: "MatrixElement",
              matrixel: "MatrixElement",
              mel: "MatrixElement",
            },
            n.default
          ),
          new r.CommandMap(
            "Physics-matrix-macros",
            {
              matrixquantity: "MatrixQuantity",
              mqty: "MatrixQuantity",
              pmqty: ["Macro", "\\mqty(#1)", 1],
              Pmqty: ["Macro", "\\mqty*(#1)", 1],
              bmqty: ["Macro", "\\mqty[#1]", 1],
              vmqty: ["Macro", "\\mqty|#1|", 1],
              smallmatrixquantity: ["MatrixQuantity", !0],
              smqty: ["MatrixQuantity", !0],
              spmqty: ["Macro", "\\smqty(#1)", 1],
              sPmqty: ["Macro", "\\smqty*(#1)", 1],
              sbmqty: ["Macro", "\\smqty[#1]", 1],
              svmqty: ["Macro", "\\smqty|#1|", 1],
              matrixdeterminant: ["Macro", "\\vmqty{#1}", 1],
              mdet: ["Macro", "\\vmqty{#1}", 1],
              smdet: ["Macro", "\\svmqty{#1}", 1],
              identitymatrix: "IdentityMatrix",
              imat: "IdentityMatrix",
              xmatrix: "XMatrix",
              xmat: "XMatrix",
              zeromatrix: ["Macro", "\\xmat{0}{#1}{#2}", 2],
              zmat: ["Macro", "\\xmat{0}{#1}{#2}", 2],
              paulimatrix: "PauliMatrix",
              pmat: "PauliMatrix",
              diagonalmatrix: "DiagonalMatrix",
              dmat: "DiagonalMatrix",
              antidiagonalmatrix: ["DiagonalMatrix", !0],
              admat: ["DiagonalMatrix", !0],
            },
            n.default
          ),
          new r.EnvironmentMap(
            "Physics-aux-envs",
            o.default.environment,
            {
              smallmatrix: [
                "Array",
                null,
                null,
                null,
                "c",
                "0.333em",
                ".2em",
                "S",
                1,
              ],
            },
            n.default
          ),
          new r.MacroMap(
            "Physics-characters",
            {
              "|": ["AutoClose", s.TEXCLASS.ORD],
              ")": "AutoClose",
              "]": "AutoClose",
            },
            n.default
          );
      },
      458: function (t, e, a) {
        var r =
          (this && this.__read) ||
          function (t, e) {
            var a = "function" == typeof Symbol && t[Symbol.iterator];
            if (!a) return t;
            var r,
              n,
              i = a.call(t),
              o = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                o.push(r.value);
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                r && !r.done && (a = i.return) && a.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            return o;
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = a(360),
          i = a(193),
          o = a(402),
          s = a(801),
          c = a(398),
          l = a(748),
          u = a(348),
          m = {},
          d = { "(": ")", "[": "]", "{": "}", "|": "|" },
          f = /^(b|B)i(g{1,2})$/;
        (m.Quantity = function (t, e, a, r, n, u, m) {
          void 0 === a && (a = "("),
            void 0 === r && (r = ")"),
            void 0 === n && (n = !1),
            void 0 === u && (u = ""),
            void 0 === m && (m = "");
          var p = !!n && t.GetStar(),
            v = t.GetNext(),
            g = t.i,
            h = null;
          if ("\\" === v) {
            if ((t.i++, !(h = t.GetCS()).match(f))) {
              var x = t.create("node", "mrow");
              return (
                t.Push(c.default.fenced(t.configuration, a, x, r)),
                void (t.i = g)
              );
            }
            v = t.GetNext();
          }
          var M = d[v];
          if (n && "{" !== v)
            throw new o.default(
              "MissingArgFor",
              "Missing argument for %1",
              t.currentCS
            );
          if (!M) {
            x = t.create("node", "mrow");
            return (
              t.Push(c.default.fenced(t.configuration, a, x, r)), void (t.i = g)
            );
          }
          if (u) {
            var y = t.create("token", "mi", { texClass: s.TEXCLASS.OP }, u);
            m && l.default.setAttribute(y, "mathvariant", m),
              t.Push(t.itemFactory.create("fn", y));
          }
          if ("{" === v) {
            var b = t.GetArgument(e);
            return (
              (v = n ? a : "\\{"),
              (M = n ? r : "\\}"),
              (b = p
                ? v + " " + b + " " + M
                : h
                ? "\\" + h + "l" + v + " " + b + " \\" + h + "r" + M
                : "\\left" + v + " " + b + " \\right" + M),
              void t.Push(new i.default(b, t.stack.env, t.configuration).mml())
            );
          }
          n && ((v = a), (M = r)),
            t.i++,
            t.Push(
              t.itemFactory
                .create("auto open")
                .setProperties({ open: v, close: M, big: h })
            );
        }),
          (m.Eval = function (t, e) {
            var a = t.GetStar(),
              r = t.GetNext();
            if ("{" !== r) {
              if ("(" === r || "[" === r)
                return (
                  t.i++,
                  void t.Push(
                    t.itemFactory
                      .create("auto open")
                      .setProperties({
                        open: r,
                        close: "|",
                        smash: a,
                        right: "\\vphantom{\\int}",
                      })
                  )
                );
              throw new o.default(
                "MissingArgFor",
                "Missing argument for %1",
                t.currentCS
              );
            }
            var n = t.GetArgument(e),
              i =
                "\\left. " +
                (a ? "\\smash{" + n + "}" : n) +
                " \\vphantom{\\int}\\right|";
            t.string = t.string.slice(0, t.i) + i + t.string.slice(t.i);
          }),
          (m.Commutator = function (t, e, a, r) {
            void 0 === a && (a = "["), void 0 === r && (r = "]");
            var n = t.GetStar(),
              s = t.GetNext(),
              c = null;
            if ("\\" === s) {
              if ((t.i++, !(c = t.GetCS()).match(f)))
                throw new o.default(
                  "MissingArgFor",
                  "Missing argument for %1",
                  t.currentCS
                );
              s = t.GetNext();
            }
            if ("{" !== s)
              throw new o.default(
                "MissingArgFor",
                "Missing argument for %1",
                t.currentCS
              );
            var l = t.GetArgument(e) + "," + t.GetArgument(e);
            (l = n
              ? a + " " + l + " " + r
              : c
              ? "\\" + c + "l" + a + " " + l + " \\" + c + "r" + r
              : "\\left" + a + " " + l + " \\right" + r),
              t.Push(new i.default(l, t.stack.env, t.configuration).mml());
          });
        var p = [65, 90],
          v = [97, 122],
          g = [913, 937],
          h = [945, 969],
          x = [48, 57];
        function M(t, e) {
          return t >= e[0] && t <= e[1];
        }
        function y(t, e, a, r) {
          var n = t.configuration.parser,
            i = u.NodeFactory.createToken(t, e, a, r),
            o = r.codePointAt(0);
          return (
            1 === r.length &&
              !n.stack.env.font &&
              n.stack.env.vectorFont &&
              (M(o, p) ||
                M(o, v) ||
                M(o, g) ||
                M(o, x) ||
                (M(o, h) && n.stack.env.vectorStar) ||
                l.default.getAttribute(i, "accent")) &&
              l.default.setAttribute(i, "mathvariant", n.stack.env.vectorFont),
            i
          );
        }
        (m.VectorBold = function (t, e) {
          var a = t.GetStar(),
            r = t.GetArgument(e),
            n = t.configuration.nodeFactory.get("token"),
            o = t.stack.env.font;
          delete t.stack.env.font,
            t.configuration.nodeFactory.set("token", y),
            (t.stack.env.vectorFont = a ? "bold-italic" : "bold"),
            (t.stack.env.vectorStar = a);
          var s = new i.default(r, t.stack.env, t.configuration).mml();
          o && (t.stack.env.font = o),
            delete t.stack.env.vectorFont,
            delete t.stack.env.vectorStar,
            t.configuration.nodeFactory.set("token", n),
            t.Push(s);
        }),
          (m.StarMacro = function (t, e, a) {
            for (var r = [], n = 3; n < arguments.length; n++)
              r[n - 3] = arguments[n];
            var i = t.GetStar(),
              o = [];
            if (a) for (var s = o.length; s < a; s++) o.push(t.GetArgument(e));
            var l = r.join(i ? "*" : "");
            (l = c.default.substituteArgs(t, o, l)),
              (t.string = c.default.addArgs(t, l, t.string.slice(t.i))),
              (t.i = 0),
              c.default.checkMaxMacros(t);
          });
        var b = function (t, e, a, r, n) {
          var o = new i.default(r, t.stack.env, t.configuration).mml();
          t.Push(t.itemFactory.create(e, o));
          var s = t.GetNext(),
            c = d[s];
          if (c) {
            var l = -1 !== n.indexOf(s);
            if ("{" === s) {
              var u =
                (l ? "\\left\\{" : "") +
                " " +
                t.GetArgument(a) +
                " " +
                (l ? "\\right\\}" : "");
              return (t.string = u + t.string.slice(t.i)), void (t.i = 0);
            }
            l &&
              (t.i++,
              t.Push(
                t.itemFactory
                  .create("auto open")
                  .setProperties({ open: s, close: c })
              ));
          }
        };
        function P(t, e, a) {
          var n = r(t, 3),
            i = n[0],
            o = n[1],
            s = n[2];
          return e && a
            ? "\\left\\langle{" +
                i +
                "}\\middle\\vert{" +
                o +
                "}\\middle\\vert{" +
                s +
                "}\\right\\rangle"
            : e
            ? "\\langle{" + i + "}\\vert{" + o + "}\\vert{" + s + "}\\rangle"
            : "\\left\\langle{" +
              i +
              "}\\right\\vert{" +
              o +
              "}\\left\\vert{" +
              s +
              "}\\right\\rangle";
        }
        (m.OperatorApplication = function (t, e, a) {
          for (var r = [], n = 3; n < arguments.length; n++)
            r[n - 3] = arguments[n];
          b(t, "fn", e, a, r);
        }),
          (m.VectorOperator = function (t, e, a) {
            for (var r = [], n = 3; n < arguments.length; n++)
              r[n - 3] = arguments[n];
            b(t, "mml", e, a, r);
          }),
          (m.Expression = function (t, e, a, r) {
            void 0 === a && (a = !0),
              void 0 === r && (r = ""),
              (r = r || e.slice(1));
            var n = a ? t.GetBrackets(e) : null,
              o = t.create("token", "mi", { texClass: s.TEXCLASS.OP }, r);
            if (n) {
              var c = new i.default(n, t.stack.env, t.configuration).mml();
              o = t.create("node", "msup", [o, c]);
            }
            t.Push(t.itemFactory.create("fn", o)),
              "(" === t.GetNext() &&
                (t.i++,
                t.Push(
                  t.itemFactory
                    .create("auto open")
                    .setProperties({ open: "(", close: ")" })
                ));
          }),
          (m.Qqtext = function (t, e, a) {
            var r =
              (t.GetStar() ? "" : "\\quad") +
              "\\text{" +
              (a || t.GetArgument(e)) +
              "}\\quad ";
            t.string = t.string.slice(0, t.i) + r + t.string.slice(t.i);
          }),
          (m.Differential = function (t, e, a) {
            var r = t.GetBrackets(e),
              n = null != r ? "^{" + r + "}" : " ",
              o = "(" === t.GetNext(),
              c = "{" === t.GetNext(),
              l = a + n;
            if (o || c)
              if (c) {
                l += t.GetArgument(e);
                u = new i.default(l, t.stack.env, t.configuration).mml();
                t.Push(
                  t.create("node", "TeXAtom", [u], { texClass: s.TEXCLASS.OP })
                );
              } else
                t.Push(new i.default(l, t.stack.env, t.configuration).mml()),
                  t.i++,
                  t.Push(
                    t.itemFactory
                      .create("auto open")
                      .setProperties({ open: "(", close: ")" })
                  );
            else {
              l += t.GetArgument(e, !0) || "";
              var u = new i.default(l, t.stack.env, t.configuration).mml();
              t.Push(u);
            }
          }),
          (m.Derivative = function (t, e, a, r) {
            var n = t.GetStar(),
              o = t.GetBrackets(e),
              s = 1,
              c = [];
            for (c.push(t.GetArgument(e)); "{" === t.GetNext() && s < a; )
              c.push(t.GetArgument(e)), s++;
            var l = !1,
              u = " ",
              m = " ";
            a > 2 && c.length > 2
              ? ((u = "^{" + (c.length - 1) + "}"), (l = !0))
              : null != o &&
                (a > 2 && c.length > 1 && (l = !0), (m = u = "^{" + o + "}"));
            for (
              var d = n ? "\\flatfrac" : "\\frac",
                f = c.length > 1 ? c[0] : "",
                p = c.length > 1 ? c[1] : c[0],
                v = "",
                g = 2,
                h = void 0;
              (h = c[g]);
              g++
            )
              v += r + " " + h;
            var x =
              d + "{" + r + u + f + "}{" + r + " " + p + m + " " + v + "}";
            t.Push(new i.default(x, t.stack.env, t.configuration).mml()),
              "(" === t.GetNext() &&
                (t.i++,
                t.Push(
                  t.itemFactory
                    .create("auto open")
                    .setProperties({ open: "(", close: ")", ignore: l })
                ));
          }),
          (m.Bra = function (t, e) {
            var a = t.GetStar(),
              r = t.GetArgument(e),
              n = "",
              o = !1,
              s = !1;
            if ("\\" === t.GetNext()) {
              var c = t.i;
              t.i++;
              var l = t.GetCS(),
                u = t.lookup("macro", l);
              u && "ket" === u.symbol
                ? ((o = !0),
                  (c = t.i),
                  (s = t.GetStar()),
                  "{" === t.GetNext()
                    ? (n = t.GetArgument(l, !0))
                    : ((t.i = c), (s = !1)))
                : (t.i = c);
            }
            var m = "";
            (m = o
              ? a || s
                ? "\\langle{" + r + "}\\vert{" + n + "}\\rangle"
                : "\\left\\langle{" +
                  r +
                  "}\\middle\\vert{" +
                  n +
                  "}\\right\\rangle"
              : a || s
              ? "\\langle{" + r + "}\\vert"
              : "\\left\\langle{" + r + "}\\right\\vert{" + n + "}"),
              t.Push(new i.default(m, t.stack.env, t.configuration).mml());
          }),
          (m.Ket = function (t, e) {
            var a = t.GetStar(),
              r = t.GetArgument(e),
              n = a
                ? "\\vert{" + r + "}\\rangle"
                : "\\left\\vert{" + r + "}\\right\\rangle";
            t.Push(new i.default(n, t.stack.env, t.configuration).mml());
          }),
          (m.BraKet = function (t, e) {
            var a = t.GetStar(),
              r = t.GetArgument(e),
              n = null;
            "{" === t.GetNext() && (n = t.GetArgument(e, !0));
            var o = "";
            (o =
              null == n
                ? a
                  ? "\\langle{" + r + "}\\vert{" + r + "}\\rangle"
                  : "\\left\\langle{" +
                    r +
                    "}\\middle\\vert{" +
                    r +
                    "}\\right\\rangle"
                : a
                ? "\\langle{" + r + "}\\vert{" + n + "}\\rangle"
                : "\\left\\langle{" +
                  r +
                  "}\\middle\\vert{" +
                  n +
                  "}\\right\\rangle"),
              t.Push(new i.default(o, t.stack.env, t.configuration).mml());
          }),
          (m.KetBra = function (t, e) {
            var a = t.GetStar(),
              r = t.GetArgument(e),
              n = null;
            "{" === t.GetNext() && (n = t.GetArgument(e, !0));
            var o = "";
            (o =
              null == n
                ? a
                  ? "\\vert{" + r + "}\\rangle\\!\\langle{" + r + "}\\vert"
                  : "\\left\\vert{" +
                    r +
                    "}\\middle\\rangle\\!\\middle\\langle{" +
                    r +
                    "}\\right\\vert"
                : a
                ? "\\vert{" + r + "}\\rangle\\!\\langle{" + n + "}\\vert"
                : "\\left\\vert{" +
                  r +
                  "}\\middle\\rangle\\!\\middle\\langle{" +
                  n +
                  "}\\right\\vert"),
              t.Push(new i.default(o, t.stack.env, t.configuration).mml());
          }),
          (m.Expectation = function (t, e) {
            var a = t.GetStar(),
              r = a && t.GetStar(),
              n = t.GetArgument(e),
              o = null;
            "{" === t.GetNext() && (o = t.GetArgument(e, !0));
            var s =
              n && o
                ? P([o, n, o], a, r)
                : a
                ? "\\langle {" + n + "} \\rangle"
                : "\\left\\langle {" + n + "} \\right\\rangle";
            t.Push(new i.default(s, t.stack.env, t.configuration).mml());
          }),
          (m.MatrixElement = function (t, e) {
            var a = t.GetStar(),
              r = a && t.GetStar(),
              n = P(
                [t.GetArgument(e), t.GetArgument(e), t.GetArgument(e)],
                a,
                r
              );
            t.Push(new i.default(n, t.stack.env, t.configuration).mml());
          }),
          (m.MatrixQuantity = function (t, e, a) {
            var r = t.GetStar(),
              n = a ? "smallmatrix" : "array",
              o = "",
              s = "",
              c = "";
            switch (t.GetNext()) {
              case "{":
                o = t.GetArgument(e);
                break;
              case "(":
                t.i++,
                  (s = r ? "\\lgroup" : "("),
                  (c = r ? "\\rgroup" : ")"),
                  (o = t.GetUpTo(e, ")"));
                break;
              case "[":
                t.i++, (s = "["), (c = "]"), (o = t.GetUpTo(e, "]"));
                break;
              case "|":
                t.i++, (s = "|"), (c = "|"), (o = t.GetUpTo(e, "|"));
                break;
              default:
                (s = "("), (c = ")");
            }
            var l =
              (s ? "\\left" : "") +
              s +
              "\\begin{" +
              n +
              "}{} " +
              o +
              "\\end{" +
              n +
              "}" +
              (s ? "\\right" : "") +
              c;
            t.Push(new i.default(l, t.stack.env, t.configuration).mml());
          }),
          (m.IdentityMatrix = function (t, e) {
            var a = t.GetArgument(e),
              r = parseInt(a, 10);
            if (isNaN(r))
              throw new o.default("InvalidNumber", "Invalid number");
            if (r <= 1)
              return (t.string = "1" + t.string.slice(t.i)), void (t.i = 0);
            for (var n = Array(r).fill("0"), i = [], s = 0; s < r; s++) {
              var c = n.slice();
              (c[s] = "1"), i.push(c.join(" & "));
            }
            (t.string = i.join("\\\\ ") + t.string.slice(t.i)), (t.i = 0);
          }),
          (m.XMatrix = function (t, e) {
            var a = t.GetStar(),
              r = t.GetArgument(e),
              n = t.GetArgument(e),
              i = t.GetArgument(e),
              s = parseInt(n, 10),
              c = parseInt(i, 10);
            if (
              isNaN(s) ||
              isNaN(c) ||
              c.toString() !== i ||
              s.toString() !== n
            )
              throw new o.default("InvalidNumber", "Invalid number");
            if (((s = s < 1 ? 1 : s), (c = c < 1 ? 1 : c), !a)) {
              var l = Array(c).fill(r).join(" & "),
                u = Array(s).fill(l).join("\\\\ ");
              return (t.string = u + t.string.slice(t.i)), void (t.i = 0);
            }
            var m = "";
            if (1 === s && 1 === c) m = r;
            else if (1 === s) {
              l = [];
              for (var d = 1; d <= c; d++) l.push(r + "_{" + d + "}");
              m = l.join(" & ");
            } else if (1 === c) {
              for (l = [], d = 1; d <= s; d++) l.push(r + "_{" + d + "}");
              m = l.join("\\\\ ");
            } else {
              var f = [];
              for (d = 1; d <= s; d++) {
                l = [];
                for (var p = 1; p <= c; p++)
                  l.push(r + "_{{" + d + "}{" + p + "}}");
                f.push(l.join(" & "));
              }
              m = f.join("\\\\ ");
            }
            (t.string = m + t.string.slice(t.i)), (t.i = 0);
          }),
          (m.PauliMatrix = function (t, e) {
            var a = t.GetArgument(e),
              r = a.slice(1);
            switch (a[0]) {
              case "0":
                r += " 1 & 0\\\\ 0 & 1";
                break;
              case "1":
              case "x":
                r += " 0 & 1\\\\ 1 & 0";
                break;
              case "2":
              case "y":
                r += " 0 & -i\\\\ i & 0";
                break;
              case "3":
              case "z":
                r += " 1 & 0\\\\ 0 & -1";
            }
            (t.string = r + t.string.slice(t.i)), (t.i = 0);
          }),
          (m.DiagonalMatrix = function (t, e, a) {
            if ("{" === t.GetNext()) {
              var r = t.i;
              t.GetArgument(e);
              var n = t.i;
              t.i = r + 1;
              for (var i = [], o = "", s = t.i; s < n; ) {
                try {
                  o = t.GetUpTo(e, ",");
                } catch (e) {
                  (t.i = n), i.push(t.string.slice(s, n - 1));
                  break;
                }
                if (t.i >= n) {
                  i.push(t.string.slice(s, n));
                  break;
                }
                (s = t.i), i.push(o);
              }
              (t.string =
                (function (t, e) {
                  for (var a = t.length, r = [], n = 0; n < a; n++)
                    r.push(
                      Array(e ? a - n : n + 1).join("&") +
                        "\\mqty{" +
                        t[n] +
                        "}"
                    );
                  return r.join("\\\\ ");
                })(i, a) + t.string.slice(n)),
                (t.i = 0);
            }
          }),
          (m.AutoClose = function (t, e, a) {
            var r = t.create("token", "mo", { stretchy: !1 }, e),
              n = t.itemFactory
                .create("mml", r)
                .setProperties({ autoclose: e });
            t.Push(n);
          }),
          (m.Vnabla = function (t, e) {
            var a = t.options.physics.arrowdel
              ? "\\vec{\\gradientnabla}"
              : "{\\gradientnabla}";
            return t.Push(new i.default(a, t.stack.env, t.configuration).mml());
          }),
          (m.DiffD = function (t, e) {
            var a = t.options.physics.italicdiff ? "d" : "{\\rm d}";
            return t.Push(new i.default(a, t.stack.env, t.configuration).mml());
          }),
          (m.Macro = n.default.Macro),
          (m.NamedFn = n.default.NamedFn),
          (m.Array = n.default.Array),
          (e.default = m);
      },
      955: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (e.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      801: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS),
          (e.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES),
          (e.indentAttributes =
            MathJax._.core.MmlTree.MmlNode.indentAttributes),
          (e.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode),
          (e.AbstractMmlTokenNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode),
          (e.AbstractMmlLayoutNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode),
          (e.AbstractMmlBaseNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode),
          (e.AbstractMmlEmptyNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode),
          (e.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode),
          (e.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode);
      },
      251: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (e.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (e.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      348: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory);
      },
      748: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.NodeUtil.default);
      },
      945: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.ParseMethods.default);
      },
      398: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.ParseUtil.default);
      },
      76: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlStack = MathJax._.input.tex.StackItem.MmlStack),
          (e.BaseItem = MathJax._.input.tex.StackItem.BaseItem);
      },
      871: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractSymbolMap =
            MathJax._.input.tex.SymbolMap.AbstractSymbolMap),
          (e.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap),
          (e.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap),
          (e.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap),
          (e.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap),
          (e.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap),
          (e.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap),
          (e.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap);
      },
      108: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
      },
      402: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.TexError.default);
      },
      193: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.TexParser.default);
      },
      360: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.base.BaseMethods.default);
      },
    },
    i = {};
  function o(t) {
    var e = i[t];
    if (void 0 !== e) return e.exports;
    var a = (i[t] = { exports: {} });
    return n[t].call(a.exports, a, a.exports, o), a.exports;
  }
  (t = o(955)),
    (e = o(996)),
    (a = o(855)),
    (r = o(458)),
    (0, t.r8)({
      _: {
        input: {
          tex: {
            physics: {
              PhysicsConfiguration: e,
              PhysicsItems: a,
              PhysicsMethods: r,
            },
          },
        },
      },
    });
})();

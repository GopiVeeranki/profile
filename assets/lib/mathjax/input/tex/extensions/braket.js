!(function () {
  "use strict";
  var e,
    t,
    a,
    r,
    o = {
      243: function (e, t, a) {
        var r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BraketConfiguration = void 0);
        var o = a(251),
          n = a(519);
        a(299),
          (t.BraketConfiguration = o.Configuration.create("braket", {
            handler: {
              character: ["Braket-characters"],
              macro: ["Braket-macros"],
            },
            items:
              ((r = {}), (r[n.BraketItem.prototype.kind] = n.BraketItem), r),
          }));
      },
      519: function (e, t, a) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var a in t)
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function a() {
                this.constructor = e;
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((a.prototype = t.prototype), new a()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BraketItem = void 0);
        var n = a(76),
          i = a(801),
          c = a(398),
          l = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              o(t, e),
              Object.defineProperty(t.prototype, "kind", {
                get: function () {
                  return "braket";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isOpen", {
                get: function () {
                  return !0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.checkItem = function (t) {
                return t.isKind("close")
                  ? [[this.factory.create("mml", this.toMml())], !0]
                  : t.isKind("mml")
                  ? (this.Push(t.toMml()),
                    this.getProperty("single")
                      ? [[this.toMml()], !0]
                      : n.BaseItem.fail)
                  : e.prototype.checkItem.call(this, t);
              }),
              (t.prototype.toMml = function () {
                var t = e.prototype.toMml.call(this),
                  a = this.getProperty("open"),
                  r = this.getProperty("close");
                if (this.getProperty("stretchy"))
                  return c.default.fenced(this.factory.configuration, a, t, r);
                var o = {
                    fence: !0,
                    stretchy: !1,
                    symmetric: !0,
                    texClass: i.TEXCLASS.OPEN,
                  },
                  n = this.create("token", "mo", o, a);
                o.texClass = i.TEXCLASS.CLOSE;
                var l = this.create("token", "mo", o, r);
                return this.create("node", "mrow", [n, t, l], {
                  open: a,
                  close: r,
                  texClass: i.TEXCLASS.INNER,
                });
              }),
              t
            );
          })(n.BaseItem);
        t.BraketItem = l;
      },
      299: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = a(871),
          o = a(277);
        new r.CommandMap(
          "Braket-macros",
          {
            bra: ["Macro", "{\\langle {#1} \\vert}", 1],
            ket: ["Macro", "{\\vert {#1} \\rangle}", 1],
            braket: ["Braket", "\u27e8", "\u27e9", !1, 1 / 0],
            set: ["Braket", "{", "}", !1, 1],
            Bra: ["Macro", "{\\left\\langle {#1} \\right\\vert}", 1],
            Ket: ["Macro", "{\\left\\vert {#1} \\right\\rangle}", 1],
            Braket: ["Braket", "\u27e8", "\u27e9", !0, 1 / 0],
            Set: ["Braket", "{", "}", !0, 1],
            ketbra: ["Macro", "{\\vert {#1} \\rangle\\langle {#2} \\vert}", 2],
            Ketbra: [
              "Macro",
              "{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}",
              2,
            ],
            "|": "Bar",
          },
          o.default
        ),
          new r.MacroMap("Braket-characters", { "|": "Bar" }, o.default);
      },
      277: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = a(360),
          o = a(801),
          n = a(402),
          i = {};
        (i.Macro = r.default.Macro),
          (i.Braket = function (e, t, a, r, o, i) {
            var c = e.GetNext();
            if ("" === c)
              throw new n.default(
                "MissingArgFor",
                "Missing argument for %1",
                e.currentCS
              );
            var l = !0;
            "{" === c && (e.i++, (l = !1)),
              e.Push(
                e.itemFactory
                  .create("braket")
                  .setProperties({
                    barmax: i,
                    barcount: 0,
                    open: a,
                    close: r,
                    stretchy: o,
                    single: l,
                  })
              );
          }),
          (i.Bar = function (e, t) {
            var a = "|" === t ? "|" : "\u2225",
              r = e.stack.Top();
            if (
              "braket" !== r.kind ||
              r.getProperty("barcount") >= r.getProperty("barmax")
            ) {
              var n = e.create(
                "token",
                "mo",
                { texClass: o.TEXCLASS.ORD, stretchy: !1 },
                a
              );
              e.Push(n);
            } else {
              if (
                ("|" === a && "|" === e.GetNext() && (e.i++, (a = "\u2225")),
                r.getProperty("stretchy"))
              ) {
                var i = e.create("node", "TeXAtom", [], {
                  texClass: o.TEXCLASS.CLOSE,
                });
                e.Push(i),
                  r.setProperty("barcount", r.getProperty("barcount") + 1),
                  (i = e.create(
                    "token",
                    "mo",
                    { stretchy: !0, braketbar: !0 },
                    a
                  )),
                  e.Push(i),
                  (i = e.create("node", "TeXAtom", [], {
                    texClass: o.TEXCLASS.OPEN,
                  })),
                  e.Push(i);
              } else {
                var c = e.create(
                  "token",
                  "mo",
                  { stretchy: !1, braketbar: !0 },
                  a
                );
                e.Push(c);
              }
            }
          }),
          (t.default = i);
      },
      955: function (e, t) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (t.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      801: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS),
          (t.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES),
          (t.indentAttributes =
            MathJax._.core.MmlTree.MmlNode.indentAttributes),
          (t.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode),
          (t.AbstractMmlTokenNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode),
          (t.AbstractMmlLayoutNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode),
          (t.AbstractMmlBaseNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode),
          (t.AbstractMmlEmptyNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode),
          (t.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode),
          (t.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode);
      },
      251: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (t.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (t.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      398: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = MathJax._.input.tex.ParseUtil.default);
      },
      76: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MmlStack = MathJax._.input.tex.StackItem.MmlStack),
          (t.BaseItem = MathJax._.input.tex.StackItem.BaseItem);
      },
      871: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbstractSymbolMap =
            MathJax._.input.tex.SymbolMap.AbstractSymbolMap),
          (t.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap),
          (t.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap),
          (t.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap),
          (t.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap),
          (t.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap),
          (t.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap),
          (t.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap);
      },
      402: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = MathJax._.input.tex.TexError.default);
      },
      360: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = MathJax._.input.tex.base.BaseMethods.default);
      },
    },
    n = {};
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var a = (n[e] = { exports: {} });
    return o[e].call(a.exports, a, a.exports, i), a.exports;
  }
  (e = i(955)),
    (t = i(243)),
    (a = i(519)),
    (r = i(277)),
    (0, e.r8)({
      _: {
        input: {
          tex: {
            braket: {
              BraketConfiguration: t,
              BraketItems: a,
              BraketMethods: r,
            },
          },
        },
      },
    });
})();

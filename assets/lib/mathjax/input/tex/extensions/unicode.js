!(function () {
  "use strict";
  var t,
    e,
    a = {
      376: function (t, e, a) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.UnicodeConfiguration = e.UnicodeMethods = void 0);
        var n = a(251),
          o = a(402),
          i = a(871),
          r = a(398),
          u = a(748),
          l = a(992);
        e.UnicodeMethods = {};
        var c = {};
        (e.UnicodeMethods.Unicode = function (t, e) {
          var a = t.GetBrackets(e),
            n = null,
            i = null;
          a &&
            (a
              .replace(/ /g, "")
              .match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)
              ? ((n = a.replace(/ /g, "").split(/,/)), (i = t.GetBrackets(e)))
              : (i = a));
          var p = r.default.trimSpaces(t.GetArgument(e)).replace(/^0x/, "x");
          if (!p.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/))
            throw new o.default(
              "BadUnicode",
              "Argument to \\unicode must be a number"
            );
          var M = parseInt(p.match(/^x/) ? "0" + p : p);
          c[M] ? i || (i = c[M][2]) : (c[M] = [800, 200, i, M]),
            n &&
              ((c[M][0] = Math.floor(1e3 * parseFloat(n[0]))),
              (c[M][1] = Math.floor(1e3 * parseFloat(n[1]))));
          var d = t.stack.env.font,
            s = {};
          i
            ? ((c[M][2] = s.fontfamily = i.replace(/'/g, "'")),
              d &&
                (d.match(/bold/) && (s.fontweight = "bold"),
                d.match(/italic|-mathit/) && (s.fontstyle = "italic")))
            : d && (s.mathvariant = d);
          var x = t.create("token", "mtext", s, l.numeric(p));
          u.default.setProperty(x, "unicode", !0), t.Push(x);
        }),
          new i.CommandMap("unicode", { unicode: "Unicode" }, e.UnicodeMethods),
          (e.UnicodeConfiguration = n.Configuration.create("unicode", {
            handler: { macro: ["unicode"] },
          }));
      },
      955: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (e.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      992: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.options = MathJax._.util.Entities.options),
          (e.entities = MathJax._.util.Entities.entities),
          (e.add = MathJax._.util.Entities.add),
          (e.remove = MathJax._.util.Entities.remove),
          (e.translate = MathJax._.util.Entities.translate),
          (e.numeric = MathJax._.util.Entities.numeric);
      },
      251: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (e.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (e.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      748: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.NodeUtil.default);
      },
      398: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.ParseUtil.default);
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
      402: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.TexError.default);
      },
    },
    n = {};
  function o(t) {
    var e = n[t];
    if (void 0 !== e) return e.exports;
    var i = (n[t] = { exports: {} });
    return a[t](i, i.exports, o), i.exports;
  }
  (t = o(955)),
    (e = o(376)),
    (0, t.r8)({
      _: { input: { tex: { unicode: { UnicodeConfiguration: e } } } },
    });
})();

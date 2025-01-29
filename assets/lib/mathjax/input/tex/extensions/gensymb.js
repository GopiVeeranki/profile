!(function () {
  "use strict";
  var a,
    t,
    n = {
      82: function (a, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GensymbConfiguration = void 0);
        var e = n(251),
          o = n(108);
        new (n(871).CharacterMap)(
          "gensymb-symbols",
          function (a, t) {
            var n = t.attributes || {};
            (n.mathvariant = o.TexConstant.Variant.NORMAL),
              (n.class = "MathML-Unit");
            var e = a.create("token", "mi", n, t.char);
            a.Push(e);
          },
          {
            ohm: "\u2126",
            degree: "\xb0",
            celsius: "\u2103",
            perthousand: "\u2030",
            micro: "\xb5",
          }
        ),
          (t.GensymbConfiguration = e.Configuration.create("gensymb", {
            handler: { macro: ["gensymb-symbols"] },
          }));
      },
      955: function (a, t) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (t.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      251: function (a, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (t.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (t.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      871: function (a, t) {
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
      108: function (a, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
      },
    },
    e = {};
  function o(a) {
    var t = e[a];
    if (void 0 !== t) return t.exports;
    var i = (e[a] = { exports: {} });
    return n[a](i, i.exports, o), i.exports;
  }
  (a = o(955)),
    (t = o(82)),
    (0, a.r8)({
      _: { input: { tex: { gensymb: { GensymbConfiguration: t } } } },
    });
})();

!(function () {
  "use strict";
  var o,
    a,
    t = {
      888: function (o, a, t) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.ColorConfiguration = a.ColorV2Methods = void 0);
        var n = t(871),
          e = t(251);
        (a.ColorV2Methods = {
          Color: function (o, a) {
            var t = o.GetArgument(a),
              n = o.stack.env.color;
            o.stack.env.color = t;
            var e = o.ParseArg(a);
            n ? (o.stack.env.color = n) : delete o.stack.env.color;
            var r = o.create("node", "mstyle", [e], { mathcolor: t });
            o.Push(r);
          },
        }),
          new n.CommandMap("colorv2", { color: "Color" }, a.ColorV2Methods),
          (a.ColorConfiguration = e.Configuration.create("colorv2", {
            handler: { macro: ["colorv2"] },
          }));
      },
      955: function (o, a) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (a.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      251: function (o, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (a.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (a.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      871: function (o, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.AbstractSymbolMap =
            MathJax._.input.tex.SymbolMap.AbstractSymbolMap),
          (a.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap),
          (a.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap),
          (a.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap),
          (a.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap),
          (a.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap),
          (a.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap),
          (a.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap);
      },
    },
    n = {};
  function e(o) {
    var a = n[o];
    if (void 0 !== a) return a.exports;
    var r = (n[o] = { exports: {} });
    return t[o](r, r.exports, e), r.exports;
  }
  (o = e(955)),
    (a = e(888)),
    (0, o.r8)({
      _: { input: { tex: { colorv2: { ColorV2Configuration: a } } } },
    });
})();

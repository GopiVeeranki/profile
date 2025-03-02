!(function () {
  "use strict";
  var t,
    a,
    e = {
      774: function (t, a, e) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.CancelConfiguration = a.CancelMethods = void 0);
        var n = e(251),
          o = e(108),
          i = e(871),
          c = e(398),
          r = e(975);
        (a.CancelMethods = {}),
          (a.CancelMethods.Cancel = function (t, a, e) {
            var n = t.GetBrackets(a, ""),
              o = t.ParseArg(a),
              i = c.default.keyvalOptions(n, r.ENCLOSE_OPTIONS);
            (i.notation = e), t.Push(t.create("node", "menclose", [o], i));
          }),
          (a.CancelMethods.CancelTo = function (t, a) {
            var e = t.GetBrackets(a, ""),
              n = t.ParseArg(a),
              i = t.ParseArg(a),
              l = c.default.keyvalOptions(e, r.ENCLOSE_OPTIONS);
            (l.notation = [
              o.TexConstant.Notation.UPDIAGONALSTRIKE,
              o.TexConstant.Notation.UPDIAGONALARROW,
              o.TexConstant.Notation.NORTHEASTARROW,
            ].join(" ")),
              (n = t.create("node", "mpadded", [n], {
                depth: "-.1em",
                height: "+.1em",
                voffset: ".1em",
              })),
              t.Push(
                t.create("node", "msup", [
                  t.create("node", "menclose", [i], l),
                  n,
                ])
              );
          }),
          new i.CommandMap(
            "cancel",
            {
              cancel: ["Cancel", o.TexConstant.Notation.UPDIAGONALSTRIKE],
              bcancel: ["Cancel", o.TexConstant.Notation.DOWNDIAGONALSTRIKE],
              xcancel: [
                "Cancel",
                o.TexConstant.Notation.UPDIAGONALSTRIKE +
                  " " +
                  o.TexConstant.Notation.DOWNDIAGONALSTRIKE,
              ],
              cancelto: "CancelTo",
            },
            a.CancelMethods
          ),
          (a.CancelConfiguration = n.Configuration.create("cancel", {
            handler: { macro: ["cancel"] },
          }));
      },
      955: function (t, a) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (a.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      251: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (a.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (a.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      398: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = MathJax._.input.tex.ParseUtil.default);
      },
      871: function (t, a) {
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
      108: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
      },
      975: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.ENCLOSE_OPTIONS =
            MathJax._.input.tex.enclose.EncloseConfiguration.ENCLOSE_OPTIONS),
          (a.EncloseMethods =
            MathJax._.input.tex.enclose.EncloseConfiguration.EncloseMethods),
          (a.EncloseConfiguration =
            MathJax._.input.tex.enclose.EncloseConfiguration.EncloseConfiguration);
      },
    },
    n = {};
  function o(t) {
    var a = n[t];
    if (void 0 !== a) return a.exports;
    var i = (n[t] = { exports: {} });
    return e[t](i, i.exports, o), i.exports;
  }
  (t = o(955)),
    (a = o(774)),
    (0, t.r8)({
      _: { input: { tex: { cancel: { CancelConfiguration: a } } } },
    });
})();

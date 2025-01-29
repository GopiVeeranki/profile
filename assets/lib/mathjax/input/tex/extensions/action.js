!(function () {
  "use strict";
  var t,
    a,
    o = {
      669: function (t, a, o) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.ActionConfiguration = a.ActionMethods = void 0);
        var e = o(251),
          n = o(193),
          i = o(871),
          r = o(360);
        (a.ActionMethods = {}),
          (a.ActionMethods.Macro = r.default.Macro),
          (a.ActionMethods.Toggle = function (t, a) {
            for (var o, e = []; "\\endtoggle" !== (o = t.GetArgument(a)); )
              e.push(new n.default(o, t.stack.env, t.configuration).mml());
            t.Push(t.create("node", "maction", e, { actiontype: "toggle" }));
          }),
          (a.ActionMethods.Mathtip = function (t, a) {
            var o = t.ParseArg(a),
              e = t.ParseArg(a);
            t.Push(
              t.create("node", "maction", [o, e], { actiontype: "tooltip" })
            );
          }),
          new i.CommandMap(
            "action-macros",
            {
              toggle: "Toggle",
              mathtip: "Mathtip",
              texttip: ["Macro", "\\mathtip{#1}{\\text{#2}}", 2],
            },
            a.ActionMethods
          ),
          (a.ActionConfiguration = e.Configuration.create("action", {
            handler: { macro: ["action-macros"] },
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
      193: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = MathJax._.input.tex.TexParser.default);
      },
      360: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = MathJax._.input.tex.base.BaseMethods.default);
      },
    },
    e = {};
  function n(t) {
    var a = e[t];
    if (void 0 !== a) return a.exports;
    var i = (e[t] = { exports: {} });
    return o[t](i, i.exports, n), i.exports;
  }
  (t = n(955)),
    (a = n(669)),
    (0, t.r8)({
      _: { input: { tex: { action: { ActionConfiguration: a } } } },
    });
})();

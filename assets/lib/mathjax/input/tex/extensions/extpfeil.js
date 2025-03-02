!(function () {
  "use strict";
  var t,
    e,
    a = {
      646: function (t, e, a) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ExtpfeilConfiguration = e.ExtpfeilMethods = void 0);
        var o = a(251),
          n = a(871),
          r = a(939),
          i = a(892),
          u = a(417),
          x = a(402);
        (e.ExtpfeilMethods = {}),
          (e.ExtpfeilMethods.xArrow = r.AmsMethods.xArrow),
          (e.ExtpfeilMethods.NewExtArrow = function (t, a) {
            var o = t.GetArgument(a),
              n = t.GetArgument(a),
              r = t.GetArgument(a);
            if (!o.match(/^\\([a-z]+|.)$/i))
              throw new x.default(
                "NewextarrowArg1",
                "First argument to %1 must be a control sequence name",
                a
              );
            if (!n.match(/^(\d+),(\d+)$/))
              throw new x.default(
                "NewextarrowArg2",
                "Second argument to %1 must be two integers separated by a comma",
                a
              );
            if (!r.match(/^(\d+|0x[0-9A-F]+)$/i))
              throw new x.default(
                "NewextarrowArg3",
                "Third argument to %1 must be a unicode character number",
                a
              );
            o = o.substr(1);
            var u = n.split(",");
            i.default.addMacro(t, o, e.ExtpfeilMethods.xArrow, [
              parseInt(r),
              parseInt(u[0]),
              parseInt(u[1]),
            ]);
          }),
          new n.CommandMap(
            "extpfeil",
            {
              xtwoheadrightarrow: ["xArrow", 8608, 12, 16],
              xtwoheadleftarrow: ["xArrow", 8606, 17, 13],
              xmapsto: ["xArrow", 8614, 6, 7],
              xlongequal: ["xArrow", 61, 7, 7],
              xtofrom: ["xArrow", 8644, 12, 12],
              Newextarrow: "NewExtArrow",
            },
            e.ExtpfeilMethods
          );
        e.ExtpfeilConfiguration = o.Configuration.create("extpfeil", {
          handler: { macro: ["extpfeil"] },
          init: function (t) {
            u.NewcommandConfiguration.init(t);
          },
        });
      },
      955: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (e.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      251: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (e.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (e.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
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
      939: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AmsMethods = MathJax._.input.tex.ams.AmsMethods.AmsMethods),
          (e.NEW_OPS = MathJax._.input.tex.ams.AmsMethods.NEW_OPS);
      },
      417: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NewcommandConfiguration =
            MathJax._.input.tex.newcommand.NewcommandConfiguration.NewcommandConfiguration);
      },
      892: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = MathJax._.input.tex.newcommand.NewcommandUtil.default);
      },
    },
    o = {};
  function n(t) {
    var e = o[t];
    if (void 0 !== e) return e.exports;
    var r = (o[t] = { exports: {} });
    return a[t](r, r.exports, n), r.exports;
  }
  (t = n(955)),
    (e = n(646)),
    (0, t.r8)({
      _: { input: { tex: { extpfeil: { ExtpfeilConfiguration: e } } } },
    });
})();

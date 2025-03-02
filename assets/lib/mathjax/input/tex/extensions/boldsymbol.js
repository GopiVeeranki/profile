!(function () {
  "use strict";
  var t,
    a,
    o = {
      986: function (t, a, o) {
        var e =
          (this && this.__values) ||
          function (t) {
            var a = "function" == typeof Symbol && Symbol.iterator,
              o = a && t[a],
              e = 0;
            if (o) return o.call(t);
            if (t && "number" == typeof t.length)
              return {
                next: function () {
                  return (
                    t && e >= t.length && (t = void 0),
                    { value: t && t[e++], done: !t }
                  );
                },
              };
            throw new TypeError(
              a ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.BoldsymbolConfiguration =
            a.rewriteBoldTokens =
            a.createBoldToken =
            a.BoldsymbolMethods =
              void 0);
        var n = o(251),
          r = o(748),
          i = o(108),
          l = o(871),
          s = o(348),
          u = {};
        function d(t, a, o, e) {
          var n = s.NodeFactory.createToken(t, a, o, e);
          return (
            "mtext" !== a &&
              t.configuration.parser.stack.env.boldsymbol &&
              (r.default.setProperty(n, "fixBold", !0),
              t.configuration.addNode("fixBold", n)),
            n
          );
        }
        function x(t) {
          var a, o;
          try {
            for (
              var n = e(t.data.getList("fixBold")), l = n.next();
              !l.done;
              l = n.next()
            ) {
              var s = l.value;
              if (r.default.getProperty(s, "fixBold")) {
                var d = r.default.getAttribute(s, "mathvariant");
                null == d
                  ? r.default.setAttribute(
                      s,
                      "mathvariant",
                      i.TexConstant.Variant.BOLD
                    )
                  : r.default.setAttribute(s, "mathvariant", u[d] || d),
                  r.default.removeProperties(s, "fixBold");
              }
            }
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              l && !l.done && (o = n.return) && o.call(n);
            } finally {
              if (a) throw a.error;
            }
          }
        }
        (u[i.TexConstant.Variant.NORMAL] = i.TexConstant.Variant.BOLD),
          (u[i.TexConstant.Variant.ITALIC] = i.TexConstant.Variant.BOLDITALIC),
          (u[i.TexConstant.Variant.FRAKTUR] =
            i.TexConstant.Variant.BOLDFRAKTUR),
          (u[i.TexConstant.Variant.SCRIPT] = i.TexConstant.Variant.BOLDSCRIPT),
          (u[i.TexConstant.Variant.SANSSERIF] =
            i.TexConstant.Variant.BOLDSANSSERIF),
          (u["-tex-calligraphic"] = "-tex-bold-calligraphic"),
          (u["-tex-oldstyle"] = "-tex-bold-oldstyle"),
          (u["-tex-mathit"] = i.TexConstant.Variant.BOLDITALIC),
          (a.BoldsymbolMethods = {}),
          (a.BoldsymbolMethods.Boldsymbol = function (t, a) {
            var o = t.stack.env.boldsymbol;
            t.stack.env.boldsymbol = !0;
            var e = t.ParseArg(a);
            (t.stack.env.boldsymbol = o), t.Push(e);
          }),
          new l.CommandMap(
            "boldsymbol",
            { boldsymbol: "Boldsymbol" },
            a.BoldsymbolMethods
          ),
          (a.createBoldToken = d),
          (a.rewriteBoldTokens = x),
          (a.BoldsymbolConfiguration = n.Configuration.create("boldsymbol", {
            handler: { macro: ["boldsymbol"] },
            nodes: { token: d },
            postprocessors: [x],
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
      348: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory);
      },
      748: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = MathJax._.input.tex.NodeUtil.default);
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
    },
    e = {};
  function n(t) {
    var a = e[t];
    if (void 0 !== a) return a.exports;
    var r = (e[t] = { exports: {} });
    return o[t].call(r.exports, r, r.exports, n), r.exports;
  }
  (t = n(955)),
    (a = n(986)),
    (0, t.r8)({
      _: { input: { tex: { boldsymbol: { BoldsymbolConfiguration: a } } } },
    });
})();

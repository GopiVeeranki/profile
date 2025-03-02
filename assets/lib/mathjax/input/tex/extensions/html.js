!(function () {
  "use strict";
  var t,
    a,
    e,
    n = {
      738: function (t, a, e) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.HtmlConfiguration = void 0);
        var n = e(251),
          r = e(871),
          o = e(248);
        new r.CommandMap(
          "html_macros",
          { href: "Href", class: "Class", style: "Style", cssId: "Id" },
          o.default
        ),
          (a.HtmlConfiguration = n.Configuration.create("html", {
            handler: { macro: ["html_macros"] },
          }));
      },
      248: function (t, a, e) {
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = e(748),
          r = {
            Href: function (t, a) {
              var e = t.GetArgument(a),
                r = o(t, a);
              n.default.setAttribute(r, "href", e), t.Push(r);
            },
            Class: function (t, a) {
              var e = t.GetArgument(a),
                r = o(t, a),
                i = n.default.getAttribute(r, "class");
              i && (e = i + " " + e),
                n.default.setAttribute(r, "class", e),
                t.Push(r);
            },
            Style: function (t, a) {
              var e = t.GetArgument(a),
                r = o(t, a),
                i = n.default.getAttribute(r, "style");
              i &&
                (";" !== e.charAt(e.length - 1) && (e += ";"),
                (e = i + " " + e)),
                n.default.setAttribute(r, "style", e),
                t.Push(r);
            },
            Id: function (t, a) {
              var e = t.GetArgument(a),
                r = o(t, a);
              n.default.setAttribute(r, "id", e), t.Push(r);
            },
          },
          o = function (t, a) {
            var e = t.ParseArg(a);
            if (!n.default.isInferred(e)) return e;
            var r = n.default.getChildren(e);
            if (1 === r.length) return r[0];
            var o = t.create("node", "mrow");
            return (
              n.default.copyChildren(e, o), n.default.copyAttributes(e, o), o
            );
          };
        a.default = r;
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
    },
    r = {};
  function o(t) {
    var a = r[t];
    if (void 0 !== a) return a.exports;
    var e = (r[t] = { exports: {} });
    return n[t](e, e.exports, o), e.exports;
  }
  (t = o(955)),
    (a = o(738)),
    (e = o(248)),
    (0, t.r8)({
      _: { input: { tex: { html: { HtmlConfiguration: a, HtmlMethods: e } } } },
    });
})();

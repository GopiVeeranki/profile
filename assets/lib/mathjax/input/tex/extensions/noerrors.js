!(function () {
  "use strict";
  var o,
    n,
    r = {
      634: function (o, n, r) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.NoErrorsConfiguration = void 0);
        var t = r(251);
        n.NoErrorsConfiguration = t.Configuration.create("noerrors", {
          nodes: {
            error: function (o, n, r, t) {
              var e = o.create("token", "mtext", {}, t.replace(/\n/g, " "));
              return o.create("node", "merror", [e], {
                "data-mjx-error": n,
                title: n,
              });
            },
          },
        });
      },
      955: function (o, n) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (n.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      251: function (o, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (n.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (n.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
    },
    t = {};
  function e(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var a = (t[o] = { exports: {} });
    return r[o](a, a.exports, e), a.exports;
  }
  (o = e(955)),
    (n = e(634)),
    (0, o.r8)({
      _: { input: { tex: { noerrors: { NoErrorsConfiguration: n } } } },
    });
})();

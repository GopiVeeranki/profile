!(function () {
  "use strict";
  var n,
    o,
    t = {
      999: function (n, o, t) {
        var e =
          (this && this.__values) ||
          function (n) {
            var o = "function" == typeof Symbol && Symbol.iterator,
              t = o && n[o],
              e = 0;
            if (t) return t.call(n);
            if (n && "number" == typeof n.length)
              return {
                next: function () {
                  return (
                    n && e >= n.length && (n = void 0),
                    { value: n && n[e++], done: !n }
                  );
                },
              };
            throw new TypeError(
              o ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.NoUndefinedConfiguration = void 0);
        var r = t(251);
        o.NoUndefinedConfiguration = r.Configuration.create("noundefined", {
          fallback: {
            macro: function (n, o) {
              var t,
                r,
                i = n.create("text", "\\" + o),
                a = n.options.noundefined || {},
                u = {};
              try {
                for (
                  var f = e(["color", "background", "size"]), l = f.next();
                  !l.done;
                  l = f.next()
                ) {
                  var c = l.value;
                  a[c] && (u["math" + c] = a[c]);
                }
              } catch (n) {
                t = { error: n };
              } finally {
                try {
                  l && !l.done && (r = f.return) && r.call(f);
                } finally {
                  if (t) throw t.error;
                }
              }
              n.Push(n.create("node", "mtext", [], u, i));
            },
          },
          options: { noundefined: { color: "red", background: "", size: "" } },
          priority: 3,
        });
      },
      955: function (n, o) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (o.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      251: function (n, o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (o.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (o.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n].call(i.exports, i, i.exports, r), i.exports;
  }
  (n = r(955)),
    (o = r(999)),
    (0, n.r8)({
      _: { input: { tex: { noundefined: { NoUndefinedConfiguration: o } } } },
    });
})();

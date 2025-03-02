!(function () {
  "use strict";
  var t,
    a,
    e = {
      359: function (t, a, e) {
        var n,
          o =
            (this && this.__values) ||
            function (t) {
              var a = "function" == typeof Symbol && Symbol.iterator,
                e = a && t[a],
                n = 0;
              if (e) return e.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && n >= t.length && (t = void 0),
                      { value: t && t[n++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                a
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.ConfigMacrosConfiguration = void 0);
        var i = e(251),
          r = e(74),
          p = e(871),
          l = e(945),
          s = e(924),
          u = e(432),
          c = e(975),
          M = "configmacros-map",
          f = "configmacros-env-map";
        a.ConfigMacrosConfiguration = i.Configuration.create("configmacros", {
          init: function (t) {
            new p.CommandMap(M, {}, {}),
              new p.EnvironmentMap(f, l.default.environment, {}, {}),
              t.append(
                i.Configuration.local({
                  handler: { macro: [M], environment: [f] },
                  priority: 3,
                })
              );
          },
          config: function (t, a) {
            !(function (t) {
              var a,
                e,
                n = t.parseOptions.handlers.retrieve(M),
                i = t.parseOptions.options.macros;
              try {
                for (
                  var r = o(Object.keys(i)), p = r.next();
                  !p.done;
                  p = r.next()
                ) {
                  var l = p.value,
                    c = "string" == typeof i[l] ? [i[l]] : i[l],
                    f = Array.isArray(c[2])
                      ? new s.Macro(
                          l,
                          u.default.MacroWithTemplate,
                          c.slice(0, 2).concat(c[2])
                        )
                      : new s.Macro(l, u.default.Macro, c);
                  n.add(l, f);
                }
              } catch (t) {
                a = { error: t };
              } finally {
                try {
                  p && !p.done && (e = r.return) && e.call(r);
                } finally {
                  if (a) throw a.error;
                }
              }
            })(a),
              (function (t) {
                var a,
                  e,
                  n = t.parseOptions.handlers.retrieve(f),
                  i = t.parseOptions.options.environments;
                try {
                  for (
                    var r = o(Object.keys(i)), p = r.next();
                    !p.done;
                    p = r.next()
                  ) {
                    var l = p.value;
                    n.add(
                      l,
                      new s.Macro(l, u.default.BeginEnv, [!0].concat(i[l]))
                    );
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    p && !p.done && (e = r.return) && e.call(r);
                  } finally {
                    if (a) throw a.error;
                  }
                }
              })(a);
          },
          items:
            ((n = {}), (n[c.BeginEnvItem.prototype.kind] = c.BeginEnvItem), n),
          options: { macros: r.expandable({}), environments: r.expandable({}) },
        });
      },
      955: function (t, a) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (a.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      74: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.isObject = MathJax._.util.Options.isObject),
          (a.APPEND = MathJax._.util.Options.APPEND),
          (a.REMOVE = MathJax._.util.Options.REMOVE),
          (a.OPTIONS = MathJax._.util.Options.OPTIONS),
          (a.Expandable = MathJax._.util.Options.Expandable),
          (a.expandable = MathJax._.util.Options.expandable),
          (a.makeArray = MathJax._.util.Options.makeArray),
          (a.keys = MathJax._.util.Options.keys),
          (a.copy = MathJax._.util.Options.copy),
          (a.insert = MathJax._.util.Options.insert),
          (a.defaultOptions = MathJax._.util.Options.defaultOptions),
          (a.userOptions = MathJax._.util.Options.userOptions),
          (a.selectOptions = MathJax._.util.Options.selectOptions),
          (a.selectOptionsFromKeys =
            MathJax._.util.Options.selectOptionsFromKeys),
          (a.separateOptions = MathJax._.util.Options.separateOptions),
          (a.lookup = MathJax._.util.Options.lookup);
      },
      251: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (a.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (a.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      945: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = MathJax._.input.tex.ParseMethods.default);
      },
      924: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.Symbol = MathJax._.input.tex.Symbol.Symbol),
          (a.Macro = MathJax._.input.tex.Symbol.Macro);
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
      975: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.BeginEnvItem =
            MathJax._.input.tex.newcommand.NewcommandItems.BeginEnvItem);
      },
      432: function (t, a) {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default =
            MathJax._.input.tex.newcommand.NewcommandMethods.default);
      },
    },
    n = {};
  function o(t) {
    var a = n[t];
    if (void 0 !== a) return a.exports;
    var i = (n[t] = { exports: {} });
    return e[t].call(i.exports, i, i.exports, o), i.exports;
  }
  (t = o(955)),
    (a = o(359)),
    (0, t.r8)({
      _: { input: { tex: { configmacros: { ConfigMacrosConfiguration: a } } } },
    });
})();

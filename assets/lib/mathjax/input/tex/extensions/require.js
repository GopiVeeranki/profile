!(function () {
  "use strict";
  var e,
    t,
    a = {
      778: function (e, t, a) {
        var o =
            (this && this.__values) ||
            function (e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                a = t && e[t],
                o = 0;
              if (a) return a.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && o >= e.length && (e = void 0),
                      { value: e && e[o++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          r =
            (this && this.__read) ||
            function (e, t) {
              var a = "function" == typeof Symbol && e[Symbol.iterator];
              if (!a) return e;
              var o,
                r,
                n = a.call(e),
                i = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(o = n.next()).done; )
                  i.push(o.value);
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  o && !o.done && (a = n.return) && a.call(n);
                } finally {
                  if (r) throw r.error;
                }
              }
              return i;
            },
          n =
            (this && this.__spreadArray) ||
            function (e, t) {
              for (var a = 0, o = t.length, r = e.length; a < o; a++, r++)
                e[r] = t[a];
              return e;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RequireConfiguration =
            t.options =
            t.RequireMethods =
            t.RequireLoad =
              void 0);
        var i = a(251),
          p = a(871),
          s = a(402),
          u = a(955),
          l = a(629),
          c = a(282),
          f = a(149),
          h = a(74),
          x = u.MathJax.config;
        function M(e, t) {
          var a,
            r = e.parseOptions.options.require,
            n = e.parseOptions.packageData.get("require").required,
            p = t.substr(r.prefix.length);
          if (n.indexOf(p) < 0) {
            n.push(p),
              (function (e, t) {
                var a, r;
                void 0 === t && (t = []);
                var n = e.parseOptions.options.require.prefix;
                try {
                  for (var i = o(t), p = i.next(); !p.done; p = i.next()) {
                    var s = p.value;
                    s.substr(0, n.length) === n && M(e, s);
                  }
                } catch (e) {
                  a = { error: e };
                } finally {
                  try {
                    p && !p.done && (r = i.return) && r.call(i);
                  } finally {
                    if (a) throw a.error;
                  }
                }
              })(e, c.CONFIG.dependencies[t]);
            var s = i.ConfigurationHandler.get(p);
            if (s) {
              var u = x[t] || {};
              s.options &&
                1 === Object.keys(s.options).length &&
                s.options[p] &&
                (((a = {})[p] = u), (u = a)),
                e.configuration.add(p, e, u);
              var l = e.parseOptions.packageData.get("require").configured;
              s.preprocessors.length &&
                !l.has(p) &&
                (l.set(p, !0), f.mathjax.retryAfter(Promise.resolve()));
            }
          }
        }
        function d(e, t) {
          var a = e.options.require,
            o = a.allow,
            r = ("[" === t.substr(0, 1) ? "" : a.prefix) + t;
          if (
            !(o.hasOwnProperty(r)
              ? o[r]
              : o.hasOwnProperty(t)
              ? o[t]
              : a.defaultAllow)
          )
            throw new s.default(
              "BadRequire",
              'Extension "%1" is not allowed to be loaded',
              r
            );
          l.Package.packages.has(r)
            ? M(e.configuration.packageData.get("require").jax, r)
            : f.mathjax.retryAfter(c.Loader.load(r));
        }
        (t.RequireLoad = d),
          (t.RequireMethods = {
            Require: function (e, t) {
              var a = e.GetArgument(t);
              if (a.match(/[^_a-zA-Z0-9]/) || "" === a)
                throw new s.default(
                  "BadPackageName",
                  "Argument for %1 is not a valid package name",
                  t
                );
              d(e, a);
            },
          }),
          (t.options = {
            require: {
              allow: h.expandable({
                base: !1,
                "all-packages": !1,
                autoload: !1,
                configmacros: !1,
                tagformat: !1,
                setoptions: !1,
              }),
              defaultAllow: !0,
              prefix: "tex",
            },
          }),
          new p.CommandMap("require", { require: "Require" }, t.RequireMethods),
          (t.RequireConfiguration = i.Configuration.create("require", {
            handler: { macro: ["require"] },
            config: function (e, t) {
              t.parseOptions.packageData.set("require", {
                jax: t,
                required: n([], r(t.options.packages)),
                configured: new Map(),
              });
              var a = t.parseOptions.options.require,
                o = a.prefix;
              if (o.match(/[^_a-zA-Z0-9]/))
                throw Error("Illegal characters used in \\require prefix");
              c.CONFIG.paths[o] ||
                (c.CONFIG.paths[o] = "[mathjax]/input/tex/extensions"),
                (a.prefix = "[" + o + "]/");
            },
            options: t.options,
          }));
      },
      955: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isObject = MathJax._.components.global.isObject),
          (t.combineConfig = MathJax._.components.global.combineConfig),
          (t.combineDefaults = MathJax._.components.global.combineDefaults),
          (t.combineWithMathJax =
            MathJax._.components.global.combineWithMathJax),
          (t.MathJax = MathJax._.components.global.MathJax);
      },
      149: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.mathjax = MathJax._.mathjax.mathjax);
      },
      74: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isObject = MathJax._.util.Options.isObject),
          (t.APPEND = MathJax._.util.Options.APPEND),
          (t.REMOVE = MathJax._.util.Options.REMOVE),
          (t.OPTIONS = MathJax._.util.Options.OPTIONS),
          (t.Expandable = MathJax._.util.Options.Expandable),
          (t.expandable = MathJax._.util.Options.expandable),
          (t.makeArray = MathJax._.util.Options.makeArray),
          (t.keys = MathJax._.util.Options.keys),
          (t.copy = MathJax._.util.Options.copy),
          (t.insert = MathJax._.util.Options.insert),
          (t.defaultOptions = MathJax._.util.Options.defaultOptions),
          (t.userOptions = MathJax._.util.Options.userOptions),
          (t.selectOptions = MathJax._.util.Options.selectOptions),
          (t.selectOptionsFromKeys =
            MathJax._.util.Options.selectOptionsFromKeys),
          (t.separateOptions = MathJax._.util.Options.separateOptions),
          (t.lookup = MathJax._.util.Options.lookup);
      },
      251: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (t.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (t.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      871: function (e, t) {
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
      402: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = MathJax._.input.tex.TexError.default);
      },
      282: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PathFilters = MathJax._.components.loader.PathFilters),
          (t.Loader = MathJax._.components.loader.Loader),
          (t.MathJax = MathJax._.components.loader.MathJax),
          (t.CONFIG = MathJax._.components.loader.CONFIG);
      },
      629: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PackageError = MathJax._.components.package.PackageError),
          (t.Package = MathJax._.components.package.Package);
      },
    },
    o = {};
  function r(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var n = (o[e] = { exports: {} });
    return a[e].call(n.exports, n, n.exports, r), n.exports;
  }
  (e = r(955)),
    (t = r(778)),
    (0, e.combineWithMathJax)({
      _: { input: { tex: { require: { RequireConfiguration: t } } } },
    });
})();

!(function () {
  "use strict";
  var e,
    t,
    a,
    n,
    r,
    i = {
      48: function (e, t, a) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NewcommandConfiguration = void 0);
        var r = a(251),
          i = a(205),
          o = a(406);
        a(297);
        var u = a(945),
          l = a(871);
        t.NewcommandConfiguration = r.Configuration.create("newcommand", {
          handler: { macro: ["Newcommand-macros"] },
          items:
            ((n = {}), (n[i.BeginEnvItem.prototype.kind] = i.BeginEnvItem), n),
          options: { maxMacros: 1e3 },
          init: function (e) {
            new l.DelimiterMap(
              o.default.NEW_DELIMITER,
              u.default.delimiter,
              {}
            ),
              new l.CommandMap(o.default.NEW_COMMAND, {}, {}),
              new l.EnvironmentMap(
                o.default.NEW_ENVIRONMENT,
                u.default.environment,
                {},
                {}
              ),
              e.append(
                r.Configuration.local({
                  handler: {
                    character: [],
                    delimiter: [o.default.NEW_DELIMITER],
                    macro: [o.default.NEW_DELIMITER, o.default.NEW_COMMAND],
                    environment: [o.default.NEW_ENVIRONMENT],
                  },
                  priority: -1,
                })
              );
          },
        });
      },
      205: function (e, t, a) {
        var n,
          r =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var a in t)
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function a() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((a.prototype = t.prototype), new a()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BeginEnvItem = void 0);
        var i = a(402),
          o = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r(t, e),
              Object.defineProperty(t.prototype, "kind", {
                get: function () {
                  return "beginEnv";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isOpen", {
                get: function () {
                  return !0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.checkItem = function (t) {
                if (t.isKind("end")) {
                  if (t.getName() !== this.getName())
                    throw new i.default(
                      "EnvBadEnd",
                      "\\begin{%1} ended with \\end{%2}",
                      this.getName(),
                      t.getName()
                    );
                  return [[this.factory.create("mml", this.toMml())], !0];
                }
                if (t.isKind("stop"))
                  throw new i.default(
                    "EnvMissingEnd",
                    "Missing \\end{%1}",
                    this.getName()
                  );
                return e.prototype.checkItem.call(this, t);
              }),
              t
            );
          })(a(76).BaseItem);
        t.BeginEnvItem = o;
      },
      297: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = a(107);
        new (a(871).CommandMap)(
          "Newcommand-macros",
          {
            newcommand: "NewCommand",
            renewcommand: "NewCommand",
            newenvironment: "NewEnvironment",
            renewenvironment: "NewEnvironment",
            def: "MacroDef",
            let: "Let",
          },
          n.default
        );
      },
      107: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = a(402),
          r = a(871),
          i = a(360),
          o = a(398),
          u = a(406),
          l = {
            NewCommand: function (e, t) {
              var a = u.default.GetCsNameArgument(e, t),
                n = u.default.GetArgCount(e, t),
                r = e.GetBrackets(t),
                i = e.GetArgument(t);
              u.default.addMacro(e, a, l.Macro, [i, n, r]);
            },
            NewEnvironment: function (e, t) {
              var a = o.default.trimSpaces(e.GetArgument(t)),
                n = u.default.GetArgCount(e, t),
                r = e.GetBrackets(t),
                i = e.GetArgument(t),
                c = e.GetArgument(t);
              u.default.addEnvironment(e, a, l.BeginEnv, [!0, i, c, n, r]);
            },
            MacroDef: function (e, t) {
              var a = u.default.GetCSname(e, t),
                n = u.default.GetTemplate(e, t, "\\" + a),
                r = e.GetArgument(t);
              n instanceof Array
                ? u.default.addMacro(e, a, l.MacroWithTemplate, [r].concat(n))
                : u.default.addMacro(e, a, l.Macro, [r, n]);
            },
            Let: function (e, t) {
              var a = u.default.GetCSname(e, t),
                n = e.GetNext();
              "=" === n && (e.i++, (n = e.GetNext()));
              var i = e.configuration.handlers;
              if ("\\" !== n) {
                e.i++;
                var o = i.get("delimiter").lookup(n);
                o
                  ? u.default.addDelimiter(e, "\\" + a, o.char, o.attributes)
                  : u.default.addMacro(e, a, l.Macro, [n]);
              } else {
                t = u.default.GetCSname(e, t);
                var c = i.get("delimiter").lookup("\\" + t);
                if (c)
                  return void u.default.addDelimiter(
                    e,
                    "\\" + a,
                    c.char,
                    c.attributes
                  );
                var f = i.get("macro").applicable(t);
                if (!f) return;
                if (f instanceof r.MacroMap) {
                  var s = f.lookup(t);
                  return void u.default.addMacro(
                    e,
                    a,
                    s.func,
                    s.args,
                    s.symbol
                  );
                }
                c = f.lookup(t);
                var d = u.default.disassembleSymbol(a, c);
                u.default.addMacro(
                  e,
                  a,
                  function (e, t) {
                    for (var a = [], n = 2; n < arguments.length; n++)
                      a[n - 2] = arguments[n];
                    var r = u.default.assembleSymbol(a);
                    return f.parser(e, r);
                  },
                  d
                );
              }
            },
            MacroWithTemplate: function (e, t, a, r) {
              for (var i = [], l = 4; l < arguments.length; l++)
                i[l - 4] = arguments[l];
              var c = parseInt(r, 10);
              if (c) {
                var f = [];
                if ((e.GetNext(), i[0] && !u.default.MatchParam(e, i[0])))
                  throw new n.default(
                    "MismatchUseDef",
                    "Use of %1 doesn't match its definition",
                    t
                  );
                for (var s = 0; s < c; s++)
                  f.push(u.default.GetParameter(e, t, i[s + 1]));
                a = o.default.substituteArgs(e, f, a);
              }
              (e.string = o.default.addArgs(e, a, e.string.slice(e.i))),
                (e.i = 0),
                o.default.checkMaxMacros(e);
            },
            BeginEnv: function (e, t, a, n, r, i) {
              if (t.getProperty("end") && e.stack.env.closing === t.getName()) {
                delete e.stack.env.closing;
                var u = e.string.slice(e.i);
                return (
                  (e.string = n),
                  (e.i = 0),
                  e.Parse(),
                  (e.string = u),
                  (e.i = 0),
                  e.itemFactory.create("end").setProperty("name", t.getName())
                );
              }
              if (r) {
                var l = [];
                if (null != i) {
                  var c = e.GetBrackets("\\begin{" + t.getName() + "}");
                  l.push(null == c ? i : c);
                }
                for (var f = l.length; f < r; f++)
                  l.push(e.GetArgument("\\begin{" + t.getName() + "}"));
                (a = o.default.substituteArgs(e, l, a)),
                  (n = o.default.substituteArgs(e, [], n));
              }
              return (
                (e.string = o.default.addArgs(e, a, e.string.slice(e.i))),
                (e.i = 0),
                e.itemFactory
                  .create("beginEnv")
                  .setProperty("name", t.getName())
              );
            },
          };
        (l.Macro = i.default.Macro), (t.default = l);
      },
      406: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          r = a(398),
          i = a(402),
          o = a(924);
        !(function (e) {
          function t(e, t) {
            return e.string.substr(e.i, t.length) !== t ||
              (t.match(/\\[a-z]+$/i) &&
                e.string.charAt(e.i + t.length).match(/[a-z]/i))
              ? 0
              : ((e.i += t.length), 1);
          }
          (e.disassembleSymbol = function (e, t) {
            var a = [e, t.char];
            if (t.attributes)
              for (var n in t.attributes) a.push(n), a.push(t.attributes[n]);
            return a;
          }),
            (e.assembleSymbol = function (e) {
              for (var t = e[0], a = e[1], n = {}, r = 2; r < e.length; r += 2)
                n[e[r]] = e[r + 1];
              return new o.Symbol(t, a, n);
            }),
            (e.GetCSname = function (e, t) {
              if ("\\" !== e.GetNext())
                throw new i.default(
                  "MissingCS",
                  "%1 must be followed by a control sequence",
                  t
                );
              return r.default.trimSpaces(e.GetArgument(t)).substr(1);
            }),
            (e.GetCsNameArgument = function (e, t) {
              var a = r.default.trimSpaces(e.GetArgument(t));
              if (
                ("\\" === a.charAt(0) && (a = a.substr(1)),
                !a.match(/^(.|[a-z]+)$/i))
              )
                throw new i.default(
                  "IllegalControlSequenceName",
                  "Illegal control sequence name for %1",
                  t
                );
              return a;
            }),
            (e.GetArgCount = function (e, t) {
              var a = e.GetBrackets(t);
              if (a && !(a = r.default.trimSpaces(a)).match(/^[0-9]+$/))
                throw new i.default(
                  "IllegalParamNumber",
                  "Illegal number of parameters specified in %1",
                  t
                );
              return a;
            }),
            (e.GetTemplate = function (e, t, a) {
              for (
                var n = e.GetNext(), r = [], o = 0, u = e.i;
                e.i < e.string.length;

              ) {
                if ("#" === (n = e.GetNext())) {
                  if (
                    (u !== e.i && (r[o] = e.string.substr(u, e.i - u)),
                    !(n = e.string.charAt(++e.i)).match(/^[1-9]$/))
                  )
                    throw new i.default(
                      "CantUseHash2",
                      "Illegal use of # in template for %1",
                      a
                    );
                  if (parseInt(n) !== ++o)
                    throw new i.default(
                      "SequentialParam",
                      "Parameters for %1 must be numbered sequentially",
                      a
                    );
                  u = e.i + 1;
                } else if ("{" === n)
                  return (
                    u !== e.i && (r[o] = e.string.substr(u, e.i - u)),
                    r.length > 0 ? [o.toString()].concat(r) : o
                  );
                e.i++;
              }
              throw new i.default(
                "MissingReplacementString",
                "Missing replacement string for definition of %1",
                t
              );
            }),
            (e.GetParameter = function (e, a, n) {
              if (null == n) return e.GetArgument(a);
              for (var r = e.i, o = 0, u = 0; e.i < e.string.length; ) {
                var l = e.string.charAt(e.i);
                if ("{" === l)
                  e.i === r && (u = 1), e.GetArgument(a), (o = e.i - r);
                else {
                  if (t(e, n))
                    return u && (r++, (o -= 2)), e.string.substr(r, o);
                  if ("\\" === l) {
                    e.i++, o++, (u = 0);
                    var c = e.string.substr(e.i).match(/[a-z]+|./i);
                    c && ((e.i += c[0].length), (o = e.i - r));
                  } else e.i++, o++, (u = 0);
                }
              }
              throw new i.default(
                "RunawayArgument",
                "Runaway argument for %1?",
                a
              );
            }),
            (e.MatchParam = t),
            (e.addDelimiter = function (t, a, n, r) {
              t.configuration.handlers
                .retrieve(e.NEW_DELIMITER)
                .add(a, new o.Symbol(a, n, r));
            }),
            (e.addMacro = function (t, a, n, r, i) {
              void 0 === i && (i = ""),
                t.configuration.handlers
                  .retrieve(e.NEW_COMMAND)
                  .add(a, new o.Macro(i || a, n, r));
            }),
            (e.addEnvironment = function (t, a, n, r) {
              t.configuration.handlers
                .retrieve(e.NEW_ENVIRONMENT)
                .add(a, new o.Macro(a, n, r));
            }),
            (e.NEW_DELIMITER = "new-Delimiter"),
            (e.NEW_COMMAND = "new-Command"),
            (e.NEW_ENVIRONMENT = "new-Environment");
        })(n || (n = {})),
          (t.default = n);
      },
      955: function (e, t) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (t.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      251: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
          (t.ConfigurationHandler =
            MathJax._.input.tex.Configuration.ConfigurationHandler),
          (t.ParserConfiguration =
            MathJax._.input.tex.Configuration.ParserConfiguration);
      },
      945: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = MathJax._.input.tex.ParseMethods.default);
      },
      398: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = MathJax._.input.tex.ParseUtil.default);
      },
      76: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MmlStack = MathJax._.input.tex.StackItem.MmlStack),
          (t.BaseItem = MathJax._.input.tex.StackItem.BaseItem);
      },
      924: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Symbol = MathJax._.input.tex.Symbol.Symbol),
          (t.Macro = MathJax._.input.tex.Symbol.Macro);
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
      360: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = MathJax._.input.tex.base.BaseMethods.default);
      },
    },
    o = {};
  function u(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var a = (o[e] = { exports: {} });
    return i[e].call(a.exports, a, a.exports, u), a.exports;
  }
  (e = u(955)),
    (t = u(48)),
    (a = u(205)),
    (n = u(107)),
    (r = u(406)),
    (0, e.r8)({
      _: {
        input: {
          tex: {
            newcommand: {
              NewcommandConfiguration: t,
              NewcommandItems: a,
              NewcommandMethods: n,
              NewcommandUtil: r,
            },
          },
        },
      },
    });
})();

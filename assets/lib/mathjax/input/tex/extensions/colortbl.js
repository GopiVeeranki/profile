!(function () {
  "use strict";
  var t,
    e,
    a = {
      558: function (t, e, a) {
        var o,
          n =
            (this && this.__extends) ||
            ((o = function (t, e) {
              return (o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var a in e)
                    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function a() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((a.prototype = e.prototype), new a()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ColortblConfiguration = e.ColorArrayItem = void 0);
        var r = a(935),
          i = a(251),
          s = a(871),
          l = a(402),
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.color = { cell: "", row: "", col: [] }), (e.hasColor = !1), e
              );
            }
            return (
              n(e, t),
              (e.prototype.EndEntry = function () {
                t.prototype.EndEntry.call(this);
                var e = this.row[this.row.length - 1],
                  a =
                    this.color.cell ||
                    this.color.row ||
                    this.color.col[this.row.length - 1];
                a &&
                  (e.attributes.set("mathbackground", a),
                  (this.color.cell = ""),
                  (this.hasColor = !0));
              }),
              (e.prototype.EndRow = function () {
                t.prototype.EndRow.call(this), (this.color.row = "");
              }),
              (e.prototype.createMml = function () {
                var e = t.prototype.createMml.call(this),
                  a = e.isKind("mrow") ? e.childNodes[1] : e;
                return (
                  a.isKind("menclose") && (a = a.childNodes[0].childNodes[0]),
                  this.hasColor &&
                    "none" === a.attributes.get("frame") &&
                    a.attributes.set("frame", ""),
                  e
                );
              }),
              e
            );
          })(r.ArrayItem);
        (e.ColorArrayItem = p),
          new s.CommandMap(
            "colortbl",
            {
              cellcolor: ["TableColor", "cell"],
              rowcolor: ["TableColor", "row"],
              columncolor: ["TableColor", "col"],
            },
            {
              TableColor: function (t, e, a) {
                var o = t.configuration.packageData.get("color").model,
                  n = t.GetBrackets(e, ""),
                  r = o.getColor(n, t.GetArgument(e)),
                  i = t.stack.Top();
                if (!(i instanceof p))
                  throw new l.default(
                    "UnsupportedTableColor",
                    "Unsupported use of %1",
                    t.currentCS
                  );
                if ("col" === a) {
                  if (i.table.length)
                    throw new l.default(
                      "ColumnColorNotTop",
                      "%1 must be in the top row",
                      e
                    );
                  (i.color.col[i.row.length] = r),
                    t.GetBrackets(e, "") && t.GetBrackets(e, "");
                } else if (
                  ((i.color[a] = r), "row" === a && (i.Size() || i.row.length))
                )
                  throw new l.default(
                    "RowColorNotFirst",
                    "%1 must be at the beginning of a row",
                    e
                  );
              },
            }
          );
        e.ColortblConfiguration = i.Configuration.create("colortbl", {
          handler: { macro: ["colortbl"] },
          items: { array: p },
          priority: 10,
          config: [
            function (t, e) {
              e.parseOptions.packageData.has("color") ||
                i.ConfigurationHandler.get("color").config(t, e);
            },
            10,
          ],
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
      935: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StartItem = MathJax._.input.tex.base.BaseItems.StartItem),
          (e.StopItem = MathJax._.input.tex.base.BaseItems.StopItem),
          (e.OpenItem = MathJax._.input.tex.base.BaseItems.OpenItem),
          (e.CloseItem = MathJax._.input.tex.base.BaseItems.CloseItem),
          (e.PrimeItem = MathJax._.input.tex.base.BaseItems.PrimeItem),
          (e.SubsupItem = MathJax._.input.tex.base.BaseItems.SubsupItem),
          (e.OverItem = MathJax._.input.tex.base.BaseItems.OverItem),
          (e.LeftItem = MathJax._.input.tex.base.BaseItems.LeftItem),
          (e.Middle = MathJax._.input.tex.base.BaseItems.Middle),
          (e.RightItem = MathJax._.input.tex.base.BaseItems.RightItem),
          (e.BeginItem = MathJax._.input.tex.base.BaseItems.BeginItem),
          (e.EndItem = MathJax._.input.tex.base.BaseItems.EndItem),
          (e.StyleItem = MathJax._.input.tex.base.BaseItems.StyleItem),
          (e.PositionItem = MathJax._.input.tex.base.BaseItems.PositionItem),
          (e.CellItem = MathJax._.input.tex.base.BaseItems.CellItem),
          (e.MmlItem = MathJax._.input.tex.base.BaseItems.MmlItem),
          (e.FnItem = MathJax._.input.tex.base.BaseItems.FnItem),
          (e.NotItem = MathJax._.input.tex.base.BaseItems.NotItem),
          (e.NonscriptItem = MathJax._.input.tex.base.BaseItems.NonscriptItem),
          (e.DotsItem = MathJax._.input.tex.base.BaseItems.DotsItem),
          (e.ArrayItem = MathJax._.input.tex.base.BaseItems.ArrayItem),
          (e.EqnArrayItem = MathJax._.input.tex.base.BaseItems.EqnArrayItem),
          (e.EquationItem = MathJax._.input.tex.base.BaseItems.EquationItem);
      },
    },
    o = {};
  function n(t) {
    var e = o[t];
    if (void 0 !== e) return e.exports;
    var r = (o[t] = { exports: {} });
    return a[t].call(r.exports, r, r.exports, n), r.exports;
  }
  (t = n(955)),
    (e = n(558)),
    (0, t.r8)({
      _: { input: { tex: { colortbl: { ColortblConfiguration: e } } } },
    });
})();

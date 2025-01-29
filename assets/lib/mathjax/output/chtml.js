!(function () {
  "use strict";
  var t,
    e,
    r,
    o,
    n,
    i,
    a,
    s,
    l,
    h,
    c,
    u,
    p,
    d,
    f,
    m,
    y,
    v,
    b,
    x,
    g,
    M,
    _,
    w,
    C,
    j,
    S,
    O,
    T,
    L,
    B,
    P,
    H,
    A,
    k,
    N,
    E,
    D,
    W,
    R,
    I,
    F,
    J,
    V,
    z,
    U,
    X,
    K,
    q,
    Q,
    G,
    Y,
    Z,
    $,
    tt,
    et,
    rt,
    ot,
    nt,
    it,
    at,
    st,
    lt,
    ht,
    ct,
    ut = {
      7016: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var n in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }).apply(this, arguments);
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTML = void 0);
        var s = r(716),
          l = r(5888),
          h = r(4477),
          c = r(7427),
          u = r(4142),
          p = r(6914),
          d = r(6720),
          f = (function (t) {
            function e(e) {
              void 0 === e && (e = null);
              var r = t.call(this, e, h.CHTMLWrapperFactory, u.TeXFont) || this;
              return (
                (r.chtmlStyles = null),
                r.font.adaptiveCSS(r.options.adaptiveCSS),
                (r.wrapperUsage = new c.Usage()),
                r
              );
            }
            return (
              n(e, t),
              (e.prototype.escaped = function (t, e) {
                return (
                  this.setDocument(e),
                  this.html("span", {}, [this.text(t.math)])
                );
              }),
              (e.prototype.styleSheet = function (r) {
                if (this.chtmlStyles) {
                  if (this.options.adaptiveCSS) {
                    var o = new l.CssStyles();
                    this.addWrapperStyles(o),
                      this.updateFontStyles(o),
                      this.adaptor.insertRules(
                        this.chtmlStyles,
                        o.getStyleRules()
                      );
                  }
                  return this.chtmlStyles;
                }
                var n = (this.chtmlStyles = t.prototype.styleSheet.call(
                  this,
                  r
                ));
                return (
                  this.adaptor.setAttribute(n, "id", e.STYLESHEETID),
                  this.wrapperUsage.update(),
                  n
                );
              }),
              (e.prototype.updateFontStyles = function (t) {
                t.addStyles(this.font.updateStyles({}));
              }),
              (e.prototype.addWrapperStyles = function (e) {
                var r, o;
                if (this.options.adaptiveCSS)
                  try {
                    for (
                      var n = a(this.wrapperUsage.update()), i = n.next();
                      !i.done;
                      i = n.next()
                    ) {
                      var s = i.value,
                        l = this.factory.getNodeClass(s);
                      l && this.addClassStyles(l, e);
                    }
                  } catch (t) {
                    r = { error: t };
                  } finally {
                    try {
                      i && !i.done && (o = n.return) && o.call(n);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                else t.prototype.addWrapperStyles.call(this, e);
              }),
              (e.prototype.addClassStyles = function (e, r) {
                var o,
                  n = e;
                n.autoStyle &&
                  "unknown" !== n.kind &&
                  r.addStyles(
                    (((o = {})["mjx-" + n.kind] = {
                      display: "inline-block",
                      "text-align": "left",
                    }),
                    o)
                  ),
                  this.wrapperUsage.add(n.kind),
                  t.prototype.addClassStyles.call(this, e, r);
              }),
              (e.prototype.processMath = function (t, e) {
                this.factory.wrap(t).toCHTML(e);
              }),
              (e.prototype.clearCache = function () {
                this.cssStyles.clear(),
                  this.font.clearCache(),
                  this.wrapperUsage.clear(),
                  (this.chtmlStyles = null);
              }),
              (e.prototype.reset = function () {
                this.clearCache();
              }),
              (e.prototype.unknownText = function (t, e, r) {
                void 0 === r && (r = null);
                var o = {},
                  n = 100 / this.math.metrics.scale;
                if (
                  (100 !== n &&
                    ((o["font-size"] = this.fixed(n, 1) + "%"),
                    (o.padding = p.em(75 / n) + " 0 " + p.em(20 / n) + " 0")),
                  "-explicitFont" !== e)
                ) {
                  var i = d.unicodeChars(t);
                  (1 !== i.length || i[0] < 119808 || i[0] > 120831) &&
                    this.cssFontStyles(this.font.getCssFont(e), o);
                }
                if (null !== r) {
                  var a = this.math.metrics;
                  o.width = Math.round(r * a.em * a.scale) + "px";
                }
                return this.html("mjx-utext", { variant: e, style: o }, [
                  this.text(t),
                ]);
              }),
              (e.prototype.measureTextNode = function (t) {
                var e = this.adaptor,
                  r = e.clone(t);
                e.setStyle(
                  r,
                  "font-family",
                  e.getStyle(r, "font-family").replace(/MJXZERO, /g, "")
                );
                var o = this.html(
                  "mjx-measure-text",
                  { style: { position: "absolute", "white-space": "nowrap" } },
                  [r]
                );
                e.append(e.parent(this.math.start.node), this.container),
                  e.append(this.container, o);
                var n =
                  e.nodeSize(r, this.math.metrics.em)[0] /
                  this.math.metrics.scale;
                return (
                  e.remove(this.container),
                  e.remove(o),
                  { w: n, h: 0.75, d: 0.2 }
                );
              }),
              (e.NAME = "CHTML"),
              (e.OPTIONS = i(i({}, s.CommonOutputJax.OPTIONS), {
                adaptiveCSS: !0,
                matchFontHeight: !0,
              })),
              (e.commonStyles = {
                'mjx-container[jax="CHTML"]': { "line-height": 0 },
                'mjx-container [space="1"]': { "margin-left": ".111em" },
                'mjx-container [space="2"]': { "margin-left": ".167em" },
                'mjx-container [space="3"]': { "margin-left": ".222em" },
                'mjx-container [space="4"]': { "margin-left": ".278em" },
                'mjx-container [space="5"]': { "margin-left": ".333em" },
                'mjx-container [rspace="1"]': { "margin-right": ".111em" },
                'mjx-container [rspace="2"]': { "margin-right": ".167em" },
                'mjx-container [rspace="3"]': { "margin-right": ".222em" },
                'mjx-container [rspace="4"]': { "margin-right": ".278em" },
                'mjx-container [rspace="5"]': { "margin-right": ".333em" },
                'mjx-container [size="s"]': { "font-size": "70.7%" },
                'mjx-container [size="ss"]': { "font-size": "50%" },
                'mjx-container [size="Tn"]': { "font-size": "60%" },
                'mjx-container [size="sm"]': { "font-size": "85%" },
                'mjx-container [size="lg"]': { "font-size": "120%" },
                'mjx-container [size="Lg"]': { "font-size": "144%" },
                'mjx-container [size="LG"]': { "font-size": "173%" },
                'mjx-container [size="hg"]': { "font-size": "207%" },
                'mjx-container [size="HG"]': { "font-size": "249%" },
                'mjx-container [width="full"]': { width: "100%" },
                "mjx-box": { display: "inline-block" },
                "mjx-block": { display: "block" },
                "mjx-itable": { display: "inline-table" },
                "mjx-row": { display: "table-row" },
                "mjx-row > *": { display: "table-cell" },
                "mjx-mtext": { display: "inline-block" },
                "mjx-mstyle": { display: "inline-block" },
                "mjx-merror": {
                  display: "inline-block",
                  color: "red",
                  "background-color": "yellow",
                },
                "mjx-mphantom": { visibility: "hidden" },
                "_::-webkit-full-page-media, _:future, :root mjx-container": {
                  "will-change": "opacity",
                },
              }),
              (e.STYLESHEETID = "MJX-CHTML-styles"),
              e
            );
          })(s.CommonOutputJax);
        e.CHTML = f;
      },
      2098: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var n in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }).apply(this, arguments);
            },
          a =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, o) {
                  void 0 === o && (o = r),
                    Object.defineProperty(t, o, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    });
                }
              : function (t, e, r, o) {
                  void 0 === o && (o = r), (t[o] = e[r]);
                }),
          s =
            (this && this.__exportStar) ||
            function (t, e) {
              for (var r in t)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(e, r) ||
                  a(e, t, r);
            },
          l =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          h =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AddCSS = e.CHTMLFontData = void 0);
        var c = r(9250),
          u = r(7427),
          p = r(6914);
        s(r(9250), e);
        var d = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.charUsage = new u.Usage()), (e.delimUsage = new u.Usage()), e
            );
          }
          return (
            n(e, t),
            (e.charOptions = function (e, r) {
              return t.charOptions.call(this, e, r);
            }),
            (e.prototype.adaptiveCSS = function (t) {
              this.options.adaptiveCSS = t;
            }),
            (e.prototype.clearCache = function () {
              this.options.adaptiveCSS &&
                (this.charUsage.clear(), this.delimUsage.clear());
            }),
            (e.prototype.createVariant = function (e, r, o) {
              void 0 === r && (r = null),
                void 0 === o && (o = null),
                t.prototype.createVariant.call(this, e, r, o);
              var n = this.constructor;
              (this.variant[e].classes = n.defaultVariantClasses[e]),
                (this.variant[e].letter = n.defaultVariantLetters[e]);
            }),
            (e.prototype.defineChars = function (r, o) {
              var n, i;
              t.prototype.defineChars.call(this, r, o);
              var a = this.variant[r].letter;
              try {
                for (
                  var s = l(Object.keys(o)), h = s.next();
                  !h.done;
                  h = s.next()
                ) {
                  var c = h.value,
                    u = e.charOptions(o, parseInt(c));
                  void 0 === u.f && (u.f = a);
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  h && !h.done && (i = s.return) && i.call(s);
                } finally {
                  if (n) throw n.error;
                }
              }
            }),
            Object.defineProperty(e.prototype, "styles", {
              get: function () {
                var t = this.constructor,
                  e = i({}, t.defaultStyles);
                return (
                  this.addFontURLs(e, t.defaultFonts, this.options.fontURL),
                  this.updateStyles(e),
                  e
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.updateStyles = function (t) {
              var e, r, o, n;
              try {
                for (
                  var i = l(this.delimUsage.update()), a = i.next();
                  !a.done;
                  a = i.next()
                ) {
                  var s = a.value;
                  this.addDelimiterStyles(t, s, this.delimiters[s]);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  a && !a.done && (r = i.return) && r.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
              try {
                for (
                  var c = l(this.charUsage.update()), u = c.next();
                  !u.done;
                  u = c.next()
                ) {
                  var p = h(u.value, 2),
                    d = p[0],
                    f = ((s = p[1]), this.variant[d]);
                  this.addCharStyles(t, f.letter, s, f.chars[s]);
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  u && !u.done && (n = c.return) && n.call(c);
                } finally {
                  if (o) throw o.error;
                }
              }
              return t;
            }),
            (e.prototype.addFontURLs = function (t, e, r) {
              var o, n;
              try {
                for (
                  var a = l(Object.keys(e)), s = a.next();
                  !s.done;
                  s = a.next()
                ) {
                  var h = s.value,
                    c = i({}, e[h]);
                  (c.src = c.src.replace(/%%URL%%/, r)), (t[h] = c);
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  s && !s.done && (n = a.return) && n.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
            }),
            (e.prototype.addDelimiterStyles = function (t, e, r) {
              var o = this.charSelector(e);
              r.c &&
                r.c !== e &&
                (t[
                  ".mjx-stretched mjx-c" +
                    (o = this.charSelector(r.c)) +
                    "::before"
                ] = { content: this.charContent(r.c) }),
                r.stretch &&
                  (1 === r.dir
                    ? this.addDelimiterVStyles(t, o, r)
                    : this.addDelimiterHStyles(t, o, r));
            }),
            (e.prototype.addDelimiterVStyles = function (t, e, r) {
              var o = r.HDW,
                n = h(r.stretch, 4),
                i = n[0],
                a = n[1],
                s = n[2],
                l = n[3],
                c = this.addDelimiterVPart(t, e, "beg", i, o);
              this.addDelimiterVPart(t, e, "ext", a, o);
              var u = this.addDelimiterVPart(t, e, "end", s, o),
                p = {};
              if (l) {
                var d = this.addDelimiterVPart(t, e, "mid", l, o);
                (p.height = "50%"),
                  (t["mjx-stretchy-v" + e + " > mjx-mid"] = {
                    "margin-top": this.em(-d / 2),
                    "margin-bottom": this.em(-d / 2),
                  });
              }
              c && (p["border-top-width"] = this.em0(c - 0.03)),
                u &&
                  ((p["border-bottom-width"] = this.em0(u - 0.03)),
                  (t["mjx-stretchy-v" + e + " > mjx-end"] = {
                    "margin-top": this.em(-u),
                  })),
                Object.keys(p).length &&
                  (t["mjx-stretchy-v" + e + " > mjx-ext"] = p);
            }),
            (e.prototype.addDelimiterVPart = function (t, e, r, o, n) {
              if (!o) return 0;
              var i = this.getDelimiterData(o),
                a = (n[2] - i[2]) / 2,
                s = { content: this.charContent(o) };
              return (
                "ext" !== r
                  ? (s.padding = this.padding(i, a))
                  : ((s.width = this.em0(n[2])),
                    a && (s["padding-left"] = this.em0(a))),
                (t["mjx-stretchy-v" + e + " mjx-" + r + " mjx-c::before"] = s),
                i[0] + i[1]
              );
            }),
            (e.prototype.addDelimiterHStyles = function (t, e, r) {
              var o = h(r.stretch, 4),
                n = o[0],
                i = o[1],
                a = o[2],
                s = o[3],
                l = r.HDW;
              this.addDelimiterHPart(t, e, "beg", n, l),
                this.addDelimiterHPart(t, e, "ext", i, l),
                this.addDelimiterHPart(t, e, "end", a, l),
                s &&
                  (this.addDelimiterHPart(t, e, "mid", s, l),
                  (t["mjx-stretchy-h" + e + " > mjx-ext"] = { width: "50%" }));
            }),
            (e.prototype.addDelimiterHPart = function (t, e, r, o, n) {
              if (o) {
                var i = this.getDelimiterData(o)[3],
                  a = {
                    content: i && i.c ? '"' + i.c + '"' : this.charContent(o),
                  };
                (a.padding = this.padding(n, 0, -n[2])),
                  (t["mjx-stretchy-h" + e + " mjx-" + r + " mjx-c::before"] =
                    a);
              }
            }),
            (e.prototype.addCharStyles = function (t, e, r, o) {
              var n = o[3],
                i = void 0 !== n.f ? n.f : e;
              t[
                "mjx-c" +
                  this.charSelector(r) +
                  (i ? ".TEX-" + i : "") +
                  "::before"
              ] = {
                padding: this.padding(o, 0, n.ic || 0),
                content: null != n.c ? '"' + n.c + '"' : this.charContent(r),
              };
            }),
            (e.prototype.getDelimiterData = function (t) {
              return this.getChar("-smallop", t);
            }),
            (e.prototype.em = function (t) {
              return p.em(t);
            }),
            (e.prototype.em0 = function (t) {
              return p.em(Math.max(0, t));
            }),
            (e.prototype.padding = function (t, e, r) {
              var o = h(t, 3),
                n = o[0],
                i = o[1];
              return (
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                [n, o[2] + r, i, e].map(this.em0).join(" ")
              );
            }),
            (e.prototype.charContent = function (t) {
              return (
                '"' +
                (t >= 32 && t <= 126 && 34 !== t && 39 !== t && 92 !== t
                  ? String.fromCharCode(t)
                  : "\\" + t.toString(16).toUpperCase()) +
                '"'
              );
            }),
            (e.prototype.charSelector = function (t) {
              return ".mjx-c" + t.toString(16).toUpperCase();
            }),
            (e.OPTIONS = i(i({}, c.FontData.OPTIONS), {
              fontURL: "js/output/chtml/fonts/tex-woff-v2",
            })),
            (e.defaultVariantClasses = {}),
            (e.defaultVariantLetters = {}),
            (e.defaultStyles = {
              "mjx-c::before": { display: "block", width: 0 },
            }),
            (e.defaultFonts = {
              "@font-face /* 0 */": {
                "font-family": "MJXZERO",
                src: 'url("%%URL%%/MathJax_Zero.woff") format("woff")',
              },
            }),
            e
          );
        })(c.FontData);
        (e.CHTMLFontData = d),
          (e.AddCSS = function (t, e) {
            var r, o;
            try {
              for (
                var n = l(Object.keys(e)), i = n.next();
                !i.done;
                i = n.next()
              ) {
                var a = i.value,
                  s = parseInt(a);
                Object.assign(c.FontData.charOptions(t, s), e[s]);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                i && !i.done && (o = n.return) && o.call(n);
              } finally {
                if (r) throw r.error;
              }
            }
            return t;
          });
      },
      4458: function (t, e, r) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, o) {
                  void 0 === o && (o = r),
                    Object.defineProperty(t, o, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    });
                }
              : function (t, e, r, o) {
                  void 0 === o && (o = r), (t[o] = e[r]);
                }),
          n =
            (this && this.__exportStar) ||
            function (t, e) {
              for (var r in t)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(e, r) ||
                  o(e, t, r);
            },
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Arrow =
            e.DiagonalArrow =
            e.DiagonalStrike =
            e.Border2 =
            e.Border =
            e.RenderElement =
              void 0);
        var a = r(5373);
        n(r(5373), e);
        e.RenderElement = function (t, e) {
          return (
            void 0 === e && (e = ""),
            function (r, o) {
              var n = r.adjustBorder(r.html("mjx-" + t));
              if (e) {
                var i = r.getOffset(e);
                if (r.thickness !== a.THICKNESS || i) {
                  var s =
                    "translate" + e + "(" + r.em(r.thickness / 2 - i) + ")";
                  r.adaptor.setStyle(n, "transform", s);
                }
              }
              r.adaptor.append(r.chtml, n);
            }
          );
        };
        e.Border = function (t) {
          return a.CommonBorder(function (e, r) {
            e.adaptor.setStyle(r, "border-" + t, e.em(e.thickness) + " solid");
          })(t);
        };
        e.Border2 = function (t, e, r) {
          return a.CommonBorder2(function (t, o) {
            var n = t.em(t.thickness) + " solid";
            t.adaptor.setStyle(o, "border-" + e, n),
              t.adaptor.setStyle(o, "border-" + r, n);
          })(t, e, r);
        };
        e.DiagonalStrike = function (t, e) {
          return a.CommonDiagonalStrike(function (t) {
            return function (r, o) {
              var n = r.getBBox(),
                a = n.w,
                s = n.h,
                l = n.d,
                h = i(r.getArgMod(a, s + l), 2),
                c = h[0],
                u = h[1],
                p = (e * r.thickness) / 2,
                d = r.adjustBorder(
                  r.html(t, {
                    style: {
                      width: r.em(u),
                      transform:
                        "rotate(" +
                        r.fixed(-e * c) +
                        "rad) translateY(" +
                        p +
                        "em)",
                    },
                  })
                );
              r.adaptor.append(r.chtml, d);
            };
          })(t);
        };
        e.DiagonalArrow = function (t) {
          return a.CommonDiagonalArrow(function (t, e) {
            t.adaptor.append(t.chtml, e);
          })(t);
        };
        e.Arrow = function (t) {
          return a.CommonArrow(function (t, e) {
            t.adaptor.append(t.chtml, e);
          })(t);
        };
      },
      7427: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Usage = void 0);
        var r = (function () {
          function t() {
            (this.used = new Set()), (this.needsUpdate = []);
          }
          return (
            (t.prototype.add = function (t) {
              this.used.has(t) || this.needsUpdate.push(t), this.used.add(t);
            }),
            (t.prototype.has = function (t) {
              return this.used.has(t);
            }),
            (t.prototype.clear = function () {
              this.used.clear(), (this.needsUpdate = []);
            }),
            (t.prototype.update = function () {
              var t = this.needsUpdate;
              return (this.needsUpdate = []), t;
            }),
            t
          );
        })();
        e.Usage = r;
      },
      6617: function (t, e, r) {
        var o,
          n,
          i =
            (this && this.__extends) ||
            ((o = function (t, e) {
              return (o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          s =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLWrapper = e.SPACE = e.FONTSIZE = void 0);
        var l = r(6914),
          h = r(1541),
          c = r(3717);
        (e.FONTSIZE = {
          "70.7%": "s",
          "70%": "s",
          "50%": "ss",
          "60%": "Tn",
          "85%": "sm",
          "120%": "lg",
          "144%": "Lg",
          "173%": "LG",
          "207%": "hg",
          "249%": "HG",
        }),
          (e.SPACE =
            (((n = {})[l.em(2 / 18)] = "1"),
            (n[l.em(3 / 18)] = "2"),
            (n[l.em(4 / 18)] = "3"),
            (n[l.em(5 / 18)] = "4"),
            (n[l.em(6 / 18)] = "5"),
            n));
        var u = (function (t) {
          function r() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.chtml = null), e;
          }
          return (
            i(r, t),
            (r.prototype.toCHTML = function (t) {
              var e,
                r,
                o = this.standardCHTMLnode(t);
              try {
                for (
                  var n = a(this.childNodes), i = n.next();
                  !i.done;
                  i = n.next()
                ) {
                  i.value.toCHTML(o);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (r = n.return) && r.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (r.prototype.standardCHTMLnode = function (t) {
              this.markUsed();
              var e = this.createCHTMLnode(t);
              return (
                this.handleStyles(),
                this.handleVariant(),
                this.handleScale(),
                this.handleColor(),
                this.handleSpace(),
                this.handleAttributes(),
                this.handlePWidth(),
                e
              );
            }),
            (r.prototype.markUsed = function () {
              this.jax.wrapperUsage.add(this.kind);
            }),
            (r.prototype.createCHTMLnode = function (t) {
              var e = this.node.attributes.get("href");
              return (
                e && (t = this.adaptor.append(t, this.html("a", { href: e }))),
                (this.chtml = this.adaptor.append(
                  t,
                  this.html("mjx-" + this.node.kind)
                )),
                this.chtml
              );
            }),
            (r.prototype.handleStyles = function () {
              if (this.styles) {
                var t = this.styles.cssText;
                if (t) {
                  this.adaptor.setAttribute(this.chtml, "style", t);
                  var e = this.styles.get("font-family");
                  e &&
                    this.adaptor.setStyle(
                      this.chtml,
                      "font-family",
                      "MJXZERO, " + e
                    );
                }
              }
            }),
            (r.prototype.handleVariant = function () {
              this.node.isToken &&
                "-explicitFont" !== this.variant &&
                this.adaptor.setAttribute(
                  this.chtml,
                  "class",
                  (
                    this.font.getVariant(this.variant) ||
                    this.font.getVariant("normal")
                  ).classes
                );
            }),
            (r.prototype.handleScale = function () {
              this.setScale(this.chtml, this.bbox.rscale);
            }),
            (r.prototype.setScale = function (t, r) {
              var o = Math.abs(r - 1) < 0.001 ? 1 : r;
              if (t && 1 !== o) {
                var n = this.percent(o);
                e.FONTSIZE[n]
                  ? this.adaptor.setAttribute(t, "size", e.FONTSIZE[n])
                  : this.adaptor.setStyle(t, "fontSize", n);
              }
              return t;
            }),
            (r.prototype.handleSpace = function () {
              var t, r;
              try {
                for (
                  var o = a([
                      [this.bbox.L, "space", "marginLeft"],
                      [this.bbox.R, "rspace", "marginRight"],
                    ]),
                    n = o.next();
                  !n.done;
                  n = o.next()
                ) {
                  var i = n.value,
                    l = s(i, 3),
                    h = l[0],
                    c = l[1],
                    u = l[2];
                  if (h) {
                    var p = this.em(h);
                    e.SPACE[p]
                      ? this.adaptor.setAttribute(this.chtml, c, e.SPACE[p])
                      : this.adaptor.setStyle(this.chtml, u, p);
                  }
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  n && !n.done && (r = o.return) && r.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (r.prototype.handleColor = function () {
              var t = this.node.attributes,
                e = t.getExplicit("mathcolor"),
                r = t.getExplicit("color"),
                o = t.getExplicit("mathbackground"),
                n = t.getExplicit("background");
              (e || r) && this.adaptor.setStyle(this.chtml, "color", e || r),
                (o || n) &&
                  this.adaptor.setStyle(this.chtml, "backgroundColor", o || n);
            }),
            (r.prototype.handleAttributes = function () {
              var t,
                e,
                o,
                n,
                i = this.node.attributes,
                s = i.getAllDefaults(),
                l = r.skipAttributes;
              try {
                for (
                  var h = a(i.getExplicitNames()), c = h.next();
                  !c.done;
                  c = h.next()
                ) {
                  var u = c.value;
                  (!1 !== l[u] &&
                    (u in s ||
                      l[u] ||
                      this.adaptor.hasAttribute(this.chtml, u))) ||
                    this.adaptor.setAttribute(this.chtml, u, i.getExplicit(u));
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  c && !c.done && (e = h.return) && e.call(h);
                } finally {
                  if (t) throw t.error;
                }
              }
              if (i.get("class")) {
                var p = i.get("class").trim().split(/ +/);
                try {
                  for (var d = a(p), f = d.next(); !f.done; f = d.next()) {
                    var m = f.value;
                    this.adaptor.addClass(this.chtml, m);
                  }
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    f && !f.done && (n = d.return) && n.call(d);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              }
            }),
            (r.prototype.handlePWidth = function () {
              this.bbox.pwidth &&
                (this.bbox.pwidth === c.BBox.fullWidth
                  ? this.adaptor.setAttribute(this.chtml, "width", "full")
                  : this.adaptor.setStyle(
                      this.chtml,
                      "width",
                      this.bbox.pwidth
                    ));
            }),
            (r.prototype.setIndent = function (t, e, r) {
              var o = this.adaptor;
              if ("center" === e || "left" === e) {
                var n = this.getBBox().L;
                o.setStyle(t, "margin-left", this.em(r + n));
              }
              if ("center" === e || "right" === e) {
                var i = this.getBBox().R;
                o.setStyle(t, "margin-right", this.em(-r + i));
              }
            }),
            (r.prototype.drawBBox = function () {
              var t = this.getBBox(),
                e = t.w,
                r = t.h,
                o = t.d,
                n = t.R,
                i = this.html(
                  "mjx-box",
                  { style: { opacity: 0.25, "margin-left": this.em(-e - n) } },
                  [
                    this.html("mjx-box", {
                      style: {
                        height: this.em(r),
                        width: this.em(e),
                        "background-color": "red",
                      },
                    }),
                    this.html("mjx-box", {
                      style: {
                        height: this.em(o),
                        width: this.em(e),
                        "margin-left": this.em(-e),
                        "vertical-align": this.em(-o),
                        "background-color": "green",
                      },
                    }),
                  ]
                ),
                a = this.chtml || this.parent.chtml,
                s = this.adaptor.getAttribute(a, "size");
              s && this.adaptor.setAttribute(i, "size", s);
              var l = this.adaptor.getStyle(a, "fontSize");
              l && this.adaptor.setStyle(i, "fontSize", l),
                this.adaptor.append(this.adaptor.parent(a), i),
                this.adaptor.setStyle(a, "backgroundColor", "#FFEE00");
            }),
            (r.prototype.html = function (t, e, r) {
              return (
                void 0 === e && (e = {}),
                void 0 === r && (r = []),
                this.jax.html(t, e, r)
              );
            }),
            (r.prototype.text = function (t) {
              return this.jax.text(t);
            }),
            (r.prototype.char = function (t) {
              return this.font.charSelector(t).substr(1);
            }),
            (r.kind = "unknown"),
            (r.autoStyle = !0),
            r
          );
        })(h.CommonWrapper);
        e.CHTMLWrapper = u;
      },
      4477: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLWrapperFactory = void 0);
        var i = r(1475),
          a = r(8369),
          s = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return n(e, t), (e.defaultNodes = a.CHTMLWrappers), e;
          })(i.CommonWrapperFactory);
        e.CHTMLWrapperFactory = s;
      },
      8369: function (t, e, r) {
        var o;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLWrappers = void 0);
        var n = r(6617),
          i = r(4155),
          a = r(3271),
          s = r(3292),
          l = r(7013),
          h = r(9821),
          c = r(6359),
          u = r(6024),
          p = r(7215),
          d = r(3215),
          f = r(3126),
          m = r(7047),
          y = r(7837),
          v = r(5437),
          b = r(7111),
          x = r(513),
          g = r(6577),
          M = r(1096),
          _ = r(6918),
          w = r(7500),
          C = r(8709),
          j = r(7918),
          S = r(1315),
          O = r(7795),
          T = r(518),
          L = r(1114);
        e.CHTMLWrappers =
          (((o = {})[i.CHTMLmath.kind] = i.CHTMLmath),
          (o[f.CHTMLmrow.kind] = f.CHTMLmrow),
          (o[f.CHTMLinferredMrow.kind] = f.CHTMLinferredMrow),
          (o[a.CHTMLmi.kind] = a.CHTMLmi),
          (o[s.CHTMLmo.kind] = s.CHTMLmo),
          (o[l.CHTMLmn.kind] = l.CHTMLmn),
          (o[h.CHTMLms.kind] = h.CHTMLms),
          (o[c.CHTMLmtext.kind] = c.CHTMLmtext),
          (o[u.CHTMLmspace.kind] = u.CHTMLmspace),
          (o[p.CHTMLmpadded.kind] = p.CHTMLmpadded),
          (o[d.CHTMLmenclose.kind] = d.CHTMLmenclose),
          (o[y.CHTMLmfrac.kind] = y.CHTMLmfrac),
          (o[v.CHTMLmsqrt.kind] = v.CHTMLmsqrt),
          (o[b.CHTMLmroot.kind] = b.CHTMLmroot),
          (o[x.CHTMLmsub.kind] = x.CHTMLmsub),
          (o[x.CHTMLmsup.kind] = x.CHTMLmsup),
          (o[x.CHTMLmsubsup.kind] = x.CHTMLmsubsup),
          (o[g.CHTMLmunder.kind] = g.CHTMLmunder),
          (o[g.CHTMLmover.kind] = g.CHTMLmover),
          (o[g.CHTMLmunderover.kind] = g.CHTMLmunderover),
          (o[M.CHTMLmmultiscripts.kind] = M.CHTMLmmultiscripts),
          (o[m.CHTMLmfenced.kind] = m.CHTMLmfenced),
          (o[_.CHTMLmtable.kind] = _.CHTMLmtable),
          (o[w.CHTMLmtr.kind] = w.CHTMLmtr),
          (o[w.CHTMLmlabeledtr.kind] = w.CHTMLmlabeledtr),
          (o[C.CHTMLmtd.kind] = C.CHTMLmtd),
          (o[j.CHTMLmaction.kind] = j.CHTMLmaction),
          (o[S.CHTMLmglyph.kind] = S.CHTMLmglyph),
          (o[O.CHTMLsemantics.kind] = O.CHTMLsemantics),
          (o[O.CHTMLannotation.kind] = O.CHTMLannotation),
          (o[O.CHTMLannotationXML.kind] = O.CHTMLannotationXML),
          (o[O.CHTMLxml.kind] = O.CHTMLxml),
          (o[T.CHTMLTeXAtom.kind] = T.CHTMLTeXAtom),
          (o[L.CHTMLTextNode.kind] = L.CHTMLTextNode),
          (o[n.CHTMLWrapper.kind] = n.CHTMLWrapper),
          o);
      },
      518: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLTeXAtom = void 0);
        var i = r(6617),
          a = r(3438),
          s = r(4282),
          l = r(8921),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (e) {
                if (
                  (t.prototype.toCHTML.call(this, e),
                  this.adaptor.setAttribute(
                    this.chtml,
                    "texclass",
                    l.TEXCLASSNAMES[this.node.texClass]
                  ),
                  this.node.texClass === l.TEXCLASS.VCENTER)
                ) {
                  var r = this.childNodes[0].getBBox(),
                    o = r.h,
                    n = (o + r.d) / 2 + this.font.params.axis_height - o;
                  this.adaptor.setStyle(
                    this.chtml,
                    "verticalAlign",
                    this.em(n)
                  );
                }
              }),
              (e.kind = s.TeXAtom.prototype.kind),
              e
            );
          })(a.CommonTeXAtomMixin(i.CHTMLWrapper));
        e.CHTMLTeXAtom = h;
      },
      1114: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLTextNode = void 0);
        var a = r(8921),
          s = r(6617),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e, r;
                this.markUsed();
                var o = this.adaptor,
                  n = this.parent.variant,
                  a = this.node.getText();
                if ("-explicitFont" === n)
                  o.append(t, this.jax.unknownText(a, n, this.getBBox().w));
                else {
                  var s = this.remappedText(a, n);
                  try {
                    for (var l = i(s), h = l.next(); !h.done; h = l.next()) {
                      var c = h.value,
                        u = this.getVariantChar(n, c)[3],
                        p = u.f ? " TEX-" + u.f : "",
                        d = u.unknown
                          ? this.jax.unknownText(String.fromCodePoint(c), n)
                          : this.html("mjx-c", { class: this.char(c) + p });
                      o.append(t, d),
                        !u.unknown && this.font.charUsage.add([n, c]);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      h && !h.done && (r = l.return) && r.call(l);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                }
              }),
              (e.kind = a.TextNode.prototype.kind),
              (e.autoStyle = !1),
              (e.styles = {
                "mjx-c": { display: "inline-block" },
                "mjx-utext": {
                  display: "inline-block",
                  padding: ".75em 0 .2em 0",
                },
              }),
              e
            );
          })(r(555).CommonTextNodeMixin(s.CHTMLWrapper));
        e.CHTMLTextNode = l;
      },
      7918: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmaction = void 0);
        var i = r(6617),
          a = r(3345),
          s = r(3345),
          l = r(3969),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e = this.standardCHTMLnode(t);
                this.selected.toCHTML(e), this.action(this, this.data);
              }),
              (e.prototype.setEventHandler = function (t, e) {
                this.chtml.addEventListener(t, e);
              }),
              (e.kind = l.MmlMaction.prototype.kind),
              (e.styles = {
                "mjx-maction": { position: "relative" },
                "mjx-maction > mjx-tool": {
                  display: "none",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  "z-index": 500,
                },
                "mjx-tool > mjx-tip": {
                  display: "inline-block",
                  padding: ".2em",
                  border: "1px solid #888",
                  "font-size": "70%",
                  "background-color": "#F8F8F8",
                  color: "black",
                  "box-shadow": "2px 2px 5px #AAAAAA",
                },
                "mjx-maction[toggle]": { cursor: "pointer" },
                "mjx-status": {
                  display: "block",
                  position: "fixed",
                  left: "1em",
                  bottom: "1em",
                  "min-width": "25%",
                  padding: ".2em .4em",
                  border: "1px solid #888",
                  "font-size": "90%",
                  "background-color": "#F8F8F8",
                  color: "black",
                },
              }),
              (e.actions = new Map([
                [
                  "toggle",
                  [
                    function (t, e) {
                      t.adaptor.setAttribute(
                        t.chtml,
                        "toggle",
                        t.node.attributes.get("selection")
                      );
                      var r = t.factory.jax.math,
                        o = t.factory.jax.document,
                        n = t.node;
                      t.setEventHandler("click", function (t) {
                        r.end.node ||
                          ((r.start.node = r.end.node = r.typesetRoot),
                          (r.start.n = r.end.n = 0)),
                          n.nextToggleSelection(),
                          r.rerender(o),
                          t.stopPropagation();
                      });
                    },
                    {},
                  ],
                ],
                [
                  "tooltip",
                  [
                    function (t, e) {
                      var r = t.childNodes[1];
                      if (r)
                        if (r.node.isKind("mtext")) {
                          var o = r.node.getText();
                          t.adaptor.setAttribute(t.chtml, "title", o);
                        } else {
                          var n = t.adaptor,
                            i = n.append(
                              t.chtml,
                              t.html(
                                "mjx-tool",
                                {
                                  style: {
                                    bottom: t.em(-t.dy),
                                    right: t.em(-t.dx),
                                  },
                                },
                                [t.html("mjx-tip")]
                              )
                            );
                          r.toCHTML(n.firstChild(i)),
                            t.setEventHandler("mouseover", function (r) {
                              e.stopTimers(t, e);
                              var o = setTimeout(function () {
                                return n.setStyle(i, "display", "block");
                              }, e.postDelay);
                              e.hoverTimer.set(t, o), r.stopPropagation();
                            }),
                            t.setEventHandler("mouseout", function (r) {
                              e.stopTimers(t, e);
                              var o = setTimeout(function () {
                                return n.setStyle(i, "display", "");
                              }, e.clearDelay);
                              e.clearTimer.set(t, o), r.stopPropagation();
                            });
                        }
                    },
                    s.TooltipData,
                  ],
                ],
                [
                  "statusline",
                  [
                    function (t, e) {
                      var r = t.childNodes[1];
                      if (r && r.node.isKind("mtext")) {
                        var o = t.adaptor,
                          n = r.node.getText();
                        o.setAttribute(t.chtml, "statusline", n),
                          t.setEventHandler("mouseover", function (r) {
                            if (null === e.status) {
                              var i = o.body(o.document);
                              e.status = o.append(
                                i,
                                t.html("mjx-status", {}, [t.text(n)])
                              );
                            }
                            r.stopPropagation();
                          }),
                          t.setEventHandler("mouseout", function (t) {
                            e.status && (o.remove(e.status), (e.status = null)),
                              t.stopPropagation();
                          });
                      }
                    },
                    { status: null },
                  ],
                ],
              ])),
              e
            );
          })(a.CommonMactionMixin(i.CHTMLWrapper));
        e.CHTMLmaction = h;
      },
      4155: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmath = void 0);
        var a = r(6617),
          s = r(2057),
          l = r(304),
          h = r(3717),
          c = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (e) {
                t.prototype.toCHTML.call(this, e);
                var r = this.chtml,
                  o = this.adaptor;
                "block" === this.node.attributes.get("display")
                  ? (o.setAttribute(r, "display", "true"),
                    o.setAttribute(e, "display", "true"),
                    this.handleDisplay(e))
                  : this.handleInline(e),
                  o.addClass(r, "MJX-TEX");
              }),
              (e.prototype.handleDisplay = function (t) {
                var e = this.adaptor,
                  r = i(this.getAlignShift(), 2),
                  o = r[0],
                  n = r[1];
                if (
                  ("center" !== o && e.setAttribute(t, "justify", o),
                  this.bbox.pwidth === h.BBox.fullWidth)
                ) {
                  if ((e.setAttribute(t, "width", "full"), this.jax.table)) {
                    var a = this.jax.table.getBBox(),
                      s = a.L,
                      l = a.w,
                      c = a.R;
                    "right" === o
                      ? (c = Math.max(c || -n, -n))
                      : "left" === o
                      ? (s = Math.max(s || n, n))
                      : "center" === o && (l += 2 * Math.abs(n));
                    var u = this.em(Math.max(0, s + l + c));
                    e.setStyle(t, "min-width", u),
                      e.setStyle(this.jax.table.chtml, "min-width", u);
                  }
                } else this.setIndent(this.chtml, o, n);
              }),
              (e.prototype.handleInline = function (t) {
                var e = this.adaptor,
                  r = e.getStyle(this.chtml, "margin-right");
                r &&
                  (e.setStyle(this.chtml, "margin-right", ""),
                  e.setStyle(t, "margin-right", r),
                  e.setStyle(t, "width", "0"));
              }),
              (e.prototype.setChildPWidths = function (e, r, o) {
                return (
                  void 0 === r && (r = null),
                  void 0 === o && (o = !0),
                  !!this.parent &&
                    t.prototype.setChildPWidths.call(this, e, r, o)
                );
              }),
              (e.kind = l.MmlMath.prototype.kind),
              (e.styles = {
                "mjx-math": {
                  "line-height": 0,
                  "text-align": "left",
                  "text-indent": 0,
                  "font-style": "normal",
                  "font-weight": "normal",
                  "font-size": "100%",
                  "font-size-adjust": "none",
                  "letter-spacing": "normal",
                  "word-wrap": "normal",
                  "word-spacing": "normal",
                  "white-space": "nowrap",
                  direction: "ltr",
                  padding: "1px 0",
                },
                'mjx-container[jax="CHTML"][display="true"]': {
                  display: "block",
                  "text-align": "center",
                  margin: "1em 0",
                },
                'mjx-container[jax="CHTML"][display="true"][width="full"]': {
                  display: "flex",
                },
                'mjx-container[jax="CHTML"][display="true"] mjx-math': {
                  padding: 0,
                },
                'mjx-container[jax="CHTML"][justify="left"]': {
                  "text-align": "left",
                },
                'mjx-container[jax="CHTML"][justify="right"]': {
                  "text-align": "right",
                },
              }),
              e
            );
          })(s.CommonMathMixin(a.CHTMLWrapper));
        e.CHTMLmath = c;
      },
      3215: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          a =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmenclose = void 0);
        var s = r(6617),
          l = r(6200),
          h = r(4458),
          c = r(4374),
          u = r(6914);
        function p(t, e) {
          return Math.atan2(t, e)
            .toFixed(3)
            .replace(/\.?0+$/, "");
        }
        var d = p(h.ARROWDX, h.ARROWY),
          f = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e,
                  r,
                  o,
                  n,
                  a = this.adaptor,
                  s = this.standardCHTMLnode(t),
                  l = a.append(s, this.html("mjx-box"));
                this.renderChild
                  ? this.renderChild(this, l)
                  : this.childNodes[0].toCHTML(l);
                try {
                  for (
                    var c = i(Object.keys(this.notations)), u = c.next();
                    !u.done;
                    u = c.next()
                  ) {
                    var p = u.value,
                      d = this.notations[p];
                    !d.renderChild && d.renderer(this, l);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    u && !u.done && (r = c.return) && r.call(c);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                var f = this.getPadding();
                try {
                  for (
                    var m = i(h.sideNames), y = m.next();
                    !y.done;
                    y = m.next()
                  ) {
                    var v = y.value,
                      b = h.sideIndex[v];
                    f[b] > 0 && a.setStyle(l, "padding-" + v, this.em(f[b]));
                  }
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    y && !y.done && (n = m.return) && n.call(m);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              }),
              (e.prototype.arrow = function (t, e, r, o, n) {
                void 0 === o && (o = ""), void 0 === n && (n = 0);
                var i = this.getBBox().w,
                  a = { width: this.em(t) };
                i !== t && (a.left = this.em((i - t) / 2)),
                  e && (a.transform = "rotate(" + this.fixed(e) + "rad)");
                var s = this.html("mjx-arrow", { style: a }, [
                  this.html("mjx-aline"),
                  this.html("mjx-rthead"),
                  this.html("mjx-rbhead"),
                ]);
                return (
                  r &&
                    (this.adaptor.append(s, this.html("mjx-lthead")),
                    this.adaptor.append(s, this.html("mjx-lbhead")),
                    this.adaptor.setAttribute(s, "double", "true")),
                  this.adjustArrow(s, r),
                  this.moveArrow(s, o, n),
                  s
                );
              }),
              (e.prototype.adjustArrow = function (t, e) {
                var r = this,
                  o = this.thickness,
                  n = this.arrowhead;
                if (
                  n.x !== h.ARROWX ||
                  n.y !== h.ARROWY ||
                  n.dx !== h.ARROWDX ||
                  o !== h.THICKNESS
                ) {
                  var i = a(
                      [o * n.x, o * n.y].map(function (t) {
                        return r.em(t);
                      }),
                      2
                    ),
                    s = i[0],
                    l = i[1],
                    c = p(n.dx, n.y),
                    u = a(this.adaptor.childNodes(t), 5),
                    d = u[0],
                    f = u[1],
                    m = u[2],
                    y = u[3],
                    v = u[4];
                  this.adjustHead(f, [l, "0", "1px", s], c),
                    this.adjustHead(m, ["1px", "0", l, s], "-" + c),
                    this.adjustHead(y, [l, s, "1px", "0"], "-" + c),
                    this.adjustHead(v, ["1px", s, l, "0"], c),
                    this.adjustLine(d, o, n.x, e);
                }
              }),
              (e.prototype.adjustHead = function (t, e, r) {
                t &&
                  (this.adaptor.setStyle(t, "border-width", e.join(" ")),
                  this.adaptor.setStyle(t, "transform", "skewX(" + r + "rad)"));
              }),
              (e.prototype.adjustLine = function (t, e, r, o) {
                this.adaptor.setStyle(t, "borderTop", this.em(e) + " solid"),
                  this.adaptor.setStyle(t, "top", this.em(-e / 2)),
                  this.adaptor.setStyle(t, "right", this.em(e * (r - 1))),
                  o && this.adaptor.setStyle(t, "left", this.em(e * (r - 1)));
              }),
              (e.prototype.moveArrow = function (t, e, r) {
                if (r) {
                  var o = this.adaptor.getStyle(t, "transform");
                  this.adaptor.setStyle(
                    t,
                    "transform",
                    "translate" +
                      e +
                      "(" +
                      this.em(-r) +
                      ")" +
                      (o ? " " + o : "")
                  );
                }
              }),
              (e.prototype.adjustBorder = function (t) {
                return (
                  this.thickness !== h.THICKNESS &&
                    this.adaptor.setStyle(
                      t,
                      "borderWidth",
                      this.em(this.thickness)
                    ),
                  t
                );
              }),
              (e.prototype.adjustThickness = function (t) {
                return (
                  this.thickness !== h.THICKNESS &&
                    this.adaptor.setStyle(
                      t,
                      "strokeWidth",
                      this.fixed(this.thickness)
                    ),
                  t
                );
              }),
              (e.prototype.fixed = function (t, e) {
                return (
                  void 0 === e && (e = 3),
                  Math.abs(t) < 6e-4 ? "0" : t.toFixed(e).replace(/\.?0+$/, "")
                );
              }),
              (e.prototype.em = function (e) {
                return t.prototype.em.call(this, e);
              }),
              (e.kind = c.MmlMenclose.prototype.kind),
              (e.styles = {
                "mjx-menclose": { position: "relative" },
                "mjx-menclose > mjx-dstrike": {
                  display: "inline-block",
                  left: 0,
                  top: 0,
                  position: "absolute",
                  "border-top": h.SOLID,
                  "transform-origin": "top left",
                },
                "mjx-menclose > mjx-ustrike": {
                  display: "inline-block",
                  left: 0,
                  bottom: 0,
                  position: "absolute",
                  "border-top": h.SOLID,
                  "transform-origin": "bottom left",
                },
                "mjx-menclose > mjx-hstrike": {
                  "border-top": h.SOLID,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "50%",
                  transform: "translateY(" + u.em(h.THICKNESS / 2) + ")",
                },
                "mjx-menclose > mjx-vstrike": {
                  "border-left": h.SOLID,
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: "50%",
                  transform: "translateX(" + u.em(h.THICKNESS / 2) + ")",
                },
                "mjx-menclose > mjx-rbox": {
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  border: h.SOLID,
                  "border-radius": u.em(h.THICKNESS + h.PADDING),
                },
                "mjx-menclose > mjx-cbox": {
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  border: h.SOLID,
                  "border-radius": "50%",
                },
                "mjx-menclose > mjx-arrow": {
                  position: "absolute",
                  left: 0,
                  bottom: "50%",
                  height: 0,
                  width: 0,
                },
                "mjx-menclose > mjx-arrow > *": {
                  display: "block",
                  position: "absolute",
                  "transform-origin": "bottom",
                  "border-left": u.em(h.THICKNESS * h.ARROWX) + " solid",
                  "border-right": 0,
                  "box-sizing": "border-box",
                },
                "mjx-menclose > mjx-arrow > mjx-aline": {
                  left: 0,
                  top: u.em(-h.THICKNESS / 2),
                  right: u.em(h.THICKNESS * (h.ARROWX - 1)),
                  height: 0,
                  "border-top": u.em(h.THICKNESS) + " solid",
                  "border-left": 0,
                },
                "mjx-menclose > mjx-arrow[double] > mjx-aline": {
                  left: u.em(h.THICKNESS * (h.ARROWX - 1)),
                  height: 0,
                },
                "mjx-menclose > mjx-arrow > mjx-rthead": {
                  transform: "skewX(" + d + "rad)",
                  right: 0,
                  bottom: "-1px",
                  "border-bottom": "1px solid transparent",
                  "border-top":
                    u.em(h.THICKNESS * h.ARROWY) + " solid transparent",
                },
                "mjx-menclose > mjx-arrow > mjx-rbhead": {
                  transform: "skewX(-" + d + "rad)",
                  "transform-origin": "top",
                  right: 0,
                  top: "-1px",
                  "border-top": "1px solid transparent",
                  "border-bottom":
                    u.em(h.THICKNESS * h.ARROWY) + " solid transparent",
                },
                "mjx-menclose > mjx-arrow > mjx-lthead": {
                  transform: "skewX(-" + d + "rad)",
                  left: 0,
                  bottom: "-1px",
                  "border-left": 0,
                  "border-right": u.em(h.THICKNESS * h.ARROWX) + " solid",
                  "border-bottom": "1px solid transparent",
                  "border-top":
                    u.em(h.THICKNESS * h.ARROWY) + " solid transparent",
                },
                "mjx-menclose > mjx-arrow > mjx-lbhead": {
                  transform: "skewX(" + d + "rad)",
                  "transform-origin": "top",
                  left: 0,
                  top: "-1px",
                  "border-left": 0,
                  "border-right": u.em(h.THICKNESS * h.ARROWX) + " solid",
                  "border-top": "1px solid transparent",
                  "border-bottom":
                    u.em(h.THICKNESS * h.ARROWY) + " solid transparent",
                },
                "mjx-menclose > dbox": {
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: u.em(-1.5 * h.PADDING),
                  width: u.em(3 * h.PADDING),
                  border: u.em(h.THICKNESS) + " solid",
                  "border-radius": "50%",
                  "clip-path": "inset(0 0 0 " + u.em(1.5 * h.PADDING) + ")",
                  "box-sizing": "border-box",
                },
              }),
              (e.notations = new Map([
                h.Border("top"),
                h.Border("right"),
                h.Border("bottom"),
                h.Border("left"),
                h.Border2("actuarial", "top", "right"),
                h.Border2("madruwb", "bottom", "right"),
                h.DiagonalStrike("up", 1),
                h.DiagonalStrike("down", -1),
                [
                  "horizontalstrike",
                  {
                    renderer: h.RenderElement("hstrike", "Y"),
                    bbox: function (t) {
                      return [0, t.padding, 0, t.padding];
                    },
                  },
                ],
                [
                  "verticalstrike",
                  {
                    renderer: h.RenderElement("vstrike", "X"),
                    bbox: function (t) {
                      return [t.padding, 0, t.padding, 0];
                    },
                  },
                ],
                [
                  "box",
                  {
                    renderer: function (t, e) {
                      t.adaptor.setStyle(
                        e,
                        "border",
                        t.em(t.thickness) + " solid"
                      );
                    },
                    bbox: h.fullBBox,
                    border: h.fullBorder,
                    remove: "left right top bottom",
                  },
                ],
                [
                  "roundedbox",
                  { renderer: h.RenderElement("rbox"), bbox: h.fullBBox },
                ],
                [
                  "circle",
                  { renderer: h.RenderElement("cbox"), bbox: h.fullBBox },
                ],
                [
                  "phasorangle",
                  {
                    renderer: function (t, e) {
                      var r = t.getBBox(),
                        o = r.h,
                        n = r.d,
                        i = a(t.getArgMod(1.75 * t.padding, o + n), 2),
                        s = i[0],
                        l = i[1],
                        h = t.thickness * Math.sin(s) * 0.9;
                      t.adaptor.setStyle(
                        e,
                        "border-bottom",
                        t.em(t.thickness) + " solid"
                      );
                      var c = t.adjustBorder(
                        t.html("mjx-ustrike", {
                          style: {
                            width: t.em(l),
                            transform:
                              "translateX(" +
                              t.em(h) +
                              ") rotate(" +
                              t.fixed(-s) +
                              "rad)",
                          },
                        })
                      );
                      t.adaptor.append(t.chtml, c);
                    },
                    bbox: function (t) {
                      var e = t.padding / 2,
                        r = t.thickness;
                      return [2 * e, e, e + r, 3 * e + r];
                    },
                    border: function (t) {
                      return [0, 0, t.thickness, 0];
                    },
                    remove: "bottom",
                  },
                ],
                h.Arrow("up"),
                h.Arrow("down"),
                h.Arrow("left"),
                h.Arrow("right"),
                h.Arrow("updown"),
                h.Arrow("leftright"),
                h.DiagonalArrow("updiagonal"),
                h.DiagonalArrow("northeast"),
                h.DiagonalArrow("southeast"),
                h.DiagonalArrow("northwest"),
                h.DiagonalArrow("southwest"),
                h.DiagonalArrow("northeastsouthwest"),
                h.DiagonalArrow("northwestsoutheast"),
                [
                  "longdiv",
                  {
                    renderer: function (t, e) {
                      var r = t.adaptor;
                      r.setStyle(e, "border-top", t.em(t.thickness) + " solid");
                      var o = r.append(t.chtml, t.html("dbox")),
                        n = t.thickness,
                        i = t.padding;
                      n !== h.THICKNESS &&
                        r.setStyle(o, "border-width", t.em(n)),
                        i !== h.PADDING &&
                          (r.setStyle(o, "left", t.em(-1.5 * i)),
                          r.setStyle(o, "width", t.em(3 * i)),
                          r.setStyle(
                            o,
                            "clip-path",
                            "inset(0 0 0 " + t.em(1.5 * i) + ")"
                          ));
                    },
                    bbox: function (t) {
                      var e = t.padding,
                        r = t.thickness;
                      return [e + r, e, e, 2 * e + r / 2];
                    },
                  },
                ],
                [
                  "radical",
                  {
                    renderer: function (t, e) {
                      t.msqrt.toCHTML(e);
                      var r = t.sqrtTRBL();
                      t.adaptor.setStyle(
                        t.msqrt.chtml,
                        "margin",
                        r
                          .map(function (e) {
                            return t.em(-e);
                          })
                          .join(" ")
                      );
                    },
                    init: function (t) {
                      t.msqrt = t.createMsqrt(t.childNodes[0]);
                    },
                    bbox: function (t) {
                      return t.sqrtTRBL();
                    },
                    renderChild: !0,
                  },
                ],
              ])),
              e
            );
          })(l.CommonMencloseMixin(s.CHTMLWrapper));
        e.CHTMLmenclose = f;
      },
      7047: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmfenced = void 0);
        var i = r(6617),
          a = r(1346),
          s = r(7451),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e = this.standardCHTMLnode(t);
                this.mrow.toCHTML(e);
              }),
              (e.kind = s.MmlMfenced.prototype.kind),
              e
            );
          })(a.CommonMfencedMixin(i.CHTMLWrapper));
        e.CHTMLmfenced = l;
      },
      7837: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var n in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }).apply(this, arguments);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmfrac = void 0);
        var a = r(6617),
          s = r(5705),
          l = r(848),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                this.standardCHTMLnode(t);
                var e = this.node.attributes.getList(
                    "linethickness",
                    "bevelled"
                  ),
                  r = e.linethickness,
                  o = e.bevelled,
                  n = this.isDisplay();
                if (o) this.makeBevelled(n);
                else {
                  var i = this.length2em(String(r), 0.06);
                  0 === i ? this.makeAtop(n) : this.makeFraction(n, i);
                }
              }),
              (e.prototype.makeFraction = function (t, e) {
                var r,
                  o,
                  n = this.node.attributes.getList("numalign", "denomalign"),
                  a = n.numalign,
                  s = n.denomalign,
                  l = t ? { type: "d" } : {},
                  h = this.node.getProperty("withDelims")
                    ? i(i({}, l), { delims: "true" })
                    : i({}, l),
                  c = "center" !== a ? { align: a } : {},
                  u = "center" !== s ? { align: s } : {},
                  p = i({}, l),
                  d = i({}, l),
                  f = this.font.params;
                if (0.06 !== e) {
                  var m = f.axis_height,
                    y = this.em(e),
                    v = this.getTUV(t, e),
                    b = v.T,
                    x = v.u,
                    g = v.v,
                    M = (t ? this.em(3 * e) : y) + " -.1em";
                  l.style = {
                    height: y,
                    "border-top": y + " solid",
                    margin: M,
                  };
                  var _ = this.em(Math.max(0, x));
                  (d.style = { height: _, "vertical-align": "-" + _ }),
                    (p.style = { height: this.em(Math.max(0, g)) }),
                    (h.style = { "vertical-align": this.em(m - b) });
                }
                this.adaptor.append(
                  this.chtml,
                  this.html("mjx-frac", h, [
                    (r = this.html("mjx-num", c, [this.html("mjx-nstrut", d)])),
                    this.html("mjx-dbox", {}, [
                      this.html("mjx-dtable", {}, [
                        this.html("mjx-line", l),
                        this.html("mjx-row", {}, [
                          (o = this.html("mjx-den", u, [
                            this.html("mjx-dstrut", p),
                          ])),
                        ]),
                      ]),
                    ]),
                  ])
                ),
                  this.childNodes[0].toCHTML(r),
                  this.childNodes[1].toCHTML(o);
              }),
              (e.prototype.makeAtop = function (t) {
                var e,
                  r,
                  o = this.node.attributes.getList("numalign", "denomalign"),
                  n = o.numalign,
                  a = o.denomalign,
                  s = t ? { type: "d", atop: !0 } : { atop: !0 },
                  l = this.node.getProperty("withDelims")
                    ? i(i({}, s), { delims: !0 })
                    : i({}, s),
                  h = "center" !== n ? { align: n } : {},
                  c = "center" !== a ? { align: a } : {},
                  u = this.getUVQ(t),
                  p = u.v,
                  d = u.q;
                (h.style = { "padding-bottom": this.em(d) }),
                  (l.style = { "vertical-align": this.em(-p) }),
                  this.adaptor.append(
                    this.chtml,
                    this.html("mjx-frac", l, [
                      (e = this.html("mjx-num", h)),
                      (r = this.html("mjx-den", c)),
                    ])
                  ),
                  this.childNodes[0].toCHTML(e),
                  this.childNodes[1].toCHTML(r);
              }),
              (e.prototype.makeBevelled = function (t) {
                var e = this.adaptor;
                e.setAttribute(this.chtml, "bevelled", "ture");
                var r = e.append(this.chtml, this.html("mjx-num"));
                this.childNodes[0].toCHTML(r), this.bevel.toCHTML(this.chtml);
                var o = e.append(this.chtml, this.html("mjx-den"));
                this.childNodes[1].toCHTML(o);
                var n = this.getBevelData(t),
                  i = n.u,
                  a = n.v,
                  s = n.delta,
                  l = n.nbox,
                  h = n.dbox;
                i && e.setStyle(r, "verticalAlign", this.em(i / l.scale)),
                  a && e.setStyle(o, "verticalAlign", this.em(a / h.scale));
                var c = this.em(-s / 2);
                e.setStyle(this.bevel.chtml, "marginLeft", c),
                  e.setStyle(this.bevel.chtml, "marginRight", c);
              }),
              (e.kind = l.MmlMfrac.prototype.kind),
              (e.styles = {
                "mjx-frac": {
                  display: "inline-block",
                  "vertical-align": "0.17em",
                  padding: "0 .22em",
                },
                'mjx-frac[type="d"]': { "vertical-align": ".04em" },
                "mjx-frac[delims]": { padding: "0 .1em" },
                "mjx-frac[atop]": { padding: "0 .12em" },
                "mjx-frac[atop][delims]": { padding: "0" },
                "mjx-dtable": { display: "inline-table", width: "100%" },
                "mjx-dtable > *": { "font-size": "2000%" },
                "mjx-dbox": { display: "block", "font-size": "5%" },
                "mjx-num": { display: "block", "text-align": "center" },
                "mjx-den": { display: "block", "text-align": "center" },
                "mjx-mfrac[bevelled] > mjx-num": { display: "inline-block" },
                "mjx-mfrac[bevelled] > mjx-den": { display: "inline-block" },
                'mjx-den[align="right"], mjx-num[align="right"]': {
                  "text-align": "right",
                },
                'mjx-den[align="left"], mjx-num[align="left"]': {
                  "text-align": "left",
                },
                "mjx-nstrut": {
                  display: "inline-block",
                  height: ".054em",
                  width: 0,
                  "vertical-align": "-.054em",
                },
                'mjx-nstrut[type="d"]': {
                  height: ".217em",
                  "vertical-align": "-.217em",
                },
                "mjx-dstrut": {
                  display: "inline-block",
                  height: ".505em",
                  width: 0,
                },
                'mjx-dstrut[type="d"]': { height: ".726em" },
                "mjx-line": {
                  display: "block",
                  "box-sizing": "border-box",
                  "min-height": "1px",
                  height: ".06em",
                  "border-top": ".06em solid",
                  margin: ".06em -.1em",
                  overflow: "hidden",
                },
                'mjx-line[type="d"]': { margin: ".18em -.1em" },
              }),
              e
            );
          })(s.CommonMfracMixin(a.CHTMLWrapper));
        e.CHTMLmfrac = h;
      },
      1315: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmglyph = void 0);
        var i = r(6617),
          a = r(7969),
          s = r(910),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e = this.standardCHTMLnode(t),
                  r = this.node.attributes.getList("src", "alt"),
                  o = r.src,
                  n = r.alt,
                  i = {
                    width: this.em(this.width),
                    height: this.em(this.height),
                  };
                this.valign && (i.verticalAlign = this.em(this.valign));
                var a = this.html("img", {
                  src: o,
                  style: i,
                  alt: n,
                  title: n,
                });
                this.adaptor.append(e, a);
              }),
              (e.kind = s.MmlMglyph.prototype.kind),
              (e.styles = {
                "mjx-mglyph > img": {
                  display: "inline-block",
                  border: 0,
                  padding: 0,
                },
              }),
              e
            );
          })(a.CommonMglyphMixin(i.CHTMLWrapper));
        e.CHTMLmglyph = l;
      },
      3271: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmi = void 0);
        var i = r(6617),
          a = r(1419),
          s = r(7754),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return n(e, t), (e.kind = s.MmlMi.prototype.kind), e;
          })(a.CommonMiMixin(i.CHTMLWrapper));
        e.CHTMLmi = l;
      },
      1096: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmmultiscripts = void 0);
        var a = r(513),
          s = r(9906),
          l = r(7764),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e = this.standardCHTMLnode(t),
                  r = this.scriptData,
                  o = this.combinePrePost(r.sub, r.psub),
                  n = this.combinePrePost(r.sup, r.psup),
                  a = i(this.getUVQ(o, n), 2),
                  s = a[0],
                  l = a[1];
                r.numPrescripts &&
                  this.addScripts(
                    s,
                    -l,
                    !0,
                    r.psub,
                    r.psup,
                    this.firstPrescript,
                    r.numPrescripts
                  ),
                  this.childNodes[0].toCHTML(e),
                  r.numScripts &&
                    this.addScripts(s, -l, !1, r.sub, r.sup, 1, r.numScripts);
              }),
              (e.prototype.addScripts = function (t, e, r, o, n, i, a) {
                var s = this.adaptor,
                  l = t - n.d + (e - o.h),
                  h = t < 0 && 0 === e ? o.h + t : t,
                  c = l > 0 ? { style: { height: this.em(l) } } : {},
                  u = h ? { style: { "vertical-align": this.em(h) } } : {},
                  p = this.html("mjx-row"),
                  d = this.html("mjx-row", c),
                  f = this.html("mjx-row"),
                  m = "mjx-" + (r ? "pre" : "") + "scripts";
                s.append(this.chtml, this.html(m, u, [p, d, f]));
                for (var y = i + 2 * a; i < y; )
                  this.childNodes[i++].toCHTML(
                    s.append(f, this.html("mjx-cell"))
                  ),
                    this.childNodes[i++].toCHTML(
                      s.append(p, this.html("mjx-cell"))
                    );
              }),
              (e.kind = l.MmlMmultiscripts.prototype.kind),
              (e.styles = {
                "mjx-prescripts": {
                  display: "inline-table",
                  "padding-left": ".05em",
                },
                "mjx-scripts": {
                  display: "inline-table",
                  "padding-right": ".05em",
                },
                "mjx-prescripts > mjx-row > mjx-cell": {
                  "text-align": "right",
                },
              }),
              e
            );
          })(s.CommonMmultiscriptsMixin(a.CHTMLmsubsup));
        e.CHTMLmmultiscripts = h;
      },
      7013: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmn = void 0);
        var i = r(6617),
          a = r(2304),
          s = r(3235),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return n(e, t), (e.kind = s.MmlMn.prototype.kind), e;
          })(a.CommonMnMixin(i.CHTMLWrapper));
        e.CHTMLmn = l;
      },
      3292: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmo = void 0);
        var a = r(6617),
          s = r(437),
          l = r(9946),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e,
                  r,
                  o = this.node.attributes,
                  n = o.get("symmetric") && 2 !== this.stretch.dir,
                  a = 0 !== this.stretch.dir;
                a && null === this.size && this.getStretchedVariant([]);
                var s = this.standardCHTMLnode(t);
                if (a && this.size < 0) this.stretchHTML(s);
                else {
                  if (n || o.get("largeop")) {
                    var l = this.em(this.getCenterOffset());
                    "0" !== l && this.adaptor.setStyle(s, "verticalAlign", l);
                  }
                  this.node.getProperty("mathaccent") &&
                    (this.adaptor.setStyle(s, "width", "0"),
                    this.adaptor.setStyle(
                      s,
                      "margin-left",
                      this.em(this.getAccentOffset())
                    ));
                  try {
                    for (
                      var h = i(this.childNodes), c = h.next();
                      !c.done;
                      c = h.next()
                    ) {
                      c.value.toCHTML(s);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      c && !c.done && (r = h.return) && r.call(h);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                }
              }),
              (e.prototype.stretchHTML = function (t) {
                var e = this.getText().codePointAt(0);
                this.font.delimUsage.add(e), this.childNodes[0].markUsed();
                var r = this.stretch,
                  o = r.stretch,
                  n = [];
                o[0] && n.push(this.html("mjx-beg", {}, [this.html("mjx-c")])),
                  n.push(this.html("mjx-ext", {}, [this.html("mjx-c")])),
                  4 === o.length &&
                    n.push(
                      this.html("mjx-mid", {}, [this.html("mjx-c")]),
                      this.html("mjx-ext", {}, [this.html("mjx-c")])
                    ),
                  o[2] &&
                    n.push(this.html("mjx-end", {}, [this.html("mjx-c")]));
                var i = {},
                  a = this.bbox,
                  l = a.h,
                  h = a.d,
                  c = a.w;
                1 === r.dir
                  ? (n.push(this.html("mjx-mark")),
                    (i.height = this.em(l + h)),
                    (i.verticalAlign = this.em(-h)))
                  : (i.width = this.em(c));
                var u = s.DirectionVH[r.dir],
                  p = { class: this.char(r.c || e), style: i },
                  d = this.html("mjx-stretchy-" + u, p, n);
                this.adaptor.append(t, d);
              }),
              (e.kind = l.MmlMo.prototype.kind),
              (e.styles = {
                "mjx-stretchy-h": { display: "inline-table", width: "100%" },
                "mjx-stretchy-h > *": { display: "table-cell", width: 0 },
                "mjx-stretchy-h > * > mjx-c": {
                  display: "inline-block",
                  transform: "scalex(1.0000001)",
                },
                "mjx-stretchy-h > * > mjx-c::before": {
                  display: "inline-block",
                  width: "initial",
                },
                "mjx-stretchy-h > mjx-ext": {
                  "/* IE */ overflow": "hidden",
                  "/* others */ overflow": "clip visible",
                  width: "100%",
                },
                "mjx-stretchy-h > mjx-ext > mjx-c::before": {
                  transform: "scalex(500)",
                },
                "mjx-stretchy-h > mjx-ext > mjx-c": { width: 0 },
                "mjx-stretchy-h > mjx-beg > mjx-c": { "margin-right": "-.1em" },
                "mjx-stretchy-h > mjx-end > mjx-c": { "margin-left": "-.1em" },
                "mjx-stretchy-v": { display: "inline-block" },
                "mjx-stretchy-v > *": { display: "block" },
                "mjx-stretchy-v > mjx-beg": { height: 0 },
                "mjx-stretchy-v > mjx-end > mjx-c": { display: "block" },
                "mjx-stretchy-v > * > mjx-c": {
                  transform: "scaley(1.0000001)",
                  "transform-origin": "left center",
                  overflow: "hidden",
                },
                "mjx-stretchy-v > mjx-ext": {
                  display: "block",
                  height: "100%",
                  "box-sizing": "border-box",
                  border: "0px solid transparent",
                  "/* IE */ overflow": "hidden",
                  "/* others */ overflow": "visible clip",
                },
                "mjx-stretchy-v > mjx-ext > mjx-c::before": {
                  width: "initial",
                  "box-sizing": "border-box",
                },
                "mjx-stretchy-v > mjx-ext > mjx-c": {
                  transform: "scaleY(500) translateY(.075em)",
                  overflow: "visible",
                },
                "mjx-mark": { display: "inline-block", height: "0px" },
              }),
              e
            );
          })(s.CommonMoMixin(a.CHTMLWrapper));
        e.CHTMLmo = h;
      },
      7215: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmpadded = void 0);
        var s = r(6617),
          l = r(7481),
          h = r(189),
          c = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e,
                  r,
                  o = this.standardCHTMLnode(t),
                  n = [],
                  s = {},
                  l = i(this.getDimens(), 9),
                  h = l[2],
                  c = l[3],
                  u = l[4],
                  p = l[5],
                  d = l[6],
                  f = l[7],
                  m = l[8];
                if (
                  (p && (s.width = this.em(h + p)),
                  (c || u) && (s.margin = this.em(c) + " 0 " + this.em(u)),
                  d + m || f)
                ) {
                  s.position = "relative";
                  var y = this.html("mjx-rbox", {
                    style: {
                      left: this.em(d + m),
                      top: this.em(-f),
                      "max-width": s.width,
                    },
                  });
                  d + m &&
                    this.childNodes[0].getBBox().pwidth &&
                    (this.adaptor.setAttribute(y, "width", "full"),
                    this.adaptor.setStyle(y, "left", this.em(d))),
                    n.push(y);
                }
                o = this.adaptor.append(
                  o,
                  this.html("mjx-block", { style: s }, n)
                );
                try {
                  for (
                    var v = a(this.childNodes), b = v.next();
                    !b.done;
                    b = v.next()
                  ) {
                    b.value.toCHTML(n[0] || o);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    b && !b.done && (r = v.return) && r.call(v);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (e.kind = h.MmlMpadded.prototype.kind),
              (e.styles = {
                "mjx-mpadded": { display: "inline-block" },
                "mjx-rbox": { display: "inline-block", position: "relative" },
              }),
              e
            );
          })(l.CommonMpaddedMixin(s.CHTMLWrapper));
        e.CHTMLmpadded = c;
      },
      7111: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmroot = void 0);
        var a = r(5437),
          s = r(5997),
          l = r(4664),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.addRoot = function (t, e, r, o) {
                e.toCHTML(t);
                var n = i(this.getRootDimens(r, o), 3),
                  a = n[0],
                  s = n[1],
                  l = n[2];
                this.adaptor.setStyle(t, "verticalAlign", this.em(s)),
                  this.adaptor.setStyle(t, "width", this.em(a)),
                  l &&
                    this.adaptor.setStyle(
                      this.adaptor.firstChild(t),
                      "paddingLeft",
                      this.em(l)
                    );
              }),
              (e.kind = l.MmlMroot.prototype.kind),
              e
            );
          })(s.CommonMrootMixin(a.CHTMLmsqrt));
        e.CHTMLmroot = h;
      },
      3126: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLinferredMrow = e.CHTMLmrow = void 0);
        var a = r(6617),
          s = r(9323),
          l = r(9323),
          h = r(1691),
          c = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e,
                  r,
                  o = this.node.isInferred
                    ? (this.chtml = t)
                    : this.standardCHTMLnode(t),
                  n = !1;
                try {
                  for (
                    var a = i(this.childNodes), s = a.next();
                    !s.done;
                    s = a.next()
                  ) {
                    var l = s.value;
                    l.toCHTML(o), l.bbox.w < 0 && (n = !0);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (r = a.return) && r.call(a);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                if (n) {
                  var h = this.getBBox().w;
                  h &&
                    (this.adaptor.setStyle(o, "width", this.em(Math.max(0, h))),
                    h < 0 &&
                      this.adaptor.setStyle(o, "marginRight", this.em(h)));
                }
              }),
              (e.kind = h.MmlMrow.prototype.kind),
              e
            );
          })(s.CommonMrowMixin(a.CHTMLWrapper));
        e.CHTMLmrow = c;
        var u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), (e.kind = h.MmlInferredMrow.prototype.kind), e;
        })(l.CommonInferredMrowMixin(c));
        e.CHTMLinferredMrow = u;
      },
      9821: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLms = void 0);
        var i = r(6617),
          a = r(6920),
          s = r(4042),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return n(e, t), (e.kind = s.MmlMs.prototype.kind), e;
          })(a.CommonMsMixin(i.CHTMLWrapper));
        e.CHTMLms = l;
      },
      6024: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmspace = void 0);
        var i = r(6617),
          a = r(37),
          s = r(1465),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e = this.standardCHTMLnode(t),
                  r = this.getBBox(),
                  o = r.w,
                  n = r.h,
                  i = r.d;
                o < 0 &&
                  (this.adaptor.setStyle(e, "marginRight", this.em(o)),
                  (o = 0)),
                  o && this.adaptor.setStyle(e, "width", this.em(o)),
                  (n = Math.max(0, n + i)) &&
                    this.adaptor.setStyle(e, "height", this.em(Math.max(0, n))),
                  i && this.adaptor.setStyle(e, "verticalAlign", this.em(-i));
              }),
              (e.kind = s.MmlMspace.prototype.kind),
              e
            );
          })(a.CommonMspaceMixin(i.CHTMLWrapper));
        e.CHTMLmspace = l;
      },
      5437: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmsqrt = void 0);
        var a = r(6617),
          s = r(222),
          l = r(4655),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e,
                  r,
                  o,
                  n,
                  a = this.childNodes[this.surd],
                  s = this.childNodes[this.base],
                  l = a.getBBox(),
                  h = s.getBBox(),
                  c = i(this.getPQ(l), 2)[1],
                  u = this.font.params.rule_thickness,
                  p = h.h + c + u,
                  d = this.standardCHTMLnode(t);
                null != this.root &&
                  ((o = this.adaptor.append(d, this.html("mjx-root"))),
                  (n = this.childNodes[this.root]));
                var f = this.adaptor.append(
                  d,
                  this.html("mjx-sqrt", {}, [
                    (e = this.html("mjx-surd")),
                    (r = this.html("mjx-box", {
                      style: { paddingTop: this.em(c) },
                    })),
                  ])
                );
                this.addRoot(o, n, l, p),
                  a.toCHTML(e),
                  s.toCHTML(r),
                  a.size < 0 && this.adaptor.addClass(f, "mjx-tall");
              }),
              (e.prototype.addRoot = function (t, e, r, o) {}),
              (e.kind = l.MmlMsqrt.prototype.kind),
              (e.styles = {
                "mjx-root": {
                  display: "inline-block",
                  "white-space": "nowrap",
                },
                "mjx-surd": {
                  display: "inline-block",
                  "vertical-align": "top",
                },
                "mjx-sqrt": { display: "inline-block", "padding-top": ".07em" },
                "mjx-sqrt > mjx-box": { "border-top": ".07em solid" },
                "mjx-sqrt.mjx-tall > mjx-box": {
                  "padding-left": ".3em",
                  "margin-left": "-.3em",
                },
              }),
              e
            );
          })(s.CommonMsqrtMixin(a.CHTMLWrapper));
        e.CHTMLmsqrt = h;
      },
      513: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmsubsup = e.CHTMLmsup = e.CHTMLmsub = void 0);
        var a = r(7322),
          s = r(3069),
          l = r(3069),
          h = r(3069),
          c = r(5857),
          u = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return n(e, t), (e.kind = c.MmlMsub.prototype.kind), e;
          })(s.CommonMsubMixin(a.CHTMLscriptbase));
        e.CHTMLmsub = u;
        var p = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), (e.kind = c.MmlMsup.prototype.kind), e;
        })(l.CommonMsupMixin(a.CHTMLscriptbase));
        e.CHTMLmsup = p;
        var d = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.toCHTML = function (t) {
              var e = this.adaptor,
                r = this.standardCHTMLnode(t),
                o = i([this.baseChild, this.supChild, this.subChild], 3),
                n = o[0],
                a = o[1],
                s = o[2],
                l = i(this.getUVQ(), 3),
                h = l[1],
                c = l[2],
                u = { "vertical-align": this.em(h) };
              n.toCHTML(r);
              var p = e.append(r, this.html("mjx-script", { style: u }));
              a.toCHTML(p),
                e.append(
                  p,
                  this.html("mjx-spacer", {
                    style: { "margin-top": this.em(c) },
                  })
                ),
                s.toCHTML(p);
              var d = this.getAdjustedIc();
              d &&
                e.setStyle(a.chtml, "marginLeft", this.em(d / a.bbox.rscale)),
                this.baseRemoveIc &&
                  e.setStyle(p, "marginLeft", this.em(-this.baseIc));
            }),
            (e.kind = c.MmlMsubsup.prototype.kind),
            (e.styles = {
              "mjx-script": {
                display: "inline-block",
                "padding-right": ".05em",
                "padding-left": ".033em",
              },
              "mjx-script > *": { display: "block" },
            }),
            e
          );
        })(h.CommonMsubsupMixin(a.CHTMLscriptbase));
        e.CHTMLmsubsup = d;
      },
      6918: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          a =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmtable = void 0);
        var s = r(6617),
          l = r(8589),
          h = r(4859),
          c = r(6720),
          u = (function (t) {
            function e(e, r, o) {
              void 0 === o && (o = null);
              var n = t.call(this, e, r, o) || this;
              return (
                (n.itable = n.html("mjx-itable")),
                (n.labels = n.html("mjx-itable")),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.getAlignShift = function () {
                var e = t.prototype.getAlignShift.call(this);
                return this.isTop || (e[1] = 0), e;
              }),
              (e.prototype.toCHTML = function (t) {
                var e,
                  r,
                  o = this.standardCHTMLnode(t);
                this.adaptor.append(
                  o,
                  this.html("mjx-table", {}, [this.itable])
                );
                try {
                  for (
                    var n = i(this.childNodes), a = n.next();
                    !a.done;
                    a = n.next()
                  ) {
                    a.value.toCHTML(this.itable);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    a && !a.done && (r = n.return) && r.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.padRows(),
                  this.handleColumnSpacing(),
                  this.handleColumnLines(),
                  this.handleColumnWidths(),
                  this.handleRowSpacing(),
                  this.handleRowLines(),
                  this.handleRowHeights(),
                  this.handleFrame(),
                  this.handleWidth(),
                  this.handleLabels(),
                  this.handleAlign(),
                  this.handleJustify(),
                  this.shiftColor();
              }),
              (e.prototype.shiftColor = function () {
                var t = this.adaptor,
                  e = t.getStyle(this.chtml, "backgroundColor");
                e &&
                  (t.setStyle(this.chtml, "backgroundColor", ""),
                  t.setStyle(this.itable, "backgroundColor", e));
              }),
              (e.prototype.padRows = function () {
                var t,
                  e,
                  r = this.adaptor;
                try {
                  for (
                    var o = i(r.childNodes(this.itable)), n = o.next();
                    !n.done;
                    n = o.next()
                  )
                    for (
                      var a = n.value;
                      r.childNodes(a).length < this.numCols;

                    )
                      r.append(a, this.html("mjx-mtd", { extra: !0 }));
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.handleColumnSpacing = function () {
                var t,
                  e,
                  r,
                  o,
                  n = this.childNodes[0]
                    ? 1 / this.childNodes[0].getBBox().rscale
                    : 1,
                  a = this.getEmHalfSpacing(this.fSpace[0], this.cSpace, n),
                  s = this.frame;
                try {
                  for (
                    var l = i(this.tableRows), h = l.next();
                    !h.done;
                    h = l.next()
                  ) {
                    var c = h.value,
                      u = 0;
                    try {
                      for (
                        var p = ((r = void 0), i(c.tableCells)), d = p.next();
                        !d.done;
                        d = p.next()
                      ) {
                        var f = d.value,
                          m = a[u++],
                          y = a[u],
                          v = f ? f.chtml : this.adaptor.childNodes(c.chtml)[u];
                        ((u > 1 && "0.4em" !== m) || (s && 1 === u)) &&
                          this.adaptor.setStyle(v, "paddingLeft", m),
                          ((u < this.numCols && "0.4em" !== y) ||
                            (s && u === this.numCols)) &&
                            this.adaptor.setStyle(v, "paddingRight", y);
                      }
                    } catch (t) {
                      r = { error: t };
                    } finally {
                      try {
                        d && !d.done && (o = p.return) && o.call(p);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    h && !h.done && (e = l.return) && e.call(l);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.handleColumnLines = function () {
                var t, e, r, o;
                if ("none" !== this.node.attributes.get("columnlines")) {
                  var n = this.getColumnAttributes("columnlines");
                  try {
                    for (
                      var a = i(this.childNodes), s = a.next();
                      !s.done;
                      s = a.next()
                    ) {
                      var l = s.value,
                        h = 0;
                      try {
                        for (
                          var c =
                              ((r = void 0),
                              i(this.adaptor.childNodes(l.chtml).slice(1))),
                            u = c.next();
                          !u.done;
                          u = c.next()
                        ) {
                          var p = u.value,
                            d = n[h++];
                          "none" !== d &&
                            this.adaptor.setStyle(
                              p,
                              "borderLeft",
                              ".07em " + d
                            );
                        }
                      } catch (t) {
                        r = { error: t };
                      } finally {
                        try {
                          u && !u.done && (o = c.return) && o.call(c);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      s && !s.done && (e = a.return) && e.call(a);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }
              }),
              (e.prototype.handleColumnWidths = function () {
                var t, e, r, o;
                try {
                  for (
                    var n = i(this.childNodes), a = n.next();
                    !a.done;
                    a = n.next()
                  ) {
                    var s = a.value,
                      l = 0;
                    try {
                      for (
                        var h =
                            ((r = void 0), i(this.adaptor.childNodes(s.chtml))),
                          c = h.next();
                        !c.done;
                        c = h.next()
                      ) {
                        var u = c.value,
                          p = this.cWidths[l++];
                        if (null !== p) {
                          var d = "number" == typeof p ? this.em(p) : p;
                          this.adaptor.setStyle(u, "width", d),
                            this.adaptor.setStyle(u, "maxWidth", d),
                            this.adaptor.setStyle(u, "minWidth", d);
                        }
                      }
                    } catch (t) {
                      r = { error: t };
                    } finally {
                      try {
                        c && !c.done && (o = h.return) && o.call(h);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    a && !a.done && (e = n.return) && e.call(n);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.handleRowSpacing = function () {
                var t,
                  e,
                  r,
                  o,
                  n = this.childNodes[0]
                    ? 1 / this.childNodes[0].getBBox().rscale
                    : 1,
                  a = this.getEmHalfSpacing(this.fSpace[1], this.rSpace, n),
                  s = this.frame,
                  l = 0;
                try {
                  for (
                    var h = i(this.childNodes), c = h.next();
                    !c.done;
                    c = h.next()
                  ) {
                    var u = c.value,
                      p = a[l++],
                      d = a[l];
                    try {
                      for (
                        var f = ((r = void 0), i(u.childNodes)), m = f.next();
                        !m.done;
                        m = f.next()
                      ) {
                        var y = m.value;
                        ((l > 1 && "0.215em" !== p) || (s && 1 === l)) &&
                          this.adaptor.setStyle(y.chtml, "paddingTop", p),
                          ((l < this.numRows && "0.215em" !== d) ||
                            (s && l === this.numRows)) &&
                            this.adaptor.setStyle(y.chtml, "paddingBottom", d);
                      }
                    } catch (t) {
                      r = { error: t };
                    } finally {
                      try {
                        m && !m.done && (o = f.return) && o.call(f);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    c && !c.done && (e = h.return) && e.call(h);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.handleRowLines = function () {
                var t, e, r, o;
                if ("none" !== this.node.attributes.get("rowlines")) {
                  var n = this.getRowAttributes("rowlines"),
                    a = 0;
                  try {
                    for (
                      var s = i(this.childNodes.slice(1)), l = s.next();
                      !l.done;
                      l = s.next()
                    ) {
                      var h = l.value,
                        c = n[a++];
                      if ("none" !== c)
                        try {
                          for (
                            var u =
                                ((r = void 0),
                                i(this.adaptor.childNodes(h.chtml))),
                              p = u.next();
                            !p.done;
                            p = u.next()
                          ) {
                            var d = p.value;
                            this.adaptor.setStyle(d, "borderTop", ".07em " + c);
                          }
                        } catch (t) {
                          r = { error: t };
                        } finally {
                          try {
                            p && !p.done && (o = u.return) && o.call(u);
                          } finally {
                            if (r) throw r.error;
                          }
                        }
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      l && !l.done && (e = s.return) && e.call(s);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }
              }),
              (e.prototype.handleRowHeights = function () {
                this.node.attributes.get("equalrows") && this.handleEqualRows();
              }),
              (e.prototype.handleEqualRows = function () {
                for (
                  var t = this.getRowHalfSpacing(),
                    e = this.getTableData(),
                    r = e.H,
                    o = e.D,
                    n = e.NH,
                    i = e.ND,
                    a = this.getEqualRowHeight(),
                    s = 0;
                  s < this.numRows;
                  s++
                ) {
                  var l = this.childNodes[s];
                  this.setRowHeight(l, a + t[s] + t[s + 1] + this.rLines[s]),
                    a !== n[s] + i[s] &&
                      this.setRowBaseline(l, a, (a - r[s] + o[s]) / 2);
                }
              }),
              (e.prototype.setRowHeight = function (t, e) {
                this.adaptor.setStyle(t.chtml, "height", this.em(e));
              }),
              (e.prototype.setRowBaseline = function (t, e, r) {
                var o,
                  n,
                  a = t.node.attributes.get("rowalign");
                try {
                  for (
                    var s = i(t.childNodes), l = s.next();
                    !l.done;
                    l = s.next()
                  ) {
                    var h = l.value;
                    if (this.setCellBaseline(h, a, e, r)) break;
                  }
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    l && !l.done && (n = s.return) && n.call(s);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              }),
              (e.prototype.setCellBaseline = function (t, e, r, o) {
                var n = t.node.attributes.get("rowalign");
                if ("baseline" === n || "axis" === n) {
                  var i = this.adaptor,
                    a = i.lastChild(t.chtml);
                  i.setStyle(a, "height", this.em(r)),
                    i.setStyle(a, "verticalAlign", this.em(-o));
                  var s = t.parent;
                  if (
                    !(
                      (s.node.isKind("mlabeledtr") && t === s.childNodes[0]) ||
                      ("baseline" !== e && "axis" !== e)
                    )
                  )
                    return !0;
                }
                return !1;
              }),
              (e.prototype.handleFrame = function () {
                this.frame &&
                  this.fLine &&
                  this.adaptor.setStyle(
                    this.itable,
                    "border",
                    ".07em " + this.node.attributes.get("frame")
                  );
              }),
              (e.prototype.handleWidth = function () {
                var t = this.adaptor,
                  e = this.getBBox(),
                  r = e.w,
                  o = e.L,
                  n = e.R;
                t.setStyle(this.chtml, "minWidth", this.em(o + r + n));
                var i = this.node.attributes.get("width");
                if (c.isPercent(i))
                  t.setStyle(this.chtml, "width", ""),
                    t.setAttribute(this.chtml, "width", "full");
                else if (!this.hasLabels) {
                  if ("auto" === i) return;
                  i = this.em(this.length2em(i) + 2 * this.fLine);
                }
                var a = t.firstChild(this.chtml);
                if (
                  (t.setStyle(a, "width", i),
                  t.setStyle(a, "minWidth", this.em(r)),
                  o || n)
                ) {
                  t.setStyle(this.chtml, "margin", "");
                  var s = this.node.attributes.get("data-width-includes-label")
                    ? "padding"
                    : "margin";
                  o === n
                    ? t.setStyle(a, s, "0 " + this.em(n))
                    : t.setStyle(a, s, "0 " + this.em(n) + " 0 " + this.em(o));
                }
                t.setAttribute(this.itable, "width", "full");
              }),
              (e.prototype.handleAlign = function () {
                var t = a(this.getAlignmentRow(), 2),
                  e = t[0],
                  r = t[1];
                if (null === r)
                  "axis" !== e &&
                    this.adaptor.setAttribute(this.chtml, "align", e);
                else {
                  var o = this.getVerticalPosition(r, e);
                  this.adaptor.setAttribute(this.chtml, "align", "top"),
                    this.adaptor.setStyle(
                      this.chtml,
                      "verticalAlign",
                      this.em(o)
                    );
                }
              }),
              (e.prototype.handleJustify = function () {
                var t = this.getAlignShift()[0];
                "center" !== t &&
                  this.adaptor.setAttribute(this.chtml, "justify", t);
              }),
              (e.prototype.handleLabels = function () {
                if (this.hasLabels) {
                  var t = this.labels,
                    e = this.node.attributes,
                    r = this.adaptor,
                    o = e.get("side");
                  r.setAttribute(this.chtml, "side", o),
                    r.setAttribute(t, "align", o),
                    r.setStyle(t, o, "0");
                  var n = a(this.addLabelPadding(o), 2),
                    i = n[0],
                    s = n[1];
                  if (s) {
                    var l = r.firstChild(this.chtml);
                    this.setIndent(l, i, s);
                  }
                  this.updateRowHeights(), this.addLabelSpacing();
                }
              }),
              (e.prototype.addLabelPadding = function (t) {
                var e = a(this.getPadAlignShift(t), 3),
                  r = e[1],
                  o = e[2],
                  n = {};
                if (
                  "right" === t &&
                  !this.node.attributes.get("data-width-includes-label")
                ) {
                  var i = this.node.attributes.get("width"),
                    s = this.getBBox(),
                    l = s.w,
                    h = s.L,
                    u = s.R;
                  n.style = {
                    width: c.isPercent(i)
                      ? "calc(" + i + " + " + this.em(h + u) + ")"
                      : this.em(h + l + u),
                  };
                }
                return (
                  this.adaptor.append(
                    this.chtml,
                    this.html("mjx-labels", n, [this.labels])
                  ),
                  [r, o]
                );
              }),
              (e.prototype.updateRowHeights = function () {
                for (
                  var t = this.getTableData(),
                    e = t.H,
                    r = t.D,
                    o = t.NH,
                    n = t.ND,
                    i = this.getRowHalfSpacing(),
                    a = 0;
                  a < this.numRows;
                  a++
                ) {
                  var s = this.childNodes[a];
                  this.setRowHeight(
                    s,
                    e[a] + r[a] + i[a] + i[a + 1] + this.rLines[a]
                  ),
                    e[a] !== o[a] || r[a] !== n[a]
                      ? this.setRowBaseline(s, e[a] + r[a], r[a])
                      : s.node.isKind("mlabeledtr") &&
                        this.setCellBaseline(
                          s.childNodes[0],
                          "",
                          e[a] + r[a],
                          r[a]
                        );
                }
              }),
              (e.prototype.addLabelSpacing = function () {
                for (
                  var t = this.adaptor,
                    e = this.node.attributes.get("equalrows"),
                    r = this.getTableData(),
                    o = r.H,
                    n = r.D,
                    i = e ? this.getEqualRowHeight() : 0,
                    a = this.getRowHalfSpacing(),
                    s = this.fLine,
                    l = t.firstChild(this.labels),
                    h = 0;
                  h < this.numRows;
                  h++
                ) {
                  this.childNodes[h].node.isKind("mlabeledtr")
                    ? (s &&
                        t.insert(
                          this.html("mjx-mtr", {
                            style: { height: this.em(s) },
                          }),
                          l
                        ),
                      t.setStyle(
                        l,
                        "height",
                        this.em((e ? i : o[h] + n[h]) + a[h] + a[h + 1])
                      ),
                      (l = t.next(l)),
                      (s = this.rLines[h]))
                    : (s +=
                        a[h] +
                        (e ? i : o[h] + n[h]) +
                        a[h + 1] +
                        this.rLines[h]);
                }
              }),
              (e.kind = h.MmlMtable.prototype.kind),
              (e.styles = {
                "mjx-mtable": {
                  "vertical-align": ".25em",
                  "text-align": "center",
                  position: "relative",
                  "box-sizing": "border-box",
                  "border-spacing": 0,
                  "border-collapse": "collapse",
                },
                'mjx-mstyle[size="s"] mjx-mtable': {
                  "vertical-align": ".354em",
                },
                "mjx-labels": { position: "absolute", left: 0, top: 0 },
                "mjx-table": {
                  display: "inline-block",
                  "vertical-align": "-.5ex",
                  "box-sizing": "border-box",
                },
                "mjx-table > mjx-itable": {
                  "vertical-align": "middle",
                  "text-align": "left",
                  "box-sizing": "border-box",
                },
                "mjx-labels > mjx-itable": { position: "absolute", top: 0 },
                'mjx-mtable[justify="left"]': { "text-align": "left" },
                'mjx-mtable[justify="right"]': { "text-align": "right" },
                'mjx-mtable[justify="left"][side="left"]': {
                  "padding-right": "0 ! important",
                },
                'mjx-mtable[justify="left"][side="right"]': {
                  "padding-left": "0 ! important",
                },
                'mjx-mtable[justify="right"][side="left"]': {
                  "padding-right": "0 ! important",
                },
                'mjx-mtable[justify="right"][side="right"]': {
                  "padding-left": "0 ! important",
                },
                "mjx-mtable[align]": { "vertical-align": "baseline" },
                'mjx-mtable[align="top"] > mjx-table': {
                  "vertical-align": "top",
                },
                'mjx-mtable[align="bottom"] > mjx-table': {
                  "vertical-align": "bottom",
                },
                'mjx-mtable[side="right"] mjx-labels': { "min-width": "100%" },
              }),
              e
            );
          })(l.CommonMtableMixin(s.CHTMLWrapper));
        e.CHTMLmtable = u;
      },
      8709: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmtd = void 0);
        var i = r(6617),
          a = r(7805),
          s = r(2321),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (e) {
                t.prototype.toCHTML.call(this, e);
                var r = this.node.attributes.get("rowalign"),
                  o = this.node.attributes.get("columnalign");
                r !== this.parent.node.attributes.get("rowalign") &&
                  this.adaptor.setAttribute(this.chtml, "rowalign", r),
                  "center" === o ||
                    ("mlabeledtr" === this.parent.kind &&
                      this === this.parent.childNodes[0] &&
                      o === this.parent.parent.node.attributes.get("side")) ||
                    this.adaptor.setStyle(this.chtml, "textAlign", o),
                  this.parent.parent.node.getProperty("useHeight") &&
                    this.adaptor.append(this.chtml, this.html("mjx-tstrut"));
              }),
              (e.kind = s.MmlMtd.prototype.kind),
              (e.styles = {
                "mjx-mtd": {
                  display: "table-cell",
                  "text-align": "center",
                  padding: ".215em .4em",
                },
                "mjx-mtd:first-child": { "padding-left": 0 },
                "mjx-mtd:last-child": { "padding-right": 0 },
                "mjx-mtable > * > mjx-itable > *:first-child > mjx-mtd": {
                  "padding-top": 0,
                },
                "mjx-mtable > * > mjx-itable > *:last-child > mjx-mtd": {
                  "padding-bottom": 0,
                },
                "mjx-tstrut": {
                  display: "inline-block",
                  height: "1em",
                  "vertical-align": "-.25em",
                },
                'mjx-labels[align="left"] > mjx-mtr > mjx-mtd': {
                  "text-align": "left",
                },
                'mjx-labels[align="right"] > mjx-mtr > mjx-mtd': {
                  "text-align": "right",
                },
                "mjx-mtd[extra]": { padding: 0 },
                'mjx-mtd[rowalign="top"]': { "vertical-align": "top" },
                'mjx-mtd[rowalign="center"]': { "vertical-align": "middle" },
                'mjx-mtd[rowalign="bottom"]': { "vertical-align": "bottom" },
                'mjx-mtd[rowalign="baseline"]': {
                  "vertical-align": "baseline",
                },
                'mjx-mtd[rowalign="axis"]': { "vertical-align": ".25em" },
              }),
              e
            );
          })(a.CommonMtdMixin(i.CHTMLWrapper));
        e.CHTMLmtd = l;
      },
      6359: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmtext = void 0);
        var i = r(6617),
          a = r(8325),
          s = r(6277),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return n(e, t), (e.kind = s.MmlMtext.prototype.kind), e;
          })(a.CommonMtextMixin(i.CHTMLWrapper));
        e.CHTMLmtext = l;
      },
      7500: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmlabeledtr = e.CHTMLmtr = void 0);
        var i = r(6617),
          a = r(4818),
          s = r(4818),
          l = r(4393),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (e) {
                t.prototype.toCHTML.call(this, e);
                var r = this.node.attributes.get("rowalign");
                "baseline" !== r &&
                  this.adaptor.setAttribute(this.chtml, "rowalign", r);
              }),
              (e.kind = l.MmlMtr.prototype.kind),
              (e.styles = {
                "mjx-mtr": { display: "table-row" },
                'mjx-mtr[rowalign="top"] > mjx-mtd': {
                  "vertical-align": "top",
                },
                'mjx-mtr[rowalign="center"] > mjx-mtd': {
                  "vertical-align": "middle",
                },
                'mjx-mtr[rowalign="bottom"] > mjx-mtd': {
                  "vertical-align": "bottom",
                },
                'mjx-mtr[rowalign="baseline"] > mjx-mtd': {
                  "vertical-align": "baseline",
                },
                'mjx-mtr[rowalign="axis"] > mjx-mtd': {
                  "vertical-align": ".25em",
                },
              }),
              e
            );
          })(a.CommonMtrMixin(i.CHTMLWrapper));
        e.CHTMLmtr = h;
        var c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.toCHTML = function (e) {
              t.prototype.toCHTML.call(this, e);
              var r = this.adaptor.firstChild(this.chtml);
              if (r) {
                this.adaptor.remove(r);
                var o = this.node.attributes.get("rowalign"),
                  n = "baseline" !== o && "axis" !== o ? { rowalign: o } : {},
                  i = this.html("mjx-mtr", n, [r]);
                this.adaptor.append(this.parent.labels, i);
              }
            }),
            (e.prototype.markUsed = function () {
              t.prototype.markUsed.call(this),
                this.jax.wrapperUsage.add(h.kind);
            }),
            (e.kind = l.MmlMlabeledtr.prototype.kind),
            (e.styles = {
              "mjx-mlabeledtr": { display: "table-row" },
              'mjx-mlabeledtr[rowalign="top"] > mjx-mtd': {
                "vertical-align": "top",
              },
              'mjx-mlabeledtr[rowalign="center"] > mjx-mtd': {
                "vertical-align": "middle",
              },
              'mjx-mlabeledtr[rowalign="bottom"] > mjx-mtd': {
                "vertical-align": "bottom",
              },
              'mjx-mlabeledtr[rowalign="baseline"] > mjx-mtd': {
                "vertical-align": "baseline",
              },
              'mjx-mlabeledtr[rowalign="axis"] > mjx-mtd': {
                "vertical-align": ".25em",
              },
            }),
            e
          );
        })(s.CommonMlabeledtrMixin(h));
        e.CHTMLmlabeledtr = c;
      },
      6577: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLmunderover = e.CHTMLmover = e.CHTMLmunder = void 0);
        var i = r(513),
          a = r(9690),
          s = r(9690),
          l = r(9690),
          h = r(3102),
          c = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (e) {
                if (this.hasMovableLimits())
                  return (
                    t.prototype.toCHTML.call(this, e),
                    void this.adaptor.setAttribute(
                      this.chtml,
                      "limits",
                      "false"
                    )
                  );
                this.chtml = this.standardCHTMLnode(e);
                var r = this.adaptor.append(
                    this.adaptor.append(this.chtml, this.html("mjx-row")),
                    this.html("mjx-base")
                  ),
                  o = this.adaptor.append(
                    this.adaptor.append(this.chtml, this.html("mjx-row")),
                    this.html("mjx-under")
                  );
                this.baseChild.toCHTML(r), this.scriptChild.toCHTML(o);
                var n = this.baseChild.getBBox(),
                  i = this.scriptChild.getBBox(),
                  a = this.getUnderKV(n, i)[0],
                  s = this.isLineBelow ? 0 : this.getDelta(!0);
                this.adaptor.setStyle(o, "paddingTop", this.em(a)),
                  this.setDeltaW([r, o], this.getDeltaW([n, i], [0, -s])),
                  this.adjustUnderDepth(o, i);
              }),
              (e.kind = h.MmlMunder.prototype.kind),
              (e.styles = {
                "mjx-over": { "text-align": "left" },
                'mjx-munder:not([limits="false"])': { display: "inline-table" },
                "mjx-munder > mjx-row": { "text-align": "left" },
                "mjx-under": { "padding-bottom": ".1em" },
              }),
              e
            );
          })(a.CommonMunderMixin(i.CHTMLmsub));
        e.CHTMLmunder = c;
        var u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.toCHTML = function (e) {
              if (this.hasMovableLimits())
                return (
                  t.prototype.toCHTML.call(this, e),
                  void this.adaptor.setAttribute(this.chtml, "limits", "false")
                );
              this.chtml = this.standardCHTMLnode(e);
              var r = this.adaptor.append(this.chtml, this.html("mjx-over")),
                o = this.adaptor.append(this.chtml, this.html("mjx-base"));
              this.scriptChild.toCHTML(r), this.baseChild.toCHTML(o);
              var n = this.scriptChild.getBBox(),
                i = this.baseChild.getBBox(),
                a = this.getOverKU(i, n)[0],
                s = this.isLineAbove ? 0 : this.getDelta();
              this.adaptor.setStyle(r, "paddingBottom", this.em(a)),
                this.setDeltaW([o, r], this.getDeltaW([i, n], [0, s])),
                this.adjustOverDepth(r, n);
            }),
            (e.kind = h.MmlMover.prototype.kind),
            (e.styles = {
              'mjx-mover:not([limits="false"])': { "padding-top": ".1em" },
              'mjx-mover:not([limits="false"]) > *': {
                display: "block",
                "text-align": "left",
              },
            }),
            e
          );
        })(s.CommonMoverMixin(i.CHTMLmsup));
        e.CHTMLmover = u;
        var p = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.toCHTML = function (e) {
              if (this.hasMovableLimits())
                return (
                  t.prototype.toCHTML.call(this, e),
                  void this.adaptor.setAttribute(this.chtml, "limits", "false")
                );
              this.chtml = this.standardCHTMLnode(e);
              var r = this.adaptor.append(this.chtml, this.html("mjx-over")),
                o = this.adaptor.append(
                  this.adaptor.append(this.chtml, this.html("mjx-box")),
                  this.html("mjx-munder")
                ),
                n = this.adaptor.append(
                  this.adaptor.append(o, this.html("mjx-row")),
                  this.html("mjx-base")
                ),
                i = this.adaptor.append(
                  this.adaptor.append(o, this.html("mjx-row")),
                  this.html("mjx-under")
                );
              this.overChild.toCHTML(r),
                this.baseChild.toCHTML(n),
                this.underChild.toCHTML(i);
              var a = this.overChild.getBBox(),
                s = this.baseChild.getBBox(),
                l = this.underChild.getBBox(),
                h = this.getOverKU(s, a)[0],
                c = this.getUnderKV(s, l)[0],
                u = this.getDelta();
              this.adaptor.setStyle(r, "paddingBottom", this.em(h)),
                this.adaptor.setStyle(i, "paddingTop", this.em(c)),
                this.setDeltaW(
                  [n, i, r],
                  this.getDeltaW(
                    [s, l, a],
                    [0, this.isLineBelow ? 0 : -u, this.isLineAbove ? 0 : u]
                  )
                ),
                this.adjustOverDepth(r, a),
                this.adjustUnderDepth(i, l);
            }),
            (e.prototype.markUsed = function () {
              t.prototype.markUsed.call(this),
                this.jax.wrapperUsage.add(i.CHTMLmsubsup.kind);
            }),
            (e.kind = h.MmlMunderover.prototype.kind),
            (e.styles = {
              'mjx-munderover:not([limits="false"])': { "padding-top": ".1em" },
              'mjx-munderover:not([limits="false"]) > *': { display: "block" },
            }),
            e
          );
        })(l.CommonMunderoverMixin(i.CHTMLmsubsup));
        e.CHTMLmunderover = p;
      },
      7322: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLscriptbase = void 0);
        var s = r(6617),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                this.chtml = this.standardCHTMLnode(t);
                var e = i(this.getOffset(), 2),
                  r = e[0],
                  o = e[1],
                  n = r - (this.baseRemoveIc ? this.baseIc : 0),
                  a = { "vertical-align": this.em(o) };
                n && (a["margin-left"] = this.em(n)),
                  this.baseChild.toCHTML(this.chtml),
                  this.scriptChild.toCHTML(
                    this.adaptor.append(
                      this.chtml,
                      this.html("mjx-script", { style: a })
                    )
                  );
              }),
              (e.prototype.setDeltaW = function (t, e) {
                for (var r = 0; r < e.length; r++)
                  e[r] &&
                    this.adaptor.setStyle(t[r], "paddingLeft", this.em(e[r]));
              }),
              (e.prototype.adjustOverDepth = function (t, e) {
                e.d >= 0 ||
                  this.adaptor.setStyle(
                    t,
                    "marginBottom",
                    this.em(e.d * e.rscale)
                  );
              }),
              (e.prototype.adjustUnderDepth = function (t, e) {
                var r, o;
                if (!(e.d >= 0)) {
                  var n = this.adaptor,
                    i = this.em(e.d),
                    s = this.html("mjx-box", {
                      style: { "margin-bottom": i, "vertical-align": i },
                    });
                  try {
                    for (
                      var l = a(n.childNodes(n.firstChild(t))), h = l.next();
                      !h.done;
                      h = l.next()
                    ) {
                      var c = h.value;
                      n.append(s, c);
                    }
                  } catch (t) {
                    r = { error: t };
                  } finally {
                    try {
                      h && !h.done && (o = l.return) && o.call(l);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                  n.append(n.firstChild(t), s);
                }
              }),
              (e.kind = "scriptbase"),
              e
            );
          })(r(7091).CommonScriptbaseMixin(s.CHTMLWrapper));
        e.CHTMLscriptbase = l;
      },
      7795: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CHTMLxml =
            e.CHTMLannotationXML =
            e.CHTMLannotation =
            e.CHTMLsemantics =
              void 0);
        var i = r(6617),
          a = r(3191),
          s = r(9167),
          l = r(8921),
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.toCHTML = function (t) {
                var e = this.standardCHTMLnode(t);
                this.childNodes.length && this.childNodes[0].toCHTML(e);
              }),
              (e.kind = s.MmlSemantics.prototype.kind),
              e
            );
          })(a.CommonSemanticsMixin(i.CHTMLWrapper));
        e.CHTMLsemantics = h;
        var c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.toCHTML = function (e) {
              t.prototype.toCHTML.call(this, e);
            }),
            (e.prototype.computeBBox = function () {
              return this.bbox;
            }),
            (e.kind = s.MmlAnnotation.prototype.kind),
            e
          );
        })(i.CHTMLWrapper);
        e.CHTMLannotation = c;
        var u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.kind = s.MmlAnnotationXML.prototype.kind),
            (e.styles = {
              "mjx-annotation-xml": {
                "font-family": "initial",
                "line-height": "normal",
              },
            }),
            e
          );
        })(i.CHTMLWrapper);
        e.CHTMLannotationXML = u;
        var p = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.toCHTML = function (t) {
              this.chtml = this.adaptor.append(
                t,
                this.adaptor.clone(this.node.getXML())
              );
            }),
            (e.prototype.computeBBox = function (t, e) {
              void 0 === e && (e = !1);
              var r = this.jax.measureXMLnode(this.node.getXML()),
                o = r.w,
                n = r.h,
                i = r.d;
              (t.w = o), (t.h = n), (t.d = i);
            }),
            (e.prototype.getStyles = function () {}),
            (e.prototype.getScale = function () {}),
            (e.prototype.getVariant = function () {}),
            (e.kind = l.XMLNode.prototype.kind),
            (e.autoStyle = !1),
            e
          );
        })(i.CHTMLWrapper);
        e.CHTMLxml = p;
      },
      9250: function (t, e, r) {
        var o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var n in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }).apply(this, arguments);
            },
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FontData = e.NOSTRETCH = e.H = e.V = void 0);
        var s = r(9077);
        (e.V = 1), (e.H = 2), (e.NOSTRETCH = { dir: 0 });
        var l = (function () {
          function t(t) {
            var e, r, l, h;
            void 0 === t && (t = null),
              (this.variant = {}),
              (this.delimiters = {}),
              (this.cssFontMap = {}),
              (this.remapChars = {}),
              (this.skewIcFactor = 0.75);
            var c = this.constructor;
            (this.options = s.userOptions(s.defaultOptions({}, c.OPTIONS), t)),
              (this.params = o({}, c.defaultParams)),
              (this.sizeVariants = i([], n(c.defaultSizeVariants))),
              (this.stretchVariants = i([], n(c.defaultStretchVariants))),
              (this.cssFontMap = o({}, c.defaultCssFonts));
            try {
              for (
                var u = a(Object.keys(this.cssFontMap)), p = u.next();
                !p.done;
                p = u.next()
              ) {
                var d = p.value;
                "unknown" === this.cssFontMap[d][0] &&
                  (this.cssFontMap[d][0] = this.options.unknownFamily);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                p && !p.done && (r = u.return) && r.call(u);
              } finally {
                if (e) throw e.error;
              }
            }
            (this.cssFamilyPrefix = c.defaultCssFamilyPrefix),
              this.createVariants(c.defaultVariants),
              this.defineDelimiters(c.defaultDelimiters);
            try {
              for (
                var f = a(Object.keys(c.defaultChars)), m = f.next();
                !m.done;
                m = f.next()
              ) {
                var y = m.value;
                this.defineChars(y, c.defaultChars[y]);
              }
            } catch (t) {
              l = { error: t };
            } finally {
              try {
                m && !m.done && (h = f.return) && h.call(f);
              } finally {
                if (l) throw l.error;
              }
            }
            this.defineRemap("accent", c.defaultAccentMap),
              this.defineRemap("mo", c.defaultMoMap),
              this.defineRemap("mn", c.defaultMnMap);
          }
          return (
            (t.charOptions = function (t, e) {
              var r = t[e];
              return 3 === r.length && (r[3] = {}), r[3];
            }),
            Object.defineProperty(t.prototype, "styles", {
              get: function () {
                return this._styles;
              },
              set: function (t) {
                this._styles = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.createVariant = function (t, e, r) {
              void 0 === e && (e = null), void 0 === r && (r = null);
              var o = {
                linked: [],
                chars: e ? Object.create(this.variant[e].chars) : {},
              };
              r &&
                this.variant[r] &&
                (Object.assign(o.chars, this.variant[r].chars),
                this.variant[r].linked.push(o.chars),
                (o.chars = Object.create(o.chars))),
                this.remapSmpChars(o.chars, t),
                (this.variant[t] = o);
            }),
            (t.prototype.remapSmpChars = function (t, e) {
              var r,
                o,
                i,
                s,
                l = this.constructor;
              if (l.VariantSmp[e]) {
                var h = l.SmpRemap,
                  c = [null, null, l.SmpRemapGreekU, l.SmpRemapGreekL];
                try {
                  for (
                    var u = a(l.SmpRanges), p = u.next();
                    !p.done;
                    p = u.next()
                  ) {
                    var d = n(p.value, 3),
                      f = d[0],
                      m = d[1],
                      y = d[2],
                      v = l.VariantSmp[e][f];
                    if (v) {
                      for (var b = m; b <= y; b++)
                        if (930 !== b) {
                          var x = v + b - m;
                          t[b] = this.smpChar(h[x] || x);
                        }
                      if (c[f])
                        try {
                          for (
                            var g =
                                ((i = void 0),
                                a(
                                  Object.keys(c[f]).map(function (t) {
                                    return parseInt(t);
                                  })
                                )),
                              M = g.next();
                            !M.done;
                            M = g.next()
                          ) {
                            t[(b = M.value)] = this.smpChar(v + c[f][b]);
                          }
                        } catch (t) {
                          i = { error: t };
                        } finally {
                          try {
                            M && !M.done && (s = g.return) && s.call(g);
                          } finally {
                            if (i) throw i.error;
                          }
                        }
                    }
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    p && !p.done && (o = u.return) && o.call(u);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }
              "bold" === e &&
                ((t[988] = this.smpChar(120778)),
                (t[989] = this.smpChar(120779)));
            }),
            (t.prototype.smpChar = function (t) {
              return [, , , { smp: t }];
            }),
            (t.prototype.createVariants = function (t) {
              var e, r;
              try {
                for (var o = a(t), n = o.next(); !n.done; n = o.next()) {
                  var i = n.value;
                  this.createVariant(i[0], i[1], i[2]);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  n && !n.done && (r = o.return) && r.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (t.prototype.defineChars = function (t, e) {
              var r,
                o,
                n = this.variant[t];
              Object.assign(n.chars, e);
              try {
                for (var i = a(n.linked), s = i.next(); !s.done; s = i.next()) {
                  var l = s.value;
                  Object.assign(l, e);
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  s && !s.done && (o = i.return) && o.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
            }),
            (t.prototype.defineDelimiters = function (t) {
              Object.assign(this.delimiters, t);
            }),
            (t.prototype.defineRemap = function (t, e) {
              this.remapChars.hasOwnProperty(t) || (this.remapChars[t] = {}),
                Object.assign(this.remapChars[t], e);
            }),
            (t.prototype.getDelimiter = function (t) {
              return this.delimiters[t];
            }),
            (t.prototype.getSizeVariant = function (t, e) {
              return (
                this.delimiters[t].variants &&
                  (e = this.delimiters[t].variants[e]),
                this.sizeVariants[e]
              );
            }),
            (t.prototype.getStretchVariant = function (t, e) {
              return this.stretchVariants[
                this.delimiters[t].stretchv ? this.delimiters[t].stretchv[e] : 0
              ];
            }),
            (t.prototype.getChar = function (t, e) {
              return this.variant[t].chars[e];
            }),
            (t.prototype.getVariant = function (t) {
              return this.variant[t];
            }),
            (t.prototype.getCssFont = function (t) {
              return this.cssFontMap[t] || ["serif", !1, !1];
            }),
            (t.prototype.getFamily = function (t) {
              return this.cssFamilyPrefix ? this.cssFamilyPrefix + ", " + t : t;
            }),
            (t.prototype.getRemappedChar = function (t, e) {
              return (this.remapChars[t] || {})[e];
            }),
            (t.OPTIONS = { unknownFamily: "serif" }),
            (t.defaultVariants = [
              ["normal"],
              ["bold", "normal"],
              ["italic", "normal"],
              ["bold-italic", "italic", "bold"],
              ["double-struck", "bold"],
              ["fraktur", "normal"],
              ["bold-fraktur", "bold", "fraktur"],
              ["script", "italic"],
              ["bold-script", "bold-italic", "script"],
              ["sans-serif", "normal"],
              ["bold-sans-serif", "bold", "sans-serif"],
              ["sans-serif-italic", "italic", "sans-serif"],
              ["sans-serif-bold-italic", "bold-italic", "bold-sans-serif"],
              ["monospace", "normal"],
            ]),
            (t.defaultCssFonts = {
              normal: ["unknown", !1, !1],
              bold: ["unknown", !1, !0],
              italic: ["unknown", !0, !1],
              "bold-italic": ["unknown", !0, !0],
              "double-struck": ["unknown", !1, !0],
              fraktur: ["unknown", !1, !1],
              "bold-fraktur": ["unknown", !1, !0],
              script: ["cursive", !1, !1],
              "bold-script": ["cursive", !1, !0],
              "sans-serif": ["sans-serif", !1, !1],
              "bold-sans-serif": ["sans-serif", !1, !0],
              "sans-serif-italic": ["sans-serif", !0, !1],
              "sans-serif-bold-italic": ["sans-serif", !0, !0],
              monospace: ["monospace", !1, !1],
            }),
            (t.defaultCssFamilyPrefix = ""),
            (t.VariantSmp = {
              bold: [119808, 119834, 120488, 120514, 120782],
              italic: [119860, 119886, 120546, 120572],
              "bold-italic": [119912, 119938, 120604, 120630],
              script: [119964, 119990],
              "bold-script": [120016, 120042],
              fraktur: [120068, 120094],
              "double-struck": [120120, 120146, , , 120792],
              "bold-fraktur": [120172, 120198],
              "sans-serif": [120224, 120250, , , 120802],
              "bold-sans-serif": [120276, 120302, 120662, 120688, 120812],
              "sans-serif-italic": [120328, 120354],
              "sans-serif-bold-italic": [120380, 120406, 120720, 120746],
              monospace: [120432, 120458, , , 120822],
            }),
            (t.SmpRanges = [
              [0, 65, 90],
              [1, 97, 122],
              [2, 913, 937],
              [3, 945, 969],
              [4, 48, 57],
            ]),
            (t.SmpRemap = {
              119893: 8462,
              119965: 8492,
              119968: 8496,
              119969: 8497,
              119971: 8459,
              119972: 8464,
              119975: 8466,
              119976: 8499,
              119981: 8475,
              119994: 8495,
              119996: 8458,
              120004: 8500,
              120070: 8493,
              120075: 8460,
              120076: 8465,
              120085: 8476,
              120093: 8488,
              120122: 8450,
              120127: 8461,
              120133: 8469,
              120135: 8473,
              120136: 8474,
              120137: 8477,
              120145: 8484,
            }),
            (t.SmpRemapGreekU = { 8711: 25, 1012: 17 }),
            (t.SmpRemapGreekL = {
              977: 27,
              981: 29,
              982: 31,
              1008: 28,
              1009: 30,
              1013: 26,
              8706: 25,
            }),
            (t.defaultAccentMap = {
              768: "\u02cb",
              769: "\u02ca",
              770: "\u02c6",
              771: "\u02dc",
              772: "\u02c9",
              774: "\u02d8",
              775: "\u02d9",
              776: "\xa8",
              778: "\u02da",
              780: "\u02c7",
              8594: "\u20d7",
              8242: "'",
              8243: "''",
              8244: "'''",
              8245: "`",
              8246: "``",
              8247: "```",
              8279: "''''",
              8400: "\u21bc",
              8401: "\u21c0",
              8406: "\u2190",
              8417: "\u2194",
              8432: "*",
              8411: "...",
              8412: "....",
              8428: "\u21c1",
              8429: "\u21bd",
              8430: "\u2190",
              8431: "\u2192",
            }),
            (t.defaultMoMap = { 45: "\u2212" }),
            (t.defaultMnMap = { 45: "\u2212" }),
            (t.defaultParams = {
              x_height: 0.442,
              quad: 1,
              num1: 0.676,
              num2: 0.394,
              num3: 0.444,
              denom1: 0.686,
              denom2: 0.345,
              sup1: 0.413,
              sup2: 0.363,
              sup3: 0.289,
              sub1: 0.15,
              sub2: 0.247,
              sup_drop: 0.386,
              sub_drop: 0.05,
              delim1: 2.39,
              delim2: 1,
              axis_height: 0.25,
              rule_thickness: 0.06,
              big_op_spacing1: 0.111,
              big_op_spacing2: 0.167,
              big_op_spacing3: 0.2,
              big_op_spacing4: 0.6,
              big_op_spacing5: 0.1,
              surd_height: 0.075,
              scriptspace: 0.05,
              nulldelimiterspace: 0.12,
              delimiterfactor: 901,
              delimitershortfall: 0.3,
              min_rule_thickness: 1.25,
              separation_factor: 1.75,
              extra_ic: 0.033,
            }),
            (t.defaultDelimiters = {}),
            (t.defaultChars = {}),
            (t.defaultSizeVariants = []),
            (t.defaultStretchVariants = []),
            t
          );
        })();
        e.FontData = l;
      },
      5373: function (t, e) {
        var r =
          (this && this.__read) ||
          function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o,
              n,
              i = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                a.push(o.value);
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            return a;
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonArrow =
            e.CommonDiagonalArrow =
            e.CommonDiagonalStrike =
            e.CommonBorder2 =
            e.CommonBorder =
            e.arrowBBox =
            e.diagonalArrowDef =
            e.arrowDef =
            e.arrowBBoxW =
            e.arrowBBoxHD =
            e.arrowHead =
            e.fullBorder =
            e.fullPadding =
            e.fullBBox =
            e.sideNames =
            e.sideIndex =
            e.SOLID =
            e.PADDING =
            e.THICKNESS =
            e.ARROWY =
            e.ARROWDX =
            e.ARROWX =
              void 0),
          (e.ARROWX = 4),
          (e.ARROWDX = 1),
          (e.ARROWY = 2),
          (e.THICKNESS = 0.067),
          (e.PADDING = 0.2),
          (e.SOLID = e.THICKNESS + "em solid"),
          (e.sideIndex = { top: 0, right: 1, bottom: 2, left: 3 }),
          (e.sideNames = Object.keys(e.sideIndex)),
          (e.fullBBox = function (t) {
            return new Array(4).fill(t.thickness + t.padding);
          }),
          (e.fullPadding = function (t) {
            return new Array(4).fill(t.padding);
          }),
          (e.fullBorder = function (t) {
            return new Array(4).fill(t.thickness);
          });
        e.arrowHead = function (t) {
          return Math.max(
            t.padding,
            t.thickness * (t.arrowhead.x + t.arrowhead.dx + 1)
          );
        };
        e.arrowBBoxHD = function (t, e) {
          if (t.childNodes[0]) {
            var r = t.childNodes[0].getBBox(),
              o = r.h,
              n = r.d;
            e[0] = e[2] = Math.max(
              0,
              t.thickness * t.arrowhead.y - (o + n) / 2
            );
          }
          return e;
        };
        (e.arrowBBoxW = function (t, e) {
          if (t.childNodes[0]) {
            var r = t.childNodes[0].getBBox().w;
            e[1] = e[3] = Math.max(0, t.thickness * t.arrowhead.y - r / 2);
          }
          return e;
        }),
          (e.arrowDef = {
            up: [-Math.PI / 2, !1, !0, "verticalstrike"],
            down: [Math.PI / 2, !1, !0, "verticakstrike"],
            right: [0, !1, !1, "horizontalstrike"],
            left: [Math.PI, !1, !1, "horizontalstrike"],
            updown: [Math.PI / 2, !0, !0, "verticalstrike uparrow downarrow"],
            leftright: [0, !0, !1, "horizontalstrike leftarrow rightarrow"],
          }),
          (e.diagonalArrowDef = {
            updiagonal: [-1, 0, !1, "updiagonalstrike northeastarrow"],
            northeast: [-1, 0, !1, "updiagonalstrike updiagonalarrow"],
            southeast: [1, 0, !1, "downdiagonalstrike"],
            northwest: [1, Math.PI, !1, "downdiagonalstrike"],
            southwest: [-1, Math.PI, !1, "updiagonalstrike"],
            northeastsouthwest: [
              -1,
              0,
              !0,
              "updiagonalstrike northeastarrow updiagonalarrow southwestarrow",
            ],
            northwestsoutheast: [
              1,
              0,
              !0,
              "downdiagonalstrike northwestarrow southeastarrow",
            ],
          }),
          (e.arrowBBox = {
            up: function (t) {
              return e.arrowBBoxW(t, [e.arrowHead(t), 0, t.padding, 0]);
            },
            down: function (t) {
              return e.arrowBBoxW(t, [t.padding, 0, e.arrowHead(t), 0]);
            },
            right: function (t) {
              return e.arrowBBoxHD(t, [0, e.arrowHead(t), 0, t.padding]);
            },
            left: function (t) {
              return e.arrowBBoxHD(t, [0, t.padding, 0, e.arrowHead(t)]);
            },
            updown: function (t) {
              return e.arrowBBoxW(t, [e.arrowHead(t), 0, e.arrowHead(t), 0]);
            },
            leftright: function (t) {
              return e.arrowBBoxHD(t, [0, e.arrowHead(t), 0, e.arrowHead(t)]);
            },
          });
        e.CommonBorder = function (t) {
          return function (r) {
            var o = e.sideIndex[r];
            return [
              r,
              {
                renderer: t,
                bbox: function (t) {
                  var e = [0, 0, 0, 0];
                  return (e[o] = t.thickness + t.padding), e;
                },
                border: function (t) {
                  var e = [0, 0, 0, 0];
                  return (e[o] = t.thickness), e;
                },
              },
            ];
          };
        };
        e.CommonBorder2 = function (t) {
          return function (r, o, n) {
            var i = e.sideIndex[o],
              a = e.sideIndex[n];
            return [
              r,
              {
                renderer: t,
                bbox: function (t) {
                  var e = t.thickness + t.padding,
                    r = [0, 0, 0, 0];
                  return (r[i] = r[a] = e), r;
                },
                border: function (t) {
                  var e = [0, 0, 0, 0];
                  return (e[i] = e[a] = t.thickness), e;
                },
                remove: o + " " + n,
              },
            ];
          };
        };
        e.CommonDiagonalStrike = function (t) {
          return function (r) {
            var o = "mjx-" + r.charAt(0) + "strike";
            return [r + "diagonalstrike", { renderer: t(o), bbox: e.fullBBox }];
          };
        };
        e.CommonDiagonalArrow = function (t) {
          return function (o) {
            var n = r(e.diagonalArrowDef[o], 4),
              i = n[0],
              a = n[1],
              s = n[2];
            return [
              o + "arrow",
              {
                renderer: function (e, o) {
                  var n = r(e.arrowAW(), 2),
                    l = n[0],
                    h = n[1],
                    c = e.arrow(h, i * (l - a), s);
                  t(e, c);
                },
                bbox: function (t) {
                  var e = t.arrowData(),
                    o = e.a,
                    n = e.x,
                    i = e.y,
                    a = r([t.arrowhead.x, t.arrowhead.y, t.arrowhead.dx], 3),
                    s = a[0],
                    l = a[1],
                    h = a[2],
                    c = r(t.getArgMod(s + h, l), 2),
                    u = c[0],
                    p = c[1],
                    d = i + (u > o ? t.thickness * p * Math.sin(u - o) : 0),
                    f =
                      n +
                      (u > Math.PI / 2 - o
                        ? t.thickness * p * Math.sin(u + o - Math.PI / 2)
                        : 0);
                  return [d, f, d, f];
                },
                remove: n[3],
              },
            ];
          };
        };
        e.CommonArrow = function (t) {
          return function (o) {
            var n = r(e.arrowDef[o], 4),
              i = n[0],
              a = n[1],
              s = n[2],
              l = n[3];
            return [
              o + "arrow",
              {
                renderer: function (e, o) {
                  var n = e.getBBox(),
                    l = n.w,
                    h = n.h,
                    c = n.d,
                    u = r(s ? [h + c, "X"] : [l, "Y"], 2),
                    p = u[0],
                    d = u[1],
                    f = e.getOffset(d),
                    m = e.arrow(p, i, a, d, f);
                  t(e, m);
                },
                bbox: e.arrowBBox[o],
                remove: l,
              },
            ];
          };
        };
      },
      716: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var n in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }).apply(this, arguments);
            },
          a =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          s =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonOutputJax = void 0);
        var l = r(3985),
          h = r(4769),
          c = r(9077),
          u = r(6914),
          p = r(5878),
          d = r(5888),
          f = (function (t) {
            function e(e, r, o) {
              void 0 === e && (e = null),
                void 0 === r && (r = null),
                void 0 === o && (o = null);
              var n = this,
                i = a(c.separateOptions(e, o.OPTIONS), 2),
                s = i[0],
                l = i[1];
              return (
                ((n = t.call(this, s) || this).factory =
                  n.options.wrapperFactory || new r()),
                (n.factory.jax = n),
                (n.cssStyles = n.options.cssStyles || new d.CssStyles()),
                (n.font = n.options.font || new o(l)),
                (n.unknownCache = new Map()),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.typeset = function (t, e) {
                this.setDocument(e);
                var r = this.createNode();
                return this.toDOM(t, r, e), r;
              }),
              (e.prototype.createNode = function () {
                var t = this.constructor.NAME;
                return this.html("mjx-container", { class: "MathJax", jax: t });
              }),
              (e.prototype.setScale = function (t) {
                var e = this.math.metrics.scale * this.options.scale;
                1 !== e && this.adaptor.setStyle(t, "fontSize", u.percent(e));
              }),
              (e.prototype.toDOM = function (t, e, r) {
                void 0 === r && (r = null),
                  this.setDocument(r),
                  (this.math = t),
                  (this.pxPerEm = t.metrics.ex / this.font.params.x_height),
                  t.root.setTeXclass(null),
                  this.setScale(e),
                  (this.nodeMap = new Map()),
                  (this.container = e),
                  this.processMath(t.root, e),
                  (this.nodeMap = null),
                  this.executeFilters(this.postFilters, t, r, e);
              }),
              (e.prototype.getBBox = function (t, e) {
                this.setDocument(e),
                  (this.math = t),
                  t.root.setTeXclass(null),
                  (this.nodeMap = new Map());
                var r = this.factory.wrap(t.root).getBBox();
                return (this.nodeMap = null), r;
              }),
              (e.prototype.getMetrics = function (t) {
                var e, r;
                this.setDocument(t);
                var o = this.adaptor,
                  n = this.getMetricMaps(t);
                try {
                  for (var i = s(t.math), a = i.next(); !a.done; a = i.next()) {
                    var l = a.value,
                      c = o.parent(l.start.node);
                    if (l.state() < h.STATE.METRICS && c) {
                      var u = n[l.display ? 1 : 0].get(c),
                        p = u.em,
                        d = u.ex,
                        f = u.containerWidth,
                        m = u.lineWidth,
                        y = u.scale,
                        v = u.family;
                      l.setMetrics(p, d, f, m, y),
                        this.options.mtextInheritFont &&
                          (l.outputData.mtextFamily = v),
                        this.options.merrorInheritFont &&
                          (l.outputData.merrorFamily = v),
                        l.state(h.STATE.METRICS);
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    a && !a.done && (r = i.return) && r.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (e.prototype.getMetricsFor = function (t, e) {
                var r =
                    this.options.mtextInheritFont ||
                    this.options.merrorInheritFont,
                  o = this.getTestElement(t, e),
                  n = this.measureMetrics(o, r);
                return this.adaptor.remove(o), n;
              }),
              (e.prototype.getMetricMaps = function (t) {
                var e,
                  r,
                  o,
                  n,
                  i,
                  a,
                  l,
                  c,
                  u,
                  p,
                  d = this.adaptor,
                  f = [new Map(), new Map()];
                try {
                  for (var m = s(t.math), y = m.next(); !y.done; y = m.next()) {
                    var v = y.value;
                    if (
                      (S = d.parent(v.start.node)) &&
                      v.state() < h.STATE.METRICS
                    ) {
                      var b = f[v.display ? 1 : 0];
                      b.has(S) || b.set(S, this.getTestElement(S, v.display));
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    y && !y.done && (r = m.return) && r.call(m);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                var x =
                    this.options.mtextInheritFont ||
                    this.options.merrorInheritFont,
                  g = [new Map(), new Map()];
                try {
                  for (
                    var M = s(g.keys()), _ = M.next();
                    !_.done;
                    _ = M.next()
                  ) {
                    var w = _.value;
                    try {
                      for (
                        var C = ((i = void 0), s(f[w].keys())), j = C.next();
                        !j.done;
                        j = C.next()
                      ) {
                        var S = j.value;
                        g[w].set(S, this.measureMetrics(f[w].get(S), x));
                      }
                    } catch (t) {
                      i = { error: t };
                    } finally {
                      try {
                        j && !j.done && (a = C.return) && a.call(C);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                  }
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    _ && !_.done && (n = M.return) && n.call(M);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                try {
                  for (
                    var O = s(g.keys()), T = O.next();
                    !T.done;
                    T = O.next()
                  ) {
                    w = T.value;
                    try {
                      for (
                        var L = ((u = void 0), s(f[w].values())), B = L.next();
                        !B.done;
                        B = L.next()
                      ) {
                        S = B.value;
                        d.remove(S);
                      }
                    } catch (t) {
                      u = { error: t };
                    } finally {
                      try {
                        B && !B.done && (p = L.return) && p.call(L);
                      } finally {
                        if (u) throw u.error;
                      }
                    }
                  }
                } catch (t) {
                  l = { error: t };
                } finally {
                  try {
                    T && !T.done && (c = O.return) && c.call(O);
                  } finally {
                    if (l) throw l.error;
                  }
                }
                return g;
              }),
              (e.prototype.getTestElement = function (t, e) {
                var r = this.adaptor;
                if (!this.testInline) {
                  (this.testInline = this.html(
                    "mjx-test",
                    {
                      style: {
                        display: "inline-block",
                        width: "100%",
                        "font-style": "normal",
                        "font-weight": "normal",
                        "font-size": "100%",
                        "font-size-adjust": "none",
                        "text-indent": 0,
                        "text-transform": "none",
                        "letter-spacing": "normal",
                        "word-spacing": "normal",
                        overflow: "hidden",
                        height: "1px",
                        "margin-right": "-1px",
                      },
                    },
                    [
                      this.html("mjx-left-box", {
                        style: {
                          display: "inline-block",
                          width: 0,
                          float: "left",
                        },
                      }),
                      this.html("mjx-ex-box", {
                        style: {
                          position: "absolute",
                          overflow: "hidden",
                          width: "1px",
                          height: "60ex",
                        },
                      }),
                      this.html("mjx-right-box", {
                        style: {
                          display: "inline-block",
                          width: 0,
                          float: "right",
                        },
                      }),
                    ]
                  )),
                    (this.testDisplay = r.clone(this.testInline)),
                    r.setStyle(this.testDisplay, "display", "table"),
                    r.setStyle(this.testDisplay, "margin-right", ""),
                    r.setStyle(
                      r.firstChild(this.testDisplay),
                      "display",
                      "none"
                    );
                  var o = r.lastChild(this.testDisplay);
                  r.setStyle(o, "display", "table-cell"),
                    r.setStyle(o, "width", "10000em"),
                    r.setStyle(o, "float", "");
                }
                return r.append(
                  t,
                  r.clone(e ? this.testDisplay : this.testInline)
                );
              }),
              (e.prototype.measureMetrics = function (t, e) {
                var r = this.adaptor,
                  o = e ? r.fontFamily(t) : "",
                  n = r.fontSize(t),
                  i = a(r.nodeSize(r.childNode(t, 1)), 2),
                  s = i[0],
                  l = i[1],
                  h = s ? l / 60 : n * this.options.exFactor;
                return {
                  em: n,
                  ex: h,
                  containerWidth: s
                    ? "table" === r.getStyle(t, "display")
                      ? r.nodeSize(r.lastChild(t))[0] - 1
                      : r.nodeBBox(r.lastChild(t)).left -
                        r.nodeBBox(r.firstChild(t)).left -
                        2
                    : 1e6,
                  lineWidth: 1e6,
                  scale: Math.max(
                    this.options.minScale,
                    this.options.matchFontHeight
                      ? h / this.font.params.x_height / n
                      : 1
                  ),
                  family: o,
                };
              }),
              (e.prototype.styleSheet = function (t) {
                var e, r;
                if (
                  (this.setDocument(t),
                  this.cssStyles.clear(),
                  this.cssStyles.addStyles(this.constructor.commonStyles),
                  "getStyles" in t)
                )
                  try {
                    for (
                      var o = s(t.getStyles()), n = o.next();
                      !n.done;
                      n = o.next()
                    ) {
                      var i = n.value;
                      this.cssStyles.addStyles(i);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      n && !n.done && (r = o.return) && r.call(o);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                return (
                  this.addWrapperStyles(this.cssStyles),
                  this.addFontStyles(this.cssStyles),
                  this.html("style", { id: "MJX-styles" }, [
                    this.text("\n" + this.cssStyles.cssText + "\n"),
                  ])
                );
              }),
              (e.prototype.addFontStyles = function (t) {
                t.addStyles(this.font.styles);
              }),
              (e.prototype.addWrapperStyles = function (t) {
                var e, r;
                try {
                  for (
                    var o = s(this.factory.getKinds()), n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var i = n.value;
                    this.addClassStyles(this.factory.getNodeClass(i), t);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    n && !n.done && (r = o.return) && r.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (e.prototype.addClassStyles = function (t, e) {
                e.addStyles(t.styles);
              }),
              (e.prototype.setDocument = function (t) {
                t &&
                  ((this.document = t), (this.adaptor.document = t.document));
              }),
              (e.prototype.html = function (t, e, r, o) {
                return (
                  void 0 === e && (e = {}),
                  void 0 === r && (r = []),
                  this.adaptor.node(t, e, r, o)
                );
              }),
              (e.prototype.text = function (t) {
                return this.adaptor.text(t);
              }),
              (e.prototype.fixed = function (t, e) {
                return (
                  void 0 === e && (e = 3),
                  Math.abs(t) < 6e-4 ? "0" : t.toFixed(e).replace(/\.?0+$/, "")
                );
              }),
              (e.prototype.measureText = function (t, e, r) {
                void 0 === r && (r = ["", !1, !1]);
                var o = this.unknownText(t, e);
                if ("-explicitFont" === e) {
                  var n = this.cssFontStyles(r);
                  this.adaptor.setAttributes(o, { style: n });
                }
                return this.measureTextNodeWithCache(o, t, e, r);
              }),
              (e.prototype.measureTextNodeWithCache = function (t, e, r, o) {
                void 0 === o && (o = ["", !1, !1]),
                  "-explicitFont" === r &&
                    (r = [o[0], o[1] ? "T" : "F", o[2] ? "T" : "F", ""].join(
                      "-"
                    )),
                  this.unknownCache.has(r) ||
                    this.unknownCache.set(r, new Map());
                var n = this.unknownCache.get(r),
                  i = n.get(e);
                if (i) return i;
                var a = this.measureTextNode(t);
                return n.set(e, a), a;
              }),
              (e.prototype.measureXMLnode = function (t) {
                var e = this.adaptor,
                  r = this.html(
                    "mjx-xml-block",
                    { style: { display: "inline-block" } },
                    [e.clone(t)]
                  ),
                  o = this.html("mjx-baseline", {
                    style: { display: "inline-block", width: 0, height: 0 },
                  }),
                  n = this.html(
                    "mjx-measure-xml",
                    {
                      style: {
                        position: "absolute",
                        display: "inline-block",
                        "font-family": "initial",
                        "line-height": "normal",
                      },
                    },
                    [o, r]
                  );
                e.append(e.parent(this.math.start.node), this.container),
                  e.append(this.container, n);
                var i = this.math.metrics.em * this.math.metrics.scale,
                  a = e.nodeBBox(r),
                  s = a.left,
                  l = a.right,
                  h = a.bottom,
                  c = a.top,
                  u = (l - s) / i,
                  p = (e.nodeBBox(o).top - c) / i,
                  d = (h - c) / i - p;
                return (
                  e.remove(this.container), e.remove(n), { w: u, h: p, d: d }
                );
              }),
              (e.prototype.cssFontStyles = function (t, e) {
                void 0 === e && (e = {});
                var r = a(t, 3),
                  o = r[0],
                  n = r[1],
                  i = r[2];
                return (
                  (e["font-family"] = this.font.getFamily(o)),
                  n && (e["font-style"] = "italic"),
                  i && (e["font-weight"] = "bold"),
                  e
                );
              }),
              (e.prototype.getFontData = function (t) {
                return (
                  t || (t = new p.Styles()),
                  [
                    this.font.getFamily(t.get("font-family")),
                    "italic" === t.get("font-style"),
                    "bold" === t.get("font-weight"),
                  ]
                );
              }),
              (e.NAME = "Common"),
              (e.OPTIONS = i(i({}, l.AbstractOutputJax.OPTIONS), {
                scale: 1,
                minScale: 0.5,
                mtextInheritFont: !1,
                merrorInheritFont: !1,
                mtextFont: "",
                merrorFont: "serif",
                mathmlSpacing: !1,
                skipAttributes: {},
                exFactor: 0.5,
                displayAlign: "center",
                displayIndent: "0",
                wrapperFactory: null,
                font: null,
                cssStyles: null,
              })),
              (e.commonStyles = {}),
              e
            );
          })(l.AbstractOutputJax);
        e.CommonOutputJax = f;
      },
      1541: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          a =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          s =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonWrapper = void 0);
        var l = r(9879),
          h = r(8921),
          c = r(6720),
          u = r(6914),
          p = r(5878),
          d = r(3717),
          f = r(9250),
          m = 2 / 18;
        function y(t, e) {
          return t ? (e < m ? 0 : m) : e;
        }
        var v = (function (t) {
          function e(e, r, o) {
            void 0 === o && (o = null);
            var n = t.call(this, e, r) || this;
            return (
              (n.parent = null),
              (n.removedStyles = null),
              (n.styles = null),
              (n.variant = ""),
              (n.bboxComputed = !1),
              (n.stretch = f.NOSTRETCH),
              (n.font = null),
              (n.parent = o),
              (n.font = e.jax.font),
              (n.bbox = d.BBox.zero()),
              n.getStyles(),
              n.getVariant(),
              n.getScale(),
              n.getSpace(),
              (n.childNodes = r.childNodes.map(function (t) {
                var e = n.wrap(t);
                return (
                  e.bbox.pwidth &&
                    (r.notParent || r.isKind("math")) &&
                    (n.bbox.pwidth = d.BBox.fullWidth),
                  e
                );
              })),
              n
            );
          }
          return (
            n(e, t),
            Object.defineProperty(e.prototype, "jax", {
              get: function () {
                return this.factory.jax;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "adaptor", {
              get: function () {
                return this.factory.jax.adaptor;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "metrics", {
              get: function () {
                return this.factory.jax.math.metrics;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "fixesPWidth", {
              get: function () {
                return !this.node.notParent && !this.node.isToken;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.wrap = function (t, e) {
              void 0 === e && (e = null);
              var r = this.factory.wrap(t, e || this);
              return e && e.childNodes.push(r), this.jax.nodeMap.set(t, r), r;
            }),
            (e.prototype.getBBox = function (t) {
              if ((void 0 === t && (t = !0), this.bboxComputed))
                return this.bbox;
              var e = t ? this.bbox : d.BBox.zero();
              return this.computeBBox(e), (this.bboxComputed = t), e;
            }),
            (e.prototype.computeBBox = function (t, e) {
              var r, o;
              void 0 === e && (e = !1), t.empty();
              try {
                for (
                  var n = i(this.childNodes), a = n.next();
                  !a.done;
                  a = n.next()
                ) {
                  var s = a.value;
                  t.append(s.getBBox());
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  a && !a.done && (o = n.return) && o.call(n);
                } finally {
                  if (r) throw r.error;
                }
              }
              t.clean(),
                this.fixesPWidth &&
                  this.setChildPWidths(e) &&
                  this.computeBBox(t, !0);
            }),
            (e.prototype.setChildPWidths = function (t, e, r) {
              var o, n;
              if ((void 0 === e && (e = null), void 0 === r && (r = !0), t))
                return !1;
              r && (this.bbox.pwidth = "");
              var a = !1;
              try {
                for (
                  var s = i(this.childNodes), l = s.next();
                  !l.done;
                  l = s.next()
                ) {
                  var h = l.value,
                    c = h.getBBox();
                  c.pwidth &&
                    h.setChildPWidths(t, null === e ? c.w : e, r) &&
                    (a = !0);
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  l && !l.done && (n = s.return) && n.call(s);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            }),
            (e.prototype.invalidateBBox = function () {
              this.bboxComputed &&
                ((this.bboxComputed = !1),
                this.parent && this.parent.invalidateBBox());
            }),
            (e.prototype.copySkewIC = function (t) {
              var e = this.childNodes[0];
              (null == e ? void 0 : e.bbox.sk) && (t.sk = e.bbox.sk),
                (null == e ? void 0 : e.bbox.dx) && (t.dx = e.bbox.dx);
              var r = this.childNodes[this.childNodes.length - 1];
              (null == r ? void 0 : r.bbox.ic) &&
                ((t.ic = r.bbox.ic), (t.w += t.ic));
            }),
            (e.prototype.getStyles = function () {
              var t = this.node.attributes.getExplicit("style");
              if (t)
                for (
                  var r = (this.styles = new p.Styles(t)),
                    o = 0,
                    n = e.removeStyles.length;
                  o < n;
                  o++
                ) {
                  var i = e.removeStyles[o];
                  r.get(i) &&
                    (this.removedStyles || (this.removedStyles = {}),
                    (this.removedStyles[i] = r.get(i)),
                    r.set(i, ""));
                }
            }),
            (e.prototype.getVariant = function () {
              if (this.node.isToken) {
                var t = this.node.attributes,
                  r = t.get("mathvariant");
                if (!t.getExplicit("mathvariant")) {
                  var o = t.getList("fontfamily", "fontweight", "fontstyle");
                  if (this.removedStyles) {
                    var n = this.removedStyles;
                    n.fontFamily && (o.family = n.fontFamily),
                      n.fontWeight && (o.weight = n.fontWeight),
                      n.fontStyle && (o.style = n.fontStyle);
                  }
                  o.fontfamily && (o.family = o.fontfamily),
                    o.fontweight && (o.weight = o.fontweight),
                    o.fontstyle && (o.style = o.fontstyle),
                    o.weight &&
                      o.weight.match(/^\d+$/) &&
                      (o.weight = parseInt(o.weight) > 600 ? "bold" : "normal"),
                    o.family
                      ? (r = this.explicitVariant(o.family, o.weight, o.style))
                      : (this.node.getProperty("variantForm") &&
                          (r = "-tex-variant"),
                        (r = (e.BOLDVARIANTS[o.weight] || {})[r] || r),
                        (r = (e.ITALICVARIANTS[o.style] || {})[r] || r));
                }
                this.variant = r;
              }
            }),
            (e.prototype.explicitVariant = function (t, e, r) {
              var o = this.styles;
              return (
                o || (o = this.styles = new p.Styles()),
                o.set("fontFamily", t),
                e && o.set("fontWeight", e),
                r && o.set("fontStyle", r),
                "-explicitFont"
              );
            }),
            (e.prototype.getScale = function () {
              var t = 1,
                e = this.parent,
                r = e ? e.bbox.scale : 1,
                o = this.node.attributes,
                n = Math.min(o.get("scriptlevel"), 2),
                i = o.get("fontsize"),
                a =
                  this.node.isToken || this.node.isKind("mstyle")
                    ? o.get("mathsize")
                    : o.getInherited("mathsize");
              if (0 !== n) {
                t = Math.pow(o.get("scriptsizemultiplier"), n);
                var s = this.length2em(o.get("scriptminsize"), 0.8, 1);
                t < s && (t = s);
              }
              this.removedStyles &&
                this.removedStyles.fontSize &&
                !i &&
                (i = this.removedStyles.fontSize),
                i && !o.getExplicit("mathsize") && (a = i),
                "1" !== a && (t *= this.length2em(a, 1, 1)),
                (this.bbox.scale = t),
                (this.bbox.rscale = t / r);
            }),
            (e.prototype.getSpace = function () {
              var t = this.isTopEmbellished(),
                e = this.node.hasSpacingAttributes();
              this.jax.options.mathmlSpacing || e
                ? t && this.getMathMLSpacing()
                : this.getTeXSpacing(t, e);
            }),
            (e.prototype.getMathMLSpacing = function () {
              var t = this.node.coreMO(),
                e = t.coreParent(),
                r = e.parent;
              if (r && r.isKind("mrow") && 1 !== r.childNodes.length) {
                var o = t.attributes,
                  n = o.get("scriptlevel") > 0;
                (this.bbox.L = o.isSet("lspace")
                  ? Math.max(0, this.length2em(o.get("lspace")))
                  : y(n, t.lspace)),
                  (this.bbox.R = o.isSet("rspace")
                    ? Math.max(0, this.length2em(o.get("rspace")))
                    : y(n, t.rspace));
                var i = r.childIndex(e);
                if (0 !== i) {
                  var a = r.childNodes[i - 1];
                  if (a.isEmbellished) {
                    var s = this.jax.nodeMap.get(a).getBBox();
                    s.R && (this.bbox.L = Math.max(0, this.bbox.L - s.R));
                  }
                }
              }
            }),
            (e.prototype.getTeXSpacing = function (t, e) {
              if (!e) {
                var r = this.node.texSpacing();
                r && (this.bbox.L = this.length2em(r));
              }
              if (t || e) {
                var o = this.node.coreMO().attributes;
                o.isSet("lspace") &&
                  (this.bbox.L = Math.max(0, this.length2em(o.get("lspace")))),
                  o.isSet("rspace") &&
                    (this.bbox.R = Math.max(
                      0,
                      this.length2em(o.get("rspace"))
                    ));
              }
            }),
            (e.prototype.isTopEmbellished = function () {
              return (
                this.node.isEmbellished &&
                !(this.node.parent && this.node.parent.isEmbellished)
              );
            }),
            (e.prototype.core = function () {
              return this.jax.nodeMap.get(this.node.core());
            }),
            (e.prototype.coreMO = function () {
              return this.jax.nodeMap.get(this.node.coreMO());
            }),
            (e.prototype.getText = function () {
              var t,
                e,
                r = "";
              if (this.node.isToken)
                try {
                  for (
                    var o = i(this.node.childNodes), n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var a = n.value;
                    a instanceof h.TextNode && (r += a.getText());
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              return r;
            }),
            (e.prototype.canStretch = function (t) {
              if (((this.stretch = f.NOSTRETCH), this.node.isEmbellished)) {
                var e = this.core();
                e &&
                  e.node !== this.node &&
                  e.canStretch(t) &&
                  (this.stretch = e.stretch);
              }
              return 0 !== this.stretch.dir;
            }),
            (e.prototype.getAlignShift = function () {
              var t,
                e = (t = this.node.attributes).getList.apply(
                  t,
                  s([], a(h.indentAttributes))
                ),
                r = e.indentalign,
                o = e.indentshift,
                n = e.indentalignfirst,
                i = e.indentshiftfirst;
              return (
                "indentalign" !== n && (r = n),
                "auto" === r && (r = this.jax.options.displayAlign),
                "indentshift" !== i && (o = i),
                "auto" === o &&
                  ((o = this.jax.options.displayIndent),
                  "right" !== r ||
                    o.match(/^\s*0[a-z]*\s*$/) ||
                    (o = ("-" + o.trim()).replace(/^--/, ""))),
                [r, this.length2em(o, this.metrics.containerWidth)]
              );
            }),
            (e.prototype.getAlignX = function (t, e, r) {
              return "right" === r
                ? t - (e.w + e.R) * e.rscale
                : "left" === r
                ? e.L * e.rscale
                : (t - e.w * e.rscale) / 2;
            }),
            (e.prototype.getAlignY = function (t, e, r, o, n) {
              return "top" === n
                ? t - r
                : "bottom" === n
                ? o - e
                : "center" === n
                ? (t - r - (e - o)) / 2
                : 0;
            }),
            (e.prototype.getWrapWidth = function (t) {
              return this.childNodes[t].getBBox().w;
            }),
            (e.prototype.getChildAlign = function (t) {
              return "left";
            }),
            (e.prototype.percent = function (t) {
              return u.percent(t);
            }),
            (e.prototype.em = function (t) {
              return u.em(t);
            }),
            (e.prototype.px = function (t, e) {
              return (
                void 0 === e && (e = -u.BIGDIMEN), u.px(t, e, this.metrics.em)
              );
            }),
            (e.prototype.length2em = function (t, e, r) {
              return (
                void 0 === e && (e = 1),
                void 0 === r && (r = null),
                null === r && (r = this.bbox.scale),
                u.length2em(t, e, r, this.jax.pxPerEm)
              );
            }),
            (e.prototype.unicodeChars = function (t, e) {
              void 0 === e && (e = this.variant);
              var r = c.unicodeChars(t),
                o = this.font.getVariant(e);
              if (o && o.chars) {
                var n = o.chars;
                r = r.map(function (t) {
                  return ((n[t] || [])[3] || {}).smp || t;
                });
              }
              return r;
            }),
            (e.prototype.remapChars = function (t) {
              return t;
            }),
            (e.prototype.mmlText = function (t) {
              return this.node.factory.create("text").setText(t);
            }),
            (e.prototype.mmlNode = function (t, e, r) {
              return (
                void 0 === e && (e = {}),
                void 0 === r && (r = []),
                this.node.factory.create(t, e, r)
              );
            }),
            (e.prototype.createMo = function (t) {
              var e = this.node.factory,
                r = e.create("text").setText(t),
                o = e.create("mo", { stretchy: !0 }, [r]);
              o.inheritAttributesFrom(this.node);
              var n = this.wrap(o);
              return (n.parent = this), n;
            }),
            (e.prototype.getVariantChar = function (t, e) {
              var r = this.font.getChar(t, e) || [0, 0, 0, { unknown: !0 }];
              return 3 === r.length && (r[3] = {}), r;
            }),
            (e.kind = "unknown"),
            (e.styles = {}),
            (e.removeStyles = [
              "fontSize",
              "fontFamily",
              "fontWeight",
              "fontStyle",
              "fontVariant",
              "font",
            ]),
            (e.skipAttributes = {
              fontfamily: !0,
              fontsize: !0,
              fontweight: !0,
              fontstyle: !0,
              color: !0,
              background: !0,
              class: !0,
              href: !0,
              style: !0,
              xmlns: !0,
            }),
            (e.BOLDVARIANTS = {
              bold: {
                normal: "bold",
                italic: "bold-italic",
                fraktur: "bold-fraktur",
                script: "bold-script",
                "sans-serif": "bold-sans-serif",
                "sans-serif-italic": "sans-serif-bold-italic",
              },
              normal: {
                bold: "normal",
                "bold-italic": "italic",
                "bold-fraktur": "fraktur",
                "bold-script": "script",
                "bold-sans-serif": "sans-serif",
                "sans-serif-bold-italic": "sans-serif-italic",
              },
            }),
            (e.ITALICVARIANTS = {
              italic: {
                normal: "italic",
                bold: "bold-italic",
                "sans-serif": "sans-serif-italic",
                "bold-sans-serif": "sans-serif-bold-italic",
              },
              normal: {
                italic: "normal",
                "bold-italic": "bold",
                "sans-serif-italic": "sans-serif",
                "sans-serif-bold-italic": "bold-sans-serif",
              },
            }),
            e
          );
        })(l.AbstractWrapper);
        e.CommonWrapper = v;
      },
      1475: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonWrapperFactory = void 0);
        var i = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.jax = null), e;
          }
          return (
            n(e, t),
            Object.defineProperty(e.prototype, "Wrappers", {
              get: function () {
                return this.node;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.defaultNodes = {}),
            e
          );
        })(r(2506).AbstractWrapperFactory);
        e.CommonWrapperFactory = i;
      },
      3438: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonTeXAtomMixin = void 0);
        var i = r(8921);
        e.CommonTeXAtomMixin = function (t) {
          return (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.computeBBox = function (e, r) {
                if (
                  (void 0 === r && (r = !1),
                  t.prototype.computeBBox.call(this, e, r),
                  this.childNodes[0] &&
                    this.childNodes[0].bbox.ic &&
                    (e.ic = this.childNodes[0].bbox.ic),
                  this.node.texClass === i.TEXCLASS.VCENTER)
                ) {
                  var o = e.h,
                    n = (o + e.d) / 2 + this.font.params.axis_height - o;
                  (e.h += n), (e.d -= n);
                }
              }),
              e
            );
          })(t);
        };
      },
      555: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonTextNodeMixin = void 0),
          (e.CommonTextNodeMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                (e.prototype.computeBBox = function (t, e) {
                  var r, o;
                  void 0 === e && (e = !1);
                  var a = this.parent.variant,
                    s = this.node.getText();
                  if ("-explicitFont" === a) {
                    var l = this.jax.getFontData(this.parent.styles),
                      h = this.jax.measureText(s, a, l),
                      c = h.w,
                      u = h.h,
                      p = h.d;
                    (t.h = u), (t.d = p), (t.w = c);
                  } else {
                    var d = this.remappedText(s, a);
                    t.empty();
                    try {
                      for (var f = n(d), m = f.next(); !m.done; m = f.next()) {
                        var y = m.value,
                          v = i(this.getVariantChar(a, y), 4),
                          b = ((u = v[0]), (p = v[1]), (c = v[2]), v[3]);
                        if (b.unknown) {
                          var x = this.jax.measureText(
                            String.fromCodePoint(y),
                            a
                          );
                          (c = x.w), (u = x.h), (p = x.d);
                        }
                        (t.w += c),
                          u > t.h && (t.h = u),
                          p > t.d && (t.d = p),
                          (t.ic = b.ic || 0),
                          (t.sk = b.sk || 0),
                          (t.dx = b.dx || 0);
                      }
                    } catch (t) {
                      r = { error: t };
                    } finally {
                      try {
                        m && !m.done && (o = f.return) && o.call(f);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    d.length > 1 && (t.sk = 0), t.clean();
                  }
                }),
                (e.prototype.remappedText = function (t, e) {
                  var r = this.parent.stretch.c;
                  return r
                    ? [r]
                    : this.parent.remapChars(this.unicodeChars(t, e));
                }),
                (e.prototype.getStyles = function () {}),
                (e.prototype.getVariant = function () {}),
                (e.prototype.getScale = function () {}),
                (e.prototype.getSpace = function () {}),
                e
              );
            })(t);
          });
      },
      3345: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMactionMixin = e.TooltipData = void 0);
        var s = r(6720);
        (e.TooltipData = {
          dx: ".2em",
          dy: ".1em",
          postDelay: 600,
          clearDelay: 100,
          hoverTimer: new Map(),
          clearTimer: new Map(),
          stopTimers: function (t, e) {
            e.clearTimer.has(t) &&
              (clearTimeout(e.clearTimer.get(t)), e.clearTimer.delete(t)),
              e.hoverTimer.has(t) &&
                (clearTimeout(e.hoverTimer.get(t)), e.hoverTimer.delete(t));
          },
        }),
          (e.CommonMactionMixin = function (t) {
            return (function (t) {
              function r() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, a([], i(e))) || this,
                  n = o.constructor.actions,
                  s = o.node.attributes.get("actiontype"),
                  l = i(n.get(s) || [function (t, e) {}, {}], 2),
                  h = l[0],
                  c = l[1];
                return (o.action = h), (o.data = c), o.getParameters(), o;
              }
              return (
                n(r, t),
                Object.defineProperty(r.prototype, "selected", {
                  get: function () {
                    var t = this.node.attributes.get("selection"),
                      e = Math.max(1, Math.min(this.childNodes.length, t)) - 1;
                    return this.childNodes[e] || this.wrap(this.node.selected);
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (r.prototype.getParameters = function () {
                  var t = this.node.attributes.get("data-offsets"),
                    r = i(s.split(t || ""), 2),
                    o = r[0],
                    n = r[1];
                  (this.dx = this.length2em(o || e.TooltipData.dx)),
                    (this.dy = this.length2em(n || e.TooltipData.dy));
                }),
                (r.prototype.computeBBox = function (t, e) {
                  void 0 === e && (e = !1),
                    t.updateFrom(this.selected.getBBox()),
                    this.selected.setChildPWidths(e);
                }),
                r
              );
            })(t);
          });
      },
      2057: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMathMixin = void 0),
          (e.CommonMathMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                (e.prototype.getWrapWidth = function (t) {
                  return this.parent
                    ? this.getBBox().w
                    : this.metrics.containerWidth / this.jax.pxPerEm;
                }),
                e
              );
            })(t);
          });
      },
      6200: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          s =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMencloseMixin = void 0);
        var l = r(5373),
          h = r(6720);
        e.CommonMencloseMixin = function (t) {
          return (function (t) {
            function e() {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              var o = t.apply(this, a([], i(e))) || this;
              return (
                (o.notations = {}),
                (o.renderChild = null),
                (o.msqrt = null),
                (o.padding = l.PADDING),
                (o.thickness = l.THICKNESS),
                (o.arrowhead = { x: l.ARROWX, y: l.ARROWY, dx: l.ARROWDX }),
                (o.TRBL = [0, 0, 0, 0]),
                o.getParameters(),
                o.getNotations(),
                o.removeRedundantNotations(),
                o.initializeNotations(),
                (o.TRBL = o.getBBoxExtenders()),
                o
              );
            }
            return (
              n(e, t),
              (e.prototype.getParameters = function () {
                var t = this.node.attributes,
                  e = t.get("data-padding");
                void 0 !== e && (this.padding = this.length2em(e, l.PADDING));
                var r = t.get("data-thickness");
                void 0 !== r &&
                  (this.thickness = this.length2em(r, l.THICKNESS));
                var o = t.get("data-arrowhead");
                if (void 0 !== o) {
                  var n = i(h.split(o), 3),
                    a = n[0],
                    s = n[1],
                    c = n[2];
                  this.arrowhead = {
                    x: a ? parseFloat(a) : l.ARROWX,
                    y: s ? parseFloat(s) : l.ARROWY,
                    dx: c ? parseFloat(c) : l.ARROWDX,
                  };
                }
              }),
              (e.prototype.getNotations = function () {
                var t,
                  e,
                  r = this.constructor.notations;
                try {
                  for (
                    var o = s(h.split(this.node.attributes.get("notation"))),
                      n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var i = n.value,
                      a = r.get(i);
                    a &&
                      ((this.notations[i] = a),
                      a.renderChild && (this.renderChild = a.renderer));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.removeRedundantNotations = function () {
                var t, e, r, o;
                try {
                  for (
                    var n = s(Object.keys(this.notations)), i = n.next();
                    !i.done;
                    i = n.next()
                  ) {
                    var a = i.value;
                    if (this.notations[a]) {
                      var l = this.notations[a].remove || "";
                      try {
                        for (
                          var h = ((r = void 0), s(l.split(/ /))), c = h.next();
                          !c.done;
                          c = h.next()
                        ) {
                          var u = c.value;
                          delete this.notations[u];
                        }
                      } catch (t) {
                        r = { error: t };
                      } finally {
                        try {
                          c && !c.done && (o = h.return) && o.call(h);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    i && !i.done && (e = n.return) && e.call(n);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.initializeNotations = function () {
                var t, e;
                try {
                  for (
                    var r = s(Object.keys(this.notations)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var n = o.value,
                      i = this.notations[n].init;
                    i && i(this);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.computeBBox = function (t, e) {
                void 0 === e && (e = !1);
                var r = i(this.TRBL, 4),
                  o = r[0],
                  n = r[1],
                  a = r[2],
                  s = r[3],
                  l = this.childNodes[0].getBBox();
                t.combine(l, s, 0),
                  (t.h += o),
                  (t.d += a),
                  (t.w += n),
                  this.setChildPWidths(e);
              }),
              (e.prototype.getBBoxExtenders = function () {
                var t,
                  e,
                  r = [0, 0, 0, 0];
                try {
                  for (
                    var o = s(Object.keys(this.notations)), n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var i = n.value;
                    this.maximizeEntries(r, this.notations[i].bbox(this));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return r;
              }),
              (e.prototype.getPadding = function () {
                var t,
                  e,
                  r = this,
                  o = [0, 0, 0, 0];
                try {
                  for (
                    var n = s(Object.keys(this.notations)), i = n.next();
                    !i.done;
                    i = n.next()
                  ) {
                    var a = i.value,
                      l = this.notations[a].border;
                    l && this.maximizeEntries(o, l(this));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    i && !i.done && (e = n.return) && e.call(n);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return [0, 1, 2, 3].map(function (t) {
                  return r.TRBL[t] - o[t];
                });
              }),
              (e.prototype.maximizeEntries = function (t, e) {
                for (var r = 0; r < t.length; r++) t[r] < e[r] && (t[r] = e[r]);
              }),
              (e.prototype.getOffset = function (t) {
                var e = i(this.TRBL, 4),
                  r = e[0],
                  o = e[1],
                  n = e[2],
                  a = e[3],
                  s = ("X" === t ? o - a : n - r) / 2;
                return Math.abs(s) > 0.001 ? s : 0;
              }),
              (e.prototype.getArgMod = function (t, e) {
                return [Math.atan2(e, t), Math.sqrt(t * t + e * e)];
              }),
              (e.prototype.arrow = function (t, e, r, o, n) {
                return void 0 === o && (o = ""), void 0 === n && (n = 0), null;
              }),
              (e.prototype.arrowData = function () {
                var t = i([this.padding, this.thickness], 2),
                  e = t[0],
                  r =
                    t[1] * (this.arrowhead.x + Math.max(1, this.arrowhead.dx)),
                  o = this.childNodes[0].getBBox(),
                  n = o.h,
                  a = o.d,
                  s = o.w,
                  l = n + a,
                  h = Math.sqrt(l * l + s * s),
                  c = Math.max(e, (r * s) / h),
                  u = Math.max(e, (r * l) / h),
                  p = i(this.getArgMod(s + 2 * c, l + 2 * u), 2);
                return { a: p[0], W: p[1], x: c, y: u };
              }),
              (e.prototype.arrowAW = function () {
                var t = this.childNodes[0].getBBox(),
                  e = t.h,
                  r = t.d,
                  o = t.w,
                  n = i(this.TRBL, 4),
                  a = n[0],
                  s = n[1],
                  l = n[2],
                  h = n[3];
                return this.getArgMod(h + o + s, a + e + r + l);
              }),
              (e.prototype.createMsqrt = function (t) {
                var e = this.node.factory.create("msqrt");
                e.inheritAttributesFrom(this.node), (e.childNodes[0] = t.node);
                var r = this.wrap(e);
                return (r.parent = this), r;
              }),
              (e.prototype.sqrtTRBL = function () {
                var t = this.msqrt.getBBox(),
                  e = this.msqrt.childNodes[0].getBBox();
                return [t.h - e.h, 0, t.d - e.d, t.w - e.w];
              }),
              e
            );
          })(t);
        };
      },
      1346: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMfencedMixin = void 0),
          (e.CommonMfencedMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, i([], n(e))) || this;
                return (o.mrow = null), o.createMrow(), o.addMrowChildren(), o;
              }
              return (
                o(e, t),
                (e.prototype.createMrow = function () {
                  var t = this.node.factory.create("inferredMrow");
                  t.inheritAttributesFrom(this.node),
                    (this.mrow = this.wrap(t)),
                    (this.mrow.parent = this);
                }),
                (e.prototype.addMrowChildren = function () {
                  var t,
                    e,
                    r = this.node,
                    o = this.mrow;
                  this.addMo(r.open),
                    this.childNodes.length &&
                      o.childNodes.push(this.childNodes[0]);
                  var n = 0;
                  try {
                    for (
                      var i = a(this.childNodes.slice(1)), s = i.next();
                      !s.done;
                      s = i.next()
                    ) {
                      var l = s.value;
                      this.addMo(r.separators[n++]), o.childNodes.push(l);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      s && !s.done && (e = i.return) && e.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  this.addMo(r.close), o.stretchChildren();
                }),
                (e.prototype.addMo = function (t) {
                  if (t) {
                    var e = this.wrap(t);
                    this.mrow.childNodes.push(e), (e.parent = this.mrow);
                  }
                }),
                (e.prototype.computeBBox = function (t, e) {
                  void 0 === e && (e = !1),
                    t.updateFrom(this.mrow.getBBox()),
                    this.setChildPWidths(e);
                }),
                e
              );
            })(t);
          });
      },
      5705: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMfracMixin = void 0),
          (e.CommonMfracMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, i([], n(e))) || this;
                if (
                  ((o.bevel = null),
                  (o.pad = o.node.getProperty("withDelims")
                    ? 0
                    : o.font.params.nulldelimiterspace),
                  o.node.attributes.get("bevelled"))
                ) {
                  var a = o.getBevelData(o.isDisplay()).H,
                    s = (o.bevel = o.createMo("/"));
                  s.node.attributes.set("symmetric", !0),
                    s.canStretch(1),
                    s.getStretchedVariant([a], !0);
                }
                return o;
              }
              return (
                o(e, t),
                (e.prototype.computeBBox = function (t, e) {
                  void 0 === e && (e = !1), t.empty();
                  var r = this.node.attributes.getList(
                      "linethickness",
                      "bevelled"
                    ),
                    o = r.linethickness,
                    n = r.bevelled,
                    i = this.isDisplay(),
                    a = null;
                  if (n) this.getBevelledBBox(t, i);
                  else {
                    var s = this.length2em(String(o), 0.06);
                    (a = -2 * this.pad),
                      0 === s
                        ? this.getAtopBBox(t, i)
                        : (this.getFractionBBox(t, i, s), (a -= 0.2)),
                      (a += t.w);
                  }
                  t.clean(), this.setChildPWidths(e, a);
                }),
                (e.prototype.getFractionBBox = function (t, e, r) {
                  var o = this.childNodes[0].getBBox(),
                    n = this.childNodes[1].getBBox(),
                    i = this.font.params.axis_height,
                    a = this.getTUV(e, r),
                    s = a.T,
                    l = a.u,
                    h = a.v;
                  t.combine(o, 0, i + s + Math.max(o.d * o.rscale, l)),
                    t.combine(n, 0, i - s - Math.max(n.h * n.rscale, h)),
                    (t.w += 2 * this.pad + 0.2);
                }),
                (e.prototype.getTUV = function (t, e) {
                  var r = this.font.params,
                    o = r.axis_height,
                    n = (t ? 3.5 : 1.5) * e;
                  return {
                    T: (t ? 3.5 : 1.5) * e,
                    u: (t ? r.num1 : r.num2) - o - n,
                    v: (t ? r.denom1 : r.denom2) + o - n,
                  };
                }),
                (e.prototype.getAtopBBox = function (t, e) {
                  var r = this.getUVQ(e),
                    o = r.u,
                    n = r.v,
                    i = r.nbox,
                    a = r.dbox;
                  t.combine(i, 0, o),
                    t.combine(a, 0, -n),
                    (t.w += 2 * this.pad);
                }),
                (e.prototype.getUVQ = function (t) {
                  var e = this.childNodes[0].getBBox(),
                    r = this.childNodes[1].getBBox(),
                    o = this.font.params,
                    i = n(t ? [o.num1, o.denom1] : [o.num3, o.denom2], 2),
                    a = i[0],
                    s = i[1],
                    l = (t ? 7 : 3) * o.rule_thickness,
                    h = a - e.d * e.scale - (r.h * r.scale - s);
                  return (
                    h < l && ((a += (l - h) / 2), (s += (l - h) / 2), (h = l)),
                    { u: a, v: s, q: h, nbox: e, dbox: r }
                  );
                }),
                (e.prototype.getBevelledBBox = function (t, e) {
                  var r = this.getBevelData(e),
                    o = r.u,
                    n = r.v,
                    i = r.delta,
                    a = r.nbox,
                    s = r.dbox,
                    l = this.bevel.getBBox();
                  t.combine(a, 0, o),
                    t.combine(l, t.w - i / 2, 0),
                    t.combine(s, t.w - i / 2, n);
                }),
                (e.prototype.getBevelData = function (t) {
                  var e = this.childNodes[0].getBBox(),
                    r = this.childNodes[1].getBBox(),
                    o = t ? 0.4 : 0.15,
                    n =
                      Math.max(e.scale * (e.h + e.d), r.scale * (r.h + r.d)) +
                      2 * o,
                    i = this.font.params.axis_height;
                  return {
                    H: n,
                    delta: o,
                    u: (e.scale * (e.d - e.h)) / 2 + i + o,
                    v: (r.scale * (r.d - r.h)) / 2 + i - o,
                    nbox: e,
                    dbox: r,
                  };
                }),
                (e.prototype.canStretch = function (t) {
                  return !1;
                }),
                (e.prototype.isDisplay = function () {
                  var t = this.node.attributes.getList(
                      "displaystyle",
                      "scriptlevel"
                    ),
                    e = t.displaystyle,
                    r = t.scriptlevel;
                  return e && 0 === r;
                }),
                (e.prototype.getWrapWidth = function (t) {
                  var e = this.node.attributes;
                  return e.get("bevelled")
                    ? this.childNodes[t].getBBox().w
                    : this.getBBox().w -
                        (this.length2em(e.get("linethickness")) ? 0.2 : 0) -
                        2 * this.pad;
                }),
                (e.prototype.getChildAlign = function (t) {
                  var e = this.node.attributes;
                  return e.get("bevelled")
                    ? "left"
                    : e.get(["numalign", "denomalign"][t]);
                }),
                e
              );
            })(t);
          });
      },
      7969: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMglyphMixin = void 0),
          (e.CommonMglyphMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, i([], n(e))) || this;
                return o.getParameters(), o;
              }
              return (
                o(e, t),
                (e.prototype.getParameters = function () {
                  var t = this.node.attributes.getList(
                      "width",
                      "height",
                      "valign"
                    ),
                    e = t.width,
                    r = t.height,
                    o = t.valign;
                  (this.width = "auto" === e ? 1 : this.length2em(e)),
                    (this.height = "auto" === r ? 1 : this.length2em(r)),
                    (this.valign = this.length2em(o || "0"));
                }),
                (e.prototype.computeBBox = function (t, e) {
                  void 0 === e && (e = !1),
                    (t.w = this.width),
                    (t.h = this.height + this.valign),
                    (t.d = -this.valign);
                }),
                e
              );
            })(t);
          });
      },
      1419: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMiMixin = void 0),
          (e.CommonMiMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                (e.prototype.computeBBox = function (e, r) {
                  void 0 === r && (r = !1),
                    t.prototype.computeBBox.call(this, e),
                    this.copySkewIC(e);
                }),
                e
              );
            })(t);
          });
      },
      9906: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          s =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMmultiscriptsMixin = e.ScriptNames = e.NextScript = void 0);
        var l = r(3717);
        (e.NextScript = {
          base: "subList",
          subList: "supList",
          supList: "subList",
          psubList: "psupList",
          psupList: "psubList",
        }),
          (e.ScriptNames = ["sup", "sup", "psup", "psub"]),
          (e.CommonMmultiscriptsMixin = function (t) {
            return (function (t) {
              function r() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, a([], i(e))) || this;
                return (
                  (o.scriptData = null),
                  (o.firstPrescript = 0),
                  o.getScriptData(),
                  o
                );
              }
              return (
                n(r, t),
                (r.prototype.combinePrePost = function (t, e) {
                  var r = new l.BBox(t);
                  return r.combine(e, 0, 0), r;
                }),
                (r.prototype.computeBBox = function (t, e) {
                  void 0 === e && (e = !1);
                  var r = this.font.params.scriptspace,
                    o = this.scriptData,
                    n = this.combinePrePost(o.sub, o.psub),
                    a = this.combinePrePost(o.sup, o.psup),
                    s = i(this.getUVQ(n, a), 2),
                    l = s[0],
                    h = s[1];
                  if (
                    (t.empty(),
                    o.numPrescripts &&
                      (t.combine(o.psup, r, l), t.combine(o.psub, r, h)),
                    t.append(o.base),
                    o.numScripts)
                  ) {
                    var c = t.w;
                    t.combine(o.sup, c, l), t.combine(o.sub, c, h), (t.w += r);
                  }
                  t.clean(), this.setChildPWidths(e);
                }),
                (r.prototype.getScriptData = function () {
                  var t = (this.scriptData = {
                      base: null,
                      sub: l.BBox.empty(),
                      sup: l.BBox.empty(),
                      psub: l.BBox.empty(),
                      psup: l.BBox.empty(),
                      numPrescripts: 0,
                      numScripts: 0,
                    }),
                    e = this.getScriptBBoxLists();
                  this.combineBBoxLists(t.sub, t.sup, e.subList, e.supList),
                    this.combineBBoxLists(
                      t.psub,
                      t.psup,
                      e.psubList,
                      e.psupList
                    ),
                    (t.base = e.base[0]),
                    (t.numPrescripts = e.psubList.length),
                    (t.numScripts = e.subList.length);
                }),
                (r.prototype.getScriptBBoxLists = function () {
                  var t,
                    r,
                    o = {
                      base: [],
                      subList: [],
                      supList: [],
                      psubList: [],
                      psupList: [],
                    },
                    n = "base";
                  try {
                    for (
                      var i = s(this.childNodes), a = i.next();
                      !a.done;
                      a = i.next()
                    ) {
                      var l = a.value;
                      l.node.isKind("mprescripts")
                        ? (n = "psubList")
                        : (o[n].push(l.getBBox()), (n = e.NextScript[n]));
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      a && !a.done && (r = i.return) && r.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return (
                    (this.firstPrescript =
                      o.subList.length + o.supList.length + 2),
                    this.padLists(o.subList, o.supList),
                    this.padLists(o.psubList, o.psupList),
                    o
                  );
                }),
                (r.prototype.padLists = function (t, e) {
                  t.length > e.length && e.push(l.BBox.empty());
                }),
                (r.prototype.combineBBoxLists = function (t, e, r, o) {
                  for (var n = 0; n < r.length; n++) {
                    var a = i(this.getScaledWHD(r[n]), 3),
                      s = a[0],
                      l = a[1],
                      h = a[2],
                      c = i(this.getScaledWHD(o[n]), 3),
                      u = c[0],
                      p = c[1],
                      d = c[2],
                      f = Math.max(s, u);
                    (t.w += f),
                      (e.w += f),
                      l > t.h && (t.h = l),
                      h > t.d && (t.d = h),
                      p > e.h && (e.h = p),
                      d > e.d && (e.d = d);
                  }
                }),
                (r.prototype.getScaledWHD = function (t) {
                  var e = t.w,
                    r = t.h,
                    o = t.d,
                    n = t.rscale;
                  return [e * n, r * n, o * n];
                }),
                (r.prototype.getUVQ = function (e, r) {
                  var o;
                  if (!this.UVQ) {
                    var n = i([0, 0, 0], 3),
                      a = n[0],
                      s = n[1],
                      l = n[2];
                    0 === e.h && 0 === e.d
                      ? (a = this.getU())
                      : 0 === r.h && 0 === r.d
                      ? (a = -this.getV())
                      : ((a = (o = i(
                          t.prototype.getUVQ.call(this, e, r),
                          3
                        ))[0]),
                        (s = o[1]),
                        (l = o[2])),
                      (this.UVQ = [a, s, l]);
                  }
                  return this.UVQ;
                }),
                r
              );
            })(t);
          });
      },
      2304: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMnMixin = void 0),
          (e.CommonMnMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                (e.prototype.remapChars = function (t) {
                  if (t.length) {
                    var e = this.font.getRemappedChar("mn", t[0]);
                    if (e) {
                      var r = this.unicodeChars(e, this.variant);
                      1 === r.length
                        ? (t[0] = r[0])
                        : (t = r.concat(t.slice(1)));
                    }
                  }
                  return t;
                }),
                e
              );
            })(t);
          });
      },
      437: function (t, e, r) {
        var o,
          n,
          i =
            (this && this.__extends) ||
            ((o = function (t, e) {
              return (o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          a =
            (this && this.__assign) ||
            function () {
              return (a =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var n in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }).apply(this, arguments);
            },
          s =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          l =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          h =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMoMixin = e.DirectionVH = void 0);
        var c = r(3717),
          u = r(6720),
          p = r(9250);
        (e.DirectionVH = (((n = {})[1] = "v"), (n[2] = "h"), n)),
          (e.CommonMoMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, l([], s(e))) || this;
                return (o.size = null), (o.isAccent = o.node.isAccent), o;
              }
              return (
                i(e, t),
                (e.prototype.computeBBox = function (t, e) {
                  if (
                    (void 0 === e && (e = !1),
                    this.protoBBox(t),
                    this.node.attributes.get("symmetric") &&
                      2 !== this.stretch.dir)
                  ) {
                    var r = this.getCenterOffset(t);
                    (t.h += r), (t.d -= r);
                  }
                  this.node.getProperty("mathaccent") &&
                    (0 === this.stretch.dir || this.size >= 0) &&
                    (t.w = 0);
                }),
                (e.prototype.protoBBox = function (e) {
                  var r = 0 !== this.stretch.dir;
                  r && null === this.size && this.getStretchedVariant([0]),
                    (r && this.size < 0) ||
                      (t.prototype.computeBBox.call(this, e),
                      this.copySkewIC(e));
                }),
                (e.prototype.getAccentOffset = function () {
                  var t = c.BBox.empty();
                  return this.protoBBox(t), -t.w / 2;
                }),
                (e.prototype.getCenterOffset = function (e) {
                  return (
                    void 0 === e && (e = null),
                    e ||
                      ((e = c.BBox.empty()),
                      t.prototype.computeBBox.call(this, e)),
                    (e.h + e.d) / 2 + this.font.params.axis_height - e.h
                  );
                }),
                (e.prototype.getVariant = function () {
                  this.node.attributes.get("largeop")
                    ? (this.variant = this.node.attributes.get("displaystyle")
                        ? "-largeop"
                        : "-smallop")
                    : this.node.attributes.getExplicit("mathvariant") ||
                      !1 !== this.node.getProperty("pseudoscript")
                    ? t.prototype.getVariant.call(this)
                    : (this.variant = "-tex-variant");
                }),
                (e.prototype.canStretch = function (t) {
                  if (0 !== this.stretch.dir) return this.stretch.dir === t;
                  if (!this.node.attributes.get("stretchy")) return !1;
                  var e = this.getText();
                  if (1 !== Array.from(e).length) return !1;
                  var r = this.font.getDelimiter(e.codePointAt(0));
                  return (
                    (this.stretch = r && r.dir === t ? r : p.NOSTRETCH),
                    0 !== this.stretch.dir
                  );
                }),
                (e.prototype.getStretchedVariant = function (t, e) {
                  var r, o;
                  if ((void 0 === e && (e = !1), 0 !== this.stretch.dir)) {
                    var n = this.getWH(t),
                      i = this.getSize("minsize", 0),
                      s = this.getSize("maxsize", 1 / 0),
                      l = this.node.getProperty("mathaccent");
                    n = Math.max(i, Math.min(s, n));
                    var c = this.font.params.delimiterfactor / 1e3,
                      u = this.font.params.delimitershortfall,
                      p =
                        i || e
                          ? n
                          : l
                          ? Math.min(n / c, n + u)
                          : Math.max(n * c, n - u),
                      d = this.stretch,
                      f = d.c || this.getText().codePointAt(0),
                      m = 0;
                    if (d.sizes)
                      try {
                        for (
                          var y = h(d.sizes), v = y.next();
                          !v.done;
                          v = y.next()
                        ) {
                          if (v.value >= p)
                            return (
                              l && m && m--,
                              (this.variant = this.font.getSizeVariant(f, m)),
                              (this.size = m),
                              void (
                                d.schar &&
                                d.schar[m] &&
                                (this.stretch = a(a({}, this.stretch), {
                                  c: d.schar[m],
                                }))
                              )
                            );
                          m++;
                        }
                      } catch (t) {
                        r = { error: t };
                      } finally {
                        try {
                          v && !v.done && (o = y.return) && o.call(y);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                    d.stretch
                      ? ((this.size = -1),
                        this.invalidateBBox(),
                        this.getStretchBBox(
                          t,
                          this.checkExtendedHeight(n, d),
                          d
                        ))
                      : ((this.variant = this.font.getSizeVariant(f, m - 1)),
                        (this.size = m - 1));
                  }
                }),
                (e.prototype.getSize = function (t, e) {
                  var r = this.node.attributes;
                  return r.isSet(t) && (e = this.length2em(r.get(t), 1, 1)), e;
                }),
                (e.prototype.getWH = function (t) {
                  if (0 === t.length) return 0;
                  if (1 === t.length) return t[0];
                  var e = s(t, 2),
                    r = e[0],
                    o = e[1],
                    n = this.font.params.axis_height;
                  return this.node.attributes.get("symmetric")
                    ? 2 * Math.max(r - n, o + n)
                    : r + o;
                }),
                (e.prototype.getStretchBBox = function (t, e, r) {
                  var o;
                  r.hasOwnProperty("min") && r.min > e && (e = r.min);
                  var n = s(r.HDW, 3),
                    i = n[0],
                    a = n[1],
                    l = n[2];
                  1 === this.stretch.dir
                    ? ((i = (o = s(this.getBaseline(t, e, r), 2))[0]),
                      (a = o[1]))
                    : (l = e),
                    (this.bbox.h = i),
                    (this.bbox.d = a),
                    (this.bbox.w = l);
                }),
                (e.prototype.getBaseline = function (t, e, r) {
                  var o = 2 === t.length && t[0] + t[1] === e,
                    n = this.node.attributes.get("symmetric"),
                    i = s(o ? t : [e, 0], 2),
                    a = i[0],
                    l = i[1],
                    h = s([a + l, 0], 2),
                    c = h[0],
                    u = h[1];
                  if (n) {
                    var p = this.font.params.axis_height;
                    o && (c = 2 * Math.max(a - p, l + p)), (u = c / 2 - p);
                  } else if (o) u = l;
                  else {
                    var d = s(r.HDW || [0.75, 0.25], 2),
                      f = d[0],
                      m = d[1];
                    u = m * (c / (f + m));
                  }
                  return [c - u, u];
                }),
                (e.prototype.checkExtendedHeight = function (t, e) {
                  if (e.fullExt) {
                    var r = s(e.fullExt, 2),
                      o = r[0],
                      n = r[1];
                    t = n + Math.ceil(Math.max(0, t - n) / o) * o;
                  }
                  return t;
                }),
                (e.prototype.remapChars = function (t) {
                  var e = this.node.getProperty("primes");
                  if (e) return u.unicodeChars(e);
                  if (1 === t.length) {
                    var r = this.node.coreParent().parent,
                      o = this.isAccent && !r.isKind("mrow") ? "accent" : "mo",
                      n = this.font.getRemappedChar(o, t[0]);
                    n && (t = this.unicodeChars(n, this.variant));
                  }
                  return t;
                }),
                e
              );
            })(t);
          });
      },
      7481: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMpaddedMixin = void 0),
          (e.CommonMpaddedMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                (e.prototype.getDimens = function () {
                  var t = this.node.attributes.getList(
                      "width",
                      "height",
                      "depth",
                      "lspace",
                      "voffset"
                    ),
                    e = this.childNodes[0].getBBox(),
                    r = e.w,
                    o = e.h,
                    n = e.d,
                    i = r,
                    a = o,
                    s = n,
                    l = 0,
                    h = 0,
                    c = 0;
                  "" !== t.width && (r = this.dimen(t.width, e, "w", 0)),
                    "" !== t.height && (o = this.dimen(t.height, e, "h", 0)),
                    "" !== t.depth && (n = this.dimen(t.depth, e, "d", 0)),
                    "" !== t.voffset && (h = this.dimen(t.voffset, e)),
                    "" !== t.lspace && (l = this.dimen(t.lspace, e));
                  var u = this.node.attributes.get("data-align");
                  return (
                    u && (c = this.getAlignX(r, e, u)),
                    [a, s, i, o - a, n - s, r - i, l, h, c]
                  );
                }),
                (e.prototype.dimen = function (t, e, r, o) {
                  void 0 === r && (r = ""), void 0 === o && (o = null);
                  var n = (t = String(t)).match(/width|height|depth/),
                    i = n ? e[n[0].charAt(0)] : r ? e[r] : 0,
                    a = this.length2em(t, i) || 0;
                  return (
                    t.match(/^[-+]/) && r && (a += i),
                    null != o && (a = Math.max(o, a)),
                    a
                  );
                }),
                (e.prototype.computeBBox = function (t, e) {
                  void 0 === e && (e = !1);
                  var r = n(this.getDimens(), 6),
                    o = r[0],
                    i = r[1],
                    a = r[2],
                    s = r[3],
                    l = r[4],
                    h = r[5];
                  (t.w = a + h),
                    (t.h = o + s),
                    (t.d = i + l),
                    this.setChildPWidths(e, t.w);
                }),
                (e.prototype.getWrapWidth = function (t) {
                  return this.getBBox().w;
                }),
                (e.prototype.getChildAlign = function (t) {
                  return this.node.attributes.get("data-align") || "left";
                }),
                e
              );
            })(t);
          });
      },
      5997: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMrootMixin = void 0),
          (e.CommonMrootMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "surd", {
                  get: function () {
                    return 2;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "root", {
                  get: function () {
                    return 1;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.combineRootBBox = function (t, e, r) {
                  var o = this.childNodes[this.root].getBBox(),
                    n = this.getRootDimens(e, r)[1];
                  t.combine(o, 0, n);
                }),
                (e.prototype.getRootDimens = function (t, e) {
                  var r = this.childNodes[this.surd],
                    o = this.childNodes[this.root].getBBox(),
                    n = (r.size < 0 ? 0.5 : 0.6) * t.w,
                    i = o.w,
                    a = o.rscale,
                    s = Math.max(i, n / a),
                    l = Math.max(0, s - i);
                  return [s * a - n, this.rootHeight(o, t, r.size, e), l];
                }),
                (e.prototype.rootHeight = function (t, e, r, o) {
                  var n = e.h + e.d;
                  return (
                    (r < 0 ? 1.9 : 0.55 * n) -
                    (n - o) +
                    Math.max(0, t.d * t.rscale)
                  );
                }),
                e
              );
            })(t);
          });
      },
      9323: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          s =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonInferredMrowMixin = e.CommonMrowMixin = void 0);
        var l = r(3717);
        (e.CommonMrowMixin = function (t) {
          return (function (t) {
            function e() {
              for (var e, r, o = [], n = 0; n < arguments.length; n++)
                o[n] = arguments[n];
              var h = t.apply(this, a([], i(o))) || this;
              h.stretchChildren();
              try {
                for (
                  var c = s(h.childNodes), u = c.next();
                  !u.done;
                  u = c.next()
                ) {
                  var p = u.value;
                  if (p.bbox.pwidth) {
                    h.bbox.pwidth = l.BBox.fullWidth;
                    break;
                  }
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  u && !u.done && (r = c.return) && r.call(c);
                } finally {
                  if (e) throw e.error;
                }
              }
              return h;
            }
            return (
              n(e, t),
              Object.defineProperty(e.prototype, "fixesPWidth", {
                get: function () {
                  return !1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.stretchChildren = function () {
                var t,
                  e,
                  r,
                  o,
                  n,
                  i,
                  a = [];
                try {
                  for (
                    var l = s(this.childNodes), h = l.next();
                    !h.done;
                    h = l.next()
                  ) {
                    (C = h.value).canStretch(1) && a.push(C);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    h && !h.done && (e = l.return) && e.call(l);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                var c = a.length,
                  u = this.childNodes.length;
                if (c && u > 1) {
                  var p = 0,
                    d = 0,
                    f = c > 1 && c === u;
                  try {
                    for (
                      var m = s(this.childNodes), y = m.next();
                      !y.done;
                      y = m.next()
                    ) {
                      var v = 0 === (C = y.value).stretch.dir;
                      if (f || v) {
                        var b = C.getBBox(v),
                          x = b.h,
                          g = b.d,
                          M = b.rscale;
                        (x *= M) > p && (p = x), (g *= M) > d && (d = g);
                      }
                    }
                  } catch (t) {
                    r = { error: t };
                  } finally {
                    try {
                      y && !y.done && (o = m.return) && o.call(m);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                  try {
                    for (var _ = s(a), w = _.next(); !w.done; w = _.next()) {
                      var C;
                      (C = w.value).coreMO().getStretchedVariant([p, d]);
                    }
                  } catch (t) {
                    n = { error: t };
                  } finally {
                    try {
                      w && !w.done && (i = _.return) && i.call(_);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }
              }),
              e
            );
          })(t);
        }),
          (e.CommonInferredMrowMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                n(e, t),
                (e.prototype.getScale = function () {
                  (this.bbox.scale = this.parent.bbox.scale),
                    (this.bbox.rscale = 1);
                }),
                e
              );
            })(t);
          });
      },
      6920: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMsMixin = void 0),
          (e.CommonMsMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, i([], n(e))) || this,
                  a = o.node.attributes,
                  s = a.getList("lquote", "rquote");
                return (
                  "monospace" !== o.variant &&
                    (a.isSet("lquote") ||
                      '"' !== s.lquote ||
                      (s.lquote = "\u201c"),
                    a.isSet("rquote") ||
                      '"' !== s.rquote ||
                      (s.rquote = "\u201d")),
                  o.childNodes.unshift(o.createText(s.lquote)),
                  o.childNodes.push(o.createText(s.rquote)),
                  o
                );
              }
              return (
                o(e, t),
                (e.prototype.createText = function (t) {
                  var e = this.wrap(this.mmlText(t));
                  return (e.parent = this), e;
                }),
                e
              );
            })(t);
          });
      },
      37: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMspaceMixin = void 0),
          (e.CommonMspaceMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                (e.prototype.computeBBox = function (t, e) {
                  void 0 === e && (e = !1);
                  var r = this.node.attributes;
                  (t.w = this.length2em(r.get("width"), 0)),
                    (t.h = this.length2em(r.get("height"), 0)),
                    (t.d = this.length2em(r.get("depth"), 0));
                }),
                (e.prototype.handleVariant = function () {}),
                e
              );
            })(t);
          });
      },
      222: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMsqrtMixin = void 0);
        var s = r(3717);
        e.CommonMsqrtMixin = function (t) {
          return (function (t) {
            function e() {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              var o = t.apply(this, a([], i(e))) || this,
                n = o.createMo("\u221a");
              n.canStretch(1);
              var s = o.childNodes[o.base].getBBox(),
                l = s.h,
                h = s.d,
                c = o.font.params.rule_thickness,
                u = o.node.attributes.get("displaystyle")
                  ? o.font.params.x_height
                  : c;
              return (
                (o.surdH = l + h + 2 * c + u / 4),
                n.getStretchedVariant([o.surdH - h, h], !0),
                o
              );
            }
            return (
              n(e, t),
              Object.defineProperty(e.prototype, "base", {
                get: function () {
                  return 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "surd", {
                get: function () {
                  return 1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "root", {
                get: function () {
                  return null;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.createMo = function (e) {
                var r = t.prototype.createMo.call(this, e);
                return this.childNodes.push(r), r;
              }),
              (e.prototype.computeBBox = function (t, e) {
                void 0 === e && (e = !1);
                var r = this.childNodes[this.surd].getBBox(),
                  o = new s.BBox(this.childNodes[this.base].getBBox()),
                  n = this.getPQ(r)[1],
                  a = this.font.params.rule_thickness,
                  l = o.h + n + a,
                  h = i(this.getRootDimens(r, l), 1)[0];
                (t.h = l + a),
                  this.combineRootBBox(t, r, l),
                  t.combine(r, h, l - r.h),
                  t.combine(o, h + r.w, 0),
                  t.clean(),
                  this.setChildPWidths(e);
              }),
              (e.prototype.combineRootBBox = function (t, e, r) {}),
              (e.prototype.getPQ = function (t) {
                var e = this.font.params.rule_thickness,
                  r = this.node.attributes.get("displaystyle")
                    ? this.font.params.x_height
                    : e;
                return [
                  r,
                  t.h + t.d > this.surdH
                    ? (t.h + t.d - (this.surdH - 2 * e - r / 2)) / 2
                    : e + r / 4,
                ];
              }),
              (e.prototype.getRootDimens = function (t, e) {
                return [0, 0, 0, 0];
              }),
              e
            );
          })(t);
        };
      },
      3069: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMsubsupMixin =
            e.CommonMsupMixin =
            e.CommonMsubMixin =
              void 0),
          (e.CommonMsubMixin = function (t) {
            var e;
            return (
              ((e = (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  o(e, t),
                  Object.defineProperty(e.prototype, "scriptChild", {
                    get: function () {
                      return this.childNodes[this.node.sub];
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.getOffset = function () {
                    return [0, -this.getV()];
                  }),
                  e
                );
              })(t)).useIC = !1),
              e
            );
          }),
          (e.CommonMsupMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "scriptChild", {
                  get: function () {
                    return this.childNodes[this.node.sup];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.getOffset = function () {
                  return [
                    this.getAdjustedIc() -
                      (this.baseRemoveIc ? 0 : this.baseIc),
                    this.getU(),
                  ];
                }),
                e
              );
            })(t);
          }),
          (e.CommonMsubsupMixin = function (t) {
            var e;
            return (
              ((e = (function (t) {
                function e() {
                  var e = (null !== t && t.apply(this, arguments)) || this;
                  return (e.UVQ = null), e;
                }
                return (
                  o(e, t),
                  Object.defineProperty(e.prototype, "subChild", {
                    get: function () {
                      return this.childNodes[this.node.sub];
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "supChild", {
                    get: function () {
                      return this.childNodes[this.node.sup];
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.computeBBox = function (t, e) {
                    void 0 === e && (e = !1);
                    var r = this.baseChild.getBBox(),
                      o = n(
                        [this.subChild.getBBox(), this.supChild.getBBox()],
                        2
                      ),
                      i = o[0],
                      a = o[1];
                    t.empty(), t.append(r);
                    var s = this.getBaseWidth(),
                      l = this.getAdjustedIc(),
                      h = n(this.getUVQ(), 2),
                      c = h[0],
                      u = h[1];
                    t.combine(i, s, u),
                      t.combine(a, s + l, c),
                      (t.w += this.font.params.scriptspace),
                      t.clean(),
                      this.setChildPWidths(e);
                  }),
                  (e.prototype.getUVQ = function (t, e) {
                    void 0 === t && (t = this.subChild.getBBox()),
                      void 0 === e && (e = this.supChild.getBBox());
                    var r = this.baseCore.getBBox();
                    if (this.UVQ) return this.UVQ;
                    var o = this.font.params,
                      i = 3 * o.rule_thickness,
                      a = this.length2em(
                        this.node.attributes.get("subscriptshift"),
                        o.sub2
                      ),
                      s = this.baseCharZero(
                        r.d * this.baseScale + o.sub_drop * t.rscale
                      ),
                      l = n([this.getU(), Math.max(s, a)], 2),
                      h = l[0],
                      c = l[1],
                      u = h - e.d * e.rscale - (t.h * t.rscale - c);
                    if (u < i) {
                      c += i - u;
                      var p = 0.8 * o.x_height - (h - e.d * e.rscale);
                      p > 0 && ((h += p), (c -= p));
                    }
                    return (
                      (h = Math.max(
                        this.length2em(
                          this.node.attributes.get("superscriptshift"),
                          h
                        ),
                        h
                      )),
                      (c = Math.max(
                        this.length2em(
                          this.node.attributes.get("subscriptshift"),
                          c
                        ),
                        c
                      )),
                      (u = h - e.d * e.rscale - (t.h * t.rscale - c)),
                      (this.UVQ = [h, -c, u]),
                      this.UVQ
                    );
                  }),
                  e
                );
              })(t)).useIC = !1),
              e
            );
          });
      },
      8589: function (t, e, r) {
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
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          s =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMtableMixin = void 0);
        var l = r(3717),
          h = r(6720),
          c = r(1490);
        e.CommonMtableMixin = function (t) {
          return (function (t) {
            function e() {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              var o = t.apply(this, a([], i(e))) || this;
              (o.numCols = 0),
                (o.numRows = 0),
                (o.data = null),
                (o.pwidthCells = []),
                (o.pWidth = 0),
                (o.numCols = c.max(
                  o.tableRows.map(function (t) {
                    return t.numCells;
                  })
                )),
                (o.numRows = o.childNodes.length),
                (o.hasLabels = o.childNodes.reduce(function (t, e) {
                  return t || e.node.isKind("mlabeledtr");
                }, !1)),
                o.findContainer(),
                (o.isTop =
                  !o.container ||
                  (o.container.node.isKind("math") && !o.container.parent)),
                o.isTop && (o.jax.table = o),
                o.getPercentageWidth();
              var n = o.node.attributes;
              return (
                (o.frame = "none" !== n.get("frame")),
                (o.fLine = o.frame && n.get("frame") ? 0.07 : 0),
                (o.fSpace = o.frame
                  ? o.convertLengths(o.getAttributeArray("framespacing"))
                  : [0, 0]),
                (o.cSpace = o.convertLengths(
                  o.getColumnAttributes("columnspacing")
                )),
                (o.rSpace = o.convertLengths(o.getRowAttributes("rowspacing"))),
                (o.cLines = o
                  .getColumnAttributes("columnlines")
                  .map(function (t) {
                    return "none" === t ? 0 : 0.07;
                  })),
                (o.rLines = o.getRowAttributes("rowlines").map(function (t) {
                  return "none" === t ? 0 : 0.07;
                })),
                (o.cWidths = o.getColumnWidths()),
                o.stretchRows(),
                o.stretchColumns(),
                o
              );
            }
            return (
              n(e, t),
              Object.defineProperty(e.prototype, "tableRows", {
                get: function () {
                  return this.childNodes;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.findContainer = function () {
                for (
                  var t = this, e = t.parent;
                  e && (e.node.notParent || e.node.isKind("mrow"));

                )
                  (t = e), (e = e.parent);
                (this.container = e),
                  (this.containerI = t.node.childPosition());
              }),
              (e.prototype.getPercentageWidth = function () {
                if (this.hasLabels) this.bbox.pwidth = l.BBox.fullWidth;
                else {
                  var t = this.node.attributes.get("width");
                  h.isPercent(t) && (this.bbox.pwidth = t);
                }
              }),
              (e.prototype.stretchRows = function () {
                for (
                  var t = this.node.attributes.get("equalrows"),
                    e = t ? this.getEqualRowHeight() : 0,
                    r = t ? this.getTableData() : { H: [0], D: [0] },
                    o = r.H,
                    n = r.D,
                    i = this.tableRows,
                    a = 0;
                  a < this.numRows;
                  a++
                ) {
                  var s = t
                    ? [(e + o[a] - n[a]) / 2, (e - o[a] + n[a]) / 2]
                    : null;
                  i[a].stretchChildren(s);
                }
              }),
              (e.prototype.stretchColumns = function () {
                for (var t = 0; t < this.numCols; t++) {
                  var e =
                    "number" == typeof this.cWidths[t] ? this.cWidths[t] : null;
                  this.stretchColumn(t, e);
                }
              }),
              (e.prototype.stretchColumn = function (t, e) {
                var r,
                  o,
                  n,
                  i,
                  a,
                  l,
                  h = [];
                try {
                  for (
                    var c = s(this.tableRows), u = c.next();
                    !u.done;
                    u = c.next()
                  ) {
                    if ((v = u.value.getChild(t)))
                      0 === (_ = v.childNodes[0]).stretch.dir &&
                        _.canStretch(2) &&
                        h.push(_);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    u && !u.done && (o = c.return) && o.call(c);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                var p = h.length,
                  d = this.childNodes.length;
                if (p && d > 1) {
                  if (null === e) {
                    e = 0;
                    var f = p > 1 && p === d;
                    try {
                      for (
                        var m = s(this.tableRows), y = m.next();
                        !y.done;
                        y = m.next()
                      ) {
                        var v;
                        if ((v = y.value.getChild(t))) {
                          var b = 0 === (_ = v.childNodes[0]).stretch.dir;
                          if (f || b) {
                            var x = _.getBBox(b).w;
                            x > e && (e = x);
                          }
                        }
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        y && !y.done && (i = m.return) && i.call(m);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                  try {
                    for (var g = s(h), M = g.next(); !M.done; M = g.next()) {
                      var _;
                      (_ = M.value).coreMO().getStretchedVariant([e]);
                    }
                  } catch (t) {
                    a = { error: t };
                  } finally {
                    try {
                      M && !M.done && (l = g.return) && l.call(g);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                }
              }),
              (e.prototype.getTableData = function () {
                if (this.data) return this.data;
                for (
                  var t = new Array(this.numRows).fill(0),
                    e = new Array(this.numRows).fill(0),
                    r = new Array(this.numCols).fill(0),
                    o = new Array(this.numRows),
                    n = new Array(this.numRows),
                    i = [0],
                    a = this.tableRows,
                    s = 0;
                  s < a.length;
                  s++
                ) {
                  for (
                    var l = 0,
                      h = a[s],
                      c = h.node.attributes.get("rowalign"),
                      u = 0;
                    u < h.numCells;
                    u++
                  ) {
                    var p = h.getChild(u);
                    (l = this.updateHDW(p, u, s, c, t, e, r, l)),
                      this.recordPWidthCell(p, u);
                  }
                  (o[s] = t[s]),
                    (n[s] = e[s]),
                    h.labeled &&
                      (l = this.updateHDW(
                        h.childNodes[0],
                        0,
                        s,
                        c,
                        t,
                        e,
                        i,
                        l
                      )),
                    this.extendHD(s, t, e, l),
                    this.extendHD(s, o, n, l);
                }
                var d = i[0];
                return (
                  (this.data = { H: t, D: e, W: r, NH: o, ND: n, L: d }),
                  this.data
                );
              }),
              (e.prototype.updateHDW = function (t, e, r, o, n, i, a, s) {
                var l = t.getBBox(),
                  h = l.h,
                  c = l.d,
                  u = l.w,
                  p = t.parent.bbox.rscale;
                1 !== t.parent.bbox.rscale && ((h *= p), (c *= p), (u *= p)),
                  this.node.getProperty("useHeight") &&
                    (h < 0.75 && (h = 0.75), c < 0.25 && (c = 0.25));
                var d = 0;
                return (
                  "baseline" !== (o = t.node.attributes.get("rowalign") || o) &&
                    "axis" !== o &&
                    ((d = h + c), (h = c = 0)),
                  h > n[r] && (n[r] = h),
                  c > i[r] && (i[r] = c),
                  d > s && (s = d),
                  a && u > a[e] && (a[e] = u),
                  s
                );
              }),
              (e.prototype.extendHD = function (t, e, r, o) {
                var n = (o - (e[t] + r[t])) / 2;
                n < 1e-5 || ((e[t] += n), (r[t] += n));
              }),
              (e.prototype.recordPWidthCell = function (t, e) {
                t.childNodes[0] &&
                  t.childNodes[0].getBBox().pwidth &&
                  this.pwidthCells.push([t, e]);
              }),
              (e.prototype.computeBBox = function (t, e) {
                void 0 === e && (e = !1);
                var r,
                  o,
                  n = this.getTableData(),
                  a = n.H,
                  s = n.D;
                if (this.node.attributes.get("equalrows")) {
                  var l = this.getEqualRowHeight();
                  r =
                    c.sum([].concat(this.rLines, this.rSpace)) +
                    l * this.numRows;
                } else r = c.sum(a.concat(s, this.rLines, this.rSpace));
                r += 2 * (this.fLine + this.fSpace[1]);
                var u = this.getComputedWidths();
                o =
                  c.sum(u.concat(this.cLines, this.cSpace)) +
                  2 * (this.fLine + this.fSpace[0]);
                var p = this.node.attributes.get("width");
                "auto" !== p &&
                  (o = Math.max(this.length2em(p, 0) + 2 * this.fLine, o));
                var d = i(this.getBBoxHD(r), 2),
                  f = d[0],
                  m = d[1];
                (t.h = f), (t.d = m), (t.w = o);
                var y = i(this.getBBoxLR(), 2),
                  v = y[0],
                  b = y[1];
                (t.L = v), (t.R = b), h.isPercent(p) || this.setColumnPWidths();
              }),
              (e.prototype.setChildPWidths = function (t, e, r) {
                var o = this.node.attributes.get("width");
                if (!h.isPercent(o)) return !1;
                this.hasLabels ||
                  ((this.bbox.pwidth = ""), (this.container.bbox.pwidth = ""));
                var n = this.bbox,
                  i = n.w,
                  a = n.L,
                  s = n.R,
                  l = this.node.attributes.get("data-width-includes-label"),
                  u =
                    Math.max(i, this.length2em(o, Math.max(e, a + i + s))) -
                    (l ? a + s : 0),
                  p = this.node.attributes.get("equalcolumns")
                    ? Array(this.numCols).fill(
                        this.percent(1 / Math.max(1, this.numCols))
                      )
                    : this.getColumnAttributes("columnwidth", 0);
                this.cWidths = this.getColumnWidthsFixed(p, u);
                var d = this.getComputedWidths();
                return (
                  (this.pWidth =
                    c.sum(d.concat(this.cLines, this.cSpace)) +
                    2 * (this.fLine + this.fSpace[0])),
                  this.isTop && (this.bbox.w = this.pWidth),
                  this.setColumnPWidths(),
                  this.pWidth !== i && this.parent.invalidateBBox(),
                  this.pWidth !== i
                );
              }),
              (e.prototype.setColumnPWidths = function () {
                var t,
                  e,
                  r = this.cWidths;
                try {
                  for (
                    var o = s(this.pwidthCells), n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var a = i(n.value, 2),
                      l = a[0],
                      h = a[1];
                    l.setChildPWidths(!1, r[h]) &&
                      (l.invalidateBBox(), l.getBBox());
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.prototype.getBBoxHD = function (t) {
                var e = i(this.getAlignmentRow(), 2),
                  r = e[0],
                  o = e[1];
                if (null === o) {
                  var n = this.font.params.axis_height,
                    a = t / 2;
                  return (
                    {
                      top: [0, t],
                      center: [a, a],
                      bottom: [t, 0],
                      baseline: [a, a],
                      axis: [a + n, a - n],
                    }[r] || [a, a]
                  );
                }
                var s = this.getVerticalPosition(o, r);
                return [s, t - s];
              }),
              (e.prototype.getBBoxLR = function () {
                if (this.hasLabels) {
                  var t = this.node.attributes,
                    e = t.get("side"),
                    r = i(this.getPadAlignShift(e), 2),
                    o = r[0],
                    n = r[1],
                    a = this.hasLabels && !!t.get("data-width-includes-label");
                  return (
                    a && this.frame && this.fSpace[0] && (o -= this.fSpace[0]),
                    "center" !== n || a
                      ? "left" === e
                        ? [o, 0]
                        : [0, o]
                      : [o, o]
                  );
                }
                return [0, 0];
              }),
              (e.prototype.getPadAlignShift = function (t) {
                var e =
                    this.getTableData().L +
                    this.length2em(this.node.attributes.get("minlabelspacing")),
                  r = i(
                    null == this.styles
                      ? ["", ""]
                      : [
                          this.styles.get("padding-left"),
                          this.styles.get("padding-right"),
                        ],
                    2
                  ),
                  o = r[0],
                  n = r[1];
                (o || n) &&
                  (e = Math.max(
                    e,
                    this.length2em(o || "0"),
                    this.length2em(n || "0")
                  ));
                var a = i(this.getAlignShift(), 2),
                  s = a[0],
                  l = a[1];
                return (
                  s === t &&
                    (l =
                      "left" === t ? Math.max(e, l) - e : Math.min(-e, l) + e),
                  [e, s, l]
                );
              }),
              (e.prototype.getAlignShift = function () {
                return this.isTop
                  ? t.prototype.getAlignShift.call(this)
                  : [this.container.getChildAlign(this.containerI), 0];
              }),
              (e.prototype.getWidth = function () {
                return this.pWidth || this.getBBox().w;
              }),
              (e.prototype.getEqualRowHeight = function () {
                var t = this.getTableData(),
                  e = t.H,
                  r = t.D,
                  o = Array.from(e.keys()).map(function (t) {
                    return e[t] + r[t];
                  });
                return Math.max.apply(Math, o);
              }),
              (e.prototype.getComputedWidths = function () {
                var t = this,
                  e = this.getTableData().W,
                  r = Array.from(e.keys()).map(function (r) {
                    return "number" == typeof t.cWidths[r]
                      ? t.cWidths[r]
                      : e[r];
                  });
                return (
                  this.node.attributes.get("equalcolumns") &&
                    (r = Array(r.length).fill(c.max(r))),
                  r
                );
              }),
              (e.prototype.getColumnWidths = function () {
                var t = this.node.attributes.get("width");
                if (this.node.attributes.get("equalcolumns"))
                  return this.getEqualColumns(t);
                var e = this.getColumnAttributes("columnwidth", 0);
                return "auto" === t
                  ? this.getColumnWidthsAuto(e)
                  : h.isPercent(t)
                  ? this.getColumnWidthsPercent(e)
                  : this.getColumnWidthsFixed(e, this.length2em(t));
              }),
              (e.prototype.getEqualColumns = function (t) {
                var e,
                  r = Math.max(1, this.numCols);
                if ("auto" === t) {
                  var o = this.getTableData().W;
                  e = c.max(o);
                } else if (h.isPercent(t)) e = this.percent(1 / r);
                else {
                  var n =
                    c.sum([].concat(this.cLines, this.cSpace)) +
                    2 * this.fSpace[0];
                  e = Math.max(0, this.length2em(t) - n) / r;
                }
                return Array(this.numCols).fill(e);
              }),
              (e.prototype.getColumnWidthsAuto = function (t) {
                var e = this;
                return t.map(function (t) {
                  return "auto" === t || "fit" === t
                    ? null
                    : h.isPercent(t)
                    ? t
                    : e.length2em(t);
                });
              }),
              (e.prototype.getColumnWidthsPercent = function (t) {
                var e = this,
                  r = t.indexOf("fit") >= 0,
                  o = (r ? this.getTableData() : { W: null }).W;
                return Array.from(t.keys()).map(function (n) {
                  var i = t[n];
                  return "fit" === i
                    ? null
                    : "auto" === i
                    ? r
                      ? o[n]
                      : null
                    : h.isPercent(i)
                    ? i
                    : e.length2em(i);
                });
              }),
              (e.prototype.getColumnWidthsFixed = function (t, e) {
                var r = this,
                  o = Array.from(t.keys()),
                  n = o.filter(function (e) {
                    return "fit" === t[e];
                  }),
                  i = o.filter(function (e) {
                    return "auto" === t[e];
                  }),
                  a = n.length || i.length,
                  s = (a ? this.getTableData() : { W: null }).W,
                  l =
                    e -
                    c.sum([].concat(this.cLines, this.cSpace)) -
                    2 * this.fSpace[0],
                  h = l;
                o.forEach(function (e) {
                  var o = t[e];
                  h -= "fit" === o || "auto" === o ? s[e] : r.length2em(o, l);
                });
                var u = a && h > 0 ? h / a : 0;
                return o.map(function (e) {
                  var o = t[e];
                  return "fit" === o
                    ? s[e] + u
                    : "auto" === o
                    ? s[e] + (0 === n.length ? u : 0)
                    : r.length2em(o, l);
                });
              }),
              (e.prototype.getVerticalPosition = function (t, e) {
                for (
                  var r = this.node.attributes.get("equalrows"),
                    o = this.getTableData(),
                    n = o.H,
                    a = o.D,
                    s = r ? this.getEqualRowHeight() : 0,
                    l = this.getRowHalfSpacing(),
                    h = this.fLine,
                    c = 0;
                  c < t;
                  c++
                )
                  h += l[c] + (r ? s : n[c] + a[c]) + l[c + 1] + this.rLines[c];
                var u = i(
                    r
                      ? [(s + n[t] - a[t]) / 2, (s - n[t] + a[t]) / 2]
                      : [n[t], a[t]],
                    2
                  ),
                  p = u[0],
                  d = u[1];
                return (h +=
                  {
                    top: 0,
                    center: l[t] + (p + d) / 2,
                    bottom: l[t] + p + d + l[t + 1],
                    baseline: l[t] + p,
                    axis: l[t] + p - 0.25,
                  }[e] || 0);
              }),
              (e.prototype.getEmHalfSpacing = function (t, e, r) {
                void 0 === r && (r = 1);
                var o = this.em(t * r),
                  n = this.addEm(e, 2 / r);
                return n.unshift(o), n.push(o), n;
              }),
              (e.prototype.getRowHalfSpacing = function () {
                var t = this.rSpace.map(function (t) {
                  return t / 2;
                });
                return t.unshift(this.fSpace[1]), t.push(this.fSpace[1]), t;
              }),
              (e.prototype.getColumnHalfSpacing = function () {
                var t = this.cSpace.map(function (t) {
                  return t / 2;
                });
                return t.unshift(this.fSpace[0]), t.push(this.fSpace[0]), t;
              }),
              (e.prototype.getAlignmentRow = function () {
                var t = i(h.split(this.node.attributes.get("align")), 2),
                  e = t[0],
                  r = t[1];
                if (null == r) return [e, null];
                var o = parseInt(r);
                return (
                  o < 0 && (o += this.numRows + 1),
                  [e, o < 1 || o > this.numRows ? null : o - 1]
                );
              }),
              (e.prototype.getColumnAttributes = function (t, e) {
                void 0 === e && (e = 1);
                var r = this.numCols - e,
                  o = this.getAttributeArray(t);
                if (0 === o.length) return null;
                for (; o.length < r; ) o.push(o[o.length - 1]);
                return o.length > r && o.splice(r), o;
              }),
              (e.prototype.getRowAttributes = function (t, e) {
                void 0 === e && (e = 1);
                var r = this.numRows - e,
                  o = this.getAttributeArray(t);
                if (0 === o.length) return null;
                for (; o.length < r; ) o.push(o[o.length - 1]);
                return o.length > r && o.splice(r), o;
              }),
              (e.prototype.getAttributeArray = function (t) {
                var e = this.node.attributes.get(t);
                return e ? h.split(e) : [this.node.attributes.getDefault(t)];
              }),
              (e.prototype.addEm = function (t, e) {
                var r = this;
                return (
                  void 0 === e && (e = 1),
                  t
                    ? t.map(function (t) {
                        return r.em(t / e);
                      })
                    : null
                );
              }),
              (e.prototype.convertLengths = function (t) {
                var e = this;
                return t
                  ? t.map(function (t) {
                      return e.length2em(t);
                    })
                  : null;
              }),
              e
            );
          })(t);
        };
      },
      7805: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMtdMixin = void 0),
          (e.CommonMtdMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "fixesPWidth", {
                  get: function () {
                    return !1;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.invalidateBBox = function () {
                  this.bboxComputed = !1;
                }),
                (e.prototype.getWrapWidth = function (t) {
                  var e = this.parent.parent,
                    r = this.parent,
                    o = this.node.childPosition() - (r.labeled ? 1 : 0);
                  return "number" == typeof e.cWidths[o]
                    ? e.cWidths[o]
                    : e.getTableData().W[o];
                }),
                (e.prototype.getChildAlign = function (t) {
                  return this.node.attributes.get("columnalign");
                }),
                e
              );
            })(t);
          });
      },
      8325: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMtextMixin = void 0),
          (e.CommonMtextMixin = function (t) {
            var e;
            return (
              ((e = (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  o(e, t),
                  (e.prototype.getVariant = function () {
                    var e = this.jax.options,
                      r = this.jax.math.outputData,
                      o =
                        (!!r.merrorFamily || !!e.merrorFont) &&
                        this.node.Parent.isKind("merror");
                    if (r.mtextFamily || e.mtextFont || o) {
                      var n = this.node.attributes.get("mathvariant"),
                        i =
                          this.constructor.INHERITFONTS[n] ||
                          this.jax.font.getCssFont(n),
                        a =
                          i[0] ||
                          (o
                            ? r.merrorFamily || e.merrorFont
                            : r.mtextFamily || e.mtextFont);
                      this.variant = this.explicitVariant(
                        a,
                        i[2] ? "bold" : "",
                        i[1] ? "italic" : ""
                      );
                    } else t.prototype.getVariant.call(this);
                  }),
                  e
                );
              })(t)).INHERITFONTS = {
                normal: ["", !1, !1],
                bold: ["", !1, !0],
                italic: ["", !0, !1],
                "bold-italic": ["", !0, !0],
              }),
              e
            );
          });
      },
      4818: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMlabeledtrMixin = e.CommonMtrMixin = void 0),
          (e.CommonMtrMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "fixesPWidth", {
                  get: function () {
                    return !1;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "numCells", {
                  get: function () {
                    return this.childNodes.length;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "labeled", {
                  get: function () {
                    return !1;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "tableCells", {
                  get: function () {
                    return this.childNodes;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.getChild = function (t) {
                  return this.childNodes[t];
                }),
                (e.prototype.getChildBBoxes = function () {
                  return this.childNodes.map(function (t) {
                    return t.getBBox();
                  });
                }),
                (e.prototype.stretchChildren = function (t) {
                  var e, r, o, i, a, s;
                  void 0 === t && (t = null);
                  var l = [],
                    h = this.labeled
                      ? this.childNodes.slice(1)
                      : this.childNodes;
                  try {
                    for (var c = n(h), u = c.next(); !u.done; u = c.next()) {
                      (j = u.value.childNodes[0]).canStretch(1) && l.push(j);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      u && !u.done && (r = c.return) && r.call(c);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  var p = l.length,
                    d = this.childNodes.length;
                  if (p && d > 1) {
                    if (null === t) {
                      var f = 0,
                        m = 0,
                        y = p > 1 && p === d;
                      try {
                        for (
                          var v = n(h), b = v.next();
                          !b.done;
                          b = v.next()
                        ) {
                          var x = 0 === (j = b.value.childNodes[0]).stretch.dir;
                          if (y || x) {
                            var g = j.getBBox(x),
                              M = g.h,
                              _ = g.d;
                            M > f && (f = M), _ > m && (m = _);
                          }
                        }
                      } catch (t) {
                        o = { error: t };
                      } finally {
                        try {
                          b && !b.done && (i = v.return) && i.call(v);
                        } finally {
                          if (o) throw o.error;
                        }
                      }
                      t = [f, m];
                    }
                    try {
                      for (var w = n(l), C = w.next(); !C.done; C = w.next()) {
                        var j;
                        (j = C.value).coreMO().getStretchedVariant(t);
                      }
                    } catch (t) {
                      a = { error: t };
                    } finally {
                      try {
                        C && !C.done && (s = w.return) && s.call(w);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                  }
                }),
                e
              );
            })(t);
          }),
          (e.CommonMlabeledtrMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "numCells", {
                  get: function () {
                    return Math.max(0, this.childNodes.length - 1);
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "labeled", {
                  get: function () {
                    return !0;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "tableCells", {
                  get: function () {
                    return this.childNodes.slice(1);
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.getChild = function (t) {
                  return this.childNodes[t + 1];
                }),
                (e.prototype.getChildBBoxes = function () {
                  return this.childNodes.slice(1).map(function (t) {
                    return t.getBBox();
                  });
                }),
                e
              );
            })(t);
          });
      },
      9690: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonMunderoverMixin =
            e.CommonMoverMixin =
            e.CommonMunderMixin =
              void 0),
          (e.CommonMunderMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, i([], n(e))) || this;
                return o.stretchChildren(), o;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "scriptChild", {
                  get: function () {
                    return this.childNodes[this.node.under];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.computeBBox = function (e, r) {
                  if ((void 0 === r && (r = !1), this.hasMovableLimits()))
                    t.prototype.computeBBox.call(this, e, r);
                  else {
                    e.empty();
                    var o = this.baseChild.getBBox(),
                      i = this.scriptChild.getBBox(),
                      a = this.getUnderKV(o, i)[1],
                      s = this.isLineBelow ? 0 : this.getDelta(!0),
                      l = n(this.getDeltaW([o, i], [0, -s]), 2),
                      h = l[0],
                      c = l[1];
                    e.combine(o, h, 0),
                      e.combine(i, c, a),
                      (e.d += this.font.params.big_op_spacing5),
                      e.clean(),
                      this.setChildPWidths(r);
                  }
                }),
                e
              );
            })(t);
          }),
          (e.CommonMoverMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, i([], n(e))) || this;
                return o.stretchChildren(), o;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "scriptChild", {
                  get: function () {
                    return this.childNodes[this.node.over];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.computeBBox = function (e) {
                  if (this.hasMovableLimits())
                    t.prototype.computeBBox.call(this, e);
                  else {
                    e.empty();
                    var r = this.baseChild.getBBox(),
                      o = this.scriptChild.getBBox(),
                      i = this.getOverKU(r, o)[1],
                      a = this.isLineAbove ? 0 : this.getDelta(),
                      s = n(this.getDeltaW([r, o], [0, a]), 2),
                      l = s[0],
                      h = s[1];
                    e.combine(r, l, 0),
                      e.combine(o, h, i),
                      (e.h += this.font.params.big_op_spacing5),
                      e.clean();
                  }
                }),
                e
              );
            })(t);
          }),
          (e.CommonMunderoverMixin = function (t) {
            return (function (t) {
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var o = t.apply(this, i([], n(e))) || this;
                return o.stretchChildren(), o;
              }
              return (
                o(e, t),
                Object.defineProperty(e.prototype, "underChild", {
                  get: function () {
                    return this.childNodes[this.node.under];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "overChild", {
                  get: function () {
                    return this.childNodes[this.node.over];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "subChild", {
                  get: function () {
                    return this.underChild;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "supChild", {
                  get: function () {
                    return this.overChild;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.computeBBox = function (e) {
                  if (this.hasMovableLimits())
                    t.prototype.computeBBox.call(this, e);
                  else {
                    e.empty();
                    var r = this.overChild.getBBox(),
                      o = this.baseChild.getBBox(),
                      i = this.underChild.getBBox(),
                      a = this.getOverKU(o, r)[1],
                      s = this.getUnderKV(o, i)[1],
                      l = this.getDelta(),
                      h = n(
                        this.getDeltaW(
                          [o, i, r],
                          [
                            0,
                            this.isLineBelow ? 0 : -l,
                            this.isLineAbove ? 0 : l,
                          ]
                        ),
                        3
                      ),
                      c = h[0],
                      u = h[1],
                      p = h[2];
                    e.combine(o, c, 0), e.combine(r, p, a), e.combine(i, u, s);
                    var d = this.font.params.big_op_spacing5;
                    (e.h += d), (e.d += d), e.clean();
                  }
                }),
                e
              );
            })(t);
          });
      },
      7091: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var o,
                n,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                  a.push(o.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, o = e.length, n = t.length; r < o; r++, n++)
                t[n] = e[r];
              return t;
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && o >= t.length && (t = void 0),
                      { value: t && t[o++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonScriptbaseMixin = void 0),
          (e.CommonScriptbaseMixin = function (t) {
            var e;
            return (
              ((e = (function (t) {
                function e() {
                  for (var e = [], r = 0; r < arguments.length; r++)
                    e[r] = arguments[r];
                  var o = t.apply(this, i([], n(e))) || this;
                  (o.baseScale = 1),
                    (o.baseIc = 0),
                    (o.baseRemoveIc = !1),
                    (o.baseIsChar = !1),
                    (o.baseHasAccentOver = null),
                    (o.baseHasAccentUnder = null),
                    (o.isLineAbove = !1),
                    (o.isLineBelow = !1),
                    (o.isMathAccent = !1);
                  var a = (o.baseCore = o.getBaseCore());
                  return a
                    ? (o.setBaseAccentsFor(a),
                      (o.baseScale = o.getBaseScale()),
                      (o.baseIc = o.getBaseIc()),
                      (o.baseIsChar = o.isCharBase()),
                      (o.isMathAccent =
                        o.baseIsChar &&
                        o.scriptChild &&
                        !!o.scriptChild
                          .coreMO()
                          .node.getProperty("mathaccent")),
                      o.checkLineAccents(),
                      (o.baseRemoveIc =
                        !o.isLineAbove &&
                        !o.isLineBelow &&
                        (!o.constructor.useIC || o.isMathAccent)),
                      o)
                    : o;
                }
                return (
                  o(e, t),
                  Object.defineProperty(e.prototype, "baseChild", {
                    get: function () {
                      return this.childNodes[this.node.base];
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "scriptChild", {
                    get: function () {
                      return this.childNodes[1];
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.getBaseCore = function () {
                    for (
                      var t = this.getSemanticBase() || this.childNodes[0];
                      t &&
                      ((1 === t.childNodes.length &&
                        (t.node.isKind("mrow") ||
                          t.node.isKind("TeXAtom") ||
                          t.node.isKind("mstyle") ||
                          t.node.isKind("mpadded") ||
                          t.node.isKind("mphantom") ||
                          t.node.isKind("semantics"))) ||
                        (t.node.isKind("munderover") && t.isMathAccent));

                    )
                      this.setBaseAccentsFor(t), (t = t.childNodes[0]);
                    return (
                      t ||
                        (this.baseHasAccentOver = this.baseHasAccentUnder = !1),
                      t || this.childNodes[0]
                    );
                  }),
                  (e.prototype.setBaseAccentsFor = function (t) {
                    t.node.isKind("munderover") &&
                      (null === this.baseHasAccentOver &&
                        (this.baseHasAccentOver =
                          !!t.node.attributes.get("accent")),
                      null === this.baseHasAccentUnder &&
                        (this.baseHasAccentUnder =
                          !!t.node.attributes.get("accentunder")));
                  }),
                  (e.prototype.getSemanticBase = function () {
                    var t = this.node.attributes.getExplicit(
                      "data-semantic-fencepointer"
                    );
                    return this.getBaseFence(this.baseChild, t);
                  }),
                  (e.prototype.getBaseFence = function (t, e) {
                    var r, o;
                    if (!t || !t.node.attributes || !e) return null;
                    if (t.node.attributes.getExplicit("data-semantic-id") === e)
                      return t;
                    try {
                      for (
                        var n = a(t.childNodes), i = n.next();
                        !i.done;
                        i = n.next()
                      ) {
                        var s = i.value,
                          l = this.getBaseFence(s, e);
                        if (l) return l;
                      }
                    } catch (t) {
                      r = { error: t };
                    } finally {
                      try {
                        i && !i.done && (o = n.return) && o.call(n);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    return null;
                  }),
                  (e.prototype.getBaseScale = function () {
                    for (var t = this.baseCore, e = 1; t && t !== this; ) {
                      (e *= t.getBBox().rscale), (t = t.parent);
                    }
                    return e;
                  }),
                  (e.prototype.getBaseIc = function () {
                    return this.baseCore.getBBox().ic * this.baseScale;
                  }),
                  (e.prototype.getAdjustedIc = function () {
                    var t = this.baseCore.getBBox();
                    return (t.ic ? 1.05 * t.ic + 0.05 : 0) * this.baseScale;
                  }),
                  (e.prototype.isCharBase = function () {
                    var t = this.baseCore;
                    return (
                      ((t.node.isKind("mo") && null === t.size) ||
                        t.node.isKind("mi") ||
                        t.node.isKind("mn")) &&
                      1 === t.bbox.rscale &&
                      1 === Array.from(t.getText()).length
                    );
                  }),
                  (e.prototype.checkLineAccents = function () {
                    if (this.node.isKind("munderover"))
                      if (this.node.isKind("mover"))
                        this.isLineAbove = this.isLineAccent(this.scriptChild);
                      else if (this.node.isKind("munder"))
                        this.isLineBelow = this.isLineAccent(this.scriptChild);
                      else {
                        (this.isLineAbove = this.isLineAccent(this.overChild)),
                          (this.isLineBelow = this.isLineAccent(
                            this.underChild
                          ));
                      }
                  }),
                  (e.prototype.isLineAccent = function (t) {
                    var e = t.coreMO().node;
                    return e.isToken && "\u2015" === e.getText();
                  }),
                  (e.prototype.getBaseWidth = function () {
                    var t = this.baseChild.getBBox();
                    return (
                      t.w * t.rscale -
                      (this.baseRemoveIc ? this.baseIc : 0) +
                      this.font.params.extra_ic
                    );
                  }),
                  (e.prototype.computeBBox = function (t, e) {
                    void 0 === e && (e = !1);
                    var r = this.getBaseWidth(),
                      o = n(this.getOffset(), 2),
                      i = o[0],
                      a = o[1];
                    t.append(this.baseChild.getBBox()),
                      t.combine(this.scriptChild.getBBox(), r + i, a),
                      (t.w += this.font.params.scriptspace),
                      t.clean(),
                      this.setChildPWidths(e);
                  }),
                  (e.prototype.getOffset = function () {
                    return [0, 0];
                  }),
                  (e.prototype.baseCharZero = function (t) {
                    var e = !!this.baseCore.node.attributes.get("largeop"),
                      r = this.baseScale;
                    return this.baseIsChar && !e && 1 === r ? 0 : t;
                  }),
                  (e.prototype.getV = function () {
                    var t = this.baseCore.getBBox(),
                      e = this.scriptChild.getBBox(),
                      r = this.font.params,
                      o = this.length2em(
                        this.node.attributes.get("subscriptshift"),
                        r.sub1
                      );
                    return Math.max(
                      this.baseCharZero(
                        t.d * this.baseScale + r.sub_drop * e.rscale
                      ),
                      o,
                      e.h * e.rscale - 0.8 * r.x_height
                    );
                  }),
                  (e.prototype.getU = function () {
                    var t = this.baseCore.getBBox(),
                      e = this.scriptChild.getBBox(),
                      r = this.font.params,
                      o = this.node.attributes.getList(
                        "displaystyle",
                        "superscriptshift"
                      ),
                      n = this.node.getProperty("texprimestyle")
                        ? r.sup3
                        : o.displaystyle
                        ? r.sup1
                        : r.sup2,
                      i = this.length2em(o.superscriptshift, n);
                    return Math.max(
                      this.baseCharZero(
                        t.h * this.baseScale - r.sup_drop * e.rscale
                      ),
                      i,
                      e.d * e.rscale + (1 / 4) * r.x_height
                    );
                  }),
                  (e.prototype.hasMovableLimits = function () {
                    var t = this.node.attributes.get("displaystyle"),
                      e = this.baseChild.coreMO().node;
                    return !t && !!e.attributes.get("movablelimits");
                  }),
                  (e.prototype.getOverKU = function (t, e) {
                    var r = this.node.attributes.get("accent"),
                      o = this.font.params,
                      n = e.d * e.rscale,
                      i = o.rule_thickness * o.separation_factor,
                      a = this.baseHasAccentOver ? i : 0,
                      s = this.isLineAbove ? 3 * o.rule_thickness : i,
                      l =
                        (r
                          ? s
                          : Math.max(
                              o.big_op_spacing1,
                              o.big_op_spacing3 - Math.max(0, n)
                            )) - a;
                    return [l, t.h * t.rscale + l + n];
                  }),
                  (e.prototype.getUnderKV = function (t, e) {
                    var r = this.node.attributes.get("accentunder"),
                      o = this.font.params,
                      n = e.h * e.rscale,
                      i = o.rule_thickness * o.separation_factor,
                      a = this.baseHasAccentUnder ? i : 0,
                      s = this.isLineBelow ? 3 * o.rule_thickness : i,
                      l =
                        (r
                          ? s
                          : Math.max(
                              o.big_op_spacing2,
                              o.big_op_spacing4 - n
                            )) - a;
                    return [l, -(t.d * t.rscale + l + n)];
                  }),
                  (e.prototype.getDeltaW = function (t, e) {
                    var r, o, s, l;
                    void 0 === e && (e = [0, 0, 0]);
                    var h = this.node.attributes.get("align"),
                      c = t.map(function (t) {
                        return t.w * t.rscale;
                      });
                    c[0] -=
                      this.baseRemoveIc &&
                      !this.baseCore.node.attributes.get("largeop")
                        ? this.baseIc
                        : 0;
                    var u = Math.max.apply(Math, i([], n(c))),
                      p = [],
                      d = 0;
                    try {
                      for (
                        var f = a(c.keys()), m = f.next();
                        !m.done;
                        m = f.next()
                      ) {
                        var y = m.value;
                        (p[y] =
                          ("center" === h
                            ? (u - c[y]) / 2
                            : "right" === h
                            ? u - c[y]
                            : 0) + e[y]),
                          p[y] < d && (d = -p[y]);
                      }
                    } catch (t) {
                      r = { error: t };
                    } finally {
                      try {
                        m && !m.done && (o = f.return) && o.call(f);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    if (d)
                      try {
                        for (
                          var v = a(p.keys()), b = v.next();
                          !b.done;
                          b = v.next()
                        ) {
                          y = b.value;
                          p[y] += d;
                        }
                      } catch (t) {
                        s = { error: t };
                      } finally {
                        try {
                          b && !b.done && (l = v.return) && l.call(v);
                        } finally {
                          if (s) throw s.error;
                        }
                      }
                    return (
                      [1, 2].map(function (e) {
                        return (p[e] += t[e] ? t[e].dx * t[0].scale : 0);
                      }),
                      p
                    );
                  }),
                  (e.prototype.getDelta = function (t) {
                    void 0 === t && (t = !1);
                    var e = this.node.attributes.get("accent"),
                      r = this.baseCore.getBBox(),
                      o = r.sk,
                      n = r.ic;
                    return (
                      ((e && !t ? o : 0) + this.font.skewIcFactor * n) *
                      this.baseScale
                    );
                  }),
                  (e.prototype.stretchChildren = function () {
                    var t,
                      e,
                      r,
                      o,
                      n,
                      i,
                      s = [];
                    try {
                      for (
                        var l = a(this.childNodes), h = l.next();
                        !h.done;
                        h = l.next()
                      ) {
                        (_ = h.value).canStretch(2) && s.push(_);
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        h && !h.done && (e = l.return) && e.call(l);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    var c = s.length,
                      u = this.childNodes.length;
                    if (c && u > 1) {
                      var p = 0,
                        d = c > 1 && c === u;
                      try {
                        for (
                          var f = a(this.childNodes), m = f.next();
                          !m.done;
                          m = f.next()
                        ) {
                          var y = 0 === (_ = m.value).stretch.dir;
                          if (d || y) {
                            var v = _.getBBox(y),
                              b = v.w,
                              x = v.rscale;
                            b * x > p && (p = b * x);
                          }
                        }
                      } catch (t) {
                        r = { error: t };
                      } finally {
                        try {
                          m && !m.done && (o = f.return) && o.call(f);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                      try {
                        for (
                          var g = a(s), M = g.next();
                          !M.done;
                          M = g.next()
                        ) {
                          var _;
                          (_ = M.value)
                            .coreMO()
                            .getStretchedVariant([p / _.bbox.rscale]);
                        }
                      } catch (t) {
                        n = { error: t };
                      } finally {
                        try {
                          M && !M.done && (i = g.return) && i.call(g);
                        } finally {
                          if (n) throw n.error;
                        }
                      }
                    }
                  }),
                  e
                );
              })(t)).useIC = !0),
              e
            );
          });
      },
      3191: function (t, e) {
        var r,
          o =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CommonSemanticsMixin = void 0),
          (e.CommonSemanticsMixin = function (t) {
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                o(e, t),
                (e.prototype.computeBBox = function (t, e) {
                  if ((void 0 === e && (e = !1), this.childNodes.length)) {
                    var r = this.childNodes[0].getBBox(),
                      o = r.w,
                      n = r.h,
                      i = r.d;
                    (t.w = o), (t.h = n), (t.d = i);
                  }
                }),
                e
              );
            })(t);
          });
      },
      8723: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          (e.PV = MathJax._.components.global.combineDefaults),
          (e.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      4769: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.protoItem = MathJax._.core.MathItem.protoItem),
          (e.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem),
          (e.STATE = MathJax._.core.MathItem.STATE),
          (e.newState = MathJax._.core.MathItem.newState);
      },
      8921: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS),
          (e.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES),
          (e.indentAttributes =
            MathJax._.core.MmlTree.MmlNode.indentAttributes),
          (e.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode),
          (e.AbstractMmlTokenNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode),
          (e.AbstractMmlLayoutNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode),
          (e.AbstractMmlBaseNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode),
          (e.AbstractMmlEmptyNode =
            MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode),
          (e.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode),
          (e.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode);
      },
      4282: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TeXAtom = MathJax._.core.MmlTree.MmlNodes.TeXAtom.TeXAtom);
      },
      3969: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMaction = MathJax._.core.MmlTree.MmlNodes.maction.MmlMaction);
      },
      304: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMath = MathJax._.core.MmlTree.MmlNodes.math.MmlMath);
      },
      4374: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMenclose =
            MathJax._.core.MmlTree.MmlNodes.menclose.MmlMenclose);
      },
      7451: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMfenced = MathJax._.core.MmlTree.MmlNodes.mfenced.MmlMfenced);
      },
      848: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMfrac = MathJax._.core.MmlTree.MmlNodes.mfrac.MmlMfrac);
      },
      910: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMglyph = MathJax._.core.MmlTree.MmlNodes.mglyph.MmlMglyph);
      },
      7754: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMi = MathJax._.core.MmlTree.MmlNodes.mi.MmlMi);
      },
      7764: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMmultiscripts =
            MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlMmultiscripts),
          (e.MmlMprescripts =
            MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlMprescripts),
          (e.MmlNone = MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlNone);
      },
      3235: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMn = MathJax._.core.MmlTree.MmlNodes.mn.MmlMn);
      },
      9946: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMo = MathJax._.core.MmlTree.MmlNodes.mo.MmlMo);
      },
      189: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMpadded = MathJax._.core.MmlTree.MmlNodes.mpadded.MmlMpadded);
      },
      4664: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMroot = MathJax._.core.MmlTree.MmlNodes.mroot.MmlMroot);
      },
      1691: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMrow = MathJax._.core.MmlTree.MmlNodes.mrow.MmlMrow),
          (e.MmlInferredMrow =
            MathJax._.core.MmlTree.MmlNodes.mrow.MmlInferredMrow);
      },
      4042: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMs = MathJax._.core.MmlTree.MmlNodes.ms.MmlMs);
      },
      1465: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMspace = MathJax._.core.MmlTree.MmlNodes.mspace.MmlMspace);
      },
      4655: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMsqrt = MathJax._.core.MmlTree.MmlNodes.msqrt.MmlMsqrt);
      },
      5857: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMsubsup = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsubsup),
          (e.MmlMsub = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsub),
          (e.MmlMsup = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsup);
      },
      4859: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMtable = MathJax._.core.MmlTree.MmlNodes.mtable.MmlMtable);
      },
      2321: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMtd = MathJax._.core.MmlTree.MmlNodes.mtd.MmlMtd);
      },
      6277: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMtext = MathJax._.core.MmlTree.MmlNodes.mtext.MmlMtext);
      },
      4393: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMtr = MathJax._.core.MmlTree.MmlNodes.mtr.MmlMtr),
          (e.MmlMlabeledtr = MathJax._.core.MmlTree.MmlNodes.mtr.MmlMlabeledtr);
      },
      3102: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMunderover =
            MathJax._.core.MmlTree.MmlNodes.munderover.MmlMunderover),
          (e.MmlMunder = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMunder),
          (e.MmlMover = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMover);
      },
      9167: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlSemantics =
            MathJax._.core.MmlTree.MmlNodes.semantics.MmlSemantics),
          (e.MmlAnnotationXML =
            MathJax._.core.MmlTree.MmlNodes.semantics.MmlAnnotationXML),
          (e.MmlAnnotation =
            MathJax._.core.MmlTree.MmlNodes.semantics.MmlAnnotation);
      },
      3985: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractOutputJax = MathJax._.core.OutputJax.AbstractOutputJax);
      },
      9879: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractWrapper = MathJax._.core.Tree.Wrapper.AbstractWrapper);
      },
      2506: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractWrapperFactory =
            MathJax._.core.Tree.WrapperFactory.AbstractWrapperFactory);
      },
      3717: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.BBoxStyleAdjust = MathJax._.util.BBox.BBoxStyleAdjust),
          (e.BBox = MathJax._.util.BBox.BBox);
      },
      9077: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isObject = MathJax._.util.Options.isObject),
          (e.APPEND = MathJax._.util.Options.APPEND),
          (e.REMOVE = MathJax._.util.Options.REMOVE),
          (e.OPTIONS = MathJax._.util.Options.OPTIONS),
          (e.Expandable = MathJax._.util.Options.Expandable),
          (e.expandable = MathJax._.util.Options.expandable),
          (e.makeArray = MathJax._.util.Options.makeArray),
          (e.keys = MathJax._.util.Options.keys),
          (e.copy = MathJax._.util.Options.copy),
          (e.insert = MathJax._.util.Options.insert),
          (e.defaultOptions = MathJax._.util.Options.defaultOptions),
          (e.userOptions = MathJax._.util.Options.userOptions),
          (e.selectOptions = MathJax._.util.Options.selectOptions),
          (e.selectOptionsFromKeys =
            MathJax._.util.Options.selectOptionsFromKeys),
          (e.separateOptions = MathJax._.util.Options.separateOptions),
          (e.lookup = MathJax._.util.Options.lookup);
      },
      5888: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CssStyles = MathJax._.util.StyleList.CssStyles);
      },
      5878: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Styles = MathJax._.util.Styles.Styles);
      },
      6914: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.BIGDIMEN = MathJax._.util.lengths.BIGDIMEN),
          (e.UNITS = MathJax._.util.lengths.UNITS),
          (e.RELUNITS = MathJax._.util.lengths.RELUNITS),
          (e.MATHSPACE = MathJax._.util.lengths.MATHSPACE),
          (e.length2em = MathJax._.util.lengths.length2em),
          (e.percent = MathJax._.util.lengths.percent),
          (e.em = MathJax._.util.lengths.em),
          (e.emRounded = MathJax._.util.lengths.emRounded),
          (e.px = MathJax._.util.lengths.px);
      },
      1490: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.sum = MathJax._.util.numeric.sum),
          (e.max = MathJax._.util.numeric.max);
      },
      6720: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.sortLength = MathJax._.util.string.sortLength),
          (e.quotePattern = MathJax._.util.string.quotePattern),
          (e.unicodeChars = MathJax._.util.string.unicodeChars),
          (e.unicodeString = MathJax._.util.string.unicodeString),
          (e.isPercent = MathJax._.util.string.isPercent),
          (e.split = MathJax._.util.string.split);
      },
      4142: function (t, e, r) {
        r.r(e),
          r.d(e, {
            TeXFont: function () {
              return c;
            },
          });
        var o = r(2098);
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function i(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(t, e) {
          return (a =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function s(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var r,
              o = h(t);
            if (e) {
              var n = h(this).constructor;
              r = Reflect.construct(o, arguments, n);
            } else r = o.apply(this, arguments);
            return l(this, r);
          };
        }
        function l(t, e) {
          return !e || ("object" !== n(e) && "function" != typeof e)
            ? (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t)
            : e;
        }
        function h(t) {
          return (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var c = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && a(t, e);
          })(r, t);
          var e = s(r);
          function r() {
            return i(this, r), e.apply(this, arguments);
          }
          return r;
        })(o.FontData);
        c.OPTIONS = { fontURL: "." };
      },
    },
    pt = {};
  function dt(t) {
    var e = pt[t];
    if (void 0 !== e) return e.exports;
    var r = (pt[t] = { exports: {} });
    return ut[t].call(r.exports, r, r.exports, dt), r.exports;
  }
  (dt.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return dt.d(e, { a: e }), e;
  }),
    (dt.d = function (t, e) {
      for (var r in e)
        dt.o(e, r) &&
          !dt.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (dt.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (dt.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (t = dt(8723)),
    (e = dt(7016)),
    (r = dt(2098)),
    (o = dt(4458)),
    (n = dt(7427)),
    (i = dt(6617)),
    (a = dt(4477)),
    (s = dt(8369)),
    (l = dt(518)),
    (h = dt(1114)),
    (c = dt(7918)),
    (u = dt(4155)),
    (p = dt(3215)),
    (d = dt(7047)),
    (f = dt(7837)),
    (m = dt(1315)),
    (y = dt(3271)),
    (v = dt(1096)),
    (b = dt(7013)),
    (x = dt(3292)),
    (g = dt(7215)),
    (M = dt(7111)),
    (_ = dt(3126)),
    (w = dt(9821)),
    (C = dt(6024)),
    (j = dt(5437)),
    (S = dt(513)),
    (O = dt(6918)),
    (T = dt(8709)),
    (L = dt(6359)),
    (B = dt(7500)),
    (P = dt(6577)),
    (H = dt(7322)),
    (A = dt(7795)),
    (k = dt(9250)),
    (N = dt(5373)),
    (E = dt(716)),
    (D = dt(1541)),
    (W = dt(1475)),
    (R = dt(3438)),
    (I = dt(555)),
    (F = dt(3345)),
    (J = dt(2057)),
    (V = dt(6200)),
    (z = dt(1346)),
    (U = dt(5705)),
    (X = dt(7969)),
    (K = dt(1419)),
    (q = dt(9906)),
    (Q = dt(2304)),
    (G = dt(437)),
    (Y = dt(7481)),
    (Z = dt(5997)),
    ($ = dt(9323)),
    (tt = dt(6920)),
    (et = dt(37)),
    (rt = dt(222)),
    (ot = dt(3069)),
    (nt = dt(8589)),
    (it = dt(7805)),
    (at = dt(8325)),
    (st = dt(4818)),
    (lt = dt(9690)),
    (ht = dt(7091)),
    (ct = dt(3191)),
    (0, t.r8)({
      _: {
        output: {
          chtml_ts: e,
          chtml: {
            FontData: r,
            Notation: o,
            Usage: n,
            Wrapper: i,
            WrapperFactory: a,
            Wrappers_ts: s,
            Wrappers: {
              TeXAtom: l,
              TextNode: h,
              maction: c,
              math: u,
              menclose: p,
              mfenced: d,
              mfrac: f,
              mglyph: m,
              mi: y,
              mmultiscripts: v,
              mn: b,
              mo: x,
              mpadded: g,
              mroot: M,
              mrow: _,
              ms: w,
              mspace: C,
              msqrt: j,
              msubsup: S,
              mtable: O,
              mtd: T,
              mtext: L,
              mtr: B,
              munderover: P,
              scriptbase: H,
              semantics: A,
            },
          },
          common: {
            FontData: k,
            Notation: N,
            OutputJax: E,
            Wrapper: D,
            WrapperFactory: W,
            Wrappers: {
              TeXAtom: R,
              TextNode: I,
              maction: F,
              math: J,
              menclose: V,
              mfenced: z,
              mfrac: U,
              mglyph: X,
              mi: K,
              mmultiscripts: q,
              mn: Q,
              mo: G,
              mpadded: Y,
              mroot: Z,
              mrow: $,
              ms: tt,
              mspace: et,
              msqrt: rt,
              msubsup: ot,
              mtable: nt,
              mtd: it,
              mtext: at,
              mtr: st,
              munderover: lt,
              scriptbase: ht,
              semantics: ct,
            },
          },
        },
      },
    }),
    MathJax.loader &&
      (0, t.PV)(MathJax.config.loader, "output/chtml", {
        checkReady: function () {
          return MathJax.loader.load("output/chtml/fonts/tex");
        },
      }),
    MathJax.startup &&
      (MathJax.startup.registerConstructor("chtml", e.CHTML),
      MathJax.startup.useOutput("chtml"));
})();

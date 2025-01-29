!(function () {
  "use strict";
  var t = {
      433: function (t, e, r) {
        var n,
          i =
            (this && this.__extends) ||
            ((n = function (t, e) {
              return (n =
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
              n(t, e),
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
                  for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, i) &&
                        (t[i] = e[i]);
                  return t;
                }).apply(this, arguments);
            },
          o =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
              if (r) return r.call(t);
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
              var n,
                i,
                a = r.call(t),
                o = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = a.next()).done; )
                  o.push(n.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  n && !n.done && (r = a.return) && r.call(a);
                } finally {
                  if (i) throw i.error;
                }
              }
              return o;
            },
          c =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
                t[i] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EnrichHandler =
            e.EnrichedMathDocumentMixin =
            e.EnrichedMathItemMixin =
              void 0);
        var l = r(184),
          h = r(769),
          u = r(758),
          p = r(77),
          d = r(905),
          f = "none";
        function y(t, e, r) {
          return (function (t) {
            function n() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              i(n, t),
              (n.prototype.serializeMml = function (t) {
                if ("outerHTML" in t) return t.outerHTML;
                if (
                  "undefined" != typeof Element &&
                  "undefined" != typeof window &&
                  t instanceof Element
                ) {
                  var e = window.document.createElement("div");
                  return e.appendChild(t), e.innerHTML;
                }
                return t.toString();
              }),
              (n.prototype.enrich = function (t, n) {
                if (
                  (void 0 === n && (n = !1),
                  !(this.state() >= h.STATE.ENRICHED))
                ) {
                  if (!this.isEscaped && (t.options.enableEnrichment || n)) {
                    ("undefined" != typeof sre && sre.Engine.isReady()) ||
                      l.mathjax.retryAfter(d.sreReady()),
                      t.options.sre.speech !== f &&
                        (SRE.setupEngine(t.options.sre),
                        (f = t.options.sre.speech));
                    var i = new t.options.MathItem("", e);
                    try {
                      var a = (this.inputData.originalMml = r(this.root));
                      (i.math = this.serializeMml(SRE.toEnriched(a))),
                        (i.display = this.display),
                        i.compile(t),
                        (this.root = i.root),
                        (this.inputData.enrichedMml = i.math);
                    } catch (e) {
                      t.options.enrichError(t, this, e);
                    }
                  }
                  this.state(h.STATE.ENRICHED);
                }
              }),
              (n.prototype.attachSpeech = function (t) {
                var e, r;
                if (!(this.state() >= h.STATE.ATTACHSPEECH)) {
                  var n =
                    this.root.attributes.get("aria-label") ||
                    this.getSpeech(this.root);
                  if (n) {
                    var i = t.adaptor,
                      a = this.typesetRoot;
                    i.setAttribute(a, "aria-label", n);
                    try {
                      for (
                        var s = o(i.childNodes(a)), c = s.next();
                        !c.done;
                        c = s.next()
                      ) {
                        var l = c.value;
                        i.setAttribute(l, "aria-hidden", "true");
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        c && !c.done && (r = s.return) && r.call(s);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  }
                  this.state(h.STATE.ATTACHSPEECH);
                }
              }),
              (n.prototype.getSpeech = function (t) {
                var e,
                  r,
                  n = t.attributes;
                if (!n) return "";
                var i = n.getExplicit("data-semantic-speech");
                if (!n.getExplicit("data-semantic-parent") && i) return i;
                try {
                  for (
                    var a = o(t.childNodes), s = a.next();
                    !s.done;
                    s = a.next()
                  ) {
                    var c = s.value,
                      l = this.getSpeech(c);
                    if (null != l) return l;
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
                return "";
              }),
              n
            );
          })(t);
        }
        function m(t, e) {
          var r;
          return (
            ((r = (function (t) {
              function r() {
                for (var r = [], n = 0; n < arguments.length; n++)
                  r[n] = arguments[n];
                var i = t.apply(this, c([], s(r))) || this;
                e.setMmlFactory(i.mmlFactory);
                var a = i.constructor.ProcessBits;
                a.has("enriched") ||
                  (a.allocate("enriched"), a.allocate("attach-speech"));
                var o = new u.SerializedMmlVisitor(i.mmlFactory),
                  l = function (t) {
                    return o.visitTree(t);
                  };
                return (i.options.MathItem = y(i.options.MathItem, e, l)), i;
              }
              return (
                i(r, t),
                (r.prototype.attachSpeech = function () {
                  var t, e;
                  if (!this.processed.isSet("attach-speech")) {
                    try {
                      for (
                        var r = o(this.math), n = r.next();
                        !n.done;
                        n = r.next()
                      ) {
                        n.value.attachSpeech(this);
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        n && !n.done && (e = r.return) && e.call(r);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    this.processed.set("attach-speech");
                  }
                  return this;
                }),
                (r.prototype.enrich = function () {
                  var t, e;
                  if (!this.processed.isSet("enriched")) {
                    if (this.options.enableEnrichment)
                      try {
                        for (
                          var r = o(this.math), n = r.next();
                          !n.done;
                          n = r.next()
                        ) {
                          n.value.enrich(this);
                        }
                      } catch (e) {
                        t = { error: e };
                      } finally {
                        try {
                          n && !n.done && (e = r.return) && e.call(r);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                    this.processed.set("enriched");
                  }
                  return this;
                }),
                (r.prototype.enrichError = function (t, e, r) {
                  console.warn("Enrichment error:", r);
                }),
                (r.prototype.state = function (e, r) {
                  return (
                    void 0 === r && (r = !1),
                    t.prototype.state.call(this, e, r),
                    e < h.STATE.ENRICHED && this.processed.clear("enriched"),
                    this
                  );
                }),
                r
              );
            })(t)).OPTIONS = a(a({}, t.OPTIONS), {
              enableEnrichment: !0,
              enrichError: function (t, e, r) {
                return t.enrichError(t, e, r);
              },
              renderActions: p.expandable(
                a(a({}, t.OPTIONS.renderActions), {
                  enrich: [h.STATE.ENRICHED],
                  attachSpeech: [h.STATE.ATTACHSPEECH],
                })
              ),
              sre: p.expandable({
                speech: "none",
                domain: "mathspeak",
                style: "default",
                locale: "en",
              }),
            })),
            r
          );
        }
        h.newState("ENRICHED", 30),
          h.newState("ATTACHSPEECH", 155),
          (e.EnrichedMathItemMixin = y),
          (e.EnrichedMathDocumentMixin = m),
          (e.EnrichHandler = function (t, e) {
            return (
              e.setAdaptor(t.adaptor),
              (t.documentClass = m(t.documentClass, e)),
              t
            );
          });
      },
      905: function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.sreReady = void 0);
        var n = r(534),
          i =
            "undefined" == typeof window
              ? "./a11y/sre-node.js"
              : "../../../speech-rule-engine/lib/sre_browser.js",
          a = "undefined" == typeof sre ? n.asyncLoad(i) : Promise.resolve();
        e.sreReady = function () {
          return new Promise(function (t, e) {
            a.then(function () {
              var r = new Date().getTime(),
                n = function () {
                  sre.Engine.isReady()
                    ? t()
                    : new Date().getTime() - r < 2e4
                    ? setTimeout(n, 100)
                    : e("Timed out waiting for Speech-Rule-Engine");
                };
              n();
            }).catch(function (t) {
              return e(t.message || t);
            });
          });
        };
      },
      723: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          (e.PV = MathJax._.components.global.combineDefaults),
          (e.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      769: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.protoItem = MathJax._.core.MathItem.protoItem),
          (e.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem),
          (e.STATE = MathJax._.core.MathItem.STATE),
          (e.newState = MathJax._.core.MathItem.newState);
      },
      758: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.DATAMJX = MathJax._.core.MmlTree.SerializedMmlVisitor.DATAMJX),
          (e.toEntity = MathJax._.core.MmlTree.SerializedMmlVisitor.toEntity),
          (e.SerializedMmlVisitor =
            MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor);
      },
      184: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.mathjax = MathJax._.mathjax.mathjax);
      },
      534: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.asyncLoad = MathJax._.util.AsyncLoad.asyncLoad);
      },
      77: function (t, e) {
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
      475: function (t, e) {
        e.K = MathJax._.input.mathml_ts.MathML;
      },
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var a = (e[n] = { exports: {} });
    return t[n].call(a.exports, a, a.exports, r), a.exports;
  }
  !(function () {
    var t = r(723),
      e = r(433),
      n = r(905);
    (0, t.r8)({ _: { a11y: { "semantic-enrich": e, sre: n } } });
    var i = r(475);
    MathJax.loader &&
      (0, t.PV)(MathJax.config.loader, "a11y/semantic-enrich", {
        checkReady: function () {
          return (0, n.sreReady)();
        },
      }),
      MathJax.startup &&
        MathJax.startup.extendHandler(function (t) {
          return (0, e.EnrichHandler)(t, new i.K());
        });
  })();
})();

!(function () {
  "use strict";
  var t = {
      18: function (t, e, o) {
        var r,
          n =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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
          i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, o = 1, r = arguments.length; o < r; o++)
                    for (var n in (e = arguments[o]))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }).apply(this, arguments);
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                o = e && t[e],
                r = 0;
              if (o) return o.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && r >= t.length && (t = void 0),
                      { value: t && t[r++], done: !t }
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
              var o = "function" == typeof Symbol && t[Symbol.iterator];
              if (!o) return t;
              var r,
                n,
                i = o.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  r && !r.done && (o = i.return) && o.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          l =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var o = 0, r = e.length, n = t.length; o < r; o++, n++)
                t[n] = e[o];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setA11yOption =
            e.setA11yOptions =
            e.ExplorerHandler =
            e.ExplorerMathDocumentMixin =
            e.ExplorerMathItemMixin =
              void 0);
        var h = o(769),
          c = o(511),
          p = o(77),
          u = o(433),
          d = o(850),
          f = o(269),
          y = o(85),
          v = o(854),
          g = o(367);
        function m(t, e) {
          return (function (t) {
            function o() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.explorers = {}),
                (e.attached = []),
                (e.restart = []),
                (e.refocus = !1),
                (e.savedId = null),
                e
              );
            }
            return (
              n(o, t),
              (o.prototype.explorable = function (t, o) {
                if (
                  (void 0 === o && (o = !1),
                  !(this.state() >= h.STATE.EXPLORER))
                ) {
                  if (!this.isEscaped && (t.options.enableExplorer || o)) {
                    var r = this.typesetRoot,
                      n = e(this.root);
                    this.savedId &&
                      (this.typesetRoot.setAttribute(
                        "sre-explorer-id",
                        this.savedId
                      ),
                      (this.savedId = null)),
                      (this.explorers = (function (t, e, o) {
                        var r,
                          n,
                          i = {};
                        try {
                          for (
                            var s = a(Object.keys(_)), l = s.next();
                            !l.done;
                            l = s.next()
                          ) {
                            var h = l.value;
                            i[h] = _[h](t, e, o);
                          }
                        } catch (t) {
                          r = { error: t };
                        } finally {
                          try {
                            l && !l.done && (n = s.return) && n.call(s);
                          } finally {
                            if (r) throw r.error;
                          }
                        }
                        return i;
                      })(t, r, n)),
                      this.attachExplorers(t);
                  }
                  this.state(h.STATE.EXPLORER);
                }
              }),
              (o.prototype.attachExplorers = function (t) {
                var e, o, r, n;
                this.attached = [];
                var i = [];
                try {
                  for (
                    var s = a(Object.keys(this.explorers)), l = s.next();
                    !l.done;
                    l = s.next()
                  ) {
                    var h = l.value;
                    (u = this.explorers[h]) instanceof f.AbstractKeyExplorer &&
                      (u.AddEvents(), (u.stoppable = !1), i.unshift(u)),
                      t.options.a11y[h]
                        ? (u.Attach(), this.attached.push(h))
                        : u.Detach();
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    l && !l.done && (o = s.return) && o.call(s);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                try {
                  for (var c = a(i), p = c.next(); !p.done; p = c.next()) {
                    var u;
                    if ((u = p.value).attached) {
                      u.stoppable = !0;
                      break;
                    }
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    p && !p.done && (n = c.return) && n.call(c);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (o.prototype.rerender = function (e, o) {
                var r, n;
                void 0 === o && (o = h.STATE.RERENDER),
                  (this.savedId =
                    this.typesetRoot.getAttribute("sre-explorer-id")),
                  (this.refocus =
                    window.document.activeElement === this.typesetRoot);
                try {
                  for (
                    var i = a(this.attached), s = i.next();
                    !s.done;
                    s = i.next()
                  ) {
                    var l = s.value,
                      c = this.explorers[l];
                    c.active && (this.restart.push(l), c.Stop());
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = i.return) && n.call(i);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                t.prototype.rerender.call(this, e, o);
              }),
              (o.prototype.updateDocument = function (e) {
                var o = this;
                t.prototype.updateDocument.call(this, e),
                  this.refocus && this.typesetRoot.focus(),
                  this.restart.forEach(function (t) {
                    return o.explorers[t].Start();
                  }),
                  (this.restart = []),
                  (this.refocus = !1);
              }),
              o
            );
          })(t);
        }
        function x(t) {
          var e;
          return (
            ((e = (function (t) {
              function e() {
                for (var e = [], o = 0; o < arguments.length; o++)
                  e[o] = arguments[o];
                var r = t.apply(this, l([], s(e))) || this,
                  n = r.constructor.ProcessBits;
                n.has("explorer") || n.allocate("explorer");
                var i = new u.SerializedMmlVisitor(r.mmlFactory),
                  a = function (t) {
                    return i.visitTree(t);
                  };
                return (
                  (r.options.MathItem = m(r.options.MathItem, a)),
                  (r.explorerRegions = b(r)),
                  r
                );
              }
              return (
                n(e, t),
                (e.prototype.explorable = function () {
                  var t, e;
                  if (!this.processed.isSet("explorer")) {
                    if (this.options.enableExplorer)
                      try {
                        for (
                          var o = a(this.math), r = o.next();
                          !r.done;
                          r = o.next()
                        ) {
                          r.value.explorable(this);
                        }
                      } catch (e) {
                        t = { error: e };
                      } finally {
                        try {
                          r && !r.done && (e = o.return) && e.call(o);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                    this.processed.set("explorer");
                  }
                  return this;
                }),
                (e.prototype.state = function (e, o) {
                  return (
                    void 0 === o && (o = !1),
                    t.prototype.state.call(this, e, o),
                    e < h.STATE.EXPLORER && this.processed.clear("explorer"),
                    this
                  );
                }),
                e
              );
            })(t)).OPTIONS = i(i({}, t.OPTIONS), {
              enableExplorer: !0,
              renderActions: p.expandable(
                i(i({}, t.OPTIONS.renderActions), {
                  explorable: [h.STATE.EXPLORER],
                })
              ),
              sre: p.expandable(i(i({}, t.OPTIONS.sre), { speech: "shallow" })),
              a11y: {
                align: "top",
                backgroundColor: "Blue",
                backgroundOpacity: 20,
                braille: !1,
                flame: !1,
                foregroundColor: "Black",
                foregroundOpacity: 100,
                highlight: "None",
                hover: !1,
                infoPrefix: !1,
                infoRole: !1,
                infoType: !1,
                keyMagnifier: !1,
                magnification: "None",
                magnify: "400%",
                mouseMagnifier: !1,
                speech: !0,
                subtitles: !0,
                treeColoring: !1,
                viewBraille: !1,
              },
            })),
            e
          );
        }
        function b(t) {
          return {
            speechRegion: new g.LiveRegion(t),
            brailleRegion: new g.LiveRegion(t),
            magnifier: new g.HoverRegion(t),
            tooltip1: new g.ToolTip(t),
            tooltip2: new g.ToolTip(t),
            tooltip3: new g.ToolTip(t),
          };
        }
        h.newState("EXPLORER", 160),
          (e.ExplorerMathItemMixin = m),
          (e.ExplorerMathDocumentMixin = x),
          (e.ExplorerHandler = function (t, e) {
            return (
              void 0 === e && (e = null),
              !t.documentClass.prototype.enrich &&
                e &&
                (t = c.EnrichHandler(t, e)),
              (t.documentClass = x(t.documentClass)),
              t
            );
          });
        var _ = {
          speech: function (t, e) {
            for (var o, r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            var i = (o = f.SpeechExplorer).create.apply(
              o,
              l([t, t.explorerRegions.speechRegion, e], s(r))
            );
            return (
              i.speechGenerator.setOptions({
                locale: t.options.sre.locale,
                domain: t.options.sre.domain,
                style: t.options.sre.style,
                modality: "speech",
                cache: !1,
              }),
              (i.showRegion = "subtitles"),
              i
            );
          },
          braille: function (t, e) {
            for (var o, r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            var i = (o = f.SpeechExplorer).create.apply(
              o,
              l([t, t.explorerRegions.brailleRegion, e], s(r))
            );
            return (
              i.speechGenerator.setOptions({
                locale: "nemeth",
                domain: "default",
                style: "default",
                modality: "braille",
              }),
              (i.showRegion = "viewBraille"),
              i
            );
          },
          keyMagnifier: function (t, e) {
            for (var o, r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            return (o = f.Magnifier).create.apply(
              o,
              l([t, t.explorerRegions.magnifier, e], s(r))
            );
          },
          mouseMagnifier: function (t, e) {
            for (var o = [], r = 2; r < arguments.length; r++)
              o[r - 2] = arguments[r];
            return y.ContentHoverer.create(
              t,
              t.explorerRegions.magnifier,
              e,
              function (t) {
                return t.hasAttribute("data-semantic-type");
              },
              function (t) {
                return t;
              }
            );
          },
          hover: function (t, e) {
            for (var o = [], r = 2; r < arguments.length; r++)
              o[r - 2] = arguments[r];
            return y.FlameHoverer.create(t, null, e);
          },
          infoType: function (t, e) {
            for (var o = [], r = 2; r < arguments.length; r++)
              o[r - 2] = arguments[r];
            return y.ValueHoverer.create(
              t,
              t.explorerRegions.tooltip1,
              e,
              function (t) {
                return t.hasAttribute("data-semantic-type");
              },
              function (t) {
                return t.getAttribute("data-semantic-type");
              }
            );
          },
          infoRole: function (t, e) {
            for (var o = [], r = 2; r < arguments.length; r++)
              o[r - 2] = arguments[r];
            return y.ValueHoverer.create(
              t,
              t.explorerRegions.tooltip2,
              e,
              function (t) {
                return t.hasAttribute("data-semantic-role");
              },
              function (t) {
                return t.getAttribute("data-semantic-role");
              }
            );
          },
          infoPrefix: function (t, e) {
            for (var o = [], r = 2; r < arguments.length; r++)
              o[r - 2] = arguments[r];
            return y.ValueHoverer.create(
              t,
              t.explorerRegions.tooltip3,
              e,
              function (t) {
                return t.hasAttribute("data-semantic-prefix");
              },
              function (t) {
                return t.getAttribute("data-semantic-prefix");
              }
            );
          },
          flame: function (t, e) {
            for (var o = [], r = 2; r < arguments.length; r++)
              o[r - 2] = arguments[r];
            return v.FlameColorer.create(t, null, e);
          },
          treeColoring: function (t, e) {
            for (var o = [], r = 2; r < arguments.length; r++)
              o[r - 2] = arguments[r];
            return v.TreeColorer.create.apply(
              v.TreeColorer,
              l([t, null, e], s(o))
            );
          },
        };
        function M(t, e, o) {
          switch (e) {
            case "magnification":
              switch (o) {
                case "None":
                  (t.options.a11y.magnification = o),
                    (t.options.a11y.keyMagnifier = !1),
                    (t.options.a11y.mouseMagnifier = !1);
                  break;
                case "Keyboard":
                  (t.options.a11y.magnification = o),
                    (t.options.a11y.keyMagnifier = !0),
                    (t.options.a11y.mouseMagnifier = !1);
                  break;
                case "Mouse":
                  (t.options.a11y.magnification = o),
                    (t.options.a11y.keyMagnifier = !1),
                    (t.options.a11y.mouseMagnifier = !0);
              }
              break;
            case "highlight":
              switch (o) {
                case "None":
                  (t.options.a11y.highlight = o),
                    (t.options.a11y.hover = !1),
                    (t.options.a11y.flame = !1);
                  break;
                case "Hover":
                  (t.options.a11y.highlight = o),
                    (t.options.a11y.hover = !0),
                    (t.options.a11y.flame = !1);
                  break;
                case "Flame":
                  (t.options.a11y.highlight = o),
                    (t.options.a11y.hover = !1),
                    (t.options.a11y.flame = !0);
              }
              break;
            default:
              t.options.a11y[e] = o;
          }
        }
        (e.setA11yOptions = function (t, e) {
          var o,
            r,
            n = SRE.engineSetup();
          for (var i in e)
            void 0 === t.options.a11y[i]
              ? void 0 !== n[i] && (t.options.sre[i] = e[i])
              : (M(t, i, e[i]), "locale" === i && (t.options.sre[i] = e[i]));
          try {
            for (var s = a(t.math), l = s.next(); !l.done; l = s.next()) {
              l.value.attachExplorers(t);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              l && !l.done && (r = s.return) && r.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
        }),
          (e.setA11yOption = M);
        var w = {},
          S = function (t, e) {
            var o,
              r,
              n = sre.ClearspeakPreferences.getLocalePreferences()[e];
            if (!n) {
              var i = t.findID("Accessibility", "Speech", "Clearspeak");
              return i && i.disable(), null;
            }
            !(function (t, e) {
              var o,
                r,
                n = t.pool.lookup("speechRules"),
                i = function (e) {
                  if (w[e]) return "continue";
                  t.factory.get("variable")(
                    t.factory,
                    {
                      name: "csprf_" + e,
                      setter: function (t) {
                        (w[e] = t),
                          n.setValue(
                            "clearspeak-" +
                              sre.ClearspeakPreferences.addPreference(
                                sre.Engine.DOMAIN_TO_STYLES.clearspeak,
                                e,
                                t
                              )
                          );
                      },
                      getter: function () {
                        return w[e] || "Auto";
                      },
                    },
                    t.pool
                  );
                };
              try {
                for (var s = a(e), l = s.next(); !l.done; l = s.next())
                  i(l.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  l && !l.done && (r = s.return) && r.call(s);
                } finally {
                  if (o) throw o.error;
                }
              }
            })(t, Object.keys(n));
            var s = [],
              l = function (t) {
                s.push({
                  title: t,
                  values: n[t].map(function (e) {
                    return e.replace(RegExp("^" + t + "_"), "");
                  }),
                  variable: "csprf_" + t,
                });
              };
            try {
              for (
                var h = a(Object.getOwnPropertyNames(n)), c = h.next();
                !c.done;
                c = h.next()
              ) {
                l(c.value);
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                c && !c.done && (r = h.return) && r.call(h);
              } finally {
                if (o) throw o.error;
              }
            }
            var p = t.factory.get("selectionBox")(
              t.factory,
              {
                title: "Clearspeak Preferences",
                signature: "",
                order: "alphabetic",
                grid: "square",
                selections: s,
              },
              t
            );
            return {
              type: "command",
              id: "ClearspeakPreferences",
              content: "Select Preferences",
              action: function () {
                return p.post(0, 0);
              },
            };
          };
        d.MJContextMenu.DynamicSubmenus.set("Clearspeak", function (t, e) {
          var o = t.pool.lookup("locale").getValue(),
            r = S(t, o),
            n = [];
          try {
            n = sre.ClearspeakPreferences.smartPreferences(t.mathItem, o);
          } catch (t) {}
          return (
            r && n.splice(2, 0, r),
            t.factory.get("subMenu")(
              t.factory,
              { items: n, id: "Clearspeak" },
              e
            )
          );
        });
        var O = {
          de: "German",
          en: "English",
          es: "Spanish",
          fr: "French",
          hi: "Hindi",
          it: "Italian",
        };
        d.MJContextMenu.DynamicSubmenus.set("A11yLanguage", function (t, e) {
          var o,
            r,
            n = [];
          try {
            for (
              var i = a(sre.Variables.LOCALES), s = i.next();
              !s.done;
              s = i.next()
            ) {
              var l = s.value;
              "nemeth" !== l &&
                n.push({
                  type: "radio",
                  id: l,
                  content: O[l] || l,
                  variable: "locale",
                });
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              s && !s.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return (
            n.sort(function (t, e) {
              return t.content.localeCompare(e.content, "en");
            }),
            t.factory.get("subMenu")(t.factory, { items: n, id: "Language" }, e)
          );
        });
      },
      724: function (t, e, o) {
        var r =
            (this && this.__read) ||
            function (t, e) {
              var o = "function" == typeof Symbol && t[Symbol.iterator];
              if (!o) return t;
              var r,
                n,
                i = o.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  r && !r.done && (o = i.return) && o.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            },
          n =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var o = 0, r = e.length, n = t.length; o < r; o++, n++)
                t[n] = e[o];
              return t;
            },
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                o = e && t[e],
                r = 0;
              if (o) return o.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && r >= t.length && (t = void 0),
                      { value: t && t[r++], done: !t }
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
          (e.AbstractExplorer = void 0),
          o(961);
        var a = (function () {
          function t(t, e, o) {
            for (var r = [], n = 3; n < arguments.length; n++)
              r[n - 3] = arguments[n];
            (this.document = t),
              (this.region = e),
              (this.node = o),
              (this.stoppable = !0),
              (this.events = []),
              (this.highlighter = this.getHighlighter()),
              (this._active = !1);
          }
          return (
            (t.stopEvent = function (t) {
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                t.stopImmediatePropagation
                  ? t.stopImmediatePropagation()
                  : t.stopPropagation && t.stopPropagation(),
                (t.cancelBubble = !0);
            }),
            (t.create = function (t, e, o) {
              for (var i = [], a = 3; a < arguments.length; a++)
                i[a - 3] = arguments[a];
              var s = new (this.bind.apply(this, n([void 0, t, e, o], r(i))))();
              return s;
            }),
            (t.prototype.Events = function () {
              return this.events;
            }),
            Object.defineProperty(t.prototype, "active", {
              get: function () {
                return this._active;
              },
              set: function (t) {
                this._active = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.Attach = function () {
              this.AddEvents();
            }),
            (t.prototype.Detach = function () {
              this.RemoveEvents();
            }),
            (t.prototype.Start = function () {
              (this.highlighter = this.getHighlighter()), (this.active = !0);
            }),
            (t.prototype.Stop = function () {
              this.active &&
                (this.region.Clear(), this.region.Hide(), (this.active = !1));
            }),
            (t.prototype.AddEvents = function () {
              var t, e;
              try {
                for (
                  var o = i(this.events), n = o.next();
                  !n.done;
                  n = o.next()
                ) {
                  var a = r(n.value, 2),
                    s = a[0],
                    l = a[1];
                  this.node.addEventListener(s, l);
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
            (t.prototype.RemoveEvents = function () {
              var t, e;
              try {
                for (
                  var o = i(this.events), n = o.next();
                  !n.done;
                  n = o.next()
                ) {
                  var a = r(n.value, 2),
                    s = a[0],
                    l = a[1];
                  this.node.removeEventListener(s, l);
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
            (t.prototype.Update = function (t) {
              void 0 === t && (t = !1);
            }),
            (t.prototype.getHighlighter = function () {
              var t = this.document.options.a11y,
                e = {
                  color: t.foregroundColor.toLowerCase(),
                  alpha: t.foregroundOpacity / 100,
                },
                o = {
                  color: t.backgroundColor.toLowerCase(),
                  alpha: t.backgroundOpacity / 100,
                };
              return sre.HighlighterFactory.highlighter(o, e, {
                renderer: this.document.outputJax.name,
                browser: "v3",
              });
            }),
            (t.prototype.stopEvent = function (e) {
              this.stoppable && t.stopEvent(e);
            }),
            t
          );
        })();
        e.AbstractExplorer = a;
      },
      269: function (t, e, o) {
        var r,
          n =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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
          (e.Magnifier = e.SpeechExplorer = e.AbstractKeyExplorer = void 0);
        var i = o(724),
          a = o(961),
          s = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.attached = !1),
                (e.eventsAttached = !1),
                (e.events = t.prototype.Events.call(e).concat([
                  ["keydown", e.KeyDown.bind(e)],
                  ["focusin", e.FocusIn.bind(e)],
                  ["focusout", e.FocusOut.bind(e)],
                ])),
                (e.oldIndex = null),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.FocusIn = function (t) {}),
              (e.prototype.FocusOut = function (t) {
                this.Stop();
              }),
              (e.prototype.Update = function (t) {
                if ((void 0 === t && (t = !1), this.active || t)) {
                  this.highlighter.unhighlight();
                  var e = this.walker.getFocus(!0).getNodes();
                  e.length ||
                    (this.walker.refocus(),
                    (e = this.walker.getFocus().getNodes())),
                    this.highlighter.highlight(e);
                }
              }),
              (e.prototype.Attach = function () {
                t.prototype.Attach.call(this),
                  (this.attached = !0),
                  (this.oldIndex = this.node.tabIndex),
                  (this.node.tabIndex = 1),
                  this.node.setAttribute("role", "application");
              }),
              (e.prototype.AddEvents = function () {
                this.eventsAttached ||
                  (t.prototype.AddEvents.call(this),
                  (this.eventsAttached = !0));
              }),
              (e.prototype.Detach = function () {
                this.active &&
                  ((this.node.tabIndex = this.oldIndex),
                  (this.oldIndex = null),
                  this.node.removeAttribute("role")),
                  (this.attached = !1);
              }),
              (e.prototype.Stop = function () {
                this.active &&
                  (this.highlighter.unhighlight(), this.walker.deactivate()),
                  t.prototype.Stop.call(this);
              }),
              e
            );
          })(i.AbstractExplorer);
        e.AbstractKeyExplorer = s;
        var l = (function (t) {
          function e(e, o, r, n) {
            var i = t.call(this, e, o, r) || this;
            return (
              (i.document = e),
              (i.region = o),
              (i.node = r),
              (i.mml = n),
              (i.showRegion = "subtitles"),
              (i.init = !1),
              (i.restarted = !1),
              i.initWalker(),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.Start = function () {
              var e = this;
              if (this.attached) {
                var o = this.getOptions();
                if (!this.init)
                  return (
                    (this.init = !0),
                    void a
                      .sreReady()
                      .then(function () {
                        SRE.engineSetup().locale !== o.locale &&
                          SRE.setupEngine({ locale: o.locale }),
                          a.sreReady().then(function () {
                            e.Speech(e.walker), e.Start();
                          });
                      })
                      .catch(function (t) {
                        return console.log(t.message);
                      })
                  );
                t.prototype.Start.call(this),
                  (this.speechGenerator =
                    sre.SpeechGeneratorFactory.generator("Direct")),
                  this.speechGenerator.setOptions(o),
                  (this.walker = sre.WalkerFactory.walker(
                    "table",
                    this.node,
                    this.speechGenerator,
                    this.highlighter,
                    this.mml
                  )),
                  this.walker.activate(),
                  this.Update(),
                  this.document.options.a11y[this.showRegion] &&
                    this.region.Show(this.node, this.highlighter),
                  (this.restarted = !0);
              }
            }),
            (e.prototype.Update = function (e) {
              void 0 === e && (e = !1), t.prototype.Update.call(this, e);
              var o = this.speechGenerator.getOptions();
              SRE.setupEngine({ modality: o.modality, locale: o.locale }),
                this.region.Update(this.walker.speech()),
                "speech" === o.modality &&
                  ((this.document.options.sre.domain = o.domain),
                  (this.document.options.sre.style = o.style),
                  (this.document.options.a11y.speechRules =
                    o.domain + "-" + o.style));
            }),
            (e.prototype.Speech = function (t) {
              t.speech(),
                this.node.setAttribute("hasspeech", "true"),
                this.Update(),
                this.restarted &&
                  this.document.options.a11y[this.showRegion] &&
                  this.region.Show(this.node, this.highlighter);
            }),
            (e.prototype.KeyDown = function (t) {
              var e = t.keyCode;
              if (((this.walker.modifier = t.shiftKey), 27 === e))
                return this.Stop(), void this.stopEvent(t);
              if (this.active) {
                if ((this.Move(e), this.triggerLink(e))) return;
                this.stopEvent(t);
              } else
                ((32 === e && t.shiftKey) || 13 === e) &&
                  (this.Start(), this.stopEvent(t));
            }),
            (e.prototype.triggerLink = function (t) {
              var e, o;
              if (13 !== t) return !1;
              var r =
                null === (e = this.walker.getFocus().getNodes()) || void 0 === e
                  ? void 0
                  : e[0];
              return (
                !!(null ===
                  (o =
                    null == r
                      ? void 0
                      : r.getAttribute("data-semantic-postfix")) || void 0 === o
                  ? void 0
                  : o.match(/(^| )link($| )/)) &&
                (r.parentNode.dispatchEvent(new MouseEvent("click")), !0)
              );
            }),
            (e.prototype.Move = function (t) {
              this.walker.move(t), this.Update();
            }),
            (e.prototype.initWalker = function () {
              this.speechGenerator =
                sre.SpeechGeneratorFactory.generator("Tree");
              var t = sre.WalkerFactory.walker(
                "dummy",
                this.node,
                this.speechGenerator,
                this.highlighter,
                this.mml
              );
              this.walker = t;
            }),
            (e.prototype.getOptions = function () {
              var t = this.speechGenerator.getOptions(),
                e = this.document.options.sre;
              return (
                "speech" !== t.modality ||
                  (t.locale === e.locale &&
                    t.domain === e.domain &&
                    t.style === e.style) ||
                  ((t.domain = e.domain),
                  (t.style = e.style),
                  (t.locale = e.locale),
                  this.walker.update(t)),
                t
              );
            }),
            e
          );
        })(s);
        e.SpeechExplorer = l;
        var h = (function (t) {
          function e(e, o, r, n) {
            var i = t.call(this, e, o, r) || this;
            return (
              (i.document = e),
              (i.region = o),
              (i.node = r),
              (i.mml = n),
              (i.walker = sre.WalkerFactory.walker(
                "table",
                i.node,
                sre.SpeechGeneratorFactory.generator("Dummy"),
                i.highlighter,
                i.mml
              )),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.Update = function (e) {
              void 0 === e && (e = !1),
                t.prototype.Update.call(this, e),
                this.showFocus();
            }),
            (e.prototype.Start = function () {
              t.prototype.Start.call(this),
                this.attached &&
                  (this.region.Show(this.node, this.highlighter),
                  this.walker.activate(),
                  this.Update());
            }),
            (e.prototype.showFocus = function () {
              var t = this.walker.getFocus().getNodes()[0];
              this.region.Show(t, this.highlighter);
            }),
            (e.prototype.Move = function (t) {
              this.walker.move(t) && this.Update();
            }),
            (e.prototype.KeyDown = function (t) {
              var e = t.keyCode;
              return (
                (this.walker.modifier = t.shiftKey),
                27 === e
                  ? (this.Stop(), void this.stopEvent(t))
                  : this.active && 13 !== e
                  ? (this.Move(e), void this.stopEvent(t))
                  : void (
                      ((32 === e && t.shiftKey) || 13 === e) &&
                      (this.Start(), this.stopEvent(t))
                    )
              );
            }),
            e
          );
        })(s);
        e.Magnifier = h;
      },
      85: function (t, e, o) {
        var r,
          n =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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
          i =
            (this && this.__read) ||
            function (t, e) {
              var o = "function" == typeof Symbol && t[Symbol.iterator];
              if (!o) return t;
              var r,
                n,
                i = o.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  r && !r.done && (o = i.return) && o.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FlameHoverer =
            e.ContentHoverer =
            e.ValueHoverer =
            e.Hoverer =
            e.AbstractMouseExplorer =
              void 0);
        var a = o(367),
          s = o(724);
        o(961);
        var l = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.events = t.prototype.Events.call(e).concat([
                ["mouseover", e.MouseOver.bind(e)],
                ["mouseout", e.MouseOut.bind(e)],
              ])),
              e
            );
          }
          return (
            n(e, t),
            (e.prototype.MouseOver = function (t) {
              this.Start();
            }),
            (e.prototype.MouseOut = function (t) {
              this.Stop();
            }),
            e
          );
        })(s.AbstractExplorer);
        e.AbstractMouseExplorer = l;
        var h = (function (t) {
          function e(e, o, r, n, i) {
            var a = t.call(this, e, o, r) || this;
            return (
              (a.document = e),
              (a.region = o),
              (a.node = r),
              (a.nodeQuery = n),
              (a.nodeAccess = i),
              a
            );
          }
          return (
            n(e, t),
            (e.prototype.MouseOut = function (e) {
              (e.clientX === this.coord[0] && e.clientY === this.coord[1]) ||
                (this.highlighter.unhighlight(),
                this.region.Hide(),
                t.prototype.MouseOut.call(this, e));
            }),
            (e.prototype.MouseOver = function (e) {
              t.prototype.MouseOver.call(this, e);
              var o = e.target;
              this.coord = [e.clientX, e.clientY];
              var r = i(this.getNode(o), 2),
                n = r[0],
                a = r[1];
              n &&
                (this.highlighter.unhighlight(),
                this.highlighter.highlight([n]),
                this.region.Update(a),
                this.region.Show(n, this.highlighter));
            }),
            (e.prototype.getNode = function (t) {
              for (var e = t; t && t !== this.node; ) {
                if (this.nodeQuery(t)) return [t, this.nodeAccess(t)];
                t = t.parentNode;
              }
              for (t = e; t; ) {
                if (this.nodeQuery(t)) return [t, this.nodeAccess(t)];
                var o = t.childNodes[0];
                t = o && "defs" === o.tagName ? t.childNodes[1] : o;
              }
              return [null, null];
            }),
            e
          );
        })(l);
        e.Hoverer = h;
        var c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), e;
        })(h);
        e.ValueHoverer = c;
        var p = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), e;
        })(h);
        e.ContentHoverer = p;
        var u = (function (t) {
          function e(e, o, r) {
            var n =
              t.call(
                this,
                e,
                new a.DummyRegion(e),
                r,
                function (t) {
                  return n.highlighter.isMactionNode(t);
                },
                function () {}
              ) || this;
            return (n.document = e), (n.node = r), n;
          }
          return n(e, t), e;
        })(h);
        e.FlameHoverer = u;
      },
      367: function (t, e, o) {
        var r,
          n,
          i,
          a,
          s =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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
          (e.HoverRegion =
            e.LiveRegion =
            e.ToolTip =
            e.StringRegion =
            e.DummyRegion =
            e.AbstractRegion =
              void 0);
        var l = o(888);
        o(961);
        var h = (function () {
          function t(t) {
            (this.document = t),
              (this.CLASS = this.constructor),
              this.AddStyles(),
              this.AddElement();
          }
          return (
            (t.prototype.AddStyles = function () {
              if (!this.CLASS.styleAdded) {
                var t = this.document.adaptor.node("style");
                (t.innerHTML = this.CLASS.style.cssText),
                  this.document.adaptor
                    .head(this.document.adaptor.document)
                    .appendChild(t),
                  (this.CLASS.styleAdded = !0);
              }
            }),
            (t.prototype.AddElement = function () {
              var t = this.document.adaptor.node("div");
              t.classList.add(this.CLASS.className),
                (t.style.backgroundColor = "white"),
                (this.div = t),
                (this.inner = this.document.adaptor.node("div")),
                this.div.appendChild(this.inner),
                this.document.adaptor
                  .body(this.document.adaptor.document)
                  .appendChild(this.div);
            }),
            (t.prototype.Show = function (t, e) {
              this.position(t),
                this.highlight(e),
                this.div.classList.add(this.CLASS.className + "_Show");
            }),
            (t.prototype.Hide = function () {
              this.div.classList.remove(this.CLASS.className + "_Show");
            }),
            (t.prototype.stackRegions = function (t) {
              for (
                var e = t.getBoundingClientRect(),
                  o = 0,
                  r = Number.POSITIVE_INFINITY,
                  n = this.document.adaptor.document.getElementsByClassName(
                    this.CLASS.className + "_Show"
                  ),
                  i = 0,
                  a = void 0;
                (a = n[i]);
                i++
              )
                a !== this.div &&
                  ((o = Math.max(a.getBoundingClientRect().bottom, o)),
                  (r = Math.min(a.getBoundingClientRect().left, r)));
              var s = (o || e.bottom + 10) + window.pageYOffset,
                l =
                  (r < Number.POSITIVE_INFINITY ? r : e.left) +
                  window.pageXOffset;
              (this.div.style.top = s + "px"), (this.div.style.left = l + "px");
            }),
            (t.styleAdded = !1),
            t
          );
        })();
        e.AbstractRegion = h;
        var c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            s(e, t),
            (e.prototype.Clear = function () {}),
            (e.prototype.Update = function () {}),
            (e.prototype.Hide = function () {}),
            (e.prototype.Show = function () {}),
            (e.prototype.AddElement = function () {}),
            (e.prototype.AddStyles = function () {}),
            (e.prototype.position = function () {}),
            (e.prototype.highlight = function (t) {}),
            e
          );
        })(h);
        e.DummyRegion = c;
        var p = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            s(e, t),
            (e.prototype.Clear = function () {
              this.Update(""),
                (this.inner.style.top = ""),
                (this.inner.style.backgroundColor = "");
            }),
            (e.prototype.Update = function (t) {
              (this.inner.textContent = ""), (this.inner.textContent = t);
            }),
            (e.prototype.position = function (t) {
              this.stackRegions(t);
            }),
            (e.prototype.highlight = function (t) {
              var e = t.colorString();
              (this.inner.style.backgroundColor = e.background),
                (this.inner.style.color = e.foreground);
            }),
            e
          );
        })(h);
        e.StringRegion = p;
        var u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            s(e, t),
            (e.className = "MJX_ToolTip"),
            (e.style = new l.CssStyles(
              (((n = {})["." + e.className] = {
                position: "absolute",
                display: "inline-block",
                height: "1px",
                width: "1px",
              }),
              (n["." + e.className + "_Show"] = {
                width: "auto",
                height: "auto",
                opacity: 1,
                "text-align": "center",
                "border-radius": "6px",
                padding: "0px 0px",
                "border-bottom": "1px dotted black",
                position: "absolute",
                "z-index": 202,
              }),
              n)
            )),
            e
          );
        })(p);
        e.ToolTip = u;
        var d = (function (t) {
          function e(e) {
            var o = t.call(this, e) || this;
            return (
              (o.document = e), o.div.setAttribute("aria-live", "assertive"), o
            );
          }
          return (
            s(e, t),
            (e.className = "MJX_LiveRegion"),
            (e.style = new l.CssStyles(
              (((i = {})["." + e.className] = {
                position: "absolute",
                top: "0",
                height: "1px",
                width: "1px",
                padding: "1px",
                overflow: "hidden",
              }),
              (i["." + e.className + "_Show"] = {
                top: "0",
                position: "absolute",
                width: "auto",
                height: "auto",
                padding: "0px 0px",
                opacity: 1,
                "z-index": "202",
                left: 0,
                right: 0,
                margin: "0 auto",
                "background-color": "rgba(0, 0, 255, 0.2)",
                "box-shadow": "0px 10px 20px #888",
                border: "2px solid #CCCCCC",
              }),
              i)
            )),
            e
          );
        })(p);
        e.LiveRegion = d;
        var f = (function (t) {
          function e(e) {
            var o = t.call(this, e) || this;
            return (o.document = e), (o.inner.style.lineHeight = "0"), o;
          }
          return (
            s(e, t),
            (e.prototype.position = function (t) {
              var e,
                o = t.getBoundingClientRect(),
                r = this.div.getBoundingClientRect(),
                n = o.left + o.width / 2 - r.width / 2;
              switch (
                ((n = n < 0 ? 0 : n),
                (n += window.pageXOffset),
                this.document.options.a11y.align)
              ) {
                case "top":
                  e = o.top - r.height - 10;
                  break;
                case "bottom":
                  e = o.bottom + 10;
                  break;
                case "center":
                default:
                  e = o.top + o.height / 2 - r.height / 2;
              }
              (e = (e += window.pageYOffset) < 0 ? 0 : e),
                (this.div.style.top = e + "px"),
                (this.div.style.left = n + "px");
            }),
            (e.prototype.highlight = function (t) {
              if (
                !this.inner.firstChild ||
                this.inner.firstChild.hasAttribute("sre-highlight")
              ) {
                var e = t.colorString();
                (this.inner.style.backgroundColor = e.background),
                  (this.inner.style.color = e.foreground);
              }
            }),
            (e.prototype.Show = function (e, o) {
              (this.div.style.fontSize = this.document.options.a11y.magnify),
                this.Update(e),
                t.prototype.Show.call(this, e, o);
            }),
            (e.prototype.Clear = function () {
              (this.inner.textContent = ""),
                (this.inner.style.top = ""),
                (this.inner.style.backgroundColor = "");
            }),
            (e.prototype.Update = function (t) {
              this.Clear();
              var e = this.cloneNode(t);
              this.inner.appendChild(e);
            }),
            (e.prototype.cloneNode = function (t) {
              var e = t.cloneNode(!0);
              if ("MJX-CONTAINER" !== e.nodeName) {
                "g" !== e.nodeName &&
                  (e.style.marginLeft = e.style.marginRight = "0");
                for (var o = t; o && "MJX-CONTAINER" !== o.nodeName; )
                  o = o.parentNode;
                if ("MJX-MATH" !== e.nodeName && "svg" !== e.nodeName)
                  if (
                    "svg" ===
                    (e = o.firstChild.cloneNode(!1).appendChild(e).parentNode)
                      .nodeName
                  ) {
                    e.firstChild.setAttribute(
                      "transform",
                      "matrix(1 0 0 -1 0 0)"
                    );
                    var r = parseFloat(e.getAttribute("viewBox").split(/ /)[2]),
                      n = parseFloat(e.getAttribute("width")),
                      i = t.getBBox(),
                      a = i.x,
                      s = i.y,
                      l = i.width,
                      h = i.height;
                    e.setAttribute("viewBox", [a, -(s + h), l, h].join(" ")),
                      e.removeAttribute("style"),
                      e.setAttribute("width", (n / r) * l + "ex"),
                      e.setAttribute("height", (n / r) * h + "ex"),
                      o.setAttribute("sre-highlight", "false");
                  }
                (e = o.cloneNode(!1).appendChild(e).parentNode).style.margin =
                  "0";
              }
              return e;
            }),
            (e.className = "MJX_HoverRegion"),
            (e.style = new l.CssStyles(
              (((a = {})["." + e.className] = {
                position: "absolute",
                height: "1px",
                width: "1px",
                padding: "1px",
                overflow: "hidden",
              }),
              (a["." + e.className + "_Show"] = {
                position: "absolute",
                width: "max-content",
                height: "auto",
                padding: "0px 0px",
                opacity: 1,
                "z-index": "202",
                margin: "0 auto",
                "background-color": "rgba(0, 0, 255, 0.2)",
                "box-shadow": "0px 10px 20px #888",
                border: "2px solid #CCCCCC",
              }),
              a)
            )),
            e
          );
        })(h);
        e.HoverRegion = f;
      },
      854: function (t, e, o) {
        var r,
          n =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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
          (e.TreeColorer = e.FlameColorer = e.AbstractTreeExplorer = void 0);
        var i = o(724);
        o(961);
        var a = (function (t) {
          function e(e, o, r, n) {
            var i = t.call(this, e, null, r) || this;
            return (
              (i.document = e),
              (i.region = o),
              (i.node = r),
              (i.mml = n),
              (i.stoppable = !1),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.Attach = function () {
              t.prototype.Attach.call(this), this.Start();
            }),
            (e.prototype.Detach = function () {
              this.Stop(), t.prototype.Detach.call(this);
            }),
            e
          );
        })(i.AbstractExplorer);
        e.AbstractTreeExplorer = a;
        var s = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.Start = function () {
              this.active ||
                ((this.active = !0), this.highlighter.highlightAll(this.node));
            }),
            (e.prototype.Stop = function () {
              this.active && this.highlighter.unhighlightAll(this.node),
                (this.active = !1);
            }),
            e
          );
        })(a);
        e.FlameColorer = s;
        var l = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.Start = function () {
              if (!this.active) {
                this.active = !0;
                var t = sre.SpeechGeneratorFactory.generator("Color");
                this.node.hasAttribute("hasforegroundcolor") ||
                  (t.generateSpeech(this.node, this.mml),
                  this.node.setAttribute("hasforegroundcolor", "true")),
                  this.highlighter.colorizeAll(this.node);
              }
            }),
            (e.prototype.Stop = function () {
              this.active && this.highlighter.uncolorizeAll(this.node),
                (this.active = !1);
            }),
            e
          );
        })(a);
        e.TreeColorer = l;
      },
      511: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EnrichedMathItemMixin =
            MathJax._.a11y["semantic-enrich"].EnrichedMathItemMixin),
          (e.EnrichedMathDocumentMixin =
            MathJax._.a11y["semantic-enrich"].EnrichedMathDocumentMixin),
          (e.EnrichHandler = MathJax._.a11y["semantic-enrich"].EnrichHandler);
      },
      961: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.sreReady = MathJax._.a11y.sre.sreReady);
      },
      723: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
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
      433: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.DATAMJX = MathJax._.core.MmlTree.SerializedMmlVisitor.DATAMJX),
          (e.toEntity = MathJax._.core.MmlTree.SerializedMmlVisitor.toEntity),
          (e.SerializedMmlVisitor =
            MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor);
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
      888: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CssStyles = MathJax._.util.StyleList.CssStyles);
      },
      850: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MJContextMenu = MathJax._.ui.menu.MJContextMenu.MJContextMenu);
      },
    },
    e = {};
  function o(r) {
    var n = e[r];
    if (void 0 !== n) return n.exports;
    var i = (e[r] = { exports: {} });
    return t[r].call(i.exports, i, i.exports, o), i.exports;
  }
  !(function () {
    var t = o(723),
      e = o(18),
      r = o(724),
      n = o(269),
      i = o(85),
      a = o(367),
      s = o(854),
      l = o(961);
    (0, t.r8)({
      _: {
        a11y: {
          explorer_ts: e,
          explorer: {
            Explorer: r,
            KeyExplorer: n,
            MouseExplorer: i,
            Region: a,
            TreeExplorer: s,
          },
          sre: l,
        },
      },
    }),
      MathJax.startup &&
        MathJax.startup.extendHandler(function (t) {
          return (0, e.ExplorerHandler)(t);
        });
  })();
})();

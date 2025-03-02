!(function () {
  "use strict";
  var t = {
      205: function (t, e, r) {
        var n,
          o =
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
          i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
          a =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.TeX = void 0);
        var s = r(309),
          l = r(77),
          u = r(982),
          c = r(199),
          f = r(321),
          p = r(810),
          h = r(466),
          d = r(394),
          m = r(251),
          y = r(552);
        r(606);
        var g = (function (t) {
          function e(r) {
            void 0 === r && (r = {});
            var n = this,
              o = a(l.separateOptions(r, e.OPTIONS, u.FindTeX.OPTIONS), 3),
              i = o[0],
              s = o[1],
              f = o[2];
            (n = t.call(this, s) || this).findTeX =
              n.options.FindTeX || new u.FindTeX(f);
            var p = n.options.packages,
              h = (n.configuration = e.configure(p)),
              y = (n._parseOptions = new d.default(h, [
                n.options,
                m.TagsFactory.OPTIONS,
              ]));
            return (
              l.userOptions(y.options, i),
              h.config(n),
              e.tags(y, h),
              n.postFilters.add(c.default.cleanSubSup, -6),
              n.postFilters.add(c.default.setInherited, -5),
              n.postFilters.add(c.default.moveLimits, -4),
              n.postFilters.add(c.default.cleanStretchy, -3),
              n.postFilters.add(c.default.cleanAttributes, -2),
              n.postFilters.add(c.default.combineRelations, -1),
              n
            );
          }
          return (
            o(e, t),
            (e.configure = function (t) {
              var e = new y.ParserConfiguration(t, ["tex"]);
              return e.init(), e;
            }),
            (e.tags = function (t, e) {
              m.TagsFactory.addTags(e.tags),
                m.TagsFactory.setDefault(t.options.tags),
                (t.tags = m.TagsFactory.getDefault()),
                (t.tags.configuration = t);
            }),
            (e.prototype.setMmlFactory = function (e) {
              t.prototype.setMmlFactory.call(this, e),
                this._parseOptions.nodeFactory.setMmlFactory(e);
            }),
            Object.defineProperty(e.prototype, "parseOptions", {
              get: function () {
                return this._parseOptions;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.reset = function (t) {
              void 0 === t && (t = 0), this.parseOptions.tags.reset(t);
            }),
            (e.prototype.compile = function (t, e) {
              this.parseOptions.clear(),
                this.executeFilters(this.preFilters, t, e, this.parseOptions);
              var r,
                n,
                o = t.display;
              (this.latex = t.math), this.parseOptions.tags.startEquation(t);
              try {
                var i = new p.default(
                  this.latex,
                  { display: o, isInner: !1 },
                  this.parseOptions
                );
                (r = i.mml()), (n = i.stack.global);
              } catch (t) {
                if (!(t instanceof h.default)) throw t;
                (this.parseOptions.error = !0),
                  (r = this.options.formatError(this, t));
              }
              return (
                (r = this.parseOptions.nodeFactory.create("node", "math", [r])),
                (null == n ? void 0 : n.indentalign) &&
                  f.default.setAttribute(r, "indentalign", n.indentalign),
                o && f.default.setAttribute(r, "display", "block"),
                this.parseOptions.tags.finishEquation(t),
                (this.parseOptions.root = r),
                this.executeFilters(this.postFilters, t, e, this.parseOptions),
                (this.mathNode = this.parseOptions.root),
                this.mathNode
              );
            }),
            (e.prototype.findMath = function (t) {
              return this.findTeX.findMath(t);
            }),
            (e.prototype.formatError = function (t) {
              var e = t.message.replace(/\n.*/, "");
              return this.parseOptions.nodeFactory.create(
                "error",
                e,
                t.id,
                this.latex
              );
            }),
            (e.NAME = "TeX"),
            (e.OPTIONS = i(i({}, s.AbstractInputJax.OPTIONS), {
              FindTeX: null,
              packages: ["base"],
              digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
              maxBuffer: 5120,
              formatError: function (t, e) {
                return t.formatError(e);
              },
            })),
            e
          );
        })(s.AbstractInputJax);
        e.TeX = g;
      },
      552: function (t, e, r) {
        var n =
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
          o =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ParserConfiguration =
            e.ConfigurationHandler =
            e.Configuration =
              void 0);
        var i,
          a = r(77),
          s = r(910),
          l = r(898),
          u = r(297),
          c = r(251),
          f = (function () {
            function t(t, e, r, n, o, i, a, s, l, u, c, f, p) {
              void 0 === e && (e = {}),
                void 0 === r && (r = {}),
                void 0 === n && (n = {}),
                void 0 === o && (o = {}),
                void 0 === i && (i = {}),
                void 0 === a && (a = {}),
                void 0 === s && (s = []),
                void 0 === l && (l = []),
                void 0 === u && (u = null),
                void 0 === c && (c = null),
                (this.name = t),
                (this.handler = e),
                (this.fallback = r),
                (this.items = n),
                (this.tags = o),
                (this.options = i),
                (this.nodes = a),
                (this.preprocessors = s),
                (this.postprocessors = l),
                (this.initMethod = u),
                (this.configMethod = c),
                (this.priority = f),
                (this.parser = p),
                (this.handler = Object.assign(
                  { character: [], delimiter: [], macro: [], environment: [] },
                  e
                ));
            }
            return (
              (t.makeProcessor = function (t, e) {
                return Array.isArray(t) ? t : [t, e];
              }),
              (t._create = function (e, r) {
                var n = this;
                void 0 === r && (r = {});
                var o = r.priority || u.PrioritizedList.DEFAULTPRIORITY,
                  i = r.init ? this.makeProcessor(r.init, o) : null,
                  a = r.config ? this.makeProcessor(r.config, o) : null,
                  s = (r.preprocessors || []).map(function (t) {
                    return n.makeProcessor(t, o);
                  }),
                  l = (r.postprocessors || []).map(function (t) {
                    return n.makeProcessor(t, o);
                  }),
                  c = r.parser || "tex";
                return new t(
                  e,
                  r.handler || {},
                  r.fallback || {},
                  r.items || {},
                  r.tags || {},
                  r.options || {},
                  r.nodes || {},
                  s,
                  l,
                  i,
                  a,
                  o,
                  c
                );
              }),
              (t.create = function (e, r) {
                void 0 === r && (r = {});
                var n = t._create(e, r);
                return i.set(e, n), n;
              }),
              (t.local = function (e) {
                return void 0 === e && (e = {}), t._create("", e);
              }),
              Object.defineProperty(t.prototype, "init", {
                get: function () {
                  return this.initMethod ? this.initMethod[0] : null;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "config", {
                get: function () {
                  return this.configMethod ? this.configMethod[0] : null;
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })();
        (e.Configuration = f),
          (function (t) {
            var e = new Map();
            (t.set = function (t, r) {
              e.set(t, r);
            }),
              (t.get = function (t) {
                return e.get(t);
              }),
              (t.keys = function () {
                return e.keys();
              });
          })((i = e.ConfigurationHandler || (e.ConfigurationHandler = {})));
        var p = (function () {
          function t(t, e) {
            var r, o, i, a;
            void 0 === e && (e = ["tex"]),
              (this.initMethod = new l.FunctionList()),
              (this.configMethod = new l.FunctionList()),
              (this.configurations = new u.PrioritizedList()),
              (this.parsers = []),
              (this.handlers = new s.SubHandlers()),
              (this.items = {}),
              (this.tags = {}),
              (this.options = {}),
              (this.nodes = {}),
              (this.parsers = e);
            try {
              for (
                var c = n(t.slice().reverse()), f = c.next();
                !f.done;
                f = c.next()
              ) {
                var p = f.value;
                this.addPackage(p);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                f && !f.done && (o = c.return) && o.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
            try {
              for (
                var h = n(this.configurations), d = h.next();
                !d.done;
                d = h.next()
              ) {
                var m = d.value,
                  y = m.item,
                  g = m.priority;
                this.append(y, g);
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                d && !d.done && (a = h.return) && a.call(h);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          return (
            (t.prototype.init = function () {
              this.initMethod.execute(this);
            }),
            (t.prototype.config = function (t) {
              var e, r;
              this.configMethod.execute(this, t);
              try {
                for (
                  var o = n(this.configurations), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var a = i.value;
                  this.addFilters(t, a.item);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (t.prototype.addPackage = function (t) {
              var e = "string" == typeof t ? t : t[0],
                r = this.getPackage(e);
              r &&
                this.configurations.add(
                  r,
                  "string" == typeof t ? r.priority : t[1]
                );
            }),
            (t.prototype.add = function (t, e, r) {
              var o, i;
              void 0 === r && (r = {});
              var s = this.getPackage(t);
              this.append(s),
                this.configurations.add(s, s.priority),
                this.init();
              var l = e.parseOptions;
              l.nodeFactory.setCreators(s.nodes);
              try {
                for (
                  var u = n(Object.keys(s.items)), f = u.next();
                  !f.done;
                  f = u.next()
                ) {
                  var p = f.value;
                  l.itemFactory.setNodeClass(p, s.items[p]);
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  f && !f.done && (i = u.return) && i.call(u);
                } finally {
                  if (o) throw o.error;
                }
              }
              c.TagsFactory.addTags(s.tags),
                a.defaultOptions(l.options, s.options),
                a.userOptions(l.options, r),
                this.addFilters(e, s),
                s.config && s.config(this, e);
            }),
            (t.prototype.getPackage = function (t) {
              var e = i.get(t);
              if (e && this.parsers.indexOf(e.parser) < 0)
                throw Error(
                  "Package " + t + " doesn't target the proper parser"
                );
              return e;
            }),
            (t.prototype.append = function (t, e) {
              (e = e || t.priority),
                t.initMethod &&
                  this.initMethod.add(t.initMethod[0], t.initMethod[1]),
                t.configMethod &&
                  this.configMethod.add(t.configMethod[0], t.configMethod[1]),
                this.handlers.add(t.handler, t.fallback, e),
                Object.assign(this.items, t.items),
                Object.assign(this.tags, t.tags),
                a.defaultOptions(this.options, t.options),
                Object.assign(this.nodes, t.nodes);
            }),
            (t.prototype.addFilters = function (t, e) {
              var r, i, a, s;
              try {
                for (
                  var l = n(e.preprocessors), u = l.next();
                  !u.done;
                  u = l.next()
                ) {
                  var c = o(u.value, 2),
                    f = c[0],
                    p = c[1];
                  t.preFilters.add(f, p);
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  u && !u.done && (i = l.return) && i.call(l);
                } finally {
                  if (r) throw r.error;
                }
              }
              try {
                for (
                  var h = n(e.postprocessors), d = h.next();
                  !d.done;
                  d = h.next()
                ) {
                  var m = o(d.value, 2),
                    y = m[0];
                  p = m[1];
                  t.postFilters.add(y, p);
                }
              } catch (t) {
                a = { error: t };
              } finally {
                try {
                  d && !d.done && (s = h.return) && s.call(h);
                } finally {
                  if (a) throw a.error;
                }
              }
            }),
            t
          );
        })();
        e.ParserConfiguration = p;
      },
      199: function (t, e, r) {
        var n =
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
              e ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o,
          i = r(921),
          a = r(321);
        !(function (t) {
          (t.cleanStretchy = function (t) {
            var e,
              r,
              o = t.data;
            try {
              for (
                var i = n(o.getList("fixStretchy")), s = i.next();
                !s.done;
                s = i.next()
              ) {
                var l = s.value;
                if (a.default.getProperty(l, "fixStretchy")) {
                  var u = a.default.getForm(l);
                  u &&
                    u[3] &&
                    u[3].stretchy &&
                    a.default.setAttribute(l, "stretchy", !1);
                  var c = l.parent;
                  if (!(a.default.getTexClass(l) || (u && u[2]))) {
                    var f = o.nodeFactory.create("node", "TeXAtom", [l]);
                    c.replaceChild(f, l), f.inheritAttributesFrom(l);
                  }
                  a.default.removeProperties(l, "fixStretchy");
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (r = i.return) && r.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
            (t.cleanAttributes = function (t) {
              t.data.root.walkTree(function (t, e) {
                var r,
                  o,
                  i = t.attributes;
                if (i)
                  try {
                    for (
                      var a = n(i.getExplicitNames()), s = a.next();
                      !s.done;
                      s = a.next()
                    ) {
                      var l = s.value;
                      i.attributes[l] === t.attributes.getInherited(l) &&
                        delete i.attributes[l];
                    }
                  } catch (t) {
                    r = { error: t };
                  } finally {
                    try {
                      s && !s.done && (o = a.return) && o.call(a);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
              }, {});
            }),
            (t.combineRelations = function (t) {
              var o,
                s,
                l,
                u,
                c = [];
              try {
                for (
                  var f = n(t.data.getList("mo")), p = f.next();
                  !p.done;
                  p = f.next()
                ) {
                  var h = p.value;
                  if (
                    !h.getProperty("relationsCombined") &&
                    h.parent &&
                    (!h.parent || a.default.isType(h.parent, "mrow")) &&
                    a.default.getTexClass(h) === i.TEXCLASS.REL
                  ) {
                    for (
                      var d = h.parent,
                        m = void 0,
                        y = d.childNodes,
                        g = y.indexOf(h) + 1,
                        v = a.default.getProperty(h, "variantForm");
                      g < y.length &&
                      (m = y[g]) &&
                      a.default.isType(m, "mo") &&
                      a.default.getTexClass(m) === i.TEXCLASS.REL;

                    ) {
                      if (
                        v !== a.default.getProperty(m, "variantForm") ||
                        !r(h, m)
                      ) {
                        null == h.attributes.getExplicit("rspace") &&
                          a.default.setAttribute(h, "rspace", "0pt"),
                          null == m.attributes.getExplicit("lspace") &&
                            a.default.setAttribute(m, "lspace", "0pt");
                        break;
                      }
                      a.default.appendChildren(h, a.default.getChildren(m)),
                        e(["stretchy", "rspace"], h, m);
                      try {
                        for (
                          var b = ((l = void 0), n(m.getPropertyNames())),
                            x = b.next();
                          !x.done;
                          x = b.next()
                        ) {
                          var T = x.value;
                          h.setProperty(T, m.getProperty(T));
                        }
                      } catch (t) {
                        l = { error: t };
                      } finally {
                        try {
                          x && !x.done && (u = b.return) && u.call(b);
                        } finally {
                          if (l) throw l.error;
                        }
                      }
                      y.splice(g, 1),
                        c.push(m),
                        (m.parent = null),
                        m.setProperty("relationsCombined", !0);
                    }
                    h.attributes.setInherited("form", h.getForms()[0]);
                  }
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  p && !p.done && (s = f.return) && s.call(f);
                } finally {
                  if (o) throw o.error;
                }
              }
              t.data.removeFromList("mo", c);
            });
          var e = function (t, e, r) {
              var n = e.attributes,
                o = r.attributes;
              t.forEach(function (t) {
                var e = o.getExplicit(t);
                null != e && n.set(t, e);
              });
            },
            r = function (t, e) {
              var r,
                o,
                i = function (t, e) {
                  return t.getExplicitNames().filter(function (r) {
                    return (
                      r !== e && ("stretchy" !== r || t.getExplicit("stretchy"))
                    );
                  });
                },
                a = t.attributes,
                s = e.attributes,
                l = i(a, "lspace"),
                u = i(s, "rspace");
              if (l.length !== u.length) return !1;
              try {
                for (var c = n(l), f = c.next(); !f.done; f = c.next()) {
                  var p = f.value;
                  if (a.getExplicit(p) !== s.getExplicit(p)) return !1;
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  f && !f.done && (o = c.return) && o.call(c);
                } finally {
                  if (r) throw r.error;
                }
              }
              return !0;
            },
            o = function (t, e, r) {
              var o,
                i,
                s = [];
              try {
                for (
                  var l = n(t.getList("m" + e + r)), u = l.next();
                  !u.done;
                  u = l.next()
                ) {
                  var c = u.value,
                    f = c.childNodes;
                  if (!f[c[e]] || !f[c[r]]) {
                    var p = c.parent,
                      h = f[c[e]]
                        ? t.nodeFactory.create("node", "m" + e, [
                            f[c.base],
                            f[c[e]],
                          ])
                        : t.nodeFactory.create("node", "m" + r, [
                            f[c.base],
                            f[c[r]],
                          ]);
                    a.default.copyAttributes(c, h),
                      p ? p.replaceChild(h, c) : (t.root = h),
                      s.push(c);
                  }
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  u && !u.done && (i = l.return) && i.call(l);
                } finally {
                  if (o) throw o.error;
                }
              }
              t.removeFromList("m" + e + r, s);
            };
          t.cleanSubSup = function (t) {
            var e = t.data;
            e.error || (o(e, "sub", "sup"), o(e, "under", "over"));
          };
          var s = function (t, e, r) {
            var o,
              i,
              s = [];
            try {
              for (
                var l = n(t.getList(e)), u = l.next();
                !u.done;
                u = l.next()
              ) {
                var c = u.value;
                if (!c.attributes.get("displaystyle")) {
                  var f = c.childNodes[c.base],
                    p = f.coreMO();
                  if (
                    f.getProperty("movablelimits") &&
                    !p.attributes.getExplicit("movablelimits")
                  ) {
                    var h = t.nodeFactory.create("node", r, c.childNodes);
                    a.default.copyAttributes(c, h),
                      c.parent ? c.parent.replaceChild(h, c) : (t.root = h),
                      s.push(c);
                  }
                }
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                u && !u.done && (i = l.return) && i.call(l);
              } finally {
                if (o) throw o.error;
              }
            }
            t.removeFromList(e, s);
          };
          (t.moveLimits = function (t) {
            var e = t.data;
            s(e, "munderover", "msubsup"),
              s(e, "munder", "msub"),
              s(e, "mover", "msup");
          }),
            (t.setInherited = function (t) {
              t.data.root.setInheritedAttributes({}, t.math.display, 0, !1);
            });
        })(o || (o = {})),
          (e.default = o);
      },
      982: function (t, e, r) {
        var n,
          o =
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
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FindTeX = void 0);
        var a = r(649),
          s = r(720),
          l = r(769),
          u = (function (t) {
            function e(e) {
              var r = t.call(this, e) || this;
              return r.getPatterns(), r;
            }
            return (
              o(e, t),
              (e.prototype.getPatterns = function () {
                var t = this,
                  e = this.options,
                  r = [],
                  n = [],
                  o = [];
                (this.end = {}), (this.env = this.sub = 0);
                var i = 1;
                e.inlineMath.forEach(function (e) {
                  return t.addPattern(r, e, !1);
                }),
                  e.displayMath.forEach(function (e) {
                    return t.addPattern(r, e, !0);
                  }),
                  r.length && n.push(r.sort(s.sortLength).join("|")),
                  e.processEnvironments &&
                    (n.push("\\\\begin\\s*\\{([^}]*)\\}"), (this.env = i), i++),
                  e.processEscapes && o.push("\\\\([\\\\$])"),
                  e.processRefs && o.push("(\\\\(?:eq)?ref\\s*\\{[^}]*\\})"),
                  o.length && (n.push("(" + o.join("|") + ")"), (this.sub = i)),
                  (this.start = new RegExp(n.join("|"), "g")),
                  (this.hasPatterns = n.length > 0);
              }),
              (e.prototype.addPattern = function (t, e, r) {
                var n = i(e, 2),
                  o = n[0],
                  a = n[1];
                t.push(s.quotePattern(o)),
                  (this.end[o] = [a, r, this.endPattern(a)]);
              }),
              (e.prototype.endPattern = function (t, e) {
                return new RegExp(
                  (e || s.quotePattern(t)) + "|\\\\(?:[a-zA-Z]|.)|[{}]",
                  "g"
                );
              }),
              (e.prototype.findEnd = function (t, e, r, n) {
                for (
                  var o,
                    a = i(n, 3),
                    s = a[0],
                    u = a[1],
                    c = a[2],
                    f = (c.lastIndex = r.index + r[0].length),
                    p = 0;
                  (o = c.exec(t));

                ) {
                  if ((o[1] || o[0]) === s && 0 === p)
                    return l.protoItem(
                      r[0],
                      t.substr(f, o.index - f),
                      o[0],
                      e,
                      r.index,
                      o.index + o[0].length,
                      u
                    );
                  "{" === o[0] ? p++ : "}" === o[0] && p && p--;
                }
                return null;
              }),
              (e.prototype.findMathInString = function (t, e, r) {
                var n, o;
                for (this.start.lastIndex = 0; (n = this.start.exec(r)); ) {
                  if (void 0 !== n[this.env] && this.env) {
                    var i =
                      "\\\\end\\s*(\\{" + s.quotePattern(n[this.env]) + "\\})";
                    (o = this.findEnd(r, e, n, [
                      "{" + n[this.env] + "}",
                      !0,
                      this.endPattern(null, i),
                    ])) &&
                      ((o.math = o.open + o.math + o.close),
                      (o.open = o.close = ""));
                  } else if (void 0 !== n[this.sub] && this.sub) {
                    var a = n[this.sub];
                    i = n.index + n[this.sub].length;
                    o =
                      2 === a.length
                        ? l.protoItem("", a.substr(1), "", e, n.index, i)
                        : l.protoItem("", a, "", e, n.index, i, !1);
                  } else o = this.findEnd(r, e, n, this.end[n[0]]);
                  o && (t.push(o), (this.start.lastIndex = o.end.n));
                }
              }),
              (e.prototype.findMath = function (t) {
                var e = [];
                if (this.hasPatterns)
                  for (var r = 0, n = t.length; r < n; r++)
                    this.findMathInString(e, r, t[r]);
                return e;
              }),
              (e.OPTIONS = {
                inlineMath: [["\\(", "\\)"]],
                displayMath: [
                  ["$$", "$$"],
                  ["\\[", "\\]"],
                ],
                processEscapes: !0,
                processEnvironments: !0,
                processRefs: !0,
              }),
              e
            );
          })(a.AbstractFindMath);
        e.FindTeX = u;
      },
      910: function (t, e, r) {
        var n =
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
          o =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SubHandlers = e.SubHandler = e.MapHandler = void 0);
        var i,
          a = r(297),
          s = r(898);
        !(function (t) {
          var e = new Map();
          (t.register = function (t) {
            e.set(t.name, t);
          }),
            (t.getMap = function (t) {
              return e.get(t);
            });
        })((i = e.MapHandler || (e.MapHandler = {})));
        var l = (function () {
          function t() {
            (this._configuration = new a.PrioritizedList()),
              (this._fallback = new s.FunctionList());
          }
          return (
            (t.prototype.add = function (t, e, r) {
              var o, s;
              void 0 === r && (r = a.PrioritizedList.DEFAULTPRIORITY);
              try {
                for (
                  var l = n(t.slice().reverse()), u = l.next();
                  !u.done;
                  u = l.next()
                ) {
                  var c = u.value,
                    f = i.getMap(c);
                  if (!f)
                    return void this.warn(
                      "Configuration " + c + " not found! Omitted."
                    );
                  this._configuration.add(f, r);
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  u && !u.done && (s = l.return) && s.call(l);
                } finally {
                  if (o) throw o.error;
                }
              }
              e && this._fallback.add(e, r);
            }),
            (t.prototype.parse = function (t) {
              var e, r;
              try {
                for (
                  var i = n(this._configuration), a = i.next();
                  !a.done;
                  a = i.next()
                ) {
                  var s = a.value.item.parse(t);
                  if (s) return s;
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
              var l = o(t, 2),
                u = l[0],
                c = l[1];
              Array.from(this._fallback)[0].item(u, c);
            }),
            (t.prototype.lookup = function (t) {
              var e = this.applicable(t);
              return e ? e.lookup(t) : null;
            }),
            (t.prototype.contains = function (t) {
              return !!this.applicable(t);
            }),
            (t.prototype.toString = function () {
              var t,
                e,
                r = [];
              try {
                for (
                  var o = n(this._configuration), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var a = i.value.item;
                  r.push(a.name);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (e = o.return) && e.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              return r.join(", ");
            }),
            (t.prototype.applicable = function (t) {
              var e, r;
              try {
                for (
                  var o = n(this._configuration), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var a = i.value.item;
                  if (a.contains(t)) return a;
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return null;
            }),
            (t.prototype.retrieve = function (t) {
              var e, r;
              try {
                for (
                  var o = n(this._configuration), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var a = i.value.item;
                  if (a.name === t) return a;
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return null;
            }),
            (t.prototype.warn = function (t) {
              console.log("TexParser Warning: " + t);
            }),
            t
          );
        })();
        e.SubHandler = l;
        var u = (function () {
          function t() {
            this.map = new Map();
          }
          return (
            (t.prototype.add = function (t, e, r) {
              var o, i;
              void 0 === r && (r = a.PrioritizedList.DEFAULTPRIORITY);
              try {
                for (
                  var s = n(Object.keys(t)), u = s.next();
                  !u.done;
                  u = s.next()
                ) {
                  var c = u.value,
                    f = this.get(c);
                  f || ((f = new l()), this.set(c, f)), f.add(t[c], e[c], r);
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  u && !u.done && (i = s.return) && i.call(s);
                } finally {
                  if (o) throw o.error;
                }
              }
            }),
            (t.prototype.set = function (t, e) {
              this.map.set(t, e);
            }),
            (t.prototype.get = function (t) {
              return this.map.get(t);
            }),
            (t.prototype.retrieve = function (t) {
              var e, r;
              try {
                for (
                  var o = n(this.map.values()), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var a = i.value.retrieve(t);
                  if (a) return a;
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return null;
            }),
            (t.prototype.keys = function () {
              return this.map.keys();
            }),
            t
          );
        })();
        e.SubHandlers = u;
      },
      644: function (t, e, r) {
        var n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          o =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NodeFactory = void 0);
        var i = r(321),
          a = (function () {
            function t() {
              (this.mmlFactory = null),
                (this.factory = {
                  node: t.createNode,
                  token: t.createToken,
                  text: t.createText,
                  error: t.createError,
                });
            }
            return (
              (t.createNode = function (t, e, r, n, o) {
                void 0 === r && (r = []), void 0 === n && (n = {});
                var a = t.mmlFactory.create(e);
                return (
                  a.setChildren(r),
                  o && a.appendChild(o),
                  i.default.setProperties(a, n),
                  a
                );
              }),
              (t.createToken = function (t, e, r, n) {
                void 0 === r && (r = {}), void 0 === n && (n = "");
                var o = t.create("text", n);
                return t.create("node", e, [], r, o);
              }),
              (t.createText = function (t, e) {
                return null == e
                  ? null
                  : t.mmlFactory.create("text").setText(e);
              }),
              (t.createError = function (t, e) {
                var r = t.create("text", e),
                  n = t.create("node", "mtext", [], {}, r);
                return t.create("node", "merror", [n], { "data-mjx-error": e });
              }),
              (t.prototype.setMmlFactory = function (t) {
                this.mmlFactory = t;
              }),
              (t.prototype.set = function (t, e) {
                this.factory[t] = e;
              }),
              (t.prototype.setCreators = function (t) {
                for (var e in t) this.set(e, t[e]);
              }),
              (t.prototype.create = function (t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                  e[r - 1] = arguments[r];
                var i = this.factory[t] || this.factory.node,
                  a = i.apply(void 0, o([this, e[0]], n(e.slice(1))));
                return "node" === t && this.configuration.addNode(e[0], a), a;
              }),
              (t.prototype.get = function (t) {
                return this.factory[t];
              }),
              t
            );
          })();
        e.NodeFactory = a;
      },
      321: function (t, e, r) {
        var n =
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
          o =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a,
          s = r(921),
          l = r(946);
        !(function (t) {
          var e = new Map([
            ["autoOP", !0],
            ["fnOP", !0],
            ["movesupsub", !0],
            ["subsupOK", !0],
            ["texprimestyle", !0],
            ["useHeight", !0],
            ["variantForm", !0],
            ["withDelims", !0],
            ["mathaccent", !0],
            ["open", !0],
            ["close", !0],
          ]);
          function r(t, r) {
            var o, i;
            try {
              for (
                var a = n(Object.keys(r)), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var l = s.value,
                  u = r[l];
                "texClass" === l
                  ? ((t.texClass = u), t.setProperty(l, u))
                  : "movablelimits" === l
                  ? (t.setProperty("movablelimits", u),
                    (t.isKind("mo") || t.isKind("mstyle")) &&
                      t.attributes.set("movablelimits", u))
                  : "inferred" === l ||
                    (e.has(l) ? t.setProperty(l, u) : t.attributes.set(l, u));
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                s && !s.done && (i = a.return) && i.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
          }
          function a(t, e, r) {
            (t.childNodes[e] = r), r && (r.parent = t);
          }
          function u(t, e) {
            return t.isKind(e);
          }
          (t.createEntity = function (t) {
            return String.fromCodePoint(parseInt(t, 16));
          }),
            (t.getChildren = function (t) {
              return t.childNodes;
            }),
            (t.getText = function (t) {
              return t.getText();
            }),
            (t.appendChildren = function (t, e) {
              var r, o;
              try {
                for (var i = n(e), a = i.next(); !a.done; a = i.next()) {
                  var s = a.value;
                  t.appendChild(s);
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  a && !a.done && (o = i.return) && o.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
            }),
            (t.setAttribute = function (t, e, r) {
              t.attributes.set(e, r);
            }),
            (t.setProperty = function (t, e, r) {
              t.setProperty(e, r);
            }),
            (t.setProperties = r),
            (t.getProperty = function (t, e) {
              return t.getProperty(e);
            }),
            (t.getAttribute = function (t, e) {
              return t.attributes.get(e);
            }),
            (t.removeProperties = function (t) {
              for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
              t.removeProperty.apply(t, i([], o(e)));
            }),
            (t.getChildAt = function (t, e) {
              return t.childNodes[e];
            }),
            (t.setChild = a),
            (t.copyChildren = function (t, e) {
              for (var r = t.childNodes, n = 0; n < r.length; n++)
                a(e, n, r[n]);
            }),
            (t.copyAttributes = function (t, e) {
              (e.attributes = t.attributes), r(e, t.getAllProperties());
            }),
            (t.isType = u),
            (t.isEmbellished = function (t) {
              return t.isEmbellished;
            }),
            (t.getTexClass = function (t) {
              return t.texClass;
            }),
            (t.getCoreMO = function (t) {
              return t.coreMO();
            }),
            (t.isNode = function (t) {
              return (
                t instanceof s.AbstractMmlNode ||
                t instanceof s.AbstractMmlEmptyNode
              );
            }),
            (t.isInferred = function (t) {
              return t.isInferred;
            }),
            (t.getForm = function (t) {
              var e, r;
              if (!u(t, "mo")) return null;
              var o = t,
                i = o.getForms();
              try {
                for (var a = n(i), s = a.next(); !s.done; s = a.next()) {
                  var c = s.value,
                    f = l.MmlMo.OPTABLE[c][o.getText()];
                  if (f) return f;
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
              return null;
            });
        })(a || (a = {})),
          (e.default = a);
      },
      708: function (t, e, r) {
        var n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          o =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          a = r(321),
          s = r(7),
          l = r(702);
        !(function (t) {
          (t.variable = function (t, e) {
            var r = l.default.getFontDef(t);
            t.stack.env.multiLetterIdentifiers &&
              "" !== t.stack.env.font &&
              ((e = t.string.substr(t.i - 1).match(/^[a-z]+/i)[0]),
              (t.i += e.length - 1),
              r.mathvariant === s.TexConstant.Variant.NORMAL &&
                (r.autoOP = !1));
            var n = t.create("token", "mi", r, e);
            t.Push(n);
          }),
            (t.digit = function (t, e) {
              var r,
                n = t.configuration.options.digits,
                o = t.string.slice(t.i - 1).match(n),
                i = l.default.getFontDef(t);
              o
                ? ((r = t.create("token", "mn", i, o[0].replace(/[{}]/g, ""))),
                  (t.i += o[0].length - 1))
                : (r = t.create("token", "mo", i, e)),
                t.Push(r);
            }),
            (t.controlSequence = function (t, e) {
              var r = t.GetCS();
              t.parse("macro", [t, r]);
            }),
            (t.mathchar0mi = function (t, e) {
              var r = e.attributes || {
                  mathvariant: s.TexConstant.Variant.ITALIC,
                },
                n = t.create("token", "mi", r, e.char);
              t.Push(n);
            }),
            (t.mathchar0mo = function (t, e) {
              var r = e.attributes || {};
              r.stretchy = !1;
              var n = t.create("token", "mo", r, e.char);
              a.default.setProperty(n, "fixStretchy", !0),
                t.configuration.addNode("fixStretchy", n),
                t.Push(n);
            }),
            (t.mathchar7 = function (t, e) {
              var r = e.attributes || {
                mathvariant: s.TexConstant.Variant.NORMAL,
              };
              t.stack.env.font && (r.mathvariant = t.stack.env.font);
              var n = t.create("token", "mi", r, e.char);
              t.Push(n);
            }),
            (t.delimiter = function (t, e) {
              var r = e.attributes || {};
              r = Object.assign({ fence: !1, stretchy: !1 }, r);
              var n = t.create("token", "mo", r, e.char);
              t.Push(n);
            }),
            (t.environment = function (t, e, r, i) {
              var a = i[0],
                s = t.itemFactory
                  .create("begin")
                  .setProperties({ name: e, end: a });
              (s = r.apply(void 0, o([t, s], n(i.slice(1))))), t.Push(s);
            });
        })(i || (i = {})),
          (e.default = i);
      },
      394: function (t, e, r) {
        var n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          o =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            },
          i =
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
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = r(239),
          s = r(644),
          l = r(321),
          u = r(77),
          c = (function () {
            function t(t, e) {
              void 0 === e && (e = []),
                (this.options = {}),
                (this.packageData = new Map()),
                (this.parsers = []),
                (this.root = null),
                (this.nodeLists = {}),
                (this.error = !1),
                (this.handlers = t.handlers),
                (this.nodeFactory = new s.NodeFactory()),
                (this.nodeFactory.configuration = this),
                this.nodeFactory.setCreators(t.nodes),
                (this.itemFactory = new a.default(t.items)),
                (this.itemFactory.configuration = this),
                u.defaultOptions.apply(void 0, o([this.options], n(e))),
                u.defaultOptions(this.options, t.options);
            }
            return (
              (t.prototype.pushParser = function (t) {
                this.parsers.unshift(t);
              }),
              (t.prototype.popParser = function () {
                this.parsers.shift();
              }),
              Object.defineProperty(t.prototype, "parser", {
                get: function () {
                  return this.parsers[0];
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.clear = function () {
                (this.parsers = []),
                  (this.root = null),
                  (this.nodeLists = {}),
                  (this.error = !1),
                  this.tags.resetTag();
              }),
              (t.prototype.addNode = function (t, e) {
                var r = this.nodeLists[t];
                if (
                  (r || (r = this.nodeLists[t] = []), r.push(e), e.kind !== t)
                ) {
                  var n = l.default.getProperty(e, "in-lists") || "",
                    o = (n ? n.split(/,/) : []).concat(t).join(",");
                  l.default.setProperty(e, "in-lists", o);
                }
              }),
              (t.prototype.getList = function (t) {
                var e,
                  r,
                  n = this.nodeLists[t] || [],
                  o = [];
                try {
                  for (var a = i(n), s = a.next(); !s.done; s = a.next()) {
                    var l = s.value;
                    this.inTree(l) && o.push(l);
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
                return (this.nodeLists[t] = o), o;
              }),
              (t.prototype.removeFromList = function (t, e) {
                var r,
                  n,
                  o = this.nodeLists[t] || [];
                try {
                  for (var a = i(e), s = a.next(); !s.done; s = a.next()) {
                    var l = s.value,
                      u = o.indexOf(l);
                    u >= 0 && o.splice(u, 1);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = a.return) && n.call(a);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (t.prototype.inTree = function (t) {
                for (; t && t !== this.root; ) t = t.parent;
                return !!t;
              }),
              t
            );
          })();
        e.default = c;
      },
      702: function (t, e, r) {
        var n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
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
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          a = r(921),
          s = r(321),
          l = r(810),
          u = r(466),
          c = r(29);
        !(function (t) {
          var e = 7.2,
            r = {
              em: function (t) {
                return t;
              },
              ex: function (t) {
                return 0.43 * t;
              },
              pt: function (t) {
                return t / 10;
              },
              pc: function (t) {
                return 1.2 * t;
              },
              px: function (t) {
                return (t * e) / 72;
              },
              in: function (t) {
                return t * e;
              },
              cm: function (t) {
                return (t * e) / 2.54;
              },
              mm: function (t) {
                return (t * e) / 25.4;
              },
              mu: function (t) {
                return t / 18;
              },
            },
            i = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))",
            f = "(pt|em|ex|mu|px|mm|cm|in|pc)",
            p = RegExp("^\\s*" + i + "\\s*" + f + "\\s*$"),
            h = RegExp("^\\s*" + i + "\\s*" + f + " ?");
          function d(t, e) {
            void 0 === e && (e = !1);
            var o = t.match(e ? h : p);
            return o
              ? (function (t) {
                  var e = n(t, 3),
                    o = e[0],
                    i = e[1],
                    a = e[2];
                  if ("mu" !== i) return [o, i, a];
                  return [m(r[i](parseFloat(o || "1"))).slice(0, -2), "em", a];
                })([o[1].replace(/,/, "."), o[4], o[0].length])
              : [null, null, 0];
          }
          function m(t) {
            return Math.abs(t) < 6e-4
              ? "0em"
              : t.toFixed(3).replace(/\.?0+$/, "") + "em";
          }
          function y(t, e, r) {
            ("{" !== e && "}" !== e) || (e = "\\" + e);
            var n = "{\\bigg" + r + " " + e + "}",
              o = "{\\big" + r + " " + e + "}";
            return new l.default("\\mathchoice" + n + o + o + o, {}, t).mml();
          }
          function g(t, e, r) {
            e = e
              .replace(/^\s+/, c.entities.nbsp)
              .replace(/\s+$/, c.entities.nbsp);
            var n = t.create("text", e);
            return t.create("node", "mtext", [], r, n);
          }
          function v(t, e, r) {
            if (
              (r.match(/^[a-z]/i) &&
                e.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i) &&
                (e += " "),
              e.length + r.length > t.configuration.options.maxBuffer)
            )
              throw new u.default(
                "MaxBufferSize",
                "MathJax internal buffer size exceeded; is there a recursive macro call?"
              );
            return e + r;
          }
          function b(t, e) {
            for (; e > 0; ) (t = t.trim().slice(1, -1)), e--;
            return t.trim();
          }
          function x(t, e) {
            for (
              var r = t.length, n = 0, o = "", i = 0, a = 0, s = !0, l = !1;
              i < r;

            ) {
              var c = t[i++];
              switch (c) {
                case " ":
                  break;
                case "{":
                  s ? a++ : ((l = !1), a > n && (a = n)), n++;
                  break;
                case "}":
                  n && n--, (s || l) && (a--, (l = !0)), (s = !1);
                  break;
                default:
                  if (!n && -1 !== e.indexOf(c))
                    return [l ? "true" : b(o, a), c, t.slice(i)];
                  (s = !1), (l = !1);
              }
              o += c;
            }
            if (n)
              throw new u.default(
                "ExtraOpenMissingClose",
                "Extra open brace or missing close brace"
              );
            return [l ? "true" : b(o, a), "", t.slice(i)];
          }
          (t.matchDimen = d),
            (t.dimen2em = function (t) {
              var e = n(d(t), 2),
                o = e[0],
                i = e[1],
                a = parseFloat(o || "1"),
                s = r[i];
              return s ? s(a) : 0;
            }),
            (t.Em = m),
            (t.cols = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return t
                .map(function (t) {
                  return m(t);
                })
                .join(" ");
            }),
            (t.fenced = function (t, e, r, n, o, i) {
              void 0 === o && (o = ""), void 0 === i && (i = "");
              var u,
                c = t.nodeFactory,
                f = c.create("node", "mrow", [], {
                  open: e,
                  close: n,
                  texClass: a.TEXCLASS.INNER,
                });
              if (o)
                u = new l.default(
                  "\\" + o + "l" + e,
                  t.parser.stack.env,
                  t
                ).mml();
              else {
                var p = c.create("text", e);
                u = c.create(
                  "node",
                  "mo",
                  [],
                  {
                    fence: !0,
                    stretchy: !0,
                    symmetric: !0,
                    texClass: a.TEXCLASS.OPEN,
                  },
                  p
                );
              }
              if ((s.default.appendChildren(f, [u, r]), o))
                u = new l.default(
                  "\\" + o + "r" + n,
                  t.parser.stack.env,
                  t
                ).mml();
              else {
                var h = c.create("text", n);
                u = c.create(
                  "node",
                  "mo",
                  [],
                  {
                    fence: !0,
                    stretchy: !0,
                    symmetric: !0,
                    texClass: a.TEXCLASS.CLOSE,
                  },
                  h
                );
              }
              return (
                i && u.attributes.set("mathcolor", i),
                s.default.appendChildren(f, [u]),
                f
              );
            }),
            (t.fixedFence = function (t, e, r, n) {
              var o = t.nodeFactory.create("node", "mrow", [], {
                open: e,
                close: n,
                texClass: a.TEXCLASS.ORD,
              });
              return (
                e && s.default.appendChildren(o, [y(t, e, "l")]),
                s.default.isType(r, "mrow")
                  ? s.default.appendChildren(o, s.default.getChildren(r))
                  : s.default.appendChildren(o, [r]),
                n && s.default.appendChildren(o, [y(t, n, "r")]),
                o
              );
            }),
            (t.mathPalette = y),
            (t.fixInitialMO = function (t, e) {
              for (var r = 0, n = e.length; r < n; r++) {
                var o = e[r];
                if (
                  o &&
                  !s.default.isType(o, "mspace") &&
                  (!s.default.isType(o, "TeXAtom") ||
                    (s.default.getChildren(o)[0] &&
                      s.default.getChildren(s.default.getChildren(o)[0])
                        .length))
                ) {
                  if (
                    s.default.isEmbellished(o) ||
                    (s.default.isType(o, "TeXAtom") &&
                      s.default.getTexClass(o) === a.TEXCLASS.REL)
                  ) {
                    var i = t.nodeFactory.create("node", "mi");
                    e.unshift(i);
                  }
                  break;
                }
              }
            }),
            (t.internalMath = function (t, e, r, n) {
              if (t.configuration.options.internalMath)
                return t.configuration.options.internalMath(t, e, r, n);
              var o,
                i,
                a = n || t.stack.env.font,
                s = a ? { mathvariant: a } : {},
                c = [],
                f = 0,
                p = 0,
                h = "",
                d = 0;
              if (e.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
                for (; f < e.length; )
                  if ("$" === (o = e.charAt(f++)))
                    "$" === h && 0 === d
                      ? ((i = t.create("node", "TeXAtom", [
                          new l.default(
                            e.slice(p, f - 1),
                            {},
                            t.configuration
                          ).mml(),
                        ])),
                        c.push(i),
                        (h = ""),
                        (p = f))
                      : "" === h &&
                        (p < f - 1 && c.push(g(t, e.slice(p, f - 1), s)),
                        (h = "$"),
                        (p = f));
                  else if ("{" === o && "" !== h) d++;
                  else if ("}" === o)
                    if ("}" === h && 0 === d) {
                      var m = new l.default(
                        e.slice(p, f),
                        {},
                        t.configuration
                      ).mml();
                      (i = t.create("node", "TeXAtom", [m], s)),
                        c.push(i),
                        (h = ""),
                        (p = f);
                    } else "" !== h && d && d--;
                  else if ("\\" === o)
                    if ("" === h && e.substr(f).match(/^(eq)?ref\s*\{/)) {
                      var y = RegExp["$&"].length;
                      p < f - 1 && c.push(g(t, e.slice(p, f - 1), s)),
                        (h = "}"),
                        (p = f - 1),
                        (f += y);
                    } else
                      "(" === (o = e.charAt(f++)) && "" === h
                        ? (p < f - 2 && c.push(g(t, e.slice(p, f - 2), s)),
                          (h = ")"),
                          (p = f))
                        : ")" === o && ")" === h && 0 === d
                        ? ((i = t.create("node", "TeXAtom", [
                            new l.default(
                              e.slice(p, f - 2),
                              {},
                              t.configuration
                            ).mml(),
                          ])),
                          c.push(i),
                          (h = ""),
                          (p = f))
                        : o.match(/[${}\\]/) &&
                          "" === h &&
                          (f--, (e = e.substr(0, f - 1) + e.substr(f)));
                if ("" !== h)
                  throw new u.default(
                    "MathNotTerminated",
                    "Math not terminated in text box"
                  );
              }
              return (
                p < e.length && c.push(g(t, e.slice(p), s)),
                null != r
                  ? (c = [
                      t.create("node", "mstyle", c, {
                        displaystyle: !1,
                        scriptlevel: r,
                      }),
                    ])
                  : c.length > 1 && (c = [t.create("node", "mrow", c)]),
                c
              );
            }),
            (t.internalText = g),
            (t.underOver = function (e, r, n, o, i) {
              if (
                (t.checkMovableLimits(r),
                s.default.isType(r, "munderover") && s.default.isEmbellished(r))
              ) {
                s.default.setProperties(s.default.getCoreMO(r), {
                  lspace: 0,
                  rspace: 0,
                });
                var l = e.create("node", "mo", [], { rspace: 0 });
                r = e.create("node", "mrow", [l, r]);
              }
              var u = e.create("node", "munderover", [r]);
              s.default.setChild(u, "over" === o ? u.over : u.under, n);
              var c = u;
              return (
                i &&
                  (c = e.create("node", "TeXAtom", [u], {
                    texClass: a.TEXCLASS.OP,
                    movesupsub: !0,
                  })),
                s.default.setProperty(c, "subsupOK", !0),
                c
              );
            }),
            (t.checkMovableLimits = function (t) {
              var e = s.default.isType(t, "mo") ? s.default.getForm(t) : null;
              (s.default.getProperty(t, "movablelimits") ||
                (e && e[3] && e[3].movablelimits)) &&
                s.default.setProperties(t, { movablelimits: !1 });
            }),
            (t.trimSpaces = function (t) {
              if ("string" != typeof t) return t;
              var e = t.trim();
              return e.match(/\\$/) && t.match(/ $/) && (e += " "), e;
            }),
            (t.setArrayAlign = function (e, r) {
              return (
                "t" === (r = t.trimSpaces(r || ""))
                  ? (e.arraydef.align = "baseline 1")
                  : "b" === r
                  ? (e.arraydef.align = "baseline -1")
                  : "c" === r
                  ? (e.arraydef.align = "axis")
                  : r && (e.arraydef.align = r),
                e
              );
            }),
            (t.substituteArgs = function (t, e, r) {
              for (var n = "", o = "", i = 0; i < r.length; ) {
                var a = r.charAt(i++);
                if ("\\" === a) n += a + r.charAt(i++);
                else if ("#" === a)
                  if ("#" === (a = r.charAt(i++))) n += a;
                  else {
                    if (!a.match(/[1-9]/) || parseInt(a, 10) > e.length)
                      throw new u.default(
                        "IllegalMacroParam",
                        "Illegal macro parameter reference"
                      );
                    (o = v(t, v(t, o, n), e[parseInt(a, 10) - 1])), (n = "");
                  }
                else n += a;
              }
              return v(t, o, n);
            }),
            (t.addArgs = v),
            (t.checkMaxMacros = function (t, e) {
              if (
                (void 0 === e && (e = !0),
                !(++t.macroCount <= t.configuration.options.maxMacros))
              )
                throw e
                  ? new u.default(
                      "MaxMacroSub1",
                      "MathJax maximum macro substitution count exceeded; is here a recursive macro call?"
                    )
                  : new u.default(
                      "MaxMacroSub2",
                      "MathJax maximum substitution count exceeded; is there a recursive latex environment?"
                    );
            }),
            (t.checkEqnEnv = function (t) {
              if (t.stack.global.eqnenv)
                throw new u.default(
                  "ErroneousNestingEq",
                  "Erroneous nesting of equation structures"
                );
              t.stack.global.eqnenv = !0;
            }),
            (t.copyNode = function (t, e) {
              var r = t.copy(),
                n = e.configuration;
              return (
                r.walkTree(function (t) {
                  var e, r;
                  n.addNode(t.kind, t);
                  var i = (t.getProperty("in-lists") || "").split(/,/);
                  try {
                    for (var a = o(i), s = a.next(); !s.done; s = a.next()) {
                      var l = s.value;
                      n.addNode(l, t);
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
                }),
                r
              );
            }),
            (t.MmlFilterAttribute = function (t, e, r) {
              return r;
            }),
            (t.getFontDef = function (t) {
              var e = t.stack.env.font;
              return e ? { mathvariant: e } : {};
            }),
            (t.keyvalOptions = function (t, e, r) {
              var i, a;
              void 0 === e && (e = null), void 0 === r && (r = !1);
              var s = (function (t) {
                var e,
                  r,
                  o,
                  i,
                  a,
                  s = {},
                  l = t;
                for (; l; )
                  (i = (e = n(x(l, ["=", ","]), 3))[0]),
                    (o = e[1]),
                    (l = e[2]),
                    "=" === o
                      ? ((a = (r = n(x(l, [","]), 3))[0]),
                        (o = r[1]),
                        (l = r[2]),
                        (a = "false" === a || "true" === a ? JSON.parse(a) : a),
                        (s[i] = a))
                      : i && (s[i] = !0);
                return s;
              })(t);
              if (e)
                try {
                  for (
                    var l = o(Object.keys(s)), c = l.next();
                    !c.done;
                    c = l.next()
                  ) {
                    var f = c.value;
                    if (!e.hasOwnProperty(f)) {
                      if (r)
                        throw new u.default(
                          "InvalidOption",
                          "Invalid option: %1",
                          f
                        );
                      delete s[f];
                    }
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    c && !c.done && (a = l.return) && a.call(l);
                  } finally {
                    if (i) throw i.error;
                  }
                }
              return s;
            });
        })(i || (i = {})),
          (e.default = i);
      },
      874: function (t, e, r) {
        var n =
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
          o =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = r(321),
          s = (function () {
            function t(t, e, r) {
              (this._factory = t),
                (this._env = e),
                (this.global = {}),
                (this.stack = []),
                (this.global = { isInner: r }),
                (this.stack = [this._factory.create("start", this.global)]),
                e && (this.stack[0].env = e),
                (this.env = this.stack[0].env);
            }
            return (
              Object.defineProperty(t.prototype, "env", {
                get: function () {
                  return this._env;
                },
                set: function (t) {
                  this._env = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.Push = function () {
                for (var t, e, r = [], s = 0; s < arguments.length; s++)
                  r[s] = arguments[s];
                try {
                  for (var l = n(r), u = l.next(); !u.done; u = l.next()) {
                    var c = u.value;
                    if (c) {
                      var f = a.default.isNode(c)
                        ? this._factory.create("mml", c)
                        : c;
                      f.global = this.global;
                      var p = o(
                          this.stack.length
                            ? this.Top().checkItem(f)
                            : [null, !0],
                          2
                        ),
                        h = p[0],
                        d = p[1];
                      d &&
                        (h
                          ? (this.Pop(), this.Push.apply(this, i([], o(h))))
                          : (this.stack.push(f),
                            f.env
                              ? (f.copyEnv && Object.assign(f.env, this.env),
                                (this.env = f.env))
                              : (f.env = this.env)));
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    u && !u.done && (e = l.return) && e.call(l);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (t.prototype.Pop = function () {
                var t = this.stack.pop();
                return (
                  t.isOpen || delete t.env,
                  (this.env = this.stack.length ? this.Top().env : {}),
                  t
                );
              }),
              (t.prototype.Top = function (t) {
                return (
                  void 0 === t && (t = 1),
                  this.stack.length < t
                    ? null
                    : this.stack[this.stack.length - t]
                );
              }),
              (t.prototype.Prev = function (t) {
                var e = this.Top();
                return t ? e.First : e.Pop();
              }),
              (t.prototype.toString = function () {
                return "stack[\n  " + this.stack.join("\n  ") + "\n]";
              }),
              t
            );
          })();
        e.default = s;
      },
      44: function (t, e, r) {
        var n,
          o =
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
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            },
          s =
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
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.BaseItem = e.MmlStack = void 0);
        var l = r(466),
          u = (function () {
            function t(t) {
              this._nodes = t;
            }
            return (
              Object.defineProperty(t.prototype, "nodes", {
                get: function () {
                  return this._nodes;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.Push = function () {
                for (var t, e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                (t = this._nodes).push.apply(t, a([], i(e)));
              }),
              (t.prototype.Pop = function () {
                return this._nodes.pop();
              }),
              Object.defineProperty(t.prototype, "First", {
                get: function () {
                  return this._nodes[this.Size() - 1];
                },
                set: function (t) {
                  this._nodes[this.Size() - 1] = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Last", {
                get: function () {
                  return this._nodes[0];
                },
                set: function (t) {
                  this._nodes[0] = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.Peek = function (t) {
                return null == t && (t = 1), this._nodes.slice(this.Size() - t);
              }),
              (t.prototype.Size = function () {
                return this._nodes.length;
              }),
              (t.prototype.Clear = function () {
                this._nodes = [];
              }),
              (t.prototype.toMml = function (t, e) {
                return (
                  void 0 === t && (t = !0),
                  1 !== this._nodes.length || e
                    ? this.create(
                        "node",
                        t ? "inferredMrow" : "mrow",
                        this._nodes,
                        {}
                      )
                    : this.First
                );
              }),
              (t.prototype.create = function (t) {
                for (var e, r = [], n = 1; n < arguments.length; n++)
                  r[n - 1] = arguments[n];
                return (e =
                  this.factory.configuration.nodeFactory).create.apply(
                  e,
                  a([t], i(r))
                );
              }),
              t
            );
          })();
        e.MmlStack = u;
        var c = (function (t) {
          function e(e) {
            for (var r = [], n = 1; n < arguments.length; n++)
              r[n - 1] = arguments[n];
            var o = t.call(this, r) || this;
            return (
              (o.factory = e),
              (o.global = {}),
              (o._properties = {}),
              o.isOpen && (o._env = {}),
              o
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "base";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "env", {
              get: function () {
                return this._env;
              },
              set: function (t) {
                this._env = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "copyEnv", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getProperty = function (t) {
              return this._properties[t];
            }),
            (e.prototype.setProperty = function (t, e) {
              return (this._properties[t] = e), this;
            }),
            Object.defineProperty(e.prototype, "isOpen", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isFinal", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.isKind = function (t) {
              return t === this.kind;
            }),
            (e.prototype.checkItem = function (t) {
              if (
                (t.isKind("over") &&
                  this.isOpen &&
                  (t.setProperty("num", this.toMml(!1)), this.Clear()),
                t.isKind("cell") && this.isOpen)
              ) {
                if (t.getProperty("linebreak")) return e.fail;
                throw new l.default("Misplaced", "Misplaced %1", t.getName());
              }
              if (t.isClose && this.getErrors(t.kind)) {
                var r = i(this.getErrors(t.kind), 2),
                  n = r[0],
                  o = r[1];
                throw new l.default(n, o, t.getName());
              }
              return t.isFinal ? (this.Push(t.First), e.fail) : e.success;
            }),
            (e.prototype.clearEnv = function () {
              var t, e;
              try {
                for (
                  var r = s(Object.keys(this.env)), n = r.next();
                  !n.done;
                  n = r.next()
                ) {
                  var o = n.value;
                  delete this.env[o];
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
            }),
            (e.prototype.setProperties = function (t) {
              return Object.assign(this._properties, t), this;
            }),
            (e.prototype.getName = function () {
              return this.getProperty("name");
            }),
            (e.prototype.toString = function () {
              return this.kind + "[" + this.nodes.join("; ") + "]";
            }),
            (e.prototype.getErrors = function (t) {
              return (this.constructor.errors || {})[t] || e.errors[t];
            }),
            (e.fail = [null, !1]),
            (e.success = [null, !0]),
            (e.errors = {
              end: [
                "MissingBeginExtraEnd",
                "Missing \\begin{%1} or extra \\end{%1}",
              ],
              close: [
                "ExtraCloseMissingOpen",
                "Extra close brace or missing open brace",
              ],
              right: [
                "MissingLeftExtraRight",
                "Missing \\left or extra \\right",
              ],
              middle: ["ExtraMiddle", "Extra \\middle"],
            }),
            e
          );
        })(u);
        e.BaseItem = c;
      },
      239: function (t, e, r) {
        var n,
          o,
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
            });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = r(44),
          s = r(752),
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return i(e, t), e;
          })(a.BaseItem),
          u = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.defaultKind = "dummy"), (e.configuration = null), e;
            }
            return (
              i(e, t),
              (e.DefaultStackItems = (((o = {})[l.prototype.kind] = l), o)),
              e
            );
          })(s.AbstractFactory);
        e.default = u;
      },
      237: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Macro = e.Symbol = void 0);
        var r = (function () {
          function t(t, e, r) {
            (this._symbol = t), (this._char = e), (this._attributes = r);
          }
          return (
            Object.defineProperty(t.prototype, "symbol", {
              get: function () {
                return this._symbol;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "char", {
              get: function () {
                return this._char;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "attributes", {
              get: function () {
                return this._attributes;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
        e.Symbol = r;
        var n = (function () {
          function t(t, e, r) {
            void 0 === r && (r = []),
              (this._symbol = t),
              (this._func = e),
              (this._args = r);
          }
          return (
            Object.defineProperty(t.prototype, "symbol", {
              get: function () {
                return this._symbol;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "func", {
              get: function () {
                return this._func;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "args", {
              get: function () {
                return this._args;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
        e.Macro = n;
      },
      628: function (t, e, r) {
        var n,
          o =
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
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          a =
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
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EnvironmentMap =
            e.CommandMap =
            e.MacroMap =
            e.DelimiterMap =
            e.CharacterMap =
            e.AbstractParseMap =
            e.RegExpMap =
            e.AbstractSymbolMap =
              void 0);
        var l = r(237),
          u = r(910),
          c = (function () {
            function t(t, e) {
              (this._name = t), (this._parser = e), u.MapHandler.register(this);
            }
            return (
              Object.defineProperty(t.prototype, "name", {
                get: function () {
                  return this._name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.parserFor = function (t) {
                return this.contains(t) ? this.parser : null;
              }),
              (t.prototype.parse = function (t) {
                var e = i(t, 2),
                  r = e[0],
                  n = e[1],
                  o = this.parserFor(n),
                  a = this.lookup(n);
                return o && a ? o(r, a) || !0 : null;
              }),
              Object.defineProperty(t.prototype, "parser", {
                get: function () {
                  return this._parser;
                },
                set: function (t) {
                  this._parser = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })();
        e.AbstractSymbolMap = c;
        var f = (function (t) {
          function e(e, r, n) {
            var o = t.call(this, e, r) || this;
            return (o._regExp = n), o;
          }
          return (
            o(e, t),
            (e.prototype.contains = function (t) {
              return this._regExp.test(t);
            }),
            (e.prototype.lookup = function (t) {
              return this.contains(t) ? t : null;
            }),
            e
          );
        })(c);
        e.RegExpMap = f;
        var p = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.map = new Map()), e;
          }
          return (
            o(e, t),
            (e.prototype.lookup = function (t) {
              return this.map.get(t);
            }),
            (e.prototype.contains = function (t) {
              return this.map.has(t);
            }),
            (e.prototype.add = function (t, e) {
              this.map.set(t, e);
            }),
            (e.prototype.remove = function (t) {
              this.map.delete(t);
            }),
            e
          );
        })(c);
        e.AbstractParseMap = p;
        var h = (function (t) {
          function e(e, r, n) {
            var o,
              s,
              u = t.call(this, e, r) || this;
            try {
              for (
                var c = a(Object.keys(n)), f = c.next();
                !f.done;
                f = c.next()
              ) {
                var p = f.value,
                  h = n[p],
                  d = i("string" == typeof h ? [h, null] : h, 2),
                  m = d[0],
                  y = d[1],
                  g = new l.Symbol(p, m, y);
                u.add(p, g);
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                f && !f.done && (s = c.return) && s.call(c);
              } finally {
                if (o) throw o.error;
              }
            }
            return u;
          }
          return o(e, t), e;
        })(p);
        e.CharacterMap = h;
        var d = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.parse = function (e) {
              var r = i(e, 2),
                n = r[0],
                o = r[1];
              return t.prototype.parse.call(this, [n, "\\" + o]);
            }),
            e
          );
        })(h);
        e.DelimiterMap = d;
        var m = (function (t) {
          function e(e, r, n) {
            var o,
              s,
              u = t.call(this, e, null) || this;
            try {
              for (
                var c = a(Object.keys(r)), f = c.next();
                !f.done;
                f = c.next()
              ) {
                var p = f.value,
                  h = r[p],
                  d = i("string" == typeof h ? [h] : h),
                  m = d[0],
                  y = d.slice(1),
                  g = new l.Macro(p, n[m], y);
                u.add(p, g);
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                f && !f.done && (s = c.return) && s.call(c);
              } finally {
                if (o) throw o.error;
              }
            }
            return u;
          }
          return (
            o(e, t),
            (e.prototype.parserFor = function (t) {
              var e = this.lookup(t);
              return e ? e.func : null;
            }),
            (e.prototype.parse = function (t) {
              var e = i(t, 2),
                r = e[0],
                n = e[1],
                o = this.lookup(n),
                a = this.parserFor(n);
              return o && a
                ? a.apply(void 0, s([r, o.symbol], i(o.args))) || !0
                : null;
            }),
            e
          );
        })(p);
        e.MacroMap = m;
        var y = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.parse = function (t) {
              var e = i(t, 2),
                r = e[0],
                n = e[1],
                o = this.lookup(n),
                a = this.parserFor(n);
              if (!o || !a) return null;
              if (!a) return null;
              var l = r.currentCS;
              r.currentCS = "\\" + n;
              var u = a.apply(void 0, s([r, "\\" + o.symbol], i(o.args)));
              return (r.currentCS = l), u || !0;
            }),
            e
          );
        })(m);
        e.CommandMap = y;
        var g = (function (t) {
          function e(e, r, n, o) {
            var i = t.call(this, e, n, o) || this;
            return (i.parser = r), i;
          }
          return (
            o(e, t),
            (e.prototype.parse = function (t) {
              var e = i(t, 2),
                r = e[0],
                n = e[1],
                o = this.lookup(n),
                a = this.parserFor(n);
              return o && a ? (this.parser(r, o.symbol, a, o.args), !0) : null;
            }),
            e
          );
        })(m);
        e.EnvironmentMap = g;
      },
      251: function (t, e, r) {
        var n,
          o =
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
          i =
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
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TagsFactory =
            e.AllTags =
            e.NoTags =
            e.AbstractTags =
            e.TagInfo =
            e.Label =
              void 0);
        var a = r(810),
          s = function (t, e) {
            void 0 === t && (t = "???"),
              void 0 === e && (e = ""),
              (this.tag = t),
              (this.id = e);
          };
        e.Label = s;
        var l = function (t, e, r, n, o, i, a, s) {
          void 0 === t && (t = ""),
            void 0 === e && (e = !1),
            void 0 === r && (r = !1),
            void 0 === n && (n = null),
            void 0 === o && (o = ""),
            void 0 === i && (i = ""),
            void 0 === a && (a = !1),
            void 0 === s && (s = ""),
            (this.env = t),
            (this.taggable = e),
            (this.defaultTags = r),
            (this.tag = n),
            (this.tagId = o),
            (this.tagFormat = i),
            (this.noTag = a),
            (this.labelId = s);
        };
        e.TagInfo = l;
        var u = (function () {
          function t() {
            (this.counter = 0),
              (this.allCounter = 0),
              (this.configuration = null),
              (this.ids = {}),
              (this.allIds = {}),
              (this.labels = {}),
              (this.allLabels = {}),
              (this.redo = !1),
              (this.refUpdate = !1),
              (this.currentTag = new l()),
              (this.history = []),
              (this.stack = []),
              (this.enTag = function (t, e) {
                var r = this.configuration.nodeFactory,
                  n = r.create("node", "mtd", [t]),
                  o = r.create("node", "mlabeledtr", [e, n]);
                return r.create("node", "mtable", [o], {
                  side: this.configuration.options.tagSide,
                  minlabelspacing: this.configuration.options.tagIndent,
                  displaystyle: !0,
                });
              });
          }
          return (
            (t.prototype.start = function (t, e, r) {
              this.currentTag && this.stack.push(this.currentTag),
                (this.currentTag = new l(t, e, r));
            }),
            Object.defineProperty(t.prototype, "env", {
              get: function () {
                return this.currentTag.env;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.end = function () {
              this.history.push(this.currentTag),
                (this.currentTag = this.stack.pop());
            }),
            (t.prototype.tag = function (t, e) {
              (this.currentTag.tag = t),
                (this.currentTag.tagFormat = e ? t : this.formatTag(t)),
                (this.currentTag.noTag = !1);
            }),
            (t.prototype.notag = function () {
              this.tag("", !0), (this.currentTag.noTag = !0);
            }),
            Object.defineProperty(t.prototype, "noTag", {
              get: function () {
                return this.currentTag.noTag;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "label", {
              get: function () {
                return this.currentTag.labelId;
              },
              set: function (t) {
                this.currentTag.labelId = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.formatUrl = function (t, e) {
              return e + "#" + encodeURIComponent(t);
            }),
            (t.prototype.formatTag = function (t) {
              return "(" + t + ")";
            }),
            (t.prototype.formatId = function (t) {
              return "mjx-eqn:" + t.replace(/\s/g, "_");
            }),
            (t.prototype.formatNumber = function (t) {
              return t.toString();
            }),
            (t.prototype.autoTag = function () {
              null == this.currentTag.tag &&
                (this.counter++, this.tag(this.formatNumber(this.counter), !1));
            }),
            (t.prototype.clearTag = function () {
              (this.label = ""),
                this.tag(null, !0),
                (this.currentTag.tagId = "");
            }),
            (t.prototype.getTag = function (t) {
              if ((void 0 === t && (t = !1), t))
                return this.autoTag(), this.makeTag();
              var e = this.currentTag;
              return e.taggable &&
                !e.noTag &&
                (e.defaultTags && this.autoTag(), e.tag)
                ? this.makeTag()
                : null;
            }),
            (t.prototype.resetTag = function () {
              (this.history = []),
                (this.redo = !1),
                (this.refUpdate = !1),
                this.clearTag();
            }),
            (t.prototype.reset = function (t) {
              void 0 === t && (t = 0),
                this.resetTag(),
                (this.counter = this.allCounter = t),
                (this.allLabels = {}),
                (this.allIds = {});
            }),
            (t.prototype.startEquation = function (t) {
              (this.history = []),
                (this.stack = []),
                this.clearTag(),
                (this.currentTag = new l("", void 0, void 0)),
                (this.labels = {}),
                (this.ids = {}),
                (this.counter = this.allCounter),
                (this.redo = !1);
              var e = t.inputData.recompile;
              e && ((this.refUpdate = !0), (this.counter = e.counter));
            }),
            (t.prototype.finishEquation = function (t) {
              this.redo &&
                (t.inputData.recompile = {
                  state: t.state(),
                  counter: this.allCounter,
                }),
                this.refUpdate || (this.allCounter = this.counter),
                Object.assign(this.allIds, this.ids),
                Object.assign(this.allLabels, this.labels);
            }),
            (t.prototype.finalize = function (t, e) {
              if (
                !e.display ||
                this.currentTag.env ||
                null == this.currentTag.tag
              )
                return t;
              var r = this.makeTag();
              return this.enTag(t, r);
            }),
            (t.prototype.makeId = function () {
              this.currentTag.tagId = this.formatId(
                (this.configuration.options.useLabelIds && this.label) ||
                  this.currentTag.tag
              );
            }),
            (t.prototype.makeTag = function () {
              this.makeId(),
                this.label &&
                  (this.labels[this.label] = new s(
                    this.currentTag.tag,
                    this.currentTag.tagId
                  ));
              var t = new a.default(
                "\\text{" + this.currentTag.tagFormat + "}",
                {},
                this.configuration
              ).mml();
              return this.configuration.nodeFactory.create("node", "mtd", [t], {
                id: this.currentTag.tagId,
              });
            }),
            t
          );
        })();
        e.AbstractTags = u;
        var c = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.autoTag = function () {}),
            (e.prototype.getTag = function () {
              return this.currentTag.tag ? t.prototype.getTag.call(this) : null;
            }),
            e
          );
        })(u);
        e.NoTags = c;
        var f = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.finalize = function (t, e) {
              if (
                !e.display ||
                this.history.find(function (t) {
                  return t.taggable;
                })
              )
                return t;
              var r = this.getTag(!0);
              return this.enTag(t, r);
            }),
            e
          );
        })(u);
        (e.AllTags = f),
          (function (t) {
            var e = new Map([
                ["none", c],
                ["all", f],
              ]),
              r = "none";
            (t.OPTIONS = {
              tags: r,
              tagSide: "right",
              tagIndent: "0.8em",
              useLabelIds: !0,
              ignoreDuplicateLabels: !1,
            }),
              (t.add = function (t, r) {
                e.set(t, r);
              }),
              (t.addTags = function (e) {
                var r, n;
                try {
                  for (
                    var o = i(Object.keys(e)), a = o.next();
                    !a.done;
                    a = o.next()
                  ) {
                    var s = a.value;
                    t.add(s, e[s]);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    a && !a.done && (n = o.return) && n.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (t.create = function (t) {
                var n = e.get(t) || e.get(r);
                if (!n) throw Error("Unknown tags class");
                return new n();
              }),
              (t.setDefault = function (t) {
                r = t;
              }),
              (t.getDefault = function () {
                return t.create(r);
              });
          })(e.TagsFactory || (e.TagsFactory = {}));
      },
      7: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TexConstant = void 0),
          (function (t) {
            (t.Variant = {
              NORMAL: "normal",
              BOLD: "bold",
              ITALIC: "italic",
              BOLDITALIC: "bold-italic",
              DOUBLESTRUCK: "double-struck",
              FRAKTUR: "fraktur",
              BOLDFRAKTUR: "bold-fraktur",
              SCRIPT: "script",
              BOLDSCRIPT: "bold-script",
              SANSSERIF: "sans-serif",
              BOLDSANSSERIF: "bold-sans-serif",
              SANSSERIFITALIC: "sans-serif-italic",
              SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
              MONOSPACE: "monospace",
              INITIAL: "inital",
              TAILED: "tailed",
              LOOPED: "looped",
              STRETCHED: "stretched",
              CALLIGRAPHIC: "-tex-calligraphic",
              BOLDCALLIGRAPHIC: "-tex-bold-calligraphic",
              OLDSTYLE: "-tex-oldstyle",
              BOLDOLDSTYLE: "-tex-bold-oldstyle",
              MATHITALIC: "-tex-mathit",
            }),
              (t.Form = {
                PREFIX: "prefix",
                INFIX: "infix",
                POSTFIX: "postfix",
              }),
              (t.LineBreak = {
                AUTO: "auto",
                NEWLINE: "newline",
                NOBREAK: "nobreak",
                GOODBREAK: "goodbreak",
                BADBREAK: "badbreak",
              }),
              (t.LineBreakStyle = {
                BEFORE: "before",
                AFTER: "after",
                DUPLICATE: "duplicate",
                INFIXLINBREAKSTYLE: "infixlinebreakstyle",
              }),
              (t.IndentAlign = {
                LEFT: "left",
                CENTER: "center",
                RIGHT: "right",
                AUTO: "auto",
                ID: "id",
                INDENTALIGN: "indentalign",
              }),
              (t.IndentShift = { INDENTSHIFT: "indentshift" }),
              (t.LineThickness = {
                THIN: "thin",
                MEDIUM: "medium",
                THICK: "thick",
              }),
              (t.Notation = {
                LONGDIV: "longdiv",
                ACTUARIAL: "actuarial",
                PHASORANGLE: "phasorangle",
                RADICAL: "radical",
                BOX: "box",
                ROUNDEDBOX: "roundedbox",
                CIRCLE: "circle",
                LEFT: "left",
                RIGHT: "right",
                TOP: "top",
                BOTTOM: "bottom",
                UPDIAGONALSTRIKE: "updiagonalstrike",
                DOWNDIAGONALSTRIKE: "downdiagonalstrike",
                VERTICALSTRIKE: "verticalstrike",
                HORIZONTALSTRIKE: "horizontalstrike",
                NORTHEASTARROW: "northeastarrow",
                MADRUWB: "madruwb",
                UPDIAGONALARROW: "updiagonalarrow",
              }),
              (t.Align = {
                TOP: "top",
                BOTTOM: "bottom",
                CENTER: "center",
                BASELINE: "baseline",
                AXIS: "axis",
                LEFT: "left",
                RIGHT: "right",
              }),
              (t.Lines = { NONE: "none", SOLID: "solid", DASHED: "dashed" }),
              (t.Side = {
                LEFT: "left",
                RIGHT: "right",
                LEFTOVERLAP: "leftoverlap",
                RIGHTOVERLAP: "rightoverlap",
              }),
              (t.Width = { AUTO: "auto", FIT: "fit" }),
              (t.Actiontype = {
                TOGGLE: "toggle",
                STATUSLINE: "statusline",
                TOOLTIP: "tooltip",
                INPUT: "input",
              }),
              (t.Overflow = {
                LINBREAK: "linebreak",
                SCROLL: "scroll",
                ELIDE: "elide",
                TRUNCATE: "truncate",
                SCALE: "scale",
              }),
              (t.Unit = {
                EM: "em",
                EX: "ex",
                PX: "px",
                IN: "in",
                CM: "cm",
                MM: "mm",
                PT: "pt",
                PC: "pc",
              });
          })(e.TexConstant || (e.TexConstant = {}));
      },
      466: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
          function t(e, r) {
            for (var n = [], o = 2; o < arguments.length; o++)
              n[o - 2] = arguments[o];
            (this.id = e), (this.message = t.processString(r, n));
          }
          return (
            (t.processString = function (e, r) {
              for (
                var n = e.split(t.pattern), o = 1, i = n.length;
                o < i;
                o += 2
              ) {
                var a = n[o].charAt(0);
                if (a >= "0" && a <= "9")
                  (n[o] = r[parseInt(n[o], 10) - 1]),
                    "number" == typeof n[o] && (n[o] = n[o].toString());
                else if ("{" === a) {
                  if ((a = n[o].substr(1)) >= "0" && a <= "9")
                    (n[o] =
                      r[parseInt(n[o].substr(1, n[o].length - 2), 10) - 1]),
                      "number" == typeof n[o] && (n[o] = n[o].toString());
                  else
                    n[o].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/) &&
                      (n[o] = "%" + n[o]);
                }
                null == n[o] && (n[o] = "???");
              }
              return n.join("");
            }),
            (t.pattern =
              /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g),
            t
          );
        })();
        e.default = r;
      },
      810: function (t, e, r) {
        var n =
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
          o =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          i =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = r(702),
          s = r(874),
          l = r(466),
          u = r(921),
          c = (function () {
            function t(t, e, r) {
              var o, i;
              (this._string = t),
                (this.configuration = r),
                (this.macroCount = 0),
                (this.i = 0),
                (this.currentCS = "");
              var a,
                l = e.hasOwnProperty("isInner"),
                u = e.isInner;
              if ((delete e.isInner, e)) {
                a = {};
                try {
                  for (
                    var c = n(Object.keys(e)), f = c.next();
                    !f.done;
                    f = c.next()
                  ) {
                    var p = f.value;
                    a[p] = e[p];
                  }
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    f && !f.done && (i = c.return) && i.call(c);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              }
              this.configuration.pushParser(this),
                (this.stack = new s.default(this.itemFactory, a, !l || u)),
                this.Parse(),
                this.Push(this.itemFactory.create("stop"));
            }
            return (
              Object.defineProperty(t.prototype, "options", {
                get: function () {
                  return this.configuration.options;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "itemFactory", {
                get: function () {
                  return this.configuration.itemFactory;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "tags", {
                get: function () {
                  return this.configuration.tags;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "string", {
                get: function () {
                  return this._string;
                },
                set: function (t) {
                  this._string = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.parse = function (t, e) {
                return this.configuration.handlers.get(t).parse(e);
              }),
              (t.prototype.lookup = function (t, e) {
                return this.configuration.handlers.get(t).lookup(e);
              }),
              (t.prototype.contains = function (t, e) {
                return this.configuration.handlers.get(t).contains(e);
              }),
              (t.prototype.toString = function () {
                var t,
                  e,
                  r = "";
                try {
                  for (
                    var o = n(Array.from(this.configuration.handlers.keys())),
                      i = o.next();
                    !i.done;
                    i = o.next()
                  ) {
                    var a = i.value;
                    r += a + ": " + this.configuration.handlers.get(a) + "\n";
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    i && !i.done && (e = o.return) && e.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return r;
              }),
              (t.prototype.Parse = function () {
                for (var t; this.i < this.string.length; )
                  (t = this.getCodePoint()),
                    (this.i += t.length),
                    this.parse("character", [this, t]);
              }),
              (t.prototype.Push = function (t) {
                t instanceof u.AbstractMmlNode && t.isInferred
                  ? this.PushAll(t.childNodes)
                  : this.stack.Push(t);
              }),
              (t.prototype.PushAll = function (t) {
                var e, r;
                try {
                  for (var o = n(t), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    this.stack.Push(a);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (r = o.return) && r.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (t.prototype.mml = function () {
                if (!this.stack.Top().isKind("mml")) return null;
                var t = this.stack.Top().First;
                return this.configuration.popParser(), t;
              }),
              (t.prototype.convertDelimiter = function (t) {
                var e = this.lookup("delimiter", t);
                return e ? e.char : null;
              }),
              (t.prototype.getCodePoint = function () {
                var t = this.string.codePointAt(this.i);
                return void 0 === t ? "" : String.fromCodePoint(t);
              }),
              (t.prototype.nextIsSpace = function () {
                return !!this.string.charAt(this.i).match(/\s/);
              }),
              (t.prototype.GetNext = function () {
                for (; this.nextIsSpace(); ) this.i++;
                return this.getCodePoint();
              }),
              (t.prototype.GetCS = function () {
                var t = this.string
                  .slice(this.i)
                  .match(/^(([a-z]+) ?|[\uD800-\uDBFF].|.)/i);
                return t
                  ? ((this.i += t[0].length), t[2] || t[1])
                  : (this.i++, " ");
              }),
              (t.prototype.GetArgument = function (t, e) {
                switch (this.GetNext()) {
                  case "":
                    if (!e)
                      throw new l.default(
                        "MissingArgFor",
                        "Missing argument for %1",
                        this.currentCS
                      );
                    return null;
                  case "}":
                    if (!e)
                      throw new l.default(
                        "ExtraCloseMissingOpen",
                        "Extra close brace or missing open brace"
                      );
                    return null;
                  case "\\":
                    return this.i++, "\\" + this.GetCS();
                  case "{":
                    for (var r = ++this.i, n = 1; this.i < this.string.length; )
                      switch (this.string.charAt(this.i++)) {
                        case "\\":
                          this.i++;
                          break;
                        case "{":
                          n++;
                          break;
                        case "}":
                          if (0 == --n) return this.string.slice(r, this.i - 1);
                      }
                    throw new l.default(
                      "MissingCloseBrace",
                      "Missing close brace"
                    );
                }
                var o = this.getCodePoint();
                return (this.i += o.length), o;
              }),
              (t.prototype.GetBrackets = function (t, e) {
                if ("[" !== this.GetNext()) return e;
                for (var r = ++this.i, n = 0; this.i < this.string.length; )
                  switch (this.string.charAt(this.i++)) {
                    case "{":
                      n++;
                      break;
                    case "\\":
                      this.i++;
                      break;
                    case "}":
                      if (n-- <= 0)
                        throw new l.default(
                          "ExtraCloseLooking",
                          "Extra close brace while looking for %1",
                          "']'"
                        );
                      break;
                    case "]":
                      if (0 === n) return this.string.slice(r, this.i - 1);
                  }
                throw new l.default(
                  "MissingCloseBracket",
                  "Could not find closing ']' for argument to %1",
                  this.currentCS
                );
              }),
              (t.prototype.GetDelimiter = function (t, e) {
                var r = this.GetNext();
                if (
                  ((this.i += r.length),
                  this.i <= this.string.length &&
                    ("\\" === r
                      ? (r += this.GetCS())
                      : "{" === r &&
                        e &&
                        (this.i--, (r = this.GetArgument(t).trim())),
                    this.contains("delimiter", r)))
                )
                  return this.convertDelimiter(r);
                throw new l.default(
                  "MissingOrUnrecognizedDelim",
                  "Missing or unrecognized delimiter for %1",
                  this.currentCS
                );
              }),
              (t.prototype.GetDimen = function (t) {
                if ("{" === this.GetNext()) {
                  var e = this.GetArgument(t),
                    r = o(a.default.matchDimen(e), 2),
                    n = r[0],
                    i = r[1];
                  if (n) return n + i;
                } else {
                  e = this.string.slice(this.i);
                  var s = o(a.default.matchDimen(e, !0), 3),
                    u = ((n = s[0]), (i = s[1]), s[2]);
                  if (n) return (this.i += u), n + i;
                }
                throw new l.default(
                  "MissingDimOrUnits",
                  "Missing dimension or its units for %1",
                  this.currentCS
                );
              }),
              (t.prototype.GetUpTo = function (t, e) {
                for (; this.nextIsSpace(); ) this.i++;
                for (var r = this.i, n = 0; this.i < this.string.length; ) {
                  var o = this.i,
                    i = this.GetNext();
                  switch (((this.i += i.length), i)) {
                    case "\\":
                      i += this.GetCS();
                      break;
                    case "{":
                      n++;
                      break;
                    case "}":
                      if (0 === n)
                        throw new l.default(
                          "ExtraCloseLooking",
                          "Extra close brace while looking for %1",
                          e
                        );
                      n--;
                  }
                  if (0 === n && i === e) return this.string.slice(r, o);
                }
                throw new l.default(
                  "TokenNotFoundForCommand",
                  "Could not find %1 for %2",
                  e,
                  this.currentCS
                );
              }),
              (t.prototype.ParseArg = function (e) {
                return new t(
                  this.GetArgument(e),
                  this.stack.env,
                  this.configuration
                ).mml();
              }),
              (t.prototype.ParseUpTo = function (e, r) {
                return new t(
                  this.GetUpTo(e, r),
                  this.stack.env,
                  this.configuration
                ).mml();
              }),
              (t.prototype.GetDelimiterArg = function (t) {
                var e = a.default.trimSpaces(this.GetArgument(t));
                if ("" === e) return null;
                if (this.contains("delimiter", e)) return e;
                throw new l.default(
                  "MissingOrUnrecognizedDelim",
                  "Missing or unrecognized delimiter for %1",
                  this.currentCS
                );
              }),
              (t.prototype.GetStar = function () {
                var t = "*" === this.GetNext();
                return t && this.i++, t;
              }),
              (t.prototype.create = function (t) {
                for (var e, r = [], n = 1; n < arguments.length; n++)
                  r[n - 1] = arguments[n];
                return (e = this.configuration.nodeFactory).create.apply(
                  e,
                  i([t], o(r))
                );
              }),
              t
            );
          })();
        e.default = c;
      },
      606: function (t, e, r) {
        var n,
          o,
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
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.BaseConfiguration = e.BaseTags = e.Other = void 0);
        var s = r(552),
          l = r(910),
          u = r(466),
          c = r(321),
          f = r(628),
          p = r(389),
          h = r(251);
        r(962);
        var d = r(857);
        function m(t, e) {
          var r = t.stack.env.font ? { mathvariant: t.stack.env.font } : {},
            n = l.MapHandler.getMap("remap").lookup(e),
            o = d.getRange(e),
            i = o ? o[3] : "mo",
            a = t.create("token", i, r, n ? n.char : e);
          "mo" === i &&
            (c.default.setProperty(a, "fixStretchy", !0),
            t.configuration.addNode("fixStretchy", a)),
            t.Push(a);
        }
        new f.CharacterMap("remap", null, {
          "-": "\u2212",
          "*": "\u2217",
          "`": "\u2018",
        }),
          (e.Other = m);
        var y = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return i(e, t), e;
        })(h.AbstractTags);
        (e.BaseTags = y),
          (e.BaseConfiguration = s.Configuration.create("base", {
            handler: {
              character: ["command", "special", "letter", "digit"],
              delimiter: ["delimiter"],
              macro: [
                "delimiter",
                "macros",
                "mathchar0mi",
                "mathchar0mo",
                "mathchar7",
              ],
              environment: ["environment"],
            },
            fallback: {
              character: m,
              macro: function (t, e) {
                throw new u.default(
                  "UndefinedControlSequence",
                  "Undefined control sequence %1",
                  "\\" + e
                );
              },
              environment: function (t, e) {
                throw new u.default(
                  "UnknownEnv",
                  "Unknown environment '%1'",
                  e
                );
              },
            },
            items:
              ((o = {}),
              (o[p.StartItem.prototype.kind] = p.StartItem),
              (o[p.StopItem.prototype.kind] = p.StopItem),
              (o[p.OpenItem.prototype.kind] = p.OpenItem),
              (o[p.CloseItem.prototype.kind] = p.CloseItem),
              (o[p.PrimeItem.prototype.kind] = p.PrimeItem),
              (o[p.SubsupItem.prototype.kind] = p.SubsupItem),
              (o[p.OverItem.prototype.kind] = p.OverItem),
              (o[p.LeftItem.prototype.kind] = p.LeftItem),
              (o[p.Middle.prototype.kind] = p.Middle),
              (o[p.RightItem.prototype.kind] = p.RightItem),
              (o[p.BeginItem.prototype.kind] = p.BeginItem),
              (o[p.EndItem.prototype.kind] = p.EndItem),
              (o[p.StyleItem.prototype.kind] = p.StyleItem),
              (o[p.PositionItem.prototype.kind] = p.PositionItem),
              (o[p.CellItem.prototype.kind] = p.CellItem),
              (o[p.MmlItem.prototype.kind] = p.MmlItem),
              (o[p.FnItem.prototype.kind] = p.FnItem),
              (o[p.NotItem.prototype.kind] = p.NotItem),
              (o[p.NonscriptItem.prototype.kind] = p.NonscriptItem),
              (o[p.DotsItem.prototype.kind] = p.DotsItem),
              (o[p.ArrayItem.prototype.kind] = p.ArrayItem),
              (o[p.EqnArrayItem.prototype.kind] = p.EqnArrayItem),
              (o[p.EquationItem.prototype.kind] = p.EquationItem),
              o),
            options: {
              maxMacros: 1e3,
              baseURL:
                "undefined" == typeof document ||
                0 === document.getElementsByTagName("base").length
                  ? ""
                  : String(document.location).replace(/#.*$/, ""),
            },
            tags: { base: y },
            postprocessors: [
              [
                function (t) {
                  var e,
                    r,
                    n = t.data;
                  try {
                    for (
                      var o = a(n.getList("nonscript")), i = o.next();
                      !i.done;
                      i = o.next()
                    ) {
                      var s = i.value;
                      if (s.attributes.get("scriptlevel") > 0) {
                        var l = s.parent;
                        if (
                          (l.childNodes.splice(l.childIndex(s), 1),
                          n.removeFromList(s.kind, [s]),
                          s.isKind("mrow"))
                        ) {
                          var u = s.childNodes[0];
                          n.removeFromList("mstyle", [u]),
                            n.removeFromList(
                              "mspace",
                              u.childNodes[0].childNodes
                            );
                        }
                      } else
                        s.isKind("mrow") &&
                          (s.parent.replaceChild(s.childNodes[0], s),
                          n.removeFromList("mrow", [s]));
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      i && !i.done && (r = o.return) && r.call(o);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                },
                -4,
              ],
            ],
          }));
      },
      389: function (t, e, r) {
        var n,
          o =
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
          i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
                t[o] = e[r];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EquationItem =
            e.EqnArrayItem =
            e.ArrayItem =
            e.DotsItem =
            e.NonscriptItem =
            e.NotItem =
            e.FnItem =
            e.MmlItem =
            e.CellItem =
            e.PositionItem =
            e.StyleItem =
            e.EndItem =
            e.BeginItem =
            e.RightItem =
            e.Middle =
            e.LeftItem =
            e.OverItem =
            e.SubsupItem =
            e.PrimeItem =
            e.CloseItem =
            e.OpenItem =
            e.StopItem =
            e.StartItem =
              void 0);
        var s = r(910),
          l = r(29),
          u = r(921),
          c = r(466),
          f = r(702),
          p = r(321),
          h = r(44),
          d = (function (t) {
            function e(e, r) {
              var n = t.call(this, e) || this;
              return (n.global = r), n;
            }
            return (
              o(e, t),
              Object.defineProperty(e.prototype, "kind", {
                get: function () {
                  return "start";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isOpen", {
                get: function () {
                  return !0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.checkItem = function (e) {
                if (e.isKind("stop")) {
                  var r = this.toMml();
                  return (
                    this.global.isInner ||
                      (r = this.factory.configuration.tags.finalize(
                        r,
                        this.env
                      )),
                    [[this.factory.create("mml", r)], !0]
                  );
                }
                return t.prototype.checkItem.call(this, e);
              }),
              e
            );
          })(h.BaseItem);
        e.StartItem = d;
        var m = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "stop";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(h.BaseItem);
        e.StopItem = m;
        var y = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "open";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isOpen", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isKind("close")) {
                var r = this.toMml(),
                  n = this.create("node", "TeXAtom", [r]);
                return [[this.factory.create("mml", n)], !0];
              }
              return t.prototype.checkItem.call(this, e);
            }),
            (e.errors = Object.assign(Object.create(h.BaseItem.errors), {
              stop: [
                "ExtraOpenMissingClose",
                "Extra open brace or missing close brace",
              ],
            })),
            e
          );
        })(h.BaseItem);
        e.OpenItem = y;
        var g = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "close";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(h.BaseItem);
        e.CloseItem = g;
        var v = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "prime";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (t) {
              var e = i(this.Peek(2), 2),
                r = e[0],
                n = e[1];
              return !p.default.isType(r, "msubsup") ||
                p.default.isType(r, "msup")
                ? [[this.create("node", "msup", [r, n]), t], !0]
                : (p.default.setChild(r, r.sup, n), [[r, t], !0]);
            }),
            e
          );
        })(h.BaseItem);
        e.PrimeItem = v;
        var b = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "subsup";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isKind("open") || e.isKind("left"))
                return h.BaseItem.success;
              var r = this.First,
                n = this.getProperty("position");
              if (e.isKind("mml")) {
                if (this.getProperty("primes"))
                  if (2 !== n)
                    p.default.setChild(r, 2, this.getProperty("primes"));
                  else {
                    p.default.setProperty(
                      this.getProperty("primes"),
                      "variantForm",
                      !0
                    );
                    var o = this.create("node", "mrow", [
                      this.getProperty("primes"),
                      e.First,
                    ]);
                    e.First = o;
                  }
                return (
                  p.default.setChild(r, n, e.First),
                  null != this.getProperty("movesupsub") &&
                    p.default.setProperty(
                      r,
                      "movesupsub",
                      this.getProperty("movesupsub")
                    ),
                  [[this.factory.create("mml", r)], !0]
                );
              }
              if (t.prototype.checkItem.call(this, e)[1]) {
                var s = this.getErrors(["", "sub", "sup"][n]);
                throw new (c.default.bind.apply(
                  c.default,
                  a([void 0, s[0], s[1]], i(s.splice(2)))
                ))();
              }
              return null;
            }),
            (e.errors = Object.assign(Object.create(h.BaseItem.errors), {
              stop: [
                "MissingScript",
                "Missing superscript or subscript argument",
              ],
              sup: ["MissingOpenForSup", "Missing open brace for superscript"],
              sub: ["MissingOpenForSub", "Missing open brace for subscript"],
            })),
            e
          );
        })(h.BaseItem);
        e.SubsupItem = b;
        var x = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return r.setProperty("name", "\\over"), r;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "over";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isKind("over"))
                throw new c.default(
                  "AmbiguousUseOf",
                  "Ambiguous use of %1",
                  e.getName()
                );
              if (e.isClose) {
                var r = this.create("node", "mfrac", [
                  this.getProperty("num"),
                  this.toMml(!1),
                ]);
                return (
                  null != this.getProperty("thickness") &&
                    p.default.setAttribute(
                      r,
                      "linethickness",
                      this.getProperty("thickness")
                    ),
                  (this.getProperty("open") || this.getProperty("close")) &&
                    (p.default.setProperty(r, "withDelims", !0),
                    (r = f.default.fixedFence(
                      this.factory.configuration,
                      this.getProperty("open"),
                      r,
                      this.getProperty("close")
                    ))),
                  [[this.factory.create("mml", r), e], !0]
                );
              }
              return t.prototype.checkItem.call(this, e);
            }),
            (e.prototype.toString = function () {
              return (
                "over[" +
                this.getProperty("num") +
                " / " +
                this.nodes.join("; ") +
                "]"
              );
            }),
            e
          );
        })(h.BaseItem);
        e.OverItem = x;
        var T = (function (t) {
          function e(e, r) {
            var n = t.call(this, e) || this;
            return n.setProperty("delim", r), n;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "left";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isOpen", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isKind("right"))
                return [
                  [
                    this.factory.create(
                      "mml",
                      f.default.fenced(
                        this.factory.configuration,
                        this.getProperty("delim"),
                        this.toMml(),
                        e.getProperty("delim"),
                        "",
                        e.getProperty("color")
                      )
                    ),
                  ],
                  !0,
                ];
              if (e.isKind("middle")) {
                var r = { stretchy: !0 };
                return (
                  e.getProperty("color") &&
                    (r.mathcolor = e.getProperty("color")),
                  this.Push(
                    this.create("node", "TeXAtom", [], {
                      texClass: u.TEXCLASS.CLOSE,
                    }),
                    this.create("token", "mo", r, e.getProperty("delim")),
                    this.create("node", "TeXAtom", [], {
                      texClass: u.TEXCLASS.OPEN,
                    })
                  ),
                  (this.env = {}),
                  [[this], !0]
                );
              }
              return t.prototype.checkItem.call(this, e);
            }),
            (e.errors = Object.assign(Object.create(h.BaseItem.errors), {
              stop: [
                "ExtraLeftMissingRight",
                "Extra \\left or missing \\right",
              ],
            })),
            e
          );
        })(h.BaseItem);
        e.LeftItem = T;
        var P = (function (t) {
          function e(e, r, n) {
            var o = t.call(this, e) || this;
            return o.setProperty("delim", r), n && o.setProperty("color", n), o;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "middle";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(h.BaseItem);
        e.Middle = P;
        var S = (function (t) {
          function e(e, r, n) {
            var o = t.call(this, e) || this;
            return o.setProperty("delim", r), n && o.setProperty("color", n), o;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "right";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(h.BaseItem);
        e.RightItem = S;
        var M = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "begin";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isOpen", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isKind("end")) {
                if (e.getName() !== this.getName())
                  throw new c.default(
                    "EnvBadEnd",
                    "\\begin{%1} ended with \\end{%2}",
                    this.getName(),
                    e.getName()
                  );
                return this.getProperty("end")
                  ? h.BaseItem.fail
                  : [[this.factory.create("mml", this.toMml())], !0];
              }
              if (e.isKind("stop"))
                throw new c.default(
                  "EnvMissingEnd",
                  "Missing \\end{%1}",
                  this.getName()
                );
              return t.prototype.checkItem.call(this, e);
            }),
            e
          );
        })(h.BaseItem);
        e.BeginItem = M;
        var O = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "end";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(h.BaseItem);
        e.EndItem = O;
        var A = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "style";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (!e.isClose) return t.prototype.checkItem.call(this, e);
              var r = this.create(
                "node",
                "mstyle",
                this.nodes,
                this.getProperty("styles")
              );
              return [[this.factory.create("mml", r), e], !0];
            }),
            e
          );
        })(h.BaseItem);
        e.StyleItem = A;
        var C = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "position";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isClose)
                throw new c.default(
                  "MissingBoxFor",
                  "Missing box for %1",
                  this.getName()
                );
              if (e.isFinal) {
                var r = e.toMml();
                switch (this.getProperty("move")) {
                  case "vertical":
                    return (
                      (r = this.create("node", "mpadded", [r], {
                        height: this.getProperty("dh"),
                        depth: this.getProperty("dd"),
                        voffset: this.getProperty("dh"),
                      })),
                      [[this.factory.create("mml", r)], !0]
                    );
                  case "horizontal":
                    return [
                      [
                        this.factory.create("mml", this.getProperty("left")),
                        e,
                        this.factory.create("mml", this.getProperty("right")),
                      ],
                      !0,
                    ];
                }
              }
              return t.prototype.checkItem.call(this, e);
            }),
            e
          );
        })(h.BaseItem);
        e.PositionItem = C;
        var w = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "cell";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isClose", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(h.BaseItem);
        e.CellItem = w;
        var E = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "isFinal", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "mml";
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(h.BaseItem);
        e.MmlItem = E;
        var k = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "fn";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              var r = this.First;
              if (r) {
                if (e.isOpen) return h.BaseItem.success;
                if (!e.isKind("fn")) {
                  var n = e.First;
                  if (!e.isKind("mml") || !n) return [[r, e], !0];
                  if (
                    (p.default.isType(n, "mstyle") &&
                      n.childNodes.length &&
                      p.default.isType(
                        n.childNodes[0].childNodes[0],
                        "mspace"
                      )) ||
                    p.default.isType(n, "mspace")
                  )
                    return [[r, e], !0];
                  p.default.isEmbellished(n) && (n = p.default.getCoreMO(n));
                  var o = p.default.getForm(n);
                  if (null != o && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][o[2]])
                    return [[r, e], !0];
                }
                var i = this.create(
                  "token",
                  "mo",
                  { texClass: u.TEXCLASS.NONE },
                  l.entities.ApplyFunction
                );
                return [[r, i, e], !0];
              }
              return t.prototype.checkItem.apply(this, arguments);
            }),
            e
          );
        })(h.BaseItem);
        e.FnItem = k;
        var I = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.remap = s.MapHandler.getMap("not_remap")), e;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "not";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (t) {
              var e, r, n;
              if (t.isKind("open") || t.isKind("left"))
                return h.BaseItem.success;
              if (
                t.isKind("mml") &&
                (p.default.isType(t.First, "mo") ||
                  p.default.isType(t.First, "mi") ||
                  p.default.isType(t.First, "mtext")) &&
                ((e = t.First),
                1 === (r = p.default.getText(e)).length &&
                  !p.default.getProperty(e, "movesupsub") &&
                  1 === p.default.getChildren(e).length)
              )
                return (
                  this.remap.contains(r)
                    ? ((n = this.create("text", this.remap.lookup(r).char)),
                      p.default.setChild(e, 0, n))
                    : ((n = this.create("text", "\u0338")),
                      p.default.appendChildren(e, [n])),
                  [[t], !0]
                );
              n = this.create("text", "\u29f8");
              var o = this.create("node", "mtext", [], {}, n),
                i = this.create("node", "mpadded", [o], { width: 0 });
              return [
                [
                  (e = this.create("node", "TeXAtom", [i], {
                    texClass: u.TEXCLASS.REL,
                  })),
                  t,
                ],
                !0,
              ];
            }),
            e
          );
        })(h.BaseItem);
        e.NotItem = I;
        var L = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "nonscript";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (t) {
              if (t.isKind("mml") && 1 === t.Size()) {
                var e = t.First;
                if (
                  (e.isKind("mstyle") &&
                    e.notParent &&
                    (e = p.default.getChildren(p.default.getChildren(e)[0])[0]),
                  e.isKind("mspace"))
                ) {
                  if (e !== t.First) {
                    var r = this.create("node", "mrow", [t.Pop()]);
                    t.Push(r);
                  }
                  this.factory.configuration.addNode("nonscript", t.First);
                }
              }
              return [[t], !0];
            }),
            e
          );
        })(h.BaseItem);
        e.NonscriptItem = L;
        var _ = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "dots";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (t) {
              if (t.isKind("open") || t.isKind("left"))
                return h.BaseItem.success;
              var e = this.getProperty("ldots"),
                r = t.First;
              if (t.isKind("mml") && p.default.isEmbellished(r)) {
                var n = p.default.getTexClass(p.default.getCoreMO(r));
                (n !== u.TEXCLASS.BIN && n !== u.TEXCLASS.REL) ||
                  (e = this.getProperty("cdots"));
              }
              return [[e, t], !0];
            }),
            e
          );
        })(h.BaseItem);
        e.DotsItem = _;
        var F = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.table = []),
              (e.row = []),
              (e.frame = []),
              (e.hfill = []),
              (e.arraydef = {}),
              (e.dashed = !1),
              e
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "array";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isOpen", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "copyEnv", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isClose && !e.isKind("over")) {
                if (e.getProperty("isEntry"))
                  return this.EndEntry(), this.clearEnv(), h.BaseItem.fail;
                if (e.getProperty("isCR"))
                  return (
                    this.EndEntry(),
                    this.EndRow(),
                    this.clearEnv(),
                    h.BaseItem.fail
                  );
                this.EndTable(), this.clearEnv();
                var r = this.factory.create("mml", this.createMml());
                if (this.getProperty("requireClose")) {
                  if (e.isKind("close")) return [[r], !0];
                  throw new c.default(
                    "MissingCloseBrace",
                    "Missing close brace"
                  );
                }
                return [[r, e], !0];
              }
              return t.prototype.checkItem.call(this, e);
            }),
            (e.prototype.createMml = function () {
              var t = this.arraydef.scriptlevel;
              delete this.arraydef.scriptlevel;
              var e = this.create("node", "mtable", this.table, this.arraydef);
              return (
                t && e.setProperty("scriptlevel", t),
                4 === this.frame.length
                  ? p.default.setAttribute(
                      e,
                      "frame",
                      this.dashed ? "dashed" : "solid"
                    )
                  : this.frame.length &&
                    (this.arraydef.rowlines &&
                      (this.arraydef.rowlines = this.arraydef.rowlines.replace(
                        /none( none)+$/,
                        "none"
                      )),
                    p.default.setAttribute(e, "frame", ""),
                    (e = this.create("node", "menclose", [e], {
                      notation: this.frame.join(" "),
                    })),
                    ("none" === (this.arraydef.columnlines || "none") &&
                      "none" === (this.arraydef.rowlines || "none")) ||
                      p.default.setAttribute(e, "data-padding", 0)),
                (this.getProperty("open") || this.getProperty("close")) &&
                  (e = f.default.fenced(
                    this.factory.configuration,
                    this.getProperty("open"),
                    e,
                    this.getProperty("close")
                  )),
                e
              );
            }),
            (e.prototype.EndEntry = function () {
              var t = this.create("node", "mtd", this.nodes);
              this.hfill.length &&
                (0 === this.hfill[0] &&
                  p.default.setAttribute(t, "columnalign", "right"),
                this.hfill[this.hfill.length - 1] === this.Size() &&
                  p.default.setAttribute(
                    t,
                    "columnalign",
                    p.default.getAttribute(t, "columnalign") ? "center" : "left"
                  )),
                this.row.push(t),
                this.Clear(),
                (this.hfill = []);
            }),
            (e.prototype.EndRow = function () {
              var t;
              this.getProperty("isNumbered") && 3 === this.row.length
                ? (this.row.unshift(this.row.pop()),
                  (t = this.create("node", "mlabeledtr", this.row)))
                : (t = this.create("node", "mtr", this.row)),
                this.table.push(t),
                (this.row = []);
            }),
            (e.prototype.EndTable = function () {
              (this.Size() || this.row.length) &&
                (this.EndEntry(), this.EndRow()),
                this.checkLines();
            }),
            (e.prototype.checkLines = function () {
              if (this.arraydef.rowlines) {
                var t = this.arraydef.rowlines.split(/ /);
                t.length === this.table.length
                  ? (this.frame.push("bottom"),
                    t.pop(),
                    (this.arraydef.rowlines = t.join(" ")))
                  : t.length < this.table.length - 1 &&
                    (this.arraydef.rowlines += " none");
              }
              if (this.getProperty("rowspacing")) {
                for (
                  var e = this.arraydef.rowspacing.split(/ /);
                  e.length < this.table.length;

                )
                  e.push(this.getProperty("rowspacing") + "em");
                this.arraydef.rowspacing = e.join(" ");
              }
            }),
            (e.prototype.addRowSpacing = function (t) {
              if (this.arraydef.rowspacing) {
                var e = this.arraydef.rowspacing.split(/ /);
                if (!this.getProperty("rowspacing")) {
                  var r = f.default.dimen2em(e[0]);
                  this.setProperty("rowspacing", r);
                }
                for (
                  var n = this.getProperty("rowspacing");
                  e.length < this.table.length;

                )
                  e.push(f.default.Em(n));
                (e[this.table.length - 1] = f.default.Em(
                  Math.max(0, n + f.default.dimen2em(t))
                )),
                  (this.arraydef.rowspacing = e.join(" "));
              }
            }),
            e
          );
        })(h.BaseItem);
        e.ArrayItem = F;
        var N = (function (t) {
          function e(e) {
            for (var r = [], n = 1; n < arguments.length; n++)
              r[n - 1] = arguments[n];
            var o = t.call(this, e) || this;
            return (
              (o.maxrow = 0),
              o.factory.configuration.tags.start(r[0], r[2], r[1]),
              o
            );
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "eqnarray";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.EndEntry = function () {
              this.row.length &&
                f.default.fixInitialMO(this.factory.configuration, this.nodes);
              var t = this.create("node", "mtd", this.nodes);
              this.row.push(t), this.Clear();
            }),
            (e.prototype.EndRow = function () {
              this.row.length > this.maxrow && (this.maxrow = this.row.length);
              var t = "mtr",
                e = this.factory.configuration.tags.getTag();
              e && ((this.row = [e].concat(this.row)), (t = "mlabeledtr")),
                this.factory.configuration.tags.clearTag();
              var r = this.create("node", t, this.row);
              this.table.push(r), (this.row = []);
            }),
            (e.prototype.EndTable = function () {
              t.prototype.EndTable.call(this),
                this.factory.configuration.tags.end(),
                this.extendArray("columnalign", this.maxrow),
                this.extendArray("columnwidth", this.maxrow),
                this.extendArray("columnspacing", this.maxrow - 1);
            }),
            (e.prototype.extendArray = function (t, e) {
              if (this.arraydef[t]) {
                var r = this.arraydef[t].split(/ /),
                  n = a([], i(r));
                if (n.length > 1) {
                  for (; n.length < e; ) n.push.apply(n, a([], i(r)));
                  this.arraydef[t] = n.slice(0, e).join(" ");
                }
              }
            }),
            e
          );
        })(F);
        e.EqnArrayItem = N;
        var R = (function (t) {
          function e(e) {
            for (var r = [], n = 1; n < arguments.length; n++)
              r[n - 1] = arguments[n];
            var o = t.call(this, e) || this;
            return o.factory.configuration.tags.start("equation", !0, r[0]), o;
          }
          return (
            o(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "equation";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isOpen", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.checkItem = function (e) {
              if (e.isKind("end")) {
                var r = this.toMml(),
                  n = this.factory.configuration.tags.getTag();
                return (
                  this.factory.configuration.tags.end(),
                  [[n ? this.factory.configuration.tags.enTag(r, n) : r, e], !0]
                );
              }
              if (e.isKind("stop"))
                throw new c.default(
                  "EnvMissingEnd",
                  "Missing \\end{%1}",
                  this.getName()
                );
              return t.prototype.checkItem.call(this, e);
            }),
            e
          );
        })(h.BaseItem);
        e.EquationItem = R;
      },
      962: function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(628),
          o = r(7),
          i = r(724),
          a = r(708),
          s = r(702),
          l = r(921),
          u = r(914);
        new n.RegExpMap("letter", a.default.variable, /[a-z]/i),
          new n.RegExpMap("digit", a.default.digit, /[0-9.,]/),
          new n.RegExpMap("command", a.default.controlSequence, /^\\/),
          new n.MacroMap(
            "special",
            {
              "{": "Open",
              "}": "Close",
              "~": "Tilde",
              "^": "Superscript",
              _: "Subscript",
              " ": "Space",
              "\t": "Space",
              "\r": "Space",
              "\n": "Space",
              "'": "Prime",
              "%": "Comment",
              "&": "Entry",
              "#": "Hash",
              "\xa0": "Space",
              "\u2019": "Prime",
            },
            i.default
          ),
          new n.CharacterMap("mathchar0mi", a.default.mathchar0mi, {
            alpha: "\u03b1",
            beta: "\u03b2",
            gamma: "\u03b3",
            delta: "\u03b4",
            epsilon: "\u03f5",
            zeta: "\u03b6",
            eta: "\u03b7",
            theta: "\u03b8",
            iota: "\u03b9",
            kappa: "\u03ba",
            lambda: "\u03bb",
            mu: "\u03bc",
            nu: "\u03bd",
            xi: "\u03be",
            omicron: "\u03bf",
            pi: "\u03c0",
            rho: "\u03c1",
            sigma: "\u03c3",
            tau: "\u03c4",
            upsilon: "\u03c5",
            phi: "\u03d5",
            chi: "\u03c7",
            psi: "\u03c8",
            omega: "\u03c9",
            varepsilon: "\u03b5",
            vartheta: "\u03d1",
            varpi: "\u03d6",
            varrho: "\u03f1",
            varsigma: "\u03c2",
            varphi: "\u03c6",
            S: ["\xa7", { mathvariant: o.TexConstant.Variant.NORMAL }],
            aleph: ["\u2135", { mathvariant: o.TexConstant.Variant.NORMAL }],
            hbar: ["\u210f", { variantForm: !0 }],
            imath: "\u0131",
            jmath: "\u0237",
            ell: "\u2113",
            wp: ["\u2118", { mathvariant: o.TexConstant.Variant.NORMAL }],
            Re: ["\u211c", { mathvariant: o.TexConstant.Variant.NORMAL }],
            Im: ["\u2111", { mathvariant: o.TexConstant.Variant.NORMAL }],
            partial: ["\u2202", { mathvariant: o.TexConstant.Variant.ITALIC }],
            infty: ["\u221e", { mathvariant: o.TexConstant.Variant.NORMAL }],
            prime: ["\u2032", { variantForm: !0 }],
            emptyset: ["\u2205", { mathvariant: o.TexConstant.Variant.NORMAL }],
            nabla: ["\u2207", { mathvariant: o.TexConstant.Variant.NORMAL }],
            top: ["\u22a4", { mathvariant: o.TexConstant.Variant.NORMAL }],
            bot: ["\u22a5", { mathvariant: o.TexConstant.Variant.NORMAL }],
            angle: ["\u2220", { mathvariant: o.TexConstant.Variant.NORMAL }],
            triangle: ["\u25b3", { mathvariant: o.TexConstant.Variant.NORMAL }],
            backslash: [
              "\u2216",
              { mathvariant: o.TexConstant.Variant.NORMAL },
            ],
            forall: ["\u2200", { mathvariant: o.TexConstant.Variant.NORMAL }],
            exists: ["\u2203", { mathvariant: o.TexConstant.Variant.NORMAL }],
            neg: ["\xac", { mathvariant: o.TexConstant.Variant.NORMAL }],
            lnot: ["\xac", { mathvariant: o.TexConstant.Variant.NORMAL }],
            flat: ["\u266d", { mathvariant: o.TexConstant.Variant.NORMAL }],
            natural: ["\u266e", { mathvariant: o.TexConstant.Variant.NORMAL }],
            sharp: ["\u266f", { mathvariant: o.TexConstant.Variant.NORMAL }],
            clubsuit: ["\u2663", { mathvariant: o.TexConstant.Variant.NORMAL }],
            diamondsuit: [
              "\u2662",
              { mathvariant: o.TexConstant.Variant.NORMAL },
            ],
            heartsuit: [
              "\u2661",
              { mathvariant: o.TexConstant.Variant.NORMAL },
            ],
            spadesuit: [
              "\u2660",
              { mathvariant: o.TexConstant.Variant.NORMAL },
            ],
          }),
          new n.CharacterMap("mathchar0mo", a.default.mathchar0mo, {
            surd: "\u221a",
            coprod: ["\u2210", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            bigvee: ["\u22c1", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            bigwedge: ["\u22c0", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            biguplus: ["\u2a04", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            bigcap: ["\u22c2", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            bigcup: ["\u22c3", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            int: ["\u222b", { texClass: l.TEXCLASS.OP }],
            intop: [
              "\u222b",
              { texClass: l.TEXCLASS.OP, movesupsub: !0, movablelimits: !0 },
            ],
            iint: ["\u222c", { texClass: l.TEXCLASS.OP }],
            iiint: ["\u222d", { texClass: l.TEXCLASS.OP }],
            prod: ["\u220f", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            sum: ["\u2211", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            bigotimes: ["\u2a02", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            bigoplus: ["\u2a01", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            bigodot: ["\u2a00", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            oint: ["\u222e", { texClass: l.TEXCLASS.OP }],
            bigsqcup: ["\u2a06", { texClass: l.TEXCLASS.OP, movesupsub: !0 }],
            smallint: ["\u222b", { largeop: !1 }],
            triangleleft: "\u25c3",
            triangleright: "\u25b9",
            bigtriangleup: "\u25b3",
            bigtriangledown: "\u25bd",
            wedge: "\u2227",
            land: "\u2227",
            vee: "\u2228",
            lor: "\u2228",
            cap: "\u2229",
            cup: "\u222a",
            ddagger: "\u2021",
            dagger: "\u2020",
            sqcap: "\u2293",
            sqcup: "\u2294",
            uplus: "\u228e",
            amalg: "\u2a3f",
            diamond: "\u22c4",
            bullet: "\u2219",
            wr: "\u2240",
            div: "\xf7",
            divsymbol: "\xf7",
            odot: ["\u2299", { largeop: !1 }],
            oslash: ["\u2298", { largeop: !1 }],
            otimes: ["\u2297", { largeop: !1 }],
            ominus: ["\u2296", { largeop: !1 }],
            oplus: ["\u2295", { largeop: !1 }],
            mp: "\u2213",
            pm: "\xb1",
            circ: "\u2218",
            bigcirc: "\u25ef",
            setminus: "\u2216",
            cdot: "\u22c5",
            ast: "\u2217",
            times: "\xd7",
            star: "\u22c6",
            propto: "\u221d",
            sqsubseteq: "\u2291",
            sqsupseteq: "\u2292",
            parallel: "\u2225",
            mid: "\u2223",
            dashv: "\u22a3",
            vdash: "\u22a2",
            leq: "\u2264",
            le: "\u2264",
            geq: "\u2265",
            ge: "\u2265",
            lt: "<",
            gt: ">",
            succ: "\u227b",
            prec: "\u227a",
            approx: "\u2248",
            succeq: "\u2ab0",
            preceq: "\u2aaf",
            supset: "\u2283",
            subset: "\u2282",
            supseteq: "\u2287",
            subseteq: "\u2286",
            in: "\u2208",
            ni: "\u220b",
            notin: "\u2209",
            owns: "\u220b",
            gg: "\u226b",
            ll: "\u226a",
            sim: "\u223c",
            simeq: "\u2243",
            perp: "\u22a5",
            equiv: "\u2261",
            asymp: "\u224d",
            smile: "\u2323",
            frown: "\u2322",
            ne: "\u2260",
            neq: "\u2260",
            cong: "\u2245",
            doteq: "\u2250",
            bowtie: "\u22c8",
            models: "\u22a8",
            notChar: "\u29f8",
            Leftrightarrow: "\u21d4",
            Leftarrow: "\u21d0",
            Rightarrow: "\u21d2",
            leftrightarrow: "\u2194",
            leftarrow: "\u2190",
            gets: "\u2190",
            rightarrow: "\u2192",
            to: ["\u2192", { accent: !1 }],
            mapsto: "\u21a6",
            leftharpoonup: "\u21bc",
            leftharpoondown: "\u21bd",
            rightharpoonup: "\u21c0",
            rightharpoondown: "\u21c1",
            nearrow: "\u2197",
            searrow: "\u2198",
            nwarrow: "\u2196",
            swarrow: "\u2199",
            rightleftharpoons: "\u21cc",
            hookrightarrow: "\u21aa",
            hookleftarrow: "\u21a9",
            longleftarrow: "\u27f5",
            Longleftarrow: "\u27f8",
            longrightarrow: "\u27f6",
            Longrightarrow: "\u27f9",
            Longleftrightarrow: "\u27fa",
            longleftrightarrow: "\u27f7",
            longmapsto: "\u27fc",
            ldots: "\u2026",
            cdots: "\u22ef",
            vdots: "\u22ee",
            ddots: "\u22f1",
            dotsc: "\u2026",
            dotsb: "\u22ef",
            dotsm: "\u22ef",
            dotsi: "\u22ef",
            dotso: "\u2026",
            ldotp: [".", { texClass: l.TEXCLASS.PUNCT }],
            cdotp: ["\u22c5", { texClass: l.TEXCLASS.PUNCT }],
            colon: [":", { texClass: l.TEXCLASS.PUNCT }],
          }),
          new n.CharacterMap("mathchar7", a.default.mathchar7, {
            Gamma: "\u0393",
            Delta: "\u0394",
            Theta: "\u0398",
            Lambda: "\u039b",
            Xi: "\u039e",
            Pi: "\u03a0",
            Sigma: "\u03a3",
            Upsilon: "\u03a5",
            Phi: "\u03a6",
            Psi: "\u03a8",
            Omega: "\u03a9",
            _: "_",
            "#": "#",
            $: "$",
            "%": "%",
            "&": "&",
            And: "&",
          }),
          new n.DelimiterMap("delimiter", a.default.delimiter, {
            "(": "(",
            ")": ")",
            "[": "[",
            "]": "]",
            "<": "\u27e8",
            ">": "\u27e9",
            "\\lt": "\u27e8",
            "\\gt": "\u27e9",
            "/": "/",
            "|": ["|", { texClass: l.TEXCLASS.ORD }],
            ".": "",
            "\\\\": "\\",
            "\\lmoustache": "\u23b0",
            "\\rmoustache": "\u23b1",
            "\\lgroup": "\u27ee",
            "\\rgroup": "\u27ef",
            "\\arrowvert": "\u23d0",
            "\\Arrowvert": "\u2016",
            "\\bracevert": "\u23aa",
            "\\Vert": ["\u2016", { texClass: l.TEXCLASS.ORD }],
            "\\|": ["\u2016", { texClass: l.TEXCLASS.ORD }],
            "\\vert": ["|", { texClass: l.TEXCLASS.ORD }],
            "\\uparrow": "\u2191",
            "\\downarrow": "\u2193",
            "\\updownarrow": "\u2195",
            "\\Uparrow": "\u21d1",
            "\\Downarrow": "\u21d3",
            "\\Updownarrow": "\u21d5",
            "\\backslash": "\\",
            "\\rangle": "\u27e9",
            "\\langle": "\u27e8",
            "\\rbrace": "}",
            "\\lbrace": "{",
            "\\}": "}",
            "\\{": "{",
            "\\rceil": "\u2309",
            "\\lceil": "\u2308",
            "\\rfloor": "\u230b",
            "\\lfloor": "\u230a",
            "\\lbrack": "[",
            "\\rbrack": "]",
          }),
          new n.CommandMap(
            "macros",
            {
              displaystyle: ["SetStyle", "D", !0, 0],
              textstyle: ["SetStyle", "T", !1, 0],
              scriptstyle: ["SetStyle", "S", !1, 1],
              scriptscriptstyle: ["SetStyle", "SS", !1, 2],
              rm: ["SetFont", o.TexConstant.Variant.NORMAL],
              mit: ["SetFont", o.TexConstant.Variant.ITALIC],
              oldstyle: ["SetFont", o.TexConstant.Variant.OLDSTYLE],
              cal: ["SetFont", o.TexConstant.Variant.CALLIGRAPHIC],
              it: ["SetFont", o.TexConstant.Variant.MATHITALIC],
              bf: ["SetFont", o.TexConstant.Variant.BOLD],
              bbFont: ["SetFont", o.TexConstant.Variant.DOUBLESTRUCK],
              scr: ["SetFont", o.TexConstant.Variant.SCRIPT],
              frak: ["SetFont", o.TexConstant.Variant.FRAKTUR],
              sf: ["SetFont", o.TexConstant.Variant.SANSSERIF],
              tt: ["SetFont", o.TexConstant.Variant.MONOSPACE],
              mathrm: ["MathFont", o.TexConstant.Variant.NORMAL],
              mathup: ["MathFont", o.TexConstant.Variant.NORMAL],
              mathnormal: ["MathFont", ""],
              mathbf: ["MathFont", o.TexConstant.Variant.BOLD],
              mathbfup: ["MathFont", o.TexConstant.Variant.BOLD],
              mathit: ["MathFont", o.TexConstant.Variant.MATHITALIC],
              mathbfit: ["MathFont", o.TexConstant.Variant.BOLDITALIC],
              mathbb: ["MathFont", o.TexConstant.Variant.DOUBLESTRUCK],
              Bbb: ["MathFont", o.TexConstant.Variant.DOUBLESTRUCK],
              mathfrak: ["MathFont", o.TexConstant.Variant.FRAKTUR],
              mathbffrak: ["MathFont", o.TexConstant.Variant.BOLDFRAKTUR],
              mathscr: ["MathFont", o.TexConstant.Variant.SCRIPT],
              mathbfscr: ["MathFont", o.TexConstant.Variant.BOLDSCRIPT],
              mathsf: ["MathFont", o.TexConstant.Variant.SANSSERIF],
              mathsfup: ["MathFont", o.TexConstant.Variant.SANSSERIF],
              mathbfsf: ["MathFont", o.TexConstant.Variant.BOLDSANSSERIF],
              mathbfsfup: ["MathFont", o.TexConstant.Variant.BOLDSANSSERIF],
              mathsfit: ["MathFont", o.TexConstant.Variant.SANSSERIFITALIC],
              mathbfsfit: [
                "MathFont",
                o.TexConstant.Variant.SANSSERIFBOLDITALIC,
              ],
              mathtt: ["MathFont", o.TexConstant.Variant.MONOSPACE],
              mathcal: ["MathFont", o.TexConstant.Variant.CALLIGRAPHIC],
              mathbfcal: ["MathFont", o.TexConstant.Variant.BOLDCALLIGRAPHIC],
              symrm: ["MathFont", o.TexConstant.Variant.NORMAL],
              symup: ["MathFont", o.TexConstant.Variant.NORMAL],
              symnormal: ["MathFont", ""],
              symbf: ["MathFont", o.TexConstant.Variant.BOLD],
              symbfup: ["MathFont", o.TexConstant.Variant.BOLD],
              symit: ["MathFont", o.TexConstant.Variant.ITALIC],
              symbfit: ["MathFont", o.TexConstant.Variant.BOLDITALIC],
              symbb: ["MathFont", o.TexConstant.Variant.DOUBLESTRUCK],
              symfrak: ["MathFont", o.TexConstant.Variant.FRAKTUR],
              symbffrak: ["MathFont", o.TexConstant.Variant.BOLDFRAKTUR],
              symscr: ["MathFont", o.TexConstant.Variant.SCRIPT],
              symbfscr: ["MathFont", o.TexConstant.Variant.BOLDSCRIPT],
              symsf: ["MathFont", o.TexConstant.Variant.SANSSERIF],
              symsfup: ["MathFont", o.TexConstant.Variant.SANSSERIF],
              symbfsf: ["MathFont", o.TexConstant.Variant.BOLDSANSSERIF],
              symbfsfup: ["MathFont", o.TexConstant.Variant.BOLDSANSSERIF],
              symsfit: ["MathFont", o.TexConstant.Variant.SANSSERIFITALIC],
              symbfsfit: [
                "MathFont",
                o.TexConstant.Variant.SANSSERIFBOLDITALIC,
              ],
              symtt: ["MathFont", o.TexConstant.Variant.MONOSPACE],
              symcal: ["MathFont", o.TexConstant.Variant.CALLIGRAPHIC],
              symbfcal: ["MathFont", o.TexConstant.Variant.BOLDCALLIGRAPHIC],
              textrm: ["HBox", null, o.TexConstant.Variant.NORMAL],
              textup: ["HBox", null, o.TexConstant.Variant.NORMAL],
              textnormal: ["HBox"],
              textit: ["HBox", null, o.TexConstant.Variant.ITALIC],
              textbf: ["HBox", null, o.TexConstant.Variant.BOLD],
              textsf: ["HBox", null, o.TexConstant.Variant.SANSSERIF],
              texttt: ["HBox", null, o.TexConstant.Variant.MONOSPACE],
              tiny: ["SetSize", 0.5],
              Tiny: ["SetSize", 0.6],
              scriptsize: ["SetSize", 0.7],
              small: ["SetSize", 0.85],
              normalsize: ["SetSize", 1],
              large: ["SetSize", 1.2],
              Large: ["SetSize", 1.44],
              LARGE: ["SetSize", 1.73],
              huge: ["SetSize", 2.07],
              Huge: ["SetSize", 2.49],
              arcsin: "NamedFn",
              arccos: "NamedFn",
              arctan: "NamedFn",
              arg: "NamedFn",
              cos: "NamedFn",
              cosh: "NamedFn",
              cot: "NamedFn",
              coth: "NamedFn",
              csc: "NamedFn",
              deg: "NamedFn",
              det: "NamedOp",
              dim: "NamedFn",
              exp: "NamedFn",
              gcd: "NamedOp",
              hom: "NamedFn",
              inf: "NamedOp",
              ker: "NamedFn",
              lg: "NamedFn",
              lim: "NamedOp",
              liminf: ["NamedOp", "lim&thinsp;inf"],
              limsup: ["NamedOp", "lim&thinsp;sup"],
              ln: "NamedFn",
              log: "NamedFn",
              max: "NamedOp",
              min: "NamedOp",
              Pr: "NamedOp",
              sec: "NamedFn",
              sin: "NamedFn",
              sinh: "NamedFn",
              sup: "NamedOp",
              tan: "NamedFn",
              tanh: "NamedFn",
              limits: ["Limits", 1],
              nolimits: ["Limits", 0],
              overline: ["UnderOver", "2015"],
              underline: ["UnderOver", "2015"],
              overbrace: ["UnderOver", "23DE", 1],
              underbrace: ["UnderOver", "23DF", 1],
              overparen: ["UnderOver", "23DC"],
              underparen: ["UnderOver", "23DD"],
              overrightarrow: ["UnderOver", "2192"],
              underrightarrow: ["UnderOver", "2192"],
              overleftarrow: ["UnderOver", "2190"],
              underleftarrow: ["UnderOver", "2190"],
              overleftrightarrow: ["UnderOver", "2194"],
              underleftrightarrow: ["UnderOver", "2194"],
              overset: "Overset",
              underset: "Underset",
              overunderset: "Overunderset",
              stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
              stackbin: ["Macro", "\\mathbin{\\mathop{#2}\\limits^{#1}}", 2],
              over: "Over",
              overwithdelims: "Over",
              atop: "Over",
              atopwithdelims: "Over",
              above: "Over",
              abovewithdelims: "Over",
              brace: ["Over", "{", "}"],
              brack: ["Over", "[", "]"],
              choose: ["Over", "(", ")"],
              frac: "Frac",
              sqrt: "Sqrt",
              root: "Root",
              uproot: ["MoveRoot", "upRoot"],
              leftroot: ["MoveRoot", "leftRoot"],
              left: "LeftRight",
              right: "LeftRight",
              middle: "LeftRight",
              llap: "Lap",
              rlap: "Lap",
              raise: "RaiseLower",
              lower: "RaiseLower",
              moveleft: "MoveLeftRight",
              moveright: "MoveLeftRight",
              ",": ["Spacer", u.MATHSPACE.thinmathspace],
              ":": ["Spacer", u.MATHSPACE.mediummathspace],
              ">": ["Spacer", u.MATHSPACE.mediummathspace],
              ";": ["Spacer", u.MATHSPACE.thickmathspace],
              "!": ["Spacer", u.MATHSPACE.negativethinmathspace],
              enspace: ["Spacer", 0.5],
              quad: ["Spacer", 1],
              qquad: ["Spacer", 2],
              thinspace: ["Spacer", u.MATHSPACE.thinmathspace],
              negthinspace: ["Spacer", u.MATHSPACE.negativethinmathspace],
              hskip: "Hskip",
              hspace: "Hskip",
              kern: "Hskip",
              mskip: "Hskip",
              mspace: "Hskip",
              mkern: "Hskip",
              rule: "rule",
              Rule: ["Rule"],
              Space: ["Rule", "blank"],
              nonscript: "Nonscript",
              big: ["MakeBig", l.TEXCLASS.ORD, 0.85],
              Big: ["MakeBig", l.TEXCLASS.ORD, 1.15],
              bigg: ["MakeBig", l.TEXCLASS.ORD, 1.45],
              Bigg: ["MakeBig", l.TEXCLASS.ORD, 1.75],
              bigl: ["MakeBig", l.TEXCLASS.OPEN, 0.85],
              Bigl: ["MakeBig", l.TEXCLASS.OPEN, 1.15],
              biggl: ["MakeBig", l.TEXCLASS.OPEN, 1.45],
              Biggl: ["MakeBig", l.TEXCLASS.OPEN, 1.75],
              bigr: ["MakeBig", l.TEXCLASS.CLOSE, 0.85],
              Bigr: ["MakeBig", l.TEXCLASS.CLOSE, 1.15],
              biggr: ["MakeBig", l.TEXCLASS.CLOSE, 1.45],
              Biggr: ["MakeBig", l.TEXCLASS.CLOSE, 1.75],
              bigm: ["MakeBig", l.TEXCLASS.REL, 0.85],
              Bigm: ["MakeBig", l.TEXCLASS.REL, 1.15],
              biggm: ["MakeBig", l.TEXCLASS.REL, 1.45],
              Biggm: ["MakeBig", l.TEXCLASS.REL, 1.75],
              mathord: ["TeXAtom", l.TEXCLASS.ORD],
              mathop: ["TeXAtom", l.TEXCLASS.OP],
              mathopen: ["TeXAtom", l.TEXCLASS.OPEN],
              mathclose: ["TeXAtom", l.TEXCLASS.CLOSE],
              mathbin: ["TeXAtom", l.TEXCLASS.BIN],
              mathrel: ["TeXAtom", l.TEXCLASS.REL],
              mathpunct: ["TeXAtom", l.TEXCLASS.PUNCT],
              mathinner: ["TeXAtom", l.TEXCLASS.INNER],
              vcenter: ["TeXAtom", l.TEXCLASS.VCENTER],
              buildrel: "BuildRel",
              hbox: ["HBox", 0],
              text: "HBox",
              mbox: ["HBox", 0],
              fbox: "FBox",
              boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
              framebox: "FrameBox",
              strut: "Strut",
              mathstrut: ["Macro", "\\vphantom{(}"],
              phantom: "Phantom",
              vphantom: ["Phantom", 1, 0],
              hphantom: ["Phantom", 0, 1],
              smash: "Smash",
              acute: ["Accent", "00B4"],
              grave: ["Accent", "0060"],
              ddot: ["Accent", "00A8"],
              tilde: ["Accent", "007E"],
              bar: ["Accent", "00AF"],
              breve: ["Accent", "02D8"],
              check: ["Accent", "02C7"],
              hat: ["Accent", "005E"],
              vec: ["Accent", "2192"],
              dot: ["Accent", "02D9"],
              widetilde: ["Accent", "007E", 1],
              widehat: ["Accent", "005E", 1],
              matrix: "Matrix",
              array: "Matrix",
              pmatrix: ["Matrix", "(", ")"],
              cases: ["Matrix", "{", "", "left left", null, ".1em", null, !0],
              eqalign: [
                "Matrix",
                null,
                null,
                "right left",
                u.em(u.MATHSPACE.thickmathspace),
                ".5em",
                "D",
              ],
              displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
              cr: "Cr",
              "\\": "CrLaTeX",
              newline: ["CrLaTeX", !0],
              hline: ["HLine", "solid"],
              hdashline: ["HLine", "dashed"],
              eqalignno: [
                "Matrix",
                null,
                null,
                "right left",
                u.em(u.MATHSPACE.thickmathspace),
                ".5em",
                "D",
                null,
                "right",
              ],
              leqalignno: [
                "Matrix",
                null,
                null,
                "right left",
                u.em(u.MATHSPACE.thickmathspace),
                ".5em",
                "D",
                null,
                "left",
              ],
              hfill: "HFill",
              hfil: "HFill",
              hfilll: "HFill",
              bmod: [
                "Macro",
                '\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}',
              ],
              pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
              mod: [
                "Macro",
                "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1",
                1,
              ],
              pod: [
                "Macro",
                "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)",
                1,
              ],
              iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
              skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
              pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
              TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
              LaTeX: [
                "Macro",
                "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX",
              ],
              " ": ["Macro", "\\text{ }"],
              not: "Not",
              dots: "Dots",
              space: "Tilde",
              "\xa0": "Tilde",
              begin: "BeginEnd",
              end: "BeginEnd",
              label: "HandleLabel",
              ref: "HandleRef",
              nonumber: "HandleNoTag",
              mathchoice: "MathChoice",
              mmlToken: "MmlToken",
            },
            i.default
          ),
          new n.EnvironmentMap(
            "environment",
            a.default.environment,
            {
              array: ["AlignedArray"],
              equation: ["Equation", null, !0],
              eqnarray: [
                "EqnArray",
                null,
                !0,
                !0,
                "rcl",
                s.default.cols(0, u.MATHSPACE.thickmathspace),
                ".5em",
              ],
            },
            i.default
          ),
          new n.CharacterMap("not_remap", null, {
            "\u2190": "\u219a",
            "\u2192": "\u219b",
            "\u2194": "\u21ae",
            "\u21d0": "\u21cd",
            "\u21d2": "\u21cf",
            "\u21d4": "\u21ce",
            "\u2208": "\u2209",
            "\u220b": "\u220c",
            "\u2223": "\u2224",
            "\u2225": "\u2226",
            "\u223c": "\u2241",
            "~": "\u2241",
            "\u2243": "\u2244",
            "\u2245": "\u2247",
            "\u2248": "\u2249",
            "\u224d": "\u226d",
            "=": "\u2260",
            "\u2261": "\u2262",
            "<": "\u226e",
            ">": "\u226f",
            "\u2264": "\u2270",
            "\u2265": "\u2271",
            "\u2272": "\u2274",
            "\u2273": "\u2275",
            "\u2276": "\u2278",
            "\u2277": "\u2279",
            "\u227a": "\u2280",
            "\u227b": "\u2281",
            "\u2282": "\u2284",
            "\u2283": "\u2285",
            "\u2286": "\u2288",
            "\u2287": "\u2289",
            "\u22a2": "\u22ac",
            "\u22a8": "\u22ad",
            "\u22a9": "\u22ae",
            "\u22ab": "\u22af",
            "\u227c": "\u22e0",
            "\u227d": "\u22e1",
            "\u2291": "\u22e2",
            "\u2292": "\u22e3",
            "\u22b2": "\u22ea",
            "\u22b3": "\u22eb",
            "\u22b4": "\u22ec",
            "\u22b5": "\u22ed",
            "\u2203": "\u2204",
          });
      },
      724: function (t, e, r) {
        var n =
            (this && this.__assign) ||
            function () {
              return (n =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
          o =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" == typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var n,
                o,
                i = r.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                  a.push(n.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(389),
          a = r(321),
          s = r(466),
          l = r(810),
          u = r(7),
          c = r(702),
          f = r(921),
          p = r(251),
          h = r(914),
          d = r(29),
          m = r(77),
          y = {},
          g = {
            fontfamily: 1,
            fontsize: 1,
            fontweight: 1,
            fontstyle: 1,
            color: 1,
            background: 1,
            id: 1,
            class: 1,
            href: 1,
            style: 1,
          };
        function v(t, e) {
          var r = t.stack.env,
            n = r.inRoot;
          r.inRoot = !0;
          var o = new l.default(e, r, t.configuration),
            i = o.mml(),
            a = o.stack.global;
          if (a.leftRoot || a.upRoot) {
            var s = {};
            a.leftRoot && (s.width = a.leftRoot),
              a.upRoot && ((s.voffset = a.upRoot), (s.height = a.upRoot)),
              (i = t.create("node", "mpadded", [i], s));
          }
          return (r.inRoot = n), i;
        }
        (y.Open = function (t, e) {
          t.Push(t.itemFactory.create("open"));
        }),
          (y.Close = function (t, e) {
            t.Push(t.itemFactory.create("close"));
          }),
          (y.Tilde = function (t, e) {
            t.Push(t.create("token", "mtext", {}, d.entities.nbsp));
          }),
          (y.Space = function (t, e) {}),
          (y.Superscript = function (t, e) {
            var r, n, i;
            t.GetNext().match(/\d/) &&
              (t.string =
                t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1));
            var l = t.stack.Top();
            l.isKind("prime")
              ? ((i = (r = o(l.Peek(2), 2))[0]), (n = r[1]), t.stack.Pop())
              : (i = t.stack.Prev()) || (i = t.create("token", "mi", {}, ""));
            var u = a.default.getProperty(i, "movesupsub"),
              c = a.default.isType(i, "msubsup") ? i.sup : i.over;
            if (
              (a.default.isType(i, "msubsup") &&
                !a.default.isType(i, "msup") &&
                a.default.getChildAt(i, i.sup)) ||
              (a.default.isType(i, "munderover") &&
                !a.default.isType(i, "mover") &&
                a.default.getChildAt(i, i.over) &&
                !a.default.getProperty(i, "subsupOK"))
            )
              throw new s.default(
                "DoubleExponent",
                "Double exponent: use braces to clarify"
              );
            (a.default.isType(i, "msubsup") && !a.default.isType(i, "msup")) ||
              (u
                ? ((!a.default.isType(i, "munderover") ||
                    a.default.isType(i, "mover") ||
                    a.default.getChildAt(i, i.over)) &&
                    (i = t.create("node", "munderover", [i], {
                      movesupsub: !0,
                    })),
                  (c = i.over))
                : (c = (i = t.create("node", "msubsup", [i])).sup)),
              t.Push(
                t.itemFactory
                  .create("subsup", i)
                  .setProperties({ position: c, primes: n, movesupsub: u })
              );
          }),
          (y.Subscript = function (t, e) {
            var r, n, i;
            t.GetNext().match(/\d/) &&
              (t.string =
                t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1));
            var l = t.stack.Top();
            l.isKind("prime")
              ? ((i = (r = o(l.Peek(2), 2))[0]), (n = r[1]), t.stack.Pop())
              : (i = t.stack.Prev()) || (i = t.create("token", "mi", {}, ""));
            var u = a.default.getProperty(i, "movesupsub"),
              c = a.default.isType(i, "msubsup") ? i.sub : i.under;
            if (
              (a.default.isType(i, "msubsup") &&
                !a.default.isType(i, "msup") &&
                a.default.getChildAt(i, i.sub)) ||
              (a.default.isType(i, "munderover") &&
                !a.default.isType(i, "mover") &&
                a.default.getChildAt(i, i.under) &&
                !a.default.getProperty(i, "subsupOK"))
            )
              throw new s.default(
                "DoubleSubscripts",
                "Double subscripts: use braces to clarify"
              );
            (a.default.isType(i, "msubsup") && !a.default.isType(i, "msup")) ||
              (u
                ? ((!a.default.isType(i, "munderover") ||
                    a.default.isType(i, "mover") ||
                    a.default.getChildAt(i, i.under)) &&
                    (i = t.create("node", "munderover", [i], {
                      movesupsub: !0,
                    })),
                  (c = i.under))
                : (c = (i = t.create("node", "msubsup", [i])).sub)),
              t.Push(
                t.itemFactory
                  .create("subsup", i)
                  .setProperties({ position: c, primes: n, movesupsub: u })
              );
          }),
          (y.Prime = function (t, e) {
            var r = t.stack.Prev();
            if (
              (r || (r = t.create("node", "mi")),
              a.default.isType(r, "msubsup") &&
                !a.default.isType(r, "msup") &&
                a.default.getChildAt(r, r.sup))
            )
              throw new s.default(
                "DoubleExponentPrime",
                "Prime causes double exponent: use braces to clarify"
              );
            var n = "";
            t.i--;
            do {
              (n += d.entities.prime), t.i++, (e = t.GetNext());
            } while ("'" === e || e === d.entities.rsquo);
            n = ["", "\u2032", "\u2033", "\u2034", "\u2057"][n.length] || n;
            var o = t.create("token", "mo", { variantForm: !0 }, n);
            t.Push(t.itemFactory.create("prime", r, o));
          }),
          (y.Comment = function (t, e) {
            for (; t.i < t.string.length && "\n" !== t.string.charAt(t.i); )
              t.i++;
          }),
          (y.Hash = function (t, e) {
            throw new s.default(
              "CantUseHash1",
              "You can't use 'macro parameter character #' in math mode"
            );
          }),
          (y.MathFont = function (t, e, r) {
            var o = t.GetArgument(e),
              i = new l.default(
                o,
                n(n({}, t.stack.env), { font: r, multiLetterIdentifiers: !0 }),
                t.configuration
              ).mml();
            t.Push(t.create("node", "TeXAtom", [i]));
          }),
          (y.SetFont = function (t, e, r) {
            t.stack.env.font = r;
          }),
          (y.SetStyle = function (t, e, r, n, o) {
            (t.stack.env.style = r),
              (t.stack.env.level = o),
              t.Push(
                t.itemFactory
                  .create("style")
                  .setProperty("styles", { displaystyle: n, scriptlevel: o })
              );
          }),
          (y.SetSize = function (t, e, r) {
            (t.stack.env.size = r),
              t.Push(
                t.itemFactory
                  .create("style")
                  .setProperty("styles", { mathsize: h.em(r) })
              );
          }),
          (y.Spacer = function (t, e, r) {
            var n = t.create("node", "mspace", [], { width: h.em(r) }),
              o = t.create("node", "mstyle", [n], { scriptlevel: 0 });
            t.Push(o);
          }),
          (y.LeftRight = function (t, e) {
            var r = e.substr(1);
            t.Push(
              t.itemFactory.create(r, t.GetDelimiter(e), t.stack.env.color)
            );
          }),
          (y.NamedFn = function (t, e, r) {
            r || (r = e.substr(1));
            var n = t.create("token", "mi", { texClass: f.TEXCLASS.OP }, r);
            t.Push(t.itemFactory.create("fn", n));
          }),
          (y.NamedOp = function (t, e, r) {
            r || (r = e.substr(1)), (r = r.replace(/&thinsp;/, "\u2006"));
            var n = t.create(
              "token",
              "mo",
              {
                movablelimits: !0,
                movesupsub: !0,
                form: u.TexConstant.Form.PREFIX,
                texClass: f.TEXCLASS.OP,
              },
              r
            );
            t.Push(n);
          }),
          (y.Limits = function (t, e, r) {
            var n = t.stack.Prev(!0);
            if (
              !n ||
              (a.default.getTexClass(a.default.getCoreMO(n)) !==
                f.TEXCLASS.OP &&
                null == a.default.getProperty(n, "movesupsub"))
            )
              throw new s.default(
                "MisplacedLimits",
                "%1 is allowed only on operators",
                t.currentCS
              );
            var o,
              i = t.stack.Top();
            a.default.isType(n, "munderover") && !r
              ? ((o = t.create("node", "msubsup")),
                a.default.copyChildren(n, o),
                (n = i.Last = o))
              : a.default.isType(n, "msubsup") &&
                r &&
                ((o = t.create("node", "munderover")),
                a.default.copyChildren(n, o),
                (n = i.Last = o)),
              a.default.setProperty(n, "movesupsub", !!r),
              a.default.setProperties(a.default.getCoreMO(n), {
                movablelimits: !1,
              }),
              (a.default.getAttribute(n, "movablelimits") ||
                a.default.getProperty(n, "movablelimits")) &&
                a.default.setProperties(n, { movablelimits: !1 });
          }),
          (y.Over = function (t, e, r, n) {
            var o = t.itemFactory
              .create("over")
              .setProperty("name", t.currentCS);
            r || n
              ? (o.setProperty("open", r), o.setProperty("close", n))
              : e.match(/withdelims$/) &&
                (o.setProperty("open", t.GetDelimiter(e)),
                o.setProperty("close", t.GetDelimiter(e))),
              e.match(/^\\above/)
                ? o.setProperty("thickness", t.GetDimen(e))
                : (e.match(/^\\atop/) || r || n) &&
                  o.setProperty("thickness", 0),
              t.Push(o);
          }),
          (y.Frac = function (t, e) {
            var r = t.ParseArg(e),
              n = t.ParseArg(e),
              o = t.create("node", "mfrac", [r, n]);
            t.Push(o);
          }),
          (y.Sqrt = function (t, e) {
            var r = t.GetBrackets(e),
              n = t.GetArgument(e);
            "\\frac" === n &&
              (n += "{" + t.GetArgument(n) + "}{" + t.GetArgument(n) + "}");
            var o = new l.default(n, t.stack.env, t.configuration).mml();
            (o = r
              ? t.create("node", "mroot", [o, v(t, r)])
              : t.create("node", "msqrt", [o])),
              t.Push(o);
          }),
          (y.Root = function (t, e) {
            var r = t.GetUpTo(e, "\\of"),
              n = t.ParseArg(e),
              o = t.create("node", "mroot", [n, v(t, r)]);
            t.Push(o);
          }),
          (y.MoveRoot = function (t, e, r) {
            if (!t.stack.env.inRoot)
              throw new s.default(
                "MisplacedMoveRoot",
                "%1 can appear only within a root",
                t.currentCS
              );
            if (t.stack.global[r])
              throw new s.default(
                "MultipleMoveRoot",
                "Multiple use of %1",
                t.currentCS
              );
            var n = t.GetArgument(e);
            if (!n.match(/-?[0-9]+/))
              throw new s.default(
                "IntegerArg",
                "The argument to %1 must be an integer",
                t.currentCS
              );
            "-" !== (n = parseInt(n, 10) / 15 + "em").substr(0, 1) &&
              (n = "+" + n),
              (t.stack.global[r] = n);
          }),
          (y.Accent = function (t, e, r, o) {
            var i = t.ParseArg(e),
              s = n(n({}, c.default.getFontDef(t)), {
                accent: !0,
                mathaccent: !0,
              }),
              l = a.default.createEntity(r),
              u = t.create("token", "mo", s, l);
            a.default.setAttribute(u, "stretchy", !!o);
            var f = a.default.isEmbellished(i) ? a.default.getCoreMO(i) : i;
            a.default.isType(f, "mo") &&
              a.default.setProperties(f, { movablelimits: !1 });
            var p = t.create("node", "munderover");
            a.default.setChild(p, 0, i),
              a.default.setChild(p, 1, null),
              a.default.setChild(p, 2, u);
            var h = t.create("node", "TeXAtom", [p]);
            t.Push(h);
          }),
          (y.UnderOver = function (t, e, r, n) {
            var o = a.default.createEntity(r),
              i = t.create("token", "mo", { stretchy: !0, accent: !0 }, o),
              s = "o" === e.charAt(1) ? "over" : "under",
              l = t.ParseArg(e);
            t.Push(c.default.underOver(t, l, i, s, n));
          }),
          (y.Overset = function (t, e) {
            var r = t.ParseArg(e),
              n = t.ParseArg(e);
            c.default.checkMovableLimits(n);
            var o = t.create("node", "mover", [n, r]);
            t.Push(o);
          }),
          (y.Underset = function (t, e) {
            var r = t.ParseArg(e),
              n = t.ParseArg(e);
            c.default.checkMovableLimits(n);
            var o = t.create("node", "munder", [n, r]);
            t.Push(o);
          }),
          (y.Overunderset = function (t, e) {
            var r = t.ParseArg(e),
              n = t.ParseArg(e),
              o = t.ParseArg(e);
            c.default.checkMovableLimits(o);
            var i = t.create("node", "munderover", [o, n, r]);
            t.Push(i);
          }),
          (y.TeXAtom = function (t, e, r) {
            var n,
              o,
              i,
              a = { texClass: r };
            if (r === f.TEXCLASS.OP) {
              a.movesupsub = a.movablelimits = !0;
              var s = t.GetArgument(e),
                c = s.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
              c
                ? ((a.mathvariant = u.TexConstant.Variant.NORMAL),
                  (o = t.create("token", "mi", a, c[1])))
                : ((i = new l.default(s, t.stack.env, t.configuration).mml()),
                  (o = t.create("node", "TeXAtom", [i], a))),
                (n = t.itemFactory.create("fn", o));
            } else
              (i = t.ParseArg(e)), (n = t.create("node", "TeXAtom", [i], a));
            t.Push(n);
          }),
          (y.MmlToken = function (t, e) {
            var r,
              n = t.GetArgument(e),
              o = t.GetBrackets(e, "").replace(/^\s+/, ""),
              i = t.GetArgument(e),
              l = {};
            try {
              r = t.create("node", n);
            } catch (t) {
              r = null;
            }
            if (!r || !r.isToken)
              throw new s.default(
                "NotMathMLToken",
                "%1 is not a token element",
                n
              );
            for (; "" !== o; ) {
              var u = o.match(
                /^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i
              );
              if (!u)
                throw new s.default(
                  "InvalidMathMLAttr",
                  "Invalid MathML attribute: %1",
                  o
                );
              if (!r.attributes.hasDefault(u[1]) && !g[u[1]])
                throw new s.default(
                  "UnknownAttrForElement",
                  "%1 is not a recognized attribute for %2",
                  u[1],
                  n
                );
              var f = c.default.MmlFilterAttribute(
                t,
                u[1],
                u[2].replace(/^(['"])(.*)\1$/, "$2")
              );
              f &&
                ("true" === f.toLowerCase()
                  ? (f = !0)
                  : "false" === f.toLowerCase() && (f = !1),
                (l[u[1]] = f)),
                (o = o.substr(u[0].length));
            }
            var p = t.create("text", i);
            r.appendChild(p), a.default.setProperties(r, l), t.Push(r);
          }),
          (y.Strut = function (t, e) {
            var r = t.create("node", "mrow"),
              n = t.create("node", "mpadded", [r], {
                height: "8.6pt",
                depth: "3pt",
                width: 0,
              });
            t.Push(n);
          }),
          (y.Phantom = function (t, e, r, n) {
            var o = t.create("node", "mphantom", [t.ParseArg(e)]);
            (r || n) &&
              ((o = t.create("node", "mpadded", [o])),
              n &&
                (a.default.setAttribute(o, "height", 0),
                a.default.setAttribute(o, "depth", 0)),
              r && a.default.setAttribute(o, "width", 0));
            var i = t.create("node", "TeXAtom", [o]);
            t.Push(i);
          }),
          (y.Smash = function (t, e) {
            var r = c.default.trimSpaces(t.GetBrackets(e, "")),
              n = t.create("node", "mpadded", [t.ParseArg(e)]);
            switch (r) {
              case "b":
                a.default.setAttribute(n, "depth", 0);
                break;
              case "t":
                a.default.setAttribute(n, "height", 0);
                break;
              default:
                a.default.setAttribute(n, "height", 0),
                  a.default.setAttribute(n, "depth", 0);
            }
            var o = t.create("node", "TeXAtom", [n]);
            t.Push(o);
          }),
          (y.Lap = function (t, e) {
            var r = t.create("node", "mpadded", [t.ParseArg(e)], { width: 0 });
            "\\llap" === e && a.default.setAttribute(r, "lspace", "-1width");
            var n = t.create("node", "TeXAtom", [r]);
            t.Push(n);
          }),
          (y.RaiseLower = function (t, e) {
            var r = t.GetDimen(e),
              n = t.itemFactory
                .create("position")
                .setProperties({ name: t.currentCS, move: "vertical" });
            "-" === r.charAt(0) &&
              ((r = r.slice(1)),
              (e = "raise" === e.substr(1) ? "\\lower" : "\\raise")),
              "\\lower" === e
                ? (n.setProperty("dh", "-" + r), n.setProperty("dd", "+" + r))
                : (n.setProperty("dh", "+" + r), n.setProperty("dd", "-" + r)),
              t.Push(n);
          }),
          (y.MoveLeftRight = function (t, e) {
            var r = t.GetDimen(e),
              n = "-" === r.charAt(0) ? r.slice(1) : "-" + r;
            if ("\\moveleft" === e) {
              var o = r;
              (r = n), (n = o);
            }
            t.Push(
              t.itemFactory
                .create("position")
                .setProperties({
                  name: t.currentCS,
                  move: "horizontal",
                  left: t.create("node", "mspace", [], { width: r }),
                  right: t.create("node", "mspace", [], { width: n }),
                })
            );
          }),
          (y.Hskip = function (t, e) {
            var r = t.create("node", "mspace", [], { width: t.GetDimen(e) });
            t.Push(r);
          }),
          (y.Nonscript = function (t, e) {
            t.Push(t.itemFactory.create("nonscript"));
          }),
          (y.Rule = function (t, e, r) {
            var n = {
              width: t.GetDimen(e),
              height: t.GetDimen(e),
              depth: t.GetDimen(e),
            };
            "blank" !== r && (n.mathbackground = t.stack.env.color || "black");
            var o = t.create("node", "mspace", [], n);
            t.Push(o);
          }),
          (y.rule = function (t, e) {
            var r = t.GetBrackets(e),
              n = t.GetDimen(e),
              o = t.GetDimen(e),
              i = t.create("node", "mspace", [], {
                width: n,
                height: o,
                mathbackground: t.stack.env.color || "black",
              });
            r &&
              ((i = t.create("node", "mpadded", [i], { voffset: r })),
              r.match(/^\-/)
                ? (a.default.setAttribute(i, "height", r),
                  a.default.setAttribute(i, "depth", "+" + r.substr(1)))
                : a.default.setAttribute(i, "height", "+" + r)),
              t.Push(i);
          }),
          (y.MakeBig = function (t, e, r, n) {
            var o =
                String((n *= 1.411764705882353)).replace(/(\.\d\d\d).+/, "$1") +
                "em",
              i = t.GetDelimiter(e, !0),
              a = t.create(
                "token",
                "mo",
                {
                  minsize: o,
                  maxsize: o,
                  fence: !0,
                  stretchy: !0,
                  symmetric: !0,
                },
                i
              ),
              s = t.create("node", "TeXAtom", [a], { texClass: r });
            t.Push(s);
          }),
          (y.BuildRel = function (t, e) {
            var r = t.ParseUpTo(e, "\\over"),
              n = t.ParseArg(e),
              o = t.create("node", "munderover");
            a.default.setChild(o, 0, n),
              a.default.setChild(o, 1, null),
              a.default.setChild(o, 2, r);
            var i = t.create("node", "TeXAtom", [o], {
              texClass: f.TEXCLASS.REL,
            });
            t.Push(i);
          }),
          (y.HBox = function (t, e, r, n) {
            t.PushAll(c.default.internalMath(t, t.GetArgument(e), r, n));
          }),
          (y.FBox = function (t, e) {
            var r = c.default.internalMath(t, t.GetArgument(e)),
              n = t.create("node", "menclose", r, { notation: "box" });
            t.Push(n);
          }),
          (y.FrameBox = function (t, e) {
            var r = t.GetBrackets(e),
              n = t.GetBrackets(e) || "c",
              o = c.default.internalMath(t, t.GetArgument(e));
            r &&
              (o = [
                t.create("node", "mpadded", o, {
                  width: r,
                  "data-align": m.lookup(
                    n,
                    { l: "left", r: "right" },
                    "center"
                  ),
                }),
              ]);
            var i = t.create(
              "node",
              "TeXAtom",
              [t.create("node", "menclose", o, { notation: "box" })],
              { texClass: f.TEXCLASS.ORD }
            );
            t.Push(i);
          }),
          (y.Not = function (t, e) {
            t.Push(t.itemFactory.create("not"));
          }),
          (y.Dots = function (t, e) {
            var r = a.default.createEntity("2026"),
              n = a.default.createEntity("22EF"),
              o = t.create("token", "mo", { stretchy: !1 }, r),
              i = t.create("token", "mo", { stretchy: !1 }, n);
            t.Push(
              t.itemFactory.create("dots").setProperties({ ldots: o, cdots: i })
            );
          }),
          (y.Matrix = function (t, e, r, n, o, i, a, l, u, c) {
            var f = t.GetNext();
            if ("" === f)
              throw new s.default(
                "MissingArgFor",
                "Missing argument for %1",
                t.currentCS
              );
            "{" === f
              ? t.i++
              : ((t.string = f + "}" + t.string.slice(t.i + 1)), (t.i = 0));
            var p = t.itemFactory
              .create("array")
              .setProperty("requireClose", !0);
            (p.arraydef = {
              rowspacing: a || "4pt",
              columnspacing: i || "1em",
            }),
              u && p.setProperty("isCases", !0),
              c && (p.setProperty("isNumbered", !0), (p.arraydef.side = c)),
              (r || n) && (p.setProperty("open", r), p.setProperty("close", n)),
              "D" === l && (p.arraydef.displaystyle = !0),
              null != o && (p.arraydef.columnalign = o),
              t.Push(p);
          }),
          (y.Entry = function (t, e) {
            t.Push(
              t.itemFactory
                .create("cell")
                .setProperties({ isEntry: !0, name: e })
            );
            var r = t.stack.Top(),
              n = r.getProperty("casesEnv");
            if (r.getProperty("isCases") || n) {
              for (
                var o = t.string,
                  i = 0,
                  a = -1,
                  l = t.i,
                  u = o.length,
                  f = n
                    ? new RegExp(
                        "^\\\\end\\s*\\{" + n.replace(/\*/, "\\*") + "\\}"
                      )
                    : null;
                l < u;

              ) {
                var p = o.charAt(l);
                if ("{" === p) i++, l++;
                else if ("}" === p)
                  0 === i
                    ? (u = 0)
                    : (0 === --i && a < 0 && (a = l - t.i), l++);
                else {
                  if ("&" === p && 0 === i)
                    throw new s.default(
                      "ExtraAlignTab",
                      "Extra alignment tab in \\cases text"
                    );
                  if ("\\" === p) {
                    var h = o.substr(l);
                    h.match(/^((\\cr)[^a-zA-Z]|\\\\)/) || (f && h.match(f))
                      ? (u = 0)
                      : (l += 2);
                  } else l++;
                }
              }
              var d = o.substr(t.i, l - t.i);
              if (
                !d.match(/^\s*\\text[^a-zA-Z]/) ||
                a !== d.replace(/\s+$/, "").length - 1
              ) {
                var m = c.default.internalMath(t, c.default.trimSpaces(d), 0);
                t.PushAll(m), (t.i = l);
              }
            }
          }),
          (y.Cr = function (t, e) {
            t.Push(
              t.itemFactory.create("cell").setProperties({ isCR: !0, name: e })
            );
          }),
          (y.CrLaTeX = function (t, e, r) {
            var n;
            if (
              (void 0 === r && (r = !1),
              !r &&
                ("*" === t.string.charAt(t.i) && t.i++,
                "[" === t.string.charAt(t.i)))
            ) {
              var a = t.GetBrackets(e, ""),
                l = o(c.default.matchDimen(a), 2),
                f = l[0],
                p = l[1];
              if (a && !f)
                throw new s.default(
                  "BracketMustBeDimension",
                  "Bracket argument to %1 must be a dimension",
                  t.currentCS
                );
              n = f + p;
            }
            t.Push(
              t.itemFactory
                .create("cell")
                .setProperties({ isCR: !0, name: e, linebreak: !0 })
            );
            var h,
              d = t.stack.Top();
            d instanceof i.ArrayItem
              ? n && d.addRowSpacing(n)
              : (n &&
                  ((h = t.create("node", "mspace", [], { depth: n })),
                  t.Push(h)),
                (h = t.create("node", "mspace", [], {
                  linebreak: u.TexConstant.LineBreak.NEWLINE,
                })),
                t.Push(h));
          }),
          (y.HLine = function (t, e, r) {
            null == r && (r = "solid");
            var n = t.stack.Top();
            if (!(n instanceof i.ArrayItem) || n.Size())
              throw new s.default("Misplaced", "Misplaced %1", t.currentCS);
            if (n.table.length) {
              for (
                var o = n.arraydef.rowlines
                  ? n.arraydef.rowlines.split(/ /)
                  : [];
                o.length < n.table.length;

              )
                o.push("none");
              (o[n.table.length - 1] = r), (n.arraydef.rowlines = o.join(" "));
            } else n.frame.push("top");
          }),
          (y.HFill = function (t, e) {
            var r = t.stack.Top();
            if (!(r instanceof i.ArrayItem))
              throw new s.default(
                "UnsupportedHFill",
                "Unsupported use of %1",
                t.currentCS
              );
            r.hfill.push(r.Size());
          }),
          (y.BeginEnd = function (t, e) {
            var r = t.GetArgument(e);
            if (r.match(/\\/i))
              throw new s.default(
                "InvalidEnv",
                "Invalid environment name '%1'",
                r
              );
            var n = t.configuration.handlers.get("environment").lookup(r);
            if (n && "\\end" === e) {
              if (!n.args[0]) {
                var o = t.itemFactory.create("end").setProperty("name", r);
                return void t.Push(o);
              }
              t.stack.env.closing = r;
            }
            c.default.checkMaxMacros(t, !1), t.parse("environment", [t, r]);
          }),
          (y.Array = function (t, e, r, n, o, i, a, s, l) {
            o || (o = t.GetArgument("\\begin{" + e.getName() + "}"));
            var u = ("c" + o)
              .replace(/[^clr|:]/g, "")
              .replace(/[^|:]([|:])+/g, "$1");
            o = (o = o
              .replace(/[^clr]/g, "")
              .split("")
              .join(" "))
              .replace(/l/g, "left")
              .replace(/r/g, "right")
              .replace(/c/g, "center");
            var c = t.itemFactory.create("array");
            return (
              (c.arraydef = {
                columnalign: o,
                columnspacing: i || "1em",
                rowspacing: a || "4pt",
              }),
              u.match(/[|:]/) &&
                (u.charAt(0).match(/[|:]/) &&
                  (c.frame.push("left"), (c.dashed = ":" === u.charAt(0))),
                u.charAt(u.length - 1).match(/[|:]/) && c.frame.push("right"),
                (u = u.substr(1, u.length - 2)),
                (c.arraydef.columnlines = u
                  .split("")
                  .join(" ")
                  .replace(/[^|: ]/g, "none")
                  .replace(/\|/g, "solid")
                  .replace(/:/g, "dashed"))),
              r && c.setProperty("open", t.convertDelimiter(r)),
              n && c.setProperty("close", t.convertDelimiter(n)),
              "'" === (s || "").charAt(1) &&
                ((c.arraydef["data-cramped"] = !0), (s = s.charAt(0))),
              "D" === s
                ? (c.arraydef.displaystyle = !0)
                : s && (c.arraydef.displaystyle = !1),
              "S" === s && (c.arraydef.scriptlevel = 1),
              l && (c.arraydef.useHeight = !1),
              t.Push(e),
              c
            );
          }),
          (y.AlignedArray = function (t, e) {
            var r = t.GetBrackets("\\begin{" + e.getName() + "}"),
              n = y.Array(t, e);
            return c.default.setArrayAlign(n, r);
          }),
          (y.Equation = function (t, e, r) {
            return (
              t.Push(e),
              c.default.checkEqnEnv(t),
              t.itemFactory
                .create("equation", r)
                .setProperty("name", e.getName())
            );
          }),
          (y.EqnArray = function (t, e, r, n, o, i) {
            t.Push(e),
              n && c.default.checkEqnEnv(t),
              (o = (o = o
                .replace(/[^clr]/g, "")
                .split("")
                .join(" "))
                .replace(/l/g, "left")
                .replace(/r/g, "right")
                .replace(/c/g, "center"));
            var a = t.itemFactory.create(
              "eqnarray",
              e.getName(),
              r,
              n,
              t.stack.global
            );
            return (
              (a.arraydef = {
                displaystyle: !0,
                columnalign: o,
                columnspacing: i || "1em",
                rowspacing: "3pt",
                side: t.options.tagSide,
                minlabelspacing: t.options.tagIndent,
              }),
              a
            );
          }),
          (y.HandleNoTag = function (t, e) {
            t.tags.notag();
          }),
          (y.HandleLabel = function (t, e) {
            var r = t.GetArgument(e);
            if ("" !== r && !t.tags.refUpdate) {
              if (t.tags.label)
                throw new s.default(
                  "MultipleCommand",
                  "Multiple %1",
                  t.currentCS
                );
              if (
                ((t.tags.label = r),
                (t.tags.allLabels[r] || t.tags.labels[r]) &&
                  !t.options.ignoreDuplicateLabels)
              )
                throw new s.default(
                  "MultipleLabel",
                  "Label '%1' multiply defined",
                  r
                );
              t.tags.labels[r] = new p.Label();
            }
          }),
          (y.HandleRef = function (t, e, r) {
            var n = t.GetArgument(e),
              o = t.tags.allLabels[n] || t.tags.labels[n];
            o || (t.tags.refUpdate || (t.tags.redo = !0), (o = new p.Label()));
            var i = o.tag;
            r && (i = t.tags.formatTag(i));
            var a = t.create("node", "mrow", c.default.internalMath(t, i), {
              href: t.tags.formatUrl(o.id, t.options.baseURL),
              class: "MathJax_ref",
            });
            t.Push(a);
          }),
          (y.Macro = function (t, e, r, n, o) {
            if (n) {
              var i = [];
              if (null != o) {
                var a = t.GetBrackets(e);
                i.push(null == a ? o : a);
              }
              for (var s = i.length; s < n; s++) i.push(t.GetArgument(e));
              r = c.default.substituteArgs(t, i, r);
            }
            (t.string = c.default.addArgs(t, r, t.string.slice(t.i))),
              (t.i = 0),
              c.default.checkMaxMacros(t);
          }),
          (y.MathChoice = function (t, e) {
            var r = t.ParseArg(e),
              n = t.ParseArg(e),
              o = t.ParseArg(e),
              i = t.ParseArg(e);
            t.Push(t.create("node", "MathChoice", [r, n, o, i]));
          }),
          (e.default = y);
      },
      723: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (e.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      649: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractFindMath = MathJax._.core.FindMath.AbstractFindMath);
      },
      309: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractInputJax = MathJax._.core.InputJax.AbstractInputJax);
      },
      769: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.protoItem = MathJax._.core.MathItem.protoItem),
          (e.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem),
          (e.STATE = MathJax._.core.MathItem.STATE),
          (e.newState = MathJax._.core.MathItem.newState);
      },
      921: function (t, e) {
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
      946: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlMo = MathJax._.core.MmlTree.MmlNodes.mo.MmlMo);
      },
      857: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.OPDEF = MathJax._.core.MmlTree.OperatorDictionary.OPDEF),
          (e.MO = MathJax._.core.MmlTree.OperatorDictionary.MO),
          (e.RANGES = MathJax._.core.MmlTree.OperatorDictionary.RANGES),
          (e.getRange = MathJax._.core.MmlTree.OperatorDictionary.getRange),
          (e.MMLSPACING = MathJax._.core.MmlTree.OperatorDictionary.MMLSPACING),
          (e.OPTABLE = MathJax._.core.MmlTree.OperatorDictionary.OPTABLE);
      },
      752: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractFactory = MathJax._.core.Tree.Factory.AbstractFactory);
      },
      29: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.options = MathJax._.util.Entities.options),
          (e.entities = MathJax._.util.Entities.entities),
          (e.add = MathJax._.util.Entities.add),
          (e.remove = MathJax._.util.Entities.remove),
          (e.translate = MathJax._.util.Entities.translate),
          (e.numeric = MathJax._.util.Entities.numeric);
      },
      898: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FunctionList = MathJax._.util.FunctionList.FunctionList);
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
      297: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.PrioritizedList = MathJax._.util.PrioritizedList.PrioritizedList);
      },
      914: function (t, e) {
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
      720: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.sortLength = MathJax._.util.string.sortLength),
          (e.quotePattern = MathJax._.util.string.quotePattern),
          (e.unicodeChars = MathJax._.util.string.unicodeChars),
          (e.unicodeString = MathJax._.util.string.unicodeString),
          (e.isPercent = MathJax._.util.string.isPercent),
          (e.split = MathJax._.util.string.split);
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n].call(i.exports, i, i.exports, r), i.exports;
  }
  !(function () {
    var t = r(723),
      e = r(205),
      n = r(552),
      o = r(199),
      i = r(982),
      a = r(910),
      s = r(644),
      l = r(321),
      u = r(708),
      c = r(394),
      f = r(702),
      p = r(874),
      h = r(44),
      d = r(239),
      m = r(237),
      y = r(628),
      g = r(251),
      v = r(7),
      b = r(466),
      x = r(810),
      T = r(606),
      P = r(389),
      S = r(724);
    (0, t.r8)({
      _: {
        input: {
          tex_ts: e,
          tex: {
            Configuration: n,
            FilterUtil: o,
            FindTeX: i,
            MapHandler: a,
            NodeFactory: s,
            NodeUtil: l,
            ParseMethods: u,
            ParseOptions: c,
            ParseUtil: f,
            Stack: p,
            StackItem: h,
            StackItemFactory: d,
            Symbol: m,
            SymbolMap: y,
            Tags: g,
            TexConstants: v,
            TexError: b,
            TexParser: x,
            base: { BaseConfiguration: T, BaseItems: P, BaseMethods: S },
          },
        },
      },
    });
    var M = r(77);
    !(function (t) {
      if (MathJax.startup) {
        MathJax.startup.registerConstructor("tex", e.TeX),
          MathJax.startup.useInput("tex"),
          MathJax.config.tex || (MathJax.config.tex = {});
        var r = MathJax.config.tex.packages;
        (MathJax.config.tex.packages = t),
          r && (0, M.insert)(MathJax.config.tex, { packages: r });
      }
    })(["base"]);
  })();
})();

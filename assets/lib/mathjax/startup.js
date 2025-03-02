!(function () {
  "use strict";
  var e = {
      515: function (e, t, r) {
        var n =
          (this && this.__values) ||
          function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              r = t && e[t],
              n = 0;
            if (r) return r.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && n >= e.length && (e = void 0),
                    { value: e && e[n++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          };
        function o(e) {
          return "object" == typeof e && null !== e;
        }
        function a(e, t) {
          var r, i;
          try {
            for (
              var u = n(Object.keys(t)), c = u.next();
              !c.done;
              c = u.next()
            ) {
              var l = c.value;
              "__esModule" !== l &&
                (!o(e[l]) || !o(t[l]) || t[l] instanceof Promise
                  ? null !== t[l] && void 0 !== t[l] && (e[l] = t[l])
                  : a(e[l], t[l]));
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              c && !c.done && (i = u.return) && i.call(u);
            } finally {
              if (r) throw r.error;
            }
          }
          return e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MathJax =
            t.combineWithMathJax =
            t.combineDefaults =
            t.combineConfig =
            t.isObject =
              void 0),
          (t.isObject = o),
          (t.combineConfig = a),
          (t.combineDefaults = function e(t, r, a) {
            var i, u;
            t[r] || (t[r] = {}), (t = t[r]);
            try {
              for (
                var c = n(Object.keys(a)), l = c.next();
                !l.done;
                l = c.next()
              ) {
                var s = l.value;
                o(t[s]) && o(a[s])
                  ? e(t, s, a[s])
                  : null == t[s] && null != a[s] && (t[s] = a[s]);
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                l && !l.done && (u = c.return) && u.call(c);
              } finally {
                if (i) throw i.error;
              }
            }
            return t;
          }),
          (t.combineWithMathJax = function (e) {
            return a(t.MathJax, e);
          }),
          void 0 === r.g.MathJax && (r.g.MathJax = {}),
          r.g.MathJax.version ||
            (r.g.MathJax = { version: "3.2.0", _: {}, config: r.g.MathJax }),
          (t.MathJax = r.g.MathJax);
      },
      235: function (e, t, r) {
        var n,
          o,
          a =
            (this && this.__values) ||
            function (e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                r = t && e[t],
                n = 0;
              if (r) return r.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && n >= e.length && (e = void 0),
                      { value: e && e[n++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CONFIG =
            t.MathJax =
            t.Loader =
            t.PathFilters =
            t.PackageError =
            t.Package =
              void 0);
        var i = r(515),
          u = r(265),
          c = r(265);
        Object.defineProperty(t, "Package", {
          enumerable: !0,
          get: function () {
            return c.Package;
          },
        }),
          Object.defineProperty(t, "PackageError", {
            enumerable: !0,
            get: function () {
              return c.PackageError;
            },
          });
        var l,
          s = r(525);
        if (
          ((t.PathFilters = {
            source: function (e) {
              return (
                t.CONFIG.source.hasOwnProperty(e.name) &&
                  (e.name = t.CONFIG.source[e.name]),
                !0
              );
            },
            normalize: function (e) {
              var t = e.name;
              return (
                t.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i) ||
                  (e.name = "[mathjax]/" + t.replace(/^\.\//, "")),
                e.addExtension && !t.match(/\.[^\/]+$/) && (e.name += ".js"),
                !0
              );
            },
            prefix: function (e) {
              for (
                var r;
                (r = e.name.match(/^\[([^\]]*)\]/)) &&
                t.CONFIG.paths.hasOwnProperty(r[1]);

              )
                e.name = t.CONFIG.paths[r[1]] + e.name.substr(r[0].length);
              return !0;
            },
          }),
          (function (e) {
            (e.ready = function () {
              for (var e, t, r = [], n = 0; n < arguments.length; n++)
                r[n] = arguments[n];
              0 === r.length && (r = Array.from(u.Package.packages.keys()));
              var o = [];
              try {
                for (var i = a(r), c = i.next(); !c.done; c = i.next()) {
                  var l = c.value,
                    s = u.Package.packages.get(l) || new u.Package(l, !0);
                  o.push(s.promise);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  c && !c.done && (t = i.return) && t.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
              return Promise.all(o);
            }),
              (e.load = function () {
                for (var e, r, n = [], o = 0; o < arguments.length; o++)
                  n[o] = arguments[o];
                if (0 === n.length) return Promise.resolve();
                var i = [];
                try {
                  for (var c = a(n), l = c.next(); !l.done; l = c.next()) {
                    var s = l.value,
                      d = u.Package.packages.get(s);
                    d || (d = new u.Package(s)).provides(t.CONFIG.provides[s]),
                      d.checkNoLoad(),
                      i.push(d.promise);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    l && !l.done && (r = c.return) && r.call(c);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return u.Package.loadAll(), Promise.all(i);
              }),
              (e.preLoad = function () {
                for (var e, r, n = [], o = 0; o < arguments.length; o++)
                  n[o] = arguments[o];
                try {
                  for (var i = a(n), c = i.next(); !c.done; c = i.next()) {
                    var l = c.value,
                      s = u.Package.packages.get(l);
                    s ||
                      (s = new u.Package(l, !0)).provides(t.CONFIG.provides[l]),
                      s.loaded();
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    c && !c.done && (r = i.return) && r.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (e.defaultReady = function () {
                void 0 !== t.MathJax.startup &&
                  t.MathJax.config.startup.ready();
              }),
              (e.getRoot = function () {
                var e = "//../../es5";
                if ("undefined" != typeof document) {
                  var t =
                    document.currentScript ||
                    document.getElementById("MathJax-script");
                  t && (e = t.src.replace(/\/[^\/]*$/, ""));
                }
                return e;
              }),
              (e.pathFilters = new s.FunctionList()),
              e.pathFilters.add(t.PathFilters.source, 0),
              e.pathFilters.add(t.PathFilters.normalize, 10),
              e.pathFilters.add(t.PathFilters.prefix, 20);
          })((l = t.Loader || (t.Loader = {}))),
          (t.MathJax = i.MathJax),
          void 0 === t.MathJax.loader)
        ) {
          i.combineDefaults(t.MathJax.config, "loader", {
            paths: { mathjax: l.getRoot() },
            source: {},
            dependencies: {},
            provides: {},
            load: [],
            ready: l.defaultReady.bind(l),
            failed: function (e) {
              return console.log(
                "MathJax(" + (e.package || "?") + "): " + e.message
              );
            },
            require: null,
            pathFilters: [],
          }),
            i.combineWithMathJax({ loader: l });
          try {
            for (
              var d = a(t.MathJax.config.loader.pathFilters), f = d.next();
              !f.done;
              f = d.next()
            ) {
              var h = f.value;
              Array.isArray(h)
                ? l.pathFilters.add(h[0], h[1])
                : l.pathFilters.add(h);
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              f && !f.done && (o = d.return) && o.call(d);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        t.CONFIG = t.MathJax.config.loader;
      },
      265: function (e, t, r) {
        var n,
          o =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            }),
          a =
            (this && this.__values) ||
            function (e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                r = t && e[t],
                n = 0;
              if (r) return r.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && n >= e.length && (e = void 0),
                      { value: e && e[n++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          i =
            (this && this.__read) ||
            function (e, t) {
              var r = "function" == typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var n,
                o,
                a = r.call(e),
                i = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                  i.push(n.value);
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  n && !n.done && (r = a.return) && r.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
              return i;
            },
          u =
            (this && this.__spreadArray) ||
            function (e, t) {
              for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
                e[o] = t[r];
              return e;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Package = t.PackageError = void 0);
        var c = r(235),
          l = (function (e) {
            function t(t, r) {
              var n = e.call(this, t) || this;
              return (n.package = r), n;
            }
            return o(t, e), t;
          })(Error);
        t.PackageError = l;
        var s = (function () {
          function e(t, r) {
            void 0 === r && (r = !1),
              (this.isLoaded = !1),
              (this.isLoading = !1),
              (this.hasFailed = !1),
              (this.dependents = []),
              (this.dependencies = []),
              (this.dependencyCount = 0),
              (this.provided = []),
              (this.name = t),
              (this.noLoad = r),
              e.packages.set(t, this),
              (this.promise = this.makePromise(this.makeDependencies()));
          }
          return (
            Object.defineProperty(e.prototype, "canLoad", {
              get: function () {
                return (
                  0 === this.dependencyCount &&
                  !this.noLoad &&
                  !this.isLoading &&
                  !this.hasFailed
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.resolvePath = function (e, t) {
              void 0 === t && (t = !0);
              var r = { name: e, original: e, addExtension: t };
              return c.Loader.pathFilters.execute(r), r.name;
            }),
            (e.loadAll = function () {
              var e, t;
              try {
                for (
                  var r = a(this.packages.values()), n = r.next();
                  !n.done;
                  n = r.next()
                ) {
                  var o = n.value;
                  o.canLoad && o.load();
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  n && !n.done && (t = r.return) && t.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (e.prototype.makeDependencies = function () {
              var t,
                r,
                n = [],
                o = e.packages,
                l = this.noLoad,
                s = this.name,
                d = [];
              c.CONFIG.dependencies.hasOwnProperty(s)
                ? d.push.apply(d, u([], i(c.CONFIG.dependencies[s])))
                : "core" !== s && d.push("core");
              try {
                for (var f = a(d), h = f.next(); !h.done; h = f.next()) {
                  var p = h.value,
                    y = o.get(p) || new e(p, l);
                  this.dependencies.indexOf(y) < 0 &&
                    (y.addDependent(this, l),
                    this.dependencies.push(y),
                    y.isLoaded || (this.dependencyCount++, n.push(y.promise)));
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  h && !h.done && (r = f.return) && r.call(f);
                } finally {
                  if (t) throw t.error;
                }
              }
              return n;
            }),
            (e.prototype.makePromise = function (e) {
              var t = this,
                r = new Promise(function (e, r) {
                  (t.resolve = e), (t.reject = r);
                }),
                n = c.CONFIG[this.name] || {};
              return (
                n.ready &&
                  (r = r.then(function (e) {
                    return n.ready(t.name);
                  })),
                e.length &&
                  (e.push(r),
                  (r = Promise.all(e).then(function (e) {
                    return e.join(", ");
                  }))),
                n.failed &&
                  r.catch(function (e) {
                    return n.failed(new l(e, t.name));
                  }),
                r
              );
            }),
            (e.prototype.load = function () {
              if (!this.isLoaded && !this.isLoading && !this.noLoad) {
                this.isLoading = !0;
                var t = e.resolvePath(this.name);
                c.CONFIG.require ? this.loadCustom(t) : this.loadScript(t);
              }
            }),
            (e.prototype.loadCustom = function (e) {
              var t = this;
              try {
                var r = c.CONFIG.require(e);
                r instanceof Promise
                  ? r
                      .then(function () {
                        return t.checkLoad();
                      })
                      .catch(function (r) {
                        return t.failed(
                          "Can't load \"" + e + '"\n' + r.message.trim()
                        );
                      })
                  : this.checkLoad();
              } catch (e) {
                this.failed(e.message);
              }
            }),
            (e.prototype.loadScript = function (e) {
              var t = this,
                r = document.createElement("script");
              (r.src = e),
                (r.charset = "UTF-8"),
                (r.onload = function (e) {
                  return t.checkLoad();
                }),
                (r.onerror = function (r) {
                  return t.failed("Can't load \"" + e + '"');
                }),
                document.head.appendChild(r);
            }),
            (e.prototype.loaded = function () {
              var e, t, r, n;
              (this.isLoaded = !0), (this.isLoading = !1);
              try {
                for (
                  var o = a(this.dependents), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  i.value.requirementSatisfied();
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (t = o.return) && t.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              try {
                for (
                  var u = a(this.provided), c = u.next();
                  !c.done;
                  c = u.next()
                ) {
                  c.value.loaded();
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  c && !c.done && (n = u.return) && n.call(u);
                } finally {
                  if (r) throw r.error;
                }
              }
              this.resolve(this.name);
            }),
            (e.prototype.failed = function (e) {
              (this.hasFailed = !0),
                (this.isLoading = !1),
                this.reject(new l(e, this.name));
            }),
            (e.prototype.checkLoad = function () {
              var e = this;
              (
                (c.CONFIG[this.name] || {}).checkReady ||
                function () {
                  return Promise.resolve();
                }
              )()
                .then(function () {
                  return e.loaded();
                })
                .catch(function (t) {
                  return e.failed(t);
                });
            }),
            (e.prototype.requirementSatisfied = function () {
              this.dependencyCount &&
                (this.dependencyCount--, this.canLoad && this.load());
            }),
            (e.prototype.provides = function (t) {
              var r, n;
              void 0 === t && (t = []);
              try {
                for (var o = a(t), i = o.next(); !i.done; i = o.next()) {
                  var u = i.value,
                    l = e.packages.get(u);
                  l ||
                    (c.CONFIG.dependencies[u] ||
                      (c.CONFIG.dependencies[u] = []),
                    c.CONFIG.dependencies[u].push(u),
                    ((l = new e(u, !0)).isLoading = !0)),
                    this.provided.push(l);
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
            }),
            (e.prototype.addDependent = function (e, t) {
              this.dependents.push(e), t || this.checkNoLoad();
            }),
            (e.prototype.checkNoLoad = function () {
              var e, t;
              if (this.noLoad) {
                this.noLoad = !1;
                try {
                  for (
                    var r = a(this.dependencies), n = r.next();
                    !n.done;
                    n = r.next()
                  ) {
                    n.value.checkNoLoad();
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    n && !n.done && (t = r.return) && t.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }
            }),
            (e.packages = new Map()),
            e
          );
        })();
        t.Package = s;
      },
      388: function (e, t, r) {
        var n =
            (this && this.__assign) ||
            function () {
              return (n =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            },
          o =
            (this && this.__values) ||
            function (e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                r = t && e[t],
                n = 0;
              if (r) return r.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && n >= e.length && (e = void 0),
                      { value: e && e[n++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          a =
            (this && this.__read) ||
            function (e, t) {
              var r = "function" == typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var n,
                o,
                a = r.call(e),
                i = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                  i.push(n.value);
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  n && !n.done && (r = a.return) && r.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
              return i;
            },
          i =
            (this && this.__spreadArray) ||
            function (e, t) {
              for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
                e[o] = t[r];
              return e;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CONFIG = t.MathJax = t.Startup = void 0);
        var u,
          c = r(515),
          l = r(666),
          s = r(233);
        !(function (e) {
          var u,
            c,
            s = new l.PrioritizedList();
          function f(t) {
            return u.visitTree(t, e.document);
          }
          function h() {
            (u =
              new t.MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor()),
              (c = t.MathJax._.mathjax.mathjax),
              (e.input = b()),
              (e.output = g()),
              (e.adaptor = O()),
              e.handler && c.handlers.unregister(e.handler),
              (e.handler = w()),
              e.handler && (c.handlers.register(e.handler), (e.document = P()));
          }
          function p() {
            var t, r;
            e.input && e.output && y();
            var n = e.output ? e.output.name.toLowerCase() : "";
            try {
              for (var a = o(e.input), i = a.next(); !i.done; i = a.next()) {
                var u = i.value,
                  c = u.name.toLowerCase();
                x(c, u), v(c, u), e.output && m(c, n, u);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (r = a.return) && r.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
          }
          function y() {
            (t.MathJax.typeset = function (t) {
              void 0 === t && (t = null),
                (e.document.options.elements = t),
                e.document.reset(),
                e.document.render();
            }),
              (t.MathJax.typesetPromise = function (t) {
                return (
                  void 0 === t && (t = null),
                  (e.document.options.elements = t),
                  e.document.reset(),
                  c.handleRetriesFor(function () {
                    e.document.render();
                  })
                );
              }),
              (t.MathJax.typesetClear = function (t) {
                void 0 === t && (t = null),
                  t ? e.document.clearMathItemsWithin(t) : e.document.clear();
              });
          }
          function m(r, n, o) {
            var a = r + "2" + n;
            (t.MathJax[a] = function (t, r) {
              return (
                void 0 === r && (r = {}),
                (r.format = o.name),
                e.document.convert(t, r)
              );
            }),
              (t.MathJax[a + "Promise"] = function (t, r) {
                return (
                  void 0 === r && (r = {}),
                  (r.format = o.name),
                  c.handleRetriesFor(function () {
                    return e.document.convert(t, r);
                  })
                );
              }),
              (t.MathJax[n + "Stylesheet"] = function () {
                return e.output.styleSheet(e.document);
              }),
              "getMetricsFor" in e.output &&
                (t.MathJax.getMetricsFor = function (t, r) {
                  return e.output.getMetricsFor(t, r);
                });
          }
          function x(r, n) {
            var o = t.MathJax._.core.MathItem.STATE;
            (t.MathJax[r + "2mml"] = function (t, r) {
              return (
                void 0 === r && (r = {}),
                (r.end = o.CONVERT),
                (r.format = n.name),
                f(e.document.convert(t, r))
              );
            }),
              (t.MathJax[r + "2mmlPromise"] = function (t, r) {
                return (
                  void 0 === r && (r = {}),
                  (r.end = o.CONVERT),
                  (r.format = n.name),
                  c.handleRetriesFor(function () {
                    return f(e.document.convert(t, r));
                  })
                );
              });
          }
          function v(e, r) {
            t.MathJax[e + "Reset"] = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return r.reset.apply(r, i([], a(e)));
            };
          }
          function b() {
            var r,
              n,
              a = [];
            try {
              for (
                var i = o(t.CONFIG.input), u = i.next();
                !u.done;
                u = i.next()
              ) {
                var c = u.value,
                  l = e.constructors[c];
                if (!l)
                  throw Error(
                    'Input Jax "' + c + '" is not defined (has it been loaded?)'
                  );
                a.push(new l(t.MathJax.config[c]));
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                u && !u.done && (n = i.return) && n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
            return a;
          }
          function g() {
            var r = t.CONFIG.output;
            if (!r) return null;
            var n = e.constructors[r];
            if (!n)
              throw Error(
                'Output Jax "' + r + '" is not defined (has it been loaded?)'
              );
            return new n(t.MathJax.config[r]);
          }
          function O() {
            var r = t.CONFIG.adaptor;
            if (!r || "none" === r) return null;
            var n = e.constructors[r];
            if (!n)
              throw Error(
                'DOMAdaptor "' + r + '" is not defined (has it been loaded?)'
              );
            return n(t.MathJax.config[r]);
          }
          function w() {
            var r,
              n,
              a = t.CONFIG.handler;
            if (!a || "none" === a || !e.adaptor) return null;
            var i = e.constructors[a];
            if (!i)
              throw Error(
                'Handler "' + a + '" is not defined (has it been loaded?)'
              );
            var u = new i(e.adaptor, 5);
            try {
              for (var c = o(s), l = c.next(); !l.done; l = c.next()) {
                u = l.value.item(u);
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                l && !l.done && (n = c.return) && n.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
            return u;
          }
          function P(r) {
            return (
              void 0 === r && (r = null),
              c.document(
                r || t.CONFIG.document,
                n(n({}, t.MathJax.config.options), {
                  InputJax: e.input,
                  OutputJax: e.output,
                })
              )
            );
          }
          (e.constructors = {}),
            (e.input = []),
            (e.output = null),
            (e.handler = null),
            (e.adaptor = null),
            (e.elements = null),
            (e.document = null),
            (e.promise = new Promise(function (t, r) {
              (e.promiseResolve = t), (e.promiseReject = r);
            })),
            (e.pagePromise = new Promise(function (e, t) {
              var n = r.g.document;
              if (
                n &&
                n.readyState &&
                "complete" !== n.readyState &&
                "interactive" !== n.readyState
              ) {
                var o = function () {
                  return e();
                };
                n.defaultView.addEventListener("load", o, !0),
                  n.defaultView.addEventListener("DOMContentLoaded", o, !0);
              } else e();
            })),
            (e.toMML = f),
            (e.registerConstructor = function (t, r) {
              e.constructors[t] = r;
            }),
            (e.useHandler = function (e, r) {
              void 0 === r && (r = !1),
                (t.CONFIG.handler && !r) || (t.CONFIG.handler = e);
            }),
            (e.useAdaptor = function (e, r) {
              void 0 === r && (r = !1),
                (t.CONFIG.adaptor && !r) || (t.CONFIG.adaptor = e);
            }),
            (e.useInput = function (e, r) {
              void 0 === r && (r = !1), (d && !r) || t.CONFIG.input.push(e);
            }),
            (e.useOutput = function (e, r) {
              void 0 === r && (r = !1),
                (t.CONFIG.output && !r) || (t.CONFIG.output = e);
            }),
            (e.extendHandler = function (e, t) {
              void 0 === t && (t = 10), s.add(e, t);
            }),
            (e.defaultReady = function () {
              h(),
                p(),
                e.pagePromise
                  .then(function () {
                    return t.CONFIG.pageReady();
                  })
                  .then(function () {
                    return e.promiseResolve();
                  })
                  .catch(function (t) {
                    return e.promiseReject(t);
                  });
            }),
            (e.defaultPageReady = function () {
              return t.CONFIG.typeset && t.MathJax.typesetPromise
                ? t.MathJax.typesetPromise(t.CONFIG.elements)
                : Promise.resolve();
            }),
            (e.getComponents = h),
            (e.makeMethods = p),
            (e.makeTypesetMethods = y),
            (e.makeOutputMethods = m),
            (e.makeMmlMethods = x),
            (e.makeResetMethod = v),
            (e.getInputJax = b),
            (e.getOutputJax = g),
            (e.getAdaptor = O),
            (e.getHandler = w),
            (e.getDocument = P);
        })((u = t.Startup || (t.Startup = {}))),
          (t.MathJax = c.MathJax),
          void 0 === t.MathJax._.startup &&
            (c.combineDefaults(t.MathJax.config, "startup", {
              input: [],
              output: "",
              handler: null,
              adaptor: null,
              document: "undefined" == typeof document ? "" : document,
              elements: null,
              typeset: !0,
              ready: u.defaultReady.bind(u),
              pageReady: u.defaultPageReady.bind(u),
            }),
            c.combineWithMathJax({ startup: u, options: {} }),
            t.MathJax.config.startup.invalidOption &&
              (s.OPTIONS.invalidOption =
                t.MathJax.config.startup.invalidOption),
            t.MathJax.config.startup.optionError &&
              (s.OPTIONS.optionError = t.MathJax.config.startup.optionError)),
          (t.CONFIG = t.MathJax.config.startup);
        var d = 0 !== t.CONFIG.input.length;
      },
      525: function (e, t, r) {
        var n,
          o =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            }),
          a =
            (this && this.__values) ||
            function (e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                r = t && e[t],
                n = 0;
              if (r) return r.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && n >= e.length && (e = void 0),
                      { value: e && e[n++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          i =
            (this && this.__read) ||
            function (e, t) {
              var r = "function" == typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var n,
                o,
                a = r.call(e),
                i = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                  i.push(n.value);
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  n && !n.done && (r = a.return) && r.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
              return i;
            },
          u =
            (this && this.__spreadArray) ||
            function (e, t) {
              for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
                e[o] = t[r];
              return e;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FunctionList = void 0);
        var c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.execute = function () {
              for (var e, t, r = [], n = 0; n < arguments.length; n++)
                r[n] = arguments[n];
              try {
                for (var o = a(this), c = o.next(); !c.done; c = o.next()) {
                  var l = c.value,
                    s = l.item.apply(l, u([], i(r)));
                  if (!1 === s) return !1;
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  c && !c.done && (t = o.return) && t.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return !0;
            }),
            (t.prototype.asyncExecute = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var r = -1,
                n = this.items;
              return new Promise(function (t, o) {
                !(function a() {
                  for (var c; ++r < n.length; ) {
                    var l = (c = n[r]).item.apply(c, u([], i(e)));
                    if (l instanceof Promise)
                      return void l.then(a).catch(function (e) {
                        return o(e);
                      });
                    if (!1 === l) return void t(!1);
                  }
                  t(!0);
                })();
              });
            }),
            t
          );
        })(r(666).PrioritizedList);
        t.FunctionList = c;
      },
      233: function (e, t) {
        var r =
            (this && this.__values) ||
            function (e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                r = t && e[t],
                n = 0;
              if (r) return r.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && n >= e.length && (e = void 0),
                      { value: e && e[n++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            },
          n =
            (this && this.__read) ||
            function (e, t) {
              var r = "function" == typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var n,
                o,
                a = r.call(e),
                i = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                  i.push(n.value);
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  n && !n.done && (r = a.return) && r.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
              return i;
            },
          o =
            (this && this.__spreadArray) ||
            function (e, t) {
              for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
                e[o] = t[r];
              return e;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.lookup =
            t.separateOptions =
            t.selectOptionsFromKeys =
            t.selectOptions =
            t.userOptions =
            t.defaultOptions =
            t.insert =
            t.copy =
            t.keys =
            t.makeArray =
            t.expandable =
            t.Expandable =
            t.OPTIONS =
            t.REMOVE =
            t.APPEND =
            t.isObject =
              void 0);
        var a = {}.constructor;
        function i(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            (e.constructor === a || e.constructor === u)
          );
        }
        (t.isObject = i),
          (t.APPEND = "[+]"),
          (t.REMOVE = "[-]"),
          (t.OPTIONS = {
            invalidOption: "warn",
            optionError: function (e, r) {
              if ("fatal" === t.OPTIONS.invalidOption) throw new Error(e);
              console.warn("MathJax: " + e);
            },
          });
        var u = function () {};
        function c(e) {
          return Object.assign(Object.create(u.prototype), e);
        }
        function l(e) {
          return e
            ? Object.keys(e).concat(Object.getOwnPropertySymbols(e))
            : [];
        }
        function s(e) {
          var t,
            n,
            o = {};
          try {
            for (var a = r(l(e)), f = a.next(); !f.done; f = a.next()) {
              var h = f.value,
                p = Object.getOwnPropertyDescriptor(e, h),
                y = p.value;
              Array.isArray(y)
                ? (p.value = d([], y, !1))
                : i(y) && (p.value = s(y)),
                p.enumerable && (o[h] = p);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              f && !f.done && (n = a.return) && n.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          return Object.defineProperties(e.constructor === u ? c({}) : {}, o);
        }
        function d(e, a, c) {
          var f, h;
          void 0 === c && (c = !0);
          var p = function (r) {
            if (c && void 0 === e[r] && e.constructor !== u)
              return (
                "symbol" == typeof r && (r = r.toString()),
                t.OPTIONS.optionError(
                  'Invalid option "' + r + '" (no default value).',
                  r
                ),
                "continue"
              );
            var f = a[r],
              h = e[r];
            if (
              !i(f) ||
              null === h ||
              ("object" != typeof h && "function" != typeof h)
            )
              Array.isArray(f)
                ? ((e[r] = []), d(e[r], f, !1))
                : i(f)
                ? (e[r] = s(f))
                : (e[r] = f);
            else {
              var p = l(f);
              Array.isArray(h) &&
              ((1 === p.length &&
                (p[0] === t.APPEND || p[0] === t.REMOVE) &&
                Array.isArray(f[p[0]])) ||
                (2 === p.length &&
                  p.sort().join(",") === t.APPEND + "," + t.REMOVE &&
                  Array.isArray(f[t.APPEND]) &&
                  Array.isArray(f[t.REMOVE])))
                ? (f[t.REMOVE] &&
                    (h = e[r] =
                      h.filter(function (e) {
                        return f[t.REMOVE].indexOf(e) < 0;
                      })),
                  f[t.APPEND] && (e[r] = o(o([], n(h)), n(f[t.APPEND]))))
                : d(h, f, c);
            }
          };
          try {
            for (var y = r(l(a)), m = y.next(); !m.done; m = y.next()) {
              p(m.value);
            }
          } catch (e) {
            f = { error: e };
          } finally {
            try {
              m && !m.done && (h = y.return) && h.call(y);
            } finally {
              if (f) throw f.error;
            }
          }
          return e;
        }
        function f(e) {
          for (var t, n, o = [], a = 1; a < arguments.length; a++)
            o[a - 1] = arguments[a];
          var i = {};
          try {
            for (var u = r(o), c = u.next(); !c.done; c = u.next()) {
              var l = c.value;
              e.hasOwnProperty(l) && (i[l] = e[l]);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              c && !c.done && (n = u.return) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
          return i;
        }
        (t.Expandable = u),
          (t.expandable = c),
          (t.makeArray = function (e) {
            return Array.isArray(e) ? e : [e];
          }),
          (t.keys = l),
          (t.copy = s),
          (t.insert = d),
          (t.defaultOptions = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t[r - 1] = arguments[r];
            return (
              t.forEach(function (t) {
                return d(e, t, !1);
              }),
              e
            );
          }),
          (t.userOptions = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t[r - 1] = arguments[r];
            return (
              t.forEach(function (t) {
                return d(e, t, !0);
              }),
              e
            );
          }),
          (t.selectOptions = f),
          (t.selectOptionsFromKeys = function (e, t) {
            return f.apply(void 0, o([e], n(Object.keys(t))));
          }),
          (t.separateOptions = function (e) {
            for (var t, n, o, a, i = [], u = 1; u < arguments.length; u++)
              i[u - 1] = arguments[u];
            var c = [];
            try {
              for (var l = r(i), s = l.next(); !s.done; s = l.next()) {
                var d = s.value,
                  f = {},
                  h = {};
                try {
                  for (
                    var p = ((o = void 0), r(Object.keys(e || {}))),
                      y = p.next();
                    !y.done;
                    y = p.next()
                  ) {
                    var m = y.value;
                    (void 0 === d[m] ? h : f)[m] = e[m];
                  }
                } catch (e) {
                  o = { error: e };
                } finally {
                  try {
                    y && !y.done && (a = p.return) && a.call(p);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                c.push(f), (e = h);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (n = l.return) && n.call(l);
              } finally {
                if (t) throw t.error;
              }
            }
            return c.unshift(e), c;
          }),
          (t.lookup = function (e, t, r) {
            return void 0 === r && (r = null), t.hasOwnProperty(e) ? t[e] : r;
          });
      },
      666: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PrioritizedList = void 0);
        var r = (function () {
          function e() {
            (this.items = []), (this.items = []);
          }
          return (
            (e.prototype[Symbol.iterator] = function () {
              var e = 0,
                t = this.items;
              return {
                next: function () {
                  return { value: t[e++], done: e > t.length };
                },
              };
            }),
            (e.prototype.add = function (t, r) {
              void 0 === r && (r = e.DEFAULTPRIORITY);
              var n = this.items.length;
              do {
                n--;
              } while (n >= 0 && r < this.items[n].priority);
              return this.items.splice(n + 1, 0, { item: t, priority: r }), t;
            }),
            (e.prototype.remove = function (e) {
              var t = this.items.length;
              do {
                t--;
              } while (t >= 0 && this.items[t].item !== e);
              t >= 0 && this.items.splice(t, 1);
            }),
            (e.DEFAULTPRIORITY = 5),
            e
          );
        })();
        t.PrioritizedList = r;
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n].call(a.exports, a, a.exports, r), a.exports;
  }
  (r.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (function () {
      var e = r(515),
        t = r(235),
        n = r(265),
        o = r(388);
      (0, e.combineWithMathJax)({
        _: { components: { loader: t, package: n, startup: o } },
      });
      var a,
        i = {
          tex: "[mathjax]/input/tex/extensions",
          mml: "[mathjax]/input/mml/extensions",
          sre:
            "[mathjax]/sre/" +
            ("undefined" == typeof window ? "sre-node" : "sre_browser"),
        },
        u = [
          "[tex]/action",
          "[tex]/ams",
          "[tex]/amscd",
          "[tex]/bbox",
          "[tex]/boldsymbol",
          "[tex]/braket",
          "[tex]/bussproofs",
          "[tex]/cancel",
          "[tex]/centernot",
          "[tex]/color",
          "[tex]/colortbl",
          "[tex]/configmacros",
          "[tex]/enclose",
          "[tex]/extpfeil",
          "[tex]/html",
          "[tex]/mathtools",
          "[tex]/mhchem",
          "[tex]/newcommand",
          "[tex]/noerrors",
          "[tex]/noundefined",
          "[tex]/physics",
          "[tex]/require",
          "[tex]/setoptions",
          "[tex]/tagformat",
          "[tex]/textcomp",
          "[tex]/textmacros",
          "[tex]/unicode",
          "[tex]/verb",
          "[tex]/cases",
          "[tex]/empheq",
        ],
        c = {
          startup: ["loader"],
          "input/tex": [
            "input/tex-base",
            "[tex]/ams",
            "[tex]/newcommand",
            "[tex]/noundefined",
            "[tex]/require",
            "[tex]/autoload",
            "[tex]/configmacros",
          ],
          "input/tex-full": ["input/tex-base", "[tex]/all-packages"].concat(u),
          "[tex]/all-packages": u,
        };
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (0, e.combineDefaults)(MathJax.config.loader, "dependencies", {
        "a11y/semantic-enrich": ["input/mml", "[sre]"],
        "a11y/complexity": ["a11y/semantic-enrich"],
        "a11y/explorer": ["a11y/semantic-enrich", "ui/menu"],
        "[mml]/mml3": ["input/mml"],
        "[tex]/all-packages": ["input/tex-base"],
        "[tex]/action": ["input/tex-base", "[tex]/newcommand"],
        "[tex]/autoload": ["input/tex-base", "[tex]/require"],
        "[tex]/ams": ["input/tex-base"],
        "[tex]/amscd": ["input/tex-base"],
        "[tex]/bbox": ["input/tex-base", "[tex]/ams", "[tex]/newcommand"],
        "[tex]/boldsymbol": ["input/tex-base"],
        "[tex]/braket": ["input/tex-base"],
        "[tex]/bussproofs": ["input/tex-base"],
        "[tex]/cancel": ["input/tex-base", "[tex]/enclose"],
        "[tex]/centernot": ["input/tex-base"],
        "[tex]/color": ["input/tex-base"],
        "[tex]/colorv2": ["input/tex-base"],
        "[tex]/colortbl": ["input/tex-base", "[tex]/color"],
        "[tex]/configmacros": ["input/tex-base", "[tex]/newcommand"],
        "[tex]/enclose": ["input/tex-base"],
        "[tex]/extpfeil": ["input/tex-base", "[tex]/newcommand", "[tex]/ams"],
        "[tex]/html": ["input/tex-base"],
        "[tex]/mathtools": ["input/tex-base", "[tex]/newcommand", "[tex]/ams"],
        "[tex]/mhchem": ["input/tex-base", "[tex]/ams"],
        "[tex]/newcommand": ["input/tex-base"],
        "[tex]/noerrors": ["input/tex-base"],
        "[tex]/noundefined": ["input/tex-base"],
        "[tex]/physics": ["input/tex-base"],
        "[tex]/require": ["input/tex-base"],
        "[tex]/setoptions": ["input/tex-base"],
        "[tex]/tagformat": ["input/tex-base"],
        "[tex]/textcomp": ["input/tex-base", "[tex]/textmacros"],
        "[tex]/textmacros": ["input/tex-base"],
        "[tex]/unicode": ["input/tex-base"],
        "[tex]/verb": ["input/tex-base"],
        "[tex]/cases": ["[tex]/empheq"],
        "[tex]/empheq": ["input/tex-base", "[tex]/ams"],
      }),
        (0, e.combineDefaults)(MathJax.config.loader, "paths", i),
        (0, e.combineDefaults)(MathJax.config.loader, "provides", c),
        (0, e.combineDefaults)(MathJax.config.loader, "source", {
          "[tex]/amsCd": "[tex]/amscd",
          "[tex]/colorV2": "[tex]/colorv2",
          "[tex]/configMacros": "[tex]/configmacros",
          "[tex]/tagFormat": "[tex]/tagformat",
        }),
        t.Loader.preLoad("loader"),
        t.Loader.load
          .apply(
            t.Loader,
            ((a = t.CONFIG.load),
            (function (e) {
              if (Array.isArray(e)) return l(e);
            })(a) ||
              (function (e) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(a) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return l(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? l(e, t)
                      : void 0
                  );
                }
              })(a) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })())
          )
          .then(function () {
            return t.CONFIG.ready();
          })
          .catch(function (e) {
            return t.CONFIG.failed(e);
          });
    })();
})();

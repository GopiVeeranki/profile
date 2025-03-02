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
              var s = n(Object.keys(t)), c = s.next();
              !c.done;
              c = s.next()
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
              c && !c.done && (i = s.return) && i.call(s);
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
            var i, s;
            t[r] || (t[r] = {}), (t = t[r]);
            try {
              for (
                var c = n(Object.keys(a)), l = c.next();
                !l.done;
                l = c.next()
              ) {
                var u = l.value;
                o(t[u]) && o(a[u])
                  ? e(t, u, a[u])
                  : null == t[u] && null != a[u] && (t[u] = a[u]);
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                l && !l.done && (s = c.return) && s.call(c);
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
          s = r(265),
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
          u = r(525);
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
              0 === r.length && (r = Array.from(s.Package.packages.keys()));
              var o = [];
              try {
                for (var i = a(r), c = i.next(); !c.done; c = i.next()) {
                  var l = c.value,
                    u = s.Package.packages.get(l) || new s.Package(l, !0);
                  o.push(u.promise);
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
                    var u = l.value,
                      d = s.Package.packages.get(u);
                    d || (d = new s.Package(u)).provides(t.CONFIG.provides[u]),
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
                return s.Package.loadAll(), Promise.all(i);
              }),
              (e.preLoad = function () {
                for (var e, r, n = [], o = 0; o < arguments.length; o++)
                  n[o] = arguments[o];
                try {
                  for (var i = a(n), c = i.next(); !c.done; c = i.next()) {
                    var l = c.value,
                      u = s.Package.packages.get(l);
                    u ||
                      (u = new s.Package(l, !0)).provides(t.CONFIG.provides[l]),
                      u.loaded();
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
              (e.pathFilters = new u.FunctionList()),
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
          s =
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
        var u = (function () {
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
                u = this.name,
                d = [];
              c.CONFIG.dependencies.hasOwnProperty(u)
                ? d.push.apply(d, s([], i(c.CONFIG.dependencies[u])))
                : "core" !== u && d.push("core");
              try {
                for (var f = a(d), h = f.next(); !h.done; h = f.next()) {
                  var p = h.value,
                    x = o.get(p) || new e(p, l);
                  this.dependencies.indexOf(x) < 0 &&
                    (x.addDependent(this, l),
                    this.dependencies.push(x),
                    x.isLoaded || (this.dependencyCount++, n.push(x.promise)));
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
                  var s = a(this.provided), c = s.next();
                  !c.done;
                  c = s.next()
                ) {
                  c.value.loaded();
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  c && !c.done && (n = s.return) && n.call(s);
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
                  var s = i.value,
                    l = e.packages.get(s);
                  l ||
                    (c.CONFIG.dependencies[s] ||
                      (c.CONFIG.dependencies[s] = []),
                    c.CONFIG.dependencies[s].push(s),
                    ((l = new e(s, !0)).isLoading = !0)),
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
        t.Package = u;
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
          s =
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
                    u = l.item.apply(l, s([], i(r)));
                  if (!1 === u) return !1;
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
                    var l = (c = n[r]).item.apply(c, s([], i(e)));
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
        n = r(265);
      (0, e.combineWithMathJax)({
        _: { components: { loader: t, package: n } },
      });
      var o,
        a = {
          tex: "[mathjax]/input/tex/extensions",
          mml: "[mathjax]/input/mml/extensions",
          sre:
            "[mathjax]/sre/" +
            ("undefined" == typeof window ? "sre-node" : "sre_browser"),
        },
        i = [
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
        s = {
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
          "input/tex-full": ["input/tex-base", "[tex]/all-packages"].concat(i),
          "[tex]/all-packages": i,
        };
      function c(e, t) {
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
        (0, e.combineDefaults)(MathJax.config.loader, "paths", a),
        (0, e.combineDefaults)(MathJax.config.loader, "provides", s),
        t.Loader.load
          .apply(
            t.Loader,
            ((o = t.CONFIG.load),
            (function (e) {
              if (Array.isArray(e)) return c(e);
            })(o) ||
              (function (e) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(o) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return c(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? c(e, t)
                      : void 0
                  );
                }
              })(o) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })())
          )
          .then(function () {
            return t.CONFIG.ready();
          })
          .catch(function (e, r) {
            return t.CONFIG.failed(e, r);
          });
    })();
})();

!(function () {
  "use strict";
  var t,
    e,
    r,
    a,
    o = {
      236: function (t, e, r) {
        var a,
          o =
            (this && this.__extends) ||
            ((a = function (t, e) {
              return (a =
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
              a(t, e),
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
              var a,
                o,
                i = r.call(t),
                n = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(a = i.next()).done; )
                  n.push(a.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  a && !a.done && (r = i.return) && r.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return n;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MathML = void 0);
        var n = r(309),
          s = r(77),
          l = r(898),
          h = r(794),
          p = r(332),
          c = (function (t) {
            function e(e) {
              void 0 === e && (e = {});
              var r = this,
                a = i(
                  s.separateOptions(
                    e,
                    h.FindMathML.OPTIONS,
                    p.MathMLCompile.OPTIONS
                  ),
                  3
                ),
                o = a[0],
                n = a[1],
                c = a[2];
              return (
                ((r = t.call(this, o) || this).findMathML =
                  r.options.FindMathML || new h.FindMathML(n)),
                (r.mathml = r.options.MathMLCompile || new p.MathMLCompile(c)),
                (r.mmlFilters = new l.FunctionList()),
                r
              );
            }
            return (
              o(e, t),
              (e.prototype.setAdaptor = function (e) {
                t.prototype.setAdaptor.call(this, e),
                  (this.findMathML.adaptor = e),
                  (this.mathml.adaptor = e);
              }),
              (e.prototype.setMmlFactory = function (e) {
                t.prototype.setMmlFactory.call(this, e),
                  this.mathml.setMmlFactory(e);
              }),
              Object.defineProperty(e.prototype, "processStrings", {
                get: function () {
                  return !1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.compile = function (t, e) {
                var r = t.start.node;
                if (
                  !r ||
                  !t.end.node ||
                  this.options.forceReparse ||
                  "#text" === this.adaptor.kind(r)
                ) {
                  var a = this.executeFilters(
                      this.preFilters,
                      t,
                      e,
                      t.math || "<math></math>"
                    ),
                    o = this.checkForErrors(
                      this.adaptor.parse(a, "text/" + this.options.parseAs)
                    ),
                    i = this.adaptor.body(o);
                  1 !== this.adaptor.childNodes(i).length &&
                    this.error("MathML must consist of a single element"),
                    (r = this.adaptor.remove(this.adaptor.firstChild(i))),
                    "math" !== this.adaptor.kind(r).replace(/^[a-z]+:/, "") &&
                      this.error(
                        "MathML must be formed by a <math> element, not <" +
                          this.adaptor.kind(r) +
                          ">"
                      );
                }
                return (
                  (r = this.executeFilters(this.mmlFilters, t, e, r)),
                  this.executeFilters(
                    this.postFilters,
                    t,
                    e,
                    this.mathml.compile(r)
                  )
                );
              }),
              (e.prototype.checkForErrors = function (t) {
                var e = this.adaptor.tags(
                  this.adaptor.body(t),
                  "parsererror"
                )[0];
                return (
                  e &&
                    ("" === this.adaptor.textContent(e) &&
                      this.error("Error processing MathML"),
                    this.options.parseError.call(this, e)),
                  t
                );
              }),
              (e.prototype.error = function (t) {
                throw new Error(t);
              }),
              (e.prototype.findMath = function (t) {
                return this.findMathML.findMath(t);
              }),
              (e.NAME = "MathML"),
              (e.OPTIONS = s.defaultOptions(
                {
                  parseAs: "html",
                  forceReparse: !1,
                  FindMathML: null,
                  MathMLCompile: null,
                  parseError: function (t) {
                    this.error(
                      this.adaptor.textContent(t).replace(/\n.*/g, "")
                    );
                  },
                },
                n.AbstractInputJax.OPTIONS
              )),
              e
            );
          })(n.AbstractInputJax);
        e.MathML = c;
      },
      794: function (t, e, r) {
        var a,
          o =
            (this && this.__extends) ||
            ((a = function (t, e) {
              return (a =
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
              a(t, e),
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
                a = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && a >= t.length && (t = void 0),
                      { value: t && t[a++], done: !t }
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
          (e.FindMathML = void 0);
        var n = r(649),
          s = "http://www.w3.org/1998/Math/MathML",
          l = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              o(e, t),
              (e.prototype.findMath = function (t) {
                var e = new Set();
                this.findMathNodes(t, e), this.findMathPrefixed(t, e);
                var r = this.adaptor.root(this.adaptor.document);
                return (
                  "html" === this.adaptor.kind(r) &&
                    0 === e.size &&
                    this.findMathNS(t, e),
                  this.processMath(e)
                );
              }),
              (e.prototype.findMathNodes = function (t, e) {
                var r, a;
                try {
                  for (
                    var o = i(this.adaptor.tags(t, "math")), n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var s = n.value;
                    e.add(s);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    n && !n.done && (a = o.return) && a.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (e.prototype.findMathPrefixed = function (t, e) {
                var r,
                  a,
                  o,
                  n,
                  l = this.adaptor.root(this.adaptor.document);
                try {
                  for (
                    var h = i(this.adaptor.allAttributes(l)), p = h.next();
                    !p.done;
                    p = h.next()
                  ) {
                    var c = p.value;
                    if ("xmlns:" === c.name.substr(0, 6) && c.value === s) {
                      var u = c.name.substr(6);
                      try {
                        for (
                          var d =
                              ((o = void 0),
                              i(this.adaptor.tags(t, u + ":math"))),
                            f = d.next();
                          !f.done;
                          f = d.next()
                        ) {
                          var M = f.value;
                          e.add(M);
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
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    p && !p.done && (a = h.return) && a.call(h);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (e.prototype.findMathNS = function (t, e) {
                var r, a;
                try {
                  for (
                    var o = i(this.adaptor.tags(t, "math", s)), n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var l = n.value;
                    e.add(l);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    n && !n.done && (a = o.return) && a.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (e.prototype.processMath = function (t) {
                var e,
                  r,
                  a = [];
                try {
                  for (
                    var o = i(Array.from(t)), n = o.next();
                    !n.done;
                    n = o.next()
                  ) {
                    var s = n.value,
                      l =
                        "block" === this.adaptor.getAttribute(s, "display") ||
                        "display" === this.adaptor.getAttribute(s, "mode"),
                      h = { node: s, n: 0, delim: "" },
                      p = { node: s, n: 0, delim: "" };
                    a.push({
                      math: this.adaptor.outerHTML(s),
                      start: h,
                      end: p,
                      display: l,
                    });
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
                return a;
              }),
              (e.OPTIONS = {}),
              e
            );
          })(n.AbstractFindMath);
        e.FindMathML = l;
      },
      332: function (t, e, r) {
        var a =
            (this && this.__assign) ||
            function () {
              return (a =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, a = arguments.length; r < a; r++)
                    for (var o in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
          o =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                a = 0;
              if (r) return r.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && a >= t.length && (t = void 0),
                      { value: t && t[a++], done: !t }
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
          (e.MathMLCompile = void 0);
        var i = r(921),
          n = r(77),
          s = r(29),
          l = (function () {
            function t(t) {
              void 0 === t && (t = {});
              var e = this.constructor;
              this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t);
            }
            return (
              (t.prototype.setMmlFactory = function (t) {
                this.factory = t;
              }),
              (t.prototype.compile = function (t) {
                var e = this.makeNode(t);
                return (
                  e.verifyTree(this.options.verify),
                  e.setInheritedAttributes({}, !1, 0, !1),
                  e.walkTree(this.markMrows),
                  e
                );
              }),
              (t.prototype.makeNode = function (t) {
                var e,
                  r,
                  a = this.adaptor,
                  n = !1,
                  s = a.kind(t).replace(/^.*:/, ""),
                  l = a.getAttribute(t, "data-mjx-texclass") || "";
                l && (l = this.filterAttribute("data-mjx-texclass", l) || "");
                var h = l && "mrow" === s ? "TeXAtom" : s;
                try {
                  for (
                    var p = o(this.filterClassList(a.allClasses(t))),
                      c = p.next();
                    !c.done;
                    c = p.next()
                  ) {
                    var u = c.value;
                    u.match(/^MJX-TeXAtom-/)
                      ? ((l = u.substr(12)), (h = "TeXAtom"))
                      : "MJX-fixedlimits" === u && (n = !0);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    c && !c.done && (r = p.return) && r.call(p);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.factory.getNodeClass(h) ||
                  this.error('Unknown node type "' + h + '"');
                var d = this.factory.create(h);
                return (
                  "TeXAtom" !== h ||
                    "OP" !== l ||
                    n ||
                    (d.setProperty("movesupsub", !0),
                    d.attributes.setInherited("movablelimits", !0)),
                  l &&
                    ((d.texClass = i.TEXCLASS[l]),
                    d.setProperty("texClass", d.texClass)),
                  this.addAttributes(d, t),
                  this.checkClass(d, t),
                  this.addChildren(d, t),
                  d
                );
              }),
              (t.prototype.addAttributes = function (t, e) {
                var r,
                  a,
                  i = !1;
                try {
                  for (
                    var n = o(this.adaptor.allAttributes(e)), s = n.next();
                    !s.done;
                    s = n.next()
                  ) {
                    var l = s.value,
                      h = l.name,
                      p = this.filterAttribute(h, l.value);
                    if (null !== p && "xmlns" !== h)
                      if ("data-mjx-" === h.substr(0, 9))
                        "data-mjx-alternate" === h
                          ? t.setProperty("variantForm", !0)
                          : "data-mjx-variant" === h
                          ? (t.attributes.set("mathvariant", p), (i = !0))
                          : "data-mjx-smallmatrix" === h
                          ? (t.setProperty("scriptlevel", 1),
                            t.setProperty("useHeight", !1))
                          : "data-mjx-accent" === h
                          ? t.setProperty("mathaccent", "true" === p)
                          : "data-mjx-auto-op" === h &&
                            t.setProperty("autoOP", "true" === p);
                      else if ("class" !== h) {
                        var c = p.toLowerCase();
                        "true" === c || "false" === c
                          ? t.attributes.set(h, "true" === c)
                          : (i && "mathvariant" === h) ||
                            t.attributes.set(h, p);
                      }
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    s && !s.done && (a = n.return) && a.call(n);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (t.prototype.filterAttribute = function (t, e) {
                return e;
              }),
              (t.prototype.filterClassList = function (t) {
                return t;
              }),
              (t.prototype.addChildren = function (t, e) {
                var r, a;
                if (0 !== t.arity) {
                  var i = this.adaptor;
                  try {
                    for (
                      var n = o(i.childNodes(e)), s = n.next();
                      !s.done;
                      s = n.next()
                    ) {
                      var l = s.value,
                        h = i.kind(l);
                      if ("#comment" !== h)
                        if ("#text" === h) this.addText(t, l);
                        else if (t.isKind("annotation-xml"))
                          t.appendChild(
                            this.factory.create("XML").setXML(l, i)
                          );
                        else {
                          var p = t.appendChild(this.makeNode(l));
                          0 === p.arity &&
                            i.childNodes(l).length &&
                            (this.options.fixMisplacedChildren
                              ? this.addChildren(t, l)
                              : p.mError(
                                  "There should not be children for " +
                                    p.kind +
                                    " nodes",
                                  this.options.verify,
                                  !0
                                ));
                        }
                    }
                  } catch (t) {
                    r = { error: t };
                  } finally {
                    try {
                      s && !s.done && (a = n.return) && a.call(n);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              }),
              (t.prototype.addText = function (t, e) {
                var r = this.adaptor.value(e);
                (t.isToken || t.getProperty("isChars")) && t.arity
                  ? (t.isToken &&
                      ((r = s.translate(r)), (r = this.trimSpace(r))),
                    t.appendChild(this.factory.create("text").setText(r)))
                  : r.match(/\S/) &&
                    this.error('Unexpected text node "' + r + '"');
              }),
              (t.prototype.checkClass = function (t, e) {
                var r,
                  a,
                  i = [];
                try {
                  for (
                    var n = o(this.filterClassList(this.adaptor.allClasses(e))),
                      s = n.next();
                    !s.done;
                    s = n.next()
                  ) {
                    var l = s.value;
                    "MJX-" === l.substr(0, 4)
                      ? "MJX-variant" === l
                        ? t.setProperty("variantForm", !0)
                        : "MJX-TeXAtom" !== l.substr(0, 11) &&
                          t.attributes.set(
                            "mathvariant",
                            this.fixCalligraphic(l.substr(3))
                          )
                      : i.push(l);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    s && !s.done && (a = n.return) && a.call(n);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                i.length && t.attributes.set("class", i.join(" "));
              }),
              (t.prototype.fixCalligraphic = function (t) {
                return t.replace(/caligraphic/, "calligraphic");
              }),
              (t.prototype.markMrows = function (t) {
                if (
                  t.isKind("mrow") &&
                  !t.isInferred &&
                  t.childNodes.length >= 2
                ) {
                  var e = t.childNodes[0],
                    r = t.childNodes[t.childNodes.length - 1];
                  e.isKind("mo") &&
                    e.attributes.get("fence") &&
                    e.attributes.get("stretchy") &&
                    r.isKind("mo") &&
                    r.attributes.get("fence") &&
                    r.attributes.get("stretchy") &&
                    (e.childNodes.length && t.setProperty("open", e.getText()),
                    r.childNodes.length && t.setProperty("close", r.getText()));
                }
              }),
              (t.prototype.trimSpace = function (t) {
                return t
                  .replace(/[\t\n\r]/g, " ")
                  .replace(/^ +/, "")
                  .replace(/ +$/, "")
                  .replace(/  +/g, " ");
              }),
              (t.prototype.error = function (t) {
                throw new Error(t);
              }),
              (t.OPTIONS = {
                MmlFactory: null,
                fixMisplacedChildren: !0,
                verify: a({}, i.AbstractMmlNode.verifyDefaults),
                translateEntities: !0,
              }),
              t
            );
          })();
        e.MathMLCompile = l;
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
    },
    i = {};
  function n(t) {
    var e = i[t];
    if (void 0 !== e) return e.exports;
    var r = (i[t] = { exports: {} });
    return o[t].call(r.exports, r, r.exports, n), r.exports;
  }
  (t = n(723)),
    (e = n(236)),
    (r = n(794)),
    (a = n(332)),
    (0, t.r8)({
      _: {
        input: { mathml_ts: e, mathml: { FindMathML: r, MathMLCompile: a } },
      },
    }),
    MathJax.startup &&
      (MathJax.startup.registerConstructor("mml", e.MathML),
      MathJax.startup.useInput("mml")),
    MathJax.loader &&
      MathJax.loader.pathFilters.add(function (t) {
        return (
          (t.name = t.name.replace(
            /\/util\/entities\/.*?\.js/,
            "/input/mml/entities.js"
          )),
          !0
        );
      });
})();

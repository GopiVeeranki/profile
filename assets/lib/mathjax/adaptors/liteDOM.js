!(function () {
  "use strict";
  var t,
    e,
    n,
    r,
    o,
    i,
    a,
    l,
    u = {
      877: function (t, e, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.LiteDocument = void 0);
        var r = n(946),
          o = (function () {
            function t() {
              (this.root = new r.LiteElement("html", {}, [
                (this.head = new r.LiteElement("head")),
                (this.body = new r.LiteElement("body")),
              ])),
                (this.type = "");
            }
            return (
              Object.defineProperty(t.prototype, "kind", {
                get: function () {
                  return "#document";
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })();
        e.LiteDocument = o;
      },
      946: function (t, e) {
        var n =
            (this && this.__assign) ||
            function () {
              return (n =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
          r =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          o =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var n = 0, r = e.length, o = t.length; n < r; n++, o++)
                t[o] = e[n];
              return t;
            },
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
              if (n) return n.call(t);
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
          (e.LiteElement = void 0);
        var a = function (t, e, a) {
          var l, u;
          void 0 === e && (e = {}),
            void 0 === a && (a = []),
            (this.kind = t),
            (this.attributes = n({}, e)),
            (this.children = o([], r(a)));
          try {
            for (var s = i(this.children), c = s.next(); !c.done; c = s.next())
              c.value.parent = this;
          } catch (t) {
            l = { error: t };
          } finally {
            try {
              c && !c.done && (u = s.return) && u.call(s);
            } finally {
              if (l) throw l.error;
            }
          }
          this.styles = null;
        };
        e.LiteElement = a;
      },
      6: function (t, e) {
        var n =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          r =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var n = 0, r = e.length, o = t.length; n < r; n++, o++)
                t[o] = e[n];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.LiteList = void 0);
        var o = (function () {
          function t(t) {
            (this.nodes = []), (this.nodes = r([], n(t)));
          }
          return (
            (t.prototype.append = function (t) {
              this.nodes.push(t);
            }),
            (t.prototype[Symbol.iterator] = function () {
              var t = 0;
              return {
                next: function () {
                  return t === this.nodes.length
                    ? { value: null, done: !0 }
                    : { value: this.nodes[t++], done: !1 };
                },
              };
            }),
            t
          );
        })();
        e.LiteList = o;
      },
      246: function (t, e, n) {
        var r =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
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
                n = e && t[e],
                r = 0;
              if (n) return n.call(t);
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
          (e.LiteParser = e.PATTERNS = void 0);
        var i,
          a = n(29),
          l = n(946),
          u = n(735);
        !(function (t) {
          (t.TAGNAME = "[a-z][^\\s\\n>]*"),
            (t.ATTNAME = "[a-z][^\\s\\n>=]*"),
            (t.VALUE = "(?:'[^']*'|\"[^\"]*\"|[^\\s\\n]+)"),
            (t.VALUESPLIT = "(?:'([^']*)'|\"([^\"]*)\"|([^\\s\\n]+))"),
            (t.SPACE = "(?:\\s|\\n)+"),
            (t.OPTIONALSPACE = "(?:\\s|\\n)*"),
            (t.ATTRIBUTE =
              t.ATTNAME +
              "(?:" +
              t.OPTIONALSPACE +
              "=" +
              t.OPTIONALSPACE +
              t.VALUE +
              ")?"),
            (t.ATTRIBUTESPLIT =
              "(" +
              t.ATTNAME +
              ")(?:" +
              t.OPTIONALSPACE +
              "=" +
              t.OPTIONALSPACE +
              t.VALUESPLIT +
              ")?"),
            (t.TAG =
              "(<(?:" +
              t.TAGNAME +
              "(?:" +
              t.SPACE +
              t.ATTRIBUTE +
              ")*" +
              t.OPTIONALSPACE +
              "/?|/" +
              t.TAGNAME +
              "|!--[^]*?--|![^]*?)(?:>|$))"),
            (t.tag = new RegExp(t.TAG, "i")),
            (t.attr = new RegExp(t.ATTRIBUTE, "i")),
            (t.attrsplit = new RegExp(t.ATTRIBUTESPLIT, "i"));
        })((i = e.PATTERNS || (e.PATTERNS = {})));
        var s = (function () {
          function t() {}
          return (
            (t.prototype.parseFromString = function (t, e, n) {
              void 0 === e && (e = "text/html"), void 0 === n && (n = null);
              for (
                var r = n.createDocument(),
                  o = n.body(r),
                  a = t.replace(/<\?.*?\?>/g, "").split(i.tag);
                a.length;

              ) {
                var l = a.shift(),
                  u = a.shift();
                l && this.addText(n, o, l),
                  u &&
                    ">" === u.charAt(u.length - 1) &&
                    ("!" === u.charAt(1)
                      ? this.addComment(n, o, u)
                      : (o =
                          "/" === u.charAt(1)
                            ? this.closeTag(n, o, u)
                            : this.openTag(n, o, u, a)));
              }
              return this.checkDocument(n, r), r;
            }),
            (t.prototype.addText = function (t, e, n) {
              return (n = a.translate(n)), t.append(e, t.text(n));
            }),
            (t.prototype.addComment = function (t, e, n) {
              return t.append(e, new u.LiteComment(n));
            }),
            (t.prototype.closeTag = function (t, e, n) {
              for (
                var r = n.slice(2, n.length - 1).toLowerCase();
                t.parent(e) && t.kind(e) !== r;

              )
                e = t.parent(e);
              return t.parent(e);
            }),
            (t.prototype.openTag = function (t, e, n, r) {
              var o = this.constructor.PCDATA,
                a = this.constructor.SELF_CLOSING,
                l = n.match(/<(.*?)[\s\n>\/]/)[1].toLowerCase(),
                u = t.node(l),
                s = n.replace(/^<.*?[\s\n>]/, "").split(i.attrsplit);
              return (
                (s.pop().match(/>$/) || s.length < 5) &&
                  (this.addAttributes(t, u, s),
                  t.append(e, u),
                  a[l] ||
                    n.match(/\/>$/) ||
                    (o[l] ? this.handlePCDATA(t, u, l, r) : (e = u))),
                e
              );
            }),
            (t.prototype.addAttributes = function (t, e, n) {
              for (var o = this.constructor.CDATA_ATTR; n.length; ) {
                var i = r(n.splice(0, 5), 5),
                  l = i[1],
                  u = i[2],
                  s = i[3],
                  c = i[4],
                  p = u || s || c || "";
                o[l] || (p = a.translate(p)), t.setAttribute(e, l, p);
              }
            }),
            (t.prototype.handlePCDATA = function (t, e, n, r) {
              for (
                var o = [], i = "</" + n + ">", a = "";
                r.length && a !== i;

              )
                o.push(a), o.push(r.shift()), (a = r.shift());
              t.append(e, t.text(o.join("")));
            }),
            (t.prototype.checkDocument = function (t, e) {
              var n,
                r,
                i,
                a,
                l = this.getOnlyChild(t, t.body(e));
              if (l) {
                try {
                  for (
                    var s = o(t.childNodes(t.body(e))), c = s.next();
                    !c.done;
                    c = s.next()
                  ) {
                    if ((f = c.value) === l) break;
                    f instanceof u.LiteComment &&
                      f.value.match(/^<!DOCTYPE/) &&
                      (e.type = f.value);
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    c && !c.done && (r = s.return) && r.call(s);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                switch (t.kind(l)) {
                  case "html":
                    try {
                      for (
                        var p = o(l.children), h = p.next();
                        !h.done;
                        h = p.next()
                      ) {
                        var f = h.value;
                        switch (t.kind(f)) {
                          case "head":
                            e.head = f;
                            break;
                          case "body":
                            e.body = f;
                        }
                      }
                    } catch (t) {
                      i = { error: t };
                    } finally {
                      try {
                        h && !h.done && (a = p.return) && a.call(p);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                    (e.root = l),
                      t.remove(l),
                      t.parent(e.body) !== l && t.append(l, e.body),
                      t.parent(e.head) !== l && t.insert(e.head, e.body);
                    break;
                  case "head":
                    e.head = t.replace(l, e.head);
                    break;
                  case "body":
                    e.body = t.replace(l, e.body);
                }
              }
            }),
            (t.prototype.getOnlyChild = function (t, e) {
              var n,
                r,
                i = null;
              try {
                for (
                  var a = o(t.childNodes(e)), u = a.next();
                  !u.done;
                  u = a.next()
                ) {
                  var s = u.value;
                  if (s instanceof l.LiteElement) {
                    if (i) return null;
                    i = s;
                  }
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  u && !u.done && (r = a.return) && r.call(a);
                } finally {
                  if (n) throw n.error;
                }
              }
              return i;
            }),
            (t.prototype.serialize = function (t, e, n) {
              var r = this;
              void 0 === n && (n = !1);
              var o = this.constructor.SELF_CLOSING,
                i = this.constructor.CDATA_ATTR,
                a = t.kind(e),
                l = t
                  .allAttributes(e)
                  .map(function (t) {
                    return (
                      t.name +
                      '="' +
                      (i[t.name] ? t.value : r.protectAttribute(t.value)) +
                      '"'
                    );
                  })
                  .join(" "),
                u = this.serializeInner(t, e, n);
              return (
                "<" +
                a +
                (l ? " " + l : "") +
                ((n && !u) || o[a]
                  ? n
                    ? "/>"
                    : ">"
                  : ">" + u + "</" + a + ">")
              );
            }),
            (t.prototype.serializeInner = function (t, e, n) {
              var r = this;
              return (
                void 0 === n && (n = !1),
                this.constructor.PCDATA.hasOwnProperty(e.kind)
                  ? t
                      .childNodes(e)
                      .map(function (e) {
                        return t.value(e);
                      })
                      .join("")
                  : t
                      .childNodes(e)
                      .map(function (e) {
                        var o = t.kind(e);
                        return "#text" === o
                          ? r.protectHTML(t.value(e))
                          : "#comment" === o
                          ? e.value
                          : r.serialize(t, e, n);
                      })
                      .join("")
              );
            }),
            (t.prototype.protectAttribute = function (t) {
              return (
                "string" != typeof t && (t = String(t)),
                t.replace(/"/g, "&quot;")
              );
            }),
            (t.prototype.protectHTML = function (t) {
              return t
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            }),
            (t.SELF_CLOSING = {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              menuitem: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
            }),
            (t.PCDATA = {
              option: !0,
              textarea: !0,
              fieldset: !0,
              title: !0,
              style: !0,
              script: !0,
            }),
            (t.CDATA_ATTR = {
              style: !0,
              datafld: !0,
              datasrc: !0,
              href: !0,
              src: !0,
              longdesc: !0,
              usemap: !0,
              cite: !0,
              datetime: !0,
              action: !0,
              axis: !0,
              profile: !0,
              content: !0,
              scheme: !0,
            }),
            t
          );
        })();
        e.LiteParser = s;
      },
      735: function (t, e) {
        var n,
          r =
            (this && this.__extends) ||
            ((n = function (t, e) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
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
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.LiteComment = e.LiteText = void 0);
        var o = (function () {
          function t(t) {
            void 0 === t && (t = ""), (this.value = t);
          }
          return (
            Object.defineProperty(t.prototype, "kind", {
              get: function () {
                return "#text";
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
        e.LiteText = o;
        var i = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, "kind", {
              get: function () {
                return "#comment";
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(o);
        e.LiteComment = i;
      },
      492: function (t, e, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.LiteWindow = void 0);
        var r = n(946),
          o = n(877),
          i = n(6),
          a = n(246),
          l = function () {
            (this.DOMParser = a.LiteParser),
              (this.NodeList = i.LiteList),
              (this.HTMLCollection = i.LiteList),
              (this.HTMLElement = r.LiteElement),
              (this.DocumentFragment = i.LiteList),
              (this.Document = o.LiteDocument),
              (this.document = new o.LiteDocument());
          };
        e.LiteWindow = l;
      },
      250: function (t, e, n) {
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
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = t;
              }
              r(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
          a =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
              if (n) return n.call(t);
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
          l =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                a = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            },
          u =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var n = 0, r = e.length, o = t.length; n < r; n++, o++)
                t[o] = e[n];
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.liteAdaptor = e.LiteAdaptor = void 0);
        var s = n(857),
          c = n(877),
          p = n(946),
          h = n(735),
          f = n(492),
          d = n(246),
          y = n(878),
          v = n(77),
          m = (function (t) {
            function e(e) {
              void 0 === e && (e = null);
              var n = t.call(this) || this,
                r = n.constructor;
              return (
                (n.options = v.userOptions(v.defaultOptions({}, r.OPTIONS), e)),
                (n.parser = new d.LiteParser()),
                (n.window = new f.LiteWindow()),
                n
              );
            }
            return (
              o(e, t),
              (e.prototype.parse = function (t, e) {
                return this.parser.parseFromString(t, e, this);
              }),
              (e.prototype.create = function (t, e) {
                return void 0 === e && (e = null), new p.LiteElement(t);
              }),
              (e.prototype.text = function (t) {
                return new h.LiteText(t);
              }),
              (e.prototype.comment = function (t) {
                return new h.LiteComment(t);
              }),
              (e.prototype.createDocument = function () {
                return new c.LiteDocument();
              }),
              (e.prototype.head = function (t) {
                return t.head;
              }),
              (e.prototype.body = function (t) {
                return t.body;
              }),
              (e.prototype.root = function (t) {
                return t.root;
              }),
              (e.prototype.doctype = function (t) {
                return t.type;
              }),
              (e.prototype.tags = function (t, e, n) {
                void 0 === n && (n = null);
                var r = [],
                  o = [];
                if (n) return o;
                for (var i = t; i; ) {
                  var a = i.kind;
                  "#text" !== a &&
                    "#comment" !== a &&
                    ((i = i),
                    a === e && o.push(i),
                    i.children.length && (r = i.children.concat(r))),
                    (i = r.shift());
                }
                return o;
              }),
              (e.prototype.elementById = function (t, e) {
                for (var n = [], r = t; r; ) {
                  if ("#text" !== r.kind && "#comment" !== r.kind) {
                    if ((r = r).attributes.id === e) return r;
                    r.children.length && (n = r.children.concat(n));
                  }
                  r = n.shift();
                }
                return null;
              }),
              (e.prototype.elementsByClass = function (t, e) {
                for (var n = [], r = [], o = t; o; ) {
                  if ("#text" !== o.kind && "#comment" !== o.kind)
                    ((o = o).attributes.class || "")
                      .trim()
                      .split(/ +/)
                      .includes(e) && r.push(o),
                      o.children.length && (n = o.children.concat(n));
                  o = n.shift();
                }
                return r;
              }),
              (e.prototype.getElements = function (t, e) {
                var n,
                  r,
                  o = [],
                  i = this.body(e);
                try {
                  for (var l = a(t), u = l.next(); !u.done; u = l.next()) {
                    var s = u.value;
                    if ("string" == typeof s)
                      if ("#" === s.charAt(0)) {
                        var c = this.elementById(i, s.slice(1));
                        c && o.push(c);
                      } else
                        "." === s.charAt(0)
                          ? (o = o.concat(this.elementsByClass(i, s.slice(1))))
                          : s.match(/^[-a-z][-a-z0-9]*$/i) &&
                            (o = o.concat(this.tags(i, s)));
                    else
                      Array.isArray(s)
                        ? (o = o.concat(s))
                        : s instanceof this.window.NodeList ||
                          s instanceof this.window.HTMLCollection
                        ? (o = o.concat(s.nodes))
                        : o.push(s);
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    u && !u.done && (r = l.return) && r.call(l);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return o;
              }),
              (e.prototype.contains = function (t, e) {
                for (; e && e !== t; ) e = this.parent(e);
                return !!e;
              }),
              (e.prototype.parent = function (t) {
                return t.parent;
              }),
              (e.prototype.childIndex = function (t) {
                return t.parent
                  ? t.parent.children.findIndex(function (e) {
                      return e === t;
                    })
                  : -1;
              }),
              (e.prototype.append = function (t, e) {
                return (
                  e.parent && this.remove(e),
                  t.children.push(e),
                  (e.parent = t),
                  e
                );
              }),
              (e.prototype.insert = function (t, e) {
                if ((t.parent && this.remove(t), e && e.parent)) {
                  var n = this.childIndex(e);
                  e.parent.children.splice(n, 0, t), (t.parent = e.parent);
                }
              }),
              (e.prototype.remove = function (t) {
                var e = this.childIndex(t);
                return (
                  e >= 0 && t.parent.children.splice(e, 1), (t.parent = null), t
                );
              }),
              (e.prototype.replace = function (t, e) {
                var n = this.childIndex(e);
                return (
                  n >= 0 &&
                    ((e.parent.children[n] = t),
                    (t.parent = e.parent),
                    (e.parent = null)),
                  e
                );
              }),
              (e.prototype.clone = function (t) {
                var e = this,
                  n = new p.LiteElement(t.kind);
                return (
                  (n.attributes = i({}, t.attributes)),
                  (n.children = t.children.map(function (t) {
                    if ("#text" === t.kind) return new h.LiteText(t.value);
                    if ("#comment" === t.kind)
                      return new h.LiteComment(t.value);
                    var r = e.clone(t);
                    return (r.parent = n), r;
                  })),
                  n
                );
              }),
              (e.prototype.split = function (t, e) {
                var n = new h.LiteText(t.value.slice(e));
                return (
                  (t.value = t.value.slice(0, e)),
                  t.parent.children.splice(this.childIndex(t) + 1, 0, n),
                  (n.parent = t.parent),
                  n
                );
              }),
              (e.prototype.next = function (t) {
                var e = t.parent;
                if (!e) return null;
                var n = this.childIndex(t) + 1;
                return n >= 0 && n < e.children.length ? e.children[n] : null;
              }),
              (e.prototype.previous = function (t) {
                var e = t.parent;
                if (!e) return null;
                var n = this.childIndex(t) - 1;
                return n >= 0 ? e.children[n] : null;
              }),
              (e.prototype.firstChild = function (t) {
                return t.children[0];
              }),
              (e.prototype.lastChild = function (t) {
                return t.children[t.children.length - 1];
              }),
              (e.prototype.childNodes = function (t) {
                return u([], l(t.children));
              }),
              (e.prototype.childNode = function (t, e) {
                return t.children[e];
              }),
              (e.prototype.kind = function (t) {
                return t.kind;
              }),
              (e.prototype.value = function (t) {
                return "#text" === t.kind
                  ? t.value
                  : "#comment" === t.kind
                  ? t.value.replace(/^<!(--)?((?:.|\n)*)\1>$/, "$2")
                  : "";
              }),
              (e.prototype.textContent = function (t) {
                var e = this;
                return t.children.reduce(function (t, n) {
                  return (
                    t +
                    ("#text" === n.kind
                      ? n.value
                      : "#comment" === n.kind
                      ? ""
                      : e.textContent(n))
                  );
                }, "");
              }),
              (e.prototype.innerHTML = function (t) {
                return this.parser.serializeInner(this, t);
              }),
              (e.prototype.outerHTML = function (t) {
                return this.parser.serialize(this, t);
              }),
              (e.prototype.serializeXML = function (t) {
                return this.parser.serialize(this, t, !0);
              }),
              (e.prototype.setAttribute = function (t, e, n, r) {
                void 0 === r && (r = null),
                  "string" != typeof n && (n = String(n)),
                  r &&
                    (e = r.replace(/.*\//, "") + ":" + e.replace(/^.*:/, "")),
                  (t.attributes[e] = n),
                  "style" === e && (t.styles = null);
              }),
              (e.prototype.getAttribute = function (t, e) {
                return t.attributes[e];
              }),
              (e.prototype.removeAttribute = function (t, e) {
                delete t.attributes[e];
              }),
              (e.prototype.hasAttribute = function (t, e) {
                return t.attributes.hasOwnProperty(e);
              }),
              (e.prototype.allAttributes = function (t) {
                var e,
                  n,
                  r = t.attributes,
                  o = [];
                try {
                  for (
                    var i = a(Object.keys(r)), l = i.next();
                    !l.done;
                    l = i.next()
                  ) {
                    var u = l.value;
                    o.push({ name: u, value: r[u] });
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    l && !l.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return o;
              }),
              (e.prototype.addClass = function (t, e) {
                var n = (t.attributes.class || "").split(/ /);
                n.find(function (t) {
                  return t === e;
                }) || (n.push(e), (t.attributes.class = n.join(" ")));
              }),
              (e.prototype.removeClass = function (t, e) {
                var n = (t.attributes.class || "").split(/ /),
                  r = n.findIndex(function (t) {
                    return t === e;
                  });
                r >= 0 && (n.splice(r, 1), (t.attributes.class = n.join(" ")));
              }),
              (e.prototype.hasClass = function (t, e) {
                return !!(t.attributes.class || "")
                  .split(/ /)
                  .find(function (t) {
                    return t === e;
                  });
              }),
              (e.prototype.setStyle = function (t, e, n) {
                t.styles ||
                  (t.styles = new y.Styles(this.getAttribute(t, "style"))),
                  t.styles.set(e, n),
                  (t.attributes.style = t.styles.cssText);
              }),
              (e.prototype.getStyle = function (t, e) {
                if (!t.styles) {
                  var n = this.getAttribute(t, "style");
                  if (!n) return "";
                  t.styles = new y.Styles(n);
                }
                return t.styles.get(e);
              }),
              (e.prototype.allStyles = function (t) {
                return this.getAttribute(t, "style");
              }),
              (e.prototype.insertRules = function (t, e) {
                t.children = [
                  this.text(e.join("\n\n") + "\n\n" + this.textContent(t)),
                ];
              }),
              (e.prototype.fontSize = function (t) {
                return this.options.fontSize;
              }),
              (e.prototype.fontFamily = function (t) {
                return this.options.fontFamily;
              }),
              (e.prototype.nodeSize = function (t, n, r) {
                void 0 === n && (n = 1), void 0 === r && (r = null);
                var o = this.textContent(t),
                  i = Array.from(o.replace(e.cjkPattern, "")).length;
                return [
                  (Array.from(o).length - i) * this.options.cjkCharWidth +
                    i * this.options.unknownCharWidth,
                  this.options.unknownCharHeight,
                ];
              }),
              (e.prototype.nodeBBox = function (t) {
                return { left: 0, right: 0, top: 0, bottom: 0 };
              }),
              (e.OPTIONS = {
                fontSize: 16,
                fontFamily: "Times",
                cjkCharWidth: 1,
                unknownCharWidth: 0.6,
                unknownCharHeight: 0.8,
              }),
              (e.cjkPattern = new RegExp(
                [
                  "[",
                  "\u1100-\u115f",
                  "\u2329\u232a",
                  "\u2e80-\u303e",
                  "\u3040-\u3247",
                  "\u3250-\u4dbf",
                  "\u4e00-\ua4c6",
                  "\ua960-\ua97c",
                  "\uac00-\ud7a3",
                  "\uf900-\ufaff",
                  "\ufe10-\ufe19",
                  "\ufe30-\ufe6b",
                  "\uff01-\uff60\uffe0-\uffe6",
                  "\ud82c\udc00-\ud82c\udc01",
                  "\ud83c\ude00-\ud83c\ude51",
                  "\ud840\udc00-\ud8bf\udffd",
                  "]",
                ].join(""),
                "gu"
              )),
              e
            );
          })(s.AbstractDOMAdaptor);
        (e.LiteAdaptor = m),
          (e.liteAdaptor = function (t) {
            return void 0 === t && (t = null), new m(t);
          });
      },
      723: function (t, e) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (e.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      857: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractDOMAdaptor = MathJax._.core.DOMAdaptor.AbstractDOMAdaptor);
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
      878: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Styles = MathJax._.util.Styles.Styles);
      },
    },
    s = {};
  function c(t) {
    var e = s[t];
    if (void 0 !== e) return e.exports;
    var n = (s[t] = { exports: {} });
    return u[t].call(n.exports, n, n.exports, c), n.exports;
  }
  (t = c(723)),
    (e = c(250)),
    (n = c(877)),
    (r = c(946)),
    (o = c(6)),
    (i = c(246)),
    (a = c(735)),
    (l = c(492)),
    (0, t.r8)({
      _: {
        adaptors: {
          liteAdaptor: e,
          lite: {
            Document: n,
            Element: r,
            List: o,
            Parser: i,
            Text: a,
            Window: l,
          },
        },
      },
    }),
    MathJax.startup &&
      (MathJax.startup.registerConstructor("liteAdaptor", e.liteAdaptor),
      MathJax.startup.useAdaptor("liteAdaptor", !0));
})();

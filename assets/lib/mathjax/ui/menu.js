!(function () {
  "use strict";
  var t,
    e,
    n,
    o,
    i,
    r,
    s = {
      21: function (t, e, n) {
        var o,
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
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          r =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                o = 0;
              if (n) return n.call(t);
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
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var o,
                i,
                r = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                  s.push(o.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (i) throw i.error;
                }
              }
              return s;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MJContextMenu = void 0);
        var a = n(964),
          u = n(745),
          l = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.mathItem = null),
                (e.annotation = ""),
                (e.annotationTypes = {}),
                e
              );
            }
            return (
              i(e, t),
              (e.prototype.post = function (e, n) {
                if (this.mathItem) {
                  if (void 0 !== n) {
                    var o = this.mathItem.inputJax.name,
                      i = this.findID("Show", "Original");
                    (i.content =
                      "MathML" === o ? "Original MathML" : o + " Commands"),
                      (this.findID("Copy", "Original").content = i.content);
                    var r = this.findID("Settings", "semantics");
                    "MathML" === o ? r.disable() : r.enable(),
                      this.getAnnotationMenu(),
                      this.dynamicSubmenus();
                  }
                  t.prototype.post.call(this, e, n);
                }
              }),
              (e.prototype.unpost = function () {
                t.prototype.unpost.call(this), (this.mathItem = null);
              }),
              (e.prototype.findID = function () {
                for (var t, e, n = [], o = 0; o < arguments.length; o++)
                  n[o] = arguments[o];
                var i = this,
                  s = null;
                try {
                  for (var a = r(n), l = a.next(); !l.done; l = a.next()) {
                    var c = l.value;
                    i
                      ? ((s = i.find(c)),
                        (i = s instanceof u.Submenu ? s.submenu : null))
                      : (s = null);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    l && !l.done && (e = a.return) && e.call(a);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return s;
              }),
              (e.prototype.getAnnotationMenu = function () {
                var t = this,
                  e = this.getAnnotations(this.getSemanticNode());
                this.createAnnotationMenu("Show", e, function () {
                  return t.showAnnotation.post();
                }),
                  this.createAnnotationMenu("Copy", e, function () {
                    return t.copyAnnotation();
                  });
              }),
              (e.prototype.getSemanticNode = function () {
                for (
                  var t = this.mathItem.root;
                  t && !t.isKind("semantics");

                ) {
                  if (t.isToken || 1 !== t.childNodes.length) return null;
                  t = t.childNodes[0];
                }
                return t;
              }),
              (e.prototype.getAnnotations = function (t) {
                var e,
                  n,
                  o = [];
                if (!t) return o;
                try {
                  for (
                    var i = r(t.childNodes), s = i.next();
                    !s.done;
                    s = i.next()
                  ) {
                    var a = s.value;
                    if (a.isKind("annotation")) {
                      var u = this.annotationMatch(a);
                      if (u) {
                        var l = a.childNodes.reduce(function (t, e) {
                          return t + e.toString();
                        }, "");
                        o.push([u, l]);
                      }
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return o;
              }),
              (e.prototype.annotationMatch = function (t) {
                var e,
                  n,
                  o = t.attributes.get("encoding");
                try {
                  for (
                    var i = r(Object.keys(this.annotationTypes)), s = i.next();
                    !s.done;
                    s = i.next()
                  ) {
                    var a = s.value;
                    if (this.annotationTypes[a].indexOf(o) >= 0) return a;
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return null;
              }),
              (e.prototype.createAnnotationMenu = function (t, e, n) {
                var o = this,
                  i = this.findID(t, "Annotation");
                (i.submenu = this.factory.get("subMenu")(
                  this.factory,
                  {
                    items: e.map(function (t) {
                      var e = s(t, 2),
                        i = e[0],
                        r = e[1];
                      return {
                        type: "command",
                        id: i,
                        content: i,
                        action: function () {
                          (o.annotation = r), n();
                        },
                      };
                    }),
                    id: "annotations",
                  },
                  i
                )),
                  e.length ? i.enable() : i.disable();
              }),
              (e.prototype.dynamicSubmenus = function () {
                var t, n;
                try {
                  for (
                    var o = r(e.DynamicSubmenus), i = o.next();
                    !i.done;
                    i = o.next()
                  ) {
                    var a = s(i.value, 2),
                      u = a[0],
                      l = a[1],
                      c = this.find(u);
                    if (c) {
                      var p = l(this, c);
                      (c.submenu = p),
                        p.items.length ? c.enable() : c.disable();
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (e.DynamicSubmenus = new Map()),
              e
            );
          })(a.ContextMenu);
        e.MJContextMenu = l;
      },
      62: function (t, e, n) {
        var o =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var o,
                i,
                r = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                  s.push(o.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (i) throw i.error;
                }
              }
              return s;
            },
          i =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                o = 0;
              if (n) return n.call(t);
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
          (e.Menu = void 0);
        var r = n(184),
          s = n(769),
          a = n(723),
          u = n(77),
          l = n(21),
          c = n(232),
          p = n(309),
          h = n(932),
          d = n(258),
          f = n(156),
          m = n(837),
          y = a.MathJax,
          b =
            "undefined" != typeof window &&
            window.navigator &&
            "Mac" === window.navigator.platform.substr(0, 3),
          v = (function () {
            function t(t, e) {
              var n = this;
              void 0 === e && (e = {}),
                (this.settings = null),
                (this.defaultSettings = null),
                (this.menu = null),
                (this.MmlVisitor = new c.MmlVisitor()),
                (this.jax = { CHTML: null, SVG: null }),
                (this.rerenderStart = s.STATE.LAST),
                (this.about = new h.Info(
                  '<b style="font-size:120%;">MathJax</b> v' +
                    r.mathjax.version,
                  function () {
                    var t = [];
                    return (
                      t.push(
                        "Input Jax: " +
                          n.document.inputJax
                            .map(function (t) {
                              return t.name;
                            })
                            .join(", ")
                      ),
                      t.push("Output Jax: " + n.document.outputJax.name),
                      t.push("Document Type: " + n.document.kind),
                      t.join("<br/>")
                    );
                  },
                  '<a href="https://www.mathjax.org">www.mathjax.org</a>'
                )),
                (this.help = new h.Info(
                  "<b>MathJax Help</b>",
                  function () {
                    return [
                      "<p><b>MathJax</b> is a JavaScript library that allows page",
                      " authors to include mathematics within their web pages.",
                      " As a reader, you don't need to do anything to make that happen.</p>",
                      "<p><b>Browsers</b>: MathJax works with all modern browsers including",
                      " Edge, Firefox, Chrome, Safari, Opera, and most mobile browsers.</p>",
                      "<p><b>Math Menu</b>: MathJax adds a contextual menu to equations.",
                      " Right-click or CTRL-click on any mathematics to access the menu.</p>",
                      '<div style="margin-left: 1em;">',
                      "<p><b>Show Math As:</b> These options allow you to view the formula's",
                      " source markup (as MathML or in its original format).</p>",
                      "<p><b>Copy to Clipboard:</b> These options copy the formula's source markup,",
                      " as MathML or in its original format, to the clipboard",
                      " (in browsers that support that).</p>",
                      "<p><b>Math Settings:</b> These give you control over features of MathJax,",
                      " such the size of the mathematics, and the mechanism used",
                      " to display equations.</p>",
                      "<p><b>Accessibility</b>: MathJax can work with screen",
                      " readers to make mathematics accessible to the visually impaired.",
                      " Turn on the explorer to enable generation of speech strings",
                      " and the ability to investigate expressions interactively.</p>",
                      "<p><b>Language</b>: This menu lets you select the language used by MathJax",
                      " for its menus and warning messages. (Not yet implemented in version 3.)</p>",
                      "</div>",
                      "<p><b>Math Zoom</b>: If you are having difficulty reading an",
                      " equation, MathJax can enlarge it to help you see it better, or",
                      " you can scall all the math on the page to make it larger.",
                      " Turn these features on in the <b>Math Settings</b> menu.</p>",
                      "<p><b>Preferences</b>: MathJax uses your browser's localStorage database",
                      " to save the preferences set via this menu locally in your browser.  These",
                      " are not used to track you, and are not transferred or used remotely by",
                      " MathJax in any way.</p>",
                    ].join("\n");
                  },
                  '<a href="https://www.mathjax.org">www.mathjax.org</a>'
                )),
                (this.mathmlCode = new p.SelectableInfo(
                  "MathJax MathML Expression",
                  function () {
                    if (!n.menu.mathItem) return "";
                    var t = n.toMML(n.menu.mathItem);
                    return "<pre>" + n.formatSource(t) + "</pre>";
                  },
                  ""
                )),
                (this.originalText = new p.SelectableInfo(
                  "MathJax Original Source",
                  function () {
                    if (!n.menu.mathItem) return "";
                    var t = n.menu.mathItem.math;
                    return (
                      '<pre style="font-size:125%; margin:0">' +
                      n.formatSource(t) +
                      "</pre>"
                    );
                  },
                  ""
                )),
                (this.annotationText = new p.SelectableInfo(
                  "MathJax Annotation Text",
                  function () {
                    if (!n.menu.mathItem) return "";
                    var t = n.menu.annotation;
                    return (
                      '<pre style="font-size:125%; margin:0">' +
                      n.formatSource(t) +
                      "</pre>"
                    );
                  },
                  ""
                )),
                (this.zoomBox = new h.Info(
                  "MathJax Zoomed Expression",
                  function () {
                    if (!n.menu.mathItem) return "";
                    var t = n.menu.mathItem.typesetRoot.cloneNode(!0);
                    return (
                      (t.style.margin = "0"),
                      '<div style="font-size: ' +
                        1.25 * parseFloat(n.settings.zscale) +
                        '%">' +
                        t.outerHTML +
                        "</div>"
                    );
                  },
                  ""
                )),
                (this.document = t),
                (this.options = u.userOptions(
                  u.defaultOptions({}, this.constructor.OPTIONS),
                  e
                )),
                this.initSettings(),
                this.mergeUserSettings(),
                this.initMenu();
            }
            return (
              Object.defineProperty(t.prototype, "isLoading", {
                get: function () {
                  return t.loading > 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "loadingPromise", {
                get: function () {
                  return this.isLoading
                    ? (t._loadingPromise ||
                        (t._loadingPromise = new Promise(function (e, n) {
                          (t._loadingOK = e), (t._loadingFailed = n);
                        })),
                      t._loadingPromise)
                    : Promise.resolve();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.initSettings = function () {
                (this.settings = this.options.settings),
                  (this.jax = this.options.jax);
                var t = this.document.outputJax;
                (this.jax[t.name] = t),
                  (this.settings.renderer = t.name),
                  y._.a11y &&
                    y._.a11y.explorer &&
                    Object.assign(this.settings, this.document.options.a11y),
                  (this.settings.scale = t.options.scale),
                  (this.defaultSettings = Object.assign({}, this.settings));
              }),
              (t.prototype.initMenu = function () {
                var t = this,
                  e = new d.Parser([
                    [
                      "contextMenu",
                      l.MJContextMenu.fromJson.bind(l.MJContextMenu),
                    ],
                  ]);
                this.menu = e.parse({
                  type: "contextMenu",
                  id: "MathJax_Menu",
                  pool: [
                    this.variable("texHints"),
                    this.variable("semantics"),
                    this.variable("zoom"),
                    this.variable("zscale"),
                    this.variable("renderer", function (e) {
                      return t.setRenderer(e);
                    }),
                    this.variable("alt"),
                    this.variable("cmd"),
                    this.variable("ctrl"),
                    this.variable("shift"),
                    this.variable("scale", function (e) {
                      return t.setScale(e);
                    }),
                    this.variable("explorer", function (e) {
                      return t.setExplorer(e);
                    }),
                    this.a11yVar("highlight"),
                    this.a11yVar("backgroundColor"),
                    this.a11yVar("backgroundOpacity"),
                    this.a11yVar("foregroundColor"),
                    this.a11yVar("foregroundOpacity"),
                    this.a11yVar("speech"),
                    this.a11yVar("subtitles"),
                    this.a11yVar("braille"),
                    this.a11yVar("viewBraille"),
                    this.a11yVar("locale", function (t) {
                      return SRE.setupEngine({ locale: t });
                    }),
                    this.a11yVar("speechRules", function (e) {
                      var n = o(e.split("-"), 2),
                        i = n[0],
                        r = n[1];
                      (t.document.options.sre.domain = i),
                        (t.document.options.sre.style = r);
                    }),
                    this.a11yVar("magnification"),
                    this.a11yVar("magnify"),
                    this.a11yVar("treeColoring"),
                    this.a11yVar("infoType"),
                    this.a11yVar("infoRole"),
                    this.a11yVar("infoPrefix"),
                    this.variable("autocollapse"),
                    this.variable("collapsible", function (e) {
                      return t.setCollapsible(e);
                    }),
                    this.variable("inTabOrder", function (e) {
                      return t.setTabOrder(e);
                    }),
                    this.variable("assistiveMml", function (e) {
                      return t.setAssistiveMml(e);
                    }),
                  ],
                  items: [
                    this.submenu("Show", "Show Math As", [
                      this.command("MathMLcode", "MathML Code", function () {
                        return t.mathmlCode.post();
                      }),
                      this.command("Original", "Original Form", function () {
                        return t.originalText.post();
                      }),
                      this.submenu("Annotation", "Annotation"),
                    ]),
                    this.submenu("Copy", "Copy to Clipboard", [
                      this.command("MathMLcode", "MathML Code", function () {
                        return t.copyMathML();
                      }),
                      this.command("Original", "Original Form", function () {
                        return t.copyOriginal();
                      }),
                      this.submenu("Annotation", "Annotation"),
                    ]),
                    this.rule(),
                    this.submenu("Settings", "Math Settings", [
                      this.submenu(
                        "Renderer",
                        "Math Renderer",
                        this.radioGroup("renderer", [["CHTML"], ["SVG"]])
                      ),
                      this.rule(),
                      this.submenu("ZoomTrigger", "Zoom Trigger", [
                        this.command("ZoomNow", "Zoom Once Now", function () {
                          return t.zoom(null, "", t.menu.mathItem);
                        }),
                        this.rule(),
                        this.radioGroup("zoom", [
                          ["Click"],
                          ["DoubleClick", "Double-Click"],
                          ["NoZoom", "No Zoom"],
                        ]),
                        this.rule(),
                        this.label("TriggerRequires", "Trigger Requires:"),
                        this.checkbox(
                          b ? "Option" : "Alt",
                          b ? "Option" : "Alt",
                          "alt"
                        ),
                        this.checkbox("Command", "Command", "cmd", {
                          hidden: !b,
                        }),
                        this.checkbox("Control", "Control", "ctrl", {
                          hiddne: b,
                        }),
                        this.checkbox("Shift", "Shift", "shift"),
                      ]),
                      this.submenu(
                        "ZoomFactor",
                        "Zoom Factor",
                        this.radioGroup("zscale", [
                          ["150%"],
                          ["175%"],
                          ["200%"],
                          ["250%"],
                          ["300%"],
                          ["400%"],
                        ])
                      ),
                      this.rule(),
                      this.command("Scale", "Scale All Math...", function () {
                        return t.scaleAllMath();
                      }),
                      this.rule(),
                      this.checkbox(
                        "texHints",
                        "Add TeX hints to MathML",
                        "texHints"
                      ),
                      this.checkbox(
                        "semantics",
                        "Add original as annotation",
                        "semantics"
                      ),
                      this.rule(),
                      this.command("Reset", "Reset to defaults", function () {
                        return t.resetDefaults();
                      }),
                    ]),
                    this.submenu("Accessibility", "Accessibility", [
                      this.checkbox("Activate", "Activate", "explorer"),
                      this.submenu("Speech", "Speech", [
                        this.checkbox("Speech", "Speech Output", "speech"),
                        this.checkbox(
                          "Subtitles",
                          "Speech Subtitles",
                          "subtitles"
                        ),
                        this.checkbox("Braille", "Braille Output", "braille"),
                        this.checkbox(
                          "View Braille",
                          "Braille Subtitles",
                          "viewBraille"
                        ),
                        this.rule(),
                        this.submenu("A11yLanguage", "Language"),
                        this.rule(),
                        this.submenu(
                          "Mathspeak",
                          "Mathspeak Rules",
                          this.radioGroup("speechRules", [
                            ["mathspeak-default", "Verbose"],
                            ["mathspeak-brief", "Brief"],
                            ["mathspeak-sbrief", "Superbrief"],
                          ])
                        ),
                        this.submenu(
                          "Clearspeak",
                          "Clearspeak Rules",
                          this.radioGroup("speechRules", [
                            ["clearspeak-default", "Auto"],
                          ])
                        ),
                        this.submenu(
                          "ChromeVox",
                          "ChromeVox Rules",
                          this.radioGroup("speechRules", [
                            ["chromevox-default", "Standard"],
                            ["chromevox-alternative", "Alternative"],
                          ])
                        ),
                      ]),
                      this.submenu("Highlight", "Highlight", [
                        this.submenu(
                          "Background",
                          "Background",
                          this.radioGroup("backgroundColor", [
                            ["Blue"],
                            ["Red"],
                            ["Green"],
                            ["Yellow"],
                            ["Cyan"],
                            ["Magenta"],
                            ["White"],
                            ["Black"],
                          ])
                        ),
                        {
                          type: "slider",
                          variable: "backgroundOpacity",
                          content: " ",
                        },
                        this.submenu(
                          "Foreground",
                          "Foreground",
                          this.radioGroup("foregroundColor", [
                            ["Black"],
                            ["White"],
                            ["Magenta"],
                            ["Cyan"],
                            ["Yellow"],
                            ["Green"],
                            ["Red"],
                            ["Blue"],
                          ])
                        ),
                        {
                          type: "slider",
                          variable: "foregroundOpacity",
                          content: " ",
                        },
                        this.rule(),
                        this.radioGroup("highlight", [
                          ["None"],
                          ["Hover"],
                          ["Flame"],
                        ]),
                        this.rule(),
                        this.checkbox(
                          "TreeColoring",
                          "Tree Coloring",
                          "treeColoring"
                        ),
                      ]),
                      this.submenu("Magnification", "Magnification", [
                        this.radioGroup("magnification", [
                          ["None"],
                          ["Keyboard"],
                          ["Mouse"],
                        ]),
                        this.rule(),
                        this.radioGroup("magnify", [
                          ["200%"],
                          ["300%"],
                          ["400%"],
                          ["500%"],
                        ]),
                      ]),
                      this.submenu(
                        "Semantic Info",
                        "Semantic Info",
                        [
                          this.checkbox("Type", "Type", "infoType"),
                          this.checkbox("Role", "Role", "infoRole"),
                          this.checkbox("Prefix", "Prefix", "infoPrefix"),
                        ],
                        !0
                      ),
                      this.rule(),
                      this.checkbox(
                        "Collapsible",
                        "Collapsible Math",
                        "collapsible"
                      ),
                      this.checkbox(
                        "AutoCollapse",
                        "Auto Collapse",
                        "autocollapse",
                        { disabled: !0 }
                      ),
                      this.rule(),
                      this.checkbox(
                        "InTabOrder",
                        "Include in Tab Order",
                        "inTabOrder"
                      ),
                      this.checkbox(
                        "AssistiveMml",
                        "Include Hidden MathML",
                        "assistiveMml"
                      ),
                    ]),
                    this.submenu("Language", "Language"),
                    this.rule(),
                    this.command("About", "About MathJax", function () {
                      return t.about.post();
                    }),
                    this.command("Help", "MathJax Help", function () {
                      return t.help.post();
                    }),
                  ],
                });
                var n = this.menu;
                this.about.attachMenu(n),
                  this.help.attachMenu(n),
                  this.originalText.attachMenu(n),
                  this.annotationText.attachMenu(n),
                  this.mathmlCode.attachMenu(n),
                  this.zoomBox.attachMenu(n),
                  this.checkLoadableItems(),
                  this.enableExplorerItems(this.settings.explorer),
                  (n.showAnnotation = this.annotationText),
                  (n.copyAnnotation = this.copyAnnotation.bind(this)),
                  (n.annotationTypes = this.options.annotationTypes),
                  m.CssStyles.addInfoStyles(this.document.document),
                  m.CssStyles.addMenuStyles(this.document.document);
              }),
              (t.prototype.checkLoadableItems = function () {
                var t, e;
                if (y && y._ && y.loader && y.startup)
                  !this.settings.collapsible ||
                    (y._.a11y && y._.a11y.complexity) ||
                    this.loadA11y("complexity"),
                    !this.settings.explorer ||
                      (y._.a11y && y._.a11y.explorer) ||
                      this.loadA11y("explorer"),
                    !this.settings.assistiveMml ||
                      (y._.a11y && y._.a11y["assistive-mml"]) ||
                      this.loadA11y("assistive-mml");
                else {
                  var n = this.menu;
                  try {
                    for (
                      var o = i(Object.keys(this.jax)), r = o.next();
                      !r.done;
                      r = o.next()
                    ) {
                      var s = r.value;
                      this.jax[s] ||
                        n.findID("Settings", "Renderer", s).disable();
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
                  n.findID("Accessibility", "Activate").disable(),
                    n.findID("Accessibility", "AutoCollapse").disable(),
                    n.findID("Accessibility", "Collapsible").disable();
                }
              }),
              (t.prototype.enableExplorerItems = function (t) {
                var e,
                  n,
                  o = this.menu.findID("Accessibility", "Activate").menu;
                try {
                  for (
                    var r = i(o.items.slice(1)), s = r.next();
                    !s.done;
                    s = r.next()
                  ) {
                    var a = s.value;
                    if (a instanceof f.Rule) break;
                    t ? a.enable() : a.disable();
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (t.prototype.mergeUserSettings = function () {
                try {
                  var e = localStorage.getItem(t.MENU_STORAGE);
                  if (!e) return;
                  Object.assign(this.settings, JSON.parse(e)),
                    this.setA11y(this.settings);
                } catch (t) {
                  console.log("MathJax localStorage error: " + t.message);
                }
              }),
              (t.prototype.saveUserSettings = function () {
                var e,
                  n,
                  o = {};
                try {
                  for (
                    var r = i(Object.keys(this.settings)), s = r.next();
                    !s.done;
                    s = r.next()
                  ) {
                    var a = s.value;
                    this.settings[a] !== this.defaultSettings[a] &&
                      (o[a] = this.settings[a]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                try {
                  Object.keys(o).length
                    ? localStorage.setItem(t.MENU_STORAGE, JSON.stringify(o))
                    : localStorage.removeItem(t.MENU_STORAGE);
                } catch (t) {
                  console.log("MathJax localStorage error: " + t.message);
                }
              }),
              (t.prototype.setA11y = function (t) {
                y._.a11y &&
                  y._.a11y.explorer &&
                  y._.a11y.explorer_ts.setA11yOptions(this.document, t);
              }),
              (t.prototype.getA11y = function (t) {
                if (y._.a11y && y._.a11y.explorer)
                  return void 0 !== this.document.options.a11y[t]
                    ? this.document.options.a11y[t]
                    : this.document.options.sre[t];
              }),
              (t.prototype.setScale = function (t) {
                (this.document.outputJax.options.scale = parseFloat(t)),
                  this.document.rerender();
              }),
              (t.prototype.setRenderer = function (t) {
                var e = this;
                if (this.jax[t]) this.setOutputJax(t);
                else {
                  var n = t.toLowerCase();
                  this.loadComponent("output/" + n, function () {
                    var o = y.startup;
                    n in o.constructors &&
                      (o.useOutput(n, !0),
                      (o.output = o.getOutputJax()),
                      (e.jax[t] = o.output),
                      e.setOutputJax(t));
                  });
                }
              }),
              (t.prototype.setOutputJax = function (t) {
                this.jax[t].setAdaptor(this.document.adaptor),
                  (this.document.outputJax = this.jax[t]),
                  this.rerender();
              }),
              (t.prototype.setTabOrder = function (t) {
                this.menu.store.inTaborder(t);
              }),
              (t.prototype.setAssistiveMml = function (t) {
                (this.document.options.enableAssistiveMml = t),
                  !t || (y._.a11y && y._.a11y["assistive-mml"])
                    ? this.rerender()
                    : this.loadA11y("assistive-mml");
              }),
              (t.prototype.setExplorer = function (t) {
                this.enableExplorerItems(t),
                  (this.document.options.enableExplorer = t),
                  !t || (y._.a11y && y._.a11y.explorer)
                    ? this.rerender(
                        this.settings.collapsible
                          ? s.STATE.RERENDER
                          : s.STATE.COMPILED
                      )
                    : this.loadA11y("explorer");
              }),
              (t.prototype.setCollapsible = function (t) {
                (this.document.options.enableComplexity = t),
                  !t || (y._.a11y && y._.a11y.complexity)
                    ? this.rerender(s.STATE.COMPILED)
                    : this.loadA11y("complexity");
              }),
              (t.prototype.scaleAllMath = function () {
                var t = (100 * parseFloat(this.settings.scale))
                    .toFixed(1)
                    .replace(/.0$/, ""),
                  e = prompt(
                    "Scale all mathematics (compared to surrounding text) by",
                    t + "%"
                  );
                if (e)
                  if (e.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)) {
                    var n = parseFloat(e) / 100;
                    n
                      ? this.setScale(String(n))
                      : alert("The scale should not be zero");
                  } else alert("The scale should be a percentage (e.g., 120%)");
              }),
              (t.prototype.resetDefaults = function () {
                var e, n;
                t.loading++;
                var o = this.menu.pool,
                  r = this.defaultSettings;
                try {
                  for (
                    var a = i(Object.keys(this.settings)), u = a.next();
                    !u.done;
                    u = a.next()
                  ) {
                    var l = u.value,
                      c = o.lookup(l);
                    if (c) {
                      c.setValue(r[l]);
                      var p = c.items[0];
                      p && p.executeCallbacks_();
                    } else this.settings[l] = r[l];
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    u && !u.done && (n = a.return) && n.call(a);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                t.loading--, this.rerender(s.STATE.COMPILED);
              }),
              (t.prototype.checkComponent = function (e) {
                var n = t.loadingPromises.get(e);
                n && r.mathjax.retryAfter(n);
              }),
              (t.prototype.loadComponent = function (e, n) {
                if (!t.loadingPromises.has(e)) {
                  var o = y.loader;
                  if (o) {
                    t.loading++;
                    var i = o
                      .load(e)
                      .then(function () {
                        t.loading--,
                          t.loadingPromises.delete(e),
                          n(),
                          0 === t.loading &&
                            t._loadingPromise &&
                            ((t._loadingPromise = null), t._loadingOK());
                      })
                      .catch(function (e) {
                        t._loadingPromise
                          ? ((t._loadingPromise = null), t._loadingFailed(e))
                          : console.log(e);
                      });
                    t.loadingPromises.set(e, i);
                  }
                }
              }),
              (t.prototype.loadA11y = function (e) {
                var n = this,
                  o = !s.STATE.ENRICHED;
                this.loadComponent("a11y/" + e, function () {
                  var i = y.startup;
                  r.mathjax.handlers.unregister(i.handler),
                    (i.handler = i.getHandler()),
                    r.mathjax.handlers.register(i.handler);
                  var a = n.document;
                  (n.document = i.document = i.getDocument()),
                    (n.document.menu = n),
                    n.document.outputJax.reset(),
                    n.transferMathList(a),
                    (n.document.processed = a.processed),
                    t._loadingPromise ||
                      (n.document.outputJax.reset(),
                      n.rerender(
                        "complexity" === e || o
                          ? s.STATE.COMPILED
                          : s.STATE.TYPESET
                      ));
                });
              }),
              (t.prototype.transferMathList = function (t) {
                var e,
                  n,
                  o = this.document.options.MathItem;
                try {
                  for (var r = i(t.math), s = r.next(); !s.done; s = r.next()) {
                    var a = s.value,
                      u = new o();
                    Object.assign(u, a), this.document.math.push(u);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (t.prototype.formatSource = function (t) {
                return t
                  .trim()
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");
              }),
              (t.prototype.toMML = function (t) {
                return this.MmlVisitor.visitTree(t.root, t, {
                  texHints: this.settings.texHints,
                  semantics:
                    this.settings.semantics && "MathML" !== t.inputJax.name,
                });
              }),
              (t.prototype.zoom = function (t, e, n) {
                (t && !this.isZoomEvent(t, e)) ||
                  ((this.menu.mathItem = n),
                  t && this.menu.post(t),
                  this.zoomBox.post());
              }),
              (t.prototype.isZoomEvent = function (t, e) {
                return (
                  this.settings.zoom === e &&
                  (!this.settings.alt || t.altKey) &&
                  (!this.settings.ctrl || t.ctrlKey) &&
                  (!this.settings.cmd || t.metaKey) &&
                  (!this.settings.shift || t.shiftKey)
                );
              }),
              (t.prototype.rerender = function (e) {
                void 0 === e && (e = s.STATE.TYPESET),
                  (this.rerenderStart = Math.min(e, this.rerenderStart)),
                  t.loading ||
                    (this.rerenderStart <= s.STATE.COMPILED &&
                      this.document.reset({ inputJax: [] }),
                    this.document.rerender(this.rerenderStart),
                    (this.rerenderStart = s.STATE.LAST));
              }),
              (t.prototype.copyMathML = function () {
                this.copyToClipboard(this.toMML(this.menu.mathItem));
              }),
              (t.prototype.copyOriginal = function () {
                this.copyToClipboard(this.menu.mathItem.math.trim());
              }),
              (t.prototype.copyAnnotation = function () {
                this.copyToClipboard(this.menu.annotation.trim());
              }),
              (t.prototype.copyToClipboard = function (t) {
                var e = document.createElement("textarea");
                (e.value = t),
                  e.setAttribute("readonly", ""),
                  (e.style.cssText =
                    "height: 1px; width: 1px; padding: 1px; position: absolute; left: -10px"),
                  document.body.appendChild(e),
                  e.select();
                try {
                  document.execCommand("copy");
                } catch (t) {
                  alert("Can't copy to clipboard: " + t.message);
                }
                document.body.removeChild(e);
              }),
              (t.prototype.addMenu = function (t) {
                var e = this,
                  n = t.typesetRoot;
                n.addEventListener(
                  "contextmenu",
                  function () {
                    return (e.menu.mathItem = t);
                  },
                  !0
                ),
                  n.addEventListener(
                    "keydown",
                    function () {
                      return (e.menu.mathItem = t);
                    },
                    !0
                  ),
                  n.addEventListener(
                    "click",
                    function (n) {
                      return e.zoom(n, "Click", t);
                    },
                    !0
                  ),
                  n.addEventListener(
                    "dblclick",
                    function (n) {
                      return e.zoom(n, "DoubleClick", t);
                    },
                    !0
                  ),
                  this.menu.store.insert(n);
              }),
              (t.prototype.clear = function () {
                this.menu.store.clear();
              }),
              (t.prototype.variable = function (t, e) {
                var n = this;
                return {
                  name: t,
                  getter: function () {
                    return n.settings[t];
                  },
                  setter: function (o) {
                    (n.settings[t] = o), e && e(o), n.saveUserSettings();
                  },
                };
              }),
              (t.prototype.a11yVar = function (t, e) {
                var n = this;
                return {
                  name: t,
                  getter: function () {
                    return n.getA11y(t);
                  },
                  setter: function (o) {
                    n.settings[t] = o;
                    var i = {};
                    (i[t] = o), n.setA11y(i), e && e(o), n.saveUserSettings();
                  },
                };
              }),
              (t.prototype.submenu = function (t, e, n, o) {
                var r, s;
                void 0 === n && (n = []), void 0 === o && (o = !1);
                var a = [];
                try {
                  for (var u = i(n), l = u.next(); !l.done; l = u.next()) {
                    var c = l.value;
                    Array.isArray(c) ? (a = a.concat(c)) : a.push(c);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    l && !l.done && (s = u.return) && s.call(u);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return {
                  type: "submenu",
                  id: t,
                  content: e,
                  menu: { items: a },
                  disabled: 0 === a.length || o,
                };
              }),
              (t.prototype.command = function (t, e, n, o) {
                return (
                  void 0 === o && (o = {}),
                  Object.assign(
                    { type: "command", id: t, content: e, action: n },
                    o
                  )
                );
              }),
              (t.prototype.checkbox = function (t, e, n, o) {
                return (
                  void 0 === o && (o = {}),
                  Object.assign(
                    { type: "checkbox", id: t, content: e, variable: n },
                    o
                  )
                );
              }),
              (t.prototype.radioGroup = function (t, e) {
                var n = this;
                return e.map(function (e) {
                  return n.radio(e[0], e[1] || e[0], t);
                });
              }),
              (t.prototype.radio = function (t, e, n, o) {
                return (
                  void 0 === o && (o = {}),
                  Object.assign(
                    { type: "radio", id: t, content: e, variable: n },
                    o
                  )
                );
              }),
              (t.prototype.label = function (t, e) {
                return { type: "label", id: t, content: e };
              }),
              (t.prototype.rule = function () {
                return { type: "rule" };
              }),
              (t.MENU_STORAGE = "MathJax-Menu-Settings"),
              (t.OPTIONS = {
                settings: {
                  texHints: !0,
                  semantics: !1,
                  zoom: "NoZoom",
                  zscale: "200%",
                  renderer: "CHTML",
                  alt: !1,
                  cmd: !1,
                  ctrl: !1,
                  shift: !1,
                  scale: 1,
                  autocollapse: !1,
                  collapsible: !1,
                  inTabOrder: !0,
                  assistiveMml: !0,
                  explorer: !1,
                },
                jax: { CHTML: null, SVG: null },
                annotationTypes: u.expandable({
                  TeX: ["TeX", "LaTeX", "application/x-tex"],
                  StarMath: ["StarMath 5.0"],
                  Maple: ["Maple"],
                  ContentMathML: [
                    "MathML-Content",
                    "application/mathml-content+xml",
                  ],
                  OpenMath: ["OpenMath"],
                }),
              }),
              (t.loading = 0),
              (t.loadingPromises = new Map()),
              (t._loadingPromise = null),
              (t._loadingOK = null),
              (t._loadingFailed = null),
              t
            );
          })();
        e.Menu = v;
      },
      3: function (t, e, n) {
        var o,
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
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          r =
            (this && this.__assign) ||
            function () {
              return (r =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, o = arguments.length; n < o; n++)
                    for (var i in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, i) &&
                        (t[i] = e[i]);
                  return t;
                }).apply(this, arguments);
            },
          s =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var o,
                i,
                r = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                  s.push(o.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (i) throw i.error;
                }
              }
              return s;
            },
          a =
            (this && this.__spreadArray) ||
            function (t, e) {
              for (var n = 0, o = e.length, i = t.length; n < o; n++, i++)
                t[i] = e[n];
              return t;
            },
          u =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                o = 0;
              if (n) return n.call(t);
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
          (e.MenuHandler =
            e.MenuMathDocumentMixin =
            e.MenuMathItemMixin =
              void 0);
        var l = n(184),
          c = n(769),
          p = n(77),
          h = n(62);
        function d(t) {
          return (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              i(e, t),
              (e.prototype.addMenu = function (t, e) {
                void 0 === e && (e = !1),
                  this.state() >= c.STATE.CONTEXT_MENU ||
                    (this.isEscaped ||
                      (!t.options.enableMenu && !e) ||
                      t.menu.addMenu(this),
                    this.state(c.STATE.CONTEXT_MENU));
              }),
              (e.prototype.checkLoading = function (t) {
                t.checkLoading();
              }),
              e
            );
          })(t);
        }
        function f(t) {
          var e;
          return (
            ((e = (function (t) {
              function e() {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                var o = t.apply(this, a([], s(e))) || this;
                o.menu = new o.options.MenuClass(o, o.options.menuOptions);
                var i = o.constructor.ProcessBits;
                return (
                  i.has("context-menu") || i.allocate("context-menu"),
                  (o.options.MathItem = d(o.options.MathItem)),
                  o
                );
              }
              return (
                i(e, t),
                (e.prototype.addMenu = function () {
                  var t, e;
                  if (!this.processed.isSet("context-menu")) {
                    try {
                      for (
                        var n = u(this.math), o = n.next();
                        !o.done;
                        o = n.next()
                      ) {
                        o.value.addMenu(this);
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        o && !o.done && (e = n.return) && e.call(n);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    this.processed.set("context-menu");
                  }
                  return this;
                }),
                (e.prototype.checkLoading = function () {
                  this.menu.isLoading &&
                    l.mathjax.retryAfter(
                      this.menu.loadingPromise.catch(function (t) {
                        return console.log(t);
                      })
                    );
                  var t = this.menu.settings;
                  return (
                    t.collapsible &&
                      ((this.options.enableComplexity = !0),
                      this.menu.checkComponent("a11y/complexity")),
                    t.explorer &&
                      ((this.options.enableEnrichment = !0),
                      (this.options.enableExplorer = !0),
                      this.menu.checkComponent("a11y/explorer")),
                    this
                  );
                }),
                (e.prototype.state = function (e, n) {
                  return (
                    void 0 === n && (n = !1),
                    t.prototype.state.call(this, e, n),
                    e < c.STATE.CONTEXT_MENU &&
                      this.processed.clear("context-menu"),
                    this
                  );
                }),
                (e.prototype.updateDocument = function () {
                  return (
                    t.prototype.updateDocument.call(this),
                    this.menu.menu.store.sort(),
                    this
                  );
                }),
                e
              );
            })(t)).OPTIONS = r(
              r(
                {
                  enableEnrichment: !0,
                  enableComplexity: !0,
                  enableExplorer: !0,
                  enrichSpeech: "none",
                  enrichError: function (t, e, n) {
                    return console.warn("Enrichment Error:", n);
                  },
                },
                t.OPTIONS
              ),
              {
                MenuClass: h.Menu,
                menuOptions: h.Menu.OPTIONS,
                enableMenu: !0,
                sre: t.OPTIONS.sre || p.expandable({}),
                a11y: t.OPTIONS.a11y || p.expandable({}),
                renderActions: p.expandable(
                  r(r({}, t.OPTIONS.renderActions), {
                    addMenu: [c.STATE.CONTEXT_MENU],
                    checkLoading: [c.STATE.UNPROCESSED + 1],
                  })
                ),
              }
            )),
            e
          );
        }
        c.newState("CONTEXT_MENU", 170),
          (e.MenuMathItemMixin = d),
          (e.MenuMathDocumentMixin = f),
          (e.MenuHandler = function (t) {
            return (t.documentClass = f(t.documentClass)), t;
          });
      },
      232: function (t, e, n) {
        var o,
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
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MmlVisitor = void 0);
        var r = n(433),
          s = n(77),
          a = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.options = { texHints: !0, semantics: !1 }),
                (e.mathItem = null),
                e
              );
            }
            return (
              i(e, t),
              (e.prototype.visitTree = function (t, e, n) {
                return (
                  void 0 === e && (e = null),
                  void 0 === n && (n = {}),
                  (this.mathItem = e),
                  s.userOptions(this.options, n),
                  this.visitNode(t, "")
                );
              }),
              (e.prototype.visitTeXAtomNode = function (e, n) {
                return this.options.texHints
                  ? t.prototype.visitTeXAtomNode.call(this, e, n)
                  : e.childNodes[0] && 1 === e.childNodes[0].childNodes.length
                  ? this.visitNode(e.childNodes[0], n)
                  : n +
                    "<mrow" +
                    this.getAttributes(e) +
                    ">\n" +
                    this.childNodeMml(e, n + "  ", "\n") +
                    n +
                    "</mrow>";
              }),
              (e.prototype.visitMathNode = function (e, n) {
                if (
                  !this.options.semantics ||
                  "TeX" !== this.mathItem.inputJax.name
                )
                  return t.prototype.visitDefault.call(this, e, n);
                var o =
                  e.childNodes.length && e.childNodes[0].childNodes.length > 1;
                return (
                  n +
                  "<math" +
                  this.getAttributes(e) +
                  ">\n" +
                  n +
                  "  <semantics>\n" +
                  (o ? n + "    <mrow>\n" : "") +
                  this.childNodeMml(e, n + (o ? "      " : "    "), "\n") +
                  (o ? n + "    </mrow>\n" : "") +
                  n +
                  '    <annotation encoding="application/x-tex">' +
                  this.mathItem.math +
                  "</annotation>\n" +
                  n +
                  "  </semantics>\n" +
                  n +
                  "</math>"
                );
              }),
              e
            );
          })(r.SerializedMmlVisitor);
        e.MmlVisitor = a;
      },
      309: function (t, e, n) {
        var o,
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
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SelectableInfo = void 0);
        var r = n(932),
          s = n(698),
          a = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              i(e, t),
              (e.prototype.addEvents = function (t) {
                var e = this;
                t.addEventListener("keypress", function (t) {
                  "a" === t.key &&
                    (t.ctrlKey || t.metaKey) &&
                    (e.selectAll(), e.stop(t));
                });
              }),
              (e.prototype.selectAll = function () {
                document
                  .getSelection()
                  .selectAllChildren(this.html.querySelector("pre"));
              }),
              (e.prototype.copyToClipboard = function () {
                this.selectAll();
                try {
                  document.execCommand("copy");
                } catch (t) {
                  alert("Can't copy to clipboard: " + t.message);
                }
                document.getSelection().removeAllRanges();
              }),
              (e.prototype.generateHtml = function () {
                var e = this;
                t.prototype.generateHtml.call(this);
                var n = this.html
                  .querySelector("span." + s.HtmlClasses.INFOSIGNATURE)
                  .appendChild(document.createElement("input"));
                (n.type = "button"),
                  (n.value = "Copy to Clipboard"),
                  n.addEventListener("click", function (t) {
                    return e.copyToClipboard();
                  });
              }),
              e
            );
          })(r.Info);
        e.SelectableInfo = a;
      },
      723: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isObject = MathJax._.components.global.isObject),
          (e.combineConfig = MathJax._.components.global.combineConfig),
          (e.combineDefaults = MathJax._.components.global.combineDefaults),
          (e.combineWithMathJax =
            MathJax._.components.global.combineWithMathJax),
          (e.MathJax = MathJax._.components.global.MathJax);
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
      184: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.mathjax = MathJax._.mathjax.mathjax);
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
      612: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractEntry = void 0);
        var r = n(943),
          s = n(698),
          a = (function (t) {
            function e(e, n) {
              var o = t.call(this) || this;
              return (
                (o._menu = e),
                (o._type = n),
                (o.className = s.HtmlClasses.MENUITEM),
                (o.role = "menuitem"),
                (o.hidden = !1),
                o
              );
            }
            return (
              i(e, t),
              Object.defineProperty(e.prototype, "menu", {
                get: function () {
                  return this._menu;
                },
                set: function (t) {
                  this._menu = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "type", {
                get: function () {
                  return this._type;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.hide = function () {
                (this.hidden = !0), this.menu.generateMenu();
              }),
              (e.prototype.show = function () {
                (this.hidden = !1), this.menu.generateMenu();
              }),
              (e.prototype.isHidden = function () {
                return this.hidden;
              }),
              e
            );
          })(r.MenuElement);
        e.AbstractEntry = a;
      },
      341: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          r =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                o = 0;
              if (n) return n.call(t);
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
          (e.AbstractItem = void 0);
        var s = n(612),
          a = n(865),
          u = n(698),
          l = (function (t) {
            function e(e, n, o, i) {
              var r = t.call(this, e, n) || this;
              return (
                (r._content = o),
                (r.disabled = !1),
                (r.callbacks = []),
                (r._id = i || o),
                r
              );
            }
            return (
              i(e, t),
              Object.defineProperty(e.prototype, "content", {
                get: function () {
                  return this._content;
                },
                set: function (t) {
                  (this._content = t),
                    this.generateHtml(),
                    this.menu && this.menu.generateHtml();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "id", {
                get: function () {
                  return this._id;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.press = function () {
                this.disabled ||
                  (this.executeAction(), this.executeCallbacks_());
              }),
              (e.prototype.executeAction = function () {}),
              (e.prototype.registerCallback = function (t) {
                -1 === this.callbacks.indexOf(t) && this.callbacks.push(t);
              }),
              (e.prototype.unregisterCallback = function (t) {
                var e = this.callbacks.indexOf(t);
                -1 !== e && this.callbacks.splice(e, 1);
              }),
              (e.prototype.mousedown = function (t) {
                this.press(), this.stop(t);
              }),
              (e.prototype.mouseover = function (t) {
                this.focus(), this.stop(t);
              }),
              (e.prototype.mouseout = function (t) {
                this.deactivate(), this.stop(t);
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this);
                var e = this.html;
                e.setAttribute("aria-disabled", "false"),
                  (e.textContent = this.content);
              }),
              (e.prototype.activate = function () {
                this.disabled ||
                  this.html.classList.add(u.HtmlClasses.MENUACTIVE);
              }),
              (e.prototype.deactivate = function () {
                this.html.classList.remove(u.HtmlClasses.MENUACTIVE);
              }),
              (e.prototype.focus = function () {
                (this.menu.focused = this),
                  t.prototype.focus.call(this),
                  this.activate();
              }),
              (e.prototype.unfocus = function () {
                this.deactivate(), t.prototype.unfocus.call(this);
              }),
              (e.prototype.escape = function (t) {
                a.MenuUtil.close(this);
              }),
              (e.prototype.up = function (t) {
                this.menu.up(t);
              }),
              (e.prototype.down = function (t) {
                this.menu.down(t);
              }),
              (e.prototype.left = function (t) {
                this.menu.left(t);
              }),
              (e.prototype.right = function (t) {
                this.menu.right(t);
              }),
              (e.prototype.space = function (t) {
                this.press();
              }),
              (e.prototype.disable = function () {
                this.disabled = !0;
                var t = this.html;
                t.classList.add(u.HtmlClasses.MENUDISABLED),
                  t.setAttribute("aria-disabled", "true");
              }),
              (e.prototype.enable = function () {
                this.disabled = !1;
                var t = this.html;
                t.classList.remove(u.HtmlClasses.MENUDISABLED),
                  t.removeAttribute("aria-disabled");
              }),
              (e.prototype.executeCallbacks_ = function () {
                var t, e;
                try {
                  for (
                    var n = r(this.callbacks), o = n.next();
                    !o.done;
                    o = n.next()
                  ) {
                    var i = o.value;
                    try {
                      i(this);
                    } catch (t) {
                      a.MenuUtil.error(
                        t,
                        "Callback for menu entry " + this.id + " failed."
                      );
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (e = n.return) && e.call(n);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              e
            );
          })(s.AbstractEntry);
        e.AbstractItem = l;
      },
      585: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          r =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                o = 0;
              if (n) return n.call(t);
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
          (e.AbstractMenu = void 0);
        var s = n(757),
          a = n(341),
          u = n(698),
          l = n(745),
          c = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.className = u.HtmlClasses.CONTEXTMENU),
                (e.role = "menu"),
                (e._items = []),
                (e._baseMenu = null),
                e
              );
            }
            return (
              i(e, t),
              Object.defineProperty(e.prototype, "baseMenu", {
                get: function () {
                  return this._baseMenu;
                },
                set: function (t) {
                  this._baseMenu = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "items", {
                get: function () {
                  return this._items;
                },
                set: function (t) {
                  this._items = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "pool", {
                get: function () {
                  return this.variablePool;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "focused", {
                get: function () {
                  return this._focused;
                },
                set: function (t) {
                  if (this._focused !== t) {
                    this._focused || this.unfocus();
                    var e = this._focused;
                    (this._focused = t), e && e.unfocus();
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.up = function (t) {
                var e = this.items.filter(function (t) {
                  return t instanceof a.AbstractItem && !t.isHidden();
                });
                if (0 !== e.length)
                  if (this.focused) {
                    var n = e.indexOf(this.focused);
                    -1 !== n && e[(n = n ? --n : e.length - 1)].focus();
                  } else e[e.length - 1].focus();
              }),
              (e.prototype.down = function (t) {
                var e = this.items.filter(function (t) {
                  return t instanceof a.AbstractItem && !t.isHidden();
                });
                if (0 !== e.length)
                  if (this.focused) {
                    var n = e.indexOf(this.focused);
                    -1 !== n && e[(n = ++n === e.length ? 0 : n)].focus();
                  } else e[0].focus();
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this), this.generateMenu();
              }),
              (e.prototype.generateMenu = function () {
                var t,
                  e,
                  n = this.html;
                n.classList.add(u.HtmlClasses.MENU);
                try {
                  for (
                    var o = r(this.items), i = o.next();
                    !i.done;
                    i = o.next()
                  ) {
                    var s = i.value;
                    if (s.isHidden()) {
                      var a = s.html;
                      a.parentNode && a.parentNode.removeChild(a);
                    } else n.appendChild(s.html);
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
              }),
              (e.prototype.post = function (e, n) {
                this.variablePool.update(), t.prototype.post.call(this, e, n);
              }),
              (e.prototype.unpostSubmenus = function () {
                var t,
                  e,
                  n = this.items.filter(function (t) {
                    return t instanceof l.Submenu;
                  });
                try {
                  for (var o = r(n), i = o.next(); !i.done; i = o.next()) {
                    var s = i.value;
                    s.submenu.unpost(), s !== this.focused && s.unfocus();
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
              }),
              (e.prototype.unpost = function () {
                t.prototype.unpost.call(this),
                  this.unpostSubmenus(),
                  (this.focused = null);
              }),
              (e.prototype.find = function (t) {
                var e, n;
                try {
                  for (
                    var o = r(this.items), i = o.next();
                    !i.done;
                    i = o.next()
                  ) {
                    var s = i.value;
                    if ("rule" !== s.type) {
                      if (s.id === t) return s;
                      if ("submenu" === s.type) {
                        var a = s.submenu.find(t);
                        if (a) return a;
                      }
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return null;
              }),
              e
            );
          })(s.AbstractPostable);
        e.AbstractMenu = c;
      },
      817: function (t, e, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractNavigatable = void 0);
        var o = n(635),
          i = n(674),
          r = (function () {
            function t() {
              this.bubble = !1;
            }
            return (
              (t.prototype.bubbleKey = function () {
                this.bubble = !0;
              }),
              (t.prototype.keydown = function (t) {
                switch (t.keyCode) {
                  case o.KEY.ESCAPE:
                    this.escape(t);
                    break;
                  case o.KEY.RIGHT:
                    this.right(t);
                    break;
                  case o.KEY.LEFT:
                    this.left(t);
                    break;
                  case o.KEY.UP:
                    this.up(t);
                    break;
                  case o.KEY.DOWN:
                    this.down(t);
                    break;
                  case o.KEY.RETURN:
                  case o.KEY.SPACE:
                    this.space(t);
                    break;
                  default:
                    return;
                }
                this.bubble ? (this.bubble = !1) : this.stop(t);
              }),
              (t.prototype.escape = function (t) {}),
              (t.prototype.space = function (t) {}),
              (t.prototype.left = function (t) {}),
              (t.prototype.right = function (t) {}),
              (t.prototype.up = function (t) {}),
              (t.prototype.down = function (t) {}),
              (t.prototype.stop = function (t) {
                t &&
                  (t.stopPropagation(),
                  t.preventDefault(),
                  (t.cancelBubble = !0));
              }),
              (t.prototype.mousedown = function (t) {
                return this.stop(t);
              }),
              (t.prototype.mouseup = function (t) {
                return this.stop(t);
              }),
              (t.prototype.mouseover = function (t) {
                return this.stop(t);
              }),
              (t.prototype.mouseout = function (t) {
                return this.stop(t);
              }),
              (t.prototype.click = function (t) {
                return this.stop(t);
              }),
              (t.prototype.addEvents = function (t) {
                t.addEventListener(i.MOUSE.DOWN, this.mousedown.bind(this)),
                  t.addEventListener(i.MOUSE.UP, this.mouseup.bind(this)),
                  t.addEventListener(i.MOUSE.OVER, this.mouseover.bind(this)),
                  t.addEventListener(i.MOUSE.OUT, this.mouseout.bind(this)),
                  t.addEventListener(i.MOUSE.CLICK, this.click.bind(this)),
                  t.addEventListener("keydown", this.keydown.bind(this)),
                  t.addEventListener("dragstart", this.stop.bind(this)),
                  t.addEventListener(i.MOUSE.SELECTSTART, this.stop.bind(this)),
                  t.addEventListener("contextmenu", this.stop.bind(this)),
                  t.addEventListener(i.MOUSE.DBLCLICK, this.stop.bind(this));
              }),
              t
            );
          })();
        e.AbstractNavigatable = r;
      },
      757: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractPostable = void 0);
        var r = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.posted = !1), e;
          }
          return (
            i(e, t),
            (e.prototype.isPosted = function () {
              return this.posted;
            }),
            (e.prototype.post = function (t, e) {
              this.posted ||
                (void 0 !== t &&
                  void 0 !== e &&
                  this.html.setAttribute(
                    "style",
                    "left: " + t + "px; top: " + e + "px;"
                  ),
                this.display(),
                (this.posted = !0));
            }),
            (e.prototype.unpost = function () {
              if (this.posted) {
                var t = this.html;
                t.parentNode && t.parentNode.removeChild(t), (this.posted = !1);
              }
            }),
            e
          );
        })(n(943).MenuElement);
        e.AbstractPostable = r;
      },
      467: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AbstractVariableItem = void 0);
        var r = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            i(e, t),
            (e.prototype.generateHtml = function () {
              t.prototype.generateHtml.call(this);
              var e = this.html;
              this.span || this.generateSpan(),
                e.appendChild(this.span),
                this.update();
            }),
            (e.prototype.register = function () {
              this.variable.register(this);
            }),
            (e.prototype.unregister = function () {
              this.variable.unregister(this);
            }),
            (e.prototype.update = function () {
              this.updateAria(), this.span && this.updateSpan();
            }),
            e
          );
        })(n(341).AbstractItem);
        e.AbstractVariableItem = r;
      },
      725: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CloseButton = void 0);
        var r = n(757),
          s = n(698),
          a = (function (t) {
            function e(e) {
              var n = t.call(this) || this;
              return (
                (n.element = e),
                (n.className = s.HtmlClasses.MENUCLOSE),
                (n.role = "button"),
                n
              );
            }
            return (
              i(e, t),
              (e.prototype.generateHtml = function () {
                var t = document.createElement("span");
                t.classList.add(this.className),
                  t.setAttribute("role", this.role),
                  t.setAttribute("tabindex", "0");
                var e = document.createElement("span");
                (e.textContent = "\xd7"), t.appendChild(e), (this.html = t);
              }),
              (e.prototype.display = function () {}),
              (e.prototype.unpost = function () {
                t.prototype.unpost.call(this), this.element.unpost();
              }),
              (e.prototype.keydown = function (e) {
                this.bubbleKey(), t.prototype.keydown.call(this, e);
              }),
              (e.prototype.space = function (t) {
                this.unpost(), this.stop(t);
              }),
              (e.prototype.mousedown = function (t) {
                this.unpost(), this.stop(t);
              }),
              e
            );
          })(r.AbstractPostable);
        e.CloseButton = a;
      },
      964: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ContextMenu = void 0);
        var r = n(585),
          s = n(698),
          a = n(525),
          u = n(79),
          l = (function (t) {
            function e(e) {
              var n = t.call(this) || this;
              return (
                (n.factory = e),
                (n.id = ""),
                (n.moving = !1),
                (n._store = new a.MenuStore(n)),
                (n.widgets = []),
                (n.variablePool = new u.VariablePool()),
                n
              );
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e) {
                var n = e.pool,
                  o = e.items,
                  i = e.id,
                  r = void 0 === i ? "" : i,
                  s = new this(t);
                s.id = r;
                var a = t.get("variable");
                n.forEach(function (e) {
                  return a(t, e, s.pool);
                });
                var u = t.get("items")(t, o, s);
                return (s.items = u), s;
              }),
              (e.prototype.generateHtml = function () {
                this.isPosted() && this.unpost(),
                  t.prototype.generateHtml.call(this),
                  (this._frame = document.createElement("div")),
                  this._frame.classList.add(s.HtmlClasses.MENUFRAME);
                var e =
                  "left: 0px; top: 0px; z-index: 200; width: 100%; height: 100%; border: 0px; padding: 0px; margin: 0px;";
                this._frame.setAttribute("style", "position: absolute; " + e);
                var n = document.createElement("div");
                n.setAttribute("style", "position: fixed; " + e),
                  this._frame.appendChild(n),
                  n.addEventListener(
                    "mousedown",
                    function (t) {
                      this.unpost(), this.unpostWidgets(), this.stop(t);
                    }.bind(this)
                  );
              }),
              (e.prototype.display = function () {
                document.body.appendChild(this.frame),
                  this.frame.appendChild(this.html),
                  this.focus();
              }),
              (e.prototype.escape = function (t) {
                this.unpost(), this.unpostWidgets();
              }),
              (e.prototype.unpost = function () {
                if (
                  (t.prototype.unpost.call(this), !(this.widgets.length > 0))
                ) {
                  this.frame.parentNode.removeChild(this.frame);
                  var e = this.store;
                  this.moving || e.insertTaborder(), e.active.focus();
                }
              }),
              (e.prototype.left = function (t) {
                this.move_(this.store.previous());
              }),
              (e.prototype.right = function (t) {
                this.move_(this.store.next());
              }),
              Object.defineProperty(e.prototype, "frame", {
                get: function () {
                  return this._frame;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "store", {
                get: function () {
                  return this._store;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.post = function (e, n) {
                if (void 0 !== n)
                  return (
                    this.moving || this.store.removeTaborder(),
                    void t.prototype.post.call(this, e, n)
                  );
                var o,
                  i,
                  r,
                  s = e;
                if (
                  (s instanceof Event
                    ? ((o = s.target), this.stop(s))
                    : (o = s),
                  s instanceof MouseEvent &&
                    ((i = s.pageX),
                    (r = s.pageY),
                    i ||
                      r ||
                      !s.clientX ||
                      ((i =
                        s.clientX +
                        document.body.scrollLeft +
                        document.documentElement.scrollLeft),
                      (r =
                        s.clientY +
                        document.body.scrollTop +
                        document.documentElement.scrollTop))),
                  !i && !r && o)
                ) {
                  var a =
                      window.pageXOffset || document.documentElement.scrollLeft,
                    u =
                      window.pageYOffset || document.documentElement.scrollTop,
                    l = o.getBoundingClientRect();
                  (i = (l.right + l.left) / 2 + a),
                    (r = (l.bottom + l.top) / 2 + u);
                }
                (this.store.active = o), (this.anchor = this.store.active);
                var c = this.html;
                i + c.offsetWidth > document.body.offsetWidth - 5 &&
                  (i = document.body.offsetWidth - c.offsetWidth - 5),
                  this.post(i, r);
              }),
              (e.prototype.registerWidget = function (t) {
                this.widgets.push(t);
              }),
              (e.prototype.unregisterWidget = function (t) {
                var e = this.widgets.indexOf(t);
                e > -1 && this.widgets.splice(e, 1),
                  0 === this.widgets.length && this.unpost();
              }),
              (e.prototype.unpostWidgets = function () {
                this.widgets.forEach(function (t) {
                  return t.unpost();
                });
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              (e.prototype.move_ = function (t) {
                this.anchor &&
                  t !== this.anchor &&
                  ((this.moving = !0),
                  this.unpost(),
                  this.post(t),
                  (this.moving = !1));
              }),
              e
            );
          })(r.AbstractMenu);
        e.ContextMenu = l;
      },
      837: function (t, e, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CssStyles = void 0);
        var o = n(698);
        !(function (t) {
          function e(t) {
            return "." + (o.HtmlClasses[t] || t);
          }
          var n = {};
          (n[e("INFOCLOSE")] = "{  top:.2em; right:.2em;}"),
            (n[e("INFOCONTENT")] =
              "{  overflow:auto; text-align:left; font-size:80%;  padding:.4em .6em; border:1px inset; margin:1em 0px;  max-height:20em; max-width:30em; background-color:#EEEEEE;  white-space:normal;}"),
            (n[e("INFO") + e("MOUSEPOST")] = "{outline:none;}"),
            (n[e("INFO")] =
              '{  position:fixed; left:50%; width:auto; text-align:center;  border:3px outset; padding:1em 2em; background-color:#DDDDDD;  color:black;  cursor:default; font-family:message-box; font-size:120%;  font-style:normal; text-indent:0; text-transform:none;  line-height:normal; letter-spacing:normal; word-spacing:normal;  word-wrap:normal; white-space:nowrap; float:none; z-index:201;  border-radius: 15px;                     /* Opera 10.5 and IE9 */  -webkit-border-radius:15px;               /* Safari and Chrome */  -moz-border-radius:15px;                  /* Firefox */  -khtml-border-radius:15px;                /* Konqueror */  box-shadow:0px 10px 20px #808080;         /* Opera 10.5 and IE9 */  -webkit-box-shadow:0px 10px 20px #808080; /* Safari 3 & Chrome */  -moz-box-shadow:0px 10px 20px #808080;    /* Forefox 3.5 */  -khtml-box-shadow:0px 10px 20px #808080;  /* Konqueror */  filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color="gray", Positive="true"); /* IE */}');
          var i = {};
          (i[e("MENU")] =
            "{  position:absolute;  background-color:white;  color:black;  width:auto; padding:5px 0px;  border:1px solid #CCCCCC; margin:0; cursor:default;  font: menu; text-align:left; text-indent:0; text-transform:none;  line-height:normal; letter-spacing:normal; word-spacing:normal;  word-wrap:normal; white-space:nowrap; float:none; z-index:201;  border-radius: 5px;                     /* Opera 10.5 and IE9 */  -webkit-border-radius: 5px;             /* Safari and Chrome */  -moz-border-radius: 5px;                /* Firefox */  -khtml-border-radius: 5px;              /* Konqueror */  box-shadow:0px 10px 20px #808080;         /* Opera 10.5 and IE9 */  -webkit-box-shadow:0px 10px 20px #808080; /* Safari 3 & Chrome */  -moz-box-shadow:0px 10px 20px #808080;    /* Forefox 3.5 */  -khtml-box-shadow:0px 10px 20px #808080;  /* Konqueror */}"),
            (i[e("MENUITEM")] =
              "{  padding: 1px 2em;  background:transparent;}"),
            (i[e("MENUARROW")] =
              "{  position:absolute; right:.5em; padding-top:.25em; color:#666666;  font-family: null; font-size: .75em}"),
            (i[e("MENUACTIVE") + " " + e("MENUARROW")] = "{color:white}"),
            (i[e("MENUARROW") + e("RTL")] = "{left:.5em; right:auto}"),
            (i[e("MENUCHECK")] =
              "{  position:absolute; left:.7em;  font-family: null}"),
            (i[e("MENUCHECK") + e("RTL")] = "{ right:.7em; left:auto }"),
            (i[e("MENURADIOCHECK")] = "{  position:absolute; left: .7em;}"),
            (i[e("MENURADIOCHECK") + e("RTL")] = "{  right: .7em; left:auto}"),
            (i[e("MENUINPUTBOX")] =
              "{  padding-left: 1em; right:.5em; color:#666666;  font-family: null;}"),
            (i[e("MENUINPUTBOX") + e("RTL")] = "{  left: .1em;}"),
            (i[e("MENUCOMBOBOX")] = "{  left:.1em; padding-bottom:.5em;}"),
            (i[e("MENUSLIDER")] = "{  left: .1em;}"),
            (i[e("SLIDERVALUE")] =
              "{  position:absolute; right:.1em; padding-top:.25em; color:#333333;  font-size: .75em}"),
            (i[e("SLIDERBAR")] = "{  outline: none; background: #d3d3d3}"),
            (i[e("MENULABEL")] =
              "{  padding: 1px 2em 3px 1.33em;  font-style:italic}"),
            (i[e("MENURULE")] =
              "{  border-top: 1px solid #DDDDDD;  margin: 4px 3px;}"),
            (i[e("MENUDISABLED")] = "{  color:GrayText}"),
            (i[e("MENUACTIVE")] =
              "{  background-color: #606872;  color: white;}"),
            (i[e("MENUDISABLED") + ":focus"] = "{  background-color: #E8E8E8}"),
            (i[e("MENULABEL") + ":focus"] = "{  background-color: #E8E8E8}"),
            (i[e("CONTEXTMENU") + ":focus"] = "{  outline:none}"),
            (i[e("CONTEXTMENU") + " " + e("MENUITEM") + ":focus"] =
              "{  outline:none}"),
            (i[e("SELECTIONMENU")] =
              "{  position:relative; float:left;  border-bottom: none; -webkit-box-shadow:none; -webkit-border-radius:0px; }"),
            (i[e("SELECTIONITEM")] = "{  padding-right: 1em;}"),
            (i[e("SELECTION")] = "{  right: 40%; width:50%; }"),
            (i[e("SELECTIONBOX")] =
              "{  padding: 0em; max-height:20em; max-width: none;  background-color:#FFFFFF;}"),
            (i[e("SELECTIONDIVIDER")] =
              "{  clear: both; border-top: 2px solid #000000;}"),
            (i[e("MENU") + " " + e("MENUCLOSE")] = "{  top:-10px; left:-10px}");
          var r = {};
          (r[e("MENUCLOSE")] =
            '{  position:absolute;  cursor:pointer;  display:inline-block;  border:2px solid #AAA;  border-radius:18px;  -webkit-border-radius: 18px;             /* Safari and Chrome */  -moz-border-radius: 18px;                /* Firefox */  -khtml-border-radius: 18px;              /* Konqueror */  font-family: "Courier New", Courier;  font-size:24px;  color:#F0F0F0}'),
            (r[e("MENUCLOSE") + " span"] =
              "{  display:block; background-color:#AAA; border:1.5px solid;  border-radius:18px;  -webkit-border-radius: 18px;             /* Safari and Chrome */  -moz-border-radius: 18px;                /* Firefox */  -khtml-border-radius: 18px;              /* Konqueror */  line-height:0;  padding:8px 0 6px     /* may need to be browser-specific */}"),
            (r[e("MENUCLOSE") + ":hover"] =
              "{  color:white!important;  border:2px solid #CCC!important}"),
            (r[e("MENUCLOSE") + ":hover span"] =
              "{  background-color:#CCC!important}"),
            (r[e("MENUCLOSE") + ":hover:focus"] = "{  outline:none}");
          var s = !1,
            a = !1,
            u = !1;
          function l(t) {
            u || (c(r, t), (u = !0));
          }
          function c(t, e) {
            var n = e || document,
              o = n.createElement("style");
            o.type = "text/css";
            var i = "";
            for (var r in t) (i += r), (i += " "), (i += t[r]), (i += "\n");
            (o.innerHTML = i), n.head.appendChild(o);
          }
          (t.addMenuStyles = function (t) {
            a || (c(i, t), (a = !0), l(t));
          }),
            (t.addInfoStyles = function (t) {
              s || (c(n, t), (s = !0), l(t));
            });
        })(e.CssStyles || (e.CssStyles = {}));
      },
      698: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.HtmlAttrs = e.HtmlClasses = void 0);
        function n(t) {
          return "CtxtMenu_" + t;
        }
        function o(t) {
          return n(t);
        }
        function i(t) {
          return n(t);
        }
        (e.HtmlClasses = {
          ATTACHED: o("Attached"),
          CONTEXTMENU: o("ContextMenu"),
          MENU: o("Menu"),
          MENUARROW: o("MenuArrow"),
          MENUACTIVE: o("MenuActive"),
          MENUCHECK: o("MenuCheck"),
          MENUCLOSE: o("MenuClose"),
          MENUCOMBOBOX: o("MenuComboBox"),
          MENUDISABLED: o("MenuDisabled"),
          MENUFRAME: o("MenuFrame"),
          MENUITEM: o("MenuItem"),
          MENULABEL: o("MenuLabel"),
          MENURADIOCHECK: o("MenuRadioCheck"),
          MENUINPUTBOX: o("MenuInputBox"),
          MENURULE: o("MenuRule"),
          MENUSLIDER: o("MenuSlider"),
          MOUSEPOST: o("MousePost"),
          RTL: o("RTL"),
          INFO: o("Info"),
          INFOCLOSE: o("InfoClose"),
          INFOCONTENT: o("InfoContent"),
          INFOSIGNATURE: o("InfoSignature"),
          INFOTITLE: o("InfoTitle"),
          SLIDERVALUE: o("SliderValue"),
          SLIDERBAR: o("SliderBar"),
          SELECTION: o("Selection"),
          SELECTIONBOX: o("SelectionBox"),
          SELECTIONMENU: o("SelectionMenu"),
          SELECTIONDIVIDER: o("SelectionDivider"),
          SELECTIONITEM: o("SelectionItem"),
        }),
          (e.HtmlAttrs = {
            COUNTER: i("Counter"),
            KEYDOWNFUNC: i("keydownFunc"),
            CONTEXTMENUFUNC: i("contextmenuFunc"),
            OLDTAB: i("Oldtabindex"),
            TOUCHFUNC: i("TouchFunc"),
          });
      },
      932: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Info = void 0);
        var r = n(725),
          s = n(698),
          a = (function (t) {
            function e(e, n, o) {
              var i = t.call(this) || this;
              return (
                (i.title = e),
                (i.signature = o),
                (i.className = s.HtmlClasses.INFO),
                (i.role = "dialog"),
                (i.contentDiv = i.generateContent()),
                (i.close = i.generateClose()),
                (i.content =
                  n ||
                  function () {
                    return "";
                  }),
                i
              );
            }
            return (
              i(e, t),
              (e.prototype.attachMenu = function (t) {
                this.menu = t;
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this);
                var e = this.html;
                e.appendChild(this.generateTitle()),
                  e.appendChild(this.contentDiv),
                  e.appendChild(this.generateSignature()),
                  e.appendChild(this.close.html),
                  e.setAttribute("tabindex", "0");
              }),
              (e.prototype.post = function () {
                t.prototype.post.call(this);
                var e = document.documentElement,
                  n = this.html,
                  o =
                    window.innerHeight || e.clientHeight || e.scrollHeight || 0,
                  i = Math.floor(-n.offsetWidth / 2),
                  r = Math.floor((o - n.offsetHeight) / 3);
                n.setAttribute(
                  "style",
                  "margin-left: " + i + "px; top: " + r + "px;"
                ),
                  window.event instanceof MouseEvent &&
                    n.classList.add(s.HtmlClasses.MOUSEPOST),
                  n.focus();
              }),
              (e.prototype.display = function () {
                this.menu.registerWidget(this),
                  (this.contentDiv.innerHTML = this.content());
                var t = this.menu.html;
                t.parentNode && t.parentNode.removeChild(t),
                  this.menu.frame.appendChild(this.html);
              }),
              (e.prototype.click = function (t) {}),
              (e.prototype.keydown = function (e) {
                this.bubbleKey(), t.prototype.keydown.call(this, e);
              }),
              (e.prototype.escape = function (t) {
                this.unpost();
              }),
              (e.prototype.unpost = function () {
                t.prototype.unpost.call(this),
                  this.html.classList.remove(s.HtmlClasses.MOUSEPOST),
                  this.menu.unregisterWidget(this);
              }),
              (e.prototype.generateClose = function () {
                var t = new r.CloseButton(this),
                  e = t.html;
                return (
                  e.classList.add(s.HtmlClasses.INFOCLOSE),
                  e.setAttribute("aria-label", "Close Dialog Box"),
                  t
                );
              }),
              (e.prototype.generateTitle = function () {
                var t = document.createElement("span");
                return (
                  (t.innerHTML = this.title),
                  t.classList.add(s.HtmlClasses.INFOTITLE),
                  t
                );
              }),
              (e.prototype.generateContent = function () {
                var t = document.createElement("div");
                return (
                  t.classList.add(s.HtmlClasses.INFOCONTENT),
                  t.setAttribute("tabindex", "0"),
                  t
                );
              }),
              (e.prototype.generateSignature = function () {
                var t = document.createElement("span");
                return (
                  (t.innerHTML = this.signature),
                  t.classList.add(s.HtmlClasses.INFOSIGNATURE),
                  t
                );
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(n(757).AbstractPostable);
        e.Info = a;
      },
      177: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Checkbox = void 0);
        var r = n(467),
          s = n(865),
          a = n(698),
          u = (function (t) {
            function e(e, n, o, i) {
              var r = t.call(this, e, "checkbox", n, i) || this;
              return (
                (r.role = "menuitemcheckbox"),
                (r.variable = e.pool.lookup(o)),
                r.register(),
                r
              );
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                return new this(n, e.content, e.variable, e.id);
              }),
              (e.prototype.executeAction = function () {
                this.variable.setValue(!this.variable.getValue()),
                  s.MenuUtil.close(this);
              }),
              (e.prototype.generateSpan = function () {
                (this.span = document.createElement("span")),
                  (this.span.textContent = "\u2713"),
                  this.span.classList.add(a.HtmlClasses.MENUCHECK);
              }),
              (e.prototype.updateAria = function () {
                this.html.setAttribute(
                  "aria-checked",
                  this.variable.getValue() ? "true" : "false"
                );
              }),
              (e.prototype.updateSpan = function () {
                this.span.style.display = this.variable.getValue()
                  ? ""
                  : "none";
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(r.AbstractVariableItem);
        e.Checkbox = u;
      },
      253: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Combo = void 0);
        var r = n(467),
          s = n(865),
          a = n(698),
          u = n(635),
          l = (function (t) {
            function e(e, n, o, i) {
              var r = t.call(this, e, "combobox", n, i) || this;
              return (
                (r.role = "combobox"),
                (r.inputEvent = !1),
                (r.variable = e.pool.lookup(o)),
                r.register(),
                r
              );
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                return new this(n, e.content, e.variable, e.id);
              }),
              (e.prototype.executeAction = function () {
                this.variable.setValue(
                  this.input.value,
                  s.MenuUtil.getActiveElement(this)
                );
              }),
              (e.prototype.space = function (e) {
                t.prototype.space.call(this, e), s.MenuUtil.close(this);
              }),
              (e.prototype.focus = function () {
                t.prototype.focus.call(this), this.input.focus();
              }),
              (e.prototype.unfocus = function () {
                t.prototype.unfocus.call(this), this.updateSpan();
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this),
                  this.html.classList.add(a.HtmlClasses.MENUCOMBOBOX);
              }),
              (e.prototype.generateSpan = function () {
                (this.span = document.createElement("span")),
                  this.span.classList.add(a.HtmlClasses.MENUINPUTBOX),
                  (this.input = document.createElement("input")),
                  this.input.addEventListener(
                    "keydown",
                    this.inputKey.bind(this)
                  ),
                  this.input.setAttribute("size", "10em"),
                  this.input.setAttribute("type", "text"),
                  this.input.setAttribute("tabindex", "-1"),
                  this.span.appendChild(this.input);
              }),
              (e.prototype.inputKey = function (t) {
                this.bubbleKey(), (this.inputEvent = !0);
              }),
              (e.prototype.keydown = function (e) {
                if (
                  this.inputEvent &&
                  e.keyCode !== u.KEY.ESCAPE &&
                  e.keyCode !== u.KEY.RETURN
                )
                  return (this.inputEvent = !1), void e.stopPropagation();
                t.prototype.keydown.call(this, e), e.stopPropagation();
              }),
              (e.prototype.updateAria = function () {}),
              (e.prototype.updateSpan = function () {
                var t;
                try {
                  t = this.variable.getValue(s.MenuUtil.getActiveElement(this));
                } catch (e) {
                  t = "";
                }
                this.input.value = t;
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(r.AbstractVariableItem);
        e.Combo = l;
      },
      665: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Command = void 0);
        var r = n(341),
          s = n(865),
          a = (function (t) {
            function e(e, n, o, i) {
              var r = t.call(this, e, "command", n, i) || this;
              return (r.command = o), r;
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                return new this(n, e.content, e.action, e.id);
              }),
              (e.prototype.executeAction = function () {
                try {
                  this.command(s.MenuUtil.getActiveElement(this));
                } catch (t) {
                  s.MenuUtil.error(t, "Illegal command callback.");
                }
                s.MenuUtil.close(this);
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(r.AbstractItem);
        e.Command = a;
      },
      233: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Label = void 0);
        var r = n(341),
          s = n(698),
          a = (function (t) {
            function e(e, n, o) {
              return t.call(this, e, "label", n, o) || this;
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                return new this(n, e.content, e.id);
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this),
                  this.html.classList.add(s.HtmlClasses.MENULABEL);
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(r.AbstractItem);
        e.Label = a;
      },
      348: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Radio = void 0);
        var r = n(467),
          s = n(865),
          a = n(698),
          u = (function (t) {
            function e(e, n, o, i) {
              var r = t.call(this, e, "radio", n, i) || this;
              return (
                (r.role = "menuitemradio"),
                (r.variable = e.pool.lookup(o)),
                r.register(),
                r
              );
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                return new this(n, e.content, e.variable, e.id);
              }),
              (e.prototype.executeAction = function () {
                this.variable.setValue(this.id), s.MenuUtil.close(this);
              }),
              (e.prototype.generateSpan = function () {
                (this.span = document.createElement("span")),
                  (this.span.textContent = "\u2713"),
                  this.span.classList.add(a.HtmlClasses.MENURADIOCHECK);
              }),
              (e.prototype.updateAria = function () {
                this.html.setAttribute(
                  "aria-checked",
                  this.variable.getValue() === this.id ? "true" : "false"
                );
              }),
              (e.prototype.updateSpan = function () {
                this.span.style.display =
                  this.variable.getValue() === this.id ? "" : "none";
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(r.AbstractVariableItem);
        e.Radio = u;
      },
      156: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Rule = void 0);
        var r = n(612),
          s = n(698),
          a = (function (t) {
            function e(e) {
              var n = t.call(this, e, "rule") || this;
              return (
                (n.className = s.HtmlClasses.MENUITEM),
                (n.role = "separator"),
                n
              );
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                return new this(n);
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this);
                var e = this.html;
                e.classList.add(s.HtmlClasses.MENURULE),
                  e.setAttribute("aria-orientation", "vertical");
              }),
              (e.prototype.addEvents = function (t) {}),
              (e.prototype.toJson = function () {
                return { type: "rule" };
              }),
              e
            );
          })(r.AbstractEntry);
        e.Rule = a;
      },
      129: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Slider = void 0);
        var r = n(467),
          s = n(865),
          a = n(698),
          u = n(635),
          l = (function (t) {
            function e(e, n, o, i) {
              var r = t.call(this, e, "slider", n, i) || this;
              return (
                (r.role = "slider"),
                (r.labelId = "ctx_slideLabel" + s.MenuUtil.counter()),
                (r.valueId = "ctx_slideValue" + s.MenuUtil.counter()),
                (r.inputEvent = !1),
                (r.variable = e.pool.lookup(o)),
                r.register(),
                r
              );
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                return new this(n, e.content, e.variable, e.id);
              }),
              (e.prototype.executeAction = function () {
                this.variable.setValue(
                  this.input.value,
                  s.MenuUtil.getActiveElement(this)
                ),
                  this.update();
              }),
              (e.prototype.space = function (e) {
                t.prototype.space.call(this, e), s.MenuUtil.close(this);
              }),
              (e.prototype.focus = function () {
                t.prototype.focus.call(this), this.input.focus();
              }),
              (e.prototype.unfocus = function () {
                t.prototype.unfocus.call(this), this.updateSpan();
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this),
                  this.html.classList.add(a.HtmlClasses.MENUSLIDER),
                  (this.valueSpan = document.createElement("span")),
                  this.valueSpan.setAttribute("id", this.valueId),
                  this.valueSpan.classList.add(a.HtmlClasses.SLIDERVALUE),
                  this.html.appendChild(this.valueSpan);
              }),
              (e.prototype.generateSpan = function () {
                (this.span = document.createElement("span")),
                  (this.labelSpan = document.createElement("span")),
                  this.labelSpan.setAttribute("id", this.labelId),
                  this.labelSpan.appendChild(this.html.childNodes[0]),
                  this.html.appendChild(this.labelSpan),
                  (this.input = document.createElement("input")),
                  this.input.setAttribute("type", "range"),
                  this.input.setAttribute("min", "0"),
                  this.input.setAttribute("max", "100"),
                  this.input.setAttribute("aria-valuemin", "0"),
                  this.input.setAttribute("aria-valuemax", "100"),
                  this.input.setAttribute("aria-labelledby", this.labelId),
                  this.input.addEventListener(
                    "keydown",
                    this.inputKey.bind(this)
                  ),
                  this.input.addEventListener(
                    "input",
                    this.executeAction.bind(this)
                  ),
                  this.input.classList.add(a.HtmlClasses.SLIDERBAR),
                  this.span.appendChild(this.input);
              }),
              (e.prototype.inputKey = function (t) {
                this.inputEvent = !0;
              }),
              (e.prototype.mousedown = function (t) {
                t.stopPropagation();
              }),
              (e.prototype.mouseup = function (t) {
                event.stopPropagation();
              }),
              (e.prototype.keydown = function (e) {
                var n = e.keyCode;
                return n === u.KEY.UP || n === u.KEY.DOWN
                  ? (e.preventDefault(), void t.prototype.keydown.call(this, e))
                  : this.inputEvent && n !== u.KEY.ESCAPE && n !== u.KEY.RETURN
                  ? ((this.inputEvent = !1), void e.stopPropagation())
                  : (t.prototype.keydown.call(this, e),
                    void e.stopPropagation());
              }),
              (e.prototype.updateAria = function () {
                var t = this.variable.getValue();
                t &&
                  this.input &&
                  (this.input.setAttribute("aria-valuenow", t),
                  this.input.setAttribute("aria-valuetext", t + "%"));
              }),
              (e.prototype.updateSpan = function () {
                var t;
                try {
                  (t = this.variable.getValue(
                    s.MenuUtil.getActiveElement(this)
                  )),
                    (this.valueSpan.innerHTML = t + "%");
                } catch (e) {
                  t = "";
                }
                this.input.value = t;
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(r.AbstractVariableItem);
        e.Slider = l;
      },
      745: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Submenu = void 0);
        var r = n(341),
          s = n(698),
          a = (function (t) {
            function e(e, n, o) {
              var i = t.call(this, e, "submenu", n, o) || this;
              return (i._submenu = null), i;
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                var o = e.content,
                  i = e.menu,
                  r = new this(n, o, e.id),
                  s = t.get("subMenu")(t, i, r);
                return (r.submenu = s), r;
              }),
              Object.defineProperty(e.prototype, "submenu", {
                get: function () {
                  return this._submenu;
                },
                set: function (t) {
                  this._submenu = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.mouseover = function (t) {
                this.focus(), this.stop(t);
              }),
              (e.prototype.mouseout = function (t) {
                this.stop(t);
              }),
              (e.prototype.unfocus = function () {
                if (this.submenu.isPosted()) {
                  if (this.menu.focused !== this)
                    return (
                      t.prototype.unfocus.call(this),
                      void this.menu.unpostSubmenus()
                    );
                  this.html.setAttribute("tabindex", "-1"), this.html.blur();
                } else t.prototype.unfocus.call(this);
              }),
              (e.prototype.focus = function () {
                t.prototype.focus.call(this),
                  this.submenu.isPosted() ||
                    this.disabled ||
                    this.submenu.post();
              }),
              (e.prototype.executeAction = function () {
                this.submenu.isPosted()
                  ? this.submenu.unpost()
                  : this.submenu.post();
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this);
                var e = this.html;
                (this.span = document.createElement("span")),
                  (this.span.textContent = "\u25ba"),
                  this.span.classList.add(s.HtmlClasses.MENUARROW),
                  e.appendChild(this.span),
                  e.setAttribute("aria-haspopup", "true");
              }),
              (e.prototype.left = function (e) {
                this.submenu.isPosted()
                  ? this.submenu.unpost()
                  : t.prototype.left.call(this, e);
              }),
              (e.prototype.right = function (t) {
                this.submenu.isPosted()
                  ? this.submenu.down(t)
                  : this.submenu.post();
              }),
              (e.prototype.toJson = function () {
                return { type: "" };
              }),
              e
            );
          })(r.AbstractItem);
        e.Submenu = a;
      },
      635: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.KEY = void 0),
          (function (t) {
            (t[(t.RETURN = 13)] = "RETURN"),
              (t[(t.ESCAPE = 27)] = "ESCAPE"),
              (t[(t.SPACE = 32)] = "SPACE"),
              (t[(t.LEFT = 37)] = "LEFT"),
              (t[(t.UP = 38)] = "UP"),
              (t[(t.RIGHT = 39)] = "RIGHT"),
              (t[(t.DOWN = 40)] = "DOWN");
          })(e.KEY || (e.KEY = {}));
      },
      943: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MenuElement = void 0);
        var r = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            i(e, t),
            (e.prototype.addAttributes = function (t) {
              for (var e in t) this.html.setAttribute(e, t[e]);
            }),
            Object.defineProperty(e.prototype, "html", {
              get: function () {
                return this._html || this.generateHtml(), this._html;
              },
              set: function (t) {
                (this._html = t), this.addEvents(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.generateHtml = function () {
              var t = document.createElement("div");
              t.classList.add(this.className),
                t.setAttribute("role", this.role),
                (this.html = t);
            }),
            (e.prototype.focus = function () {
              var t = this.html;
              t.setAttribute("tabindex", "0"), t.focus();
            }),
            (e.prototype.unfocus = function () {
              var t = this.html;
              t.hasAttribute("tabindex") && t.setAttribute("tabindex", "-1");
              try {
                t.blur();
              } catch (t) {}
              t.blur();
            }),
            e
          );
        })(n(817).AbstractNavigatable);
        e.MenuElement = r;
      },
      525: function (t, e, n) {
        var o =
          (this && this.__values) ||
          function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              n = e && t[e],
              o = 0;
            if (n) return n.call(t);
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
              e ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MenuStore = void 0);
        var i = n(865),
          r = n(698),
          s = n(635),
          a = (function () {
            function t(t) {
              (this.menu = t),
                (this.store = []),
                (this._active = null),
                (this.counter = 0),
                (this.attachedClass =
                  r.HtmlClasses.ATTACHED + "_" + i.MenuUtil.counter()),
                (this.taborder = !0),
                (this.attrMap = {});
            }
            return (
              Object.defineProperty(t.prototype, "active", {
                get: function () {
                  return this._active;
                },
                set: function (t) {
                  do {
                    if (-1 !== this.store.indexOf(t)) {
                      this._active = t;
                      break;
                    }
                    t = t.parentNode;
                  } while (t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.next = function () {
                var t = this.store.length;
                if (0 === t) return (this.active = null), null;
                var e = this.store.indexOf(this.active);
                return (
                  (e = -1 === e ? 0 : e < t - 1 ? e + 1 : 0),
                  (this.active = this.store[e]),
                  this.active
                );
              }),
              (t.prototype.previous = function () {
                var t = this.store.length;
                if (0 === t) return (this.active = null), null;
                var e = t - 1,
                  n = this.store.indexOf(this.active);
                return (
                  (n = -1 === n || 0 === n ? e : n - 1),
                  (this.active = this.store[n]),
                  this.active
                );
              }),
              (t.prototype.clear = function () {
                this.remove(this.store);
              }),
              (t.prototype.insert = function (t) {
                var e,
                  n,
                  i = t instanceof HTMLElement ? [t] : t;
                try {
                  for (var r = o(i), s = r.next(); !s.done; s = r.next()) {
                    var a = s.value;
                    this.insertElement(a);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.sort();
              }),
              (t.prototype.remove = function (t) {
                var e,
                  n,
                  i = t instanceof HTMLElement ? [t] : t;
                try {
                  for (var r = o(i), s = r.next(); !s.done; s = r.next()) {
                    var a = s.value;
                    this.removeElement(a);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.sort();
              }),
              (t.prototype.inTaborder = function (t) {
                this.taborder && !t && this.removeTaborder(),
                  !this.taborder && t && this.insertTaborder(),
                  (this.taborder = t);
              }),
              (t.prototype.insertTaborder = function () {
                this.taborder && this.insertTaborder_();
              }),
              (t.prototype.removeTaborder = function () {
                this.taborder && this.removeTaborder_();
              }),
              (t.prototype.insertElement = function (t) {
                t.classList.contains(this.attachedClass) ||
                  (t.classList.add(this.attachedClass),
                  this.taborder && this.addTabindex(t),
                  this.addEvents(t));
              }),
              (t.prototype.removeElement = function (t) {
                t.classList.contains(this.attachedClass) &&
                  (t.classList.remove(this.attachedClass),
                  this.taborder && this.removeTabindex(t),
                  this.removeEvents(t));
              }),
              (t.prototype.sort = function () {
                var t = document.getElementsByClassName(this.attachedClass);
                this.store = [].slice.call(t);
              }),
              (t.prototype.insertTaborder_ = function () {
                this.store.forEach(function (t) {
                  return t.setAttribute("tabindex", "0");
                });
              }),
              (t.prototype.removeTaborder_ = function () {
                this.store.forEach(function (t) {
                  return t.setAttribute("tabindex", "-1");
                });
              }),
              (t.prototype.addTabindex = function (t) {
                t.hasAttribute("tabindex") &&
                  t.setAttribute(
                    r.HtmlAttrs.OLDTAB,
                    t.getAttribute("tabindex")
                  ),
                  t.setAttribute("tabindex", "0");
              }),
              (t.prototype.removeTabindex = function (t) {
                t.hasAttribute(r.HtmlAttrs.OLDTAB)
                  ? (t.setAttribute(
                      "tabindex",
                      t.getAttribute(r.HtmlAttrs.OLDTAB)
                    ),
                    t.removeAttribute(r.HtmlAttrs.OLDTAB))
                  : t.removeAttribute("tabindex");
              }),
              (t.prototype.addEvents = function (t) {
                t.hasAttribute(r.HtmlAttrs.COUNTER) ||
                  (this.addEvent(
                    t,
                    "contextmenu",
                    this.menu.post.bind(this.menu)
                  ),
                  this.addEvent(t, "keydown", this.keydown.bind(this)),
                  t.setAttribute(r.HtmlAttrs.COUNTER, this.counter.toString()),
                  this.counter++);
              }),
              (t.prototype.addEvent = function (t, e, n) {
                var o = r.HtmlAttrs[e.toUpperCase() + "FUNC"];
                (this.attrMap[o + this.counter] = n), t.addEventListener(e, n);
              }),
              (t.prototype.removeEvents = function (t) {
                if (t.hasAttribute(r.HtmlAttrs.COUNTER)) {
                  var e = t.getAttribute(r.HtmlAttrs.COUNTER);
                  this.removeEvent(t, "contextmenu", e),
                    this.removeEvent(t, "keydown", e),
                    t.removeAttribute(r.HtmlAttrs.COUNTER);
                }
              }),
              (t.prototype.removeEvent = function (t, e, n) {
                var o = r.HtmlAttrs[e.toUpperCase() + "FUNC"],
                  i = this.attrMap[o + n];
                t.removeEventListener(e, i);
              }),
              (t.prototype.keydown = function (t) {
                t.keyCode === s.KEY.SPACE &&
                  (this.menu.post(t),
                  t.preventDefault(),
                  t.stopImmediatePropagation());
              }),
              t
            );
          })();
        e.MenuStore = a;
      },
      865: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MenuUtil = void 0),
          (function (t) {
            (t.close = function (t) {
              var e = t.menu;
              e.baseMenu ? e.baseMenu.unpost() : e.unpost();
            }),
              (t.getActiveElement = function (t) {
                var e = t.menu;
                return (e.baseMenu ? e.baseMenu : e).store.active;
              }),
              (t.error = function (t, e) {
                console.error("ContextMenu Error: " + e);
              }),
              (t.counter = function () {
                return e++;
              });
            var e = 0;
          })(e.MenuUtil || (e.MenuUtil = {}));
      },
      674: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MOUSE = void 0),
          (e.MOUSE = {
            CLICK: "click",
            DBLCLICK: "dblclick",
            DOWN: "mousedown",
            UP: "mouseup",
            OVER: "mouseover",
            OUT: "mouseout",
            MOVE: "mousemove",
            SELECTEND: "selectend",
            SELECTSTART: "selectstart",
          });
      },
      258: function (t, e, n) {
        var o =
            (this && this.__rest) ||
            function (t, e) {
              var n = {};
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) &&
                  e.indexOf(o) < 0 &&
                  (n[o] = t[o]);
              if (
                null != t &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var i = 0;
                for (o = Object.getOwnPropertySymbols(t); i < o.length; i++)
                  e.indexOf(o[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, o[i]) &&
                    (n[o[i]] = t[o[i]]);
              }
              return n;
            },
          i =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var o,
                i,
                r = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                  s.push(o.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (i) throw i.error;
                }
              }
              return s;
            },
          r =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                o = 0;
              if (n) return n.call(t);
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
            (this && this.__spread) ||
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(i(arguments[e]));
              return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Parser = void 0);
        var a = n(665),
          u = n(964),
          l = n(842),
          c = n(177),
          p = n(253),
          h = n(233),
          d = n(348),
          f = n(745),
          m = n(156),
          y = n(129),
          b = n(42),
          v = n(365),
          g = n(534),
          x = (function () {
            function t(t) {
              var e = this;
              void 0 === t && (t = []),
                (this._initList = [
                  ["command", a.Command.fromJson.bind(a.Command)],
                  ["checkbox", c.Checkbox.fromJson.bind(c.Checkbox)],
                  ["combo", p.Combo.fromJson.bind(p.Combo)],
                  ["slider", y.Slider.fromJson.bind(y.Slider)],
                  ["label", h.Label.fromJson.bind(h.Label)],
                  ["radio", d.Radio.fromJson.bind(d.Radio)],
                  ["rule", m.Rule.fromJson.bind(m.Rule)],
                  ["submenu", f.Submenu.fromJson.bind(f.Submenu)],
                  ["contextMenu", u.ContextMenu.fromJson.bind(u.ContextMenu)],
                  ["subMenu", b.SubMenu.fromJson.bind(b.SubMenu)],
                  ["variable", l.Variable.fromJson.bind(l.Variable)],
                  ["items", this.items.bind(this)],
                  [
                    "selectionMenu",
                    v.SelectionMenu.fromJson.bind(v.SelectionMenu),
                  ],
                  [
                    "selectionBox",
                    v.SelectionBox.fromJson.bind(v.SelectionBox),
                  ],
                ]),
                (this._factory = new g.ParserFactory(this._initList)),
                t.forEach(function (t) {
                  var n = i(t, 2),
                    o = n[0],
                    r = n[1];
                  return e.factory.add(o, r);
                });
            }
            return (
              Object.defineProperty(t.prototype, "factory", {
                get: function () {
                  return this._factory;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.items = function (t, e, n) {
                var o,
                  i,
                  s = [];
                try {
                  for (var a = r(e), u = a.next(); !u.done; u = a.next()) {
                    var l = u.value,
                      c = this.parse(l, n);
                    c &&
                      (n.items.push(c),
                      l.disabled && c.disable(),
                      l.hidden && s.push(c));
                  }
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    u && !u.done && (i = a.return) && i.call(a);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                return (
                  s.forEach(function (t) {
                    return t.hide();
                  }),
                  n.items
                );
              }),
              (t.prototype.parse = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n];
                var i = t.type,
                  r = o(t, ["type"]),
                  a = this.factory.get(i);
                return a ? a.apply(void 0, s([this.factory, r], e)) : null;
              }),
              t
            );
          })();
        e.Parser = x;
      },
      534: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ParserFactory = void 0);
        var n = (function () {
          function t(t) {
            this._parser = new Map(t);
          }
          return (
            (t.prototype.get = function (t) {
              return this._parser.get(t);
            }),
            (t.prototype.add = function (t, e) {
              this._parser.set(t, e);
            }),
            t
          );
        })();
        e.ParserFactory = n;
      },
      365: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          r =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var o,
                i,
                r = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                  s.push(o.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (i) throw i.error;
                }
              }
              return s;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SelectionBox = e.SelectionMenu = void 0);
        var s = n(865),
          a = n(698),
          u = n(585),
          l = n(932),
          c = (function (t) {
            function e(e) {
              var n = t.call(this) || this;
              return (
                (n.anchor = e),
                (n.className = a.HtmlClasses.SELECTIONMENU),
                (n.variablePool = n.anchor.menu.pool),
                (n.baseMenu = n.anchor.menu),
                n
              );
            }
            return (
              i(e, t),
              (e.fromJson = function (t, e, n) {
                var o = e.title,
                  i = e.values,
                  r = e.variable,
                  s = new this(n),
                  a = t.get("label")(t, { content: o || "", id: o || "id" }, s),
                  u = t.get("rule")(t, {}, s),
                  l = i.map(function (e) {
                    return t.get("radio")(
                      t,
                      { content: e, variable: r, id: e },
                      s
                    );
                  }),
                  c = [a, u].concat(l);
                return (s.items = c), s;
              }),
              (e.prototype.generateHtml = function () {
                t.prototype.generateHtml.call(this),
                  this.items.forEach(function (t) {
                    return t.html.classList.add(a.HtmlClasses.SELECTIONITEM);
                  });
              }),
              (e.prototype.display = function () {}),
              (e.prototype.right = function (t) {
                this.anchor.right(t);
              }),
              (e.prototype.left = function (t) {
                this.anchor.left(t);
              }),
              e
            );
          })(u.AbstractMenu);
        e.SelectionMenu = c;
        var p = (function (t) {
          function e(e, n, o, i) {
            void 0 === o && (o = "none"), void 0 === i && (i = "vertical");
            var r = t.call(this, e, null, n) || this;
            return (
              (r.style = o),
              (r.grid = i),
              (r._selections = []),
              (r.prefix = "ctxt-selection"),
              (r._balanced = !0),
              r
            );
          }
          return (
            i(e, t),
            (e.fromJson = function (t, e, n) {
              var o = e.title,
                i = e.signature,
                r = e.selections,
                s = new this(o, i, e.order, e.grid);
              s.attachMenu(n);
              var a = r.map(function (e) {
                return t.get("selectionMenu")(t, e, s);
              });
              return (s.selections = a), s;
            }),
            (e.prototype.attachMenu = function (t) {
              this.menu = t;
            }),
            Object.defineProperty(e.prototype, "selections", {
              get: function () {
                return this._selections;
              },
              set: function (t) {
                var e = this;
                (this._selections = []),
                  t.forEach(function (t) {
                    return e.addSelection(t);
                  });
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.addSelection = function (t) {
              (t.anchor = this), this._selections.push(t);
            }),
            (e.prototype.rowDiv = function (t) {
              var e = this,
                n = document.createElement("div");
              this.contentDiv.appendChild(n);
              var o = t.map(function (t) {
                  return (
                    n.appendChild(t.html),
                    t.html.id || (t.html.id = e.prefix + s.MenuUtil.counter()),
                    t.html.getBoundingClientRect()
                  );
                }),
                i = o.map(function (t) {
                  return t.width;
                }),
                r = i.reduce(function (t, e) {
                  return t + e;
                }, 0),
                u = o.reduce(function (t, e) {
                  return Math.max(t, e.height);
                }, 0);
              return (
                n.classList.add(a.HtmlClasses.SELECTIONDIVIDER),
                n.setAttribute("style", "height: " + u + "px;"),
                [n, r, u, i]
              );
            }),
            (e.prototype.display = function () {
              if (
                (t.prototype.display.call(this),
                this.order(),
                this.selections.length)
              ) {
                for (
                  var e = [],
                    n = 0,
                    o = [],
                    i = this.getChunkSize(this.selections.length),
                    s = function (t) {
                      var s = a.selections.slice(t, t + i),
                        u = r(a.rowDiv(s), 4),
                        l = u[0],
                        c = u[1],
                        p = u[2],
                        h = u[3];
                      e.push(l),
                        (n = Math.max(n, c)),
                        s.forEach(function (t) {
                          return (t.html.style.height = p + "px");
                        }),
                        (o = a.combineColumn(o, h));
                    },
                    a = this,
                    u = 0;
                  u < this.selections.length;
                  u += i
                )
                  s(u);
                this._balanced &&
                  (this.balanceColumn(e, o),
                  (n = o.reduce(function (t, e) {
                    return t + e;
                  }, 20))),
                  e.forEach(function (t) {
                    return (t.style.width = n + "px");
                  });
              }
            }),
            (e.prototype.getChunkSize = function (t) {
              switch (this.grid) {
                case "square":
                  return Math.floor(Math.sqrt(t));
                case "horizontal":
                  return Math.floor(t / e.chunkSize);
                case "vertical":
                default:
                  return e.chunkSize;
              }
            }),
            (e.prototype.balanceColumn = function (t, e) {
              t.forEach(function (t) {
                for (
                  var n = Array.from(t.children), o = 0, i = void 0;
                  (i = n[o]);
                  o++
                )
                  i.style.width = e[o] + "px";
              });
            }),
            (e.prototype.combineColumn = function (t, e) {
              for (var n = [], o = 0; t[o] || e[o]; ) {
                if (!t[o]) {
                  n = n.concat(e.slice(o));
                  break;
                }
                if (!e[o]) {
                  n = n.concat(t.slice(o));
                  break;
                }
                n.push(Math.max(t[o], e[o])), o++;
              }
              return n;
            }),
            (e.prototype.left = function (t) {
              var e = this;
              this.move(t, function (t) {
                return (0 === t ? e.selections.length : t) - 1;
              });
            }),
            (e.prototype.right = function (t) {
              var e = this;
              this.move(t, function (t) {
                return t === e.selections.length - 1 ? 0 : t + 1;
              });
            }),
            (e.prototype.generateHtml = function () {
              t.prototype.generateHtml.call(this),
                this.html.classList.add(a.HtmlClasses.SELECTION);
            }),
            (e.prototype.generateContent = function () {
              var e = t.prototype.generateContent.call(this);
              return (
                e.classList.add(a.HtmlClasses.SELECTIONBOX),
                e.removeAttribute("tabindex"),
                e
              );
            }),
            (e.prototype.findSelection = function (t) {
              var e = t.target,
                n = null;
              if (
                (e.id &&
                  (n = this.selections.find(function (t) {
                    return t.html.id === e.id;
                  })),
                !n)
              ) {
                var o = e.parentElement.id;
                n = this.selections.find(function (t) {
                  return t.html.id === o;
                });
              }
              return n;
            }),
            (e.prototype.move = function (t, e) {
              var n = this.findSelection(t);
              n.focused && n.focused.unfocus();
              var o = e(this.selections.indexOf(n));
              this.selections[o].focus();
            }),
            (e.prototype.order = function () {
              this.selections.sort(e.orderMethod.get(this.style));
            }),
            (e.prototype.toJson = function () {
              return { type: "" };
            }),
            (e.chunkSize = 4),
            (e.orderMethod = new Map([
              [
                "alphabetical",
                function (t, e) {
                  return t.items[0].content.localeCompare(e.items[0].content);
                },
              ],
              [
                "none",
                function (t, e) {
                  return 1;
                },
              ],
              [
                "decreasing",
                function (t, e) {
                  var n = t.items.length,
                    o = e.items.length;
                  return n < o ? 1 : o < n ? -1 : 0;
                },
              ],
              [
                "increasing",
                function (t, e) {
                  var n = t.items.length,
                    o = e.items.length;
                  return n < o ? -1 : o < n ? 1 : 0;
                },
              ],
            ])),
            e
          );
        })(l.Info);
        e.SelectionBox = p;
      },
      42: function (t, e, n) {
        var o,
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
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
            function (t, e) {
              function n() {
                this.constructor = t;
              }
              o(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SubMenu = void 0);
        var r = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n._anchor = e),
              (n.variablePool = n.anchor.menu.pool),
              n.setBaseMenu(),
              n
            );
          }
          return (
            i(e, t),
            (e.fromJson = function (t, e, n) {
              var o = e.items,
                i = new this(n),
                r = t.get("items")(t, o, i);
              return (i.items = r), i;
            }),
            Object.defineProperty(e.prototype, "anchor", {
              get: function () {
                return this._anchor;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.post = function () {
              if (this.anchor.menu.isPosted()) {
                for (
                  var e = this.anchor.html,
                    n = this.html,
                    o = this.baseMenu.frame,
                    i = e.offsetWidth,
                    r = i - 2,
                    s = 0;
                  e && e !== o;

                )
                  (r += e.offsetLeft), (s += e.offsetTop), (e = e.parentNode);
                r + n.offsetWidth > document.body.offsetWidth - 5 &&
                  (r = Math.max(5, r - i - n.offsetWidth + 6)),
                  t.prototype.post.call(this, r, s);
              }
            }),
            (e.prototype.display = function () {
              this.baseMenu.frame.appendChild(this.html);
            }),
            (e.prototype.setBaseMenu = function () {
              var t = this;
              do {
                t = t.anchor.menu;
              } while (t instanceof e);
              this.baseMenu = t;
            }),
            (e.prototype.left = function (t) {
              (this.focused = null), this.anchor.focus();
            }),
            (e.prototype.toJson = function () {
              return { type: "" };
            }),
            e
          );
        })(n(585).AbstractMenu);
        e.SubMenu = r;
      },
      842: function (t, e, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Variable = void 0);
        var o = n(865),
          i = (function () {
            function t(t, e, n) {
              (this._name = t),
                (this.getter = e),
                (this.setter = n),
                (this.items = []);
            }
            return (
              (t.fromJson = function (t, e, n) {
                var o = new this(e.name, e.getter, e.setter);
                n.insert(o);
              }),
              Object.defineProperty(t.prototype, "name", {
                get: function () {
                  return this._name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.getValue = function (t) {
                try {
                  return this.getter(t);
                } catch (t) {
                  return (
                    o.MenuUtil.error(
                      t,
                      "Command of variable " + this.name + " failed."
                    ),
                    null
                  );
                }
              }),
              (t.prototype.setValue = function (t, e) {
                try {
                  this.setter(t, e);
                } catch (t) {
                  o.MenuUtil.error(
                    t,
                    "Command of variable " + this.name + " failed."
                  );
                }
                this.update();
              }),
              (t.prototype.register = function (t) {
                -1 === this.items.indexOf(t) && this.items.push(t);
              }),
              (t.prototype.unregister = function (t) {
                var e = this.items.indexOf(t);
                -1 !== e && this.items.splice(e, 1);
              }),
              (t.prototype.update = function () {
                this.items.forEach(function (t) {
                  return t.update();
                });
              }),
              (t.prototype.registerCallback = function (t) {
                this.items.forEach(function (e) {
                  return e.registerCallback(t);
                });
              }),
              (t.prototype.unregisterCallback = function (t) {
                this.items.forEach(function (e) {
                  return e.unregisterCallback(t);
                });
              }),
              (t.prototype.toJson = function () {
                return {
                  type: "variable",
                  name: this.name,
                  getter: this.getter.toString(),
                  setter: this.setter.toString(),
                };
              }),
              t
            );
          })();
        e.Variable = i;
      },
      79: function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.VariablePool = void 0);
        var n = (function () {
          function t() {
            this.pool = {};
          }
          return (
            (t.prototype.insert = function (t) {
              this.pool[t.name] = t;
            }),
            (t.prototype.lookup = function (t) {
              return this.pool[t];
            }),
            (t.prototype.remove = function (t) {
              delete this.pool[t];
            }),
            (t.prototype.update = function () {
              for (var t in this.pool) this.pool[t].update();
            }),
            t
          );
        })();
        e.VariablePool = n;
      },
    },
    a = {};
  function u(t) {
    var e = a[t];
    if (void 0 !== e) return e.exports;
    var n = (a[t] = { exports: {} });
    return s[t].call(n.exports, n, n.exports, u), n.exports;
  }
  (t = u(723)),
    (e = u(21)),
    (n = u(62)),
    (o = u(3)),
    (i = u(232)),
    (r = u(309)),
    (0, t.combineWithMathJax)({
      _: {
        ui: {
          menu: {
            MJContextMenu: e,
            Menu: n,
            MenuHandler: o,
            MmlVisitor: i,
            SelectableInfo: r,
          },
        },
      },
    }),
    MathJax.startup &&
      "undefined" != typeof window &&
      MathJax.startup.extendHandler(function (t) {
        return (0, o.MenuHandler)(t);
      }, 20);
})();

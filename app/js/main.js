"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

if (!function (h, d, p) {
  function o(e, t) {
    return _typeof(e) === t;
  }

  function a(e) {
    var t,
        n = y.className,
        i = u._config.classPrefix || "";
    w && (n = n.baseVal), u._config.enableJSClass && (t = new RegExp("(^|\\s)" + i + "no-js(\\s|$)"), n = n.replace(t, "$1" + i + "js$2")), u._config.enableClasses && (n += " " + i + e.join(" " + i), w ? y.className.baseVal = n : y.className = n);
  }

  function f(e, t, n) {
    var i, s;
    return "getComputedStyle" in h ? (i = getComputedStyle.call(h, e, t), s = h.console, null !== i ? n && (i = i.getPropertyValue(n)) : s && s[s.error ? "error" : "log"].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")) : i = !t && e.currentStyle && e.currentStyle[n], i;
  }

  function m(e) {
    return "function" != typeof d.createElement ? d.createElement(e) : w ? d.createElementNS.call(d, "http://www.w3.org/2000/svg", e) : d.createElement.apply(d, arguments);
  }

  function g(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function r(e, t) {
    if ("object" == _typeof(e)) for (var n in e) {
      _(e, n) && r(n, e[n]);
    } else {
      var i = (e = e.toLowerCase()).split("."),
          s = u[i[0]];
      if (void 0 !== (s = 2 == i.length ? s[i[1]] : s)) return u;
      t = "function" == typeof t ? t() : t, 1 == i.length ? u[i[0]] = t : (!u[i[0]] || u[i[0]] instanceof Boolean || (u[i[0]] = new Boolean(u[i[0]])), u[i[0]][i[1]] = t), a([(t && 0 != t ? "" : "no-") + i.join("-")]), u._trigger(e, t);
    }
    return u;
  }

  function v(e, t, n, i) {
    var s,
        a,
        r,
        o = "modernizr",
        l = m("div"),
        c = ((r = d.body) || ((r = m(w ? "svg" : "body")).fake = !0), r);
    if (parseInt(n, 10)) for (; n--;) {
      (s = m("div")).id = i ? i[n] : o + (n + 1), l.appendChild(s);
    }
    return (r = m("style")).type = "text/css", r.id = "s" + o, (c.fake ? c : l).appendChild(r), c.appendChild(l), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(d.createTextNode(e)), l.id = o, c.fake && (c.style.background = "", c.style.overflow = "hidden", a = y.style.overflow, y.style.overflow = "hidden", y.appendChild(c)), e = t(l, e), c.fake ? (c.parentNode.removeChild(c), y.style.overflow = a, y.offsetHeight) : l.parentNode.removeChild(l), !!e;
  }

  function b(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function i(e, t, n, i, s) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + k.join(a + " ") + a).split(" ");
    return o(t, "string") || void 0 === t ? function (e, t, n, i) {
      function s() {
        r && (delete P.style, delete P.modElem);
      }

      if (i = void 0 !== i && i, void 0 !== n) {
        var a = function (e, t) {
          var n = e.length;

          if ("CSS" in h && "supports" in h.CSS) {
            for (; n--;) {
              if (h.CSS.supports(b(e[n]), t)) return !0;
            }

            return !1;
          }

          if ("CSSSupportsRule" in h) {
            for (var i = []; n--;) {
              i.push("(" + b(e[n]) + ":" + t + ")");
            }

            return v("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function (e) {
              return "absolute" == f(e, null, "position");
            });
          }

          return p;
        }(e, n);

        if (void 0 !== a) return a;
      }

      for (var r, o, l, c, d, u = ["modernizr", "tspan", "samp"]; !P.style && u.length;) {
        r = !0, P.modElem = m(u.shift()), P.style = P.modElem.style;
      }

      for (l = e.length, o = 0; o < l; o++) {
        if (c = e[o], d = P.style[c], ~("" + c).indexOf("-") && (c = g(c)), P.style[c] !== p) {
          if (i || void 0 === n) return s(), "pfx" != t || c;

          try {
            P.style[c] = n;
          } catch (e) {}

          if (P.style[c] != d) return s(), "pfx" != t || c;
        }
      }

      return s(), !1;
    }(r, t, i, s) : function (e, t, n) {
      var i, s;

      for (s in e) {
        if (e[s] in t) return !1 === n ? e[s] : (i = t[e[s]], o(i, "function") ? function (e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }(i, n || t) : i);
      }

      return !1;
    }(r = (e + " " + $.join(a + " ") + a).split(" "), t, n);
  }

  function e(e, t, n) {
    return i(e, p, p, t, n);
  }

  var l = [],
      c = [],
      t = {
    _version: "3.5.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      c.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      c.push({
        name: null,
        fn: e
      });
    }
  },
      u = function u() {};

  u.prototype = t, (u = new u()).addTest("svg", !!d.createElementNS && !!d.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var y = d.documentElement,
      w = "svg" === y.nodeName.toLowerCase(),
      x = t._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  t._prefixes = x;
  var n = {}.toString;
  u.addTest("svgclippaths", function () {
    return !!d.createElementNS && /SVGClipPath/.test(n.call(d.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
  }), u.addTest("inlinesvg", function () {
    var e = m("div");
    return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI);
  });

  var s,
      _,
      C,
      T = (s = !("onblur" in d.documentElement), function (e, t) {
    var n;
    return !!e && (!(n = (e = "on" + e) in (t = t && "string" != typeof t ? t : m(t || "div"))) && s && ((t = t.setAttribute ? t : m("div")).setAttribute(e, ""), n = "function" == typeof t[e], t[e] !== p && (t[e] = p), t.removeAttribute(e)), n);
  });

  t.hasEvent = T, _ = void 0 === (C = {}.hasOwnProperty) || void 0 === C.call ? function (e, t) {
    return t in e && void 0 === e.constructor.prototype[t];
  } : function (e, t) {
    return C.call(e, t);
  }, t._l = {}, t.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), u.hasOwnProperty(e) && setTimeout(function () {
      u._trigger(e, u[e]);
    }, 0);
  }, t._trigger = function (e, t) {
    var n;
    this._l[e] && (n = this._l[e], setTimeout(function () {
      for (var e = 0; e < n.length; e++) {
        (0, n[e])(t);
      }
    }, 0), delete this._l[e]);
  }, u._q.push(function () {
    t.addTest = r;
  }), u.addTest("svgasimg", d.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
  var E = t.testStyles = v;
  u.addTest("hiddenscroll", function () {
    return E("#modernizr {width:100px;height:100px;overflow:scroll}", function (e) {
      return e.offsetWidth === e.clientWidth;
    });
  }), u.addTest("touchevents", function () {
    var t, e;
    return "ontouchstart" in h || h.DocumentTouch && d instanceof DocumentTouch ? t = !0 : (e = ["@media (", x.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join(""), E(e, function (e) {
      t = 9 === e.offsetTop;
    })), t;
  }), E("#modernizr { height: 50vh; }", function (e) {
    var t = parseInt(h.innerHeight / 2, 10),
        e = parseInt(f(e, null, "height"), 10);
    u.addTest("cssvhunit", e == t);
  });
  var S = "Moz O ms Webkit",
      k = t._config.usePrefixes ? S.split(" ") : [];

  function M(e) {
    var t,
        n = x.length,
        i = h.CSSRule;
    if (void 0 === i) return p;
    if (!e) return !1;
    if ((t = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + e;

    for (var s = 0; s < n; s++) {
      var a = x[s];
      if (a.toUpperCase() + "_" + t in i) return "@-" + a.toLowerCase() + "-" + e;
    }

    return !1;
  }

  t._cssomPrefixes = k, t.atRule = M;
  var $ = t._config.usePrefixes ? S.toLowerCase().split(" ") : [];
  t._domPrefixes = $;
  var D = {
    elem: m("modernizr")
  };

  u._q.push(function () {
    delete D.elem;
  });

  var P = {
    style: D.elem.style
  };
  u._q.unshift(function () {
    delete P.style;
  }), t.testAllProps = i;

  var L = t.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@") ? M(e) : (-1 != e.indexOf("-") && (e = g(e)), t ? i(e, t, n) : i(e, "pfx"));
  };

  u.addTest("forcetouch", function () {
    return !!T(L("mouseforcewillbegin", h, !1), h) && MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
  }), t.testAllProps = e, u.addTest("backgroundcliptext", function () {
    return e("backgroundClip", "text");
  }), u.addTest("backgroundsize", e("backgroundSize", "100%", !0)), u.addTest("bgsizecover", e("backgroundSize", "cover")), function () {
    var e, t, n, i, s, a, r;

    for (r in c) {
      if (c.hasOwnProperty(r)) {
        if (e = [], (t = c[r]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (i = o(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) {
          1 === (a = e[s].split(".")).length ? u[a[0]] = i : (!u[a[0]] || u[a[0]] instanceof Boolean || (u[a[0]] = new Boolean(u[a[0]])), u[a[0]][a[1]] = i), l.push((i ? "" : "no-") + a.join("-"));
        }
      }
    }
  }(), a(l), delete t.addTest, delete t.addAsyncTest;

  for (var A = 0; A < u._q.length; A++) {
    u._q[A]();
  }

  h.Modernizr = u;
}(window, document), function (e, t) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (x, e) {
  function t(e, t) {
    return t.toUpperCase();
  }

  var n = [],
      _ = x.document,
      d = n.slice,
      m = n.concat,
      o = n.push,
      s = n.indexOf,
      i = {},
      a = i.toString,
      f = i.hasOwnProperty,
      g = {},
      C = function C(e, t) {
    return new C.fn.init(e, t);
  },
      r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      l = /^-ms-/,
      c = /-([\da-z])/gi;

  function u(e) {
    var t = !!e && "length" in e && e.length,
        n = C.type(e);
    return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  C.fn = C.prototype = {
    jquery: "2.2.4",
    constructor: C,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return d.call(this);
    },
    get: function get(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : d.call(this);
    },
    pushStack: function pushStack(e) {
      return (e = C.merge(this.constructor(), e)).prevObject = this, e.context = this.context, e;
    },
    each: function each(e) {
      return C.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(C.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          e = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= e && e < t ? [this[e]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: o,
    sort: n.sort,
    splice: n.splice
  }, C.extend = C.fn.extend = function () {
    var e,
        t,
        n,
        i,
        s,
        a = arguments[0] || {},
        r = 1,
        o = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[r] || {}, r++), "object" == _typeof(a) || C.isFunction(a) || (a = {}), r === o && (a = this, r--); r < o; r++) {
      if (null != (e = arguments[r])) for (t in e) {
        s = a[t], n = e[t], a !== n && (l && n && (C.isPlainObject(n) || (i = C.isArray(n))) ? (s = i ? (i = !1, s && C.isArray(s) ? s : []) : s && C.isPlainObject(s) ? s : {}, a[t] = C.extend(l, s, n)) : void 0 !== n && (a[t] = n));
      }
    }

    return a;
  }, C.extend({
    expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isFunction: function isFunction(e) {
      return "function" === C.type(e);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(e) {
      return null != e && e === e.window;
    },
    isNumeric: function isNumeric(e) {
      var t = e && e.toString();
      return !C.isArray(e) && 0 <= t - parseFloat(t) + 1;
    },
    isPlainObject: function isPlainObject(e) {
      if ("object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
      if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;

      for (var t in e) {
        ;
      }

      return void 0 === t || f.call(e, t);
    },
    isEmptyObject: function isEmptyObject(e) {
      for (var t in e) {
        return !1;
      }

      return !0;
    },
    type: function type(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? i[a.call(e)] || "object" : _typeof(e);
    },
    globalEval: function globalEval(e) {
      var t,
          n = eval;
      (e = C.trim(e)) && (1 === e.indexOf("use strict") ? ((t = _.createElement("script")).text = e, _.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function camelCase(e) {
      return e.replace(l, "ms-").replace(c, t);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t) {
      var n,
          i = 0;
      if (u(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {
        ;
      } else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }
      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(r, "");
    },
    makeArray: function makeArray(e, t) {
      return t = t || [], null != e && (u(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : o.call(t, e)), t;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : s.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, i = 0, s = e.length; i < n; i++) {
        e[s++] = t[i];
      }

      return e.length = s, e;
    },
    grep: function grep(e, t, n) {
      for (var i = [], s = 0, a = e.length, r = !n; s < a; s++) {
        !t(e[s], s) != r && i.push(e[s]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var i,
          s,
          a = 0,
          r = [];
      if (u(e)) for (i = e.length; a < i; a++) {
        null != (s = t(e[a], a, n)) && r.push(s);
      } else for (a in e) {
        s = t(e[a], a, n), null != s && r.push(s);
      }
      return m.apply([], r);
    },
    guid: 1,
    proxy: function proxy(e, t) {
      var n, i;
      return "string" == typeof t && (i = e[t], t = e, e = i), C.isFunction(e) ? (n = d.call(arguments, 2), (i = function i() {
        return e.apply(t || this, n.concat(d.call(arguments)));
      }).guid = e.guid = e.guid || C.guid++, i) : void 0;
    },
    now: Date.now,
    support: g
  }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = n[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    i["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    function u(e, t, n) {
      var i = "0x" + t - 65536;
      return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    }

    function t() {
      C();
    }

    function w(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    }

    var e,
        f,
        x,
        a,
        i,
        m,
        h,
        g,
        _,
        l,
        c,
        C,
        T,
        s,
        E,
        v,
        r,
        o,
        b,
        S = "sizzle" + +new Date(),
        y = n.document,
        k = 0,
        d = 0,
        p = se(),
        M = se(),
        $ = se(),
        D = function D(e, t) {
      return e === t && (c = !0), 0;
    },
        P = {}.hasOwnProperty,
        L = [],
        A = L.pop,
        O = L.push,
        I = L.push,
        N = L.slice,
        z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        j = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        F = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
        q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        R = new RegExp(j + "+", "g"),
        V = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
        B = new RegExp("^" + j + "*," + j + "*"),
        U = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
        W = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
        Y = new RegExp(q),
        X = new RegExp("^" + H + "$"),
        G = {
      ID: new RegExp("^#(" + H + ")"),
      CLASS: new RegExp("^\\.(" + H + ")"),
      TAG: new RegExp("^(" + H + "|[*])"),
      ATTR: new RegExp("^" + F),
      PSEUDO: new RegExp("^" + q),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + z + ")$", "i"),
      needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
    },
        Z = /^(?:input|select|textarea|button)$/i,
        K = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = /'|\\/g,
        ne = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig");

    try {
      I.apply(L = N.call(y.childNodes), y.childNodes), L[y.childNodes.length].nodeType;
    } catch (e) {
      I = {
        apply: L.length ? function (e, t) {
          O.apply(e, N.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function ie(e, t, n, i) {
      var s,
          a,
          r,
          o,
          l,
          c,
          d,
          u,
          h = t && t.ownerDocument,
          p = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!i && ((t ? t.ownerDocument || t : y) !== T && C(t), t = t || T, E)) {
        if (11 !== p && (c = J.exec(e))) if (s = c[1]) {
          if (9 === p) {
            if (!(r = t.getElementById(s))) return n;
            if (r.id === s) return n.push(r), n;
          } else if (h && (r = h.getElementById(s)) && b(t, r) && r.id === s) return n.push(r), n;
        } else {
          if (c[2]) return I.apply(n, t.getElementsByTagName(e)), n;
          if ((s = c[3]) && f.getElementsByClassName && t.getElementsByClassName) return I.apply(n, t.getElementsByClassName(s)), n;
        }

        if (f.qsa && !$[e + " "] && (!v || !v.test(e))) {
          if (1 !== p) h = t, u = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((o = t.getAttribute("id")) ? o = o.replace(te, "\\$&") : t.setAttribute("id", o = S), a = (d = m(e)).length, l = X.test(o) ? "#" + o : "[id='" + o + "']"; a--;) {
              d[a] = l + " " + he(d[a]);
            }

            u = d.join(","), h = ee.test(e) && de(t.parentNode) || t;
          }
          if (u) try {
            return I.apply(n, h.querySelectorAll(u)), n;
          } catch (e) {} finally {
            o === S && t.removeAttribute("id");
          }
        }
      }

      return g(e.replace(V, "$1"), t, n, i);
    }

    function se() {
      var n = [];

      function i(e, t) {
        return n.push(e + " ") > x.cacheLength && delete i[n.shift()], i[e + " "] = t;
      }

      return i;
    }

    function ae(e) {
      return e[S] = !0, e;
    }

    function re(e) {
      var t = T.createElement("div");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
      }
    }

    function oe(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) {
        x.attrHandle[n[i]] = t;
      }
    }

    function le(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (i) return i;
      if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function ce(r) {
      return ae(function (a) {
        return a = +a, ae(function (e, t) {
          for (var n, i = r([], e.length, a), s = i.length; s--;) {
            e[n = i[s]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function de(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }

    for (e in f = ie.support = {}, i = ie.isXML = function (e) {
      return !!(e = e && (e.ownerDocument || e).documentElement) && "HTML" !== e.nodeName;
    }, C = ie.setDocument = function (e) {
      return (e = e ? e.ownerDocument || e : y) !== T && 9 === e.nodeType && e.documentElement && (s = (T = e).documentElement, E = !i(T), (e = T.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", t, !1) : e.attachEvent && e.attachEvent("onunload", t)), f.attributes = re(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), f.getElementsByTagName = re(function (e) {
        return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
      }), f.getElementsByClassName = Q.test(T.getElementsByClassName), f.getById = re(function (e) {
        return s.appendChild(e).id = S, !T.getElementsByName || !T.getElementsByName(S).length;
      }), f.getById ? (x.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && E) return (e = t.getElementById(e)) ? [e] : [];
      }, x.filter.ID = function (e) {
        var t = e.replace(ne, u);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete x.find.ID, x.filter.ID = function (e) {
        var t = e.replace(ne, u);
        return function (e) {
          return (e = void 0 !== e.getAttributeNode && e.getAttributeNode("id")) && e.value === t;
        };
      }), x.find.TAG = f.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            s = 0,
            a = t.getElementsByTagName(e);
        if ("*" !== e) return a;

        for (; n = a[s++];) {
          1 === n.nodeType && i.push(n);
        }

        return i;
      }, x.find.CLASS = f.getElementsByClassName && function (e, t) {
        return void 0 !== t.getElementsByClassName && E ? t.getElementsByClassName(e) : void 0;
      }, r = [], v = [], (f.qsa = Q.test(T.querySelectorAll)) && (re(function (e) {
        s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + j + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]");
      }), re(function (e) {
        var t = T.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (f.matchesSelector = Q.test(o = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && re(function (e) {
        f.disconnectedMatch = o.call(e, "div"), o.call(e, "[s!='']:x"), r.push("!=", q);
      }), v = v.length && new RegExp(v.join("|")), r = r.length && new RegExp(r.join("|")), e = Q.test(s.compareDocumentPosition), b = e || Q.test(s.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e;
        return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }
        return !1;
      }, D = e ? function (e, t) {
        return e === t ? (c = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === y && b(y, e) ? -1 : t === T || t.ownerDocument === y && b(y, t) ? 1 : l ? w(l, e) - w(l, t) : 0 : 4 & n ? -1 : 1);
        var n;
      } : function (e, t) {
        if (e === t) return c = !0, 0;
        var n,
            i = 0,
            s = e.parentNode,
            a = t.parentNode,
            r = [e],
            o = [t];
        if (!s || !a) return e === T ? -1 : t === T ? 1 : s ? -1 : a ? 1 : l ? w(l, e) - w(l, t) : 0;
        if (s === a) return le(e, t);

        for (n = e; n = n.parentNode;) {
          r.unshift(n);
        }

        for (n = t; n = n.parentNode;) {
          o.unshift(n);
        }

        for (; r[i] === o[i];) {
          i++;
        }

        return i ? le(r[i], o[i]) : r[i] === y ? -1 : o[i] === y ? 1 : 0;
      }), T;
    }, ie.matches = function (e, t) {
      return ie(e, null, null, t);
    }, ie.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== T && C(e), t = t.replace(W, "='$1']"), f.matchesSelector && E && !$[t + " "] && (!r || !r.test(t)) && (!v || !v.test(t))) try {
        var n = o.call(e, t);
        if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {}
      return 0 < ie(t, T, null, [e]).length;
    }, ie.contains = function (e, t) {
      return (e.ownerDocument || e) !== T && C(e), b(e, t);
    }, ie.attr = function (e, t) {
      (e.ownerDocument || e) !== T && C(e);
      var n = x.attrHandle[t.toLowerCase()];
      return void 0 !== (n = n && P.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0) ? n : f.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
    }, ie.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ie.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          s = 0;

      if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(D), c) {
        for (; t = e[s++];) {
          t === e[s] && (i = n.push(s));
        }

        for (; i--;) {
          e.splice(n[i], 1);
        }
      }

      return l = null, e;
    }, a = ie.getText = function (e) {
      var t,
          n = "",
          i = 0,
          s = e.nodeType;

      if (s) {
        if (1 === s || 9 === s || 11 === s) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += a(e);
          }
        } else if (3 === s || 4 === s) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += a(t);
      }

      return n;
    }, (x = ie.selectors = {
      cacheLength: 50,
      createPseudo: ae,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ne, u), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, u), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(ne, u).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(t, n, i) {
          return function (e) {
            return null == (e = ie.attr(e, t)) ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(R, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(f, e, t, m, g) {
          var v = "nth" !== f.slice(0, 3),
              b = "last" !== f.slice(-4),
              y = "of-type" === e;
          return 1 === m && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var i,
                s,
                a,
                r,
                o,
                l,
                c = v != b ? "nextSibling" : "previousSibling",
                d = e.parentNode,
                u = y && e.nodeName.toLowerCase(),
                h = !n && !y,
                p = !1;

            if (d) {
              if (v) {
                for (; c;) {
                  for (r = e; r = r[c];) {
                    if (y ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                  }

                  l = c = "only" === f && !l && "nextSibling";
                }

                return !0;
              }

              if (l = [b ? d.firstChild : d.lastChild], b && h) {
                for (p = (o = (i = (s = (a = (r = d)[S] || (r[S] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] || [])[0] === k && i[1]) && i[2], r = o && d.childNodes[o]; r = ++o && r && r[c] || (p = o = 0) || l.pop();) {
                  if (1 === r.nodeType && ++p && r === e) {
                    s[f] = [k, o, p];
                    break;
                  }
                }
              } else if (!1 === (p = h ? o = (i = (s = (a = (r = e)[S] || (r[S] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] || [])[0] === k && i[1] : p)) for (; (r = ++o && r && r[c] || (p = o = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++p || (h && ((s = (a = r[S] || (r[S] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] = [k, p]), r !== e));) {
                ;
              }

              return (p -= g) === m || p % m == 0 && 0 <= p / m;
            }
          };
        },
        PSEUDO: function PSEUDO(e, a) {
          var t,
              r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
          return r[S] ? r(a) : 1 < r.length ? (t = [e, e, "", a], x.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, t) {
            for (var n, i = r(e, a), s = i.length; s--;) {
              e[n = w(e, i[s])] = !(t[n] = i[s]);
            }
          }) : function (e) {
            return r(e, 0, t);
          }) : r;
        }
      },
      pseudos: {
        not: ae(function (e) {
          var i = [],
              s = [],
              o = h(e.replace(V, "$1"));
          return o[S] ? ae(function (e, t, n, i) {
            for (var s, a = o(e, null, i, []), r = e.length; r--;) {
              (s = a[r]) && (e[r] = !(t[r] = s));
            }
          }) : function (e, t, n) {
            return i[0] = e, o(i, null, n, s), i[0] = null, !s.pop();
          };
        }),
        has: ae(function (t) {
          return function (e) {
            return 0 < ie(t, e).length;
          };
        }),
        contains: ae(function (t) {
          return t = t.replace(ne, u), function (e) {
            return -1 < (e.textContent || e.innerText || a(e)).indexOf(t);
          };
        }),
        lang: ae(function (n) {
          return X.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ne, u).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === s;
        },
        focus: function focus(e) {
          return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return !1 === e.disabled;
        },
        disabled: function disabled(e) {
          return !0 === e.disabled;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !x.pseudos.empty(e);
        },
        header: function header(e) {
          return K.test(e.nodeName);
        },
        input: function input(e) {
          return Z.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
        },
        first: ce(function () {
          return [0];
        }),
        last: ce(function (e, t) {
          return [t - 1];
        }),
        eq: ce(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ce(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ce(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ce(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; 0 <= --i;) {
            e.push(i);
          }

          return e;
        }),
        gt: ce(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }

          return e;
        })
      }
    }).pseudos.nth = x.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      x.pseudos[e] = function (t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      x.pseudos[e] = function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }(e);
    }

    function ue() {}

    function he(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }

      return i;
    }

    function pe(r, e, t) {
      var o = e.dir,
          l = t && "parentNode" === o,
          c = d++;
      return e.first ? function (e, t, n) {
        for (; e = e[o];) {
          if (1 === e.nodeType || l) return r(e, t, n);
        }
      } : function (e, t, n) {
        var i,
            s,
            a = [k, c];

        if (n) {
          for (; e = e[o];) {
            if ((1 === e.nodeType || l) && r(e, t, n)) return !0;
          }
        } else for (; e = e[o];) {
          if (1 === e.nodeType || l) {
            if ((s = (i = (s = e[S] || (e[S] = {}))[e.uniqueID] || (s[e.uniqueID] = {}))[o]) && s[0] === k && s[1] === c) return a[2] = s[2];
            if ((i[o] = a)[2] = r(e, t, n)) return !0;
          }
        }
      };
    }

    function fe(s) {
      return 1 < s.length ? function (e, t, n) {
        for (var i = s.length; i--;) {
          if (!s[i](e, t, n)) return !1;
        }

        return !0;
      } : s[0];
    }

    function me(e, t, n, i, s) {
      for (var a, r = [], o = 0, l = e.length, c = null != t; o < l; o++) {
        (a = e[o]) && (n && !n(a, i, s) || (r.push(a), c && t.push(o)));
      }

      return r;
    }

    return ue.prototype = x.filters = x.pseudos, x.setFilters = new ue(), m = ie.tokenize = function (e, t) {
      var n,
          i,
          s,
          a,
          r,
          o,
          l,
          c = M[e + " "];
      if (c) return t ? 0 : c.slice(0);

      for (r = e, o = [], l = x.preFilter; r;) {
        for (a in n && !(i = B.exec(r)) || (i && (r = r.slice(i[0].length) || r), o.push(s = [])), n = !1, (i = U.exec(r)) && (n = i.shift(), s.push({
          value: n,
          type: i[0].replace(V, " ")
        }), r = r.slice(n.length)), x.filter) {
          !(i = G[a].exec(r)) || l[a] && !(i = l[a](i)) || (n = i.shift(), s.push({
            value: n,
            type: a,
            matches: i
          }), r = r.slice(n.length));
        }

        if (!n) break;
      }

      return t ? r.length : r ? ie.error(e) : M(e, o).slice(0);
    }, h = ie.compile = function (e, t) {
      var n,
          g,
          v,
          b,
          y,
          i = [],
          s = [],
          a = $[e + " "];

      if (!a) {
        for (n = (t = t || m(e)).length; n--;) {
          ((a = function e(t) {
            for (var i, n, s, a = t.length, r = x.relative[t[0].type], o = r || x.relative[" "], l = r ? 1 : 0, c = pe(function (e) {
              return e === i;
            }, o, !0), d = pe(function (e) {
              return -1 < w(i, e);
            }, o, !0), u = [function (e, t, n) {
              return n = !r && (n || t !== _) || ((i = t).nodeType ? c : d)(e, t, n), i = null, n;
            }]; l < a; l++) {
              if (n = x.relative[t[l].type]) u = [pe(fe(u), n)];else {
                if ((n = x.filter[t[l].type].apply(null, t[l].matches))[S]) {
                  for (s = ++l; s < a && !x.relative[t[s].type]; s++) {
                    ;
                  }

                  return function e(p, f, m, g, v, t) {
                    return g && !g[S] && (g = e(g)), v && !v[S] && (v = e(v, t)), ae(function (e, t, n, i) {
                      var s,
                          a,
                          r,
                          o = [],
                          l = [],
                          c = t.length,
                          d = e || function (e, t, n) {
                        for (var i = 0, s = t.length; i < s; i++) {
                          ie(e, t[i], n);
                        }

                        return n;
                      }(f || "*", n.nodeType ? [n] : n, []),
                          u = !p || !e && f ? d : me(d, o, p, n, i),
                          h = m ? v || (e ? p : c || g) ? [] : t : u;

                      if (m && m(u, h, n, i), g) for (s = me(h, l), g(s, [], n, i), a = s.length; a--;) {
                        (r = s[a]) && (h[l[a]] = !(u[l[a]] = r));
                      }

                      if (e) {
                        if (v || p) {
                          if (v) {
                            for (s = [], a = h.length; a--;) {
                              (r = h[a]) && s.push(u[a] = r);
                            }

                            v(null, h = [], s, i);
                          }

                          for (a = h.length; a--;) {
                            (r = h[a]) && -1 < (s = v ? w(e, r) : o[a]) && (e[s] = !(t[s] = r));
                          }
                        }
                      } else h = me(h === t ? h.splice(c, h.length) : h), v ? v(null, t, h, i) : I.apply(t, h);
                    });
                  }(1 < l && fe(u), 1 < l && he(t.slice(0, l - 1).concat({
                    value: " " === t[l - 2].type ? "*" : ""
                  })).replace(V, "$1"), n, l < s && e(t.slice(l, s)), s < a && e(t = t.slice(s)), s < a && he(t));
                }

                u.push(n);
              }
            }

            return fe(u);
          }(t[n]))[S] ? i : s).push(a);
        }

        (a = $(e, (g = s, b = 0 < (v = i).length, y = 0 < g.length, b ? ae(r) : r))).selector = e;
      }

      function r(e, t, n, i, s) {
        var a,
            r,
            o,
            l = 0,
            c = "0",
            d = e && [],
            u = [],
            h = _,
            p = e || y && x.find.TAG("*", s),
            f = k += null == h ? 1 : Math.random() || .1,
            m = p.length;

        for (s && (_ = t === T || t || s); c !== m && null != (a = p[c]); c++) {
          if (y && a) {
            for (r = 0, t || a.ownerDocument === T || (C(a), n = !E); o = g[r++];) {
              if (o(a, t || T, n)) {
                i.push(a);
                break;
              }
            }

            s && (k = f);
          }

          b && ((a = !o && a) && l--, e && d.push(a));
        }

        if (l += c, b && c !== l) {
          for (r = 0; o = v[r++];) {
            o(d, u, t, n);
          }

          if (e) {
            if (0 < l) for (; c--;) {
              d[c] || u[c] || (u[c] = A.call(i));
            }
            u = me(u);
          }

          I.apply(i, u), s && !e && 0 < u.length && 1 < l + v.length && ie.uniqueSort(i);
        }

        return s && (k = f, _ = h), d;
      }

      return a;
    }, g = ie.select = function (e, t, n, i) {
      var s,
          a,
          r,
          o,
          l,
          c = "function" == typeof e && e,
          d = !i && m(e = c.selector || e);

      if (n = n || [], 1 === d.length) {
        if (2 < (a = d[0] = d[0].slice(0)).length && "ID" === (r = a[0]).type && f.getById && 9 === t.nodeType && E && x.relative[a[1].type]) {
          if (!(t = (x.find.ID(r.matches[0].replace(ne, u), t) || [])[0])) return n;
          c && (t = t.parentNode), e = e.slice(a.shift().value.length);
        }

        for (s = G.needsContext.test(e) ? 0 : a.length; s-- && (r = a[s], !x.relative[o = r.type]);) {
          if ((l = x.find[o]) && (i = l(r.matches[0].replace(ne, u), ee.test(a[0].type) && de(t.parentNode) || t))) {
            if (a.splice(s, 1), !(e = i.length && he(a))) return I.apply(n, i), n;
            break;
          }
        }
      }

      return (c || h(e, d))(i, t, !E, n, !t || ee.test(e) && de(t.parentNode) || t), n;
    }, f.sortStable = S.split("").sort(D).join("") === S, f.detectDuplicates = !!c, C(), f.sortDetached = re(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("div"));
    }), re(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || oe("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), f.attributes && re(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || oe("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
    }), re(function (e) {
      return null == e.getAttribute("disabled");
    }) || oe(z, function (e, t, n) {
      return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
    }), ie;
  }(x);

  function p(e, t, n) {
    for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (s && C(e).is(n)) break;
        i.push(e);
      }
    }

    return i;
  }

  function v(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  }

  C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains;
  var b = C.expr.match.needsContext,
      y = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;

  function T(e, n, i) {
    if (C.isFunction(n)) return C.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== i;
    });
    if (n.nodeType) return C.grep(e, function (e) {
      return e === n !== i;
    });

    if ("string" == typeof n) {
      if (w.test(n)) return C.filter(n, e, i);
      n = C.filter(n, e);
    }

    return C.grep(e, function (e) {
      return -1 < s.call(n, e) !== i;
    });
  }

  C.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, C.fn.extend({
    find: function find(e) {
      var t,
          n = this.length,
          i = [],
          s = this;
      if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
        for (t = 0; t < n; t++) {
          if (C.contains(s[t], this)) return !0;
        }
      }));

      for (t = 0; t < n; t++) {
        C.find(e, s[t], i);
      }

      return (i = this.pushStack(1 < n ? C.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i;
    },
    filter: function filter(e) {
      return this.pushStack(T(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(T(this, e || [], !0));
    },
    is: function is(e) {
      return !!T(this, "string" == typeof e && b.test(e) ? C(e) : e || [], !1).length;
    }
  });
  var E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (C.fn.init = function (e, t, n) {
    if (!e) return this;
    if (n = n || S, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this));
    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : E.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);

    if (i[1]) {
      if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : _, !0)), y.test(i[1]) && C.isPlainObject(t)) for (var i in t) {
        C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      }
      return this;
    }

    return (n = _.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = _, this.selector = e, this;
  }).prototype = C.fn;
  var S = C(_),
      k = /^(?:parents|prev(?:Until|All))/,
      M = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function $(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {
      ;
    }

    return e;
  }

  C.fn.extend({
    has: function has(e) {
      var t = C(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (C.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      for (var n, i = 0, s = this.length, a = [], r = b.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; i < s; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
            a.push(n);
            break;
          }
        }
      }

      return this.pushStack(1 < a.length ? C.uniqueSort(a) : a);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? s.call(C(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), C.each({
    parent: function parent(e) {
      return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
    },
    parents: function parents(e) {
      return p(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return p(e, "parentNode", n);
    },
    next: function next(e) {
      return $(e, "nextSibling");
    },
    prev: function prev(e) {
      return $(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return p(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return p(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return p(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return p(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return v((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return v(e.firstChild);
    },
    contents: function contents(e) {
      return e.contentDocument || C.merge([], e.childNodes);
    }
  }, function (i, s) {
    C.fn[i] = function (e, t) {
      var n = C.map(this, s, e);
      return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (M[i] || C.uniqueSort(n), k.test(i) && n.reverse()), this.pushStack(n);
    };
  });
  var D,
      P = /\S+/g;

  function L() {
    _.removeEventListener("DOMContentLoaded", L), x.removeEventListener("load", L), C.ready();
  }

  function A(e, t, n, i, s, a, r) {
    var o = 0,
        l = e.length,
        c = null == n;
    if ("object" === C.type(n)) for (o in s = !0, n) {
      A(e, t, o, n[o], !0, a, r);
    } else if (void 0 !== i && (s = !0, C.isFunction(i) || (r = !0), t = c ? r ? (t.call(e, i), null) : (c = t, function (e, t, n) {
      return c.call(C(e), n);
    }) : t)) for (; o < l; o++) {
      t(e[o], n, r ? i : i.call(e[o], o, t(e[o], n)));
    }
    return s ? e : c ? t.call(e) : l ? t(e[0], n) : a;
  }

  function O(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }

  function I() {
    this.expando = C.expando + I.uid++;
  }

  C.Callbacks = function (i) {
    var e, n;

    function s() {
      for (o = i.once, r = a = !0; c.length; d = -1) {
        for (t = c.shift(); ++d < l.length;) {
          !1 === l[d].apply(t[0], t[1]) && i.stopOnFalse && (d = l.length, t = !1);
        }
      }

      i.memory || (t = !1), a = !1, o && (l = t ? [] : "");
    }

    i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : C.extend({}, i);
    var a,
        t,
        r,
        o,
        l = [],
        c = [],
        d = -1,
        u = {
      add: function add() {
        return l && (t && !a && (d = l.length - 1, c.push(t)), function n(e) {
          C.each(e, function (e, t) {
            C.isFunction(t) ? i.unique && u.has(t) || l.push(t) : t && t.length && "string" !== C.type(t) && n(t);
          });
        }(arguments), t && !a && s()), this;
      },
      remove: function remove() {
        return C.each(arguments, function (e, t) {
          for (var n; -1 < (n = C.inArray(t, l, n));) {
            l.splice(n, 1), n <= d && d--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < C.inArray(e, l) : 0 < l.length;
      },
      empty: function empty() {
        return l = l && [], this;
      },
      disable: function disable() {
        return o = c = [], l = t = "", this;
      },
      disabled: function disabled() {
        return !l;
      },
      lock: function lock() {
        return o = c = [], t || (l = t = ""), this;
      },
      locked: function locked() {
        return !!o;
      },
      fireWith: function fireWith(e, t) {
        return o || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), a || s()), this;
      },
      fire: function fire() {
        return u.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };
    return u;
  }, C.extend({
    Deferred: function Deferred(e) {
      var a = [["resolve", "done", C.Callbacks("once memory"), "resolved"], ["reject", "fail", C.Callbacks("once memory"), "rejected"], ["notify", "progress", C.Callbacks("memory")]],
          s = "pending",
          r = {
        state: function state() {
          return s;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var s = arguments;
          return C.Deferred(function (i) {
            C.each(a, function (e, t) {
              var n = C.isFunction(s[e]) && s[e];
              o[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && C.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === r ? i.promise() : this, n ? [e] : arguments);
              });
            }), s = null;
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? C.extend(e, r) : r;
        }
      },
          o = {};
      return r.pipe = r.then, C.each(a, function (e, t) {
        var n = t[2],
            i = t[3];
        r[t[1]] = n.add, i && n.add(function () {
          s = i;
        }, a[1 ^ e][2].disable, a[2][2].lock), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? r : this, arguments), this;
        }, o[t[0] + "With"] = n.fireWith;
      }), r.promise(o), e && e.call(o, o), o;
    },
    when: function when(e) {
      function t(t, n, i) {
        return function (e) {
          n[t] = this, i[t] = 1 < arguments.length ? d.call(arguments) : e, i === s ? c.notifyWith(n, i) : --l || c.resolveWith(n, i);
        };
      }

      var s,
          n,
          i,
          a = 0,
          r = d.call(arguments),
          o = r.length,
          l = 1 !== o || e && C.isFunction(e.promise) ? o : 0,
          c = 1 === l ? e : C.Deferred();
      if (1 < o) for (s = new Array(o), n = new Array(o), i = new Array(o); a < o; a++) {
        r[a] && C.isFunction(r[a].promise) ? r[a].promise().progress(t(a, n, s)).done(t(a, i, r)).fail(c.reject) : --l;
      }
      return l || c.resolveWith(i, r), c.promise();
    }
  }), C.fn.ready = function (e) {
    return C.ready.promise().done(e), this;
  }, C.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? C.readyWait++ : C.ready(!0);
    },
    ready: function ready(e) {
      (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || (D.resolveWith(_, [C]), C.fn.triggerHandler && (C(_).triggerHandler("ready"), C(_).off("ready")));
    }
  }), C.ready.promise = function (e) {
    return D || (D = C.Deferred(), "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? x.setTimeout(C.ready) : (_.addEventListener("DOMContentLoaded", L), x.addEventListener("load", L))), D.promise(e);
  }, C.ready.promise(), I.uid = 1, I.prototype = {
    register: function register(e, t) {
      return t = t || {}, e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        writable: !0,
        configurable: !0
      }), e[this.expando];
    },
    cache: function cache(e) {
      if (!O(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var i,
          s = this.cache(e);
      if ("string" == typeof t) s[t] = n;else for (i in t) {
        s[i] = t[i];
      }
      return s;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
    },
    access: function access(e, t, n) {
      var i;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, C.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          i,
          s,
          a = e[this.expando];

      if (void 0 !== a) {
        if (void 0 === t) this.register(e);else {
          n = (i = C.isArray(t) ? t.concat(t.map(C.camelCase)) : (s = C.camelCase(t), t in a ? [t, s] : (i = s) in a ? [i] : i.match(P) || [])).length;

          for (; n--;) {
            delete a[i[n]];
          }
        }
        void 0 !== t && !C.isEmptyObject(a) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      return void 0 !== (e = e[this.expando]) && !C.isEmptyObject(e);
    }
  };
  var N = new I(),
      z = new I(),
      j = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      H = /[A-Z]/g;

  function F(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(H, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : j.test(n) ? C.parseJSON(n) : n);
      } catch (e) {}

      z.set(e, t, n);
    } else n = void 0;
    return n;
  }

  function q(e, t) {
    return "none" === C.css(e = t || e, "display") || !C.contains(e.ownerDocument, e);
  }

  C.extend({
    hasData: function hasData(e) {
      return z.hasData(e) || N.hasData(e);
    },
    data: function data(e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      z.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return N.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      N.remove(e, t);
    }
  }), C.fn.extend({
    data: function data(i, e) {
      var t,
          n,
          s,
          a = this[0],
          r = a && a.attributes;
      if (void 0 !== i) return "object" == _typeof(i) ? this.each(function () {
        z.set(this, i);
      }) : A(this, function (t) {
        var e, n;
        return a && void 0 === t ? void 0 !== (e = z.get(a, i) || z.get(a, i.replace(H, "-$&").toLowerCase())) ? e : (n = C.camelCase(i), void 0 !== (e = z.get(a, n)) || void 0 !== (e = F(a, n, void 0)) ? e : void 0) : (n = C.camelCase(i), void this.each(function () {
          var e = z.get(this, n);
          z.set(this, n, t), -1 < i.indexOf("-") && void 0 !== e && z.set(this, i, t);
        }));
      }, null, e, 1 < arguments.length, null, !0);

      if (this.length && (s = z.get(a), 1 === a.nodeType && !N.get(a, "hasDataAttrs"))) {
        for (t = r.length; t--;) {
          r[t] && 0 === (n = r[t].name).indexOf("data-") && (n = C.camelCase(n.slice(5)), F(a, n, s[n]));
        }

        N.set(a, "hasDataAttrs", !0);
      }

      return s;
    },
    removeData: function removeData(e) {
      return this.each(function () {
        z.remove(this, e);
      });
    }
  }), C.extend({
    queue: function queue(e, t, n) {
      var i;
      return e ? (i = N.get(e, t = (t || "fx") + "queue"), n && (!i || C.isArray(n) ? i = N.access(e, t, C.makeArray(n)) : i.push(n)), i || []) : void 0;
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = C.queue(e, t),
          i = n.length,
          s = n.shift(),
          a = C._queueHooks(e, t);

      "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete a.stop, s.call(e, function () {
        C.dequeue(e, t);
      }, a)), !i && a && a.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return N.get(e, n) || N.access(e, n, {
        empty: C.Callbacks("once memory").add(function () {
          N.remove(e, [t + "queue", n]);
        })
      });
    }
  }), C.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = C.queue(this, t, n);
        C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        C.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      function n() {
        --s || a.resolveWith(r, [r]);
      }

      var i,
          s = 1,
          a = C.Deferred(),
          r = this,
          o = this.length;

      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) {
        (i = N.get(r[o], e + "queueHooks")) && i.empty && (s++, i.empty.add(n));
      }

      return n(), a.promise(t);
    }
  });
  var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      V = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
      B = ["Top", "Right", "Bottom", "Left"];

  function U(e, t, n, i) {
    var s,
        a = 1,
        r = 20,
        o = i ? function () {
      return i.cur();
    } : function () {
      return C.css(e, t, "");
    },
        l = o(),
        c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
        d = (C.cssNumber[t] || "px" !== c && +l) && V.exec(C.css(e, t));
    if (d && d[3] !== c) for (c = c || d[3], n = n || [], d = +l || 1; C.style(e, t, (d /= a = a || ".5") + c), a !== (a = o() / l) && 1 !== a && --r;) {
      ;
    }
    return n && (d = +d || +l || 0, s = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = s)), s;
  }

  var W = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      X = /^$|\/(?:java|ecma)script/i,
      G = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function Z(e, t) {
    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], n) : n;
  }

  function K(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      N.set(e[n], "globalEval", !t || N.get(t[n], "globalEval"));
    }
  }

  G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
  var Q = /<|&#?\w+;/;

  function J(e, t, n, i, s) {
    for (var a, r, o, l, c, d = t.createDocumentFragment(), u = [], h = 0, p = e.length; h < p; h++) {
      if ((a = e[h]) || 0 === a) if ("object" === C.type(a)) C.merge(u, a.nodeType ? [a] : a);else if (Q.test(a)) {
        for (r = r || d.appendChild(t.createElement("div")), o = (Y.exec(a) || ["", ""])[1].toLowerCase(), o = G[o] || G._default, r.innerHTML = o[1] + C.htmlPrefilter(a) + o[2], c = o[0]; c--;) {
          r = r.lastChild;
        }

        C.merge(u, r.childNodes), (r = d.firstChild).textContent = "";
      } else u.push(t.createTextNode(a));
    }

    for (d.textContent = "", h = 0; a = u[h++];) {
      if (i && -1 < C.inArray(a, i)) s && s.push(a);else if (l = C.contains(a.ownerDocument, a), r = Z(d.appendChild(a), "script"), l && K(r), n) for (c = 0; a = r[c++];) {
        X.test(a.type || "") && n.push(a);
      }
    }

    return d;
  }

  n = _.createDocumentFragment().appendChild(_.createElement("div")), (h = _.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), g.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, n.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
  var ee = /^key/,
      te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ne = /^([^.]*)(?:\.(.+)|)/;

  function ie() {
    return !0;
  }

  function se() {
    return !1;
  }

  function ae() {
    try {
      return _.activeElement;
    } catch (e) {}
  }

  function re(e, t, n, i, s, a) {
    var r, o;

    if ("object" == _typeof(t)) {
      for (o in "string" != typeof n && (i = i || n, n = void 0), t) {
        re(e, o, n, i, t[o], a);
      }

      return e;
    }

    if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = se;else if (!s) return e;
    return 1 === a && (r = s, (s = function s(e) {
      return C().off(e), r.apply(this, arguments);
    }).guid = r.guid || (r.guid = C.guid++)), e.each(function () {
      C.event.add(this, t, s, i, n);
    });
  }

  C.event = {
    global: {},
    add: function add(t, e, n, i, s) {
      var a,
          r,
          o,
          l,
          c,
          d,
          u,
          h,
          p,
          f = N.get(t);
      if (f) for (n.handler && (n = (a = n).handler, s = a.selector), n.guid || (n.guid = C.guid++), (o = f.events) || (o = f.events = {}), (r = f.handle) || (r = f.handle = function (e) {
        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0;
      }), l = (e = (e || "").match(P) || [""]).length; l--;) {
        u = p = (c = ne.exec(e[l]) || [])[1], h = (c[2] || "").split(".").sort(), u && (d = C.event.special[u] || {}, u = (s ? d.delegateType : d.bindType) || u, d = C.event.special[u] || {}, c = C.extend({
          type: u,
          origType: p,
          data: i,
          handler: n,
          guid: n.guid,
          selector: s,
          needsContext: s && C.expr.match.needsContext.test(s),
          namespace: h.join(".")
        }, a), (p = o[u]) || ((p = o[u] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, r) || t.addEventListener && t.addEventListener(u, r)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[u] = !0);
      }
    },
    remove: function remove(e, t, n, i, s) {
      var a,
          r,
          o,
          l,
          c,
          d,
          u,
          h,
          p,
          f,
          m,
          g = N.hasData(e) && N.get(e);

      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(P) || [""]).length; c--;) {
          if (p = m = (o = ne.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
            for (u = C.event.special[p] || {}, h = l[p = (i ? u.delegateType : u.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = h.length; a--;) {
              d = h[a], !s && m !== d.origType || n && n.guid !== d.guid || o && !o.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (h.splice(a, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
            }

            r && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || C.removeEvent(e, p, g.handle), delete l[p]);
          } else for (p in l) {
            C.event.remove(e, p + t[c], n, i, !0);
          }
        }

        C.isEmptyObject(l) && N.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      e = C.event.fix(e);
      var t,
          n,
          i,
          s,
          a,
          r = d.call(arguments),
          o = (N.get(this, "events") || {})[e.type] || [],
          l = C.event.special[e.type] || {};

      if ((r[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (a = C.event.handlers.call(this, e, o), t = 0; (i = a[t++]) && !e.isPropagationStopped();) {
          for (e.currentTarget = i.elem, n = 0; (s = i.handlers[n++]) && !e.isImmediatePropagationStopped();) {
            e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (s = ((C.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, r)) && !1 === (e.result = s) && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          i,
          s,
          a,
          r = [],
          o = t.delegateCount,
          l = e.target;
      if (o && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
          for (i = [], n = 0; n < o; n++) {
            void 0 === i[s = (a = t[n]).selector + " "] && (i[s] = a.needsContext ? -1 < C(s, this).index(l) : C.find(s, this, null, [l]).length), i[s] && i.push(a);
          }

          i.length && r.push({
            elem: l,
            handlers: i
          });
        }
      }
      return o < t.length && r.push({
        elem: this,
        handlers: t.slice(o)
      }), r;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, t) {
        var n,
            i,
            s = t.button;
        return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || _).documentElement, i = i.body, e.pageX = t.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    fix: function fix(e) {
      if (e[C.expando]) return e;
      var t,
          n,
          i,
          s = e.type,
          a = e,
          r = this.fixHooks[s];

      for (r || (this.fixHooks[s] = r = te.test(s) ? this.mouseHooks : ee.test(s) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new C.Event(a), t = i.length; t--;) {
        e[n = i[t]] = a[n];
      }

      return e.target || (e.target = _), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, a) : e;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== ae() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ae() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && C.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function _default(e) {
          return C.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, C.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, C.Event = function (e, t) {
    return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ie : se) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void (this[C.expando] = !0)) : new C.Event(e, t);
  }, C.Event.prototype = {
    constructor: C.Event,
    isDefaultPrevented: se,
    isPropagationStopped: se,
    isImmediatePropagationStopped: se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ie, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ie, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ie, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, C.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, s) {
    C.event.special[e] = {
      delegateType: s,
      bindType: s,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            i = e.handleObj;
        return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = s), t;
      }
    };
  }), C.fn.extend({
    on: function on(e, t, n, i) {
      return re(this, e, t, n, i);
    },
    one: function one(e, t, n, i) {
      return re(this, e, t, n, i, 1);
    },
    off: function off(e, t, n) {
      var i, s;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" != _typeof(e)) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = se), this.each(function () {
        C.event.remove(this, e, n, t);
      });

      for (s in e) {
        this.off(s, t, e[s]);
      }

      return this;
    }
  });
  var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      le = /<script|<style|<link/i,
      ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
      de = /^true\/(.*)/,
      ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function he(e, t) {
    return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function fe(e) {
    var t = de.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function me(e, t) {
    var n, i, s, a, r, o;

    if (1 === t.nodeType) {
      if (N.hasData(e) && (a = N.access(e), r = N.set(t, a), o = a.events)) for (s in delete r.handle, r.events = {}, o) {
        for (n = 0, i = o[s].length; n < i; n++) {
          C.event.add(t, s, o[s][n]);
        }
      }
      z.hasData(e) && (e = z.access(e), e = C.extend({}, e), z.set(t, e));
    }
  }

  function ge(n, i, s, a) {
    i = m.apply([], i);
    var e,
        t,
        r,
        o,
        l,
        c,
        d = 0,
        u = n.length,
        h = u - 1,
        p = i[0],
        f = C.isFunction(p);
    if (f || 1 < u && "string" == typeof p && !g.checkClone && ce.test(p)) return n.each(function (e) {
      var t = n.eq(e);
      f && (i[0] = p.call(this, e, t.html())), ge(t, i, s, a);
    });

    if (u && (t = (e = J(i, n[0].ownerDocument, !1, n, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
      for (o = (r = C.map(Z(e, "script"), pe)).length; d < u; d++) {
        l = e, d !== h && (l = C.clone(l, !0, !0), o && C.merge(r, Z(l, "script"))), s.call(n[d], l, d);
      }

      if (o) for (c = r[r.length - 1].ownerDocument, C.map(r, fe), d = 0; d < o; d++) {
        l = r[d], X.test(l.type || "") && !N.access(l, "globalEval") && C.contains(c, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : C.globalEval(l.textContent.replace(ue, "")));
      }
    }

    return n;
  }

  function ve(e, t, n) {
    for (var i, s = t ? C.filter(t, e) : e, a = 0; null != (i = s[a]); a++) {
      n || 1 !== i.nodeType || C.cleanData(Z(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && K(Z(i, "script")), i.parentNode.removeChild(i));
    }

    return e;
  }

  C.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(oe, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var i,
          s,
          a,
          r,
          o,
          l,
          c,
          d = e.cloneNode(!0),
          u = C.contains(e.ownerDocument, e);
      if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (r = Z(d), i = 0, s = (a = Z(e)).length; i < s; i++) {
        o = a[i], "input" === (c = (l = r[i]).nodeName.toLowerCase()) && W.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
      }
      if (t) if (n) for (a = a || Z(e), r = r || Z(d), i = 0, s = a.length; i < s; i++) {
        me(a[i], r[i]);
      } else me(e, d);
      return 0 < (r = Z(d, "script")).length && K(r, !u && Z(e, "script")), d;
    },
    cleanData: function cleanData(e) {
      for (var t, n, i, s = C.event.special, a = 0; void 0 !== (n = e[a]); a++) {
        if (O(n)) {
          if (t = n[N.expando]) {
            if (t.events) for (i in t.events) {
              s[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
            }
            n[N.expando] = void 0;
          }

          n[z.expando] && (n[z.expando] = void 0);
        }
      }
    }
  }), C.fn.extend({
    domManip: ge,
    detach: function detach(e) {
      return ve(this, e, !0);
    },
    remove: function remove(e) {
      return ve(this, e);
    },
    text: function text(e) {
      return A(this, function (e) {
        return void 0 === e ? C.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return ge(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || he(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return ge(this, arguments, function (e) {
        var t;
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = he(this, e)).insertBefore(e, t.firstChild);
      });
    },
    before: function before() {
      return ge(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return ge(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (C.cleanData(Z(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return C.clone(this, e, t);
      });
    },
    html: function html(e) {
      return A(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !le.test(e) && !G[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = C.htmlPrefilter(e);

          try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (C.cleanData(Z(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return ge(this, arguments, function (e) {
        var t = this.parentNode;
        C.inArray(this, n) < 0 && (C.cleanData(Z(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), C.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, r) {
    C.fn[e] = function (e) {
      for (var t, n = [], i = C(e), s = i.length - 1, a = 0; a <= s; a++) {
        t = a === s ? this : this.clone(!0), C(i[a])[r](t), o.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });
  var be,
      ye = {
    HTML: "block",
    BODY: "block"
  };

  function we(e, t) {
    return e = C(t.createElement(e)).appendTo(t.body), t = C.css(e[0], "display"), e.detach(), t;
  }

  function xe(e) {
    var t = _,
        n = ye[e];
    return n || ("none" !== (n = we(e, t)) && n || ((t = (be = (be || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = we(e, t), be.detach()), ye[e] = n), n;
  }

  function _e(e) {
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : x).getComputedStyle(e);
  }

  function Ce(e, t, n, i) {
    var s,
        a = {};

    for (s in t) {
      a[s] = e.style[s], e.style[s] = t[s];
    }

    for (s in i = n.apply(e, i || []), t) {
      e.style[s] = a[s];
    }

    return i;
  }

  var Te,
      Ee,
      Se,
      ke,
      Me,
      $e,
      De = /^margin/,
      Pe = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
      Le = _.documentElement;

  function Ae() {
    $e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", $e.innerHTML = "", Le.appendChild(Me);
    var e = x.getComputedStyle($e);
    Te = "1%" !== e.top, ke = "2px" === e.marginLeft, Ee = "4px" === e.width, $e.style.marginRight = "50%", Se = "4px" === e.marginRight, Le.removeChild(Me);
  }

  function Oe(e, t, n) {
    var i,
        s,
        a = e.style;
    return "" !== (s = (n = n || _e(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), n && !g.pixelMarginRight() && Pe.test(s) && De.test(t) && (i = a.width, e = a.minWidth, t = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = e, a.maxWidth = t), void 0 !== s ? s + "" : s;
  }

  function Ie(e, t) {
    return {
      get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }

  Me = _.createElement("div"), ($e = _.createElement("div")).style && ($e.style.backgroundClip = "content-box", $e.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === $e.style.backgroundClip, Me.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", Me.appendChild($e), C.extend(g, {
    pixelPosition: function pixelPosition() {
      return Ae(), Te;
    },
    boxSizingReliable: function boxSizingReliable() {
      return null == Ee && Ae(), Ee;
    },
    pixelMarginRight: function pixelMarginRight() {
      return null == Ee && Ae(), Se;
    },
    reliableMarginLeft: function reliableMarginLeft() {
      return null == Ee && Ae(), ke;
    },
    reliableMarginRight: function reliableMarginRight() {
      var e,
          t = $e.appendChild(_.createElement("div"));
      return t.style.cssText = $e.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", $e.style.width = "1px", Le.appendChild(Me), e = !parseFloat(x.getComputedStyle(t).marginRight), Le.removeChild(Me), $e.removeChild(t), e;
    }
  }));

  var Ne = /^(none|table(?!-c[ea]).+)/,
      ze = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      je = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      He = ["Webkit", "O", "Moz", "ms"],
      Fe = _.createElement("div").style;

  function qe(e) {
    if (e in Fe) return e;

    for (var t = e[0].toUpperCase() + e.slice(1), n = He.length; n--;) {
      if ((e = He[n] + t) in Fe) return e;
    }
  }

  function Re(e, t, n) {
    var i = V.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }

  function Ve(e, t, n, i, s) {
    for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; a < 4; a += 2) {
      "margin" === n && (r += C.css(e, n + B[a], !0, s)), i ? ("content" === n && (r -= C.css(e, "padding" + B[a], !0, s)), "margin" !== n && (r -= C.css(e, "border" + B[a] + "Width", !0, s))) : (r += C.css(e, "padding" + B[a], !0, s), "padding" !== n && (r += C.css(e, "border" + B[a] + "Width", !0, s)));
    }

    return r;
  }

  function Be(e, t, n) {
    var i = !0,
        s = "width" === t ? e.offsetWidth : e.offsetHeight,
        a = _e(e),
        r = "border-box" === C.css(e, "boxSizing", !1, a);

    if (s <= 0 || null == s) {
      if (((s = Oe(e, t, a)) < 0 || null == s) && (s = e.style[t]), Pe.test(s)) return s;
      i = r && (g.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0;
    }

    return s + Ve(e, t, n || (r ? "border" : "content"), i, a) + "px";
  }

  function Ue(e, t) {
    for (var n, i, s, a = [], r = 0, o = e.length; r < o; r++) {
      (i = e[r]).style && (a[r] = N.get(i, "olddisplay"), n = i.style.display, t ? (a[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && q(i) && (a[r] = N.access(i, "olddisplay", xe(i.nodeName)))) : (s = q(i), "none" === n && s || N.set(i, "olddisplay", s ? n : C.css(i, "display"))));
    }

    for (r = 0; r < o; r++) {
      (i = e[r]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[r] || "" : "none"));
    }

    return e;
  }

  function We(e, t, n, i, s) {
    return new We.prototype.init(e, t, n, i, s);
  }

  C.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) return "" === (e = Oe(e, "opacity")) ? "1" : e;
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var s,
            a,
            r,
            o = C.camelCase(t),
            l = e.style;
        return t = C.cssProps[o] || (C.cssProps[o] = qe(o) || o), r = C.cssHooks[t] || C.cssHooks[o], void 0 === n ? r && "get" in r && void 0 !== (s = r.get(e, !1, i)) ? s : l[t] : ("string" == (a = _typeof(n)) && (s = V.exec(n)) && s[1] && (n = U(e, t, s), a = "number"), void (null != n && n == n && ("number" === a && (n += s && s[3] || (C.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))));
      }
    },
    css: function css(e, t, n, i) {
      var s,
          a = C.camelCase(t);
      return t = C.cssProps[a] || (C.cssProps[a] = qe(a) || a), "normal" === (s = void 0 === (s = (a = C.cssHooks[t] || C.cssHooks[a]) && "get" in a ? a.get(e, !0, n) : s) ? Oe(e, t, i) : s) && t in je && (s = je[t]), "" === n || n ? (t = parseFloat(s), !0 === n || isFinite(t) ? t || 0 : s) : s;
    }
  }), C.each(["height", "width"], function (e, a) {
    C.cssHooks[a] = {
      get: function get(e, t, n) {
        return t ? Ne.test(C.css(e, "display")) && 0 === e.offsetWidth ? Ce(e, ze, function () {
          return Be(e, a, n);
        }) : Be(e, a, n) : void 0;
      },
      set: function set(e, t, n) {
        var i,
            s = n && _e(e);

        return (s = n && Ve(e, a, n, "border-box" === C.css(e, "boxSizing", !1, s), s)) && (i = V.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), Re(0, t, s);
      }
    };
  }), C.cssHooks.marginLeft = Ie(g.reliableMarginLeft, function (e, t) {
    return t ? (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - Ce(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), C.cssHooks.marginRight = Ie(g.reliableMarginRight, function (e, t) {
    return t ? Ce(e, {
      display: "inline-block"
    }, Oe, [e, "marginRight"]) : void 0;
  }), C.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (s, a) {
    C.cssHooks[s + a] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[s + B[t] + a] = i[t] || i[t - 2] || i[0];
        }

        return n;
      }
    }, De.test(s) || (C.cssHooks[s + a].set = Re);
  }), C.fn.extend({
    css: function css(e, t) {
      return A(this, function (e, t, n) {
        var i,
            s,
            a = {},
            r = 0;

        if (C.isArray(t)) {
          for (i = _e(e), s = t.length; r < s; r++) {
            a[t[r]] = C.css(e, t[r], !1, i);
          }

          return a;
        }

        return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
      }, e, t, 1 < arguments.length);
    },
    show: function show() {
      return Ue(this, !0);
    },
    hide: function hide() {
      return Ue(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        q(this) ? C(this).show() : C(this).hide();
      });
    }
  }), ((C.Tween = We).prototype = {
    constructor: We,
    init: function init(e, t, n, i, s, a) {
      this.elem = e, this.prop = n, this.easing = s || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (C.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = We.propHooks[this.prop];
      return (e && e.get ? e : We.propHooks._default).get(this);
    },
    run: function run(e) {
      var t,
          n = We.propHooks[this.prop];
      return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : We.propHooks._default).set(this), this;
    }
  }).init.prototype = We.prototype, (We.propHooks = {
    _default: {
      get: function get(e) {
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
      },
      set: function set(e) {
        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = We.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, C.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, C.fx = We.prototype.init, C.fx.step = {};
  var Ye,
      Xe,
      Ge = /^(?:toggle|show|hide)$/,
      Ze = /queueHooks$/;

  function Ke() {
    return x.setTimeout(function () {
      Ye = void 0;
    }), Ye = C.now();
  }

  function Qe(e, t) {
    var n,
        i = 0,
        s = {
      height: e
    };

    for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      s["margin" + (n = B[i])] = s["padding" + n] = e;
    }

    return t && (s.opacity = s.width = e), s;
  }

  function Je(e, t, n) {
    for (var i, s = (et.tweeners[t] || []).concat(et.tweeners["*"]), a = 0, r = s.length; a < r; a++) {
      if (i = s[a].call(n, t, e)) return i;
    }
  }

  function et(s, e, t) {
    var n,
        a,
        i = 0,
        r = et.prefilters.length,
        o = C.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (a) return !1;

      for (var e = Ye || Ke(), t = 1 - ((e = Math.max(0, c.startTime + c.duration - e)) / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) {
        c.tweens[n].run(t);
      }

      return o.notifyWith(s, [c, t, e]), t < 1 && i ? e : (o.resolveWith(s, [c]), !1);
    },
        c = o.promise({
      elem: s,
      props: C.extend({}, e),
      opts: C.extend(!0, {
        specialEasing: {},
        easing: C.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ye || Ke(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        return e = C.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing), c.tweens.push(e), e;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? c.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          c.tweens[t].run(1);
        }

        return e ? (o.notifyWith(s, [c, 1, 0]), o.resolveWith(s, [c, e])) : o.rejectWith(s, [c, e]), this;
      }
    }),
        d = c.props;

    for (function (e, t) {
      var n, i, s, a, r;

      for (n in e) {
        if (i = C.camelCase(n), s = t[i], a = e[n], C.isArray(a) && (s = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), r = C.cssHooks[i], r && ("expand" in r)) for (n in a = r.expand(a), delete e[i], a) {
          (n in e) || (e[n] = a[n], t[n] = s);
        } else t[i] = s;
      }
    }(d, c.opts.specialEasing); i < r; i++) {
      if (n = et.prefilters[i].call(c, s, d, c.opts)) return C.isFunction(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(n.stop, n)), n;
    }

    return C.map(d, Je, c), C.isFunction(c.opts.start) && c.opts.start.call(s, c), C.fx.timer(C.extend(l, {
      elem: s,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
  }

  C.Animation = C.extend(et, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return U(n.elem, e, V.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      for (var n, i = 0, s = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(P)).length; i < s; i++) {
        n = e[i], et.tweeners[n] = et.tweeners[n] || [], et.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (t, e, n) {
      var i,
          s,
          a,
          r,
          o,
          l,
          c,
          d = this,
          u = {},
          h = t.style,
          p = t.nodeType && q(t),
          f = N.get(t, "fxshow");

      for (i in n.queue || (null == (o = C._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function () {
        o.unqueued || l();
      }), o.unqueued++, d.always(function () {
        d.always(function () {
          o.unqueued--, C.queue(t, "fx").length || o.empty.fire();
        });
      })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = C.css(t, "display")) ? N.get(t, "olddisplay") || xe(t.nodeName) : c) && "none" === C.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), e) {
        if (s = e[i], Ge.exec(s)) {
          if (delete e[i], a = a || "toggle" === s, s === (p ? "hide" : "show")) {
            if ("show" !== s || !f || void 0 === f[i]) continue;
            p = !0;
          }

          u[i] = f && f[i] || C.style(t, i);
        } else c = void 0;
      }

      if (C.isEmptyObject(u)) "inline" === ("none" === c ? xe(t.nodeName) : c) && (h.display = c);else for (i in f ? "hidden" in f && (p = f.hidden) : f = N.access(t, "fxshow", {}), a && (f.hidden = !p), p ? C(t).show() : d.done(function () {
        C(t).hide();
      }), d.done(function () {
        for (var e in N.remove(t, "fxshow"), u) {
          C.style(t, e, u[e]);
        }
      }), u) {
        r = Je(p ? f[i] : 0, i, d), i in f || (f[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? et.prefilters.unshift(e) : et.prefilters.push(e);
    }
  }), C.speed = function (e, t, n) {
    var i = e && "object" == _typeof(e) ? C.extend({}, e) : {
      complete: n || !n && t || C.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !C.isFunction(t) && t
    };
    return i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
    }, i;
  }, C.fn.extend({
    fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(q).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i);
    },
    animate: function animate(t, e, n, i) {
      function s() {
        var e = et(this, C.extend({}, t), r);
        (a || N.get(this, "finish")) && e.stop(!0);
      }

      var a = C.isEmptyObject(t),
          r = C.speed(e, n, i);
      return s.finish = s, a || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    },
    stop: function stop(s, e, a) {
      function r(e) {
        var t = e.stop;
        delete e.stop, t(a);
      }

      return "string" != typeof s && (a = e, e = s, s = void 0), e && !1 !== s && this.queue(s || "fx", []), this.each(function () {
        var e = !0,
            t = null != s && s + "queueHooks",
            n = C.timers,
            i = N.get(this);
        if (t) i[t] && i[t].stop && r(i[t]);else for (t in i) {
          i[t] && i[t].stop && Ze.test(t) && r(i[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != s && n[t].queue !== s || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
        }

        !e && a || C.dequeue(this, s);
      });
    },
    finish: function finish(r) {
      return !1 !== r && (r = r || "fx"), this.each(function () {
        var e,
            t = N.get(this),
            n = t[r + "queue"],
            i = t[r + "queueHooks"],
            s = C.timers,
            a = n ? n.length : 0;

        for (t.finish = !0, C.queue(this, r, []), i && i.stop && i.stop.call(this, !0), e = s.length; e--;) {
          s[e].elem === this && s[e].queue === r && (s[e].anim.stop(!0), s.splice(e, 1));
        }

        for (e = 0; e < a; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), C.each(["toggle", "show", "hide"], function (e, i) {
    var s = C.fn[i];

    C.fn[i] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(Qe(i, !0), e, t, n);
    };
  }), C.each({
    slideDown: Qe("show"),
    slideUp: Qe("hide"),
    slideToggle: Qe("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, i) {
    C.fn[e] = function (e, t, n) {
      return this.animate(i, e, t, n);
    };
  }), C.timers = [], C.fx.tick = function () {
    var e,
        t = 0,
        n = C.timers;

    for (Ye = C.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || C.fx.stop(), Ye = void 0;
  }, C.fx.timer = function (e) {
    C.timers.push(e), e() ? C.fx.start() : C.timers.pop();
  }, C.fx.interval = 13, C.fx.start = function () {
    Xe = Xe || x.setInterval(C.fx.tick, C.fx.interval);
  }, C.fx.stop = function () {
    x.clearInterval(Xe), Xe = null;
  }, C.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, C.fn.delay = function (i, e) {
    return i = C.fx && C.fx.speeds[i] || i, this.queue(e = e || "fx", function (e, t) {
      var n = x.setTimeout(e, i);

      t.stop = function () {
        x.clearTimeout(n);
      };
    });
  }, h = _.createElement("input"), R = (n = _.createElement("select")).appendChild(_.createElement("option")), h.type = "checkbox", g.checkOn = "" !== h.value, g.optSelected = R.selected, n.disabled = !0, g.optDisabled = !R.disabled, (h = _.createElement("input")).value = "t", h.type = "radio", g.radioValue = "t" === h.value;
  var tt,
      nt = C.expr.attrHandle;
  C.fn.extend({
    attr: function attr(e, t) {
      return A(this, C.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        C.removeAttr(this, e);
      });
    }
  }), C.extend({
    attr: function attr(e, t, n) {
      var i,
          s,
          a = e.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === a && C.isXMLDoc(e) || (t = t.toLowerCase(), s = C.attrHooks[t] || (C.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(s && "get" in s && null !== (i = s.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!g.radioValue && "radio" === t && C.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          i,
          s = 0,
          a = t && t.match(P);
      if (a && 1 === e.nodeType) for (; n = a[s++];) {
        i = C.propFix[n] || n, C.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n);
      }
    }
  }), tt = {
    set: function set(e, t, n) {
      return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = nt[t] || C.find.attr;

    nt[t] = function (e, t, n) {
      var i, s;
      return n || (s = nt[t], nt[t] = i, i = null != a(e, t, n) ? t.toLowerCase() : null, nt[t] = s), i;
    };
  });
  var it = /^(?:input|select|textarea|button)$/i,
      st = /^(?:a|area)$/i;
  C.fn.extend({
    prop: function prop(e, t) {
      return A(this, C.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[C.propFix[e] || e];
      });
    }
  }), C.extend({
    prop: function prop(e, t, n) {
      var i,
          s,
          a = e.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t, s = C.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = C.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : it.test(e.nodeName) || st.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), g.optSelected || (C.propHooks.selected = {
    get: function get(e) {
      return (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      (e = e.parentNode) && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    }
  }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    C.propFix[this.toLowerCase()] = this;
  });
  var at = /[\t\r\n\f]/g;

  function rt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  C.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          i,
          s,
          a,
          r,
          o = 0;
      if (C.isFunction(t)) return this.each(function (e) {
        C(this).addClass(t.call(this, e, rt(this)));
      });
      if ("string" == typeof t && t) for (e = t.match(P) || []; n = this[o++];) {
        if (r = rt(n), i = 1 === n.nodeType && (" " + r + " ").replace(at, " ")) {
          for (a = 0; s = e[a++];) {
            i.indexOf(" " + s + " ") < 0 && (i += s + " ");
          }

          r !== (r = C.trim(i)) && n.setAttribute("class", r);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          i,
          s,
          a,
          r,
          o = 0;
      if (C.isFunction(t)) return this.each(function (e) {
        C(this).removeClass(t.call(this, e, rt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t) for (e = t.match(P) || []; n = this[o++];) {
        if (r = rt(n), i = 1 === n.nodeType && (" " + r + " ").replace(at, " ")) {
          for (a = 0; s = e[a++];) {
            for (; -1 < i.indexOf(" " + s + " ");) {
              i = i.replace(" " + s + " ", " ");
            }
          }

          r !== (r = C.trim(i)) && n.setAttribute("class", r);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(s, t) {
      var a = _typeof(s);

      return "boolean" == typeof t && "string" == a ? t ? this.addClass(s) : this.removeClass(s) : C.isFunction(s) ? this.each(function (e) {
        C(this).toggleClass(s.call(this, e, rt(this), t), t);
      }) : this.each(function () {
        var e, t, n, i;
        if ("string" == a) for (t = 0, n = C(this), i = s.match(P) || []; e = i[t++];) {
          n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== s && "boolean" != a || ((e = rt(this)) && N.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== s && N.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      for (var t, n = 0, i = " " + e + " "; t = this[n++];) {
        if (1 === t.nodeType && -1 < (" " + rt(t) + " ").replace(at, " ").indexOf(i)) return !0;
      }

      return !1;
    }
  });
  var ot = /\r/g,
      lt = /[\x20\t\r\n\f]+/g;
  C.fn.extend({
    val: function val(t) {
      var n,
          e,
          i,
          s = this[0];
      return arguments.length ? (i = C.isFunction(t), this.each(function (e) {
        1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function (e) {
          return null == e ? "" : e + "";
        })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e));
      })) : s ? (n = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(s, "value")) ? e : "string" == typeof (e = s.value) ? e.replace(ot, "") : null == e ? "" : e : void 0;
    }
  }), C.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = C.find.attr(e, "value");
          return null != t ? t : C.trim(C.text(e)).replace(lt, " ");
        }
      },
      select: {
        get: function get(e) {
          for (var t, n = e.options, i = e.selectedIndex, s = "select-one" === e.type || i < 0, a = s ? null : [], r = s ? i + 1 : n.length, o = i < 0 ? r : s ? i : 0; o < r; o++) {
            if (((t = n[o]).selected || o === i) && (g.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !C.nodeName(t.parentNode, "optgroup"))) {
              if (t = C(t).val(), s) return t;
              a.push(t);
            }
          }

          return a;
        },
        set: function set(e, t) {
          for (var n, i, s = e.options, a = C.makeArray(t), r = s.length; r--;) {
            ((i = s[r]).selected = -1 < C.inArray(C.valHooks.option.get(i), a)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), a;
        }
      }
    }
  }), C.each(["radio", "checkbox"], function () {
    C.valHooks[this] = {
      set: function set(e, t) {
        return C.isArray(t) ? e.checked = -1 < C.inArray(C(e).val(), t) : void 0;
      }
    }, g.checkOn || (C.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var ct = /^(?:focusinfocus|focusoutblur)$/;
  C.extend(C.event, {
    trigger: function trigger(e, t, n, i) {
      var s,
          a,
          r,
          o,
          l,
          c,
          d = [n || _],
          u = f.call(e, "type") ? e.type : e,
          h = f.call(e, "namespace") ? e.namespace.split(".") : [],
          p = a = n = n || _;

      if (3 !== n.nodeType && 8 !== n.nodeType && !ct.test(u + C.event.triggered) && (-1 < u.indexOf(".") && (u = (h = u.split(".")).shift(), h.sort()), o = u.indexOf(":") < 0 && "on" + u, (e = e[C.expando] ? e : new C.Event(u, "object" == _typeof(e) && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[u] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!i && !c.noBubble && !C.isWindow(n)) {
          for (r = c.delegateType || u, ct.test(r + u) || (p = p.parentNode); p; p = p.parentNode) {
            d.push(p), a = p;
          }

          a === (n.ownerDocument || _) && d.push(a.defaultView || a.parentWindow || x);
        }

        for (s = 0; (p = d[s++]) && !e.isPropagationStopped();) {
          e.type = 1 < s ? r : c.bindType || u, (l = (N.get(p, "events") || {})[e.type] && N.get(p, "handle")) && l.apply(p, t), (l = o && p[o]) && l.apply && O(p) && (e.result = l.apply(p, t), !1 === e.result && e.preventDefault());
        }

        return e.type = u, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !O(n) || o && C.isFunction(n[u]) && !C.isWindow(n) && ((a = n[o]) && (n[o] = null), n[C.event.triggered = u](), C.event.triggered = void 0, a && (n[o] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      e = C.extend(new C.Event(), n, {
        type: e,
        isSimulated: !0
      }), C.event.trigger(e, null, t);
    }
  }), C.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        C.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      return n ? C.event.trigger(e, t, n, !0) : void 0;
    }
  }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
    C.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), C.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), g.focusin = "onfocusin" in x, g.focusin || C.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, i) {
    function s(e) {
      C.event.simulate(i, e.target, C.event.fix(e));
    }

    C.event.special[i] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = N.access(e, i);
        t || e.addEventListener(n, s, !0), N.access(e, i, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = N.access(e, i) - 1;
        t ? N.access(e, i, t) : (e.removeEventListener(n, s, !0), N.remove(e, i));
      }
    };
  });
  var dt = x.location,
      ut = C.now(),
      ht = /\?/;
  C.parseJSON = function (e) {
    return JSON.parse(e + "");
  }, C.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new x.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t;
  };

  var pt = /#.*$/,
      ft = /([?&])_=[^&]*/,
      mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      gt = /^(?:GET|HEAD)$/,
      vt = /^\/\//,
      bt = {},
      yt = {},
      wt = "*/".concat("*"),
      xt = _.createElement("a");

  function _t(a) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          i = 0,
          s = e.toLowerCase().match(P) || [];
      if (C.isFunction(t)) for (; n = s[i++];) {
        "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t);
      }
    };
  }

  function Ct(t, i, s, a) {
    var r = {},
        o = t === yt;

    function l(e) {
      var n;
      return r[e] = !0, C.each(t[e] || [], function (e, t) {
        return "string" != typeof (t = t(i, s, a)) || o || r[t] ? o ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1);
      }), n;
    }

    return l(i.dataTypes[0]) || !r["*"] && l("*");
  }

  function Tt(e, t) {
    var n,
        i,
        s = C.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((s[n] ? e : i = i || {})[n] = t[n]);
    }

    return i && C.extend(!0, e, i), e;
  }

  xt.href = dt.href, C.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: dt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": wt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": C.parseJSON,
        "text xml": C.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Tt(Tt(e, C.ajaxSettings), t) : Tt(C.ajaxSettings, e);
    },
    ajaxPrefilter: _t(bt),
    ajaxTransport: _t(yt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0);
      var l,
          c,
          d,
          n,
          u,
          h,
          i,
          p = C.ajaxSetup({}, t = t || {}),
          f = p.context || p,
          m = p.context && (f.nodeType || f.jquery) ? C(f) : C.event,
          g = C.Deferred(),
          v = C.Callbacks("once memory"),
          b = p.statusCode || {},
          s = {},
          a = {},
          y = 0,
          r = "canceled",
          w = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (2 === y) {
            if (!n) for (n = {}; t = mt.exec(d);) {
              n[t[1].toLowerCase()] = t[2];
            }
            t = n[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === y ? d : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return y || (e = a[n] = a[n] || e, s[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return y || (p.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          if (e) if (y < 2) for (var t in e) {
            b[t] = [b[t], e[t]];
          } else w.always(e[w.status]);
          return this;
        },
        abort: function abort(e) {
          return e = e || r, l && l.abort(e), o(0, e), this;
        }
      };

      if (g.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || dt.href) + "").replace(pt, "").replace(vt, dt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = C.trim(p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
        e = _.createElement("a");

        try {
          e.href = p.url, e.href = e.href, p.crossDomain = xt.protocol + "//" + xt.host != e.protocol + "//" + e.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }

      if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Ct(bt, p, t, w), 2 === y) return w;

      for (i in (h = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !gt.test(p.type), c = p.url, p.hasContent || (p.data && (c = p.url += (ht.test(c) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = ft.test(c) ? c.replace(ft, "$1_=" + ut++) : c + (ht.test(c) ? "&" : "?") + "_=" + ut++)), p.ifModified && (C.lastModified[c] && w.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && w.setRequestHeader("If-None-Match", C.etag[c])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        w.setRequestHeader(i, p.headers[i]);
      }

      if (p.beforeSend && (!1 === p.beforeSend.call(f, w, p) || 2 === y)) return w.abort();

      for (i in r = "abort", {
        success: 1,
        error: 1,
        complete: 1
      }) {
        w[i](p[i]);
      }

      if (l = Ct(yt, p, t, w)) {
        if (w.readyState = 1, h && m.trigger("ajaxSend", [w, p]), 2 === y) return w;
        p.async && 0 < p.timeout && (u = x.setTimeout(function () {
          w.abort("timeout");
        }, p.timeout));

        try {
          y = 1, l.send(s, o);
        } catch (e) {
          if (!(y < 2)) throw e;
          o(-1, e);
        }
      } else o(-1, "No Transport");

      function o(e, t, n, i) {
        var s,
            a,
            r,
            o = t;
        2 !== y && (y = 2, u && x.clearTimeout(u), l = void 0, d = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (r = function (e, t, n) {
          for (var i, s, a, r, o = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (i) for (s in o) {
            if (o[s] && o[s].test(i)) {
              l.unshift(s);
              break;
            }
          }
          if (l[0] in n) a = l[0];else {
            for (s in n) {
              if (!l[0] || e.converters[s + " " + l[0]]) {
                a = s;
                break;
              }

              r = r || s;
            }

            a = a || r;
          }
          return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0;
        }(p, w, n)), r = function (e, t, n, i) {
          var s,
              a,
              r,
              o,
              l,
              c = {},
              d = e.dataTypes.slice();
          if (d[1]) for (r in e.converters) {
            c[r.toLowerCase()] = e.converters[r];
          }

          for (a = d.shift(); a;) {
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift()) if ("*" === a) a = l;else if ("*" !== l && l !== a) {
              if (!(r = c[l + " " + a] || c["* " + a])) for (s in c) {
                if (o = s.split(" "), o[1] === a && (r = c[l + " " + o[0]] || c["* " + o[0]])) {
                  !0 === r ? r = c[s] : !0 !== c[s] && (a = o[0], d.unshift(o[1]));
                  break;
                }
              }
              if (!0 !== r) if (r && e["throws"]) t = r(t);else try {
                t = r(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: r ? e : "No conversion from " + l + " to " + a
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(p, r, w, i), i ? (p.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (C.lastModified[c] = n), (n = w.getResponseHeader("etag")) && (C.etag[c] = n)), 204 === e || "HEAD" === p.type ? o = "nocontent" : 304 === e ? o = "notmodified" : (o = r.state, s = r.data, i = !(a = r.error))) : (a = o, !e && o || (o = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || o) + "", i ? g.resolveWith(f, [s, o, w]) : g.rejectWith(f, [w, o, a]), w.statusCode(b), b = void 0, h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [w, p, i ? s : a]), v.fireWith(f, [w, o]), h && (m.trigger("ajaxComplete", [w, p]), --C.active || C.event.trigger("ajaxStop")));
      }

      return w;
    },
    getJSON: function getJSON(e, t, n) {
      return C.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return C.get(e, void 0, t, "script");
    }
  }), C.each(["get", "post"], function (e, s) {
    C[s] = function (e, t, n, i) {
      return C.isFunction(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
        url: e,
        type: s,
        dataType: i,
        data: t,
        success: n
      }, C.isPlainObject(e) && e));
    };
  }), C._evalUrl = function (e) {
    return C.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, C.fn.extend({
    wrapAll: function wrapAll(t) {
      var e;
      return C.isFunction(t) ? this.each(function (e) {
        C(this).wrapAll(t.call(this, e));
      }) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(n) {
      return C.isFunction(n) ? this.each(function (e) {
        C(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = C(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = C.isFunction(t);
      return this.each(function (e) {
        C(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        C.nodeName(this, "body") || C(this).replaceWith(this.childNodes);
      }).end();
    }
  }), C.expr.filters.hidden = function (e) {
    return !C.expr.filters.visible(e);
  }, C.expr.filters.visible = function (e) {
    return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length;
  };
  var Et = /%20/g,
      St = /\[\]$/,
      kt = /\r?\n/g,
      Mt = /^(?:submit|button|image|reset|file)$/i,
      $t = /^(?:input|select|textarea|keygen)/i;
  C.param = function (e, t) {
    function n(e, t) {
      t = C.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    }

    var i,
        s = [];
    if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
      n(this.name, this.value);
    });else for (i in e) {
      !function n(i, e, s, a) {
        if (C.isArray(e)) C.each(e, function (e, t) {
          s || St.test(i) ? a(i, t) : n(i + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, s, a);
        });else if (s || "object" !== C.type(e)) a(i, e);else for (var t in e) {
          n(i + "[" + t + "]", e[t], s, a);
        }
      }(i, e[i], t, n);
    }
    return s.join("&").replace(Et, "+");
  }, C.fn.extend({
    serialize: function serialize() {
      return C.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = C.prop(this, "elements");
        return e ? C.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !C(this).is(":disabled") && $t.test(this.nodeName) && !Mt.test(e) && (this.checked || !W.test(e));
      }).map(function (e, t) {
        var n = C(this).val();
        return null == n ? null : C.isArray(n) ? C.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  }), C.ajaxSettings.xhr = function () {
    try {
      return new x.XMLHttpRequest();
    } catch (e) {}
  };
  var Dt = {
    0: 200,
    1223: 204
  },
      Pt = C.ajaxSettings.xhr();
  g.cors = !!Pt && "withCredentials" in Pt, g.ajax = Pt = !!Pt, C.ajaxTransport(function (s) {
    var _a, r;

    return g.cors || Pt && !s.crossDomain ? {
      send: function send(e, t) {
        var n,
            i = s.xhr();
        if (i.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields) for (n in s.xhrFields) {
          i[n] = s.xhrFields[n];
        }

        for (n in s.mimeType && i.overrideMimeType && i.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          i.setRequestHeader(n, e[n]);
        }

        _a = function a(e) {
          return function () {
            _a && (_a = r = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Dt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
              binary: i.response
            } : {
              text: i.responseText
            }, i.getAllResponseHeaders()));
          };
        }, i.onload = _a(), r = i.onerror = _a("error"), void 0 !== i.onabort ? i.onabort = r : i.onreadystatechange = function () {
          4 === i.readyState && x.setTimeout(function () {
            _a && r();
          });
        }, _a = _a("abort");

        try {
          i.send(s.hasContent && s.data || null);
        } catch (e) {
          if (_a) throw e;
        }
      },
      abort: function abort() {
        _a && _a();
      }
    } : void 0;
  }), C.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return C.globalEval(e), e;
      }
    }
  }), C.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), C.ajaxTransport("script", function (n) {
    var i, _s;

    if (n.crossDomain) return {
      send: function send(e, t) {
        i = C("<script>").prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _s = function s(e) {
          i.remove(), _s = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), _.head.appendChild(i[0]);
      },
      abort: function abort() {
        _s && _s();
      }
    };
  });
  var Lt = [],
      At = /(=)\?(?=&|$)|\?\?/;
  C.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Lt.pop() || C.expando + "_" + ut++;
      return this[e] = !0, e;
    }
  }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
    var i,
        s,
        a,
        r = !1 !== e.jsonp && (At.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && At.test(e.data) && "data");
    return r || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(At, "$1" + i) : !1 !== e.jsonp && (e.url += (ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
      return a || C.error(i + " was not called"), a[0];
    }, e.dataTypes[0] = "json", s = x[i], x[i] = function () {
      a = arguments;
    }, n.always(function () {
      void 0 === s ? C(x).removeProp(i) : x[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, Lt.push(i)), a && C.isFunction(s) && s(a[0]), a = s = void 0;
    }), "script") : void 0;
  }), C.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || _;
    var i = y.exec(e),
        n = !n && [];
    return i ? [t.createElement(i[1])] : (i = J([e], t, n), n && n.length && C(n).remove(), C.merge([], i.childNodes));
  };
  var Ot = C.fn.load;

  function It(e) {
    return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }

  C.fn.load = function (e, t, n) {
    if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
    var i,
        s,
        a,
        r = this,
        o = e.indexOf(" ");
    return -1 < o && (i = C.trim(e.slice(o)), e = e.slice(0, o)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (s = "POST"), 0 < r.length && C.ajax({
      url: e,
      type: s || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      a = arguments, r.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      r.each(function () {
        n.apply(this, a || [e.responseText, t, e]);
      });
    }), this;
  }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    C.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), C.expr.filters.animated = function (t) {
    return C.grep(C.timers, function (e) {
      return t === e.elem;
    }).length;
  }, C.offset = {
    setOffset: function setOffset(e, t, n) {
      var i,
          s,
          a,
          r,
          o = C.css(e, "position"),
          l = C(e),
          c = {};
      "static" === o && (e.style.position = "relative"), a = l.offset(), i = C.css(e, "top"), r = C.css(e, "left"), r = ("absolute" === o || "fixed" === o) && -1 < (i + r).indexOf("auto") ? (s = (o = l.position()).top, o.left) : (s = parseFloat(i) || 0, parseFloat(r) || 0), null != (t = C.isFunction(t) ? t.call(e, n, C.extend({}, a)) : t).top && (c.top = t.top - a.top + s), null != t.left && (c.left = t.left - a.left + r), "using" in t ? t.using.call(e, c) : l.css(c);
    }
  }, C.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        C.offset.setOffset(this, t, e);
      });
      var e,
          n = this[0],
          i = {
        top: 0,
        left: 0
      },
          s = n && n.ownerDocument;
      return s ? (e = s.documentElement, C.contains(e, n) ? (i = n.getBoundingClientRect(), s = It(s), {
        top: i.top + s.pageYOffset - e.clientTop,
        left: i.left + s.pageXOffset - e.clientLeft
      }) : i) : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            i = {
          top: 0,
          left: 0
        };
        return "fixed" === C.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (i = C.nodeName(e[0], "html") ? i : e.offset()).top += C.css(e[0], "borderTopWidth", !0), i.left += C.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - i.top - C.css(n, "marginTop", !0),
          left: t.left - i.left - C.css(n, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === C.css(e, "position");) {
          e = e.offsetParent;
        }

        return e || Le;
      });
    }
  }), C.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, s) {
    var a = "pageYOffset" === s;

    C.fn[t] = function (e) {
      return A(this, function (e, t, n) {
        var i = It(e);
        return void 0 === n ? i ? i[s] : e[t] : void (i ? i.scrollTo(a ? i.pageXOffset : n, a ? n : i.pageYOffset) : e[t] = n);
      }, t, e, arguments.length);
    };
  }), C.each(["top", "left"], function (e, n) {
    C.cssHooks[n] = Ie(g.pixelPosition, function (e, t) {
      return t ? (t = Oe(e, n), Pe.test(t) ? C(e).position()[n] + "px" : t) : void 0;
    });
  }), C.each({
    Height: "height",
    Width: "width"
  }, function (a, r) {
    C.each({
      padding: "inner" + a,
      content: r,
      "": "outer" + a
    }, function (i, e) {
      C.fn[e] = function (e, t) {
        var n = arguments.length && (i || "boolean" != typeof e),
            s = i || (!0 === e || !0 === t ? "margin" : "border");
        return A(this, function (e, t, n) {
          var i;
          return C.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? C.css(e, t, s) : C.style(e, t, n, s);
        }, r, n ? e : void 0, n, null);
      };
    });
  }), C.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    size: function size() {
      return this.length;
    }
  }), C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return C;
  });
  var Nt = x.jQuery,
      zt = x.$;
  return C.noConflict = function (e) {
    return x.$ === C && (x.$ = zt), e && x.jQuery === C && (x.jQuery = Nt), C;
  }, e || (x.jQuery = x.$ = C), C;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
!function () {
  "use strict";

  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function (s) {
  "use strict";

  function a(e) {
    var t = e.attr("data-target");
    return (t = "#" !== (t = t || (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, "")) ? s(document).find(t) : null) && t.length ? t : e.parent();
  }

  function r(i) {
    i && 3 === i.which || (s(".dropdown-backdrop").remove(), s(o).each(function () {
      var e = s(this),
          t = a(e),
          n = {
        relatedTarget: this
      };
      t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && s.contains(t[0], i.target) || (t.trigger(i = s.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), t.removeClass("open").trigger(s.Event("hidden.bs.dropdown", n)))));
    }));
  }

  function i(e) {
    s(e).on("click.bs.dropdown", this.toggle);
  }

  var o = '[data-toggle="dropdown"]';
  i.VERSION = "3.4.1", i.prototype.toggle = function (e) {
    var t = s(this);

    if (!t.is(".disabled, :disabled")) {
      var n = a(t),
          i = n.hasClass("open");

      if (r(), !i) {
        if ("ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", r), n.trigger(e = s.Event("show.bs.dropdown", i = {
          relatedTarget: this
        })), e.isDefaultPrevented()) return;
        t.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", i));
      }

      return !1;
    }
  }, i.prototype.keydown = function (e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
      var t = s(this);

      if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
        var n = a(t),
            i = n.hasClass("open");
        if (!i && 27 != e.which || i && 27 == e.which) return 27 == e.which && n.find(o).trigger("focus"), t.trigger("click");
        (t = n.find(".dropdown-menu li:not(.disabled):visible a")).length && (n = t.index(e.target), 38 == e.which && 0 < n && n--, 40 == e.which && n < t.length - 1 && n++, t.eq(n = ~n ? n : 0).trigger("focus"));
      }
    }
  };
  var e = s.fn.dropdown;
  s.fn.dropdown = function (n) {
    return this.each(function () {
      var e = s(this),
          t = e.data("bs.dropdown");
      t || e.data("bs.dropdown", t = new i(this)), "string" == typeof n && t[n].call(e);
    });
  }, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function () {
    return s.fn.dropdown = e, this;
  }, s(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
    e.stopPropagation();
  }).on("click.bs.dropdown.data-api", o, i.prototype.toggle).on("keydown.bs.dropdown.data-api", o, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown);
}(jQuery), function (p) {
  "use strict";

  function i(e, t, n) {
    if (0 === e.length) return e;
    if (n && "function" == typeof n) return n(e);
    if (!document.implementation || !document.implementation.createHTMLDocument) return e;
    (n = document.implementation.createHTMLDocument("sanitization")).body.innerHTML = e;

    for (var i = p.map(t, function (e, t) {
      return t;
    }), s = p(n.body).find("*"), a = 0, r = s.length; a < r; a++) {
      var o = s[a],
          l = o.nodeName.toLowerCase();
      if (-1 !== p.inArray(l, i)) for (var c = p.map(o.attributes, function (e) {
        return e;
      }), d = [].concat(t["*"] || [], t[l] || []), u = 0, h = c.length; u < h; u++) {
        !function (e, t) {
          var n = e.nodeName.toLowerCase();
          if (-1 !== p.inArray(n, t)) return -1 === p.inArray(n, f) || Boolean(e.nodeValue.match(m) || e.nodeValue.match(g));

          for (var i = p(t).filter(function (e, t) {
            return t instanceof RegExp;
          }), s = 0, a = i.length; s < a; s++) {
            if (n.match(i[s])) return 1;
          }
        }(c[u], d) && o.removeAttribute(c[u].nodeName);
      } else o.parentNode.removeChild(o);
    }

    return n.body.innerHTML;
  }

  function l(e, t) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t);
  }

  var s = ["sanitize", "whiteList", "sanitizeFn"],
      f = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      m = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      g = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  l.VERSION = "3.4.1", l.TRANSITION_DURATION = 150, l.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    },
    sanitize: !0,
    sanitizeFn: null,
    whiteList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    }
  }, l.prototype.init = function (e, t, n) {
    if (this.enabled = !0, this.type = e, this.$element = p(t), this.options = this.getOptions(n), this.$viewport = this.options.viewport && p(document).find(p.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
      var a,
          r = i[s];
      "click" == r ? this.$element.on("click." + this.type, this.options.selector, p.proxy(this.toggle, this)) : "manual" != r && (a = "hover" == r ? "mouseleave" : "focusout", this.$element.on(("hover" == r ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, p.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, p.proxy(this.leave, this)));
    }

    this.options.selector ? this._options = p.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, l.prototype.getDefaults = function () {
    return l.DEFAULTS;
  }, l.prototype.getOptions = function (e) {
    var t,
        n = this.$element.data();

    for (t in n) {
      n.hasOwnProperty(t) && -1 !== p.inArray(t, s) && delete n[t];
    }

    return (e = p.extend({}, this.getDefaults(), n, e)).delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e.sanitize && (e.template = i(e.template, e.whiteList, e.sanitizeFn)), e;
  }, l.prototype.getDelegateOptions = function () {
    var n = {},
        i = this.getDefaults();
    return this._options && p.each(this._options, function (e, t) {
      i[e] != t && (n[e] = t);
    }), n;
  }, l.prototype.enter = function (e) {
    var t = e instanceof this.constructor ? e : p(e.currentTarget).data("bs." + this.type);
    return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), p(e.currentTarget).data("bs." + this.type, t)), e instanceof p.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0), t.tip().hasClass("in") || "in" == t.hoverState ? void (t.hoverState = "in") : (clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void (t.timeout = setTimeout(function () {
      "in" == t.hoverState && t.show();
    }, t.options.delay.show)) : t.show());
  }, l.prototype.isInStateTrue = function () {
    for (var e in this.inState) {
      if (this.inState[e]) return !0;
    }

    return !1;
  }, l.prototype.leave = function (e) {
    var t = e instanceof this.constructor ? e : p(e.currentTarget).data("bs." + this.type);
    return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), p(e.currentTarget).data("bs." + this.type, t)), e instanceof p.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1), t.isInStateTrue() ? void 0 : (clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void (t.timeout = setTimeout(function () {
      "out" == t.hoverState && t.hide();
    }, t.options.delay.hide)) : t.hide());
  }, l.prototype.show = function () {
    var t,
        e,
        n,
        i,
        s,
        a,
        r,
        o = p.Event("show.bs." + this.type);
    this.hasContent() && this.enabled && (this.$element.trigger(o), n = p.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), !o.isDefaultPrevented() && n && (e = (t = this).tip(), a = this.getUID(this.type), this.setContent(), e.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && e.addClass("fade"), r = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, (s = (i = /\s?auto?\s?/i).test(r)) && (r = r.replace(i, "") || "top"), e.detach().css({
      top: 0,
      left: 0,
      display: "block"
    }).addClass(r).data("bs." + this.type, this), this.options.container ? e.appendTo(p(document).find(this.options.container)) : e.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type), o = this.getPosition(), n = e[0].offsetWidth, a = e[0].offsetHeight, s && (i = r, s = this.getPosition(this.$viewport), r = "bottom" == r && o.bottom + a > s.bottom ? "top" : "top" == r && o.top - a < s.top ? "bottom" : "right" == r && o.right + n > s.width ? "left" : "left" == r && o.left - n < s.left ? "right" : r, e.removeClass(i).addClass(r)), a = this.getCalculatedOffset(r, o, n, a), this.applyPlacement(a, r), r = function r() {
      var e = t.hoverState;
      t.$element.trigger("shown.bs." + t.type), t.hoverState = null, "out" == e && t.leave(t);
    }, p.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", r).emulateTransitionEnd(l.TRANSITION_DURATION) : r()));
  }, l.prototype.applyPlacement = function (e, t) {
    var n = this.tip(),
        i = n[0].offsetWidth,
        s = n[0].offsetHeight,
        a = parseInt(n.css("margin-top"), 10),
        r = parseInt(n.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, p.offset.setOffset(n[0], p.extend({
      using: function using(e) {
        n.css({
          top: Math.round(e.top),
          left: Math.round(e.left)
        });
      }
    }, e), 0), n.addClass("in");
    var o = n[0].offsetWidth,
        a = n[0].offsetHeight;
    "top" == t && a != s && (e.top = e.top + s - a), (r = this.getViewportAdjustedDelta(t, e, o, a)).left ? e.left += r.left : e.top += r.top, s = (t = /top|bottom/.test(t)) ? 2 * r.left - i + o : 2 * r.top - s + a, a = t ? "offsetWidth" : "offsetHeight", n.offset(e), this.replaceArrow(s, n[0][a], t);
  }, l.prototype.replaceArrow = function (e, t, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "");
  }, l.prototype.setContent = function () {
    var e = this.tip(),
        t = this.getTitle();
    this.options.html ? (this.options.sanitize && (t = i(t, this.options.whiteList, this.options.sanitizeFn)), e.find(".tooltip-inner").html(t)) : e.find(".tooltip-inner").text(t), e.removeClass("fade in top bottom left right");
  }, l.prototype.hide = function (e) {
    function t() {
      "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e();
    }

    var n = this,
        i = p(this.$tip),
        s = p.Event("hide.bs." + this.type);
    return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (i.removeClass("in"), p.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(l.TRANSITION_DURATION) : t(), this.hoverState = null, this);
  }, l.prototype.fixTitle = function () {
    var e = this.$element;
    !e.attr("title") && "string" == typeof e.attr("data-original-title") || e.attr("data-original-title", e.attr("title") || "").attr("title", "");
  }, l.prototype.hasContent = function () {
    return this.getTitle();
  }, l.prototype.getPosition = function (e) {
    var t = (e = e || this.$element)[0],
        n = "BODY" == t.tagName,
        i = t.getBoundingClientRect();
    return null == i.width && (i = p.extend({}, i, {
      width: i.right - i.left,
      height: i.bottom - i.top
    })), t = window.SVGElement && t instanceof window.SVGElement, t = n ? {
      top: 0,
      left: 0
    } : t ? null : e.offset(), e = {
      scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
    }, n = n ? {
      width: p(window).width(),
      height: p(window).height()
    } : null, p.extend({}, i, e, n, t);
  }, l.prototype.getCalculatedOffset = function (e, t, n, i) {
    return "bottom" == e ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - n / 2
    } : "top" == e ? {
      top: t.top - i,
      left: t.left + t.width / 2 - n / 2
    } : "left" == e ? {
      top: t.top + t.height / 2 - i / 2,
      left: t.left - n
    } : {
      top: t.top + t.height / 2 - i / 2,
      left: t.left + t.width
    };
  }, l.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
    var s = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return s;
    var a,
        r = this.options.viewport && this.options.viewport.padding || 0,
        o = this.getPosition(this.$viewport);
    return /right|left/.test(e) ? (e = t.top - r - o.scroll, a = t.top + r - o.scroll + i, e < o.top ? s.top = o.top - e : a > o.top + o.height && (s.top = o.top + o.height - a)) : (a = t.left - r, n = t.left + r + n, a < o.left ? s.left = o.left - a : n > o.right && (s.left = o.left + o.width - n)), s;
  }, l.prototype.getTitle = function () {
    var e = this.$element,
        t = this.options;
    return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title);
  }, l.prototype.getUID = function (e) {
    for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) {
      ;
    }

    return e;
  }, l.prototype.tip = function () {
    if (!this.$tip && (this.$tip = p(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, l.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, l.prototype.enable = function () {
    this.enabled = !0;
  }, l.prototype.disable = function () {
    this.enabled = !1;
  }, l.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, l.prototype.toggle = function (e) {
    var t = this;
    e && ((t = p(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), p(e.currentTarget).data("bs." + this.type, t))), e ? (t.inState.click = !t.inState.click, t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t);
  }, l.prototype.destroy = function () {
    var e = this;
    clearTimeout(this.timeout), this.hide(function () {
      e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null;
    });
  }, l.prototype.sanitizeHtml = function (e) {
    return i(e, this.options.whiteList, this.options.sanitizeFn);
  };
  var e = p.fn.tooltip;
  p.fn.tooltip = function (i) {
    return this.each(function () {
      var e = p(this),
          t = e.data("bs.tooltip"),
          n = "object" == _typeof(i) && i;
      !t && /destroy|hide/.test(i) || (t || e.data("bs.tooltip", t = new l(this, n)), "string" == typeof i && t[i]());
    });
  }, p.fn.tooltip.Constructor = l, p.fn.tooltip.noConflict = function () {
    return p.fn.tooltip = e, this;
  };
}(jQuery), function (s) {
  "use strict";

  function a(e, t) {
    this.init("popover", e, t);
  }

  if (!s.fn.tooltip) throw new Error("Popover requires tooltip.js");
  a.VERSION = "3.4.1", a.DEFAULTS = s.extend({}, s.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), ((a.prototype = s.extend({}, s.fn.tooltip.Constructor.prototype)).constructor = a).prototype.getDefaults = function () {
    return a.DEFAULTS;
  }, a.prototype.setContent = function () {
    var e,
        t = this.tip(),
        n = this.getTitle(),
        i = this.getContent();
    this.options.html ? (e = _typeof(i), this.options.sanitize && (n = this.sanitizeHtml(n), "string" == e && (i = this.sanitizeHtml(i))), t.find(".popover-title").html(n), t.find(".popover-content").children().detach().end()["string" == e ? "html" : "append"](i)) : (t.find(".popover-title").text(n), t.find(".popover-content").children().detach().end().text(i)), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
  }, a.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, a.prototype.getContent = function () {
    var e = this.$element,
        t = this.options;
    return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content);
  }, a.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var e = s.fn.popover;
  s.fn.popover = function (i) {
    return this.each(function () {
      var e = s(this),
          t = e.data("bs.popover"),
          n = "object" == _typeof(i) && i;
      !t && /destroy|hide/.test(i) || (t || e.data("bs.popover", t = new a(this, n)), "string" == typeof i && t[i]());
    });
  }, s.fn.popover.Constructor = a, s.fn.popover.noConflict = function () {
    return s.fn.popover = e, this;
  };
}(jQuery), function (s) {
  "use strict";

  function n(e) {
    var t = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
    return s(document).find(t);
  }

  function a(i) {
    return this.each(function () {
      var e = s(this),
          t = e.data("bs.collapse"),
          n = s.extend({}, r.DEFAULTS, e.data(), "object" == _typeof(i) && i);
      !t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || e.data("bs.collapse", t = new r(this, n)), "string" == typeof i && t[i]();
    });
  }

  function r(e, t) {
    this.$element = s(e), this.options = s.extend({}, r.DEFAULTS, t), this.$trigger = s('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  }

  r.VERSION = "3.4.1", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
    toggle: !0
  }, r.prototype.dimension = function () {
    return this.$element.hasClass("width") ? "width" : "height";
  }, r.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(e && e.length && (i = e.data("bs.collapse")) && i.transitioning)) {
        var t = s.Event("show.bs.collapse");

        if (this.$element.trigger(t), !t.isDefaultPrevented()) {
          e && e.length && (a.call(e, "hide"), i || e.data("bs.collapse", null));
          var n = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var i = function i() {
            this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!s.support.transition) return i.call(this);
          e = s.camelCase(["scroll", n].join("-")), this.$element.one("bsTransitionEnd", s.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[n](this.$element[0][e]);
        }
      }
    }
  }, r.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = s.Event("hide.bs.collapse");

      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var t = this.dimension();
        return this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        }, s.support.transition ? void this.$element[t](0).one("bsTransitionEnd", s.proxy(e, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, r.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, r.prototype.getParent = function () {
    return s(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(s.proxy(function (e, t) {
      t = s(t), this.addAriaAndCollapsedClass(n(t), t);
    }, this)).end();
  }, r.prototype.addAriaAndCollapsedClass = function (e, t) {
    var n = e.hasClass("in");
    e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n);
  };
  var e = s.fn.collapse;
  s.fn.collapse = a, s.fn.collapse.Constructor = r, s.fn.collapse.noConflict = function () {
    return s.fn.collapse = e, this;
  }, s(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
    var t = s(this);
    t.attr("data-target") || e.preventDefault(), t = (e = n(t)).data("bs.collapse") ? "toggle" : t.data(), a.call(e, t);
  });
}(jQuery), function (i) {
  "use strict";

  i.fn.emulateTransitionEnd = function (e) {
    var t = !1,
        n = this;
    return i(this).one("bsTransitionEnd", function () {
      t = !0;
    }), setTimeout(function () {
      t || i(n).trigger(i.support.transition.end);
    }, e), this;
  }, i(function () {
    i.support.transition = function () {
      var e,
          t = document.createElement("bootstrap"),
          n = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };

      for (e in n) {
        if (void 0 !== t.style[e]) return {
          end: n[e]
        };
      }

      return !1;
    }(), i.support.transition && (i.event.special.bsTransitionEnd = {
      bindType: i.support.transition.end,
      delegateType: i.support.transition.end,
      handle: function handle(e) {
        return i(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery), function () {
  var o,
      e,
      s,
      r,
      a = {}.hasOwnProperty;

  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }

  function n(e, t) {
    this.form_field = e, this.options = null != t ? t : {}, n.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready());
  }

  function i() {
    this.options_index = 0, this.parsed = [];
  }

  i.prototype.add_node = function (e) {
    return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e);
  }, i.prototype.add_group = function (e) {
    var t,
        n,
        i,
        s,
        a,
        r = this.parsed.length;

    for (this.parsed.push({
      array_index: r,
      group: !0,
      label: this.escapeExpression(e.label),
      title: e.title || void 0,
      children: 0,
      disabled: e.disabled,
      classes: e.className
    }), a = [], n = 0, i = (s = e.childNodes).length; n < i; n++) {
      t = s[n], a.push(this.add_option(t, r, e.disabled));
    }

    return a;
  }, i.prototype.add_option = function (e, t, n) {
    return "OPTION" === e.nodeName.toUpperCase() ? ("" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
      array_index: this.parsed.length,
      options_index: this.options_index,
      value: e.value,
      text: e.text,
      html: e.innerHTML,
      title: e.title || void 0,
      selected: e.selected,
      disabled: !0 === n ? n : e.disabled,
      group_array_index: t,
      group_label: null != t ? this.parsed[t].label : null,
      classes: e.className,
      style: e.style.cssText
    })) : this.parsed.push({
      array_index: this.parsed.length,
      options_index: this.options_index,
      empty: !0
    }), this.options_index += 1) : void 0;
  }, i.prototype.escapeExpression = function (e) {
    var t;
    return null == e || !1 === e ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    }, e.replace(/&(?!\w+;)|[\<\>\"\'\`]/g, function (e) {
      return t[e] || "&amp;";
    })) : e;
  }, (r = i).select_to_array = function (e) {
    for (var t, n = new r(), i = e.childNodes, s = 0, a = i.length; s < a; s++) {
      t = i[s], n.add_node(t);
    }

    return n.parsed;
  }, n.prototype.set_default_values = function () {
    var t = this;
    return this.click_test_action = function (e) {
      return t.test_active_click(e);
    }, this.activate_action = function (e) {
      return t.activate_field(e);
    }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1;
  }, n.prototype.set_default_text = function () {
    return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || n.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || n.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || n.default_no_result_text;
  }, n.prototype.choice_label = function (e) {
    return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html : e.html;
  }, n.prototype.mouse_enter = function () {
    return this.mouse_on_container = !0;
  }, n.prototype.mouse_leave = function () {
    return this.mouse_on_container = !1;
  }, n.prototype.input_focus = function (e) {
    var t = this;

    if (this.is_multiple) {
      if (!this.active_field) return setTimeout(function () {
        return t.container_mousedown();
      }, 50);
    } else if (!this.active_field) return this.activate_field();
  }, n.prototype.input_blur = function (e) {
    var t = this;
    return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
      return t.blur_test();
    }, 100));
  }, n.prototype.results_option_build = function (e) {
    for (var t, n, i = "", s = 0, a = this.results_data, r = 0, o = a.length; r < o && ("" !== (n = (t = a[r]).group ? this.result_add_group(t) : this.result_add_option(t)) && (s++, i += n), null != e && e.first && (t.selected && this.is_multiple ? this.choice_build(t) : t.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(t))), !(s >= this.max_shown_results)); r++) {
      ;
    }

    return i;
  }, n.prototype.result_add_option = function (e) {
    var t, n;
    return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), (n = document.createElement("li")).className = t.join(" "), n.style.cssText = e.style, n.setAttribute("data-option-array-index", e.array_index), n.innerHTML = e.search_text, e.title && (n.title = e.title), this.outerHTML(n)) : "";
  }, n.prototype.result_add_group = function (e) {
    var t, n;
    return (e.search_match || e.group_match) && 0 < e.active_options ? ((t = []).push("group-result"), e.classes && t.push(e.classes), (n = document.createElement("li")).className = t.join(" "), n.innerHTML = e.search_text, e.title && (n.title = e.title), this.outerHTML(n)) : "";
  }, n.prototype.results_update_field = function () {
    return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0;
  }, n.prototype.reset_single_select_options = function () {
    for (var e, t = this.results_data, n = [], i = 0, s = t.length; i < s; i++) {
      (e = t[i]).selected ? n.push(e.selected = !1) : n.push(void 0);
    }

    return n;
  }, n.prototype.results_toggle = function () {
    return this.results_showing ? this.results_hide() : this.results_show();
  }, n.prototype.results_search = function (e) {
    return this.results_showing ? this.winnow_results() : this.results_show();
  }, n.prototype.winnow_results = function () {
    var e, t, n, i, s, a, r, o, l, c, d, u;

    for (this.no_results_clear(), i = 0, e = (a = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(e, "i"), n = this.get_search_regex(e), c = 0, d = (u = this.results_data).length; c < d; c++) {
      (t = u[c]).search_match = !1, s = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (0 === (s = this.results_data[t.group_array_index]).active_options && s.search_match && (i += 1), s.active_options += 1), t.search_text = t.group ? t.label : t.html, t.group && !this.group_search || (t.search_match = this.search_string_match(t.search_text, n), t.search_match && !t.group && (i += 1), t.search_match ? (a.length && (r = t.search_text.search(l), o = t.search_text.substr(0, r + a.length) + "</em>" + t.search_text.substr(r + a.length), t.search_text = o.substr(0, r) + "<em>" + o.substr(r)), null != s && (s.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
    }

    return this.result_clear_highlight(), i < 1 && a.length ? (this.update_results_content(""), this.no_results(a)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight());
  }, n.prototype.get_search_regex = function (e) {
    var t = this.search_contains ? "" : "^",
        n = this.case_sensitive_search ? "" : "i";
    return new RegExp(t + e, n);
  }, n.prototype.search_string_match = function (e, t) {
    var n, i, s, a;
    if (t.test(e)) return !0;
    if (this.enable_split_word_search && (0 <= e.indexOf(" ") || 0 === e.indexOf("[")) && (i = e.replace(/\[|\]/g, "").split(" ")).length) for (s = 0, a = i.length; s < a; s++) {
      if (n = i[s], t.test(n)) return !0;
    }
  }, n.prototype.choices_count = function () {
    var e, t, n;
    if (null != this.selected_option_count) return this.selected_option_count;

    for (e = this.selected_option_count = 0, t = (n = this.form_field.options).length; e < t; e++) {
      n[e].selected && (this.selected_option_count += 1);
    }

    return this.selected_option_count;
  }, n.prototype.choices_click = function (e) {
    return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show();
  }, n.prototype.keyup_checker = function (e) {
    var t = null != (t = e.which) ? t : e.keyCode;

    switch (this.search_field_scale(), t) {
      case 8:
        if (this.is_multiple && this.backstroke_length < 1 && 0 < this.choices_count()) return this.keydown_backstroke();
        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
        break;

      case 13:
        if (e.preventDefault(), this.results_showing) return this.result_select(e);
        break;

      case 27:
        return this.results_showing && this.results_hide(), !0;

      case 9:
      case 38:
      case 40:
      case 16:
      case 91:
      case 17:
      case 18:
        break;

      default:
        return this.results_search();
    }
  }, n.prototype.clipboard_event_checker = function (e) {
    var t = this;
    return setTimeout(function () {
      return t.results_search();
    }, 50);
  }, n.prototype.container_width = function () {
    return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px";
  }, n.prototype.include_option_in_results = function (e) {
    return !(this.is_multiple && !this.display_selected_options && e.selected || !this.display_disabled_options && e.disabled || e.empty);
  }, n.prototype.search_results_touchstart = function (e) {
    return this.touch_started = !0, this.search_results_mouseover(e);
  }, n.prototype.search_results_touchmove = function (e) {
    return this.touch_started = !1, this.search_results_mouseout(e);
  }, n.prototype.search_results_touchend = function (e) {
    return this.touch_started ? this.search_results_mouseup(e) : void 0;
  }, n.prototype.outerHTML = function (e) {
    var t;
    return e.outerHTML || ((t = document.createElement("div")).appendChild(e), t.innerHTML);
  }, n.browser_is_supported = function () {
    return "Microsoft Internet Explorer" === window.navigator.appName ? 8 <= document.documentMode : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent));
  }, n.default_multiple_text = "Select Some Options", n.default_single_text = "Select an Option", n.default_no_result_text = "No results match", e = n, (o = jQuery).fn.extend({
    chosen: function chosen(i) {
      return e.browser_is_supported() ? this.each(function (e) {
        var t = o(this),
            n = t.data("chosen");
        return "destroy" === i ? void (n instanceof s && n.destroy()) : void (n instanceof s || t.data("chosen", new s(this, i)));
      }) : this;
    }
  }), function (e, t) {
    function n() {
      this.constructor = e;
    }

    for (var i in t) {
      a.call(t, i) && (e[i] = t[i]);
    }

    n.prototype = t.prototype, e.prototype = new n(), e.__super__ = t.prototype;
  }(t, e), t.prototype.setup = function () {
    return this.form_field_jq = o(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
  }, t.prototype.set_up_html = function () {
    var e = ["chosen-container"];
    return e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), e = {
      "class": e.join(" "),
      style: "width: " + this.container_width() + ";",
      title: this.form_field.title
    }, this.form_field.id.length && (e.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = o("<div />", e), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior();
  }, t.prototype.on_ready = function () {
    return this.form_field_jq.trigger("chosen:ready", {
      chosen: this
    });
  }, t.prototype.register_observers = function () {
    var t = this;
    return this.container.bind("touchstart.chosen", function (e) {
      return t.container_mousedown(e), e.preventDefault();
    }), this.container.bind("touchend.chosen", function (e) {
      return t.container_mouseup(e), e.preventDefault();
    }), this.container.bind("mousedown.chosen", function (e) {
      t.container_mousedown(e);
    }), this.container.bind("mouseup.chosen", function (e) {
      t.container_mouseup(e);
    }), this.container.bind("mouseenter.chosen", function (e) {
      t.mouse_enter(e);
    }), this.container.bind("mouseleave.chosen", function (e) {
      t.mouse_leave(e);
    }), this.search_results.bind("mouseup.chosen", function (e) {
      t.search_results_mouseup(e);
    }), this.search_results.bind("mouseover.chosen", function (e) {
      t.search_results_mouseover(e);
    }), this.search_results.bind("mouseout.chosen", function (e) {
      t.search_results_mouseout(e);
    }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (e) {
      t.search_results_mousewheel(e);
    }), this.search_results.bind("touchstart.chosen", function (e) {
      t.search_results_touchstart(e);
    }), this.search_results.bind("touchmove.chosen", function (e) {
      t.search_results_touchmove(e);
    }), this.search_results.bind("touchend.chosen", function (e) {
      t.search_results_touchend(e);
    }), this.form_field_jq.bind("chosen:updated.chosen", function (e) {
      t.results_update_field(e);
    }), this.form_field_jq.bind("chosen:activate.chosen", function (e) {
      t.activate_field(e);
    }), this.form_field_jq.bind("chosen:open.chosen", function (e) {
      t.container_mousedown(e);
    }), this.form_field_jq.bind("chosen:close.chosen", function (e) {
      t.input_blur(e);
    }), this.search_field.bind("blur.chosen", function (e) {
      t.input_blur(e);
    }), this.search_field.bind("keyup.chosen", function (e) {
      t.keyup_checker(e);
    }), this.search_field.bind("keydown.chosen", function (e) {
      t.keydown_checker(e);
    }), this.search_field.bind("focus.chosen", function (e) {
      t.input_focus(e);
    }), this.search_field.bind("cut.chosen", function (e) {
      t.clipboard_event_checker(e);
    }), this.search_field.bind("paste.chosen", function (e) {
      t.clipboard_event_checker(e);
    }), this.is_multiple ? this.search_choices.bind("click.chosen", function (e) {
      t.choices_click(e);
    }) : this.container.bind("click.chosen", function (e) {
      e.preventDefault();
    });
  }, t.prototype.destroy = function () {
    return o(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show();
  }, t.prototype.search_field_disabled = function () {
    return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action));
  }, t.prototype.container_mousedown = function (e) {
    return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && o(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || o(e.target)[0] !== this.selected_item[0] && !o(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), o(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field());
  }, t.prototype.container_mouseup = function (e) {
    return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e);
  }, t.prototype.search_results_mousewheel = function (e) {
    var t;
    return null != (t = e.originalEvent ? e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail : t) ? (e.preventDefault(), "DOMMouseScroll" === e.type && (t *= 40), this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0;
  }, t.prototype.blur_test = function (e) {
    return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0;
  }, t.prototype.close_field = function () {
    return o(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale();
  }, t.prototype.activate_field = function () {
    return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus();
  }, t.prototype.test_active_click = function (e) {
    return (e = o(e.target).closest(".chosen-container")).length && this.container[0] === e[0] ? this.active_field = !0 : this.close_field();
  }, t.prototype.results_build = function () {
    return this.parsing = !0, this.selected_option_count = null, this.results_data = r.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
      first: !0
    })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1;
  }, t.prototype.result_do_highlight = function (e) {
    var t, n, i;
    if (e.length) return this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), (n = parseInt(this.search_results.css("maxHeight"), 10)) + (i = this.search_results.scrollTop()) <= (e = (t = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight()) ? this.search_results.scrollTop(0 < e - n ? e - n : 0) : t < i ? this.search_results.scrollTop(t) : void 0;
  }, t.prototype.result_clear_highlight = function () {
    return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null;
  }, t.prototype.results_show = function () {
    return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
      chosen: this
    }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
      chosen: this
    }));
  }, t.prototype.update_results_content = function (e) {
    return this.search_results.html(e);
  }, t.prototype.results_hide = function () {
    return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
      chosen: this
    })), this.results_showing = !1;
  }, t.prototype.set_tab_index = function (e) {
    var t;
    return this.form_field.tabIndex ? (t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t) : void 0;
  }, t.prototype.set_label_behavior = function () {
    var t = this;
    return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = o("label[for='" + this.form_field.id + "']")), 0 < this.form_field_label.length ? this.form_field_label.bind("click.chosen", function (e) {
      return t.is_multiple ? t.container_mousedown(e) : t.activate_field();
    }) : void 0;
  }, t.prototype.show_search_field_default = function () {
    return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"));
  }, t.prototype.search_results_mouseup = function (e) {
    var t = o(e.target).hasClass("active-result") ? o(e.target) : o(e.target).parents(".active-result").first();
    return t.length ? (this.result_highlight = t, this.result_select(e), this.search_field.focus()) : void 0;
  }, t.prototype.search_results_mouseover = function (e) {
    return (e = o(e.target).hasClass("active-result") ? o(e.target) : o(e.target).parents(".active-result").first()) ? this.result_do_highlight(e) : void 0;
  }, t.prototype.search_results_mouseout = function (e) {
    return o(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0;
  }, t.prototype.choice_build = function (e) {
    var t = this,
        n = o("<li />", {
      "class": "search-choice"
    }).html("<span>" + this.choice_label(e) + "</span>");
    return e.disabled ? n.addClass("search-choice-disabled") : ((e = o("<a />", {
      "class": "search-choice-close",
      "data-option-array-index": e.array_index
    })).bind("click.chosen", function (e) {
      return t.choice_destroy_link_click(e);
    }), n.append(e)), this.search_container.before(n);
  }, t.prototype.choice_destroy_link_click = function (e) {
    return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(o(e.target));
  }, t.prototype.choice_destroy = function (e) {
    return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && 0 < this.choices_count() && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()) : void 0;
  }, t.prototype.results_reset = function () {
    return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0;
  }, t.prototype.results_reset_cleanup = function () {
    return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove();
  }, t.prototype.result_select = function (e) {
    var t;
    return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
      chosen: this
    }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), t.addClass("result-selected"), (t = this.results_data[t[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[t.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(t) : this.single_set_selected_text(this.choice_label(t)), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), !this.is_multiple && this.form_field.selectedIndex === this.current_selectedIndex || this.form_field_jq.trigger("change", {
      selected: this.form_field.options[t.options_index].value
    }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), this.search_field_scale())) : void 0;
  }, t.prototype.single_set_selected_text = function (e) {
    return (e = null == e ? this.default_text : e) === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e);
  }, t.prototype.result_deselect = function (e) {
    return e = this.results_data[e], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
      deselected: this.form_field.options[e.options_index].value
    }), this.search_field_scale(), !0);
  }, t.prototype.single_deselect_control_build = function () {
    return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0;
  }, t.prototype.get_search_text = function () {
    return o("<div/>").text(o.trim(this.search_field.val())).html();
  }, t.prototype.winnow_results_set_highlight = function () {
    var e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result");
    return null != (e = (e.length ? e : this.search_results.find(".active-result")).first()) ? this.result_do_highlight(e) : void 0;
  }, t.prototype.no_results = function (e) {
    var t = o('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
    return t.find("span").first().html(e), this.search_results.append(t), this.form_field_jq.trigger("chosen:no_results", {
      chosen: this
    });
  }, t.prototype.no_results_clear = function () {
    return this.search_results.find(".no-results").remove();
  }, t.prototype.keydown_arrow = function () {
    var e;
    return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show();
  }, t.prototype.keyup_arrow = function () {
    var e;
    return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(e.first()) : (0 < this.choices_count() && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show();
  }, t.prototype.keydown_backstroke = function () {
    var e;
    return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last()).length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0;
  }, t.prototype.clear_backstroke = function () {
    return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null;
  }, t.prototype.keydown_checker = function (e) {
    var t = null != (t = e.which) ? t : e.keyCode;

    switch (this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
      case 8:
        this.backstroke_length = this.search_field.val().length;
        break;

      case 9:
        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
        break;

      case 13:
        this.results_showing && e.preventDefault();
        break;

      case 32:
        this.disable_search && e.preventDefault();
        break;

      case 38:
        e.preventDefault(), this.keyup_arrow();
        break;

      case 40:
        e.preventDefault(), this.keydown_arrow();
    }
  }, t.prototype.search_field_scale = function () {
    var e, t, n, i, s, a, r;

    if (this.is_multiple) {
      for (n = "position:absolute; left: -1000px; top: -1000px; display:none;", a = s = 0, r = (i = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; a < r; a++) {
        n += (t = i[a]) + ":" + this.search_field.css(t) + ";";
      }

      return (e = o("<div />", {
        style: n
      })).text(this.search_field.val()), o("body").append(e), s = e.width() + 25, e.remove(), e = this.container.outerWidth(), this.search_field.css({
        width: (s = e - 10 < s ? e - 10 : s) + "px"
      });
    }
  }, s = t;
}.call(void 0), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? e(require("jquery")) : e(jQuery);
}(function (C, T) {
  function E() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function S() {
    var e = new Date();
    return E(e.getFullYear(), e.getMonth(), e.getDate());
  }

  function e(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }

  function k(e, t) {
    C(e).data("datepicker", this), this._process_options(t), this.dates = new n(), this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = C(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = C($.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (e, t) {
      return parseInt(t) + 1;
    }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show();
  }

  var t,
      n = (t = {
    get: function get(e) {
      return this.slice(e)[0];
    },
    contains: function contains(e) {
      for (var t = e && e.valueOf(), n = 0, i = this.length; n < i; n++) {
        if (this[n].valueOf() === t) return n;
      }

      return -1;
    },
    remove: function remove(e) {
      this.splice(e, 1);
    },
    replace: function replace(e) {
      e && (C.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e));
    },
    clear: function clear() {
      this.length = 0;
    },
    copy: function copy() {
      var e = new n();
      return e.replace(this), e;
    }
  }, function () {
    var e = [];
    return e.push.apply(e, arguments), C.extend(e, t), e;
  });

  function l(e, t) {
    C(e).data("datepicker", this), this.element = C(e), this.inputs = C.map(t.inputs, function (e) {
      return e.jquery ? e[0] : e;
    }), delete t.inputs, s.call(C(this.inputs), t).on("changeDate", C.proxy(this.dateUpdated, this)), this.pickers = C.map(this.inputs, function (e) {
      return C(e).data("datepicker");
    }), this.updateDates();
  }

  k.prototype = {
    constructor: k,
    _resolveViewName: function _resolveViewName(e, t) {
      return 0 === e || "days" === e || "month" === e ? 0 : 1 === e || "months" === e || "year" === e ? 1 : 2 === e || "years" === e || "decade" === e ? 2 : 3 === e || "decades" === e || "century" === e ? 3 : 4 === e || "centuries" === e || "millennium" === e ? 4 : t !== T && t;
    },
    _check_template: function _check_template(e) {
      try {
        return e !== T && "" !== e && ((e.match(/[<>]/g) || []).length <= 0 || 0 < C(e).length);
      } catch (e) {
        return !1;
      }
    },
    _process_options: function _process_options(e) {
      this._o = C.extend({}, this._o, e);
      var t = this.o = C.extend({}, this._o),
          n = t.language;
      M[n] || (n = n.split("-")[0], M[n] || (n = c.language)), t.language = n, t.startView = this._resolveViewName(t.startView, 0), t.minViewMode = this._resolveViewName(t.minViewMode, 0), t.maxViewMode = this._resolveViewName(t.maxViewMode, 4), t.startView = Math.min(t.startView, t.maxViewMode), t.startView = Math.max(t.startView, t.minViewMode), !0 !== t.multidate && (t.multidate = Number(t.multidate) || !1, !1 !== t.multidate && (t.multidate = Math.max(0, t.multidate))), t.multidateSeparator = String(t.multidateSeparator), t.weekStart %= 7, t.weekEnd = (t.weekStart + 6) % 7;
      var i = $.parseFormat(t.format);
      t.startDate !== -1 / 0 && (t.startDate ? t.startDate instanceof Date ? t.startDate = this._local_to_utc(this._zero_time(t.startDate)) : t.startDate = $.parseDate(t.startDate, i, t.language, t.assumeNearbyYear) : t.startDate = -1 / 0), t.endDate !== 1 / 0 && (t.endDate ? t.endDate instanceof Date ? t.endDate = this._local_to_utc(this._zero_time(t.endDate)) : t.endDate = $.parseDate(t.endDate, i, t.language, t.assumeNearbyYear) : t.endDate = 1 / 0), t.daysOfWeekDisabled = t.daysOfWeekDisabled || [], C.isArray(t.daysOfWeekDisabled) || (t.daysOfWeekDisabled = t.daysOfWeekDisabled.split(/[,\s]*/)), t.daysOfWeekDisabled = C.map(t.daysOfWeekDisabled, function (e) {
        return parseInt(e, 10);
      }), t.daysOfWeekHighlighted = t.daysOfWeekHighlighted || [], C.isArray(t.daysOfWeekHighlighted) || (t.daysOfWeekHighlighted = t.daysOfWeekHighlighted.split(/[,\s]*/)), t.daysOfWeekHighlighted = C.map(t.daysOfWeekHighlighted, function (e) {
        return parseInt(e, 10);
      }), t.datesDisabled = t.datesDisabled || [], C.isArray(t.datesDisabled) || (t.datesDisabled = [t.datesDisabled]), t.datesDisabled = C.map(t.datesDisabled, function (e) {
        return $.parseDate(e, i, t.language, t.assumeNearbyYear);
      });
      var s = String(t.orientation).toLowerCase().split(/\s+/g),
          a = t.orientation.toLowerCase(),
          s = C.grep(s, function (e) {
        return /^auto|left|right|top|bottom$/.test(e);
      });
      if (t.orientation = {
        x: "auto",
        y: "auto"
      }, a && "auto" !== a) if (1 === s.length) switch (s[0]) {
        case "top":
        case "bottom":
          t.orientation.y = s[0];
          break;

        case "left":
        case "right":
          t.orientation.x = s[0];
      } else a = C.grep(s, function (e) {
        return /^left|right$/.test(e);
      }), t.orientation.x = a[0] || "auto", a = C.grep(s, function (e) {
        return /^top|bottom$/.test(e);
      }), t.orientation.y = a[0] || "auto";
      t.defaultViewDate ? (e = t.defaultViewDate.year || new Date().getFullYear(), n = t.defaultViewDate.month || 0, a = t.defaultViewDate.day || 1, t.defaultViewDate = E(e, n, a)) : t.defaultViewDate = S();
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(e) {
      for (var t, n, i, s = 0; s < e.length; s++) {
        t = e[s][0], 2 === e[s].length ? (n = T, i = e[s][1]) : 3 === e[s].length && (n = e[s][1], i = e[s][2]), t.on(i, n);
      }
    },
    _unapplyEvents: function _unapplyEvents(e) {
      for (var t, n, i, s = 0; s < e.length; s++) {
        t = e[s][0], 2 === e[s].length ? (i = T, n = e[s][1]) : 3 === e[s].length && (i = e[s][1], n = e[s][2]), t.off(n, i);
      }
    },
    _buildEvents: function _buildEvents() {
      var e = {
        keyup: C.proxy(function (e) {
          -1 === C.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update();
        }, this),
        keydown: C.proxy(this.keydown, this),
        paste: C.proxy(this.paste, this)
      };
      !0 === this.o.showOnFocus && (e.focus = C.proxy(this.show, this)), this.isInput ? this._events = [[this.element, e]] : this.component && this.hasInput ? this._events = [[this.inputField, e], [this.component, {
        click: C.proxy(this.show, this)
      }]] : this._events = [[this.element, {
        click: C.proxy(this.show, this),
        keydown: C.proxy(this.keydown, this)
      }]], this._events.push([this.element, "*", {
        blur: C.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }], [this.element, {
        blur: C.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": C.proxy(function (e) {
          this.update(e.date);
        }, this)
      }]), this._secondaryEvents = [[this.picker, {
        click: C.proxy(this.click, this)
      }], [C(window), {
        resize: C.proxy(this.place, this)
      }], [C(document), {
        mousedown: C.proxy(function (e) {
          this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline || this.hide();
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(e, t) {
      t = t || this.dates.get(-1), t = this._utc_to_local(t), this.element.trigger({
        type: e,
        date: t,
        dates: C.map(this.dates, this._utc_to_local),
        format: C.proxy(function (e, t) {
          0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
          var n = this.dates.get(e);
          return $.formatDate(n, t, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && C(this.element).blur(), this;
    },
    hide: function hide() {
      return this.isInline || !this.picker.is(":visible") || (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide")), this;
    },
    destroy: function destroy() {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this;
    },
    paste: function paste(e) {
      var t;
      if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== C.inArray("text/plain", e.originalEvent.clipboardData.types)) t = e.originalEvent.clipboardData.getData("text/plain");else {
        if (!window.clipboardData) return;
        t = window.clipboardData.getData("Text");
      }
      this.setDate(t), this.update(), e.preventDefault();
    },
    _utc_to_local: function _utc_to_local(e) {
      return e && new Date(e.getTime() + 6e4 * e.getTimezoneOffset());
    },
    _local_to_utc: function _local_to_utc(e) {
      return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset());
    },
    _zero_time: function _zero_time(e) {
      return e && new Date(e.getFullYear(), e.getMonth(), e.getDate());
    },
    _zero_utc_time: function _zero_utc_time(e) {
      return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
    },
    getDates: function getDates() {
      return C.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return C.map(this.dates, function (e) {
        return new Date(e);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      var e = this.dates.get(-1);
      return void 0 !== e ? new Date(e) : null;
    },
    clearDates: function clearDates() {
      this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide();
    },
    setDates: function setDates() {
      var e = C.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this;
    },
    setUTCDates: function setUTCDates() {
      var e = C.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, C.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this;
    },
    setDate: e("setDates"),
    setUTCDate: e("setUTCDates"),
    remove: e("destroy"),
    setValue: function setValue() {
      var e = this.getFormattedDate();
      return this.inputField.val(e), this;
    },
    getFormattedDate: function getFormattedDate(t) {
      t === T && (t = this.o.format);
      var n = this.o.language;
      return C.map(this.dates, function (e) {
        return $.formatDate(e, t, n);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function getStartDate() {
      return this.o.startDate;
    },
    setStartDate: function setStartDate(e) {
      return this._process_options({
        startDate: e
      }), this.update(), this.updateNavArrows(), this;
    },
    getEndDate: function getEndDate() {
      return this.o.endDate;
    },
    setEndDate: function setEndDate(e) {
      return this._process_options({
        endDate: e
      }), this.update(), this.updateNavArrows(), this;
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(e) {
      return this._process_options({
        daysOfWeekDisabled: e
      }), this.update(), this.updateNavArrows(), this;
    },
    setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(e) {
      return this._process_options({
        daysOfWeekHighlighted: e
      }), this.update(), this;
    },
    setDatesDisabled: function setDatesDisabled(e) {
      this._process_options({
        datesDisabled: e
      }), this.update(), this.updateNavArrows();
    },
    place: function place() {
      if (this.isInline) return this;
      var e = this.picker.outerWidth(),
          t = this.picker.outerHeight(),
          n = (d = C(this.o.container)).width(),
          i = ("body" === this.o.container ? C(document) : d).scrollTop(),
          s = d.offset(),
          a = [];
      this.element.parents().each(function () {
        var e = C(this).css("z-index");
        "auto" !== e && 0 !== e && a.push(parseInt(e));
      });
      var r = Math.max.apply(Math, a) + this.o.zIndexOffset,
          o = (this.component ? this.component.parent() : this.element).offset(),
          l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
          c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
          d = o.left - s.left,
          s = o.top - s.top;
      return "body" !== this.o.container && (s += i), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - c)) : o.left < 0 ? (this.picker.addClass("datepicker-orient-left"), d -= o.left - 10) : n < d + e ? (this.picker.addClass("datepicker-orient-right"), d += c - e) : this.picker.addClass("datepicker-orient-left"), e = this.o.orientation.y, this.picker.addClass("datepicker-orient-" + (e = "auto" === e ? -i + s - t < 0 ? "bottom" : "top" : e)), "top" === e ? s -= t + parseInt(this.picker.css("padding-top")) : s += l, this.o.rtl ? this.picker.css({
        top: s,
        right: n - (d + c),
        zIndex: r
      }) : this.picker.css({
        top: s,
        left: d,
        zIndex: r
      }), this;
    },
    _allow_update: !0,
    update: function update() {
      if (!this._allow_update) return this;
      var e = this.dates.copy(),
          n = [],
          t = !1;
      return arguments.length ? (C.each(arguments, C.proxy(function (e, t) {
        t instanceof Date && (t = this._local_to_utc(t)), n.push(t);
      }, this)), t = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = C.map(n, C.proxy(function (e) {
        return $.parseDate(e, this.o.format, this.o.language, this.o.assumeNearbyYear);
      }, this)), n = C.grep(n, C.proxy(function (e) {
        return !this.dateWithinRange(e) || !e;
      }, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, t ? this.setValue() : n.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this.element.change(), this;
    },
    fillDow: function fillDow() {
      var e = this.o.weekStart,
          t = "<tr>";

      for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function (e, t) {
        return parseInt(t) + 1;
      }), t += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) {
        t += '<th class="dow', -1 < C.inArray(e, this.o.daysOfWeekDisabled) && (t += " disabled"), t += '">' + M[this.o.language].daysMin[e++ % 7] + "</th>";
      }

      t += "</tr>", this.picker.find(".datepicker-days thead").append(t);
    },
    fillMonths: function fillMonths() {
      for (var e = this._utc_to_local(this.viewDate), t = "", n = 0; n < 12;) {
        t += '<span class="month' + (e && e.getMonth() === n ? " focused" : "") + '">' + M[this.o.language].monthsShort[n++] + "</span>";
      }

      this.picker.find(".datepicker-months td").html(t);
    },
    setRange: function setRange(e) {
      e && e.length ? this.range = C.map(e, function (e) {
        return e.valueOf();
      }) : delete this.range, this.fill();
    },
    getClassNames: function getClassNames(e) {
      var t = [],
          n = this.viewDate.getUTCFullYear(),
          i = this.viewDate.getUTCMonth(),
          s = new Date();
      return e.getUTCFullYear() < n || e.getUTCFullYear() === n && e.getUTCMonth() < i ? t.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() === n && e.getUTCMonth() > i) && t.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && t.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === s.getFullYear() && e.getUTCMonth() === s.getMonth() && e.getUTCDate() === s.getDate() && t.push("today"), -1 !== this.dates.contains(e) && t.push("active"), this.dateWithinRange(e) || t.push("disabled"), this.dateIsDisabled(e) && t.push("disabled", "disabled-date"), -1 !== C.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && t.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && t.push("range"), -1 !== C.inArray(e.valueOf(), this.range) && t.push("selected"), e.valueOf() === this.range[0] && t.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && t.push("range-end")), t;
    },
    _fill_yearsView: function _fill_yearsView(e, t, n, i, s, a, r, o) {
      var l,
          c,
          d,
          u,
          h,
          p = "",
          e = this.picker.find(e),
          n = parseInt(s / n, 10) * n,
          f = parseInt(a / i, 10) * i,
          m = parseInt(r / i, 10) * i,
          g = C.map(this.dates, function (e) {
        return parseInt(e.getUTCFullYear() / i, 10) * i;
      });

      for (e.find(".datepicker-switch").text(n + "-" + (n + 9 * i)), l = n - i, c = -1; c < 11; c += 1) {
        d = [t], u = null, -1 === c ? d.push("old") : 10 === c && d.push("new"), -1 !== C.inArray(l, g) && d.push("active"), (l < f || m < l) && d.push("disabled"), l === this.viewDate.getFullYear() && d.push("focused"), o !== C.noop && ((h = o(new Date(l, 0, 1))) === T ? h = {} : "boolean" == typeof h ? h = {
          enabled: h
        } : "string" == typeof h && (h = {
          classes: h
        }), !1 === h.enabled && d.push("disabled"), h.classes && (d = d.concat(h.classes.split(/\s+/))), h.tooltip && (u = h.tooltip)), p += '<span class="' + d.join(" ") + '"' + (u ? ' title="' + u + '"' : "") + ">" + l + "</span>", l += i;
      }

      e.find("td").html(p);
    },
    fill: function fill() {
      var e,
          t = new Date(this.viewDate),
          n = t.getUTCFullYear(),
          i = t.getUTCMonth(),
          s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
          a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
          r = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          l = M[this.o.language].today || M.en.today || "",
          c = M[this.o.language].clear || M.en.clear || "",
          d = M[this.o.language].titleFormat || M.en.titleFormat;

      if (!isNaN(n) && !isNaN(i)) {
        this.picker.find(".datepicker-days .datepicker-switch").text($.formatDate(t, d, this.o.language)), this.picker.find("tfoot .today").text(l).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(c).toggle(!1 !== this.o.clearBtn), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
        var u = E(n, i - 1, 28),
            i = $.getDaysInMonth(u.getUTCFullYear(), u.getUTCMonth());
        u.setUTCDate(i), u.setUTCDate(i - (u.getUTCDay() - this.o.weekStart + 7) % 7);
        var h = new Date(u);
        u.getUTCFullYear() < 100 && h.setUTCFullYear(u.getUTCFullYear()), h.setUTCDate(h.getUTCDate() + 42);

        for (var p, f, h = h.valueOf(), m = []; u.valueOf() < h;) {
          u.getUTCDay() === this.o.weekStart && (m.push("<tr>"), this.o.calendarWeeks && (f = new Date(+u + (this.o.weekStart - u.getUTCDay() - 7) % 7 * 864e5), p = new Date(Number(f) + (11 - f.getUTCDay()) % 7 * 864e5), f = new Date(Number(f = E(p.getUTCFullYear(), 0, 1)) + (11 - f.getUTCDay()) % 7 * 864e5), m.push('<td class="cw">' + ((p - f) / 864e5 / 7 + 1) + "</td>"))), (p = this.getClassNames(u)).push("day"), this.o.beforeShowDay !== C.noop && ((f = this.o.beforeShowDay(this._utc_to_local(u))) === T ? f = {} : "boolean" == typeof f ? f = {
            enabled: f
          } : "string" == typeof f && (f = {
            classes: f
          }), !1 === f.enabled && p.push("disabled"), f.classes && (p = p.concat(f.classes.split(/\s+/))), f.tooltip && (e = f.tooltip)), p = C.isFunction(C.uniqueSort) ? C.uniqueSort(p) : C.unique(p), m.push('<td class="' + p.join(" ") + '"' + (e ? ' title="' + e + '"' : "") + ">" + u.getUTCDate() + "</td>"), e = null, u.getUTCDay() === this.o.weekEnd && m.push("</tr>"), u.setUTCDate(u.getUTCDate() + 1);
        }

        this.picker.find(".datepicker-days tbody").empty().append(m.join(""));
        var g,
            i = M[this.o.language].monthsTitle || M.en.monthsTitle || "Months",
            v = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? i : n).end().find("span").removeClass("active");
        C.each(this.dates, function (e, t) {
          t.getUTCFullYear() === n && v.eq(t.getUTCMonth()).addClass("active");
        }), (n < s || r < n) && v.addClass("disabled"), n === s && v.slice(0, a).addClass("disabled"), n === r && v.slice(o + 1).addClass("disabled"), this.o.beforeShowMonth !== C.noop && (g = this, C.each(v, function (e, t) {
          e = new Date(n, e, 1), (e = g.o.beforeShowMonth(e)) === T ? e = {} : "boolean" == typeof e ? e = {
            enabled: e
          } : "string" == typeof e && (e = {
            classes: e
          }), !1 !== e.enabled || C(t).hasClass("disabled") || C(t).addClass("disabled"), e.classes && C(t).addClass(e.classes), e.tooltip && C(t).prop("title", e.tooltip);
        })), this._fill_yearsView(".datepicker-years", "year", 10, 1, n, s, r, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, n, s, r, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, n, s, r, this.o.beforeShowCentury);
      }
    },
    updateNavArrows: function updateNavArrows() {
      if (this._allow_update) {
        var e = new Date(this.viewDate),
            t = e.getUTCFullYear(),
            n = e.getUTCMonth();

        switch (this.viewMode) {
          case 0:
            this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;

          case 1:
          case 2:
          case 3:
          case 4:
            this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
        }
      }
    },
    click: function click(e) {
      var t, n, i, s, a, r;
      e.preventDefault(), e.stopPropagation(), (t = C(e.target)).hasClass("datepicker-switch") && this.showMode(1), 0 < (e = t.closest(".prev, .next")).length && (e = $.modes[this.viewMode].navStep * (e.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, e), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, e), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), t.hasClass("today") && !t.hasClass("day") && (this.showMode(-2), this._setDate(S(), "linked" === this.o.todayBtn ? null : "view")), t.hasClass("clear") && this.clearDates(), t.hasClass("disabled") || (t.hasClass("day") && (n = parseInt(t.text(), 10) || 1, i = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), t.hasClass("old") && (0 === s ? (s = 11, --i, r = a = !0) : (--s, a = !0)), t.hasClass("new") && (11 === s ? (i += 1, r = a = !(s = 0)) : (s += 1, a = !0)), this._setDate(E(i, s, n)), r && this._trigger("changeYear", this.viewDate), a && this._trigger("changeMonth", this.viewDate)), t.hasClass("month") && (this.viewDate.setUTCDate(1), n = 1, s = t.parent().find("span").index(t), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(E(i, s, n)), this.showMode()) : this.showMode(-1), this.fill()), (t.hasClass("year") || t.hasClass("decade") || t.hasClass("century")) && (this.viewDate.setUTCDate(1), n = 1, s = 0, i = parseInt(t.text(), 10) || 0, this.viewDate.setUTCFullYear(i), t.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(E(i, s, n))), t.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(E(i, s, n))), t.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(E(i, s, n))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && C(this._focused_from).focus(), delete this._focused_from;
    },
    _toggle_multidate: function _toggle_multidate(e) {
      var t = this.dates.contains(e);
      if (e || this.dates.clear(), -1 !== t ? (!0 === this.o.multidate || 1 < this.o.multidate || this.o.toggleActive) && this.dates.remove(t) : (!1 === this.o.multidate && this.dates.clear(), this.dates.push(e)), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) {
        this.dates.remove(0);
      }
    },
    _setDate: function _setDate(e, t) {
      t && "date" !== t || this._toggle_multidate(e && new Date(e)), t && "view" !== t || (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || t && "date" !== t || this.hide();
    },
    moveDay: function moveDay(e, t) {
      var n = new Date(e);
      return n.setUTCDate(e.getUTCDate() + t), n;
    },
    moveWeek: function moveWeek(e, t) {
      return this.moveDay(e, 7 * t);
    },
    moveMonth: function moveMonth(e, t) {
      if (!e || isNaN(e.getTime())) return this.o.defaultViewDate;
      if (!t) return e;
      var n,
          i,
          s = new Date(e.valueOf()),
          a = s.getUTCDate(),
          r = s.getUTCMonth(),
          o = Math.abs(t);
      if (t = 0 < t ? 1 : -1, 1 === o) i = -1 === t ? function () {
        return s.getUTCMonth() === r;
      } : function () {
        return s.getUTCMonth() !== n;
      }, n = r + t, s.setUTCMonth(n), (n < 0 || 11 < n) && (n = (n + 12) % 12);else {
        for (var l = 0; l < o; l++) {
          s = this.moveMonth(s, t);
        }

        n = s.getUTCMonth(), s.setUTCDate(a), i = function i() {
          return n !== s.getUTCMonth();
        };
      }

      for (; i();) {
        s.setUTCDate(--a), s.setUTCMonth(n);
      }

      return s;
    },
    moveYear: function moveYear(e, t) {
      return this.moveMonth(e, 12 * t);
    },
    moveAvailableDate: function moveAvailableDate(e, t, n) {
      do {
        if (e = this[n](e, t), !this.dateWithinRange(e)) return !1;
      } while ((n = "moveDay", this.dateIsDisabled(e)));

      return e;
    },
    weekOfDateIsDisabled: function weekOfDateIsDisabled(e) {
      return -1 !== C.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled);
    },
    dateIsDisabled: function dateIsDisabled(n) {
      return this.weekOfDateIsDisabled(n) || 0 < C.grep(this.o.datesDisabled, function (e) {
        return t = e, (e = n).getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate();
        var t;
      }).length;
    },
    dateWithinRange: function dateWithinRange(e) {
      return e >= this.o.startDate && e <= this.o.endDate;
    },
    keydown: function keydown(e) {
      if (this.picker.is(":visible")) {
        var t,
            n,
            i = !1,
            s = this.focusDate || this.viewDate;

        switch (e.keyCode) {
          case 27:
            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault(), e.stopPropagation();
            break;

          case 37:
          case 38:
          case 39:
          case 40:
            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
            t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1, 0 === this.viewMode ? e.ctrlKey ? (n = this.moveAvailableDate(s, t, "moveYear")) && this._trigger("changeYear", this.viewDate) : e.shiftKey ? (n = this.moveAvailableDate(s, t, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === e.keyCode || 39 === e.keyCode ? n = this.moveAvailableDate(s, t, "moveDay") : this.weekOfDateIsDisabled(s) || (n = this.moveAvailableDate(s, t, "moveWeek")) : 1 === this.viewMode ? (38 !== e.keyCode && 40 !== e.keyCode || (t *= 4), n = this.moveAvailableDate(s, t, "moveMonth")) : 2 === this.viewMode && (38 !== e.keyCode && 40 !== e.keyCode || (t *= 4), n = this.moveAvailableDate(s, t, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), e.preventDefault());
            break;

          case 13:
            if (!this.o.forceParse) break;
            s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), e.stopPropagation(), this.o.autoclose && this.hide());
            break;

          case 9:
            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide();
        }

        i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change());
      } else 40 !== e.keyCode && 27 !== e.keyCode || (this.show(), e.stopPropagation());
    },
    showMode: function showMode(e) {
      e && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + e))), this.picker.children("div").hide().filter(".datepicker-" + $.modes[this.viewMode].clsName).show(), this.updateNavArrows();
    }
  }, l.prototype = {
    updateDates: function updateDates() {
      this.dates = C.map(this.pickers, function (e) {
        return e.getUTCDate();
      }), this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var n = C.map(this.dates, function (e) {
        return e.valueOf();
      });
      C.each(this.pickers, function (e, t) {
        t.setRange(n);
      });
    },
    dateUpdated: function dateUpdated(e) {
      if (!this.updating) {
        this.updating = !0;
        var t = C(e.target).data("datepicker");

        if (void 0 !== t) {
          var n = t.getUTCDate(),
              i = (e = C.inArray(e.target, this.inputs)) - 1,
              s = e + 1,
              a = this.inputs.length;

          if (-1 !== e) {
            if (C.each(this.pickers, function (e, t) {
              t.getUTCDate() || t.setUTCDate(n);
            }), n < this.dates[i]) for (; 0 <= i && n < this.dates[i];) {
              this.pickers[i--].setUTCDate(n);
            } else if (n > this.dates[s]) for (; s < a && n > this.dates[s];) {
              this.pickers[s++].setUTCDate(n);
            }
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    remove: function remove() {
      C.map(this.pickers, function (e) {
        e.remove();
      }), delete this.element.data().datepicker;
    }
  };

  var i = C.fn.datepicker,
      s = function s(a) {
    var r,
        o = Array.apply(null, arguments);
    if (o.shift(), this.each(function () {
      var e,
          t,
          n = C(this),
          i = n.data("datepicker"),
          s = "object" == _typeof(a) && a;
      i || (e = function (e, t) {
        var n,
            i = C(e).data(),
            s = {},
            a = new RegExp("^" + "date".toLowerCase() + "([A-Z])");

        function r(e, t) {
          return t.toLowerCase();
        }

        for (n in t = new RegExp("^" + "date".toLowerCase()), i) {
          t.test(n) && (s[n.replace(a, r)] = i[n]);
        }

        return s;
      }(this, "date"), t = function (e) {
        var n = {};

        if (M[e] || (e = e.split("-")[0], M[e])) {
          var i = M[e];
          return C.each(d, function (e, t) {
            t in i && (n[t] = i[t]);
          }), n;
        }
      }(C.extend({}, c, e, s).language), s = C.extend({}, c, t, e, s), i = n.hasClass("input-daterange") || s.inputs ? (C.extend(s, {
        inputs: s.inputs || n.find("input").toArray()
      }), new l(this, s)) : new k(this, s), n.data("datepicker", i)), "string" == typeof a && "function" == typeof i[a] && (r = i[a].apply(i, o));
    }), r === T || r instanceof k || r instanceof l) return this;
    if (1 < this.length) throw new Error("Using only allowed for the collection of a single element (" + a + " function)");
    return r;
  };

  C.fn.datepicker = s;
  var c = C.fn.datepicker.defaults = {
    assumeNearbyYear: !1,
    autoclose: !1,
    beforeShowDay: C.noop,
    beforeShowMonth: C.noop,
    beforeShowYear: C.noop,
    beforeShowDecade: C.noop,
    beforeShowCentury: C.noop,
    calendarWeeks: !1,
    clearBtn: !1,
    toggleActive: !1,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: 1 / 0,
    forceParse: !0,
    format: "mm/dd/yyyy",
    keyboardNavigation: !0,
    language: "en",
    minViewMode: 0,
    maxViewMode: 4,
    multidate: !1,
    multidateSeparator: ",",
    orientation: "auto",
    rtl: !1,
    startDate: -1 / 0,
    startView: 0,
    todayBtn: !1,
    todayHighlight: !1,
    weekStart: 0,
    disableTouchKeyboard: !1,
    enableOnReadonly: !0,
    showOnFocus: !0,
    zIndexOffset: 10,
    container: "body",
    immediateUpdates: !1,
    title: "",
    templates: {
      leftArrow: '<span class="prev-mounth">&laquo;</span>',
      rightArrow: '<span class="next-mounth">&raquo;</span>'
    }
  },
      d = C.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  C.fn.datepicker.Constructor = k;
  var M = C.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  },
      $ = {
    modes: [{
      clsName: "days",
      navFnc: "Month",
      navStep: 1
    }, {
      clsName: "months",
      navFnc: "FullYear",
      navStep: 1
    }, {
      clsName: "years",
      navFnc: "FullYear",
      navStep: 10
    }, {
      clsName: "decades",
      navFnc: "FullDecade",
      navStep: 100
    }, {
      clsName: "centuries",
      navFnc: "FullCentury",
      navStep: 1e3
    }],
    isLeapYear: function isLeapYear(e) {
      return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    },
    getDaysInMonth: function getDaysInMonth(e, t) {
      return [31, $.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
    },
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(e) {
      if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
      var t = e.replace(this.validParts, "\0").split("\0"),
          e = e.match(this.validParts);
      if (!t || !t.length || !e || 0 === e.length) throw new Error("Invalid date format.");
      return {
        separators: t,
        parts: e
      };
    },
    parseDate: function parseDate(e, t, n, i) {
      if (!e) return T;
      if (e instanceof Date) return e;
      if ((t = "string" == typeof t ? $.parseFormat(t) : t).toValue) return t.toValue(e, t, n);
      var s,
          a,
          r,
          o = /([\-+]\d+)([dmwy])/,
          l = e.match(/([\-+]\d+)([dmwy])/g),
          c = {
        d: "moveDay",
        m: "moveMonth",
        w: "moveWeek",
        y: "moveYear"
      },
          d = {
        yesterday: "-1d",
        today: "+0d",
        tomorrow: "+1d"
      };

      if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
        for (e = new Date(), x = 0; x < l.length; x++) {
          s = o.exec(l[x]), a = parseInt(s[1]), r = c[s[2]], e = k.prototype[r](e, a);
        }

        return E(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
      }

      if (void 0 !== d[e] && (l = (e = d[e]).match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))) {
        for (e = new Date(), x = 0; x < l.length; x++) {
          s = o.exec(l[x]), a = parseInt(s[1]), r = c[s[2]], e = k.prototype[r](e, a);
        }

        return E(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
      }

      function u(e, t) {
        return !0 === t && (t = 10), e < 100 && (e += 2e3) > new Date().getFullYear() + t && (e -= 100), e;
      }

      l = e && e.match(this.nonpunctuation) || [], e = new Date();
      var h,
          p,
          f = {},
          m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          g = {
        yyyy: function yyyy(e, t) {
          return e.setUTCFullYear(i ? u(t, i) : t);
        },
        yy: function yy(e, t) {
          return e.setUTCFullYear(i ? u(t, i) : t);
        },
        m: function m(e, t) {
          if (isNaN(e)) return e;

          for (--t; t < 0;) {
            t += 12;
          }

          for (e.setUTCMonth(t %= 12); e.getUTCMonth() !== t;) {
            e.setUTCDate(e.getUTCDate() - 1);
          }

          return e;
        },
        d: function d(e, t) {
          return e.setUTCDate(t);
        }
      };
      g.M = g.MM = g.mm = g.m, g.dd = g.d, e = S();
      var v = t.parts.slice();

      function b() {
        var e = this.slice(0, l[x].length),
            t = l[x].slice(0, e.length);
        return e.toLowerCase() === t.toLowerCase();
      }

      if (l.length !== v.length && (v = C(v).filter(function (e, t) {
        return -1 !== C.inArray(t, m);
      }).toArray()), l.length === v.length) {
        for (var y, w, x = 0, _ = v.length; x < _; x++) {
          if (h = parseInt(l[x], 10), s = v[x], isNaN(h)) switch (s) {
            case "MM":
              p = C(M[n].months).filter(b), h = C.inArray(p[0], M[n].months) + 1;
              break;

            case "M":
              p = C(M[n].monthsShort).filter(b), h = C.inArray(p[0], M[n].monthsShort) + 1;
          }
          f[s] = h;
        }

        for (x = 0; x < m.length; x++) {
          (w = m[x]) in f && !isNaN(f[w]) && (y = new Date(e), g[w](y, f[w]), isNaN(y) || (e = y));
        }
      }

      return e;
    },
    formatDate: function formatDate(e, t, n) {
      if (!e) return "";
      if ((t = "string" == typeof t ? $.parseFormat(t) : t).toDisplay) return t.toDisplay(e, t, n);
      var i = {
        d: e.getUTCDate(),
        D: M[n].daysShort[e.getUTCDay()],
        DD: M[n].days[e.getUTCDay()],
        m: e.getUTCMonth() + 1,
        M: M[n].monthsShort[e.getUTCMonth()],
        MM: M[n].months[e.getUTCMonth()],
        yy: e.getUTCFullYear().toString().substring(2),
        yyyy: e.getUTCFullYear()
      };
      i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m, e = [];

      for (var s = C.extend([], t.separators), a = 0, r = t.parts.length; a <= r; a++) {
        s.length && e.push(s.shift()), e.push(i[t.parts[a]]);
      }

      return e.join("");
    },
    headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev"><span class="prev-mounth">&laquo;</span></th><th colspan="5" class="datepicker-switch"></th><th class="next"><span class="next-mounth">&raquo;</span></th></tr></thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
  };
  $.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + $.headTemplate + "<tbody></tbody>" + $.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + $.headTemplate + $.contTemplate + $.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + $.headTemplate + $.contTemplate + $.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + $.headTemplate + $.contTemplate + $.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + $.headTemplate + $.contTemplate + $.footTemplate + "</table></div></div>", C.fn.datepicker.DPGlobal = $, C.fn.datepicker.noConflict = function () {
    return C.fn.datepicker = i, this;
  }, C.fn.datepicker.version = "1.6.4", C(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
    var t = C(this);
    t.data("datepicker") || (e.preventDefault(), s.call(t, "show"));
  }), C(function () {
    s.call(C('[data-provide="datepicker-inline"]'));
  });
}), function (l, r, f) {
  "use strict";

  function n(e, t) {
    var n,
        i,
        s,
        a = [],
        r = 0;
    e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, n = (t = e && e.data ? u(e.data.options, t) : t).$target || f(e.currentTarget).trigger("blur"), (s = f.fancybox.getInstance()) && s.$trigger && s.$trigger.is(n) || (a = t.selector ? f(t.selector) : (i = n.attr("data-fancybox") || "") ? (a = e.data ? e.data.items : []).length ? a.filter('[data-fancybox="' + i + '"]') : f('[data-fancybox="' + i + '"]') : [n], r = f(a).index(n), (s = f.fancybox.open(a, t, r = r < 0 ? 0 : r)).$trigger = n));
  }

  if (l.console = l.console || {
    info: function info(e) {}
  }, f) {
    if (f.fn.fancybox) return console.info("fancyBox already initialized");

    var e = {
      closeExisting: !1,
      loop: !1,
      gutter: 50,
      keyboard: !0,
      preventCaptionOverlap: !0,
      arrows: !0,
      infobar: !0,
      smallBtn: "auto",
      toolbar: "auto",
      buttons: ["zoom", "slideShow", "thumbs", "close"],
      idleTime: 3,
      protect: !1,
      modal: !1,
      image: {
        preload: !1
      },
      ajax: {
        settings: {
          data: {
            fancybox: !0
          }
        }
      },
      iframe: {
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
        preload: !0,
        css: {},
        attr: {
          scrolling: "auto"
        }
      },
      video: {
        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
        format: "",
        autoStart: !0
      },
      defaultType: "image",
      animationEffect: "zoom",
      animationDuration: 366,
      zoomOpacity: "auto",
      transitionEffect: "fade",
      transitionDuration: 366,
      slideClass: "",
      baseClass: "",
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
      btnTpl: {
        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
      },
      parentEl: "body",
      hideScrollbar: !0,
      autoFocus: !0,
      backFocus: !0,
      trapFocus: !0,
      fullScreen: {
        autoStart: !1
      },
      touch: {
        vertical: !0,
        momentum: !0
      },
      hash: null,
      media: {},
      slideShow: {
        autoStart: !1,
        speed: 3e3
      },
      thumbs: {
        autoStart: !1,
        hideOnClose: !0,
        parentEl: ".fancybox-container",
        axis: "y"
      },
      wheel: "auto",
      onInit: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop,
      onActivate: f.noop,
      onDeactivate: f.noop,
      clickContent: function clickContent(e, t) {
        return "image" === e.type && "zoom";
      },
      clickSlide: "close",
      clickOutside: "close",
      dblclickContent: !1,
      dblclickSlide: !1,
      dblclickOutside: !1,
      mobile: {
        preventCaptionOverlap: !1,
        idleTime: !1,
        clickContent: function clickContent(e, t) {
          return "image" === e.type && "toggleControls";
        },
        clickSlide: function clickSlide(e, t) {
          return "image" === e.type ? "toggleControls" : "close";
        },
        dblclickContent: function dblclickContent(e, t) {
          return "image" === e.type && "zoom";
        },
        dblclickSlide: function dblclickSlide(e, t) {
          return "image" === e.type && "zoom";
        }
      },
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom"
        },
        de: {
          CLOSE: "Schlie&szlig;en",
          NEXT: "Weiter",
          PREV: "Zur&uuml;ck",
          ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Vergr&ouml;&szlig;ern"
        }
      }
    },
        s = f(l),
        a = f(r),
        o = 0,
        d = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function (e) {
      return l.setTimeout(e, 1e3 / 60);
    },
        t = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function (e) {
      l.clearTimeout(e);
    },
        c = function () {
      var e,
          t = r.createElement("fakeelement"),
          n = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };

      for (e in n) {
        if (void 0 !== t.style[e]) return n[e];
      }

      return "transitionend";
    }(),
        h = function h(e) {
      return e && e.length && e[0].offsetHeight;
    },
        u = function u(e, t) {
      var n = f.extend(!0, {}, e, t);
      return f.each(t, function (e, t) {
        f.isArray(t) && (n[e] = t);
      }), n;
    },
        i = function i(e, t, n) {
      var i = this;
      i.opts = u({
        index: n
      }, f.fancybox.defaults), f.isPlainObject(t) && (i.opts = u(i.opts, t)), f.fancybox.isMobile && (i.opts = u(i.opts, i.opts.mobile)), i.id = i.opts.id || ++o, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(e), i.group.length && i.init();
    };

    f.extend(i.prototype, {
      init: function init() {
        var t,
            n,
            i = this,
            s = i.group[i.currIndex].opts;
        s.closeExisting && f.fancybox.close(!0), f("body").addClass("fancybox-active"), !f.fancybox.getInstance() && !1 !== s.hideScrollbar && !f.fancybox.isMobile && r.body.scrollHeight > l.innerHeight && (f("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - r.documentElement.clientWidth) + "px;}</style>"), f("body").addClass("compensate-for-scrollbar")), n = "", f.each(s.buttons, function (e, t) {
          n += s.btnTpl[t] || "";
        }), t = f(i.translate(i, s.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass(s.baseClass).data("FancyBox", i).appendTo(s.parentEl), i.$refs = {
          container: t
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
          i.$refs[e] = t.find(".fancybox-" + e);
        }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex);
      },
      translate: function translate(e, t) {
        var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
        return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
          return void 0 === n[t] ? e : n[t];
        });
      },
      addContent: function addContent(e) {
        var r = this,
            e = f.makeArray(e);
        f.each(e, function (e, t) {
          var n,
              i,
              s = {},
              a = {};
          f.isPlainObject(t) ? a = (s = t).opts || t : "object" === f.type(t) && f(t).length ? (a = (i = f(t)).data() || {}, (a = f.extend(!0, {}, a, a.options)).$orig = i, s.src = r.opts.src || a.src || i.attr("href"), s.type || s.src || (s.type = "inline", s.src = t)) : s = {
            type: "html",
            src: t + ""
          }, s.opts = f.extend(!0, {}, r.opts, a), f.isArray(a.buttons) && (s.opts.buttons = a.buttons), f.fancybox.isMobile && s.opts.mobile && (s.opts = u(s.opts, s.opts.mobile)), n = s.type || s.opts.type, i = s.src || "", !n && i && ((a = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = "video", s.opts.video.format || (s.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) ? s = f.extend(!0, s, {
            contentType: "pdf",
            opts: {
              iframe: {
                preload: !(n = "iframe")
              }
            }
          }) : "#" === i.charAt(0) && (n = "inline")), n ? s.type = n : r.trigger("objectNeedsType", s), s.contentType || (s.contentType = -1 < f.inArray(s.type, ["html", "inline", "ajax"]) ? "html" : s.type), s.index = r.group.length, "auto" == s.opts.smallBtn && (s.opts.smallBtn = -1 < f.inArray(s.type, ["html", "inline", "ajax"])), "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn), s.$thumb = s.opts.$thumb || null, s.opts.$trigger && s.index === r.opts.index && (s.$thumb = s.opts.$trigger.find("img:first"), s.$thumb.length && (s.opts.$orig = s.opts.$trigger)), s.$thumb && s.$thumb.length || !s.opts.$orig || (s.$thumb = s.opts.$orig.find("img:first")), s.$thumb && !s.$thumb.length && (s.$thumb = null), s.thumb = s.opts.thumb || (s.$thumb ? s.$thumb[0].src : null), "function" === f.type(s.opts.caption) && (s.opts.caption = s.opts.caption.apply(t, [r, s])), "function" === f.type(r.opts.caption) && (s.opts.caption = r.opts.caption.apply(t, [r, s])), s.opts.caption instanceof f || (s.opts.caption = void 0 === s.opts.caption ? "" : s.opts.caption + ""), "ajax" !== s.type || 1 < (i = i.split(/\s+/, 2)).length && (s.src = i.shift(), s.opts.filter = i.shift()), s.opts.modal && (s.opts = f.extend(!0, s.opts, {
            trapFocus: !0,
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), r.group.push(s);
        }), Object.keys(r.slides).length && (r.updateControls(), (e = r.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function addEvents() {
        var i = this;
        i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.close(e);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (e) {
          i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (e) {
          e && e.originalEvent && "resize" === e.originalEvent.type ? (i.requestId && t(i.requestId), i.requestId = d(function () {
            i.update(e);
          })) : (i.current && "iframe" === i.current.type && i.$refs.stage.hide(), setTimeout(function () {
            i.$refs.stage.show(), i.update(e);
          }, f.fancybox.isMobile ? 600 : 250));
        }), a.on("keydown.fb", function (e) {
          var t = (f.fancybox ? f.fancybox.getInstance() : null).current,
              n = e.keyCode || e.which;
          if (9 != n) return !t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || f(e.target).is("input,textarea,video,audio,select") ? void 0 : 8 === n || 27 === n ? (e.preventDefault(), void i.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, n);
          t.opts.trapFocus && i.focus(e);
        }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
          i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1;
        }), i.idleInterval = l.setInterval(function () {
          ++i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls());
        }, 1e3));
      },
      removeEvents: function removeEvents() {
        s.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null);
      },
      previous: function previous(e) {
        return this.jumpTo(this.currPos - 1, e);
      },
      next: function next(e) {
        return this.jumpTo(this.currPos + 1, e);
      },
      jumpTo: function jumpTo(e, i) {
        var t,
            n,
            s,
            a,
            r,
            o,
            l,
            c,
            d = this,
            u = d.group.length;
        if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) return e = parseInt(e, 10), !(!(n = (d.current || d).opts.loop) && (e < 0 || u <= e)) && (t = d.firstRun = !Object.keys(d.slides).length, a = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, s = d.createSlide(e), 1 < u && ((n || s.index < u - 1) && d.createSlide(e + 1), (n || 0 < s.index) && d.createSlide(e - 1)), d.current = s, d.currIndex = s.index, d.currPos = s.pos, d.trigger("beforeShow", t), d.updateControls(), s.forcedDuration = void 0, f.isNumeric(i) ? s.forcedDuration = i : i = s.opts[t ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), e = d.isMoved(s), s.$slide.addClass("fancybox-slide--current"), t ? (s.opts.animationEffect && i && d.$refs.container.css("transition-duration", i + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(s)) : (r = f.fancybox.getTranslate(a.$slide), o = f.fancybox.getTranslate(d.$refs.stage), f.each(d.slides, function (e, t) {
          f.fancybox.stop(t.$slide, !0);
        }), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), e ? (c = r.left - (a.pos * r.width + a.pos * a.opts.gutter), f.each(d.slides, function (e, t) {
          t.$slide.removeClass("fancybox-animated").removeClass(function (e, t) {
            return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });
          var n = t.pos * r.width + t.pos * t.opts.gutter;
          f.fancybox.setTranslate(t.$slide, {
            top: 0,
            left: n - o.left + c
          }), t.pos !== s.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > s.pos ? "next" : "previous")), h(t.$slide), f.fancybox.animate(t.$slide, {
            top: 0,
            left: (t.pos - s.pos) * r.width + (t.pos - s.pos) * t.opts.gutter
          }, i, function () {
            t.$slide.css({
              transform: "",
              opacity: ""
            }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === d.currPos && d.complete();
          });
        })) : i && s.opts.transitionEffect && (l = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), f.fancybox.animate(a.$slide, l, i, function () {
          a.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous");
        }, !1)), s.isLoaded ? d.revealContent(s) : d.loadSlide(s)), void d.preload("image"));
      },
      createSlide: function createSlide(e) {
        var t,
            n = this,
            i = (i = e % n.group.length) < 0 ? n.group.length + i : i;
        return !n.slides[e] && n.group[i] && (t = f('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[e] = f.extend(!0, {}, n.group[i], {
          pos: e,
          $slide: t,
          isLoaded: !1
        }), n.updateSlide(n.slides[e])), n.slides[e];
      },
      scaleToActual: function scaleToActual(e, t, n) {
        var i,
            s,
            a,
            r,
            o = this,
            l = o.current,
            c = l.$content,
            d = f.fancybox.getTranslate(l.$slide).width,
            u = f.fancybox.getTranslate(l.$slide).height,
            h = l.width,
            p = l.height;
        o.isAnimating || o.isMoved() || !c || "image" != l.type || !l.isLoaded || l.hasError || (o.isAnimating = !0, f.fancybox.stop(c), e = void 0 === e ? .5 * d : e, t = void 0 === t ? .5 * u : t, (i = f.fancybox.getTranslate(c)).top -= f.fancybox.getTranslate(l.$slide).top, i.left -= f.fancybox.getTranslate(l.$slide).left, a = h / i.width, r = p / i.height, s = .5 * d - .5 * h, l = .5 * u - .5 * p, d < h && (s = 0 < (s = i.left * a - (e * a - e)) ? 0 : s) < d - h && (s = d - h), u < p && (l = 0 < (l = i.top * r - (t * r - t)) ? 0 : l) < u - p && (l = u - p), o.updateCursor(h, p), f.fancybox.animate(c, {
          top: l,
          left: s,
          scaleX: a,
          scaleY: r
        }, n || 366, function () {
          o.isAnimating = !1;
        }), o.SlideShow && o.SlideShow.isActive && o.SlideShow.stop());
      },
      scaleToFit: function scaleToFit(e) {
        var t = this,
            n = t.current,
            i = n.$content;
        t.isAnimating || t.isMoved() || !i || "image" != n.type || !n.isLoaded || n.hasError || (t.isAnimating = !0, f.fancybox.stop(i), n = t.getFitPos(n), t.updateCursor(n.width, n.height), f.fancybox.animate(i, {
          top: n.top,
          left: n.left,
          scaleX: n.width / i.width(),
          scaleY: n.height / i.height()
        }, e || 366, function () {
          t.isAnimating = !1;
        }));
      },
      getFitPos: function getFitPos(e) {
        var t,
            n,
            i = e.$content,
            s = e.$slide,
            a = e.width || e.opts.width,
            r = e.height || e.opts.height,
            o = {};
        return !!(e.isLoaded && i && i.length) && (t = f.fancybox.getTranslate(this.$refs.stage).width, n = f.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(i.css("marginLeft")) + parseFloat(i.css("marginRight")), n -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(i.css("marginTop")) + parseFloat(i.css("marginBottom")), a && r || (a = t, r = n), t - .5 < (a *= i = Math.min(1, t / a, n / r)) && (a = t), n - .5 < (r *= i) && (r = n), "image" === e.type ? (o.top = Math.floor(.5 * (n - r)) + parseFloat(s.css("paddingTop")), o.left = Math.floor(.5 * (t - a)) + parseFloat(s.css("paddingLeft"))) : "video" === e.contentType && (a / (e = e.opts.width && e.opts.height ? a / r : e.opts.ratio || 16 / 9) < r ? r = a / e : r * e < a && (a = r * e)), o.width = a, o.height = r, o);
      },
      update: function update(n) {
        var i = this;
        f.each(i.slides, function (e, t) {
          i.updateSlide(t, n);
        });
      },
      updateSlide: function updateSlide(e, t) {
        var n = this,
            i = e && e.$content,
            s = e.width || e.opts.width,
            a = e.height || e.opts.height,
            r = e.$slide;
        n.adjustCaption(e), i && (s || a || "video" === e.contentType) && !e.hasError && (f.fancybox.stop(i), f.fancybox.setTranslate(i, n.getFitPos(e)), e.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(e), r.length && (r.trigger("refresh"), e.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), n.trigger("onUpdate", e, t);
      },
      centerSlide: function centerSlide(e) {
        var t = this,
            n = t.current,
            i = n.$slide;
        !t.isClosing && n && (i.siblings().css({
          transform: "",
          opacity: ""
        }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), f.fancybox.animate(i, {
          top: 0,
          left: 0,
          opacity: 1
        }, void 0 === e ? 0 : e, function () {
          i.css({
            transform: "",
            opacity: ""
          }), n.isComplete || t.complete();
        }, !1));
      },
      isMoved: function isMoved(e) {
        var t,
            n = e || this.current;
        return !!n && (t = f.fancybox.getTranslate(this.$refs.stage), e = f.fancybox.getTranslate(n.$slide), !n.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(e.top - t.top) || .5 < Math.abs(e.left - t.left)));
      },
      updateCursor: function updateCursor(e, t) {
        var n = this,
            i = n.current,
            s = n.$refs.container;
        i && !n.isClosing && n.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), t = !!(e = n.canPan(e, t)) || n.isZoomable(), s.toggleClass("fancybox-is-zoomable", t), f("[data-fancybox-zoom]").prop("disabled", !t), e ? s.addClass("fancybox-can-pan") : t && ("zoom" === i.opts.clickContent || f.isFunction(i.opts.clickContent) && "zoom" == i.opts.clickContent(i)) ? s.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || 1 < n.group.length) && "video" !== i.contentType && s.addClass("fancybox-can-swipe"));
      },
      isZoomable: function isZoomable() {
        var e,
            t = this.current;

        if (t && !this.isClosing && "image" === t.type && !t.hasError) {
          if (!t.isLoaded) return !0;
          if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0;
        }

        return !1;
      },
      isScaledDown: function isScaledDown(e, t) {
        var n = !1,
            i = this.current,
            s = i.$content;
        return void 0 !== e && void 0 !== t ? n = e < i.width && t < i.height : s && (n = (n = f.fancybox.getTranslate(s)).width < i.width && n.height < i.height), n;
      },
      canPan: function canPan(e, t) {
        var n = this.current,
            i = null,
            s = !1;
        return "image" === n.type && (n.isComplete || e && t) && !n.hasError && (s = this.getFitPos(n), void 0 !== e && void 0 !== t ? i = {
          width: e,
          height: t
        } : n.isComplete && (i = f.fancybox.getTranslate(n.$content)), i && s && (s = 1.5 < Math.abs(i.width - s.width) || 1.5 < Math.abs(i.height - s.height))), s;
      },
      loadSlide: function loadSlide(n) {
        var e,
            t,
            i,
            s = this;

        if (!n.isLoading && !n.isLoaded) {
          if (!(n.isLoading = !0) === s.trigger("beforeLoad", n)) return n.isLoading = !1;

          switch (e = n.type, (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e) {
            case "image":
              s.setImage(n);
              break;

            case "iframe":
              s.setIframe(n);
              break;

            case "html":
              s.setContent(n, n.src || n.content);
              break;

            case "video":
              s.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
              break;

            case "inline":
              f(n.src).length ? s.setContent(n, f(n.src)) : s.setError(n);
              break;

            case "ajax":
              s.showLoading(n), i = f.ajax(f.extend({}, n.opts.ajax.settings, {
                url: n.src,
                success: function success(e, t) {
                  "success" === t && s.setContent(n, e);
                },
                error: function error(e, t) {
                  e && "abort" !== t && s.setError(n);
                }
              })), t.one("onReset", function () {
                i.abort();
              });
              break;

            default:
              s.setError(n);
          }

          return !0;
        }
      },
      setImage: function setImage(t) {
        var e,
            n = this;
        setTimeout(function () {
          var e = t.$image;
          n.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || n.showLoading(t);
        }, 50), n.checkSrcset(t), t.$content = f('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (e = r.createElement("img")).onerror = function () {
          f(this).remove(), t.$ghost = null;
        }, e.onload = function () {
          n.afterLoad(t);
        }, t.$ghost = f(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), n.setBigImage(t);
      },
      checkSrcset: function checkSrcset(e) {
        var t,
            n,
            i,
            s,
            a = e.opts.srcset || e.opts.image.srcset;

        if (a) {
          i = l.devicePixelRatio || 1, s = l.innerWidth * i, (n = a.split(",").map(function (e) {
            var i = {};
            return e.trim().split(/\s+/).forEach(function (e, t) {
              var n = parseInt(e.substring(0, e.length - 1), 10);
              if (0 === t) return i.url = e;
              n && (i.value = n, i.postfix = e[e.length - 1]);
            }), i;
          })).sort(function (e, t) {
            return e.value - t.value;
          });

          for (var r = 0; r < n.length; r++) {
            var o = n[r];

            if ("w" === o.postfix && o.value >= s || "x" === o.postfix && o.value >= i) {
              t = o;
              break;
            }
          }

          (t = !t && n.length ? n[n.length - 1] : t) && (e.src = t.url, e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value, e.width = t.value), e.opts.srcset = a);
        }
      },
      setBigImage: function setBigImage(t) {
        var n = this,
            e = r.createElement("img"),
            i = f(e);
        t.$image = i.one("error", function () {
          n.setError(t);
        }).one("load", function () {
          var e;
          t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < s.width() / s.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), i.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !n.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (e.complete || "complete" == e.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : e.error && i.trigger("error");
      },
      resolveImageSlideSize: function resolveImageSlideSize(e, t, n) {
        var i = parseInt(e.opts.width, 10),
            s = parseInt(e.opts.height, 10);
        e.width = t, e.height = n, 0 < i && (e.width = i, e.height = Math.floor(i * n / t)), 0 < s && (e.width = Math.floor(s * t / n), e.height = s);
      },
      setIframe: function setIframe(s) {
        var a,
            t = this,
            r = s.opts.iframe,
            o = s.$slide;
        s.$content = f('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(o), o.addClass("fancybox-slide--" + s.contentType), s.$iframe = a = f(r.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(r.attr).appendTo(s.$content), r.preload ? (t.showLoading(s), a.on("load.fb error.fb", function (e) {
          this.isReady = 1, s.$slide.trigger("refresh"), t.afterLoad(s);
        }), o.on("refresh.fb", function () {
          var e,
              t = s.$content,
              n = r.css.width,
              i = r.css.height;

          if (1 === a[0].isReady) {
            try {
              e = a.contents().find("body");
            } catch (e) {}

            e && e.length && e.children().length && (o.css("overflow", "visible"), t.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            }), void 0 === n && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), t.css("width", n || "").css("max-width", ""), void 0 === i && (i = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), t.css("height", i || ""), o.css("overflow", "auto")), t.removeClass("fancybox-is-hidden");
          }
        })) : t.afterLoad(s), a.attr("src", s.src), o.one("onReset", function () {
          try {
            f(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (e) {}

          f(this).off("refresh.fb").empty(), s.isLoaded = !1, s.isRevealed = !1;
        });
      },
      setContent: function setContent(e, t) {
        var n;
        this.isClosing || (this.hideLoading(e), e.$content && f.fancybox.stop(e.$content), e.$slide.empty(), (n = t) && n.hasOwnProperty && n instanceof f && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = f("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === f.type(t) && (t = f("<div>").append(f.trim(t)).contents()), e.opts.filter && (t = f("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function () {
          f(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (f(this).empty(), e.isLoaded = !1, e.isRevealed = !1);
        }), f(t).appendTo(e.$slide), f(t).is("video,audio") && (f(t).addClass("fancybox-video"), f(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || f(t).attr("width"), e.opts.height = e.opts.height || f(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e));
      },
      setError: function setError(e) {
        e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function showLoading(e) {
        (e = e || this.current) && !e.$spinner && (e.$spinner = f(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"));
      },
      hideLoading: function hideLoading(e) {
        (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner);
      },
      afterLoad: function afterLoad(e) {
        var t = this;
        t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = f(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function (e) {
          return 2 == e.button && e.preventDefault(), !0;
        }), "image" === e.type && f('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.adjustCaption(e), t.adjustLayout(e), e.pos === t.currPos && t.updateCursor(), t.revealContent(e));
      },
      adjustCaption: function adjustCaption(e) {
        var t = this,
            n = e || t.current,
            i = n.opts.caption,
            s = n.opts.preventCaptionOverlap,
            a = t.$refs.caption,
            e = !1;
        a.toggleClass("fancybox-caption--separate", s), s && i && i.length && (n.pos !== t.currPos ? ((a = a.clone().appendTo(a.parent())).children().eq(0).empty().html(i), e = a.outerHeight(!0), a.empty().remove()) : t.$caption && (e = t.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", e || ""));
      },
      adjustLayout: function adjustLayout(e) {
        var t,
            n,
            i,
            s = e || this.current;
        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (n = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), 0 < parseFloat(i) && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (t = i), s.$slide.css("padding-bottom", n))), s.$content.css("margin-bottom", t));
      },
      revealContent: function revealContent(e) {
        var t,
            n,
            i,
            s,
            a = this,
            r = e.$slide,
            o = !1,
            l = !1,
            c = a.isMoved(e),
            d = e.isRevealed;
        return e.isRevealed = !0, t = e.opts[a.firstRun ? "animationEffect" : "transitionEffect"], i = e.opts[a.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === e.forcedDuration ? i : e.forcedDuration, 10), "zoom" === (t = !(c || e.pos !== a.currPos || !i) && t) && (e.pos === a.currPos && i && "image" === e.type && !e.hasError && (l = a.getThumbPos(e)) ? o = a.getFitPos(e) : t = "fade"), "zoom" === t ? (a.isAnimating = !0, o.scaleX = o.width / l.width, o.scaleY = o.height / l.height, (s = "auto" == (s = e.opts.zoomOpacity) ? .1 < Math.abs(e.width / e.height - l.width / l.height) : s) && (l.opacity = .1, o.opacity = 1), f.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), h(e.$content), void f.fancybox.animate(e.$content, o, i, function () {
          a.isAnimating = !1, a.complete();
        })) : (a.updateSlide(e), t ? (f.fancybox.stop(r), n = "fancybox-slide--" + (e.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, r.addClass(n).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), h(r), "image" !== e.type && e.$content.hide().show(0), void f.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(n).css({
            transform: "",
            opacity: ""
          }), e.pos === a.currPos && a.complete();
        }, !0)) : (e.$content.removeClass("fancybox-is-hidden"), d || !c || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void (e.pos === a.currPos && a.complete())));
      },
      getThumbPos: function getThumbPos(e) {
        var t,
            n,
            i,
            s = e.$thumb;
        return !(!s || !(n = s[0]) || n.ownerDocument !== r || (f(".fancybox-container").css("pointer-events", "none"), i = {
          x: n.getBoundingClientRect().left + n.offsetWidth / 2,
          y: n.getBoundingClientRect().top + n.offsetHeight / 2
        }, n = r.elementFromPoint(i.x, i.y) === n, f(".fancybox-container").css("pointer-events", ""), !n)) && (t = f.fancybox.getTranslate(s), e = parseFloat(s.css("border-top-width") || 0), i = parseFloat(s.css("border-right-width") || 0), n = parseFloat(s.css("border-bottom-width") || 0), s = parseFloat(s.css("border-left-width") || 0), n = {
          top: t.top + e,
          left: t.left + s,
          width: t.width - i - s,
          height: t.height - e - n,
          scaleX: 1,
          scaleY: 1
        }, 0 < t.width && 0 < t.height && n);
      },
      complete: function complete() {
        var e,
            n = this,
            t = n.current,
            i = {};
        !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), h(t.$slide), t.$slide.addClass("fancybox-slide--complete"), f.each(n.slides, function (e, t) {
          t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? i[t.pos] = t : t && (f.fancybox.stop(t.$slide), t.$slide.off().remove());
        }), n.slides = i), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next();
        }), t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function preload(e) {
        var t,
            n,
            i = this;
        i.group.length < 2 || (n = i.slides[i.currPos + 1], (t = i.slides[i.currPos - 1]) && t.type === e && i.loadSlide(t), n && n.type === e && i.loadSlide(n));
      },
      focus: function focus(e, t) {
        var n = this,
            i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
        n.isClosing || ((t = (t = !e && n.current && n.current.isComplete ? n.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : n.$refs.container.find("*:visible")).filter(i).filter(function () {
          return "hidden" !== f(this).css("visibility") && !f(this).hasClass("disabled");
        })).length ? (i = t.index(r.activeElement), e && e.shiftKey ? (i < 0 || 0 == i) && (e.preventDefault(), t.eq(t.length - 1).trigger("focus")) : (i < 0 || i == t.length - 1) && (e && e.preventDefault(), t.eq(0).trigger("focus"))) : n.$refs.container.trigger("focus"));
      },
      activate: function activate() {
        var t = this;
        f(".fancybox-container").each(function () {
          var e = f(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      },
      close: function close(e, t) {
        function n() {
          l.cleanUp(e);
        }

        var i,
            s,
            a,
            r,
            o,
            l = this,
            c = l.current;
        return !l.isClosing && (!(l.isClosing = !0) === l.trigger("beforeClose", e) ? (l.isClosing = !1, d(function () {
          l.update();
        }), !1) : (l.removeEvents(), a = c.$content, i = c.opts.animationEffect, s = f.isNumeric(t) ? t : i ? c.opts.animationDuration : 0, c.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? f.fancybox.stop(c.$slide) : i = !1, c.$slide.siblings().trigger("onReset").remove(), s && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", s + "ms"), l.hideLoading(c), l.hideControls(!0), l.updateCursor(), "zoom" === (i = "zoom" !== i || a && s && "image" === c.type && !l.isMoved() && !c.hasError && (o = l.getThumbPos(c)) ? i : "fade") ? (f.fancybox.stop(a), t = {
          top: (r = f.fancybox.getTranslate(a)).top,
          left: r.left,
          scaleX: r.width / o.width,
          scaleY: r.height / o.height,
          width: o.width,
          height: o.height
        }, (r = "auto" == (r = c.opts.zoomOpacity) ? .1 < Math.abs(c.width / c.height - o.width / o.height) : r) && (o.opacity = 0), f.fancybox.setTranslate(a, t), h(a), f.fancybox.animate(a, o, s, n)) : i && s ? f.fancybox.animate(c.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, s, n) : !0 === e ? setTimeout(n, s) : n(), !0));
      },
      cleanUp: function cleanUp(e) {
        var t,
            n = this,
            i = n.current.opts.$orig;
        n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", e), !n.current.opts.backFocus || (i = i && i.length && i.is(":visible") ? i : n.$trigger) && i.length && (t = l.scrollX, e = l.scrollY, i.trigger("focus"), f("html, body").scrollTop(e).scrollLeft(t)), n.current = null, (n = f.fancybox.getInstance()) ? n.activate() : (f("body").removeClass("fancybox-active compensate-for-scrollbar"), f("#fancybox-style-noscroll").remove());
      },
      trigger: function trigger(e, t) {
        var n,
            i = Array.prototype.slice.call(arguments, 1),
            s = this,
            t = t && t.opts ? t : s.current;
        if (t ? i.unshift(t) : t = s, i.unshift(s), !1 === (n = f.isFunction(t.opts[e]) ? t.opts[e].apply(t, i) : n)) return n;
        ("afterClose" !== e && s.$refs ? s.$refs.container : a).trigger(e + ".fb", i);
      },
      updateControls: function updateControls() {
        var e = this,
            t = e.current,
            n = t.index,
            i = e.$refs.container,
            s = e.$refs.caption,
            a = t.opts.caption;
        t.$slide.trigger("refresh"), a && a.length ? (e.$caption = s).children().eq(0).html(a) : e.$caption = null, e.hasHiddenControls || e.isIdle || e.showControls(), i.find("[data-fancybox-count]").html(e.group.length), i.find("[data-fancybox-index]").html(n + 1), i.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0), i.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1), "image" === t.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), f(r.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus");
      },
      hideControls: function hideControls(e) {
        var t = ["infobar", "toolbar", "nav"];
        !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function (e) {
          return "fancybox-show-" + e;
        }).join(" ")), this.hasHiddenControls = !0;
      },
      showControls: function showControls() {
        var e = this,
            t = (e.current || e).opts,
            n = e.$refs.container;
        e.hasHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length)).toggleClass("fancybox-is-modal", !!t.modal);
      },
      toggleControls: function toggleControls() {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      }
    }), f.fancybox = {
      version: "3.5.7",
      defaults: e,
      getInstance: function getInstance(e) {
        var t = f('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            n = Array.prototype.slice.call(arguments, 1);
        return t instanceof i && ("string" === f.type(e) ? t[e].apply(t, n) : "function" === f.type(e) && e.apply(t, n), t);
      },
      open: function open(e, t, n) {
        return new i(e, t, n);
      },
      close: function close(e) {
        var t = this.getInstance();
        t && (t.close(), !0 === e && this.close(e));
      },
      destroy: function destroy() {
        this.close(!0), a.add("body").off("click.fb-start", "**");
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: (e = r.createElement("div"), l.getComputedStyle && l.getComputedStyle(e) && l.getComputedStyle(e).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
      getTranslate: function getTranslate(e) {
        var t;
        return !(!e || !e.length) && {
          top: (t = e[0].getBoundingClientRect()).top || 0,
          left: t.left || 0,
          width: t.width,
          height: t.height,
          opacity: parseFloat(e.css("opacity"))
        };
      },
      setTranslate: function setTranslate(e, t) {
        var n = "",
            i = {};
        if (e && t) return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position() : t).left + "px, " + (void 0 === t.top ? e.position() : t).top + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"), n.length && (i.transform = n), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.width && (i.width = t.width), void 0 !== t.height && (i.height = t.height), e.css(i);
      },
      animate: function animate(t, n, i, s, a) {
        var r,
            o = this;
        f.isFunction(i) && (s = i, i = null), o.stop(t), r = o.getTranslate(t), t.on(c, function (e) {
          e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName) || (o.stop(t), f.isNumeric(i) && t.css("transition-duration", ""), f.isPlainObject(n) ? void 0 !== n.scaleX && void 0 !== n.scaleY && o.setTranslate(t, {
            top: n.top,
            left: n.left,
            width: r.width * n.scaleX,
            height: r.height * n.scaleY,
            scaleX: 1,
            scaleY: 1
          }) : !0 !== a && t.removeClass(n), f.isFunction(s) && s(e));
        }), f.isNumeric(i) && t.css("transition-duration", i + "ms"), f.isPlainObject(n) ? (void 0 !== n.scaleX && void 0 !== n.scaleY && (delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), f.fancybox.setTranslate(t, n)) : t.addClass(n), t.data("timer", setTimeout(function () {
          t.trigger(c);
        }, i + 33));
      },
      stop: function stop(e, t) {
        e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(c), e.off(c).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"));
      }
    }, f.fn.fancybox = function (e) {
      var t;
      return (t = (e = e || {}).selector || !1) ? f("body").off("click.fb-start", t).on("click.fb-start", t, {
        options: e
      }, n) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: e
      }, n), this;
    }, a.on("click.fb-start", "[data-fancybox]", n), a.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
      f('[data-fancybox="' + f(this).attr("data-fancybox-trigger") + '"]').eq(f(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
        $trigger: f(this)
      });
    }), p = null, a.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
      switch (e.type) {
        case "mousedown":
          p = f(this);
          break;

        case "mouseup":
          p = null;
          break;

        case "focusin":
          f(".fancybox-button").removeClass("fancybox-focus"), f(this).is(p) || f(this).is("[disabled]") || f(this).addClass("fancybox-focus");
          break;

        case "focusout":
          f(".fancybox-button").removeClass("fancybox-focus");
      }
    });
  }

  var p;
}(window, document, jQuery), function (p) {
  "use strict";

  function f(n, e, t) {
    if (n) return "object" === p.type(t = t || "") && (t = p.param(t, !0)), p.each(e, function (e, t) {
      n = n.replace("$" + e, t || "");
    }), t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t), n;
  }

  var i = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function url(e) {
        return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed");
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function url(e) {
        return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };
  p(document).on("objectNeedsType.fb", function (e, t, s) {
    var a,
        r,
        o,
        l,
        c,
        d,
        u = s.src || "",
        h = !1,
        n = p.extend(!0, {}, i, s.opts.media);
    p.each(n, function (e, t) {
      if (r = u.match(t.matcher)) {
        if (h = t.type, d = e, c = {}, t.paramPlace && r[t.paramPlace]) {
          l = (l = "?" == (l = r[t.paramPlace])[0] ? l.substring(1) : l).split("&");

          for (var n = 0; n < l.length; ++n) {
            var i = l[n].split("=", 2);
            2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
          }
        }

        return o = p.extend(!0, {}, t.params, s.opts[e], c), u = "function" === p.type(t.url) ? t.url.call(this, r, o, s) : f(t.url, r, o), a = "function" === p.type(t.thumb) ? t.thumb.call(this, r, o, s) : f(t.thumb, r), "youtube" === e ? u = u.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
        }) : "vimeo" === e && (u = u.replace("&%23", "#")), !1;
      }
    }), h ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === h && (s.opts = p.extend(!0, s.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), p.extend(s, {
      type: h,
      src: u,
      origSrc: s.src,
      contentSource: d,
      contentType: "image" === h ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
    })) : u && (s.type = s.opts.defaultType);
  });
  var s = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      "class": "YT",
      loading: !1,
      loaded: !1
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      "class": "Vimeo",
      loading: !1,
      loaded: !1
    },
    load: function load(e) {
      var t,
          n = this;
      this[e].loaded ? setTimeout(function () {
        n.done(e);
      }) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function () {
        n[e].loaded = !0, n.done(e);
      } : t.onload = function () {
        n[e].loaded = !0, n.done(e);
      }, document.body.appendChild(t));
    },
    done: function done(e) {
      var t, n;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (t = p.fancybox.getInstance()) && (n = t.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
        events: {
          onStateChange: function onStateChange(e) {
            0 == e.data && t.next();
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function () {
        t.next();
      }));
    }
  };
  p(document).on({
    "afterShow.fb": function afterShowFb(e, t, n) {
      1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && s.load(n.contentSource);
    }
  });
}(jQuery), function (d, l, u) {
  "use strict";

  function h(e) {
    var t,
        n = [];

    for (t in e = (e = e.originalEvent || e || d.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) {
      e[t].pageX ? n.push({
        x: e[t].pageX,
        y: e[t].pageY
      }) : e[t].clientX && n.push({
        x: e[t].clientX,
        y: e[t].clientY
      });
    }

    return n;
  }

  function p(e, t, n) {
    return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0;
  }

  function c(e) {
    if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || u.isFunction(e.get(0).onclick) || e.data("selectable")) return 1;

    for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++) {
      if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1;
    }
  }

  function f(e) {
    for (var t, n, i, s = !1; t = e.get(0), n = void 0, n = d.getComputedStyle(t)["overflow-y"], i = d.getComputedStyle(t)["overflow-x"], n = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight, t = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth, !(s = n || t) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body");) {
      ;
    }

    return s;
  }

  function n(e) {
    var t = this;
    t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", u.proxy(t, "ontouchstart"));
  }

  var m = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || function (e) {
    return d.setTimeout(e, 1e3 / 60);
  },
      g = d.cancelAnimationFrame || d.webkitCancelAnimationFrame || d.mozCancelAnimationFrame || d.oCancelAnimationFrame || function (e) {
    d.clearTimeout(e);
  };

  n.prototype.destroy = function () {
    var e = this;
    e.$container.off(".fb.touch"), u(l).off(".fb.touch"), e.requestId && (g(e.requestId), e.requestId = null), e.tapped && (clearTimeout(e.tapped), e.tapped = null);
  }, n.prototype.ontouchstart = function (e) {
    var t = this,
        n = u(e.target),
        i = t.instance,
        s = i.current,
        a = s.$slide,
        r = s.$content,
        o = "touchstart" == e.type;

    if (o && t.$container.off("mousedown.fb.touch"), (!e.originalEvent || 2 != e.originalEvent.button) && a.length && n.length && !c(n) && !c(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
      if (!s || i.isAnimating || s.$slide.hasClass("fancybox-animated")) return e.stopPropagation(), void e.preventDefault();
      t.realPoints = t.startPoints = h(e), t.startPoints.length && (s.touch && e.stopPropagation(), t.startEvent = e, t.canTap = !0, t.$target = n, t.$content = r, t.opts = s.opts.touch, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.isScrolling = !1, t.canPan = i.canPan(), t.startTime = new Date().getTime(), t.distanceX = t.distanceY = t.distance = 0, t.canvasWidth = Math.round(a[0].clientWidth), t.canvasHeight = Math.round(a[0].clientHeight), t.contentLastPos = null, t.contentStartPos = u.fancybox.getTranslate(t.$content) || {
        top: 0,
        left: 0
      }, t.sliderStartPos = u.fancybox.getTranslate(a), t.stagePos = u.fancybox.getTranslate(i.$refs.stage), t.sliderStartPos.top -= t.stagePos.top, t.sliderStartPos.left -= t.stagePos.left, t.contentStartPos.top -= t.stagePos.top, t.contentStartPos.left -= t.stagePos.left, u(l).off(".fb.touch").on(o ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", u.proxy(t, "ontouchend")).on(o ? "touchmove.fb.touch" : "mousemove.fb.touch", u.proxy(t, "ontouchmove")), u.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0), ((t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length) || (n.is(".fancybox-image") && e.preventDefault(), u.fancybox.isMobile && n.parents(".fancybox-caption").length)) && (t.isScrollable = f(n) || f(n.parent()), u.fancybox.isMobile && t.isScrollable || e.preventDefault(), 1 !== t.startPoints.length && !s.hasError || (t.canPan ? (u.fancybox.stop(t.$content), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-is-grabbing")), 2 === t.startPoints.length && "image" === s.type && (s.isLoaded || s.$ghost) && (t.canTap = !1, t.isSwiping = !1, t.isPanning = !1, t.isZooming = !0, u.fancybox.stop(t.$content), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - u(d).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - u(d).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = p(t.startPoints[0], t.startPoints[1]))));
    }
  }, n.prototype.onscroll = function (e) {
    this.isScrolling = !0, l.removeEventListener("scroll", this.onscroll, !0);
  }, n.prototype.ontouchmove = function (e) {
    var t = this;
    return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void (t.canTap = !1) : (t.newPoints = h(e), void ((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = p(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = p(t.newPoints[0], t.startPoints[0], "y"), t.distance = p(t.newPoints[0], t.startPoints[0]), 0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))));
  }, n.prototype.onSwipe = function (e) {
    var s = this,
        a = s.instance,
        t = s.isSwiping,
        n = s.sliderStartPos.left || 0;
    !0 !== t ? ("x" == t && (0 < s.distanceX && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? n += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? n -= Math.pow(-s.distanceX, .8) : n += s.distanceX), s.sliderLastPos = {
      top: "x" == t ? 0 : s.sliderStartPos.top + s.distanceY,
      left: n
    }, s.requestId && (g(s.requestId), s.requestId = null), s.requestId = m(function () {
      s.sliderLastPos && (u.each(s.instance.slides, function (e, t) {
        var n = t.pos - s.instance.currPos;
        u.fancybox.setTranslate(t.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + n * s.canvasWidth + n * t.opts.gutter
        });
      }), s.$container.addClass("fancybox-is-sliding"));
    })) : 10 < Math.abs(s.distance) && (s.canTap = !1, a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && 800 < u(d).width() ? s.isSwiping = "x" : (n = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = 45 < n && n < 135 ? "y" : "x"), "y" === s.isSwiping && u.fancybox.isMobile && s.isScrollable ? s.isScrolling = !0 : (a.isDragging = s.isSwiping, s.startPoints = s.newPoints, u.each(a.slides, function (e, t) {
      var n, i;
      u.fancybox.stop(t.$slide), n = u.fancybox.getTranslate(t.$slide), i = u.fancybox.getTranslate(a.$refs.stage), t.$slide.css({
        transform: "",
        opacity: "",
        "transition-duration": ""
      }).removeClass("fancybox-animated").removeClass(function (e, t) {
        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
      }), t.pos === a.current.pos && (s.sliderStartPos.top = n.top - i.top, s.sliderStartPos.left = n.left - i.left), u.fancybox.setTranslate(t.$slide, {
        top: n.top - i.top,
        left: n.left - i.left
      });
    }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()));
  }, n.prototype.onPan = function () {
    var e = this;
    p(e.newPoints[0], e.realPoints[0]) < (u.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && g(e.requestId), e.requestId = m(function () {
      u.fancybox.setTranslate(e.$content, e.contentLastPos);
    }));
  }, n.prototype.limitMovement = function () {
    var e = this.canvasWidth,
        t = this.canvasHeight,
        n = this.distanceX,
        i = this.distanceY,
        s = (u = this.contentStartPos).left,
        a = u.top,
        r = u.width,
        o = u.height,
        l = e < r ? s + n : s,
        c = a + i,
        d = Math.max(0, .5 * e - .5 * r),
        u = Math.max(0, .5 * t - .5 * o),
        r = Math.min(e - r, .5 * e - .5 * r),
        o = Math.min(t - o, .5 * t - .5 * o);
    return 0 < n && d < l && (l = d - 1 + Math.pow(-d + s + n, .8) || 0), n < 0 && l < r && (l = r + 1 - Math.pow(r - s - n, .8) || 0), 0 < i && u < c && (c = u - 1 + Math.pow(-u + a + i, .8) || 0), {
      top: c = i < 0 && c < o ? o + 1 - Math.pow(o - a - i, .8) || 0 : c,
      left: l
    };
  }, n.prototype.limitPosition = function (e, t, n, i) {
    var s = this.canvasWidth,
        a = this.canvasHeight;
    return e = s < n ? (e = 0 < e ? 0 : e) < s - n ? s - n : e : Math.max(0, s / 2 - n / 2), {
      top: t = a < i ? (t = 0 < t ? 0 : t) < a - i ? a - i : t : Math.max(0, a / 2 - i / 2),
      left: e
    };
  }, n.prototype.onZoom = function () {
    var e = this,
        t = (c = e.contentStartPos).width,
        n = c.height,
        i = c.left,
        s = c.top,
        a = p(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
        r = Math.floor(t * a),
        o = Math.floor(n * a),
        l = (t - r) * e.percentageOfImageAtPinchPointX,
        c = (n - o) * e.percentageOfImageAtPinchPointY,
        t = (e.newPoints[0].x + e.newPoints[1].x) / 2 - u(d).scrollLeft(),
        n = (e.newPoints[0].y + e.newPoints[1].y) / 2 - u(d).scrollTop(),
        t = t - e.centerPointStartX,
        a = {
      top: s + (c + (n - e.centerPointStartY)),
      left: i + (l + t),
      scaleX: a,
      scaleY: a
    };
    e.canTap = !1, e.newWidth = r, e.newHeight = o, e.contentLastPos = a, e.requestId && g(e.requestId), e.requestId = m(function () {
      u.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, n.prototype.ontouchend = function (e) {
    var t = this,
        n = t.isSwiping,
        i = t.isPanning,
        s = t.isZooming,
        a = t.isScrolling;
    if (t.endPoints = h(e), t.dMs = Math.max(new Date().getTime() - t.startTime, 1), t.$container.removeClass("fancybox-is-grabbing"), u(l).off(".fb.touch"), l.removeEventListener("scroll", t.onscroll, !0), t.requestId && (g(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap) return t.onTap(e);
    t.speed = 100, t.velocityX = t.distanceX / t.dMs * .5, t.velocityY = t.distanceY / t.dMs * .5, i ? t.endPanning() : s ? t.endZooming() : t.endSwiping(n, a);
  }, n.prototype.endSwiping = function (e, t) {
    var n = this,
        i = !1,
        s = n.instance.group.length,
        a = Math.abs(n.distanceX),
        a = "x" == e && 1 < s && (130 < n.dMs && 10 < a || 50 < a);
    n.sliderLastPos = null, "y" == e && !t && 50 < Math.abs(n.distanceY) ? (u.fancybox.animate(n.instance.current.$slide, {
      top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
      opacity: 0
    }, 200), i = n.instance.close(!0, 250)) : a && 0 < n.distanceX ? i = n.instance.previous(300) : a && n.distanceX < 0 && (i = n.instance.next(300)), !1 !== i || "x" != e && "y" != e || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding");
  }, n.prototype.endPanning = function () {
    var e,
        t,
        n = this;
    n.contentLastPos && (t = !1 === n.opts.momentum || 350 < n.dMs ? (e = n.contentLastPos.left, n.contentLastPos.top) : (e = n.contentLastPos.left + 500 * n.velocityX, n.contentLastPos.top + 500 * n.velocityY), (t = n.limitPosition(e, t, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width, t.height = n.contentStartPos.height, u.fancybox.animate(n.$content, t, 366));
  }, n.prototype.endZooming = function () {
    var e,
        t,
        n = this,
        i = n.instance.current,
        s = n.newWidth,
        a = n.newHeight;
    n.contentLastPos && (e = n.contentLastPos.left, t = n.contentLastPos.top, u.fancybox.setTranslate(n.$content, {
      top: t,
      left: e,
      width: s,
      height: a,
      scaleX: 1,
      scaleY: 1
    }), s < n.canvasWidth && a < n.canvasHeight ? n.instance.scaleToFit(150) : s > i.width || a > i.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (a = n.limitPosition(e, t, s, a), u.fancybox.animate(n.$content, a, 150)));
  }, n.prototype.onTap = function (t) {
    function e(e) {
      if (e = r.opts[e], e = u.isFunction(e) ? e.apply(a, [r, t]) : e) switch (e) {
        case "close":
          a.close(i.startEvent);
          break;

        case "toggleControls":
          a.toggleControls();
          break;

        case "next":
          a.next();
          break;

        case "nextOrClose":
          1 < a.group.length ? a.next() : a.close(i.startEvent);
          break;

        case "zoom":
          "image" == r.type && (r.isLoaded || r.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(l, c) : a.group.length < 2 && a.close(i.startEvent));
      }
    }

    var n,
        i = this,
        s = u(t.target),
        a = i.instance,
        r = a.current,
        o = t && h(t) || i.startPoints,
        l = o[0] ? o[0].x - u(d).scrollLeft() - i.stagePos.left : 0,
        c = o[0] ? o[0].y - u(d).scrollTop() - i.stagePos.top : 0;

    if ((!t.originalEvent || 2 != t.originalEvent.button) && (s.is("img") || !(l > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";else if (s.is(".fancybox-slide")) n = "Slide";else {
        if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
        n = "Content";
      }

      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY)) return this;
        e("dblclick" + n);
      } else i.tapX = l, i.tapY = c, r.opts["dblclick" + n] && r.opts["dblclick" + n] !== r.opts["click" + n] ? i.tapped = setTimeout(function () {
        i.tapped = null, a.isAnimating || e("click" + n);
      }, 500) : e("click" + n);

      return this;
    }
  }, u(l).on("onActivate.fb", function (e, t) {
    t && !t.Guestures && (t.Guestures = new n(t));
  }).on("beforeClose.fb", function (e, t) {
    t && t.Guestures && t.Guestures.destroy();
  });
}(window, document, jQuery), function (a, r) {
  "use strict";

  function n(e) {
    this.instance = e, this.init();
  }

  r.extend(!0, r.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3,
      progress: !0
    }
  }), r.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function init() {
      var e = this,
          t = e.instance,
          n = t.group[t.currIndex].opts.slideShow;
      e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        e.toggle();
      }), t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = r('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner));
    },
    set: function set(e) {
      var t = this,
          n = t.instance,
          i = n.current;
      i && (!0 === e || i.opts.loop || n.currIndex < n.group.length - 1) ? t.isActive && "video" !== i.contentType && (t.$progress && r.fancybox.animate(t.$progress.show(), {
        scaleX: 1
      }, i.opts.slideShow.speed), t.timer = setTimeout(function () {
        n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0);
      }, i.opts.slideShow.speed)) : (t.stop(), n.idleSecondsCounter = 0, n.showControls());
    },
    clear: function clear() {
      clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide();
    },
    start: function start() {
      var e = this,
          t = e.instance.current;
      t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.isActive = !0, t.isComplete && e.set(!0), e.instance.trigger("onSlideShowChange", !0));
    },
    stop: function stop() {
      var e = this,
          t = e.instance.current;
      e.clear(), e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1, e.instance.trigger("onSlideShowChange", !1), e.$progress && e.$progress.removeAttr("style").hide();
    },
    toggle: function toggle() {
      this.isActive ? this.stop() : this.start();
    }
  }), r(a).on({
    "onInit.fb": function onInitFb(e, t) {
      t && !t.SlideShow && (t.SlideShow = new n(t));
    },
    "beforeShow.fb": function beforeShowFb(e, t, n, i) {
      t = t && t.SlideShow, i ? t && n.opts.slideShow.autoStart && t.start() : t && t.isActive && t.clear();
    },
    "afterShow.fb": function afterShowFb(e, t, n) {
      (t = t && t.SlideShow) && t.isActive && t.set();
    },
    "afterKeydown.fb": function afterKeydownFb(e, t, n, i, s) {
      !(t = t && t.SlideShow) || !n.opts.slideShow || 80 !== s && 32 !== s || r(a.activeElement).is("button,a,input") || (i.preventDefault(), t.toggle());
    },
    "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(e, t) {
      (t = t && t.SlideShow) && t.stop();
    }
  }), r(a).on("visibilitychange", function () {
    var e = r.fancybox.getInstance();
    (e = e && e.SlideShow) && e.isActive && (a.hidden ? e.clear() : e.set());
  });
}(document, jQuery), function (a, n) {
  "use strict";

  var i,
      s = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], t = {}, n = 0; n < e.length; n++) {
      var i = e[n];

      if (i && i[1] in a) {
        for (var s = 0; s < i.length; s++) {
          t[e[0][s]] = i[s];
        }

        return t;
      }
    }

    return !1;
  }();

  s && (n.extend(!0, n.fancybox.defaults, {
    btnTpl: {
      fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
    },
    fullScreen: {
      autoStart: !(i = {
        request: function request(e) {
          (e = e || a.documentElement)[s.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function exit() {
          a[s.exitFullscreen]();
        },
        toggle: function toggle(e) {
          e = e || a.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function isFullscreen() {
          return Boolean(a[s.fullscreenElement]);
        },
        enabled: function enabled() {
          return Boolean(a[s.fullscreenEnabled]);
        }
      })
    }
  }), n(a).on(s.fullscreenchange, function () {
    var e = i.isFullscreen(),
        t = n.fancybox.getInstance();
    t && (t.current && "image" === t.current.type && t.isAnimating && (t.isAnimating = !1, t.update(!0, !0, 0), t.isComplete || t.complete()), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e), t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e));
  })), n(a).on({
    "onInit.fb": function onInitFb(e, t) {
      s ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
        e.stopPropagation(), e.preventDefault(), i.toggle();
      }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
    },
    "afterKeydown.fb": function afterKeydownFb(e, t, n, i, s) {
      t && t.FullScreen && 70 === s && (i.preventDefault(), t.FullScreen.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(e, t) {
      t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
    }
  });
}(document, jQuery), function (e, a) {
  "use strict";

  var r = "fancybox-thumbs";

  function n(e) {
    this.init(e);
  }

  a.fancybox.defaults = a.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, a.fancybox.defaults), a.extend(n.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function init(e) {
      var t = this,
          n = e.group,
          i = 0;
      t.instance = e, t.opts = n[e.currIndex].opts.thumbs, (e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");

      for (var s = 0, a = n.length; s < a && (n[s].thumb && i++, !(1 < i)); s++) {
        ;
      }

      1 < i && t.opts ? (t.$button.removeAttr("style").on("click", function () {
        t.toggle();
      }), t.isActive = !0) : t.$button.hide();
    },
    create: function create() {
      var n,
          e = this,
          t = e.instance,
          i = e.opts.parentEl,
          s = [];
      e.$grid || (e.$grid = a('<div class="' + r + " " + r + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(i).addBack().filter(i)), e.$grid.on("click", "a", function () {
        t.jumpTo(a(this).attr("data-index"));
      })), e.$list || (e.$list = a('<div class="' + r + '__list">').appendTo(e.$grid)), a.each(t.group, function (e, t) {
        (n = t.thumb) || "image" !== t.type || (n = t.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      }), e.$list[0].innerHTML = s.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0));
    },
    focus: function focus(e) {
      var t,
          n,
          i = this,
          s = i.$list,
          a = i.$grid;
      i.instance.current && (n = (t = s.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > s.height() - t.outerHeight()) ? s.stop().animate({
        scrollTop: s.scrollTop() + n.top
      }, e) : "x" === i.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - t.outerWidth())) && s.parent().stop().animate({
        scrollLeft: n.left
      }, e));
    },
    update: function update() {
      var e = this;
      e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update();
    },
    hide: function hide() {
      this.isVisible = !1, this.update();
    },
    show: function show() {
      this.isVisible = !0, this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible, this.update();
    }
  }), a(e).on({
    "onInit.fb": function onInitFb(e, t) {
      !t || t.Thumbs || (t = new n(t)).isActive && !0 === t.opts.autoStart && t.show();
    },
    "beforeShow.fb": function beforeShowFb(e, t, n, i) {
      (t = t && t.Thumbs) && t.isVisible && t.focus(i ? 0 : 250);
    },
    "afterKeydown.fb": function afterKeydownFb(e, t, n, i, s) {
      (t = t && t.Thumbs) && t.isActive && 71 === s && (i.preventDefault(), t.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(e, t) {
      (t = t && t.Thumbs) && t.isVisible && !1 !== t.opts.hideOnClose && t.$grid.hide();
    }
  });
}(document, jQuery), function (e, s) {
  "use strict";

  s.extend(!0, s.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
    },
    share: {
      url: function url(e, t) {
        return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), s(e).on("click", "[data-fancybox-share]", function () {
    var e,
        t,
        n = s.fancybox.getInstance(),
        i = n.current || null;
    i && ("function" === s.type(i.opts.share.url) && (e = i.opts.share.url.apply(i, [n, i])), e = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (t = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    }, String(e).replace(/[&<>"'`=\/]/g, function (e) {
      return t[e];
    }))).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), s.fancybox.open({
      src: n.translate(n, e),
      type: "html",
      opts: {
        touch: !1,
        animationEffect: !1,
        afterLoad: function afterLoad(e, t) {
          n.$refs.container.one("beforeClose.fb", function () {
            e.close(null, 0);
          }), t.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        },
        mobile: {
          autoFocus: !1
        }
      }
    }));
  });
}(document, jQuery), function (a, r, i) {
  "use strict";

  function s() {
    var e = a.location.hash.substr(1),
        t = e.split("-"),
        n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
    return {
      hash: e,
      index: n < 1 ? 1 : n,
      gallery: t.join("-")
    };
  }

  function t(e) {
    "" !== e.gallery && i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start");
  }

  function o(e) {
    return !!e && "" !== (e = (e = (e.current || e).opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && e;
  }

  i.escapeSelector || (i.escapeSelector = function (e) {
    return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
      return t ? "\0" === e ? "пїЅ" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    });
  }), i(function () {
    !1 !== i.fancybox.defaults.hash && (i(r).on({
      "onInit.fb": function onInitFb(e, t) {
        var n, i;
        !1 !== t.group[t.currIndex].opts.hash && (n = s(), (i = o(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1));
      },
      "beforeShow.fb": function beforeShowFb(e, t, n, i) {
        var s;
        n && !1 !== n.opts.hash && (s = o(t)) && (t.currentHash = s + (1 < t.group.length ? "-" + (n.index + 1) : ""), a.location.hash !== "#" + t.currentHash && (i && !t.origHash && (t.origHash = a.location.hash), t.hashTimer && clearTimeout(t.hashTimer), t.hashTimer = setTimeout(function () {
          "replaceState" in a.history ? (a.history[i ? "pushState" : "replaceState"]({}, r.title, a.location.pathname + a.location.search + "#" + t.currentHash), i && (t.hasCreatedHistory = !0)) : a.location.hash = t.currentHash, t.hashTimer = null;
        }, 300)));
      },
      "beforeClose.fb": function beforeCloseFb(e, t, n) {
        n && !1 !== n.opts.hash && (clearTimeout(t.hashTimer), t.currentHash && t.hasCreatedHistory ? a.history.back() : t.currentHash && ("replaceState" in a.history ? a.history.replaceState({}, r.title, a.location.pathname + a.location.search + (t.origHash || "")) : a.location.hash = t.origHash), t.currentHash = null);
      }
    }), i(a).on("hashchange.fb", function () {
      var e = s(),
          n = null;
      i.each(i(".fancybox-container").get().reverse(), function (e, t) {
        if ((t = i(t).data("FancyBox")) && t.currentHash) return n = t, !1;
      }), n ? n.currentHash === e.gallery + "-" + e.index || 1 === e.index && n.currentHash == e.gallery || (n.currentHash = null, n.close()) : "" !== e.gallery && t(e);
    }), setTimeout(function () {
      i.fancybox.getInstance() || t(s());
    }, 50));
  });
}(window, document, jQuery), function (e, t) {
  "use strict";

  var s = new Date().getTime();
  t(e).on({
    "onInit.fb": function onInitFb(e, i, t) {
      i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var t = i.current,
            n = new Date().getTime();
        i.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(), e.stopPropagation(), t.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, n - s < 250 || (s = n, i[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())));
      });
    }
  });
}(document, jQuery), jQuery.fn.datepicker.dates.ru = {
  days: ["Р’РѕСЃРєСЂРµСЃРµРЅСЊРµ", "РџРѕРЅРµРґРµР»СЊРЅРёРє", "Р’С‚РѕСЂРЅРёРє", "РЎСЂРµРґР°", "Р§РµС‚РІРµСЂРі", "РџСЏС‚РЅРёС†Р°", "РЎСѓР±Р±РѕС‚Р°"],
  daysShort: ["Р’СЃРє", "РџРЅРґ", "Р’С‚СЂ", "РЎСЂРґ", "Р§С‚РІ", "РџС‚РЅ", "РЎСѓР±"],
  daysMin: ["Р’СЃ", "РџРЅ", "Р’С‚", "РЎСЂ", "Р§С‚", "РџС‚", "РЎР±"],
  months: ["РЇРЅРІР°СЂСЊ", "Р¤РµРІСЂР°Р»СЊ", "РњР°СЂС‚", "РђРїСЂРµР»СЊ", "РњР°Р№", "РСЋРЅСЊ", "РСЋР»СЊ", "РђРІРіСѓСЃС‚", "РЎРµРЅС‚СЏР±СЂСЊ", "РћРєС‚СЏР±СЂСЊ", "РќРѕСЏР±СЂСЊ", "Р”РµРєР°Р±СЂСЊ"],
  monthsShort: ["РЇРЅРІ", "Р¤РµРІ", "РњР°СЂ", "РђРїСЂ", "РњР°Р№", "РСЋРЅ", "РСЋР»", "РђРІРі", "РЎРµРЅ", "РћРєС‚", "РќРѕСЏ", "Р”РµРє"],
  today: "РЎРµРіРѕРґРЅСЏ",
  clear: "РћС‡РёСЃС‚РёС‚СЊ",
  format: "dd.mm.yyyy",
  weekStart: 1
}, function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
}(function (l) {
  l.extend(l.fn, {
    validate: function validate(e) {
      if (this.length) {
        var i = l.data(this[0], "validator");
        return i || (this.attr("novalidate", "novalidate"), i = new l.validator(e, this[0]), l.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
          i.settings.submitHandler && (i.submitButton = e.target), l(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== l(this).attr("formnovalidate") && (i.cancelSubmit = !0);
        }), this.on("submit.validate", function (n) {
          function e() {
            var e, t;
            return !i.settings.submitHandler || (i.submitButton && (e = l("<input type='hidden'/>").attr("name", i.submitButton.name).val(l(i.submitButton).val()).appendTo(i.currentForm)), t = i.settings.submitHandler.call(i, i.currentForm, n), i.submitButton && e.remove(), void 0 !== t && t);
          }

          return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1);
        })), i);
      }

      e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    },
    valid: function valid() {
      var e, t, n;
      return l(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, t = l(this[0].form).validate(), this.each(function () {
        e = t.element(this) && e, n = n.concat(t.errorList);
      }), t.errorList = n), e;
    },
    rules: function rules(e, t) {
      var n,
          i,
          s,
          a,
          r,
          o = this[0];
      if (e) switch (n = l.data(o.form, "validator").settings, i = n.rules, s = l.validator.staticRules(o), e) {
        case "add":
          l.extend(s, l.validator.normalizeRule(t)), delete s.messages, i[o.name] = s, t.messages && (n.messages[o.name] = l.extend(n.messages[o.name], t.messages));
          break;

        case "remove":
          return t ? (r = {}, l.each(t.split(/\s/), function (e, t) {
            r[t] = s[t], delete s[t], "required" === t && l(o).removeAttr("aria-required");
          }), r) : (delete i[o.name], s);
      }
      return (e = l.validator.normalizeRules(l.extend({}, l.validator.classRules(o), l.validator.attributeRules(o), l.validator.dataRules(o), l.validator.staticRules(o)), o)).required && (a = e.required, delete e.required, e = l.extend({
        required: a
      }, e), l(o).attr("aria-required", "true")), e.remote && (a = e.remote, delete e.remote, e = l.extend(e, {
        remote: a
      })), e;
    }
  }), l.extend(l.expr[":"], {
    blank: function blank(e) {
      return !l.trim("" + l(e).val());
    },
    filled: function filled(e) {
      return !!l.trim("" + l(e).val());
    },
    unchecked: function unchecked(e) {
      return !l(e).prop("checked");
    }
  }), l.validator = function (e, t) {
    this.settings = l.extend(!0, {}, l.validator.defaults, e), this.currentForm = t, this.init();
  }, l.validator.format = function (n, e) {
    return 1 === arguments.length ? function () {
      var e = l.makeArray(arguments);
      return e.unshift(n), l.validator.format.apply(this, e);
    } : ((e = 2 < arguments.length && e.constructor !== Array ? l.makeArray(arguments).slice(1) : e).constructor !== Array && (e = [e]), l.each(e, function (e, t) {
      n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return t;
      });
    }), n);
  }, l.extend(l.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: l([]),
      errorLabelContainer: l([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      },
      onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      },
      onkeyup: function onkeyup(e, t) {
        9 === t.which && "" === this.elementValue(e) || -1 !== l.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e === this.lastElement) && this.element(e);
      },
      onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      },
      highlight: function highlight(e, t, n) {
        ("radio" === e.type ? this.findByName(e.name) : l(e)).addClass(t).removeClass(n);
      },
      unhighlight: function unhighlight(e, t, n) {
        ("radio" === e.type ? this.findByName(e.name) : l(e)).removeClass(t).addClass(n);
      }
    },
    setDefaults: function setDefaults(e) {
      l.extend(l.validator.defaults, e);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: l.validator.format("Please enter no more than {0} characters."),
      minlength: l.validator.format("Please enter at least {0} characters."),
      rangelength: l.validator.format("Please enter a value between {0} and {1} characters long."),
      range: l.validator.format("Please enter a value between {0} and {1}."),
      max: l.validator.format("Please enter a value less than or equal to {0}."),
      min: l.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function e(e) {
          var t = l.data(this.form, "validator"),
              n = "on" + e.type.replace(/^validate/, ""),
              i = t.settings;
          i[n] && !l(this).is(i.ignore) && i[n].call(t, this, e);
        }

        this.labelContainer = l(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || l(this.currentForm), this.containers = l(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var n,
            i = this.groups = {};
        l.each(this.settings.groups, function (n, e) {
          "string" == typeof e && (e = e.split(/\s/)), l.each(e, function (e, t) {
            i[t] = n;
          });
        }), n = this.settings.rules, l.each(n, function (e, t) {
          n[e] = l.validator.normalizeRule(t);
        }), l(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && l(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), l(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
      },
      form: function form() {
        return this.checkForm(), l.extend(this.submitted, this.errorMap), this.invalid = l.extend({}, this.errorMap), this.valid() || l(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }

        return this.valid();
      },
      element: function element(e) {
        var t = this.clean(e),
            n = this.validationTargetFor(t),
            i = !0;
        return void 0 === (this.lastElement = n) ? delete this.invalid[t.name] : (this.prepareElement(n), this.currentElements = l(n), (i = !1 !== this.check(n)) ? delete this.invalid[n.name] : this.invalid[n.name] = !0), l(e).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i;
      },
      showErrors: function showErrors(t) {
        if (t) {
          for (var e in l.extend(this.errorMap, t), this.errorList = [], t) {
            this.errorList.push({
              message: t[e],
              element: this.findByName(e)[0]
            });
          }

          this.successList = l.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }

        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        l.fn.resetForm && l(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
        var e,
            t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        if (this.settings.unhighlight) for (e = 0; t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, "");
        } else t.removeClass(this.settings.errorClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(e) {
        var t,
            n = 0;

        for (t in e) {
          n++;
        }

        return n;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          l(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      },
      findLastActive: function findLastActive() {
        var t = this.lastActive;
        return t && 1 === l.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      },
      elements: function elements() {
        var e = this,
            t = {};
        return l(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in t || !e.objectLength(l(this).rules())) && (t[this.name] = !0);
        });
      },
      clean: function clean(e) {
        return l(e)[0];
      },
      errors: function errors() {
        var e = this.settings.errorClass.split(" ").join(".");
        return l(this.settings.errorElement + "." + e, this.errorContext);
      },
      reset: function reset() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = l([]), this.toHide = l([]), this.currentElements = l([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      },
      elementValue: function elementValue(e) {
        var t = l(e),
            n = e.type;
        return "radio" === n || "checkbox" === n ? this.findByName(e.name).filter(":checked").val() : "number" === n && void 0 !== e.validity ? !e.validity.badInput && t.val() : "string" == typeof (t = t.val()) ? t.replace(/\r/g, "") : t;
      },
      check: function check(e) {
        e = this.validationTargetFor(this.clean(e));
        var t,
            n,
            i,
            s = l(e).rules(),
            a = l.map(s, function (e, t) {
          return t;
        }).length,
            r = !1,
            o = this.elementValue(e);

        for (n in s) {
          i = {
            method: n,
            parameters: s[n]
          };

          try {
            if ("dependency-mismatch" === (t = l.validator.methods[n].call(this, o, e, i.parameters)) && 1 === a) {
              r = !0;
              continue;
            }

            if (r = !1, "pending" === t) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
            if (!t) return this.formatAndAdd(e, i), !1;
          } catch (t) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method."), t;
          }
        }

        if (!r) return this.objectLength(s) && this.successList.push(e), !0;
      },
      customDataMessage: function customDataMessage(e, t) {
        return l(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || l(e).data("msg");
      },
      customMessage: function customMessage(e, t) {
        return (e = this.settings.messages[e]) && (e.constructor === String ? e : e[t]);
      },
      findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      },
      defaultMessage: function defaultMessage(e, t) {
        return this.findDefined(this.customMessage(e.name, t), this.customDataMessage(e, t), !this.settings.ignoreTitle && e.title || void 0, l.validator.messages[t], "<strong>Warning: No message defined for " + e.name + "</strong>");
      },
      formatAndAdd: function formatAndAdd(e, t) {
        var n = this.defaultMessage(e, t.method),
            i = /\$?\{(\d+)\}/g;
        "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = l.validator.format(n.replace(i, "{$1}"), t.parameters)), this.errorList.push({
          message: n,
          element: e,
          method: t.method
        }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      },
      addWrapper: function addWrapper(e) {
        return this.settings.wrapper ? e.add(e.parent(this.settings.wrapper)) : e;
      },
      defaultShowErrors: function defaultShowErrors() {
        for (var e, t, n = 0; this.errorList[n]; n++) {
          t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (n = 0; this.successList[n]; n++) {
          this.showLabel(this.successList[n]);
        }
        if (this.settings.unhighlight) for (n = 0, e = this.validElements(); e[n]; n++) {
          this.settings.unhighlight.call(this, e[n], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return l(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(e, t) {
        var n,
            i,
            s = this.errorsFor(e),
            a = this.idOrName(e),
            r = l(e).attr("aria-describedby");
        s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(t)) : (n = s = l("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, l(e)) : n.insertAfter(e), s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + a + "']").length && (a = s.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), r ? r.match(new RegExp("\\b" + a + "\\b")) || (r += " " + a) : r = a, l(e).attr("aria-describedby", r), (i = this.groups[e.name]) && l.each(this.groups, function (e, t) {
          t === i && l("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"));
        }))), !t && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s);
      },
      errorsFor: function errorsFor(e) {
        var t = "label[for='" + (t = this.idOrName(e)) + "'], label[for='" + t + "'] *";
        return (e = l(e).attr("aria-describedby")) && (t = t + ", #" + e.replace(/\s+/g, ", #")), this.errors().filter(t);
      },
      idOrName: function idOrName(e) {
        return this.groups[e.name] || !this.checkable(e) && e.id || e.name;
      },
      validationTargetFor: function validationTargetFor(e) {
        return this.checkable(e) && (e = this.findByName(e.name)), l(e).not(this.settings.ignore)[0];
      },
      checkable: function checkable(e) {
        return /radio|checkbox/i.test(e.type);
      },
      findByName: function findByName(e) {
        return l(this.currentForm).find("[name='" + e + "']");
      },
      getLength: function getLength(e, t) {
        switch (t.nodeName.toLowerCase()) {
          case "select":
            return l("option:selected", t).length;

          case "input":
            if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length;
        }

        return e.length;
      },
      depend: function depend(e, t) {
        return !this.dependTypes[_typeof(e)] || this.dependTypes[_typeof(e)](e, t);
      },
      dependTypes: {
        "boolean": function boolean(e) {
          return e;
        },
        string: function string(e, t) {
          return !!l(e, t.form).length;
        },
        "function": function _function(e, t) {
          return e(t);
        }
      },
      optional: function optional(e) {
        var t = this.elementValue(e);
        return !l.validator.methods.required.call(this, t, e) && "dependency-mismatch";
      },
      startRequest: function startRequest(e) {
        this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0);
      },
      stopRequest: function stopRequest(e, t) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (l(this.currentForm).submit(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (l(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(e) {
        return l.data(e, "previousValue") || l.data(e, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(e, "remote")
        });
      },
      destroy: function destroy() {
        this.resetForm(), l(this.currentForm).off(".validate").removeData("validator");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(e, t) {
      e.constructor === String ? this.classRuleSettings[e] = t : l.extend(this.classRuleSettings, e);
    },
    classRules: function classRules(e) {
      var t = {};
      return (e = l(e).attr("class")) && l.each(e.split(" "), function () {
        this in l.validator.classRuleSettings && l.extend(t, l.validator.classRuleSettings[this]);
      }), t;
    },
    normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
      /min|max/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
    },
    attributeRules: function attributeRules(e) {
      var t,
          n,
          i = {},
          s = l(e),
          a = e.getAttribute("type");

      for (t in l.validator.methods) {
        n = "required" === t ? (n = e.getAttribute(t), "" === n && (n = !0), !!n) : s.attr(t), this.normalizeAttributeRule(i, a, t, n);
      }

      return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
    },
    dataRules: function dataRules(e) {
      var t,
          n,
          i = {},
          s = l(e),
          a = e.getAttribute("type");

      for (t in l.validator.methods) {
        n = s.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()), this.normalizeAttributeRule(i, a, t, n);
      }

      return i;
    },
    staticRules: function staticRules(e) {
      var t = {},
          n = l.data(e.form, "validator");
      return n.settings.rules ? l.validator.normalizeRule(n.settings.rules[e.name]) || {} : t;
    },
    normalizeRules: function normalizeRules(i, s) {
      return l.each(i, function (e, t) {
        if (!1 !== t) {
          if (t.param || t.depends) {
            var n = !0;

            switch (_typeof(t.depends)) {
              case "string":
                n = !!l(t.depends, s.form).length;
                break;

              case "function":
                n = t.depends.call(s, s);
            }

            n ? i[e] = void 0 === t.param || t.param : delete i[e];
          }
        } else delete i[e];
      }), l.each(i, function (e, t) {
        i[e] = l.isFunction(t) ? t(s) : t;
      }), l.each(["minlength", "maxlength"], function () {
        i[this] && (i[this] = Number(i[this]));
      }), l.each(["rangelength", "range"], function () {
        var e;
        i[this] && (l.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]));
      }), l.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i;
    },
    normalizeRule: function normalizeRule(e) {
      var t;
      return "string" == typeof e && (t = {}, l.each(e.split(/\s/), function () {
        t[this] = !0;
      }), e = t), e;
    },
    addMethod: function addMethod(e, t, n) {
      l.validator.methods[e] = t, l.validator.messages[e] = void 0 !== n ? n : l.validator.messages[e], t.length < 3 && l.validator.addClassRules(e, l.validator.normalizeRule(e));
    },
    methods: {
      required: function required(e, t, n) {
        return this.depend(n, t) ? "select" !== t.nodeName.toLowerCase() ? this.checkable(t) ? 0 < this.getLength(e, t) : 0 < e.length : (t = l(t).val()) && 0 < t.length : "dependency-mismatch";
      },
      email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      },
      url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e);
      },
      date: function date(e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      },
      dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      },
      number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      },
      digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      },
      creditcard: function creditcard(e, t) {
        if (this.optional(t)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(e)) return !1;
        var n,
            i,
            s = 0,
            a = 0,
            r = !1;
        if ((e = e.replace(/\D/g, "")).length < 13 || 19 < e.length) return !1;

        for (n = e.length - 1; 0 <= n; n--) {
          i = e.charAt(n), a = parseInt(i, 10), r && 9 < (a *= 2) && (a -= 9), s += a, r = !r;
        }

        return s % 10 == 0;
      },
      minlength: function minlength(e, t, n) {
        return e = l.isArray(e) ? e.length : this.getLength(e, t), this.optional(t) || n <= e;
      },
      maxlength: function maxlength(e, t, n) {
        return e = l.isArray(e) ? e.length : this.getLength(e, t), this.optional(t) || e <= n;
      },
      rangelength: function rangelength(e, t, n) {
        return e = l.isArray(e) ? e.length : this.getLength(e, t), this.optional(t) || e >= n[0] && e <= n[1];
      },
      min: function min(e, t, n) {
        return this.optional(t) || n <= e;
      },
      max: function max(e, t, n) {
        return this.optional(t) || e <= n;
      },
      range: function range(e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      },
      equalTo: function equalTo(e, t, n) {
        return n = l(n), this.settings.onfocusout && n.off(".validate-equalTo").on("blur.validate-equalTo", function () {
          l(t).valid();
        }), e === n.val();
      },
      remote: function remote(i, s, e) {
        if (this.optional(s)) return "dependency-mismatch";
        var a,
            t,
            r = this.previousValue(s);
        return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), r.originalMessage = this.settings.messages[s.name].remote, this.settings.messages[s.name].remote = r.message, e = "string" == typeof e ? {
          url: e
        } : e, r.old === i ? r.valid : (r.old = i, (a = this).startRequest(s), (t = {})[s.name] = i, l.ajax(l.extend(!0, {
          mode: "abort",
          port: "validate" + s.name,
          dataType: "json",
          data: t,
          context: a.currentForm,
          success: function success(e) {
            var t,
                n = !0 === e || "true" === e;
            a.settings.messages[s.name].remote = r.originalMessage, n ? (t = a.formSubmitted, a.prepareElement(s), a.formSubmitted = t, a.successList.push(s), delete a.invalid[s.name], a.showErrors()) : (t = {}, e = e || a.defaultMessage(s, "remote"), t[s.name] = r.message = l.isFunction(e) ? e(i) : e, a.invalid[s.name] = !0, a.showErrors(t)), r.valid = n, a.stopRequest(s, n);
          }
        }, e)), "pending");
      }
    }
  });
  var i,
      s = {};
  l.ajaxPrefilter ? l.ajaxPrefilter(function (e, t, n) {
    var i = e.port;
    "abort" === e.mode && (s[i] && s[i].abort(), s[i] = n);
  }) : (i = l.ajax, l.ajax = function (e) {
    var t = ("mode" in e ? e : l.ajaxSettings).mode,
        n = ("port" in e ? e : l.ajaxSettings).port;
    return "abort" === t ? (s[n] && s[n].abort(), s[n] = i.apply(this, arguments), s[n]) : i.apply(this, arguments);
  });
}), function (c, i) {
  "use strict";

  function s(e) {
    this.elem = e;
  }

  s.init = function () {
    for (var e = i.querySelectorAll("[data-sharer]"), t = e.length, n = 0; n < t; n++) {
      e[n].addEventListener("click", s.add);
    }
  }, s.add = function (e) {
    new s(e = e.currentTarget || e.srcElement).share();
  }, s.prototype = {
    constructor: s,
    getValue: function getValue(e) {
      var t = this.elem.getAttribute("data-" + e);
      return t && "hashtag" === e && (t.startsWith("#") || (t = "#" + t)), t;
    },
    share: function share() {
      var e = this.getValue("sharer").toLowerCase();
      return (e = {
        facebook: {
          shareUrl: "https://www.facebook.com/sharer/sharer.php",
          params: {
            u: this.getValue("url"),
            hashtag: this.getValue("hashtag")
          }
        },
        linkedin: {
          shareUrl: "https://www.linkedin.com/shareArticle",
          params: {
            url: this.getValue("url"),
            mini: !0
          }
        },
        twitter: {
          shareUrl: "https://twitter.com/intent/tweet/",
          params: {
            text: this.getValue("title"),
            url: this.getValue("url"),
            hashtags: this.getValue("hashtags"),
            via: this.getValue("via")
          }
        },
        email: {
          shareUrl: "mailto:" + this.getValue("to") || "",
          params: {
            subject: this.getValue("subject"),
            body: this.getValue("title") + "\n" + this.getValue("url")
          },
          isLink: !0
        },
        whatsapp: {
          shareUrl: null !== this.getValue("web") ? "https://api.whatsapp.com/send" : "https://wa.me/",
          params: {
            text: this.getValue("title") + " " + this.getValue("url")
          },
          isLink: !0
        },
        telegram: {
          shareUrl: null !== this.getValue("web") ? "https://telegram.me/share" : "tg://msg_url",
          params: {
            text: this.getValue("title"),
            url: this.getValue("url")
          },
          isLink: !0
        },
        viber: {
          shareUrl: "viber://forward",
          params: {
            text: this.getValue("title") + " " + this.getValue("url")
          },
          isLink: !0
        },
        line: {
          shareUrl: "http://line.me/R/msg/text/?" + encodeURIComponent(this.getValue("title") + " " + this.getValue("url")),
          isLink: !0
        },
        pinterest: {
          shareUrl: "https://www.pinterest.com/pin/create/button/",
          params: {
            url: this.getValue("url"),
            media: this.getValue("image"),
            description: this.getValue("description")
          }
        },
        tumblr: {
          shareUrl: "http://tumblr.com/widgets/share/tool",
          params: {
            canonicalUrl: this.getValue("url"),
            content: this.getValue("url"),
            posttype: "link",
            title: this.getValue("title"),
            caption: this.getValue("caption"),
            tags: this.getValue("tags")
          }
        },
        hackernews: {
          shareUrl: "https://news.ycombinator.com/submitlink",
          params: {
            u: this.getValue("url"),
            t: this.getValue("title")
          }
        },
        reddit: {
          shareUrl: "https://www.reddit.com/submit",
          params: {
            url: this.getValue("url")
          }
        },
        vk: {
          shareUrl: "http://vk.com/share.php",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title"),
            description: this.getValue("caption"),
            image: this.getValue("image")
          }
        },
        xing: {
          shareUrl: "https://www.xing.com/social/share/spi",
          params: {
            url: this.getValue("url")
          }
        },
        buffer: {
          shareUrl: "https://buffer.com/add",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title"),
            via: this.getValue("via"),
            picture: this.getValue("picture")
          }
        },
        instapaper: {
          shareUrl: "http://www.instapaper.com/edit",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title"),
            description: this.getValue("description")
          }
        },
        pocket: {
          shareUrl: "https://getpocket.com/save",
          params: {
            url: this.getValue("url")
          }
        },
        stumbleupon: {
          shareUrl: "http://www.stumbleupon.com/submit",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title")
          }
        },
        mashable: {
          shareUrl: "https://mashable.com/submit",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title")
          }
        },
        mix: {
          shareUrl: "https://mix.com/add",
          params: {
            url: this.getValue("url")
          }
        },
        flipboard: {
          shareUrl: "https://share.flipboard.com/bookmarklet/popout",
          params: {
            v: 2,
            title: this.getValue("title"),
            url: this.getValue("url"),
            t: Date.now()
          }
        },
        weibo: {
          shareUrl: "http://service.weibo.com/share/share.php",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title"),
            pic: this.getValue("image"),
            appkey: this.getValue("appkey"),
            ralateUid: this.getValue("ralateuid"),
            language: "zh_cn"
          }
        },
        renren: {
          shareUrl: "http://share.renren.com/share/buttonshare",
          params: {
            link: this.getValue("url")
          }
        },
        myspace: {
          shareUrl: "https://myspace.com/post",
          params: {
            u: this.getValue("url"),
            t: this.getValue("title"),
            c: this.getValue("description")
          }
        },
        blogger: {
          shareUrl: "https://www.blogger.com/blog-this.g",
          params: {
            u: this.getValue("url"),
            n: this.getValue("title"),
            t: this.getValue("description")
          }
        },
        baidu: {
          shareUrl: "http://cang.baidu.com/do/add",
          params: {
            it: this.getValue("title"),
            iu: this.getValue("url")
          }
        },
        douban: {
          shareUrl: "https://www.douban.com/share/service",
          params: {
            name: this.getValue("name"),
            href: this.getValue("url"),
            image: this.getValue("image"),
            comment: this.getValue("description")
          }
        },
        okru: {
          shareUrl: "https://connect.ok.ru/dk",
          params: {
            "st.cmd": "WidgetSharePreview",
            "st.shareUrl": this.getValue("url"),
            title: this.getValue("title")
          }
        },
        mailru: {
          shareUrl: "http://connect.mail.ru/share",
          params: {
            share_url: this.getValue("url"),
            linkname: this.getValue("title"),
            linknote: this.getValue("description"),
            type: "page"
          }
        },
        evernote: {
          shareUrl: "https://www.evernote.com/clip.action",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title")
          }
        },
        skype: {
          shareUrl: "https://web.skype.com/share",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title")
          }
        },
        quora: {
          shareUrl: "https://www.quora.com/share",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title")
          }
        },
        delicious: {
          shareUrl: "https://del.icio.us/post",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title")
          }
        },
        sms: {
          shareUrl: "sms://",
          params: {
            body: this.getValue("body")
          }
        },
        trello: {
          shareUrl: "https://trello.com/add-card",
          params: {
            url: this.getValue("url"),
            name: this.getValue("title"),
            desc: this.getValue("description"),
            mode: "popup"
          }
        },
        messenger: {
          shareUrl: "fb-messenger://share",
          params: {
            link: this.getValue("url")
          }
        },
        odnoklassniki: {
          shareUrl: "https://connect.ok.ru/dk",
          params: {
            st: {
              cmd: "WidgetSharePreview",
              deprecated: 1,
              shareUrl: this.getValue("url")
            }
          }
        },
        meneame: {
          shareUrl: "https://www.meneame.net/submit",
          params: {
            url: this.getValue("url")
          }
        },
        diaspora: {
          shareUrl: "https://share.diasporafoundation.org",
          params: {
            title: this.getValue("title"),
            url: this.getValue("url")
          }
        },
        googlebookmarks: {
          shareUrl: "https://www.google.com/bookmarks/mark",
          params: {
            op: "edit",
            bkmk: this.getValue("url"),
            title: this.getValue("title")
          }
        },
        qzone: {
          shareUrl: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
          params: {
            url: this.getValue("url")
          }
        },
        refind: {
          shareUrl: "https://refind.com",
          params: {
            url: this.getValue("url")
          }
        },
        surfingbird: {
          shareUrl: "https://surfingbird.ru/share",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title"),
            description: this.getValue("description")
          }
        },
        yahoomail: {
          shareUrl: "http://compose.mail.yahoo.com",
          params: {
            to: this.getValue("to"),
            subject: this.getValue("subject"),
            body: this.getValue("body")
          }
        },
        wordpress: {
          shareUrl: "https://wordpress.com/wp-admin/press-this.php",
          params: {
            u: this.getValue("url"),
            t: this.getValue("title"),
            s: this.getValue("title")
          }
        },
        amazon: {
          shareUrl: "https://www.amazon.com/gp/wishlist/static-add",
          params: {
            u: this.getValue("url"),
            t: this.getValue("title")
          }
        },
        pinboard: {
          shareUrl: "https://pinboard.in/add",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title"),
            description: this.getValue("description")
          }
        },
        threema: {
          shareUrl: "threema://compose",
          params: {
            text: this.getValue("text"),
            id: this.getValue("id")
          }
        },
        kakaostory: {
          shareUrl: "https://story.kakao.com/share",
          params: {
            url: this.getValue("url")
          }
        },
        yummly: {
          shareUrl: "http://www.yummly.com/urb/verify",
          params: {
            url: this.getValue("url"),
            title: this.getValue("title"),
            yumtype: "button"
          }
        }
      }[e]) && (e.width = this.getValue("width"), e.height = this.getValue("height")), void 0 !== e && this.urlSharer(e);
    },
    urlSharer: function urlSharer(e) {
      for (var t, n, i, s, a = e.params || {}, r = Object.keys(a), o = 0 < r.length ? "?" : "", l = 0; l < r.length; l++) {
        "?" !== o && (o += "&"), a[r[l]] && (o += r[l] + "=" + encodeURIComponent(a[r[l]]));
      }

      e.shareUrl += o, e.isLink ? c.location.href = e.shareUrl : (t = e.width || 600, n = e.height || 480, s = c.innerWidth / 2 - t / 2 + c.screenX, i = c.innerHeight / 2 - n / 2 + c.screenY, s = c.open(e.shareUrl, "", "scrollbars=no, width=" + t + ", height=" + n + ", top=" + i + ", left=" + s), c.focus && s.focus());
    }
  }, "complete" === i.readyState || "loading" !== i.readyState ? s.init() : i.addEventListener("DOMContentLoaded", s.init), c.Sharer = s;
}(window, document), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Headroom = t();
}(void 0, function () {
  "use strict";

  function e() {
    return "undefined" != typeof window;
  }

  function n(e, t) {
    t = t || {}, Object.assign(this, n.options, t), this.classes = Object.assign({}, n.options.classes, t.classes), this.elem = e, this.tolerance = (e = this.tolerance) === Object(e) ? e : {
      down: e,
      up: e
    }, this.initialised = !1, this.frozen = !1;
  }

  return n.prototype = {
    constructor: n,
    init: function init() {
      return n.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout(function (e) {
        function t() {
          var e = Math.round(p.scrollY()),
              t = p.height(),
              n = p.scrollHeight();
          m.scrollY = e, m.lastScrollY = f, m.direction = f < e ? "down" : "up", m.distance = Math.abs(e - f), m.isOutOfBounds = e < 0 || n < e + t, m.top = e <= s.offset, m.bottom = n <= e + t, m.toleranceExceeded = m.distance > s.tolerance[m.direction], a(m), f = e, h = !1;
        }

        function n() {
          h || (h = !0, r = requestAnimationFrame(t));
        }

        var i, s, a, r, o, l, c, d, u, h, p, f, m, g;
        e.scrollTracker = (i = e.scroller, s = {
          offset: e.offset,
          tolerance: e.tolerance
        }, a = e.update.bind(e), u = function () {
          var e = !1;

          try {
            var t = {
              get passive() {
                e = !0;
              }

            };
            window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
          } catch (t) {
            e = !1;
          }

          return e;
        }(), h = !1, p = i && i.document && 9 === i.document.nodeType ? (e = (l = i).document, c = e.body, d = e.documentElement, {
          scrollHeight: function scrollHeight() {
            return Math.max(c.scrollHeight, d.scrollHeight, c.offsetHeight, d.offsetHeight, c.clientHeight, d.clientHeight);
          },
          height: function height() {
            return l.innerHeight || d.clientHeight || c.clientHeight;
          },
          scrollY: function scrollY() {
            return void 0 !== l.pageYOffset ? l.pageYOffset : (d || c.parentNode || c).scrollTop;
          }
        }) : (o = i, {
          scrollHeight: function scrollHeight() {
            return Math.max(o.scrollHeight, o.offsetHeight, o.clientHeight);
          },
          height: function height() {
            return Math.max(o.offsetHeight, o.clientHeight);
          },
          scrollY: function scrollY() {
            return o.scrollTop;
          }
        }), f = p.scrollY(), m = {}, g = !!u && {
          passive: !0,
          capture: !1
        }, i.addEventListener("scroll", n, g), t(), {
          destroy: function destroy() {
            cancelAnimationFrame(r), i.removeEventListener("scroll", n, g);
          }
        });
      }, 100, this)), this;
    },
    destroy: function destroy() {
      this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy();
    },
    unpin: function unpin() {
      !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this));
    },
    pin: function pin() {
      this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this));
    },
    freeze: function freeze() {
      this.frozen = !0, this.addClass("frozen");
    },
    unfreeze: function unfreeze() {
      this.frozen = !1, this.removeClass("frozen");
    },
    top: function top() {
      this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this));
    },
    notTop: function notTop() {
      this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this));
    },
    bottom: function bottom() {
      this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this));
    },
    notBottom: function notBottom() {
      this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this));
    },
    shouldUnpin: function shouldUnpin(e) {
      return "down" === e.direction && !e.top && e.toleranceExceeded;
    },
    shouldPin: function shouldPin(e) {
      return "up" === e.direction && e.toleranceExceeded || e.top;
    },
    addClass: function addClass(e) {
      this.elem.classList.add.apply(this.elem.classList, this.classes[e].split(" "));
    },
    removeClass: function removeClass(e) {
      this.elem.classList.remove.apply(this.elem.classList, this.classes[e].split(" "));
    },
    hasClass: function hasClass(e) {
      return this.classes[e].split(" ").every(function (e) {
        return this.classList.contains(e);
      }, this.elem);
    },
    update: function update(e) {
      e.isOutOfBounds || !0 !== this.frozen && (e.top ? this.top() : this.notTop(), e.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(e) ? this.unpin() : this.shouldPin(e) && this.pin());
    }
  }, n.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: e() ? window : null,
    classes: {
      frozen: "headroom--frozen",
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  }, n.cutsTheMustard = !!(e() && function () {}.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), n;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function i(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function s() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(n).forEach(function (e) {
      void 0 === t[e] ? t[e] = n[e] : i(n[e]) && i(t[e]) && 0 < Object.keys(n[e]).length && s(t[e], n[e]);
    });
  }

  var t = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function _() {
    var e = "undefined" != typeof document ? document : {};
    return s(e, t), e;
  }

  var n = {
    document: t,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function D() {
    var e = "undefined" != typeof window ? window : {};
    return s(e, n), e;
  }

  var r = /*#__PURE__*/function (_Array) {
    _inherits(r, _Array);

    var _super = _createSuper(r);

    function r(e) {
      var _this;

      _classCallCheck(this, r);

      _this = _super.call.apply(_super, [this].concat(_toConsumableArray(e || []))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this));
      return _this;
    }

    return _createClass(r);
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function a() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, _toConsumableArray(a(e))) : t.push(e);
    }), t;
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function P(e, t) {
    var n = D(),
        i = _();

    var s = [];
    if (!t && e instanceof r) return e;
    if (!e) return new r(s);

    if ("string" == typeof e) {
      var _n = e.trim();

      if (0 <= _n.indexOf("<") && 0 <= _n.indexOf(">")) {
        var _e2 = "div";
        0 === _n.indexOf("<li") && (_e2 = "ul"), 0 === _n.indexOf("<tr") && (_e2 = "tbody"), 0 !== _n.indexOf("<td") && 0 !== _n.indexOf("<th") || (_e2 = "tr"), 0 === _n.indexOf("<tbody") && (_e2 = "table"), 0 === _n.indexOf("<option") && (_e2 = "select");

        var _t2 = i.createElement(_e2);

        _t2.innerHTML = _n;

        for (var _e3 = 0; _e3 < _t2.childNodes.length; _e3 += 1) {
          s.push(_t2.childNodes[_e3]);
        }
      } else s = function (e, t) {
        if ("string" != typeof e) return [e];
        var n = [],
            i = t.querySelectorAll(e);

        for (var _e4 = 0; _e4 < i.length; _e4 += 1) {
          n.push(i[_e4]);
        }

        return n;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === n || e === i) s.push(e);else if (Array.isArray(e)) {
      if (e instanceof r) return e;
      s = e;
    }

    return new r(function (t) {
      var n = [];

      for (var _e5 = 0; _e5 < t.length; _e5 += 1) {
        -1 === n.indexOf(t[_e5]) && n.push(t[_e5]);
      }

      return n;
    }(s));
  }

  P.fn = r.prototype;
  var l = {
    addClass: function addClass() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      var t = a(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(t));
      }), this;
    },
    removeClass: function removeClass() {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      var t = a(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(t));
      }), this;
    },
    hasClass: function hasClass() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      var n = a(e.map(function (e) {
        return e.split(" ");
      }));
      return 0 < o(this, function (t) {
        return 0 < n.filter(function (e) {
          return t.classList.contains(e);
        }).length;
      }).length;
    },
    toggleClass: function toggleClass() {
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }

      var n = a(e.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (t) {
        n.forEach(function (e) {
          t.classList.toggle(e);
        });
      });
    },
    attr: function attr(t, n) {
      if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;

      for (var _e6 = 0; _e6 < this.length; _e6 += 1) {
        if (2 === arguments.length) this[_e6].setAttribute(t, n);else for (var _n2 in t) {
          this[_e6][_n2] = t[_n2], this[_e6].setAttribute(_n2, t[_n2]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(t) {
      for (var _e7 = 0; _e7 < this.length; _e7 += 1) {
        this[_e7].removeAttribute(t);
      }

      return this;
    },
    transform: function transform(t) {
      for (var _e8 = 0; _e8 < this.length; _e8 += 1) {
        this[_e8].style.transform = t;
      }

      return this;
    },
    transition: function transition(t) {
      for (var _e9 = 0; _e9 < this.length; _e9 += 1) {
        this[_e9].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
      }

      return this;
    },
    on: function on() {
      var _t4, _t5;

      for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        t[_key5] = arguments[_key5];
      }

      var n = t[0],
          i = t[1],
          s = t[2],
          a = t[3];

      function r(t) {
        var e = t.target;

        if (e) {
          var _n3 = t.target.dom7EventData || [];

          if (_n3.indexOf(t) < 0 && _n3.unshift(t), P(e).is(i)) s.apply(e, _n3);else {
            var _t3 = P(e).parents();

            for (var _e10 = 0; _e10 < _t3.length; _e10 += 1) {
              P(_t3[_e10]).is(i) && s.apply(_t3[_e10], _n3);
            }
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
      }

      "function" == typeof t[1] && ((_t4 = t, _t5 = _slicedToArray(_t4, 3), n = _t5[0], s = _t5[1], a = _t5[2], _t4), i = void 0), a = a || !1;
      var l = n.split(" ");
      var c;

      for (var _e11 = 0; _e11 < this.length; _e11 += 1) {
        var _n4 = this[_e11];
        if (i) for (c = 0; c < l.length; c += 1) {
          var _t6 = l[c];
          _n4.dom7LiveListeners || (_n4.dom7LiveListeners = {}), _n4.dom7LiveListeners[_t6] || (_n4.dom7LiveListeners[_t6] = []), _n4.dom7LiveListeners[_t6].push({
            listener: s,
            proxyListener: r
          }), _n4.addEventListener(_t6, r, a);
        } else for (c = 0; c < l.length; c += 1) {
          var _t7 = l[c];
          _n4.dom7Listeners || (_n4.dom7Listeners = {}), _n4.dom7Listeners[_t7] || (_n4.dom7Listeners[_t7] = []), _n4.dom7Listeners[_t7].push({
            listener: s,
            proxyListener: o
          }), _n4.addEventListener(_t7, o, a);
        }
      }

      return this;
    },
    off: function off() {
      var _e12, _e13;

      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      var n = e[0],
          i = e[1],
          s = e[2],
          a = e[3];
      "function" == typeof e[1] && ((_e12 = e, _e13 = _slicedToArray(_e12, 3), n = _e13[0], s = _e13[1], a = _e13[2], _e12), i = void 0), a = a || !1;
      var r = n.split(" ");

      for (var _e14 = 0; _e14 < r.length; _e14 += 1) {
        var _n5 = r[_e14];

        for (var _e15 = 0; _e15 < this.length; _e15 += 1) {
          var _r = this[_e15];

          var _t8 = void 0;

          if (!i && _r.dom7Listeners ? _t8 = _r.dom7Listeners[_n5] : i && _r.dom7LiveListeners && (_t8 = _r.dom7LiveListeners[_n5]), _t8 && _t8.length) for (var _e16 = _t8.length - 1; 0 <= _e16; --_e16) {
            var _i2 = _t8[_e16];
            !(s && _i2.listener === s || s && _i2.listener && _i2.listener.dom7proxy && _i2.listener.dom7proxy === s) && s || (_r.removeEventListener(_n5, _i2.proxyListener, a), _t8.splice(_e16, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        t[_key7] = arguments[_key7];
      }

      var n = D(),
          i = t[0].split(" "),
          s = t[1];

      for (var _e17 = 0; _e17 < i.length; _e17 += 1) {
        var _D = i[_e17];

        for (var _e18 = 0; _e18 < this.length; _e18 += 1) {
          var _a2 = this[_e18];

          if (n.CustomEvent) {
            var _i3 = new n.CustomEvent(_D, {
              detail: s,
              bubbles: !0,
              cancelable: !0
            });

            _a2.dom7EventData = t.filter(function (e, t) {
              return 0 < t;
            }), _a2.dispatchEvent(_i3), _a2.dom7EventData = [], delete _a2.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(n) {
      var i = this;
      return n && i.on("transitionend", function e(t) {
        t.target === this && (n.call(this, t), i.off("transitionend", e));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (0 < this.length) {
        if (e) {
          var _e19 = this.styles();

          return this[0].offsetWidth + parseFloat(_e19.getPropertyValue("margin-right")) + parseFloat(_e19.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (0 < this.length) {
        if (e) {
          var _e20 = this.styles();

          return this[0].offsetHeight + parseFloat(_e20.getPropertyValue("margin-top")) + parseFloat(_e20.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = D();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (0 < this.length) {
        var _e21 = D(),
            _t9 = _(),
            _n6 = this[0],
            _i4 = _n6.getBoundingClientRect(),
            _s2 = _t9.body,
            _a3 = _n6.clientTop || _s2.clientTop || 0,
            _r2 = _n6.clientLeft || _s2.clientLeft || 0,
            _o = _n6 === _e21 ? _e21.scrollY : _n6.scrollTop,
            _l = _n6 === _e21 ? _e21.scrollX : _n6.scrollLeft;

        return {
          top: _i4.top + _o - _a3,
          left: _i4.left + _l - _r2
        };
      }

      return null;
    },
    css: function css(e, t) {
      var n = D();
      var i;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var _t10 in e) {
              this[i].style[_t10] = e[_t10];
            }
          }

          return this;
        }

        if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 !== arguments.length || "string" != typeof e) return this;

      for (i = 0; i < this.length; i += 1) {
        this[i].style[e] = t;
      }

      return this;
    },
    each: function each(n) {
      return n && this.forEach(function (e, t) {
        n.apply(e, [e, t]);
      }), this;
    },
    html: function html(t) {
      if (void 0 === t) return this[0] ? this[0].innerHTML : null;

      for (var _e22 = 0; _e22 < this.length; _e22 += 1) {
        this[_e22].innerHTML = t;
      }

      return this;
    },
    text: function text(t) {
      if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;

      for (var _e23 = 0; _e23 < this.length; _e23 += 1) {
        this[_e23].textContent = t;
      }

      return this;
    },
    is: function is(e) {
      var t = D(),
          n = _(),
          i = this[0];

      var s, a;
      if (!i || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);

        for (s = P(e), a = 0; a < s.length; a += 1) {
          if (s[a] === i) return !0;
        }

        return !1;
      }

      if (e === n) return i === n;
      if (e === t) return i === t;

      if (e.nodeType || e instanceof r) {
        for (s = e.nodeType ? [e] : e, a = 0; a < s.length; a += 1) {
          if (s[a] === i) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      return P(t - 1 < e ? [] : e < 0 ? (t += e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function append() {
      var n;

      var i = _();

      for (var _e24 = 0; _e24 < arguments.length; _e24 += 1) {
        n = _e24 < 0 || arguments.length <= _e24 ? undefined : arguments[_e24];

        for (var _t11 = 0; _t11 < this.length; _t11 += 1) {
          if ("string" == typeof n) {
            var _2 = i.createElement("div");

            for (_2.innerHTML = n; _2.firstChild;) {
              this[_t11].appendChild(_2.firstChild);
            }
          } else if (n instanceof r) for (var _e25 = 0; _e25 < n.length; _e25 += 1) {
            this[_t11].appendChild(n[_e25]);
          } else this[_t11].appendChild(n);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t = _();

      var n, i;

      for (n = 0; n < this.length; n += 1) {
        if ("string" == typeof e) {
          var _3 = t.createElement("div");

          for (_3.innerHTML = e, i = _3.childNodes.length - 1; 0 <= i; --i) {
            this[n].insertBefore(_3.childNodes[i], this[n].childNodes[0]);
          }
        } else if (e instanceof r) for (i = 0; i < e.length; i += 1) {
          this[n].insertBefore(e[i], this[n].childNodes[0]);
        } else this[n].insertBefore(e, this[n].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && P(this[0].nextElementSibling).is(e) ? P([this[0].nextElementSibling]) : P([]) : this[0].nextElementSibling ? P([this[0].nextElementSibling]) : P([]) : P([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var n = this[0];
      if (!n) return P([]);

      for (; n.nextElementSibling;) {
        var i = n.nextElementSibling;
        e && !P(i).is(e) || t.push(i), n = i;
      }

      return P(t);
    },
    prev: function prev(e) {
      if (0 < this.length) {
        var t = this[0];
        return e ? t.previousElementSibling && P(t.previousElementSibling).is(e) ? P([t.previousElementSibling]) : P([]) : t.previousElementSibling ? P([t.previousElementSibling]) : P([]);
      }

      return P([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var n = this[0];
      if (!n) return P([]);

      for (; n.previousElementSibling;) {
        var i = n.previousElementSibling;
        e && !P(i).is(e) || t.push(i), n = i;
      }

      return P(t);
    },
    parent: function parent(t) {
      var n = [];

      for (var _e26 = 0; _e26 < this.length; _e26 += 1) {
        null === this[_e26].parentNode || t && !P(this[_e26].parentNode).is(t) || n.push(this[_e26].parentNode);
      }

      return P(n);
    },
    parents: function parents(n) {
      var i = [];

      for (var _t12 = 0; _t12 < this.length; _t12 += 1) {
        var _e27 = this[_t12].parentNode;

        for (; _e27;) {
          n && !P(_e27).is(n) || i.push(_e27), _e27 = _e27.parentNode;
        }
      }

      return P(i);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? P([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(t) {
      var n = [];

      for (var _e28 = 0; _e28 < this.length; _e28 += 1) {
        var i = this[_e28].querySelectorAll(t);

        for (var _e29 = 0; _e29 < i.length; _e29 += 1) {
          n.push(i[_e29]);
        }
      }

      return P(n);
    },
    children: function children(t) {
      var n = [];

      for (var _e30 = 0; _e30 < this.length; _e30 += 1) {
        var i = this[_e30].children;

        for (var _e31 = 0; _e31 < i.length; _e31 += 1) {
          t && !P(i[_e31]).is(t) || n.push(i[_e31]);
        }
      }

      return P(n);
    },
    filter: function filter(e) {
      return P(o(this, e));
    },
    remove: function remove() {
      for (var _e32 = 0; _e32 < this.length; _e32 += 1) {
        this[_e32].parentNode && this[_e32].parentNode.removeChild(this[_e32]);
      }

      return this;
    }
  };

  function C(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(e, t);
  }

  function g() {
    return Date.now();
  }

  function L(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
    var n = D();
    var i, s, a;

    var r = function (e) {
      var t = D();
      var n;
      return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n = n || e.style, n;
    }(e);

    return n.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, 6 < s.split(",").length && (s = s.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (s = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
  }

  function d(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function h() {
    var i = Object(arguments.length <= 0 ? undefined : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];

    for (var _e33 = 1; _e33 < arguments.length; _e33 += 1) {
      var s = _e33 < 0 || arguments.length <= _e33 ? undefined : arguments[_e33];

      if (null != s && !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType))) {
        var _n7 = Object.keys(Object(s)).filter(function (e) {
          return t.indexOf(e) < 0;
        });

        for (var _e34 = 0, _t13 = _n7.length; _e34 < _t13; _e34 += 1) {
          var _a4 = _n7[_e34],
              _r3 = Object.getOwnPropertyDescriptor(s, _a4);

          void 0 !== _r3 && _r3.enumerable && (d(i[_a4]) && d(s[_a4]) ? s[_a4].__swiper__ ? i[_a4] = s[_a4] : h(i[_a4], s[_a4]) : !d(i[_a4]) && d(s[_a4]) ? (i[_a4] = {}, s[_a4].__swiper__ ? i[_a4] = s[_a4] : h(i[_a4], s[_a4])) : i[_a4] = s[_a4]);
        }
      }
    }

    var a;
    return i;
  }

  function S(e, t, n) {
    e.style.setProperty(t, n);
  }

  function b(_ref) {
    var n = _ref.swiper,
        i = _ref.targetPosition,
        s = _ref.side;
    var a = D(),
        r = -n.translate;
    var o,
        l = null;
    var c = n.params.speed;
    n.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(n.cssModeFrameID);

    var d = i > r ? "next" : "prev",
        u = function u(e, t) {
      return "next" === d && t <= e || "prev" === d && e <= t;
    },
        h = function h() {
      o = new Date().getTime(), null === l && (l = o);
      var e = Math.max(Math.min((o - l) / c, 1), 0),
          e = .5 - Math.cos(e * Math.PI) / 2;
      var t = r + e * (i - r);
      if (u(t, i) && (t = i), n.wrapperEl.scrollTo(_defineProperty({}, s, t)), u(t, i)) return n.wrapperEl.style.overflow = "hidden", n.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        n.wrapperEl.style.overflow = "", n.wrapperEl.scrollTo(_defineProperty({}, s, t));
      }), void a.cancelAnimationFrame(n.cssModeFrameID);
      n.cssModeFrameID = a.requestAnimationFrame(h);
    };

    h();
  }

  var e, c, u;

  function p() {
    return e = e || function () {
      var n = D(),
          e = _();

      return {
        smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in n || n.DocumentTouch && e instanceof n.DocumentTouch),
        passiveListener: function () {
          var e = !1;

          try {
            var t = Object.defineProperty({}, "passive", {
              get: function get() {
                e = !0;
              }
            });
            n.addEventListener("testPassiveListener", null, t);
          } catch (e) {}

          return e;
        }(),
        gestures: "ongesturestart" in n
      };
    }(), e;
  }

  function f(_ref2) {
    var e = _ref2.swiper,
        t = _ref2.runCallbacks,
        n = _ref2.direction,
        i = _ref2.step;
    return function (n) {
      var s = e.activeIndex,
          a = e.previousIndex,
          n = n || (a < s ? "next" : s < a ? "prev" : "reset");

      if (e.emit("transition" + i), t && s !== a) {
        if ("reset" === n) return e.emit("slideResetTransition" + i), 0;
        e.emit("slideChangeTransition" + i), "next" === n ? e.emit("slideNextTransition" + i) : e.emit("slidePrevTransition" + i);
      }
    }(n);
  }

  function m() {
    var _n8;

    var e,
        t,
        n = this,
        i = n.params,
        s = n.el;
    s && 0 === s.offsetWidth || (i.breakpoints && n.setBreakpoint(), (_n8 = n, e = _n8.allowSlideNext, t = _n8.allowSlidePrev, s = _n8.snapGrid, _n8), n.allowSlideNext = !0, n.allowSlidePrev = !0, n.updateSize(), n.updateSlides(), n.updateSlidesClasses(), ("auto" === i.slidesPerView || 1 < i.slidesPerView) && n.isEnd && !n.isBeginning && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0), n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(), n.allowSlidePrev = t, n.allowSlideNext = e, n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow());
  }

  Object.keys(l).forEach(function (e) {
    Object.defineProperty(P.fn, e, {
      value: l[e],
      writable: !0
    });
  });
  var v = !1;

  function y() {}

  var w = function w(e, t) {
    var n = _(),
        i = e.params,
        s = e.touchEvents,
        a = e.el,
        r = e.wrapperEl,
        o = e.device,
        l = e.support,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;

    if (l.touch) {
      var _t14 = !("touchstart" !== s.start || !l.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      a[d](s.start, e.onTouchStart, _t14), a[d](s.move, e.onTouchMove, l.passiveListener ? {
        passive: !1,
        capture: c
      } : c), a[d](s.end, e.onTouchEnd, _t14), s.cancel && a[d](s.cancel, e.onTouchEnd, _t14);
    } else a[d](s.start, e.onTouchStart, !1), n[d](s.move, e.onTouchMove, c), n[d](s.end, e.onTouchEnd, !1);

    (i.preventClicks || i.preventClicksPropagation) && a[d]("click", e.onClick, !0), i.cssMode && r[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", m, !0) : e[u]("observerUpdate", m, !0);
  },
      x = function x(e, t) {
    return e.grid && t.grid && 1 < t.grid.rows;
  };

  var T = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  var E = {
    eventsEmitter: {
      on: function on(e, t, n) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = n ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
        }), i;
      },
      once: function once(t, n, e) {
        var i = this;
        return "function" != typeof n ? i : (s.__emitterProxy = n, i.on(t, s, e));

        function s() {
          for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            e[_key8] = arguments[_key8];
          }

          i.off(t, s), s.__emitterProxy && delete s.__emitterProxy, n.apply(i, e);
        }
      },
      onAny: function onAny(e, t) {
        return "function" != typeof e || (t = t ? "unshift" : "push", this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[t](e)), this;
      },
      offAny: function offAny(e) {
        return this.eventsAnyListeners && 0 <= (e = this.eventsAnyListeners.indexOf(e)) && this.eventsAnyListeners.splice(e, 1), this;
      },
      off: function off(e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function (n) {
          void 0 === i ? s.eventsListeners[n] = [] : s.eventsListeners[n] && s.eventsListeners[n].forEach(function (e, t) {
            (e === i || e.__emitterProxy && e.__emitterProxy === i) && s.eventsListeners[n].splice(t, 1);
          });
        }), s;
      },
      emit: function emit() {
        var n = this;
        if (!n.eventsListeners) return n;
        var t, i, s;

        for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          e[_key9] = arguments[_key9];
        }

        return s = "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), n) : (t = e[0].events, i = e[0].data, e[0].context || n), i.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
          n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach(function (e) {
            e.apply(s, [t].concat(_toConsumableArray(i)));
          }), n.eventsListeners && n.eventsListeners[t] && n.eventsListeners[t].forEach(function (e) {
            e.apply(s, i);
          });
        }), n;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e = this;
        var t, n;
        var i = e.$el;
        t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n
        }));
      },
      updateSlides: function updateSlides() {
        var n = this;

        function i(e) {
          return n.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          }[e];
        }

        function s(e, t) {
          return parseFloat(e.getPropertyValue(i(t)) || 0);
        }

        var a = n.params,
            r = n.$wrapperEl,
            o = n.size,
            l = n.rtlTranslate,
            c = n.wrongRTL,
            d = n.virtual && a.virtual.enabled,
            e = (d ? n.virtual : n).slides.length,
            u = r.children("." + n.params.slideClass),
            h = (d ? n.virtual.slides : u).length;
        var p = [];
        var f = [],
            m = [];
        var g = a.slidesOffsetBefore;
        "function" == typeof g && (g = a.slidesOffsetBefore.call(n));
        var v = a.slidesOffsetAfter;
        "function" == typeof v && (v = a.slidesOffsetAfter.call(n));
        var b = n.snapGrid.length,
            y = n.slidesGrid.length;
        var w = a.spaceBetween,
            x = -g,
            _ = 0,
            C = 0;

        if (void 0 !== o) {
          "string" == typeof w && 0 <= w.indexOf("%") && (w = parseFloat(w.replace("%", "")) / 100 * o), n.virtualSize = -w, l ? u.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
          }) : u.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
          }), a.centeredSlides && a.cssMode && (S(n.wrapperEl, "--swiper-centered-offset-before", ""), S(n.wrapperEl, "--swiper-centered-offset-after", ""));
          var T = a.grid && 1 < a.grid.rows && n.grid;

          var _t15;

          T && n.grid.initSlides(h);
          var E = "auto" === a.slidesPerView && a.breakpoints && 0 < Object.keys(a.breakpoints).filter(function (e) {
            return void 0 !== a.breakpoints[e].slidesPerView;
          }).length;

          for (var _e35 = 0; _e35 < h; _e35 += 1) {
            _t15 = 0;

            var _l2 = u.eq(_e35);

            if (T && n.grid.updateSlide(_e35, _l2, h, i), "none" !== _l2.css("display")) {
              if ("auto" === a.slidesPerView) {
                E && (u[_e35].style[i("width")] = "");

                var _o2 = getComputedStyle(_l2[0]),
                    _c = _l2[0].style.transform,
                    _d2 = _l2[0].style.webkitTransform;

                if (_c && (_l2[0].style.transform = "none"), _d2 && (_l2[0].style.webkitTransform = "none"), a.roundLengths) _t15 = n.isHorizontal() ? _l2.outerWidth(!0) : _l2.outerHeight(!0);else {
                  var _n9 = s(_o2, "width"),
                      _i5 = s(_o2, "padding-left"),
                      _a5 = s(_o2, "padding-right"),
                      _r4 = s(_o2, "margin-left"),
                      _c2 = s(_o2, "margin-right"),
                      _d3 = _o2.getPropertyValue("box-sizing");

                  if (_d3 && "border-box" === _d3) _t15 = _n9 + _r4 + _c2;else {
                    var _l2$ = _l2[0],
                        _s3 = _l2$.clientWidth,
                        _o3 = _l2$.offsetWidth;
                    _t15 = _n9 + _i5 + _a5 + _r4 + _c2 + (_o3 - _s3);
                  }
                }
                _c && (_l2[0].style.transform = _c), _d2 && (_l2[0].style.webkitTransform = _d2), a.roundLengths && (_t15 = Math.floor(_t15));
              } else _t15 = (o - (a.slidesPerView - 1) * w) / a.slidesPerView, a.roundLengths && (_t15 = Math.floor(_t15)), u[_e35] && (u[_e35].style[i("width")] = _t15 + "px");

              u[_e35] && (u[_e35].swiperSlideSize = _t15), m.push(_t15), a.centeredSlides ? (x = x + _t15 / 2 + _ / 2 + w, 0 === _ && 0 !== _e35 && (x = x - o / 2 - w), 0 === _e35 && (x = x - o / 2 - w), Math.abs(x) < .001 && (x = 0), a.roundLengths && (x = Math.floor(x)), C % a.slidesPerGroup == 0 && p.push(x), f.push(x)) : (a.roundLengths && (x = Math.floor(x)), (C - Math.min(n.params.slidesPerGroupSkip, C)) % n.params.slidesPerGroup == 0 && p.push(x), f.push(x), x = x + _t15 + w), n.virtualSize += _t15 + w, _ = _t15, C += 1;
            }
          }

          if (n.virtualSize = Math.max(n.virtualSize, o) + v, l && c && ("slide" === a.effect || "coverflow" === a.effect) && r.css({
            width: n.virtualSize + a.spaceBetween + "px"
          }), a.setWrapperSize && r.css(_defineProperty({}, i("width"), n.virtualSize + a.spaceBetween + "px")), T && n.grid.updateWrapperSize(_t15, p, i), !a.centeredSlides) {
            var _i6 = [];

            for (var _t16 = 0; _t16 < p.length; _t16 += 1) {
              var _e36 = p[_t16];
              a.roundLengths && (_e36 = Math.floor(_e36)), p[_t16] <= n.virtualSize - o && _i6.push(_e36);
            }

            p = _i6, 1 < Math.floor(n.virtualSize - o) - Math.floor(p[p.length - 1]) && p.push(n.virtualSize - o);
          }

          if (0 === p.length && (p = [0]), 0 !== a.spaceBetween) {
            var _s4 = n.isHorizontal() && l ? "marginLeft" : i("marginRight");

            u.filter(function (e, t) {
              return !a.cssMode || t !== u.length - 1;
            }).css(_defineProperty({}, _s4, w + "px"));
          }

          if (a.centeredSlides && a.centeredSlidesBounds) {
            var _t17 = 0;
            m.forEach(function (e) {
              _t17 += e + (a.spaceBetween || 0);
            }), _t17 -= a.spaceBetween;

            var _i7 = _t17 - o;

            p = p.map(function (e) {
              return e < 0 ? -g : e > _i7 ? _i7 + v : e;
            });
          }

          if (a.centerInsufficientSlides) {
            var _t18 = 0;

            if (m.forEach(function (e) {
              _t18 += e + (a.spaceBetween || 0);
            }), _t18 -= a.spaceBetween, _t18 < o) {
              var _i8 = (o - _t18) / 2;

              p.forEach(function (e, t) {
                p[t] = e - _i8;
              }), f.forEach(function (e, t) {
                f[t] = e + _i8;
              });
            }
          }

          if (Object.assign(n, {
            slides: u,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: m
          }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
            S(n.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), S(n.wrapperEl, "--swiper-centered-offset-after", n.size / 2 - m[m.length - 1] / 2 + "px");

            var _i9 = -n.snapGrid[0],
                _s5 = -n.slidesGrid[0];

            n.snapGrid = n.snapGrid.map(function (e) {
              return e + _i9;
            }), n.slidesGrid = n.slidesGrid.map(function (e) {
              return e + _s5;
            });
          }

          h !== e && n.emit("slidesLengthChange"), p.length !== b && (n.params.watchOverflow && n.checkOverflow(), n.emit("snapGridLengthChange")), f.length !== y && n.emit("slidesGridLengthChange"), a.watchSlidesProgress && n.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var n = this,
            t = [],
            i = n.virtual && n.params.virtual.enabled;
        var s,
            a = 0;
        "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);

        var r = function r(t) {
          return (i ? n.slides.filter(function (e) {
            return parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t;
          }) : n.slides.eq(t))[0];
        };

        if ("auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView) {
          if (n.params.centeredSlides) n.visibleSlides.each(function (e) {
            t.push(e);
          });else for (s = 0; s < Math.ceil(n.params.slidesPerView); s += 1) {
            var _e37 = n.activeIndex + s;

            if (_e37 > n.slides.length && !i) break;
            t.push(r(_e37));
          }
        } else t.push(r(n.activeIndex));

        for (s = 0; s < t.length; s += 1) {
          if (void 0 !== t[s]) {
            var _e38 = t[s].offsetHeight;
            a = _e38 > a ? _e38 : a;
          }
        }

        !a && 0 !== a || n.$wrapperEl.css("height", a + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        var t = this.slides;

        for (var _e39 = 0; _e39 < t.length; _e39 += 1) {
          t[_e39].swiperSlideOffset = this.isHorizontal() ? t[_e39].offsetLeft : t[_e39].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
        var n = this,
            i = n.params,
            s = n.slides,
            a = n.rtlTranslate,
            r = n.snapGrid;

        if (0 !== s.length) {
          void 0 === s[0].swiperSlideOffset && n.updateSlidesOffset();
          var o = a ? e : -e;
          s.removeClass(i.slideVisibleClass), n.visibleSlidesIndexes = [], n.visibleSlides = [];

          for (var _t19 = 0; _t19 < s.length; _t19 += 1) {
            var _l3 = s[_t19];
            var _e40 = _l3.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (_e40 -= s[0].swiperSlideOffset);

            var _P = (o + (i.centeredSlides ? n.minTranslate() : 0) - _e40) / (_l3.swiperSlideSize + i.spaceBetween),
                _c3 = (o - r[0] + (i.centeredSlides ? n.minTranslate() : 0) - _e40) / (_l3.swiperSlideSize + i.spaceBetween),
                _d4 = -(o - _e40),
                _u = _d4 + n.slidesSizesGrid[_t19];

            (0 <= _d4 && _d4 < n.size - 1 || 1 < _u && _u <= n.size || _d4 <= 0 && _u >= n.size) && (n.visibleSlides.push(_l3), n.visibleSlidesIndexes.push(_t19), s.eq(_t19).addClass(i.slideVisibleClass)), _l3.progress = a ? -_P : _P, _l3.originalProgress = a ? -_c3 : _c3;
          }

          n.visibleSlides = P(n.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        var t = this;

        if (void 0 === e) {
          var _n10 = t.rtlTranslate ? -1 : 1;

          e = t && t.translate && t.translate * _n10 || 0;
        }

        var n = t.params,
            i = t.maxTranslate() - t.minTranslate();
        var s = t.progress,
            a = t.isBeginning,
            r = t.isEnd;
        var o = a,
            l = r;
        r = 0 == i ? (s = 0, a = !0) : (s = (e - t.minTranslate()) / i, a = s <= 0, 1 <= s), Object.assign(t, {
          progress: s,
          isBeginning: a,
          isEnd: r
        }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !a || l && !r) && t.emit("fromEdge"), t.emit("progress", s);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e = this.slides,
            t = this.params,
            n = this.$wrapperEl,
            i = this.activeIndex,
            s = this.realIndex,
            a = this.virtual && t.virtual.enabled;
        var r;
        e.removeClass("".concat(t.slideActiveClass, " ").concat(t.slideNextClass, " ").concat(t.slidePrevClass, " ").concat(t.slideDuplicateActiveClass, " ").concat(t.slideDuplicateNextClass, " ") + t.slideDuplicatePrevClass), r = a ? this.$wrapperEl.find(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : e.eq(i), r.addClass(t.slideActiveClass), t.loop && (r.hasClass(t.slideDuplicateClass) ? n.children(".".concat(t.slideClass, ":not(.").concat(t.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(s, "\"]")) : n.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(s, "\"]"))).addClass(t.slideDuplicateActiveClass);
        var o = r.nextAll("." + t.slideClass).eq(0).addClass(t.slideNextClass);
        t.loop && 0 === o.length && (o = e.eq(0), o.addClass(t.slideNextClass));
        var l = r.prevAll("." + t.slideClass).eq(0).addClass(t.slidePrevClass);
        t.loop && 0 === l.length && (l = e.eq(-1), l.addClass(t.slidePrevClass)), t.loop && ((o.hasClass(t.slideDuplicateClass) ? n.children(".".concat(t.slideClass, ":not(.").concat(t.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")) : n.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]"))).addClass(t.slideDuplicateNextClass), (l.hasClass(t.slideDuplicateClass) ? n.children(".".concat(t.slideClass, ":not(.").concat(t.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"), "\"]")) : n.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"), "\"]"))).addClass(t.slideDuplicatePrevClass)), this.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            i = t.slidesGrid,
            s = t.snapGrid,
            a = t.params,
            r = t.activeIndex,
            o = t.realIndex,
            l = t.snapIndex;
        var c,
            d = e;

        if (void 0 === d) {
          for (var _e41 = 0; _e41 < i.length; _e41 += 1) {
            void 0 !== i[_e41 + 1] ? n >= i[_e41] && n < i[_e41 + 1] - (i[_e41 + 1] - i[_e41]) / 2 ? d = _e41 : n >= i[_e41] && n < i[_e41 + 1] && (d = _e41 + 1) : n >= i[_e41] && (d = _e41);
          }

          a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }

        var u;
        c = 0 <= s.indexOf(n) ? s.indexOf(n) : (u = Math.min(a.slidesPerGroupSkip, d)) + Math.floor((d - u) / a.slidesPerGroup), c >= s.length && (c = s.length - 1), d !== r ? (e = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10), Object.assign(t, {
          snapIndex: c,
          realIndex: e,
          previousIndex: r,
          activeIndex: d
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== e && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")) : c !== l && (t.snapIndex = c, t.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this,
            n = t.params,
            i = P(e).closest("." + n.slideClass)[0];
        var s,
            a = !1;
        if (i) for (var _e42 = 0; _e42 < t.slides.length; _e42 += 1) {
          if (t.slides[_e42] === i) {
            a = !0, s = _e42;
            break;
          }
        }
        if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(P(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
        var t = this.params,
            n = this.rtlTranslate,
            i = this.translate,
            s = this.$wrapperEl;
        if (t.virtualTranslate) return n ? -i : i;
        if (t.cssMode) return i;
        var a = L(s[0], e);
        return n && (a = -a), a || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var n = this,
            i = n.rtlTranslate,
            s = n.params,
            a = n.$wrapperEl,
            r = n.wrapperEl,
            o = n.progress;
        var l = 0,
            c = 0;
        n.isHorizontal() ? l = i ? -e : e : c = e, s.roundLengths && (l = Math.floor(l), c = Math.floor(c)), s.cssMode ? r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c : s.virtualTranslate || a.transform("translate3d(".concat(l, "px, ").concat(c, "px, 0px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : c;
        var d = n.maxTranslate() - n.minTranslate();
        (0 == d ? 0 : (e - n.minTranslate()) / d) !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo() {
        var _this2 = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var s = arguments.length > 4 ? arguments[4] : undefined;
        return function (e) {
          var a = _this2,
              r = a.params,
              o = a.wrapperEl;
          if (a.animating && r.preventInteractionOnTransition) return !1;
          var l = a.minTranslate(),
              c = a.maxTranslate(),
              e = i && l < e ? l : i && e < c ? c : e;

          if (a.updateProgress(e), r.cssMode) {
            c = a.isHorizontal();
            if (0 === t) o[c ? "scrollLeft" : "scrollTop"] = -e;else {
              var _o$scrollTo;

              if (!a.support.smoothScroll) return b({
                swiper: a,
                targetPosition: -e,
                side: c ? "left" : "top"
              }), !0;
              o.scrollTo((_o$scrollTo = {}, _defineProperty(_o$scrollTo, c ? "left" : "top", -e), _defineProperty(_o$scrollTo, "behavior", "smooth"), _o$scrollTo));
            }
            return !0;
          }

          return 0 === t ? (a.setTransition(0), a.setTranslate(e), n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(e), n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
            a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, n && a.emit("transitionEnd"));
          }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0;
        }(e);
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var n = this.params;
        n.cssMode || (n.autoHeight && this.updateAutoHeight(), f({
          swiper: this,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var n = this.params;
        this.animating = !1, n.cssMode || (this.setTransition(0), f({
          swiper: this,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: {
      slideTo: function slideTo() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var i = arguments.length > 3 ? arguments[3] : undefined;
        var s = arguments.length > 4 ? arguments[4] : undefined;
        if ("number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

        if ("string" == typeof e) {
          var _t20 = parseInt(e, 10);

          if (!isFinite(_t20)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
          e = _t20;
        }

        var a = this;
        var r = e;
        r < 0 && (r = 0);
        var o = a.params,
            l = a.snapGrid,
            c = a.slidesGrid,
            d = a.previousIndex,
            u = a.activeIndex,
            h = a.rtlTranslate,
            p = a.wrapperEl,
            f = a.enabled;
        if (a.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
        var m = (s = Math.min(a.params.slidesPerGroupSkip, r)) + Math.floor((r - s) / a.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1), (u || o.initialSlide || 0) === (d || 0) && n && a.emit("beforeSlideChangeStart");
        var g = -l[m];
        if (a.updateProgress(g), o.normalizeSlideIndex) for (var _e43 = 0; _e43 < c.length; _e43 += 1) {
          var _t21 = -Math.floor(100 * g),
              _n11 = Math.floor(100 * c[_e43]),
              _i10 = Math.floor(100 * c[_e43 + 1]);

          void 0 !== c[_e43 + 1] ? _t21 >= _n11 && _t21 < _i10 - (_i10 - _n11) / 2 ? r = _e43 : _t21 >= _n11 && _t21 < _i10 && (r = _e43 + 1) : _t21 >= _n11 && (r = _e43);
        }

        if (a.initialized && r !== u) {
          if (!a.allowSlideNext && g < a.translate && g < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (u || 0) !== r) return !1;
        }

        var v;
        if (v = r > u ? "next" : r < u ? "prev" : "reset", h && -g === a.translate || !h && g === a.translate) return a.updateActiveIndex(r), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(g), "reset" != v && (a.transitionStart(n, v), a.transitionEnd(n, v)), !1;

        if (o.cssMode) {
          var _e44 = a.isHorizontal(),
              _n12 = h ? g : -g;

          if (0 === t) {
            var _t22 = a.virtual && a.params.virtual.enabled;

            _t22 && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), p[_e44 ? "scrollLeft" : "scrollTop"] = _n12, _t22 && requestAnimationFrame(function () {
              a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1;
            });
          } else {
            var _p$scrollTo;

            if (!a.support.smoothScroll) return b({
              swiper: a,
              targetPosition: _n12,
              side: _e44 ? "left" : "top"
            }), !0;
            p.scrollTo((_p$scrollTo = {}, _defineProperty(_p$scrollTo, _e44 ? "left" : "top", _n12), _defineProperty(_p$scrollTo, "behavior", "smooth"), _p$scrollTo));
          }

          return !0;
        }

        return a.setTransition(t), a.setTranslate(g), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, v), 0 === t ? a.transitionEnd(n, v) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, v));
        }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0;
      },
      slideToLoop: function slideToLoop() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var i = arguments.length > 3 ? arguments[3] : undefined;
        var s = e;
        return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, n, i);
      },
      slideNext: function slideNext() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var i = this,
            s = i.animating,
            a = i.enabled,
            r = i.params;
        if (!a) return i;
        var o = r.slidesPerGroup;

        if ("auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1)), a = i.activeIndex < r.slidesPerGroupSkip ? 1 : o, r.loop) {
          if (s && r.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        return r.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + a, e, t, n);
      },
      slidePrev: function slidePrev() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var i = this,
            s = i.params,
            a = i.animating,
            r = i.snapGrid,
            o = i.slidesGrid,
            l = i.rtlTranslate,
            c = i.enabled;
        if (!c) return i;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var u = d(l ? i.translate : -i.translate),
            h = r.map(function (e) {
          return d(e);
        });
        var p = r[h.indexOf(u) - 1];

        if (void 0 === p && s.cssMode) {
          var _n13;

          r.forEach(function (e, t) {
            u >= e && (_n13 = t);
          }), void 0 !== _n13 && (p = r[0 < _n13 ? _n13 - 1 : _n13]);
        }

        var f = 0;
        return void 0 !== p && (f = o.indexOf(p), f < 0 && (f = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), s.rewind && i.isBeginning ? i.slideTo(i.slides.length - 1, e, t, n) : i.slideTo(f, e, t, n);
      },
      slideReset: function slideReset() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        return this.slideTo(this.activeIndex, e, t, n);
      },
      slideToClosest: function slideToClosest() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .5;
        var s = this;
        var a = s.activeIndex;
        var r = Math.min(s.params.slidesPerGroupSkip, a),
            o = r + Math.floor((a - r) / s.params.slidesPerGroup);

        if ((r = s.rtlTranslate ? s.translate : -s.translate) >= s.snapGrid[o]) {
          var _e45 = s.snapGrid[o];
          r - _e45 > (s.snapGrid[o + 1] - _e45) * i && (a += s.params.slidesPerGroup);
        } else {
          var _e46 = s.snapGrid[o - 1];
          r - _e46 <= (s.snapGrid[o] - _e46) * i && (a -= s.params.slidesPerGroup);
        }

        return a = Math.max(a, 0), a = Math.min(a, s.slidesGrid.length - 1), s.slideTo(a, e, t, n);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e = this,
            t = e.params,
            n = e.$wrapperEl,
            i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        var s,
            a = e.clickedIndex;
        t.loop ? e.animating || (s = parseInt(P(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = n.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), C(function () {
          e.slideTo(a);
        })) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = n.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), C(function () {
          e.slideTo(a);
        })) : e.slideTo(a)) : e.slideTo(a);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var i = this,
            t = _(),
            n = i.params,
            e = i.$wrapperEl,
            s = 0 < e.children().length ? P(e.children()[0].parentNode) : e;

        s.children(".".concat(n.slideClass, ".") + n.slideDuplicateClass).remove();
        var a = s.children("." + n.slideClass);

        if (n.loopFillGroupWithBlank) {
          var _i11 = n.slidesPerGroup - a.length % n.slidesPerGroup;

          if (_i11 !== n.slidesPerGroup) {
            for (var _e47 = 0; _e47 < _i11; _e47 += 1) {
              var _i12 = P(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);

              s.append(_i12);
            }

            a = s.children("." + n.slideClass);
          }
        }

        "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length), i.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), i.loopedSlides += n.loopAdditionalSlides, i.loopedSlides > a.length && (i.loopedSlides = a.length);
        var r = [],
            o = [];
        a.each(function (e, t) {
          var n = P(e);
          t < i.loopedSlides && o.push(e), t < a.length && t >= a.length - i.loopedSlides && r.push(e), n.attr("data-swiper-slide-index", t);
        });

        for (var _e48 = 0; _e48 < o.length; _e48 += 1) {
          s.append(P(o[_e48].cloneNode(!0)).addClass(n.slideDuplicateClass));
        }

        for (var _e49 = r.length - 1; 0 <= _e49; --_e49) {
          s.prepend(P(r[_e49].cloneNode(!0)).addClass(n.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        var e = this;
        e.emit("beforeLoopFix");
        var t = e.activeIndex,
            n = e.slides,
            i = e.loopedSlides,
            s = e.allowSlidePrev,
            a = e.allowSlideNext,
            r = e.snapGrid,
            o = e.rtlTranslate;
        var l;
        e.allowSlidePrev = !0, e.allowSlideNext = !0, r = -r[t] - e.getTranslate(), t < i ? (l = n.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 != r && e.setTranslate((o ? -e.translate : e.translate) - r)) : t >= n.length - i && (l = -n.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 != r && e.setTranslate((o ? -e.translate : e.translate) - r)), e.allowSlidePrev = s, e.allowSlideNext = a, e.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            n = this.slides;
        e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".") + t.slideBlankClass).remove(), n.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var _t23 = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;

          _t23.style.cursor = "move", _t23.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", _t23.style.cursor = e ? "-moz-grabbin" : "-moz-grab", _t23.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = _(),
            n = e.params,
            i = e.support;

        e.onTouchStart = function (e) {
          var i = this,
              s = _(),
              a = D(),
              r = i.touchEventsData,
              o = i.params,
              l = i.touches,
              t = i.enabled;

          if (t && (!i.animating || !o.preventInteractionOnTransition)) {
            !i.animating && o.cssMode && o.loop && i.loopFix();
            var _t24 = e;
            _t24.originalEvent && (_t24 = _t24.originalEvent);

            var _n14 = P(_t24.target);

            if (("wrapper" !== o.touchEventsTarget || _n14.closest(i.wrapperEl).length) && (r.isTouchEvent = "touchstart" === _t24.type, (r.isTouchEvent || !("which" in _t24) || 3 !== _t24.which) && !(!r.isTouchEvent && "button" in _t24 && 0 < _t24.button || r.isTouched && r.isMoved))) {
              o.noSwipingClass && "" !== o.noSwipingClass && _t24.target && _t24.target.shadowRoot && e.path && e.path[0] && (_n14 = P(e.path[0]));
              var c = o.noSwipingSelector || "." + o.noSwipingClass,
                  d = !(!_t24.target || !_t24.target.shadowRoot);
              if (o.noSwiping && (d ? function (n) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
                return function e(t) {
                  return t && t !== _() && t !== D() ? (t = t.assignedSlot || t).closest(n) || e(t.getRootNode().host) : null;
                }(e);
              }(c, _t24.target) : _n14.closest(c)[0])) i.allowClick = !0;else if (!o.swipeHandler || _n14.closest(o.swipeHandler)[0]) {
                l.currentX = ("touchstart" === _t24.type ? _t24.targetTouches[0] : _t24).pageX, l.currentY = ("touchstart" === _t24.type ? _t24.targetTouches[0] : _t24).pageY;
                var u = l.currentX,
                    h = l.currentY,
                    d = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                    c = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;

                if (d && (u <= c || u >= a.innerWidth - c)) {
                  if ("prevent" !== d) return;
                  e.preventDefault();
                }

                if (Object.assign(r, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), l.startX = u, l.startY = h, r.touchStartTime = g(), i.allowClick = !0, i.updateSize(), i.swipeDirection = void 0, 0 < o.threshold && (r.allowThresholdMove = !1), "touchstart" !== _t24.type) {
                  var _e50 = !0;

                  _n14.is(r.focusableElements) && (_e50 = !1), s.activeElement && P(s.activeElement).is(r.focusableElements) && s.activeElement !== _n14[0] && s.activeElement.blur();

                  var _4 = _e50 && i.allowTouchMove && o.touchStartPreventDefault;

                  !o.touchStartForcePreventDefault && !_4 || _n14[0].isContentEditable || _t24.preventDefault();
                }

                i.emit("touchStart", _t24);
              }
            }
          }
        }.bind(e), e.onTouchMove = function (e) {
          var t = _(),
              s = this,
              a = s.touchEventsData,
              r = s.params,
              o = s.touches,
              l = s.rtlTranslate,
              n = s.enabled;

          if (n) {
            var _i13 = e;

            if (_i13.originalEvent && (_i13 = _i13.originalEvent), a.isTouched) {
              if (!a.isTouchEvent || "touchmove" === _i13.type) {
                var c = "touchmove" === _i13.type && _i13.targetTouches && (_i13.targetTouches[0] || _i13.changedTouches[0]),
                    d = ("touchmove" === _i13.type ? c : _i13).pageX,
                    e = ("touchmove" === _i13.type ? c : _i13).pageY;
                if (_i13.preventedByNestedSwiper) return o.startX = d, void (o.startY = e);
                if (!s.allowTouchMove) return s.allowClick = !1, void (a.isTouched && (Object.assign(o, {
                  startX: d,
                  startY: e,
                  currentX: d,
                  currentY: e
                }), a.touchStartTime = g()));
                if (a.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
                  if (e < o.startY && s.translate <= s.maxTranslate() || e > o.startY && s.translate >= s.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1);
                } else if (d < o.startX && s.translate <= s.maxTranslate() || d > o.startX && s.translate >= s.minTranslate()) return;
                if (a.isTouchEvent && t.activeElement && _i13.target === t.activeElement && P(_i13.target).is(a.focusableElements)) return a.isMoved = !0, void (s.allowClick = !1);
                if (a.allowTouchCallbacks && s.emit("touchMove", _i13), !(_i13.targetTouches && 1 < _i13.targetTouches.length || (o.currentX = d, o.currentY = e, c = o.currentX - o.startX, d = o.currentY - o.startY, s.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)) < s.params.threshold))) if (void 0 === a.isScrolling && (s.isHorizontal() && o.currentY === o.startY || s.isVertical() && o.currentX === o.startX ? a.isScrolling = !1 : 25 <= c * c + d * d && (e = 180 * Math.atan2(Math.abs(d), Math.abs(c)) / Math.PI, a.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)), a.isScrolling && s.emit("touchMoveOpposite", _i13), void 0 === a.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;else if (a.startMoving) {
                  s.allowClick = !1, !r.cssMode && _i13.cancelable && _i13.preventDefault(), r.touchMoveStopPropagation && !r.nested && _i13.stopPropagation(), a.isMoved || (r.loop && !r.cssMode && s.loopFix(), a.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", _i13)), s.emit("sliderMove", _i13), a.isMoved = !0;

                  var _e51 = s.isHorizontal() ? c : d;

                  o.diff = _e51, _e51 *= r.touchRatio, l && (_e51 = -_e51), s.swipeDirection = 0 < _e51 ? "prev" : "next", a.currentTranslate = _e51 + a.startTranslate;

                  var _t25 = !0,
                      _n15 = r.resistanceRatio;

                  if (r.touchReleaseOnEdges && (_n15 = 0), 0 < _e51 && a.currentTranslate > s.minTranslate() ? (_t25 = !1, r.resistance && (a.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + a.startTranslate + _e51, _n15))) : _e51 < 0 && a.currentTranslate < s.maxTranslate() && (_t25 = !1, r.resistance && (a.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - a.startTranslate - _e51, _n15))), _t25 && (_i13.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), s.allowSlidePrev || s.allowSlideNext || (a.currentTranslate = a.startTranslate), 0 < r.threshold) {
                    if (!(Math.abs(_e51) > r.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, a.currentTranslate = a.startTranslate, void (o.diff = s.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY);
                  }

                  r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(a.currentTranslate), s.setTranslate(a.currentTranslate));
                }
              }
            } else a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", _i13);
          }
        }.bind(e), e.onTouchEnd = function (i) {
          var s = this,
              t = s.touchEventsData,
              a = s.params,
              n = s.touches,
              r = s.rtlTranslate,
              o = s.slidesGrid,
              e = s.enabled;

          if (e) {
            var _e52 = i;
            if (_e52.originalEvent && (_e52 = _e52.originalEvent), t.allowTouchCallbacks && s.emit("touchEnd", _e52), t.allowTouchCallbacks = !1, !t.isTouched) return t.isMoved && a.grabCursor && s.setGrabCursor(!1), t.isMoved = !1, void (t.startMoving = !1);
            a.grabCursor && t.isMoved && t.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
            var l,
                c,
                d = g(),
                u = d - t.touchStartTime;
            if (s.allowClick && (c = _e52.path || _e52.composedPath && _e52.composedPath(), s.updateClickedSlide(c && c[0] || _e52.target), s.emit("tap click", _e52), u < 300 && d - t.lastClickTime < 300 && s.emit("doubleTap doubleClick", _e52)), t.lastClickTime = g(), C(function () {
              s.destroyed || (s.allowClick = !0);
            }), !t.isTouched || !t.isMoved || !s.swipeDirection || 0 === n.diff || t.currentTranslate === t.startTranslate) return t.isTouched = !1, t.isMoved = !1, void (t.startMoving = !1);
            if (t.isTouched = !1, t.isMoved = !1, t.startMoving = !1, l = a.followFinger ? r ? s.translate : -s.translate : -t.currentTranslate, !a.cssMode) if (s.params.freeMode && a.freeMode.enabled) s.freeMode.onTouchEnd({
              currentPos: l
            });else {
              var _t26 = 0,
                  _n16 = s.slidesSizesGrid[0];

              for (var _e53 = 0; _e53 < o.length; _e53 += _e53 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                var _s6 = _e53 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

                void 0 !== o[_e53 + _s6] ? l >= o[_e53] && l < o[_e53 + _s6] && (_t26 = _e53, _n16 = o[_e53 + _s6] - o[_e53]) : l >= o[_e53] && (_t26 = _e53, _n16 = o[o.length - 1] - o[o.length - 2]);
              }

              i = (l - o[_t26]) / _n16, d = _t26 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup, u > a.longSwipesMs ? a.longSwipes ? ("next" === s.swipeDirection && (i >= a.longSwipesRatio ? s.slideTo(_t26 + d) : s.slideTo(_t26)), "prev" === s.swipeDirection && (i > 1 - a.longSwipesRatio ? s.slideTo(_t26 + d) : s.slideTo(_t26))) : s.slideTo(s.activeIndex) : a.shortSwipes ? !s.navigation || _e52.target !== s.navigation.nextEl && _e52.target !== s.navigation.prevEl ? ("next" === s.swipeDirection && s.slideTo(_t26 + d), "prev" === s.swipeDirection && s.slideTo(_t26)) : _e52.target === s.navigation.nextEl ? s.slideTo(_t26 + d) : s.slideTo(_t26) : s.slideTo(s.activeIndex);
            }
          }
        }.bind(e), n.cssMode && (e.onScroll = function () {
          var e = this,
              t = e.wrapperEl,
              n = e.rtlTranslate,
              i = e.enabled;
          i && (e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(), (0 == (t = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / t) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1));
        }.bind(e)), e.onClick = function (e) {
          this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
        }.bind(e), i.touch && !v && (t.addEventListener("touchstart", y), v = !0), w(e, "on");
      },
      detachEvents: function detachEvents() {
        w(this, "off");
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            n = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            i = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            s = e.params,
            a = e.$el,
            r = s.breakpoints;
        var o, l, c, d, u;
        !r || 0 === Object.keys(r).length || (o = e.getBreakpoint(r, e.params.breakpointsBase, e.el)) && e.currentBreakpoint !== o && (l = (o in r ? r[o] : void 0) || e.originalParams, u = x(e, s), d = x(e, l), c = s.enabled, u && !d ? (a.removeClass("".concat(s.containerModifierClass, "grid ").concat(s.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !u && d && (a.addClass(s.containerModifierClass + "grid"), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && a.addClass(s.containerModifierClass + "grid-column"), e.emitContainerClasses()), u = l.direction && l.direction !== s.direction, d = s.loop && (l.slidesPerView !== s.slidesPerView || u), u && n && e.changeDirection(), h(e.params, l), u = e.params.enabled, Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), c && !u ? e.disable() : !c && u && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), d && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l));
      },
      getBreakpoint: function getBreakpoint(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "window";
        var i = arguments.length > 2 ? arguments[2] : undefined;

        if (e && ("container" !== n || i)) {
          var _t27 = !1;

          var _s7 = D(),
              _a6 = "window" === n ? _s7.innerHeight : i.clientHeight,
              _r5 = Object.keys(e).map(function (e) {
            if ("string" != typeof e || 0 !== e.indexOf("@")) return {
              value: e,
              point: e
            };
            var t = parseFloat(e.substr(1));
            return {
              value: _a6 * t,
              point: e
            };
          });

          _r5.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var _e54 = 0; _e54 < _r5.length; _e54 += 1) {
            var _r5$_e = _r5[_e54],
                _D2 = _r5$_e.point,
                _o4 = _r5$_e.value;
            "window" === n ? _s7.matchMedia("(min-width: ".concat(_o4, "px)")).matches && (_t27 = _D2) : _o4 <= i.clientWidth && (_t27 = _D2);
          }

          return _t27 || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked,
            n = e.params,
            i = n.slidesOffsetBefore;

        if (i) {
          var _t28 = e.slides.length - 1,
              _n17 = e.slidesGrid[_t28] + e.slidesSizesGrid[_t28] + 2 * i;

          e.isLocked = e.size > _n17;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            n = this.rtl,
            i = this.$el,
            s = this.device,
            a = this.support,
            r = function (e, n) {
          var i = [];
          return e.forEach(function (t) {
            "object" == _typeof(t) ? Object.keys(t).forEach(function (e) {
              t[e] && i.push(n + e);
            }) : "string" == typeof t && i.push(n + t);
          }), i;
        }(["initialized", t.direction, {
          "pointer-events": !a.touch
        }, {
          "free-mode": this.params.freeMode && t.freeMode.enabled
        }, {
          autoheight: t.autoHeight
        }, {
          rtl: n
        }, {
          grid: t.grid && 1 < t.grid.rows
        }, {
          "grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill
        }, {
          android: s.android
        }, {
          ios: s.ios
        }, {
          "css-mode": t.cssMode
        }, {
          centered: t.cssMode && t.centeredSlides
        }], t.containerModifierClass);

        e.push.apply(e, _toConsumableArray(r)), i.addClass(_toConsumableArray(e).join(" ")), this.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, n, i, s, a) {
        var r = D();
        var o;

        function l() {
          a && a();
        }

        P(e).parent("picture")[0] || e.complete && s || !t ? l() : (o = new r.Image(), o.onload = l, o.onerror = l, i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t));
      },
      preloadImages: function preloadImages() {
        var t = this;

        function n() {
          null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
        }

        t.imagesToLoad = t.$el.find("img");

        for (var _e55 = 0; _e55 < t.imagesToLoad.length; _e55 += 1) {
          var _i14 = t.imagesToLoad[_e55];
          t.loadImage(_i14, _i14.currentSrc || _i14.getAttribute("src"), _i14.srcset || _i14.getAttribute("srcset"), _i14.sizes || _i14.getAttribute("sizes"), !0, n);
        }
      }
    }
  },
      k = {};

  var M = /*#__PURE__*/function () {
    function M() {
      var _e56, _e57, _a$modules;

      for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        e[_key10] = arguments[_key10];
      }

      _classCallCheck(this, M);

      var t, n;

      if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : (_e56 = e, _e57 = _slicedToArray(_e56, 2), t = _e57[0], n = _e57[1], _e56), n = n || {}, n = h({}, n), t && !n.el && (n.el = t), n.el && 1 < P(n.el).length) {
        var _s8 = [];
        return P(n.el).each(function (e) {
          e = h({}, n, {
            el: e
          }), _s8.push(new M(e));
        }), _s8;
      }

      var a = this;
      a.__swiper__ = !0, a.support = p(), a.device = (i = {
        userAgent: n.userAgent
      }, c = c || function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref3.userAgent;

        return function (e) {
          var t = p(),
              n = D(),
              i = n.navigator.platform,
              s = e || n.navigator.userAgent,
              a = {
            ios: !1,
            android: !1
          },
              r = n.screen.width,
              o = n.screen.height,
              l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          var c = s.match(/(iPad).*OS\s([\d_]+)/);
          var d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              e = "Win32" === i;
          var h = "MacIntel" === i;
          return !c && h && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(r + "x" + o) && (c = s.match(/(Version)\/([\d.]+)/), c = c || [0, 1, "13_0_0"], h = !1), l && !e && (a.os = "android", a.android = !0), (c || u || d) && (a.os = "ios", a.ios = !0), a;
        }(e);
      }(i), c), a.browser = (u = u || function () {
        var t = D();
        return {
          isSafari: function () {
            var e = t.navigator.userAgent.toLowerCase();
            return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
          }(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
      }(), u), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = _toConsumableArray(a.__modules__), n.modules && Array.isArray(n.modules) && (_a$modules = a.modules).push.apply(_a$modules, _toConsumableArray(n.modules));
      var r = {};
      a.modules.forEach(function (e) {
        var i, s;
        e({
          swiper: a,
          extendParams: (i = n, s = r, function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var t = Object.keys(e)[0],
                n = e[t];
            "object" == _typeof(n) && null !== n && (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) && !0 === i[t] && (i[t] = {
              auto: !0
            }), t in i && "enabled" in n && (!0 === i[t] && (i[t] = {
              enabled: !0
            }), "object" != _typeof(i[t]) || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
              enabled: !1
            }))), h(s, e);
          }),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a)
        });
      });
      var i,
          e = h({}, T, r);
      return a.params = h({}, e, k, n), a.originalParams = h({}, a.params), a.passedParams = h({}, n), a.params && a.params.on && Object.keys(a.params.on).forEach(function (e) {
        a.on(e, a.params.on[e]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = P, Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: P(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === a.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === a.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEvents: (e = ["pointerdown", "pointermove", "pointerup"], a.touchEventsTouch = {
          start: (i = ["touchstart", "touchmove", "touchend", "touchcancel"])[0],
          move: i[1],
          end: i[2],
          cancel: i[3]
        }, a.touchEventsDesktop = {
          start: e[0],
          move: e[1],
          end: e[2]
        }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: g(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), a.emit("_swiper"), a.params.init && a.init(), a;
    }

    _createClass(M, [{
      key: "enable",
      value: function enable() {
        this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        e = Math.min(Math.max(e, 0), 1);
        var n = this.minTranslate(),
            n = (this.maxTranslate() - n) * e + n;
        this.translateTo(n, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var t = this;

        if (t.params._emitClasses && t.el) {
          var _e58 = t.el.className.split(" ").filter(function (e) {
            return 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass);
          });

          t.emit("_containerClasses", _e58.join(" "));
        }
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var n = this;

        if (n.params._emitClasses && n.el) {
          var _i15 = [];
          n.slides.each(function (e) {
            var t = n.getSlideClasses(e);
            _i15.push({
              slideEl: e,
              classNames: t
            }), n.emit("_slideClass", e, t);
          }), n.emit("_slideClasses", _i15);
        }
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "current";
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = this.params,
            i = this.slides,
            s = this.slidesGrid,
            a = this.slidesSizesGrid,
            r = this.size,
            o = this.activeIndex;
        var l = 1;

        if (n.centeredSlides) {
          var _t29,
              _n18 = i[o].swiperSlideSize;

          for (var _e59 = o + 1; _e59 < i.length; _e59 += 1) {
            i[_e59] && !_t29 && (_n18 += i[_e59].swiperSlideSize, l += 1, _n18 > r && (_t29 = !0));
          }

          for (var _e60 = o - 1; 0 <= _e60; --_e60) {
            i[_e60] && !_t29 && (_n18 += i[_e60].swiperSlideSize, l += 1, _n18 > r && (_t29 = !0));
          }
        } else if ("current" === e) for (var _e61 = o + 1; _e61 < i.length; _e61 += 1) {
          (t ? s[_e61] + a[_e61] - s[o] < r : s[_e61] - s[o] < r) && (l += 1);
        } else for (var _e62 = o - 1; 0 <= _e62; --_e62) {
          s[o] - s[_e62] < r && (l += 1);
        }

        return l;
      }
    }, {
      key: "update",
      value: function update() {
        var _t30;

        var t = this;
        var e, n;

        function i() {
          var e = t.rtlTranslate ? -1 * t.translate : t.translate,
              e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
        }

        t && !t.destroyed && ((_t30 = t, e = _t30.snapGrid, n = _t30.params, _t30), n.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode && t.params.freeMode.enabled ? (i(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || i(), n.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update"));
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = this,
            i = n.params.direction;
        return (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== t && "vertical" !== t || (n.$el.removeClass("" + n.params.containerModifierClass + i).addClass("" + n.params.containerModifierClass + t), n.emitContainerClasses(), n.params.direction = t, n.slides.each(function (e) {
          "vertical" === t ? e.style.width = "" : e.style.height = "";
        }), n.emit("changeDirection"), e && n.update()), n;
      }
    }, {
      key: "mount",
      value: function mount(t) {
        var e = this;
        if (e.mounted) return !0;
        var n = P(t || e.params.el);
        if (!(t = n[0])) return !1;
        t.swiper = e;

        var i = function i() {
          return "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
        };

        var s = function () {
          if (t && t.shadowRoot && t.shadowRoot.querySelector) {
            var _e63 = P(t.shadowRoot.querySelector(i()));

            return _e63.children = function (e) {
              return n.children(e);
            }, _e63;
          }

          return n.children(i());
        }();

        if (0 === s.length && e.params.createElements) {
          var _t31 = _().createElement("div");

          s = P(_t31), _t31.className = e.params.wrapperClass, n.append(_t31), n.children("." + e.params.slideClass).each(function (e) {
            s.append(e);
          });
        }

        return Object.assign(e, {
          $el: n,
          el: t,
          $wrapperEl: s,
          wrapperEl: s[0],
          mounted: !0,
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === s.css("display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = this,
            i = n.params,
            s = n.$el,
            a = n.$wrapperEl,
            r = n.slides;
        return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function (e) {
          n.off(e);
        }), !1 !== e && (n.$el[0].swiper = null, function () {
          var t = n;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }()), n.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        h(k, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return k;
      }
    }, {
      key: "defaults",
      get: function get() {
        return T;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        M.prototype.__modules__ || (M.prototype.__modules__ = []);
        var t = M.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? e.forEach(function (e) {
          return M.installModule(e);
        }) : M.installModule(e), M;
      }
    }]);

    return M;
  }();

  function $(n, i, s, a) {
    var r = _();

    return n.params.createElements && Object.keys(a).forEach(function (t) {
      if (!s[t] && !0 === s.auto) {
        var _e64 = n.$el.children("." + a[t])[0];
        _e64 || (_e64 = r.createElement("div"), _e64.className = a[t], n.$el.append(_e64)), s[t] = _e64, i[t] = _e64;
      }
    }), s;
  }

  function A() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".");
  }

  function O(e) {
    var n = e.effect,
        i = e.swiper,
        t = e.on,
        s = e.setTranslate,
        a = e.setTransition,
        r = e.overwriteParams,
        o = e.perspective;
    t("beforeInit", function () {
      var e;
      i.params.effect === n && (i.classNames.push("" + i.params.containerModifierClass + n), o && o() && i.classNames.push(i.params.containerModifierClass + "3d"), e = r ? r() : {}, Object.assign(i.params, e), Object.assign(i.originalParams, e));
    }), t("setTranslate", function () {
      i.params.effect === n && s();
    }), t("setTransition", function (e, t) {
      i.params.effect === n && a(t);
    });
  }

  function I(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t;
  }

  function N(_ref4) {
    var i = _ref4.swiper,
        e = _ref4.duration,
        t = _ref4.transformEl,
        s = _ref4.allSlides;
    var a = i.slides,
        r = i.activeIndex,
        o = i.$wrapperEl;

    if (i.params.virtualTranslate && 0 !== e) {
      var _e65,
          _n19 = !1;

      _e65 = s ? t ? a.find(t) : a : t ? a.eq(r).find(t) : a.eq(r), _e65.transitionEnd(function () {
        if (!_n19 && i && !i.destroyed) {
          _n19 = !0, i.animating = !1;
          var t = ["webkitTransitionEnd", "transitionend"];

          for (var _e66 = 0; _e66 < t.length; _e66 += 1) {
            o.trigger(t[_e66]);
          }
        }
      });
    }
  }

  function z(e, t, n) {
    var i = "swiper-slide-shadow" + (n ? "-" + n : ""),
        s = e.transformEl ? t.find(e.transformEl) : t;
    var a = s.children("." + i);
    return a.length || (a = P("<div class=\"swiper-slide-shadow".concat(n ? "-" + n : "", "\"></div>")), s.append(a)), a;
  }

  return Object.keys(E).forEach(function (t) {
    Object.keys(E[t]).forEach(function (e) {
      M.prototype[e] = E[t][e];
    });
  }), M.use([function (_ref5) {
    var a = _ref5.swiper,
        e = _ref5.on,
        t = _ref5.emit;
    var n = D();
    var i = null;

    var r = function r() {
      a && !a.destroyed && a.initialized && (t("beforeResize"), t("resize"));
    },
        s = function s() {
      a && !a.destroyed && a.initialized && t("orientationchange");
    };

    e("init", function () {
      a.params.resizeObserver && void 0 !== n.ResizeObserver ? a && !a.destroyed && a.initialized && (i = new ResizeObserver(function (e) {
        var t = a.width,
            n = a.height;
        var i = t,
            s = n;
        e.forEach(function (_ref6) {
          var e = _ref6.contentBoxSize,
              t = _ref6.contentRect,
              n = _ref6.target;
          n && n !== a.el || (i = t ? t.width : (e[0] || e).inlineSize, s = t ? t.height : (e[0] || e).blockSize);
        }), i === t && s === n || r();
      }), i.observe(a.el)) : (n.addEventListener("resize", r), n.addEventListener("orientationchange", s));
    }), e("destroy", function () {
      i && i.unobserve && a.el && (i.unobserve(a.el), i = null), n.removeEventListener("resize", r), n.removeEventListener("orientationchange", s);
    });
  }, function (_ref7) {
    var e = _ref7.swiper,
        t = _ref7.extendParams,
        n = _ref7.on,
        i = _ref7.emit;

    var s = [],
        a = D(),
        r = function r(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
        var t;
        1 !== e.length ? (t = function t() {
          i("observerUpdate", e[0]);
        }, a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)) : i("observerUpdate", e[0]);
      });
      n.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), s.push(n);
    };

    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), n("init", function () {
      if (e.params.observer) {
        if (e.params.observeParents) {
          var t = e.$el.parents();

          for (var _e67 = 0; _e67 < t.length; _e67 += 1) {
            r(t[_e67]);
          }
        }

        r(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), r(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), n("destroy", function () {
      s.forEach(function (e) {
        e.disconnect();
      }), s.splice(0, s.length);
    });
  }]), M.use([function (_ref8) {
    var x = _ref8.swiper,
        e = _ref8.extendParams,
        t = _ref8.on;
    var n;

    function _(e, t) {
      var n = x.params.virtual;
      if (n.cache && x.virtual.cache[t]) return x.virtual.cache[t];
      var i = n.renderSlide ? P(n.renderSlide.call(x, e, t)) : P("<div class=\"".concat(x.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), n.cache && (x.virtual.cache[t] = i), i;
    }

    function r(t) {
      var _x$params = x.params,
          e = _x$params.slidesPerView,
          n = _x$params.slidesPerGroup,
          i = _x$params.centeredSlides,
          _x$params$virtual = x.params.virtual,
          s = _x$params$virtual.addSlidesBefore,
          a = _x$params$virtual.addSlidesAfter,
          _x$virtual = x.virtual,
          r = _x$virtual.from,
          o = _x$virtual.to,
          l = _x$virtual.slides,
          c = _x$virtual.slidesGrid,
          d = _x$virtual.offset;
      x.params.cssMode || x.updateActiveIndex();
      var u = x.activeIndex || 0;
      var h, p, f;
      h = x.rtlTranslate ? "right" : x.isHorizontal() ? "left" : "top", f = i ? (p = Math.floor(e / 2) + n + a, Math.floor(e / 2) + n + s) : (p = e + (n - 1) + a, n + s);
      var m = Math.max((u || 0) - f, 0),
          g = Math.min((u || 0) + p, l.length - 1),
          v = (x.slidesGrid[m] || 0) - (x.slidesGrid[0] || 0);

      function b() {
        x.updateSlides(), x.updateProgress(), x.updateSlidesClasses(), x.lazy && x.params.lazy.enabled && x.lazy.load();
      }

      if (Object.assign(x.virtual, {
        from: m,
        to: g,
        offset: v,
        slidesGrid: x.slidesGrid
      }), r === m && o === g && !t) return x.slidesGrid !== c && v !== d && x.slides.css(h, v + "px"), void x.updateProgress();
      if (x.params.virtual.renderExternal) return x.params.virtual.renderExternal.call(x, {
        offset: v,
        from: m,
        to: g,
        slides: function () {
          var t = [];

          for (var _e68 = m; _e68 <= g; _e68 += 1) {
            t.push(l[_e68]);
          }

          return t;
        }()
      }), void (x.params.virtual.renderExternalUpdate && b());
      var y = [],
          w = [];
      if (t) x.$wrapperEl.find("." + x.params.slideClass).remove();else for (var _e69 = r; _e69 <= o; _e69 += 1) {
        (_e69 < m || _e69 > g) && x.$wrapperEl.find(".".concat(x.params.slideClass, "[data-swiper-slide-index=\"").concat(_e69, "\"]")).remove();
      }

      for (var _e70 = 0; _e70 < l.length; _e70 += 1) {
        _e70 >= m && _e70 <= g && (void 0 === o || t ? w.push(_e70) : (_e70 > o && w.push(_e70), _e70 < r && y.push(_e70)));
      }

      w.forEach(function (e) {
        x.$wrapperEl.append(_(l[e], e));
      }), y.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        x.$wrapperEl.prepend(_(l[e], e));
      }), x.$wrapperEl.children(".swiper-slide").css(h, v + "px"), b();
    }

    e({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), x.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, t("beforeInit", function () {
      x.params.virtual.enabled && (x.virtual.slides = x.params.virtual.slides, x.classNames.push(x.params.containerModifierClass + "virtual"), x.params.watchSlidesProgress = !0, x.originalParams.watchSlidesProgress = !0, x.params.initialSlide || r());
    }), t("setTranslate", function () {
      x.params.virtual.enabled && (x.params.cssMode && !x._immediateVirtual ? (clearTimeout(n), n = setTimeout(function () {
        r();
      }, 100)) : r());
    }), t("init update resize", function () {
      x.params.virtual.enabled && x.params.cssMode && S(x.wrapperEl, "--swiper-virtual-size", x.virtualSize + "px");
    }), Object.assign(x.virtual, {
      appendSlide: function appendSlide(t) {
        if ("object" == _typeof(t) && "length" in t) for (var _e71 = 0; _e71 < t.length; _e71 += 1) {
          t[_e71] && x.virtual.slides.push(t[_e71]);
        } else x.virtual.slides.push(t);
        r(!0);
      },
      prependSlide: function prependSlide(i) {
        var s = x.activeIndex;
        var e = s + 1,
            a = 1;

        if (Array.isArray(i)) {
          for (var _e72 = 0; _e72 < i.length; _e72 += 1) {
            i[_e72] && x.virtual.slides.unshift(i[_e72]);
          }

          e = s + i.length, a = i.length;
        } else x.virtual.slides.unshift(i);

        if (x.params.virtual.cache) {
          var _i16 = x.virtual.cache,
              _s9 = {};
          Object.keys(_i16).forEach(function (e) {
            var t = _i16[e],
                n = t.attr("data-swiper-slide-index");
            n && t.attr("data-swiper-slide-index", parseInt(n, 10) + a), _s9[parseInt(e, 10) + a] = t;
          }), x.virtual.cache = _s9;
        }

        r(!0), x.slideTo(e, 0);
      },
      removeSlide: function removeSlide(n) {
        if (null != n) {
          var _t32 = x.activeIndex;
          if (Array.isArray(n)) for (var _e73 = n.length - 1; 0 <= _e73; --_e73) {
            x.virtual.slides.splice(n[_e73], 1), x.params.virtual.cache && delete x.virtual.cache[n[_e73]], n[_e73] < _t32 && --_t32, _t32 = Math.max(_t32, 0);
          } else x.virtual.slides.splice(n, 1), x.params.virtual.cache && delete x.virtual.cache[n], n < _t32 && --_t32, _t32 = Math.max(_t32, 0);
          r(!0), x.slideTo(_t32, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        x.virtual.slides = [], x.params.virtual.cache && (x.virtual.cache = {}), r(!0), x.slideTo(0, 0);
      },
      update: r
    });
  }, function (_ref9) {
    var m = _ref9.swiper,
        e = _ref9.extendParams,
        t = _ref9.on,
        g = _ref9.emit;

    var v = _(),
        b = D();

    function n(t) {
      if (m.enabled) {
        var n = m.rtlTranslate;
        var _e74 = t;
        _e74.originalEvent && (_e74 = _e74.originalEvent);
        var i = _e74.keyCode || _e74.charCode,
            s = m.params.keyboard.pageUpDown,
            a = s && 33 === i,
            r = s && 34 === i,
            o = 37 === i,
            l = 39 === i,
            t = 38 === i,
            s = 40 === i;
        if (!m.allowSlideNext && (m.isHorizontal() && l || m.isVertical() && s || r)) return !1;
        if (!m.allowSlidePrev && (m.isHorizontal() && o || m.isVertical() && t || a)) return !1;

        if (!(_e74.shiftKey || _e74.altKey || _e74.ctrlKey || _e74.metaKey || v.activeElement && v.activeElement.nodeName && ("input" === v.activeElement.nodeName.toLowerCase() || "textarea" === v.activeElement.nodeName.toLowerCase()))) {
          if (m.params.keyboard.onlyInViewport && (a || r || o || l || t || s)) {
            var _t33 = !1;

            if (0 < m.$el.parents("." + m.params.slideClass).length && 0 === m.$el.parents("." + m.params.slideActiveClass).length) return;

            var _u2 = m.$el,
                _g = _u2[0].clientWidth,
                _h = _u2[0].clientHeight,
                _v = b.innerWidth,
                _p = b.innerHeight,
                _f = m.$el.offset();

            n && (_f.left -= m.$el[0].scrollLeft);
            var c = [[_f.left, _f.top], [_f.left + _g, _f.top], [_f.left, _f.top + _h], [_f.left + _g, _f.top + _h]];

            for (var _e75 = 0; _e75 < c.length; _e75 += 1) {
              var d = c[_e75];
              0 <= d[0] && d[0] <= _v && 0 <= d[1] && d[1] <= _p && (0 === d[0] && 0 === d[1] || (_t33 = !0));
            }

            if (!_t33) return;
          }

          m.isHorizontal() ? ((a || r || o || l) && (_e74.preventDefault ? _e74.preventDefault() : _e74.returnValue = !1), ((r || l) && !n || (a || o) && n) && m.slideNext(), ((a || o) && !n || (r || l) && n) && m.slidePrev()) : ((a || r || t || s) && (_e74.preventDefault ? _e74.preventDefault() : _e74.returnValue = !1), (r || s) && m.slideNext(), (a || t) && m.slidePrev()), g("keyPress", i);
        }
      }
    }

    function i() {
      m.keyboard.enabled || (P(v).on("keydown", n), m.keyboard.enabled = !0);
    }

    function s() {
      m.keyboard.enabled && (P(v).off("keydown", n), m.keyboard.enabled = !1);
    }

    e({
      keyboard: {
        enabled: !(m.keyboard = {
          enabled: !1
        }),
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), t("init", function () {
      m.params.keyboard.enabled && i();
    }), t("destroy", function () {
      m.keyboard.enabled && s();
    }), Object.assign(m.keyboard, {
      enable: i,
      disable: s
    });
  }, function (_ref10) {
    var d = _ref10.swiper,
        e = _ref10.extendParams,
        t = _ref10.on,
        u = _ref10.emit;
    var n = D();
    var h;
    e({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), d.mousewheel = {
      enabled: !1
    };
    var p,
        i = g();
    var f = [];

    function s() {
      d.enabled && (d.mouseEntered = !0);
    }

    function a() {
      d.enabled && (d.mouseEntered = !1);
    }

    function m(e) {
      return !(d.params.mousewheel.thresholdDelta && e.delta < d.params.mousewheel.thresholdDelta) && !(d.params.mousewheel.thresholdTime && g() - i < d.params.mousewheel.thresholdTime) && (6 <= e.delta && g() - i < 60 || (e.direction < 0 ? d.isEnd && !d.params.loop || d.animating || (d.slideNext(), u("scroll", e.raw)) : d.isBeginning && !d.params.loop || d.animating || (d.slidePrev(), u("scroll", e.raw)), i = new n.Date().getTime(), 0));
    }

    function r(i) {
      var s = i,
          a = !0;

      if (d.enabled) {
        var r = d.params.mousewheel;
        d.params.cssMode && s.preventDefault();
        var _e76 = d.$el;
        if ("container" !== d.params.mousewheel.eventsTarget && (_e76 = P(d.params.mousewheel.eventsTarget)), !d.mouseEntered && !_e76[0].contains(s.target) && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        var _t34 = 0;

        var o = d.rtlTranslate ? -1 : 1,
            l = function (e) {
          var t = 0,
              n = 0,
              i = 0,
              s = 0;
          return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, s = 10 * n, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !n && (n = s < 1 ? -1 : 1), {
            spinX: t,
            spinY: n,
            pixelX: i,
            pixelY: s
          };
        }(s);

        if (r.forceToAxis) {
          if (d.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            _t34 = -l.pixelX * o;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            _t34 = -l.pixelY;
          }
        } else _t34 = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
        if (0 === _t34) return !0;
        r.invert && (_t34 = -_t34);

        var _n20 = d.getTranslate() + _t34 * r.sensitivity;

        if (_n20 >= d.minTranslate() && (_n20 = d.minTranslate()), _n20 <= d.maxTranslate() && (_n20 = d.maxTranslate()), a = !!d.params.loop || !(_n20 === d.minTranslate() || _n20 === d.maxTranslate()), a && d.params.nested && s.stopPropagation(), d.params.freeMode && d.params.freeMode.enabled) {
          var _c4 = {
            time: g(),
            delta: Math.abs(_t34),
            direction: Math.sign(_t34)
          },
              _a7 = p && _c4.time < p.time + 500 && _c4.delta <= p.delta && _c4.direction === p.direction;

          if (!_a7) {
            p = void 0, d.params.loop && d.loopFix();

            var _e77 = d.getTranslate() + _t34 * r.sensitivity;

            var _P2 = d.isBeginning,
                _g2 = d.isEnd;

            if (_e77 >= d.minTranslate() && (_e77 = d.minTranslate()), _e77 <= d.maxTranslate() && (_e77 = d.maxTranslate()), d.setTransition(0), d.setTranslate(_e77), d.updateProgress(), d.updateActiveIndex(), d.updateSlidesClasses(), (!_P2 && d.isBeginning || !_g2 && d.isEnd) && d.updateSlidesClasses(), d.params.freeMode.sticky) {
              clearTimeout(h), h = void 0, 15 <= f.length && f.shift();

              var _s10 = f.length ? f[f.length - 1] : void 0,
                  _u3 = f[0];

              if (f.push(_c4), _s10 && (_c4.delta > _s10.delta || _c4.direction !== _s10.direction)) f.splice(0);else if (15 <= f.length && _c4.time - _u3.time < 500 && 1 <= _u3.delta - _c4.delta && _c4.delta <= 6) {
                var _s11 = 0 < _t34 ? .8 : .2;

                p = _c4, f.splice(0), h = C(function () {
                  d.slideToClosest(d.params.speed, !0, void 0, _s11);
                }, 0);
              }
              h = h || C(function () {
                p = _c4, f.splice(0), d.slideToClosest(d.params.speed, !0, void 0, .5);
              }, 500);
            }

            if (_a7 || u("scroll", s), d.params.autoplay && d.params.autoplayDisableOnInteraction && d.autoplay.stop(), _e77 === d.minTranslate() || _e77 === d.maxTranslate()) return !0;
          }
        } else {
          var _s12 = {
            time: g(),
            delta: Math.abs(_t34),
            direction: Math.sign(_t34),
            raw: i
          };
          2 <= f.length && f.shift();

          var _u4 = f.length ? f[f.length - 1] : void 0;

          if (f.push(_s12), (!_u4 || _s12.direction !== _u4.direction || _s12.delta > _u4.delta || _s12.time > _u4.time + 150) && m(_s12), r = _s12, i = d.params.mousewheel, r.direction < 0 ? !(!d.isEnd || d.params.loop || !i.releaseOnEdges) : !(!d.isBeginning || d.params.loop || !i.releaseOnEdges)) return !0;
        }

        return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
      }
    }

    function o(e) {
      var t = d.$el;
      "container" !== d.params.mousewheel.eventsTarget && (t = P(d.params.mousewheel.eventsTarget)), t[e]("mouseenter", s), t[e]("mouseleave", a), t[e]("wheel", r);
    }

    function l() {
      return d.params.cssMode ? (d.wrapperEl.removeEventListener("wheel", r), !0) : !d.mousewheel.enabled && (o("on"), d.mousewheel.enabled = !0);
    }

    function c() {
      return d.params.cssMode ? (d.wrapperEl.addEventListener(event, r), !0) : !(!d.mousewheel.enabled || (o("off"), d.mousewheel.enabled = !1));
    }

    t("init", function () {
      !d.params.mousewheel.enabled && d.params.cssMode && c(), d.params.mousewheel.enabled && l();
    }), t("destroy", function () {
      d.params.cssMode && l(), d.mousewheel.enabled && c();
    }), Object.assign(d.mousewheel, {
      enable: l,
      disable: c
    });
  }, function (_ref11) {
    var a = _ref11.swiper,
        e = _ref11.extendParams,
        t = _ref11.on,
        r = _ref11.emit;

    function i(e) {
      var t;
      return e && (t = P(e), a.params.uniqueNavElements && "string" == typeof e && 1 < t.length && 1 === a.$el.find(e).length && (t = a.$el.find(e))), t;
    }

    function n(e, t) {
      var n = a.params.navigation;
      e && 0 < e.length && (e[t ? "addClass" : "removeClass"](n.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t), a.params.watchOverflow && a.enabled && e[a.isLocked ? "addClass" : "removeClass"](n.lockClass));
    }

    function s() {
      var _a$navigation;

      var e, t;
      a.params.loop || ((_a$navigation = a.navigation, e = _a$navigation.$nextEl, t = _a$navigation.$prevEl, _a$navigation), n(t, a.isBeginning && !a.params.rewind), n(e, a.isEnd && !a.params.rewind));
    }

    function o(e) {
      e.preventDefault(), a.isBeginning && !a.params.loop && !a.params.rewind || a.slidePrev();
    }

    function l(e) {
      e.preventDefault(), a.isEnd && !a.params.loop && !a.params.rewind || a.slideNext();
    }

    function c() {
      var e = a.params.navigation;

      if (a.params.navigation = $(a, a.originalParams.navigation, a.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), e.nextEl || e.prevEl) {
        var _t35 = i(e.nextEl),
            _n21 = i(e.prevEl);

        _t35 && 0 < _t35.length && _t35.on("click", l), _n21 && 0 < _n21.length && _n21.on("click", o), Object.assign(a.navigation, {
          $nextEl: _t35,
          nextEl: _t35 && _t35[0],
          $prevEl: _n21,
          prevEl: _n21 && _n21[0]
        }), a.enabled || (_t35 && _t35.addClass(e.lockClass), _n21 && _n21.addClass(e.lockClass));
      }
    }

    function d() {
      var _a$navigation2 = a.navigation,
          e = _a$navigation2.$nextEl,
          t = _a$navigation2.$prevEl;
      e && e.length && (e.off("click", l), e.removeClass(a.params.navigation.disabledClass)), t && t.length && (t.off("click", o), t.removeClass(a.params.navigation.disabledClass));
    }

    e({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    }), a.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, t("init", function () {
      c(), s();
    }), t("toEdge fromEdge lock unlock", function () {
      s();
    }), t("destroy", function () {
      d();
    }), t("enable disable", function () {
      var _a$navigation3 = a.navigation,
          e = _a$navigation3.$nextEl,
          t = _a$navigation3.$prevEl;
      e && e[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass), t && t[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass);
    }), t("click", function (e, t) {
      var _a$navigation4 = a.navigation,
          n = _a$navigation4.$nextEl,
          i = _a$navigation4.$prevEl,
          s = t.target;

      if (a.params.navigation.hideOnClick && !P(s).is(i) && !P(s).is(n) && (!(a.pagination && a.params.pagination && a.params.pagination.clickable) || a.pagination.el !== s && !a.pagination.el.contains(s))) {
        var _e78;

        n ? _e78 = n.hasClass(a.params.navigation.hiddenClass) : i && (_e78 = i.hasClass(a.params.navigation.hiddenClass)), r(!0 === _e78 ? "navigationShow" : "navigationHide"), n && n.toggleClass(a.params.navigation.hiddenClass), i && i.toggleClass(a.params.navigation.hiddenClass);
      }
    }), Object.assign(a.navigation, {
      update: s,
      init: c,
      destroy: d
    });
  }, function (_ref12) {
    var c = _ref12.swiper,
        e = _ref12.extendParams,
        t = _ref12.on,
        d = _ref12.emit;
    var n = "swiper-pagination";
    var u;
    e({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: n + "-bullet",
        bulletActiveClass: n + "-bullet-active",
        modifierClass: n + "-",
        currentClass: n + "-current",
        totalClass: n + "-total",
        hiddenClass: n + "-hidden",
        progressbarFillClass: n + "-progressbar-fill",
        progressbarOppositeClass: n + "-progressbar-opposite",
        clickableClass: n + "-clickable",
        lockClass: n + "-lock",
        horizontalClass: n + "-horizontal",
        verticalClass: n + "-vertical"
      }
    }), c.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var h = 0;

    function p() {
      return !c.params.pagination.el || !c.pagination.el || !c.pagination.$el || 0 === c.pagination.$el.length;
    }

    function f(e, t) {
      var n = c.params.pagination.bulletActiveClass;
      e[t]().addClass(n + "-" + t)[t]().addClass(n + "-".concat(t, "-") + t);
    }

    function i() {
      var t = c.rtl,
          r = c.params.pagination;

      if (!p()) {
        var _e79 = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length,
            _o5 = c.pagination.$el;

        var _a8;

        var n = c.params.loop ? Math.ceil((_e79 - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;

        if (c.params.loop ? (_a8 = Math.ceil((c.activeIndex - c.loopedSlides) / c.params.slidesPerGroup), _a8 > _e79 - 1 - 2 * c.loopedSlides && (_a8 -= _e79 - 2 * c.loopedSlides), _a8 > n - 1 && (_a8 -= n), _a8 < 0 && "bullets" !== c.params.paginationType && (_a8 = n + _a8)) : _a8 = void 0 !== c.snapIndex ? c.snapIndex : c.activeIndex || 0, "bullets" === r.type && c.pagination.bullets && 0 < c.pagination.bullets.length) {
          var _d5 = c.pagination.bullets;

          var _i17, _s13, _e80;

          if (r.dynamicBullets && (u = _d5.eq(0)[c.isHorizontal() ? "outerWidth" : "outerHeight"](!0), _o5.css(c.isHorizontal() ? "width" : "height", u * (r.dynamicMainBullets + 4) + "px"), 1 < r.dynamicMainBullets && void 0 !== c.previousIndex && (h += _a8 - (c.previousIndex - c.loopedSlides || 0), h > r.dynamicMainBullets - 1 ? h = r.dynamicMainBullets - 1 : h < 0 && (h = 0)), _i17 = Math.max(_a8 - h, 0), _s13 = _i17 + (Math.min(_d5.length, r.dynamicMainBullets) - 1), _e80 = (_s13 + _i17) / 2), _d5.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
            return "" + r.bulletActiveClass + e;
          }).join(" ")), 1 < _o5.length) _d5.each(function (e) {
            var t = P(e),
                n = t.index();
            n === _a8 && t.addClass(r.bulletActiveClass), r.dynamicBullets && (n >= _i17 && n <= _s13 && t.addClass(r.bulletActiveClass + "-main"), n === _i17 && f(t, "prev"), n === _s13 && f(t, "next"));
          });else {
            var _t36 = _d5.eq(_a8),
                _u5 = _t36.index();

            if (_t36.addClass(r.bulletActiveClass), r.dynamicBullets) {
              var _t37 = _d5.eq(_i17),
                  _h2 = _d5.eq(_s13);

              for (var _e81 = _i17; _e81 <= _s13; _e81 += 1) {
                _d5.eq(_e81).addClass(r.bulletActiveClass + "-main");
              }

              if (c.params.loop) {
                if (_u5 >= _d5.length) {
                  for (var _e82 = r.dynamicMainBullets; 0 <= _e82; --_e82) {
                    _d5.eq(_d5.length - _e82).addClass(r.bulletActiveClass + "-main");
                  }

                  _d5.eq(_d5.length - r.dynamicMainBullets - 1).addClass(r.bulletActiveClass + "-prev");
                } else f(_t37, "prev"), f(_h2, "next");
              } else f(_t37, "prev"), f(_h2, "next");
            }
          }

          if (r.dynamicBullets) {
            var _l4 = Math.min(_d5.length, r.dynamicMainBullets + 4),
                _h3 = (u * _l4 - u) / 2 - _e80 * u,
                _p2 = t ? "right" : "left";

            _d5.css(c.isHorizontal() ? _p2 : "top", _h3 + "px");
          }
        }

        if ("fraction" === r.type && (_o5.find(A(r.currentClass)).text(r.formatFractionCurrent(_a8 + 1)), _o5.find(A(r.totalClass)).text(r.formatFractionTotal(n))), "progressbar" === r.type) {
          var i = r.progressbarOpposite ? c.isHorizontal() ? "vertical" : "horizontal" : c.isHorizontal() ? "horizontal" : "vertical";

          var _d6 = (_a8 + 1) / n;

          var _e83 = 1,
              _t38 = 1;
          "horizontal" == i ? _e83 = _d6 : _t38 = _d6, _o5.find(A(r.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_e83, ") scaleY(").concat(_t38, ")")).transition(c.params.speed);
        }

        "custom" === r.type && r.renderCustom ? (_o5.html(r.renderCustom(c, _a8 + 1, n)), d("paginationRender", _o5[0])) : d("paginationUpdate", _o5[0]), c.params.watchOverflow && c.enabled && _o5[c.isLocked ? "addClass" : "removeClass"](r.lockClass);
      }
    }

    function s() {
      var i = c.params.pagination;

      if (!p()) {
        var _e84 = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length,
            _s14 = c.pagination.$el;
        var _n22 = "";

        if ("bullets" === i.type) {
          var _t39 = c.params.loop ? Math.ceil((_e84 - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;

          c.params.freeMode && c.params.freeMode.enabled && !c.params.loop && _t39 > _e84 && (_t39 = _e84);

          for (var _e85 = 0; _e85 < _t39; _e85 += 1) {
            i.renderBullet ? _n22 += i.renderBullet.call(c, _e85, i.bulletClass) : _n22 += "<".concat(i.bulletElement, " class=\"").concat(i.bulletClass, "\"></").concat(i.bulletElement, ">");
          }

          _s14.html(_n22), c.pagination.bullets = _s14.find(A(i.bulletClass));
        }

        "fraction" === i.type && (_n22 = i.renderFraction ? i.renderFraction.call(c, i.currentClass, i.totalClass) : "<span class=\"".concat(i.currentClass, "\"></span> / <span class=\"").concat(i.totalClass, "\"></span>"), _s14.html(_n22)), "progressbar" === i.type && (_n22 = i.renderProgressbar ? i.renderProgressbar.call(c, i.progressbarFillClass) : "<span class=\"".concat(i.progressbarFillClass, "\"></span>"), _s14.html(_n22)), "custom" !== i.type && d("paginationRender", c.pagination.$el[0]);
      }
    }

    function a() {
      c.params.pagination = $(c, c.originalParams.pagination, c.params.pagination, {
        el: "swiper-pagination"
      });
      var t = c.params.pagination;

      if (t.el) {
        var _e86 = P(t.el);

        0 !== _e86.length && (c.params.uniqueNavElements && "string" == typeof t.el && 1 < _e86.length && (_e86 = c.$el.find(t.el), 1 < _e86.length && (_e86 = _e86.filter(function (e) {
          return P(e).parents(".swiper")[0] === c.el;
        }))), "bullets" === t.type && t.clickable && _e86.addClass(t.clickableClass), _e86.addClass(t.modifierClass + t.type), _e86.addClass(t.modifierClass + c.params.direction), "bullets" === t.type && t.dynamicBullets && (_e86.addClass("" + t.modifierClass + t.type + "-dynamic"), h = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && _e86.addClass(t.progressbarOppositeClass), t.clickable && _e86.on("click", A(t.bulletClass), function (e) {
          e.preventDefault();
          var t = P(this).index() * c.params.slidesPerGroup;
          c.params.loop && (t += c.loopedSlides), c.slideTo(t);
        }), Object.assign(c.pagination, {
          $el: _e86,
          el: _e86[0]
        }), c.enabled || _e86.addClass(t.lockClass));
      }
    }

    function r() {
      var e = c.params.pagination;

      if (!p()) {
        var _t40 = c.pagination.$el;
        _t40.removeClass(e.hiddenClass), _t40.removeClass(e.modifierClass + e.type), _t40.removeClass(e.modifierClass + c.params.direction), c.pagination.bullets && c.pagination.bullets.removeClass && c.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && _t40.off("click", A(e.bulletClass));
      }
    }

    t("init", function () {
      a(), s(), i();
    }), t("activeIndexChange", function () {
      !c.params.loop && void 0 !== c.snapIndex || i();
    }), t("snapIndexChange", function () {
      c.params.loop || i();
    }), t("slidesLengthChange", function () {
      c.params.loop && (s(), i());
    }), t("snapGridLengthChange", function () {
      c.params.loop || (s(), i());
    }), t("destroy", function () {
      r();
    }), t("enable disable", function () {
      var e = c.pagination.$el;
      e && e[c.enabled ? "removeClass" : "addClass"](c.params.pagination.lockClass);
    }), t("lock unlock", function () {
      i();
    }), t("click", function (e, t) {
      var n = t.target,
          i = c.pagination.$el;

      if (c.params.pagination.el && c.params.pagination.hideOnClick && 0 < i.length && !P(n).hasClass(c.params.pagination.bulletClass) && (!c.navigation || !(c.navigation.nextEl && n === c.navigation.nextEl || c.navigation.prevEl && n === c.navigation.prevEl))) {
        var _e87 = i.hasClass(c.params.pagination.hiddenClass);

        d(!0 === _e87 ? "paginationShow" : "paginationHide"), i.toggleClass(c.params.pagination.hiddenClass);
      }
    }), Object.assign(c.pagination, {
      render: s,
      update: i,
      init: a,
      destroy: r
    });
  }, function (_ref13) {
    var c = _ref13.swiper,
        e = _ref13.extendParams,
        t = _ref13.on,
        r = _ref13.emit;

    var d = _();

    var o,
        l,
        u,
        i,
        h = !1,
        p = null,
        f = null;

    function n() {
      if (c.params.scrollbar.el && c.scrollbar.el) {
        var _n23 = c.scrollbar,
            _i18 = c.rtlTranslate,
            _s15 = c.progress,
            _a9 = _n23.$dragEl,
            _r6 = _n23.$el,
            _o6 = c.params.scrollbar;

        var _e88 = l,
            _t41 = (u - l) * _s15;

        _i18 ? (_t41 = -_t41, 0 < _t41 ? (_e88 = l - _t41, _t41 = 0) : -_t41 + l > u && (_e88 = u + _t41)) : _t41 < 0 ? (_e88 = l + _t41, _t41 = 0) : _t41 + l > u && (_e88 = u - _t41), c.isHorizontal() ? (_a9.transform("translate3d(".concat(_t41, "px, 0, 0)")), _a9[0].style.width = _e88 + "px") : (_a9.transform("translate3d(0px, ".concat(_t41, "px, 0)")), _a9[0].style.height = _e88 + "px"), _o6.hide && (clearTimeout(p), _r6[0].style.opacity = 1, p = setTimeout(function () {
          _r6[0].style.opacity = 0, _r6.transition(400);
        }, 1e3));
      }
    }

    function s() {
      if (c.params.scrollbar.el && c.scrollbar.el) {
        var _e89 = c.scrollbar,
            _t42 = _e89.$dragEl,
            _n24 = _e89.$el;
        _t42[0].style.width = "", _t42[0].style.height = "", u = c.isHorizontal() ? _n24[0].offsetWidth : _n24[0].offsetHeight, i = c.size / (c.virtualSize + c.params.slidesOffsetBefore - (c.params.centeredSlides ? c.snapGrid[0] : 0)), l = "auto" === c.params.scrollbar.dragSize ? u * i : parseInt(c.params.scrollbar.dragSize, 10), c.isHorizontal() ? _t42[0].style.width = l + "px" : _t42[0].style.height = l + "px", _n24[0].style.display = 1 <= i ? "none" : "", c.params.scrollbar.hide && (_n24[0].style.opacity = 0), c.params.watchOverflow && c.enabled && _e89.$el[c.isLocked ? "addClass" : "removeClass"](c.params.scrollbar.lockClass);
      }
    }

    function m(e) {
      return c.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY;
    }

    function g(e) {
      var t = c.scrollbar,
          n = c.rtlTranslate,
          i = t.$el;
      var s;
      s = (m(e) - i.offset()[c.isHorizontal() ? "left" : "top"] - (null !== o ? o : l / 2)) / (u - l), s = Math.max(Math.min(s, 1), 0), n && (s = 1 - s), e = c.minTranslate() + (c.maxTranslate() - c.minTranslate()) * s, c.updateProgress(e), c.setTranslate(e), c.updateActiveIndex(), c.updateSlidesClasses();
    }

    function v(e) {
      var t = c.params.scrollbar,
          n = c.scrollbar,
          i = c.$wrapperEl,
          s = n.$el,
          a = n.$dragEl;
      h = !0, o = e.target === a[0] || e.target === a ? m(e) - e.target.getBoundingClientRect()[c.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), a.transition(100), g(e), clearTimeout(f), s.transition(0), t.hide && s.css("opacity", 1), c.params.cssMode && c.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e);
    }

    function b(e) {
      var t = c.scrollbar,
          n = c.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
      h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), n.transition(0), i.transition(0), s.transition(0), r("scrollbarDragMove", e));
    }

    function y(e) {
      var t = c.params.scrollbar,
          n = c.scrollbar,
          i = c.$wrapperEl,
          s = n.$el;
      h && (h = !1, c.params.cssMode && (c.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), t.hide && (clearTimeout(f), f = C(function () {
        s.css("opacity", 0), s.transition(400);
      }, 1e3)), r("scrollbarDragEnd", e), t.snapOnRelease && c.slideToClosest());
    }

    function a(e) {
      var t = c.scrollbar,
          n = c.touchEventsTouch,
          i = c.touchEventsDesktop,
          s = c.params,
          a = c.support,
          r = t.$el[0],
          o = !(!a.passiveListener || !s.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          l = !(!a.passiveListener || !s.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      r && (e = "on" === e ? "addEventListener" : "removeEventListener", a.touch ? (r[e](n.start, v, o), r[e](n.move, b, o), r[e](n.end, y, l)) : (r[e](i.start, v, o), d[e](i.move, b, o), d[e](i.end, y, l)));
    }

    function w() {
      var n = c.scrollbar,
          i = c.$el;
      c.params.scrollbar = $(c, c.originalParams.scrollbar, c.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      var s = c.params.scrollbar;

      if (s.el) {
        var _e90 = P(s.el);

        c.params.uniqueNavElements && "string" == typeof s.el && 1 < _e90.length && 1 === i.find(s.el).length && (_e90 = i.find(s.el));

        var _t43 = _e90.find("." + c.params.scrollbar.dragClass);

        0 === _t43.length && (_t43 = P("<div class=\"".concat(c.params.scrollbar.dragClass, "\"></div>")), _e90.append(_t43)), Object.assign(n, {
          $el: _e90,
          el: _e90[0],
          $dragEl: _t43,
          dragEl: _t43[0]
        }), s.draggable && c.params.scrollbar.el && a("on"), _e90 && _e90[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass);
      }
    }

    function x() {
      c.params.scrollbar.el && a("off");
    }

    e({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    }), c.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, t("init", function () {
      w(), s(), n();
    }), t("update resize observerUpdate lock unlock", function () {
      s();
    }), t("setTranslate", function () {
      n();
    }), t("setTransition", function (e, t) {
      c.params.scrollbar.el && c.scrollbar.el && c.scrollbar.$dragEl.transition(t);
    }), t("enable disable", function () {
      var e = c.scrollbar.$el;
      e && e[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass);
    }), t("destroy", function () {
      x();
    }), Object.assign(c.scrollbar, {
      updateSize: s,
      setTranslate: n,
      init: w,
      destroy: x
    });
  }, function (_ref14) {
    var c = _ref14.swiper,
        e = _ref14.extendParams,
        t = _ref14.on;
    e({
      parallax: {
        enabled: !1
      }
    });

    var a = function a(e, t) {
      var n = c.rtl,
          i = P(e),
          s = n ? -1 : 1,
          a = i.attr("data-swiper-parallax") || "0";
      var r = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
      var l = i.attr("data-swiper-parallax-scale"),
          e = i.attr("data-swiper-parallax-opacity");

      if (r || o ? (r = r || "0", o = o || "0") : c.isHorizontal() ? (r = a, o = "0") : (o = a, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * s + "%" : r * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != e) {
        var _c5 = e - (e - 1) * (1 - Math.abs(t));

        i[0].style.opacity = _c5;
      }

      if (null == l) i.transform("translate3d(".concat(r, ", ").concat(o, ", 0px)"));else {
        var _c6 = l - (l - 1) * (1 - Math.abs(t));

        i.transform("translate3d(".concat(r, ", ").concat(o, ", 0px) scale(").concat(_c6, ")"));
      }
    },
        n = function n() {
      var e = c.$el,
          t = c.slides,
          i = c.progress,
          s = c.snapGrid;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
        a(e, i);
      }), t.each(function (e, t) {
        var n = e.progress;
        1 < c.params.slidesPerGroup && "auto" !== c.params.slidesPerView && (n += Math.ceil(t / 2) - i * (s.length - 1)), n = Math.min(Math.max(n, -1), 1), P(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          a(e, n);
        });
      });
    };

    t("beforeInit", function () {
      c.params.parallax.enabled && (c.params.watchSlidesProgress = !0, c.originalParams.watchSlidesProgress = !0);
    }), t("init", function () {
      c.params.parallax.enabled && n();
    }), t("setTranslate", function () {
      c.params.parallax.enabled && n();
    }), t("setTransition", function (e, t) {
      c.params.parallax.enabled && function () {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : c.params.speed;
        var e = c.$el;
        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          var t = P(e);
          var n = parseInt(t.attr("data-swiper-parallax-duration"), 10) || i;
          0 === i && (n = 0), t.transition(n);
        });
      }(t);
    });
  }, function (_ref15) {
    var x = _ref15.swiper,
        e = _ref15.extendParams,
        t = _ref15.on,
        i = _ref15.emit;

    var _ = D();

    e({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), x.zoom = {
      enabled: !1
    };
    var n,
        a,
        r,
        C = 1,
        o = !1;
    var T = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3
    },
        E = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    },
        l = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    var s = 1;

    function c(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          n = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          e = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - n, 2));
    }

    function d(e) {
      var t = x.support,
          n = x.params.zoom;

      if (a = !1, r = !1, !t.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        a = !0, T.scaleStart = c(e);
      }

      T.$slideEl && T.$slideEl.length || (T.$slideEl = P(e.target).closest("." + x.params.slideClass), 0 === T.$slideEl.length && (T.$slideEl = x.slides.eq(x.activeIndex)), T.$imageEl = T.$slideEl.find("." + n.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), T.$imageWrapEl = T.$imageEl.parent("." + n.containerClass), T.maxRatio = T.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== T.$imageWrapEl.length) ? (T.$imageEl && T.$imageEl.transition(0), o = !0) : T.$imageEl = void 0;
    }

    function u(e) {
      var t = x.support,
          n = x.params.zoom,
          i = x.zoom;

      if (!t.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        r = !0, T.scaleMove = c(e);
      }

      T.$imageEl && 0 !== T.$imageEl.length ? (t.gestures ? i.scale = e.scale * C : i.scale = T.scaleMove / T.scaleStart * C, i.scale > T.maxRatio && (i.scale = T.maxRatio - 1 + Math.pow(i.scale - T.maxRatio + 1, .5)), i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, .5)), T.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === e.type && d(e);
    }

    function h(e) {
      var t = x.device,
          n = x.support,
          i = x.params.zoom,
          s = x.zoom;

      if (!n.gestures) {
        if (!a || !r) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
        a = !1, r = !1;
      }

      T.$imageEl && 0 !== T.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, T.maxRatio), i.minRatio), T.$imageEl.transition(x.params.speed).transform("translate3d(0,0,0) scale(".concat(s.scale, ")")), C = s.scale, o = !1, 1 === s.scale && (T.$slideEl = void 0));
    }

    function p(e) {
      var t = x.zoom;

      if (T.$imageEl && 0 !== T.$imageEl.length && (x.allowClick = !1, E.isTouched && T.$slideEl)) {
        E.isMoved || (E.width = T.$imageEl[0].offsetWidth, E.height = T.$imageEl[0].offsetHeight, E.startX = L(T.$imageWrapEl[0], "x") || 0, E.startY = L(T.$imageWrapEl[0], "y") || 0, T.slideWidth = T.$slideEl[0].offsetWidth, T.slideHeight = T.$slideEl[0].offsetHeight, T.$imageWrapEl.transition(0));
        var n = E.width * t.scale,
            t = E.height * t.scale;

        if (!(n < T.slideWidth && t < T.slideHeight)) {
          if (E.minX = Math.min(T.slideWidth / 2 - n / 2, 0), E.maxX = -E.minX, E.minY = Math.min(T.slideHeight / 2 - t / 2, 0), E.maxY = -E.minY, E.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX, E.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY, !E.isMoved && !o) {
            if (x.isHorizontal() && (Math.floor(E.minX) === Math.floor(E.startX) && E.touchesCurrent.x < E.touchesStart.x || Math.floor(E.maxX) === Math.floor(E.startX) && E.touchesCurrent.x > E.touchesStart.x)) return void (E.isTouched = !1);
            if (!x.isHorizontal() && (Math.floor(E.minY) === Math.floor(E.startY) && E.touchesCurrent.y < E.touchesStart.y || Math.floor(E.maxY) === Math.floor(E.startY) && E.touchesCurrent.y > E.touchesStart.y)) return void (E.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), E.isMoved = !0, E.currentX = E.touchesCurrent.x - E.touchesStart.x + E.startX, E.currentY = E.touchesCurrent.y - E.touchesStart.y + E.startY, E.currentX < E.minX && (E.currentX = E.minX + 1 - Math.pow(E.minX - E.currentX + 1, .8)), E.currentX > E.maxX && (E.currentX = E.maxX - 1 + Math.pow(E.currentX - E.maxX + 1, .8)), E.currentY < E.minY && (E.currentY = E.minY + 1 - Math.pow(E.minY - E.currentY + 1, .8)), E.currentY > E.maxY && (E.currentY = E.maxY - 1 + Math.pow(E.currentY - E.maxY + 1, .8)), l.prevPositionX || (l.prevPositionX = E.touchesCurrent.x), l.prevPositionY || (l.prevPositionY = E.touchesCurrent.y), l.prevTime || (l.prevTime = Date.now()), l.x = (E.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2, l.y = (E.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2, Math.abs(E.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0), Math.abs(E.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0), l.prevPositionX = E.touchesCurrent.x, l.prevPositionY = E.touchesCurrent.y, l.prevTime = Date.now(), T.$imageWrapEl.transform("translate3d(".concat(E.currentX, "px, ").concat(E.currentY, "px,0)"));
        }
      }
    }

    function f() {
      var e = x.zoom;
      T.$slideEl && x.previousIndex !== x.activeIndex && (T.$imageEl && T.$imageEl.transform("translate3d(0,0,0) scale(1)"), T.$imageWrapEl && T.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, C = 1, T.$slideEl = void 0, T.$imageEl = void 0, T.$imageWrapEl = void 0);
    }

    function m(b) {
      var y = x.zoom,
          w = x.params.zoom;

      if (T.$slideEl || (b && b.target && (T.$slideEl = P(b.target).closest("." + x.params.slideClass)), T.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? T.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : T.$slideEl = x.slides.eq(x.activeIndex)), T.$imageEl = T.$slideEl.find("." + w.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), T.$imageWrapEl = T.$imageEl.parent("." + w.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length) {
        var _e91, _t44, _n25, _i19, _s16, _a10, _r7, _o7, _l5, _c7, _d7, _u6, _h4, _p3, _f2, _m, _g3, _v2;

        x.params.cssMode && (x.wrapperEl.style.overflow = "hidden", x.wrapperEl.style.touchAction = "none"), T.$slideEl.addClass("" + w.zoomedSlideClass), _t44 = void 0 === E.touchesStart.x && b ? (_e91 = ("touchend" === b.type ? b.changedTouches[0] : b).pageX, ("touchend" === b.type ? b.changedTouches[0] : b).pageY) : (_e91 = E.touchesStart.x, E.touchesStart.y), y.scale = T.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, C = T.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b ? (_g3 = T.$slideEl[0].offsetWidth, _v2 = T.$slideEl[0].offsetHeight, _n25 = T.$slideEl.offset().left + _.scrollX, _i19 = T.$slideEl.offset().top + _.scrollY, _s16 = _n25 + _g3 / 2 - _e91, _a10 = _i19 + _v2 / 2 - _t44, _l5 = T.$imageEl[0].offsetWidth, _c7 = T.$imageEl[0].offsetHeight, _d7 = _l5 * y.scale, _u6 = _c7 * y.scale, _f2 = -(_h4 = Math.min(_g3 / 2 - _d7 / 2, 0)), _m = -(_p3 = Math.min(_v2 / 2 - _u6 / 2, 0)), _r7 = _s16 * y.scale, _o7 = _a10 * y.scale, _r7 < _h4 && (_r7 = _h4), _r7 > _f2 && (_r7 = _f2), _o7 < _p3 && (_o7 = _p3), _o7 > _m && (_o7 = _m)) : (_r7 = 0, _o7 = 0), T.$imageWrapEl.transition(300).transform("translate3d(".concat(_r7, "px, ").concat(_o7, "px,0)")), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(y.scale, ")"));
      }
    }

    function g() {
      var e = x.zoom,
          t = x.params.zoom;
      T.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? T.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : T.$slideEl = x.slides.eq(x.activeIndex), T.$imageEl = T.$slideEl.find("." + t.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), T.$imageWrapEl = T.$imageEl.parent("." + t.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length && (x.params.cssMode && (x.wrapperEl.style.overflow = "", x.wrapperEl.style.touchAction = ""), e.scale = 1, C = 1, T.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), T.$slideEl.removeClass("" + t.zoomedSlideClass), T.$slideEl = void 0);
    }

    function v(e) {
      var t = x.zoom;
      t.scale && 1 !== t.scale ? g() : m(e);
    }

    function b() {
      var e = x.support;
      return {
        passiveListener: !("touchstart" !== x.touchEvents.start || !e.passiveListener || !x.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !e.passiveListener || {
          passive: !1,
          capture: !0
        }
      };
    }

    function y() {
      return "." + x.params.slideClass;
    }

    function w(e) {
      var t = b().passiveListener,
          n = y();
      x.$wrapperEl[e]("gesturestart", n, d, t), x.$wrapperEl[e]("gesturechange", n, u, t), x.$wrapperEl[e]("gestureend", n, h, t);
    }

    function S() {
      n || (n = !0, w("on"));
    }

    function k() {
      n && (n = !1, w("off"));
    }

    function M() {
      var _b;

      var e = x.zoom;
      var t, n, i, s;
      e.enabled || (e.enabled = !0, t = x.support, (_b = b(), n = _b.passiveListener, i = _b.activeListenerWithCapture, _b), s = y(), t.gestures ? (x.$wrapperEl.on(x.touchEvents.start, S, n), x.$wrapperEl.on(x.touchEvents.end, k, n)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.on(x.touchEvents.start, s, d, n), x.$wrapperEl.on(x.touchEvents.move, s, u, i), x.$wrapperEl.on(x.touchEvents.end, s, h, n), x.touchEvents.cancel && x.$wrapperEl.on(x.touchEvents.cancel, s, h, n)), x.$wrapperEl.on(x.touchEvents.move, "." + x.params.zoom.containerClass, p, i));
    }

    function $() {
      var _b2;

      var e = x.zoom;
      var t, n, i, s;
      e.enabled && (t = x.support, e.enabled = !1, (_b2 = b(), n = _b2.passiveListener, i = _b2.activeListenerWithCapture, _b2), s = y(), t.gestures ? (x.$wrapperEl.off(x.touchEvents.start, S, n), x.$wrapperEl.off(x.touchEvents.end, k, n)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.off(x.touchEvents.start, s, d, n), x.$wrapperEl.off(x.touchEvents.move, s, u, i), x.$wrapperEl.off(x.touchEvents.end, s, h, n), x.touchEvents.cancel && x.$wrapperEl.off(x.touchEvents.cancel, s, h, n)), x.$wrapperEl.off(x.touchEvents.move, "." + x.params.zoom.containerClass, p, i));
    }

    Object.defineProperty(x.zoom, "scale", {
      get: function get() {
        return s;
      },
      set: function set(e) {
        var t, n;
        s !== e && (t = T.$imageEl ? T.$imageEl[0] : void 0, n = T.$slideEl ? T.$slideEl[0] : void 0, i("zoomChange", e, t, n)), s = e;
      }
    }), t("init", function () {
      x.params.zoom.enabled && M();
    }), t("destroy", function () {
      $();
    }), t("touchStart", function (e, t) {
      var n;
      x.zoom.enabled && (n = t, t = x.device, T.$imageEl && 0 !== T.$imageEl.length && (E.isTouched || (t.android && n.cancelable && n.preventDefault(), E.isTouched = !0, E.touchesStart.x = ("touchstart" === n.type ? n.targetTouches[0] : n).pageX, E.touchesStart.y = ("touchstart" === n.type ? n.targetTouches[0] : n).pageY)));
    }), t("touchEnd", function (e, t) {
      x.zoom.enabled && function () {
        var n = x.zoom;

        if (T.$imageEl && 0 !== T.$imageEl.length) {
          if (!E.isTouched || !E.isMoved) return E.isTouched = !1, E.isMoved = !1;
          E.isTouched = !1, E.isMoved = !1;
          var _e92 = 300,
              _t45 = 300;
          var i = l.x * _e92,
              s = E.currentX + i,
              a = l.y * _t45,
              i = E.currentY + a;
          0 !== l.x && (_e92 = Math.abs((s - E.currentX) / l.x)), 0 !== l.y && (_t45 = Math.abs((i - E.currentY) / l.y)), a = Math.max(_e92, _t45), E.currentX = s, E.currentY = i, i = E.width * n.scale, n = E.height * n.scale, E.minX = Math.min(T.slideWidth / 2 - i / 2, 0), E.maxX = -E.minX, E.minY = Math.min(T.slideHeight / 2 - n / 2, 0), E.maxY = -E.minY, E.currentX = Math.max(Math.min(E.currentX, E.maxX), E.minX), E.currentY = Math.max(Math.min(E.currentY, E.maxY), E.minY), T.$imageWrapEl.transition(a).transform("translate3d(".concat(E.currentX, "px, ").concat(E.currentY, "px,0)"));
        }
      }();
    }), t("doubleTap", function (e, t) {
      !x.animating && x.params.zoom.enabled && x.zoom.enabled && x.params.zoom.toggle && v(t);
    }), t("transitionEnd", function () {
      x.zoom.enabled && x.params.zoom.enabled && f();
    }), t("slideChange", function () {
      x.zoom.enabled && x.params.zoom.enabled && x.params.cssMode && f();
    }), Object.assign(x.zoom, {
      enable: M,
      disable: $,
      "in": m,
      out: g,
      toggle: v
    });
  }, function (_ref16) {
    var d = _ref16.swiper,
        e = _ref16.extendParams,
        t = _ref16.on,
        u = _ref16.emit;
    e({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    });
    var h = !(d.lazy = {}),
        c = !1;

    function p(e) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var l = d.params.lazy;

      if (void 0 !== e && 0 !== d.slides.length) {
        var _c8 = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children(".".concat(d.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : d.slides.eq(e),
            _t46 = _c8.find(".".concat(l.elementClass, ":not(.").concat(l.loadedClass, "):not(.").concat(l.loadingClass, ")"));

        !_c8.hasClass(l.elementClass) || _c8.hasClass(l.loadedClass) || _c8.hasClass(l.loadingClass) || _t46.push(_c8[0]), 0 !== _t46.length && _t46.each(function (e) {
          var t = P(e);
          t.addClass(l.loadingClass);
          var n = t.attr("data-background"),
              i = t.attr("data-src"),
              s = t.attr("data-srcset"),
              a = t.attr("data-sizes"),
              r = t.parent("picture");
          d.loadImage(t[0], i || n, s, a, !1, function () {
            var e;
            null == d || !d || d && !d.params || d.destroyed || (n ? (t.css("background-image", "url(\"".concat(n, "\")")), t.removeAttr("data-background")) : (s && (t.attr("srcset", s), t.removeAttr("data-srcset")), a && (t.attr("sizes", a), t.removeAttr("data-sizes")), r.length && r.children("source").each(function (e) {
              var t = P(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), i && (t.attr("src", i), t.removeAttr("data-src"))), t.addClass(l.loadedClass).removeClass(l.loadingClass), _c8.find("." + l.preloaderClass).remove(), d.params.loop && o && (e = _c8.attr("data-swiper-slide-index"), _c8.hasClass(d.params.slideDuplicateClass) ? p(d.$wrapperEl.children("[data-swiper-slide-index=\"".concat(e, "\"]:not(.").concat(d.params.slideDuplicateClass, ")")).index(), !1) : p(d.$wrapperEl.children(".".concat(d.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).index(), !1)), u("lazyImageReady", _c8[0], t[0]), d.params.autoHeight && d.updateAutoHeight());
          }), u("lazyImageLoad", _c8[0], t[0]);
        });
      }
    }

    function f() {
      var t = d.$wrapperEl,
          n = d.params,
          i = d.slides,
          s = d.activeIndex,
          a = d.virtual && n.virtual.enabled,
          e = n.lazy;
      var r = n.slidesPerView;

      function o(e) {
        return a ? !!t.children(".".concat(n.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length : !!i[e];
      }

      function l(e) {
        return a ? P(e).attr("data-swiper-slide-index") : P(e).index();
      }

      if ("auto" === r && (r = 0), c = c || !0, d.params.watchSlidesProgress) t.children("." + n.slideVisibleClass).each(function (e) {
        p(a ? P(e).attr("data-swiper-slide-index") : P(e).index());
      });else if (1 < r) for (var _e93 = s; _e93 < s + r; _e93 += 1) {
        o(_e93) && p(_e93);
      } else p(s);
      if (e.loadPrevNext) if (1 < r || e.loadPrevNextAmount && 1 < e.loadPrevNextAmount) {
        var _d8 = e.loadPrevNextAmount,
            _t47 = r,
            _n26 = Math.min(s + _t47 + Math.max(_d8, _t47), i.length),
            _a11 = Math.max(s - Math.max(_t47, _d8), 0);

        for (var _e94 = s + r; _e94 < _n26; _e94 += 1) {
          o(_e94) && p(_e94);
        }

        for (var _e95 = _a11; _e95 < s; _e95 += 1) {
          o(_e95) && p(_e95);
        }
      } else {
        var _d9 = t.children("." + n.slideNextClass);

        0 < _d9.length && p(l(_d9));

        var _i20 = t.children("." + n.slidePrevClass);

        0 < _i20.length && p(l(_i20));
      }
    }

    function m() {
      var n = D();

      if (d && !d.destroyed) {
        var _s17 = d.params.lazy.scrollingElement ? P(d.params.lazy.scrollingElement) : P(n),
            _a12 = _s17[0] === n,
            _r8 = _a12 ? n.innerWidth : _s17[0].offsetWidth,
            _o8 = _a12 ? n.innerHeight : _s17[0].offsetHeight,
            _l6 = d.$el.offset(),
            _c9 = d.rtlTranslate;

        var _t48 = !1;

        _c9 && (_l6.left -= d.$el[0].scrollLeft);
        var i = [[_l6.left, _l6.top], [_l6.left + d.width, _l6.top], [_l6.left, _l6.top + d.height], [_l6.left + d.width, _l6.top + d.height]];

        for (var _e96 = 0; _e96 < i.length; _e96 += 1) {
          var _n27 = i[_e96];
          0 <= _n27[0] && _n27[0] <= _r8 && 0 <= _n27[1] && _n27[1] <= _o8 && (0 === _n27[0] && 0 === _n27[1] || (_t48 = !0));
        }

        var e = !("touchstart" !== d.touchEvents.start || !d.support.passiveListener || !d.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        _t48 ? (f(), _s17.off("scroll", m, e)) : h || (h = !0, _s17.on("scroll", m, e));
      }
    }

    t("beforeInit", function () {
      d.params.lazy.enabled && d.params.preloadImages && (d.params.preloadImages = !1);
    }), t("init", function () {
      d.params.lazy.enabled && (d.params.lazy.checkInView ? m : f)();
    }), t("scroll", function () {
      d.params.freeMode && d.params.freeMode.enabled && !d.params.freeMode.sticky && f();
    }), t("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
      d.params.lazy.enabled && (d.params.lazy.checkInView ? m : f)();
    }), t("transitionStart", function () {
      d.params.lazy.enabled && (d.params.lazy.loadOnTransitionStart || !d.params.lazy.loadOnTransitionStart && !c) && (d.params.lazy.checkInView ? m : f)();
    }), t("transitionEnd", function () {
      d.params.lazy.enabled && !d.params.lazy.loadOnTransitionStart && (d.params.lazy.checkInView ? m : f)();
    }), t("slideChange", function () {
      var _d$params = d.params,
          e = _d$params.lazy,
          t = _d$params.cssMode,
          n = _d$params.watchSlidesProgress,
          i = _d$params.touchReleaseOnEdges,
          s = _d$params.resistanceRatio;
      e.enabled && (t || n && (i || 0 === s)) && f();
    }), Object.assign(d.lazy, {
      load: f,
      loadInSlide: p
    });
  }, function (_ref17) {
    var o = _ref17.swiper,
        e = _ref17.extendParams,
        t = _ref17.on;

    function l(e, t) {
      var n = function () {
        var n, i, s;
        return function (e, t) {
          for (i = -1, n = e.length; 1 < n - i;) {
            s = n + i >> 1, e[s] <= t ? i = s : n = s;
          }

          return n;
        };
      }();

      var i, s;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (s = n(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0;
      }, this;
    }

    function n() {
      o.controller.control && o.controller.spline && (o.controller.spline = void 0, delete o.controller.spline);
    }

    e({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), o.controller = {
      control: void 0
    }, t("beforeInit", function () {
      o.controller.control = o.params.controller.control;
    }), t("update", function () {
      n();
    }), t("resize", function () {
      n();
    }), t("observerUpdate", function () {
      n();
    }), t("setTranslate", function (e, t, n) {
      o.controller.control && o.controller.setTranslate(t, n);
    }), t("setTransition", function (e, t, n) {
      o.controller.control && o.controller.setTransition(t, n);
    }), Object.assign(o.controller, {
      setTranslate: function setTranslate(e, t) {
        var n = o.controller.control;
        var i, s;
        var a = o.constructor;

        function r(e) {
          var t,
              n = o.rtlTranslate ? -o.translate : o.translate;
          "slide" === o.params.controller.by && (t = e, o.controller.spline || (o.controller.spline = o.params.loop ? new l(o.slidesGrid, t.slidesGrid) : new l(o.snapGrid, t.snapGrid)), s = -o.controller.spline.interpolate(-n)), s && "container" !== o.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()), s = (n - o.minTranslate()) * i + e.minTranslate()), o.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, o), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(n)) for (var _e97 = 0; _e97 < n.length; _e97 += 1) {
          n[_e97] !== t && n[_e97] instanceof a && r(n[_e97]);
        } else n instanceof a && t !== n && r(n);
      },
      setTransition: function setTransition(t, e) {
        var n = o.constructor,
            i = o.controller.control;
        var s;

        function a(e) {
          e.setTransition(t, o), 0 !== t && (e.transitionStart(), e.params.autoHeight && C(function () {
            e.updateAutoHeight();
          }), e.$wrapperEl.transitionEnd(function () {
            i && (e.params.loop && "slide" === o.params.controller.by && e.loopFix(), e.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (s = 0; s < i.length; s += 1) {
          i[s] !== e && i[s] instanceof n && a(i[s]);
        } else i instanceof n && e !== i && a(i);
      }
    });
  }, function (_ref18) {
    var l = _ref18.swiper,
        e = _ref18.extendParams,
        t = _ref18.on;
    e({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group"
      }
    });
    var c = null;

    function i(e) {
      var t = c;
      0 !== t.length && (t.html(""), t.html(e));
    }

    function s(e) {
      e.attr("tabIndex", "0");
    }

    function n(e) {
      e.attr("tabIndex", "-1");
    }

    function d(e, t) {
      e.attr("role", t);
    }

    function u(e, t) {
      e.attr("aria-roledescription", t);
    }

    function h(e, t) {
      e.attr("aria-label", t);
    }

    function a(e) {
      e.attr("aria-disabled", !0);
    }

    function r(e) {
      e.attr("aria-disabled", !1);
    }

    function p(e) {
      if (13 === e.keyCode || 32 === e.keyCode) {
        var _t49 = l.params.a11y,
            _n28 = P(e.target);

        l.navigation && l.navigation.$nextEl && _n28.is(l.navigation.$nextEl) && (l.isEnd && !l.params.loop || l.slideNext(), l.isEnd ? i(_t49.lastSlideMessage) : i(_t49.nextSlideMessage)), l.navigation && l.navigation.$prevEl && _n28.is(l.navigation.$prevEl) && (l.isBeginning && !l.params.loop || l.slidePrev(), l.isBeginning ? i(_t49.firstSlideMessage) : i(_t49.prevSlideMessage)), l.pagination && _n28.is(A(l.params.pagination.bulletClass)) && _n28[0].click();
      }
    }

    function o() {
      var _l$navigation;

      var e, t;
      l.params.loop || l.params.rewind || !l.navigation || ((_l$navigation = l.navigation, e = _l$navigation.$nextEl, t = _l$navigation.$prevEl, _l$navigation), t && 0 < t.length && (l.isBeginning ? (a(t), n(t)) : (r(t), s(t))), e && 0 < e.length && (l.isEnd ? (a(e), n(e)) : (r(e), s(e))));
    }

    function f() {
      return l.pagination && l.pagination.bullets && l.pagination.bullets.length;
    }

    function m() {
      return f() && l.params.pagination.clickable;
    }

    var g = function g(e, t, n) {
      s(e), "BUTTON" !== e[0].tagName && (d(e, "button"), e.on("keydown", p)), h(e, n), e.attr("aria-controls", t);
    };

    t("beforeInit", function () {
      c = P("<span class=\"".concat(l.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), t("afterInit", function () {
      l.params.a11y.enabled && (function () {
        var s = l.params.a11y;
        l.$el.append(c);
        var e = l.$el;
        s.containerRoleDescriptionMessage && u(e, s.containerRoleDescriptionMessage), s.containerMessage && h(e, s.containerMessage);
        var t = l.$wrapperEl,
            n = t.attr("id") || "swiper-wrapper-" + "x".repeat(16).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        }),
            i = l.params.autoplay && l.params.autoplay.enabled ? "off" : "polite";
        t.attr("id", n), t.attr("aria-live", i), s.itemRoleDescriptionMessage && u(P(l.slides), s.itemRoleDescriptionMessage), d(P(l.slides), s.slideRole);
        var a = (l.params.loop ? l.slides.filter(function (e) {
          return !e.classList.contains(l.params.slideDuplicateClass);
        }) : l.slides).length;
        var r, o;
        l.slides.each(function (e, t) {
          var n = P(e),
              i = l.params.loop ? parseInt(n.attr("data-swiper-slide-index"), 10) : t;
          h(n, s.slideLabelMessage.replace(/\{\{index\}\}/, i + 1).replace(/\{\{slidesLength\}\}/, a));
        }), l.navigation && l.navigation.$nextEl && (r = l.navigation.$nextEl), l.navigation && l.navigation.$prevEl && (o = l.navigation.$prevEl), r && r.length && g(r, n, s.nextSlideMessage), o && o.length && g(o, n, s.prevSlideMessage), m() && l.pagination.$el.on("keydown", A(l.params.pagination.bulletClass), p);
      }(), o());
    }), t("toEdge", function () {
      l.params.a11y.enabled && o();
    }), t("fromEdge", function () {
      l.params.a11y.enabled && o();
    }), t("paginationUpdate", function () {
      l.params.a11y.enabled && function () {
        var n = l.params.a11y;
        f() && l.pagination.bullets.each(function (e) {
          var t = P(e);
          l.params.pagination.clickable && (s(t), l.params.pagination.renderBullet || (d(t, "button"), h(t, n.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1)))), t.is("." + l.params.pagination.bulletActiveClass) ? t.attr("aria-current", "true") : t.removeAttr("aria-current");
        });
      }();
    }), t("destroy", function () {
      l.params.a11y.enabled && function () {
        var e, t;
        c && 0 < c.length && c.remove(), l.navigation && l.navigation.$nextEl && (e = l.navigation.$nextEl), l.navigation && l.navigation.$prevEl && (t = l.navigation.$prevEl), e && e.off("keydown", p), t && t.off("keydown", p), m() && l.pagination.$el.off("keydown", A(l.params.pagination.bulletClass), p);
      }();
    });
  }, function (_ref19) {
    var r = _ref19.swiper,
        e = _ref19.extendParams,
        t = _ref19.on;
    e({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides"
      }
    });
    var o = !1,
        n = {};

    var l = function l(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
        i = function i(e) {
      var t = D();
      var n;
      return n = e ? new URL(e) : t.location, {
        key: (e = n.pathname.slice(1).split("/").filter(function (e) {
          return "" !== e;
        }))[(t = e.length) - 2],
        value: e[t - 1]
      };
    },
        s = function s(n, i) {
      var s = D();

      if (o && r.params.history.enabled) {
        var _e98;

        _e98 = r.params.url ? new URL(r.params.url) : s.location;

        var _a13 = r.slides.eq(i);

        var _t50 = l(_a13.attr("data-history"));

        if (0 < r.params.history.root.length) {
          var _e99 = r.params.history.root;
          "/" === _e99[_e99.length - 1] && (_e99 = _e99.slice(0, _e99.length - 1)), _t50 = _e99 + "/".concat(n, "/") + _t50;
        } else _e98.pathname.includes(n) || (_t50 = n + "/" + _t50);

        (n = s.history.state) && n.value === _t50 || (r.params.history.replaceState ? s.history.replaceState({
          value: _t50
        }, null, _t50) : s.history.pushState({
          value: _t50
        }, null, _t50));
      }
    },
        a = function a(n, i, s) {
      if (i) for (var _e100 = 0, _t51 = r.slides.length; _e100 < _t51; _e100 += 1) {
        var _a14 = r.slides.eq(_e100);

        if (l(_a14.attr("data-history")) === i && !_a14.hasClass(r.params.slideDuplicateClass)) {
          var _i21 = _a14.index();

          r.slideTo(_i21, n, s);
        }
      } else r.slideTo(0, n, s);
    },
        c = function c() {
      n = i(r.params.url), a(r.params.speed, r.paths.value, !1);
    };

    t("init", function () {
      r.params.history.enabled && function () {
        var e = D();

        if (r.params.history) {
          if (!e.history || !e.history.pushState) return r.params.history.enabled = !1, r.params.hashNavigation.enabled = !0;
          o = !0, n = i(r.params.url), (n.key || n.value) && (a(0, n.value, r.params.runCallbacksOnInit), r.params.history.replaceState || e.addEventListener("popstate", c));
        }
      }();
    }), t("destroy", function () {
      r.params.history.enabled && function () {
        var e = D();
        r.params.history.replaceState || e.removeEventListener("popstate", c);
      }();
    }), t("transitionEnd _freeModeNoMomentumRelease", function () {
      o && s(r.params.history.key, r.activeIndex);
    }), t("slideChange", function () {
      o && r.params.cssMode && s(r.params.history.key, r.activeIndex);
    });
  }, function (_ref20) {
    var a = _ref20.swiper,
        e = _ref20.extendParams,
        n = _ref20.emit,
        t = _ref20.on;
    var r = !1;

    var o = _(),
        l = D();

    e({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    });

    var c = function c() {
      n("hashChange");
      var e = o.location.hash.replace("#", "");

      if (e !== a.slides.eq(a.activeIndex).attr("data-hash")) {
        var _n29 = a.$wrapperEl.children(".".concat(a.params.slideClass, "[data-hash=\"").concat(e, "\"]")).index();

        void 0 !== _n29 && a.slideTo(_n29);
      }
    },
        i = function i() {
      if (r && a.params.hashNavigation.enabled) if (a.params.hashNavigation.replaceState && l.history && l.history.replaceState) l.history.replaceState(null, null, "#" + a.slides.eq(a.activeIndex).attr("data-hash") || ""), n("hashSet");else {
        var _e101 = a.slides.eq(a.activeIndex),
            _t52 = _e101.attr("data-hash") || _e101.attr("data-history");

        o.location.hash = _t52 || "", n("hashSet");
      }
    };

    t("init", function () {
      a.params.hashNavigation.enabled && function () {
        if (!(!a.params.hashNavigation.enabled || a.params.history && a.params.history.enabled)) {
          r = !0;
          var n,
              i = o.location.hash.replace("#", "");
          if (i) for (var _e102 = 0, _t53 = a.slides.length; _e102 < _t53; _e102 += 1) {
            var _s18 = a.slides.eq(_e102);

            (_s18.attr("data-hash") || _s18.attr("data-history")) !== i || _s18.hasClass(a.params.slideDuplicateClass) || (n = _s18.index(), a.slideTo(n, 0, a.params.runCallbacksOnInit, !0));
          }
          a.params.hashNavigation.watchState && P(l).on("hashchange", c);
        }
      }();
    }), t("destroy", function () {
      a.params.hashNavigation.enabled && a.params.hashNavigation.watchState && P(l).off("hashchange", c);
    }), t("transitionEnd _freeModeNoMomentumRelease", function () {
      r && i();
    }), t("slideChange", function () {
      r && a.params.cssMode && i();
    });
  }, function (_ref21) {
    var i = _ref21.swiper,
        e = _ref21.extendParams,
        t = _ref21.on,
        n = _ref21.emit;
    var s;

    function a() {
      var e = i.slides.eq(i.activeIndex);
      var t = i.params.autoplay.delay;
      e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || i.params.autoplay.delay), clearTimeout(s), s = C(function () {
        var e;
        i.params.autoplay.reverseDirection ? i.params.loop ? (i.loopFix(), e = i.slidePrev(i.params.speed, !0, !0), n("autoplay")) : i.isBeginning ? i.params.autoplay.stopOnLastSlide ? o() : (e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0), n("autoplay")) : (e = i.slidePrev(i.params.speed, !0, !0), n("autoplay")) : i.params.loop ? (i.loopFix(), e = i.slideNext(i.params.speed, !0, !0), n("autoplay")) : i.isEnd ? i.params.autoplay.stopOnLastSlide ? o() : (e = i.slideTo(0, i.params.speed, !0, !0), n("autoplay")) : (e = i.slideNext(i.params.speed, !0, !0), n("autoplay")), (i.params.cssMode && i.autoplay.running || !1 === e) && a();
      }, t);
    }

    function r() {
      return void 0 === s && !i.autoplay.running && (i.autoplay.running = !0, n("autoplayStart"), a(), !0);
    }

    function o() {
      return !!i.autoplay.running && void 0 !== s && (s && (clearTimeout(s), s = void 0), i.autoplay.running = !1, n("autoplayStop"), !0);
    }

    function l(e) {
      i.autoplay.running && (i.autoplay.paused || (s && clearTimeout(s), i.autoplay.paused = !0, 0 !== e && i.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        i.$wrapperEl[0].addEventListener(e, d);
      }) : (i.autoplay.paused = !1, a())));
    }

    function c() {
      var e = _();

      "hidden" === e.visibilityState && i.autoplay.running && l(), "visible" === e.visibilityState && i.autoplay.paused && (a(), i.autoplay.paused = !1);
    }

    function d(e) {
      i && !i.destroyed && i.$wrapperEl && e.target === i.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        i.$wrapperEl[0].removeEventListener(e, d);
      }), i.autoplay.paused = !1, (i.autoplay.running ? a : o)());
    }

    function u() {
      (i.params.autoplay.disableOnInteraction ? o : l)(), ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        i.$wrapperEl[0].removeEventListener(e, d);
      });
    }

    function h() {
      i.params.autoplay.disableOnInteraction || (i.autoplay.paused = !1, a());
    }

    e({
      autoplay: {
        enabled: !(i.autoplay = {
          running: !1,
          paused: !1
        }),
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), t("init", function () {
      i.params.autoplay.enabled && (r(), _().addEventListener("visibilitychange", c), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", u), i.$el.on("mouseleave", h)));
    }), t("beforeTransitionStart", function (e, t, n) {
      i.autoplay.running && (n || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : o());
    }), t("sliderFirstMove", function () {
      i.autoplay.running && (i.params.autoplay.disableOnInteraction ? o : l)();
    }), t("touchEnd", function () {
      i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && a();
    }), t("destroy", function () {
      i.$el.off("mouseenter", u), i.$el.off("mouseleave", h), i.autoplay.running && o(), _().removeEventListener("visibilitychange", c);
    }), Object.assign(i.autoplay, {
      pause: l,
      run: a,
      start: r,
      stop: o
    });
  }, function (_ref22) {
    var c = _ref22.swiper,
        e = _ref22.extendParams,
        t = _ref22.on;
    e({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    var n = !1,
        i = !1;

    function s() {
      var n = c.thumbs.swiper;

      if (n) {
        var i = n.clickedIndex,
            e = n.clickedSlide;

        if (!(e && P(e).hasClass(c.params.thumbs.slideThumbActiveClass) || null == i)) {
          var _t54;

          if (_t54 = n.params.loop ? parseInt(P(n.clickedSlide).attr("data-swiper-slide-index"), 10) : i, c.params.loop) {
            var _e103 = c.activeIndex;
            c.slides.eq(_e103).hasClass(c.params.slideDuplicateClass) && (c.loopFix(), c._clientLeft = c.$wrapperEl[0].clientLeft, _e103 = c.activeIndex);
            n = c.slides.eq(_e103).prevAll("[data-swiper-slide-index=\"".concat(_t54, "\"]")).eq(0).index(), i = c.slides.eq(_e103).nextAll("[data-swiper-slide-index=\"".concat(_t54, "\"]")).eq(0).index();
            _t54 = void 0 === n || void 0 !== i && i - _e103 < _e103 - n ? i : n;
          }

          c.slideTo(_t54);
        }
      }
    }

    function a() {
      var e = c.params.thumbs;
      if (n) return !1;
      n = !0;
      var t = c.constructor;
      if (e.swiper instanceof t) c.thumbs.swiper = e.swiper, Object.assign(c.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(c.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      });else if (d(e.swiper)) {
        var _n30 = Object.assign({}, e.swiper);

        Object.assign(_n30, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), c.thumbs.swiper = new t(_n30), i = !0;
      }
      return c.thumbs.swiper.$el.addClass(c.params.thumbs.thumbsContainerClass), c.thumbs.swiper.on("tap", s), !0;
    }

    function r(i) {
      var s = c.thumbs.swiper;

      if (s) {
        var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
            r = c.params.thumbs.autoScrollOffset,
            o = r && !s.params.loop;

        if (c.realIndex !== s.realIndex || o) {
          var _e104,
              _t56,
              _n31 = s.activeIndex;

          if (s.params.loop) {
            s.slides.eq(_n31).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _n31 = s.activeIndex);

            var _i22 = s.slides.eq(_n31).prevAll("[data-swiper-slide-index=\"".concat(c.realIndex, "\"]")).eq(0).index(),
                _l7 = s.slides.eq(_n31).nextAll("[data-swiper-slide-index=\"".concat(c.realIndex, "\"]")).eq(0).index();

            _e104 = void 0 === _i22 ? _l7 : void 0 === _l7 ? _i22 : _l7 - _n31 == _n31 - _i22 ? 1 < s.params.slidesPerGroup ? _l7 : _n31 : _l7 - _n31 < _n31 - _i22 ? _l7 : _i22, _t56 = c.activeIndex > c.previousIndex ? "next" : "prev";
          } else _e104 = c.realIndex, _t56 = _e104 > c.previousIndex ? "next" : "prev";

          o && (_e104 += "next" === _t56 ? r : -1 * r), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_e104) < 0 && (s.params.centeredSlides ? _e104 = _e104 > _n31 ? _e104 - Math.floor(a / 2) + 1 : _e104 + Math.floor(a / 2) - 1 : _e104 > _n31 && s.params.slidesPerGroup, s.slideTo(_e104, i ? 0 : void 0));
        }

        var _t55 = 1;
        var n = c.params.thumbs.slideThumbActiveClass;
        if (1 < c.params.slidesPerView && !c.params.centeredSlides && (_t55 = c.params.slidesPerView), c.params.thumbs.multipleActiveThumbs || (_t55 = 1), _t55 = Math.floor(_t55), s.slides.removeClass(n), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _e105 = 0; _e105 < _t55; _e105 += 1) {
          s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(c.realIndex + _e105, "\"]")).addClass(n);
        } else for (var _e106 = 0; _e106 < _t55; _e106 += 1) {
          s.slides.eq(c.realIndex + _e106).addClass(n);
        }
      }
    }

    c.thumbs = {
      swiper: null
    }, t("beforeInit", function () {
      var e = c.params.thumbs;
      e && e.swiper && (a(), r(!0));
    }), t("slideChange update resize observerUpdate", function () {
      c.thumbs.swiper && r();
    }), t("setTransition", function (e, t) {
      var n = c.thumbs.swiper;
      n && n.setTransition(t);
    }), t("beforeDestroy", function () {
      var e = c.thumbs.swiper;
      e && i && e && e.destroy();
    }), Object.assign(c.thumbs, {
      init: a,
      update: r
    });
  }, function (_ref23) {
    var p = _ref23.swiper,
        e = _ref23.extendParams,
        f = _ref23.emit,
        m = _ref23.once;
    e({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(p, {
      freeMode: {
        onTouchMove: function onTouchMove() {
          var e = p.touchEventsData,
              t = p.touches;
          0 === e.velocities.length && e.velocities.push({
            position: t[p.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: t[p.isHorizontal() ? "currentX" : "currentY"],
            time: g()
          });
        },
        onTouchEnd: function onTouchEnd(_ref24) {
          var a = _ref24.currentPos;
          var r = p.params,
              o = p.$wrapperEl,
              l = p.rtlTranslate,
              c = p.snapGrid,
              d = p.touchEventsData,
              u = g() - d.touchStartTime;
          if (a < -p.minTranslate()) p.slideTo(p.activeIndex);else if (a > -p.maxTranslate()) p.slides.length < c.length ? p.slideTo(c.length - 1) : p.slideTo(p.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (1 < d.velocities.length) {
                var _h5 = d.velocities.pop(),
                    _f3 = d.velocities.pop(),
                    _m2 = _h5.position - _f3.position,
                    _o9 = _h5.time - _f3.time;

                p.velocity = _m2 / _o9, p.velocity /= 2, Math.abs(p.velocity) < r.freeMode.minimumVelocity && (p.velocity = 0), (150 < _o9 || 300 < g() - _h5.time) && (p.velocity = 0);
              } else p.velocity = 0;

              p.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;

              var _e107 = 1e3 * r.freeMode.momentumRatio;

              var _u7 = p.velocity * _e107;

              var _n32 = p.translate + _u7;

              l && (_n32 = -_n32);

              var _t57,
                  _i23 = !1;

              a = 20 * Math.abs(p.velocity) * r.freeMode.momentumBounceRatio;

              var _s19;

              if (_n32 < p.maxTranslate()) r.freeMode.momentumBounce ? (_n32 + p.maxTranslate() < -a && (_n32 = p.maxTranslate() - a), _t57 = p.maxTranslate(), _i23 = !0, d.allowMomentumBounce = !0) : _n32 = p.maxTranslate(), r.loop && r.centeredSlides && (_s19 = !0);else if (_n32 > p.minTranslate()) r.freeMode.momentumBounce ? (_n32 - p.minTranslate() > a && (_n32 = p.minTranslate() + a), _t57 = p.minTranslate(), _i23 = !0, d.allowMomentumBounce = !0) : _n32 = p.minTranslate(), r.loop && r.centeredSlides && (_s19 = !0);else if (r.freeMode.sticky) {
                var _t58;

                for (var _e108 = 0; _e108 < c.length; _e108 += 1) {
                  if (c[_e108] > -_n32) {
                    _t58 = _e108;
                    break;
                  }
                }

                _n32 = Math.abs(c[_t58] - _n32) < Math.abs(c[_t58 - 1] - _n32) || "next" === p.swipeDirection ? c[_t58] : c[_t58 - 1], _n32 = -_n32;
              }

              if (_s19 && m("transitionEnd", function () {
                p.loopFix();
              }), 0 !== p.velocity) {
                if (_e107 = l ? Math.abs((-_n32 - p.translate) / p.velocity) : Math.abs((_n32 - p.translate) / p.velocity), r.freeMode.sticky) {
                  var _f4 = Math.abs((l ? -_n32 : _n32) - p.translate),
                      _m3 = p.slidesSizesGrid[p.activeIndex];

                  _e107 = _f4 < _m3 ? r.speed : _f4 < 2 * _m3 ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void p.slideToClosest();

              r.freeMode.momentumBounce && _i23 ? (p.updateProgress(_t57), p.setTransition(_e107), p.setTranslate(_n32), p.transitionStart(!0, p.swipeDirection), p.animating = !0, o.transitionEnd(function () {
                p && !p.destroyed && d.allowMomentumBounce && (f("momentumBounce"), p.setTransition(r.speed), setTimeout(function () {
                  p.setTranslate(_t57), o.transitionEnd(function () {
                    p && !p.destroyed && p.transitionEnd();
                  });
                }, 0));
              })) : p.velocity ? (f("_freeModeNoMomentumRelease"), p.updateProgress(_n32), p.setTransition(_e107), p.setTranslate(_n32), p.transitionStart(!0, p.swipeDirection), p.animating || (p.animating = !0, o.transitionEnd(function () {
                p && !p.destroyed && p.transitionEnd();
              }))) : p.updateProgress(_n32), p.updateActiveIndex(), p.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void p.slideToClosest();
              r.freeMode && f("_freeModeNoMomentumRelease");
            }

            (!r.freeMode.momentum || u >= r.longSwipesMs) && (p.updateProgress(), p.updateActiveIndex(), p.updateSlidesClasses());
          }
        }
      }
    });
  }, function (_ref25) {
    var u = _ref25.swiper,
        e = _ref25.extendParams;
    var h, p, f;
    e({
      grid: {
        rows: 1,
        fill: "column"
      }
    }), u.grid = {
      initSlides: function initSlides(e) {
        var t = u.params.slidesPerView,
            _u$params$grid = u.params.grid,
            n = _u$params$grid.rows,
            i = _u$params$grid.fill;
        p = h / n, f = Math.floor(e / n), h = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== t && "row" === i && (h = Math.max(h, t * n));
      },
      updateSlide: function updateSlide(e, t, n, i) {
        var _u$params = u.params,
            s = _u$params.slidesPerGroup,
            a = _u$params.spaceBetween,
            _u$params$grid2 = u.params.grid,
            r = _u$params$grid2.rows,
            o = _u$params$grid2.fill;
        var l, c, d;

        if ("row" === o && 1 < s) {
          var _u8 = Math.floor(e / (s * r)),
              _p4 = e - r * s * _u8,
              _f5 = 0 === _u8 ? s : Math.min(Math.ceil((n - _u8 * r * s) / r), s);

          d = Math.floor(_p4 / _f5), c = _p4 - d * _f5 + _u8 * s, l = c + d * h / r, t.css({
            "-webkit-order": l,
            order: l
          });
        } else "column" === o ? (c = Math.floor(e / r), d = e - c * r, (c > f || c === f && d === r - 1) && (d += 1, d >= r && (d = 0, c += 1))) : (d = Math.floor(e / p), c = e - d * p);

        t.css(i("margin-top"), 0 !== d ? a && a + "px" : "");
      },
      updateWrapperSize: function updateWrapperSize(n, i, e) {
        var _u$params2 = u.params,
            t = _u$params2.spaceBetween,
            s = _u$params2.centeredSlides,
            a = _u$params2.roundLengths,
            r = u.params.grid.rows;

        if (u.virtualSize = (n + t) * h, u.virtualSize = Math.ceil(u.virtualSize / r) - t, u.$wrapperEl.css(_defineProperty({}, e("width"), u.virtualSize + t + "px")), s) {
          i.splice(0, i.length);
          var _n33 = [];

          for (var _t59 = 0; _t59 < i.length; _t59 += 1) {
            var _e109 = i[_t59];
            a && (_e109 = Math.floor(_e109)), i[_t59] < u.virtualSize + i[0] && _n33.push(_e109);
          }

          i.push.apply(i, _n33);
        }
      }
    };
  }, function (_ref26) {
    var e = _ref26.swiper;
    Object.assign(e, {
      appendSlide: function (t) {
        var n = this.$wrapperEl,
            e = this.params;
        if (e.loop && this.loopDestroy(), "object" == _typeof(t) && "length" in t) for (var _e110 = 0; _e110 < t.length; _e110 += 1) {
          t[_e110] && n.append(t[_e110]);
        } else n.append(t);
        e.loop && this.loopCreate(), e.observer || this.update();
      }.bind(e),
      prependSlide: function (t) {
        var e = this.params,
            n = this.$wrapperEl,
            i = this.activeIndex;
        e.loop && this.loopDestroy();
        var s = i + 1;

        if ("object" == _typeof(t) && "length" in t) {
          for (var _e111 = 0; _e111 < t.length; _e111 += 1) {
            t[_e111] && n.prepend(t[_e111]);
          }

          s = i + t.length;
        } else n.prepend(t);

        e.loop && this.loopCreate(), e.observer || this.update(), this.slideTo(s, 0, !1);
      }.bind(e),
      addSlide: function (t, n) {
        var i = this,
            s = i.$wrapperEl,
            a = i.params,
            e = i.activeIndex;
        var r = e;
        a.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = s.children("." + a.slideClass));
        var o = i.slides.length;
        if (t <= 0) i.prependSlide(n);else if (o <= t) i.appendSlide(n);else {
          var _e112 = r > t ? r + 1 : r;

          var _l8 = [];

          for (var _e113 = o - 1; _e113 >= t; --_e113) {
            var _t60 = i.slides.eq(_e113);

            _t60.remove(), _l8.unshift(_t60);
          }

          if ("object" == _typeof(n) && "length" in n) {
            for (var _e114 = 0; _e114 < n.length; _e114 += 1) {
              n[_e114] && s.append(n[_e114]);
            }

            _e112 = r > t ? r + n.length : r;
          } else s.append(n);

          for (var _e115 = 0; _e115 < _l8.length; _e115 += 1) {
            s.append(_l8[_e115]);
          }

          a.loop && i.loopCreate(), a.observer || i.update(), a.loop ? i.slideTo(_e112 + i.loopedSlides, 0, !1) : i.slideTo(_e112, 0, !1);
        }
      }.bind(e),
      removeSlide: function (t) {
        var n = this,
            e = n.params,
            i = n.$wrapperEl,
            s = n.activeIndex;
        var a = s;
        e.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + e.slideClass));
        var r,
            o = a;

        if ("object" == _typeof(t) && "length" in t) {
          for (var _e116 = 0; _e116 < t.length; _e116 += 1) {
            r = t[_e116], n.slides[r] && n.slides.eq(r).remove(), r < o && --o;
          }

          o = Math.max(o, 0);
        } else r = t, n.slides[r] && n.slides.eq(r).remove(), r < o && --o, o = Math.max(o, 0);

        e.loop && n.loopCreate(), e.observer || n.update(), e.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1);
      }.bind(e),
      removeAllSlides: function () {
        var t = [];

        for (var _e117 = 0; _e117 < this.slides.length; _e117 += 1) {
          t.push(_e117);
        }

        this.removeSlide(t);
      }.bind(e)
    });
  }, function (_ref27) {
    var r = _ref27.swiper,
        e = _ref27.extendParams,
        t = _ref27.on;
    e({
      fadeEffect: {
        crossFade: !1,
        transformEl: null
      }
    }), O({
      effect: "fade",
      swiper: r,
      on: t,
      setTranslate: function setTranslate() {
        var i = r.slides,
            s = r.params.fadeEffect;

        for (var _n34 = 0; _n34 < i.length; _n34 += 1) {
          var _i24 = r.slides.eq(_n34);

          var _e118 = -_i24[0].swiperSlideOffset;

          r.params.virtualTranslate || (_e118 -= r.translate);
          var _t61 = 0;
          r.isHorizontal() || (_t61 = _e118, _e118 = 0);
          var a = r.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_i24[0].progress), 0) : 1 + Math.min(Math.max(_i24[0].progress, -1), 0);
          I(s, _i24).css({
            opacity: a
          }).transform("translate3d(".concat(_e118, "px, ").concat(_t61, "px, 0px)"));
        }
      },
      setTransition: function setTransition(e) {
        var t = r.params.fadeEffect.transformEl;
        (t ? r.slides.find(t) : r.slides).transition(e), N({
          swiper: r,
          duration: e,
          transformEl: t,
          allSlides: !0
        });
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !r.params.cssMode
        };
      }
    });
  }, function (_ref28) {
    var a = _ref28.swiper,
        e = _ref28.extendParams,
        t = _ref28.on;
    e({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    }), O({
      effect: "cube",
      swiper: a,
      on: t,
      setTranslate: function setTranslate() {
        var o = a.$el,
            e = a.$wrapperEl,
            l = a.slides,
            t = a.width,
            n = a.height,
            c = a.rtlTranslate,
            d = a.size,
            u = a.browser,
            h = a.params.cubeEffect,
            p = a.isHorizontal(),
            f = a.virtual && a.params.virtual.enabled;
        var i,
            m = 0;
        h.shadow && (p ? (i = e.find(".swiper-cube-shadow"), 0 === i.length && (i = P('<div class="swiper-cube-shadow"></div>'), e.append(i)), i.css({
          height: t + "px"
        })) : (i = o.find(".swiper-cube-shadow"), 0 === i.length && (i = P('<div class="swiper-cube-shadow"></div>'), o.append(i))));

        for (var _r9 = 0; _r9 < l.length; _r9 += 1) {
          var _o10 = l.eq(_r9);

          var _e119 = _r9;
          f && (_e119 = parseInt(_o10.attr("data-swiper-slide-index"), 10));

          var _t62 = 90 * _e119,
              _n35 = Math.floor(_t62 / 360);

          c && (_t62 = -_t62, _n35 = Math.floor(-_t62 / 360));

          var _u9 = Math.max(Math.min(_o10[0].progress, 1), -1);

          var _i25 = 0,
              _s20 = 0,
              _a15 = 0;
          _e119 % 4 == 0 ? (_i25 = 4 * -_n35 * d, _a15 = 0) : (_e119 - 1) % 4 == 0 ? (_i25 = 0, _a15 = 4 * -_n35 * d) : (_e119 - 2) % 4 == 0 ? (_i25 = d + 4 * _n35 * d, _a15 = d) : (_e119 - 3) % 4 == 0 && (_i25 = -d, _a15 = 3 * d + 4 * d * _n35), c && (_i25 = -_i25), p || (_s20 = _i25, _i25 = 0);
          var g = "rotateX(".concat(p ? 0 : -_t62, "deg) rotateY(").concat(p ? _t62 : 0, "deg) translate3d(").concat(_i25, "px, ").concat(_s20, "px, ").concat(_a15, "px)");

          if (_u9 <= 1 && -1 < _u9 && (m = 90 * _e119 + 90 * _u9, c && (m = 90 * -_e119 - 90 * _u9)), _o10.transform(g), h.slideShadows) {
            var _e120 = p ? _o10.find(".swiper-slide-shadow-left") : _o10.find(".swiper-slide-shadow-top"),
                _t63 = p ? _o10.find(".swiper-slide-shadow-right") : _o10.find(".swiper-slide-shadow-bottom");

            0 === _e120.length && (_e120 = P("<div class=\"swiper-slide-shadow-".concat(p ? "left" : "top", "\"></div>")), _o10.append(_e120)), 0 === _t63.length && (_t63 = P("<div class=\"swiper-slide-shadow-".concat(p ? "right" : "bottom", "\"></div>")), _o10.append(_t63)), _e120.length && (_e120[0].style.opacity = Math.max(-_u9, 0)), _t63.length && (_t63[0].style.opacity = Math.max(_u9, 0));
          }
        }

        if (e.css({
          "-webkit-transform-origin": "50% 50% -".concat(d / 2, "px"),
          "transform-origin": "50% 50% -".concat(d / 2, "px")
        }), h.shadow) if (p) i.transform("translate3d(0px, ".concat(t / 2 + h.shadowOffset, "px, ").concat(-t / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(h.shadowScale, ")"));else {
          var _a16 = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
              _o11 = 1.5 - (Math.sin(2 * _a16 * Math.PI / 360) / 2 + Math.cos(2 * _a16 * Math.PI / 360) / 2),
              _e121 = h.shadowScale,
              _l9 = h.shadowScale / _o11,
              _t64 = h.shadowOffset;

          i.transform("scale3d(".concat(_e121, ", 1, ").concat(_l9, ") translate3d(0px, ").concat(n / 2 + _t64, "px, ").concat(-n / 2 / _l9, "px) rotateX(-90deg)"));
        }
        var s = u.isSafari || u.isWebView ? -d / 2 : 0;
        e.transform("translate3d(0px,0,".concat(s, "px) rotateX(").concat(a.isHorizontal() ? 0 : m, "deg) rotateY(").concat(a.isHorizontal() ? -m : 0, "deg)"));
      },
      setTransition: function setTransition(e) {
        var t = a.$el,
            n = a.slides;
        n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.cubeEffect.shadow && !a.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
      }
    });
  }, function (_ref29) {
    var u = _ref29.swiper,
        e = _ref29.extendParams,
        t = _ref29.on;
    e({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null
      }
    }), O({
      effect: "flip",
      swiper: u,
      on: t,
      setTranslate: function setTranslate() {
        var r = u.slides,
            o = u.rtlTranslate,
            l = u.params.flipEffect;

        for (var _a17 = 0; _a17 < r.length; _a17 += 1) {
          var _d10 = r.eq(_a17);

          var _n36 = _d10[0].progress;
          u.params.flipEffect.limitRotation && (_n36 = Math.max(Math.min(_d10[0].progress, 1), -1));
          var c = _d10[0].swiperSlideOffset;

          var _e122 = -180 * _n36,
              _t65 = 0,
              _i26 = u.params.cssMode ? -c - u.translate : -c,
              _s21 = 0;

          if (u.isHorizontal() ? o && (_e122 = -_e122) : (_s21 = _i26, _i26 = 0, _t65 = -_e122, _e122 = 0), _d10[0].style.zIndex = -Math.abs(Math.round(_n36)) + r.length, l.slideShadows) {
            var _e123 = u.isHorizontal() ? _d10.find(".swiper-slide-shadow-left") : _d10.find(".swiper-slide-shadow-top"),
                _t66 = u.isHorizontal() ? _d10.find(".swiper-slide-shadow-right") : _d10.find(".swiper-slide-shadow-bottom");

            0 === _e123.length && (_e123 = z(l, _d10, u.isHorizontal() ? "left" : "top")), 0 === _t66.length && (_t66 = z(l, _d10, u.isHorizontal() ? "right" : "bottom")), _e123.length && (_e123[0].style.opacity = Math.max(-_n36, 0)), _t66.length && (_t66[0].style.opacity = Math.max(_n36, 0));
          }

          c = "translate3d(".concat(_i26, "px, ").concat(_s21, "px, 0px) rotateX(").concat(_t65, "deg) rotateY(").concat(_e122, "deg)"), I(l, _d10).transform(c);
        }
      },
      setTransition: function setTransition(e) {
        var t = u.params.flipEffect.transformEl;
        (t ? u.slides.find(t) : u.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), N({
          swiper: u,
          duration: e,
          transformEl: t
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !u.params.cssMode
        };
      }
    });
  }, function (_ref30) {
    var n = _ref30.swiper,
        e = _ref30.extendParams,
        t = _ref30.on;
    e({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), O({
      effect: "coverflow",
      swiper: n,
      on: t,
      setTranslate: function setTranslate() {
        var l = n.width,
            c = n.height,
            d = n.slides,
            u = n.slidesSizesGrid,
            h = n.params.coverflowEffect,
            p = n.isHorizontal(),
            f = n.translate,
            m = p ? l / 2 - f : c / 2 - f,
            g = p ? h.rotate : -h.rotate,
            v = h.depth;

        for (var _o12 = 0, _e124 = d.length; _o12 < _e124; _o12 += 1) {
          var _l10 = d.eq(_o12),
              _c10 = u[_o12],
              _f6 = (m - _l10[0].swiperSlideOffset - _c10 / 2) / _c10 * h.modifier;

          var _e125 = p ? g * _f6 : 0,
              _t67 = p ? 0 : g * _f6,
              _n37 = -v * Math.abs(_f6),
              _i27 = h.stretch;

          "string" == typeof _i27 && -1 !== _i27.indexOf("%") && (_i27 = parseFloat(h.stretch) / 100 * _c10);

          var _s22 = p ? 0 : _i27 * _f6,
              _a18 = p ? _i27 * _f6 : 0,
              _r10 = 1 - (1 - h.scale) * Math.abs(_f6);

          Math.abs(_a18) < .001 && (_a18 = 0), Math.abs(_s22) < .001 && (_s22 = 0), Math.abs(_n37) < .001 && (_n37 = 0), Math.abs(_e125) < .001 && (_e125 = 0), Math.abs(_t67) < .001 && (_t67 = 0), Math.abs(_r10) < .001 && (_r10 = 0);
          var b = "translate3d(".concat(_a18, "px,").concat(_s22, "px,").concat(_n37, "px)  rotateX(").concat(_t67, "deg) rotateY(").concat(_e125, "deg) scale(").concat(_r10, ")");

          if (I(h, _l10).transform(b), _l10[0].style.zIndex = 1 - Math.abs(Math.round(_f6)), h.slideShadows) {
            var _e126 = p ? _l10.find(".swiper-slide-shadow-left") : _l10.find(".swiper-slide-shadow-top"),
                _t68 = p ? _l10.find(".swiper-slide-shadow-right") : _l10.find(".swiper-slide-shadow-bottom");

            0 === _e126.length && (_e126 = z(h, _l10, p ? "left" : "top")), 0 === _t68.length && (_t68 = z(h, _l10, p ? "right" : "bottom")), _e126.length && (_e126[0].style.opacity = 0 < _f6 ? _f6 : 0), _t68.length && (_t68[0].style.opacity = 0 < -_f6 ? -_f6 : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        var t = n.params.coverflowEffect.transformEl;
        (t ? n.slides.find(t) : n.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0
        };
      }
    });
  }, function (_ref31) {
    var y = _ref31.swiper,
        e = _ref31.extendParams,
        t = _ref31.on;
    e({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    }), O({
      effect: "creative",
      swiper: y,
      on: t,
      setTranslate: function setTranslate() {
        var s = y.slides,
            e = y.$wrapperEl,
            a = y.slidesSizesGrid,
            r = y.params.creativeEffect,
            o = r.progressMultiplier,
            l = y.params.centeredSlides;

        if (l) {
          var _s23 = a[0] / 2 - y.params.slidesOffsetBefore || 0;

          e.transform("translateX(calc(50% - ".concat(_s23, "px))"));
        }

        var _loop = function _loop(_i28) {
          var a = s.eq(_i28),
              p = a[0].progress,
              f = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
          var e = f;
          l || (e = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
          var m = a[0].swiperSlideOffset,
              g = [y.params.cssMode ? -m - y.translate : -m, 0, 0],
              v = [0, 0, 0];
          var t = !1;
          y.isHorizontal() || (g[1] = g[0], g[0] = 0);
          var n = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          f < 0 ? (n = r.next, t = !0) : 0 < f && (n = r.prev, t = !0), g.forEach(function (e, t) {
            g[t] = "calc(".concat(e, "px + (").concat((t = n.translate[t], "string" == typeof t ? t : t + "px"), " * ").concat(Math.abs(f * o), "))");
          }), v.forEach(function (e, t) {
            v[t] = n.rotate[t] * Math.abs(f * o);
          }), a[0].style.zIndex = -Math.abs(Math.round(p)) + s.length;
          c = g.join(", ");
          d = "rotateX(".concat(v[0], "deg) rotateY(").concat(v[1], "deg) rotateZ(").concat(v[2], "deg)");
          u = e < 0 ? "scale(".concat(1 + (1 - n.scale) * e * o, ")") : "scale(".concat(1 - (1 - n.scale) * e * o, ")");
          h = e < 0 ? 1 + (1 - n.opacity) * e * o : 1 - (1 - n.opacity) * e * o;
          u = "translate3d(".concat(c, ") ").concat(d, " ") + u;

          if (t && n.shadow || !t) {
            var _e127 = a.children(".swiper-slide-shadow");

            if (0 === _e127.length && n.shadow && (_e127 = z(r, a)), _e127.length) {
              var _s24 = r.shadowPerProgress ? f * (1 / r.limitProgress) : f;

              _e127[0].style.opacity = Math.min(Math.max(Math.abs(_s24), 0), 1);
            }
          }

          var b = I(r, a);
          b.transform(u).css({
            opacity: h
          }), n.origin && b.css("transform-origin", n.origin);
        };

        for (var _i28 = 0; _i28 < s.length; _i28 += 1) {
          var c, d, u, h;

          _loop(_i28);
        }
      },
      setTransition: function setTransition(e) {
        var t = y.params.creativeEffect.transformEl;
        (t ? y.slides.find(t) : y.slides).transition(e).find(".swiper-slide-shadow").transition(e), N({
          swiper: y,
          duration: e,
          transformEl: t,
          allSlides: !0
        });
      },
      perspective: function perspective() {
        return y.params.creativeEffect.perspective;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !y.params.cssMode
        };
      }
    });
  }, function (_ref32) {
    var y = _ref32.swiper,
        e = _ref32.extendParams,
        t = _ref32.on;
    e({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null
      }
    }), O({
      effect: "cards",
      swiper: y,
      on: t,
      setTranslate: function setTranslate() {
        var o = y.slides,
            l = y.activeIndex,
            c = y.params.cardsEffect,
            _y$touchEventsData = y.touchEventsData,
            d = _y$touchEventsData.startTranslate,
            u = _y$touchEventsData.isTouched,
            h = y.translate;

        for (var _r11 = 0; _r11 < o.length; _r11 += 1) {
          var _g4 = o.eq(_r11),
              _v3 = _g4[0].progress,
              _b3 = Math.min(Math.max(_v3, -4), 4);

          var _e128 = _g4[0].swiperSlideOffset;
          y.params.centeredSlides && !y.params.cssMode && y.$wrapperEl.transform("translateX(".concat(y.minTranslate(), "px)")), y.params.centeredSlides && y.params.cssMode && (_e128 -= o[0].swiperSlideOffset);

          var _t69 = y.params.cssMode ? -_e128 - y.translate : -_e128,
              _n38 = 0;

          var p = -100 * Math.abs(_b3);

          var _i29 = 1,
              _s25 = -2 * _b3,
              _a19 = 8 - .75 * Math.abs(_b3);

          var f = (_r11 === l || _r11 === l - 1) && 0 < _b3 && _b3 < 1 && (u || y.params.cssMode) && h < d,
              m = (_r11 === l || _r11 === l + 1) && _b3 < 0 && -1 < _b3 && (u || y.params.cssMode) && d < h;

          if (f || m) {
            var _y = Math.pow(1 - Math.abs((Math.abs(_b3) - .5) / .5), .5);

            _s25 += -28 * _b3 * _y, _i29 += -.5 * _y, _a19 += 96 * _y, _n38 = -25 * _y * Math.abs(_b3) + "%";
          }

          if (_t69 = _b3 < 0 ? "calc(".concat(_t69, "px + (").concat(_a19 * Math.abs(_b3), "%))") : 0 < _b3 ? "calc(".concat(_t69, "px + (-").concat(_a19 * Math.abs(_b3), "%))") : _t69 + "px", !y.isHorizontal()) {
            var _y2 = _n38;
            _n38 = _t69, _t69 = _y2;
          }

          if (p = "\n        translate3d(".concat(_t69, ", ").concat(_n38, ", ").concat(p, "px)\n        rotateZ(").concat(_s25, "deg)\n        scale(").concat(_b3 < 0 ? "" + (1 + (1 - _i29) * _b3) : "" + (1 - (1 - _i29) * _b3), ")\n      "), c.slideShadows) {
            var _e129 = _g4.find(".swiper-slide-shadow");

            0 === _e129.length && (_e129 = z(c, _g4)), _e129.length && (_e129[0].style.opacity = Math.min(Math.max((Math.abs(_b3) - .5) / .5, 0), 1));
          }

          _g4[0].style.zIndex = -Math.abs(Math.round(_v3)) + o.length, I(c, _g4).transform(p);
        }
      },
      setTransition: function setTransition(e) {
        var t = y.params.cardsEffect.transformEl;
        (t ? y.slides.find(t) : y.slides).transition(e).find(".swiper-slide-shadow").transition(e), N({
          swiper: y,
          duration: e,
          transformEl: t
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !y.params.cssMode
        };
      }
    });
  }]), M;
}), function (n) {
  var i = {};

  function s(e) {
    if (i[e]) return i[e].exports;
    var t = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
  }

  s.m = n, s.c = i, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (t, e) {
    if (1 & e && (t = s(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) {
      s.d(n, i, function (e) {
        return t[e];
      }.bind(null, i));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t);
  n = {
    classNames: {
      inset: "Inset",
      nolistview: "NoListview",
      nopanel: "NoPanel",
      panel: "Panel",
      selected: "Selected",
      vertical: "Vertical"
    },
    language: null,
    openingInterval: 25,
    panelNodetype: ["ul", "ol", "div"],
    transitionDuration: 400
  };

  function c(e, t) {
    for (var n in "object" != l(e) && (e = {}), t = "object" != l(t) ? {} : t) {
      t.hasOwnProperty(n) && (void 0 === e[n] ? e[n] = t[n] : "object" == l(e[n]) && c(e[n], t[n]));
    }

    return e;
  }

  function l(e) {
    return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function o(e, t, n) {
    return "function" == typeof t && void 0 !== (e = t.call(e)) ? e : null !== t && "function" != typeof t && void 0 !== t || void 0 === n ? t : n;
  }

  function d(t, n, e) {
    function i(e) {
      void 0 !== e && e.target !== t || (s || (t.removeEventListener("transitionend", i), t.removeEventListener("webkitTransitionEnd", i), n.call(t)), s = !0);
    }

    var s = !1;
    t.addEventListener("transitionend", i), t.addEventListener("webkitTransitionEnd", i), setTimeout(i, 1.1 * e);
  }

  function r() {
    return "mm-" + i++;
  }

  var i = 0;

  function a(e) {
    return "mm-" == e.slice(0, 3) ? e.slice(3) : e;
  }

  var s = {};

  function u(e, t) {
    void 0 === s[t] && (s[t] = {}), c(s[t], e);
  }

  function p(e) {
    var e = e.split("."),
        t = document.createElement(e.shift());
    return e.forEach(function (e) {
      t.classList.add(e);
    }), t;
  }

  function v(e, t) {
    return Array.prototype.slice.call(e.querySelectorAll(t));
  }

  function f(e, t) {
    return e = Array.prototype.slice.call(e.children), t ? e.filter(function (e) {
      return e.matches(t);
    }) : e;
  }

  function m(e, t) {
    for (var n = [], i = e.parentElement; i;) {
      n.push(i), i = i.parentElement;
    }

    return t ? n.filter(function (e) {
      return e.matches(t);
    }) : n;
  }

  function g(e) {
    return e.filter(function (e) {
      return !e.matches(".mm-hidden");
    });
  }

  function h(e) {
    var t = [];
    return g(e).forEach(function (e) {
      t.push.apply(t, f(e, "a.mm-listitem__text"));
    }), t.filter(function (e) {
      return !e.matches(".mm-btn_next");
    });
  }

  function b(e, t, n) {
    e.matches("." + t) && (e.classList.remove(t), e.classList.add(n));
  }

  var y = {};

  function w(e, t, n) {
    y[e = "number" == typeof e ? "(min-width: " + e + "px)" : e] = y[e] || [], y[e].push({
      yes: t,
      no: n
    });
  }

  function x(e, t) {
    for (var n = t.matches ? "yes" : "no", i = 0; i < y[e].length; i++) {
      y[e][i][n]();
    }
  }

  u({
    Menu: "Menu"
  }, "nl"), u({
    Menu: "Щ…Щ†Щ€"
  }, "fa"), u({
    Menu: "MenГј"
  }, "de"), u({
    Menu: "РњРµРЅСЋ"
  }, "ru");

  var _,
      C = (T.prototype.openPanel = function (t, e) {
    var n = this;

    if (this.trigger("openPanel:before", [t]), t = t && (t.matches(".mm-panel") ? t : t.closest(".mm-panel"))) {
      if ("boolean" != typeof e && (e = !0), t.parentElement.matches(".mm-listitem_vertical")) {
        m(t, ".mm-listitem_vertical").forEach(function (e) {
          e.classList.add("mm-listitem_opened"), f(e, ".mm-panel").forEach(function (e) {
            e.classList.remove("mm-hidden");
          });
        });
        var i = m(t, ".mm-panel").filter(function (e) {
          return !e.parentElement.matches(".mm-listitem_vertical");
        });
        this.trigger("openPanel:start", [t]), i.length && this.openPanel(i[0]), this.trigger("openPanel:finish", [t]);
      } else {
        if (t.matches(".mm-panel_opened")) return;
        var i = f(this.node.pnls, ".mm-panel"),
            s = f(this.node.pnls, ".mm-panel_opened")[0];
        i.filter(function (e) {
          return e !== t;
        }).forEach(function (e) {
          e.classList.remove("mm-panel_opened-parent");
        });

        for (var a = t.mmParent; a;) {
          (a = a.closest(".mm-panel")) && (a.parentElement.matches(".mm-listitem_vertical") || a.classList.add("mm-panel_opened-parent"), a = a.mmParent);
        }

        i.forEach(function (e) {
          e.classList.remove("mm-panel_highest");
        }), i.filter(function (e) {
          return e !== s;
        }).filter(function (e) {
          return e !== t;
        }).forEach(function (e) {
          e.classList.add("mm-hidden");
        }), t.classList.remove("mm-hidden");

        var r = function r() {
          s && s.classList.remove("mm-panel_opened"), t.classList.add("mm-panel_opened"), t.matches(".mm-panel_opened-parent") ? (s && s.classList.add("mm-panel_highest"), t.classList.remove("mm-panel_opened-parent")) : (s && s.classList.add("mm-panel_opened-parent"), t.classList.add("mm-panel_highest")), n.trigger("openPanel:start", [t]);
        },
            o = function o() {
          s && (s.classList.remove("mm-panel_highest"), s.classList.add("mm-hidden")), t.classList.remove("mm-panel_highest"), n.trigger("openPanel:finish", [t]);
        };

        e && !t.matches(".mm-panel_noanimation") ? setTimeout(function () {
          d(t, function () {
            o();
          }, n.conf.transitionDuration), r();
        }, this.conf.openingInterval) : (r(), o());
      }

      this.trigger("openPanel:after", [t]);
    }
  }, T.prototype.closePanel = function (e) {
    this.trigger("closePanel:before", [e]);
    var t = e.parentElement;
    t.matches(".mm-listitem_vertical") && (t.classList.remove("mm-listitem_opened"), e.classList.add("mm-hidden"), this.trigger("closePanel", [e])), this.trigger("closePanel:after", [e]);
  }, T.prototype.closeAllPanels = function (e) {
    this.trigger("closeAllPanels:before"), this.node.pnls.querySelectorAll(".mm-listitem").forEach(function (e) {
      e.classList.remove("mm-listitem_selected"), e.classList.remove("mm-listitem_opened");
    });
    var t = f(this.node.pnls, ".mm-panel"),
        n = e || t[0];
    f(this.node.pnls, ".mm-panel").forEach(function (e) {
      e !== n && (e.classList.remove("mm-panel_opened"), e.classList.remove("mm-panel_opened-parent"), e.classList.remove("mm-panel_highest"), e.classList.add("mm-hidden"));
    }), this.openPanel(n, !1), this.trigger("closeAllPanels:after");
  }, T.prototype.togglePanel = function (e) {
    var t = e.parentElement;
    t.matches(".mm-listitem_vertical") && this[t.matches(".mm-listitem_opened") ? "closePanel" : "openPanel"](e);
  }, T.prototype.setSelected = function (e) {
    this.trigger("setSelected:before", [e]), v(this.node.menu, ".mm-listitem_selected").forEach(function (e) {
      e.classList.remove("mm-listitem_selected");
    }), e.classList.add("mm-listitem_selected"), this.trigger("setSelected:after", [e]);
  }, T.prototype.bind = function (e, t) {
    this.hook[e] = this.hook[e] || [], this.hook[e].push(t);
  }, T.prototype.trigger = function (e, t) {
    if (this.hook[e]) for (var n = 0, i = this.hook[e].length; n < i; n++) {
      this.hook[e][n].apply(this, t);
    }
  }, T.prototype._initAPI = function () {
    var e = this,
        n = this;
    this.API = {}, this._api.forEach(function (t) {
      e.API[t] = function () {
        var e = n[t].apply(n, arguments);
        return void 0 === e ? n.API : e;
      };
    }), this.node.menu.mmApi = this.API;
  }, T.prototype._initHooks = function () {
    for (var e in this.opts.hooks) {
      this.bind(e, this.opts.hooks[e]);
    }
  }, T.prototype._initWrappers = function () {
    this.trigger("initWrappers:before");

    for (var e = 0; e < this.opts.wrappers.length; e++) {
      var t = T.wrappers[this.opts.wrappers[e]];
      "function" == typeof t && t.call(this);
    }

    this.trigger("initWrappers:after");
  }, T.prototype._initAddons = function () {
    for (var e in this.trigger("initAddons:before"), T.addons) {
      T.addons[e].call(this);
    }

    this.trigger("initAddons:after");
  }, T.prototype._initExtensions = function () {
    var n = this;
    this.trigger("initExtensions:before"), "array" == l(this.opts.extensions) && (this.opts.extensions = {
      all: this.opts.extensions
    }), Object.keys(this.opts.extensions).forEach(function (e) {
      var t = n.opts.extensions[e].map(function (e) {
        return "mm-menu_" + e;
      });
      t.length && w(e, function () {
        t.forEach(function (e) {
          n.node.menu.classList.add(e);
        });
      }, function () {
        t.forEach(function (e) {
          n.node.menu.classList.remove(e);
        });
      });
    }), this.trigger("initExtensions:after");
  }, T.prototype._initMenu = function () {
    var t = this;
    this.trigger("initMenu:before"), this.node.wrpr = this.node.wrpr || this.node.menu.parentElement, this.node.wrpr.classList.add("mm-wrapper"), this.node.menu.id = this.node.menu.id || r();
    var n = p("div.mm-panels");
    f(this.node.menu).forEach(function (e) {
      -1 < t.conf.panelNodetype.indexOf(e.nodeName.toLowerCase()) && n.append(e);
    }), this.node.menu.append(n), this.node.pnls = n, this.node.menu.classList.add("mm-menu"), this.trigger("initMenu:after");
  }, T.prototype._initPanels = function () {
    var i = this;
    this.trigger("initPanels:before"), this.clck.push(function (e, t) {
      if (t.inMenu && (t = e.getAttribute("href")) && 1 < t.length && "#" == t.slice(0, 1)) try {
        var n = v(i.node.menu, t)[0];
        if (n && n.matches(".mm-panel")) return e.parentElement.matches(".mm-listitem_vertical") ? i.togglePanel(n) : i.openPanel(n), !0;
      } catch (e) {}
    }), f(this.node.pnls).forEach(function (e) {
      i.initPanel(e);
    }), this.trigger("initPanels:after");
  }, T.prototype.initPanel = function (e) {
    var t,
        n = this,
        i = this.conf.panelNodetype.join(", ");
    e.matches(i) && (e = e.matches(".mm-panel") ? e : this._initPanel(e)) && ((t = []).push.apply(t, f(e, "." + this.conf.classNames.panel)), f(e, ".mm-listview").forEach(function (e) {
      f(e, ".mm-listitem").forEach(function (e) {
        t.push.apply(t, f(e, i));
      });
    }), t.forEach(function (e) {
      n.initPanel(e);
    }));
  }, T.prototype._initPanel = function (e) {
    var t = this;
    if (this.trigger("initPanel:before", [e]), b(e, this.conf.classNames.panel, "mm-panel"), b(e, this.conf.classNames.nopanel, "mm-nopanel"), b(e, this.conf.classNames.inset, "mm-listview_inset"), e.matches(".mm-listview_inset") && e.classList.add("mm-nopanel"), e.matches(".mm-nopanel")) return null;
    var n,
        i = e.id || r(),
        s = e.matches("." + this.conf.classNames.vertical) || !this.opts.slidingSubmenus;
    e.classList.remove(this.conf.classNames.vertical), e.matches("ul, ol") && (e.removeAttribute("id"), n = p("div"), e.before(n), n.append(e), e = n), e.id = i, e.classList.add("mm-panel"), e.classList.add("mm-hidden");
    var a,
        i = [e.parentElement].filter(function (e) {
      return e.matches("li");
    })[0];
    return s ? i && i.classList.add("mm-listitem_vertical") : this.node.pnls.append(e), i && ((i.mmChild = e).mmParent = i) && i.matches(".mm-listitem") && !f(i, ".mm-btn").length && (a = f(i, ".mm-listitem__text")[0]) && ((s = p("a.mm-btn.mm-btn_next.mm-listitem__btn")).setAttribute("href", "#" + e.id), a.matches("span") ? (s.classList.add("mm-listitem__text"), s.innerHTML = a.innerHTML, i.insertBefore(s, a.nextElementSibling), a.remove()) : i.insertBefore(s, f(i, ".mm-panel")[0])), this._initNavbar(e), f(e, "ul, ol").forEach(function (e) {
      t.initListview(e);
    }), this.trigger("initPanel:after", [e]), e;
  }, T.prototype._initNavbar = function (e) {
    if (this.trigger("initNavbar:before", [e]), !f(e, ".mm-navbar").length) {
      var t = null,
          n = null;

      if (e.getAttribute("data-mm-parent") ? n = v(this.node.pnls, e.getAttribute("data-mm-parent"))[0] : (t = e.mmParent) && (n = t.closest(".mm-panel")), !t || !t.matches(".mm-listitem_vertical")) {
        var i,
            s = p("div.mm-navbar");
        this.opts.navbar.add ? this.opts.navbar.sticky && s.classList.add("mm-navbar_sticky") : s.classList.add("mm-hidden"), n && ((i = p("a.mm-btn.mm-btn_prev.mm-navbar__btn")).setAttribute("href", "#" + n.id), s.append(i));
        var a = null;
        t ? a = f(t, ".mm-listitem__text")[0] : n && (a = v(n, 'a[href="#' + e.id + '"]')[0]);
        var r = p("a.mm-navbar__title"),
            t = p("span");

        switch (r.append(t), t.innerHTML = e.getAttribute("data-mm-title") || (a ? a.textContent : "") || this.i18n(this.opts.navbar.title) || this.i18n("Menu"), this.opts.navbar.titleLink) {
          case "anchor":
            a && r.setAttribute("href", a.getAttribute("href"));
            break;

          case "parent":
            n && r.setAttribute("href", "#" + n.id);
        }

        s.append(r), e.prepend(s), this.trigger("initNavbar:after", [e]);
      }
    }
  }, T.prototype.initListview = function (e) {
    var t = this;
    this.trigger("initListview:before", [e]), b(e, this.conf.classNames.nolistview, "mm-nolistview"), e.matches(".mm-nolistview") || (e.classList.add("mm-listview"), f(e).forEach(function (e) {
      e.classList.add("mm-listitem"), b(e, t.conf.classNames.selected, "mm-listitem_selected"), f(e, "a, span").forEach(function (e) {
        e.matches(".mm-btn") || e.classList.add("mm-listitem__text");
      });
    })), this.trigger("initListview:after", [e]);
  }, T.prototype._initOpened = function () {
    this.trigger("initOpened:before");
    var e = this.node.pnls.querySelectorAll(".mm-listitem_selected"),
        t = null;
    e.forEach(function (e) {
      (t = e).classList.remove("mm-listitem_selected");
    }), t && t.classList.add("mm-listitem_selected"), e = t ? t.closest(".mm-panel") : f(this.node.pnls, ".mm-panel")[0], this.openPanel(e, !1), this.trigger("initOpened:after");
  }, T.prototype._initAnchors = function () {
    var r = this;
    this.trigger("initAnchors:before"), document.addEventListener("click", function (e) {
      var t = e.target.closest("a[href]");

      if (t) {
        for (var n = {
          inMenu: t.closest(".mm-menu") === r.node.menu,
          inListview: t.matches(".mm-listitem > a"),
          toExternal: t.matches('[rel="external"]') || t.matches('[target="_blank"]')
        }, i = {
          close: null,
          setSelected: null,
          preventDefault: "#" == t.getAttribute("href").slice(0, 1)
        }, s = 0; s < r.clck.length; s++) {
          var a = r.clck[s].call(r, t, n);

          if (a) {
            if ("boolean" == typeof a) return void e.preventDefault();
            "object" == l(a) && (i = c(a, i));
          }
        }

        n.inMenu && n.inListview && !n.toExternal && (o(t, r.opts.onClick.setSelected, i.setSelected) && r.setSelected(t.parentElement), o(t, r.opts.onClick.preventDefault, i.preventDefault) && e.preventDefault(), o(t, r.opts.onClick.close, i.close) && r.opts.offCanvas && "function" == typeof r.close && r.close());
      }
    }, !0), this.trigger("initAnchors:after");
  }, T.prototype.i18n = function (e) {
    return "string" == typeof (t = this.conf.language) && void 0 !== s[t] && s[t][e] || e;
    var t;
  }, T.options = {
    hooks: {},
    extensions: [],
    wrappers: [],
    navbar: {
      add: !0,
      sticky: !0,
      title: "Menu",
      titleLink: "parent"
    },
    onClick: {
      close: null,
      preventDefault: null,
      setSelected: !0
    },
    slidingSubmenus: !0
  }, T.configs = n, T.addons = {}, T.wrappers = {}, T.node = {}, T.vars = {}, T);

  function T(e, t, n) {
    return this.opts = c(t, T.options), this.conf = c(n, T.configs), this._api = ["bind", "initPanel", "initListview", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.node = {}, this.vars = {}, this.hook = {}, this.clck = [], this.node.menu = "string" == typeof e ? document.querySelector(e) : e, "function" == typeof this._deprecatedWarnings && this._deprecatedWarnings(), this._initWrappers(), this._initAddons(), this._initExtensions(), this._initHooks(), this._initAPI(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), function () {
      for (var e in y) {
        !function (t) {
          var n = window.matchMedia(t);
          x(t, n), n.onchange = function (e) {
            x(t, n);
          };
        }(e);
      }
    }(), this;
  }

  function E(e) {
    return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
  }

  function S(e, t, n) {
    var i = t.split(".");
    e[t = "mmEvent" + E(i[0]) + E(i[1])] = e[t] || [], e[t].push(n), e.addEventListener(i[0], n);
  }

  function k(t, e) {
    var n = e.split(".");
    e = "mmEvent" + E(n[0]) + E(n[1]), (t[e] || []).forEach(function (e) {
      t.removeEventListener(n[0], e);
    });
  }

  C.options.offCanvas = {
    blockUI: !0,
    moveBackground: !0
  }, C.configs.offCanvas = {
    clone: !1,
    menu: {
      insertMethod: "prepend",
      insertSelector: "body"
    },
    page: {
      nodetype: "div",
      selector: null,
      noSelector: []
    }
  }, C.prototype.open = function () {
    var e = this;
    this.trigger("open:before"), this.vars.opened || (this._openSetup(), setTimeout(function () {
      e._openStart();
    }, this.conf.openingInterval), this.trigger("open:after"));
  }, C.prototype._openSetup = function () {
    var t,
        n = this,
        e = this.opts.offCanvas;
    this.closeAllOthers(), i = window, t = {
      force: !0
    }, (i["mmEvent" + E((i = "resize.page".split("."))[0]) + E(i[1])] || []).forEach(function (e) {
      e(t);
    });
    var i = ["mm-wrapper_opened"];
    e.blockUI && i.push("mm-wrapper_blocking"), "modal" == e.blockUI && i.push("mm-wrapper_modal"), e.moveBackground && i.push("mm-wrapper_background"), i.forEach(function (e) {
      n.node.wrpr.classList.add(e);
    }), setTimeout(function () {
      n.vars.opened = !0;
    }, this.conf.openingInterval), this.node.menu.classList.add("mm-menu_opened");
  }, C.prototype._openStart = function () {
    var e = this;
    d(C.node.page, function () {
      e.trigger("open:finish");
    }, this.conf.transitionDuration), this.trigger("open:start"), this.node.wrpr.classList.add("mm-wrapper_opening");
  }, C.prototype.close = function () {
    var t = this;
    this.trigger("close:before"), this.vars.opened && (d(C.node.page, function () {
      t.node.menu.classList.remove("mm-menu_opened"), ["mm-wrapper_opened", "mm-wrapper_blocking", "mm-wrapper_modal", "mm-wrapper_background"].forEach(function (e) {
        t.node.wrpr.classList.remove(e);
      }), t.vars.opened = !1, t.trigger("close:finish");
    }, this.conf.transitionDuration), this.trigger("close:start"), this.node.wrpr.classList.remove("mm-wrapper_opening"), this.trigger("close:after"));
  }, C.prototype.closeAllOthers = function () {
    var t = this;
    v(document.body, ".mm-menu_offcanvas").forEach(function (e) {
      e === t.node.menu || (e = e.mmApi) && e.close && e.close();
    });
  }, C.prototype.setPage = function (e) {
    this.trigger("setPage:before", [e]);
    var t,
        n,
        i = this.conf.offCanvas;
    e || (n = (n = "string" == typeof i.page.selector ? v(document.body, i.page.selector) : f(document.body, i.page.nodetype)).filter(function (e) {
      return !e.matches(".mm-menu, .mm-wrapper__blocker");
    }), 1 < (n = i.page.noSelector.length ? n.filter(function (e) {
      return !e.matches(i.page.noSelector.join(", "));
    }) : n).length && (t = p("div"), n[0].before(t), n.forEach(function (e) {
      t.append(e);
    }), n = [t]), e = n[0]), e.classList.add("mm-page"), e.classList.add("mm-slideout"), e.id = e.id || r(), C.node.page = e, this.trigger("setPage:after", [e]);
  }, u({
    "Close menu": "Menu sluiten",
    "Close submenu": "Submenu sluiten",
    "Open submenu": "Submenu openen",
    "Toggle submenu": "Submenu wisselen"
  }, "nl"), u({
    "Close menu": "ШЁШіШЄЩ† Щ…Щ†Щ€",
    "Close submenu": "ШЁШіШЄЩ† ШІЫЊШ±Щ…Щ†Щ€",
    "Open submenu": "ШЁШ§ШІЪ©Ш±ШЇЩ† ШІЫЊШ±Щ…Щ†Щ€",
    "Toggle submenu": "ШіЩ€ЫЊЫЊЪ† ШІЫЊШ±Щ…Щ†Щ€"
  }, "fa"), u({
    "Close menu": "MenГј schlieГџen",
    "Close submenu": "UntermenГј schlieГџen",
    "Open submenu": "UntermenГј Г¶ffnen",
    "Toggle submenu": "UntermenГј wechseln"
  }, "de"), u({
    "Close menu": "Р—Р°РєСЂС‹С‚СЊ РјРµРЅСЋ",
    "Close submenu": "Р—Р°РєСЂС‹С‚СЊ РїРѕРґРјРµРЅСЋ",
    "Open submenu": "РћС‚РєСЂС‹С‚СЊ РїРѕРґРјРµРЅСЋ",
    "Toggle submenu": "РџРµСЂРµРєР»СЋС‡РёС‚СЊ РїРѕРґРјРµРЅСЋ"
  }, "ru"), C.options.screenReader = {
    aria: !0,
    text: !0
  }, C.configs.screenReader = {
    text: {
      closeMenu: "Close menu",
      closeSubmenu: "Close submenu",
      openSubmenu: "Open submenu",
      toggleSubmenu: "Toggle submenu"
    }
  }, _ = function _(e, t, n) {
    (e[t] = n) ? e.setAttribute(t, n.toString()) : e.removeAttribute(t);
  }, C.sr_aria = function (e, t, n) {
    _(e, "aria-" + t, n);
  }, C.sr_role = function (e, t) {
    _(e, "role", t);
  }, C.sr_text = function (e) {
    return '<span class="mm-sronly">' + e + "</span>";
  };
  var M = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;

  function $(e, t) {
    return "string" == typeof e && "%" == e.slice(-1) ? t * (parseInt(e.slice(0, -1), 10) / 100) : e;
  }

  function D(t, n, e) {
    switch (t.position = "left", t.zposition = "back", ["right", "top", "bottom"].forEach(function (e) {
      -1 < n.indexOf("position-" + e) && (t.position = e);
    }), ["front", "top", "bottom"].forEach(function (e) {
      -1 < n.indexOf("position-" + e) && (t.zposition = "front");
    }), z.area = {
      top: "bottom" == t.position ? "75%" : 0,
      right: "left" == t.position ? "75%" : 0,
      bottom: "top" == t.position ? "75%" : 0,
      left: "right" == t.position ? "75%" : 0
    }, t.position) {
      case "top":
      case "bottom":
        t.axis = "y";
        break;

      default:
        t.axis = "x";
    }

    switch (t.position) {
      case "top":
        t.direction = "Down";
        break;

      case "right":
        t.direction = "Left";
        break;

      case "bottom":
        t.direction = "Up";
        break;

      default:
        t.direction = "Right";
    }

    return "front" === t.zposition ? t.slideOutNodes = [e] : t.slideOutNodes = v(document.body, ".mm-slideout"), t;
  }

  C.options.scrollBugFix = {
    fix: !0
  }, C.options.autoHeight = {
    height: "default"
  }, C.options.backButton = {
    close: !1,
    open: !1
  }, C.options.columns = {
    add: !1,
    visible: {
      min: 1,
      max: 3
    }
  }, C.options.counters = {
    add: !1,
    addTo: "panels",
    count: !1
  }, C.configs.classNames.counters = {
    counter: "Counter"
  }, C.options.dividers = {
    add: !1,
    addTo: "panels"
  }, C.configs.classNames.divider = "Divider";
  var P,
      L = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1,
      A = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
      O = {
    start: 15,
    swipe: 15
  },
      I = {
    x: ["Right", "Left"],
    y: ["Down", "Up"]
  },
      N = (F.prototype.start = function (e) {
    this.currentPosition = {
      x: e.touches ? e.touches[0].pageX : e.pageX || 0,
      y: e.touches ? e.touches[0].pageY : e.pageY || 0
    };
    var t = this.surface.clientWidth,
        n = this.surface.clientHeight;
    "number" == typeof (e = $(this.area.top, n)) && this.currentPosition.y < e || "number" == typeof (e = $(this.area.right, t)) && this.currentPosition.x > (e = t - e) || "number" == typeof (e = $(this.area.bottom, n)) && this.currentPosition.y > (e = n - e) || "number" == typeof (t = $(this.area.left, t)) && this.currentPosition.x < t || (this.startPosition = {
      x: this.currentPosition.x,
      y: this.currentPosition.y
    }, this.state = 1);
  }, F.prototype.stop = function (e) {
    var t, n;
    2 == this.state && (n = this._dragDirection(), t = this._eventDetail(n), this._dispatchEvents("drag*End", t), Math.abs(this.movement[this.axis]) > this.treshold.swipe && (n = this._swipeDirection(), t.direction = n, this._dispatchEvents("swipe*", t))), this.state = 0;
  }, F.prototype.move = function (e) {
    switch (this.state) {
      case 1:
      case 2:
        var t = {
          x: e.changedTouches ? e.touches[0].pageX : e.pageX || 0,
          y: e.changedTouches ? e.touches[0].pageY : e.pageY || 0
        };
        this.movement = {
          x: t.x - this.currentPosition.x,
          y: t.y - this.currentPosition.y
        }, this.distance = {
          x: t.x - this.startPosition.x,
          y: t.y - this.startPosition.y
        }, this.currentPosition = {
          x: t.x,
          y: t.y
        }, this.axis = Math.abs(this.distance.x) > Math.abs(this.distance.y) ? "x" : "y", t = this._dragDirection(), t = this._eventDetail(t), 1 == this.state && Math.abs(this.distance[this.axis]) > this.treshold.start && (this._dispatchEvents("drag*Start", t), this.state = 2), 2 == this.state && this._dispatchEvents("drag*Move", t);
    }
  }, F.prototype._eventDetail = function (e) {
    var t = this.distance.x,
        n = this.distance.y;
    return "x" == this.axis && (t -= 0 < t ? this.treshold.start : 0 - this.treshold.start), "y" == this.axis && (n -= 0 < n ? this.treshold.start : 0 - this.treshold.start), {
      axis: this.axis,
      direction: e,
      movementX: this.movement.x,
      movementY: this.movement.y,
      distanceX: t,
      distanceY: n
    };
  }, F.prototype._dispatchEvents = function (e, t) {
    var n = new CustomEvent(e.replace("*", ""), {
      detail: t
    });
    this.surface.dispatchEvent(n), n = new CustomEvent(e.replace("*", this.axis.toUpperCase()), {
      detail: t
    }), this.surface.dispatchEvent(n), t = new CustomEvent(e.replace("*", t.direction), {
      detail: t
    }), this.surface.dispatchEvent(t);
  }, F.prototype._dragDirection = function () {
    return I[this.axis][0 < this.distance[this.axis] ? 0 : 1];
  }, F.prototype._swipeDirection = function () {
    return I[this.axis][0 < this.movement[this.axis] ? 0 : 1];
  }, F),
      z = null,
      j = null,
      H = 0;

  function F(e, t, n) {
    this.surface = e, this.area = c(t, A), this.treshold = c(n, O), this.surface.mmHasDragEvents || (this.surface.addEventListener(L ? "touchstart" : "mousedown", this.start.bind(this)), this.surface.addEventListener(L ? "touchend" : "mouseup", this.stop.bind(this)), this.surface.addEventListener(L ? "touchleave" : "mouseleave", this.stop.bind(this)), this.surface.addEventListener(L ? "touchmove" : "mousemove", this.move.bind(this))), this.surface.mmHasDragEvents = !0;
  }

  function q() {
    var c,
        d = this,
        e = this.opts.navbars;
    void 0 !== e && (e instanceof Array || (e = [e]), c = {}, e.length && (e.forEach(function (e) {
      if (void 0 === (n = "object" != _typeof(n = "boolean" == typeof (n = e) && n ? {} : n) ? {} : n).content && (n.content = ["prev", "title"]), n.content instanceof Array || (n.content = [n.content]), void 0 === n.use && (n.use = !0), "boolean" == typeof n.use && n.use && (n.use = !0), !(e = n).use) return !1;
      var t = p("div.mm-navbar"),
          n = e.position;
      c[n = "bottom" !== n ? "top" : n] || (c[n] = p("div.mm-navbars_" + n)), c[n].append(t);

      for (var i = 0, s = e.content.length; i < s; i++) {
        var a,
            r,
            o,
            l = e.content[i];
        "string" == typeof l ? "function" == typeof (a = q.navbarContents[l]) ? a.call(d, t) : ((r = p("span")).innerHTML = l, 1 == (o = f(r)).length && (r = o[0]), t.append(r)) : t.append(l);
      }

      "string" == typeof e.type && "function" == typeof (a = q.navbarTypes[e.type]) && a.call(d, t), "boolean" != typeof e.use && w(e.use, function () {
        t.classList.remove("mm-hidden"), C.sr_aria(t, "hidden", !1);
      }, function () {
        t.classList.add("mm-hidden"), C.sr_aria(t, "hidden", !0);
      });
    }), this.bind("initMenu:after", function () {
      for (var e in c) {
        d.node.menu["bottom" == e ? "append" : "prepend"](c[e]);
      }
    })));
  }

  C.options.drag = {
    open: !1,
    node: null
  }, C.options.dropdown = {
    drop: !1,
    fitViewport: !0,
    event: "click",
    position: {},
    tip: !0
  }, C.configs.dropdown = {
    offset: {
      button: {
        x: -5,
        y: 5
      },
      viewport: {
        x: 20,
        y: 20
      }
    },
    height: {
      max: 880
    },
    width: {
      max: 440
    }
  }, C.configs.fixedElements = {
    insertMethod: "append",
    insertSelector: "body"
  }, C.configs.classNames.fixedElements = {
    fixed: "Fixed"
  }, C.options.iconbar = {
    use: !1,
    top: [],
    bottom: [],
    position: "left",
    type: "default"
  }, C.options.iconPanels = {
    add: !1,
    blockPanel: !0,
    hideDivider: !1,
    hideNavbar: !0,
    visible: 3
  }, C.options.keyboardNavigation = {
    enable: !1,
    enhance: !1
  }, C.options.lazySubmenus = {
    load: !1
  }, C.options.navbars = [], C.configs.navbars = {
    breadcrumbs: {
      separator: "/",
      removeFirst: !1
    }
  }, C.configs.classNames.navbars = {
    panelPrev: "Prev",
    panelTitle: "Title"
  }, q.navbarContents = {
    breadcrumbs: function breadcrumbs(e) {
      var r = this,
          t = p("div.mm-navbar__breadcrumbs");
      e.append(t), this.bind("initNavbar:after", function (e) {
        if (!e.querySelector(".mm-navbar__breadcrumbs")) {
          f(e, ".mm-navbar")[0].classList.add("mm-hidden");

          for (var t, n = [], i = p("span.mm-navbar__breadcrumbs"), s = e, a = !0; s;) {
            (s = s.closest(".mm-panel")).parentElement.matches(".mm-listitem_vertical") || (!(t = v(s, ".mm-navbar__title span")[0]) || (t = t.textContent).length && n.unshift(a ? "<span>" + t + "</span>" : '<a href="#' + s.id + '">' + t + "</a>"), a = !1), s = s.mmParent;
          }

          r.conf.navbars.breadcrumbs.removeFirst && n.shift(), i.innerHTML = n.join('<span class="mm-separator">' + r.conf.navbars.breadcrumbs.separator + "</span>"), f(e, ".mm-navbar")[0].append(i);
        }
      }), this.bind("openPanel:start", function (e) {
        e = e.querySelector(".mm-navbar__breadcrumbs"), t.innerHTML = e ? e.innerHTML : "";
      }), this.bind("initNavbar:after:sr-aria", function (e) {
        v(e, ".mm-breadcrumbs a").forEach(function (e) {
          C.sr_aria(e, "owns", e.getAttribute("href").slice(1));
        });
      });
    },
    close: function close(e) {
      var t = this,
          n = p("a.mm-btn.mm-btn_close.mm-navbar__btn");
      e.append(n), this.bind("setPage:after", function (e) {
        n.setAttribute("href", "#" + e.id);
      }), this.bind("setPage:after:sr-text", function () {
        n.innerHTML = C.sr_text(t.i18n(t.conf.screenReader.text.closeMenu));
      });
    },
    prev: function prev(e) {
      var t,
          n,
          i = this,
          s = p("a.mm-btn.mm-btn_prev.mm-navbar__btn");
      e.append(s), this.bind("initNavbar:after", function (e) {
        f(e, ".mm-navbar")[0].classList.add("mm-hidden");
      }), this.bind("openPanel:start", function (e) {
        e.parentElement.matches(".mm-listitem_vertical") || ((n = e.querySelector("." + i.conf.classNames.navbars.panelPrev)) || (n = e.querySelector(".mm-navbar__btn.mm-btn_prev")), t = n ? n.getAttribute("href") : "", n = n ? n.innerHTML : "", t ? s.setAttribute("href", t) : s.removeAttribute("href"), s.classList[t || n ? "remove" : "add"]("mm-hidden"), s.innerHTML = n);
      }), this.bind("initNavbar:after:sr-aria", function (e) {
        C.sr_aria(e.querySelector(".mm-navbar"), "hidden", !0);
      }), this.bind("openPanel:start:sr-aria", function (e) {
        C.sr_aria(s, "hidden", s.matches(".mm-hidden")), C.sr_aria(s, "owns", (s.getAttribute("href") || "").slice(1));
      });
    },
    searchfield: function searchfield(e) {
      "object" != l(this.opts.searchfield) && (this.opts.searchfield = {});
      var t = p("div.mm-navbar__searchfield");
      e.append(t), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = [t];
    },
    title: function title(e) {
      var t,
          n,
          i,
          s = this,
          a = p("a.mm-navbar__title"),
          r = p("span");
      a.append(r), e.append(a), this.bind("openPanel:start", function (e) {
        e.parentElement.matches(".mm-listitem_vertical") || ((n = e.querySelector("." + s.conf.classNames.navbars.panelTitle)) || (n = e.querySelector(".mm-navbar__title span")), (t = n && n.closest("a") ? n.closest("a").getAttribute("href") : "") ? a.setAttribute("href", t) : a.removeAttribute("href"), n = n ? n.innerHTML : "", r.innerHTML = n);
      }), this.bind("openPanel:start:sr-aria", function (e) {
        var t;
        s.opts.screenReader.text && (i || f(s.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach(function (e) {
          (e = e.querySelector(".mm-btn_prev")) && (i = e);
        }), i && (t = !0, "parent" == s.opts.navbar.titleLink && (t = !i.matches(".mm-hidden")), C.sr_aria(a, "hidden", t)));
      });
    }
  }, C.options.pageScroll = {
    scroll: !(q.navbarTypes = {
      tabs: function tabs(e) {
        var n = this;
        e.classList.add("mm-navbar_tabs"), e.parentElement.classList.add("mm-navbars_has-tabs");
        var i = f(e, "a");
        e.addEventListener("click", function (e) {
          var t = e.target;
          if (t.matches("a")) if (t.matches(".mm-navbar__tab_selected")) e.stopImmediatePropagation();else try {
            n.openPanel(n.node.menu.querySelector(t.getAttribute("href")), !1), e.stopImmediatePropagation();
          } catch (e) {}
        }), this.bind("openPanel:start", function e(t) {
          i.forEach(function (e) {
            e.classList.remove("mm-navbar__tab_selected");
          });
          var n = i.filter(function (e) {
            return e.matches('[href="#' + t.id + '"]');
          })[0];
          n ? n.classList.add("mm-navbar__tab_selected") : (n = t.mmParent) && e.call(this, n.closest(".mm-panel"));
        });
      }
    }),
    update: !1
  }, C.configs.pageScroll = {
    scrollOffset: 0,
    updateOffset: 50
  }, u({
    Search: "Zoeken",
    "No results found.": "Geen resultaten gevonden.",
    cancel: "annuleren"
  }, "nl"), u({
    Search: "Ш¬ШіШЄШ¬Щ€",
    "No results found.": "Щ†ШЄЫЊШ¬Щ‡вЂЊШ§ЫЊ ЫЊШ§ЩЃШЄ Щ†ШґШЇ.",
    cancel: "Ш§Щ†ШµШ±Ш§ЩЃ"
  }, "fa"), u({
    Search: "Suche",
    "No results found.": "Keine Ergebnisse gefunden.",
    cancel: "beenden"
  }, "de"), u({
    Search: "РќР°Р№С‚Рё",
    "No results found.": "РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ.",
    cancel: "РѕС‚РјРµРЅРёС‚СЊ"
  }, "ru"), C.options.searchfield = {
    add: !1,
    addTo: "panels",
    cancel: !1,
    noResults: "No results found.",
    placeholder: "Search",
    panel: {
      add: !1,
      dividers: !0,
      fx: "none",
      id: null,
      splash: null,
      title: "Search"
    },
    search: !0,
    showTextItems: !1,
    showSubPanels: !0
  }, C.configs.searchfield = {
    clear: !1,
    form: !1,
    input: !1,
    submit: !1
  }, C.prototype.search = function (i, s) {
    var a = this,
        r = this.opts.searchfield;
    this.conf.searchfield, s = (s = s || "" + i.value).toLowerCase().trim();
    var t,
        o,
        e = i.mmSearchfield,
        n = v(i.closest(".mm-searchfield"), ".mm-btn"),
        l = f(this.node.pnls, ".mm-panel_search")[0],
        c = e.panels,
        d = e.noresults,
        u = e.listitems,
        h = e.dividers;
    u.forEach(function (e) {
      e.classList.remove("mm-listitem_nosubitems"), e.classList.remove("mm-listitem_onlysubitems"), e.classList.remove("mm-hidden");
    }), l && (f(l, ".mm-listview")[0].innerHTML = ""), c.forEach(function (e) {
      e.scrollTop = 0;
    }), s.length ? (h.forEach(function (e) {
      e.classList.add("mm-hidden");
    }), u.forEach(function (e) {
      var t = f(e, ".mm-listitem__text")[0],
          n = !1;
      t && -1 < Array.prototype.slice.call(t.childNodes).filter(function (e) {
        return 3 == e.nodeType;
      }).map(function (e) {
        return e.textContent;
      }).join(" ").toLowerCase().indexOf(s) && (t.matches(".mm-listitem__btn") ? r.showSubPanels && (n = !0) : (t.matches("a") || r.showTextItems) && (n = !0)), n || e.classList.add("mm-hidden");
    }), t = u.filter(function (e) {
      return !e.matches(".mm-hidden");
    }).length, r.panel.add ? (o = [], c.forEach(function (e) {
      var t,
          n = g(v(e, ".mm-listitem"));
      (n = n.filter(function (e) {
        return !e.matches(".mm-hidden");
      })).length && (r.panel.dividers && (t = p("li.mm-divider"), (e = v(e, ".mm-navbar__title")[0]) && (t.innerHTML = e.innerHTML, o.push(t))), n.forEach(function (e) {
        o.push(e.cloneNode(!0));
      }));
    }), o.forEach(function (e) {
      e.querySelectorAll(".mm-toggle, .mm-check").forEach(function (e) {
        e.remove();
      });
    }), (e = f(l, ".mm-listview")[0]).append.apply(e, o), this.openPanel(l)) : (r.showSubPanels && c.forEach(function (e) {
      g(v(e, ".mm-listitem")).forEach(function (e) {
        (e = e.mmChild) && v(e, ".mm-listitem").forEach(function (e) {
          e.classList.remove("mm-hidden");
        });
      });
    }), function () {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
        e += arguments[t].length;
      }

      for (var i = Array(e), s = 0, t = 0; t < n; t++) {
        for (var a = arguments[t], r = 0, o = a.length; r < o; r++, s++) {
          i[s] = a[r];
        }
      }

      return i;
    }(c).reverse().forEach(function (e, t) {
      var n = e.mmParent;
      n && (g(v(e, ".mm-listitem")).length ? (n.matches(".mm-hidden") && n.classList.remove("mm-hidden"), n.classList.add("mm-listitem_onlysubitems")) : i.closest(".mm-panel") || ((e.matches(".mm-panel_opened") || e.matches(".mm-panel_opened-parent")) && setTimeout(function () {
        a.openPanel(n.closest(".mm-panel"));
      }, (t + 1) * (1.5 * a.conf.openingInterval)), n.classList.add("mm-listitem_nosubitems")));
    }), c.forEach(function (e) {
      g(v(e, ".mm-listitem")).forEach(function (e) {
        m(e, ".mm-listitem_vertical").forEach(function (e) {
          e.matches(".mm-hidden") && (e.classList.remove("mm-hidden"), e.classList.add("mm-listitem_onlysubitems"));
        });
      });
    }), c.forEach(function (e) {
      g(v(e, ".mm-listitem")).forEach(function (n) {
        var e = function () {
          for (var e = [], t = n.previousElementSibling; t;) {
            t.matches(".mm-divider") && e.push(t), t = t.previousElementSibling;
          }

          return e;
        }()[0];

        e && e.classList.remove("mm-hidden");
      });
    })), n.forEach(function (e) {
      return e.classList.remove("mm-hidden");
    }), d.forEach(function (e) {
      v(e, ".mm-panel__noresultsmsg").forEach(function (e) {
        return e.classList[t ? "add" : "remove"]("mm-hidden");
      });
    }), r.panel.add && (r.panel.splash && v(l, ".mm-panel__content").forEach(function (e) {
      return e.classList.add("mm-hidden");
    }), u.forEach(function (e) {
      return e.classList.remove("mm-hidden");
    }), h.forEach(function (e) {
      return e.classList.remove("mm-hidden");
    }))) : (u.forEach(function (e) {
      return e.classList.remove("mm-hidden");
    }), h.forEach(function (e) {
      return e.classList.remove("mm-hidden");
    }), n.forEach(function (e) {
      return e.classList.add("mm-hidden");
    }), d.forEach(function (e) {
      v(e, ".mm-panel__noresultsmsg").forEach(function (e) {
        return e.classList.add("mm-hidden");
      });
    }), r.panel.add && (r.panel.splash ? v(l, ".mm-panel__content").forEach(function (e) {
      return e.classList.remove("mm-hidden");
    }) : i.closest(".mm-panel_search") || (l = f(this.node.pnls, ".mm-panel_opened-parent"), this.openPanel(l.slice(-1)[0])))), this.trigger("updateListview");
  }, C.options.sectionIndexer = {
    add: !1,
    addTo: "panels"
  }, C.options.setSelected = {
    current: !0,
    hover: !1,
    parent: !1
  }, C.options.sidebar = {
    collapsed: {
      use: !1,
      blockMenu: !0,
      hideDivider: !1,
      hideNavbar: !0
    },
    expanded: {
      use: !1,
      initial: "open"
    }
  }, C.configs.classNames.toggles = {
    toggle: "Toggle",
    check: "Check"
  }, C.addons = {
    offcanvas: function offcanvas() {
      var e,
          t,
          s = this;
      this.opts.offCanvas && (t = "object" != _typeof(t = this.opts.offCanvas) ? {} : t, this.opts.offCanvas = c(t, C.options.offCanvas), e = this.conf.offCanvas, this._api.push("open", "close", "setPage"), this.vars.opened = !1, this.bind("initMenu:before", function () {
        e.clone && (s.node.menu = s.node.menu.cloneNode(!0), s.node.menu.id && (s.node.menu.id = "mm-" + s.node.menu.id), v(s.node.menu, "[id]").forEach(function (e) {
          e.id = "mm-" + e.id;
        })), s.node.wrpr = document.body, document.querySelector(e.menu.insertSelector)[e.menu.insertMethod](s.node.menu);
      }), this.bind("initMenu:after", function () {
        (function () {
          var t = this;
          this.trigger("initBlocker:before");
          var e,
              n = this.opts.offCanvas,
              i = this.conf.offCanvas;
          n.blockUI && (C.node.blck || ((e = p("div.mm-wrapper__blocker.mm-slideout")).innerHTML = "<a></a>", document.querySelector(i.menu.insertSelector).append(e), C.node.blck = e), C.node.blck.addEventListener("mousedown", e = function e(_e130) {
            _e130.preventDefault(), _e130.stopPropagation(), t.node.wrpr.matches(".mm-wrapper_modal") || t.close();
          }), C.node.blck.addEventListener("touchstart", e), C.node.blck.addEventListener("touchmove", e), this.trigger("initBlocker:after"));
        }).call(s), s.setPage(C.node.page), function () {
          var t = this;
          k(document.body, "keydown.tabguard"), S(document.body, "keydown.tabguard", function (e) {
            9 == e.keyCode && t.node.wrpr.matches(".mm-wrapper_opened") && e.preventDefault();
          });
        }.call(s), s.node.menu.classList.add("mm-menu_offcanvas");
        var e,
            t = window.location.hash;
        !t || (e = a(s.node.menu.id)) && e == t.slice(1) && setTimeout(function () {
          s.open();
        }, 1e3);
      }), this.bind("setPage:after", function (t) {
        C.node.blck && f(C.node.blck, "a").forEach(function (e) {
          e.setAttribute("href", "#" + t.id);
        });
      }), this.bind("open:start:sr-aria", function () {
        C.sr_aria(s.node.menu, "hidden", !1);
      }), this.bind("close:finish:sr-aria", function () {
        C.sr_aria(s.node.menu, "hidden", !0);
      }), this.bind("initMenu:after:sr-aria", function () {
        C.sr_aria(s.node.menu, "hidden", !0);
      }), this.bind("initBlocker:after:sr-text", function () {
        f(C.node.blck, "a").forEach(function (e) {
          e.innerHTML = C.sr_text(s.i18n(s.conf.screenReader.text.closeMenu));
        });
      }), this.clck.push(function (e, t) {
        var n = a(s.node.menu.id);

        if (n && e.matches('[href="#' + n + '"]')) {
          if (t.inMenu) return s.open(), !0;
          var i = e.closest(".mm-menu");
          return i && (t = i.mmApi) && t.close ? (t.close(), d(i, function () {
            s.open();
          }, s.conf.transitionDuration), !0) : (s.open(), !0);
        }

        if ((n = C.node.page.id) && e.matches('[href="#' + n + '"]')) return s.close(), !0;
      }));
    },
    screenReader: function screenReader() {
      var i = this,
          e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.screenReader) ? {
        aria: e,
        text: e
      } : e) ? {} : e;
      this.opts.screenReader = c(e, C.options.screenReader);
      var n = this.conf.screenReader;
      e.aria && (this.bind("initAddons:after", function () {
        i.bind("initMenu:after", function () {
          this.trigger("initMenu:after:sr-aria", [].slice.call(arguments));
        }), i.bind("initNavbar:after", function () {
          this.trigger("initNavbar:after:sr-aria", [].slice.call(arguments));
        }), i.bind("openPanel:start", function () {
          this.trigger("openPanel:start:sr-aria", [].slice.call(arguments));
        }), i.bind("close:start", function () {
          this.trigger("close:start:sr-aria", [].slice.call(arguments));
        }), i.bind("close:finish", function () {
          this.trigger("close:finish:sr-aria", [].slice.call(arguments));
        }), i.bind("open:start", function () {
          this.trigger("open:start:sr-aria", [].slice.call(arguments));
        }), i.bind("initOpened:after", function () {
          this.trigger("initOpened:after:sr-aria", [].slice.call(arguments));
        });
      }), this.bind("updateListview", function () {
        i.node.pnls.querySelectorAll(".mm-listitem").forEach(function (e) {
          C.sr_aria(e, "hidden", e.matches(".mm-hidden"));
        });
      }), this.bind("openPanel:start", function (t) {
        var e = v(i.node.pnls, ".mm-panel").filter(function (e) {
          return e !== t;
        }).filter(function (e) {
          return !e.parentElement.matches(".mm-panel");
        }),
            n = [t];
        v(t, ".mm-listitem_vertical .mm-listitem_opened").forEach(function (e) {
          n.push.apply(n, f(e, ".mm-panel"));
        }), e.forEach(function (e) {
          C.sr_aria(e, "hidden", !0);
        }), n.forEach(function (e) {
          C.sr_aria(e, "hidden", !1);
        });
      }), this.bind("closePanel", function (e) {
        C.sr_aria(e, "hidden", !0);
      }), this.bind("initNavbar:after", function (e) {
        var t = f(e, ".mm-navbar")[0],
            e = t.matches(".mm-hidden");
        C.sr_aria(t, "hidden", e);
      }), e.text && "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function (e) {
        var t = f(e, ".mm-navbar")[0],
            e = !!t.querySelector(".mm-btn_prev");
        C.sr_aria(v(t, ".mm-navbar__title")[0], "hidden", e);
      })), e.text && (this.bind("initAddons:after", function () {
        i.bind("setPage:after", function () {
          this.trigger("setPage:after:sr-text", [].slice.call(arguments));
        }), i.bind("initBlocker:after", function () {
          this.trigger("initBlocker:after:sr-text", [].slice.call(arguments));
        });
      }), this.bind("initNavbar:after", function (e) {
        !(e = f(e, ".mm-navbar")[0]) || (e = f(e, ".mm-btn_prev")[0]) && (e.innerHTML = C.sr_text(i.i18n(n.text.closeSubmenu)));
      }), this.bind("initListview:after", function (e) {
        var t = e.closest(".mm-panel").mmParent;
        !t || (e = f(t, ".mm-btn_next")[0]) && (t = i.i18n(n.text[e.parentElement.matches(".mm-listitem_vertical") ? "toggleSubmenu" : "openSubmenu"]), e.innerHTML += C.sr_text(t));
      }));
    },
    scrollBugFix: function scrollBugFix() {
      var t,
          n,
          e,
          i = this;

      function s(e) {
        e.preventDefault(), e.stopPropagation();
      }

      M && this.opts.offCanvas && this.opts.offCanvas.blockUI && (e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.scrollBugFix) ? {
        fix: e
      } : e) ? {} : e, this.opts.scrollBugFix = c(e, C.options.scrollBugFix), e.fix && (e = this.node.menu, t = "", e.addEventListener("touchmove", function (e) {
        t = "", 0 < e.movementY ? t = "down" : e.movementY < 0 && (t = "up");
      }), this.node.menu.addEventListener("scroll", s, {
        passive: !(n = {
          get: function get() {
            return t;
          }
        })
      }), this.node.menu.addEventListener("touchmove", function (e) {
        var t = e.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");
        (!(t = t && t.closest(".mm-listitem_vertical") ? m(t, ".mm-panel").pop() : t) || t.scrollHeight === t.offsetHeight || 0 == t.scrollTop && "down" == n.get() || t.scrollHeight == t.scrollTop + t.offsetHeight && "up" == n.get()) && s(e);
      }, {
        passive: !1
      }), this.bind("open:start", function () {
        var e = f(i.node.pnls, ".mm-panel_opened")[0];
        e && (e.scrollTop = 0);
      }), window.addEventListener("orientationchange", function (e) {
        var t = f(i.node.pnls, ".mm-panel_opened")[0];
        t && (t.scrollTop = 0, t.style["-webkit-overflow-scrolling"] = "auto", t.style["-webkit-overflow-scrolling"] = "touch");
      })));
    },
    autoHeight: function autoHeight() {
      var s,
          e,
          a = this,
          r = e = "object" != _typeof(e = "string" == typeof (e = "boolean" == typeof (e = this.opts.autoHeight) && e ? {
        height: "auto"
      } : e) ? {
        height: e
      } : e) ? {} : e;
      this.opts.autoHeight = c(r, C.options.autoHeight), "auto" != r.height && "highest" != r.height || (s = function s(e) {
        return e.parentElement.matches(".mm-listitem_vertical") ? m(e, ".mm-panel").filter(function (e) {
          return !e.parentElement.matches(".mm-listitem_vertical");
        })[0] : e;
      }, e = function e() {
        var t, e, n, i;
        a.opts.offCanvas && !a.vars.opened || (n = 0, i = a.node.menu.offsetHeight - a.node.pnls.offsetHeight, a.node.menu.classList.add("mm-menu_autoheight-measuring"), "auto" == r.height ? n = (e = (e = (e = f(a.node.pnls, ".mm-panel_opened")[0]) ? s(e) : e) || f(a.node.pnls, ".mm-panel")[0]).scrollHeight : "highest" == r.height && (t = 0, f(a.node.pnls, ".mm-panel").forEach(function (e) {
          e = s(e), t = Math.max(t, e.scrollHeight);
        }), n = t), a.node.menu.style.height = n + i + "px", a.node.menu.classList.remove("mm-menu_autoheight-measuring"));
      }, this.bind("initMenu:after", function () {
        a.node.menu.classList.add("mm-menu_autoheight");
      }), this.opts.offCanvas && this.bind("open:start", e), "highest" == r.height && this.bind("initPanels:after", e), "auto" == r.height && (this.bind("updateListview", e), this.bind("openPanel:start", e)));
    },
    backButton: function backButton() {
      var e,
          n,
          i,
          t,
          s = this;
      this.opts.offCanvas && (e = t = "object" != _typeof(t = "boolean" == typeof (t = this.opts.backButton) ? {
        close: t
      } : t) ? {} : t, this.opts.backButton = c(e, C.options.backButton), n = "#" + this.node.menu.id, e.close && (i = [], t = function t() {
        i = [n], f(s.node.pnls, ".mm-panel_opened, .mm-panel_opened-parent").forEach(function (e) {
          i.push("#" + e.id);
        });
      }, this.bind("open:finish", function () {
        history.pushState(null, document.title, n);
      }), this.bind("open:finish", t), this.bind("openPanel:finish", t), this.bind("close:finish", function () {
        i = [], history.back(), history.pushState(null, document.title, location.pathname + location.search);
      }), window.addEventListener("popstate", function (e) {
        var t;
        s.vars.opened && i.length && ((t = (i = i.slice(0, -1))[i.length - 1]) == n ? s.close() : (s.openPanel(s.node.menu.querySelector(t)), history.pushState(null, document.title, n)));
      })), e.open && window.addEventListener("popstate", function (e) {
        s.vars.opened || location.hash != n || s.open();
      }));
    },
    columns: function columns() {
      var e,
          i = this,
          s = ("number" == typeof (e = "object" != _typeof(e = "number" == typeof (e = "boolean" == typeof (e = this.opts.columns) ? {
        add: e
      } : e) ? {
        add: !0,
        visible: e
      } : e) ? {} : e).visible && (e.visible = {
        min: e.visible,
        max: e.visible
      }), e);

      if (this.opts.columns = c(s, C.options.columns), s.add) {
        s.visible.min = Math.max(1, Math.min(6, s.visible.min)), s.visible.max = Math.max(s.visible.min, Math.min(6, s.visible.max));

        for (var a = [], r = [], o = ["mm-panel_opened", "mm-panel_opened-parent", "mm-panel_highest"], t = 0; t <= s.visible.max; t++) {
          a.push("mm-menu_columns-" + t), r.push("mm-panel_columns-" + t);
        }

        o.push.apply(o, r), this.bind("openPanel:before", function (t) {
          if ((e = t ? t.mmParent : e) && !e.classList.contains("mm-listitem_vertical") && (e = e.closest(".mm-panel"))) {
            var e = e.className;
            if (e.length && (e = e.split("mm-panel_columns-")[1])) for (var n = parseInt(e.split(" ")[0], 10) + 1; 0 < n;) {
              if (!(t = f(i.node.pnls, ".mm-panel_columns-" + n)[0])) {
                n = -1;
                break;
              }

              n++, t.classList.add("mm-hidden"), o.forEach(function (e) {
                t.classList.remove(e);
              });
            }
          }
        }), this.bind("openPanel:start", function (e) {
          if (e) {
            var t = e.mmParent;
            if (t && t.classList.contains("mm-listitem_vertical")) return;
          }

          t = f(i.node.pnls, ".mm-panel_opened-parent").length, e.matches(".mm-panel_opened-parent") || t++, t = Math.min(s.visible.max, Math.max(s.visible.min, t)), a.forEach(function (e) {
            i.node.menu.classList.remove(e);
          }), i.node.menu.classList.add("mm-menu_columns-" + t);
          var n = [];
          f(i.node.pnls, ".mm-panel").forEach(function (t) {
            r.forEach(function (e) {
              t.classList.remove(e);
            }), t.matches(".mm-panel_opened-parent") && n.push(t);
          }), n.push(e), n.slice(-s.visible.max).forEach(function (e, t) {
            e.classList.add("mm-panel_columns-" + t);
          });
        });
      }
    },
    counters: function counters() {
      var e,
          n = this,
          t = ("panels" == (e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.counters) ? {
        add: e,
        addTo: "panels",
        count: e
      } : e) ? {} : e).addTo && (e.addTo = ".mm-listview"), e);
      this.opts.counters = c(t, C.options.counters), this.bind("initListview:after", function (e) {
        var t = n.conf.classNames.counters.counter;
        v(e, "." + t).forEach(function (e) {
          b(e, t, "mm-counter");
        });
      }), t.add && this.bind("initListview:after", function (e) {
        e.matches(t.addTo) && (!(e = e.closest(".mm-panel").mmParent) || v(e, ".mm-counter").length || (e = f(e, ".mm-btn")[0]) && e.prepend(p("span.mm-counter")));
      }), t.count && (this.bind("initListview:after", e = function e(_e131) {
        (_e131 ? [_e131.closest(".mm-panel")] : f(n.node.pnls, ".mm-panel")).forEach(function (e) {
          var t,
              n = e.mmParent;
          !n || (n = v(n, ".mm-counter")[0]) && (t = [], f(e, ".mm-listview").forEach(function (e) {
            t.push.apply(t, f(e));
          }), n.innerHTML = g(t).length.toString());
        });
      }), this.bind("updateListview", e));
    },
    dividers: function dividers() {
      var e,
          t = this,
          n = ("panels" == (e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.dividers) ? {
        add: e
      } : e) ? {} : e).addTo && (e.addTo = ".mm-listview"), e);
      this.opts.dividers = c(n, C.options.dividers), this.bind("initListview:after", function (e) {
        f(e).forEach(function (e) {
          b(e, t.conf.classNames.divider, "mm-divider"), e.matches(".mm-divider") && e.classList.remove("mm-listitem");
        });
      }), n.add && this.bind("initListview:after", function (i) {
        var s;
        i.matches(n.addTo) && (v(i, ".mm-divider").forEach(function (e) {
          e.remove();
        }), s = "", g(f(i)).forEach(function (e) {
          var t,
              n = f(e, ".mm-listitem__text")[0].textContent.trim().toLowerCase()[0];
          n.length && n != s && (s = n, (t = p("li.mm-divider")).textContent = n, i.insertBefore(t, e));
        }));
      });
    },
    drag: function drag() {
      var t,
          e,
          n = this;
      this.opts.offCanvas && (t = e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.drag) ? {
        open: e
      } : e) ? {} : e, this.opts.drag = c(t, C.options.drag), t.open && this.bind("setPage:after", function (e) {
        !function (e) {
          var i = this,
              s = {},
              a = !1;
          j && (k(j, "dragStart"), k(j, "dragMove"), k(j, "dragEnd")), z = new N(j = e), (e = Object.keys(i.opts.extensions)).length ? (w(e.join(", "), function () {}, function () {
            s = D(s, [], i.node.menu);
          }), e.forEach(function (e) {
            w(e, function () {
              s = D(s, i.opts.extensions[e], i.node.menu);
            }, function () {});
          })) : s = D(s, [], i.node.menu), j && (S(j, "dragStart", function (e) {
            e.detail.direction == s.direction && (a = !0, i.node.wrpr.classList.add("mm-wrapper_dragging"), i._openSetup(), i.trigger("open:start"), H = i.node.menu["x" == s.axis ? "clientWidth" : "clientHeight"]);
          }), S(j, "dragMove", function (e) {
            if (e.detail.axis == s.axis && a) {
              var t = e.detail["distance" + s.axis.toUpperCase()];

              switch (s.position) {
                case "right":
                case "bottom":
                  t = Math.min(Math.max(t, -H), 0);
                  break;

                default:
                  t = Math.max(Math.min(t, H), 0);
              }

              if ("front" == s.zposition) switch (s.position) {
                case "right":
                case "bottom":
                  t += H;
                  break;

                default:
                  t -= H;
              }
              s.slideOutNodes.forEach(function (e) {
                e.style.transform = "translate" + s.axis.toUpperCase() + "(" + t + "px)";
              });
            }
          }), S(j, "dragEnd", function (e) {
            if (e.detail.axis == s.axis && a) {
              a = !1, i.node.wrpr.classList.remove("mm-wrapper_dragging"), s.slideOutNodes.forEach(function (e) {
                e.style.transform = "";
              });
              var t = Math.abs(e.detail["distance" + s.axis.toUpperCase()]) >= .75 * H;

              if (!t) {
                var n = e.detail["movement" + s.axis.toUpperCase()];

                switch (s.position) {
                  case "right":
                  case "bottom":
                    t = n <= 0;
                    break;

                  default:
                    t = 0 <= n;
                }
              }

              t ? i._openStart() : i.close();
            }
          }));
        }.call(n, t.node || e);
      }));
    },
    dropdown: function dropdown() {
      var f,
          m,
          g,
          i,
          e,
          t = this;

      function n() {
        var t = this;

        if (this.vars.opened) {
          this.node.menu.setAttribute("style", this.node.menu.mmStyle);
          var e,
              n = [{}, []],
              n = i.call(this, "y", n);

          for (e in (n = i.call(this, "x", n))[0]) {
            this.node.menu.style[e] = n[0][e];
          }

          f.tip && (["mm-menu_tip-left", "mm-menu_tip-right", "mm-menu_tip-top", "mm-menu_tip-bottom"].forEach(function (e) {
            t.node.menu.classList.remove(e);
          }), n[1].forEach(function (e) {
            t.node.menu.classList.add(e);
          }));
        }
      }

      this.opts.offCanvas && ("string" == typeof (e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.dropdown) && e ? {
        drop: e
      } : e) ? {} : e).position && (e.position = {
        of: e.position
      }), f = e, this.opts.dropdown = c(f, C.options.dropdown), m = this.conf.dropdown, f.drop && (this.bind("initMenu:after", function () {
        var e;
        t.node.menu.classList.add("mm-menu_dropdown"), "string" != typeof f.position.of && (e = a(t.node.menu.id)) && (f.position.of = '[href="#' + e + '"]'), "string" == typeof f.position.of && (g = v(document.body, f.position.of)[0], 1 == (e = f.event.split(" ")).length && (e[1] = e[0]), "hover" == e[0] && g.addEventListener("mouseenter", function () {
          t.open();
        }, {
          passive: !0
        }), "hover" == e[1] && t.node.menu.addEventListener("mouseleave", function () {
          t.close();
        }, {
          passive: !0
        }));
      }), this.bind("open:start", function () {
        t.node.menu.mmStyle = t.node.menu.getAttribute("style"), t.node.wrpr.classList.add("mm-wrapper_dropdown");
      }), this.bind("close:finish", function () {
        t.node.menu.setAttribute("style", t.node.menu.mmStyle), t.node.wrpr.classList.remove("mm-wrapper_dropdown");
      }), i = function i(e, t) {
        var n,
            i,
            s = t[0],
            a = t[1],
            r = "x" == e ? "offsetWidth" : "offsetHeight",
            o = "x" == e ? "left" : "top",
            l = "x" == e ? "right" : "bottom",
            c = "x" == e ? "width" : "height",
            d = "x" == e ? "innerWidth" : "innerHeight",
            u = "x" == e ? "maxWidth" : "maxHeight",
            h = null,
            p = (t = (p = o, g.getBoundingClientRect()[p] + document.body["left" == p ? "scrollLeft" : "scrollTop"])) + g[r],
            r = window[d],
            d = m.offset.button[e] + m.offset.viewport[e];
        if (f.position[e]) switch (f.position[e]) {
          case "left":
          case "bottom":
            h = "after";
            break;

          case "right":
          case "top":
            h = "before";
        }
        return "after" == (h = null === h ? t + (p - t) / 2 < r / 2 ? "after" : "before" : h) ? (i = r - ((n = "x" == e ? t : p) + d), s[o] = n + m.offset.button[e] + "px", s[l] = "auto", f.tip && a.push("mm-menu_tip-" + ("x" == e ? "left" : "top"))) : (i = (n = "x" == e ? p : t) - d, s[l] = "calc( 100% - " + (n - m.offset.button[e]) + "px )", s[o] = "auto", f.tip && a.push("mm-menu_tip-" + ("x" == e ? "right" : "bottom"))), f.fitViewport && (s[u] = Math.min(m[c].max, i) + "px"), [s, a];
      }, this.bind("open:start", n), window.addEventListener("resize", function (e) {
        n.call(t);
      }, {
        passive: !0
      }), this.opts.offCanvas.blockUI || window.addEventListener("scroll", function (e) {
        n.call(t);
      }, {
        passive: !0
      })));
    },
    fixedElements: function fixedElements() {
      var t,
          n,
          i,
          s = this;
      this.opts.offCanvas && (i = this.conf.fixedElements, this.bind("setPage:after", function (e) {
        t = s.conf.classNames.fixedElements.fixed, n = v(document, i.insertSelector)[0], v(e, "." + t).forEach(function (e) {
          b(e, t, "mm-slideout"), n[i.insertMethod](e);
        });
      }));
    },
    iconbar: function iconbar() {
      var r,
          e,
          t,
          _n39,
          i = this,
          o = ("array" == l(t = this.opts.iconbar) && (t = {
        use: !0,
        top: t
      }), void 0 === (t = "object" != l(t) ? {} : t).use && (t.use = !0), "boolean" == typeof t.use && t.use && (t.use = !0), t);

      this.opts.iconbar = c(o, C.options.iconbar), o.use && (["top", "bottom"].forEach(function (e, t) {
        var n = o[e];
        "array" != l(n) && (n = [n]);

        for (var i = p("div.mm-iconbar__" + e), s = 0, a = n.length; s < a; s++) {
          "string" == typeof n[s] ? i.innerHTML += n[s] : i.append(n[s]);
        }

        i.children.length && (r = r || p("div.mm-iconbar")).append(i);
      }), r) && (this.bind("initMenu:after", function () {
        i.node.menu.prepend(r);
      }), e = "mm-menu_iconbar-" + o.position, t = function t() {
        i.node.menu.classList.add(e), C.sr_aria(r, "hidden", !1);
      }, "boolean" == typeof o.use ? this.bind("initMenu:after", t) : w(o.use, t, function () {
        i.node.menu.classList.remove(e), C.sr_aria(r, "hidden", !0);
      }), "tabs" == o.type && (r.classList.add("mm-iconbar_tabs"), r.addEventListener("click", function (e) {
        var t = e.target;
        if (t.matches("a")) if (t.matches(".mm-iconbar__tab_selected")) e.stopImmediatePropagation();else try {
          var n = i.node.menu.querySelector(t.getAttribute("href"))[0];
          n && n.matches(".mm-panel") && (e.preventDefault(), e.stopImmediatePropagation(), i.openPanel(n, !1));
        } catch (e) {}
      }), this.bind("openPanel:start", _n39 = function n(e) {
        v(r, "a").forEach(function (e) {
          e.classList.remove("mm-iconbar__tab_selected");
        });
        var t = v(r, '[href="#' + e.id + '"]')[0];
        t ? t.classList.add("mm-iconbar__tab_selected") : (e = e.mmParent) && _n39(e.closest(".mm-panel"));
      })));
    },
    iconPanels: function iconPanels() {
      var e,
          i = this,
          s = e = "object" != _typeof(e = "number" == typeof (e = "boolean" == typeof (e = this.opts.iconPanels) ? {
        add: e
      } : e) || "string" == typeof e ? {
        add: !0,
        visible: e
      } : e) ? {} : e;
      this.opts.iconPanels = c(s, C.options.iconPanels);
      var a = !1;

      if ("first" == s.visible && (a = !0, s.visible = 1), s.visible = Math.min(3, Math.max(1, s.visible)), s.visible++, s.add) {
        this.bind("initMenu:after", function () {
          var e = ["mm-menu_iconpanel"];
          s.hideNavbar && e.push("mm-menu_hidenavbar"), s.hideDivider && e.push("mm-menu_hidedivider"), e.forEach(function (e) {
            i.node.menu.classList.add(e);
          });
        });
        var r = [];
        if (!a) for (var t = 0; t <= s.visible; t++) {
          r.push("mm-panel_iconpanel-" + t);
        }
        this.bind("openPanel:start", function (t) {
          var n,
              e = f(i.node.pnls, ".mm-panel");
          (t = t || e[0]).parentElement.matches(".mm-listitem_vertical") || (a ? e.forEach(function (e, t) {
            e.classList[0 == t ? "add" : "remove"]("mm-panel_iconpanel-first");
          }) : (e.forEach(function (t) {
            r.forEach(function (e) {
              t.classList.remove(e);
            });
          }), e = e.filter(function (e) {
            return e.matches(".mm-panel_opened-parent");
          }), n = !1, e.forEach(function (e) {
            t === e && (n = !0);
          }), n || e.push(t), e.forEach(function (e) {
            e.classList.remove("mm-hidden");
          }), (e = e.slice(-s.visible)).forEach(function (e, t) {
            e.classList.add("mm-panel_iconpanel-" + t);
          })));
        }), this.bind("initPanel:after", function (e) {
          var t;
          !s.blockPanel || e.parentElement.matches(".mm-listitem_vertical") || f(e, ".mm-panel__blocker")[0] || ((t = p("a.mm-panel__blocker")).setAttribute("href", "#" + e.closest(".mm-panel").id), e.prepend(t));
        });
      }
    },
    keyboardNavigation: function keyboardNavigation() {
      var s,
          e,
          t,
          n,
          a,
          i,
          r = this;
      M || (s = i = "object" != _typeof(i = "boolean" == typeof (i = this.opts.keyboardNavigation) || "string" == typeof i ? {
        enable: i
      } : i) ? {} : i, this.opts.keyboardNavigation = c(s, C.options.keyboardNavigation), s.enable && (e = p("button.mm-tabstart.mm-sronly"), t = p("button.mm-tabend.mm-sronly"), n = p("button.mm-tabend.mm-sronly"), this.bind("initMenu:after", function () {
        s.enhance && r.node.menu.classList.add("mm-menu_keyboardfocus"), function (a) {
          var n = this;
          k(document.body, "keydown.tabguard"), k(document.body, "focusin.tabguard"), S(document.body, "focusin.tabguard", function (e) {
            var t;
            !n.node.wrpr.matches(".mm-wrapper_opened") || (t = e.target).matches(".mm-tabend") && (e = void 0, t.parentElement.matches(".mm-menu") && C.node.blck && (e = C.node.blck), (e = (e = t.parentElement.matches(".mm-wrapper__blocker") ? v(document.body, ".mm-menu_offcanvas.mm-menu_opened")[0] : e) || t.parentElement) && f(e, ".mm-tabstart")[0].focus());
          }), k(document.body, "keydown.navigate"), S(document.body, "keydown.navigate", function (e) {
            var t = e.target,
                n = t.closest(".mm-menu");

            if (n) {
              if (n.mmApi, !t.matches("input, textarea")) switch (e.keyCode) {
                case 13:
                  (t.matches(".mm-toggle") || t.matches(".mm-check")) && t.dispatchEvent(new Event("click"));
                  break;

                case 32:
                case 37:
                case 38:
                case 39:
                case 40:
                  e.preventDefault();
              }
              if (a) if (t.matches("input")) 27 === e.keyCode && (t.value = "");else {
                var i = n.mmApi;

                switch (e.keyCode) {
                  case 8:
                    var s = v(n, ".mm-panel_opened")[0].mmParent;
                    s && i.openPanel(s.closest(".mm-panel"));
                    break;

                  case 27:
                    n.matches(".mm-menu_offcanvas") && i.close();
                }
              }
            }
          });
        }.call(r, s.enhance);
      }), this.bind("initOpened:before", function () {
        r.node.menu.prepend(e), r.node.menu.append(t), f(r.node.menu, ".mm-navbars-top, .mm-navbars-bottom").forEach(function (e) {
          e.querySelectorAll(".mm-navbar__title").forEach(function (e) {
            e.setAttribute("tabindex", "-1");
          });
        });
      }), this.bind("initBlocker:after", function () {
        C.node.blck.append(n), f(C.node.blck, "a")[0].classList.add("mm-tabstart");
      }), a = "input, select, textarea, button, label, a[href]", this.bind("open:finish", i = function i(e) {
        e = e || f(r.node.pnls, ".mm-panel_opened")[0];
        var t,
            n = null,
            i = document.activeElement.closest(".mm-navbar");
        i && i.closest(".mm-menu") == r.node.menu || ("default" != s.enable || (n = (n = v(e, ".mm-listview a[href]:not(.mm-hidden)")[0]) ? n : v(e, a + ":not(.mm-hidden)")[0]) || (t = [], f(r.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach(function (e) {
          t.push.apply(t, v(e, a + ":not(.mm-hidden)"));
        }), n = t[0]), (n = n || f(r.node.menu, ".mm-tabstart")[0]) && n.focus());
      }), this.bind("openPanel:finish", i), this.bind("initOpened:after:sr-aria", function () {
        [r.node.menu, C.node.blck].forEach(function (e) {
          f(e, ".mm-tabstart, .mm-tabend").forEach(function (e) {
            C.sr_aria(e, "hidden", !0), C.sr_role(e, "presentation");
          });
        });
      })));
    },
    lazySubmenus: function lazySubmenus() {
      var n = this,
          e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.lazySubmenus) ? {
        load: e
      } : e) ? {} : e;
      this.opts.lazySubmenus = c(e, C.options.lazySubmenus), e.load && (this.bind("initPanels:before", function () {
        var t = [];
        v(n.node.pnls, "li").forEach(function (e) {
          t.push.apply(t, f(e, n.conf.panelNodetype.join(", ")));
        }), t.filter(function (e) {
          return !e.matches(".mm-listview_inset");
        }).filter(function (e) {
          return !e.matches(".mm-nolistview");
        }).filter(function (e) {
          return !e.matches(".mm-nopanel");
        }).forEach(function (t) {
          ["mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel"].forEach(function (e) {
            t.classList.add(e);
          });
        });
      }), this.bind("initPanels:before", function () {
        var t = [];
        v(n.node.pnls, "." + n.conf.classNames.selected).forEach(function (e) {
          t.push.apply(t, m(e, ".mm-panel_lazysubmenu"));
        }), t.length && t.forEach(function (t) {
          console.log(t), ["mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel"].forEach(function (e) {
            t.classList.remove(e);
          });
        });
      }), this.bind("openPanel:before", function (e) {
        var t = v(e, ".mm-panel_lazysubmenu").filter(function (e) {
          return !e.matches(".mm-panel_lazysubmenu .mm-panel_lazysubmenu");
        });
        e.matches(".mm-panel_lazysubmenu") && t.unshift(e), t.forEach(function (t) {
          ["mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel"].forEach(function (e) {
            t.classList.remove(e);
          }), n.initPanel(t);
        });
      }));
    },
    navbars: q,
    pageScroll: function pageScroll() {
      var s = this,
          e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.pageScroll) ? {
        scroll: e
      } : e) ? {} : e;
      this.opts.pageScroll = c(e, C.options.pageScroll);
      var n,
          a,
          r,
          o = this.conf.pageScroll;

      function i() {
        n && window.scrollTo({
          top: n.getBoundingClientRect().top + document.scrollingElement.scrollTop - o.scrollOffset,
          behavior: "smooth"
        }), n = null;
      }

      function l(e) {
        try {
          return "#" != e && "#" == e.slice(0, 1) ? C.node.page.querySelector(e) : null;
        } catch (e) {
          return null;
        }
      }

      e.scroll && this.bind("close:finish", function () {
        i();
      }), this.opts.offCanvas && e.scroll && this.clck.push(function (e, t) {
        if (n = null, t.inMenu && (e = e.getAttribute("href"), n = l(e))) return s.node.menu.matches(".mm-menu_sidebar-expanded") && s.node.wrpr.matches(".mm-wrapper_sidebar-expanded") ? void i() : {
          close: !0
        };
      }), e.update && (a = [], this.bind("initListview:after", function (e) {
        h(f(e, ".mm-listitem")).forEach(function (e) {
          (e = l(e.getAttribute("href"))) && a.unshift(e);
        });
      }), r = -1, window.addEventListener("scroll", function (e) {
        for (var t, n = window.scrollY, i = 0; i < a.length; i++) {
          if (a[i].offsetTop < n + o.updateOffset) {
            r !== i && (r = i, (t = (t = h(v(f(s.node.pnls, ".mm-panel_opened")[0], ".mm-listitem"))).filter(function (e) {
              return e.matches('[href="#' + a[i].id + '"]');
            })).length && s.setSelected(t[0].parentElement));
            break;
          }
        }
      }));
    },
    searchfield: function searchfield() {
      var e,
          i = this,
          s = ("boolean" == typeof (e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.searchfield) ? {
        add: e
      } : e) ? {} : e).panel && (e.panel = {
        add: e.panel
      }), "object" != _typeof(e.panel) && (e.panel = {}), "panel" == e.addTo && (e.panel.add = !0), e.panel.add && (e.showSubPanels = !1, e.panel.splash && (e.cancel = !0)), e);
      this.opts.searchfield = c(s, C.options.searchfield), this.conf.searchfield, s.add && (this.bind("close:start", function () {
        v(i.node.menu, ".mm-searchfield").forEach(function (e) {
          e.blur();
        });
      }), this.bind("initPanel:after", function (e) {
        var t = null;
        s.panel.add && (t = function () {
          var e = this.opts.searchfield,
              t = (this.conf.searchfield, f(this.node.pnls, ".mm-panel_search")[0]);
          if (t) return t;
          t = p("div.mm-panel.mm-panel_search.mm-hidden"), e.panel.id && (t.id = e.panel.id), e.panel.title && t.setAttribute("data-mm-title", e.panel.title);
          var n = p("ul");

          switch (t.append(n), this.node.pnls.append(t), this.initListview(n), this._initNavbar(t), e.panel.fx) {
            case !1:
              break;

            case "none":
              t.classList.add("mm-panel_noanimation");
              break;

            default:
              t.classList.add("mm-panel_fx-" + e.panel.fx);
          }

          return e.panel.splash && ((n = p("div.mm-panel__content")).innerHTML = e.panel.splash, t.append(n)), t.classList.add("mm-panel"), t.classList.add("mm-hidden"), this.node.pnls.append(t), t;
        }.call(i));
        var n = null;

        switch (s.addTo) {
          case "panels":
            n = [e];
            break;

          case "panel":
            n = [t];
            break;

          default:
            "string" == typeof s.addTo ? n = v(i.node.menu, s.addTo) : "array" == l(s.addTo) && (n = s.addTo);
        }

        n.forEach(function (e) {
          e = function (e) {
            var t = this.opts.searchfield,
                n = this.conf.searchfield;
            if (e.parentElement.matches(".mm-listitem_vertical")) return null;
            if (a = v(e, ".mm-searchfield")[0]) return a;

            function i(e, t) {
              if (t) for (var n in t) {
                e.setAttribute(n, t[n]);
              }
            }

            var s,
                a = p((n.form ? "form" : "div") + ".mm-searchfield"),
                r = p("div.mm-searchfield__input"),
                o = p("input");
            return o.type = "text", o.autocomplete = "off", o.placeholder = this.i18n(t.placeholder), r.append(o), a.append(r), e.prepend(a), i(o, n.input), n.clear && ((s = p("a.mm-btn.mm-btn_close.mm-searchfield__btn")).setAttribute("href", "#"), r.append(s)), i(a, n.form), n.form && n.submit && !n.clear && ((s = p("a.mm-btn.mm-btn_next.mm-searchfield__btn")).setAttribute("href", "#"), r.append(s)), t.cancel && ((s = p("a.mm-searchfield__cancel")).setAttribute("href", "#"), s.textContent = this.i18n("cancel"), a.append(s)), a;
          }.call(i, e), s.search && e && function (e) {
            var n = this,
                t = this.opts.searchfield,
                i = (this.conf.searchfield, {});
            e.closest(".mm-panel_search") ? (i.panels = v(this.node.pnls, ".mm-panel"), i.noresults = [e.closest(".mm-panel")]) : e.closest(".mm-panel") ? (i.panels = [e.closest(".mm-panel")], i.noresults = i.panels) : (i.panels = v(this.node.pnls, ".mm-panel"), i.noresults = [this.node.menu]), i.panels = i.panels.filter(function (e) {
              return !e.matches(".mm-panel_search");
            }), i.panels = i.panels.filter(function (e) {
              return !e.parentElement.matches(".mm-listitem_vertical");
            }), i.listitems = [], i.dividers = [], i.panels.forEach(function (e) {
              var t;
              (t = i.listitems).push.apply(t, v(e, ".mm-listitem")), (t = i.dividers).push.apply(t, v(e, ".mm-divider"));
            });
            var s = f(this.node.pnls, ".mm-panel_search")[0],
                a = v(e, "input")[0],
                r = v(e, ".mm-searchfield__cancel")[0];
            a.mmSearchfield = i, t.panel.add && t.panel.splash && (k(a, "focus.splash"), S(a, "focus.splash", function (e) {
              n.openPanel(s);
            })), t.cancel && (k(a, "focus.cancel"), S(a, "focus.cancel", function (e) {
              r.classList.add("mm-searchfield__cancel-active");
            }), k(r, "click.splash"), S(r, "click.splash", function (e) {
              var t;
              e.preventDefault(), r.classList.remove("mm-searchfield__cancel-active"), s.matches(".mm-panel_opened") && (t = f(n.node.pnls, ".mm-panel_opened-parent")).length && n.openPanel(t[t.length - 1]);
            })), t.panel.add && "panel" == t.addTo && this.bind("openPanel:finish", function (e) {
              e === s && a.focus();
            }), k(a, "input.search"), S(a, "input.search", function (e) {
              switch (e.keyCode) {
                case 9:
                case 16:
                case 17:
                case 18:
                case 37:
                case 38:
                case 39:
                case 40:
                  break;

                default:
                  n.search(a);
              }
            }), this.search(a);
          }.call(i, e);
        }), s.noResults && function (e) {
          var t, n;
          e && (t = this.opts.searchfield, this.conf.searchfield, e.closest(".mm-panel") || (e = f(this.node.pnls, ".mm-panel")[0]), f(e, ".mm-panel__noresultsmsg").length || ((n = p("div.mm-panel__noresultsmsg.mm-hidden")).innerHTML = this.i18n(t.noResults), e.append(n)));
        }.call(i, s.panel.add ? t : e);
      }), this.clck.push(function (e, t) {
        var n;
        if (t.inMenu && e.matches(".mm-searchfield__btn")) return e.matches(".mm-btn_close") ? ((t = v(n = e.closest(".mm-searchfield"), "input")[0]).value = "", i.search(t), !0) : e.matches(".mm-btn_next") ? ((n = e.closest("form")) && n.submit(), !0) : void 0;
      }));
    },
    sectionIndexer: function sectionIndexer() {
      var s = this,
          e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.sectionIndexer) ? {
        add: e
      } : e) ? {} : e;
      this.opts.sectionIndexer = c(e, C.options.sectionIndexer), e.add && this.bind("initPanels:after", function () {
        var t, e;
        s.node.indx || (t = "", "abcdefghijklmnopqrstuvwxyz".split("").forEach(function (e) {
          t += '<a href="#">' + e + "</a>";
        }), (e = p("div.mm-sectionindexer")).innerHTML = t, s.node.pnls.prepend(e), s.node.indx = e, s.node.indx.addEventListener("click", function (e) {
          e.target.matches("a") && e.preventDefault();
        }), e = function e(_e132) {
          var t, n, i;
          _e132.target.matches("a") && (t = _e132.target.textContent, n = f(s.node.pnls, ".mm-panel_opened")[0], i = -1, _e132 = n.scrollTop, n.scrollTop = 0, v(n, ".mm-divider").filter(function (e) {
            return !e.matches(".mm-hidden");
          }).forEach(function (e) {
            i < 0 && t == e.textContent.trim().slice(0, 1).toLowerCase() && (i = e.offsetTop);
          }), n.scrollTop = -1 < i ? i : _e132);
        }, M ? (s.node.indx.addEventListener("touchstart", e), s.node.indx.addEventListener("touchmove", e)) : s.node.indx.addEventListener("mouseover", e)), s.bind("openPanel:start", function (e) {
          e = v(e, ".mm-divider").filter(function (e) {
            return !e.matches(".mm-hidden");
          }).length, s.node.indx.classList[e ? "add" : "remove"]("mm-sectionindexer_active");
        });
      });
    },
    setSelected: function setSelected() {
      var _n40,
          i = this,
          e = "object" != _typeof(e = "boolean" == typeof (e = this.opts.setSelected) ? {
        hover: e,
        parent: e
      } : e) ? {} : e;

      this.opts.setSelected = c(e, C.options.setSelected), "detect" == e.current ? (_n40 = function n(e) {
        e = e.split("?")[0].split("#")[0];
        var t = i.node.menu.querySelector('a[href="' + e + '"], a[href="' + e + '/"]');
        t ? i.setSelected(t.parentElement) : (e = e.split("/").slice(0, -1)).length && _n40(e.join("/"));
      }, this.bind("initMenu:after", function () {
        _n40.call(i, window.location.href);
      })) : e.current || this.bind("initListview:after", function (e) {
        f(e, ".mm-listitem_selected").forEach(function (e) {
          e.classList.remove("mm-listitem_selected");
        });
      }), e.hover && this.bind("initMenu:after", function () {
        i.node.menu.classList.add("mm-menu_selected-hover");
      }), e.parent && (this.bind("openPanel:finish", function (e) {
        v(i.node.pnls, ".mm-listitem_selected-parent").forEach(function (e) {
          e.classList.remove("mm-listitem_selected-parent");
        });

        for (var t = e.mmParent; t;) {
          t.matches(".mm-listitem_vertical") || t.classList.add("mm-listitem_selected-parent"), t = (t = t.closest(".mm-panel")).mmParent;
        }
      }), this.bind("initMenu:after", function () {
        i.node.menu.classList.add("mm-menu_selected-parent");
      }));
    },
    sidebar: function sidebar() {
      var e,
          n = this;

      if (this.opts.offCanvas) {
        var t,
            i,
            s = ("boolean" == typeof (e = "object" != _typeof(e = "string" == typeof (e = this.opts.sidebar) || "boolean" == typeof e && e || "number" == typeof e ? {
          expanded: e
        } : e) ? {} : e).collapsed && e.collapsed && (e.collapsed = {
          use: !0
        }), "string" != typeof e.collapsed && "number" != typeof e.collapsed || (e.collapsed = {
          use: e.collapsed
        }), "object" != _typeof(e.collapsed) && (e.collapsed = {}), "boolean" == typeof e.expanded && e.expanded && (e.expanded = {
          use: !0
        }), "string" != typeof e.expanded && "number" != typeof e.expanded || (e.expanded = {
          use: e.expanded
        }), "object" != _typeof(e.expanded) && (e.expanded = {}), e);

        if (this.opts.sidebar = c(s, C.options.sidebar), s.collapsed.use && (this.bind("initMenu:after", function () {
          var e;
          n.node.menu.classList.add("mm-menu_sidebar-collapsed"), s.collapsed.blockMenu && n.opts.offCanvas && !f(n.node.menu, ".mm-menu__blocker")[0] && ((e = p("a.mm-menu__blocker")).setAttribute("href", "#" + n.node.menu.id), n.node.menu.prepend(e)), s.collapsed.hideNavbar && n.node.menu.classList.add("mm-menu_hidenavbar"), s.collapsed.hideDivider && n.node.menu.classList.add("mm-menu_hidedivider");
        }), t = function t() {
          n.node.wrpr.classList.add("mm-wrapper_sidebar-collapsed");
        }, i = function i() {
          n.node.wrpr.classList.remove("mm-wrapper_sidebar-collapsed");
        }, "boolean" == typeof s.collapsed.use ? this.bind("initMenu:after", t) : w(s.collapsed.use, t, i)), s.expanded.use) {
          this.bind("initMenu:after", function () {
            n.node.menu.classList.add("mm-menu_sidebar-expanded");
          }), t = function t() {
            n.node.wrpr.classList.add("mm-wrapper_sidebar-expanded"), n.node.wrpr.matches(".mm-wrapper_sidebar-closed") || n.open();
          }, i = function i() {
            n.node.wrpr.classList.remove("mm-wrapper_sidebar-expanded"), n.close();
          }, "boolean" == typeof s.expanded.use ? this.bind("initMenu:after", t) : w(s.expanded.use, t, i), this.bind("close:start", function () {
            n.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (n.node.wrpr.classList.add("mm-wrapper_sidebar-closed"), "remember" == s.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "closed"));
          }), this.bind("open:start", function () {
            n.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (n.node.wrpr.classList.remove("mm-wrapper_sidebar-closed"), "remember" == s.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "open"));
          });
          var a = s.expanded.initial;

          if ("remember" == s.expanded.initial) {
            var r = window.localStorage.getItem("mmenuExpandedState");

            switch (r) {
              case "open":
              case "closed":
                a = r;
            }
          }

          "closed" == a && this.bind("initMenu:after", function () {
            n.node.wrpr.classList.add("mm-wrapper_sidebar-closed");
          }), this.clck.push(function (e, t) {
            if (t.inMenu && t.inListview && n.node.wrpr.matches(".mm-wrapper_sidebar-expanded")) return {
              close: "closed" == s.expanded.initial
            };
          });
        }
      }
    },
    toggles: function toggles() {
      var t = this;
      this.bind("initPanel:after", function (e) {
        v(e, "input").forEach(function (e) {
          b(e, t.conf.classNames.toggles.toggle, "mm-toggle"), b(e, t.conf.classNames.toggles.check, "mm-check");
        });
      });
    }
  }, C.wrappers = {
    angular: function angular() {
      this.opts.onClick = {
        close: !0,
        preventDefault: !1,
        setSelected: !0
      };
    },
    bootstrap: function bootstrap() {
      var e,
          n,
          t,
          i,
          s = this;

      function a(e) {
        for (var t = p(e.matches("a") ? "a" : "span"), n = ["href", "title", "target"], i = 0; i < n.length; i++) {
          e.getAttribute(n[i]) && t.setAttribute(n[i], e.getAttribute(n[i]));
        }

        return t.innerHTML = e.innerHTML, v(t, ".sr-only").forEach(function (e) {
          e.remove();
        }), t;
      }

      function r(e) {
        var n = p("ul");
        return f(e).forEach(function (e) {
          var t = p("li");
          e.matches(".dropdown-divider") ? t.classList.add("Divider") : e.matches(".dropdown-item") && t.append(a(e)), n.append(t);
        }), n;
      }

      this.node.menu.matches(".navbar-collapse") && (this.conf.offCanvas && (this.conf.offCanvas.clone = !1), e = p("nav"), n = p("div"), e.append(n), f(this.node.menu).forEach(function (e) {
        switch (!0) {
          case e.matches(".navbar-nav"):
            n.append((t = e, i = p("ul"), v(t, ".nav-item").forEach(function (e) {
              var t,
                  n = p("li");
              e.matches(".active") && n.classList.add("Selected"), e.matches(".nav-link") || ((t = f(e, ".dropdown-menu")[0]) && n.append(r(t)), e = f(e, ".nav-link")[0]), n.prepend(a(e)), i.append(n);
            }), i));
            break;

          case e.matches(".dropdown-menu"):
            n.append(r(e));
            break;

          case e.matches(".form-inline"):
            s.conf.searchfield.form = {
              action: e.getAttribute("action") || null,
              method: e.getAttribute("method") || null
            }, s.conf.searchfield.input = {
              name: e.querySelector("input").getAttribute("name") || null
            }, s.conf.searchfield.clear = !1, s.conf.searchfield.submit = !0;
            break;

          default:
            n.append(e.cloneNode(!0));
        }

        var t, i;
      }), this.bind("initMenu:before", function () {
        document.body.prepend(e), s.node.menu = e;
      }), !(t = this.node.menu.parentElement) || (i = t.querySelector(".navbar-toggler")) && (i.removeAttribute("data-target"), i.removeAttribute("aria-controls"), i.outerHTML = i.outerHTML, (i = t.querySelector(".navbar-toggler")).addEventListener("click", function (e) {
        e.preventDefault(), e.stopImmediatePropagation(), s[s.vars.opened ? "close" : "open"]();
      })));
    },
    olark: function olark() {
      this.conf.offCanvas.page.noSelector.push("#olark");
    },
    turbolinks: function turbolinks() {
      var t;
      document.addEventListener("turbolinks:before-visit", function (e) {
        t = document.querySelector(".mm-wrapper").className.split(" ").filter(function (e) {
          return /mm-/.test(e);
        });
      }), document.addEventListener("turbolinks:load", function (e) {
        void 0 !== t && (document.querySelector(".mm-wrapper").className = t);
      });
    },
    wordpress: function wordpress() {
      this.conf.classNames.selected = "current-menu-item";
      var e = document.getElementById("wpadminbar");
      e && (e.style.position = "fixed", e.classList.add("mm-slideout"));
    }
  }, t["default"] = C, window && (window.Mmenu = C), (P = window.jQuery || window.Zepto || null) && (P.fn.mmenu = function (i, s) {
    var a = P();
    return this.each(function (e, t) {
      var n;
      t.mmApi || (n = new C(t, i, s), (t = P(n.node.menu)).data("mmenu", n.API), a = a.add(t));
    }), a;
  });
}]);
var slice = [].slice;
!function (a) {
  var i;

  function e(e, t) {
    var n, i, s;
    this.options = a.extend({}, this.defaults, t), this.$el = e, this.createStars(), this.syncRating(), this.options.readOnly || (this.$el.on("mouseover.starrr", "a", (n = this, function (e) {
      return n.syncRating(n.getStars().index(e.currentTarget) + 1);
    })), this.$el.on("mouseout.starrr", (i = this, function () {
      return i.syncRating();
    })), this.$el.on("click.starrr", "a", (s = this, function (e) {
      return e.preventDefault(), s.setRating(s.getStars().index(e.currentTarget) + 1);
    })), this.$el.on("starrr:change", this.options.change));
  }

  window.Starrr = (e.prototype.defaults = {
    rating: void 0,
    max: 5,
    readOnly: !1,
    emptyClass: "fa fa-star-o",
    fullClass: "fa fa-star",
    change: function change(e, t) {}
  }, e.prototype.getStars = function () {
    return this.$el.find("a");
  }, e.prototype.createStars = function () {
    for (var e = [], t = 1, n = this.options.max; 1 <= n ? t <= n : n <= t; 1 <= n ? t++ : t--) {
      e.push(this.$el.append("<a href='#' />"));
    }

    return e;
  }, e.prototype.setRating = function (e) {
    return this.options.rating === e && (e = void 0), this.options.rating = e, this.syncRating(), this.$el.trigger("starrr:change", e);
  }, e.prototype.getRating = function () {
    return this.options.rating;
  }, e.prototype.syncRating = function (e) {
    var t, n, i, s, a;

    for (e = e || this.options.rating, t = this.getStars(), a = [], n = i = 1, s = this.options.max; 1 <= s ? i <= s : s <= i; n = 1 <= s ? ++i : --i) {
      a.push(t.eq(n - 1).removeClass(n <= e ? this.options.emptyClass : this.options.fullClass).addClass(n <= e ? this.options.fullClass : this.options.emptyClass));
    }

    return a;
  }, i = e), a.fn.extend({
    starrr: function starrr() {
      var t = arguments[0],
          n = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.each(function () {
        var e = a(this).data("starrr");
        if (e || a(this).data("starrr", e = new i(a(this), t)), "string" == typeof t) return e[t].apply(e, n);
      });
    }
  });
}(window.jQuery);
"use strict";

$(document).ready(function () {
  $('.prof-top__tabs .tab').click(function () {
    if (!$(this).hasClass('active')) {
      $('.prof-top__tabs .tab').removeClass('active');
      $(this).addClass('active');
      var index = $(this).index();
      $('.tabs-content-wrap .tabs-content').removeClass('active');
      $('.tabs-content-wrap .tabs-content').eq(index).addClass('active');
    }
  });
  var swiper = new Swiper('.bot-slider', {
    // Optional parameters
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000
    }
  });
  $('.pre-total-open').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.pre-total-open').removeClass('active');
      $('.prof-bot__pretotal').slideUp(300);
    } else {
      $('.pre-total-open').removeClass('active');
      $(this).addClass('active');
      $('.prof-bot__pretotal').slideUp(300);
      $(this).closest('.prof-bot__tbody__tr').next('.prof-bot__pretotal').slideDown(300);
    }
  });
  $('.prof-bot__table--bileti .prof-bot__tbody__tr').on('click', function (e) {
    if ($(window).width() < 768) {
      if ($(this).hasClass('active')) {
        $('.prof-bot__table--bileti .prof-bot__tbody__tr').removeClass('active');
        $('.prof-bot__pretotal').slideUp(300);
      } else {
        $(this).addClass('active');
        $('.prof-bot__pretotal').slideUp(300);
        $(this).next('.prof-bot__pretotal').slideDown(300);
      }
    }
  });
});
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function scrollToElement(el, offset) {
  if (offset === undefined) offset = 0;
  var duration = 600;
  var element = $(el).offset();
  var pos = element.top + offset;
  $('html, body').animate({
    scrollTop: pos
  }, duration);
} // document.addEventListener(
// 	"DOMContentLoaded", () => {
// 		new Mmenu( "#menu", {
// 			"navbar": {
// 				"title": 'Меню'
// 			}
// 		} );
// 	}
// );


$(document).ready(function () {
  // var fxdHeader = document.querySelector("header");
  // var headroom  = new Headroom(fxdHeader,{
  // 	offset : 80,
  // 	tolerance : {
  // 		up : 10,
  // 		down : 5
  // 	},
  // });
  // headroom.init();
  $('body').on('click', '.anchor-link', function (e) {
    e.preventDefault();
    targ = $(this).attr('href');
    scrollToElement(targ, -40);
  }).on('click', function (e) {
    if (!$(e.target).closest('.header-search').length) {
      $('body').removeClass('search-active');
    }

    if (!$(e.target).closest('.right-menu-container').length) {
      $('.right-menu-container').removeClass('right-menu-active');
    }

    if (!$(e.target).closest('.detail-share').length) {
      $('.detail-share').removeClass('active');
    }
  }).on('click', '.search-toggle', function (e) {
    $('body').addClass('search-active');
  }).on('click', '.desktop-menu-toggle', function (e) {
    e.preventDefault();
    $('.right-menu-container').toggleClass('right-menu-active');
  }).on('click', '.header-nav-mobile', function (e) {
    e.preventDefault();
    $('body').toggleClass('mobile-menu-active');
  }).on('click', '.detail-share-toggle', function (e) {
    e.preventDefault();
    $(this).parents('.detail-share').toggleClass('active');
  }).on('click', '.row-field-toggle', function (e) {
    e.preventDefault();
    $(this).parents('.expert-form-rating-row').toggleClass('active');
  }).on('click', '.dropdown-select .dropdown-menu a', function (e) {
    e.preventDefault();
    $(this).parents('.dropdown-menu').find('li').removeClass('active');
    $(this).parent('li').addClass('active');
    $(this).parents('.dropdown-select').find('input[type=hidden]').val($(this).data('val'));
    $(this).parents('.dropdown-select').find('[data-toggle="dropdown"]').html($(this).html());
  }).on('click', '.tournament-table-toggle', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.tournament-table').toggleClass('full-table');
  }).on('click', '.stat-row', function (e) {
    e.preventDefault();
    $(this).parents('.stat-group').toggleClass('active');
  }).on('keyup,change', '.print-input-field input', function (e) {
    if ($(this).val().length < $(this).data('max_size') + 1) {
      $(this).parents('.input-field-with-counter').find('.counter-current').html(parseInt($(this).val().length));
    }
  }).on('keypress', '.print-input-field input', function (e) {
    if ($(this).val().length > $(this).data('max_size') - 1) {
      return false;
    }
  }).on('click', '.tabs-nav-list a,.tabs-nav-list button', function (e) {
    e.preventDefault();
    $(this).parents('.tabs-nav-list').find('li').removeClass('active');
    $(this).parents('.tabs-wrap').find('.tab-pane').removeClass('active');
    $(this).parent('li').addClass('active');
    $(this).parents('.tabs-wrap').find('[data-tab="' + $(this).data('target') + '"]').addClass('active');
  });
  $('[data-fancybox="gallery"]').fancybox({
    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' + "</a>",
      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' + "</button>",
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' + "</button>",
      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<span class="icon-arrow-left"></span>' + "</button>",
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<span class="icon-arrow-right"></span>' + "</button>"
    }
  });
  $('.datepicker-input').datepicker({
    language: "ru",
    todayHighlight: true,
    autoclose: true,
    format: 'dd.mm.yyyy',
    container: '.datepicker-container'
  });
  $('.custom-select').chosen({
    width: "100%",
    disable_search: true,
    allow_single_deselect: true
  });
  var swiper = new Swiper('.main-slider', {
    spaceBetween: 0,
    effect: "fade",
    loop: false,
    navigation: {
      nextEl: ".main-slider-next",
      prevEl: ".main-slider-prev"
    }
  });
  var swiperPartners = new Swiper('.partners-slider', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    mousewheel: true,
    loop: true,
    centeredSlides: true
  });
  var swiperDetail = new Swiper('.detail-gallery-swiper', {
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".main-slider-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".detail-gallery-next",
      prevEl: ".detail-gallery-prev"
    }
  });
  var trophies = new Swiper('.player-trophies-slider', {
    spaceBetween: 15,
    loop: false,
    slidesPerView: '5',
    navigation: {
      nextEl: ".trophies-arrow-next",
      prevEl: ".trophies-arrow-prev"
    }
  });
  $('.custom-slider').each(function () {
    $(this).css({
      'min-width': $(window).width() - $('.custom-slider-wrap').offset().left
    });
  });
  $(window).resize(function () {
    $('.custom-slider').each(function () {
      $(this).css({
        'min-width': $(window).width() - $('.custom-slider-wrap').offset().left
      });
    });
  });
  var matchesSwiper = new Swiper('.matches-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    loop: false,
    navigation: {
      nextEl: ".matches-slider-next",
      prevEl: ".matches-slider-prev"
    },
    breakpoints: {
      1000: {
        spaceBetween: 80
      }
    }
  }).on('slideChange', function () {
    $('.matches-slider-nav-info .readmore-link').attr('href', $(this.el).find('.swiper-slide-active').data('link'));
  });
  var playerBck = new Swiper('.players-bck-slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
    loop: false
  });
  var playersSwiper = new Swiper('.players-slider', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".players-section-next",
      prevEl: ".players-section-prev",
      disabledClass: 'disabled'
    },
    pagination: {
      el: ".players-section-pagination",
      clickable: true
    },
    thumbs: {
      swiper: playerBck
    }
  });
  var libraryThumbs = new Swiper(".library-thumbs", {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".thumbs-slider-next",
      prevEl: ".thumbs-slider-prev"
    }
  });
  var libraryGal = new Swiper(".library-gallery", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".main-slider-next",
      prevEl: ".main-slider-prev",
      disabledClass: 'disabled'
    },
    pagination: {
      el: ".main-slider-pagination",
      type: "fraction"
    },
    thumbs: {
      swiper: libraryThumbs
    }
  });
  $('[data-toggle="tolltip"]').tooltip();

  if ($('.share-buttons').size() > 0) {
    window.Sharer.init();
  }

  $('.rating-value').each(function () {
    var start = $(this).data('value') ? $(this).data('value') : 0,
        ro = $(this).data('readonly') ? true : false,
        elem = $(this);
    if (ro) elem.addClass('readonly');
    $(this).starrr({
      max: 10,
      rating: start,
      readOnly: ro,
      change: function change(e, value) {
        $(this).parents('.rating-container').find('.star-input').val(value);
      }
    });
  });
  $(".custom-slider").each(function (index, element) {
    var $this = $(this)[0];
    var arrPrev = $(this).parents('.custom-slider-content').find('.swiper-prev')[0];
    var arrNext = $(this).parents('.custom-slider-content').find('.swiper-next')[0];
    var paging = $(this).parents('.custom-slider-content').find('.swiper-pagination')[0];
    var perView = $(this).data('per_view') ? $(this).data('per_view') : 'auto';
    var b_580 = $(this).data('b_580') ? $(this).data('b_580') : perView;
    var b_760 = $(this).data('b_760') ? $(this).data('b_760') : perView;
    var b_1000 = $(this).data('b_1000') ? $(this).data('b_1000') : b_760;
    var slider = new Swiper($this, {
      loop: false,
      spaceBetween: 30,
      slidesPerView: 'auto',
      pagination: {
        el: paging,
        clickable: true
      },
      navigation: {
        nextEl: arrNext,
        prevEl: arrPrev,
        disabledClass: 'disabled'
      },
      breakpoints: _defineProperty({
        1000: {
          slidesPerView: b_1000
        },
        760: {
          slidesPerView: b_760
        }
      }, "1000", {
        slidesPerView: b_1000
      })
    });
  });
});
//# sourceMappingURL=main.js.map

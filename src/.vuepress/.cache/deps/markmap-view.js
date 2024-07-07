import {
  category10_default,
  identity,
  linkHorizontal,
  max,
  min,
  minIndex,
  ordinal,
  select_default,
  transform,
  zoom_default
} from "./chunk-KQ2CUASX.js";
import {
  Hook,
  addClass,
  childSelector,
  getId,
  loadCSS,
  loadJS,
  noop,
  walkTree
} from "./chunk-ITCQNZJV.js";
import "./chunk-3EJPJMEH.js";

// node_modules/markmap-view/dist/index.js
var Z = 1;
var J = 2;
var gt = "http://www.w3.org/2000/svg";
var H = "http://www.w3.org/1999/xlink";
var mt = {
  show: H,
  actuate: H,
  href: H
};
var xt = (e) => typeof e == "string" || typeof e == "number";
var yt = (e) => (e == null ? void 0 : e.vtype) === Z;
var St = (e) => (e == null ? void 0 : e.vtype) === J;
function N(e, t) {
  let n;
  if (typeof e == "string")
    n = Z;
  else if (typeof e == "function")
    n = J;
  else
    throw new Error("Invalid VNode type");
  return {
    vtype: n,
    type: e,
    props: t
  };
}
function vt(e) {
  return e.children;
}
var zt = {
  isSvg: false
};
function V(e, t) {
  Array.isArray(t) || (t = [t]), t = t.filter(Boolean), t.length && e.append(...t);
}
function kt(e, t, n) {
  for (const i in t)
    if (!(i === "key" || i === "children" || i === "ref"))
      if (i === "dangerouslySetInnerHTML")
        e.innerHTML = t[i].__html;
      else if (i === "innerHTML" || i === "textContent" || i === "innerText" || i === "value" && ["textarea", "select"].includes(e.tagName)) {
        const r = t[i];
        r != null && (e[i] = r);
      } else
        i.startsWith("on") ? e[i.toLowerCase()] = t[i] : Et(e, i, t[i], n.isSvg);
}
var bt = {
  className: "class",
  labelFor: "for"
};
function Et(e, t, n, i) {
  if (t = bt[t] || t, n === true)
    e.setAttribute(t, "");
  else if (n === false)
    e.removeAttribute(t);
  else {
    const r = i ? mt[t] : void 0;
    r !== void 0 ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n);
  }
}
function Ct(e) {
  return e.reduce((t, n) => t.concat(n), []);
}
function D(e, t) {
  return Array.isArray(e) ? Ct(e.map((n) => D(n, t))) : _(e, t);
}
function _(e, t = zt) {
  if (e == null || typeof e == "boolean")
    return null;
  if (e instanceof Node)
    return e;
  if (St(e)) {
    const {
      type: n,
      props: i
    } = e;
    if (n === vt) {
      const a = document.createDocumentFragment();
      if (i.children) {
        const c = D(i.children, t);
        V(a, c);
      }
      return a;
    }
    const r = n(i);
    return _(r, t);
  }
  if (xt(e))
    return document.createTextNode(`${e}`);
  if (yt(e)) {
    let n;
    const {
      type: i,
      props: r
    } = e;
    if (!t.isSvg && i === "svg" && (t = Object.assign({}, t, {
      isSvg: true
    })), t.isSvg ? n = document.createElementNS(gt, i) : n = document.createElement(i), kt(n, r, t), r.children) {
      let c = t;
      t.isSvg && i === "foreignObject" && (c = Object.assign({}, c, {
        isSvg: false
      }));
      const s = D(r.children, c);
      s != null && V(n, s);
    }
    const {
      ref: a
    } = r;
    return typeof a == "function" && a(n), n;
  }
  throw new Error("mount: Invalid Vnode!");
}
function $(e) {
  return _(e);
}
function wt(e) {
  var t = 0, n = e.children, i = n && n.length;
  if (!i)
    t = 1;
  else
    for (; --i >= 0; )
      t += n[i].value;
  e.value = t;
}
function Xt() {
  return this.eachAfter(wt);
}
function jt(e) {
  var t = this, n, i = [t], r, a, c;
  do
    for (n = i.reverse(), i = []; t = n.pop(); )
      if (e(t), r = t.children, r)
        for (a = 0, c = r.length; a < c; ++a)
          i.push(r[a]);
  while (i.length);
  return this;
}
function Nt(e) {
  for (var t = this, n = [t], i, r; t = n.pop(); )
    if (e(t), i = t.children, i)
      for (r = i.length - 1; r >= 0; --r)
        n.push(i[r]);
  return this;
}
function Rt(e) {
  for (var t = this, n = [t], i = [], r, a, c; t = n.pop(); )
    if (i.push(t), r = t.children, r)
      for (a = 0, c = r.length; a < c; ++a)
        n.push(r[a]);
  for (; t = i.pop(); )
    e(t);
  return this;
}
function Tt(e) {
  return this.eachAfter(function(t) {
    for (var n = +e(t.data) || 0, i = t.children, r = i && i.length; --r >= 0; )
      n += i[r].value;
    t.value = n;
  });
}
function Mt(e) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(e);
  });
}
function At(e) {
  for (var t = this, n = Ot(t, e), i = [t]; t !== n; )
    t = t.parent, i.push(t);
  for (var r = i.length; e !== n; )
    i.splice(r, 0, e), e = e.parent;
  return i;
}
function Ot(e, t) {
  if (e === t)
    return e;
  var n = e.ancestors(), i = t.ancestors(), r = null;
  for (e = n.pop(), t = i.pop(); e === t; )
    r = e, e = n.pop(), t = i.pop();
  return r;
}
function Ht() {
  for (var e = this, t = [e]; e = e.parent; )
    t.push(e);
  return t;
}
function $t() {
  var e = [];
  return this.each(function(t) {
    e.push(t);
  }), e;
}
function Bt() {
  var e = [];
  return this.eachBefore(function(t) {
    t.children || e.push(t);
  }), e;
}
function Dt() {
  var e = this, t = [];
  return e.each(function(n) {
    n !== e && t.push({ source: n.parent, target: n });
  }), t;
}
function L(e, t) {
  var n = new R(e), i = +e.value && (n.value = e.value), r, a = [n], c, s, l, f;
  for (t == null && (t = _t); r = a.pop(); )
    if (i && (r.value = +r.data.value), (s = t(r.data)) && (f = s.length))
      for (r.children = new Array(f), l = f - 1; l >= 0; --l)
        a.push(c = r.children[l] = new R(s[l])), c.parent = r, c.depth = r.depth + 1;
  return n.eachBefore(It);
}
function Ft() {
  return L(this).eachBefore(Lt);
}
function _t(e) {
  return e.children;
}
function Lt(e) {
  e.data = e.data.data;
}
function It(e) {
  var t = 0;
  do
    e.height = t;
  while ((e = e.parent) && e.height < ++t);
}
function R(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
R.prototype = L.prototype = {
  constructor: R,
  count: Xt,
  each: jt,
  eachAfter: Rt,
  eachBefore: Nt,
  sum: Tt,
  sort: Mt,
  path: At,
  ancestors: Ht,
  descendants: $t,
  leaves: Bt,
  links: Dt,
  copy: Ft
};
var Wt = "d3-flextree";
var Vt = "2.1.2";
var Yt = "build/d3-flextree.js";
var Kt = "index";
var Pt = {
  name: "Chris Maloney",
  url: "http://chrismaloney.org"
};
var Ut = "Flexible tree layout algorithm that allows for variable node sizes.";
var Gt = [
  "d3",
  "d3-module",
  "layout",
  "tree",
  "hierarchy",
  "d3-hierarchy",
  "plugin",
  "d3-plugin",
  "infovis",
  "visualization",
  "2d"
];
var Zt = "https://github.com/klortho/d3-flextree";
var Jt = "WTFPL";
var qt = {
  type: "git",
  url: "https://github.com/klortho/d3-flextree.git"
};
var Qt = {
  clean: "rm -rf build demo test",
  "build:demo": "rollup -c --environment BUILD:demo",
  "build:dev": "rollup -c --environment BUILD:dev",
  "build:prod": "rollup -c --environment BUILD:prod",
  "build:test": "rollup -c --environment BUILD:test",
  build: "rollup -c",
  lint: "eslint index.js src",
  "test:main": "node test/bundle.js",
  "test:browser": "node test/browser-tests.js",
  test: "npm-run-all test:*",
  prepare: "npm-run-all clean build lint test"
};
var te = {
  "d3-hierarchy": "^1.1.5"
};
var ee = {
  "babel-plugin-external-helpers": "^6.22.0",
  "babel-preset-es2015-rollup": "^3.0.0",
  d3: "^4.13.0",
  "d3-selection-multi": "^1.0.1",
  eslint: "^4.19.1",
  jsdom: "^11.6.2",
  "npm-run-all": "^4.1.2",
  rollup: "^0.55.3",
  "rollup-plugin-babel": "^2.7.1",
  "rollup-plugin-commonjs": "^8.0.2",
  "rollup-plugin-copy": "^0.2.3",
  "rollup-plugin-json": "^2.3.0",
  "rollup-plugin-node-resolve": "^3.0.2",
  "rollup-plugin-uglify": "^3.0.0",
  "uglify-es": "^3.3.9"
};
var ne = {
  name: Wt,
  version: Vt,
  main: Yt,
  module: Kt,
  "jsnext:main": "index",
  author: Pt,
  description: Ut,
  keywords: Gt,
  homepage: Zt,
  license: Jt,
  repository: qt,
  scripts: Qt,
  dependencies: te,
  devDependencies: ee
};
var { version: ie } = ne;
var oe = Object.freeze({
  children: (e) => e.children,
  nodeSize: (e) => e.data.size,
  spacing: 0
});
function Q(e) {
  const t = Object.assign({}, oe, e);
  function n(s) {
    const l = t[s];
    return typeof l == "function" ? l : () => l;
  }
  function i(s) {
    const l = c(a(), s, (f) => f.children);
    return l.update(), l.data;
  }
  function r() {
    const s = n("nodeSize"), l = n("spacing");
    return class q extends L.prototype.constructor {
      constructor(h) {
        super(h);
      }
      copy() {
        const h = c(this.constructor, this, (p) => p.children);
        return h.each((p) => p.data = p.data.data), h;
      }
      get size() {
        return s(this);
      }
      spacing(h) {
        return l(this, h);
      }
      get nodes() {
        return this.descendants();
      }
      get xSize() {
        return this.size[0];
      }
      get ySize() {
        return this.size[1];
      }
      get top() {
        return this.y;
      }
      get bottom() {
        return this.y + this.ySize;
      }
      get left() {
        return this.x - this.xSize / 2;
      }
      get right() {
        return this.x + this.xSize / 2;
      }
      get root() {
        const h = this.ancestors();
        return h[h.length - 1];
      }
      get numChildren() {
        return this.hasChildren ? this.children.length : 0;
      }
      get hasChildren() {
        return !this.noChildren;
      }
      get noChildren() {
        return this.children === null;
      }
      get firstChild() {
        return this.hasChildren ? this.children[0] : null;
      }
      get lastChild() {
        return this.hasChildren ? this.children[this.numChildren - 1] : null;
      }
      get extents() {
        return (this.children || []).reduce(
          (h, p) => q.maxExtents(h, p.extents),
          this.nodeExtents
        );
      }
      get nodeExtents() {
        return {
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right
        };
      }
      static maxExtents(h, p) {
        return {
          top: Math.min(h.top, p.top),
          bottom: Math.max(h.bottom, p.bottom),
          left: Math.min(h.left, p.left),
          right: Math.max(h.right, p.right)
        };
      }
    };
  }
  function a() {
    const s = r(), l = n("nodeSize"), f = n("spacing");
    return class extends s {
      constructor(h) {
        super(h), Object.assign(this, {
          x: 0,
          y: 0,
          relX: 0,
          prelim: 0,
          shift: 0,
          change: 0,
          lExt: this,
          lExtRelX: 0,
          lThr: null,
          rExt: this,
          rExtRelX: 0,
          rThr: null
        });
      }
      get size() {
        return l(this.data);
      }
      spacing(h) {
        return f(this.data, h.data);
      }
      get x() {
        return this.data.x;
      }
      set x(h) {
        this.data.x = h;
      }
      get y() {
        return this.data.y;
      }
      set y(h) {
        this.data.y = h;
      }
      update() {
        return tt(this), et(this), this;
      }
    };
  }
  function c(s, l, f) {
    const h = (p, m) => {
      const d = new s(p);
      Object.assign(d, {
        parent: m,
        depth: m === null ? 0 : m.depth + 1,
        height: 0,
        length: 1
      });
      const S = f(p) || [];
      return d.children = S.length === 0 ? null : S.map((x) => h(x, d)), d.children && Object.assign(d, d.children.reduce(
        (x, g) => ({
          height: Math.max(x.height, g.height + 1),
          length: x.length + g.length
        }),
        d
      )), d;
    };
    return h(l, null);
  }
  return Object.assign(i, {
    nodeSize(s) {
      return arguments.length ? (t.nodeSize = s, i) : t.nodeSize;
    },
    spacing(s) {
      return arguments.length ? (t.spacing = s, i) : t.spacing;
    },
    children(s) {
      return arguments.length ? (t.children = s, i) : t.children;
    },
    hierarchy(s, l) {
      const f = typeof l > "u" ? t.children : l;
      return c(r(), s, f);
    },
    dump(s) {
      const l = n("nodeSize"), f = (h) => (p) => {
        const m = h + "  ", d = h + "    ", { x: S, y: x } = p, g = l(p), y = p.children || [], v = y.length === 0 ? " " : `,${m}children: [${d}${y.map(f(d)).join(d)}${m}],${h}`;
        return `{ size: [${g.join(", ")}],${m}x: ${S}, y: ${x}${v}},`;
      };
      return f(`
`)(s);
    }
  }), i;
}
Q.version = ie;
var tt = (e, t = 0) => (e.y = t, (e.children || []).reduce((n, i) => {
  const [r, a] = n;
  tt(i, e.y + e.ySize);
  const c = (r === 0 ? i.lExt : i.rExt).bottom;
  r !== 0 && se(e, r, a);
  const s = fe(c, r, a);
  return [r + 1, s];
}, [0, null]), re(e), pe(e), e);
var et = (e, t, n) => {
  typeof t > "u" && (t = -e.relX - e.prelim, n = 0);
  const i = t + e.relX;
  return e.relX = i + e.prelim - n, e.prelim = 0, e.x = n + e.relX, (e.children || []).forEach((r) => et(r, i, e.x)), e;
};
var re = (e) => {
  (e.children || []).reduce((t, n) => {
    const [i, r] = t, a = i + n.shift, c = r + a + n.change;
    return n.relX += c, [a, c];
  }, [0, 0]);
};
var se = (e, t, n) => {
  const i = e.children[t - 1], r = e.children[t];
  let a = i, c = i.relX, s = r, l = r.relX, f = true;
  for (; a && s; ) {
    a.bottom > n.lowY && (n = n.next);
    const h = c + a.prelim - (l + s.prelim) + a.xSize / 2 + s.xSize / 2 + a.spacing(s);
    (h > 0 || h < 0 && f) && (l += h, ae(r, h), le(e, t, n.index, h)), f = false;
    const p = a.bottom, m = s.bottom;
    p <= m && (a = he(a), a && (c += a.relX)), p >= m && (s = ce(s), s && (l += s.relX));
  }
  !a && s ? de(e, t, s, l) : a && !s && ue(e, t, a, c);
};
var ae = (e, t) => {
  e.relX += t, e.lExtRelX += t, e.rExtRelX += t;
};
var le = (e, t, n, i) => {
  const r = e.children[t], a = t - n;
  if (a > 1) {
    const c = i / a;
    e.children[n + 1].shift += c, r.shift -= c, r.change -= i - c;
  }
};
var ce = (e) => e.hasChildren ? e.firstChild : e.lThr;
var he = (e) => e.hasChildren ? e.lastChild : e.rThr;
var de = (e, t, n, i) => {
  const r = e.firstChild, a = r.lExt, c = e.children[t];
  a.lThr = n;
  const s = i - n.relX - r.lExtRelX;
  a.relX += s, a.prelim -= s, r.lExt = c.lExt, r.lExtRelX = c.lExtRelX;
};
var ue = (e, t, n, i) => {
  const r = e.children[t], a = r.rExt, c = e.children[t - 1];
  a.rThr = n;
  const s = i - n.relX - r.rExtRelX;
  a.relX += s, a.prelim -= s, r.rExt = c.rExt, r.rExtRelX = c.rExtRelX;
};
var pe = (e) => {
  if (e.hasChildren) {
    const t = e.firstChild, n = e.lastChild, i = (t.prelim + t.relX - t.xSize / 2 + n.relX + n.prelim + n.xSize / 2) / 2;
    Object.assign(e, {
      prelim: i,
      lExt: t.lExt,
      lExtRelX: t.lExtRelX,
      rExt: n.rExt,
      rExtRelX: n.rExtRelX
    });
  }
};
var fe = (e, t, n) => {
  for (; n !== null && e >= n.lowY; )
    n = n.next;
  return {
    lowY: e,
    index: t,
    next: n
  };
};
var nt = ".markmap{font:300 16px/20px sans-serif}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign a{color:#0097e6}.markmap-foreign a:hover{color:#00a8ff}.markmap-foreign code{padding:.25em;font-size:calc(1em - 2px);color:#555;background-color:#f0f0f0;border-radius:2px}.markmap-foreign pre{margin:0}.markmap-foreign pre>code{display:block}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:700}.markmap-foreign mark{background:#ffeaa7}";
var ge = ".markmap-container{position:absolute;width:0;height:0;top:-100px;left:-100px;overflow:hidden}.markmap-container>.markmap-foreign{display:inline-block}.markmap-container>.markmap-foreign>div:last-child,.markmap-container>.markmap-foreign>div:last-child :not(pre){white-space:nowrap}.markmap-container>.markmap-foreign>div:last-child code{white-space:inherit}";
var ze = nt;
function Y(e) {
  const t = e.data;
  return Math.max(4 - 2 * t.depth, 1.5);
}
function K(e, t) {
  const n = minIndex(e, t);
  return e[n];
}
function B(e) {
  e.stopPropagation();
}
function me() {
  return {
    transformHtml: new Hook()
  };
}
var xe = new Hook();
var ye = ordinal(category10_default);
var P = typeof navigator < "u" && navigator.userAgent.includes("Macintosh");
var C = class C2 {
  constructor(t, n) {
    this.options = C2.defaultOptions, this.revokers = [], this.handleZoom = (i) => {
      const { transform: r } = i;
      this.g.attr("transform", r);
    }, this.handlePan = (i) => {
      i.preventDefault();
      const r = transform(this.svg.node()), a = r.translate(
        -i.deltaX / r.k,
        -i.deltaY / r.k
      );
      this.svg.call(this.zoom.transform, a);
    }, this.handleClick = (i, r) => {
      let a = this.options.toggleRecursively;
      (P ? i.metaKey : i.ctrlKey) && (a = !a), this.toggleNode(r.data, a);
    }, this.viewHooks = me(), this.svg = t.datum ? t : select_default(t), this.styleNode = this.svg.append("style"), this.zoom = zoom_default().filter((i) => this.options.scrollForPan && i.type === "wheel" ? i.ctrlKey && !i.button : (!i.ctrlKey || i.type === "wheel") && !i.button).on("zoom", this.handleZoom), this.setOptions(n), this.state = {
      id: this.options.id || this.svg.attr("id") || getId(),
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0
    }, this.g = this.svg.append("g"), this.revokers.push(
      xe.tap(() => {
        this.setData();
      })
    );
  }
  getStyleContent() {
    const { style: t } = this.options, { id: n } = this.state, i = typeof t == "function" ? t(n) : "";
    return [this.options.embedGlobalCSS && nt, i].filter(Boolean).join(`
`);
  }
  updateStyle() {
    this.svg.attr(
      "class",
      addClass(this.svg.attr("class"), "markmap", this.state.id)
    );
    const t = this.getStyleContent();
    this.styleNode.text(t);
  }
  toggleNode(t, n = false) {
    var r, a;
    const i = (r = t.payload) != null && r.fold ? 0 : 1;
    n ? walkTree(t, (c, s) => {
      c.payload = {
        ...c.payload,
        fold: i
      }, s();
    }) : t.payload = {
      ...t.payload,
      fold: (a = t.payload) != null && a.fold ? 0 : 1
    }, this.renderData(t);
  }
  initializeData(t) {
    let n = 0;
    const { color: i, nodeMinHeight: r, maxWidth: a, initialExpandLevel: c } = this.options, { id: s } = this.state, l = $(
      N("div", { className: `markmap-container markmap ${s}-g` })
    ), f = $(
      N("style", { children: [this.getStyleContent(), ge].join(`
`) })
    );
    document.body.append(l, f);
    const h = a ? `max-width: ${a}px` : "";
    let p = 0;
    walkTree(t, (d, S, x) => {
      var v, k, w;
      d.children = (v = d.children) == null ? void 0 : v.map((E) => ({ ...E })), n += 1;
      const g = $(
        N("div", { className: "markmap-foreign", style: h, children: N("div", { dangerouslySetInnerHTML: { __html: d.content } }) })
      );
      l.append(g), d.state = {
        ...d.state,
        id: n,
        el: g.firstChild
      }, d.state.path = [(k = x == null ? void 0 : x.state) == null ? void 0 : k.path, d.state.id].filter(Boolean).join("."), i(d);
      const y = ((w = d.payload) == null ? void 0 : w.fold) === 2;
      y ? p += 1 : (p || c >= 0 && d.depth >= c) && (d.payload = { ...d.payload, fold: 1 }), S(), y && (p -= 1);
    });
    const m = Array.from(l.childNodes).map(
      (d) => d.firstChild
    );
    this.viewHooks.transformHtml.call(this, m), m.forEach((d) => {
      var S;
      (S = d.parentNode) == null || S.append(d.cloneNode(true));
    }), walkTree(t, (d, S, x) => {
      var v;
      const g = d.state, y = g.el.getBoundingClientRect();
      d.content = g.el.innerHTML, g.size = [
        Math.ceil(y.width) + 1,
        Math.max(Math.ceil(y.height), r)
      ], g.key = [(v = x == null ? void 0 : x.state) == null ? void 0 : v.id, g.id].filter(Boolean).join(".") + // FIXME: find a way to check content hash
      d.content, S();
    }), l.remove(), f.remove();
  }
  setOptions(t) {
    this.options = {
      ...this.options,
      ...t
    }, this.options.zoom ? this.svg.call(this.zoom) : this.svg.on(".zoom", null), this.options.pan ? this.svg.on("wheel", this.handlePan) : this.svg.on("wheel", null);
  }
  setData(t, n) {
    n && this.setOptions(n), t && (this.state.data = t), this.state.data && (this.initializeData(this.state.data), this.updateStyle(), this.renderData());
  }
  renderData(t) {
    if (!this.state.data)
      return;
    const { spacingHorizontal: n, paddingX: i, spacingVertical: r, autoFit: a, color: c } = this.options, s = Q({}).children((o) => {
      var u;
      if (!((u = o.payload) != null && u.fold))
        return o.children;
    }).nodeSize((o) => {
      const [u, z] = o.data.state.size;
      return [z, u + (u ? i * 2 : 0) + n];
    }).spacing((o, u) => o.parent === u.parent ? r : r * 2), l = s.hierarchy(this.state.data);
    s(l);
    const f = l.descendants().reverse(), h = l.links(), p = linkHorizontal(), m = min(f, (o) => o.x - o.xSize / 2), d = max(f, (o) => o.x + o.xSize / 2), S = min(f, (o) => o.y), x = max(f, (o) => o.y + o.ySize - n);
    Object.assign(this.state, {
      minX: m,
      maxX: d,
      minY: S,
      maxY: x
    }), a && this.fit();
    const g = t && f.find((o) => o.data === t) || l, y = g.data.state.x0 ?? g.x, v = g.data.state.y0 ?? g.y, k = this.g.selectAll(
      childSelector("g")
    ).data(f, (o) => o.data.state.key), w = k.enter().append("g").attr("data-depth", (o) => o.data.depth).attr("data-path", (o) => o.data.state.path).attr(
      "transform",
      (o) => `translate(${v + g.ySize - o.ySize},${y + g.xSize / 2 - o.xSize})`
    ), E = this.transition(k.exit());
    E.select("line").attr("x1", (o) => o.ySize - n).attr("x2", (o) => o.ySize - n), E.select("foreignObject").style("opacity", 0), E.attr(
      "transform",
      (o) => `translate(${g.y + g.ySize - o.ySize},${g.x + g.xSize / 2 - o.xSize})`
    ).remove();
    const X = k.merge(w).attr(
      "class",
      (o) => {
        var u;
        return ["markmap-node", ((u = o.data.payload) == null ? void 0 : u.fold) && "markmap-fold"].filter(Boolean).join(" ");
      }
    );
    this.transition(X).attr(
      "transform",
      (o) => `translate(${o.y},${o.x - o.xSize / 2})`
    );
    const it = X.selectAll(
      childSelector("line")
    ).data(
      (o) => [o],
      (o) => o.data.state.key
    ).join(
      (o) => o.append("line").attr("x1", (u) => u.ySize - n).attr("x2", (u) => u.ySize - n),
      (o) => o,
      (o) => o.remove()
    );
    this.transition(it).attr("x1", -1).attr("x2", (o) => o.ySize - n + 2).attr("y1", (o) => o.xSize).attr("y2", (o) => o.xSize).attr("stroke", (o) => c(o.data)).attr("stroke-width", Y);
    const ot = X.selectAll(
      childSelector("circle")
    ).data(
      (o) => {
        var u;
        return (u = o.data.children) != null && u.length ? [o] : [];
      },
      (o) => o.data.state.key
    ).join(
      (o) => o.append("circle").attr("stroke-width", "1.5").attr("cx", (u) => u.ySize - n).attr("cy", (u) => u.xSize).attr("r", 0).on("click", (u, z) => this.handleClick(u, z)).on("mousedown", B),
      (o) => o,
      (o) => o.remove()
    );
    this.transition(ot).attr("r", 6).attr("cx", (o) => o.ySize - n).attr("cy", (o) => o.xSize).attr("stroke", (o) => c(o.data)).attr(
      "fill",
      (o) => {
        var u;
        return (u = o.data.payload) != null && u.fold && o.data.children ? c(o.data) : "#fff";
      }
    );
    const rt = X.selectAll(
      childSelector("foreignObject")
    ).data(
      (o) => [o],
      (o) => o.data.state.key
    ).join(
      (o) => {
        const u = o.append("foreignObject").attr("class", "markmap-foreign").attr("x", i).attr("y", 0).style("opacity", 0).on("mousedown", B).on("dblclick", B);
        return u.append("xhtml:div").select(function(T) {
          const j = T.data.state.el.cloneNode(true);
          return this.replaceWith(j), j;
        }).attr("xmlns", "http://www.w3.org/1999/xhtml"), u;
      },
      (o) => o,
      (o) => o.remove()
    ).attr(
      "width",
      (o) => Math.max(0, o.ySize - n - i * 2)
    ).attr("height", (o) => o.xSize);
    this.transition(rt).style("opacity", 1);
    const st = this.g.selectAll(
      childSelector("path")
    ).data(h, (o) => o.target.data.state.key).join(
      (o) => {
        const u = [
          v + g.ySize - n,
          y + g.xSize / 2
        ];
        return o.insert("path", "g").attr("class", "markmap-link").attr("data-depth", (z) => z.target.data.depth).attr("data-path", (z) => z.target.data.state.path).attr("d", p({ source: u, target: u }));
      },
      (o) => o,
      (o) => {
        const u = [
          g.y + g.ySize - n,
          g.x + g.xSize / 2
        ];
        return this.transition(o).attr("d", p({ source: u, target: u })).remove();
      }
    );
    this.transition(st).attr("stroke", (o) => c(o.target.data)).attr("stroke-width", (o) => Y(o.target)).attr("d", (o) => {
      const u = o.source, z = o.target, T = [
        u.y + u.ySize - n,
        u.x + u.xSize / 2
      ], j = [
        z.y,
        z.x + z.xSize / 2
      ];
      return p({ source: T, target: j });
    }), f.forEach((o) => {
      o.data.state.x0 = o.x, o.data.state.y0 = o.y;
    });
  }
  transition(t) {
    const { duration: n } = this.options;
    return t.transition().duration(n);
  }
  /**
   * Fit the content to the viewport.
   */
  async fit() {
    const t = this.svg.node(), { width: n, height: i } = t.getBoundingClientRect(), { fitRatio: r } = this.options, { minX: a, maxX: c, minY: s, maxY: l } = this.state, f = l - s, h = c - a, p = Math.min(
      n / f * r,
      i / h * r,
      2
    ), m = identity.translate(
      (n - f * p) / 2 - s * p,
      (i - h * p) / 2 - a * p
    ).scale(p);
    return this.transition(this.svg).call(this.zoom.transform, m).end().catch(noop);
  }
  /**
   * Pan the content to make the provided node visible in the viewport.
   */
  async ensureView(t, n) {
    let i;
    if (this.g.selectAll(
      childSelector("g")
    ).each(function(v) {
      v.data === t && (i = v);
    }), !i)
      return;
    const r = this.svg.node(), { spacingHorizontal: a } = this.options, c = r.getBoundingClientRect(), s = transform(r), [l, f] = [
      i.y,
      i.y + i.ySize - a + 2
    ].map((y) => y * s.k + s.x), [h, p] = [
      i.x - i.xSize / 2,
      i.x + i.xSize / 2
    ].map((y) => y * s.k + s.y), m = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      ...n
    }, d = [m.left - l, c.width - m.right - f], S = [m.top - h, c.height - m.bottom - p], x = d[0] * d[1] > 0 ? K(d, Math.abs) / s.k : 0, g = S[0] * S[1] > 0 ? K(S, Math.abs) / s.k : 0;
    if (x || g) {
      const y = s.translate(x, g);
      return this.transition(this.svg).call(this.zoom.transform, y).end().catch(noop);
    }
  }
  /**
   * Scale content with it pinned at the center of the viewport.
   */
  async rescale(t) {
    const n = this.svg.node(), { width: i, height: r } = n.getBoundingClientRect(), a = i / 2, c = r / 2, s = transform(n), l = s.translate(
      (a - s.x) * (1 - t) / s.k,
      (c - s.y) * (1 - t) / s.k
    ).scale(t);
    return this.transition(this.svg).call(this.zoom.transform, l).end().catch(noop);
  }
  destroy() {
    this.svg.on(".zoom", null), this.svg.html(null), this.revokers.forEach((t) => {
      t();
    });
  }
  static create(t, n, i = null) {
    const r = new C2(t, n);
    return i && (r.setData(i), r.fit()), r;
  }
};
C.defaultOptions = {
  autoFit: false,
  color: (t) => {
    var n;
    return ye(`${((n = t.state) == null ? void 0 : n.path) || ""}`);
  },
  duration: 500,
  embedGlobalCSS: true,
  fitRatio: 0.95,
  maxWidth: 0,
  nodeMinHeight: 16,
  paddingX: 8,
  scrollForPan: P,
  spacingHorizontal: 80,
  spacingVertical: 5,
  initialExpandLevel: -1,
  zoom: true,
  pan: true,
  toggleRecursively: false
};
var F = C;
function ke(e) {
  const t = {}, n = { ...e }, { color: i, colorFreezeLevel: r } = n;
  if ((i == null ? void 0 : i.length) === 1) {
    const s = i[0];
    t.color = () => s;
  } else if (i != null && i.length) {
    const s = ordinal(i);
    t.color = (l) => s(`${l.state.path}`);
  }
  if (r) {
    const s = t.color || F.defaultOptions.color;
    t.color = (l) => (l = {
      ...l,
      state: {
        ...l.state,
        path: l.state.path.split(".").slice(0, r).join(".")
      }
    }, s(l));
  }
  return ["duration", "maxWidth", "initialExpandLevel"].forEach((s) => {
    const l = n[s];
    typeof l == "number" && (t[s] = l);
  }), ["zoom", "pan"].forEach((s) => {
    const l = n[s];
    l != null && (t[s] = !!l);
  }), t;
}
export {
  F as Markmap,
  ye as defaultColorFn,
  ke as deriveOptions,
  ze as globalCSS,
  loadCSS,
  loadJS,
  xe as refreshHook
};
/*! Bundled license information:

markmap-view/dist/index.js:
  (*! @gera2ld/jsx-dom v2.2.2 | ISC License *)
*/
//# sourceMappingURL=markmap-view.js.map

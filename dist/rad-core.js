var g = Object.defineProperty;
var y = (r, t, e) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => (y(r, typeof t != "symbol" ? t + "" : t, e), e);
class a {
}
class f extends a {
}
class h extends a {
}
class b extends a {
}
class u extends a {
}
class w extends a {
}
class S extends a {
}
class p {
}
class v extends a {
}
class k extends S {
  constructor(e) {
    super();
    s(this, "key");
    s(this, "handler");
    this.key = Symbol(Date.now()), this.handler = e == null ? void 0 : e.bind(this);
  }
  getName() {
    return this.key.description ?? "";
  }
  update(e) {
    e instanceof d && this.handler && this.handler(e.value);
  }
}
class d extends w {
  constructor(e) {
    super();
    s(this, "key");
    s(this, "value");
    s(this, "observer");
    this.key = Symbol(Date.now()), this.value = e, this.observer = /* @__PURE__ */ new Map();
  }
  subscribe(e) {
    this.observer.has(e.getName()) || this.observer.set(e.getName(), e);
  }
  unsubcrise(e) {
    this.observer.has(e.getName()) && this.observer.delete(e.getName());
  }
  close() {
    this.observer.clear();
  }
  notify() {
    this.observer.forEach((e) => {
      e.update(this);
    });
  }
}
class x {
  constructor(t) {
    s(this, "key");
    s(this, "subject");
    s(this, "closed", !1);
    this.key = Symbol(Date.now()), this.subject = new d(t);
  }
  next(t) {
    this.closed || (this.subject.value = t, this.subject.notify());
  }
  subscribe(t) {
    this.closed || this.subject.subscribe(new k(t));
  }
  complete() {
    this.closed || (this.subject.close(), this.closed = !0);
  }
}
class I {
  constructor({
    initState: t,
    callback: e
  }) {
    s(this, "stream");
    s(this, "_state");
    this._state = t, this.stream = new x(t), e && e();
  }
  set state(t) {
    this._state = t;
  }
  get state() {
    return this._state;
  }
  upDateState(t) {
    t !== void 0 && (this._state = t), this._state && this.stream.next(this._state);
  }
}
const o = class o extends u {
  constructor() {
    var t = (...args) => {
      super(...args);
      s(this, "m");
      s(this, "key");
    };
    return o._instance || (t(), this.key = Symbol("RdModelsManager"), this.m = /* @__PURE__ */ new Map(), o._instance = this), o._instance;
  }
  /**
   * use
   */
  use(e) {
    return this.m.set(e.getName(), e), o._instance;
  }
  /**
   * remove
   */
  remove(e) {
    return this.m.has(e) && this.m.delete(e), o._instance;
  }
  /**
   * getMoels
   */
  get(e) {
    if (this.m.get(e) === void 0)
      throw TypeError("Do not exist model");
    return this.m.get(e);
  }
  /**
   * length
   */
  get length() {
    return this.m.size;
  }
  /**
   * clear
   */
  clear() {
    return this.m.clear();
  }
};
s(o, "_instance");
let c = o;
class j extends b {
  constructor(e, n) {
    super();
    s(this, "key");
    s(this, "value");
    this.key = Symbol(`${n}`), this.value = e;
  }
  getName() {
    return this.key.description ?? "";
  }
}
const i = class i extends u {
  constructor() {
    var t = (...args) => {
      super(...args);
      s(this, "m");
      s(this, "key");
    };
    return i._instance || (t(), this.m = /* @__PURE__ */ new Map(), this.key = Symbol("RdModulesManager"), i._instance = this), i._instance;
  }
  /**
   * use
   */
  use(e) {
    return this.m.set(e.getName(), e), i._instance;
  }
  /**
   * remove
   */
  remove(e) {
    return this.m.has(e) && this.m.delete(e), i._instance;
  }
  /**
   * getModule
   */
  get(e) {
    if (this.m.get(e) === void 0)
      throw TypeError("Do not exist model");
    return this.m.get(e);
  }
  /**
   * length
   */
  get length() {
    return this.m.size;
  }
  /**
   * clear
   */
  clear() {
    return this.m.clear();
  }
};
s(i, "_instance");
let l = i;
class D extends h {
  constructor() {
    super();
    s(this, "key");
    this.key = Symbol("RdLocalStorage");
  }
  get sizeStorage() {
    return window && localStorage.length;
  }
  getItem({ key: e }) {
    return (window && localStorage.getItem(e)) ?? "";
  }
  setItem({ key: e, value: n }) {
    return window && localStorage.setItem(e, n);
  }
  removeItem({ key: e }) {
    return window && localStorage.removeItem(e);
  }
  clearStorage() {
    return window && localStorage.clear();
  }
}
class N extends h {
  constructor() {
    super();
    s(this, "key");
    this.key = Symbol("RdSessionStorage");
  }
  get sizeStorage() {
    return window && sessionStorage.length;
  }
  getItem({ key: e }) {
    return (window && sessionStorage.getItem(e)) ?? "";
  }
  setItem({ key: e, value: n }) {
    return window && sessionStorage.setItem(e, n);
  }
  removeItem({ key: e }) {
    return window && sessionStorage.removeItem(e);
  }
  clearStorage() {
    return window && sessionStorage.clear();
  }
}
function _(r, t) {
  return new Worker(r, Object.assign({ type: "module" }, t));
}
class L extends p {
  constructor() {
    super();
    s(this, "key");
    this.key = Symbol("RdLogger");
  }
  execute(e) {
    return console.log(e);
  }
}
class O extends v {
  constructor(e) {
    super();
    s(this, "key");
    s(this, "operation");
    this.key = Symbol(`RdDecorator-${Date.now()}`), this.operation = e;
  }
  log(e) {
    this.operation.execute(e);
  }
}
class m {
  constructor({
    code: t,
    message: e
  }) {
    s(this, "code");
    s(this, "message");
    this.code = t ?? -1, this.message = e ?? "";
  }
  copyWith({
    code: t,
    message: e
  }) {
    return new m({
      code: t ?? this.code,
      message: e ?? this.message
    });
  }
}
export {
  m as ErrorModel,
  d as RdBehaviorSubject,
  k as RdBehaviourObserver,
  I as RdBloc,
  a as RdCore,
  v as RdDecorator,
  D as RdLocalStorage,
  L as RdLogger,
  O as RdLoggerDecorator,
  u as RdManager,
  b as RdModel,
  j as RdModelObject,
  c as RdModelsManager,
  f as RdModule,
  l as RdModulesManager,
  S as RdObserver,
  p as RdOperation,
  N as RdSessionStorage,
  h as RdStorage,
  x as RdStream,
  w as RdSubject,
  _ as rdCreateWorker
};
//# sourceMappingURL=rad-core.js.map

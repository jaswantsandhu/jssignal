!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.jssignal = t())
    : (e.jssignal = t());
})(this, () =>
  (() => {
    "use strict";
    var e = {
      d: (t, n) => {
        for (var o in n)
          e.o(n, o) &&
            !e.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
      },
    };
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
      (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (e.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var t = {};
    e.r(t), e.d(t, { effect: () => i, signal: () => l });
    var n = new Map(),
      o = (function () {
        function e() {}
        return (
          (e.prototype.add = function (e, t) {
            void 0 === t && (t = []),
              n.set(e, { handler: e, deps: t, completed: !1 });
          }),
          (e.prototype.signaled = function (e) {
            n.forEach(function (t) {
              var o = t.handler,
                r = t.deps,
                i = t.completed;
              if (!(r.length > 0))
                return 0 === r.length && !1 === i
                  ? (o(), n.delete(o), void (i = !0))
                  : void o();
              e.some(function (e) {
                return r.includes(e);
              }) && o();
            });
          }),
          (e.prototype.remove = function (e) {
            n.delete(e);
          }),
          e
        );
      })();
    const r = new o();
    function i(e, t) {
      return (
        r.add(e, t),
        function () {
          r.remove(e);
        }
      );
    }
    const u = function (e) {
      var t = this;
      (this.get = function () {
        return t.value;
      }),
        (this.set = function (e) {
          t.value = e;
        }),
        (this.value = e);
    };
    function l(t) {
      var n = new u(t),
        o = null,
        i = new Set(),
        l = {
          set: function (t) {
            i.add(l), null !== o && clearTimeout(o);
            var u = e.g ? e.g.setTimeout : requestAnimationFrame;
            o = u(function () {
              n.set(t),
                r.signaled(Array.from(i)),
                i.clear(),
                null !== o && (clearTimeout(o), (o = null));
            });
          },
          get: function () {
            return n.get();
          },
        };
      return l;
    }
    return new Set(), t;
  })()
);

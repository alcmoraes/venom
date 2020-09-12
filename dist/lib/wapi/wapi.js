!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 43));
})([
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    var n,
      r,
      i = (e.exports = {});
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function a() {
      throw new Error('clearTimeout has not been defined');
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var u,
      l = [],
      c = !1,
      f = -1;
    function h() {
      c &&
        u &&
        ((c = !1), u.length ? (l = u.concat(l)) : (f = -1), l.length && d());
    }
    function d() {
      if (!c) {
        var e = s(h);
        c = !0;
        for (var t = l.length; t; ) {
          for (u = l, l = []; ++f < t; ) u && u[f].run();
          (f = -1), (t = l.length);
        }
        (u = null),
          (c = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function w() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new p(e, t)), 1 !== l.length || c || s(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = w),
      (i.addListener = w),
      (i.once = w),
      (i.off = w),
      (i.removeListener = w),
      (i.removeAllListeners = w),
      (i.emit = w),
      (i.prependListener = w),
      (i.prependOnceListener = w),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error('process.binding is not supported');
      }),
      (i.cwd = function () {
        return '/';
      }),
      (i.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    'function' == typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t, n) {
    'use strict';
    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var r = n(23),
        i = n(24),
        o = n(8);
      function a() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (a() < t) throw new RangeError('Invalid typed array length');
        return (
          u.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
            : (null === e && (e = new u(t)), (e.length = t)),
          e
        );
      }
      function u(e, t, n) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
          return new u(e, t, n);
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw new Error(
              'If encoding is specified then the first argument must be a string'
            );
          return f(this, e);
        }
        return l(this, e, t, n);
      }
      function l(e, t, n, r) {
        if ('number' == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, r) {
              if ((t.byteLength, n < 0 || t.byteLength < n))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (r || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, r);
              u.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = u.prototype)
                : (e = h(e, t));
              return e;
            })(e, t, n, r)
          : 'string' == typeof t
          ? (function (e, t, n) {
              ('string' == typeof n && '' !== n) || (n = 'utf8');
              if (!u.isEncoding(n))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var r = 0 | p(t, n),
                i = (e = s(e, r)).write(t, n);
              i !== r && (e = e.slice(0, i));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (u.isBuffer(t)) {
                var n = 0 | d(t.length);
                return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
              }
              if (t) {
                if (
                  ('undefined' != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  'length' in t
                )
                  return 'number' != typeof t.length || (r = t.length) != r
                    ? s(e, 0)
                    : h(e, t);
                if ('Buffer' === t.type && o(t.data)) return h(e, t.data);
              }
              var r;
              throw new TypeError(
                'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
              );
            })(e, t);
      }
      function c(e) {
        if ('number' != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function f(e, t) {
        if ((c(t), (e = s(e, t < 0 ? 0 : 0 | d(t))), !u.TYPED_ARRAY_SUPPORT))
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function h(e, t) {
        var n = t.length < 0 ? 0 : 0 | d(t.length);
        e = s(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
      }
      function d(e) {
        if (e >= a())
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              a().toString(16) +
              ' bytes'
          );
        return 0 | e;
      }
      function p(e, t) {
        if (u.isBuffer(e)) return e.length;
        if (
          'undefined' != typeof ArrayBuffer &&
          'function' == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        'string' != typeof e && (e = '' + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1; ; )
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return n;
            case 'utf8':
            case 'utf-8':
            case void 0:
              return F(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * n;
            case 'hex':
              return n >>> 1;
            case 'base64':
              return H(e).length;
            default:
              if (r) return F(e).length;
              (t = ('' + t).toLowerCase()), (r = !0);
          }
      }
      function w(e, t, n) {
        var r = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return '';
        if ((n >>>= 0) <= (t >>>= 0)) return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return T(this, t, n);
            case 'utf8':
            case 'utf-8':
              return I(this, t, n);
            case 'ascii':
              return M(this, t, n);
            case 'latin1':
            case 'binary':
              return E(this, t, n);
            case 'base64':
              return C(this, t, n);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return W(this, t, n);
            default:
              if (r) throw new TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (r = !0);
          }
      }
      function g(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function y(e, t, n, r, i) {
        if (0 === e.length) return -1;
        if (
          ('string' == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = i ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (i) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }
        if (('string' == typeof t && (t = u.from(t, r)), u.isBuffer(t)))
          return 0 === t.length ? -1 : m(e, t, n, r, i);
        if ('number' == typeof t)
          return (
            (t &= 255),
            u.TYPED_ARRAY_SUPPORT &&
            'function' == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : m(e, [t], n, r, i)
          );
        throw new TypeError('val must be string, number or Buffer');
      }
      function m(e, t, n, r, i) {
        var o,
          a = 1,
          s = e.length,
          u = t.length;
        if (
          void 0 !== r &&
          ('ucs2' === (r = String(r).toLowerCase()) ||
            'ucs-2' === r ||
            'utf16le' === r ||
            'utf-16le' === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (s /= 2), (u /= 2), (n /= 2);
        }
        function l(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          var c = -1;
          for (o = n; o < s; o++)
            if (l(e, o) === l(t, -1 === c ? 0 : o - c)) {
              if ((-1 === c && (c = o), o - c + 1 === u)) return c * a;
            } else -1 !== c && (o -= o - c), (c = -1);
        } else
          for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
            for (var f = !0, h = 0; h < u; h++)
              if (l(e, o + h) !== l(t, h)) {
                f = !1;
                break;
              }
            if (f) return o;
          }
        return -1;
      }
      function b(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? (r = Number(r)) > i && (r = i) : (r = i);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError('Invalid hex string');
        r > o / 2 && (r = o / 2);
        for (var a = 0; a < r; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          e[n + a] = s;
        }
        return a;
      }
      function v(e, t, n, r) {
        return D(F(t, e.length - n), e, n, r);
      }
      function A(e, t, n, r) {
        return D(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n)
              t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r
        );
      }
      function S(e, t, n, r) {
        return A(e, t, n, r);
      }
      function _(e, t, n, r) {
        return D(H(t), e, n, r);
      }
      function P(e, t, n, r) {
        return D(
          (function (e, t) {
            for (
              var n, r, i, o = [], a = 0;
              a < e.length && !((t -= 2) < 0);
              ++a
            )
              (n = e.charCodeAt(a)),
                (r = n >> 8),
                (i = n % 256),
                o.push(i),
                o.push(r);
            return o;
          })(t, e.length - n),
          e,
          n,
          r
        );
      }
      function C(e, t, n) {
        return 0 === t && n === e.length
          ? r.fromByteArray(e)
          : r.fromByteArray(e.slice(t, n));
      }
      function I(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], i = t; i < n; ) {
          var o,
            a,
            s,
            u,
            l = e[i],
            c = null,
            f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
          if (i + f <= n)
            switch (f) {
              case 1:
                l < 128 && (c = l);
                break;
              case 2:
                128 == (192 & (o = e[i + 1])) &&
                  (u = ((31 & l) << 6) | (63 & o)) > 127 &&
                  (c = u);
                break;
              case 3:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    (u = ((15 & l) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (c = u);
                break;
              case 4:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  (s = e[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (u =
                      ((15 & l) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    u < 1114112 &&
                    (c = u);
            }
          null === c
            ? ((c = 65533), (f = 1))
            : c > 65535 &&
              ((c -= 65536),
              r.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            r.push(c),
            (i += f);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var n = '',
            r = 0;
          for (; r < t; )
            n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
          return n;
        })(r);
      }
      (t.Buffer = u),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return u.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (u.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      'function' == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = a()),
        (u.poolSize = 8192),
        (u._augment = function (e) {
          return (e.__proto__ = u.prototype), e;
        }),
        (u.from = function (e, t, n) {
          return l(null, e, t, n);
        }),
        u.TYPED_ARRAY_SUPPORT &&
          ((u.prototype.__proto__ = Uint8Array.prototype),
          (u.__proto__ = Uint8Array),
          'undefined' != typeof Symbol &&
            Symbol.species &&
            u[Symbol.species] === u &&
            Object.defineProperty(u, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (u.alloc = function (e, t, n) {
          return (function (e, t, n, r) {
            return (
              c(t),
              t <= 0
                ? s(e, t)
                : void 0 !== n
                ? 'string' == typeof r
                  ? s(e, t).fill(n, r)
                  : s(e, t).fill(n)
                : s(e, t)
            );
          })(null, e, t, n);
        }),
        (u.allocUnsafe = function (e) {
          return f(null, e);
        }),
        (u.allocUnsafeSlow = function (e) {
          return f(null, e);
        }),
        (u.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (u.compare = function (e, t) {
          if (!u.isBuffer(e) || !u.isBuffer(t))
            throw new TypeError('Arguments must be Buffers');
          if (e === t) return 0;
          for (
            var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (n = e[i]), (r = t[i]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (u.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return u.alloc(0);
          var n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = u.allocUnsafe(t),
            i = 0;
          for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if (!u.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            a.copy(r, i), (i += a.length);
          }
          return r;
        }),
        (u.byteLength = p),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ''
            : 0 === arguments.length
            ? I(this, 0, e)
            : w.apply(this, arguments);
        }),
        (u.prototype.equals = function (e) {
          if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          return this === e || 0 === u.compare(this, e);
        }),
        (u.prototype.inspect = function () {
          var e = '',
            n = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString('hex', 0, n).match(/.{2}/g).join(' ')),
              this.length > n && (e += ' ... ')),
            '<Buffer ' + e + '>'
          );
        }),
        (u.prototype.compare = function (e, t, n, r, i) {
          if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
          )
            throw new RangeError('out of range index');
          if (r >= i && t >= n) return 0;
          if (r >= i) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (
            var o = (i >>>= 0) - (r >>>= 0),
              a = (n >>>= 0) - (t >>>= 0),
              s = Math.min(o, a),
              l = this.slice(r, i),
              c = e.slice(t, n),
              f = 0;
            f < s;
            ++f
          )
            if (l[f] !== c[f]) {
              (o = l[f]), (a = c[f]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (u.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (u.prototype.indexOf = function (e, t, n) {
          return y(this, e, t, n, !0);
        }),
        (u.prototype.lastIndexOf = function (e, t, n) {
          return y(this, e, t, n, !1);
        }),
        (u.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
          else if (void 0 === n && 'string' == typeof t)
            (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              );
            (t |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === r && (r = 'utf8'))
                : ((r = n), (n = void 0));
          }
          var i = this.length - t;
          if (
            ((void 0 === n || n > i) && (n = i),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds');
          r || (r = 'utf8');
          for (var o = !1; ; )
            switch (r) {
              case 'hex':
                return b(this, e, t, n);
              case 'utf8':
              case 'utf-8':
                return v(this, e, t, n);
              case 'ascii':
                return A(this, e, t, n);
              case 'latin1':
              case 'binary':
                return S(this, e, t, n);
              case 'base64':
                return _(this, e, t, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return P(this, e, t, n);
              default:
                if (o) throw new TypeError('Unknown encoding: ' + r);
                (r = ('' + r).toLowerCase()), (o = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function M(e, t, n) {
        var r = '';
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
        return r;
      }
      function E(e, t, n) {
        var r = '';
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
        return r;
      }
      function T(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = '', o = t; o < n; ++o) i += N(e[o]);
        return i;
      }
      function W(e, t, n) {
        for (var r = e.slice(t, n), i = '', o = 0; o < r.length; o += 2)
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return i;
      }
      function R(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
        if (e + t > n)
          throw new RangeError('Trying to access beyond buffer length');
      }
      function k(e, t, n, r, i, o) {
        if (!u.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError('Index out of range');
      }
      function O(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
          e[n + i] =
            (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
      }
      function x(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
          e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
      }
      function U(e, t, n, r, i, o) {
        if (n + r > e.length) throw new RangeError('Index out of range');
        if (n < 0) throw new RangeError('Index out of range');
      }
      function j(e, t, n, r, o) {
        return o || U(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
      }
      function L(e, t, n, r, o) {
        return o || U(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
      }
      (u.prototype.slice = function (e, t) {
        var n,
          r = this.length;
        if (
          ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e),
          u.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, t)).__proto__ = u.prototype;
        else {
          var i = t - e;
          n = new u(i, void 0);
          for (var o = 0; o < i; ++o) n[o] = this[o + e];
        }
        return n;
      }),
        (u.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || R(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r;
        }),
        (u.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || R(e, t, this.length);
          for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
            r += this[e + --t] * i;
          return r;
        }),
        (u.prototype.readUInt8 = function (e, t) {
          return t || R(e, 1, this.length), this[e];
        }),
        (u.prototype.readUInt16LE = function (e, t) {
          return t || R(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (u.prototype.readUInt16BE = function (e, t) {
          return t || R(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (u.prototype.readUInt32LE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (u.prototype.readUInt32BE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (u.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || R(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (u.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || R(e, t, this.length);
          for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
            o += this[e + --r] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (u.prototype.readInt8 = function (e, t) {
          return (
            t || R(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (u.prototype.readInt16LE = function (e, t) {
          t || R(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt16BE = function (e, t) {
          t || R(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt32LE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (u.prototype.readFloatLE = function (e, t) {
          return t || R(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (u.prototype.readFloatBE = function (e, t) {
          return t || R(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (u.prototype.readDoubleLE = function (e, t) {
          return t || R(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (u.prototype.readDoubleBE = function (e, t) {
          return t || R(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (u.prototype.writeUIntLE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < n && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + n;
        }),
        (u.prototype.writeUIntBE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = n - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + n;
        }),
        (u.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 1, 255, 0),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (u.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : O(this, e, t, !0),
            t + 2
          );
        }),
        (u.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : O(this, e, t, !1),
            t + 2
          );
        }),
        (u.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : x(this, e, t, !0),
            t + 4
          );
        }),
        (u.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : x(this, e, t, !1),
            t + 4
          );
        }),
        (u.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            k(this, e, t, n, i - 1, -i);
          }
          var o = 0,
            a = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < n && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (u.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            k(this, e, t, n, i - 1, -i);
          }
          var o = n - 1,
            a = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (u.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 1, 127, -128),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (u.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : O(this, e, t, !0),
            t + 2
          );
        }),
        (u.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : O(this, e, t, !1),
            t + 2
          );
        }),
        (u.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 4, 2147483647, -2147483648),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : x(this, e, t, !0),
            t + 4
          );
        }),
        (u.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || k(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : x(this, e, t, !1),
            t + 4
          );
        }),
        (u.prototype.writeFloatLE = function (e, t, n) {
          return j(this, e, t, !0, n);
        }),
        (u.prototype.writeFloatBE = function (e, t, n) {
          return j(this, e, t, !1, n);
        }),
        (u.prototype.writeDoubleLE = function (e, t, n) {
          return L(this, e, t, !0, n);
        }),
        (u.prototype.writeDoubleBE = function (e, t, n) {
          return L(this, e, t, !1, n);
        }),
        (u.prototype.copy = function (e, t, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError('targetStart out of bounds');
          if (n < 0 || n >= this.length)
            throw new RangeError('sourceStart out of bounds');
          if (r < 0) throw new RangeError('sourceEnd out of bounds');
          r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
          var i,
            o = r - n;
          if (this === e && n < t && t < r)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
          else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
          return o;
        }),
        (u.prototype.fill = function (e, t, n, r) {
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : 'string' == typeof n && ((r = n), (n = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== r && 'string' != typeof r)
              throw new TypeError('encoding must be a string');
            if ('string' == typeof r && !u.isEncoding(r))
              throw new TypeError('Unknown encoding: ' + r);
          } else 'number' == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError('Out of range index');
          if (n <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (o = t; o < n; ++o) this[o] = e;
          else {
            var a = u.isBuffer(e) ? e : F(new u(e, r).toString()),
              s = a.length;
            for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
          }
          return this;
        });
      var B = /[^+\/0-9A-Za-z-_]/g;
      function N(e) {
        return e < 16 ? '0' + e.toString(16) : e.toString(16);
      }
      function F(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
              continue;
            }
            n = 65536 + (((i - 55296) << 10) | (n - 56320));
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error('Invalid code point');
            if ((t -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function H(e) {
        return r.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
              })(e).replace(B, '')).length < 2
            )
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e)
        );
      }
      function D(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
          t[i + n] = e[i];
        return i;
      }
    }.call(this, n(0)));
  },
  function (e, t, n) {
    'use strict';
    var r = n(6),
      i =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
    e.exports = f;
    var o = Object.create(n(5));
    o.inherits = n(2);
    var a = n(12),
      s = n(16);
    o.inherits(f, a);
    for (var u = i(s.prototype), l = 0; l < u.length; l++) {
      var c = u[l];
      f.prototype[c] || (f.prototype[c] = s.prototype[c]);
    }
    function f(e) {
      if (!(this instanceof f)) return new f(e);
      a.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once('end', h);
    }
    function h() {
      this.allowHalfOpen || this._writableState.ended || r.nextTick(d, this);
    }
    function d(e) {
      e.end();
    }
    Object.defineProperty(f.prototype, 'writableHighWaterMark', {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      },
    }),
      Object.defineProperty(f.prototype, 'destroyed', {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          );
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        },
      }),
      (f.prototype._destroy = function (e, t) {
        this.push(null), this.end(), r.nextTick(t, e);
      });
  },
  function (e, t, n) {
    (function (e) {
      function n(e) {
        return Object.prototype.toString.call(e);
      }
      (t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : '[object Array]' === n(e);
      }),
        (t.isBoolean = function (e) {
          return 'boolean' == typeof e;
        }),
        (t.isNull = function (e) {
          return null === e;
        }),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = function (e) {
          return 'number' == typeof e;
        }),
        (t.isString = function (e) {
          return 'string' == typeof e;
        }),
        (t.isSymbol = function (e) {
          return 'symbol' == typeof e;
        }),
        (t.isUndefined = function (e) {
          return void 0 === e;
        }),
        (t.isRegExp = function (e) {
          return '[object RegExp]' === n(e);
        }),
        (t.isObject = function (e) {
          return 'object' == typeof e && null !== e;
        }),
        (t.isDate = function (e) {
          return '[object Date]' === n(e);
        }),
        (t.isError = function (e) {
          return '[object Error]' === n(e) || e instanceof Error;
        }),
        (t.isFunction = function (e) {
          return 'function' == typeof e;
        }),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            'boolean' == typeof e ||
            'number' == typeof e ||
            'string' == typeof e ||
            'symbol' == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = e.isBuffer);
    }.call(this, n(3).Buffer));
  },
  function (e, t, n) {
    'use strict';
    (function (t) {
      void 0 === t ||
      !t.version ||
      0 === t.version.indexOf('v0.') ||
      (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
        ? (e.exports = {
            nextTick: function (e, n, r, i) {
              if ('function' != typeof e)
                throw new TypeError('"callback" argument must be a function');
              var o,
                a,
                s = arguments.length;
              switch (s) {
                case 0:
                case 1:
                  return t.nextTick(e);
                case 2:
                  return t.nextTick(function () {
                    e.call(null, n);
                  });
                case 3:
                  return t.nextTick(function () {
                    e.call(null, n, r);
                  });
                case 4:
                  return t.nextTick(function () {
                    e.call(null, n, r, i);
                  });
                default:
                  for (o = new Array(s - 1), a = 0; a < o.length; )
                    o[a++] = arguments[a];
                  return t.nextTick(function () {
                    e.apply(null, o);
                  });
              }
            },
          })
        : (e.exports = t);
    }.call(this, n(1)));
  },
  function (e, t, n) {
    var r = n(3),
      i = r.Buffer;
    function o(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function a(e, t, n) {
      return i(e, t, n);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = r)
      : (o(r, t), (t.Buffer = a)),
      o(i, a),
      (a.from = function (e, t, n) {
        if ('number' == typeof e)
          throw new TypeError('Argument must not be a number');
        return i(e, t, n);
      }),
      (a.alloc = function (e, t, n) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number');
        var r = i(e);
        return (
          void 0 !== t
            ? 'string' == typeof n
              ? r.fill(t, n)
              : r.fill(t)
            : r.fill(0),
          r
        );
      }),
      (a.allocUnsafe = function (e) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number');
        return i(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number');
        return r.SlowBuffer(e);
      });
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return '[object Array]' == n.call(e);
      };
  },
  function (e, t, n) {
    (function (e) {
      (t.fetch = s(e.fetch) && s(e.ReadableStream)),
        (t.writableStream = s(e.WritableStream)),
        (t.abortController = s(e.AbortController)),
        (t.blobConstructor = !1);
      try {
        new Blob([new ArrayBuffer(1)]), (t.blobConstructor = !0);
      } catch (e) {}
      var n;
      function r() {
        if (void 0 !== n) return n;
        if (e.XMLHttpRequest) {
          n = new e.XMLHttpRequest();
          try {
            n.open('GET', e.XDomainRequest ? '/' : 'https://example.com');
          } catch (e) {
            n = null;
          }
        } else n = null;
        return n;
      }
      function i(e) {
        var t = r();
        if (!t) return !1;
        try {
          return (t.responseType = e), t.responseType === e;
        } catch (e) {}
        return !1;
      }
      var o = void 0 !== e.ArrayBuffer,
        a = o && s(e.ArrayBuffer.prototype.slice);
      function s(e) {
        return 'function' == typeof e;
      }
      (t.arraybuffer = t.fetch || (o && i('arraybuffer'))),
        (t.msstream = !t.fetch && a && i('ms-stream')),
        (t.mozchunkedarraybuffer =
          !t.fetch && o && i('moz-chunked-arraybuffer')),
        (t.overrideMimeType = t.fetch || (!!r() && s(r().overrideMimeType))),
        (t.vbArray = s(e.VBArray)),
        (n = null);
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (e, r, i) {
      var o = n(9),
        a = n(2),
        s = n(11),
        u = (t.readyStates = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4,
        }),
        l = (t.IncomingMessage = function (t, n, a, u) {
          var l = this;
          if (
            (s.Readable.call(l),
            (l._mode = a),
            (l.headers = {}),
            (l.rawHeaders = []),
            (l.trailers = {}),
            (l.rawTrailers = []),
            l.on('end', function () {
              e.nextTick(function () {
                l.emit('close');
              });
            }),
            'fetch' === a)
          ) {
            if (
              ((l._fetchResponse = n),
              (l.url = n.url),
              (l.statusCode = n.status),
              (l.statusMessage = n.statusText),
              n.headers.forEach(function (e, t) {
                (l.headers[t.toLowerCase()] = e), l.rawHeaders.push(t, e);
              }),
              o.writableStream)
            ) {
              var c = new WritableStream({
                write: function (e) {
                  return new Promise(function (t, n) {
                    l._destroyed
                      ? n()
                      : l.push(new r(e))
                      ? t()
                      : (l._resumeFetch = t);
                  });
                },
                close: function () {
                  i.clearTimeout(u), l._destroyed || l.push(null);
                },
                abort: function (e) {
                  l._destroyed || l.emit('error', e);
                },
              });
              try {
                return void n.body.pipeTo(c).catch(function (e) {
                  i.clearTimeout(u), l._destroyed || l.emit('error', e);
                });
              } catch (e) {}
            }
            var f = n.body.getReader();
            !(function e() {
              f.read()
                .then(function (t) {
                  if (!l._destroyed) {
                    if (t.done) return i.clearTimeout(u), void l.push(null);
                    l.push(new r(t.value)), e();
                  }
                })
                .catch(function (e) {
                  i.clearTimeout(u), l._destroyed || l.emit('error', e);
                });
            })();
          } else {
            if (
              ((l._xhr = t),
              (l._pos = 0),
              (l.url = t.responseURL),
              (l.statusCode = t.status),
              (l.statusMessage = t.statusText),
              t
                .getAllResponseHeaders()
                .split(/\r?\n/)
                .forEach(function (e) {
                  var t = e.match(/^([^:]+):\s*(.*)/);
                  if (t) {
                    var n = t[1].toLowerCase();
                    'set-cookie' === n
                      ? (void 0 === l.headers[n] && (l.headers[n] = []),
                        l.headers[n].push(t[2]))
                      : void 0 !== l.headers[n]
                      ? (l.headers[n] += ', ' + t[2])
                      : (l.headers[n] = t[2]),
                      l.rawHeaders.push(t[1], t[2]);
                  }
                }),
              (l._charset = 'x-user-defined'),
              !o.overrideMimeType)
            ) {
              var h = l.rawHeaders['mime-type'];
              if (h) {
                var d = h.match(/;\s*charset=([^;])(;|$)/);
                d && (l._charset = d[1].toLowerCase());
              }
              l._charset || (l._charset = 'utf-8');
            }
          }
        });
      a(l, s.Readable),
        (l.prototype._read = function () {
          var e = this._resumeFetch;
          e && ((this._resumeFetch = null), e());
        }),
        (l.prototype._onXHRProgress = function () {
          var e = this,
            t = e._xhr,
            n = null;
          switch (e._mode) {
            case 'text:vbarray':
              if (t.readyState !== u.DONE) break;
              try {
                n = new i.VBArray(t.responseBody).toArray();
              } catch (e) {}
              if (null !== n) {
                e.push(new r(n));
                break;
              }
            case 'text':
              try {
                n = t.responseText;
              } catch (t) {
                e._mode = 'text:vbarray';
                break;
              }
              if (n.length > e._pos) {
                var o = n.substr(e._pos);
                if ('x-user-defined' === e._charset) {
                  for (var a = new r(o.length), s = 0; s < o.length; s++)
                    a[s] = 255 & o.charCodeAt(s);
                  e.push(a);
                } else e.push(o, e._charset);
                e._pos = n.length;
              }
              break;
            case 'arraybuffer':
              if (t.readyState !== u.DONE || !t.response) break;
              (n = t.response), e.push(new r(new Uint8Array(n)));
              break;
            case 'moz-chunked-arraybuffer':
              if (((n = t.response), t.readyState !== u.LOADING || !n)) break;
              e.push(new r(new Uint8Array(n)));
              break;
            case 'ms-stream':
              if (((n = t.response), t.readyState !== u.LOADING)) break;
              var l = new i.MSStreamReader();
              (l.onprogress = function () {
                l.result.byteLength > e._pos &&
                  (e.push(new r(new Uint8Array(l.result.slice(e._pos)))),
                  (e._pos = l.result.byteLength));
              }),
                (l.onload = function () {
                  e.push(null);
                }),
                l.readAsArrayBuffer(n);
          }
          e._xhr.readyState === u.DONE &&
            'ms-stream' !== e._mode &&
            e.push(null);
        });
    }.call(this, n(1), n(3).Buffer, n(0)));
  },
  function (e, t, n) {
    ((t = e.exports = n(12)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(16)),
      (t.Duplex = n(4)),
      (t.Transform = n(18)),
      (t.PassThrough = n(32));
  },
  function (e, t, n) {
    'use strict';
    (function (t, r) {
      var i = n(6);
      e.exports = b;
      var o,
        a = n(8);
      b.ReadableState = m;
      n(13).EventEmitter;
      var s = function (e, t) {
          return e.listeners(t).length;
        },
        u = n(14),
        l = n(7).Buffer,
        c = t.Uint8Array || function () {};
      var f = Object.create(n(5));
      f.inherits = n(2);
      var h = n(25),
        d = void 0;
      d = h && h.debuglog ? h.debuglog('stream') : function () {};
      var p,
        w = n(26),
        g = n(15);
      f.inherits(b, u);
      var y = ['error', 'close', 'destroy', 'pause', 'resume'];
      function m(e, t) {
        e = e || {};
        var r = t instanceof (o = o || n(4));
        (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var i = e.highWaterMark,
          a = e.readableHighWaterMark,
          s = this.objectMode ? 16 : 16384;
        (this.highWaterMark = i || 0 === i ? i : r && (a || 0 === a) ? a : s),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new w()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (p || (p = n(17).StringDecoder),
            (this.decoder = new p(e.encoding)),
            (this.encoding = e.encoding));
      }
      function b(e) {
        if (((o = o || n(4)), !(this instanceof b))) return new b(e);
        (this._readableState = new m(e, this)),
          (this.readable = !0),
          e &&
            ('function' == typeof e.read && (this._read = e.read),
            'function' == typeof e.destroy && (this._destroy = e.destroy)),
          u.call(this);
      }
      function v(e, t, n, r, i) {
        var o,
          a = e._readableState;
        null === t
          ? ((a.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0), _(e);
            })(e, a))
          : (i ||
              (o = (function (e, t) {
                var n;
                (r = t),
                  l.isBuffer(r) ||
                    r instanceof c ||
                    'string' == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (n = new TypeError('Invalid non-string/buffer chunk'));
                var r;
                return n;
              })(a, t)),
            o
              ? e.emit('error', o)
              : a.objectMode || (t && t.length > 0)
              ? ('string' == typeof t ||
                  a.objectMode ||
                  Object.getPrototypeOf(t) === l.prototype ||
                  (t = (function (e) {
                    return l.from(e);
                  })(t)),
                r
                  ? a.endEmitted
                    ? e.emit(
                        'error',
                        new Error('stream.unshift() after end event')
                      )
                    : A(e, a, t, !0)
                  : a.ended
                  ? e.emit('error', new Error('stream.push() after EOF'))
                  : ((a.reading = !1),
                    a.decoder && !n
                      ? ((t = a.decoder.write(t)),
                        a.objectMode || 0 !== t.length
                          ? A(e, a, t, !1)
                          : C(e, a))
                      : A(e, a, t, !1)))
              : r || (a.reading = !1));
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(a);
      }
      function A(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit('data', n), e.read(0))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && _(e)),
          C(e, t);
      }
      Object.defineProperty(b.prototype, 'destroyed', {
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (b.prototype.destroy = g.destroy),
        (b.prototype._undestroy = g.undestroy),
        (b.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }),
        (b.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : 'string' == typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = l.from(e, t)), (t = '')),
                (n = !0)),
            v(this, e, t, !1, n)
          );
        }),
        (b.prototype.unshift = function (e) {
          return v(this, e, null, !0, !1);
        }),
        (b.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (b.prototype.setEncoding = function (e) {
          return (
            p || (p = n(17).StringDecoder),
            (this._readableState.decoder = new p(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      function S(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 8388608
                    ? (e = 8388608)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function _(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (d('emitReadable', t.flowing),
            (t.emittedReadable = !0),
            t.sync ? i.nextTick(P, e) : P(e));
      }
      function P(e) {
        d('emit readable'), e.emit('readable'), T(e);
      }
      function C(e, t) {
        t.readingMore || ((t.readingMore = !0), i.nextTick(I, e, t));
      }
      function I(e, t) {
        for (
          var n = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (d('maybeReadMore read 0'), e.read(0), n !== t.length);

        )
          n = t.length;
        t.readingMore = !1;
      }
      function M(e) {
        d('readable nexttick read 0'), e.read(0);
      }
      function E(e, t) {
        t.reading || (d('resume read 0'), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit('resume'),
          T(e),
          t.flowing && !t.reading && e.read(0);
      }
      function T(e) {
        var t = e._readableState;
        for (d('flow', t.flowing); t.flowing && null !== e.read(); );
      }
      function W(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join('')
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = (function (e, t, n) {
                  var r;
                  e < t.head.data.length
                    ? ((r = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (r =
                        e === t.head.data.length
                          ? t.shift()
                          : n
                          ? (function (e, t) {
                              var n = t.head,
                                r = 1,
                                i = n.data;
                              e -= i.length;
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (a === o.length
                                    ? (i += o)
                                    : (i += o.slice(0, e)),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++r,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = o.slice(a)));
                                  break;
                                }
                                ++r;
                              }
                              return (t.length -= r), i;
                            })(e, t)
                          : (function (e, t) {
                              var n = l.allocUnsafe(e),
                                r = t.head,
                                i = 1;
                              r.data.copy(n), (e -= r.data.length);
                              for (; (r = r.next); ) {
                                var o = r.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (o.copy(n, n.length - e, 0, a),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++i,
                                      r.next
                                        ? (t.head = r.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = r), (r.data = o.slice(a)));
                                  break;
                                }
                                ++i;
                              }
                              return (t.length -= i), n;
                            })(e, t));
                  return r;
                })(e, t.buffer, t.decoder)),
            n);
        var n;
      }
      function R(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || ((t.ended = !0), i.nextTick(k, t, e));
      }
      function k(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
      }
      function O(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      (b.prototype.read = function (e) {
        d('read', e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            d('read: emitReadable', t.length, t.ended),
            0 === t.length && t.ended ? R(this) : _(this),
            null
          );
        if (0 === (e = S(e, t)) && t.ended)
          return 0 === t.length && R(this), null;
        var r,
          i = t.needReadable;
        return (
          d('need readable', i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            d('length less than watermark', (i = !0)),
          t.ended || t.reading
            ? d('reading or ended', (i = !1))
            : i &&
              (d('do read'),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = S(n, t))),
          null === (r = e > 0 ? W(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && R(this)),
          null !== r && this.emit('data', r),
          r
        );
      }),
        (b.prototype._read = function (e) {
          this.emit('error', new Error('_read() is not implemented'));
        }),
        (b.prototype.pipe = function (e, t) {
          var n = this,
            o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = e;
              break;
            case 1:
              o.pipes = [o.pipes, e];
              break;
            default:
              o.pipes.push(e);
          }
          (o.pipesCount += 1), d('pipe count=%d opts=%j', o.pipesCount, t);
          var u =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? c : b;
          function l(t, r) {
            d('onunpipe'),
              t === n &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                d('cleanup'),
                e.removeListener('close', y),
                e.removeListener('finish', m),
                e.removeListener('drain', f),
                e.removeListener('error', g),
                e.removeListener('unpipe', l),
                n.removeListener('end', c),
                n.removeListener('end', b),
                n.removeListener('data', w),
                (h = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  f());
          }
          function c() {
            d('onend'), e.end();
          }
          o.endEmitted ? i.nextTick(u) : n.once('end', u), e.on('unpipe', l);
          var f = (function (e) {
            return function () {
              var t = e._readableState;
              d('pipeOnDrain', t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && s(e, 'data') && ((t.flowing = !0), T(e));
            };
          })(n);
          e.on('drain', f);
          var h = !1;
          var p = !1;
          function w(t) {
            d('ondata'),
              (p = !1),
              !1 !== e.write(t) ||
                p ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== O(o.pipes, e))) &&
                  !h &&
                  (d(
                    'false write response, pause',
                    n._readableState.awaitDrain
                  ),
                  n._readableState.awaitDrain++,
                  (p = !0)),
                n.pause());
          }
          function g(t) {
            d('onerror', t),
              b(),
              e.removeListener('error', g),
              0 === s(e, 'error') && e.emit('error', t);
          }
          function y() {
            e.removeListener('finish', m), b();
          }
          function m() {
            d('onfinish'), e.removeListener('close', y), b();
          }
          function b() {
            d('unpipe'), n.unpipe(e);
          }
          return (
            n.on('data', w),
            (function (e, t, n) {
              if ('function' == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? a(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, 'error', g),
            e.once('close', y),
            e.once('finish', m),
            e.emit('pipe', n),
            o.flowing || (d('pipe resume'), n.resume()),
            e
          );
        }),
        (b.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit('unpipe', this, n)),
              this
            );
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++) r[o].emit('unpipe', this, n);
            return this;
          }
          var a = O(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit('unpipe', this, n)),
            this
          );
        }),
        (b.prototype.on = function (e, t) {
          var n = u.prototype.on.call(this, e, t);
          if ('data' === e) !1 !== this._readableState.flowing && this.resume();
          else if ('readable' === e) {
            var r = this._readableState;
            r.endEmitted ||
              r.readableListening ||
              ((r.readableListening = r.needReadable = !0),
              (r.emittedReadable = !1),
              r.reading ? r.length && _(this) : i.nextTick(M, this));
          }
          return n;
        }),
        (b.prototype.addListener = b.prototype.on),
        (b.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (d('resume'),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), i.nextTick(E, e, t));
              })(this, e)),
            this
          );
        }),
        (b.prototype.pause = function () {
          return (
            d('call pause flowing=%j', this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (d('pause'),
              (this._readableState.flowing = !1),
              this.emit('pause')),
            this
          );
        }),
        (b.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1;
          for (var i in (e.on('end', function () {
            if ((d('wrapped end'), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on('data', function (i) {
            (d('wrapped data'),
            n.decoder && (i = n.decoder.write(i)),
            n.objectMode && null == i) ||
              ((n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause())));
          }),
          e))
            void 0 === this[i] &&
              'function' == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < y.length; o++)
            e.on(y[o], this.emit.bind(this, y[o]));
          return (
            (this._read = function (t) {
              d('wrapped _read', t), r && ((r = !1), e.resume());
            }),
            this
          );
        }),
        Object.defineProperty(b.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        (b._fromList = W);
    }.call(this, n(0), n(1)));
  },
  function (e, t, n) {
    'use strict';
    var r,
      i = 'object' == typeof Reflect ? Reflect : null,
      o =
        i && 'function' == typeof i.apply
          ? i.apply
          : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
    r =
      i && 'function' == typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var a =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function s() {
      s.init.call(this);
    }
    (e.exports = s),
      (e.exports.once = function (e, t) {
        return new Promise(function (n, r) {
          function i() {
            void 0 !== o && e.removeListener('error', o),
              n([].slice.call(arguments));
          }
          var o;
          'error' !== t &&
            ((o = function (n) {
              e.removeListener(t, i), r(n);
            }),
            e.once('error', o)),
            e.once(t, i);
        });
      }),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var u = 10;
    function l(e) {
      if ('function' != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
    }
    function c(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners;
    }
    function f(e, t, n, r) {
      var i, o, a, s;
      if (
        (l(n),
        void 0 === (o = e._events)
          ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== o.newListener &&
              (e.emit('newListener', t, n.listener ? n.listener : n),
              (o = e._events)),
            (a = o[t])),
        void 0 === a)
      )
        (a = o[t] = n), ++e._eventsCount;
      else if (
        ('function' == typeof a
          ? (a = o[t] = r ? [n, a] : [a, n])
          : r
          ? a.unshift(n)
          : a.push(n),
        (i = c(e)) > 0 && a.length > i && !a.warned)
      ) {
        a.warned = !0;
        var u = new Error(
          'Possible EventEmitter memory leak detected. ' +
            a.length +
            ' ' +
            String(t) +
            ' listeners added. Use emitter.setMaxListeners() to increase limit'
        );
        (u.name = 'MaxListenersExceededWarning'),
          (u.emitter = e),
          (u.type = t),
          (u.count = a.length),
          (s = u),
          console && console.warn && console.warn(s);
      }
      return e;
    }
    function h() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    function d(e, t, n) {
      var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        i = h.bind(r);
      return (i.listener = n), (r.wrapFn = i), i;
    }
    function p(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i
        ? []
        : 'function' == typeof i
        ? n
          ? [i.listener || i]
          : [i]
        : n
        ? (function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
              t[n] = e[n].listener || e[n];
            return t;
          })(i)
        : g(i, i.length);
    }
    function w(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ('function' == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function g(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
      return n;
    }
    Object.defineProperty(s, 'defaultMaxListeners', {
      enumerable: !0,
      get: function () {
        return u;
      },
      set: function (e) {
        if ('number' != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          );
        u = e;
      },
    }),
      (s.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function (e) {
        if ('number' != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          );
        return (this._maxListeners = e), this;
      }),
      (s.prototype.getMaxListeners = function () {
        return c(this);
      }),
      (s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = 'error' === e,
          i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
          var a;
          if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
          var s = new Error(
            'Unhandled error.' + (a ? ' (' + a.message + ')' : '')
          );
          throw ((s.context = a), s);
        }
        var u = i[e];
        if (void 0 === u) return !1;
        if ('function' == typeof u) o(u, this, t);
        else {
          var l = u.length,
            c = g(u, l);
          for (n = 0; n < l; ++n) o(c[n], this, t);
        }
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        return f(this, e, t, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function (e, t) {
        return f(this, e, t, !0);
      }),
      (s.prototype.once = function (e, t) {
        return l(t), this.on(e, d(this, e, t)), this;
      }),
      (s.prototype.prependOnceListener = function (e, t) {
        return l(t), this.prependListener(e, d(this, e, t)), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var n, r, i, o, a;
        if ((l(t), void 0 === (r = this._events))) return this;
        if (void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete r[e],
              r.removeListener &&
                this.emit('removeListener', e, n.listener || t));
        else if ('function' != typeof n) {
          for (i = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === t || n[o].listener === t) {
              (a = n[o].listener), (i = o);
              break;
            }
          if (i < 0) return this;
          0 === i
            ? n.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(n, i),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener &&
              this.emit('removeListener', e, a || t);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function (e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete n[e]),
            this
          );
        if (0 === arguments.length) {
          var i,
            o = Object.keys(n);
          for (r = 0; r < o.length; ++r)
            'removeListener' !== (i = o[r]) && this.removeAllListeners(i);
          return (
            this.removeAllListeners('removeListener'),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ('function' == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this;
      }),
      (s.prototype.listeners = function (e) {
        return p(this, e, !0);
      }),
      (s.prototype.rawListeners = function (e) {
        return p(this, e, !1);
      }),
      (s.listenerCount = function (e, t) {
        return 'function' == typeof e.listenerCount
          ? e.listenerCount(t)
          : w.call(e, t);
      }),
      (s.prototype.listenerCount = w),
      (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? r(this._events) : [];
      });
  },
  function (e, t, n) {
    e.exports = n(13).EventEmitter;
  },
  function (e, t, n) {
    'use strict';
    var r = n(6);
    function i(e, t) {
      e.emit('error', t);
    }
    e.exports = {
      destroy: function (e, t) {
        var n = this,
          o = this._readableState && this._readableState.destroyed,
          a = this._writableState && this._writableState.destroyed;
        return o || a
          ? (t
              ? t(e)
              : !e ||
                (this._writableState && this._writableState.errorEmitted) ||
                r.nextTick(i, this, e),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? (r.nextTick(i, n, e),
                  n._writableState && (n._writableState.errorEmitted = !0))
                : t && t(e);
            }),
            this);
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, n) {
    'use strict';
    (function (t, r, i) {
      var o = n(6);
      function a(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var i = r.callback;
                t.pendingcb--, i(n), (r = r.next);
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e);
            })(t, e);
          });
      }
      e.exports = m;
      var s,
        u =
          !t.browser && ['v0.10', 'v0.9.'].indexOf(t.version.slice(0, 5)) > -1
            ? r
            : o.nextTick;
      m.WritableState = y;
      var l = Object.create(n(5));
      l.inherits = n(2);
      var c = { deprecate: n(30) },
        f = n(14),
        h = n(7).Buffer,
        d = i.Uint8Array || function () {};
      var p,
        w = n(15);
      function g() {}
      function y(e, t) {
        (s = s || n(4)), (e = e || {});
        var r = t instanceof s;
        (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var i = e.highWaterMark,
          l = e.writableHighWaterMark,
          c = this.objectMode ? 16 : 16384;
        (this.highWaterMark = i || 0 === i ? i : r && (l || 0 === l) ? l : c),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var f = !1 === e.decodeStrings;
        (this.decodeStrings = !f),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                r = n.sync,
                i = n.writecb;
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, r, i) {
                  --t.pendingcb,
                    n
                      ? (o.nextTick(i, r),
                        o.nextTick(P, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit('error', r))
                      : (i(r),
                        (e._writableState.errorEmitted = !0),
                        e.emit('error', r),
                        P(e, t));
                })(e, n, r, t, i);
              else {
                var a = S(n);
                a ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  A(e, n),
                  r ? u(v, e, n, a, i) : v(e, n, a, i);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new a(this));
      }
      function m(e) {
        if (((s = s || n(4)), !(p.call(m, this) || this instanceof s)))
          return new m(e);
        (this._writableState = new y(e, this)),
          (this.writable = !0),
          e &&
            ('function' == typeof e.write && (this._write = e.write),
            'function' == typeof e.writev && (this._writev = e.writev),
            'function' == typeof e.destroy && (this._destroy = e.destroy),
            'function' == typeof e.final && (this._final = e.final)),
          f.call(this);
      }
      function b(e, t, n, r, i, o, a) {
        (t.writelen = r),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function v(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit('drain'));
          })(e, t),
          t.pendingcb--,
          r(),
          P(e, t);
      }
      function A(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            i = new Array(r),
            o = t.corkedRequestsFree;
          o.entry = n;
          for (var s = 0, u = !0; n; )
            (i[s] = n), n.isBuf || (u = !1), (n = n.next), (s += 1);
          (i.allBuffers = u),
            b(e, t, !0, t.length, i, '', o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new a(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var l = n.chunk,
              c = n.encoding,
              f = n.callback;
            if (
              (b(e, t, !1, t.objectMode ? 1 : l.length, l, c, f),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function S(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function _(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && e.emit('error', n),
            (t.prefinished = !0),
            e.emit('prefinish'),
            P(e, t);
        });
      }
      function P(e, t) {
        var n = S(t);
        return (
          n &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ('function' == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), o.nextTick(_, e, t))
                  : ((t.prefinished = !0), e.emit('prefinish')));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
          n
        );
      }
      l.inherits(m, f),
        (y.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(y.prototype, 'buffer', {
              get: c.deprecate(
                function () {
                  return this.getBuffer();
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003'
              ),
            });
          } catch (e) {}
        })(),
        'function' == typeof Symbol &&
        Symbol.hasInstance &&
        'function' == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(m, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!p.call(this, e) ||
                  (this === m && e && e._writableState instanceof y)
                );
              },
            }))
          : (p = function (e) {
              return e instanceof this;
            }),
        (m.prototype.pipe = function () {
          this.emit('error', new Error('Cannot pipe, not readable'));
        }),
        (m.prototype.write = function (e, t, n) {
          var r,
            i = this._writableState,
            a = !1,
            s = !i.objectMode && ((r = e), h.isBuffer(r) || r instanceof d);
          return (
            s &&
              !h.isBuffer(e) &&
              (e = (function (e) {
                return h.from(e);
              })(e)),
            'function' == typeof t && ((n = t), (t = null)),
            s ? (t = 'buffer') : t || (t = i.defaultEncoding),
            'function' != typeof n && (n = g),
            i.ended
              ? (function (e, t) {
                  var n = new Error('write after end');
                  e.emit('error', n), o.nextTick(t, n);
                })(this, n)
              : (s ||
                  (function (e, t, n, r) {
                    var i = !0,
                      a = !1;
                    return (
                      null === n
                        ? (a = new TypeError(
                            'May not write null values to stream'
                          ))
                        : 'string' == typeof n ||
                          void 0 === n ||
                          t.objectMode ||
                          (a = new TypeError(
                            'Invalid non-string/buffer chunk'
                          )),
                      a && (e.emit('error', a), o.nextTick(r, a), (i = !1)),
                      i
                    );
                  })(this, i, e, n)) &&
                (i.pendingcb++,
                (a = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var a = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        'string' != typeof t ||
                        (t = h.from(t, n));
                      return t;
                    })(t, r, i);
                    r !== a && ((n = !0), (i = 'buffer'), (r = a));
                  }
                  var s = t.objectMode ? 1 : r.length;
                  t.length += s;
                  var u = t.length < t.highWaterMark;
                  u || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var l = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      l
                        ? (l.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else b(e, t, !1, s, r, i, o);
                  return u;
                })(this, i, s, e, t, n))),
            a
          );
        }),
        (m.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (m.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              A(this, e));
        }),
        (m.prototype.setDefaultEncoding = function (e) {
          if (
            ('string' == typeof e && (e = e.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw',
              ].indexOf((e + '').toLowerCase()) > -1
            ))
          )
            throw new TypeError('Unknown encoding: ' + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(m.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (m.prototype._write = function (e, t, n) {
          n(new Error('_write() is not implemented'));
        }),
        (m.prototype._writev = null),
        (m.prototype.end = function (e, t, n) {
          var r = this._writableState;
          'function' == typeof e
            ? ((n = e), (e = null), (t = null))
            : 'function' == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            r.corked && ((r.corked = 1), this.uncork()),
            r.ending ||
              r.finished ||
              (function (e, t, n) {
                (t.ending = !0),
                  P(e, t),
                  n && (t.finished ? o.nextTick(n) : e.once('finish', n));
                (t.ended = !0), (e.writable = !1);
              })(this, r, n);
        }),
        Object.defineProperty(m.prototype, 'destroyed', {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (m.prototype.destroy = w.destroy),
        (m.prototype._undestroy = w.undestroy),
        (m.prototype._destroy = function (e, t) {
          this.end(), t(e);
        });
    }.call(this, n(1), n(28).setImmediate, n(0)));
  },
  function (e, t, n) {
    'use strict';
    var r = n(31).Buffer,
      i =
        r.isEncoding ||
        function (e) {
          switch ((e = '' + e) && e.toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            case 'raw':
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return 'utf8';
            for (var t; ; )
              switch (e) {
                case 'utf8':
                case 'utf-8':
                  return 'utf8';
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 'utf16le';
                case 'latin1':
                case 'binary':
                  return 'latin1';
                case 'base64':
                case 'ascii':
                case 'hex':
                  return e;
                default:
                  if (t) return;
                  (e = ('' + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ('string' != typeof t && (r.isEncoding === i || !i(e)))
            throw new Error('Unknown encoding: ' + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case 'utf16le':
          (this.text = u), (this.end = l), (t = 4);
          break;
        case 'utf8':
          (this.fillLast = s), (t = 4);
          break;
        case 'base64':
          (this.text = c), (this.end = f), (t = 3);
          break;
        default:
          return (this.write = h), void (this.end = d);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = r.allocUnsafe(t));
    }
    function a(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed,
        n = (function (e, t, n) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), '�';
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), '�';
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), '�';
          }
        })(this, e);
      return void 0 !== n
        ? n
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function u(e, t) {
      if ((e.length - t) % 2 == 0) {
        var n = e.toString('utf16le', t);
        if (n) {
          var r = n.charCodeAt(n.length - 1);
          if (r >= 55296 && r <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              n.slice(0, -1)
            );
        }
        return n;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString('utf16le', t, e.length - 1)
      );
    }
    function l(e) {
      var t = e && e.length ? this.write(e) : '';
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString('utf16le', 0, n);
      }
      return t;
    }
    function c(e, t) {
      var n = (e.length - t) % 3;
      return 0 === n
        ? e.toString('base64', t)
        : ((this.lastNeed = 3 - n),
          (this.lastTotal = 3),
          1 === n
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString('base64', t, e.length - n));
    }
    function f(e) {
      var t = e && e.length ? this.write(e) : '';
      return this.lastNeed
        ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
        : t;
    }
    function h(e) {
      return e.toString(this.encoding);
    }
    function d(e) {
      return e && e.length ? this.write(e) : '';
    }
    (t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return '';
        var t, n;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return '';
          (n = this.lastNeed), (this.lastNeed = 0);
        } else n = 0;
        return n < e.length
          ? t
            ? t + this.text(e, n)
            : this.text(e, n)
          : t || '';
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : '';
        return this.lastNeed ? t + '�' : t;
      }),
      (o.prototype.text = function (e, t) {
        var n = (function (e, t, n) {
          var r = t.length - 1;
          if (r < n) return 0;
          var i = a(t[r]);
          if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0)
            return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString('utf8', t);
        this.lastTotal = n;
        var r = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, r), e.toString('utf8', t, r);
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, n) {
    'use strict';
    e.exports = a;
    var r = n(4),
      i = Object.create(n(5));
    function o(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (!r)
        return this.emit(
          'error',
          new Error('write callback called multiple times')
        );
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        r(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function a(e) {
      if (!(this instanceof a)) return new a(e);
      r.call(this, e),
        (this._transformState = {
          afterTransform: o.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ('function' == typeof e.transform && (this._transform = e.transform),
          'function' == typeof e.flush && (this._flush = e.flush)),
        this.on('prefinish', s);
    }
    function s() {
      var e = this;
      'function' == typeof this._flush
        ? this._flush(function (t, n) {
            u(e, t, n);
          })
        : u(this, null, null);
    }
    function u(e, t, n) {
      if (t) return e.emit('error', t);
      if ((null != n && e.push(n), e._writableState.length))
        throw new Error('Calling transform done when ws.length != 0');
      if (e._transformState.transforming)
        throw new Error('Calling transform done when still transforming');
      return e.push(null);
    }
    (i.inherits = n(2)),
      i.inherits(a, r),
      (a.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          r.prototype.push.call(this, e, t)
        );
      }),
      (a.prototype._transform = function (e, t, n) {
        throw new Error('_transform() is not implemented');
      }),
      (a.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var i = this._readableState;
          (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (a.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (a.prototype._destroy = function (e, t) {
        var n = this;
        r.prototype._destroy.call(this, e, function (e) {
          t(e), n.emit('close');
        });
      });
  },
  function (e, t, n) {
    'use strict';
    var r;
    !(function (i) {
      function o(e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          w,
          g,
          y,
          m,
          b = 0,
          v = [],
          A = 0,
          S = !1,
          _ = [],
          P = [],
          C = !1,
          I = !1,
          M = -1;
        if (
          ((r = (n = n || {}).encoding || 'UTF8'),
          (m = n.numRounds || 1) !== parseInt(m, 10) || 1 > m)
        )
          throw Error('numRounds must a integer >= 1');
        if ('SHA-1' === e)
          (s = 512),
            (w = F),
            (g = H),
            (a = 160),
            (y = function (e) {
              return e.slice();
            });
        else if (0 === e.lastIndexOf('SHA-', 0))
          if (
            ((w = function (t, n) {
              return D(t, n, e);
            }),
            (g = function (t, n, r, i) {
              var o, a;
              if ('SHA-224' === e || 'SHA-256' === e)
                (o = 15 + (((n + 65) >>> 9) << 4)), (a = 16);
              else {
                if ('SHA-384' !== e && 'SHA-512' !== e)
                  throw Error('Unexpected error in SHA-2 implementation');
                (o = 31 + (((n + 129) >>> 10) << 5)), (a = 32);
              }
              for (; t.length <= o; ) t.push(0);
              for (
                t[n >>> 5] |= 128 << (24 - (n % 32)),
                  n += r,
                  t[o] = 4294967295 & n,
                  t[o - 1] = (n / 4294967296) | 0,
                  r = t.length,
                  n = 0;
                n < r;
                n += a
              )
                i = D(t.slice(n, n + a), i, e);
              if ('SHA-224' === e)
                t = [i[0], i[1], i[2], i[3], i[4], i[5], i[6]];
              else if ('SHA-256' === e) t = i;
              else if ('SHA-384' === e)
                t = [
                  i[0].a,
                  i[0].b,
                  i[1].a,
                  i[1].b,
                  i[2].a,
                  i[2].b,
                  i[3].a,
                  i[3].b,
                  i[4].a,
                  i[4].b,
                  i[5].a,
                  i[5].b,
                ];
              else {
                if ('SHA-512' !== e)
                  throw Error('Unexpected error in SHA-2 implementation');
                t = [
                  i[0].a,
                  i[0].b,
                  i[1].a,
                  i[1].b,
                  i[2].a,
                  i[2].b,
                  i[3].a,
                  i[3].b,
                  i[4].a,
                  i[4].b,
                  i[5].a,
                  i[5].b,
                  i[6].a,
                  i[6].b,
                  i[7].a,
                  i[7].b,
                ];
              }
              return t;
            }),
            (y = function (e) {
              return e.slice();
            }),
            'SHA-224' === e)
          )
            (s = 512), (a = 224);
          else if ('SHA-256' === e) (s = 512), (a = 256);
          else if ('SHA-384' === e) (s = 1024), (a = 384);
          else {
            if ('SHA-512' !== e)
              throw Error('Chosen SHA variant is not supported');
            (s = 1024), (a = 512);
          }
        else {
          if (
            0 !== e.lastIndexOf('SHA3-', 0) &&
            0 !== e.lastIndexOf('SHAKE', 0)
          )
            throw Error('Chosen SHA variant is not supported');
          var E = 6;
          if (
            ((w = q),
            (y = function (e) {
              var t,
                n = [];
              for (t = 0; 5 > t; t += 1) n[t] = e[t].slice();
              return n;
            }),
            (M = 1),
            'SHA3-224' === e)
          )
            (s = 1152), (a = 224);
          else if ('SHA3-256' === e) (s = 1088), (a = 256);
          else if ('SHA3-384' === e) (s = 832), (a = 384);
          else if ('SHA3-512' === e) (s = 576), (a = 512);
          else if ('SHAKE128' === e) (s = 1344), (a = -1), (E = 31), (I = !0);
          else {
            if ('SHAKE256' !== e)
              throw Error('Chosen SHA variant is not supported');
            (s = 1088), (a = -1), (E = 31), (I = !0);
          }
          g = function (e, t, n, r, i) {
            var o,
              a = E,
              u = [],
              l = (n = s) >>> 5,
              c = 0,
              f = t >>> 5;
            for (o = 0; o < f && t >= n; o += l)
              (r = q(e.slice(o, o + l), r)), (t -= n);
            for (e = e.slice(o), t %= n; e.length < l; ) e.push(0);
            for (
              e[(o = t >>> 3) >> 2] ^= a << ((o % 4) * 8),
                e[l - 1] ^= 2147483648,
                r = q(e, r);
              32 * u.length < i &&
              ((e = r[c % 5][(c / 5) | 0]), u.push(e.b), !(32 * u.length >= i));

            )
              u.push(e.a), 0 == (64 * (c += 1)) % n && q(null, r);
            return u;
          };
        }
        (o = p(t, r, M)),
          (i = N(e)),
          (this.setHMACKey = function (t, n, o) {
            var u;
            if (!0 === S) throw Error('HMAC key already set');
            if (!0 === C)
              throw Error('Cannot set HMAC key after calling update');
            if (!0 === I) throw Error('SHAKE is not supported for HMAC');
            if (
              ((t = (n = p(n, (r = (o || {}).encoding || 'UTF8'), M)(t))
                .binLen),
              (n = n.value),
              (o = (u = s >>> 3) / 4 - 1),
              u < t / 8)
            ) {
              for (n = g(n, t, 0, N(e), a); n.length <= o; ) n.push(0);
              n[o] &= 4294967040;
            } else if (u > t / 8) {
              for (; n.length <= o; ) n.push(0);
              n[o] &= 4294967040;
            }
            for (t = 0; t <= o; t += 1)
              (_[t] = 909522486 ^ n[t]), (P[t] = 1549556828 ^ n[t]);
            (i = w(_, i)), (b = s), (S = !0);
          }),
          (this.update = function (e) {
            var t,
              n,
              r,
              a = 0,
              u = s >>> 5;
            for (
              e = (t = o(e, v, A)).binLen, n = t.value, t = e >>> 5, r = 0;
              r < t;
              r += u
            )
              a + s <= e && ((i = w(n.slice(r, r + u), i)), (a += s));
            (b += a), (v = n.slice(a >>> 5)), (A = e % s), (C = !0);
          }),
          (this.getHash = function (t, n) {
            var r, o, s, p;
            if (!0 === S)
              throw Error('Cannot call getHash after setting HMAC key');
            if (((s = d(n)), !0 === I)) {
              if (-1 === s.shakeLen)
                throw Error('shakeLen must be specified in options');
              a = s.shakeLen;
            }
            switch (t) {
              case 'HEX':
                r = function (e) {
                  return u(e, a, M, s);
                };
                break;
              case 'B64':
                r = function (e) {
                  return l(e, a, M, s);
                };
                break;
              case 'BYTES':
                r = function (e) {
                  return c(e, a, M);
                };
                break;
              case 'ARRAYBUFFER':
                try {
                  o = new ArrayBuffer(0);
                } catch (e) {
                  throw Error('ARRAYBUFFER not supported by this environment');
                }
                r = function (e) {
                  return f(e, a, M);
                };
                break;
              case 'UINT8ARRAY':
                try {
                  o = new Uint8Array(0);
                } catch (e) {
                  throw Error('UINT8ARRAY not supported by this environment');
                }
                r = function (e) {
                  return h(e, a, M);
                };
                break;
              default:
                throw Error(
                  'format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY'
                );
            }
            for (p = g(v.slice(), A, b, y(i), a), o = 1; o < m; o += 1)
              !0 === I &&
                0 != a % 32 &&
                (p[p.length - 1] &= 16777215 >>> (24 - (a % 32))),
                (p = g(p, a, 0, N(e), a));
            return r(p);
          }),
          (this.getHMAC = function (t, n) {
            var r, o, p, m;
            if (!1 === S)
              throw Error('Cannot call getHMAC without first setting HMAC key');
            switch (((p = d(n)), t)) {
              case 'HEX':
                r = function (e) {
                  return u(e, a, M, p);
                };
                break;
              case 'B64':
                r = function (e) {
                  return l(e, a, M, p);
                };
                break;
              case 'BYTES':
                r = function (e) {
                  return c(e, a, M);
                };
                break;
              case 'ARRAYBUFFER':
                try {
                  r = new ArrayBuffer(0);
                } catch (e) {
                  throw Error('ARRAYBUFFER not supported by this environment');
                }
                r = function (e) {
                  return f(e, a, M);
                };
                break;
              case 'UINT8ARRAY':
                try {
                  r = new Uint8Array(0);
                } catch (e) {
                  throw Error('UINT8ARRAY not supported by this environment');
                }
                r = function (e) {
                  return h(e, a, M);
                };
                break;
              default:
                throw Error(
                  'outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY'
                );
            }
            return (
              (o = g(v.slice(), A, b, y(i), a)),
              (m = w(P, N(e))),
              r((m = g(o, a, s, m, a)))
            );
          });
      }
      function a(e, t) {
        (this.a = e), (this.b = t);
      }
      function s(e, t, n, r) {
        var i, o, a, s, u;
        for (
          t = t || [0], o = (n = n || 0) >>> 3, u = -1 === r ? 3 : 0, i = 0;
          i < e.length;
          i += 1
        )
          (a = (s = i + o) >>> 2),
            t.length <= a && t.push(0),
            (t[a] |= e[i] << (8 * (u + (s % 4) * r)));
        return { value: t, binLen: 8 * e.length + n };
      }
      function u(e, t, n, r) {
        var i,
          o,
          a,
          s = '';
        for (t /= 8, a = -1 === n ? 3 : 0, i = 0; i < t; i += 1)
          (o = e[i >>> 2] >>> (8 * (a + (i % 4) * n))),
            (s +=
              '0123456789abcdef'.charAt((o >>> 4) & 15) +
              '0123456789abcdef'.charAt(15 & o));
        return r.outputUpper ? s.toUpperCase() : s;
      }
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u = '',
          l = t / 8;
        for (s = -1 === n ? 3 : 0, i = 0; i < l; i += 3)
          for (
            o = i + 1 < l ? e[(i + 1) >>> 2] : 0,
              a = i + 2 < l ? e[(i + 2) >>> 2] : 0,
              a =
                (((e[i >>> 2] >>> (8 * (s + (i % 4) * n))) & 255) << 16) |
                (((o >>> (8 * (s + ((i + 1) % 4) * n))) & 255) << 8) |
                ((a >>> (8 * (s + ((i + 2) % 4) * n))) & 255),
              o = 0;
            4 > o;
            o += 1
          )
            u +=
              8 * i + 6 * o <= t
                ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                    (a >>> (6 * (3 - o))) & 63
                  )
                : r.b64Pad;
        return u;
      }
      function c(e, t, n) {
        var r,
          i,
          o,
          a = '';
        for (t /= 8, o = -1 === n ? 3 : 0, r = 0; r < t; r += 1)
          (i = (e[r >>> 2] >>> (8 * (o + (r % 4) * n))) & 255),
            (a += String.fromCharCode(i));
        return a;
      }
      function f(e, t, n) {
        t /= 8;
        var r,
          i,
          o,
          a = new ArrayBuffer(t);
        for (o = new Uint8Array(a), i = -1 === n ? 3 : 0, r = 0; r < t; r += 1)
          o[r] = (e[r >>> 2] >>> (8 * (i + (r % 4) * n))) & 255;
        return a;
      }
      function h(e, t, n) {
        t /= 8;
        var r,
          i,
          o = new Uint8Array(t);
        for (i = -1 === n ? 3 : 0, r = 0; r < t; r += 1)
          o[r] = (e[r >>> 2] >>> (8 * (i + (r % 4) * n))) & 255;
        return o;
      }
      function d(e) {
        var t = { outputUpper: !1, b64Pad: '=', shakeLen: -1 };
        if (
          ((e = e || {}),
          (t.outputUpper = e.outputUpper || !1),
          !0 === e.hasOwnProperty('b64Pad') && (t.b64Pad = e.b64Pad),
          !0 === e.hasOwnProperty('shakeLen'))
        ) {
          if (0 != e.shakeLen % 8)
            throw Error('shakeLen must be a multiple of 8');
          t.shakeLen = e.shakeLen;
        }
        if ('boolean' != typeof t.outputUpper)
          throw Error('Invalid outputUpper formatting option');
        if ('string' != typeof t.b64Pad)
          throw Error('Invalid b64Pad formatting option');
        return t;
      }
      function p(e, t, n) {
        switch (t) {
          case 'UTF8':
          case 'UTF16BE':
          case 'UTF16LE':
            break;
          default:
            throw Error('encoding must be UTF8, UTF16BE, or UTF16LE');
        }
        switch (e) {
          case 'HEX':
            e = function (e, t, r) {
              var i,
                o,
                a,
                s,
                u,
                l,
                c = e.length;
              if (0 != c % 2)
                throw Error('String of HEX type must be in byte increments');
              for (
                t = t || [0],
                  u = (r = r || 0) >>> 3,
                  l = -1 === n ? 3 : 0,
                  i = 0;
                i < c;
                i += 2
              ) {
                if (((o = parseInt(e.substr(i, 2), 16)), isNaN(o)))
                  throw Error('String of HEX type contains invalid characters');
                for (a = (s = (i >>> 1) + u) >>> 2; t.length <= a; ) t.push(0);
                t[a] |= o << (8 * (l + (s % 4) * n));
              }
              return { value: t, binLen: 4 * c + r };
            };
            break;
          case 'TEXT':
            e = function (e, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                h,
                d = 0;
              if (((r = r || [0]), (l = (i = i || 0) >>> 3), 'UTF8' === t))
                for (h = -1 === n ? 3 : 0, s = 0; s < e.length; s += 1)
                  for (
                    a = [],
                      128 > (o = e.charCodeAt(s))
                        ? a.push(o)
                        : 2048 > o
                        ? (a.push(192 | (o >>> 6)), a.push(128 | (63 & o)))
                        : 55296 > o || 57344 <= o
                        ? a.push(
                            224 | (o >>> 12),
                            128 | ((o >>> 6) & 63),
                            128 | (63 & o)
                          )
                        : ((s += 1),
                          (o =
                            65536 +
                            (((1023 & o) << 10) | (1023 & e.charCodeAt(s)))),
                          a.push(
                            240 | (o >>> 18),
                            128 | ((o >>> 12) & 63),
                            128 | ((o >>> 6) & 63),
                            128 | (63 & o)
                          )),
                      u = 0;
                    u < a.length;
                    u += 1
                  ) {
                    for (c = (f = d + l) >>> 2; r.length <= c; ) r.push(0);
                    (r[c] |= a[u] << (8 * (h + (f % 4) * n))), (d += 1);
                  }
              else if ('UTF16BE' === t || 'UTF16LE' === t)
                for (
                  h = -1 === n ? 2 : 0,
                    a =
                      ('UTF16LE' === t && 1 !== n) ||
                      ('UTF16LE' !== t && 1 === n),
                    s = 0;
                  s < e.length;
                  s += 1
                ) {
                  for (
                    o = e.charCodeAt(s),
                      !0 === a && (o = ((u = 255 & o) << 8) | (o >>> 8)),
                      c = (f = d + l) >>> 2;
                    r.length <= c;

                  )
                    r.push(0);
                  (r[c] |= o << (8 * (h + (f % 4) * n))), (d += 2);
                }
              return { value: r, binLen: 8 * d + i };
            };
            break;
          case 'B64':
            e = function (e, t, r) {
              var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                h = 0;
              if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/))
                throw Error('Invalid character in base-64 string');
              if (
                ((o = e.indexOf('=')),
                (e = e.replace(/\=/g, '')),
                -1 !== o && o < e.length)
              )
                throw Error("Invalid '=' found in base-64 string");
              for (
                t = t || [0],
                  l = (r = r || 0) >>> 3,
                  f = -1 === n ? 3 : 0,
                  o = 0;
                o < e.length;
                o += 4
              ) {
                for (u = e.substr(o, 4), a = s = 0; a < u.length; a += 1)
                  s |=
                    (i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                      u.charAt(a)
                    )) <<
                    (18 - 6 * a);
                for (a = 0; a < u.length - 1; a += 1) {
                  for (i = (c = h + l) >>> 2; t.length <= i; ) t.push(0);
                  (t[i] |=
                    ((s >>> (16 - 8 * a)) & 255) << (8 * (f + (c % 4) * n))),
                    (h += 1);
                }
              }
              return { value: t, binLen: 8 * h + r };
            };
            break;
          case 'BYTES':
            e = function (e, t, r) {
              var i, o, a, s, u, l;
              for (
                t = t || [0],
                  a = (r = r || 0) >>> 3,
                  l = -1 === n ? 3 : 0,
                  o = 0;
                o < e.length;
                o += 1
              )
                (i = e.charCodeAt(o)),
                  (s = (u = o + a) >>> 2),
                  t.length <= s && t.push(0),
                  (t[s] |= i << (8 * (l + (u % 4) * n)));
              return { value: t, binLen: 8 * e.length + r };
            };
            break;
          case 'ARRAYBUFFER':
            try {
              e = new ArrayBuffer(0);
            } catch (e) {
              throw Error('ARRAYBUFFER not supported by this environment');
            }
            e = function (e, t, r) {
              return s(new Uint8Array(e), t, r, n);
            };
            break;
          case 'UINT8ARRAY':
            try {
              e = new Uint8Array(0);
            } catch (e) {
              throw Error('UINT8ARRAY not supported by this environment');
            }
            e = function (e, t, r) {
              return s(e, t, r, n);
            };
            break;
          default:
            throw Error(
              'format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY'
            );
        }
        return e;
      }
      function w(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function g(e, t) {
        return 32 < t
          ? ((t -= 32),
            new a(
              (e.b << t) | (e.a >>> (32 - t)),
              (e.a << t) | (e.b >>> (32 - t))
            ))
          : 0 !== t
          ? new a(
              (e.a << t) | (e.b >>> (32 - t)),
              (e.b << t) | (e.a >>> (32 - t))
            )
          : e;
      }
      function y(e, t) {
        return (e >>> t) | (e << (32 - t));
      }
      function m(e, t) {
        var n = null;
        n = new a(e.a, e.b);
        return 32 >= t
          ? new a(
              (n.a >>> t) | ((n.b << (32 - t)) & 4294967295),
              (n.b >>> t) | ((n.a << (32 - t)) & 4294967295)
            )
          : new a(
              (n.b >>> (t - 32)) | ((n.a << (64 - t)) & 4294967295),
              (n.a >>> (t - 32)) | ((n.b << (64 - t)) & 4294967295)
            );
      }
      function b(e, t) {
        return 32 >= t
          ? new a(e.a >>> t, (e.b >>> t) | ((e.a << (32 - t)) & 4294967295))
          : new a(0, e.a >>> (t - 32));
      }
      function v(e, t, n) {
        return (e & t) ^ (~e & n);
      }
      function A(e, t, n) {
        return new a((e.a & t.a) ^ (~e.a & n.a), (e.b & t.b) ^ (~e.b & n.b));
      }
      function S(e, t, n) {
        return (e & t) ^ (e & n) ^ (t & n);
      }
      function _(e, t, n) {
        return new a(
          (e.a & t.a) ^ (e.a & n.a) ^ (t.a & n.a),
          (e.b & t.b) ^ (e.b & n.b) ^ (t.b & n.b)
        );
      }
      function P(e) {
        return y(e, 2) ^ y(e, 13) ^ y(e, 22);
      }
      function C(e) {
        var t = m(e, 28),
          n = m(e, 34);
        return (e = m(e, 39)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
      }
      function I(e) {
        return y(e, 6) ^ y(e, 11) ^ y(e, 25);
      }
      function M(e) {
        var t = m(e, 14),
          n = m(e, 18);
        return (e = m(e, 41)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
      }
      function E(e) {
        return y(e, 7) ^ y(e, 18) ^ (e >>> 3);
      }
      function T(e) {
        var t = m(e, 1),
          n = m(e, 8);
        return (e = b(e, 7)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
      }
      function W(e) {
        return y(e, 17) ^ y(e, 19) ^ (e >>> 10);
      }
      function R(e) {
        var t = m(e, 19),
          n = m(e, 61);
        return (e = b(e, 6)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
      }
      function k(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (
          ((((e >>> 16) + (t >>> 16) + (n >>> 16)) & 65535) << 16) | (65535 & n)
        );
      }
      function O(e, t, n, r) {
        var i = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r);
        return (
          ((((e >>> 16) + (t >>> 16) + (n >>> 16) + (r >>> 16) + (i >>> 16)) &
            65535) <<
            16) |
          (65535 & i)
        );
      }
      function x(e, t, n, r, i) {
        var o =
          (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r) + (65535 & i);
        return (
          ((((e >>> 16) +
            (t >>> 16) +
            (n >>> 16) +
            (r >>> 16) +
            (i >>> 16) +
            (o >>> 16)) &
            65535) <<
            16) |
          (65535 & o)
        );
      }
      function U(e, t) {
        var n, r, i;
        return (
          (n = (65535 & e.b) + (65535 & t.b)),
          (i =
            ((65535 & (r = (e.b >>> 16) + (t.b >>> 16) + (n >>> 16))) << 16) |
            (65535 & n)),
          (n = (65535 & e.a) + (65535 & t.a) + (r >>> 16)),
          new a(
            ((65535 & (r = (e.a >>> 16) + (t.a >>> 16) + (n >>> 16))) << 16) |
              (65535 & n),
            i
          )
        );
      }
      function j(e, t, n, r) {
        var i, o, s;
        return (
          (i = (65535 & e.b) + (65535 & t.b) + (65535 & n.b) + (65535 & r.b)),
          (s =
            ((65535 &
              (o =
                (e.b >>> 16) +
                (t.b >>> 16) +
                (n.b >>> 16) +
                (r.b >>> 16) +
                (i >>> 16))) <<
              16) |
            (65535 & i)),
          (i =
            (65535 & e.a) +
            (65535 & t.a) +
            (65535 & n.a) +
            (65535 & r.a) +
            (o >>> 16)),
          new a(
            ((65535 &
              (o =
                (e.a >>> 16) +
                (t.a >>> 16) +
                (n.a >>> 16) +
                (r.a >>> 16) +
                (i >>> 16))) <<
              16) |
              (65535 & i),
            s
          )
        );
      }
      function L(e, t, n, r, i) {
        var o, s, u;
        return (
          (o =
            (65535 & e.b) +
            (65535 & t.b) +
            (65535 & n.b) +
            (65535 & r.b) +
            (65535 & i.b)),
          (u =
            ((65535 &
              (s =
                (e.b >>> 16) +
                (t.b >>> 16) +
                (n.b >>> 16) +
                (r.b >>> 16) +
                (i.b >>> 16) +
                (o >>> 16))) <<
              16) |
            (65535 & o)),
          (o =
            (65535 & e.a) +
            (65535 & t.a) +
            (65535 & n.a) +
            (65535 & r.a) +
            (65535 & i.a) +
            (s >>> 16)),
          new a(
            ((65535 &
              (s =
                (e.a >>> 16) +
                (t.a >>> 16) +
                (n.a >>> 16) +
                (r.a >>> 16) +
                (i.a >>> 16) +
                (o >>> 16))) <<
              16) |
              (65535 & o),
            u
          )
        );
      }
      function B(e, t) {
        return new a(e.a ^ t.a, e.b ^ t.b);
      }
      function N(e) {
        var t,
          n = [];
        if ('SHA-1' === e)
          n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        else if (0 === e.lastIndexOf('SHA-', 0))
          switch (
            ((n = [
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428,
            ]),
            (t = [
              1779033703,
              3144134277,
              1013904242,
              2773480762,
              1359893119,
              2600822924,
              528734635,
              1541459225,
            ]),
            e)
          ) {
            case 'SHA-224':
              break;
            case 'SHA-256':
              n = t;
              break;
            case 'SHA-384':
              n = [
                new a(3418070365, n[0]),
                new a(1654270250, n[1]),
                new a(2438529370, n[2]),
                new a(355462360, n[3]),
                new a(1731405415, n[4]),
                new a(41048885895, n[5]),
                new a(3675008525, n[6]),
                new a(1203062813, n[7]),
              ];
              break;
            case 'SHA-512':
              n = [
                new a(t[0], 4089235720),
                new a(t[1], 2227873595),
                new a(t[2], 4271175723),
                new a(t[3], 1595750129),
                new a(t[4], 2917565137),
                new a(t[5], 725511199),
                new a(t[6], 4215389547),
                new a(t[7], 327033209),
              ];
              break;
            default:
              throw Error('Unknown SHA variant');
          }
        else {
          if (
            0 !== e.lastIndexOf('SHA3-', 0) &&
            0 !== e.lastIndexOf('SHAKE', 0)
          )
            throw Error('No SHA variants supported');
          for (e = 0; 5 > e; e += 1)
            n[e] = [
              new a(0, 0),
              new a(0, 0),
              new a(0, 0),
              new a(0, 0),
              new a(0, 0),
            ];
        }
        return n;
      }
      function F(e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = [];
        for (
          n = t[0], r = t[1], i = t[2], o = t[3], a = t[4], u = 0;
          80 > u;
          u += 1
        )
          (l[u] =
            16 > u ? e[u] : w(l[u - 3] ^ l[u - 8] ^ l[u - 14] ^ l[u - 16], 1)),
            (s =
              20 > u
                ? x(w(n, 5), (r & i) ^ (~r & o), a, 1518500249, l[u])
                : 40 > u
                ? x(w(n, 5), r ^ i ^ o, a, 1859775393, l[u])
                : 60 > u
                ? x(w(n, 5), S(r, i, o), a, 2400959708, l[u])
                : x(w(n, 5), r ^ i ^ o, a, 3395469782, l[u])),
            (a = o),
            (o = i),
            (i = w(r, 30)),
            (r = n),
            (n = s);
        return (
          (t[0] = k(n, t[0])),
          (t[1] = k(r, t[1])),
          (t[2] = k(i, t[2])),
          (t[3] = k(o, t[3])),
          (t[4] = k(a, t[4])),
          t
        );
      }
      function H(e, t, n, r) {
        var i;
        for (i = 15 + (((t + 65) >>> 9) << 4); e.length <= i; ) e.push(0);
        for (
          e[t >>> 5] |= 128 << (24 - (t % 32)),
            t += n,
            e[i] = 4294967295 & t,
            e[i - 1] = (t / 4294967296) | 0,
            t = e.length,
            i = 0;
          i < t;
          i += 16
        )
          r = F(e.slice(i, i + 16), r);
        return r;
      }
      function D(e, t, n) {
        var r,
          i,
          o,
          s,
          u,
          l,
          c,
          f,
          h,
          d,
          p,
          w,
          g,
          y,
          m,
          b,
          B,
          N,
          F,
          H,
          D,
          q,
          G,
          K = [];
        if ('SHA-224' === n || 'SHA-256' === n)
          (d = 64),
            (w = 1),
            (q = Number),
            (g = k),
            (y = O),
            (m = x),
            (b = E),
            (B = W),
            (N = P),
            (F = I),
            (D = S),
            (H = v),
            (G = z);
        else {
          if ('SHA-384' !== n && 'SHA-512' !== n)
            throw Error('Unexpected error in SHA-2 implementation');
          (d = 80),
            (w = 2),
            (q = a),
            (g = U),
            (y = j),
            (m = L),
            (b = T),
            (B = R),
            (N = C),
            (F = M),
            (D = _),
            (H = A),
            (G = Y);
        }
        for (
          n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            s = t[4],
            u = t[5],
            l = t[6],
            c = t[7],
            p = 0;
          p < d;
          p += 1
        )
          16 > p
            ? ((h = p * w),
              (f = e.length <= h ? 0 : e[h]),
              (h = e.length <= h + 1 ? 0 : e[h + 1]),
              (K[p] = new q(f, h)))
            : (K[p] = y(B(K[p - 2]), K[p - 7], b(K[p - 15]), K[p - 16])),
            (f = m(c, F(s), H(s, u, l), G[p], K[p])),
            (h = g(N(n), D(n, r, i))),
            (c = l),
            (l = u),
            (u = s),
            (s = g(o, f)),
            (o = i),
            (i = r),
            (r = n),
            (n = g(f, h));
        return (
          (t[0] = g(n, t[0])),
          (t[1] = g(r, t[1])),
          (t[2] = g(i, t[2])),
          (t[3] = g(o, t[3])),
          (t[4] = g(s, t[4])),
          (t[5] = g(u, t[5])),
          (t[6] = g(l, t[6])),
          (t[7] = g(c, t[7])),
          t
        );
      }
      function q(e, t) {
        var n,
          r,
          i,
          o,
          s = [],
          u = [];
        if (null !== e)
          for (r = 0; r < e.length; r += 2)
            t[(r >>> 1) % 5][((r >>> 1) / 5) | 0] = B(
              t[(r >>> 1) % 5][((r >>> 1) / 5) | 0],
              new a(e[r + 1], e[r])
            );
        for (n = 0; 24 > n; n += 1) {
          for (o = N('SHA3-'), r = 0; 5 > r; r += 1) {
            i = t[r][0];
            var l = t[r][1],
              c = t[r][2],
              f = t[r][3],
              h = t[r][4];
            s[r] = new a(
              i.a ^ l.a ^ c.a ^ f.a ^ h.a,
              i.b ^ l.b ^ c.b ^ f.b ^ h.b
            );
          }
          for (r = 0; 5 > r; r += 1)
            u[r] = B(s[(r + 4) % 5], g(s[(r + 1) % 5], 1));
          for (r = 0; 5 > r; r += 1)
            for (i = 0; 5 > i; i += 1) t[r][i] = B(t[r][i], u[r]);
          for (r = 0; 5 > r; r += 1)
            for (i = 0; 5 > i; i += 1)
              o[i][(2 * r + 3 * i) % 5] = g(t[r][i], G[r][i]);
          for (r = 0; 5 > r; r += 1)
            for (i = 0; 5 > i; i += 1)
              t[r][i] = B(
                o[r][i],
                new a(
                  ~o[(r + 1) % 5][i].a & o[(r + 2) % 5][i].a,
                  ~o[(r + 1) % 5][i].b & o[(r + 2) % 5][i].b
                )
              );
          t[0][0] = B(t[0][0], K[n]);
        }
        return t;
      }
      var z, Y, G, K;
      (Y = [
        new a(
          (z = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ])[0],
          3609767458
        ),
        new a(z[1], 602891725),
        new a(z[2], 3964484399),
        new a(z[3], 2173295548),
        new a(z[4], 4081628472),
        new a(z[5], 3053834265),
        new a(z[6], 2937671579),
        new a(z[7], 3664609560),
        new a(z[8], 2734883394),
        new a(z[9], 1164996542),
        new a(z[10], 1323610764),
        new a(z[11], 3590304994),
        new a(z[12], 4068182383),
        new a(z[13], 991336113),
        new a(z[14], 633803317),
        new a(z[15], 3479774868),
        new a(z[16], 2666613458),
        new a(z[17], 944711139),
        new a(z[18], 2341262773),
        new a(z[19], 2007800933),
        new a(z[20], 1495990901),
        new a(z[21], 1856431235),
        new a(z[22], 3175218132),
        new a(z[23], 2198950837),
        new a(z[24], 3999719339),
        new a(z[25], 766784016),
        new a(z[26], 2566594879),
        new a(z[27], 3203337956),
        new a(z[28], 1034457026),
        new a(z[29], 2466948901),
        new a(z[30], 3758326383),
        new a(z[31], 168717936),
        new a(z[32], 1188179964),
        new a(z[33], 1546045734),
        new a(z[34], 1522805485),
        new a(z[35], 2643833823),
        new a(z[36], 2343527390),
        new a(z[37], 1014477480),
        new a(z[38], 1206759142),
        new a(z[39], 344077627),
        new a(z[40], 1290863460),
        new a(z[41], 3158454273),
        new a(z[42], 3505952657),
        new a(z[43], 106217008),
        new a(z[44], 3606008344),
        new a(z[45], 1432725776),
        new a(z[46], 1467031594),
        new a(z[47], 851169720),
        new a(z[48], 3100823752),
        new a(z[49], 1363258195),
        new a(z[50], 3750685593),
        new a(z[51], 3785050280),
        new a(z[52], 3318307427),
        new a(z[53], 3812723403),
        new a(z[54], 2003034995),
        new a(z[55], 3602036899),
        new a(z[56], 1575990012),
        new a(z[57], 1125592928),
        new a(z[58], 2716904306),
        new a(z[59], 442776044),
        new a(z[60], 593698344),
        new a(z[61], 3733110249),
        new a(z[62], 2999351573),
        new a(z[63], 3815920427),
        new a(3391569614, 3928383900),
        new a(3515267271, 566280711),
        new a(3940187606, 3454069534),
        new a(4118630271, 4000239992),
        new a(116418474, 1914138554),
        new a(174292421, 2731055270),
        new a(289380356, 3203993006),
        new a(460393269, 320620315),
        new a(685471733, 587496836),
        new a(852142971, 1086792851),
        new a(1017036298, 365543100),
        new a(1126000580, 2618297676),
        new a(1288033470, 3409855158),
        new a(1501505948, 4234509866),
        new a(1607167915, 987167468),
        new a(1816402316, 1246189591),
      ]),
        (K = [
          new a(0, 1),
          new a(0, 32898),
          new a(2147483648, 32906),
          new a(2147483648, 2147516416),
          new a(0, 32907),
          new a(0, 2147483649),
          new a(2147483648, 2147516545),
          new a(2147483648, 32777),
          new a(0, 138),
          new a(0, 136),
          new a(0, 2147516425),
          new a(0, 2147483658),
          new a(0, 2147516555),
          new a(2147483648, 139),
          new a(2147483648, 32905),
          new a(2147483648, 32771),
          new a(2147483648, 32770),
          new a(2147483648, 128),
          new a(0, 32778),
          new a(2147483648, 2147483658),
          new a(2147483648, 2147516545),
          new a(2147483648, 32896),
          new a(0, 2147483649),
          new a(2147483648, 2147516424),
        ]),
        (G = [
          [0, 36, 3, 41, 18],
          [1, 44, 10, 45, 2],
          [62, 6, 43, 15, 61],
          [28, 55, 25, 21, 56],
          [27, 20, 39, 8, 14],
        ]),
        void 0 ===
          (r = function () {
            return o;
          }.call(t, n, t, e)) || (e.exports = r);
    })();
  },
  function (e, t, n) {
    (function (e) {
      function n(e, t) {
        for (var n = 0, r = e.length - 1; r >= 0; r--) {
          var i = e[r];
          '.' === i
            ? e.splice(r, 1)
            : '..' === i
            ? (e.splice(r, 1), n++)
            : n && (e.splice(r, 1), n--);
        }
        if (t) for (; n--; n) e.unshift('..');
        return e;
      }
      function r(e, t) {
        if (e.filter) return e.filter(t);
        for (var n = [], r = 0; r < e.length; r++)
          t(e[r], r, e) && n.push(e[r]);
        return n;
      }
      (t.resolve = function () {
        for (var t = '', i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
          var a = o >= 0 ? arguments[o] : e.cwd();
          if ('string' != typeof a)
            throw new TypeError('Arguments to path.resolve must be strings');
          a && ((t = a + '/' + t), (i = '/' === a.charAt(0)));
        }
        return (
          (i ? '/' : '') +
            (t = n(
              r(t.split('/'), function (e) {
                return !!e;
              }),
              !i
            ).join('/')) || '.'
        );
      }),
        (t.normalize = function (e) {
          var o = t.isAbsolute(e),
            a = '/' === i(e, -1);
          return (
            (e = n(
              r(e.split('/'), function (e) {
                return !!e;
              }),
              !o
            ).join('/')) ||
              o ||
              (e = '.'),
            e && a && (e += '/'),
            (o ? '/' : '') + e
          );
        }),
        (t.isAbsolute = function (e) {
          return '/' === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            r(e, function (e, t) {
              if ('string' != typeof e)
                throw new TypeError('Arguments to path.join must be strings');
              return e;
            }).join('/')
          );
        }),
        (t.relative = function (e, n) {
          function r(e) {
            for (var t = 0; t < e.length && '' === e[t]; t++);
            for (var n = e.length - 1; n >= 0 && '' === e[n]; n--);
            return t > n ? [] : e.slice(t, n - t + 1);
          }
          (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
          for (
            var i = r(e.split('/')),
              o = r(n.split('/')),
              a = Math.min(i.length, o.length),
              s = a,
              u = 0;
            u < a;
            u++
          )
            if (i[u] !== o[u]) {
              s = u;
              break;
            }
          var l = [];
          for (u = s; u < i.length; u++) l.push('..');
          return (l = l.concat(o.slice(s))).join('/');
        }),
        (t.sep = '/'),
        (t.delimiter = ':'),
        (t.dirname = function (e) {
          if (('string' != typeof e && (e += ''), 0 === e.length)) return '.';
          for (
            var t = e.charCodeAt(0),
              n = 47 === t,
              r = -1,
              i = !0,
              o = e.length - 1;
            o >= 1;
            --o
          )
            if (47 === (t = e.charCodeAt(o))) {
              if (!i) {
                r = o;
                break;
              }
            } else i = !1;
          return -1 === r
            ? n
              ? '/'
              : '.'
            : n && 1 === r
            ? '/'
            : e.slice(0, r);
        }),
        (t.basename = function (e, t) {
          var n = (function (e) {
            'string' != typeof e && (e += '');
            var t,
              n = 0,
              r = -1,
              i = !0;
            for (t = e.length - 1; t >= 0; --t)
              if (47 === e.charCodeAt(t)) {
                if (!i) {
                  n = t + 1;
                  break;
                }
              } else -1 === r && ((i = !1), (r = t + 1));
            return -1 === r ? '' : e.slice(n, r);
          })(e);
          return (
            t &&
              n.substr(-1 * t.length) === t &&
              (n = n.substr(0, n.length - t.length)),
            n
          );
        }),
        (t.extname = function (e) {
          'string' != typeof e && (e += '');
          for (
            var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1;
            a >= 0;
            --a
          ) {
            var s = e.charCodeAt(a);
            if (47 !== s)
              -1 === r && ((i = !1), (r = a + 1)),
                46 === s
                  ? -1 === t
                    ? (t = a)
                    : 1 !== o && (o = 1)
                  : -1 !== t && (o = -1);
            else if (!i) {
              n = a + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === r ||
            0 === o ||
            (1 === o && t === r - 1 && t === n + 1)
            ? ''
            : e.slice(t, r);
        });
      var i =
        'b' === 'ab'.substr(-1)
          ? function (e, t, n) {
              return e.substr(t, n);
            }
          : function (e, t, n) {
              return t < 0 && (t = e.length + t), e.substr(t, n);
            };
    }.call(this, n(1)));
  },
  function (e, t, n) {
    (function (e) {
      var r = n(22),
        i = n(10),
        o = n(34),
        a = n(35),
        s = n(36),
        u = t;
      (u.request = function (t, n) {
        t = 'string' == typeof t ? s.parse(t) : o(t);
        var i = -1 === e.location.protocol.search(/^https?:$/) ? 'http:' : '',
          a = t.protocol || i,
          u = t.hostname || t.host,
          l = t.port,
          c = t.path || '/';
        u && -1 !== u.indexOf(':') && (u = '[' + u + ']'),
          (t.url = (u ? a + '//' + u : '') + (l ? ':' + l : '') + c),
          (t.method = (t.method || 'GET').toUpperCase()),
          (t.headers = t.headers || {});
        var f = new r(t);
        return n && f.on('response', n), f;
      }),
        (u.get = function (e, t) {
          var n = u.request(e, t);
          return n.end(), n;
        }),
        (u.ClientRequest = r),
        (u.IncomingMessage = i.IncomingMessage),
        (u.Agent = function () {}),
        (u.Agent.defaultMaxSockets = 4),
        (u.globalAgent = new u.Agent()),
        (u.STATUS_CODES = a),
        (u.METHODS = [
          'CHECKOUT',
          'CONNECT',
          'COPY',
          'DELETE',
          'GET',
          'HEAD',
          'LOCK',
          'M-SEARCH',
          'MERGE',
          'MKACTIVITY',
          'MKCOL',
          'MOVE',
          'NOTIFY',
          'OPTIONS',
          'PATCH',
          'POST',
          'PROPFIND',
          'PROPPATCH',
          'PURGE',
          'PUT',
          'REPORT',
          'SEARCH',
          'SUBSCRIBE',
          'TRACE',
          'UNLOCK',
          'UNSUBSCRIBE',
        ]);
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (t, r, i) {
      var o = n(9),
        a = n(2),
        s = n(10),
        u = n(11),
        l = n(33),
        c = s.IncomingMessage,
        f = s.readyStates;
      var h = (e.exports = function (e) {
        var n,
          r = this;
        u.Writable.call(r),
          (r._opts = e),
          (r._body = []),
          (r._headers = {}),
          e.auth &&
            r.setHeader(
              'Authorization',
              'Basic ' + new t(e.auth).toString('base64')
            ),
          Object.keys(e.headers).forEach(function (t) {
            r.setHeader(t, e.headers[t]);
          });
        var i = !0;
        if (
          'disable-fetch' === e.mode ||
          ('requestTimeout' in e && !o.abortController)
        )
          (i = !1), (n = !0);
        else if ('prefer-streaming' === e.mode) n = !1;
        else if ('allow-wrong-content-type' === e.mode) n = !o.overrideMimeType;
        else {
          if (e.mode && 'default' !== e.mode && 'prefer-fast' !== e.mode)
            throw new Error('Invalid value for opts.mode');
          n = !0;
        }
        (r._mode = (function (e, t) {
          return o.fetch && t
            ? 'fetch'
            : o.mozchunkedarraybuffer
            ? 'moz-chunked-arraybuffer'
            : o.msstream
            ? 'ms-stream'
            : o.arraybuffer && e
            ? 'arraybuffer'
            : o.vbArray && e
            ? 'text:vbarray'
            : 'text';
        })(n, i)),
          (r._fetchTimer = null),
          r.on('finish', function () {
            r._onFinish();
          });
      });
      a(h, u.Writable),
        (h.prototype.setHeader = function (e, t) {
          var n = e.toLowerCase();
          -1 === d.indexOf(n) && (this._headers[n] = { name: e, value: t });
        }),
        (h.prototype.getHeader = function (e) {
          var t = this._headers[e.toLowerCase()];
          return t ? t.value : null;
        }),
        (h.prototype.removeHeader = function (e) {
          delete this._headers[e.toLowerCase()];
        }),
        (h.prototype._onFinish = function () {
          var e = this;
          if (!e._destroyed) {
            var n = e._opts,
              a = e._headers,
              s = null;
            'GET' !== n.method &&
              'HEAD' !== n.method &&
              (s = o.arraybuffer
                ? l(t.concat(e._body))
                : o.blobConstructor
                ? new r.Blob(
                    e._body.map(function (e) {
                      return l(e);
                    }),
                    { type: (a['content-type'] || {}).value || '' }
                  )
                : t.concat(e._body).toString());
            var u = [];
            if (
              (Object.keys(a).forEach(function (e) {
                var t = a[e].name,
                  n = a[e].value;
                Array.isArray(n)
                  ? n.forEach(function (e) {
                      u.push([t, e]);
                    })
                  : u.push([t, n]);
              }),
              'fetch' === e._mode)
            ) {
              var c = null;
              if (o.abortController) {
                var h = new AbortController();
                (c = h.signal),
                  (e._fetchAbortController = h),
                  'requestTimeout' in n &&
                    0 !== n.requestTimeout &&
                    (e._fetchTimer = r.setTimeout(function () {
                      e.emit('requestTimeout'),
                        e._fetchAbortController &&
                          e._fetchAbortController.abort();
                    }, n.requestTimeout));
              }
              r.fetch(e._opts.url, {
                method: e._opts.method,
                headers: u,
                body: s || void 0,
                mode: 'cors',
                credentials: n.withCredentials ? 'include' : 'same-origin',
                signal: c,
              }).then(
                function (t) {
                  (e._fetchResponse = t), e._connect();
                },
                function (t) {
                  r.clearTimeout(e._fetchTimer),
                    e._destroyed || e.emit('error', t);
                }
              );
            } else {
              var d = (e._xhr = new r.XMLHttpRequest());
              try {
                d.open(e._opts.method, e._opts.url, !0);
              } catch (t) {
                return void i.nextTick(function () {
                  e.emit('error', t);
                });
              }
              'responseType' in d && (d.responseType = e._mode.split(':')[0]),
                'withCredentials' in d &&
                  (d.withCredentials = !!n.withCredentials),
                'text' === e._mode &&
                  'overrideMimeType' in d &&
                  d.overrideMimeType('text/plain; charset=x-user-defined'),
                'requestTimeout' in n &&
                  ((d.timeout = n.requestTimeout),
                  (d.ontimeout = function () {
                    e.emit('requestTimeout');
                  })),
                u.forEach(function (e) {
                  d.setRequestHeader(e[0], e[1]);
                }),
                (e._response = null),
                (d.onreadystatechange = function () {
                  switch (d.readyState) {
                    case f.LOADING:
                    case f.DONE:
                      e._onXHRProgress();
                  }
                }),
                'moz-chunked-arraybuffer' === e._mode &&
                  (d.onprogress = function () {
                    e._onXHRProgress();
                  }),
                (d.onerror = function () {
                  e._destroyed || e.emit('error', new Error('XHR error'));
                });
              try {
                d.send(s);
              } catch (t) {
                return void i.nextTick(function () {
                  e.emit('error', t);
                });
              }
            }
          }
        }),
        (h.prototype._onXHRProgress = function () {
          (function (e) {
            try {
              var t = e.status;
              return null !== t && 0 !== t;
            } catch (e) {
              return !1;
            }
          })(this._xhr) &&
            !this._destroyed &&
            (this._response || this._connect(),
            this._response._onXHRProgress());
        }),
        (h.prototype._connect = function () {
          var e = this;
          e._destroyed ||
            ((e._response = new c(
              e._xhr,
              e._fetchResponse,
              e._mode,
              e._fetchTimer
            )),
            e._response.on('error', function (t) {
              e.emit('error', t);
            }),
            e.emit('response', e._response));
        }),
        (h.prototype._write = function (e, t, n) {
          this._body.push(e), n();
        }),
        (h.prototype.abort = h.prototype.destroy = function () {
          (this._destroyed = !0),
            r.clearTimeout(this._fetchTimer),
            this._response && (this._response._destroyed = !0),
            this._xhr
              ? this._xhr.abort()
              : this._fetchAbortController &&
                this._fetchAbortController.abort();
        }),
        (h.prototype.end = function (e, t, n) {
          'function' == typeof e && ((n = e), (e = void 0)),
            u.Writable.prototype.end.call(this, e, t, n);
        }),
        (h.prototype.flushHeaders = function () {}),
        (h.prototype.setTimeout = function () {}),
        (h.prototype.setNoDelay = function () {}),
        (h.prototype.setSocketKeepAlive = function () {});
      var d = [
        'accept-charset',
        'accept-encoding',
        'access-control-request-headers',
        'access-control-request-method',
        'connection',
        'content-length',
        'cookie',
        'cookie2',
        'date',
        'dnt',
        'expect',
        'host',
        'keep-alive',
        'origin',
        'referer',
        'te',
        'trailer',
        'transfer-encoding',
        'upgrade',
        'via',
      ];
    }.call(this, n(3).Buffer, n(0), n(1)));
  },
  function (e, t, n) {
    'use strict';
    (t.byteLength = function (e) {
      var t = l(e),
        n = t[0],
        r = t[1];
      return (3 * (n + r)) / 4 - r;
    }),
      (t.toByteArray = function (e) {
        var t,
          n,
          r = l(e),
          a = r[0],
          s = r[1],
          u = new o(
            (function (e, t, n) {
              return (3 * (t + n)) / 4 - n;
            })(0, a, s)
          ),
          c = 0,
          f = s > 0 ? a - 4 : a;
        for (n = 0; n < f; n += 4)
          (t =
            (i[e.charCodeAt(n)] << 18) |
            (i[e.charCodeAt(n + 1)] << 12) |
            (i[e.charCodeAt(n + 2)] << 6) |
            i[e.charCodeAt(n + 3)]),
            (u[c++] = (t >> 16) & 255),
            (u[c++] = (t >> 8) & 255),
            (u[c++] = 255 & t);
        2 === s &&
          ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)),
          (u[c++] = 255 & t));
        1 === s &&
          ((t =
            (i[e.charCodeAt(n)] << 10) |
            (i[e.charCodeAt(n + 1)] << 4) |
            (i[e.charCodeAt(n + 2)] >> 2)),
          (u[c++] = (t >> 8) & 255),
          (u[c++] = 255 & t));
        return u;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i;
          a < s;
          a += 16383
        )
          o.push(c(e, a, a + 16383 > s ? s : a + 16383));
        1 === i
          ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + '=='))
          : 2 === i &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + '='));
        return o.join('');
      });
    for (
      var r = [],
        i = [],
        o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
        a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        s = 0,
        u = a.length;
      s < u;
      ++s
    )
      (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
    function l(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4');
      var n = e.indexOf('=');
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
    }
    function c(e, t, n) {
      for (var i, o, a = [], s = t; s < n; s += 3)
        (i =
          ((e[s] << 16) & 16711680) +
          ((e[s + 1] << 8) & 65280) +
          (255 & e[s + 2])),
          a.push(
            r[((o = i) >> 18) & 63] +
              r[(o >> 12) & 63] +
              r[(o >> 6) & 63] +
              r[63 & o]
          );
      return a.join('');
    }
    (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, n, r, i) {
      var o,
        a,
        s = 8 * i - r - 1,
        u = (1 << s) - 1,
        l = u >> 1,
        c = -7,
        f = n ? i - 1 : 0,
        h = n ? -1 : 1,
        d = e[t + f];
      for (
        f += h, o = d & ((1 << -c) - 1), d >>= -c, c += s;
        c > 0;
        o = 256 * o + e[t + f], f += h, c -= 8
      );
      for (
        a = o & ((1 << -c) - 1), o >>= -c, c += r;
        c > 0;
        a = 256 * a + e[t + f], f += h, c -= 8
      );
      if (0 === o) o = 1 - l;
      else {
        if (o === u) return a ? NaN : (1 / 0) * (d ? -1 : 1);
        (a += Math.pow(2, r)), (o -= l);
      }
      return (d ? -1 : 1) * a * Math.pow(2, o - r);
    }),
      (t.write = function (e, t, n, r, i, o) {
        var a,
          s,
          u,
          l = 8 * o - i - 1,
          c = (1 << l) - 1,
          f = c >> 1,
          h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : o - 1,
          p = r ? 1 : -1,
          w = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (a = c))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                (t += a + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 &&
                  (a++, (u /= 2)),
                a + f >= c
                  ? ((s = 0), (a = c))
                  : a + f >= 1
                  ? ((s = (t * u - 1) * Math.pow(2, i)), (a += f))
                  : ((s = t * Math.pow(2, f - 1) * Math.pow(2, i)), (a = 0)));
          i >= 8;
          e[n + d] = 255 & s, d += p, s /= 256, i -= 8
        );
        for (
          a = (a << i) | s, l += i;
          l > 0;
          e[n + d] = 255 & a, d += p, a /= 256, l -= 8
        );
        e[n + d - p] |= 128 * w;
      });
  },
  function (e, t) {},
  function (e, t, n) {
    'use strict';
    var r = n(7).Buffer,
      i = n(27);
    (e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return '';
          for (var t = this.head, n = '' + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return r.alloc(0);
          if (1 === this.length) return this.head.data;
          for (
            var t, n, i, o = r.allocUnsafe(e >>> 0), a = this.head, s = 0;
            a;

          )
            (t = a.data),
              (n = o),
              (i = s),
              t.copy(n, i),
              (s += a.data.length),
              (a = a.next);
          return o;
        }),
        e
      );
    })()),
      i &&
        i.inspect &&
        i.inspect.custom &&
        (e.exports.prototype[i.inspect.custom] = function () {
          var e = i.inspect({ length: this.length });
          return this.constructor.name + ' ' + e;
        });
  },
  function (e, t) {},
  function (e, t, n) {
    (function (e) {
      var r =
          (void 0 !== e && e) || ('undefined' != typeof self && self) || window,
        i = Function.prototype.apply;
      function o(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new o(i.call(setTimeout, r, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new o(i.call(setInterval, r, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval = function (e) {
          e && e.close();
        }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active = function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 &&
            (e._idleTimeoutId = setTimeout(function () {
              e._onTimeout && e._onTimeout();
            }, t));
        }),
        n(29),
        (t.setImmediate =
          ('undefined' != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ('undefined' != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        'use strict';
        if (!e.setImmediate) {
          var r,
            i,
            o,
            a,
            s,
            u = 1,
            l = {},
            c = !1,
            f = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (h = h && h.setTimeout ? h : e),
            '[object process]' === {}.toString.call(e.process)
              ? (r = function (e) {
                  t.nextTick(function () {
                    p(e);
                  });
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage('', '*'),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function (e) {
                    p(e.data);
                  }),
                  (r = function (e) {
                    o.port2.postMessage(e);
                  }))
                : f && 'onreadystatechange' in f.createElement('script')
                ? ((i = f.documentElement),
                  (r = function (e) {
                    var t = f.createElement('script');
                    (t.onreadystatechange = function () {
                      p(e),
                        (t.onreadystatechange = null),
                        i.removeChild(t),
                        (t = null);
                    }),
                      i.appendChild(t);
                  }))
                : (r = function (e) {
                    setTimeout(p, 0, e);
                  })
              : ((a = 'setImmediate$' + Math.random() + '$'),
                (s = function (t) {
                  t.source === e &&
                    'string' == typeof t.data &&
                    0 === t.data.indexOf(a) &&
                    p(+t.data.slice(a.length));
                }),
                e.addEventListener
                  ? e.addEventListener('message', s, !1)
                  : e.attachEvent('onmessage', s),
                (r = function (t) {
                  e.postMessage(a + t, '*');
                })),
            (h.setImmediate = function (e) {
              'function' != typeof e && (e = new Function('' + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var i = { callback: e, args: t };
              return (l[u] = i), r(u), u++;
            }),
            (h.clearImmediate = d);
        }
        function d(e) {
          delete l[e];
        }
        function p(e) {
          if (c) setTimeout(p, 0, e);
          else {
            var t = l[e];
            if (t) {
              c = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n);
                  }
                })(t);
              } finally {
                d(e), (c = !1);
              }
            }
          }
        }
      })('undefined' == typeof self ? (void 0 === e ? this : e) : self);
    }.call(this, n(0), n(1)));
  },
  function (e, t, n) {
    (function (t) {
      function n(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var n = t.localStorage[e];
        return null != n && 'true' === String(n).toLowerCase();
      }
      e.exports = function (e, t) {
        if (n('noDeprecation')) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n('throwDeprecation')) throw new Error(t);
            n('traceDeprecation') ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }.call(this, n(0)));
  },
  function (e, t, n) {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var r = n(3),
      i = r.Buffer;
    function o(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function a(e, t, n) {
      return i(e, t, n);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = r)
      : (o(r, t), (t.Buffer = a)),
      (a.prototype = Object.create(i.prototype)),
      o(i, a),
      (a.from = function (e, t, n) {
        if ('number' == typeof e)
          throw new TypeError('Argument must not be a number');
        return i(e, t, n);
      }),
      (a.alloc = function (e, t, n) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number');
        var r = i(e);
        return (
          void 0 !== t
            ? 'string' == typeof n
              ? r.fill(t, n)
              : r.fill(t)
            : r.fill(0),
          r
        );
      }),
      (a.allocUnsafe = function (e) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number');
        return i(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number');
        return r.SlowBuffer(e);
      });
  },
  function (e, t, n) {
    'use strict';
    e.exports = o;
    var r = n(18),
      i = Object.create(n(5));
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      r.call(this, e);
    }
    (i.inherits = n(2)),
      i.inherits(o, r),
      (o.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    var r = n(3).Buffer;
    e.exports = function (e) {
      if (e instanceof Uint8Array) {
        if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
          return e.buffer;
        if ('function' == typeof e.buffer.slice)
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
      }
      if (r.isBuffer(e)) {
        for (var t = new Uint8Array(e.length), n = e.length, i = 0; i < n; i++)
          t[i] = e[i];
        return t.buffer;
      }
      throw new Error('Argument must be a Buffer');
    };
  },
  function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) n.call(r, i) && (e[i] = r[i]);
      }
      return e;
    };
    var n = Object.prototype.hasOwnProperty;
  },
  function (e, t) {
    e.exports = {
      100: 'Continue',
      101: 'Switching Protocols',
      102: 'Processing',
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      203: 'Non-Authoritative Information',
      204: 'No Content',
      205: 'Reset Content',
      206: 'Partial Content',
      207: 'Multi-Status',
      208: 'Already Reported',
      226: 'IM Used',
      300: 'Multiple Choices',
      301: 'Moved Permanently',
      302: 'Found',
      303: 'See Other',
      304: 'Not Modified',
      305: 'Use Proxy',
      307: 'Temporary Redirect',
      308: 'Permanent Redirect',
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Timeout',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precondition Failed',
      413: 'Payload Too Large',
      414: 'URI Too Long',
      415: 'Unsupported Media Type',
      416: 'Range Not Satisfiable',
      417: 'Expectation Failed',
      418: "I'm a teapot",
      421: 'Misdirected Request',
      422: 'Unprocessable Entity',
      423: 'Locked',
      424: 'Failed Dependency',
      425: 'Unordered Collection',
      426: 'Upgrade Required',
      428: 'Precondition Required',
      429: 'Too Many Requests',
      431: 'Request Header Fields Too Large',
      451: 'Unavailable For Legal Reasons',
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Timeout',
      505: 'HTTP Version Not Supported',
      506: 'Variant Also Negotiates',
      507: 'Insufficient Storage',
      508: 'Loop Detected',
      509: 'Bandwidth Limit Exceeded',
      510: 'Not Extended',
      511: 'Network Authentication Required',
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(37),
      i = n(39);
    function o() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    (t.parse = b),
      (t.resolve = function (e, t) {
        return b(e, !1, !0).resolve(t);
      }),
      (t.resolveObject = function (e, t) {
        return e ? b(e, !1, !0).resolveObject(t) : t;
      }),
      (t.format = function (e) {
        i.isString(e) && (e = b(e));
        return e instanceof o ? e.format() : o.prototype.format.call(e);
      }),
      (t.Url = o);
    var a = /^([a-z0-9.+-]+:)/i,
      s = /:[0-9]*$/,
      u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      l = ['{', '}', '|', '\\', '^', '`'].concat([
        '<',
        '>',
        '"',
        '`',
        ' ',
        '\r',
        '\n',
        '\t',
      ]),
      c = ["'"].concat(l),
      f = ['%', '/', '?', ';', '#'].concat(c),
      h = ['/', '?', '#'],
      d = /^[+a-z0-9A-Z_-]{0,63}$/,
      p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      w = { javascript: !0, 'javascript:': !0 },
      g = { javascript: !0, 'javascript:': !0 },
      y = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        'http:': !0,
        'https:': !0,
        'ftp:': !0,
        'gopher:': !0,
        'file:': !0,
      },
      m = n(40);
    function b(e, t, n) {
      if (e && i.isObject(e) && e instanceof o) return e;
      var r = new o();
      return r.parse(e, t, n), r;
    }
    (o.prototype.parse = function (e, t, n) {
      if (!i.isString(e))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof e
        );
      var o = e.indexOf('?'),
        s = -1 !== o && o < e.indexOf('#') ? '?' : '#',
        l = e.split(s);
      l[0] = l[0].replace(/\\/g, '/');
      var b = (e = l.join(s));
      if (((b = b.trim()), !n && 1 === e.split('#').length)) {
        var v = u.exec(b);
        if (v)
          return (
            (this.path = b),
            (this.href = b),
            (this.pathname = v[1]),
            v[2]
              ? ((this.search = v[2]),
                (this.query = t
                  ? m.parse(this.search.substr(1))
                  : this.search.substr(1)))
              : t && ((this.search = ''), (this.query = {})),
            this
          );
      }
      var A = a.exec(b);
      if (A) {
        var S = (A = A[0]).toLowerCase();
        (this.protocol = S), (b = b.substr(A.length));
      }
      if (n || A || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var _ = '//' === b.substr(0, 2);
        !_ || (A && g[A]) || ((b = b.substr(2)), (this.slashes = !0));
      }
      if (!g[A] && (_ || (A && !y[A]))) {
        for (var P, C, I = -1, M = 0; M < h.length; M++) {
          -1 !== (E = b.indexOf(h[M])) && (-1 === I || E < I) && (I = E);
        }
        -1 !== (C = -1 === I ? b.lastIndexOf('@') : b.lastIndexOf('@', I)) &&
          ((P = b.slice(0, C)),
          (b = b.slice(C + 1)),
          (this.auth = decodeURIComponent(P))),
          (I = -1);
        for (M = 0; M < f.length; M++) {
          var E;
          -1 !== (E = b.indexOf(f[M])) && (-1 === I || E < I) && (I = E);
        }
        -1 === I && (I = b.length),
          (this.host = b.slice(0, I)),
          (b = b.slice(I)),
          this.parseHost(),
          (this.hostname = this.hostname || '');
        var T =
          '[' === this.hostname[0] &&
          ']' === this.hostname[this.hostname.length - 1];
        if (!T)
          for (
            var W = this.hostname.split(/\./), R = ((M = 0), W.length);
            M < R;
            M++
          ) {
            var k = W[M];
            if (k && !k.match(d)) {
              for (var O = '', x = 0, U = k.length; x < U; x++)
                k.charCodeAt(x) > 127 ? (O += 'x') : (O += k[x]);
              if (!O.match(d)) {
                var j = W.slice(0, M),
                  L = W.slice(M + 1),
                  B = k.match(p);
                B && (j.push(B[1]), L.unshift(B[2])),
                  L.length && (b = '/' + L.join('.') + b),
                  (this.hostname = j.join('.'));
                break;
              }
            }
          }
        this.hostname.length > 255
          ? (this.hostname = '')
          : (this.hostname = this.hostname.toLowerCase()),
          T || (this.hostname = r.toASCII(this.hostname));
        var N = this.port ? ':' + this.port : '',
          F = this.hostname || '';
        (this.host = F + N),
          (this.href += this.host),
          T &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            '/' !== b[0] && (b = '/' + b));
      }
      if (!w[S])
        for (M = 0, R = c.length; M < R; M++) {
          var H = c[M];
          if (-1 !== b.indexOf(H)) {
            var D = encodeURIComponent(H);
            D === H && (D = escape(H)), (b = b.split(H).join(D));
          }
        }
      var q = b.indexOf('#');
      -1 !== q && ((this.hash = b.substr(q)), (b = b.slice(0, q)));
      var z = b.indexOf('?');
      if (
        (-1 !== z
          ? ((this.search = b.substr(z)),
            (this.query = b.substr(z + 1)),
            t && (this.query = m.parse(this.query)),
            (b = b.slice(0, z)))
          : t && ((this.search = ''), (this.query = {})),
        b && (this.pathname = b),
        y[S] && this.hostname && !this.pathname && (this.pathname = '/'),
        this.pathname || this.search)
      ) {
        N = this.pathname || '';
        var Y = this.search || '';
        this.path = N + Y;
      }
      return (this.href = this.format()), this;
    }),
      (o.prototype.format = function () {
        var e = this.auth || '';
        e &&
          ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ':')), (e += '@'));
        var t = this.protocol || '',
          n = this.pathname || '',
          r = this.hash || '',
          o = !1,
          a = '';
        this.host
          ? (o = e + this.host)
          : this.hostname &&
            ((o =
              e +
              (-1 === this.hostname.indexOf(':')
                ? this.hostname
                : '[' + this.hostname + ']')),
            this.port && (o += ':' + this.port)),
          this.query &&
            i.isObject(this.query) &&
            Object.keys(this.query).length &&
            (a = m.stringify(this.query));
        var s = this.search || (a && '?' + a) || '';
        return (
          t && ':' !== t.substr(-1) && (t += ':'),
          this.slashes || ((!t || y[t]) && !1 !== o)
            ? ((o = '//' + (o || '')),
              n && '/' !== n.charAt(0) && (n = '/' + n))
            : o || (o = ''),
          r && '#' !== r.charAt(0) && (r = '#' + r),
          s && '?' !== s.charAt(0) && (s = '?' + s),
          t +
            o +
            (n = n.replace(/[?#]/g, function (e) {
              return encodeURIComponent(e);
            })) +
            (s = s.replace('#', '%23')) +
            r
        );
      }),
      (o.prototype.resolve = function (e) {
        return this.resolveObject(b(e, !1, !0)).format();
      }),
      (o.prototype.resolveObject = function (e) {
        if (i.isString(e)) {
          var t = new o();
          t.parse(e, !1, !0), (e = t);
        }
        for (var n = new o(), r = Object.keys(this), a = 0; a < r.length; a++) {
          var s = r[a];
          n[s] = this[s];
        }
        if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
          for (var u = Object.keys(e), l = 0; l < u.length; l++) {
            var c = u[l];
            'protocol' !== c && (n[c] = e[c]);
          }
          return (
            y[n.protocol] &&
              n.hostname &&
              !n.pathname &&
              (n.path = n.pathname = '/'),
            (n.href = n.format()),
            n
          );
        }
        if (e.protocol && e.protocol !== n.protocol) {
          if (!y[e.protocol]) {
            for (var f = Object.keys(e), h = 0; h < f.length; h++) {
              var d = f[h];
              n[d] = e[d];
            }
            return (n.href = n.format()), n;
          }
          if (((n.protocol = e.protocol), e.host || g[e.protocol]))
            n.pathname = e.pathname;
          else {
            for (
              var p = (e.pathname || '').split('/');
              p.length && !(e.host = p.shift());

            );
            e.host || (e.host = ''),
              e.hostname || (e.hostname = ''),
              '' !== p[0] && p.unshift(''),
              p.length < 2 && p.unshift(''),
              (n.pathname = p.join('/'));
          }
          if (
            ((n.search = e.search),
            (n.query = e.query),
            (n.host = e.host || ''),
            (n.auth = e.auth),
            (n.hostname = e.hostname || e.host),
            (n.port = e.port),
            n.pathname || n.search)
          ) {
            var w = n.pathname || '',
              m = n.search || '';
            n.path = w + m;
          }
          return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var b = n.pathname && '/' === n.pathname.charAt(0),
          v = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
          A = v || b || (n.host && e.pathname),
          S = A,
          _ = (n.pathname && n.pathname.split('/')) || [],
          P =
            ((p = (e.pathname && e.pathname.split('/')) || []),
            n.protocol && !y[n.protocol]);
        if (
          (P &&
            ((n.hostname = ''),
            (n.port = null),
            n.host && ('' === _[0] ? (_[0] = n.host) : _.unshift(n.host)),
            (n.host = ''),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ('' === p[0] ? (p[0] = e.host) : p.unshift(e.host)),
              (e.host = null)),
            (A = A && ('' === p[0] || '' === _[0]))),
          v)
        )
          (n.host = e.host || '' === e.host ? e.host : n.host),
            (n.hostname =
              e.hostname || '' === e.hostname ? e.hostname : n.hostname),
            (n.search = e.search),
            (n.query = e.query),
            (_ = p);
        else if (p.length)
          _ || (_ = []),
            _.pop(),
            (_ = _.concat(p)),
            (n.search = e.search),
            (n.query = e.query);
        else if (!i.isNullOrUndefined(e.search)) {
          if (P)
            (n.hostname = n.host = _.shift()),
              (T =
                !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
                ((n.auth = T.shift()), (n.host = n.hostname = T.shift()));
          return (
            (n.search = e.search),
            (n.query = e.query),
            (i.isNull(n.pathname) && i.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
            (n.href = n.format()),
            n
          );
        }
        if (!_.length)
          return (
            (n.pathname = null),
            n.search ? (n.path = '/' + n.search) : (n.path = null),
            (n.href = n.format()),
            n
          );
        for (
          var C = _.slice(-1)[0],
            I =
              ((n.host || e.host || _.length > 1) &&
                ('.' === C || '..' === C)) ||
              '' === C,
            M = 0,
            E = _.length;
          E >= 0;
          E--
        )
          '.' === (C = _[E])
            ? _.splice(E, 1)
            : '..' === C
            ? (_.splice(E, 1), M++)
            : M && (_.splice(E, 1), M--);
        if (!A && !S) for (; M--; M) _.unshift('..');
        !A || '' === _[0] || (_[0] && '/' === _[0].charAt(0)) || _.unshift(''),
          I && '/' !== _.join('/').substr(-1) && _.push('');
        var T,
          W = '' === _[0] || (_[0] && '/' === _[0].charAt(0));
        P &&
          ((n.hostname = n.host = W ? '' : _.length ? _.shift() : ''),
          (T = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
            ((n.auth = T.shift()), (n.host = n.hostname = T.shift())));
        return (
          (A = A || (n.host && _.length)) && !W && _.unshift(''),
          _.length
            ? (n.pathname = _.join('/'))
            : ((n.pathname = null), (n.path = null)),
          (i.isNull(n.pathname) && i.isNull(n.search)) ||
            (n.path =
              (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
          (n.auth = e.auth || n.auth),
          (n.slashes = n.slashes || e.slashes),
          (n.href = n.format()),
          n
        );
      }),
      (o.prototype.parseHost = function () {
        var e = this.host,
          t = s.exec(e);
        t &&
          (':' !== (t = t[0]) && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e);
      });
  },
  function (e, t, n) {
    (function (e, r) {
      var i;
      /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (o) {
        t && t.nodeType, e && e.nodeType;
        var a = 'object' == typeof r && r;
        a.global !== a && a.window !== a && a.self;
        var s,
          u = 2147483647,
          l = /^xn--/,
          c = /[^\x20-\x7E]/,
          f = /[\x2E\u3002\uFF0E\uFF61]/g,
          h = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          d = Math.floor,
          p = String.fromCharCode;
        function w(e) {
          throw new RangeError(h[e]);
        }
        function g(e, t) {
          for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
          return r;
        }
        function y(e, t) {
          var n = e.split('@'),
            r = '';
          return (
            n.length > 1 && ((r = n[0] + '@'), (e = n[1])),
            r + g((e = e.replace(f, '.')).split('.'), t).join('.')
          );
        }
        function m(e) {
          for (var t, n, r = [], i = 0, o = e.length; i < o; )
            (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o
              ? 56320 == (64512 & (n = e.charCodeAt(i++)))
                ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                : (r.push(t), i--)
              : r.push(t);
          return r;
        }
        function b(e) {
          return g(e, function (e) {
            var t = '';
            return (
              e > 65535 &&
                ((t += p((((e -= 65536) >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += p(e))
            );
          }).join('');
        }
        function v(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function A(e, t, n) {
          var r = 0;
          for (e = n ? d(e / 700) : e >> 1, e += d(e / t); e > 455; r += 36)
            e = d(e / 35);
          return d(r + (36 * e) / (e + 38));
        }
        function S(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c,
            f,
            h,
            p = [],
            g = e.length,
            y = 0,
            m = 128,
            v = 72;
          for ((n = e.lastIndexOf('-')) < 0 && (n = 0), r = 0; r < n; ++r)
            e.charCodeAt(r) >= 128 && w('not-basic'), p.push(e.charCodeAt(r));
          for (i = n > 0 ? n + 1 : 0; i < g; ) {
            for (
              o = y, a = 1, s = 36;
              i >= g && w('invalid-input'),
                ((l =
                  (h = e.charCodeAt(i++)) - 48 < 10
                    ? h - 22
                    : h - 65 < 26
                    ? h - 65
                    : h - 97 < 26
                    ? h - 97
                    : 36) >= 36 ||
                  l > d((u - y) / a)) &&
                  w('overflow'),
                (y += l * a),
                !(l < (c = s <= v ? 1 : s >= v + 26 ? 26 : s - v));
              s += 36
            )
              a > d(u / (f = 36 - c)) && w('overflow'), (a *= f);
            (v = A(y - o, (t = p.length + 1), 0 == o)),
              d(y / t) > u - m && w('overflow'),
              (m += d(y / t)),
              (y %= t),
              p.splice(y++, 0, m);
          }
          return b(p);
        }
        function _(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c,
            f,
            h,
            g,
            y,
            b,
            S,
            _ = [];
          for (g = (e = m(e)).length, t = 128, n = 0, o = 72, a = 0; a < g; ++a)
            (h = e[a]) < 128 && _.push(p(h));
          for (r = i = _.length, i && _.push('-'); r < g; ) {
            for (s = u, a = 0; a < g; ++a) (h = e[a]) >= t && h < s && (s = h);
            for (
              s - t > d((u - n) / (y = r + 1)) && w('overflow'),
                n += (s - t) * y,
                t = s,
                a = 0;
              a < g;
              ++a
            )
              if (((h = e[a]) < t && ++n > u && w('overflow'), h == t)) {
                for (
                  l = n, c = 36;
                  !(l < (f = c <= o ? 1 : c >= o + 26 ? 26 : c - o));
                  c += 36
                )
                  (S = l - f),
                    (b = 36 - f),
                    _.push(p(v(f + (S % b), 0))),
                    (l = d(S / b));
                _.push(p(v(l, 0))), (o = A(n, y, r == i)), (n = 0), ++r;
              }
            ++n, ++t;
          }
          return _.join('');
        }
        (s = {
          version: '1.4.1',
          ucs2: { decode: m, encode: b },
          decode: S,
          encode: _,
          toASCII: function (e) {
            return y(e, function (e) {
              return c.test(e) ? 'xn--' + _(e) : e;
            });
          },
          toUnicode: function (e) {
            return y(e, function (e) {
              return l.test(e) ? S(e.slice(4).toLowerCase()) : e;
            });
          },
        }),
          void 0 ===
            (i = function () {
              return s;
            }.call(t, n, t, e)) || (e.exports = i);
      })();
    }.call(this, n(38)(e), n(0)));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = {
      isString: function (e) {
        return 'string' == typeof e;
      },
      isObject: function (e) {
        return 'object' == typeof e && null !== e;
      },
      isNull: function (e) {
        return null === e;
      },
      isNullOrUndefined: function (e) {
        return null == e;
      },
    };
  },
  function (e, t, n) {
    'use strict';
    (t.decode = t.parse = n(41)), (t.encode = t.stringify = n(42));
  },
  function (e, t, n) {
    'use strict';
    function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function (e, t, n, o) {
      (t = t || '&'), (n = n || '=');
      var a = {};
      if ('string' != typeof e || 0 === e.length) return a;
      var s = /\+/g;
      e = e.split(t);
      var u = 1e3;
      o && 'number' == typeof o.maxKeys && (u = o.maxKeys);
      var l = e.length;
      u > 0 && l > u && (l = u);
      for (var c = 0; c < l; ++c) {
        var f,
          h,
          d,
          p,
          w = e[c].replace(s, '%20'),
          g = w.indexOf(n);
        g >= 0
          ? ((f = w.substr(0, g)), (h = w.substr(g + 1)))
          : ((f = w), (h = '')),
          (d = decodeURIComponent(f)),
          (p = decodeURIComponent(h)),
          r(a, d) ? (i(a[d]) ? a[d].push(p) : (a[d] = [a[d], p])) : (a[d] = p);
      }
      return a;
    };
    var i =
      Array.isArray ||
      function (e) {
        return '[object Array]' === Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    'use strict';
    var r = function (e) {
      switch (typeof e) {
        case 'string':
          return e;
        case 'boolean':
          return e ? 'true' : 'false';
        case 'number':
          return isFinite(e) ? e : '';
        default:
          return '';
      }
    };
    e.exports = function (e, t, n, s) {
      return (
        (t = t || '&'),
        (n = n || '='),
        null === e && (e = void 0),
        'object' == typeof e
          ? o(a(e), function (a) {
              var s = encodeURIComponent(r(a)) + n;
              return i(e[a])
                ? o(e[a], function (e) {
                    return s + encodeURIComponent(r(e));
                  }).join(t)
                : s + encodeURIComponent(r(e[a]));
            }).join(t)
          : s
          ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e))
          : ''
      );
    };
    var i =
      Array.isArray ||
      function (e) {
        return '[object Array]' === Object.prototype.toString.call(e);
      };
    function o(e, t) {
      if (e.map) return e.map(t);
      for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
      return n;
    }
    var a =
      Object.keys ||
      function (e) {
        var t = [];
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t;
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(20);
    function r(e, t) {
      for (
        var n = e.split(','),
          r = n[0].match(/:(.*?);/)[1],
          i = window.Base64 ? window.Base64.atob(n[1]) : atob(n[1]),
          o = i.length,
          a = new Uint8Array(o);
        o--;

      )
        a[o] = i.charCodeAt(o);
      return new File([a], t, { type: r });
    }
    var i = n(19);
    async function o(e) {
      let t = await e.arrayBuffer();
      var n = new i('SHA-256', 'ARRAYBUFFER');
      return n.update(t), n.getHash('B64');
    }
    function a(e) {
      let t = '',
        n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let r = 0; r < e; r++)
        t += n.charAt(Math.floor(Math.random() * n.length));
      return t;
    }
    const s = function (e) {
        return e.unreadCount > 0;
      },
      u = function (e) {
        const t = window.Store.Chat.filter(s).map((e) =>
          WAPI._serializeChatObj(e)
        );
        return void 0 !== e && e(t), t;
      };
    async function l(e) {
      return (await WAPI.getGroupMetadata(e)).participants;
    }
    async function c(e, t) {
      const n = WAPI.getChat(e);
      for (; !n.msgs.msgLoadState.noEarlierMsgs; )
        console.log('Loading...'), await n.loadEarlierMsgs();
      return console.log('done'), !0;
    }
    async function f(e, t) {
      Array.isArray(t) || (t = [t]);
      const n = new Store.MediaCollection(e);
      return (
        await n.processFiles(
          '0.4.613' === Debug.VERSION ? t : t.map((e) => ({ file: e })),
          e,
          1
        ),
        n
      );
    }
    function h(e, t, n, i, o) {
      const a = new Store.WidFactory.createWid(t);
      return Store.Chat.find(a).then((t) => {
        var a = r(e, n);
        f(t, a).then((e) => {
          e.models[0].sendToChat(t, { caption: i }), void 0 !== o && o(!0);
        });
      });
    }
    async function d(e, t, n) {
      var r = Store.Chat.get(t);
      let i = new window.Store.Sticker.modelClass();
      return (
        (i.__x_clientUrl = e.clientUrl),
        (i.__x_filehash = e.filehash),
        (i.__x_id = e.filehash),
        (i.__x_uploadhash = e.uploadhash),
        (i.__x_mediaKey = e.mediaKey),
        (i.__x_initialized = !1),
        (i.__x_mediaData.mediaStage = 'INIT'),
        (i.mimetype = 'image/webp'),
        (i.height = n && n.height ? n.height : 512),
        (i.width = n && n.width ? n.width : 512),
        await i.initialize(),
        await i.sendToChat(r)
      );
    }
    async function p(e, t, n) {
      const i = r('data:image/webp;base64,' + e, 'file.webp');
      let o = await window.WAPI.encryptAndUploadFile('sticker', i);
      return await d(o, t, n);
    }
    function w(e = !0, t) {
      return (
        window.WAPI._newMessagesCallbacks.push({ callback: t, rmAfterUse: e }),
        !0
      );
    }
    let g = {};
    const y = [
      {
        id: 'Store',
        conditions: (e) =>
          e.default && e.default.Chat && e.default.Msg ? e.default : null,
      },
      {
        id: 'MediaCollection',
        conditions: (e) =>
          e.default &&
          e.default.prototype &&
          (void 0 !== e.default.prototype.processFiles ||
            void 0 !== e.default.prototype.processAttachments)
            ? e.default
            : null,
      },
      { id: 'MediaProcess', conditions: (e) => (e.BLOB ? e : null) },
      { id: 'ChatUtil', conditions: (e) => (e.sendClear ? e : null) },
      {
        id: 'GroupInvite',
        conditions: (e) => (e.queryGroupInviteCode ? e : null),
      },
      { id: 'Wap', conditions: (e) => (e.createGroup ? e : null) },
      {
        id: 'ServiceWorker',
        conditions: (e) =>
          e.default && e.default.killServiceWorker ? e : null,
      },
      { id: 'State', conditions: (e) => (e.STATE && e.STREAM ? e : null) },
      {
        id: 'WapDelete',
        conditions: (e) =>
          e.sendConversationDelete && 2 == e.sendConversationDelete.length
            ? e
            : null,
      },
      {
        id: 'Conn',
        conditions: (e) =>
          e.default && e.default.ref && e.default.refTTL ? e.default : null,
      },
      {
        id: 'WapQuery',
        conditions: (e) =>
          e.queryExist
            ? e
            : e.default && e.default.queryExist
            ? e.default
            : null,
      },
      { id: 'CryptoLib', conditions: (e) => (e.decryptE2EMedia ? e : null) },
      {
        id: 'OpenChat',
        conditions: (e) =>
          e.default && e.default.prototype && e.default.prototype.openChat
            ? e.default
            : null,
      },
      {
        id: 'UserConstructor',
        conditions: (e) =>
          e.default &&
          e.default.prototype &&
          e.default.prototype.isServer &&
          e.default.prototype.isUser
            ? e.default
            : null,
      },
      {
        id: 'SendTextMsgToChat',
        conditions: (e) => (e.sendTextMsgToChat ? e.sendTextMsgToChat : null),
      },
      { id: 'SendSeen', conditions: (e) => (e.sendSeen ? e.sendSeen : null) },
      { id: 'Archive', conditions: (e) => (e.setArchive ? e : null) },
      { id: 'pinChat', conditions: (e) => (e.setPin ? e : null) },
      {
        id: 'sendDelete',
        conditions: (e) => (e.sendDelete ? e.sendDelete : null),
      },
      {
        id: 'addAndSendMsgToChat',
        conditions: (e) =>
          e.addAndSendMsgToChat ? e.addAndSendMsgToChat : null,
      },
      {
        id: 'sendMsgToChat',
        conditions: (e) => (e.sendMsgToChat ? e.sendMsgToChat : null),
      },
      { id: 'Catalog', conditions: (e) => (e.Catalog ? e.Catalog : null) },
      {
        id: 'bp',
        conditions: (e) =>
          e.default && e.default.toString().includes('bp_unknown_version')
            ? e.default
            : null,
      },
      {
        id: 'MsgKey',
        conditions: (e) =>
          e.default &&
          e.default.toString().includes('MsgKey error: obj is null/undefined')
            ? e.default
            : null,
      },
      {
        id: 'Parser',
        conditions: (e) =>
          e.convertToTextWithoutSpecialEmojis ? e.default : null,
      },
      {
        id: 'Builders',
        conditions: (e) =>
          e.TemplateMessage && e.HydratedFourRowTemplate ? e : null,
      },
      {
        id: 'Me',
        conditions: (e) => (e.PLATFORMS && e.Conn ? e.default : null),
      },
      {
        id: 'CallUtils',
        conditions: (e) => (e.sendCallEnd && e.parseCall ? e : null),
      },
      {
        id: 'Identity',
        conditions: (e) => (e.queryIdentity && e.updateIdentity ? e : null),
      },
      {
        id: 'MyStatus',
        conditions: (e) => (e.getStatus && e.setMyStatus ? e : null),
      },
      {
        id: 'ChatStates',
        conditions: (e) =>
          e.sendChatStatePaused &&
          e.sendChatStateRecording &&
          e.sendChatStateComposing
            ? e
            : null,
      },
      {
        id: 'GroupActions',
        conditions: (e) => (e.sendExitGroup && e.localExitGroup ? e : null),
      },
      {
        id: 'Features',
        conditions: (e) => (e.FEATURE_CHANGE_EVENT && e.features ? e : null),
      },
      {
        id: 'MessageUtils',
        conditions: (e) => (e.storeMessages && e.appendMessage ? e : null),
      },
      {
        id: 'WebMessageInfo',
        conditions: (e) =>
          e.WebMessageInfo && e.WebFeatures ? e.WebMessageInfo : null,
      },
      {
        id: 'createMessageKey',
        conditions: (e) =>
          e.createMessageKey && e.createDeviceSentMessage
            ? e.createMessageKey
            : null,
      },
      {
        id: 'Participants',
        conditions: (e) =>
          e.addParticipants &&
          e.removeParticipants &&
          e.promoteParticipants &&
          e.demoteParticipants
            ? e
            : null,
      },
      {
        id: 'WidFactory',
        conditions: (e) =>
          e.isWidlike && e.createWid && e.createWidFromWidLike ? e : null,
      },
      {
        id: 'Base',
        conditions: (e) =>
          e.setSubProtocol && e.binSend && e.actionNode ? e : null,
      },
      {
        id: 'Base2',
        conditions: (e) =>
          e.supportsFeatureFlags &&
          e.parseMsgStubProto &&
          e.binSend &&
          e.subscribeLiveLocation
            ? e
            : null,
      },
      {
        id: 'Versions',
        conditions: (e) =>
          e.loadProtoVersions && e.default[15] && e.default[16] && e.default[17]
            ? e
            : null,
      },
      {
        id: 'Sticker',
        conditions: (e) =>
          e.default && e.default.Sticker ? e.default.Sticker : null,
      },
      {
        id: 'MediaUpload',
        conditions: (e) =>
          e.default && e.default.mediaUpload ? e.default : null,
      },
      {
        id: 'UploadUtils',
        conditions: (e) =>
          e.default && e.default.encryptAndUpload ? e.default : null,
      },
      {
        id: 'Cmd',
        conditions: (e) =>
          e.default && e.default.openChatFromUnread ? e : null,
      },
      { id: 'ReadSeen', conditions: (e) => (e.sendSeen ? e : null) },
      {
        id: 'Block',
        conditions: (e) => (e.blockContact && e.unblockContact ? e : null),
      },
      {
        id: 'BlockList',
        conditions: (e) => (e.BlocklistCollection ? e : null),
      },
      { id: 'Theme', conditions: (e) => (e.getTheme && e.setTheme ? e : null) },
    ];
    function m(e) {
      let t = 0,
        n = y;
      for (let r in e)
        if ('object' == typeof e[r] && null !== e[r]) {
          let i = Object.values(e[r])[0];
          if ('object' == typeof i && i.exports) {
            for (let i in e[r]) {
              let r = e(i);
              if (
                r &&
                (n.forEach((e) => {
                  if (!e.conditions || e.foundedModule) return;
                  let n = e.conditions(r);
                  null !== n && (t++, (e.foundedModule = n));
                }),
                t == n.length)
              )
                break;
            }
            let i = n.find((e) => 'Store' === e.id);
            return (
              (window.Store = i.foundedModule ? i.foundedModule : {}),
              n.splice(n.indexOf(i), 1),
              n.forEach((e) => {
                e.foundedModule && (window.Store[e.id] = e.foundedModule);
              }),
              (window.Store.sendMessage = function (e) {
                return window.Store.SendTextMsgToChat(this, ...arguments);
              }),
              window.Store.MediaCollection &&
                (window.Store.MediaCollection.prototype.processFiles =
                  window.Store.MediaCollection.prototype.processFiles ||
                  window.Store.MediaCollection.prototype.processAttachments),
              window.Store
            );
          }
        }
    }
    n(21);
    (window.Store && window.Store.Msg) ||
      (function () {
        const e = 'parasite' + Date.now();
        'function' == typeof webpackJsonp
          ? webpackJsonp([], { [e]: (e, t, n) => m(n) }, [e])
          : webpackJsonp.push([[e], { [e]: (e, t, n) => m(n) }, [[e]]]);
      })(),
      (window.WAPI = { lastRead: {} }),
      (window.WAPI.setTheme = async function (e) {
        return 'dark' == e || 'light' == e
          ? (await Store.Theme.setTheme(e), !0)
          : console.error('Use type dark or light');
      }),
      (window.WAPI.getTheme = async function () {
        return await Store.Theme.getTheme();
      }),
      (window.WAPI._serializeRawObj = (e) => (e && e.toJSON ? e.toJSON() : {})),
      (window.WAPI._serializeChatObj = (e) =>
        null == e
          ? null
          : Object.assign(window.WAPI._serializeRawObj(e), {
              kind: e.kind,
              isGroup: e.isGroup,
              contact: e.contact
                ? window.WAPI._serializeContactObj(e.contact)
                : null,
              groupMetadata: e.groupMetadata
                ? window.WAPI._serializeRawObj(e.groupMetadata)
                : null,
              presence: e.presence
                ? window.WAPI._serializeRawObj(e.presence)
                : null,
              msgs: null,
              isOnline: e.__x_presence.attributes.isOnline || null,
              lastSeen:
                e &&
                e.previewMessage &&
                e.previewMessage.__x_ephemeralStartTimestamp
                  ? 1e3 * e.previewMessage.__x_ephemeralStartTimestamp
                  : null,
            })),
      (window.WAPI._serializeContactObj = (e) =>
        null == e
          ? null
          : Object.assign(window.WAPI._serializeRawObj(e), {
              formattedName: e.formattedName,
              isHighLevelVerified: e.isHighLevelVerified,
              isMe: e.isMe,
              isMyContact: e.isMyContact,
              isPSA: e.isPSA,
              isUser: e.isUser,
              isVerified: e.isVerified,
              isWAContact: e.isWAContact,
              profilePicThumbObj: e.profilePicThumb
                ? WAPI._serializeProfilePicThumb(e.profilePicThumb)
                : {},
              statusMute: e.statusMute,
              msgs: null,
            })),
      (window.WAPI._serializeMessageObj = (e) => {
        if (null == e) return null;
        const t = WAPI._serializeChatObj(e.chat);
        return (
          e.quotedMsg && e.quotedMsgObj(),
          Object.assign(window.WAPI._serializeRawObj(e), {
            id: e.id._serialized,
            sender: e.senderObj ? WAPI._serializeContactObj(e.senderObj) : null,
            timestamp: e.t,
            content: e.body,
            isGroupMsg: e.isGroupMsg,
            isLink: e.isLink,
            isMMS: e.isMMS,
            isMedia: e.isMedia,
            isNotification: e.isNotification,
            isPSA: e.isPSA,
            type: e.type,
            chat: t,
            isOnline: t.isOnline,
            lastSeen: t.lastSeen,
            chatId: e.id.remote,
            quotedMsgObj: WAPI._serializeMessageObj(e._quotedMsgObj),
            mediaData: window.WAPI._serializeRawObj(e.mediaData),
            reply: (n) => window.WAPI.reply(t.id._serialized, n, e),
          })
        );
      }),
      (window.WAPI._serializeNumberStatusObj = (e) =>
        null == e
          ? null
          : Object.assign(
              {},
              {
                id: e.jid,
                status: e.status,
                isBusiness: !0 === e.biz,
                canReceiveMessage: 200 === e.status,
              }
            )),
      (window.WAPI._serializeProfilePicThumb = (e) =>
        null == e
          ? null
          : Object.assign(
              {},
              {
                eurl: e.eurl,
                id: e.id,
                img: e.img,
                imgFull: e.imgFull,
                raw: e.raw,
                tag: e.tag,
              }
            )),
      (window.WAPI.createGroup = async function (e, t) {
        return (
          Array.isArray(t) || (t = [t]),
          await window.Store.WapQuery.createGroup(e, t)
        );
      }),
      (window.WAPI.leaveGroup = async function (e) {
        e = 'string' == typeof e ? e : e._serialized;
        var t = WAPI.getChat(e);
        return Store.GroupActions.sendExitGroup(t);
      }),
      (window.WAPI.revokeGroupInviteLink = async function (e) {
        var t = Store.Chat.get(e);
        return (
          !!t.isGroup && (await Store.GroupInvite.revokeGroupInvite(t), !0)
        );
      }),
      (window.WAPI.getGroupInviteLink = async function (e) {
        var t = Store.Chat.get(e);
        return t.isGroup
          ? (await Store.GroupInvite.queryGroupInviteCode(t),
            'https://chat.whatsapp.com/' + t.inviteCode)
          : '';
      }),
      (window.WAPI.getGroupInfoFromInviteLink = async function (e) {
        return await Store.WapQuery.groupInviteInfo(e);
      }),
      (window.WAPI.getGroupAdmins = async function (e, t) {
        const n = (await l(e)).filter((e) => e.isAdmin).map((e) => e.id);
        return void 0 !== t && t(n), n;
      }),
      (window.WAPI.removeParticipant = async function (e, t, n) {
        const r = Store.Chat.get(e),
          i = r.groupMetadata.participants.get(t);
        return window.Store.Participants.removeParticipants(r, [i]).then(
          () => (void 0 !== n && n(!0), !0)
        );
      }),
      (window.WAPI.addParticipant = async function (e, t) {
        const n = Store.Chat.get(e),
          r = Store.Contact.get(t);
        return await window.Store.Participants.addParticipants(n, [r]), !0;
      }),
      (window.WAPI.promoteParticipant = async function (e, t, n) {
        const r = Store.Chat.get(e),
          i = r.groupMetadata.participants.get(t);
        return window.Store.Participants.promoteParticipants(r, [i]).then(
          () => (void 0 !== n && n(!0), !0)
        );
      }),
      (window.WAPI.demoteParticipant = async function (e, t, n) {
        return window.Store.WapQuery.demoteParticipants(e, [t]).then(() => {
          const r = Store.Chat.get(e),
            i = r.groupMetadata.participants.get(t);
          window.Store.Participants.demoteParticipants(r, [i]).then(
            () => (void 0 !== n && n(!0), !0)
          );
        });
      }),
      (window.WAPI.joinGroup = async function (e) {
        return await Store.WapQuery.acceptGroupInvite(e);
      }),
      (window.WAPI.sendChatstate = async function (e, t) {
        switch (e) {
          case 0:
            await window.Store.ChatStates.sendChatStateComposing(t);
            break;
          case 1:
            await window.Store.ChatStates.sendChatStateRecording(t);
            break;
          case 2:
            await window.Store.ChatStates.sendChatStatePaused(t);
            break;
          default:
            return !1;
        }
        return !0;
      }),
      (window.WAPI.sendMessageWithThumb = function (e, t, n, r, i, o) {
        var a = WAPI.getChat(i);
        if (void 0 === a) return void 0 !== o && o(!1), !1;
        var s = {
          canonicalUrl: t,
          description: r,
          matchedText: t,
          title: n,
          thumbnail: e,
        };
        return (
          a.sendMessage(t, {
            linkPreview: s,
            mentionedJidList: [],
            quotedMsg: null,
            quotedMsgAdminGroupJid: null,
          }),
          void 0 !== o && o(!0),
          !0
        );
      }),
      (window.WAPI.processMessageObj = function (e, t, n) {
        return e.isNotification
          ? n
            ? WAPI._serializeMessageObj(e)
            : void 0
          : !1 === e.id.fromMe || t
          ? WAPI._serializeMessageObj(e)
          : void 0;
      }),
      (window.WAPI.sendMessageWithTags = async function (e, t) {
        var n = e.id ? e : Store.Chat.get(e),
          r = n.id._serialized,
          i = n.msgs.filter((e) => e.__x_isSentByMe)[0];
        if (!i) return n.sendMessage(t);
        var o = Object.create(i),
          a = window.WAPI.getNewMessageId(r),
          s =
            t
              .match(/@(\d*)/g)
              .map(
                (e) => new Store.WidFactory.createUserWid(e.replace('@', ''))
              ) || void 0,
          u = {
            ack: 0,
            id: a,
            local: !0,
            self: 'out',
            t: parseInt(new Date().getTime() / 1e3),
            to: new Store.WidFactory.createWid(r),
            isNewMsg: !0,
            type: 'chat',
            body: t,
            quotedMsg: null,
            mentionedJidList: s,
          };
        return (
          Object.assign(o, u),
          await Store.addAndSendMsgToChat(n, o),
          a._serialized
        );
      }),
      (window.WAPI.sendMessage = async function (e, t, n) {
        let r = WAPI.getChat(e);
        return void 0 !== r
          ? void 0 !== n
            ? (r.sendMessage(t).then(function () {
                let e = 0;
                !(function i() {
                  for (let e = r.msgs.models.length - 1; e >= 0; e--) {
                    let i = r.msgs.models[e];
                    if (i.senderObj.isMe && i.body == t)
                      return n(WAPI._serializeMessageObj(i)), True;
                  }
                  var o;
                  (e += 1),
                    console.log(e),
                    e > 30
                      ? n(!0)
                      : ((o = 500), new Promise((e) => setTimeout(e, o))).then(
                          i
                        );
                })();
              }),
              !0)
            : await r.sendMessage(t).then((e) => r.lastReceivedKey._serialized)
          : (void 0 !== n && n(!1), !1);
      }),
      (window.WAPI.sendMessage2 = function (e, t, n) {
        var r = WAPI.getChat(e);
        if (void 0 !== r)
          try {
            return (
              void 0 !== n
                ? r.sendMessage(t).then(function () {
                    n(!0);
                  })
                : r.sendMessage(t),
              !0
            );
          } catch (e) {
            return void 0 !== n && n(!1), !1;
          }
        return void 0 !== n && n(!1), !1;
      }),
      (window.WAPI.sendSeen = function (e, t) {
        var n = window.WAPI.getChat(e);
        return void 0 !== n
          ? void 0 !== t
            ? (Store.SendSeen(n, !1).then(function () {
                t(!0);
              }),
              !0)
            : (Store.SendSeen(n, !1), !0)
          : (void 0 !== t && t(), !1);
      }),
      (window.WAPI.deleteConversation = function (e, t) {
        let n = new window.Store.UserConstructor(e, {
            intentionallyUsePrivateConstructor: !0,
          }),
          r = WAPI.getChat(n);
        return r
          ? (window.Store.sendDelete(r, !1)
              .then(() => {
                void 0 !== t && t(!0);
              })
              .catch(() => {
                void 0 !== t && t(!1);
              }),
            !0)
          : (void 0 !== t && t(!1), !1);
      }),
      (window.WAPI.deleteMessages = function (e, t, n, r) {
        const i = new Store.WidFactory.createWid(e),
          o = WAPI.getChat(i);
        if (!o) return void 0 !== r && r(!1), !1;
        Array.isArray(t) || (t = [t]);
        let a = t
          .map((e) => ('string' == typeof e ? window.Store.Msg.get(e) : e))
          .filter((e) => e);
        if (0 == a.length) return !0;
        let s = n
          ? [o.sendDeleteMsgs(a, o)]
          : [
              o.sendRevokeMsgs(
                a.filter((e) => e.isSentByMe),
                o
              ),
              o.sendDeleteMsgs(
                a.filter((e) => !e.isSentByMe),
                o
              ),
            ];
        return Promise.all(s).then((e) => (void 0 !== r && r(!0), !0));
      }),
      (window.WAPI.clearChat = async function (e) {
        return await Store.ChatUtil.sendClear(Store.Chat.get(e), !0);
      }),
      (window.WAPI.sendMessageToID = function (e, t, n) {
        try {
          (window.getContact = (e) => Store.WapQuery.queryExist(e)),
            window.getContact(e).then((r) => {
              404 === r.status
                ? n(!0)
                : Store.Chat.find(r.jid)
                    .then((e) => (e.sendMessage(t), !0))
                    .catch((r) =>
                      WAPI.sendMessage(e, t) ? (n(!0), !0) : (n(!1), !1)
                    );
            });
        } catch (i) {
          if (0 === window.Store.Chat.length) return !1;
          firstChat = Store.Chat.models[0];
          var r = firstChat.id;
          return (
            (firstChat.id =
              'string' == typeof r
                ? e
                : new window.Store.UserConstructor(e, {
                    intentionallyUsePrivateConstructor: !0,
                  })),
            void 0 !== n
              ? (firstChat.sendMessage(t).then(function () {
                  (firstChat.id = r), n(!0);
                }),
                !0)
              : (firstChat.sendMessage(t), (firstChat.id = r), !0)
          );
        }
        return void 0 !== n && n(!1), !1;
      }),
      (window.WAPI.sendImage = function (e, t, n, r, i) {
        return h(e, t, n, r, i);
      }),
      (window.WAPI.sendPtt = function (e, t, n, i, o) {
        const a = new Store.WidFactory.createWid(t);
        return Store.Chat.find(a).then((t) => {
          var a = r(e, n);
          f(t, a).then((e) => {
            var n = e.models[0];
            (n.mediaPrep._mediaData.type = 'ptt'),
              n.mediaPrep.sendToChat(t, { caption: i }),
              void 0 !== o && o(!0);
          });
        });
      }),
      (window.WAPI.sendFile = h),
      (window.WAPI.setMyName = async function (e) {
        return (
          Store.Versions.default[11].BinaryProtocol ||
            (Store.Versions.default[11].BinaryProtocol = new Store.bp(11)),
          await Store.Versions.default[11].setPushname(e)
        );
      }),
      (window.WAPI.setMyStatus = function (e) {
        return Store.MyStatus.setMyStatus(e);
      }),
      (window.WAPI.sendVideoAsGif = function (e, t, n, i, o) {
        const a = new Store.WidFactory.createWid(t);
        return Store.Chat.find(a).then((t) => {
          var a = r(e, n);
          f(t, a).then((e) => {
            var n = e.models[0];
            (n.mediaPrep._mediaData.isGif = !0),
              (n.mediaPrep._mediaData.gifAttribution = 1),
              n.mediaPrep.sendToChat(t, { caption: i }),
              void 0 !== o && o(!0);
          });
        });
      }),
      (window.WAPI.processFiles = f),
      (window.WAPI.sendImageWithProduct = function (e, t, n, i, o, a) {
        Store.Catalog.findCarouselCatalog(i).then((i) => {
          if (i && i[0]) {
            const u = i[0].productCollection.get(o),
              l = {
                productMsgOptions: {
                  businessOwnerJid: u.catalogWid.toString({ legacy: !0 }),
                  productId: u.id.toString(),
                  url: u.url,
                  productImageCount: u.productImageCollection.length,
                  title: u.name,
                  description: u.description,
                  currencyCode: u.currency,
                  priceAmount1000: u.priceAmount1000,
                  type: 'product',
                },
                caption: n,
              };
            var s = new Store.WidFactory.createWid(t);
            return Store.Chat.find(s).then((t) => {
              var n = r(e, filename);
              f(t, n).then((e) => {
                var n = e.models[0];
                Object.entries(l.productMsgOptions).map(
                  ([e, t]) => (n.mediaPrep._mediaData[e] = t)
                ),
                  n.mediaPrep.sendToChat(t, l),
                  void 0 !== a && a(!0);
              });
            });
          }
        });
      }),
      (window.WAPI.sendContact = function (e, t) {
        Array.isArray(t) || (t = [t]),
          (t = t.map((e) => WAPI.getChat(e).__x_contact)).length > 1
            ? window.WAPI.getChat(e).sendContactList(t)
            : 1 === t.length && window.WAPI.getChat(e).sendContact(t[0]);
      }),
      (window.WAPI.forwardMessages = async function (e, t, n) {
        Array.isArray(t) || (t = [t]);
        const r = t
          .map((e) =>
            'string' == typeof e
              ? window.Store.Msg.get(e)
              : window.Store.Msg.get(e.id)
          )
          .filter((e) => !n || !e.__x_isSentByMe);
        return window.Store.Chat.get(e).forwardMessages(r);
      }),
      (window.WAPI.reply = async function (e, t, n, r) {
        'object' != typeof n && (n = Store.Msg.get(n)),
          Array.isArray(r) || (r = [r]);
        const i = WAPI.getChat(e),
          o = await Store.Contact.serialize().filter((e) =>
            r.includes(e.id.user)
          );
        return i
          .sendMessage(t, {
            linkPreview: null,
            mentionedJidList: o.map((e) => e.id),
            quotedMsg: n,
            quotedMsgAdminGroupJid: null,
          })
          .then((e) => i.lastReceivedKey._serialized);
      }),
      (window.WAPI._sendSticker = d),
      (window.WAPI.encryptAndUploadFile = async function (e, t) {
        const n = await o(t),
          r = a(32),
          i = new AbortController().signal,
          s = await window.Store.UploadUtils.encryptAndUpload({
            blob: t,
            type: e,
            signal: i,
            mediaKey: r,
          });
        return {
          ...s,
          clientUrl: s.url,
          filehash: n,
          id: n,
          uploadhash: s.encFilehash,
        };
      }),
      (window.WAPI.sendImageAsSticker = p),
      (window.WAPI.sendImageAsStickerGif = p),
      (window.WAPI.startTyping = async function (e) {
        await Store.ChatStates.sendChatStateComposing(e);
      }),
      (window.WAPI.stopTyping = async function (e) {
        await Store.ChatStates.sendChatStatePaused(e);
      }),
      (window.WAPI.sendLocation = async function (e, t, n, r) {
        loc = loc || '';
        const i = Store.Chat.get(e);
        if (!i) return !1;
        var o = Object.create(
          Store.Msg.models.filter((e) => e.__x_isSentByMe && !e.quotedMsg)[0]
        );
        const a = window.WAPI.getNewMessageId(e),
          s = {
            ack: 0,
            id: a,
            local: !0,
            isNewMsg: !0,
            self: 'out',
            t: parseInt(new Date().getTime() / 1e3),
            to: e,
            isNewMsg: !0,
            type: 'location',
            lat: t,
            lng: n,
            loc: r,
            clientUrl: void 0,
            directPath: void 0,
            filehash: void 0,
            uploadhash: void 0,
            mediaKey: void 0,
            isQuotedMsgAvailable: !1,
            invis: !1,
            mediaKeyTimestamp: void 0,
            mimetype: void 0,
            height: void 0,
            width: void 0,
            ephemeralStartTimestamp: void 0,
            body: void 0,
            mediaData: void 0,
            isQuotedMsgAvailable: !1,
          };
        return (
          Object.assign(o, s),
          'success' ===
            (await Promise.all(Store.addAndSendMsgToChat(i, o)))[1] &&
            a._serialized
        );
      }),
      (window.WAPI.openChat = async function (e) {
        const t = Store.Chat.get(e);
        return Store.Cmd.default.openChatBottom(t);
      }),
      (window.WAPI.openChatAt = async function (e, t) {
        const n = Store.Chat.get(e),
          r = n.msgs.models.find((e) => e.id.id === t),
          i = { collection: n.msgs, msg: r, isUnreadDivider: !1 };
        return await Store.Cmd.default._openChat(n, i);
      }),
      (window.WAPI.markUnseenMessage = async function (e) {
        if (!e) return !1;
        var t = window.WAPI.getChat(e);
        return void 0 !== t && (await Store.ReadSeen.markUnread(t, !0), !0);
      }),
      (window.WAPI.sendLinkPreview = async function (e, t, n) {
        n = n || '';
        var r = WAPI.getChat(e);
        if (void 0 === r) return !1;
        const i = await Store.WapQuery.queryLinkPreview(t);
        return (
          'success' ==
          (await r.sendMessage(n.includes(t) ? n : `${t}\n${n}`, {
            linkPreview: i,
          }))
        );
      }),
      (window.WAPI.blockContact = async function (e) {
        if (!e) return !1;
        const t = window.Store.Contact.get(e);
        return void 0 !== t && (await Store.Block.blockContact(t), !0);
      }),
      (window.WAPI.unblockContact = async function (e) {
        if (!e) return !1;
        const t = window.Store.Contact.get(e);
        return void 0 !== t && (await Store.Block.unblockContact(t), !0);
      }),
      (window.WAPI.getBlockList = async function () {
        let e = await Store.Blocklist,
          t = [];
        if (void 0 !== e && void 0 !== e._index) {
          for (let n in e._index) t.push(n);
          return t;
        }
        return !1;
      }),
      (window.WAPI.getAllContacts = function (e) {
        const t = window.Store.Contact.map((e) => WAPI._serializeContactObj(e));
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.getMyContacts = function (e) {
        const t = window.Store.Contact.filter(
          (e) => !0 === e.isMyContact
        ).map((e) => WAPI._serializeContactObj(e));
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.getContact = function (e, t) {
        const n = window.Store.Contact.get(e);
        return (
          void 0 !== t && t(window.WAPI._serializeContactObj(n)),
          window.WAPI._serializeContactObj(n)
        );
      }),
      (window.WAPI.getAllChats = function (e) {
        const t = window.Store.Chat.map((e) => WAPI._serializeChatObj(e));
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.haveNewMsg = s),
      (window.WAPI.getAllChatsWithNewMsg = u),
      (window.WAPI.getAllChatIds = function (e) {
        const t = window.Store.Chat.map((e) => e.id._serialized || e.id);
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.getAllNewMessages = function () {
        const e =
          u()
            .map((e) => WAPI.getChat(e.id))
            .flatMap((e) => e.msgs._models.filter((e) => e.isNewMsg))
            .map(WAPI._serializeMessageObj) || [];
        return JSON.parse(e);
      }),
      (window.WAPI.getAllUnreadMessages = async function () {
        const e = JSON.stringify(
          u()
            .map((e) => WAPI.getChat(e.id._serialized))
            .map((e) => e.msgs._models.filter((e) => -1 === e.ack))
            .flatMap((e) => e) || []
        );
        return JSON.parse(e);
      }),
      (window.WAPI.getAllChatsWithMessages = async function (e) {
        const t = [];
        e
          ? t.push(
              WAPI.getAllChatsWithNewMsg().map((e) =>
                WAPI.getChat(e.id._serialized)
              )
            )
          : t.push(WAPI.getAllChatIds().map((e) => WAPI.getChat(e)));
        const n = (await Promise.all(t)).flatMap((e) => e),
          r = JSON.stringify(n);
        return JSON.parse(r);
      }),
      (window.WAPI.getAllGroups = function (e) {
        const t = window.Store.Chat.filter((e) => e.isGroup);
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.getChat = function (e) {
        if (!e) return !1;
        e = 'string' == typeof e ? e : e._serialized;
        const t = Store.Chat.get(e);
        return (
          t &&
            (t.sendMessage = t.sendMessage
              ? t.sendMessage
              : function () {
                  return window.Store.sendMessage.apply(this, arguments);
                }),
          t
        );
      }),
      (window.WAPI.getStatus = async function (e) {
        return await Store.MyStatus.getStatus(e);
      }),
      (window.WAPI.getChatByName = function (e, t) {
        const n = window.Store.Chat.find((t) => t.name === e);
        return void 0 !== t && t(n), n;
      }),
      (window.WAPI.getNewId = function () {
        for (
          var e = '',
            t =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            n = 0;
          n < 20;
          n++
        )
          e += t.charAt(Math.floor(Math.random() * t.length));
        return e;
      }),
      (window.WAPI.getChatById = function (e, t) {
        let n = WAPI.getChat(e);
        return (n = !!n && WAPI._serializeChatObj(n)), void 0 !== t && t(n), n;
      }),
      (window.WAPI.getUnreadMessagesInChat = function (e, t, n, r) {
        let i = WAPI.getChat(e).msgs._models,
          o = [];
        for (let e = i.length - 1; e >= 0; e--) {
          if ('remove' === e) continue;
          let r = i[e];
          if ('boolean' == typeof r.isNewMsg && !1 !== r.isNewMsg) {
            r.isNewMsg = !1;
            let e = WAPI.processMessageObj(r, t, n);
            e && o.push(e);
          }
        }
        return void 0 !== r && r(o), o;
      }),
      (window.WAPI.loadEarlierMessages = async function (e) {
        const t = WAPI.getChat(e);
        if (t) {
          const e = await t.loadEarlierMsgs();
          if (e) return e.map(WAPI._serializeMessageObj);
        }
        return !1;
      }),
      (window.WAPI.loadAllEarlierMessages = c),
      (window.WAPI.asyncLoadAllEarlierMessages = function (e, t) {
        c(e), t();
      }),
      (window.WAPI.areAllMessagesLoaded = function (e, t) {
        return WAPI.getChat(e).msgs.msgLoadState.noEarlierMsgs
          ? (t && t(!0), !0)
          : (t && t(!1), !1);
      }),
      (window.WAPI.loadEarlierMessagesTillDate = function (e, t, n) {
        const r = WAPI.getChat(e);
        (x = function () {
          r.msgs.models[0].t > t && !r.msgs.msgLoadState.noEarlierMsgs
            ? r.loadEarlierMsgs().then(x)
            : n();
        }),
          x();
      }),
      (window.WAPI.getAllGroupMetadata = function (e) {
        const t = window.Store.GroupMetadata.map((e) => e.all);
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.getGroupMetadata = async function (e, t) {
        let n = window.Store.GroupMetadata.find(e);
        return void 0 !== t && t(n), n;
      }),
      (window.WAPI._getGroupParticipants = l),
      (window.WAPI.getGroupParticipantIDs = async function (e, t) {
        const n = (await l(e)).map((e) => e.id);
        return void 0 !== t && t(n), n;
      }),
      (window.WAPI.getAllMessagesInChat = function (e, t, n, r) {
        let i = [];
        const o = WAPI.getChat(e).msgs._models;
        for (const e in o) {
          if ('remove' === e) continue;
          const r = o[e];
          let a = WAPI.processMessageObj(r, t, n);
          a && i.push(a);
        }
        return void 0 !== r && r(i), i;
      }),
      (window.WAPI.loadAndGetAllMessagesInChat = async function (e, t, n, r) {
        return WAPI.loadAllEarlierMessages(e).then((i) => {
          let o = [];
          const a = WAPI.getChat(e).msgs._models;
          for (const e in a) {
            if ('remove' === e) continue;
            const r = a[e];
            let i = WAPI.processMessageObj(r, t, n);
            i && o.push(i);
          }
          return void 0 !== r && r(o), o;
        });
      }),
      (window.WAPI.getUnreadMessages = function (e, t, n, r) {
        const i = window.Store.Chat.models,
          o = [];
        for (const r in i) {
          if (isNaN(r)) continue;
          const a = i[r];
          let s = WAPI._serializeChatObj(a);
          s.messages = [];
          const u = a.msgs._models;
          for (let n = u.length - 1; n >= 0; n--) {
            const r = u[n];
            if ('boolean' == typeof r.isNewMsg && !1 !== r.isNewMsg) {
              r.isNewMsg = !1;
              let n = WAPI.processMessageObj(r, e, t);
              n && s.messages.push(n);
            }
          }
          if (s.messages.length > 0) o.push(s);
          else if (n) {
            let n = a.unreadCount;
            for (let r = u.length - 1; r >= 0; r--) {
              const i = u[r];
              if (n > 0) {
                if (!i.isSentByMe) {
                  let r = WAPI.processMessageObj(i, e, t);
                  s.messages.unshift(r), (n -= 1);
                }
              } else {
                if (-1 !== n) break;
                if (!i.isSentByMe) {
                  let n = WAPI.processMessageObj(i, e, t);
                  s.messages.unshift(n);
                  break;
                }
              }
            }
            s.messages.length > 0 && ((a.unreadCount = 0), o.push(s));
          }
        }
        return void 0 !== r && r(o), o;
      }),
      (window.WAPI.getCommonGroups = async function (e, t) {
        let n = [];
        groups = window.WAPI.getAllGroups();
        for (let t in groups)
          try {
            (participants = await window.WAPI.getGroupParticipantIDs(
              groups[t].id
            )),
              participants.filter((t) => t == e).length && n.push(groups[t]);
          } catch (e) {
            console.log('Error in group:'),
              console.log(groups[t]),
              console.log(e);
          }
        return void 0 !== t && t(n), n;
      }),
      (window.WAPI.getProfilePicFromServer = function (e) {
        return Store.WapQuery.profilePicFind(e).then((e) => e.eurl);
      }),
      (window.WAPI.downloadFile = async function (e) {
        return await new Promise((t, n) => {
          let r = new XMLHttpRequest();
          (r.onload = function () {
            if (4 == r.readyState)
              if (200 == r.status) {
                let e = new FileReader();
                e.readAsDataURL(r.response),
                  (e.onload = function (n) {
                    t(e.result.substr(e.result.indexOf(',') + 1));
                  });
              } else console.error(r.statusText);
            else console.log(err), t(!1);
          }),
            r.open('GET', e, !0),
            (r.responseType = 'blob'),
            r.send(null);
        });
      }),
      (window.WAPI.getNumberProfile = async function (e, t) {
        try {
          const n = await window.Store.WapQuery.queryExist(e);
          if (void 0 === n.jid) throw 404;
          const r = window.WAPI._serializeNumberStatusObj(n);
          return (
            200 == r.status && (r.numberExists = !0),
            void 0 !== t && (t(window.WAPI._serializeNumberStatusObj(n)), t(r)),
            r
          );
        } catch (n) {
          return (
            void 0 !== t &&
              t(window.WAPI._serializeNumberStatusObj({ status: n, jid: e })),
            n
          );
        }
      }),
      (window.WAPI.getMessageById = function (e, t) {
        let n = !1;
        try {
          let t = window.Store.Msg.get(e);
          t && (n = WAPI.processMessageObj(t, !0, !0));
        } catch (e) {}
        if (void 0 === t) return n;
        t(n);
      }),
      (window.WAPI.getNewMessageId = function (e) {
        const t = new Store.MsgKey(
          Object.assign({}, Store.Msg.models[0].__x_id)
        );
        return (
          (t.fromMe = !0),
          (t.id = WAPI.getNewId().toUpperCase()),
          (t.remote = new Store.WidFactory.createWid(e)),
          (t._serialized = `${t.fromMe}_${t.remote}_${t.id}`),
          t
        );
      }),
      (window.WAPI.getFileHash = o),
      (window.WAPI.generateMediaKey = a),
      (window.WAPI.arrayBufferToBase64 = function (e) {
        for (
          var t,
            n = '',
            r =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            i = new Uint8Array(e),
            o = i.byteLength,
            a = o % 3,
            s = o - a,
            u = 0;
          u < s;
          u += 3
        )
          n +=
            r[
              (16515072 & (t = (i[u] << 16) | (i[u + 1] << 8) | i[u + 2])) >> 18
            ] +
            r[(258048 & t) >> 12] +
            r[(4032 & t) >> 6] +
            r[63 & t];
        return (
          1 == a
            ? (n += r[(252 & (t = i[s])) >> 2] + r[(3 & t) << 4] + '==')
            : 2 == a &&
              (n +=
                r[(64512 & (t = (i[s] << 8) | i[s + 1])) >> 10] +
                r[(1008 & t) >> 4] +
                r[(15 & t) << 2] +
                '='),
          n
        );
      }),
      (window.WAPI.getHost = function () {
        return Store.Me.attributes;
      }),
      (window.WAPI.getMe = function (e) {
        const t = window.Store.Contact.get(window.Store.Conn.me);
        return void 0 !== e && e(t.all), t.all;
      }),
      (window.WAPI.isConnected = function (e) {
        const t = null === document.querySelector('*[data-icon="alert-phone"]');
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.isLoggedIn = function (e) {
        const t =
          window.Store.Contact && void 0 !== window.Store.Contact.checksum;
        return void 0 !== e && e(t), t;
      }),
      (window.WAPI.getBatteryLevel = function () {
        return Store.Me.attributes.battery;
      }),
      (window.WAPI.base64ImageToFile = r),
      (window.WAPI.base64ToFile = r),
      (window.WAPI.restartService = async function () {
        return await Store.ServiceWorker.default.restart(), !0;
      }),
      (window.WAPI.killServiceWorker = async function () {
        return await Store.ServiceWorker.default.killServiceWorker(), !0;
      }),
      (window.WAPI._newMessagesQueue = []),
      (window.WAPI._newMessagesBuffer =
        null != sessionStorage.getItem('saved_msgs')
          ? JSON.parse(sessionStorage.getItem('saved_msgs'))
          : []),
      (window.WAPI._newMessagesDebouncer = null),
      (window.WAPI._newMessagesCallbacks = []),
      window.Store.Msg.off('add'),
      sessionStorage.removeItem('saved_msgs'),
      (window.WAPI._newMessagesListener = window.Store.Msg.on('add', (e) => {
        if (e && e.isNewMsg && !e.isSentByMe) {
          let t = window.WAPI.processMessageObj(e, !1, !1);
          t &&
            (window.WAPI._newMessagesQueue.push(t),
            window.WAPI._newMessagesBuffer.push(t)),
            !window.WAPI._newMessagesDebouncer &&
              window.WAPI._newMessagesQueue.length > 0 &&
              (window.WAPI._newMessagesDebouncer = setTimeout(() => {
                let e = window.WAPI._newMessagesQueue;
                (window.WAPI._newMessagesDebouncer = null),
                  (window.WAPI._newMessagesQueue = []);
                let t = [];
                window.WAPI._newMessagesCallbacks.forEach(function (n) {
                  void 0 !== n.callback && n.callback(e),
                    !0 === n.rmAfterUse && t.push(n);
                }),
                  t.forEach(function (e) {
                    let t = window.WAPI._newMessagesCallbacks.indexOf(e);
                    window.WAPI._newMessagesCallbacks.splice(t, 1);
                  });
              }, 1e3));
        }
      })),
      (window.WAPI._unloadInform = (e) => {
        window.WAPI._newMessagesBuffer.forEach((e) => {
          Object.keys(e).forEach((t) => (void 0 === e[t] ? delete e[t] : ''));
        }),
          sessionStorage.setItem(
            'saved_msgs',
            JSON.stringify(window.WAPI._newMessagesBuffer)
          ),
          window.WAPI._newMessagesCallbacks.forEach(function (e) {
            void 0 !== e.callback &&
              e.callback({
                status: -1,
                message:
                  'page will be reloaded, wait and register callback again.',
              });
          });
      }),
      window.addEventListener('unload', window.WAPI._unloadInform, !1),
      window.addEventListener('beforeunload', window.WAPI._unloadInform, !1),
      window.addEventListener('pageunload', window.WAPI._unloadInform, !1),
      (window.WAPI.waitNewMessages = w),
      (window.WAPI.allNewMessagesListener = (e) =>
        window.Store.Msg.on('add', (t) => {
          if (t && t.isNewMsg) {
            let n = window.WAPI.processMessageObj(t, !0, !1);
            n && e(n);
          }
        })),
      (window.WAPI.onStateChange = function (e) {
        return window.Store.State.default.on('change:state', e), !0;
      }),
      (window.WAPI.waitNewAcknowledgements = function (e) {
        return Store.Msg.on('change:ack', e), !0;
      }),
      (window.WAPI.onLiveLocation = function (e, t) {
        var n = Store.LiveLocation.get(e);
        return (
          !!n &&
          (n.participants.validLocations().map((e) =>
            e.on('change:lastUpdated', (e, n, r) => {
              console.log(e, n, r);
              const {
                  id: i,
                  lat: o,
                  lng: a,
                  accuracy: s,
                  degrees: u,
                  speed: l,
                  lastUpdated: c,
                } = e,
                f = {
                  id: i.toString(),
                  lat: o,
                  lng: a,
                  accuracy: s,
                  degrees: u,
                  speed: l,
                  lastUpdated: c,
                };
              t(f);
            })
          ),
          !0)
        );
      }),
      (window.WAPI.onParticipantsChanged = function (e, t) {
        const n = ['invite', 'add', 'remove', 'leave', 'promote', 'demote'],
          r = window.Store.Chat.get(e),
          i = window.Store.GroupMetadata.get(e);
        g[e] ||
          ((g[e] = {}),
          i.participants.forEach((t) => {
            g[e][t.id.toString()] = { subtype: 'add', from: i.owner };
          }));
        let o = 0;
        return (
          r.on('change:groupMetadata.participants', (i) =>
            r.on('all', (i, a) => {
              const { isGroup: s, previewMessage: u } = a;
              if (
                s &&
                'change' === i &&
                u &&
                'gp2' === u.type &&
                n.includes(u.subtype)
              ) {
                const { subtype: n, from: i, recipients: a } = u,
                  s = a[0].toString();
                (g[e][s] && g[e][a[0]].subtype == n) ||
                  (0 == o
                    ? o++
                    : ((g[e][s] = { subtype: n, from: i }),
                      t({ by: i.toString(), action: n, who: a }),
                      r.off('all', this),
                      (o = 0)));
              }
            })
          ),
          !0
        );
      }),
      (window.WAPI.onAddedToGroup = function (e) {
        return (
          Store.Chat.on('add', (t) => {
            t && t.isGroup && e(t);
          }),
          !0
        );
      }),
      (window.WAPI.sendMessageMentioned = async function (e, t, n) {
        Array.isArray(n) || (n = [n]);
        const r = WAPI.getChat(e),
          i = await Store.Contact.serialize().filter((e) =>
            n.includes(e.id.user)
          );
        r.sendMessage(t, {
          linkPreview: null,
          mentionedJidList: i.map((e) => e.id),
          quotedMsg: null,
          quotedMsgAdminGroupJid: null,
        });
      }),
      (window.WAPI.getProfilePicSmallFromId = async function (e) {
        return await window.Store.ProfilePicThumb.find(e).then(
          async function (e) {
            return (
              void 0 !== e.img &&
              (await window.WAPI.downloadFileWithCredentials(e.img))
            );
          },
          function (e) {
            return !1;
          }
        );
      }),
      (window.WAPI.getProfilePicFromId = async function (e) {
        return await window.Store.ProfilePicThumb.find(e).then(
          async function (e) {
            return (
              void 0 !== e.imgFull &&
              (await window.WAPI.downloadFileWithCredentials(e.imgFull))
            );
          },
          function (e) {
            return !1;
          }
        );
      }),
      (window.WAPI.downloadFileWithCredentials = async function (e) {
        if (!axios || !e) return !1;
        const t = (await axios.get(e, { responseType: 'arraybuffer' })).data;
        return btoa(
          new Uint8Array(t).reduce((e, t) => e + String.fromCharCode(t), '')
        );
      }),
      (window.WAPI._serializeNumberStatusObj = (e) =>
        null == e
          ? null
          : Object.assign(
              {},
              {
                id: e.jid,
                status: e.status,
                isBusiness: !0 === e.biz,
                canReceiveMessage: 200 === e.status,
              }
            )),
      (window.WAPI.checkNumberStatus = async function (e) {
        try {
          const t = await window.Store.WapQuery.queryExist(e);
          if (void 0 === t.jid) throw 404;
          const n = window.WAPI._serializeNumberStatusObj(t);
          return 200 == n.status && (n.numberExists = !0), n;
        } catch (t) {
          return window.WAPI._serializeNumberStatusObj({ status: t, jid: e });
        }
      }),
      (window.WAPI.getChatIsOnline = async function (e) {
        return (
          !!Store.Chat.get(e) &&
          (await Store.Chat.get(e)
            .presence.subscribe()
            .then((t) => Store.Chat.get(e).presence.attributes.isOnline))
        );
      }),
      (window.WAPI.getWAVersion = function () {
        return window.Debug.VERSION;
      }),
      (window.WAPI.archiveChat = async function (e, t) {
        return await Store.Archive.setArchive(Store.Chat.get(e), t)
          .then((e) => !0)
          .catch((e) => !1);
      }),
      (window.WAPI.pinChat = async function (e, t) {
        return await Store.pinChat
          .setPin(Store.Chat.get(e), t)
          .then((e) => !0)
          .catch((e) => !1);
      });
  },
]);

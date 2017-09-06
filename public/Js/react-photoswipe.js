! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("prop-types"), require("react")) : "function" == typeof define && define.amd ? define(["prop-types", "react"], t) : "object" == typeof exports ? exports.ReactPhotoswipe = t(require("prop-types"), require("react")) : e.ReactPhotoswipe = t(e.PropTypes, e.React) }(this, function(e, t) {
    return function(e) {
        function t(o) { if (n[o]) return n[o].exports; var i = n[o] = { i: o, l: !1, exports: {} }; return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) { return e }, t.d = function(e, n, o) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: o }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 6)
    }([function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
            }(),
            s = n(4),
            u = o(s),
            c = n(3),
            p = o(c),
            d = n(9),
            f = o(d),
            m = n(8),
            h = o(m),
            v = n(2),
            y = o(v),
            w = n(1),
            g = o(w),
            b = function(e) {
                function t() {
                    var e, n, o, a;
                    i(this, t);
                    for (var l = arguments.length, s = Array(l), u = 0; u < l; u++) s[u] = arguments[u];
                    return n = o = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), x.call(o), a = n, r(o, a)
                }
                return a(t, e), l(t, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.id,
                            n = this.props.className;
                        return n = (0, y.default)(["pswp", n]).trim(), u.default.createElement("div", { id: t, className: n, tabIndex: "-1", role: "dialog", "aria-hidden": "true", ref: function(t) { e.pswpElement = t } }, u.default.createElement("div", { className: "pswp__bg" }), u.default.createElement("div", { className: "pswp__scroll-wrap" }, u.default.createElement("div", { className: "pswp__container" }, u.default.createElement("div", { className: "pswp__item" }), u.default.createElement("div", { className: "pswp__item" }), u.default.createElement("div", { className: "pswp__item" })), u.default.createElement("div", { className: "pswp__ui pswp__ui--hidden" }, u.default.createElement("div", { className: "pswp__top-bar" }, u.default.createElement("div", { className: "pswp__counter" }), u.default.createElement("button", { className: "pswp__button pswp__button--close", title: "Close (Esc)" }), u.default.createElement("button", { className: "pswp__button pswp__button--share", title: "Share" }), u.default.createElement("button", { className: "pswp__button pswp__button--fs", title: "Toggle fullscreen" }), u.default.createElement("button", { className: "pswp__button pswp__button--zoom", title: "Zoom in/out" }), u.default.createElement("div", { className: "pswp__preloader" }, u.default.createElement("div", { className: "pswp__preloader__icn" }, u.default.createElement("div", { className: "pswp__preloader__cut" }, u.default.createElement("div", { className: "pswp__preloader__donut" }))))), u.default.createElement("div", { className: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap" }, u.default.createElement("div", { className: "pswp__share-tooltip" })), u.default.createElement("button", { className: "pswp__button pswp__button--arrow--left", title: "Previous (arrow left)" }), u.default.createElement("button", { className: "pswp__button pswp__button--arrow--right", title: "Next (arrow right)" }), u.default.createElement("div", { className: "pswp__caption" }, u.default.createElement("div", { className: "pswp__caption__center" })))))
                    }
                }]), t
            }(u.default.Component);
        b.propTypes = { isOpen: p.default.bool.isRequired, items: p.default.array.isRequired, options: p.default.object, onClose: p.default.func, id: p.default.string, className: p.default.string }, b.defaultProps = { options: {}, onClose: function() {}, id: "", className: "" };
        var x = function() {
            var e = this;
            this.state = { isOpen: this.props.isOpen }, this.componentDidMount = function() { e.state.isOpen && e.openPhotoSwipe(e.props) }, this.componentWillReceiveProps = function(t) {
                var n = e.state.isOpen;
                t.isOpen ? n ? e.updateItems(t.items) : e.openPhotoSwipe(t) : n && e.closePhotoSwipe()
            }, this.componentWillUnmount = function() { e.closePhotoSwipe() }, this.openPhotoSwipe = function(t) {
                var n = t.items,
                    o = t.options,
                    i = e.pswpElement;
                e.photoSwipe = new f.default(i, h.default, n, o), g.default.forEach(function(n) {
                    var o = t[n];
                    if (o || "destroy" === n) {
                        var i = e;
                        e.photoSwipe.listen(n, function() {
                            if (o) {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                t.unshift(this), o.apply(void 0, t)
                            }
                            "destroy" === n && i.handleClose()
                        })
                    }
                }), e.setState({ isOpen: !0 }, function() { e.photoSwipe.init() })
            }, this.updateItems = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                e.photoSwipe.items.length = 0, t.forEach(function(t) { e.photoSwipe.items.push(t) }), e.photoSwipe.invalidateCurrItems(), e.photoSwipe.updateSize(!0)
            }, this.closePhotoSwipe = function() { e.photoSwipe && e.photoSwipe.close() }, this.handleClose = function() {
                var t = e.props.onClose;
                e.setState({ isOpen: !1 }, function() { t && t() })
            }
        };
        t.default = b, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = ["beforeChange", "afterChange", "imageLoadComplete", "resize", "gettingData", "mouseUsed", "initialZoomIn", "initialZoomInEnd", "initialZoomOut", "initialZoomOutEnd", "parseVerticalMargin", "close", "unbindEvents", "destroy", "updateScrollOffset", "preventDragEvent", "shareLinkClick"], e.exports = t.default
    }, function(e, t, n) {
        var o, i;
        ! function() {
            "use strict";

            function n() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var o = arguments[t];
                    if (o) {
                        var i = typeof o;
                        if ("string" === i || "number" === i) e.push(o);
                        else if (Array.isArray(o)) e.push(n.apply(null, o));
                        else if ("object" === i)
                            for (var a in o) r.call(o, a) && o[a] && e.push(a)
                    }
                }
                return e.join(" ")
            }
            var r = {}.hasOwnProperty;
            void 0 !== e && e.exports ? e.exports = n : (o = [], void 0 !== (i = function() { return n }.apply(t, o)) && (e.exports = i))
        }()
    }, function(t, n) { t.exports = e }, function(e, n) { e.exports = t }, function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t) { var n = {}; for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]); return n }

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
            }(),
            c = n(4),
            p = o(c),
            d = n(3),
            f = o(d),
            m = n(2),
            h = o(m),
            v = n(7),
            y = o(v),
            w = n(0),
            g = o(w),
            b = n(1),
            x = o(b),
            _ = function(e) {
                function t() {
                    var e, n, o, i;
                    r(this, t);
                    for (var l = arguments.length, s = Array(l), u = 0; u < l; u++) s[u] = arguments[u];
                    return n = o = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), o.state = { isOpen: o.props.isOpen, options: o.props.options }, o.componentWillReceiveProps = function(e) {
                        var t = o.state.isOpen;
                        e.isOpen ? t || o.setState({ isOpen: !0 }) : t && o.setState({ isOpen: !1 })
                    }, o.showPhotoSwipe = function(e) {
                        return function(t) {
                            t.preventDefault();
                            var n = function(e) {
                                    var t = o.thumbnails[e],
                                        n = t.getElementsByTagName("img")[0],
                                        i = window.pageYOffset || document.documentElement.scrollTop,
                                        r = n.getBoundingClientRect();
                                    return { x: r.left, y: r.top + i, w: r.width }
                                },
                                i = o.state.options;
                            i.index = e, i.getThumbBoundsFn = i.getThumbBoundsFn || n, o.setState({ isOpen: !0, options: i })
                        }
                    }, o.handleClose = function() { o.setState({ isOpen: !1 }), o.props.onClose() }, i = n, a(o, i)
                }
                return l(t, e), u(t, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.id,
                            o = t.items,
                            r = t.thumbnailContent,
                            a = i(t, ["id", "items", "thumbnailContent"]),
                            l = this.props.className;
                        l = (0, h.default)(["pswp-gallery", l]).trim();
                        var u = (0, y.default)(a, x.default),
                            c = this.state,
                            d = c.isOpen,
                            f = c.options;
                        return p.default.createElement("div", { id: n, className: l }, p.default.createElement("div", { className: "pswp-thumbnails" }, o.map(function(t, n) { return p.default.createElement("div", { key: n, ref: function(t) { e.thumbnails = e.thumbnails || [], e.thumbnails[n] = t }, className: "pswp-thumbnail", onClick: e.showPhotoSwipe(n) }, r(t)) })), p.default.createElement(g.default, s({}, u, { isOpen: d, items: o, options: f, onClose: this.handleClose })))
                    }
                }]), t
            }(p.default.Component);
        _.propTypes = { items: f.default.array.isRequired, options: f.default.object, thumbnailContent: f.default.func, id: f.default.string, className: f.default.string, isOpen: f.default.bool, onClose: f.default.func }, _.defaultProps = { options: {}, thumbnailContent: function(e) { return p.default.createElement("img", { src: e.src, width: "100", height: "100", alt: "" }) }, id: "", className: "", isOpen: !1, onClose: function() {} }, t.default = _, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PhotoSwipeGallery = t.PhotoSwipe = void 0;
        var i = n(0),
            r = o(i),
            a = n(5),
            l = o(a);
        t.default = r.default, t.PhotoSwipe = r.default, t.PhotoSwipeGallery = l.default
    }, function(e, t, n) {
        (function(t) {
            function n(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function o(e, t) { for (var n = -1, o = e ? e.length : 0, i = Array(o); ++n < o;) i[n] = t(e[n], n, e); return i }

            function i(e, t) { for (var n = -1, o = t.length, i = e.length; ++n < o;) e[i + n] = t[n]; return e }

            function r(e, t, n, o, a) {
                var l = -1,
                    u = e.length;
                for (n || (n = s), a || (a = []); ++l < u;) {
                    var c = e[l];
                    t > 0 && n(c) ? t > 1 ? r(c, t - 1, n, o, a) : i(a, c) : o || (a[a.length] = c)
                }
                return a
            }

            function a(e, t) { return e = Object(e), l(e, t, function(t, n) { return n in e }) }

            function l(e, t, n) {
                for (var o = -1, i = t.length, r = {}; ++o < i;) {
                    var a = t[o],
                        l = e[a];
                    n(l, a) && (r[a] = l)
                }
                return r
            }

            function s(e) { return A(e) || c(e) || !!(F && e && e[F]) }

            function u(e) { if ("string" == typeof e || y(e)) return e; var t = e + ""; return "0" == t && 1 / e == -w ? "-0" : t }

            function c(e) { return d(e) && S.call(e, "callee") && (!P.call(e, "callee") || D.call(e) == b) }

            function p(e) { return null != e && m(e.length) && !f(e) }

            function d(e) { return v(e) && p(e) }

            function f(e) { var t = h(e) ? D.call(e) : ""; return t == x || t == _ }

            function m(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= g }

            function h(e) { var t = typeof e; return !!e && ("object" == t || "function" == t) }

            function v(e) { return !!e && "object" == typeof e }

            function y(e) { return "symbol" == typeof e || v(e) && D.call(e) == C }
            var w = 1 / 0,
                g = 9007199254740991,
                b = "[object Arguments]",
                x = "[object Function]",
                _ = "[object GeneratorFunction]",
                C = "[object Symbol]",
                E = "object" == typeof t && t && t.Object === Object && t,
                I = "object" == typeof self && self && self.Object === Object && self,
                T = E || I || Function("return this")(),
                O = Object.prototype,
                S = O.hasOwnProperty,
                D = O.toString,
                M = T.Symbol,
                P = O.propertyIsEnumerable,
                F = M ? M.isConcatSpreadable : void 0,
                k = Math.max,
                A = Array.isArray,
                R = function(e, t) {
                    return t = k(void 0 === t ? e.length - 1 : t, 0),
                        function() {
                            for (var o = arguments, i = -1, r = k(o.length - t, 0), a = Array(r); ++i < r;) a[i] = o[t + i];
                            i = -1;
                            for (var l = Array(t + 1); ++i < t;) l[i] = o[i];
                            return l[t] = a, n(e, this, l)
                        }
                }(function(e, t) { return null == e ? {} : a(e, o(r(t, 1), u)) });
            e.exports = R
        }).call(t, n(10))
    }, function(e, t, n) {
        var o, i;
        ! function(r, a) { o = a, void 0 !== (i = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = i) }(0, function() {
            "use strict";
            return function(e, t) {
                var n, o, i, r, a, l, s, u, c, p, d, f, m, h, v, y, w, g, b, x = this,
                    _ = !1,
                    C = !0,
                    E = !0,
                    I = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(e, t) { return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() { return e.currItem.src || "" }, getPageURLForShare: function() { return window.location.href }, getTextForShare: function() { return e.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
                    T = function(e) {
                        if (y) return !0;
                        e = e || window.event, v.timeToIdle && v.mouseUsed && !c && N();
                        for (var n, o, i = e.target || e.srcElement, r = i.getAttribute("class") || "", a = 0; a < W.length; a++) n = W[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
                        if (o) {
                            e.stopPropagation && e.stopPropagation(), y = !0;
                            var l = t.features.isOldAndroid ? 600 : 30;
                            w = setTimeout(function() { y = !1 }, l)
                        }
                    },
                    O = function() { return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth },
                    S = function(e, n, o) { t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n) },
                    D = function() {
                        var e = 1 === v.getNumItemsFn();
                        e !== h && (S(o, "ui--one-slide", e), h = e)
                    },
                    M = function() { S(s, "share-modal--hidden", E) },
                    P = function() { return E = !E, E ? (t.removeClass(s, "pswp__share-modal--fade-in"), setTimeout(function() { E && M() }, 300)) : (M(), setTimeout(function() { E || t.addClass(s, "pswp__share-modal--fade-in") }, 30)), E || k(), !1 },
                    F = function(t) { t = t || window.event; var n = t.target || t.srcElement; return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), E || P(), !1)) },
                    k = function() {
                        for (var e, t, n, o, i, r = "", a = 0; a < v.shareButtons.length; a++) e = v.shareButtons[a], n = v.getImageURLForShare(e), o = v.getPageURLForShare(e), i = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(i)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
                        s.children[0].innerHTML = r, s.children[0].onclick = F
                    },
                    A = function(e) {
                        for (var n = 0; n < v.closeElClasses.length; n++)
                            if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0
                    },
                    R = 0,
                    N = function() { clearTimeout(b), R = 0, c && x.setIdle(!1) },
                    L = function(e) {
                        e = e || window.event;
                        var t = e.relatedTarget || e.toElement;
                        t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function() { x.setIdle(!0) }, v.timeToIdleOutside))
                    },
                    Z = function() { v.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")) },
                    z = function() { v.preloaderEl && (j(!0), p("beforeChange", function() { clearTimeout(m), m = setTimeout(function() { e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && j(!1) : j(!0) }, v.loadingIndicatorDelay) }), p("imageLoadComplete", function(t, n) { e.currItem === n && j(!0) })) },
                    j = function(e) { f !== e && (S(d, "preloader--active", !e), f = e) },
                    U = function(e) {
                        var n = e.vGap;
                        if (O()) {
                            var a = v.barsSize;
                            if (v.captionEl && "auto" === a.bottom)
                                if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), o.insertBefore(r, i), t.addClass(o, "pswp__ui--fit")), v.addCaptionHTMLFn(e, r, !0)) {
                                    var l = r.clientHeight;
                                    n.bottom = parseInt(l, 10) || 44
                                } else n.bottom = a.top;
                            else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                            n.top = a.top
                        } else n.top = n.bottom = 0
                    },
                    K = function() { v.timeToIdle && p("mouseUsed", function() { t.bind(document, "mousemove", N), t.bind(document, "mouseout", L), g = setInterval(function() { 2 === ++R && x.setIdle(!0) }, v.timeToIdle / 2) }) },
                    B = function() {
                        p("onVerticalDrag", function(e) { C && e < .95 ? x.hideControls() : !C && e >= .95 && x.showControls() });
                        var e;
                        p("onPinchClose", function(t) { C && t < .9 ? (x.hideControls(), e = !0) : e && !C && t > .9 && x.showControls() }), p("zoomGestureEnded", function() {
                            (e = !1) && !C && x.showControls()
                        })
                    },
                    W = [{ name: "caption", option: "captionEl", onInit: function(e) { i = e } }, { name: "share-modal", option: "shareEl", onInit: function(e) { s = e }, onTap: function() { P() } }, { name: "button--share", option: "shareEl", onInit: function(e) { l = e }, onTap: function() { P() } }, { name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(e) { a = e } }, { name: "button--close", option: "closeEl", onTap: e.close }, { name: "button--arrow--left", option: "arrowEl", onTap: e.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: e.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { n.isFullscreen() ? n.exit() : n.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(e) { d = e } }],
                    H = function() {
                        var e, n, i, r = function(o) {
                            if (o)
                                for (var r = o.length, a = 0; a < r; a++) { e = o[a], n = e.className; for (var l = 0; l < W.length; l++) i = W[l], n.indexOf("pswp__" + i.name) > -1 && (v[i.option] ? (t.removeClass(e, "pswp__element--disabled"), i.onInit && i.onInit(e)) : t.addClass(e, "pswp__element--disabled")) }
                        };
                        r(o.children);
                        var a = t.getChildByClass(o, "pswp__top-bar");
                        a && r(a.children)
                    };
                x.init = function() {
                    t.extend(e.options, I, !0), v = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"), p = e.listen, B(), p("beforeChange", x.update), p("doubleTap", function(t) {
                        var n = e.currItem.initialZoomLevel;
                        e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                    }), p("preventDragEvent", function(e, t, n) {
                        var o = e.target || e.srcElement;
                        o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
                    }), p("bindEvents", function() { t.bind(o, "pswpTap click", T), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver) }), p("unbindEvents", function() { E || P(), g && clearInterval(g), t.unbind(document, "mouseout", L), t.unbind(document, "mousemove", N), t.unbind(o, "pswpTap click", T), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null) }), p("destroy", function() { v.captionEl && (r && o.removeChild(r), t.removeClass(i, "pswp__caption--empty")), s && (s.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"), x.setIdle(!1) }), v.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), p("initialZoomIn", function() { v.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden") }), p("initialZoomOut", function() { t.addClass(o, "pswp__ui--hidden") }), p("parseVerticalMargin", U), H(), v.shareEl && l && s && (E = !0), D(), K(), Z(), z()
                }, x.setIdle = function(e) { c = e, S(o, "ui--idle", e) }, x.update = function() { C && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, i), S(i, "caption--empty", !e.currItem.title)), _ = !0) : _ = !1, E || P(), D() }, x.updateFullscreen = function(o) { o && setTimeout(function() { e.setScrollOffset(0, t.getScrollY()) }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs") }, x.updateIndexIndicator = function() { v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn()) }, x.onGlobalTap = function(n) {
                    n = n || window.event;
                    var o = n.target || n.srcElement;
                    if (!y)
                        if (n.detail && "mouse" === n.detail.pointerType) {
                            if (A(o)) return void e.close();
                            t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                        } else if (v.tapToToggleControls && (C ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(o, "pswp__img") || A(o))) return void e.close()
                }, x.onMouseOver = function(e) {
                    e = e || window.event;
                    var t = e.target || e.srcElement;
                    S(o, "ui--over-close", A(t))
                }, x.hideControls = function() { t.addClass(o, "pswp__ui--hidden"), C = !1 }, x.showControls = function() { C = !0, _ || x.update(), t.removeClass(o, "pswp__ui--hidden") }, x.supportsFullscreen = function() { var e = document; return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen) }, x.getFullscreenAPI = function() {
                    var t, n = document.documentElement,
                        o = "fullscreenchange";
                    return n.requestFullscreen ? t = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: o } : n.mozRequestFullScreen ? t = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + o } : n.webkitRequestFullscreen ? t = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + o } : n.msRequestFullscreen && (t = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), t && (t.enter = function() {
                        if (u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
                        e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                    }, t.exit = function() { return v.closeOnScroll = u, document[this.exitK]() }, t.isFullscreen = function() { return document[this.elementK] }), t
                }
            }
        })
    }, function(e, t, n) {
        var o, i;
        ! function(r, a) { o = a, void 0 !== (i = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = i) }(0, function() {
            "use strict";
            return function(e, t, n, o) {
                var i = {
                    features: null,
                    bind: function(e, t, n, o) {
                        var i = (o ? "remove" : "add") + "EventListener";
                        t = t.split(" ");
                        for (var r = 0; r < t.length; r++) t[r] && e[i](t[r], n, !1)
                    },
                    isArray: function(e) { return e instanceof Array },
                    createEl: function(e, t) { var n = document.createElement(t || "div"); return e && (n.className = e), n },
                    getScrollY: function() { var e = window.pageYOffset; return void 0 !== e ? e : document.documentElement.scrollTop },
                    unbind: function(e, t, n) { i.bind(e, t, n, !0) },
                    removeClass: function(e, t) {
                        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                        e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                    },
                    addClass: function(e, t) { i.hasClass(e, t) || (e.className += (e.className ? " " : "") + t) },
                    hasClass: function(e, t) { return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className) },
                    getChildByClass: function(e, t) {
                        for (var n = e.firstChild; n;) {
                            if (i.hasClass(n, t)) return n;
                            n = n.nextSibling
                        }
                    },
                    arraySearch: function(e, t, n) {
                        for (var o = e.length; o--;)
                            if (e[o][n] === t) return o;
                        return -1
                    },
                    extend: function(e, t, n) {
                        for (var o in t)
                            if (t.hasOwnProperty(o)) {
                                if (n && e.hasOwnProperty(o)) continue;
                                e[o] = t[o]
                            }
                    },
                    easing: { sine: { out: function(e) { return Math.sin(e * (Math.PI / 2)) }, inOut: function(e) { return -(Math.cos(Math.PI * e) - 1) / 2 } }, cubic: { out: function(e) { return --e * e * e + 1 } } },
                    detectFeatures: function() {
                        if (i.features) return i.features;
                        var e = i.createEl(),
                            t = e.style,
                            n = "",
                            o = {};
                        if (o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window, window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame), o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !o.pointerEvent) {
                            var r = navigator.userAgent;
                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (o.isOldIOSPhone = !0)
                            }
                            var l = r.match(/Android\s([0-9\.]*)/),
                                s = l ? l[1] : 0;
                            s = parseFloat(s), s >= 1 && (s < 4.4 && (o.isOldAndroid = !0), o.androidVersion = s), o.isMobileOpera = /opera mini|opera mobi/i.test(r)
                        }
                        for (var u, c, p = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                            n = d[f];
                            for (var m = 0; m < 3; m++) u = p[m], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !o[u] && c in t && (o[u] = c);
                            n && !o.raf && (n = n.toLowerCase(), o.raf = window[n + "RequestAnimationFrame"], o.raf && (o.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                        }
                        if (!o.raf) {
                            var h = 0;
                            o.raf = function(e) {
                                var t = (new Date).getTime(),
                                    n = Math.max(0, 16 - (t - h)),
                                    o = window.setTimeout(function() { e(t + n) }, n);
                                return h = t + n, o
                            }, o.caf = function(e) { clearTimeout(e) }
                        }
                        return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, i.features = o, o
                    }
                };
                i.detectFeatures(), i.features.oldIE && (i.bind = function(e, t, n, o) {
                    t = t.split(" ");
                    for (var i, r = (o ? "detach" : "attach") + "Event", a = function() { n.handleEvent.call(n) }, l = 0; l < t.length; l++)
                        if (i = t[l])
                            if ("object" == typeof n && n.handleEvent) {
                                if (o) { if (!n["oldIE" + i]) return !1 } else n["oldIE" + i] = a;
                                e[r]("on" + i, n["oldIE" + i])
                            } else e[r]("on" + i, n)
                });
                var r = this,
                    a = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(e) { return "A" === e.tagName }, getDoubleTapZoom: function(e, t) { return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
                i.extend(a, o);
                var l, s, u, c, p, d, f, m, h, v, y, w, g, b, x, _, C, E, I, T, O, S, D, M, P, F, k, A, R, N, L, Z, z, j, U, K, B, W, H, q, G, Y, V, X, $, J, Q, ee, te, ne, oe, ie, re, ae, le, se, ue, ce = function() { return { x: 0, y: 0 } },
                    pe = ce(),
                    de = ce(),
                    fe = ce(),
                    me = {},
                    he = 0,
                    ve = {},
                    ye = ce(),
                    we = 0,
                    ge = !0,
                    be = [],
                    xe = {},
                    _e = !1,
                    Ce = function(e, t) { i.extend(r, t.publicMethods), be.push(e) },
                    Ee = function(e) { var t = Xt(); return e > t - 1 ? e - t : e < 0 ? t + e : e },
                    Ie = {},
                    Te = function(e, t) { return Ie[e] || (Ie[e] = []), Ie[e].push(t) },
                    Oe = function(e) {
                        var t = Ie[e];
                        if (t) {
                            var n = Array.prototype.slice.call(arguments);
                            n.shift();
                            for (var o = 0; o < t.length; o++) t[o].apply(r, n)
                        }
                    },
                    Se = function() { return (new Date).getTime() },
                    De = function(e) { le = e, r.bg.style.opacity = e * a.bgOpacity },
                    Me = function(e, t, n, o, i) {
                        (!_e || i && i !== r.currItem) && (o /= i ? i.fitRatio : r.currItem.fitRatio), e[S] = w + t + "px, " + n + "px" + g + " scale(" + o + ")"
                    },
                    Pe = function(e) { ne && (e && (v > r.currItem.fitRatio ? _e || (un(r.currItem, !1, !0), _e = !0) : _e && (un(r.currItem), _e = !1)), Me(ne, fe.x, fe.y, v)) },
                    Fe = function(e) { e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e) },
                    ke = function(e, t) { t[S] = w + e + "px, 0px" + g },
                    Ae = function(e, t) {
                        if (!a.loop && t) {
                            var n = c + (ye.x * he - e) / ye.x,
                                o = Math.round(e - ht.x);
                            (n < 0 && o > 0 || n >= Xt() - 1 && o < 0) && (e = ht.x + o * a.mainScrollEndFriction)
                        }
                        ht.x = e, ke(e, p)
                    },
                    Re = function(e, t) { var n = vt[e] - ve[e]; return de[e] + pe[e] + n - n * (t / y) },
                    Ne = function(e, t) { e.x = t.x, e.y = t.y, t.id && (e.id = t.id) },
                    Le = function(e) { e.x = Math.round(e.x), e.y = Math.round(e.y) },
                    Ze = null,
                    ze = function() { Ze && (i.unbind(document, "mousemove", ze), i.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Oe("mouseUsed")), Ze = setTimeout(function() { Ze = null }, 100) },
                    je = function() { i.bind(document, "keydown", r), L.transform && i.bind(r.scrollWrap, "click", r), a.mouseUsed || i.bind(document, "mousemove", ze), i.bind(window, "resize scroll orientationchange", r), Oe("bindEvents") },
                    Ue = function() { i.unbind(window, "resize scroll orientationchange", r), i.unbind(window, "scroll", h.scroll), i.unbind(document, "keydown", r), i.unbind(document, "mousemove", ze), L.transform && i.unbind(r.scrollWrap, "click", r), H && i.unbind(window, f, r), clearTimeout(Z), Oe("unbindEvents") },
                    Ke = function(e, t) { var n = rn(r.currItem, me, e); return t && (te = n), n },
                    Be = function(e) { return e || (e = r.currItem), e.initialZoomLevel },
                    We = function(e) { return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1 },
                    He = function(e, t, n, o) { return o === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Re(e, o), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0)) },
                    qe = function() {
                        if (S) { var t = L.perspective && !M; return w = "translate" + (t ? "3d(" : "("), void(g = L.perspective ? ", 0px)" : ")") }
                        S = "left", i.addClass(e, "pswp--ie"), ke = function(e, t) { t.left = e + "px" }, Fe = function(e) {
                            var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                                n = e.container.style,
                                o = t * e.w,
                                i = t * e.h;
                            n.width = o + "px", n.height = i + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                        }, Pe = function() {
                            if (ne) {
                                var e = ne,
                                    t = r.currItem,
                                    n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                    o = n * t.w,
                                    i = n * t.h;
                                e.width = o + "px", e.height = i + "px", e.left = fe.x + "px", e.top = fe.y + "px"
                            }
                        }
                    },
                    Ge = function(e) {
                        var t = "";
                        a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
                    },
                    Ye = function(e) { e && (Y || G || oe || B) && (e.preventDefault(), e.stopPropagation()) },
                    Ve = function() { r.setScrollOffset(0, i.getScrollY()) },
                    Xe = {},
                    $e = 0,
                    Je = function(e) { Xe[e] && (Xe[e].raf && F(Xe[e].raf), $e--, delete Xe[e]) },
                    Qe = function(e) { Xe[e] && Je(e), Xe[e] || ($e++, Xe[e] = {}) },
                    et = function() { for (var e in Xe) Xe.hasOwnProperty(e) && Je(e) },
                    tt = function(e, t, n, o, i, r, a) {
                        var l, s = Se();
                        Qe(e);
                        var u = function() {
                            if (Xe[e]) {
                                if ((l = Se() - s) >= o) return Je(e), r(n), void(a && a());
                                r((n - t) * i(l / o) + t), Xe[e].raf = P(u)
                            }
                        };
                        u()
                    },
                    nt = {
                        shout: Oe,
                        listen: Te,
                        viewportSize: me,
                        options: a,
                        isMainScrollAnimating: function() { return oe },
                        getZoomLevel: function() { return v },
                        getCurrentIndex: function() { return c },
                        isDragging: function() { return H },
                        isZooming: function() { return J },
                        setScrollOffset: function(e, t) { ve.x = e, N = ve.y = t, Oe("updateScrollOffset", ve) },
                        applyZoomPan: function(e, t, n, o) { fe.x = t, fe.y = n, v = e, Pe(o) },
                        init: function() {
                            if (!l && !s) {
                                var n;
                                r.framework = i, r.template = e, r.bg = i.getChildByClass(e, "pswp__bg"), k = e.className, l = !0, L = i.detectFeatures(), P = L.raf, F = L.caf, S = L.transform, R = L.oldIE, r.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"), r.container = i.getChildByClass(r.scrollWrap, "pswp__container"), p = r.container.style, r.itemHolders = _ = [{ el: r.container.children[0], wrap: 0, index: -1 }, { el: r.container.children[1], wrap: 0, index: -1 }, { el: r.container.children[2], wrap: 0, index: -1 }], _[0].el.style.display = _[2].el.style.display = "none", qe(), h = { resize: r.updateSize, orientationchange: function() { clearTimeout(Z), Z = setTimeout(function() { me.x !== r.scrollWrap.clientWidth && r.updateSize() }, 500) }, scroll: Ve, keydown: Ge, click: Ye };
                                var o = L.isOldIOSPhone || L.isOldAndroid || L.isMobileOpera;
                                for (L.animationName && L.transform && !o || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < be.length; n++) r["init" + be[n]]();
                                if (t) {
                                    (r.ui = new t(r, i)).init()
                                }
                                Oe("firstUpdate"), c = c || a.index || 0, (isNaN(c) || c < 0 || c >= Xt()) && (c = 0), r.currItem = Vt(c), (L.isOldIOSPhone || L.isOldAndroid) && (ge = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ge ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = i.getScrollY() + "px")), void 0 === N && (Oe("initialLayout"), N = A = i.getScrollY());
                                var u = "pswp--open ";
                                for (a.mainClass && (u += a.mainClass + " "), a.showHideOpacity && (u += "pswp--animate_opacity "), u += M ? "pswp--touch" : "pswp--notouch", u += L.animationName ? " pswp--css_animation" : "", u += L.svg ? " pswp--svg" : "", i.addClass(e, u), r.updateSize(), d = -1, we = null, n = 0; n < 3; n++) ke((n + d) * ye.x, _[n].el.style);
                                R || i.bind(r.scrollWrap, m, r), Te("initialZoomInEnd", function() { r.setContent(_[0], c - 1), r.setContent(_[2], c + 1), _[0].el.style.display = _[2].el.style.display = "block", a.focus && e.focus(), je() }), r.setContent(_[1], c), r.updateCurrItem(), Oe("afterInit"), ge || (b = setInterval(function() { $e || H || J || v !== r.currItem.initialZoomLevel || r.updateSize() }, 1e3)), i.addClass(e, "pswp--visible")
                            }
                        },
                        close: function() { l && (l = !1, s = !0, Oe("close"), Ue(), Jt(r.currItem, null, !0, r.destroy)) },
                        destroy: function() { Oe("destroy"), Ht && clearTimeout(Ht), e.setAttribute("aria-hidden", "true"), e.className = k, b && clearInterval(b), i.unbind(r.scrollWrap, m, r), i.unbind(window, "scroll", r), xt(), et(), Ie = null },
                        panTo: function(e, t, n) { n || (e > te.min.x ? e = te.min.x : e < te.max.x && (e = te.max.x), t > te.min.y ? t = te.min.y : t < te.max.y && (t = te.max.y)), fe.x = e, fe.y = t, Pe() },
                        handleEvent: function(e) { e = e || window.event, h[e.type] && h[e.type](e) },
                        goTo: function(e) {
                            e = Ee(e);
                            var t = e - c;
                            we = t, c = e, r.currItem = Vt(c), he -= t, Ae(ye.x * he), et(), oe = !1, r.updateCurrItem()
                        },
                        next: function() { r.goTo(c + 1) },
                        prev: function() { r.goTo(c - 1) },
                        updateCurrZoomItem: function(e) {
                            if (e && Oe("beforeChange", 0), _[1].el.children.length) {
                                var t = _[1].el.children[0];
                                ne = i.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                            } else ne = null;
                            te = r.currItem.bounds, y = v = r.currItem.initialZoomLevel, fe.x = te.center.x, fe.y = te.center.y, e && Oe("afterChange")
                        },
                        invalidateCurrItems: function() { x = !0; for (var e = 0; e < 3; e++) _[e].item && (_[e].item.needsUpdate = !0) },
                        updateCurrItem: function(e) {
                            if (0 !== we) {
                                var t, n = Math.abs(we);
                                if (!(e && n < 2)) {
                                    r.currItem = Vt(c), _e = !1, Oe("beforeChange", we), n >= 3 && (d += we + (we > 0 ? -3 : 3), n = 3);
                                    for (var o = 0; o < n; o++) we > 0 ? (t = _.shift(), _[2] = t, d++, ke((d + 2) * ye.x, t.el.style), r.setContent(t, c - n + o + 1 + 1)) : (t = _.pop(), _.unshift(t), d--, ke(d * ye.x, t.el.style), r.setContent(t, c + n - o - 1 - 1));
                                    if (ne && 1 === Math.abs(we)) {
                                        var i = Vt(C);
                                        i.initialZoomLevel !== v && (rn(i, me), un(i), Fe(i))
                                    }
                                    we = 0, r.updateCurrZoomItem(), C = c, Oe("afterChange")
                                }
                            }
                        },
                        updateSize: function(t) {
                            if (!ge && a.modal) {
                                var n = i.getScrollY();
                                if (N !== n && (e.style.top = n + "px", N = n), !t && xe.x === window.innerWidth && xe.y === window.innerHeight) return;
                                xe.x = window.innerWidth, xe.y = window.innerHeight, e.style.height = xe.y + "px"
                            }
                            if (me.x = r.scrollWrap.clientWidth, me.y = r.scrollWrap.clientHeight, Ve(), ye.x = me.x + Math.round(me.x * a.spacing), ye.y = me.y, Ae(ye.x * he), Oe("beforeResize"), void 0 !== d) {
                                for (var o, l, s, u = 0; u < 3; u++) o = _[u], ke((u + d) * ye.x, o.el.style), s = c + u - 1, a.loop && Xt() > 2 && (s = Ee(s)), l = Vt(s), l && (x || l.needsUpdate || !l.bounds) ? (r.cleanSlide(l), r.setContent(o, s), 1 === u && (r.currItem = l, r.updateCurrZoomItem(!0)), l.needsUpdate = !1) : -1 === o.index && s >= 0 && r.setContent(o, s), l && l.container && (rn(l, me), un(l), Fe(l));
                                x = !1
                            }
                            y = v = r.currItem.initialZoomLevel, te = r.currItem.bounds, te && (fe.x = te.center.x, fe.y = te.center.y, Pe(!0)), Oe("resize")
                        },
                        zoomTo: function(e, t, n, o, r) {
                            t && (y = v, vt.x = Math.abs(t.x) - fe.x, vt.y = Math.abs(t.y) - fe.y, Ne(de, fe));
                            var a = Ke(e, !1),
                                l = {};
                            He("x", a, l, e), He("y", a, l, e);
                            var s = v,
                                u = { x: fe.x, y: fe.y };
                            Le(l);
                            var c = function(t) { 1 === t ? (v = e, fe.x = l.x, fe.y = l.y) : (v = (e - s) * t + s, fe.x = (l.x - u.x) * t + u.x, fe.y = (l.y - u.y) * t + u.y), r && r(t), Pe(1 === t) };
                            n ? tt("customZoomTo", 0, 1, n, o || i.easing.sine.inOut, c) : c(1)
                        }
                    },
                    ot = {},
                    it = {},
                    rt = {},
                    at = {},
                    lt = {},
                    st = [],
                    ut = {},
                    ct = [],
                    pt = {},
                    dt = 0,
                    ft = ce(),
                    mt = 0,
                    ht = ce(),
                    vt = ce(),
                    yt = ce(),
                    wt = function(e, t) { return e.x === t.x && e.y === t.y },
                    gt = function(e, t) { return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25 },
                    bt = function(e, t) { return pt.x = Math.abs(e.x - t.x), pt.y = Math.abs(e.y - t.y), Math.sqrt(pt.x * pt.x + pt.y * pt.y) },
                    xt = function() { V && (F(V), V = null) },
                    _t = function() { H && (V = P(_t), Zt()) },
                    Ct = function() { return !("fit" === a.scaleMode && v === r.currItem.initialZoomLevel) },
                    Et = function(e, t) { return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Et(e.parentNode, t))) },
                    It = {},
                    Tt = function(e, t) { return It.prevent = !Et(e.target, a.isClickableElement), Oe("preventDragEvent", e, t, It), It.prevent },
                    Ot = function(e, t) { return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t },
                    St = function(e, t, n) { n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y) },
                    Dt = function(e, t, n) {
                        if (e - j > 50) {
                            var o = ct.length > 2 ? ct.shift() : {};
                            o.x = t, o.y = n, ct.push(o), j = e
                        }
                    },
                    Mt = function() { var e = fe.y - r.currItem.initialPosition.y; return 1 - Math.abs(e / (me.y / 2)) },
                    Pt = {},
                    Ft = {},
                    kt = [],
                    At = function(e) { for (; kt.length > 0;) kt.pop(); return D ? (ue = 0, st.forEach(function(e) { 0 === ue ? kt[0] = e : 1 === ue && (kt[1] = e), ue++ })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (kt[0] = Ot(e.touches[0], Pt), e.touches.length > 1 && (kt[1] = Ot(e.touches[1], Ft))) : (Pt.x = e.pageX, Pt.y = e.pageY, Pt.id = "", kt[0] = Pt), kt },
                    Rt = function(e, t) {
                        var n, o, i, l, s = fe[e] + t[e],
                            u = t[e] > 0,
                            c = ht.x + t.x,
                            p = ht.x - ut.x;
                        if (n = s > te.min[e] || s < te.max[e] ? a.panEndFriction : 1, s = fe[e] + t[e] * n, (a.allowPanToNext || v === r.currItem.initialZoomLevel) && (ne ? "h" !== ie || "x" !== e || G || (u ? (s > te.min[e] && (n = a.panEndFriction, te.min[e] - s, o = te.min[e] - de[e]), (o <= 0 || p < 0) && Xt() > 1 ? (l = c, p < 0 && c > ut.x && (l = ut.x)) : te.min.x !== te.max.x && (i = s)) : (s < te.max[e] && (n = a.panEndFriction, s - te.max[e], o = de[e] - te.max[e]), (o <= 0 || p > 0) && Xt() > 1 ? (l = c, p > 0 && c < ut.x && (l = ut.x)) : te.min.x !== te.max.x && (i = s))) : l = c, "x" === e)) return void 0 !== l && (Ae(l, !0), X = l !== ut.x), te.min.x !== te.max.x && (void 0 !== i ? fe.x = i : X || (fe.x += t.x * n)), void 0 !== l;
                        oe || X || v > r.currItem.fitRatio && (fe[e] += t[e] * n)
                    },
                    Nt = function(e) {
                        if (!("mousedown" === e.type && e.button > 0)) {
                            if (Yt) return void e.preventDefault();
                            if (!W || "mousedown" !== e.type) {
                                if (Tt(e, !0) && e.preventDefault(), Oe("pointerDown"), D) {
                                    var t = i.arraySearch(st, e.pointerId, "id");
                                    t < 0 && (t = st.length), st[t] = { x: e.pageX, y: e.pageY, id: e.pointerId }
                                }
                                var n = At(e),
                                    o = n.length;
                                $ = null, et(), H && 1 !== o || (H = re = !0, i.bind(window, f, r), K = se = ae = B = X = Y = q = G = !1, ie = null, Oe("firstTouchStart", n), Ne(de, fe), pe.x = pe.y = 0, Ne(at, n[0]), Ne(lt, at), ut.x = ye.x * he, ct = [{ x: at.x, y: at.y }], j = z = Se(), Ke(v, !0), xt(), _t()), !J && o > 1 && !oe && !X && (y = v, G = !1, J = q = !0, pe.y = pe.x = 0, Ne(de, fe), Ne(ot, n[0]), Ne(it, n[1]), St(ot, it, yt), vt.x = Math.abs(yt.x) - fe.x, vt.y = Math.abs(yt.y) - fe.y, Q = ee = bt(ot, it))
                            }
                        }
                    },
                    Lt = function(e) {
                        if (e.preventDefault(), D) {
                            var t = i.arraySearch(st, e.pointerId, "id");
                            if (t > -1) {
                                var n = st[t];
                                n.x = e.pageX, n.y = e.pageY
                            }
                        }
                        if (H) {
                            var o = At(e);
                            if (ie || Y || J) $ = o;
                            else if (ht.x !== ye.x * he) ie = "h";
                            else {
                                var r = Math.abs(o[0].x - at.x) - Math.abs(o[0].y - at.y);
                                Math.abs(r) >= 10 && (ie = r > 0 ? "h" : "v", $ = o)
                            }
                        }
                    },
                    Zt = function() {
                        if ($) {
                            var e = $.length;
                            if (0 !== e)
                                if (Ne(ot, $[0]), rt.x = ot.x - at.x, rt.y = ot.y - at.y, J && e > 1) {
                                    if (at.x = ot.x, at.y = ot.y, !rt.x && !rt.y && wt($[1], it)) return;
                                    Ne(it, $[1]), G || (G = !0, Oe("zoomGestureStarted"));
                                    var t = bt(ot, it),
                                        n = Bt(t);
                                    n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (se = !0);
                                    var o = 1,
                                        i = Be(),
                                        l = We();
                                    if (n < i)
                                        if (a.pinchToClose && !se && y <= r.currItem.initialZoomLevel) {
                                            var s = i - n,
                                                u = 1 - s / (i / 1.2);
                                            De(u), Oe("onPinchClose", u), ae = !0
                                        } else o = (i - n) / i, o > 1 && (o = 1), n = i - o * (i / 3);
                                    else n > l && (o = (n - l) / (6 * i), o > 1 && (o = 1), n = l + o * i);
                                    o < 0 && (o = 0), Q = t, St(ot, it, ft), pe.x += ft.x - yt.x, pe.y += ft.y - yt.y, Ne(yt, ft), fe.x = Re("x", n), fe.y = Re("y", n), K = n > v, v = n, Pe()
                                } else {
                                    if (!ie) return;
                                    if (re && (re = !1, Math.abs(rt.x) >= 10 && (rt.x -= $[0].x - lt.x), Math.abs(rt.y) >= 10 && (rt.y -= $[0].y - lt.y)), at.x = ot.x, at.y = ot.y, 0 === rt.x && 0 === rt.y) return;
                                    if ("v" === ie && a.closeOnVerticalDrag && !Ct()) { pe.y += rt.y, fe.y += rt.y; var c = Mt(); return B = !0, Oe("onVerticalDrag", c), De(c), void Pe() }
                                    Dt(Se(), ot.x, ot.y), Y = !0, te = r.currItem.bounds;
                                    var p = Rt("x", rt);
                                    p || (Rt("y", rt), Le(fe), Pe())
                                }
                        }
                    },
                    zt = function(e) {
                        if (L.isOldAndroid) {
                            if (W && "mouseup" === e.type) return;
                            e.type.indexOf("touch") > -1 && (clearTimeout(W), W = setTimeout(function() { W = 0 }, 600))
                        }
                        Oe("pointerUp"), Tt(e, !1) && e.preventDefault();
                        var t;
                        if (D) {
                            var n = i.arraySearch(st, e.pointerId, "id");
                            if (n > -1)
                                if (t = st.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                                else {
                                    var o = { 4: "mouse", 2: "touch", 3: "pen" };
                                    t.type = o[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                                }
                        }
                        var l, s = At(e),
                            u = s.length;
                        if ("mouseup" === e.type && (u = 0), 2 === u) return $ = null, !0;
                        1 === u && Ne(lt, s[0]), 0 !== u || ie || oe || (t || ("mouseup" === e.type ? t = { x: e.pageX, y: e.pageY, type: "mouse" } : e.changedTouches && e.changedTouches[0] && (t = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" })), Oe("touchRelease", e, t));
                        var c = -1;
                        if (0 === u && (H = !1, i.unbind(window, f, r), xt(), J ? c = 0 : -1 !== mt && (c = Se() - mt)), mt = 1 === u ? Se() : -1, l = -1 !== c && c < 150 ? "zoom" : "swipe", J && u < 2 && (J = !1, 1 === u && (l = "zoomPointerUp"), Oe("zoomGestureEnded")), $ = null, Y || G || oe || B)
                            if (et(), U || (U = jt()), U.calculateSwipeSpeed("x"), B) {
                                var p = Mt();
                                if (p < a.verticalDragRange) r.close();
                                else {
                                    var d = fe.y,
                                        m = le;
                                    tt("verticalDrag", 0, 1, 300, i.easing.cubic.out, function(e) { fe.y = (r.currItem.initialPosition.y - d) * e + d, De((1 - m) * e + m), Pe() }), Oe("onVerticalDrag", 1)
                                }
                            } else {
                                if ((X || oe) && 0 === u) {
                                    var h = Kt(l, U);
                                    if (h) return;
                                    l = "zoomPointerUp"
                                }
                                if (!oe) return "swipe" !== l ? void Wt() : void(!X && v > r.currItem.fitRatio && Ut(U))
                            }
                    },
                    jt = function() { var e, t, n = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(o) { ct.length > 1 ? (e = Se() - j + 50, t = ct[ct.length - 2][o]) : (e = Se() - z, t = lt[o]), n.lastFlickOffset[o] = at[o] - t, n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]), n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e : n.lastFlickSpeed[o] = 0, Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0), n.slowDownRatio[o] = .95, n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o], n.speedDecelerationRatio[o] = 1 }, calculateOverBoundsAnimOffset: function(e, t) { n.backAnimStarted[e] || (fe[e] > te.min[e] ? n.backAnimDestination[e] = te.min[e] : fe[e] < te.max[e] && (n.backAnimDestination[e] = te.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, tt("bounceZoomPan" + e, fe[e], n.backAnimDestination[e], t || 300, i.easing.sine.out, function(t) { fe[e] = t, Pe() })))) }, calculateAnimOffset: function(e) { n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, fe[e] += n.distanceOffset[e]) }, panAnimLoop: function() { if (Xe.zoomPan && (Xe.zoomPan.raf = P(n.panAnimLoop), n.now = Se(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Pe(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return fe.x = Math.round(fe.x), fe.y = Math.round(fe.y), Pe(), void Je("zoomPan") } }; return n },
                    Ut = function(e) {
                        if (e.calculateSwipeSpeed("y"), te = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                        Qe("zoomPan"), e.lastNow = Se(), e.panAnimLoop()
                    },
                    Kt = function(e, t) {
                        var n;
                        oe || (dt = c);
                        var o;
                        if ("swipe" === e) {
                            var l = at.x - lt.x,
                                s = t.lastFlickDist.x < 10;
                            l > 30 && (s || t.lastFlickOffset.x > 20) ? o = -1 : l < -30 && (s || t.lastFlickOffset.x < -20) && (o = 1)
                        }
                        var u;
                        o && (c += o, c < 0 ? (c = a.loop ? Xt() - 1 : 0, u = !0) : c >= Xt() && (c = a.loop ? 0 : Xt() - 1, u = !0), u && !a.loop || (we += o, he -= o, n = !0));
                        var p, d = ye.x * he,
                            f = Math.abs(d - ht.x);
                        return n || d > ht.x == t.lastFlickSpeed.x > 0 ? (p = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, p = Math.min(p, 400), p = Math.max(p, 250)) : p = 333, dt === c && (n = !1), oe = !0, Oe("mainScrollAnimStart"), tt("mainScroll", ht.x, d, p, i.easing.cubic.out, Ae, function() { et(), oe = !1, dt = -1, (n || dt !== c) && r.updateCurrItem(), Oe("mainScrollAnimComplete") }), n && r.updateCurrItem(!0), n
                    },
                    Bt = function(e) { return 1 / ee * e * y },
                    Wt = function() {
                        var e = v,
                            t = Be(),
                            n = We();
                        v < t ? e = t : v > n && (e = n);
                        var o, a = le;
                        return ae && !K && !se && v < t ? (r.close(), !0) : (ae && (o = function(e) { De((1 - a) * e + a) }), r.zoomTo(e, 0, 200, i.easing.cubic.out, o), !0)
                    };
                Ce("Gestures", {
                    publicMethods: {
                        initGestures: function() {
                            var e = function(e, t, n, o, i) { E = e + t, I = e + n, T = e + o, O = i ? e + i : "" };
                            D = L.pointerEvent, D && L.touch && (L.touch = !1), D ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : L.touch ? (e("touch", "start", "move", "end", "cancel"), M = !0) : e("mouse", "down", "move", "up"), f = I + " " + T + " " + O, m = E, D && !M && (M = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = M, h[E] = Nt, h[I] = Lt, h[T] = zt, O && (h[O] = h[T]), L.touch && (m += " mousedown", f += " mousemove mouseup", h.mousedown = h[E], h.mousemove = h[I], h.mouseup = h[T]), M || (a.allowPanToNext = !1)
                        }
                    }
                });
                var Ht, qt, Gt, Yt, Vt, Xt, $t, Jt = function(t, n, o, l) {
                        Ht && clearTimeout(Ht), Yt = !0, Gt = !0;
                        var s;
                        t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
                        var p = o ? a.hideAnimationDuration : a.showAnimationDuration,
                            d = function() { Je("initialZoom"), o ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (De(1), n && (n.style.display = "block"), i.addClass(e, "pswp--animated-in"), Oe("initialZoom" + (o ? "OutEnd" : "InEnd"))), l && l(), Yt = !1 };
                        if (!p || !s || void 0 === s.x) return Oe("initialZoom" + (o ? "Out" : "In")), v = t.initialZoomLevel, Ne(fe, t.initialPosition), Pe(), e.style.opacity = o ? 0 : 1, De(1), void(p ? setTimeout(function() { d() }, p) : d());
                        ! function() {
                            var n = u,
                                l = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), o || (v = s.w / t.w, fe.x = s.x, fe.y = s.y - A, r[l ? "template" : "bg"].style.opacity = .001, Pe()), Qe("initialZoom"), o && !n && i.removeClass(e, "pswp--animated-in"), l && (o ? i[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() { i.addClass(e, "pswp--animate_opacity") }, 30)), Ht = setTimeout(function() {
                                if (Oe("initialZoom" + (o ? "Out" : "In")), o) {
                                    var r = s.w / t.w,
                                        a = { x: fe.x, y: fe.y },
                                        u = v,
                                        c = le,
                                        f = function(t) { 1 === t ? (v = r, fe.x = s.x, fe.y = s.y - N) : (v = (r - u) * t + u, fe.x = (s.x - a.x) * t + a.x, fe.y = (s.y - N - a.y) * t + a.y), Pe(), l ? e.style.opacity = 1 - t : De(c - t * c) };
                                    n ? tt("initialZoom", 0, 1, p, i.easing.cubic.out, f, d) : (f(1), Ht = setTimeout(d, p + 20))
                                } else v = t.initialZoomLevel, Ne(fe, t.initialPosition), Pe(), De(1), l ? e.style.opacity = 1 : De(1), Ht = setTimeout(d, p + 20)
                            }, o ? 25 : 90)
                        }()
                    },
                    Qt = {},
                    en = [],
                    tn = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() { return qt.length } },
                    nn = function() { return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
                    on = function(e, t, n) {
                        var o = e.bounds;
                        o.center.x = Math.round((Qt.x - t) / 2), o.center.y = Math.round((Qt.y - n) / 2) + e.vGap.top, o.max.x = t > Qt.x ? Math.round(Qt.x - t) : o.center.x, o.max.y = n > Qt.y ? Math.round(Qt.y - n) + e.vGap.top : o.center.y, o.min.x = t > Qt.x ? 0 : o.center.x, o.min.y = n > Qt.y ? e.vGap.top : o.center.y
                    },
                    rn = function(e, t, n) {
                        if (e.src && !e.loadError) {
                            var o = !n;
                            if (o && (e.vGap || (e.vGap = { top: 0, bottom: 0 }), Oe("parseVerticalMargin", e)), Qt.x = t.x, Qt.y = t.y - e.vGap.top - e.vGap.bottom, o) {
                                var i = Qt.x / e.w,
                                    r = Qt.y / e.h;
                                e.fitRatio = i < r ? i : r;
                                var l = a.scaleMode;
                                "orig" === l ? n = 1 : "fit" === l && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = nn())
                            }
                            if (!n) return;
                            return on(e, e.w * n, e.h * n), o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                        }
                        return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = nn(), e.initialPosition = e.bounds.center, e.bounds
                    },
                    an = function(e, t, n, o, i, a) { t.loadError || o && (t.imageAppended = !0, un(t, o, t === r.currItem && _e), n.appendChild(o), a && setTimeout(function() { t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null) }, 500)) },
                    ln = function(e) {
                        e.loading = !0, e.loaded = !1;
                        var t = e.img = i.createEl("pswp__img", "img"),
                            n = function() { e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null };
                        return t.onload = n, t.onerror = function() { e.loadError = !0, n() }, t.src = e.src, t
                    },
                    sn = function(e, t) { if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0 },
                    un = function(e, t, n) {
                        if (e.src) {
                            t || (t = e.container.lastChild);
                            var o = n ? e.w : Math.round(e.w * e.fitRatio),
                                i = n ? e.h : Math.round(e.h * e.fitRatio);
                            e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px", e.placeholder.style.height = i + "px"), t.style.width = o + "px", t.style.height = i + "px"
                        }
                    },
                    cn = function() {
                        if (en.length) {
                            for (var e, t = 0; t < en.length; t++) e = en[t], e.holder.index === e.index && an(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                            en = []
                        }
                    };
                Ce("Controller", {
                    publicMethods: {
                        lazyLoadItem: function(e) {
                            e = Ee(e);
                            var t = Vt(e);
                            t && (!t.loaded && !t.loading || x) && (Oe("gettingData", e, t), t.src && ln(t))
                        },
                        initController: function() {
                            i.extend(a, tn, !0), r.items = qt = n, Vt = r.getItemAt, Xt = a.getNumItemsFn, $t = a.loop, Xt() < 3 && (a.loop = !1), Te("beforeChange", function(e) {
                                var t, n = a.preload,
                                    o = null === e || e >= 0,
                                    i = Math.min(n[0], Xt()),
                                    l = Math.min(n[1], Xt());
                                for (t = 1; t <= (o ? l : i); t++) r.lazyLoadItem(c + t);
                                for (t = 1; t <= (o ? i : l); t++) r.lazyLoadItem(c - t)
                            }), Te("initialLayout", function() { r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c) }), Te("mainScrollAnimComplete", cn), Te("initialZoomInEnd", cn), Te("destroy", function() {
                                for (var e, t = 0; t < qt.length; t++) e = qt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                                en = null
                            })
                        },
                        getItemAt: function(e) { return e >= 0 && (void 0 !== qt[e] && qt[e]) },
                        allowProgressiveImg: function() { return a.forceProgressiveLoading || !M || a.mouseUsed || screen.width > 1200 },
                        setContent: function(e, t) {
                            a.loop && (t = Ee(t));
                            var n = r.getItemAt(e.index);
                            n && (n.container = null);
                            var o, s = r.getItemAt(t);
                            if (!s) return void(e.el.innerHTML = "");
                            Oe("gettingData", t, s), e.index = t, e.item = s;
                            var u = s.container = i.createEl("pswp__zoom-wrap");
                            if (!s.src && s.html && (s.html.tagName ? u.appendChild(s.html) : u.innerHTML = s.html), sn(s), rn(s, me), !s.src || s.loadError || s.loaded) s.src && !s.loadError && (o = i.createEl("pswp__img", "img"), o.style.opacity = 1, o.src = s.src, un(s, o), an(0, s, u, o));
                            else {
                                if (s.loadComplete = function(n) {
                                        if (l) {
                                            if (e && e.index === t) {
                                                if (sn(n, !0)) return n.loadComplete = n.img = null, rn(n, me), Fe(n), void(e.index === c && r.updateCurrZoomItem());
                                                n.imageAppended ? !Yt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : L.transform && (oe || Yt) ? en.push({ item: n, baseDiv: u, img: n.img, index: t, holder: e, clearPlaceholder: !0 }) : an(0, n, u, n.img, 0, !0)
                                            }
                                            n.loadComplete = null, n.img = null, Oe("imageLoadComplete", t, n)
                                        }
                                    }, i.features.transform) {
                                    var p = "pswp__img pswp__img--placeholder";
                                    p += s.msrc ? "" : " pswp__img--placeholder--blank";
                                    var d = i.createEl(p, s.msrc ? "img" : "");
                                    s.msrc && (d.src = s.msrc), un(s, d), u.appendChild(d), s.placeholder = d
                                }
                                s.loading || ln(s), r.allowProgressiveImg() && (!Gt && L.transform ? en.push({ item: s, baseDiv: u, img: s.img, index: t, holder: e }) : an(0, s, u, s.img, 0, !0))
                            }
                            Gt || t !== c ? Fe(s) : (ne = u.style, Jt(s, o || s.img)), e.el.innerHTML = "", e.el.appendChild(u)
                        },
                        cleanSlide: function(e) { e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1 }
                    }
                });
                var pn, dn = {},
                    fn = function(e, t, n) {
                        var o = document.createEvent("CustomEvent"),
                            i = { origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch" };
                        o.initCustomEvent("pswpTap", !0, !0, i), e.target.dispatchEvent(o)
                    };
                Ce("Tap", {
                    publicMethods: {
                        initTap: function() { Te("firstTouchStart", r.onTapStart), Te("touchRelease", r.onTapRelease), Te("destroy", function() { dn = {}, pn = null }) },
                        onTapStart: function(e) { e.length > 1 && (clearTimeout(pn), pn = null) },
                        onTapRelease: function(e, t) {
                            if (t && !Y && !q && !$e) {
                                var n = t;
                                if (pn && (clearTimeout(pn), pn = null, gt(n, dn))) return void Oe("doubleTap", n);
                                if ("mouse" === t.type) return void fn(e, t, "mouse");
                                if ("BUTTON" === e.target.tagName.toUpperCase() || i.hasClass(e.target, "pswp__single-tap")) return void fn(e, t);
                                Ne(dn, n), pn = setTimeout(function() { fn(e, t), pn = null }, 300)
                            }
                        }
                    }
                });
                var mn;
                Ce("DesktopZoom", {
                    publicMethods: {
                        initDesktopZoom: function() { R || (M ? Te("mouseUsed", function() { r.setupDesktopZoom() }) : r.setupDesktopZoom(!0)) },
                        setupDesktopZoom: function(t) {
                            mn = {};
                            var n = "wheel mousewheel DOMMouseScroll";
                            Te("bindEvents", function() { i.bind(e, n, r.handleMouseWheel) }), Te("unbindEvents", function() { mn && i.unbind(e, n, r.handleMouseWheel) }), r.mouseZoomedIn = !1;
                            var o, a = function() { r.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), v < 1 ? i.addClass(e, "pswp--zoom-allowed") : i.removeClass(e, "pswp--zoom-allowed"), l() },
                                l = function() { o && (i.removeClass(e, "pswp--dragging"), o = !1) };
                            Te("resize", a), Te("afterChange", a), Te("pointerDown", function() { r.mouseZoomedIn && (o = !0, i.addClass(e, "pswp--dragging")) }), Te("pointerUp", l), t || a()
                        },
                        handleMouseWheel: function(e) {
                            if (v <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || $e || H ? e.preventDefault() : S && Math.abs(e.deltaY) > 2 && (u = !0, r.close())), !0;
                            if (e.stopPropagation(), mn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (mn.x = 18 * e.deltaX, mn.y = 18 * e.deltaY) : (mn.x = e.deltaX, mn.y = e.deltaY);
                            else if ("wheelDelta" in e) e.wheelDeltaX && (mn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? mn.y = -.16 * e.wheelDeltaY : mn.y = -.16 * e.wheelDelta;
                            else {
                                if (!("detail" in e)) return;
                                mn.y = e.detail
                            }
                            Ke(v, !0);
                            var t = fe.x - mn.x,
                                n = fe.y - mn.y;
                            (a.modal || t <= te.min.x && t >= te.max.x && n <= te.min.y && n >= te.max.y) && e.preventDefault(), r.panTo(t, n)
                        },
                        toggleDesktopZoom: function(t) {
                            t = t || { x: me.x / 2 + ve.x, y: me.y / 2 + ve.y };
                            var n = a.getDoubleTapZoom(!0, r.currItem),
                                o = v === n;
                            r.mouseZoomedIn = !o, r.zoomTo(o ? r.currItem.initialZoomLevel : n, t, 333), i[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                        }
                    }
                });
                var hn, vn, yn, wn, gn, bn, xn, _n, Cn, En, In, Tn, On = { history: !0, galleryUID: 1 },
                    Sn = function() { return In.hash.substring(1) },
                    Dn = function() { hn && clearTimeout(hn), yn && clearTimeout(yn) },
                    Mn = function() {
                        var e = Sn(),
                            t = {};
                        if (e.length < 5) return t;
                        var n, o = e.split("&");
                        for (n = 0; n < o.length; n++)
                            if (o[n]) {
                                var i = o[n].split("=");
                                i.length < 2 || (t[i[0]] = i[1])
                            }
                        if (a.galleryPIDs) {
                            var r = t.pid;
                            for (t.pid = 0, n = 0; n < qt.length; n++)
                                if (qt[n].pid === r) { t.pid = n; break }
                        } else t.pid = parseInt(t.pid, 10) - 1;
                        return t.pid < 0 && (t.pid = 0), t
                    },
                    Pn = function() {
                        if (yn && clearTimeout(yn), $e || H) return void(yn = setTimeout(Pn, 500));
                        wn ? clearTimeout(vn) : wn = !0;
                        var e = c + 1,
                            t = Vt(c);
                        t.hasOwnProperty("pid") && (e = t.pid);
                        var n = xn + "&gid=" + a.galleryUID + "&pid=" + e;
                        _n || -1 === In.hash.indexOf(n) && (En = !0);
                        var o = In.href.split("#")[0] + "#" + n;
                        Tn ? "#" + n !== window.location.hash && history[_n ? "replaceState" : "pushState"]("", document.title, o) : _n ? In.replace(o) : In.hash = n, _n = !0, vn = setTimeout(function() { wn = !1 }, 60)
                    };
                Ce("History", {
                    publicMethods: {
                        initHistory: function() {
                            if (i.extend(a, On, !0), a.history) {
                                In = window.location, En = !1, Cn = !1, _n = !1, xn = Sn(), Tn = "pushState" in history, xn.indexOf("gid=") > -1 && (xn = xn.split("&gid=")[0], xn = xn.split("?gid=")[0]), Te("afterChange", r.updateURL), Te("unbindEvents", function() { i.unbind(window, "hashchange", r.onHashChange) });
                                var e = function() { bn = !0, Cn || (En ? history.back() : xn ? In.hash = xn : Tn ? history.pushState("", document.title, In.pathname + In.search) : In.hash = ""), Dn() };
                                Te("unbindEvents", function() { u && e() }), Te("destroy", function() { bn || e() }), Te("firstUpdate", function() { c = Mn().pid });
                                var t = xn.indexOf("pid=");
                                t > -1 && (xn = xn.substring(0, t), "&" === xn.slice(-1) && (xn = xn.slice(0, -1))), setTimeout(function() { l && i.bind(window, "hashchange", r.onHashChange) }, 40)
                            }
                        },
                        onHashChange: function() {
                            if (Sn() === xn) return Cn = !0, void r.close();
                            wn || (gn = !0, r.goTo(Mn().pid), gn = !1)
                        },
                        updateURL: function() { Dn(), gn || (_n ? hn = setTimeout(Pn, 800) : Pn()) }
                    }
                }), i.extend(r, nt)
            }
        })
    }, function(e, t) {
        var n;
        n = function() { return this }();
        try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) }
        e.exports = n
    }])
});
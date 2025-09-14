(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    42634: () => {},
    18395: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 98176)),
        Promise.resolve().then(a.bind(a, 61934)),
        Promise.resolve().then(a.bind(a, 15042)),
        Promise.resolve().then(a.t.bind(a, 68563, 23)),
        Promise.resolve().then(a.t.bind(a, 28777, 23)),
        Promise.resolve().then(a.t.bind(a, 81315, 23));
    },
    93317: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => i });
      var r = a(95155),
        s = a(76535);
      let i = (e) => {
        let t = {
          primary:
            "bg-gradient-to-r from-[#b2ff6a] to-[#4deff9] text-black shadow-md",
          bordered: "border-[#caff70] text-[#caff70]",
          borderedWhite: "border-1 border-white/30 text-white bg-transparent",
          white: "border bg-white text-black border-white transition",
          small: "text-xs px-3 py-1 rounded-md",
          dark: "bg-[#111315] text-white border border-[#23223A] hover:bg-[#181A20] transition-colors",
          purple:
            "bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] text-white shadow-md hover:opacity-90 transition-opacity",
          gradient:
            "bg-gradient-to-r from-[#43e97b] via-[#38f9d7] to-[#15c3f7] text-white shadow-lg hover:opacity-90 transition-opacity",
          neon: "bg-[#59FF7F] text-black shadow-md flex items-center gap-3",
          upload:
            "bg-transparent border border-[#1BFF4A] text-[#1BFF4A] hover:bg-[#1BFF4A] hover:text-black transition",
          addLiquidity:
            "bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold text-base shadow-lg hover:from-green-400 hover:to-teal-300 transition disabled:opacity-60 disabled:cursor-not-allowed",
        };
        return (0, r.jsxs)(s.T, {
          ...e,
          color: "primary" === e.variant ? "primary" : void 0,
          variant: "bordered" === e.variant ? "bordered" : void 0,
          className: ""
            .concat(
              "font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 relative overflow-hidden group",
              " "
            )
            .concat("small" === e.variant ? t.small : t[e.variant], " ")
            .concat(e.className, " ")
            .concat(
              e.disabled
                ? "bg-[#23223A] text-neutral-400 border border-[#23223A] cursor-not-allowed hover:bg-[#23223A] "
                : ""
            ),
          children: [
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "pointer-events-none absolute top-[-50px] left-[-50%] w-[50px] h-[155px] rotate-[35deg] bg-white opacity-0 group-hover:left-[120%] group-hover:opacity-50 transition-all duration-[3000ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                }),
                (0, r.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "pointer-events-none absolute top-[-50px] left-[-100%] w-[8rem] h-[20rem] rotate-[35deg] bg-white opacity-0 group-hover:left-[200%] group-hover:opacity-60 transition-all duration-[3000ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                }),
              ],
            }),
            e.leftIcon &&
              (0, r.jsx)("span", {
                className:
                  "flex items-center justify-center w-8 h-8 rounded-full",
                children: e.leftIcon,
              }),
            e.children,
          ],
        });
      };
    },
    98176: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => u, Providers: () => x });
      var r = a(95155),
        s = a(12115),
        i = a(91999),
        o = a(76046),
        n = a(67113),
        l = a(7831),
        c = a(76535),
        d = a(5565);
      let h = {
        src: "/_next/static/media/close.149bc839.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
      var b = a(18423);
      let p = (0, s.forwardRef)((e, t) => {
        let a = (0, b.U)(960),
          i = (e) =>
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(c.T, {
                isIconOnly: !0,
                size: "sm",
                variant: "light",
                onPress: () => {
                  (0, l.mk)(e);
                },
                children: (0, r.jsx)(d.default, { alt: "Close", src: h }),
              }),
            });
        return (
          (0, s.useImperativeHandle)(t, () => ({
            push: (e) => {
              (0, l.M8)({
                message: (0, r.jsx)("span", {
                  style: {
                    maxWidth: a ? 300 : 500,
                    wordWrap: "break-word",
                    whiteSpace: "break-spaces",
                    height: "fit-content",
                  },
                  children:
                    "string" == typeof e.children
                      ? e.children.slice(0, 500)
                      : e.children,
                }),
                variant: e.variant,
                autoHideDuration: e.timeout || 5e3,
                preventDuplicate: !0,
                action: i,
              });
            },
          })),
          (0, r.jsx)(s.Fragment, {})
        );
      });
      var m = {};
      let u = {
        push: (e) => {
          m && m.push && m.push(e);
        },
      };
      function x(e) {
        let { children: t, themeProps: a } = e,
          s = (0, o.useRouter)();
        return (0, r.jsx)(i.M, {
          navigate: s.push,
          children: (0, r.jsxs)(n.N, {
            ...a,
            children: [
              (0, r.jsx)(l.n, {
                anchorOrigin: { horizontal: "left", vertical: "bottom" },
              }),
              t,
              (0, r.jsx)(p, {
                ref: (e) => {
                  m = e;
                },
              }),
            ],
          }),
        });
      }
    },
    61934: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var r = a(95155),
        s = a(90908),
        i = a(95408),
        o = a(37725);
      class n {
        setGlobalLoading(e) {
          this.isGlobalLoading = e;
        }
        showGlobalLoading() {
          this.isGlobalLoading = !0;
        }
        hideGlobalLoading() {
          this.isGlobalLoading = !1;
        }
        async fetchBNBPrice() {
          try {
            let e = await fetch(
                "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
              ),
              t = await e.json();
            this.baseTokens[i.jR.WBNB].price = +t.price || 0;
          } catch (e) {
            console.error("Failed to fetch BNB price:", e),
              (this.baseTokens[i.jR.WBNB].price = 0);
          }
        }
        constructor() {
          (this.isInitialized = !1),
            (this.isShowRequestSignaturePopup = !1),
            (this.isGlobalLoading = !1),
            (this.totalStaked = 0),
            (this.isFollowedX = !0),
            (this.baseTokens = {
              [i.jR.WBNB]: {
                symbol: "tBNB",
                price: 0,
                decimals: 18,
                raisedAmount: 88,
                maxBuy: 0,
                maxBuyEachTx: 2,
                isStakePointToIncreaseLimit: !0,
              },
              [i.jR.XCX]: {
                symbol: "XCX",
                price: 0.0143,
                decimals: 18,
                raisedAmount: 4e6,
                maxBuy: 0,
                maxBuyEachTx: 1e6,
                isStakePointToIncreaseLimit: !0,
              },
            }),
            (this.currentTokenPriceMap = {}),
            (0, o.l_)(this);
        }
      }
      let l = new n(),
        c = (0, s.PA)(() =>
          l.isGlobalLoading
            ? (0, r.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md transition-all duration-300",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center space-y-6 p-8 rounded-2xl bg-black/50 border border-white/10 w-[250px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "absolute inset-0 w-16 h-16 border-4 border-transparent border-t-white/30 rounded-full animate-spin",
                          style: {
                            animationDirection: "reverse",
                            animationDuration: "1.5s",
                          },
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "text-white text-xl font-semibold tracking-wide",
                      children: "Please wait...",
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex space-x-2",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-3 h-3 bg-white rounded-full animate-bounce",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "w-3 h-3 bg-white rounded-full animate-bounce",
                          style: { animationDelay: "0.1s" },
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "w-3 h-3 bg-white rounded-full animate-bounce",
                          style: { animationDelay: "0.2s" },
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null
        );
    },
    15042: (e, t, a) => {
      "use strict";
      a.d(t, { Navbar: () => k });
      var r = a(95155),
        s = a(93317),
        i = a(62474),
        o = a(36205),
        n = a(43779),
        l = a(68126),
        c = a(16483),
        d = a(40767),
        h = a(86710),
        b = a(90908),
        p = a(5565),
        m = a(67396),
        u = a(76046),
        x = a(12115),
        f = a(18423),
        g = a(95408);
      let w = [
          {
            name: "HOME",
            href: g.fo.HOME,
            icon: (e) => {
              let { size: t = 24, width: a, height: s, ...i } = e;
              return (0, r.jsxs)("svg", {
                width: t || a,
                height: t || s,
                viewBox: "0 0 17 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...i,
                children: [
                  (0, r.jsx)("path", {
                    d: "M10.7451 14V8.66667C10.7451 8.48986 10.6749 8.32029 10.5499 8.19526C10.4248 8.07024 10.2553 8 10.0785 8H7.41178C7.23497 8 7.0654 8.07024 6.94038 8.19526C6.81536 8.32029 6.74512 8.48986 6.74512 8.66667V14",
                    stroke: "currentColor",
                    strokeWidth: "1.33333",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, r.jsx)("path", {
                    d: "M2.74512 6.66673C2.74507 6.47277 2.78734 6.28114 2.86898 6.1052C2.95061 5.92927 3.06965 5.77326 3.21778 5.64806L7.88445 1.64873C8.12511 1.44533 8.43002 1.33374 8.74512 1.33374C9.06021 1.33374 9.36513 1.44533 9.60578 1.64873L14.2725 5.64806C14.4206 5.77326 14.5396 5.92927 14.6213 6.1052C14.7029 6.28114 14.7452 6.47277 14.7451 6.66673V12.6667C14.7451 13.0203 14.6046 13.3595 14.3546 13.6095C14.1045 13.8596 13.7654 14.0001 13.4118 14.0001H4.07845C3.72483 14.0001 3.38569 13.8596 3.13564 13.6095C2.88559 13.3595 2.74512 13.0203 2.74512 12.6667V6.66673Z",
                    stroke: "currentColor",
                    strokeWidth: "1.33333",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              });
            },
          },
          {
            name: "MARKETPLACE",
            href: g.fo.MARKET_PLACE,
            icon: (e) => {
              let { size: t = 24, width: a, height: s, ...i } = e;
              return (0, r.jsxs)("svg", {
                width: t || a,
                height: t || s,
                viewBox: "0 0 17 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...i,
                children: [
                  (0, r.jsx)("path", {
                    d: "M4.74512 1.33325L2.74512 3.99992V13.3333C2.74512 13.6869 2.88559 14.026 3.13564 14.2761C3.38569 14.5261 3.72483 14.6666 4.07845 14.6666H13.4118C13.7654 14.6666 14.1045 14.5261 14.3546 14.2761C14.6046 14.026 14.7451 13.6869 14.7451 13.3333V3.99992L12.7451 1.33325H4.74512Z",
                    stroke: "currentColor",
                    strokeWidth: "1.33333",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, r.jsx)("path", {
                    d: "M2.74512 4H14.7451",
                    stroke: "currentColor",
                    strokeWidth: "1.33333",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, r.jsx)("path", {
                    d: "M11.4119 6.66675C11.4119 7.37399 11.131 8.05227 10.6309 8.55237C10.1308 9.05246 9.45252 9.33341 8.74528 9.33341C8.03804 9.33341 7.35976 9.05246 6.85966 8.55237C6.35956 8.05227 6.07861 7.37399 6.07861 6.66675",
                    stroke: "currentColor",
                    strokeWidth: "1.33333",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              });
            },
            isExternal: !0,
          },
          { name: "VESTING", href: g.fo.VESTING, icon: l.A, isExternal: !0 },
          { name: "STAKING", href: g.fo.STAKING, icon: c.A, isExternal: !0 },
        //   { name: "CONTACT", href: g.fo.CONTACT, icon: c.A, isExternal: !0 },
        ],
        v = [
          {
            href: g.B2.x,
            src: "/images/twitter2.png",
            alt: "Twitter",
            ariaLabel: "Twitter",
          },
          {
            href: g.B2.telegram,
            src: "/images/telegram2.png",
            alt: "Telegram",
            ariaLabel: "Telegram",
          },
        //   {
        //     href: g.B2.discord,
        //     src: "/images/discord2.png",
        //     alt: "Discord",
        //     ariaLabel: "Discord",
        //   },
        ],
        j = (e) => {
          let { href: t, src: a, alt: s, ariaLabel: i } = e;
          return (0, r.jsx)("a", {
            href: t,
            target: "_blank",
            className:
              "rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors",
            "aria-label": i,
            children: (0, r.jsx)("img", {
              src: a,
              alt: s,
              style: { width: 14, minWidth: 14 },
            }),
          });
        },
        N = (0, b.PA)(() => {
          let e = (0, u.usePathname)(),
            [t, a] = (0, x.useState)(!1),
            [l, c] = (0, x.useState)(!1),
            b = (0, u.useSearchParams)();
          b.get("callbackError"), b.get("scroll");
          let N = (0, f.U)(768),
            k = (e, t) => {
              t ? window.open(e, "_self") : (0, u.redirect)(e);
            };
          return (0, r.jsxs)(i.H, {
            position: "static",
            style: { backdropFilter: "blur(0px)" },
            maxWidth: "2xl",
            className: "bg-transparent ".concat(
              l ? "backdrop-blur-md" : "backdrop-blur-none",
              " "
            ),
            children: [
              (0, r.jsxs)(o.t, {
                className: "flex basis-1/5 sm:basis-full",
                justify: "start",
                children: [
                  (0, r.jsx)(m.default, {
                    className: "flex justify-start items-center gap-1",
                    href: "/",
                    children: (0, r.jsx)("div", {
                      className: "flex items-center gap-3",
                      children: (0, r.jsx)("img", {
                        src: "/images/logo.png",
                        alt: "Logo",
                        width: 30,
                        style: { width: 30 },
                        className: "rounded-sm",
                      }),
                    }),
                  }),
                  (0, r.jsx)("nav", {
                    className:
                      "hidden lg:flex gap-8 ml-8 w-full flex-1 justify-start",
                    children: w.map((t) =>
                      (0, r.jsx)(
                        n.p,
                        {
                          children: (0, r.jsx)("button", {
                            className:
                              "flex py-2 items-center gap-1 transition-colors ".concat(
                                e === t.href
                                  ? "text-white border-b-2 border-green-500"
                                  : "text-gray-400 hover:text-white"
                              ),
                            onClick: () => k(t.href, t.isExternal),
                            children: (0, r.jsx)("span", {
                              className: "text-md font-semibold",
                              children: t.name,
                            }),
                          }),
                        },
                        t.name
                      )
                    ),
                  }),
                ],
              }),
              (0, r.jsxs)(o.t, {
                justify: "end",
                className: "gap-4",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex gap-3 justify-center md:justify-start",
                    children: v.map((e) =>
                      (0, r.jsx)(
                        j,
                        {
                          href: e.href,
                          src: e.src,
                          alt: e.alt,
                          ariaLabel: e.ariaLabel,
                        },
                        e.ariaLabel
                      )
                    ),
                  }),
                  (0, r.jsx)(s.r, {
                    variant: "borderedWhite",
                    leftIcon: (0, r.jsx)(p.default, {
                      src: "/images/star.png",
                      width: 20,
                      height: 20,
                      alt: "star",
                    }),
                    onClick: () => k(g.fo.BUILD_AGENT, !0),
                    className: "px-4 pl-3",
                    children: (0, r.jsx)("span", {
                      className: "text-md font-semibold",
                      children: N ? "LAUNCH" : "LAUNCH YOUR AI INFLUENCER",
                    }),
                  }),
                  (0, r.jsx)("button", {
                    className:
                      "lg:hidden block p-2 text-gray-400 hover:text-white",
                    onClick: () => {
                      a(!t);
                    },
                    "aria-label": "Toggle mobile menu",
                    children: t
                      ? (0, r.jsx)(d.A, { size: 24 })
                      : (0, r.jsx)(h.A, { size: 24 }),
                  }),
                ],
              }),
              t &&
                (0, r.jsx)("div", {
                  className:
                    "lg:hidden block fixed inset-0 top-[64px] bg-black/95 backdrop-blur-sm z-50",
                  children: (0, r.jsx)("nav", {
                    className: "flex flex-col p-4 bg-black/95",
                    children: w.map((t) =>
                      (0, r.jsxs)(
                        "button",
                        {
                          className:
                            "flex py-4 items-center gap-3 text-lg ".concat(
                              e === t.href
                                ? "text-white border-l-4 border-green-500 pl-4"
                                : "text-gray-400 hover:text-white pl-4"
                            ),
                          onClick: () => {
                            k(t.href, t.isExternal);
                          },
                          children: [(0, r.jsx)(t.icon, { size: 24 }), t.name],
                        },
                        t.name
                      )
                    ),
                  }),
                }),
            ],
          });
        }),
        k = () => (0, r.jsx)(x.Suspense, { children: (0, r.jsx)(N, {}) });
    },
    95408: (e, t, a) => {
      "use strict";
      a.d(t, {
        jR: () => h,
        fo: () => b,
        B2: () => p,
        UD: () => u,
        U3: () => m,
        ok: () => d,
      });
      var r = a(82651),
        s = a(49113),
        i = a.n(s),
        o = a(51973);
      class n {
        constructor(e) {
          var t = this;
          (this.get = async function (e) {
            let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            try {
              return await t._agent.get(e, {
                params: a,
                paramsSerializer: (e) => o.stringify(e, { indices: !1 }),
              });
            } catch (e) {
              throw e;
            }
          }),
            (this.post = async function (e) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              try {
                return await t._agent.post(e, a);
              } catch (e) {
                if (e.response) throw e.response;
                throw e;
              }
            }),
            (this.postMultipart = async function (e) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              try {
                return await t._agent.post(e, a, {
                  headers: {
                    ...t._agent.defaults.headers.common,
                    "Content-type": "multipart/form-data",
                  },
                });
              } catch (e) {
                if (e.response) throw e.response;
                throw e;
              }
            }),
            (this.patch = async function (e) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              try {
                return await t._agent.patch(e, a);
              } catch (e) {
                if (e.response) throw e.response;
                throw e;
              }
            }),
            (this.put = async function (e) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              try {
                return await t._agent.put(e, a);
              } catch (e) {
                if (e.response) throw e.response;
                throw e;
              }
            }),
            (this.delete = async function (e) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              try {
                return await t._agent.delete(e, a);
              } catch (e) {
                if (e.response) throw e.response;
                throw e;
              }
            }),
            (this.setBaseURL = (e) => {
              this._agent.defaults.baseURL = e;
            }),
            (this.setHeader = (e, t) => {
              this._agent.defaults.headers.common[e] = t;
            }),
            (this.setWalletSignature = (e) => {
              this._agent.defaults.headers.common.walletsignature = "".concat(
                e
              );
            }),
            (this.clearToken = () => {
              delete this._agent.defaults.headers.common.walletsignature;
            }),
            (this._agent = r.A.create(e)),
            this._agent.interceptors.response.use((e) => ({
              ...e,
              data: e.data,
            }));
        }
      }
      n.buildParams = (e) => {
        let t = [];
        return (
          i().isObject(e) &&
            Object.keys(e).forEach((a) => {
              let r = e[a];
              null == r && (r = ""),
                i().isArray(r) && (r = r.join(",")),
                t.push("".concat(a, "=").concat(r));
            }),
          t.length > 0 ? "".concat(t.join("&")) : ""
        );
      };
      var l = a(53453),
        c = a(9736);
      let d = new n({ baseURL: "https://xeleb-api.xeleb.xyz" }),
        h = {
          WBNB: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
          XCX: "0x3b3ee389bd4459c056a7301e99751fb063378201",
          USDT: "0xb974a2e233b5df6acbf0e60bfeb5015c9d6077fb",
          STAKING: "0x38526e8c9404bb030bb8b239af85f5d57b1ba4ca",
          AIRDROP: "0x6278e1715d9ca89656e2998c16a32c480fd19806",
          CONTROLLER: "",
          VESTING: "",
          MULTICALL: {
            BSC: {
              NAME: "BSC",
              CHAIN_ID_HEX: "0x38",
              CHAIN_ID: 56,
              RPC: "https://bsc-dataseed.binance.org",
              EXPLORER: "https://bscscan.com",
              MULTICALL: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 0xf2f12c,
              },
              particleNetwork: l.N,
              viemNetwork: l.N,
            },
            BSC_TESTNET: {
              NAME: "BSC Testnet",
              CHAIN_ID_HEX: "0x61",
              CHAIN_ID: 97,
              RPC: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
              EXPLORER: "https://testnet.bscscan.com",
              MULTICALL: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 0x109d893,
              },
              particleNetwork: c.c,
              viemNetwork: c.c,
            },
          }.BSC_TESTNET.MULTICALL.address,
        },
        b = {
          BUILD_AGENT: "https://xelebapp.vercel.app/build-agent",
          HOME: "#",
          MARKET_PLACE: "https://xelebapp.vercel.app/",
          VESTING: "https://xelebapp.vercel.app/vesting",
          STAKING: "https://xelebapp.vercel.app/staking",
          SKIN_ANALYSIS: "https://missai.tech/en",
          VIEW_ALL: "https://xeleb.gitbook.io/xeleb-protocol",
          NEWS_UPDATE:
            "https://www.bnbchain.org/en/blog/newest-dapps-on-bnb-chain-june-19-25 ",
          TERMS_OF_USE: "https://xelebapp.vercel.app/policies/term-of-use",
          PRIVACY: "https://xelebapp.vercel.app/policies/privacy",
          VIEW_MORE: "https://xelebapp.vercel.app/token/",
          CONTACT: "/contact",
        },
        p = {
          x: "https://x.com",
          telegram: "https://t.me",
          facebook: "https://www.facebook.com/xelebofficial",
          instagram: "https://www.instagram.com/xelebofficial",
          linkedin: "https://www.linkedin.com/company/xelebofficial/ ",
        //   discord: "https://discord.gg/BkcjkmFyXD",
        },
        m = "0xTBA",
        u =
          "https://github.com/verichains/public-audit-reports/blob/1fa1ec8cdebd542c229044e0a5315d20e3c80159/Verichains%20Public%20Audit%20Report%20-%20Xeleb%20Protocol%20-%20v1.0.pdf";
    },
    18423: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => s });
      var r = a(12115);
      let s = (e) => {
        let [t, a] = (0, r.useState)(!1),
          s = (0, r.useCallback)((e) => {
            e.matches ? a(!0) : a(!1);
          }, []);
        return (
          (0, r.useEffect)(() => {
            let t = window.matchMedia("(max-width: ".concat(e, "px)"));
            return (
              t.addListener(s), t.matches && a(!0), () => t.removeListener(s)
            );
          }, []),
          t
        );
      };
    },
    68563: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [306, 639, 935, 866, 376, 675, 441, 517, 358], () => t(18395)),
      (_N_E = e.O());
  },
]);

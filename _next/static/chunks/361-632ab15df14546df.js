(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [361],
  {
    42634: () => {},
    93317: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => l });
      var s = a(95155),
        r = a(76535);
      let l = (e) => {
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
        return (0, s.jsxs)(r.T, {
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
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "pointer-events-none absolute top-[-50px] left-[-50%] w-[50px] h-[155px] rotate-[35deg] bg-white opacity-0 group-hover:left-[120%] group-hover:opacity-50 transition-all duration-[3000ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                }),
                (0, s.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "pointer-events-none absolute top-[-50px] left-[-100%] w-[8rem] h-[20rem] rotate-[35deg] bg-white opacity-0 group-hover:left-[200%] group-hover:opacity-60 transition-all duration-[3000ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
                }),
              ],
            }),
            e.leftIcon &&
              (0, s.jsx)("span", {
                className:
                  "flex items-center justify-center w-8 h-8 rounded-full",
                children: e.leftIcon,
              }),
            e.children,
          ],
        });
      };
    },
    1416: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => g });
      var s = a(95155),
        r = a(18423),
        l = a(90908),
        i = a(5565),
        n = a(12115),
        o = a(93317),
        c = a(95408),
        d = a(98176);
      let h = (e) => {
          let { href: t, children: a } = e;
          return (0, s.jsx)("a", {
            href: t,
            className: "block text-white hover:text-gray-300 transition-colors",
            tabIndex: 0,
            "aria-label": "string" == typeof a ? a : void 0,
            onKeyDown: (e) => {
              ("Enter" === e.key || " " === e.key) &&
                (window.location.href = t);
            },
            children: a,
          });
        },
        x = (e) => {
          let { href: t, src: a, alt: r, ariaLabel: l } = e;
          return (0, s.jsx)("a", {
            href: t,
            target: "_blank",
            className:
              "rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors",
            "aria-label": l,
            tabIndex: 0,
            onKeyDown: (e) => {
              ("Enter" === e.key || " " === e.key) &&
                (window.location.href = t);
            },
            children: (0, s.jsx)("img", {
              src: a,
              alt: r,
              style: { width: 26, height: 26 },
            }),
          });
        },
        p = [
          { href: c.fo.BUILD_AGENT, label: "Launch" },
          { href: c.fo.MARKET_PLACE, label: "Marketplace" },
          { href: c.fo.VESTING, label: "Vesting" },
          { href: c.fo.STAKING, label: "Staking" },
        ],
        m = [
          { href: c.fo.TERMS_OF_USE, label: "Terms of Use" },
          { href: c.fo.PRIVACY, label: "Privacy Policy" },
          { href: c.fo.VIEW_ALL, label: "FAQs" },
        ],
        f = [
          {
            href: c.B2.x,
            src: "/images/twitter.png",
            alt: "Twitter",
            ariaLabel: "Twitter",
          },
          {
            href: c.B2.telegram,
            src: "/images/telegram.png",
            alt: "Telegram",
            ariaLabel: "Telegram",
          },
        //   {
        //     href: c.B2.discord,
        //     src: "/images/discord.png",
        //     alt: "Discord",
        //     ariaLabel: "Discord",
        //   },
        ],
        b = [
        //   {
        //     href: c.B2.facebook,
        //     src: "/images/facebook.png",
        //     alt: "Facebook",
        //     ariaLabel: "Facebook",
        //   },
        //   {
        //     href: c.B2.instagram,
        //     src: "/images/instagram.png",
        //     alt: "Instagram",
        //     ariaLabel: "Instagram",
        //   },
        //   {
        //     href: c.B2.linkedin,
        //     src: "/images/linkedin.png",
        //     alt: "LinkedIn",
        //     ariaLabel: "LinkedIn",
        //   },
        ],
        g = (0, l.PA)((e) => {
          let {} = e;
          (0, r.U)(768), (0, r.U)(1024);
          let [t, a] = (0, n.useState)(""),
            l = () => {
              navigator.clipboard.writeText(c.U3),
                d.g.push({ children: "Coppy success!", variant: "success" });
            };
          return (0, s.jsxs)("div", {
            className:
              "w-full  text-white relative overflow-hidden border-t border-white/15 lg:pt-[30px]",
            style: {
              backgroundImage: "url('/images/footerBg.png')",
              backgroundSize: "auto auto",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            },
            children: [
              (0, s.jsx)("section", {
                className:
                  "w-full px-4 py-16 flex flex-col items-center justify-center",
                children: (0, s.jsx)("div", {
                  className:
                    "max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-8",
                }),
              }),
              (0, s.jsx)("section", {
                className:
                  "flex flex-col md:flex-row w-full px-4 py-8 md:py-12",
                children: (0, s.jsxs)("div", {
                  className:
                    "max-w-6xl mx-auto flex flex-col md:flex-row w-full gap-y-8 md:gap-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "w-full md:w-auto md:mr-8 flex-shrink-0 flex flex-col items-center md:items-start mb-8 md:mb-0",
                      children: [
                        (0, s.jsx)("div", {
                          className: "mb-6",
                          children: (0, s.jsx)(i.default, {
                            src: "/images/xelebLogo.png",
                            alt: "Xeleb Protocol",
                            width: 210,
                            height: 40,
                            className: "mb-4",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "text-base text-gray-400 space-y-2 text-center md:text-left",
                          children: [
                            (0, s.jsx)("p", {
                              children:
                                "19 Keppel Road #02-07, Jit Poh Building",
                            }),
                            (0, s.jsx)("p", { children: "Singapore 089058" }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex items-center justify-center md:justify-start gap-2 mt-4",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-xs",
                                  children: "Member of",
                                }),
                                (0, s.jsx)(i.default, {
                                  src: "/images/singaporeBusinessLogo.png",
                                  alt: "Singapore Business",
                                  width: 100,
                                  height: 30,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-wrap flex-row flex-1 gap-8 lg:gap-16 text-center lg:text-left justify-center lg:justify-end w-full",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-1 lg:flex-none min-w-[120px] flex-col items-center lg:items-start w-full lg:w-auto",
                          children: [
                            (0, s.jsx)("div", {
                              className: "mb-4",
                              children: (0, s.jsx)("h3", {
                                className:
                                  "text-base font-semibold text-gray-300 uppercase tracking-wider",
                                children: "[ NAVIGATE ]",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "space-y-3",
                              children: p.map((e) =>
                                (0, s.jsx)(
                                  h,
                                  { href: e.href, children: e.label },
                                  e.label
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-1 lg:flex-none min-w-[120px] flex-col items-center lg:items-start w-full lg:w-auto",
                          children: [
                            (0, s.jsx)("div", {
                              className: "mb-4",
                              children: (0, s.jsx)("h3", {
                                className:
                                  "text-base font-semibold text-gray-300 uppercase tracking-wider",
                                children: "[ LEGAL ]",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "space-y-3",
                              children: m.map((e) =>
                                (0, s.jsx)(
                                  h,
                                  { href: e.href, children: e.label },
                                  e.label
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-1 lg:flex-none min-w-[180px] flex-col items-center lg:items-start w-full lg:w-auto",
                          children: [
                            (0, s.jsx)("div", {
                              className: "mb-4",
                              children: (0, s.jsx)("h3", {
                                className:
                                  "text-base font-semibold text-gray-300 uppercase tracking-wider",
                                children: "[ SOCIAL ]",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "flex gap-3 justify-center md:justify-start",
                              children: f.map((e) =>
                                (0, s.jsx)(
                                  x,
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
                            (0, s.jsx)("div", {
                              className:
                                "flex gap-3 justify-center md:justify-start",
                              style: { marginTop: 5 },
                              children: b.map((e) =>
                                (0, s.jsx)(
                                  x,
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
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("section", {
                className: "w-full px-4 pt-16",
                children: (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center max-w-6xl mx-auto text-center",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-3xl lg:text-4xl font-bold mb-8",
                      children: "Create. Tokenize. Earn. In seconds.",
                    }),
                    (0, s.jsx)(o.r, {
                      variant: "neon",
                      className:
                        "text-sm sm:text-base md:text-lg font-light focus:outline-none px-2 pr-3 h-[60px]  min-w-[370px]",
                      "aria-label": "Launch your AI influencer now",
                      leftIcon: (0, s.jsx)("img", {
                        src: "/images/arrowRight.png",
                        alt: "Arrow Right",
                        className: "w-5 h-5",
                        "aria-hidden": "true",
                      }),
                      onClick: () => {
                        window.open(c.fo.BUILD_AGENT, "_self");
                      },
                      children: "LAUNCH YOUR AI INFLUENCER NOW",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("section", {
                className:
                  "w-full px-4 pt-10 pb-2 flex flex-col items-center justify-center",
                children: (0, s.jsxs)("div", {
                  className:
                    "max-w-6xl w-full flex flex-col md:flex-row gap-4 items-center justify-center",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-1 items-center rounded-xl border border-white/10 px-6 py-4 min-w-[320px] max-w-full md:max-w-[400px] mb-2 md:mb-0 h-[60px]",
                      style: { background: "transparent" },
                      children: [
                        (0, s.jsx)("span", {
                          className: "font-semibold text-white text-base mr-2",
                          children: "$XCX",
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "truncate text-xs text-gray-300 mr-2 select-all text-[14px] ",
                          children: c.U3,
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "ml-auto p-1 rounded hover:bg-gray-700 transition-colors",
                          "aria-label": "Copy contract address",
                          onClick: () => {
                            l();
                          },
                          children: (0, s.jsx)("img", {
                            src: "/images/coppy_image.png",
                            alt: "Copy",
                            className: "w-5 h-5",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-1 items-center rounded-xl border border-white/10 px-6 py-4 min-w-[320px] max-w-full md:max-w-[400px] justify-between h-[60px] max-h-[60px]",
                      style: { background: "transparent" },
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "font-semibold text-white text-base mr-2",
                              children: "Audited by",
                            }),
                            (0, s.jsx)("img", {
                              src: "/images/audit_verichains.png",
                              alt: "verichains",
                              className: "h-8 w-auto",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: c.UD,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-1 text-white transition-colors ml-4 text-[14px]",
                          color: "white",
                          children: [
                            "Discover More",
                            (0, s.jsx)("img", {
                              src: "/images/arrowRight2.png",
                              alt: "Arrow Right",
                              className: "w-4 h-4",
                              style: { width: 17, height: 8 },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "py-16 pb-4",
                children: (0, s.jsx)("span", {
                  className: "text-white text-center ",
                  children: "\xa9 2024 Xeleb. All rights reserved.",
                }),
              }),
            ],
          });
        });
    },
    98176: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => f, Providers: () => b });
      var s = a(95155),
        r = a(12115),
        l = a(91999),
        i = a(76046),
        n = a(67113),
        o = a(7831),
        c = a(76535),
        d = a(5565);
      let h = {
        src: "/_next/static/media/close.149bc839.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
      var x = a(18423);
      let p = (0, r.forwardRef)((e, t) => {
        let a = (0, x.U)(960),
          l = (e) =>
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(c.T, {
                isIconOnly: !0,
                size: "sm",
                variant: "light",
                onPress: () => {
                  (0, o.mk)(e);
                },
                children: (0, s.jsx)(d.default, { alt: "Close", src: h }),
              }),
            });
        return (
          (0, r.useImperativeHandle)(t, () => ({
            push: (e) => {
              (0, o.M8)({
                message: (0, s.jsx)("span", {
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
                action: l,
              });
            },
          })),
          (0, s.jsx)(r.Fragment, {})
        );
      });
      var m = {};
      let f = {
        push: (e) => {
          m && m.push && m.push(e);
        },
      };
      function b(e) {
        let { children: t, themeProps: a } = e,
          r = (0, i.useRouter)();
        return (0, s.jsx)(l.M, {
          navigate: r.push,
          children: (0, s.jsxs)(n.N, {
            ...a,
            children: [
              (0, s.jsx)(o.n, {
                anchorOrigin: { horizontal: "left", vertical: "bottom" },
              }),
              t,
              (0, s.jsx)(p, {
                ref: (e) => {
                  m = e;
                },
              }),
            ],
          }),
        });
      }
    },
    95408: (e, t, a) => {
      "use strict";
      a.d(t, {
        jR: () => h,
        fo: () => x,
        B2: () => p,
        UD: () => f,
        U3: () => m,
        ok: () => d,
      });
      var s = a(82651),
        r = a(49113),
        l = a.n(r),
        i = a(51973);
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
                paramsSerializer: (e) => i.stringify(e, { indices: !1 }),
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
            (this._agent = s.A.create(e)),
            this._agent.interceptors.response.use((e) => ({
              ...e,
              data: e.data,
            }));
        }
      }
      n.buildParams = (e) => {
        let t = [];
        return (
          l().isObject(e) &&
            Object.keys(e).forEach((a) => {
              let s = e[a];
              null == s && (s = ""),
                l().isArray(s) && (s = s.join(",")),
                t.push("".concat(a, "=").concat(s));
            }),
          t.length > 0 ? "".concat(t.join("&")) : ""
        );
      };
      var o = a(53453),
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
              particleNetwork: o.N,
              viemNetwork: o.N,
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
        x = {
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
          x: "https://x.com/xelebofficial",
          telegram: "https://t.me/XelebProtocol",
          facebook: "https://www.facebook.com/xelebofficial",
          instagram: "https://www.instagram.com/xelebofficial",
          linkedin: "https://www.linkedin.com/company/xelebofficial/ ",
        //   discord: "https://discord.gg/BkcjkmFyXD",
        },
        m = "0xTBA",
        f =
          "https://github.com/verichains/public-audit-reports/blob/1fa1ec8cdebd542c229044e0a5315d20e3c80159/Verichains%20Public%20Audit%20Report%20-%20Xeleb%20Protocol%20-%20v1.0.pdf";
    },
    18423: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => r });
      var s = a(12115);
      let r = (e) => {
        let [t, a] = (0, s.useState)(!1),
          r = (0, s.useCallback)((e) => {
            e.matches ? a(!0) : a(!1);
          }, []);
        return (
          (0, s.useEffect)(() => {
            let t = window.matchMedia("(max-width: ".concat(e, "px)"));
            return (
              t.addListener(r), t.matches && a(!0), () => t.removeListener(r)
            );
          }, []),
          t
        );
      };
    },
  },
]);

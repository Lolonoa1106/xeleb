(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    69393: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 39840));
    },
    39840: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => J });
      var i = a(95155),
        s = a(90908),
        n = a(12115),
        l = a(95408),
        r = a(18423),
        o = a(8586),
        c = a(16020),
        d = a(5565),
        x = a(93317);
      let m = (0, s.PA)(() => {
          (0, s.iz)(() => ({}));
          let e = (0, r.U)(768),
            t = (0, n.useRef)(null),
            a = (0, o.W)(t, { once: !1, margin: "-100px" }),
            m = (0, n.useRef)(null),
            p = (0, o.W)(m, { once: !1, margin: "-100px" }),
            u = (0, n.useRef)(null),
            h = (0, o.W)(u, { once: !1, margin: "-100px" }),
            g = (0, n.useRef)(null),
            f = (0, o.W)(g, { once: !1, margin: "-100px" }),
            w = (0, n.useRef)(null),
            b = (0, o.W)(w, { once: !1, margin: "-0px" });
          return (0, i.jsxs)(c.P.section, {
            ref: t,
            id: "dashboard",
            className:
              "w-full flex flex-col items-center  justify-center relative overflow-hidden min-h-[700px]",
            initial: { opacity: 0, y: 60 },
            animate: a ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
            transition: { duration: 0.8, type: "spring", stiffness: 60 },
            children: [
              (0, i.jsx)("img", {
                src: "/images/introBlockBg.png",
                alt: "Green background",
                className:
                  "absolute inset-0 w-full h-full  md:object-fill object-cover  z-0 pointer-events-none select-none",
                "aria-hidden": "true",
              }),
              (0, i.jsx)("div", {
                className:
                  "w-full flex justify-center relative z-10 mt-8 md:mb-[200px] mb-[100px] px-4",
                children: (0, i.jsx)("img", {
                  src: "/images/xelebBigText.png",
                  alt: "Xeleb Logo",
                  className:
                    "w-[350px] md:w-[500px] lg:w-[600px] xl:w-[950px] max-w-full",
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex w-full z-10 flex-wrap gap-4 flex-col-reverse md:flex-row md:items-end items-center justify-center px-2",
                children: [
                  (0, i.jsx)(c.P.div, {
                    ref: u,
                    initial: { opacity: 0, x: -60 },
                    animate: h ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 },
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 70,
                      delay: 0.1,
                    },
                    className: "flex flex-1 justify-end items-end",
                    children: (0, i.jsx)("img", {
                      src: "/images/introBlockWoman.png",
                      alt: "Futuristic woman illustration",
                      className: "w-[90%] max-w-[900px] drop-shadow-2xl",
                      draggable: "false",
                    }),
                  }),
                  (0, i.jsxs)(c.P.div, {
                    ref: m,
                    initial: { opacity: 0, x: 60 },
                    animate: p ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 },
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 70,
                      delay: 0.15,
                    },
                    className:
                      "flex flex-1 flex-col pt-4 md:pb-20 justify-start md:items-start items-center md:text-left text-center",
                    children: [
                      (0, i.jsxs)("h1", {
                        className:
                          "text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6 whitespace-pre-line font-base",
                        children: [
                          "Bring Your",
                          e ? " " : "\n",
                          "AI Influencers",
                          "\n",
                          "to Life",
                        ],
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-base md:text-lg text-white/80 mb-8 max-w-md md:text-left",
                        children:
                          "Xeleb Protocol is the ultimate AI Agent Influencer Hub - where AI delivers real utility.",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-base md:text-lg text-white/80 mb-8 max-w-md md:text-left",
                        children:
                          "Anyone can create, tokenize, and launch utility-driven AI influencers — no coding required.",
                      }),
                      (0, i.jsx)(c.P.div, {
                        ref: g,
                        initial: { opacity: 0, scale: 0.8 },
                        animate: f
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 },
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          stiffness: 120,
                          delay: 0.25,
                        },
                        className:
                          "w-full flex justify-center md:justify-start",
                        children: (0, i.jsx)(x.r, {
                          variant: "borderedWhite",
                          leftIcon: (0, i.jsx)(d.default, {
                            src: "/images/star.png",
                            width: 20,
                            height: 20,
                            alt: "star",
                          }),
                          onClick: () => {
                            window.open(l.fo.BUILD_AGENT, "_self");
                          },
                          children: "LAUNCH YOUR AI INFLUENCER",
                        }),
                      }),
                      (0, i.jsx)(c.P.div, {
                        ref: w,
                        className:
                          "flex flex-row gap-4 mt-6 items-center justify-center flex-wrap",
                        initial: { opacity: 0, y: 24 },
                        animate: b
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 24 },
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          stiffness: 80,
                          delay: 0.35,
                        },
                        children: [
                          "#ProofOfUtility",
                          "#NoCode",
                          "#Ownership",
                        ].map((e) =>
                          (0, i.jsx)(
                            "button",
                            {
                              className:
                                "px-5 h-[34px] py-2 rounded-full bg-[#1B1C1B]/80 text-white text-sm font-medium backdrop-blur  transition-all",
                              tabIndex: 0,
                              "aria-label": e.replace("#", ""),
                              onClick: () => {},
                              onKeyDown: () => {},
                              children: e,
                            },
                            e
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        p = "w-2 h-2 bg-[#D9D9D9]/50 rounded-sm absolute z-10",
        u = (e) => {
          let { children: t, style: a } = e;
          return (0, i.jsxs)("div", {
            className:
              "relative border border-dotted border-[rgba(255,255,255,0.15)] flex flex-col items-center  shadow-xl ",
            style: a,
            children: [
              (0, i.jsx)("div", {
                className: "".concat(p, " left-[-1px] top-[-1px] "),
              }),
              (0, i.jsx)("div", {
                className: "".concat(p, " right-[-1px] top-[-1px] "),
              }),
              (0, i.jsx)("div", {
                className: "".concat(p, " left-[-1px] bottom-[-1px] "),
              }),
              (0, i.jsx)("div", {
                className: "".concat(p, " right-[-1px] bottom-[-1px] "),
              }),
              t,
            ],
          });
        };
      var h = a(79001);
      a(24220);
      let g = { VOLUME: "VOLUME" },
        f = async (e) =>
          (await l.ok.get("/tokens/list?isXelebAgents=true", e)).data;
      var w = a(98176);
      a(4014).config({ EXPONENTIAL_AT: 200 });
      let b = (e) => {
          if (
            e.innerError &&
            e.innerError.message &&
            e.innerError.message.includes("rpc")
          ) {
            let t = e.innerError.message.match(/"message": "Error:(.+)",/gim);
            if (t && t.length > 0) return t[0];
          }
          if ("string" == typeof e) return e;
          let t = (e && e.data && e.data.message) || (e && e.message);
          return (
            "string" != typeof t &&
              (t = "Something wrong, please try again later"),
            t.toString()
          );
        },
        y = (e) => {
          let { width: t = 20, height: a = 20, className: s = "" } = e;
          return (0, i.jsxs)("svg", {
            width: t,
            height: a,
            viewBox: "0 0 24 24",
            fill: "none",
            className: s,
            children: [
              (0, i.jsx)("path", {
                d: "M13.75 6.75L19.25 12L13.75 17.25",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M19 12H4.75",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        v = () =>
          "https://picsum.photos/id/".concat(
            Math.floor(500 * Math.random()) + 1,
            "/500/800"
          );
      v(), v(), v(), v(), v(), v(), v(), v(), v(), v();
      let j = (e) =>
          "MISS AI" == e.name
            ? e.socialLinks.website
            : l.fo.VIEW_MORE + e.address,
        N = (0, s.PA)(() => {
          let e = (0, s.iz)(() => ({
            category: "all",
            page: 1,
            limit: 15,
            loading: !1,
            tokens: [],
            total: 0,
            setLoading(e) {
              this.loading = e;
            },
            async fetchTokens() {
              try {
                this.setLoading(!0);
                let e = await f({
                  page: this.page,
                  limit: this.limit,
                  sort: g.VOLUME,
                  topic: "all" !== this.category ? this.category : void 0,
                });
                (this.tokens = e.data), (this.total = e.total);
              } catch (e) {
                w.g.push({ children: b(e), variant: "error" });
              } finally {
                this.setLoading(!1);
              }
            },
          }));
          (0, n.useEffect)(() => {
            e.fetchTokens();
          }, []);
          let [t, a] = (0, h.E)(
            {
              loop: !0,
              mode: "snap",
              slides: { perView: "auto", spacing: 15 },
            },
            [
              (e) => {
                let t;
                let a = !1;
                function i() {
                  clearTimeout(t);
                }
                function s() {
                  clearTimeout(t),
                    a ||
                      (t = setTimeout(() => {
                        e.next();
                      }, 2e3));
                }
                e.on("created", () => {
                  e.container.addEventListener("mouseover", () => {
                    (a = !0), i();
                  }),
                    e.container.addEventListener("mouseout", () => {
                      (a = !1), s();
                    }),
                    s();
                }),
                  e.on("dragStarted", i),
                  e.on("animationEnded", s),
                  e.on("updated", s);
              },
            ]
          );
          return (0, i.jsxs)("div", {
            className:
              "w-full flex justify-center mt-28 relative overflow-hidden",
            tabIndex: 0,
            "aria-label": "Featured AI agents carousel",
            onKeyDown: (e) => {
              a.current &&
                ("ArrowLeft" === e.key && a.current.prev(),
                "ArrowRight" === e.key && a.current.next());
            },
            style: { outline: "none" },
            children: [
              (0, i.jsx)("div", {
                className:
                  "pointer-events-none absolute left-0 top-0 h-full w-[30%] z-20 bg-gradient-to-r from-black/80 to-transparent hidden sm:block",
              }),
              (0, i.jsx)("div", {
                className:
                  "pointer-events-none absolute right-0 top-0 h-full w-[30%] z-20 bg-gradient-to-l from-black/80 to-transparent",
              }),
              (0, i.jsx)("button", {
                className:
                  "hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full p-3 hover:bg-white/10 w-[50px] h-[50px] justify-center items-center z-30",
                onClick: () => {
                  var e;
                  return null === (e = a.current) || void 0 === e
                    ? void 0
                    : e.prev();
                },
                tabIndex: 0,
                "aria-label": "Previous agent",
                type: "button",
                children: (0, i.jsx)(y, {
                  className: "text-white w-8 h-8 rotate-180",
                }),
              }),
              (0, i.jsx)("button", {
                className:
                  "hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full w-[50px] h-[50px] justify-center items-center p-3 hover:bg-white/10 focus:outline-none z-30",
                onClick: () => {
                  var e;
                  return null === (e = a.current) || void 0 === e
                    ? void 0
                    : e.next();
                },
                tabIndex: 0,
                "aria-label": "Next agent",
                type: "button",
                children: (0, i.jsx)(y, { className: "text-white w-8 h-8" }),
              }),
              e.loading
                ? null
                : (0, i.jsx)("div", {
                    ref: t,
                    className: "keen-slider",
                    children: e.tokens.map((e, t) =>
                      (0, i.jsxs)(
                        "div",
                        {
                          className:
                            "keen-slider__slide text-left relative flex flex-col justify-end md:min-w-[370px] min-w-full max-w-[90vw] h-[500px] overflow-hidden border border-[#363535] bg-black/60",
                          tabIndex: 0,
                          "aria-label":
                            'Featured AI agent sample with profile preview"',
                          style: {
                            backgroundImage: "url(".concat(e.images[0], ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          },
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 z-0",
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-black/20 text-xs text-white font-medium backdrop-blur-sm select-none border border-white",
                              children: e.topics[0],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "relative z-10 p-5 flex flex-col gap-3",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "text-lg font-semibold text-white tracking-wide mb-1 line-clamp-1",
                                  children: e.name,
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "text-sm text-white/80 mb-4  line-clamp-2",
                                  children: e.desc,
                                }),
                                (0, i.jsx)("div", {
                                  className: "mt-auto",
                                  children: (0, i.jsx)(x.r, {
                                    variant: "borderedWhite",
                                    className: "px-3 pl-2 bg-black/30",
                                    leftIcon: (0, i.jsx)(d.default, {
                                      src: "/images/arrowUpRight.png",
                                      width: 20,
                                      height: 20,
                                      alt: "star",
                                    }),
                                    onClick: () => window.open(j(e)),
                                    children: "View More",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
            ],
          });
        });
      var k = a(44462),
        I = a.n(k);
      let A = [
          {
            icon: "/images/create.png",
            title: "Create",
            description:
              "Launch your AI Influencer with built-in personality, memory & real-world utility.",
            aria: "Launch your AI Influencer with built-in personality, memory & real-world utility.",
          },
          {
            icon: "/images/tokenize.png",
            title: "Tokenize",
            description:
              "Deploy on BNB with Proof-of-Utility - track usage, not just hype.",
            aria: "Deploy on BNB with Proof-of-Utility - track usage, not just hype.",
          },
          {
            icon: "/images/earn.png",
            title: "Earn",
            description:
              "Monetize from actual usage and interactions - no speculation needed.",
            aria: "Monetize from actual usage and interactions - no speculation needed.",
          },
        ],
        P = (e) => {
          let { icon: t, title: a, description: s, aria: l, idx: x } = e,
            m = (0, n.useRef)(null),
            [p, h] = (0, n.useState)(!1),
            g = (0, o.W)(m, { once: !1, margin: "-100px" }),
            f = (0, r.U)(768),
            w = (0, n.useRef)(null),
            b = (0, n.useRef)(0),
            y = () => {
              let e = m.current;
              e &&
                (b.current && cancelAnimationFrame(b.current),
                (w.current = null),
                f
                  ? (e.style.cssText +=
                      "\n        transform: scale(1) translateZ(0);\n        box-shadow: 0 8px 32px 0 rgba(0,0,0,0.15);\n      ")
                  : (e.style.cssText +=
                      "\n        --angle: 135deg;\n        transform: perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0);\n        box-shadow: 0 8px 32px 0 rgba(0,0,0,0.15);\n      "));
            };
          return (
            (0, n.useEffect)(
              () => () => {
                b.current && cancelAnimationFrame(b.current);
              },
              []
            ),
            (0, i.jsxs)(c.P.div, {
              ref: m,
              className:
                "".concat(
                  I().card,
                  " relative flex-1 bg-white/5 rounded-[12px] border border-white/20 shadow-lg flex flex-col items-center p-2 overflow-hidden backdrop-blur-lg md:w-[350px] w-full max-w-[calc(100vw-50px)] md:max-w-[420px] md:min-h-[450px] justify-center"
                ) + (p ? " focus-visible" : ""),
              tabIndex: 0,
              "aria-label": l,
              style: {
                willChange: "transform, box-shadow",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              },
              initial: {
                opacity: 0,
                y: 60,
                scale: 0.85,
                rotate: -6,
                boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
              },
              animate: g
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.15)",
                  }
                : {
                    opacity: 0,
                    y: 60,
                    scale: 0.85,
                    rotate: -6,
                    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
                  },
              transition: {
                duration: 0.7,
                delay: 0.15 * x,
                type: "spring",
                stiffness: 80,
                damping: 12,
                mass: 0.7,
              },
              onMouseEnter: () => {
                let e = m.current;
                e &&
                  (f
                    ? (e.style.cssText +=
                        "\n        transform: scale(1.02) translateZ(0);\n        box-shadow: 0 12px 40px 0 rgba(0,0,0,0.2);\n      ")
                    : (w.current = e.getBoundingClientRect()));
              },
              onMouseMove: (e) => {
                let t = m.current;
                t &&
                  !f &&
                  (b.current && cancelAnimationFrame(b.current),
                  (b.current = requestAnimationFrame(() => {
                    w.current || (w.current = t.getBoundingClientRect());
                    let a = w.current,
                      i = e.clientX - a.left,
                      s = e.clientY - a.top,
                      n = a.width / 2,
                      l = a.height / 2,
                      r = ((s - l) / l) * 10,
                      o = -(((i - n) / n) * 10);
                    t.style.cssText += "\n        --x: "
                      .concat(i, "px;\n        --y: ")
                      .concat(s, "px;\n        --angle: ")
                      .concat(
                        135 + r - o,
                        "deg;\n        transform: perspective(800px) rotateX("
                      )
                      .concat(r, "deg) rotateY(")
                      .concat(o, "deg) translateZ(0);\n        box-shadow: 0 ")
                      .concat(20 - Math.abs(r), "px ")
                      .concat(
                        40 + Math.abs(o),
                        "px 0 rgba(0,0,0,0.25);\n      "
                      );
                  })));
              },
              onMouseLeave: y,
              onFocus: () => {
                h(!0);
                let e = m.current;
                e && (w.current = e.getBoundingClientRect());
              },
              onBlur: () => {
                h(!1), y();
              },
              children: [
                (0, i.jsx)("div", {
                  className: I().glow,
                  "aria-hidden": "true",
                }),
                (0, i.jsx)("div", {
                  className: I().noise,
                  "aria-hidden": "true",
                }),
                (0, i.jsxs)(u, {
                  style: {
                    padding: "10px 20px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    minHeight: "350px",
                  },
                  children: [
                    (0, i.jsx)(d.default, {
                      src: t,
                      alt: "".concat(a, " Icon"),
                      width: 180,
                      height: 180,
                      className:
                        "mb-6 z-10 md:w-[180px] md:h-[180px] w-[120px] h-[120px]",
                      priority: !0,
                    }),
                    (0, i.jsx)("h3", {
                      className:
                        "text-white text-4xl font-normal font-sans mb-2 tracking-wide text-center z-10",
                      children: a,
                    }),
                    (0, i.jsx)("p", {
                      className:
                        "text-gray-200 text-lg text-center leading-snug z-10",
                      children: s,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        z = (e) => {
          let {
              children: t,
              className: a = "",
              delay: s = 0,
              y: l = 20,
              ...r
            } = e,
            d = (0, n.useRef)(null),
            x = (0, o.W)(d, { once: !0, margin: "-100px" });
          return (0, i.jsx)(c.P.div, {
            ref: d,
            className: a,
            initial: { opacity: 0, y: l },
            animate: x ? { opacity: 1, y: 0 } : { opacity: 0, y: l },
            transition: { duration: 0.7, delay: s },
            ...r,
            children: t,
          });
        },
        E = (0, s.PA)(() => {
          let e = (0, r.U)(768);
          return (0, i.jsxs)("section", {
            id: "howitwork",
            className:
              "w-full px-4 flex flex-col items-center justify-center pt-16 relative bg-black z-100 overflow-y-hidden",
            children: [
              (0, i.jsx)(z, {
                className:
                  "absolute top-28 left-0 right-0 w-full h-full z-[0] flex justify-center",
                delay: 0.2,
                y: 0,
                children: (0, i.jsx)("img", {
                  src: "/images/howitworkbg.png",
                  className: "w-[100%] md:w-[100%] object-cover z-[0]",
                  alt: "bg",
                }),
              }),
              (0, i.jsx)(z, {
                className: "text-center z-100",
                delay: 0.1,
                children: (0, i.jsx)("p", {
                  className: "text-gray-400 text-sm mb-16 tracking-[0.2em]",
                  children: "[ AI INFLUENCER ]",
                }),
              }),
              e
                ? (0, i.jsx)(z, {
                    className: "max-w-[300px]",
                    delay: 0.2,
                    children: (0, i.jsx)(d.default, {
                      src: "/images/howXelebWorkTextMobile.png",
                      alt: "how it works",
                      width: 1033,
                      height: 64,
                    }),
                  })
                : (0, i.jsx)(z, {
                    className: "max-w-[1175px]",
                    delay: 0.2,
                    children: (0, i.jsx)(d.default, {
                      src: "/images/howXelebWorkText.png",
                      alt: "how it works",
                      width: 1033,
                      height: 64,
                    }),
                  }),
              (0, i.jsx)("div", {
                className: "z-10 w-full mx-auto",
                children: (0, i.jsx)("div", {
                  className:
                    "flex flex-col md:flex-row gap-4 flex-wrap items-center justify-center w-full pt-28",
                  children: A.map((e, t) =>
                    (0, i.jsx)(P, { ...e, idx: t }, e.title)
                  ),
                }),
              }),
              (0, i.jsx)(z, {
                className: "text-center mt-28 z-[100]",
                delay: 0.3,
                children: (0, i.jsx)("p", {
                  className: "text-gray-400 text-sm mb-16 tracking-[0.2em]",
                  children: "[ FEATURED FROM XELEB ]",
                }),
              }),
              e
                ? (0, i.jsx)(z, {
                    className: "max-w-[300px] z-[100]",
                    delay: 0.4,
                    children: (0, i.jsx)(d.default, {
                      src: "/images/topAITextMobile.png",
                      alt: "how it works",
                      width: 1033,
                      height: 64,
                    }),
                  })
                : (0, i.jsx)(z, {
                    className: "max-w-[1200px] z-[100]",
                    delay: 0.4,
                    children: (0, i.jsx)(d.default, {
                      src: "/images/topAIText.png",
                      alt: "how it works",
                      width: 1200,
                      height: 72,
                    }),
                  }),
              (0, i.jsx)(z, {
                className: "w-full overflow-hidden z-20",
                delay: 0.5,
                children: (0, i.jsx)(N, {}),
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent z-10",
              }),
            ],
          });
        }),
        C = (0, s.PA)(() => {
          (0, s.iz)(() => ({}));
          let e = (0, n.useRef)(null),
            t = (0, o.W)(e, { once: !1, margin: "-100px" }),
            a = (0, n.useRef)(null),
            r = (0, o.W)(a, { once: !1, margin: "-100px" }),
            d = (0, n.useRef)(null),
            m = (0, o.W)(d, { once: !1, margin: "-100px" });
          return (0, i.jsxs)(c.P.section, {
            ref: e,
            id: "dashboard",
            className:
              "w-full flex flex-col items-center justify-center relative overflow-hidden  bg-black py-28",
            style: {
              backgroundImage: "url(/images/createTokenizeBlockBg.png)",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
            },
            initial: { opacity: 0, y: 60 },
            animate: t ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
            transition: { duration: 0.8, type: "spring", stiffness: 60 },
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex gap-8 md:gap-16 lg:flex-row flex-col items-center justify-center z-10 w-full px-4",
                children: [
                  (0, i.jsxs)(c.P.h1, {
                    ref: a,
                    className:
                      "text-white text-5xl md:text-6xl font-base text-center leading-tight drop-shadow-lg",
                    initial: { opacity: 0, scale: 0.92 },
                    animate: r
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.92 },
                    transition: {
                      duration: 0.7,
                      type: "spring",
                      stiffness: 80,
                      delay: 0.1,
                    },
                    children: [
                      "Create. Tokenize.",
                      (0, i.jsx)("br", {}),
                      "Earn. In seconds.",
                    ],
                  }),
                  (0, i.jsx)(c.P.div, {
                    ref: d,
                    initial: { opacity: 0, x: 120, scale: 0.9, rotate: 12 },
                    animate: m
                      ? {
                          opacity: 1,
                          x: [0, -10, 0],
                          scale: 1,
                          rotate: [0, -2, 0],
                        }
                      : { opacity: 0, x: 120, scale: 0.9, rotate: 12 },
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 90,
                      damping: 10,
                      mass: 0.7,
                      delay: 0.25,
                    },
                    children: (0, i.jsx)(x.r, {
                      variant: "neon",
                      className:
                        "text-xs sm:text-base md:text-lg font-light focus:outline-none h-[60px]  min-w-[370px]",
                      "aria-label": "Launch your AI influencer now",
                      leftIcon: (0, i.jsx)("img", {
                        src: "/images/arrowRight.png",
                        alt: "Arrow Right",
                        className: "w-5 h-5",
                        "aria-hidden": "true",
                      }),
                      onClick: () => {
                        window.open(l.fo.BUILD_AGENT, "_self");
                      },
                      children: "LAUNCH YOUR AI INFLUENCER NOW",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "absolute inset-0 bg-black/60 pointer-events-none",
                "aria-hidden": "true",
              }),
              (0, i.jsx)("div", {
                className:
                  "pointer-events-none absolute bottom-0 left-0 w-full h-full",
                "aria-hidden": "true",
                style: {
                  background:
                    "radial-gradient(ellipse at center bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.0) 80%)",
                  filter: "blur(32px)",
                  opacity: 0.7,
                },
              }),
            ],
          });
        }),
        R = [
          {
            icon: "/images/interactiveIcon.png",
            title: "Utility-Driven Agents",
            description:
              "Only agents with real use cases and active users get rewarded.",
            aria: "Only agents with real use cases and active users get rewarded.",
          },
          {
            icon: "/images/gamificationIcon.png",
            title: "Community Governance",
            description:
              "The ecosystem is shaped and sustained by its creators and users.",
            aria: "The ecosystem is shaped and sustained by its creators and users.",
          },
          {
            icon: "/images/web3EconomyIcon.png",
            title: "Revenue-Aligned Tokenomics",
            description: "Value flows based on real engagement, not hype.",
            aria: "Value flows based on real engagement, not hype.",
          },
        ],
        L = (e) => {
          let { icon: t, title: a, description: s, aria: l, idx: x } = e,
            m = (0, n.useRef)(null),
            [p, h] = (0, n.useState)(!1),
            g = (0, o.W)(m, { once: !1, margin: "-100px" }),
            f = (0, r.U)(768),
            w = (0, n.useRef)(null),
            b = (0, n.useRef)(0),
            y = () => {
              let e = m.current;
              e &&
                (b.current && cancelAnimationFrame(b.current),
                (w.current = null),
                f
                  ? (e.style.cssText +=
                      "\n        transform: scale(1) translateZ(0);\n        box-shadow: 0 12px 32px 0 rgba(0,0,0,0.10);\n      ")
                  : (e.style.cssText +=
                      "\n        --angle: 135deg;\n        transform: perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0);\n        box-shadow: 0 12px 32px 0 rgba(0,0,0,0.10);\n      "));
            };
          return (
            (0, n.useEffect)(
              () => () => {
                b.current && cancelAnimationFrame(b.current);
              },
              []
            ),
            (0, i.jsxs)(c.P.div, {
              ref: m,
              className:
                "".concat(
                  I().card,
                  " relative flex-1 bg-white/5 rounded-[12px] border border-white/20 shadow-lg flex flex-col items-center p-2 overflow-hidden backdrop-blur-lg md:w-[350px] w-full max-w-[calc(100vw-50px)] md:max-w-[420px] md:min-h-[450px] justify-center"
                ) + (p ? " focus-visible" : ""),
              tabIndex: 0,
              "aria-label": l,
              style: {
                willChange: "transform, box-shadow",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              },
              initial: {
                opacity: 0,
                y: 60,
                x: 30,
                scale: 0.92,
                rotate: 4,
                boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
              },
              animate: g
                ? {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    boxShadow: "0 12px 32px 0 rgba(0,0,0,0.10)",
                  }
                : {
                    opacity: 0,
                    y: 60,
                    x: 30,
                    scale: 0.92,
                    rotate: 4,
                    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
                  },
              transition: {
                duration: 0.6,
                delay: 0.13 * x,
                type: "spring",
                stiffness: 90,
                damping: 14,
                mass: 0.8,
              },
              onMouseEnter: () => {
                let e = m.current;
                e &&
                  (f
                    ? (e.style.cssText +=
                        "\n        transform: scale(1.02) translateZ(0);\n        box-shadow: 0 16px 40px 0 rgba(0,0,0,0.15);\n      ")
                    : (w.current = e.getBoundingClientRect()));
              },
              onMouseMove: (e) => {
                let t = m.current;
                t &&
                  !f &&
                  (b.current && cancelAnimationFrame(b.current),
                  (b.current = requestAnimationFrame(() => {
                    w.current || (w.current = t.getBoundingClientRect());
                    let a = w.current,
                      i = e.clientX - a.left,
                      s = e.clientY - a.top,
                      n = a.width / 2,
                      l = a.height / 2,
                      r = ((s - l) / l) * 10,
                      o = -(((i - n) / n) * 10);
                    t.style.cssText += "\n        --x: "
                      .concat(i, "px;\n        --y: ")
                      .concat(s, "px;\n        --angle: ")
                      .concat(
                        135 + r - o,
                        "deg;\n        transform: perspective(800px) rotateX("
                      )
                      .concat(r, "deg) rotateY(")
                      .concat(o, "deg) translateZ(0);\n        box-shadow: 0 ")
                      .concat(20 - Math.abs(r), "px ")
                      .concat(
                        40 + Math.abs(o),
                        "px 0 rgba(0,0,0,0.25);\n      "
                      );
                  })));
              },
              onMouseLeave: y,
              onFocus: () => {
                h(!0);
                let e = m.current;
                e && (w.current = e.getBoundingClientRect());
              },
              onBlur: () => {
                h(!1), y();
              },
              children: [
                (0, i.jsx)("div", {
                  className: I().glow,
                  "aria-hidden": "true",
                  style: {},
                }),
                (0, i.jsx)("div", {
                  className: I().noise,
                  "aria-hidden": "true",
                }),
                (0, i.jsxs)(u, {
                  style: {
                    padding: "10px 20px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    minHeight: "350px",
                  },
                  children: [
                    (0, i.jsx)(d.default, {
                      src: t,
                      alt: "".concat(a, " Icon"),
                      width: 180,
                      height: 180,
                      className:
                        "mb-6 z-10 md:w-[180px] md:h-[180px] w-[120px] h-[120px]",
                      priority: !0,
                    }),
                    (0, i.jsx)("h3", {
                      className:
                        "text-white text-3xl font-normal font-sans mb-6 tracking-wide text-center z-10",
                      children: a,
                    }),
                    (0, i.jsx)("p", {
                      className:
                        "text-gray-200 text-lg text-center leading-snug z-10",
                      children: s,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        T = (0, s.PA)(() => {
          let e = (0, r.U)(768),
            t = (0, n.useRef)(null),
            a = (0, o.W)(t, { once: !0, margin: "-100px" }),
            s = (0, n.useRef)(null),
            l = (0, o.W)(s, { once: !0, margin: "-100px" }),
            x = (0, n.useRef)(null),
            m = (0, o.W)(x, { once: !0, margin: "-100px" });
          return (0, i.jsxs)(c.P.section, {
            ref: t,
            id: "howitwork",
            className:
              "w-full px-4 flex flex-col items-center justify-center py-16 relative bg-black z-100 overflow-hidden",
            initial: { opacity: 0, y: 60 },
            animate: a ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
            transition: { duration: 0.8, type: "spring", stiffness: 60 },
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute top-0 left-0 right-0 w-full h-full z-0 flex justify-center",
                children: (0, i.jsx)("img", {
                  src: "/images/visionBlockBg.png",
                  className:
                    "w-[100%] h-[50%] md:w-[100%] md:h-auto object-cover z-[0]",
                  alt: "bg",
                }),
              }),
              (0, i.jsx)(c.P.div, {
                ref: s,
                className: "text-center md:mt-20 mt-10",
                style: { zIndex: 100 },
                initial: { opacity: 0, scale: 0.92 },
                animate: l
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.92 },
                transition: {
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  delay: 0.1,
                },
                children: (0, i.jsx)("p", {
                  className:
                    "text-white/50 text-sm mb-16 tracking-[0.2em] z-100",
                  children: "[ STRATEGIC POSITIONING ]",
                }),
              }),
              e
                ? (0, i.jsx)(c.P.div, {
                    ref: x,
                    className: "max-w-[300px] z-50",
                    initial: { opacity: 0, y: 30 },
                    animate: m ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                    transition: { duration: 0.7, delay: 0.2 },
                    children: (0, i.jsx)(d.default, {
                      src: "/images/visonTextMobile.png",
                      alt: "Vision of Xeleb",
                      width: 1033,
                      height: 64,
                    }),
                  })
                : (0, i.jsx)(c.P.div, {
                    ref: x,
                    className: "max-w-[920px] z-50",
                    initial: { opacity: 0, y: 30 },
                    animate: m ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                    transition: { duration: 0.7, delay: 0.2 },
                    children: (0, i.jsx)(d.default, {
                      src: "/images/visonText.png",
                      alt: "Vision of Xeleb",
                      width: 1033,
                      height: 64,
                    }),
                  }),
              (0, i.jsx)("div", {
                className: "z-10 w-full mx-auto",
                children: (0, i.jsx)("div", {
                  className:
                    "flex flex-col md:flex-row gap-4 flex-wrap items-center justify-center w-full pt-28",
                  children: R.map((e, t) =>
                    (0, i.jsx)(L, { ...e, idx: t }, e.title)
                  ),
                }),
              }),
            ],
          });
        });
      var B = a(76046);
      let M = [
          {
            src: "/images/partner-logo-1.png",
            alt: "Partner 1",
            width: 188,
            height: 33,
          },
          {
            src: "/images/binance-alpha.png",
            alt: "/binance-alpha",
            width: 204,
            height: 36,
          },
          {
            src: "/images/partner-logo-2.png",
            alt: "Partner 2",
            width: 204,
            height: 36,
          },
          {
            src: "/images/amber.png",
            alt: "Partner 3",
            width: 221,
            height: 56,
          },
          { src: "/images/gate.png", alt: "gate", width: 164, height: 24 },
          {
            src: "/images/partner-logo-4.png",
            alt: "Partner 4",
            width: 164,
            height: 24,
          },
          {
            src: "/images/partner-logo-5.png",
            alt: "Partner 5",
            width: 192,
            height: 45,
          },
          {
            src: "/images/partner-logo-6.png",
            alt: "Partner 6",
            width: 168,
            height: 64,
          },
          {
            src: "/images/partner-logo-7.png",
            alt: "Partner 7",
            width: 168,
            height: 64,
          },
          { isPartnerWithUs: !0 },
        ],
        S = (e) => {
          let {
              cell: t,
              isMobile: a,
              colCount: s,
              cellIndex: n,
              totalCells: l,
            } = e,
            r = Math.ceil(l / s),
            o = "";
          a
            ? (n < s || (o += " border-t"),
              n >= (r - 1) * s || (o += " border-b"),
              n % s != 0 && (o += " border-l"),
              (n + 1) % s != 0 && (o += " border-r"))
            : (o += " border-l border-r"),
            (o += " border-white/10");
          let c =
            "flex items-center justify-center transition-all duration-300 h-auto cursor-pointer overflow-hidden p-7".concat(
              o
            );
          return t.isEmpty
            ? (0, i.jsx)("div", { className: c })
            : t.isPartnerWithUs
            ? (0, i.jsx)("div", {
                className: c,
                children: (0, i.jsx)("div", {
                  className: "w-full flex justify-center",
                  children: (0, i.jsx)(x.r, {
                    variant: "borderedWhite",
                    className: "w-full px-2 pr-4",
                    onClick: () => {
                      (0, B.redirect)("/contact");
                    },
                    leftIcon: (0, i.jsx)(d.default, {
                      src: "/images/arrowRightIconWhite.png",
                      width: 20,
                      height: 20,
                      alt: "arrow right icon",
                    }),
                    children: (0, i.jsx)("p", {
                      className: "text-white text-center",
                      children: "PARTNER WITH US",
                    }),
                  }),
                }),
              })
            : (0, i.jsx)("div", {
                className: c,
                children: (0, i.jsx)("img", {
                  src: t.src,
                  alt: t.alt,
                  width: t.width,
                  height: t.height,
                  className:
                    "max-w-full h-auto object-contain filter brightness-75 hover:brightness-200 transition-all duration-300 hover:scale-105 ",
                  style: { maxHeight: a ? "40px" : "60px", width: "auto" },
                }),
              });
        },
        W = (0, s.PA)(() => {
          let e = (0, r.U)(768),
            t = e ? 2 : 5,
            a = M.length,
            s = (0, n.useRef)(null),
            l = (0, o.W)(s, { once: !0, margin: "-100px" });
          return (0, i.jsxs)(c.P.section, {
            ref: s,
            id: "howitwork",
            className:
              "w-full px-4 flex flex-col items-center justify-center pt-16 relative bg-black z-100 overflow-hidden",
            initial: { opacity: 0, scale: 0.95 },
            animate: l ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
            transition: { duration: 0.7, type: "spring", stiffness: 70 },
            children: [
              (0, i.jsx)(c.P.div, {
                className: "text-center md:mt-20 mt-10",
                style: { zIndex: 100 },
                initial: { opacity: 0, x: -40 },
                animate: l ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 },
                transition: {
                  duration: 0.7,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 80,
                },
                children: (0, i.jsx)("p", {
                  className:
                    "text-white/50 text-sm mb-10 tracking-[0.2em] z-100",
                  children: "[ PARTNERS OF XELEB ]",
                }),
              }),
              (0, i.jsx)(c.P.div, {
                className: "md:max-w-[700px] max-w-[400px] z-50",
                initial: { opacity: 0, x: 40 },
                animate: l ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 },
                transition: {
                  duration: 0.7,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 80,
                },
                children: (0, i.jsx)(d.default, {
                  src: "/images/majorFirmText.png",
                  alt: "Major Firms",
                  width: 1033,
                  height: 64,
                }),
              }),
              (0, i.jsxs)(c.P.div, {
                className: "w-full flex flex-col my-16 mt-24 relative",
                initial: { opacity: 0, y: 40 },
                animate: l ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 80,
                },
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "z-10 w-full max-w-5xl mx-auto relative grid grid-cols-2 md:grid-cols-5",
                    children: M.map((s, n) =>
                      (0, i.jsx)(
                        S,
                        {
                          cell: s,
                          isMobile: e,
                          colCount: t,
                          cellIndex: n,
                          totalCells: a,
                        },
                        n
                      )
                    ),
                  }),
                  e
                    ? null
                    : (0, i.jsx)(c.P.div, {
                        className:
                          "absolute top-[-5px] left-0 w-full h-full bg flex justify-center items-center",
                        initial: { opacity: 0, scaleX: 0.7 },
                        animate: l
                          ? { opacity: 1, scaleX: 1 }
                          : { opacity: 0, scaleX: 0.7 },
                        transition: {
                          duration: 0.7,
                          delay: 0.4,
                          type: "spring",
                          stiffness: 80,
                        },
                        children: (0, i.jsx)("div", {
                          className: " w-full h-[2px] bg-white/10",
                        }),
                      }),
                ],
              }),
            ],
          });
        }),
        U = (e) => {
          let {
              src: t,
              alt: a,
              positionClass: s,
              description: n,
              index: l,
            } = e,
            o = (0, r.U)(600);
          return (0, i.jsx)("div", {
            className: "absolute ".concat(s),
            children: (0, i.jsxs)("div", {
              className: "backdrop-blur-md flex items-center justify-center ",
              children: [
                (0, i.jsx)(c.P.div, {
                  className:
                    "p-2 rounded-full bg-black/10 backdrop-blur-md border border-white/30 flex items-center justify-center",
                  initial: { x: 4, y: 4, rotate: 0 },
                  animate: { x: [4, -4, 4], y: [4, -4, 4] },
                  transition: {
                    duration: 3,
                    repeat: 1 / 0,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.5 * l,
                  },
                  style: { willChange: "transform" },
                  children: (0, i.jsx)("img", {
                    src: t,
                    alt: a,
                    className: "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7",
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute bottom-0 translate-y-[100%] items-center flex-col flex",
                  style: { display: o ? "none" : "flex" },
                  children: (0, i.jsx)("h3", {
                    className:
                      "text-white text-center text-lg lg:text-xl font-normal mb-1 min-w-[140px]",
                    children: n,
                  }),
                }),
              ],
            }),
          });
        },
        X = (e) => {
          let {
              src: t,
              alt: a,
              gradient: s,
              title: n,
              description: l,
              positionClass: o,
              textPositionClass: d,
              minWidth: x,
              index: m,
              glowShadow: p,
            } = e,
            u = (0, r.U)(1025),
            h = (0, r.U)(450);
          return (0, i.jsx)("div", {
            className: "absolute ".concat(o),
            children: (0, i.jsx)("div", {
              className: "relative",
              children: (0, i.jsxs)("div", {
                className:
                  "rounded-full flex items-center justify-center rotate-[45deg] ",
                children: [
                  (0, i.jsxs)(c.P.div, {
                    className: "relative flex items-center justify-center",
                    initial: { y: 8, x: 0, rotate: 0 },
                    animate: { y: [8, -8, 8], x: 0 },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 0.5 * m,
                    },
                    style: { willChange: "transform" },
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 z-0 rounded-full pointer-events-none ".concat(
                            p
                          ),
                        "aria-hidden": "true",
                      }),
                      (0, i.jsx)("img", {
                        src: t,
                        alt: a,
                        className:
                          "relative z-10 w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "absolute ".concat(
                      u ? "bottom-0 translate-y-[100%] items-center" : d,
                      " flex-col flex"
                    ),
                    style: { minWidth: "".concat(x, "px") },
                    children: [
                      (0, i.jsx)("h3", {
                        className:
                          "text-white text-left sm:text-xl text-base font-normal mb-1 whitespace-nowrap",
                        children: n,
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "flex text-white/70  whitespace-break-spaces text-left  ".concat(
                            u ? "text-xs" : ""
                          ),
                        style: {
                          display: h ? "none" : "flex",
                          whiteSpace: u ? "nowrap" : "normal",
                        },
                        children: l.includes("\n")
                          ? (0, i.jsx)("ul", {
                              className: "flex flex-col gap-1",
                              children: l
                                .split("\n")
                                .map((e, t) =>
                                  (0, i.jsxs)(
                                    "li",
                                    {
                                      className: "flex items-baseline",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className:
                                            "w-1 h-1 bg-white/50 rounded-full mr-2 flex-shrink-0",
                                          "aria-hidden": "true",
                                        }),
                                        (0, i.jsx)("span", {
                                          className: "break-words",
                                          children: e,
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                ),
                            })
                          : l,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        _ = [
          {
            src: "/images/tool-and-service.png",
            alt: "Icon 1",
            positionClass:
              "left-1/2 top-0 translate-x-[-50%] translate-y-[-50%]",
            description: "Tool as a service",
          },
          {
            src: "/images/launchpad.png",
            alt: "Icon 2",
            positionClass:
              "right-0 top-1/2 translate-x-[50%] translate-y-[-50%]",
            description: "Launchpad Gateway",
          },
          {
            src: "/images/data-feedback.png",
            alt: "Icon 3",
            positionClass:
              "left-0 top-1/2 translate-x-[-50%] translate-y-[-50%]",
            description: "Data Feedback Loop",
          },
          {
            src: "/images/ecosystem-icon-4.svg",
            alt: "Icon 4",
            positionClass:
              "left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]",
            description: "Agent Monitization",
          },
        ],
        O = [
          {
            src: "/images/ecosystem-viral-challenges.png",
            alt: "AI Viral Challenges",
            gradient: "bg-gradient-to-b from-gray-800 to-yellow-600",
            title: "Viral Challenges",
            description:
              "More AI value content\nMore real users\nMore viral loops",
            positionClass:
              "left-1/2 top-0 translate-x-[-50%] translate-y-[-50%]",
            textPositionClass:
              "left-[0] top-1/2 translate-y-[-50%] translate-x-[calc(-100%-10px)] text-left",
            minWidth: 135,
            glowShadow: "shadow-[0_0_24px_8px_rgba(158,186,71,1)]",
          },
          {
            src: "/images/ecosystem-trading-cloning.png",
            alt: "Trading & Cloning",
            gradient: "bg-gradient-to-b from-gray-800 to-red-600",
            title: "Trading & Cloning",
            description:
              "High-performing influencer agents\nMarketplace liquidity\nIncreased demand",
            positionClass:
              "right-0 top-1/2 translate-x-[50%] translate-y-[-50%]",
            textPositionClass:
              "right-[0] top-1/2 translate-y-[-50%] translate-x-[calc(100%+10px)] text-left",
            minWidth: 170,
            glowShadow: "shadow-[0_0_24px_8px_rgba(156,43,24,0.5)]",
          },
          {
            src: "/images/ecosystem-economic-loops.png",
            alt: "Economic Loops",
            gradient: "bg-gradient-to-b from-gray-800 to-blue-600",
            title: "Economic Loops",
            description:
              "More earnings reinvested\nBetter agents\nStronger ecosystem",
            positionClass:
              "left-0 top-1/2 translate-x-[-50%] translate-y-[-50%]",
            textPositionClass:
              "left-[0] top-1/2 translate-y-[-50%] translate-x-[calc(-100%-10px)] text-right",
            minWidth: 155,
            glowShadow: "shadow-[0_0_24px_8px_rgba(38,139,200,0.5)]",
          },
          {
            src: "/images/ecosystem-competitive-drive.png",
            alt: "Competitive Drive",
            gradient: "bg-gradient-to-b from-gray-800 to-green-600",
            title: "Competitive Drive",
            description: "Leaderboards\nFOMO\nRewards drive retention",
            positionClass:
              "left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]",
            textPositionClass:
              "right-[0] top-1/2 translate-y-[-50%] translate-x-[calc(100%+10px)] text-left",
            minWidth: 140,
            glowShadow: "shadow-[0_0_24px_8px_rgba(33,171,86,0.5)]",
          },
        ],
        F = (0, s.PA)(() => {
          let e = (0, r.U)(768),
            t = (0, n.useRef)(null),
            a = (0, o.W)(t, { once: !1, margin: "-100px" });
          return (0, i.jsxs)(c.P.section, {
            ref: t,
            id: "howitwork",
            className:
              "w-full px-4 flex flex-col items-center justify-center py-16 relative bg-black z-100 overflow-x-hidden",
            initial: { opacity: 0, y: 60 },
            animate: a ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
            transition: { duration: 0.8, type: "spring", stiffness: 60 },
            children: [
              (0, i.jsx)("div", {
                className: "text-center md:mt-20 mt-10",
                style: { zIndex: 100 },
                children: (0, i.jsx)("p", {
                  className:
                    "text-white/50 text-sm mb-16 tracking-[0.2em] z-100",
                  children: "[ A SELF-SUSTAINING ]",
                }),
              }),
              (0, i.jsx)("div", {
                className: "md:max-w-[520px] max-w-[300px] z-50",
                children: (0, i.jsx)(d.default, {
                  src: "/images/ecosystemText.png",
                  alt: "Vision of Xeleb",
                  width: 1033,
                  height: 64,
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "z-10 w-full mx-auto relative flex items-center justify-center mt-32 mb-8",
                style: {
                  backgroundImage: "url('/images/ecosystemBlockBg.png')",
                  backgroundSize: "auto 124%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                },
                children: (0, i.jsxs)("div", {
                  className:
                    "relative max-w-[calc(100vw-50px)] max-h-[calc(100vw-50px)] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] flex items-center justify-center ",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "absolute w-full h-full rounded-full border border-white/20 border-dashed ",
                      children: _.map((e, t) =>
                        (0, i.jsx)(U, { ...e, index: t }, e.alt)
                      ),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "absolute w-[70%] h-[70%] rounded-full border border-white/20 rotate-[-45deg] ",
                      children: O.map((e, t) =>
                        (0, i.jsx)(
                          X,
                          { ...e, index: t, glowShadow: e.glowShadow },
                          e.alt
                        )
                      ),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "absolute w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] max-w-[30vw] max-h-[30vw] rounded-full border border-white/20 flex justify-center items-center",
                      children: (0, i.jsx)("img", {
                        src: "/images/ecosystem-xeleb-center.svg",
                        alt: "Xeleb Protocol",
                        className:
                          "w-[70%] h-[70%] max-w-[100px] max-h-[100px]",
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "w-full mx-auto mt-24 px-2 border-none max-w-[1000px] flex flex-wrap md:gap-0 gap-2 flex-col md:flex-row",
                children: _.map((t, a) => {
                  let { title: s, description: n } = [
                      {
                        title: "Tool as a service",
                        description:
                          "Design and launch adaptive AI Influencers that kickstart viral challenges and define platform culture.",
                      },
                      {
                        title: "Launchpad Gateway",
                        description:
                          "Engage with AI challenges to earn rewards, climb leaderboards, and activate viral content through gameplay.",
                      },
                      {
                        title: "Data Feedback Loop",
                        description:
                          "Replicate and customize successful AI Influencers to launch improved, viral-ready versions at scale.",
                      },
                      {
                        title: "Agent Monitization",
                        description:
                          "Expand the AI Influencer Hub by developing custom utilities and features that unlock new use cases and long-term value.",
                      },
                    ][a],
                    l = "border-l border-r border-white/20";
                  return (
                    e &&
                      (l =
                        "border-r border-b border-l border-white/20 rounded-xl"),
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "group flex flex-1 md:flex-[50%] lg:flex-1 flex-col h-full justify-center  relative ".concat(
                            l,
                            " px-6 py-3 md:py-4  my-0 md:my-4 items-center md:items-start"
                          ),
                        children: [
                          (0, i.jsx)("img", {
                            src: t.src,
                            alt: t.alt,
                            className:
                              "w-8 h-8 object-contain mb-6 mt-2 transition-transform duration-300 group-hover:scale-125",
                            "aria-hidden": "true",
                          }),
                          (0, i.jsx)("h3", {
                            className:
                              "text-white text-lg lg:text-2xl font-semibold mb-2 text-center md:text-left",
                            children: s,
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "text-white/60 text-sm lg:text-base leading-relaxed text-center md:text-left",
                            children: n,
                          }),
                        ],
                      },
                      s
                    )
                  );
                }),
              }),
              (0, i.jsx)("div", {
                className: "w-full flex justify-center items-center mt-4 mb-8",
                children: (0, i.jsxs)("p", {
                  className:
                    "text-white text-center font-normal leading-snug text-[24px] md:text-[32px] lg:text-[40px] max-w-[1000px]",
                  children: [
                    "Powered by a network of creators, players, cloners, and builders —",
                    (0, i.jsx)("span", {
                      className: "text-green-400",
                      children: "Xeleb transforms users into ecosystem drivers",
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(W, {}),
              (0, i.jsx)(c.P.div, {
                className: "absolute md:bottom-[243px] bottom-[100px] right-0",
                animate: { y: [0, -30, 0] },
                transition: {
                  duration: 4,
                  repeat: 1 / 0,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                children: (0, i.jsx)("img", {
                  src: "/images/rocketBg.png",
                  alt: "rocket",
                  className: "w-full h-full max-h-[800px]",
                }),
              }),
            ],
          });
        }),
        D = (e) => {
          let t = (0, n.useRef)(null),
            [a, i] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (!t.current) return;
              let a = new window.IntersectionObserver((e) => {
                let [t] = e;
                return i(t.isIntersecting);
              }, e);
              return a.observe(t.current), () => a.disconnect();
            }, [e]),
            [t, a]
          );
        },
        V = (0, s.PA)((e) => {
          let { imageRef: t } = e,
            a = (0, r.U)(768),
            s = (0, r.U)(1024),
            [l, o] = D({ threshold: 0.2 }),
            x = (0, n.useRef)(null),
            [m, p] = (0, n.useState)({ width: 0, height: 0 }),
            u = s ? 0.02 : 0.016;
          (0, n.useEffect)(() => {
            let e = () => {
              x.current &&
                p({
                  width: x.current.clientWidth,
                  height: x.current.clientHeight,
                });
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []);
          let h = {
            position: "absolute",
            left: m.width * (s ? 0.532 : 0.466) - (m.width * u) / 2,
            top: 0.225 * m.height - (m.width * u) / 2,
            width: m.width * u,
            height: m.width * u,
            borderRadius: "50%",
            border: "2px solid #eab308",
            pointerEvents: "none",
            boxSizing: "border-box",
          };
          return (0, i.jsxs)("section", {
            ref: l,
            id: "progress",
            className:
              "w-full px-4 flex flex-col items-center justify-center pt-16 relative bg-black z-100 overflow-y-hidden",
            children: [
              (0, i.jsx)(c.P.div, {
                className: "text-center md:mt-20 mt-10",
                style: { zIndex: 100 },
                initial: { opacity: 0, y: 40 },
                animate: o ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8, ease: "easeOut" },
                children: (0, i.jsx)("p", {
                  className:
                    "text-white/50 text-sm mb-10 tracking-[0.2em] z-100",
                  children: "[ ROADMAP OF XELEB ]",
                }),
              }),
              (0, i.jsx)(c.P.div, {
                className: "md:max-w-[800px] max-w-[450px] z-50",
                initial: { opacity: 0, y: 40 },
                animate: o ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                children: (0, i.jsx)(d.default, {
                  src: "/images/ourProgressText.png",
                  alt: "Major Firms",
                  width: 1033,
                  height: 64,
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "w-full max-w-screen flex flex-col mt-24 relative scrollbar-custom z-100",
                style: a ? { overflowY: "hidden", overflowX: "auto" } : {},
                children: (0, i.jsxs)("div", {
                  style: { zIndex: 100 },
                  className: "relative",
                  children: [
                    (0, i.jsx)("img", {
                      ref: (e) => {
                        (x.current = e),
                          "function" == typeof t
                            ? t(e)
                            : t &&
                              "object" == typeof t &&
                              "current" in t &&
                              (t.current = e);
                      },
                      src: s
                        ? "/images/progressMobile.png"
                        : "/images/progress.png",
                      alt: "Xeleb Protocol development roadmap with key milestones highlighted",
                      className: "w-full h-full min-w-[800px] md:min-w-full",
                      style: { zIndex: 100 },
                      onLoad: () => {
                        x.current &&
                          p({
                            width: x.current.clientWidth,
                            height: x.current.clientHeight,
                          });
                      },
                    }),
                    (0, i.jsx)(c.P.div, {
                      style: {
                        position: "absolute",
                        left: h.left,
                        top: h.top,
                        width: h.width,
                        height: h.height,
                        borderRadius: "50%",
                        pointerEvents: "none",
                        zIndex: 99,
                      },
                      "aria-hidden": "true",
                      animate: {
                        boxShadow: [
                          "0 0 0 0 rgba(234,179,8,0.3), 0 0 0 0.4em rgba(234,179,8,0.2), 0 0 0 1em rgba(234,179,8,0.1), 0 0 0 1.8em rgba(234,179,8,0.05)",
                          "0 0 0 0.4em rgba(234,179,8,0.2), 0 0 0 1em rgba(234,179,8,0.1), 0 0 0 1.8em rgba(234,179,8,0.05), 0 0 0 2.5em rgba(234,179,8,0)",
                        ],
                      },
                      transition: {
                        duration: 1.2,
                        repeat: 1 / 0,
                        ease: "linear",
                      },
                    }),
                    (0, i.jsx)(c.P.div, {
                      style: {
                        ...h,
                        pointerEvents: "none",
                        backgroundColor: "rgba(234,179,8,0.15)",
                        zIndex: 100,
                      },
                      "aria-label": "progress-point",
                      tabIndex: 0,
                      animate: { scale: [1, 1.15, 1] },
                      transition: {
                        duration: 1.2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        H = (0, s.PA)(() => {
          let e = (0, r.U)(768);
          (0, n.useRef)(null);
          let t = (0, n.useRef)(null),
            [a, s] = (0, n.useState)(0);
          (0, n.useEffect)(() => {
            let e = () => {
              t.current && s(Math.floor(0.77 * t.current.offsetHeight));
            };
            return (
              e(),
              window.addEventListener("resize", e),
              setTimeout(() => {
                e();
              }, 3e3),
              () => window.removeEventListener("resize", e)
            );
          }, []);
          let m = (0, n.useRef)(null),
            p = (0, o.W)(m, { once: !1, margin: "-100px" });
          return (0, i.jsxs)("div", {
            className: "relative w-full h-full flex flex-col",
            children: [
              (0, i.jsxs)(c.P.section, {
                ref: m,
                id: "highlight",
                className:
                  "w-full px-4 flex flex-col md:flex-row  justify-center py-0 md:py-24 relative bg-black z-10 overflow-hidden min-h-[700px] md:gap-10 gap-5",
                style: {
                  backgroundImage: "url('/images/skin-analysis-face-bg.png')",
                  backgroundSize: e ? "auto 70%" : "auto 85%",
                  backgroundPosition: "center 100px",
                  backgroundRepeat: "no-repeat",
                },
                initial: { opacity: 0, y: 60 },
                animate: p ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
                transition: { duration: 0.8, type: "spring", stiffness: 60 },
                children: [
                  (0, i.jsxs)(c.P.div, {
                    className:
                      "flex flex-col items-center md:items-start  z-20  md:pl-16 md:text-left text-center",
                    initial: { opacity: 0, x: -40 },
                    animate: p ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 },
                    transition: {
                      duration: 0.7,
                      delay: 0.1,
                      type: "spring",
                      stiffness: 80,
                    },
                    children: [
                      (0, i.jsx)("span", {
                        className:
                          "uppercase tracking-widest text-white/50 text-[14px] mb-4 font-sans",
                        style: {
                          fontFamily: "Karla, var(--font-sans), sans-serif",
                        },
                        children: "[ AI INFLUENCER HIGHLIGHT ]",
                      }),
                      (0, i.jsxs)("h2", {
                        className:
                          "text-white text-4xl md:text-8xl font-normal leading-tight mb-6 font-sans",
                        style: { fontFamily: "var(--font-sans), sans-serif" },
                        children: [
                          "Skin Analysis",
                          (0, i.jsx)("br", {}),
                          "from Miss AI",
                        ],
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-white text-base md:text-xl mb-8 max-w-md font-sans opacity-90",
                        children:
                          "Powered by Xeleb Protocol, Miss AI offers real-time, AI-powered skin analysis - helping users assess skin health and recommend better care routines.",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-white text-base md:text-lg mb-8 max-w-md font-sans opacity-90",
                        children: "Built with utility. Designed to scale.",
                      }),
                      (0, i.jsx)(x.r, {
                        variant: "white",
                        leftIcon: (0, i.jsx)("img", {
                          src: "/images/arrowRight.png",
                          alt: "Arrow Right",
                          className: "w-5 h-5",
                          "aria-hidden": "true",
                        }),
                        onClick: () => {
                          window.open(l.fo.SKIN_ANALYSIS, "_blank");
                        },
                        children: (0, i.jsx)("p", {
                          className: "font-base text-lg font-light",
                          children: "START ANALYSIS NOW",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(c.P.div, {
                    className:
                      "flex items-center md:justify-end justify-center relative  md:mt-0 md:pt-[50px] pt-0",
                    initial: { opacity: 0, x: 40 },
                    animate: p ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 },
                    transition: {
                      duration: 0.7,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 80,
                    },
                    children: (0, i.jsx)(c.P.div, {
                      animate: { y: [0, 30, 0] },
                      transition: {
                        duration: 3,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      className:
                        "relative z-20 w-[90vw] max-w-[600px] md:w-[600px] drop-shadow-2xl",
                      "aria-label": "Miss AI Mobile Screens",
                      tabIndex: 0,
                      children: (0, i.jsx)(d.default, {
                        src: "/images/skin-analysis-mobiles.png",
                        alt: "Miss AI Mobile Screens",
                        width: 420,
                        height: 500,
                        className: "w-full h-auto",
                        priority: !0,
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "w-full",
                children: (0, i.jsx)(V, { imageRef: t }),
              }),
              (0, i.jsx)("div", {
                className: "absolute left-0 w-full z-10 pointer-events-none",
                style: { bottom: e ? 187 : a },
                children: (0, i.jsx)("img", {
                  src: "/images/progressBg.png",
                  alt: "rocket",
                  className: "w-full h-auto",
                }),
              }),
            ],
          });
        }),
        G = [
          {
            question: "What is an AI Influencer ?",
            answer:
              "An AI Influencer is a virtual persona powered by artificial intelligence, capable of interacting with users, generating content, and building communities — just like human creators. At Xeleb, these agents are programmable, ownable, and can generate real-world utility and revenue.",
          },
          {
            question: "How do I create my own AI Influencer ?",
            answer:
              "You can create your AI Influencer directly on Xeleb's platform without writing any code. Customize its personality, behavior, and utility, then launch it onchain for your audience.",
          },
          {
            question: "What is 'Proof of Utility' ?",
            answer:
              "Proof of Utility is Xeleb's verification standard - only AI agents with real use cases and active user engagement can be tokenized. No speculation, only real value.",
          },
          {
            question: "Can I earn from my AI Influencer ?",
            answer:
              "Yes. Once launched, your AI agent can generate revenue through interactions, subscriptions, and token utility — all tracked transparently onchain.",
          },
          {
            question: "Which chains does Xeleb support ?",
            answer:
              "Currently, Xeleb supports BNB Chain. More EVM chains are coming soon.",
          },
        ],
        q = (e) => {
          let t = (0, n.useRef)(null),
            [a, i] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (!t.current) return;
              let a = new window.IntersectionObserver((e) => {
                let [t] = e;
                return i(t.isIntersecting);
              }, e);
              return a.observe(t.current), () => a.disconnect();
            }, [e]),
            [t, a]
          );
        },
        Y = (0, s.PA)((e) => {
          let {} = e;
          (0, r.U)(768), (0, r.U)(1024);
          let [t, a] = (0, n.useState)(0),
            [s, o] = q({ threshold: 0.2 }),
            c = (e) => {
              a(t === e ? null : e);
            };
          return (0, i.jsx)("section", {
            id: "progress",
            ref: s,
            className:
              "w-full px-4 flex flex-col items-center justify-center py-24 relative z-100 overflow-y-hidden transition-all duration-1000 ease-out ".concat(
                o ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              ),
            style: { zIndex: 100 },
            children: (0, i.jsxs)("div", {
              className:
                "w-full max-w-7xl flex flex-col md:flex-row items-start justify-center gap-12 md:gap-24 mt-12 md:mt-24 relative z-100",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center md:items-start md:w-1/2 w-full",
                  children: [
                    (0, i.jsxs)("h2", {
                      className:
                        "text-white font-sans font-medium text-5xl md:text-8xl leading-tight md:leading-[1.1] md:mb-10 mb-6 whitespace-pre-line text-center md:text-left",
                      children: ["Frequently", " ", "Asked", " ", "Questions"],
                    }),
                    // (0, i.jsx)("div", {
                    //   children: (0, i.jsx)(x.r, {
                    //     variant: "borderedWhite",
                    //     className: "w-full md:w-auto px-2 pr-3",
                    //     leftIcon: (0, i.jsx)(d.default, {
                    //       src: "/images/arrowUpRight.png",
                    //       width: 20,
                    //       height: 20,
                    //       alt: "star",
                    //     }),
                    //     onClick: () => window.open(l.fo.VIEW_ALL),
                    //     children: (0, i.jsx)("span", { children: "READ ALL" }),
                    //   }),
                    // }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "flex flex-col w-full md:w-1/2 gap-4",
                  children: G.map((e, a) => {
                    let s = t === a;
                    return (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "w-full border border-white/10 rounded transition-all duration-200 bg-white/5 relative ".concat(
                            s ? "border-white/30 bg-white/10 border-dotted" : ""
                          ),
                        children: [
                          s &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute top-0 left-0 w-2 h-2 bg-white/50 rounded-sm",
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 w-2 h-2 bg-white/50 rounded-sm",
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-2 h-2 bg-white/50 rounded-sm",
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-2 h-2 bg-white/50 rounded-sm",
                                }),
                              ],
                            }),
                          (0, i.jsxs)("button", {
                            className:
                              "w-full flex items-center justify-between px-6 py-5 text-left group",
                            onClick: () => c(a),
                            "aria-expanded": s,
                            "aria-controls": "faq-panel-".concat(a),
                            tabIndex: 0,
                            children: [
                              (0, i.jsx)("span", {
                                className:
                                  "text-white text-lg md:text-2xl font-medium",
                                children: e.question,
                              }),
                              (0, i.jsx)("span", {
                                className:
                                  "ml-4 transition-transform duration-200 ".concat(
                                    s ? "rotate-180" : ""
                                  ),
                                "aria-hidden": "true",
                                children: (0, i.jsx)("svg", {
                                  width: "24",
                                  height: "24",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: (0, i.jsx)("path", {
                                    d: "M8 10l4 4 4-4",
                                    stroke: "#fff",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            id: "faq-panel-".concat(a),
                            className:
                              "px-6 pb-0 text-white/60 text-base lg:text-lg text-left overflow-hidden transition-all duration-400 ease-in-out ".concat(
                                s
                                  ? "max-h-96 opacity-100 pb-6"
                                  : "max-h-0 opacity-0"
                              ),
                            style: {
                              transitionProperty:
                                "max-height, opacity, padding-bottom",
                            },
                            "aria-hidden": !s,
                            children: e.answer,
                          }),
                        ],
                      },
                      e.question
                    );
                  }),
                }),
              ],
            }),
          });
        });
      var Z = a(1416);
      let K = (e) => {
          let t = (0, n.useRef)(null),
            [a, i] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (!t.current) return;
              let a = new window.IntersectionObserver((e) => {
                let [t] = e;
                return i(t.isIntersecting);
              }, e);
              return a.observe(t.current), () => a.disconnect();
            }, [e]),
            [t, a]
          );
        },
        Q = (0, s.PA)((e) => {
          let {} = e,
            t = (0, r.U)(768),
            [a, s] = K({ threshold: 0.2 }),
            l = [
              {
                title:
                  "$XCX Now Trading on Top Exchanges: Binance Alpha, MEXC, Bitget, Gate, and PancakeSwap",
                content:
                  "Backed by top Web3 investors, $XCX fuels the rise of Utility AI and the next-gen creator economy — now live on major exchanges: Binance Alpha, MEXC, Bitget, Gate, and PancakeSwap",
                image: "/GyEC3xybAAAgNgO.png",
                readUrl:
                  "#",
              },
              {
                title: "Xeleb Protocol Mainnet Is Live ",
                content:
                  "Create your first AI Influencer in minutes — no code, no tech skills, just pure creativity. Early pioneers get the biggest rewards.",
                image:
                  "/public.png",
                readUrl:
                  "#",
              },
              {
                title: "Xeleb Protocol Now Live on BNB Chain",
                content:
                  "Xeleb Protocol enters Binance Ecosystem. Powering the next wave of AI x Web3 — build, own, and scale performance-driven AI agents with real-world utility.",
                image: "/GubF0t7a8AA_XPK.png",
                readUrl:
                  "#",
              },
              {
                title:
                  "Xeleb Protocol & Miss AI Now Live on BNB Chain' DappBay",
                content:
                  "Utility-driven AI Influencers with Proof-of-Utility — featured in BNB Chain’s Newest Web3 dApps on DappBay.",
                image:
                  "/wide---2025-06-27T180454.png",
                readUrl:
                  "#",
              },
              {
                title: "Xeleb Protocol – Bringing AI Influencers to Life",
                content:
                  "Leading AI Agent Launchpad on BNB Chain - Where AI delivers real utility, tokenized identity, on-chain governance, and economic impact.",
                image:
                  "/GxQi2gLbEAANGFI.png",
                readUrl:
                  "#",
              },
            ],
            [o, c] = (0, h.E)(
              {
                loop: !0,
                slideChanged(e) {
                  p(e.track.details.rel);
                },
                initial: 0,
              },
              [
                (e) => {
                  let t;
                  let a = !1;
                  function i() {
                    clearTimeout(t);
                  }
                  function s() {
                    clearTimeout(t),
                      a ||
                        (t = setTimeout(() => {
                          e.next();
                        }, 5e3));
                  }
                  e.on("created", () => {
                    e.container.addEventListener("mouseover", () => {
                      (a = !0), i();
                    }),
                      e.container.addEventListener("mouseout", () => {
                        (a = !1), s();
                      }),
                      s();
                  }),
                    e.on("dragStarted", i),
                    e.on("animationEnded", s),
                    e.on("updated", s);
                },
              ]
            ),
            [m, p] = n.useState(0);
          l.length;
          let u = () => {
              var e;
              return null === (e = c.current) || void 0 === e
                ? void 0
                : e.prev();
            },
            g = () => {
              var e;
              return null === (e = c.current) || void 0 === e
                ? void 0
                : e.next();
            },
            f = (e, t) =>
              (0, i.jsx)("div", {
                className: "md:flex-1 flex justify-center items-center w-full",
                children: (0, i.jsx)("div", {
                  className:
                    "relative w-full h-[180px] max-w-xs aspect-[16/9] md:max-w-md md:aspect-video",
                  children: (0, i.jsx)(d.default, {
                    src: e.image,
                    alt: e.title,
                    fill: !0,
                    className: "rounded-xl object-cover w-full",
                    priority: t === m,
                  }),
                }),
              });
          return (0, i.jsxs)("div", {
            className: "flex flex-col w-full relative",
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] max-h-[1000px]",
                children: (0, i.jsx)(d.default, {
                  src: "/images/newsBg.png",
                  alt: "News Background",
                  fill: !0,
                  className: "object-cover",
                }),
              }),
              (0, i.jsxs)("section", {
                id: "news",
                ref: a,
                className:
                  "w-full px-4 flex flex-col items-center justify-center pt-8 relative z-100 overflow-hidden transition-all duration-1000 ease-out ".concat(
                    s ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  ),
                tabIndex: 0,
                "aria-label": "News slideshow section",
                onKeyDown: (e) => {
                  "ArrowLeft" === e.key && u(), "ArrowRight" === e.key && g();
                },
                style: { zIndex: 100 },
                children: [
                  (0, i.jsx)("div", {
                    className: "text-center mb-10 md:mt-20 mt-10",
                    style: { zIndex: 100 },
                    children: (0, i.jsx)("p", {
                      className:
                        "text-white/50 text-sm mb-10 tracking-[0.2em] z-100",
                      children: "[ FROM XELEB PROTOCOL ]",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "md:max-w-[850px] max-w-[450px] z-50 mb-16",
                    children: (0, i.jsx)(d.default, {
                      src: "/images/newsText.png",
                      alt: "News Update",
                      width: 1033,
                      height: 64,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "relative w-full max-w-6xl flex items-center justify-center z-50",
                    children: [
                      (0, i.jsx)("button", {
                        className:
                          "hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full p-3 hover:bg-white/10 w-[50px] h-[50px] justify-center items-center z-10",
                        onClick: u,
                        tabIndex: 0,
                        "aria-label": "Previous news",
                        children: (0, i.jsx)(y, {
                          className: "text-white w-8 h-8 rotate-180",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        ref: o,
                        className: "keen-slider max-w-4xl mx-auto",
                        children: l.map((e, a) =>
                          (0, i.jsx)(
                            "div",
                            {
                              className: "keen-slider__slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "bg-neutral-900/95 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col-reverse md:flex-row items-center md:justify-between justify-center p-4 mx-4 md:p-8 md:py-6 min-h-[430px] md:min-h-[300px]",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "flex-1 flex flex-col md:justify-center justify-between items-start md:pr-12 h-full",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-4 pt-4",
                                        children: [
                                          (0, i.jsx)("h2", {
                                            className:
                                              "text-white text-[29px] leading-tight md:text-left text-center line-clamp-2",
                                            children: e.title,
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-white/70 text-sm md:text-base lg:text-lg mb-8 leading-relaxed max-w-lg md:text-left text-center line-clamp-3",
                                            children: e.content,
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "md:self-end w-full flex justify-center md:justify-start",
                                        children: (0, i.jsx)(x.r, {
                                          fullWidth: t,
                                          variant: "borderedWhite",
                                          className: "px-3 pl-2 bg-black/30",
                                          leftIcon: (0, i.jsx)(d.default, {
                                            src: "/images/arrowUpRight.png",
                                            width: 20,
                                            height: 20,
                                            alt: "star",
                                          }),
                                          onPress: () => {
                                            "#" !== e.readUrl &&
                                              window.open(e.readUrl, "_blank");
                                          },
                                          children: "READ",
                                        }),
                                      }),
                                    ],
                                  }),
                                  f(e, a),
                                ],
                              }),
                            },
                            a
                          )
                        ),
                      }),
                      (0, i.jsx)("button", {
                        className:
                          "hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full w-[50px] h-[50px] justify-center items-center p-3 hover:bg-white/10 focus:outline-none z-10",
                        onClick: g,
                        tabIndex: 0,
                        "aria-label": "Next news",
                        children: (0, i.jsx)(y, {
                          className: "text-white w-8 h-8 ",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "flex items-center justify-center gap-3 mt-12 mb-8",
                    children: l.map((e, t) =>
                      (0, i.jsx)(
                        "button",
                        {
                          onClick: () => {
                            var e;
                            return null === (e = c.current) || void 0 === e
                              ? void 0
                              : e.moveToIdx(t);
                          },
                          className:
                            "transition-all duration-300 rounded-full focus:outline-none \n              "
                              .concat(
                                t === m
                                  ? "w-10 h-2 bg-white"
                                  : "w-6 h-2 bg-neutral-800",
                                "\n              "
                              )
                              .concat(
                                c.current
                                  ? "cursor-pointer"
                                  : "cursor-not-allowed",
                                "\n            "
                              ),
                          "aria-label": "Go to news ".concat(t + 1),
                          "aria-pressed": t === m,
                          "aria-disabled": !c.current,
                          tabIndex: 0,
                          disabled: !c.current,
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
              (0, i.jsx)(Z.A, {}),
            ],
          });
        }),
        $ = (0, s.PA)(
          () => (
            (0, s.iz)(() => ({})),
            (0, i.jsx)("div", {
              className: "w-full h-full flex flex-col items-center",
              children: (0, i.jsxs)("div", {
                className: "z-20 flex flex-col items-center text-center w-full",
                children: [
                  (0, i.jsx)(m, {}),
                  (0, i.jsx)(E, {}),
                  (0, i.jsx)(C, {}),
                  (0, i.jsx)(T, {}),
                  (0, i.jsx)(F, {}),
                  (0, i.jsx)(H, {}),
                  (0, i.jsx)(Y, {}),
                  (0, i.jsx)(Q, {}),
                ],
              }),
            })
          )
        ),
        J = () => (0, i.jsx)(n.Suspense, { children: (0, i.jsx)($, {}) });
    },
    44462: (e) => {
      e.exports = {
        glow: "HowXelebWorkCard_glow__3tYqc",
        card: "HowXelebWorkCard_card__QRuAI",
        noise: "HowXelebWorkCard_noise__xIb0r",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [669, 935, 866, 334, 376, 515, 989, 361, 441, 517, 358], () =>
      t(69393)
    ),
      (_N_E = e.O());
  },
]);

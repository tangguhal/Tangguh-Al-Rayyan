import {
    R as y,
    u as w,
    p as N,
    j as e,
    S as k,
    T as A,
    A as $
} from "./index-CVidOCxR.js";
const R = y.memo(({
    t: a,
    lang: l,
    projects: i,
    isAdmin: c,
    handleEditProject: d,
    handleDeleteProject: m
}) => {
    const {
        ref: u,
        inView: h
    } = w({
        threshold: .1,
        triggerOnce: !0
    }), p = h, g = i.length > 0 ? i : a.projects.list.map(s => ({ ...s,
        ...N[s.id]
    })), f = s => {
        switch (s % 6) {
            case 0:
                return "md:col-span-2 md:row-span-2";
            case 1:
                return "md:col-span-1 md:row-span-1";
            case 2:
                return "md:col-span-1 md:row-span-2";
            case 3:
                return "md:col-span-1 md:row-span-1";
            case 4:
                return "md:col-span-2 md:row-span-1";
            default:
                return "md:col-span-1 md:row-span-1"
        }
    };
    return e.jsxs("section", {
        id: "projects",
        className: "relative w-full min-h-screen flex flex-col justify-center items-center py-20",
        children: [e.jsx("div", {
            className: "absolute inset-0 bg-black/40 z-0 pointer-events-none"
        }), e.jsxs("div", {
            className: "text-center mb-16 relative z-20 px-4",
            children: [e.jsxs("h3", {
                className: "text-4xl font-bold mb-4 text-white animate-fade-up",
                children: [e.jsx("span", {
                    children: a.projects.title
                }, `${l}-proj-title`), " ", e.jsxs("span", {
                    className: "text-teal-400",
                    children: [" ", a.projects.subtitle]
                })]
            }), e.jsx("p", {
                className: "text-gray-400 text-lg font-light max-w-2xl mx-auto animate-fade-up delay-100",
                children: a.projects.desc
            }, `${l}-proj-desc`), c && e.jsx("button", {
                onClick: () => d(null),
                className: "mt-4 text-teal-400 font-medium",
                children: "+ TAMBAH PROYEK BARU"
            })]
        }), e.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 w-full relative z-20",
            ref: u,
            children: [e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4",
                children: g.map((s, r) => {
                    const x = s.link && s.link !== "#",
                        b = x ? "a" : "div",
                        j = x ? {
                            href: s.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {},
                        n = f(r),
                        o = n.includes("col-span-1") && n.includes("row-span-1");
                    return e.jsx("div", {
                        className: `relative group rounded-3xl overflow-hidden border border-white/10 shadow-lg transition-all duration-500 hover:border-teal-500/50 ${n} ${p?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,
                        style: {
                            transitionDelay: p ? `${r*100}ms` : "0s"
                        },
                        children: e.jsxs(b, { ...j,
                            className: "block w-full h-full cursor-pointer",
                            children: [e.jsx("div", {
                                className: "w-full h-full bg-gray-900",
                                children: e.jsx("img", {
                                    src: s.img,
                                    alt: s.title,
                                    loading: "lazy",
                                    className: `w-full h-full object-cover transition-all duration-700 
                                            grayscale blur-[2px] scale-100 opacity-80
                                            group-hover:grayscale-0 group-hover:blur-0 group-hover:scale-110 group-hover:opacity-100`
                                })
                            }), e.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }), c && e.jsxs("div", {
                                className: "absolute top-4 right-4 z-50 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                children: [e.jsx("button", {
                                    onClick: t => {
                                        t.preventDefault(), t.stopPropagation(), d(s)
                                    },
                                    className: "p-2 bg-teal-500 text-white rounded-full",
                                    children: e.jsx(k, {
                                        className: "w-4 h-4"
                                    })
                                }), e.jsx("button", {
                                    onClick: t => {
                                        t.preventDefault(), t.stopPropagation(), m(s)
                                    },
                                    className: "p-2 bg-red-500 text-white rounded-full",
                                    children: e.jsx(A, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), e.jsx("div", {
                                className: "absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500",
                                children: e.jsxs("div", {
                                    className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75",
                                    children: [e.jsx("h4", {
                                        className: `font-bold text-white mb-2 leading-tight ${o?"text-lg":"text-2xl"}`,
                                        children: s.title
                                    }), e.jsx("p", {
                                        className: `text-gray-300 mb-4 ${o?"text-xs line-clamp-2":"text-sm line-clamp-3"}`,
                                        children: s.desc
                                    }), !o && e.jsx("div", {
                                        className: "flex flex-wrap gap-2 mb-4",
                                        children: (s.tech || "").split(", ").map((t, v) => e.jsx("span", {
                                            className: "text-[10px] font-bold px-2 py-1 rounded bg-teal-500/20 text-teal-300 border border-teal-500/20",
                                            children: t
                                        }, v))
                                    }), e.jsxs("div", {
                                        className: "flex items-center text-sm font-medium text-teal-400",
                                        children: [e.jsx("span", {
                                            children: a.projects.btnAll.includes("All") ? "View" : "Lihat"
                                        }), e.jsx($, {
                                            className: "ml-2 w-4 h-4"
                                        })]
                                    })]
                                })
                            })]
                        })
                    }, s.id)
                })
            }), e.jsx("div", {
                className: "mt-16 text-center",
                children: e.jsx("button", {
                    className: "px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-teal-500/10 hover:text-teal-400 transition-all",
                    children: e.jsx("span", {
                        children: a.projects.btnAll
                    }, `${l}-view-all`)
                })
            })]
        })]
    })
});
export {
    R as
    default
};
import {
    c as E,
    R as _,
    r as f,
    j as t,
    a as A,
    M as y,
    W as H,
    b as C,
    d as M,
    U as F,
    A as D,
    z as g
} from "./index-CVidOCxR.js";
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = E("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
class h {
    constructor(a = 0, s = "Network Error") {
        this.status = a, this.text = s
    }
}
const K = () => {
        if (!(typeof localStorage > "u")) return {
            get: e => Promise.resolve(localStorage.getItem(e)),
            set: (e, a) => Promise.resolve(localStorage.setItem(e, a)),
            remove: e => Promise.resolve(localStorage.removeItem(e))
        }
    },
    i = {
        origin: "https://api.emailjs.com",
        blockHeadless: !1,
        storageProvider: K()
    },
    x = e => e ? typeof e == "string" ? {
        publicKey: e
    } : e.toString() === "[object Object]" ? e : {} : {},
    O = (e, a = "https://api.emailjs.com") => {
        if (!e) return;
        const s = x(e);
        i.publicKey = s.publicKey, i.blockHeadless = s.blockHeadless, i.storageProvider = s.storageProvider, i.blockList = s.blockList, i.limitRate = s.limitRate, i.origin = s.origin || a
    },
    N = async (e, a, s = {}) => {
        const o = await fetch(i.origin + e, {
                method: "POST",
                headers: s,
                body: a
            }),
            r = await o.text(),
            n = new h(o.status, r);
        if (o.ok) return n;
        throw n
    },
    k = (e, a, s) => {
        if (!e || typeof e != "string") throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!a || typeof a != "string") throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!s || typeof s != "string") throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
    },
    z = e => {
        if (e && e.toString() !== "[object Object]") throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
    },
    S = e => e.webdriver || !e.languages || e.languages.length === 0,
    L = () => new h(451, "Unavailable For Headless Browser"),
    B = (e, a) => {
        if (!Array.isArray(e)) throw "The BlockList list has to be an array";
        if (typeof a != "string") throw "The BlockList watchVariable has to be a string"
    },
    q = e => {
        var a;
        return !((a = e.list) != null && a.length) || !e.watchVariable
    },
    U = (e, a) => e instanceof FormData ? e.get(a) : e[a],
    T = (e, a) => {
        if (q(e)) return !1;
        B(e.list, e.watchVariable);
        const s = U(a, e.watchVariable);
        return typeof s != "string" ? !1 : e.list.includes(s)
    },
    P = () => new h(403, "Forbidden"),
    $ = (e, a) => {
        if (typeof e != "number" || e < 0) throw "The LimitRate throttle has to be a positive number";
        if (a && typeof a != "string") throw "The LimitRate ID has to be a non-empty string"
    },
    W = async (e, a, s) => {
        const o = Number(await s.get(e) || 0);
        return a - Date.now() + o
    },
    I = async (e, a, s) => {
        if (!a.throttle || !s) return !1;
        $(a.throttle, a.id);
        const o = a.id || e;
        return await W(o, a.throttle, s) > 0 ? !0 : (await s.set(o, Date.now().toString()), !1)
    },
    R = () => new h(429, "Too Many Requests"),
    G = async (e, a, s, o) => {
        const r = x(o),
            n = r.publicKey || i.publicKey,
            d = r.blockHeadless || i.blockHeadless,
            c = r.storageProvider || i.storageProvider,
            m = { ...i.blockList,
                ...r.blockList
            },
            p = { ...i.limitRate,
                ...r.limitRate
            };
        return d && S(navigator) ? Promise.reject(L()) : (k(n, e, a), z(s), s && T(m, s) ? Promise.reject(P()) : await I(location.pathname, p, c) ? Promise.reject(R()) : N("/api/v1.0/email/send", JSON.stringify({
            lib_version: "4.4.1",
            user_id: n,
            service_id: e,
            template_id: a,
            template_params: s
        }), {
            "Content-type": "application/json"
        }))
    },
    Y = e => {
        if (!e || e.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
    },
    J = e => typeof e == "string" ? document.querySelector(e) : e,
    Z = async (e, a, s, o) => {
        const r = x(o),
            n = r.publicKey || i.publicKey,
            d = r.blockHeadless || i.blockHeadless,
            c = i.storageProvider || r.storageProvider,
            m = { ...i.blockList,
                ...r.blockList
            },
            p = { ...i.limitRate,
                ...r.limitRate
            };
        if (d && S(navigator)) return Promise.reject(L());
        const u = J(s);
        k(n, e, a), Y(u);
        const l = new FormData(u);
        return T(m, l) ? Promise.reject(P()) : await I(location.pathname, p, c) ? Promise.reject(R()) : (l.append("lib_version", "4.4.1"), l.append("service_id", e), l.append("template_id", a), l.append("user_id", n), N("/api/v1.0/email/send-form", l))
    },
    Q = {
        init: O,
        send: G,
        sendForm: Z,
        EmailJSResponseStatus: h
    },
    te = _.memo(({
        t: e,
        lang: a
    }) => {
        const s = f.useRef(),
            [o, r] = f.useState(!1),
            [n, d] = f.useState({
                name: "",
                email: "",
                message: ""
            }),
            c = l => {
                const {
                    name: b,
                    value: v
                } = l.target;
                d(w => ({ ...w,
                    [b]: v
                }))
            },
            m = l => {
                l.preventDefault(), r(!0);
                const b = g.loading("Mengirim pesan...");
                Q.sendForm("service_iun3wen", "template_4bo64k4", s.current, "t7OSaOizjcLTroNxN").then(j => {
                    g.success("Pesan terkirim! Saya akan segera membalas.", {
                        id: b
                    }), d({
                        name: "",
                        email: "",
                        message: ""
                    }), r(!1)
                }, j => {
                    console.error(j), g.error("Gagal mengirim. Coba hubungi via WhatsApp.", {
                        id: b
                    }), r(!1)
                })
            },
            u = `https://wa.me/${e.contact.contactInfo.waNumber||e.contact.contactInfo.phone.replace(/[^0-9]/g,"")}?text=Halo%20Hafidz,%20saya%20tertarik%20bekerja%20sama.`;
        return t.jsxs("section", {
            id: "contact",
            className: "relative w-full flex flex-col justify-center items-center py-20 overflow-hidden",
            children: [t.jsx("div", {
                className: "absolute inset-0 bg-black/40 z-0 pointer-events-none"
            }), t.jsxs("div", {
                className: "max-w-5xl mx-auto px-4 text-center w-full relative z-20",
                children: [t.jsxs("h3", {
                    className: "text-4xl font-bold mb-8 text-white animate-fade-up",
                    children: [t.jsx("span", {
                        children: e.contact.title
                    }, `${a}-contact-title`), " ", t.jsxs("span", {
                        className: "text-teal-400",
                        children: [" ", e.contact.subtitle]
                    })]
                }), t.jsx("p", {
                    className: "text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto animate-fade-up delay-100",
                    children: e.contact.desc
                }, `${a}-contact-desc`), t.jsx("div", {
                    children: t.jsx(A, {
                        spotlightColor: "rose",
                        className: "p-0 overflow-hidden",
                        children: t.jsxs("div", {
                            className: "grid md:grid-cols-5 h-full",
                            children: [t.jsxs("div", {
                                className: "md:col-span-2 bg-black/40 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5",
                                children: [t.jsx("div", {
                                    className: "absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(79,70,229,0.05)_50%,transparent_100%)] animate-scan pointer-events-none"
                                }), t.jsxs("div", {
                                    children: [t.jsxs("div", {
                                        className: "flex items-center space-x-2 mb-8",
                                        children: [t.jsxs("span", {
                                            className: "relative flex h-3 w-3",
                                            children: [t.jsx("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"
                                            }), t.jsx("span", {
                                                className: "relative inline-flex rounded-full h-3 w-3 bg-rose-500"
                                            })]
                                        }), t.jsx("span", {
                                            className: "text-rose-400 text-sm font-bold tracking-wider",
                                            children: "SYSTEM STATUS: ONLINE"
                                        })]
                                    }), t.jsxs("div", {
                                        className: "space-y-4 relative z-10",
                                        children: [t.jsxs("a", {
                                            href: `mailto:${e.contact.contactInfo.email}`,
                                            className: "group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300",
                                            children: [t.jsx("div", {
                                                className: "p-3 rounded-lg bg-black/40 text-teal-400 mr-4 group-hover:scale-110 transition",
                                                children: t.jsx(y, {
                                                    className: "w-6 h-6"
                                                })
                                            }), t.jsxs("div", {
                                                className: "text-left",
                                                children: [t.jsx("div", {
                                                    className: "text-xs text-gray-500 uppercase tracking-wider font-medium",
                                                    children: "Email Me"
                                                }), t.jsx("div", {
                                                    className: "text-gray-200 group-hover:text-teal-300 transition font-semibold text-sm break-all",
                                                    children: e.contact.contactInfo.email
                                                })]
                                            })]
                                        }), t.jsxs("a", {
                                            href: u,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 cursor-pointer",
                                            children: [t.jsx("div", {
                                                className: "p-3 rounded-lg bg-black/40 text-green-400 mr-4 group-hover:scale-110 transition",
                                                children: t.jsx(V, {
                                                    className: "w-6 h-6"
                                                })
                                            }), t.jsxs("div", {
                                                className: "text-left",
                                                children: [t.jsx("div", {
                                                    className: "text-xs text-gray-500 uppercase tracking-wider font-medium",
                                                    children: "Chat WhatsApp"
                                                }), t.jsx("div", {
                                                    className: "text-gray-200 group-hover:text-green-300 transition font-semibold",
                                                    children: e.contact.contactInfo.phone
                                                })]
                                            })]
                                        })]
                                    })]
                                }), t.jsxs("div", {
                                    className: "mt-10 flex items-center space-x-4 text-gray-600 opacity-50",
                                    children: [t.jsx(H, {
                                        className: "w-5 h-5 animate-pulse"
                                    }), t.jsx(C, {
                                        className: "w-5 h-5 animate-pulse delay-300"
                                    }), t.jsx("span", {
                                        className: "text-xs tracking-widest font-mono",
                                        children: "ESTABLISHING UPLINK..."
                                    })]
                                })]
                            }), t.jsxs("div", {
                                className: "md:col-span-3 p-8 md:p-10 relative",
                                children: [t.jsxs("h4", {
                                    className: "text-xl font-bold text-white mb-6 flex items-center",
                                    children: [t.jsx(M, {
                                        className: "w-5 h-5 mr-3 text-rose-400"
                                    }), " INITIATE DATA TRANSMISSION"]
                                }), t.jsxs("form", {
                                    ref: s,
                                    className: "space-y-6",
                                    onSubmit: m,
                                    children: [t.jsxs("div", {
                                        className: "relative group",
                                        children: [t.jsx(F, {
                                            className: "absolute left-0 bottom-3 text-gray-500 w-5 h-5 transition-colors group-focus-within:text-indigo-400"
                                        }), t.jsx("input", {
                                            type: "text",
                                            name: "name",
                                            id: "name",
                                            "aria-label": "Nama Lengkap",
                                            value: n.name,
                                            onChange: c,
                                            required: !0,
                                            className: "w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-700 text-gray-200 outline-none focus:border-indigo-500 placeholder-gray-500 transition-all",
                                            placeholder: " "
                                        }), t.jsx("label", {
                                            htmlFor: "name",
                                            className: "absolute left-8 top-3 text-gray-500 text-sm transition-all group-focus-within:-top-3 group-focus-within:text-xs group-focus-within:text-indigo-400 pointer-events-none",
                                            children: t.jsx("span", {
                                                className: "animate-fade-up",
                                                children: e.contact.form.name
                                            }, `${a}-form-name`)
                                        })]
                                    }), t.jsxs("div", {
                                        className: "relative group",
                                        children: [t.jsx(y, {
                                            className: "absolute left-0 bottom-3 text-gray-500 w-5 h-5 transition-colors group-focus-within:text-rose-400"
                                        }), t.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            id: "email",
                                            "aria-label": "Alamat Email",
                                            value: n.email,
                                            onChange: c,
                                            required: !0,
                                            className: "w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-700 text-gray-200 outline-none focus:border-rose-500 placeholder-gray-500 transition-all",
                                            placeholder: " "
                                        }), t.jsx("label", {
                                            htmlFor: "email",
                                            className: "absolute left-8 top-3 text-gray-500 text-sm transition-all group-focus-within:-top-3 group-focus-within:text-xs group-focus-within:text-rose-400 pointer-events-none",
                                            children: t.jsx("span", {
                                                className: "animate-fade-up",
                                                children: e.contact.form.email
                                            }, `${a}-form-email`)
                                        })]
                                    }), t.jsx("div", {
                                        className: "relative group pt-4",
                                        children: t.jsx("textarea", {
                                            rows: "3",
                                            name: "message",
                                            id: "message",
                                            "aria-label": "Pesan Anda",
                                            value: n.message,
                                            onChange: c,
                                            required: !0,
                                            className: "w-full p-4 bg-white/5 border border-white/10 rounded-xl text-gray-200 outline-none focus:border-teal-500/50 focus:bg-black/40 placeholder-gray-500 transition-all resize-none",
                                            placeholder: e.contact.form.msg
                                        })
                                    }), t.jsxs("button", {
                                        disabled: o,
                                        type: "submit",
                                        className: "group relative w-full py-4 bg-rose-500 text-[#0a192f] rounded-xl font-bold overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [t.jsx("div", {
                                            className: "absolute inset-0 w-full h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                                        }), t.jsx("span", {
                                            className: "relative z-10 flex items-center justify-center tracking-wider",
                                            children: o ? "SENDING..." : t.jsxs(t.Fragment, {
                                                children: [t.jsx("span", {
                                                    className: "animate-fade-up",
                                                    children: e.contact.form.btn
                                                }, `${a}-form-btn`), t.jsx(D, {
                                                    className: "ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                })]
            })]
        })
    });
export {
    te as
    default
};
globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { a as HTTPError, d as defineLazyEventHandler, H as H3Core } from "./_libs/h3.mjs";
import { H as HookableCore } from "./_libs/hookable.mjs";

import { F as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/assets/Al-Yasid-Bm-z5K-a.png": {
    "type": "image/png",
    "etag": '"20774-O9cJAgCwzuL4hUlO61VqUIxp1EI"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 132980,
    "path": "../client/assets/Al-Yasid-Bm-z5K-a.png"
  },
  "/assets/Brendan-D8B1ZMVt.png": {
    "type": "image/png",
    "etag": '"21042-OOp9MVevCdjgP+xB6Uu5wxxunnA"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 135234,
    "path": "../client/assets/Brendan-D8B1ZMVt.png"
  },
  "/assets/KIERON_SALTER-Cbik1S_v.png": {
    "type": "image/png",
    "etag": '"5a3d-VDRjgMBGkAHCoD1puwQo1ysy/FU"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 23101,
    "path": "../client/assets/KIERON_SALTER-Cbik1S_v.png"
  },
  "/assets/Primitives-BdClsbRr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f47-3eZAo3gcjxTGEUP3PwlysEDpMTM"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 8007,
    "path": "../client/assets/Primitives-BdClsbRr.js"
  },
  "/assets/Simon-Kw-BG0ASdJj.png": {
    "type": "image/png",
    "etag": '"24dda-g7iq4gfPMa3zlMgM5okArnYfLOc"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 151002,
    "path": "../client/assets/Simon-Kw-BG0ASdJj.png"
  },
  "/assets/about-CswVk1fx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a1f-MFYMdptjEjKS0Y1ZwJBdajD0u8o"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 6687,
    "path": "../client/assets/about-CswVk1fx.js"
  },
  "/assets/apply-DTpBATZ9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1012-559EiVooxLBtqlb4tiyYZQiJKOA"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 4114,
    "path": "../client/assets/apply-DTpBATZ9.js"
  },
  "/assets/Ian-Howe-DEhh2UC5.png": {
    "type": "image/png",
    "etag": '"31767-xhbg4BfCC3oGozHiukqb49V1AVs"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 202599,
    "path": "../client/assets/Ian-Howe-DEhh2UC5.png"
  },
  "/assets/Stuart-Peach-CH7eWYnA.png": {
    "type": "image/png",
    "etag": '"23f87-v3nRFWCqVdylcttz5GM+HNFb3hs"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 147335,
    "path": "../client/assets/Stuart-Peach-CH7eWYnA.png"
  },
  "/assets/Vision_To_the_road -4RKVkAdB.jpg": {
    "type": "image/jpeg",
    "etag": '"6d63e-zwl6wKiYT2NVaHXuZxYMX/hHy4A"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 448062,
    "path": "../client/assets/Vision_To_the_road -4RKVkAdB.jpg"
  },
  "/assets/contact-D2DX9GIa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1480-+nBeqbywn481TUsxanDojxc7/HE"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 5248,
    "path": "../client/assets/contact-D2DX9GIa.js"
  },
  "/assets/design-0Fp19V7V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"36-mMaZx2KkiFSaQ7Fu/d+yfu34p7s"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 54,
    "path": "../client/assets/design-0Fp19V7V.js"
  },
  "/assets/design-Dc-ZZXQQ.jpg": {
    "type": "image/jpeg",
    "etag": '"1a17c-qZlATH50DKK7DDrxC1CuD3bVE74"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 106876,
    "path": "../client/assets/design-Dc-ZZXQQ.jpg"
  },
  "/assets/dismantle-DDyiDgC6.jpg": {
    "type": "image/jpeg",
    "etag": '"2c8e8-JHJ0VGcBmfs5AFGs+Qd54d01SQU"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 182504,
    "path": "../client/assets/dismantle-DDyiDgC6.jpg"
  },
  "/assets/engine-BAsbs6x4.jpg": {
    "type": "image/jpeg",
    "etag": '"1b883-bmzCX44MexwdaeGP0A7m6qHO+mQ"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 112771,
    "path": "../client/assets/engine-BAsbs6x4.jpg"
  },
  "/assets/faq-DdZEef9l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"739-h+BnZsElDm+U8KFcAWsKt45e0mY"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 1849,
    "path": "../client/assets/faq-DdZEef9l.js"
  },
  "/assets/experience-DGwLIzHz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fb3-7CsYFhWsCaat+HXIhX+knmzVPKA"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 4019,
    "path": "../client/assets/experience-DGwLIzHz.js"
  },
  "/assets/hero-car-D7AYmz0K.jpg": {
    "type": "image/jpeg",
    "etag": '"2b0a0-PHbrwlfncDG5HOr/fP2YR3PFpM8"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 176288,
    "path": "../client/assets/hero-car-D7AYmz0K.jpg"
  },
  "/assets/index-BdBT6zHP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5b6c5-hV7u1aJRz2Yv6hZQIA9tns0O0Zg"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 374469,
    "path": "../client/assets/index-BdBT6zHP.js"
  },
  "/assets/index-DNbq0CQO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a4a-4JEqgDVpUvllYcl3b1J0q9FH2qU"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 10826,
    "path": "../client/assets/index-DNbq0CQO.js"
  },
  "/assets/Hospitality-BsUpDMdM.png": {
    "type": "image/png",
    "etag": '"dfc99-jSL6afMlNIV5R7AYVqyA7z/A+YY"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 916633,
    "path": "../client/assets/Hospitality-BsUpDMdM.png"
  },
  "/assets/Bare_Shell_Disamantling-DFLSKoly.jpg": {
    "type": "image/jpeg",
    "etag": '"99d52-G7374LLtFAHqZC4/0IJ23KAf+Wk"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 630098,
    "path": "../client/assets/Bare_Shell_Disamantling-DFLSKoly.jpg"
  },
  "/assets/ENGINE-BDR4qXPc.png": {
    "type": "image/png",
    "etag": '"17ec00-wRtNveXrd2xgihCvrol9z9IeNiA"',
    "mtime": "2026-07-23T16:06:11.730Z",
    "size": 1567744,
    "path": "../client/assets/ENGINE-BDR4qXPc.png"
  },
  "/assets/journal-D0OQziMI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"37-MS0gwm8y4nMB6XA6n7Wf4NlIPgk"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 55,
    "path": "../client/assets/journal-D0OQziMI.js"
  },
  "/assets/journal-QE0C1Wn8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4a-Gbc2JFd/mGUXOOAZL/kQYYtSiZc"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 74,
    "path": "../client/assets/journal-QE0C1Wn8.js"
  },
  "/assets/journal.index-DW-IfKu6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cff-UTaZDyoPdC+phLFkjbZSlMaTCvQ"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 3327,
    "path": "../client/assets/journal.index-DW-IfKu6.js"
  },
  "/assets/journal._slug-6VC1IUTA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f0-Gz6BuapMfkj+bz2ho+Sf1PZmk3c"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 752,
    "path": "../client/assets/journal._slug-6VC1IUTA.js"
  },
  "/assets/partners-qwXRqTmw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a02-+Kl4h3ePOfYMef3rb5BJuR4Q8Lg"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 2562,
    "path": "../client/assets/partners-qwXRqTmw.js"
  },
  "/assets/partner-BJ8BOiEC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"32-2QA/ZMS17kmfyrTpyDahWpPcymk"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 50,
    "path": "../client/assets/partner-BJ8BOiEC.js"
  },
  "/assets/process-Bh2Lfca3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"37-pZ901+WjPieQ+atdwyO0ssuYOxA"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 55,
    "path": "../client/assets/process-Bh2Lfca3.js"
  },
  "/assets/process-CLoVyc0E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130f-J1nihMwKpa5uAvVR/lMTtkXzxQY"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 4879,
    "path": "../client/assets/process-CLoVyc0E.js"
  },
  "/assets/scanning-Zqz__a3f.jpg": {
    "type": "image/jpeg",
    "etag": '"2d3e9-Bq/QaNdOTN5ds60MCtGiYAxJ9+0"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 185321,
    "path": "../client/assets/scanning-Zqz__a3f.jpg"
  },
  "/assets/styles-BTGW7T3T.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"164f0-tlR3CFwYd3LP4GgKnD2dZzoqKJI"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 91376,
    "path": "../client/assets/styles-BTGW7T3T.css"
  },
  "/assets/the-car-CHK0kwe-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15fc-slM4mFqz/z4eGdEbYFNMXuuqHz8"',
    "mtime": "2026-07-23T16:06:11.729Z",
    "size": 5628,
    "path": "../client/assets/the-car-CHK0kwe-.js"
  },
  "/assets/the-car-IRvns5Xa.jpg": {
    "type": "image/jpeg",
    "etag": '"24303-ebaZBH5xhhmlZHxhC3k2baiPBYk"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 148227,
    "path": "../client/assets/the-car-IRvns5Xa.jpg"
  },
  "/assets/the_car_crowd-BrIp2JeP.jpg": {
    "type": "image/jpeg",
    "etag": '"2fc09-/OkEvP7J1CtaZoF4jtPwo5ZaOa4"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 195593,
    "path": "../client/assets/the_car_crowd-BrIp2JeP.jpg"
  },
  "/assets/vision148-logo-Dbu8HTfX.jpg": {
    "type": "image/jpeg",
    "etag": '"2970b-DdHmwlDTLRBqaIAEx1WkMEBdHfc"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 169739,
    "path": "../client/assets/vision148-logo-Dbu8HTfX.jpg"
  },
  "/assets/workshop-DP3ouAaE.jpg": {
    "type": "image/jpeg",
    "etag": '"278a6-i7SRs4U0YFAhjcBqUI7wSQakABU"',
    "mtime": "2026-07-23T16:06:11.728Z",
    "size": 161958,
    "path": "../client/assets/workshop-DP3ouAaE.jpg"
  },
  "/assets/process-Wn1o6mEh.mp4": {
    "type": "video/mp4",
    "etag": '"195e692-nauh/Nb24EZ0HOE3oACH0g3vXcI"',
    "mtime": "2026-07-23T16:06:11.743Z",
    "size": 26601106,
    "path": "../client/assets/process-Wn1o6mEh.mp4"
  },
  "/assets/journal-CSqD8jW1.mp4": {
    "type": "video/mp4",
    "etag": '"1c7e236-AJwx8q7HO3WChQYNiR/sBu7gHDg"',
    "mtime": "2026-07-23T16:06:11.745Z",
    "size": 29876790,
    "path": "../client/assets/journal-CSqD8jW1.mp4"
  },
  "/assets/partner-OoUrGRph.mp4": {
    "type": "video/mp4",
    "etag": '"275b9b8-9N2aOB9EeTys3P0yvA2M5Eaop50"',
    "mtime": "2026-07-23T16:06:11.750Z",
    "size": 41269688,
    "path": "../client/assets/partner-OoUrGRph.mp4"
  },
  "/assets/chassis-DzkiDE7p.mp4": {
    "type": "video/mp4",
    "etag": '"3bafe98-b1tk9jfGdHIP5HOajArdKyz2Ej0"',
    "mtime": "2026-07-23T16:06:11.761Z",
    "size": 62586520,
    "path": "../client/assets/chassis-DzkiDE7p.mp4"
  },
  "/assets/video-CEQfNafy.mp4": {
    "type": "video/mp4",
    "etag": '"399269b-Ui9QnMCHMiWHYH9wz6+vb/NFjrs"',
    "mtime": "2026-07-23T16:06:11.760Z",
    "size": 60368539,
    "path": "../client/assets/video-CEQfNafy.mp4"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_Soq5yk = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_Soq5yk };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};

globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { a as HTTPError, d as defineHandler, t as toEventHandler, b as defineLazyEventHandler, H as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
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
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
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
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/.htaccess": {
    "type": "text/plain; charset=utf-8",
    "etag": '"1df-sWLSTU4ieH1h66ow7t5F1I2rOlQ"',
    "mtime": "2026-08-12T17:03:33.500Z",
    "size": 479,
    "path": "../client/.htaccess"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"43-kpvMtx+PW0IMoavEbFn2CEzdzjM"',
    "mtime": "2026-08-12T17:03:33.500Z",
    "size": 67,
    "path": "../client/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"a20-TlYlwpisT8zeGgacALGOzmKljVI"',
    "mtime": "2026-08-12T17:03:33.500Z",
    "size": 2592,
    "path": "../client/sitemap.xml"
  },
  "/assets/Al-Yasid-Bm-z5K-a.png": {
    "type": "image/png",
    "etag": '"20774-O9cJAgCwzuL4hUlO61VqUIxp1EI"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 132980,
    "path": "../client/assets/Al-Yasid-Bm-z5K-a.png"
  },
  "/assets/04_the_experience_Ownership_Reimagined-D0FqzApR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"56-8gvDDLOnDpfZRu5pkGL/lLrMnGU"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 86,
    "path": "../client/assets/04_the_experience_Ownership_Reimagined-D0FqzApR.js"
  },
  "/assets/Brendan-D8B1ZMVt.png": {
    "type": "image/png",
    "etag": '"21042-OOp9MVevCdjgP+xB6Uu5wxxunnA"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 135234,
    "path": "../client/assets/Brendan-D8B1ZMVt.png"
  },
  "/assets/KIERON_SALTER-Cbik1S_v.png": {
    "type": "image/png",
    "etag": '"5a3d-VDRjgMBGkAHCoD1puwQo1ysy/FU"',
    "mtime": "2026-08-12T17:03:32.736Z",
    "size": 23101,
    "path": "../client/assets/KIERON_SALTER-Cbik1S_v.png"
  },
  "/assets/Primitives-nuhntZRu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f1c-hvGFIC67WkXMNLEx9TtdAaoQk7w"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 7964,
    "path": "../client/assets/Primitives-nuhntZRu.js"
  },
  "/assets/Simon-Kw-BG0ASdJj.png": {
    "type": "image/png",
    "etag": '"24dda-g7iq4gfPMa3zlMgM5okArnYfLOc"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 151002,
    "path": "../client/assets/Simon-Kw-BG0ASdJj.png"
  },
  "/assets/Ian-Howe-DEhh2UC5.png": {
    "type": "image/png",
    "etag": '"31767-xhbg4BfCC3oGozHiukqb49V1AVs"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 202599,
    "path": "../client/assets/Ian-Howe-DEhh2UC5.png"
  },
  "/assets/about-BX2mhN_C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a62-Ot1TggBfQblRKKlhsTv3EEIzC00"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 6754,
    "path": "../client/assets/about-BX2mhN_C.js"
  },
  "/assets/apply-BM_Yf9uH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1012-gxHD9UkxxScQDEMVzGjMldWT3ZQ"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 4114,
    "path": "../client/assets/apply-BM_Yf9uH.js"
  },
  "/assets/Stuart-Peach-CH7eWYnA.png": {
    "type": "image/png",
    "etag": '"23f87-v3nRFWCqVdylcttz5GM+HNFb3hs"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 147335,
    "path": "../client/assets/Stuart-Peach-CH7eWYnA.png"
  },
  "/assets/blueprint_vRS500_ 001-Kb848IO4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"47-5sUGF3OS1pmdx0CetEt2bM9YWbU"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 71,
    "path": "../client/assets/blueprint_vRS500_ 001-Kb848IO4.js"
  },
  "/assets/Vision_To_the_road -4RKVkAdB.jpg": {
    "type": "image/jpeg",
    "etag": '"6d63e-zwl6wKiYT2NVaHXuZxYMX/hHy4A"',
    "mtime": "2026-08-12T17:03:32.736Z",
    "size": 448062,
    "path": "../client/assets/Vision_To_the_road -4RKVkAdB.jpg"
  },
  "/assets/contact-CWwVkkYd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"147b-JKbJnD8DJYOPOeOZ5EiCJGvS3dw"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 5243,
    "path": "../client/assets/contact-CWwVkkYd.js"
  },
  "/assets/dismantle-DDyiDgC6.jpg": {
    "type": "image/jpeg",
    "etag": '"2c8e8-JHJ0VGcBmfs5AFGs+Qd54d01SQU"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 182504,
    "path": "../client/assets/dismantle-DDyiDgC6.jpg"
  },
  "/assets/engine-BAsbs6x4.jpg": {
    "type": "image/jpeg",
    "etag": '"1b883-bmzCX44MexwdaeGP0A7m6qHO+mQ"',
    "mtime": "2026-08-12T17:03:32.736Z",
    "size": 112771,
    "path": "../client/assets/engine-BAsbs6x4.jpg"
  },
  "/assets/Bare_Shell_Disamantling-DFLSKoly.jpg": {
    "type": "image/jpeg",
    "etag": '"99d52-G7374LLtFAHqZC4/0IJ23KAf+Wk"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 630098,
    "path": "../client/assets/Bare_Shell_Disamantling-DFLSKoly.jpg"
  },
  "/assets/Hospitality-BsUpDMdM.png": {
    "type": "image/png",
    "etag": '"dfc99-jSL6afMlNIV5R7AYVqyA7z/A+YY"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 916633,
    "path": "../client/assets/Hospitality-BsUpDMdM.png"
  },
  "/assets/blueprint_vRS500_ 001-BAytMY1P.png": {
    "type": "image/png",
    "etag": '"b0ef7-S/sfxHEuTpCFGjMsvKQxwqXdbHg"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 724727,
    "path": "../client/assets/blueprint_vRS500_ 001-BAytMY1P.png"
  },
  "/assets/02_the_car-Lgh_mrNZ.jpg": {
    "type": "image/jpeg",
    "etag": '"102828-VsF3CHRzuUm7hTj3Q3oEEDrkI6w"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 1058856,
    "path": "../client/assets/02_the_car-Lgh_mrNZ.jpg"
  },
  "/assets/ENGINE-BDR4qXPc.png": {
    "type": "image/png",
    "etag": '"17ec00-wRtNveXrd2xgihCvrol9z9IeNiA"',
    "mtime": "2026-08-12T17:03:32.739Z",
    "size": 1567744,
    "path": "../client/assets/ENGINE-BDR4qXPc.png"
  },
  "/assets/experience-rPVpLOzP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10e9-S7JoZHv9OjDVjkLVViMgAVA66UU"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 4329,
    "path": "../client/assets/experience-rPVpLOzP.js"
  },
  "/assets/index-TdkE9lKi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b15-53AQ/SdHymdUrog/uvzS3j3W5jw"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 11029,
    "path": "../client/assets/index-TdkE9lKi.js"
  },
  "/assets/journal-Bicq2GIw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4a-QzvVq8sDCUsnRBvU6BdFaiK9Kk4"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 74,
    "path": "../client/assets/journal-Bicq2GIw.js"
  },
  "/assets/faq-DzJnhSeC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"739-Xj8K4F/H//DVvTkdgTsyI1EK8zc"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 1849,
    "path": "../client/assets/faq-DzJnhSeC.js"
  },
  "/assets/index-Y7gM15hG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5b5f3-VR0MT6er8ANHgZPu55b/2J82ufM"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 374259,
    "path": "../client/assets/index-Y7gM15hG.js"
  },
  "/assets/journal-D0OQziMI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"37-MS0gwm8y4nMB6XA6n7Wf4NlIPgk"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 55,
    "path": "../client/assets/journal-D0OQziMI.js"
  },
  "/assets/journal._slug-CGeW052A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f0-rw5FSiCrsceTXq7lRdddCH2lQjA"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 752,
    "path": "../client/assets/journal._slug-CGeW052A.js"
  },
  "/assets/journal.index-B4cgT449.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cdb-ZhrB1edJ/TYFGyliZea9QDntPpQ"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 3291,
    "path": "../client/assets/journal.index-B4cgT449.js"
  },
  "/assets/partners-JrLaW1PJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bd3-Bc+O6vGs8pHtDlrTYuSxh+Z5gEk"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 3027,
    "path": "../client/assets/partners-JrLaW1PJ.js"
  },
  "/assets/process-BbevgOAN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12f4-WWVmJ/mnWp/Hqyac9bXYaZHMCYA"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 4852,
    "path": "../client/assets/process-BbevgOAN.js"
  },
  "/assets/scanning-Zqz__a3f.jpg": {
    "type": "image/jpeg",
    "etag": '"2d3e9-Bq/QaNdOTN5ds60MCtGiYAxJ9+0"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 185321,
    "path": "../client/assets/scanning-Zqz__a3f.jpg"
  },
  "/assets/styles-CvdRCwm5.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"160e6-PXO9E9fAX2QlUsB+nrA8+ZMzxE8"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 90342,
    "path": "../client/assets/styles-CvdRCwm5.css"
  },
  "/assets/the-car-BzuSRgYC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"162d-khRDwlNDhAZs2RnDRLTBGublYqE"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 5677,
    "path": "../client/assets/the-car-BzuSRgYC.js"
  },
  "/assets/the_car_crowd-BrIp2JeP.jpg": {
    "type": "image/jpeg",
    "etag": '"2fc09-/OkEvP7J1CtaZoF4jtPwo5ZaOa4"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 195593,
    "path": "../client/assets/the_car_crowd-BrIp2JeP.jpg"
  },
  "/assets/vision148-logo-Dbu8HTfX.jpg": {
    "type": "image/jpeg",
    "etag": '"2970b-DdHmwlDTLRBqaIAEx1WkMEBdHfc"',
    "mtime": "2026-08-12T17:03:32.736Z",
    "size": 169739,
    "path": "../client/assets/vision148-logo-Dbu8HTfX.jpg"
  },
  "/assets/goodwood_landscape-ZdZmTO5n.png": {
    "type": "image/png",
    "etag": '"19974d-YrbsNw9RLcKzxsTSUPVGlv0l2xo"',
    "mtime": "2026-08-12T17:03:32.739Z",
    "size": 1677133,
    "path": "../client/assets/goodwood_landscape-ZdZmTO5n.png"
  },
  "/assets/workshop-DP3ouAaE.jpg": {
    "type": "image/jpeg",
    "etag": '"278a6-i7SRs4U0YFAhjcBqUI7wSQakABU"',
    "mtime": "2026-08-12T17:03:32.737Z",
    "size": 161958,
    "path": "../client/assets/workshop-DP3ouAaE.jpg"
  },
  "/assets/vision_R500 _goodwood_landscape_2-CDfa323G.png": {
    "type": "image/png",
    "etag": '"16e86f-Wf17jUZeK5xaf716zleDNkKfY0E"',
    "mtime": "2026-08-12T17:03:32.739Z",
    "size": 1501295,
    "path": "../client/assets/vision_R500 _goodwood_landscape_2-CDfa323G.png"
  },
  "/assets/vision_R500_goodwood_landscape_1-DII-qrjz.png": {
    "type": "image/png",
    "etag": '"1750fd-pHhDK2ClmwTk9x91CfEc6DlsnzQ"',
    "mtime": "2026-08-12T17:03:32.738Z",
    "size": 1528061,
    "path": "../client/assets/vision_R500_goodwood_landscape_1-DII-qrjz.png"
  },
  "/assets/vision_R500_goodwood_landscape-DCix3yC6.png": {
    "type": "image/png",
    "etag": '"1bf7fa-rfU/kAUSDR+lCPAt6DY6olZpE/Q"',
    "mtime": "2026-08-12T17:03:32.739Z",
    "size": 1832954,
    "path": "../client/assets/vision_R500_goodwood_landscape-DCix3yC6.png"
  },
  "/assets/from_chassis_to_road-DeiXDZE7.png": {
    "type": "image/png",
    "etag": '"407a96-rMhcUMWUtL1V7vlj1zsS/vctnXE"',
    "mtime": "2026-08-12T17:03:32.741Z",
    "size": 4225686,
    "path": "../client/assets/from_chassis_to_road-DeiXDZE7.png"
  },
  "/assets/witness_the_build-CU3Gmirn.jpg": {
    "type": "image/jpeg",
    "etag": '"38f264-pAUx9ZHNgXw26Ft0ZEvcvxTSFcs"',
    "mtime": "2026-08-12T17:03:32.741Z",
    "size": 3732068,
    "path": "../client/assets/witness_the_build-CU3Gmirn.jpg"
  },
  "/assets/hero_video_landing_page-BG6qwN3k.mp4": {
    "type": "video/mp4",
    "etag": '"815a57-lsD038gUrEn2wpM4+BDT6I9KQ2Q"',
    "mtime": "2026-08-12T17:03:32.744Z",
    "size": 8477271,
    "path": "../client/assets/hero_video_landing_page-BG6qwN3k.mp4"
  },
  "/assets/showcase_video_social_v1-BHDPgQs6.mp4": {
    "type": "video/mp4",
    "etag": '"85bf75-HF/zozsNyoycblFowHoYNGy5e6Y"',
    "mtime": "2026-08-12T17:03:32.744Z",
    "size": 8765301,
    "path": "../client/assets/showcase_video_social_v1-BHDPgQs6.mp4"
  },
  "/assets/04_the_experience_Ownership_Reimagined-MlUM1hwG.mp4": {
    "type": "video/mp4",
    "etag": '"11b6ba0-QycncDgseXbp6hL40/AxBRISi6Q"',
    "mtime": "2026-08-12T17:03:32.750Z",
    "size": 18574240,
    "path": "../client/assets/04_the_experience_Ownership_Reimagined-MlUM1hwG.mp4"
  },
  "/assets/journal-CSqD8jW1.mp4": {
    "type": "video/mp4",
    "etag": '"1c7e236-AJwx8q7HO3WChQYNiR/sBu7gHDg"',
    "mtime": "2026-08-12T17:03:32.754Z",
    "size": 29876790,
    "path": "../client/assets/journal-CSqD8jW1.mp4"
  },
  "/assets/process-Wn1o6mEh.mp4": {
    "type": "video/mp4",
    "etag": '"195e692-nauh/Nb24EZ0HOE3oACH0g3vXcI"',
    "mtime": "2026-08-12T17:03:32.753Z",
    "size": 26601106,
    "path": "../client/assets/process-Wn1o6mEh.mp4"
  },
  "/assets/rs500_monaco_showcase-DlSAcCtN.mp4": {
    "type": "video/mp4",
    "etag": '"24c6532-UakS2ZbqGKUQ5k2EO2a7K3Csrp0"',
    "mtime": "2026-08-12T17:03:32.757Z",
    "size": 38561074,
    "path": "../client/assets/rs500_monaco_showcase-DlSAcCtN.mp4"
  },
  "/assets/partner-OoUrGRph.mp4": {
    "type": "video/mp4",
    "etag": '"275b9b8-9N2aOB9EeTys3P0yvA2M5Eaop50"',
    "mtime": "2026-08-12T17:03:32.758Z",
    "size": 41269688,
    "path": "../client/assets/partner-OoUrGRph.mp4"
  },
  "/assets/chassis-DzkiDE7p.mp4": {
    "type": "video/mp4",
    "etag": '"3bafe98-b1tk9jfGdHIP5HOajArdKyz2Ej0"',
    "mtime": "2026-08-12T17:03:32.767Z",
    "size": 62586520,
    "path": "../client/assets/chassis-DzkiDE7p.mp4"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
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
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _vaqKFc = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
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
const globalMiddleware = [
  toEventHandler(_vaqKFc)
].filter(Boolean);
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
  h3App["~middleware"].push(...globalMiddleware);
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
      middleware.push(...h3App["~middleware"]);
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
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};

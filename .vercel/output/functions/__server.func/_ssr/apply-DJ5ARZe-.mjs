import { c as createServerRpc } from "./createServerRpc-Bkw2cMja.mjs";
import { a as createServerFn } from "./server-C20zeipx.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const submitApplyForm_createServerFn_handler = createServerRpc({
  id: "596878548ed97fad99e76f722b7a9710ef35e411603b7cf465c4265a96fd0bdc",
  name: "submitApplyForm",
  filename: "src/routes/apply.tsx"
}, (opts) => submitApplyForm.__executeServer(opts));
const submitApplyForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType(),
  email: stringType().email(),
  phone: stringType().optional(),
  intro: stringType().optional(),
  message: stringType().optional()
})).handler(submitApplyForm_createServerFn_handler, async ({
  data
}) => {
  console.info("Server received syndicate application:", data);
  return {
    success: true
  };
});
export {
  submitApplyForm_createServerFn_handler
};

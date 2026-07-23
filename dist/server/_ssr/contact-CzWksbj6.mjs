import { c as createServerRpc } from "./createServerRpc-bVjbpVq1.mjs";
import { a as createServerFn } from "./server-C1mmbbAp.mjs";
import { d as sendContactForm } from "./api-Drrs5acz.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";

import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const submitContactForm_createServerFn_handler = createServerRpc({
  id: "c3804d43ea11a75535ebb5ae9e76d1efb9734c08a9487988e3b78f015fb81075",
  name: "submitContactForm",
  filename: "src/routes/contact.tsx"
}, (opts) => submitContactForm.__executeServer(opts));
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  first_name: stringType(),
  last_name: stringType(),
  email: stringType().email(),
  phone: stringType(),
  message: stringType()
})).handler(submitContactForm_createServerFn_handler, async ({
  data
}) => {
  console.info("Server received contact submission:", data);
  return await sendContactForm(data);
});
export {
  submitContactForm_createServerFn_handler
};

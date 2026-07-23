import { c as createServerRpc } from "./createServerRpc-DvqSIDJd.js";
import { a as createServerFn } from "./server-Ci16uXs1.js";
import { z } from "zod";
import { d as sendContactForm } from "./api-Drrs5acz.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
const submitContactForm_createServerFn_handler = createServerRpc({
  id: "c3804d43ea11a75535ebb5ae9e76d1efb9734c08a9487988e3b78f015fb81075",
  name: "submitContactForm",
  filename: "src/routes/contact.tsx"
}, (opts) => submitContactForm.__executeServer(opts));
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string()
})).handler(submitContactForm_createServerFn_handler, async ({
  data
}) => {
  console.info("Server received contact submission:", data);
  return await sendContactForm(data);
});
export {
  submitContactForm_createServerFn_handler
};

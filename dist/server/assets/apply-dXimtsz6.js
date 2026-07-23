import { c as createServerRpc } from "./createServerRpc-DvqSIDJd.js";
import { a as createServerFn } from "./server-Ci16uXs1.js";
import { z } from "zod";
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
const submitApplyForm_createServerFn_handler = createServerRpc({
  id: "596878548ed97fad99e76f722b7a9710ef35e411603b7cf465c4265a96fd0bdc",
  name: "submitApplyForm",
  filename: "src/routes/apply.tsx"
}, (opts) => submitApplyForm.__executeServer(opts));
const submitApplyForm = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  intro: z.string().optional(),
  message: z.string().optional()
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

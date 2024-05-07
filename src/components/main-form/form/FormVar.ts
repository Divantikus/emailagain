import { isEmailFn } from "src/functions/isEmailFn";

export const emailInputParam = {
  required: true,
  validate: isEmailFn,
};
export const emailTextParam = { minLength: 1, required: true };

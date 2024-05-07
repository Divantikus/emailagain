type TypeisEmailFn = (email: string) => boolean;
export const isEmailFn: TypeisEmailFn = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    ? true
    : false;
};

import { FormType } from "src/types/types";
import { useForm } from "react-hook-form";

export const useMyForm = () => {
  const methods = useForm<FormType>({
    mode: "onBlur",
  });
  return {
    methods,
    reset: methods.reset,
    handleSubmit: methods.handleSubmit,
  };
};

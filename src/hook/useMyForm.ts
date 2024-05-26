import { useForm } from "react-hook-form";
import { FormType } from "src/types/types";

export const useMyForm = () => {
  const methods = useForm<FormType>({
    mode: "onBlur",
  });
  return {
    handleSubmit: methods.handleSubmit,
    reset: methods.reset,
    methods,
  };
};

import { useForm } from "react-hook-form";
import { FormType } from "src/types/types";

export const useMyForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    setValue,
    reset,
  } = useForm<FormType>({
    mode: "onBlur",
  });
  return {
    getValues,
    setValue,
    register,
    errors,
    isValid,
    handleSubmit,
    reset,
  };
};

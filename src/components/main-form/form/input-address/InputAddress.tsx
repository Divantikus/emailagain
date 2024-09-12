import { FormType, InputAddressErrors } from "src/types/types";
import { AddressInputError } from "../input-errors/address-errors/AddressInputError";
import { emailInputParam } from "../FormVar";
import { useFormContext } from "react-hook-form";
import style from "./InputAddress.module.scss";

export const InputAddress: InputAddressErrors = () => {
  const {
    register,
    clearErrors,
    formState: {
      errors: { emailAddress },
    },
  } = useFormContext<FormType>();

  const clearValidationError = () => {
    emailAddress && clearErrors("emailAddress");
  };

  return (
    <div className={style.inputWrap}>
      <label htmlFor="emailAddress" className={style.lable}>
        To:
      </label>
      <input
        id="emailAddress"
        type="email"
        className={style.inputUserName}
        placeholder="Адрес получателя..."
        {...register("emailAddress", {
          ...emailInputParam,
          onChange: clearValidationError,
        })}
      />
      {emailAddress && <AddressInputError emailAddress={emailAddress} />}
    </div>
  );
};

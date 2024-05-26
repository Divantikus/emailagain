import { useFormContext } from "react-hook-form";
import { emailInputParam } from "../FormVar";
import { AddressInputError } from "../input-errors/address-errors/AddressInputError";
import { InputAddressErrors } from "src/types/types";
import style from "./InputAddress.module.scss";

export const InputAddress: InputAddressErrors = () => {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const clearValidationError = () => {
    errors.emailAddress ? clearErrors("emailAddress") : null;
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
      {errors.emailAddress && (
        <AddressInputError emailAddress={errors.emailAddress} />
      )}
    </div>
  );
};

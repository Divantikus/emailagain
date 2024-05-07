import { AddressErrorType } from "src/types/types";
import style from "./AddressInputError.module.scss";
export const AddressInputError: AddressErrorType = ({ emailAddress }) => {
  const inputError =
    //@ts-ignore
    emailAddress.type === "required" ? (
      <div className={style.mailErr}>Это поле является обязательным </div>
    ) : //@ts-ignore
    emailAddress.type === "validate" ? (
      <div className={style.mailErr}>Почта указана некорректно</div>
    ) : null;
  return inputError;
};

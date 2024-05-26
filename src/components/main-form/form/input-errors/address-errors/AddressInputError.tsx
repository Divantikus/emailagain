import { TErrorProps } from "./types/address.types";
import { FC } from "react";
import style from "./AddressInputError.module.scss";

export const AddressInputError: FC<TErrorProps> = ({ emailAddress }) => {
  return emailAddress.type === "required" ? (
    <div className={style.mailErr}>Это поле является обязательным </div>
  ) : emailAddress.type === "validate" ? (
    <div className={style.mailErr}>Почта указана некорректно</div>
  ) : null;
};

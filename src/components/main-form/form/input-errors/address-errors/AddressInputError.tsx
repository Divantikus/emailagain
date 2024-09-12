import { TErrorProps } from "./types/address.types";
import { FC } from "react";
import style from "./AddressInputError.module.scss";

export const AddressInputError: FC<TErrorProps> = ({ emailAddress }) => {
  const { type } = emailAddress;

  if (type === "required")
    return <div className={style.mailErr}>Это поле является обязательным</div>;

  if (type === "validate")
    return <div className={style.mailErr}>Почта указана некорректно</div>;
};

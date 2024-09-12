import { useFormContext } from "react-hook-form";
import style from "./InputTheme.module.scss";

export const emaiThemeName = "emaiTheme";

export const InputTheme = () => {
  const { register } = useFormContext();
  return (
    <input
      placeholder="Тема"
      {...register(emaiThemeName)}
      className={style.inputUserName}
    />
  );
};

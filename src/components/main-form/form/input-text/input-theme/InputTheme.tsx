import { useFormContext } from "react-hook-form";
import style from "./InputTheme.module.scss";
export const emaiThemeName = "emaiTheme";
const InputTheme = (): JSX.Element => {
  const { register } = useFormContext();
  return (
    <input
      className={style.inputUserName}
      placeholder="Тема"
      {...register(emaiThemeName)}
    />
  );
};

export default InputTheme;

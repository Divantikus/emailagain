import { useGetSelectText } from "src/hook/useGetSelectText";
import { useFormContext } from "react-hook-form";
import { emailTextParam } from "../FormVar";
import { FormType } from "src/types/types";
import ChangeStyle from "./change-style/ChangeStyle";
import style from "./InputText.module.scss";

export const textAreaName = "emaiText";

export const InputText = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  const { selectText, choiceObject } = useGetSelectText();

  return (
    <div>
      <ChangeStyle choiceObject={choiceObject} />
      <textarea
        onMouseUp={selectText}
        className={
          errors.emaiText
            ? `${style.textarea} ${style.textareaErr}`
            : style.textarea
        }
        placeholder={
          errors.emaiText
            ? "Длина мыла должна быть больше 1 символа"
            : "Введите основной текст..."
        }
        {...register(textAreaName, emailTextParam)}
      ></textarea>
    </div>
  );
};

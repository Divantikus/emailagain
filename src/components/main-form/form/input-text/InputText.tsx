import { useFormContext } from "react-hook-form";
import { emailTextParam } from "../FormVar";
import { hideType } from "src/types/types";
import { selectText } from "src/functions/getSelectText";
import { useChoiceObject } from "src/hook/useChoiceObject";
import ChangeStyle from "./change-style/ChangeStyle";
import style from "./InputText.module.scss";
export const textAreaName = "emaiText";
export const InputText = (): JSX.Element => {
  const {
    formState: { errors },
    register,
    getValues,
  } = useFormContext();
  const [choiceObject, setChoiceObject] = useChoiceObject(null);
  const hideChangeStyle: hideType = (bool = false) => {
    if (choiceObject.isSelect || bool) {
      setChoiceObject({ ...choiceObject, isSelect: bool });
    }
  };
  const funcParam = {
    choiceObject,
    setChoiceObject,
    getValues,
    hideChangeStyle,
  };
  return (
    <div
      className={style.wrap}
      onMouseUp={(event) => selectText({ event, ...funcParam })}
    >
      <ChangeStyle choiceObject={choiceObject} />
      <textarea
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

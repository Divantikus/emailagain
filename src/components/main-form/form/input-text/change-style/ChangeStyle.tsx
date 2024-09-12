import { FormType, TypeChangeStyle } from "src/types/types";
import { useFormContext } from "react-hook-form";
import { textAreaName } from "../InputText";
import { TextCursor } from "lucide-react";
import style from "./ChangeStyle.module.scss";

export const ChangeStyle: TypeChangeStyle = ({ choiceObject }) => {
  const { getValues, setValue } = useFormContext<FormType>();
  const {
    text,
    choice,
    isSelect,
    coordinates: { X, Y },
  } = choiceObject;

  const intermediateFn = (tagType: string) => {
    const allText = getValues(textAreaName);
    const firstHalf = allText.slice(0, choice.start);
    const secondHalf = allText.slice(choice.end);
    const newValue = `${firstHalf} <${tagType}>${text}</${tagType}> ${secondHalf}`;
    setValue(textAreaName, newValue);
  };

  return (
    <div
      className={isSelect ? style.wrap : style.wrapOFF}
      style={{
        left: X,
        top: Y - 48,
      }}
    >
      <button
        type="button"
        className={style.button}
        onClick={() => intermediateFn("b")}
      >
        B
      </button>
      <button
        type="button"
        className={style.button}
        onClick={() => intermediateFn("i")}
      >
        <TextCursor size={20} />
      </button>
      <button className={style.button} type="button">
        ---
      </button>
    </div>
  );
};
export default ChangeStyle;

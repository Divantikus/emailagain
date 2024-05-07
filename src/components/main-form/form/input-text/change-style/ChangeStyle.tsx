import { TextCursor } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { TypeChangeStyle } from "src/types/types";
import { textAreaName } from "../InputText";
import { getPosition } from "src/functions/getPosition";
import style from "./ChangeStyle.module.scss";
export const ChangeStyle: TypeChangeStyle = ({ choiceObject }) => {
  const { getValues, setValue } = useFormContext();
  const [positionLeft, positionTop] = getPosition(choiceObject.coordinates);
  const intermediateFn = (tagType: string): void => {
    const allText = getValues(textAreaName);
    const firstHalf = allText.slice(0, choiceObject.choice.start);
    const secondHalf = allText.slice(choiceObject.choice.end);
    const newValue = `${firstHalf} <${tagType}>${choiceObject.text}</${tagType}> ${secondHalf}`;
    setValue(textAreaName, newValue);
  };
  return (
    <div
      className={choiceObject.isSelect ? style.wrap : style.wrapOFF}
      style={{ left: positionLeft, top: positionTop }}
    >
      <button
        className={style.button}
        type="button"
        onClick={() => intermediateFn("b")}
      >
        B
      </button>
      <button
        className={style.button}
        type="button"
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

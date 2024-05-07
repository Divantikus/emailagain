import { CalendarDays, ClipboardList, Paperclip, Trash2 } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { FC } from "react";
import { voidProps } from "src/types/types";
import { formName } from "src/components/main-form/form/Form";
import { inputFileId } from "src/components/main-form/form/input-file/InputFile";
import style from "./BottomButtonsMarkup.module.scss";

const BottomButtonsMarkup: FC<voidProps> = ({ functionProps }) => {
  const { clearText, getClipboardInfo } = functionProps;
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <div className={style.flexConteiner}>
      <button
        className={style.button}
        onClick={clearText}
        title="Очистить поле"
      >
        <Trash2 />
      </button>
      <div className={style.rightSideWrap}>
        <button
          className={style.button}
          onClick={getClipboardInfo}
          title="Вставить из буфера обмена"
        >
          <ClipboardList />
        </button>
        <label className={style.label}>
          <input
            form={formName}
            className={style.input}
            onClick={() => document.getElementById(inputFileId)?.click()}
          />
          <Paperclip />
        </label>
        <button
          className={style.sendButton}
          form="form"
          disabled={!isValid}
          title="Отправить форму"
        >
          Send now
          <span className={style.span}>
            <CalendarDays size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomButtonsMarkup;

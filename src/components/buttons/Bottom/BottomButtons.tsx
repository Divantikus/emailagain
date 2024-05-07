import { useFormContext } from "react-hook-form";
import { textAreaName } from "src/components/main-form/form/input-text/InputText";
import BottomButtonsMarkup from "./BottomButtonsMarkup/BottomButtonsMarkup";
export const BottomButtons = () => {
  const { setValue, getValues } = useFormContext();
  const getClipboardInfo = async () => {
    const textareaValue = getValues(textAreaName);
    navigator.clipboard
      .readText()
      .then((data) => setValue(textAreaName, `${textareaValue + " " + data}`))
      .catch(() => console.error(404));
  };
  const clearText = () => {
    setValue(textAreaName, "");
  };
  const functionProps = {
    getClipboardInfo,
    clearText,
  };
  return <BottomButtonsMarkup functionProps={functionProps} />;
};

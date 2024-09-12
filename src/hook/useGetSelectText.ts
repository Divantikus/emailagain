import { FormType, TypeSelectText } from "src/types/types";
import { useChoiceObject } from "./useChoiceObject";
import { useFormContext } from "react-hook-form";
import { textAreaName } from "src/components/main-form/form/input-text/InputText";

export const useGetSelectText = () => {
  const { getValues } = useFormContext<FormType>();
  const [choiceObject, setChoiceObject] = useChoiceObject(null);
  const { isSelect } = choiceObject;

  const selectText: TypeSelectText = (event) => {
    const textArea = event.currentTarget;
    const textContent = getValues(textAreaName);
    const { selectionStart, selectionEnd } = textArea;
    const selectedContent = textContent.slice(selectionStart, selectionEnd);
    const condition = selectedContent && !isSelect;

    if (condition) {
      setChoiceObject({
        isSelect: true,
        text: selectedContent,
        coordinates: { X: event.pageX, Y: event.pageY },
        choice: { start: selectionStart, end: selectionEnd },
      });
    } else if (selectedContent) {
      setChoiceObject({ ...choiceObject, isSelect: false });
    } else {
      setChoiceObject({ ...choiceObject, isSelect: false });
    }
  };

  return { selectText, choiceObject };
};

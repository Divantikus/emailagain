import { textAreaName } from "src/components/main-form/form/input-text/InputText";
import { TypeSelectText } from "src/types/types";
export const selectText: TypeSelectText = (arg) => {
  const { event, choiceObject, setChoiceObject, getValues, hideChangeStyle } =
    arg;
  const newEvent = event.target as HTMLTextAreaElement;
  const startSelection = newEvent.selectionStart;
  const endSelection = newEvent.selectionEnd;
  const textContent = getValues(textAreaName);
  const selectedContent = textContent.slice(startSelection, endSelection);
  const condition = selectedContent && !choiceObject.isSelect;
  if (choiceObject.text !== selectedContent && condition) {
    setChoiceObject({
      text: selectedContent,
      isSelect: true,
      coordinates: [
        event.pageX - event.currentTarget.offsetLeft,
        event.pageY - event.currentTarget.offsetTop,
        event.currentTarget.offsetWidth,
      ],
      choice: { start: startSelection, end: endSelection },
    });
  } else if (choiceObject.text === selectedContent && condition) {
    hideChangeStyle(true);
  } else if (selectedContent) {
    hideChangeStyle(false);
  } else {
    hideChangeStyle(false);
  }
};

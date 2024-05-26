import { TypeChoiceObject, TypeUseChoiceObject } from "src/types/types";
import { useState } from "react";

export const useChoiceObject: TypeUseChoiceObject = (mod) => {
  mod = mod || {
    text: "",
    isSelect: false,
    coordinates: [0, 0, 0],
    choice: { start: 0, end: 0 },
  };
  const [choiceObject, setChoiceObject] = useState<TypeChoiceObject>(mod);
  return [choiceObject, setChoiceObject];
};

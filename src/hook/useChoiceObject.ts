import { TypeChoiceObject, TypeUseChoiceObject } from "src/types/types";
import { useState } from "react";

export const useChoiceObject: TypeUseChoiceObject = (mod) => {
  mod = mod || {
    text: "",
    isSelect: false,
    coordinates: { X: 0, Y: 0 },
    choice: { start: 0, end: 0 },
  };
  return useState<TypeChoiceObject>(mod);
};

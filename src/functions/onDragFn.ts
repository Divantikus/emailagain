import { TypeOnDragFn, TypeOnDropFn } from "src/types/types";
export const dragOverFn: TypeOnDragFn = (event, setIsDrag) => {
  event.preventDefault();
  setIsDrag(true);
};
export const dragLeaveFn: TypeOnDragFn = (event, setIsDrag) => {
  event.preventDefault();
  setIsDrag(false);
};
export const onDropFn: TypeOnDropFn = (event, setIsDrag, setFile) => {
  event.preventDefault();
  const file = event.dataTransfer.files;
  setFile(file);
  setIsDrag(false);
};

import { useDragAndDropType } from "src/types/types";
import { useState } from "react";

export const useDragAndDrop: useDragAndDropType = () => {
  const [files, setFile] = useState<FileList>(new DataTransfer().files);
  const [isDrag, setIsDrag] = useState(false);

  return { files, isDrag, setFile, setIsDrag };
};

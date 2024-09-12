import { TypeInputFiles } from "src/types/types";
import { ChangeEvent, FC } from "react";
import style from "./InputFile.module.scss";

export const inputFileId = "inputFileId";
export const inputFileName = "inputFile";

export const InputFile: FC<TypeInputFiles> = ({ setFile }) => {
  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const inputFiles = event.currentTarget.files ?? new DataTransfer().files;

    setFile(inputFiles);
  };

  return (
    <input
      type="file"
      multiple={true}
      id={inputFileId}
      onChange={uploadFile}
      className={style.hideInput}
    />
  );
};

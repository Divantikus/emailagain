import { FC } from "react";
import { TypeFiles } from "src/types/types";
import style from "./Files.module.scss";
import { X } from "lucide-react";
export const Files: FC<TypeFiles> = ({ files, setFile }) => {
  const filesArr = [...files];
  return (
    <div className={style.wrap}>
      <p>
        {filesArr.length > 1
          ? "Выбранные файлы загружены"
          : "Выбранный файл загружен"}
      </p>

      <button
        onClick={() => setFile(new DataTransfer().files)}
        className={style.button}
      >
        <X color="black" />
      </button>
    </div>
  );
};

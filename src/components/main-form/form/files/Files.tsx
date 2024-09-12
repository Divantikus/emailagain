import { TypeFiles } from "src/types/types";
import { FC } from "react";
import { X } from "lucide-react";
import style from "./Files.module.scss";

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
        className={style.button}
        onClick={() => setFile(new DataTransfer().files)}
      >
        <X color="black" />
      </button>
    </div>
  );
};

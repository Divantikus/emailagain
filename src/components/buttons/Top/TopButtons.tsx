import { ChevronDown, MoveDiagonal, X } from "lucide-react";
import { AnimContext } from "src/context/context";
import { useContext } from "react";
import style from "./TopButtons.module.scss";

export const TopButtons = () => {
  const context = useContext(AnimContext);

  if (!context) return;

  const { emailIsHidden, setEmailIsHidden } = context;

  return (
    <div className={style.buttonContainer}>
      <button
        className={style.button}
        onClick={() => setEmailIsHidden(!emailIsHidden)}
      >
        <ChevronDown
          size={20}
          color="gray"
          className={emailIsHidden ? style.rotate : ""}
        />
      </button>
      <button className={style.button}>
        <MoveDiagonal size={17} color="gray" />
      </button>
      <button className={style.button}>
        <X size={20} color="gray" />
      </button>
    </div>
  );
};

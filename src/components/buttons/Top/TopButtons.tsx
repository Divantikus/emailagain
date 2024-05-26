import { ChevronDown, MoveDiagonal, X } from "lucide-react";
import { FC, useContext } from "react";
import { AnimContext } from "src/context/context";
import style from "./TopButtons.module.scss";
export const TopButtons: FC = () => {
  const context = useContext(AnimContext);
  const AnimFn = () => {
    if (context) {
      context.setEmailIsHidden(!context.emailIsHidden);
    }
  };
  return (
    <div className={style.buttonContainer}>
      <button className={style.button} onClick={AnimFn}>
        <ChevronDown
          size={20}
          color="gray"
          className={context?.emailIsHidden ? style.rotate : ""}
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

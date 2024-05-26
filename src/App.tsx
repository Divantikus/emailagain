import { FC } from "react";
import { MessageBoard } from "./components/message-board/MessageBoard";
import { MainFormComponent } from "./components/main-form/MainFormComponent";
import style from "./App.module.scss";

export const App: FC = () => {
  return (
    <div className={style.mainBlock}>
      <MainFormComponent />
      <MessageBoard />
    </div>
  );
};

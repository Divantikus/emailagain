import { MainFormComponent } from "./components/main-form/MainFormComponent";
import { MessageBoard } from "./components/message-board/MessageBoard";
import style from "./App.module.scss";
import { FC } from "react";

export const App: FC = () => {
  return (
    <div className={style.mainBlock}>
      <MainFormComponent />
      <MessageBoard />
    </div>
  );
};

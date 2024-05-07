import { MainFormComponent } from "./components/main-form/MainFormComponent";
import { MessageBoard } from "./components/message-board/MessageBoard";
import style from "./App.module.scss";
export const App = (): JSX.Element => {
  return (
    <div className={style.mainBlock}>
      <MainFormComponent />
      <MessageBoard />
    </div>
  );
};

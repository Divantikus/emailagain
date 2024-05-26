import { DeletPostType } from "src/types/types";
import { useDeletEmail } from "src/hook/useDeletEmail";
import { useGetEmails } from "src/hook/useGetEmails";
import { FC } from "react";
import style from "./MessageBoard.module.scss";
import parse from "html-react-parser";
export const MessageBoard: FC = () => {
  const { emailList } = useGetEmails();
  const { mutate, isPending } = useDeletEmail();
  const deletePost: DeletPostType = async (event) => {
    const id = event.currentTarget.dataset.listnumber || "";
    mutate(id);
  };
  return (
    <section className={style.mainBlock}>
      {emailList
        ? emailList.map((item, index) => {
            return (
              <div key={item.id} className={style.card}>
                <h1 className={style.title}>Кому: {item.emailAddress}</h1>
                {item.emaiTheme && (
                  <h2 className={style.theme}>Тема: {item.emaiTheme}</h2>
                )}
                <p className={style.paragraph}>{parse(item.emaiText)}</p>
                {!isPending && (
                  <button
                    onClick={deletePost}
                    data-listnumber={item.id}
                    data-index={index}
                  >
                    X
                  </button>
                )}
              </div>
            );
          })
        : null}
    </section>
  );
};

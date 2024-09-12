import { useDeletEmail } from "src/hook/useDeletEmail";
import { DeletPostType } from "src/types/types";
import { useGetEmails } from "src/hook/useGetEmails";
import style from "./MessageBoard.module.scss";
import parse from "html-react-parser";

export const MessageBoard = () => {
  const { data: emailList } = useGetEmails();
  const { mutate, isPending } = useDeletEmail();

  const deletePost: DeletPostType = (event) => {
    const id = event.currentTarget.dataset.listnumber || "";
    mutate(id);
  };

  return (
    <section className={style.mainBlock}>
      {emailList?.map((item, index) => {
        return (
          <div key={item.id} className={style.card}>
            <h1 className={style.title}>Кому: {item.emailAddress}</h1>
            {item.emaiTheme && (
              <h2 className={style.theme}>Тема: {item.emaiTheme}</h2>
            )}
            <p className={style.paragraph}>{parse(item.emaiText)}</p>
            {!isPending && (
              <button
                data-index={index}
                onClick={deletePost}
                data-listnumber={item.id}
              >
                X
              </button>
            )}
          </div>
        );
      })}
    </section>
  );
};

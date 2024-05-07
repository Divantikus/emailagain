import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { emails } from "src/services/emails.service";
import { DeletPostType } from "src/types/types";
import parse from "html-react-parser";
import style from "./MessageBoard.module.scss";
export const MessageBoard = () => {
  const queryClient = useQueryClient();
  const { data: emailList } = useQuery({
    queryKey: ["getEmails"],
    queryFn: () => emails.getEmails(),
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["deletEmail"],
    mutationFn: () =>
      new Promise((res) => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          res("1");
        }, 200);
      }),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["getEmails"] });
    },
  });
  const deletePost: DeletPostType = async (event) => {
    const id = event.currentTarget.dataset.listnumber || "";
    emails.deleteEmail(id);
    mutate();
  };
  return (
    <section className={style.mainBlock} key={"kdfjsakjdsljdsfhksfk"}>
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

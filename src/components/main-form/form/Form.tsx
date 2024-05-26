import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { dragLeaveFn, dragOverFn, onDropFn } from "src/functions/onDragFn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDragAndDrop } from "src/hook/useDragAndDrop";
import { BottomButtons } from "src/components/buttons/Bottom/BottomButtons";
import { InputAddress } from "./input-address/InputAddress";
import { TopButtons } from "src/components/buttons/Top/TopButtons";
import { InputText } from "./input-text/InputText";
import { InputFile } from "./input-file/InputFile";
import { FormType } from "src/types/types";
import { emails } from "src/services/emails.service";
import { Files } from "./files/Files";
import InputTheme from "./input-text/input-theme/InputTheme";
import style from "./Form.module.scss";
export const formName = "form";
export const Form = (): JSX.Element => {
  const { files, isDrag, setFile, setIsDrag } = useDragAndDrop();
  const methods = useForm<FormType>({
    mode: "onBlur",
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["createEmail"],
    mutationFn: (data) =>
      new Promise((res) => {
        const timer = setTimeout(() => {
          res("1");
          clearTimeout(timer);
        }, 200);
      }),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["getEmails"] });
    },
  });
  const submitFn: SubmitHandler<FormType> = (data) => {
    emails.createEmail(data);
    setFile(new DataTransfer().files);
    mutate();
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <TopButtons />
      <section className={isDrag ? style.formActive : style.form}>
        <form
          id={formName}
          onSubmit={methods.handleSubmit(submitFn)}
          onDragOver={(event) => dragOverFn(event, setIsDrag)}
          onDragLeave={(event) => dragLeaveFn(event, setIsDrag)}
          onDrop={(event) => onDropFn(event, setIsDrag, setFile)}
        >
          <InputAddress />
          <InputTheme />
          <InputText />
          {files.length ? <Files files={files} setFile={setFile} /> : null}
          <InputFile setFile={setFile} />
        </form>
      </section>
      <BottomButtons />
    </FormProvider>
  );
};

import { FormProvider, SubmitHandler } from "react-hook-form";
import { dragLeaveFn, dragOverFn, onDropFn } from "src/functions/onDragFn";
import { useDragAndDrop } from "src/hook/useDragAndDrop";
import { useCreateEmail } from "src/hook/useCreateEmail";
import { BottomButtons } from "src/components/buttons/Bottom/BottomButtons";
import { InputAddress } from "./input-address/InputAddress";
import { TopButtons } from "src/components/buttons/Top/TopButtons";
import { InputText } from "./input-text/InputText";
import { InputFile } from "./input-file/InputFile";
import { useMyForm } from "src/hook/useMyForm";
import { FormType } from "src/types/types";
import { Files } from "./files/Files";
import { FC } from "react";
import InputTheme from "./input-text/input-theme/InputTheme";
import style from "./Form.module.scss";
export const formName = "form";

export const Form: FC = () => {
  const { files, isDrag, setFile, setIsDrag } = useDragAndDrop();
  const { handleSubmit, methods, reset } = useMyForm();
  const { mutate } = useCreateEmail();
  const submitFn: SubmitHandler<FormType> = (data) => {
    setFile(new DataTransfer().files);
    mutate(data);
    reset();
  };

  return (
    <>
      <FormProvider {...methods}>
        <TopButtons />
        <section className={isDrag ? style.formActive : style.form}>
          <form
            id={formName}
            onSubmit={handleSubmit(submitFn)}
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
    </>
  );
};

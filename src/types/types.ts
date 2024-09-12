import {
  Dispatch,
  FormEvent,
  DragEvent,
  MouseEvent,
  SetStateAction,
  HTMLInputTypeAttribute,
} from "react";

type voidFn = () => void;

export type voidProps = {
  functionProps: {
    getClipboardInfo: voidFn;
    clearText: voidFn;
  };
};

export type sendingData = {
  emailAddress?: string;
  emaiTheme?: string;
  emailTextParam?: string;
};

export type TypeProps = {
  isValid: boolean;
};

export type FormType = {
  emailAddress: string;
  emaiTheme: string;
  emaiText: string;
};

export type ErrorsType = { type: string };

export type TypeChangeStyleProps = {
  choiceObject: TypeChoiceObject;
};

export type TypeFailedSubmit = (data: sendingData) => void;

export type InputAddressErrors = () => JSX.Element;

export type TypeChoiceObject = {
  text: string;
  isSelect: boolean;
  coordinates: { X: number; Y: number };
  choice: { start: number; end: number };
};

export type TypeSelectText = (event: MouseEvent<HTMLTextAreaElement>) => void;

export type TypeGetPosition = (coordinates: number[]) => number[];

export type TypeChangeStyle = ({}: TypeChangeStyleProps) => JSX.Element;

export type TypeBotButMark = ({}: voidProps) => JSX.Element;

export type TypeUseChoiceObject = (
  mod: TypeChoiceObject | null
) => [TypeChoiceObject, Dispatch<SetStateAction<TypeChoiceObject>>];

export type FileType = FormEvent<HTMLInputTypeAttribute> & {
  target: HTMLInputElement & { files: FileList | null };
};

type SetFileType = Dispatch<SetStateAction<FileList>>;

export type SetIsBooleanType = Dispatch<SetStateAction<boolean>>;

export type useDragAndDropType = () => {
  files: FileList;
  isDrag: boolean;
  setFile: SetFileType;
  setIsDrag: SetIsBooleanType;
};

export type TypeFiles = {
  files: FileList;
  setFile: SetFileType;
};

export type TypeInputFiles = {
  setFile: SetFileType;
};

export type TypeOnDragFn = (
  event: DragEvent<HTMLFormElement>,
  setIsDrag: SetIsBooleanType
) => void;

export type TypeOnDropFn = (
  event: DragEvent<HTMLFormElement>,
  setIsDrag: SetIsBooleanType,
  setFile: SetFileType
) => void;

export type MyContextType = {
  setEmailIsHidden: SetIsBooleanType;
  emailIsHidden: boolean;
};

export type AxiosRespType = FormType & {
  id: string;
};

export type DeletPostType = (event: MouseEvent<HTMLButtonElement>) => void;

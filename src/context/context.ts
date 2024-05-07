import { createContext } from "react";
import { MyContextType } from "src/types/types";

export const AnimContext = createContext<MyContextType | null>(null);

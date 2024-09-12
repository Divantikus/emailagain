import { MyContextType } from "src/types/types";
import { createContext } from "react";

export const AnimContext = createContext<MyContextType | null>(null);

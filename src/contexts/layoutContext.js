import { createContext, useContext } from "react";

export const LayoutContext = createContext(null);

export const useLayoutContext = () => useContext(LayoutContext);

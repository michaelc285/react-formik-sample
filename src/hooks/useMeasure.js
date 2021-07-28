import { useLayoutEffect, useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import useWindowSize from "../hooks/useWindowsSize";

export const useMeasure = (ref) => {
    const { width } = useWindowSize();
    const { measureDispatch } = useContext(LayoutContext);
    useLayoutEffect(() => {
        measureDispatch({ type: "NAV_REF_ADD", payload: ref });
    }, [ref, width, measureDispatch]);

}


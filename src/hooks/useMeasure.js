import { useLayoutEffect, useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import useWindowSize from "../hooks/useWindowsSize";

export const useMeasure = (ref, type) => {
    const { width } = useWindowSize();
    const { measureDispatch } = useContext(LayoutContext);
    useLayoutEffect(() => {
        measureDispatch({ type, payload: ref.current.getBoundingClientRect });
    }, [ref, type, width, measureDispatch]);

}


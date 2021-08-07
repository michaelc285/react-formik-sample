import { useLayoutEffect, useRef } from 'react'
import autosize from "autosize";


export default function AutosizeTextarea({ ...props }) {
    const textareaRef = useRef();
    useLayoutEffect(() => {
        autosize(textareaRef.current);
    }, []);

    return (
        <textarea ref={textareaRef} {...props} />
    )
}
import { useRef, useEffect, useCallback } from "react";

export const useInterval = (callback, delay, autoplay=true) => {
    const callbackRef = useRef(callback);
    const intervalRef = useRef();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        intervalRef.current = setInterval(callbackRef.current, delay)
    }, [delay])

    const clear = useCallback(() => {
        clearInterval(intervalRef.current)
    }, [])

    useEffect(() => {
        if(autoplay){set()}
        return clear
    })

    const reset = useCallback(() => {
        clear()
        set()
    }, [set, clear, delay])

    return [set, clear, reset]
}
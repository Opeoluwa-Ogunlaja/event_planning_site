import { useEffect } from "react"
import {useTimeout} from "./useTimeout"

const useDebounce = (callback, delay, dependencies) => {
    const reset = useTimeout(callback, delay, false)[2]
    useEffect(reset, [...dependencies, reset])
}

export default useDebounce
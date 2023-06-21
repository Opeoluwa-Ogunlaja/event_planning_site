import FullLoader from "../components/Loaders/FullLoader"
import { useAsync } from "../hooks/useAsync"
import { asyncWait } from "../utils"

const FullDummyLoader = ({ children, timeout = 800 }) => {
    const [ loading ] = useAsync(asyncWait(timeout))

    if (loading) return <FullLoader />

    return children
}

export default FullDummyLoader
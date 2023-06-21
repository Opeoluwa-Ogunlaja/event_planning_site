import Loader from "./loader"

const FullLoader = () => {
    return <section className="absolute inset-0 w-full h-full grid bg-primary-blue-grad place-items-center">
        <Loader stroke="12px" className="w-16 sm:w-24 border-greyish-yellow border-t-primary"/>
    </section>
}

export default FullLoader
import Loader from "./loader"

const FormLoader = () => {
    return <section className="w-2/5 min-w-[350px] rounded-md shadow-lg h-80 dark:bg-slate-800 bg-white grid place-items-center">
        <Loader stroke="12px" className="w-16 sm:w-24 border-t-indigo-600 dark:border-t-indigo-200 border-indigo-200 dark:border-indigo-600"/>
    </section>
}

export default FormLoader
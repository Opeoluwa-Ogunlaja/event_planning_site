import { createContext, useContext } from "react";

const DataContext = createContext()

export const useData = () => useContext(DataContext)

const DataProvider = (props) => {
    
    const dataProps = props.dataProps

    return <DataContext.Provider value={dataProps}>
        { props.children }
    </DataContext.Provider>
}

export default DataProvider
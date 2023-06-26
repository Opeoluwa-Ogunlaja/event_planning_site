import { useState, useContext, createContext } from 'react'

const TabContext = createContext()

export const useTab = () => useContext(TabContext)

const TabProvider= ({ children }) => {
    const [tab, setTab] = useState(0)

    return <TabContext.Provider value={{ tab, setTab }}>
        {children}
    </TabContext.Provider>
}

export default TabProvider
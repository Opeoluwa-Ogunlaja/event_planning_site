import { useState, useContext, createContext } from 'react'

const TabContext = createContext()

export const useTab = () => useContext(TabContext)

const TabProvider= ({ children, defaultId = 0 }) => {
    const [tab, setTab] = useState(defaultId)

    return <TabContext.Provider value={{ tab, setTab }}>
        {children}
    </TabContext.Provider>
}

export default TabProvider
const Tab = ({ isActive, children }) => {
    return <div className={`${isActive ? 'active' : ''}`}>
        {children}
    </div>
}

export default Tab
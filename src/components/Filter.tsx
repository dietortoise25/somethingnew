function Filter({ activeTab, onTabChange }: {
    activeTab: number;
    onTabChange: (index: number) => void;
}) {
    const filterTabs = ["All", "Done", "Uncompleted"];
    
    return <div className="flex gap-3">
        {filterTabs.map((tab, index) => (
            <button 
                className={`btn btn-ghost ${index === activeTab && "btn-active"}`} 
                key={index}
                onClick={() => onTabChange(index)}
            >{tab}</button>
        ))}
    </div>;
}
export default Filter;

export function Tabs (props) {
    const {todos, selectedTab, setSelectedTab} = props


    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className="tab-container">
            {/*this is called mapping where we are using the map function to retrun a button for every element in the array */}
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = 
                    tab === 'All' ? todos.length :
                    tab === 'Open' ? 
                        todos.filter(val => !val.complete).length:  /*if task is not complete (filter out all the val (in the key:val pair) and do sum for all the elements with complete=false)*/
                        todos.filter(val => val.complete).length

                return (
                    <button onClick={() => {
                                setSelectedTab(tab) 
                            }}
                            key ={tabIndex} 
                            className={"tab-button " 
                                + (tab === selectedTab ? ' tab-selected': ' ') /*<- if current tab === selected tab then give it a different style, if not then keep it as is*/
                            
                            }>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            {/*where tab would be the element in tab and tabIndex would be the index of that element(jsut used to differentiate the elements) */}
            <hr />
        </nav>
    )
}
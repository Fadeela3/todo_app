import { useState } from "react"

export function TodoInput (props) {
    const {handleAddTodo} = props
    const [inputValue, setInputValue] = useState('') //creates a stateful react var that manages the value inside the todo

    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Add task"/>
            <button onClick={() => {
                if(!inputValue || !(inputValue.trim())) {return}
                handleAddTodo(inputValue)
                setInputValue('')
            }} >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
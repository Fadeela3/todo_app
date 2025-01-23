import { TodoCard } from "./TodoCard";

export function TodoList (props){
    const {todos, selectedTab} = props
    // const tab = 'All'
    const filterTodoList = selectedTab === 'All' ? todos:
                           selectedTab === 'Completed' ? todos.filter(val => val.complete):
                           /*tab === 'Open' ?*/ todos.filter(val => !val.complete)
    return (
        <>
            {filterTodoList.map((todo, todoIndex) => {
                return(
                    <TodoCard 
                        key = {todoIndex} 
                        todoIndex = {todos.findIndex(val => val.input == todo.input)} 
                        {...props} //pass all the props to the todo card
                        todo={todo}/*{{...props}*/ /*<-this is saying "send all the props that the parent is reciving down to the child as well" :must be the last prop added to a tag ----alternate version: todo={todo}*//> 
                
                )
            })}
        </>
    )
}
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState, useEffect } from "react"


function App() {
  // const todos = [
  //   {input: 'Hello! Add your first todo', complete: true},
  //   {input: 'Get groceries', complete: false},
  //   {input: 'Learn how to web design', complete: false},
  //   {input: 'Call mama', complete: true},
  // ]

  // const [varName, setterFunc] = useState(optionalDefaultValue)
  const [todos, setTodos] = useState([
    {input: 'Hello! Add your first todo', complete: false}
  ])
  const [selectedTab, setSelectedTab] = useState('Open')
  
  // handler func
  function handleAddTodo(newTodo){
    // stateful variables are imuttable so we need to create a new instance of the modified old one
    const newTodoList = [...todos, {input: newTodo, complete:false}] 
    //^this code creates a copy of todos through the use of spread (...) then appends the new added value as the last element
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index){
    //update/modify/edit
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
      // only keep the elements that are not equal to the index (get rid of all the elements where the valIndex is the same as the index)
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  // code below saves todos on refreash through local memory

  function handleSaveData(currentTodos){ //func that saves data
    localStorage.setItem('todo-app', JSON.stringify({todos: currentTodos}))
  }
  
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {return}
    // if no local storage or 'todo-app' not found then return, otherwise continue
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return ( 
    <> {/*this is pretty much an empty container that we have to wrap it in since we can only return one container.*/}
      <Header todos={todos /*<-this is an attribute style property */}/> 
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo = {handleAddTodo}/>

    </>
  )
}

// extra:
// center the tab colums 
// add when enter is pressed

export default App

export function Header (props) {
    const {todos} = props        /*this is how we deconstruct the properties input*/
    const todosLength = todos.length
    const isTasksPlural = todos.length != 1
    const taskOrTasks = isTasksPlural ? 'tasks': 'task' /*if (isTasksPlural) {'tasks'} else {task}*/
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}</h1>
        </header>
    )
}
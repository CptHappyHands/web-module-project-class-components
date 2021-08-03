// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    const handleClick = () => {
        props.handleClear()
    }

    return (
        <div className="todo-list">
            {props.tasks.map(todo => (
                <Todo handleCompleted={props.handleCompleted} key={todo.id} todo={todo} />
            ))}
            <button onClick={handleClick}>Clear Finished Tasks</button>
            {/* <TodoForm /> */}
        </div>
    )
}
export default TodoList

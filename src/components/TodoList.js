// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
// import TodoForm from './TodoForm';

const TodoList = props => {
    const handleClick = () => {
        props.handleClear()
    }

    return (
        <div className="todo-list">
            {props.tasks.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
            {/* <TodoForm /> */}
        </div>
    )
}
export default TodoList

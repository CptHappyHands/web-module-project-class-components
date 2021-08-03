import React from 'react';

const Todo = props => {//setting state
    // const [todo, setTodo] = useState({
    //     task: 'mowing',
    //     id: 11111,
    //     completed: false
    // })
    const handleClick = () => {//on click toggles completed to the opposite of what it is currently
        props.handleCompleted(props.todo.task)
        // setTodo({
        //     ...todo,
        //     completed: !todo.completed
        // })
    }
    return (//task being returned
        <div onClick={handleClick} className={`task${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.task}</p>
            {/* <h1>Hello</h1> */}
        </div>
    )
}

export default Todo
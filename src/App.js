import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const tasks = [
  {
    task: 'mowing',
    id: 1222,
    completed: false
  },
  {
    task: 'raking',
    id: 1213,
    completed: false
  }
]

class App extends React.Component {

constructor() {
  super();
  this.state = {
    tasks: tasks
  }

}

handleCompleted = (id) => {
  this.setState({
    tasks:this.state.tasks.map(task => {
      if (task.id === id) {
        return({
          ...task,
          completed: !task.completed
        })
      }
      return task
    })
  })
}

handleAddItem = (task) => {
  const newItem = {
    task: task,
    id: Date.now(),
    completed: false
  }
  this.setState({
    tasks: [...this.state.tasks, newItem]
  })
}

handleClear = () => {
  this.setState({
    ...this.state,
    tasks:this.state.tasks.filter(task => {
      return(task.completed === false)
    })
  })
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div>
        <h2>Welcome to your Task List</h2>
        <TodoForm handleAddItem={this.handleAddItem}/>
        <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} tasks={this.state.tasks}/>
        </div>

      </div>
    );
  }
}

export default App;

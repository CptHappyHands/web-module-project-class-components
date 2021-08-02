import React from 'react';
import TodoList from './components/TodoList'

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

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div>
        <h2>Welcome to your Task List</h2>
        <TodoList tasks={this.state.tasks}/>
        </div>

      </div>
    );
  }
}

export default App;

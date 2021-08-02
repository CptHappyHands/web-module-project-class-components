import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChanges = event => { //updates state with each keystroke
        this.setState({
            ...this.state,
            inputValue:event.target.value 
        })
    }

    handleClick = (event) => { //class property to submit form
        event.preventDefault();
        this.props.handleAddItem(this.state.inputValue)
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChanges} type="text" name='todo'/>
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}

export default TodoForm;

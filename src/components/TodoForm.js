import React from 'react';


class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  //function that updates values in state anytime form input is changed
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  //function that handles click event on 'add task' button by adding input to the todoTasks array by function passed through props
  handleAddClick = (event) => {
    event.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  //function that handles click event on 'clear completed' button by clearing all tasks with a completed: true boolean by a function passed through props
  handleClearClick = (event) => {
    event.preventDefault();
    this.props.handleClearCompleted();
  }

    render(){
        return(
            <div>
              <form>
                <input type='text'
                       placeholder='type your task here'
                       name='task'
                       onChange={this.handleChange}/>
                <button onClick={this.handleAddClick}> Add Task </button>
                <button onClick={this.handleClearClick}> Clear Completed Tasks </button>
              </form>
            </div>
        );
    }

}

export default TodoForm;
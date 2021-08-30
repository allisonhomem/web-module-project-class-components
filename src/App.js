import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import './components/Todo.css';


const todoTasks = [{
  task: 'make a to-do list',
  id: 1,
  completed: false
}];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoTasks: todoTasks,
    };
  }

  //function that adds input task object to the array of task objects in state
  handleAdd = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todoTasks: [...this.state.todoTasks, newTask]
    });
  }

  //function that toggles completed boolean value of task
  handleDoneTasks = (id) => {
    this.setState({
      ...this.state,
      todoTasks: this.state.todoTasks.map((task) => {
        if(task.id===id){
          return({
            ...task,
            completed: !task.completed
          });
        } else {
          return(task);
        }
      })
    });
  }

  //function that clears completed tasks when button is clicked
  handleClearCompleted = () => {
    console.log(this.state.todoTasks);
    this.setState({
      ...this.state,
      todoTasks: this.state.todoTasks.filter((task) => {
        return(task.completed===false);
      })
    });
  }

  render() {
    return (
      <div>
        <h2>What would you like To-Do today?</h2>
        <TodoForm handleAdd={this.handleAdd} handleClearCompleted={this.handleClearCompleted}/>

        <h2>My To-Do List: </h2>
        <TodoList todoTasks={this.state.todoTasks} handleDoneTasks={this.handleDoneTasks}/>
      </div>
    );
  }
}

export default App;

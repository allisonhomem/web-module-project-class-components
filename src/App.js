import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import Todo from './components/Todo.js';


const todoItems = [
  {task: 'sample task',
   id: 1,
   completed: false}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      id: '',
      completed: false,
    };
  }

  handleChange = (event) => {
    const newItem = {
      task: event.target.value,
      id: '',
      completed: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      task: form.task.value,
      id: Date.now(),
      completed: false,
    }
    
    todoItems.push(newItem);
    console.log(todoItems);
  }

  render() {
    return (
      <div>
        <h2>What would you like To-Do today?</h2>
        <TodoForm task={this.state.task} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

        <h2>My To-Do List: </h2>
        <Todo todoItems={todoItems}/>
      </div>
    );
  }
}

export default App;

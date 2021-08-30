import React from 'react';
import Todo from './Todo.js';


class TodoList extends React.Component {

    render(){
        return(
            <div>
               {this.props.todoTasks.map((item) =>
               <Todo taskItem={item} handleDoneTasks={this.props.handleDoneTasks}/>)}
            </div>
        )
    }

}

export default TodoList;

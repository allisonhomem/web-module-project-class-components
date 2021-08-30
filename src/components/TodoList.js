import React from 'react';
import Todo from './Todo.js';


class TodoList extends React.Component {

    render(){
        return(
            <div>
                {/* maps through todoTasks array and produces a Todo child for each opject in array and passes it the done tasks handler function */}
               {this.props.todoTasks.map((item) =>
               <Todo taskItem={item} key={item.id} handleDoneTasks={this.props.handleDoneTasks}/>)}
            </div>
        )
    }

}

export default TodoList;

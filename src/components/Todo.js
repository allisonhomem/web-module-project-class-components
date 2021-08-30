import React from 'react';

class Todo extends React.Component {

    render(){
        return(
            <div>
             <ul>
               {this.props.todoItems.map((item) =>
               <li>{item.task}</li>)}
             </ul>
            </div>
        );
    }
}

export default Todo;
import React from 'react';

class Todo extends React.Component {

    //function that crosses item off list when clicked by toggling boolean value by function passed through props
    handleDoneClick = (event) => {
       event.preventDefault();
       this.props.handleDoneTasks(this.props.taskItem.id);
    }

    render(){
        return(
            <div className='task_box'>
              <button onClick={this.handleDoneClick}
                      className={`${this.props.taskItem.completed ? 'completed' : ''}`}> {this.props.taskItem.task} </button>
            </div>
        );
    }
}

export default Todo;
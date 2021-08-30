import React from 'react';


class TodoForm extends React.Component {

    render(){
        return(
            <div>
              <form onSubmit={this.props.handleSubmit}>
                <input type='text'
                       placeholder='type your task here'
                       name='task'
                       value={form.task}
                       onChange={this.props.handleChange}/>
                <button type='submit'> Add Task </button>
              </form>
            </div>
        );
    }

}

export default TodoForm;
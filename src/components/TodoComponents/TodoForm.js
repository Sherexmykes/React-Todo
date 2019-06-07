import React from 'react';


class TodoForm extends React.Component {
    

    render() {
        return (
            <div>
    
            <form onSubmit={this.props.submit}>
                <input
                name="newtask"
                value={this.props.task}
                onChange={this.props.value}
                placeholder="What Do You Need To Do?"/>
               
                <button type="submit">Add</button>
                <button type="submit">Clear</button>
               
            </form>
            </div>
        );
    }
};

export default TodoForm;
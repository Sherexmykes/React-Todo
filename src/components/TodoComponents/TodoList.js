// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todo.css';



  class TodoList extends React.Component {
      
      render() {
          return (
              <div>
                  <TodoForm input={this.props.input} task={this.props.task} submit={this.props.submit}/>
                  {this.props.stateTodoList.map(todoTask => (
                      <Todo todoList={todoTask} />
                      ))}
              </div>
          );
        }
  }

  export default TodoList 
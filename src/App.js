import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [];
class App extends React.Component {
  constructor() {
  super()
  this.state = {
    stateTodoList: todoList,
    task: '',
    id: '',
    completed: '',
  };
}
inputChangeHandler = event => {
  this.setState({ [event.target.name]: event.target.value });
};

formSubmitHandler = event => {
  event.preventDefault();
  let newTodoTask = {
    task: this.state.task,
  };
  this.setState(prevState => {
    return {
      stateTodoList: [...prevState.stateTodoList, newTodoTask],
      task: "",
    };
  });
};

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
       <div className="listMaker">
      <div className="nutsAndbolts">
      <h1>The Ulitmate To-Do List</h1>
      <h2><TodoList 
      input={this.inputChangeHandler} task={this.state.task} submit={this.formSubmitHandler} stateTodoList={this.state.stateTodoList}/></h2>
<TodoForm/>
      </div>
            </div>
        ); 
      }
    }
      

export default App;

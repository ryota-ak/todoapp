import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      newTodo:''
    };
  }

  handleChange(e){
    this.setState({
      newTodo:e.target.value
    })
  }

  addTodo(){
    if(this.state.newTodo === '')return;
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(this.state.newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({newTodo:''});
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <Link to='/'>Back</Link>
        <br />
        <input type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)} placeholder="Input here..." />
        <button onClick={this.addTodo.bind(this)}>ADD</button>
      </div>
    );
  }
}

export default TodoForm;

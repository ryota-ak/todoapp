import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render(){
    return (
      <div>
        <h3>My Todo</h3>
        <Route path="/" component={TodoList} exact/>
        <Route path="/todos/add" component={TodoForm} />
      </div>
    );
  }
}

export default App;

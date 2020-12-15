import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Toolbar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './TodoForm.css';


class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      newTodo:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
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
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className="toolbar-left">
              <ArrowBack style={{color:'white'}} />
            </Link>
            <Typography color="inherit" className="toolbar-center" >
              My Todo
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <TextField value={this.state.newTodo}  onChange={this.handleChange} placeholder="Input here..." autoFocus className="input-field" />
          </CardContent>
          <CardActions>
            <Button onClick={this.addTodo}>ADD</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default TodoForm;

import React,{ Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import './TodoList.css';


class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount(){
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.setState({todos:todos});
  }

  addTodo(){
    this.props.history.push('/todos/add');
  }

  deleteTodo(i){
    const todos = this.state.todos;
    todos.splice(i,1);
    this.setState({todos:todos});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render(){
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <div className="toolbar-left"></div>
            <Typography color="inherit" className="toolbar-center" >
              My Todo
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {
            this.state.todos.map((todo,i) =>{
              return(
                <div key={i}>
                  <ListItem>
                    <ListItemText>{todo}</ListItemText>
                    <IconButton aria-label="Delete" onClick={() => this.deleteTodo(i)} >
                    <DeleteIcon />
                  </IconButton>
                  </ListItem>
                  <Divider />
                </div>
              )
            })
          }
        </List>
        <div className="bottom-right">
          <Button color="primary" aria-label="Add" onClick={this.addTodo}>
            <AddIcon/>
          </Button>
        </div>
      </div>
    );
  }
}

export default TodoList;

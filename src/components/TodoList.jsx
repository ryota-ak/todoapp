import React,{ useState, useEffect } from 'react';

const TodoList = (props) =>{
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    const todos_cp = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todos_cp);
  },[])

  const addTodo = () => {
    props.history.push('/todos/add');
  }

  const deleteTodo = (i) => {
    const todos_cp = todos;
    todos_cp.splice(i,1);
    setTodos(todos_cp);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <div>
      <button onClick={addTodo}>ADD</button>
      <h5>Todo List</h5>
      <ul>
        {
          todos.map((todo,i) =>{
            return(
              <li key={i}>{todo}
                <button onClick={()=>deleteTodo(i)}>DEL</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoList;

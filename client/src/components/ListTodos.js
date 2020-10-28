import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo';
import RemoveTodos from './RemoveTodos';
import TimeStamp from './TimeStamp';

function ListTodos() {
    const [todos, setTodos] = useState([]);

    // delete todo function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`/todos/${id}`, {
                method: "DELETE"
            });

            // update state to show all the todos except for the deleted one
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }
    // get all todo function
    const getTodos = async () => {
        try {
          const response = await fetch("/todos");
          const jsonData = await response.json();
    
          setTodos(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr style={{color: "white"}}>
                    <th>Date Added</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <TimeStamp date={todo.date} />
                            <td style={{color: "white"}}>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td>
                                <button 
                                className="btn btn-danger"
                                onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {todos.length === 0 ? null :
                        <RemoveTodos />
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos

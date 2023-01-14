import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TopnavBar from './TopnavBar'

const ViewAll = () => {

    const [todos, setTodos] = useState(null);

    const onUpdateToDo = (todo) => {
        const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
        const newTodos = [...todos];

        const newTodo = newTodos[todoItemIndex];
        newTodo.completed = !newTodo.completed;
        setTodos(newTodos);
    };


    useEffect(
        () => {
            axios.get("https://jsonplaceholder.typicode.com/todos").then(
                (result) => {
                    setTodos(result.data);
                    console.log(todos,'data')
                }
            );
        }, []
    );



    return (
        <div className="container">
            <TopnavBar />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3>My ToDo List</h3>
                    <table className='tableborder'>
                        <thead className='tableborder'>
                            <tr className='tableborder'>
                                <th scope="col">USER ID</th>
                                <th scope="col">ID</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">COMPLETED</th>
                            </tr>
                        </thead>
                        <tbody className='tableborder'>

                        {
                            todos && todos?.map((value, index)=>{
                                return <tr className='tableborder'>
                                    <td>{value.userId}</td>
                                    <td>{value.id}</td>
                                    <td>{value.title}</td>
                                    <td><input type="checkbox" name="" id="" checked={value.completed} /></td>
                      
                                    </tr>
                                
                            })
                
                        }
                         
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default ViewAll
import React, { useState } from 'react';
import { TodoWrap } from "./styled";

interface item {
    id: number;
    text: string;
    completed: boolean;
}


const TodoApp: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([
       {id:1, text:"this is to do first", completed: false },
       {id:2, text:"this is to do seconddd", completed: false },
    ])

    const [addd, setAdd] = useState<string>("")

    const handleToggle = (id:number) => {
        setTodos(
            todos.map((todos) =>{
                if (todos.id === id) {
                    return { ...todos, completed: !todos.completed}
                }
                return todos;
            })
        )
    }


    const handleClick = () => {
        const newTodo: item = {id:Date.now(), text:addd, completed:false}
        setTodos([...todos, newTodo])
    }

    return (
        <TodoWrap>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) =>(
                    <li onClick={() => handleToggle(todo.id)} 
                        key={todo.id}
                        style={{textDecoration: todo.completed ? "line-through" : "none", cursor:"pointer"}}
                        >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                placeholder="Add todo item"
                onChange={(e)=> setAdd(e.currentTarget.value)}
                />
            <button onClick={handleClick}>Add</button>
        </TodoWrap>
    );
};

export default TodoApp;

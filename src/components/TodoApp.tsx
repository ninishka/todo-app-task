import React, { FC, useState } from 'react';
import { TodoWrap, TodoList, TodoItem, Input, ClearButton, Footer, FilterButton} from "./styled";

interface item {
    id: number;
    text: string;
    completed: boolean;
}


const TodoApp: FC = () => {
    const [todos, setTodos] = useState<item[]>([
       {id:1, text:"this is to do first", completed: false },
       {id:2, text:"this is to do seconddd", completed: false },
    ])

    const [addd, setAdd] = useState<string>("")
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");


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
        if (addd.trim() === "") return;
        const newTodo: item = {id:Date.now(), text:addd, completed:false}
        setTodos([...todos, newTodo])
        setAdd(""); 
    }

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    return (
        <TodoWrap>
        <h1>todos</h1>
        <Input 
            type="text" 
            placeholder="What needs to be done?"
            onChange={(e) => setAdd(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleClick()} 
        />
        <TodoList>
            {filteredTodos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    completed={todo.completed} 
                    onClick={() => handleToggle(todo.id)}
                >
                    {todo.text}
                </TodoItem>
            ))}
        </TodoList>

            <Footer>
                <span>{todos.filter(todo => !todo.completed).length} items left</span>
                <FilterButton onClick={() => setFilter("all")} active={filter === "all"}>All</FilterButton>
                <FilterButton onClick={() => setFilter("active")} active={filter === "active"}>Active</FilterButton>
                <FilterButton onClick={() => setFilter("completed")} active={filter === "completed"}>Completed</FilterButton>
                <ClearButton onClick={clearCompleted}>Clear completed</ClearButton>
            </Footer>
        </TodoWrap>
    );
};

export default TodoApp;

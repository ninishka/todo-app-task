import React, { useState } from 'react';
import { TodoWrap } from "./styled";



const TodoApp: React.FC = () => {

    return (
        <TodoWrap>
            <h1>Todo List</h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
            </ul>
            <input type="text" placeholder="Add todo item"/>
            <button>Add</button>
        </TodoWrap>
    );
};

export default TodoApp;

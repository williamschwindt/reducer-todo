import React, { useState, useReducer } from 'react';
import { initialList, listReducer } from '../reducers/index';
import TodoList from './TodoList';

const TodoForm = () => {
    const [newItem, setNewItem] = useState("");

    const [state, dispatch] = useReducer(listReducer, initialList);
    console.log(state);

    return (
        <div>
            <TodoList list={initialList}/>
        </div>
    )
}

export default TodoForm;
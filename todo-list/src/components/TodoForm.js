import React, { useState, useReducer } from 'react';
import { initialList, listReducer } from '../reducers/index';
import TodoList from './TodoList';

const TodoForm = () => {
    return (
        <div>
            <TodoList list={initialList}/>
        </div>
    )
}

export default TodoForm;
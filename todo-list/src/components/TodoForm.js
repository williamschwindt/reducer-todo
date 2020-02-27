import React, { useState, useReducer } from 'react';
import { initialList, listReducer } from '../reducers/index';
import TodoList from './TodoList';

const TodoForm = () => {
    const [newItem, setNewItem] = useState("");

    const [state, dispatch] = useReducer(listReducer, initialList);
    console.log(state);

    const changeHandler = (e) => {
        setNewItem(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: newItem });
    }

    return (
        <div>
            <TodoList list={state}/>
            <div className="form">
                <input value={newItem} onChange={changeHandler}/>
                <button onClick={submitHandler}>Add Item</button>
            </div>
        </div>
    )
}

export default TodoForm;
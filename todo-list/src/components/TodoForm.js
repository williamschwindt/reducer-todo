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

    const toggleCompleted = (itemID) => {
        console.log("this one", itemID);
        dispatch({ type: "TOGGLE_COMPLETED", payload: itemID });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: newItem });
    }

    const  clearHandler = (e) => {
        e.preventDefault();
        dispatch({ type: "CLEAR_COMPLETED" })
    }

    return (
        <div className="form">
            <h1>Your Todo List</h1>
            <input value={newItem} onChange={changeHandler}/>
            <button className="button" onClick={submitHandler}>Add Item</button>
            <TodoList state={state.todoList} toggleCompleted={toggleCompleted} list={state.todoList}/>
            <button className="button" onClick={clearHandler}>Clear Completed Items</button>
        </div>
    )
}

export default TodoForm;
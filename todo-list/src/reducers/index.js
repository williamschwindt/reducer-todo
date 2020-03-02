export const initialList = {
    todoList: [
        {
            item: 'learn about reducers',
            completed: false,
            id: 3892987589
        },
    
        {
            item: 'learn redux',
            completed: false,
            id: 3892987590
        },
    
        {
            item: 'learn async redux',
            completed: false,
            id: 3892987591
        },
    ]
}

export const listReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO" :
            const newItem = {
                item: action.payload,
                id: Date.now(),
                completed: false
            };
            return { 
                ...state,
                todoList: [ ...state.todoList, newItem]
            };
        case "TOGGLE_COMPLETED" :
            console.log("toggle completed", action.payload)
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item;
                })
            }
        case "CLEAR_COMPLETED" :
            return {
                ...state,
                todoList: state.todoList.filter(item => {
                    if(item.completed === false) {
                        return {
                            item
                        }
                    }
                })
            }
        default:
            return state;
    }
}
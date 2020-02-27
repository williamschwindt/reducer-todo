export const initialList = [
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
];

export const listReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO" :
            return [ ...state, { item: action.payload, id: new Date() }];
        default:
            return state;
    }
}
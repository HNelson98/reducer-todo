

export const initialList = {
    todo: [

        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }


    ]
}
export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return {
            ...state,
            todo: [...state.todo, action.payload]
        }

        case "TOGGLE_TASK":
            return{
                ...state,
                todo: state.todo.map(item => {
                    if(item.id === action.payload){
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }else {
                        return item
                    }
                })
            }

        case 'REMOVE_TASK': 
        return {
           ...state,
           todo: state.todo.filter(item => !item.completed)
        }
        default: 
            return state;
        
    }
}

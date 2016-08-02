function TodoReducers(previousState = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...previousState,
                {
                    id: action.id,
                    text: action.text,
                }
            ];

        case 'REMOVE_TODO':
            return previousState.filter((todo) => {
                return todo.id !== action.id
            });
        
        default:
            return previousState;
    }
}

module.exports = TodoReducers;
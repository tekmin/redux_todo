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
        
        default:
            return previousState;
    }
}

module.exports = TodoReducers;
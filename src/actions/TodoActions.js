let nextId = 0;

export function addToDo(text) {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        text,
    }
}
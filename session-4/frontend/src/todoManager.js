export const addTodo = (todos, todoContent, done=false, id=Date.now()) => {
    todos.push({content: todoContent, done, id});
    return todos;
};

export const toggleDone = (todos, todoId) => {
    const todoItem = todos.find(todo => todo.id === todoId);
    todos = removeTodo(todos, todoId);
    addTodo(todos, todoItem.content, !todoItem.done, todoItem.id)
    return todos;
};

export const removeTodo = (todos, todoId) => {
    todos = todos.filter(item => item.id !== todoId);
    return todos;
}

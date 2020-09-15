const todosFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

const addTodoForProject = (todo, projectName) => {
    projects = JSON.parse(localStorage.getItem("projects"))
    projects[projects.indexOf(projectName)].todos.push(todo)
    localStorage.setItem("projects", JSON.stringify(projects))
    return
}

export { todosFactory, addTodoForProject };
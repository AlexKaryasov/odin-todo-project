const todosFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

const addTodoForProject = (todo, projectName) => {
    projects = JSON.parse(localStorage.getItem("projects"))
    projects[projects.indexOf(projectName)].todos.push(todo)
    localStorage.setItem("projects", JSON.stringify(projects))
    return
}

const getTodosForProject = projectName => {
    projects = JSON.parse(localStorage.getItem("projects"))
    if (!projects)
        projects = []

    let project = projects.filter(project => project.name === projectName)

    return project.todos
}

export { todosFactory, addTodoForProject, getTodosForProject };
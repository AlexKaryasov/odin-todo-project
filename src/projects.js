const projects = []
const projectFactory = (name, todos) => {
    return { name, todos }
}

const addProject = project => {
    projects.push(project)
    localStorage.setItem("projects", JSON.stringify(projects))
}

const addTodoForProject = (todo, project) => {
    projects[projects.indexOf(project)].todos.push(todo)
    localStorage.setItem("projects", JSON.stringify(projects))
}

export default { projectFactory, addProject, addTodoForProject };
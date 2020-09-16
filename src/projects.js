import { debug } from "webpack"

let projects = []
const projectFactory = (name, todos) => {
    return { name, todos }
}

const addProject = project => {
    projects = JSON.parse(localStorage.getItem("projects"))
    if (!projects)
        projects = []
    projects.push(project)
    localStorage.setItem("projects", JSON.stringify(projects))
    return
}

export { projectFactory, addProject };
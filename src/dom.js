import { todosFactory, addTodoForProject } from './todos.js'
import { addProject, projectFactory, getTodosForProjectName } from './projects.js'

const projectsContent = document.querySelector('#projects-content')
const todosContent = document.querySelector('#todos-content')

const renderProjects = projects => {
    while (projectsContent.hasChildNodes())
        projectsContent.removeChild(projectsContent.lastChild)

    let projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container')

    projects.forEach(project => renderProject(projectContainer, project))
    projectsContent.appendChild(projectContainer)
    renderAddProjectButton();
}

const renderProject = (projectContainer, project) => {
    let projectItem = document.createElement('div')
    projectItem.classList.add('project-item')
    projectItem.innerHTML = project.name
    projectItem.addEventListener('click', (event) => renderTodos(getTodosForProjectName(event.target.value)))
    projectContainer.appendChild(projectItem)
}

const renderAddProjectButton = () => {
    let addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-button')
    addProjectButton.innerHTML = 'Add Project'
    addProjectButton.addEventListener('click', () => renderAddProjectForm())
    projectsContent.appendChild(addProjectButton)
}

const renderAddProjectForm = () => {
    let addProjectButton = document.querySelector('.add-button')
    if (addProjectButton)
        projectsContent.removeChild(addProjectButton)

    let addProjectFormDiv = document.createElement('div')
    addProjectFormDiv.classList.add('add-project-form-div')

    let nameInput = document.createElement('input')
    nameInput.classList.add('add-project-form-input')
    nameInput.type = 'text'
    nameInput.placeholder = "Please, input name"
    addProjectFormDiv.appendChild(nameInput)

    let submitInput = document.createElement('input')
    submitInput.classList.add('add-project-form-submit')
    submitInput.type = 'Submit'
    submitInput.innerHTML = 'Submit'
    submitInput.addEventListener('click', () => {
        addProject(projectFactory(nameInput.value, []))
        renderProjects(JSON.parse(localStorage.getItem("projects")))
    })

    addProjectFormDiv.appendChild(submitInput)
    projectsContent.appendChild(addProjectFormDiv)
}

const renderTodos = todos => todos.forEach(todo => renderTodo(todo));

const renderTodo = todo => {

}

export { renderProjects, renderTodos }
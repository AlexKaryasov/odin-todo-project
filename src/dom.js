import todosFactory from './todos.js'
import projectsFactory from './projects.js'

const projectsContent = document.querySelector('#projects-content')
const todosContent = document.querySelector('#todos-content')

const renderProjects = projects => projects.forEach(project => renderProject(project));
const renderTodos = todos => todos.forEach(todo => renderTodo(todo));

const renderProject = project => {

}

const renderTodo = todo => {

}

export default { renderProjects, renderTodos }
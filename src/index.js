import { addProject, projectFactory } from './projects'
import { renderProjects } from './dom'

if (!JSON.parse(localStorage.getItem('projects'))) {
    addProject(projectFactory('Default project', []))
}
renderProjects(JSON.parse(localStorage.getItem('projects')))
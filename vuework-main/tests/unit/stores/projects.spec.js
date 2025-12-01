import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProjectsStore } from '../../../src/stores/projects'

describe('Projects Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with default projects', () => {
    const store = useProjectsStore()
    expect(store.projects).toBeDefined()
    expect(store.projects.length).toBeGreaterThan(0)
  })

  it('should add a new project', () => {
    const store = useProjectsStore()
    const initialCount = store.projects.length

    store.addProject({
      name: 'Test Project',
      description: 'This is a test project'
    })

    expect(store.projects.length).toBe(initialCount + 1)
    expect(store.projects[store.projects.length - 1].name).toBe('Test Project')
  })

  it('should update an existing project', () => {
    const store = useProjectsStore()
    const projectId = store.projects[0].id

    store.updateProject(projectId, {
      name: 'Updated Project Name'
    })

    const updatedProject = store.getProjectById(projectId)
    expect(updatedProject.name).toBe('Updated Project Name')
  })

  it('should delete a project', () => {
    const store = useProjectsStore()
    const initialCount = store.projects.length
    const projectId = store.projects[0].id

    store.deleteProject(projectId)

    expect(store.projects.length).toBe(initialCount - 1)
    expect(store.getProjectById(projectId)).toBeUndefined()
  })

  it('should filter active projects', () => {
    const store = useProjectsStore()
    const activeProjects = store.activeProjects

    activeProjects.forEach(project => {
      expect(project.status).toBe('active')
    })
  })

  it('should filter completed projects', () => {
    const store = useProjectsStore()
    const completedProjects = store.completedProjects

    completedProjects.forEach(project => {
      expect(project.status).toBe('completed')
    })
  })

  it('should calculate total projects correctly', () => {
    const store = useProjectsStore()
    expect(store.totalProjects).toBe(store.projects.length)
  })
})
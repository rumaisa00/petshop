import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: []
  }),
  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    }
  },
  actions: {
    addProject(project) {
      this.projects.push({
        ...project,
        id: Date.now(),
        taskCount: 0,
        memberCount: 1,
        status: 'active'
      })
    },
    updateProject(id, updates) {
      const index = this.projects.findIndex(p => p.id === id)
      if (index !== -1) {
        this.projects[index] = { ...this.projects[index], ...updates }
      }
    },
    deleteProject(id) {
      this.projects = this.projects.filter(p => p.id !== id)
    }
  }
})



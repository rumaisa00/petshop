import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([
    { id: 1, projectId: 1, title: 'Design homepage mockups', description: 'Create high-fidelity mockups', status: 'in-progress', priority: 'high', assignedTo: 1, dueDate: '2025-02-10', labels: ['design','ui'], comments: [], createdAt: '2025-01-10' },
    { id: 2, projectId: 1, title: 'Setup database schema', description: 'Configure PostgreSQL', status: 'to-do', priority: 'high', assignedTo: 2, dueDate: '2025-02-05', labels: ['backend','database'], comments: [], createdAt: '2025-01-10' },
    { id: 3, projectId: 1, title: 'Write API documentation', description: 'Document REST endpoints', status: 'done', priority: 'medium', assignedTo: 3, dueDate: '2025-01-25', labels: ['documentation'], comments: [], createdAt: '2025-01-05' },
    { id: 4, projectId: 2, title: 'Setup React Native project', description: 'Initialize project structure', status: 'to-do', priority: 'high', assignedTo: 1, dueDate: '2025-02-15', labels: ['mobile','setup'], comments: [], createdAt: '2025-01-15' }
  ])

  const loading = ref(false)
  const error = ref(null)

  const allTasks = computed(() => tasks.value)
  const tasksByStatus = computed(() => ({
    'to-do': tasks.value.filter(t => t.status === 'to-do'),
    'in-progress': tasks.value.filter(t => t.status === 'in-progress'),
    'done': tasks.value.filter(t => t.status === 'done')
  }))
  const tasksByProject = projectId => tasks.value.filter(t => t.projectId === projectId)
  const totalTasks = computed(() => tasks.value.length)
  const completedTasks = computed(() => tasks.value.filter(t => t.status === 'done').length)

  function addTask(task) {
    const newId = tasks.value.length ? Math.max(...tasks.value.map(t => t.id)) + 1 : 1
    const newTask = { id: newId, ...task, comments: [], createdAt: new Date().toISOString() }
    tasks.value.push(newTask)
    return newTask
  }

  function updateTask(id, updates) {
    const index = tasks.value.findIndex(t => t.id === id)
    if(index !== -1) tasks.value[index] = { ...tasks.value[index], ...updates }
  }

  function moveTask(id, newStatus) { updateTask(id, { status: newStatus }) }
  function deleteTask(id) { const idx = tasks.value.findIndex(t => t.id === id); if(idx !== -1) tasks.value.splice(idx,1) }
  function getTaskById(id) { return tasks.value.find(t => t.id === parseInt(id)) }

  function addComment(taskId, comment) {
    const task = getTaskById(taskId)
    if(task) task.comments.push({ id: Date.now(), text: comment, createdAt: new Date().toISOString(), author: 'Current User' })
  }

  async function fetchTasks() {
    loading.value = true
    error.value = null
    try { await new Promise(r => setTimeout(r,500)) }
    catch(err) { error.value = err.message }
    finally { loading.value = false }
  }

  return { tasks, loading, error, allTasks, tasksByStatus, tasksByProject, totalTasks, completedTasks, addTask, updateTask, moveTask, deleteTask, getTaskById, addComment, fetchTasks }
})

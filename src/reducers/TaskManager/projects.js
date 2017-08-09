import { ADD_PROJECT, UPDATE_PROJECT, REMOVE_PROJECT } from '../../actionCreators/TaskManager/projects'

export default function projects (state = [], action) {
  switch (action.type) {
    case ADD_PROJECT: {
      const { author, name, description, startDate, endDate, documents } = action.payload
      const id = state.reduce((max, { id }) => max > id ? max : id, -1) + 1
      return [...state, { id, author, name, description, startDate, endDate, documents }]
    }

    case UPDATE_PROJECT: {
      const { id, author, name, description, startDate, endDate, documents } = action.payload
      const newProject = { id, author, name, description, startDate, endDate, documents }
      if (state.find((project) => project.id === id)) {
        return state.map((project) => project.id === id ? newProject : project)
      }
      return [...state, newProject]
    }

    case REMOVE_PROJECT:
      return state.filter(({ id }) => id !== action.payload.id)

    default:
      return state
  }
}

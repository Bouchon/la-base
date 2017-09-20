import _object from 'lodash/fp/object'
import { ADD_PROJECT, UPDATE_PROJECT, REMOVE_PROJECT } from '../actionCreators/projects'

export default function projects (state = {}, action) {
  console.log(action.payload)
  switch (action.type) {
    case ADD_PROJECT: {
      const id = Object.values(state).reduce((max, { id }) => max > id ? max: id, -1) + 1
      const { project } = action.payload
      project.id = id
      return { ...state, [id]: project }  
    }

    case UPDATE_PROJECT: {
      const projects = { ...state }
      projects[action.payload.id] = action.payload.project
      return projects
    }

    case REMOVE_PROJECT:
      const newState = { ...state }
      console.log(newState)
      const result = _object.omit(newState, [action.payload.id])
      console.log(result)
      return result

    default:
      return state
  }
}

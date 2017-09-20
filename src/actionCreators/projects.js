export const ADD_PROJECT = '@@GOALTRACKER/TASKMANAGER_ADD_PROJECT'
export const UPDATE_PROJECT = '@@GOALTRACKER/TASKMANAGER_UPDATE_PROJECT'
export const REMOVE_PROJECT = '@@GOALTRACKER/TASKMANAGER_REMOVE_PROJECT'

export function addProject (project) {
  return { type: ADD_PROJECT, payload: { project } }
}

export function updateProject (project) {
  return { type: UPDATE_PROJECT, payload: { project } }
}

export function removeProject (id) {
  return { type: REMOVE_PROJECT, payload: { id } }
}

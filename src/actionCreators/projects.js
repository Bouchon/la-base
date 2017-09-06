export const ADD_PROJECT = '@@GOALTRACKER/TASKMANAGER_CREATE_PROJECT'
export const UPDATE_PROJECT = '@@GOALTRACKER/TASKMANAGER_UPDATE_PROJECT'
export const REMOVE_PROJECT = '@@GOALTRACKER/TASKMANAGER_REMOVE_PROJECT'

export function addProject (author, name, description, startDate, endDate, documents) {
  return {
    type: ADD_PROJECT,
    payload: { author, name, description, startDate, endDate, documents }
  }
}

export function updateProject (id, author, name, description, startDate, endDate, documents) {
  return {
    type: UPDATE_PROJECT,
    payload: { id, author, name, description, startDate, endDate, documents }
  }
}

export function removeProject (id) {
  return { type: REMOVE_PROJECT, payload: { id }}
}

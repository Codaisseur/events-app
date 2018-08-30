import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
})

const eventDeleteSuccess = eventId => ({
  type: EVENT_DELETE_SUCCESS,
  eventId
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return
  const jwt = getState().currentUser

  request(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch, getState) => {
  const state = getState().event
  if (state && state.id === id) return
  const jwt = getState().currentUser
  
  request(`${baseUrl}/events/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

export const updateEvent = (id, data) => (dispatch, getState) => {
  const jwt = getState().currentUser
  
  request
    .patch(`${baseUrl}/events/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdateSuccess(response.body))
    })
    .catch(console.error)
}

export const deleteEvent = id => (dispatch, getState) => {
  const jwt = getState().currentUser
  
  request
    .delete(`${baseUrl}/events/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(eventDeleteSuccess(id))
    })
    .catch(console.error)
}
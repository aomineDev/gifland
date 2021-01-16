import { ACTIONS } from 'actions'

export default function reducer (state, action) {
  let user

  switch (action.type) {  
    case ACTIONS.UPDATE_TOKEN:
      user = {
        ...state,
        profile: action.payload.user,
        token: action.payload.jwt
      }

      window.sessionStorage.setItem('user', JSON.stringify(user))
      
      return user
    case ACTIONS.UPDATE_PROFILE:
      user = {
        ...state,
        profile: action.payload
      }

      window.sessionStorage.setItem('user', JSON.stringify(user))

      return user
    case ACTIONS.UPDATE_FAVS:
      user = {
        ...state,
        favs: action.payload
      }

      window.sessionStorage.setItem('user', JSON.stringify(user))

      return user
    case ACTIONS.REMOVE_USER:
      window.sessionStorage.removeItem('user')

      return {
        profile: {},
        favs: [],
        token: ''
      }
    default:
      return state
  }
}

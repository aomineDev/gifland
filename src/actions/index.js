export const ACTIONS = {
  UPDATE_PROFILE: 'update-profile',
  UPDATE_TOKEN: 'update-token',
  UPDATE_FAVS: 'update-favs',
  REMOVE_USER: 'remove-user'
}

export function actions (dispatch) {
  function updateProfile (payload) {
    dispatch({ type: ACTIONS.UPDATE_PROFILE, payload })
  }

  function updateToken (payload) {
    dispatch({ type: ACTIONS.UPDATE_TOKEN, payload })
  }

  function updateFavs (payload) {
    dispatch({ type: ACTIONS.UPDATE_FAVS,  payload })
  }
  
  function removeUser () {
    dispatch({ type: ACTIONS.REMOVE_USER })
  }

  return {
    updateProfile,
    updateToken,
    updateFavs,
    removeUser
  }
}

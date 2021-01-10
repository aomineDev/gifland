import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_QUERY: 'update-query',
  UPDATE_RATING: 'update-rating'
}

const ACTION_REDUCER = {
  [ACTIONS.UPDATE_QUERY]: (state, action) => ({
    ...state,
    query: action.payload,
    times: state.times + 1
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload
  })
}

function reducer (state, action) {
  const actionReducer = ACTION_REDUCER[action.type]

  return actionReducer ? actionReducer(state, action) : state
}

function useSearchEngine () {
  const [state, dispatch] = useReducer(reducer, {
    query: '',
    times: 0,
    rating: 'g'
  })

  const { query, times, rating } = state

  function setQuery (query) {
    dispatch({ type: ACTIONS.UPDATE_QUERY, payload: query })
  }

  function setRating (rating) {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
  }

  return {
    query,
    setQuery,
    rating,
    setRating,
    times
  }
}

export default useSearchEngine

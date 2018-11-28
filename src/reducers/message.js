import { MESSAGES_SET } from '../constants/message'

const INITIAL_STATE = {
  list: []
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGES_SET:
      return {
        ...state,
        list: action.payload
      }
     default:
       return state
  }
}

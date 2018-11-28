import {
  MESSAGES_SET,
} from '../constants/message'


export const setMessages = (messages) => {
  return {
    type: MESSAGES_SET,
    payload: messages
  }
}

// 异步的 action
export function getMessages () {
  return dispatch => {
    setTimeout(() => {
      const messages = [
        'messages1',
        'messages2',
        'messages3',
        'messages4',
        'messages5', 
      ]
      dispatch(setMessages(messages))
    }, 2000)
  }
}

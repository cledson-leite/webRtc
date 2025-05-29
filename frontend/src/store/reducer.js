import {Actions}  from "./action"

const initialState = {
  identity: ' ',
  isRoomCreator: false,
  isOnlyAudio: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_CREATOR:
      return {
        ...state,
        isRoomCreator: action.payload
      }
    case Actions.SET_CONNECT_ONLY_AUDIO:
      return {
        ...state,
        isOnlyAudio: action.payload
      }
    default:
      return state
  }
}
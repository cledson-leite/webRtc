import {Actions}  from "./action"

const initialState = {
  identity: ' ',
  isRoomCreator: false,
  isOnlyAudio: false,
  roomId: null,
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
    case Actions.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.payload
      }
    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: action.payload
      }
    default:
      return state
  }
}
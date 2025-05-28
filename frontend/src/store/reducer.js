import {Actions}  from "./action"

const initialState = {
  identity: ' ',
  isRoomCreator: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_CREATOR:
      return {
        ...state,
        isRoomCreator: action.payload

      }
    default:
      return state
  }
}
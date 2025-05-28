export const Actions = {
  SET_IS_ROOM_CREATOR: 'SET_IS_ROOM_CREATOR',
}

export const setIsRoomCreator = (isRoomCreator) => ({
  type: Actions.SET_IS_ROOM_CREATOR,
  payload: isRoomCreator,
})
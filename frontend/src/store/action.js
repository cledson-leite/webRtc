export const Actions = {
  SET_IS_ROOM_CREATOR: 'SET_IS_ROOM_CREATOR',
  SET_CONNECT_ONLY_AUDIO: 'SSET_CONNECT_ONLY_AUDIO',
}

export const setIsRoomCreator = (isRoomCreator) => ({
  type: Actions.SET_IS_ROOM_CREATOR,
  payload: isRoomCreator,
})

export const setIsOnlyAudio = (isOnlyAudio) => ({
  type: Actions.SET_CONNECT_ONLY_AUDIO,
  payload: isOnlyAudio,
})
export const Actions = {
  SET_IS_ROOM_CREATOR: 'SET_IS_ROOM_CREATOR',
  SET_CONNECT_ONLY_AUDIO: 'SSET_CONNECT_ONLY_AUDIO',
  SET_IDENTITY: 'SET_IDENTITY',
  SET_ROOM_ID: 'SET_ROOM_ID',
}

export const setIsRoomCreator = (isRoomCreator) => ({
  type: Actions.SET_IS_ROOM_CREATOR,
  payload: isRoomCreator,
})

export const setIsOnlyAudio = (isOnlyAudio) => ({
  type: Actions.SET_CONNECT_ONLY_AUDIO,
  payload: isOnlyAudio,
})

export const setRoomId = (roomId) => ({
  type: Actions.SET_ROOM_ID,
  payload: roomId,
})

export const setIdentity = (identity) => ({
  type: Actions.SET_IDENTITY,
  payload: identity,
})
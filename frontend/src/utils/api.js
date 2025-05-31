import axios from "axios";

const serverApi = 'http://localhost:8080/api'

export const getRoomExists = async (id) => {
  const response = await axios.get(`${serverApi}/room-exists/${id}`)
  return response.data
}
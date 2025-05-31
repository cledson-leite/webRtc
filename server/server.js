import express from "express";
import http from "node:http";
import cors from "cors"
import {Server} from "socket.io"

const PORT = process.env.PORT || 8080;
const app = express()
const server = http.createServer(app)

app.use(cors())

let connectedUsers = []
let rooms = []

app.get('/api/room-exists/:id', (req, res) => {
  const roomId = req.params.id
  const room = rooms.find(room => room.id === roomId)
  if (!room) res.send({roomExists: false})
  if(room.connectedUsers.length > 3) res.send({roomExists: true, full: true})
  res.send({roomExists: true, full: false})
})

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
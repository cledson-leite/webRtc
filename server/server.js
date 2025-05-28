import express from "express";
import http from "node:http";
import cors from "cors"
import {Server} from "socket.io"

const PORT = process.env.PORT || 8080;
const app = express()
const server = http.createServer(app)

app.use(cors())

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
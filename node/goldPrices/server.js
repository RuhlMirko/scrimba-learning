import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'

const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {
    serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))
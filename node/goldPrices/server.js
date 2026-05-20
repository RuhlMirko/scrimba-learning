import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handlePriceUpdate } from './handlers/handlerManager.js'
const eventSource = new EventSource("/") 

const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    serveStatic(req, res, __dirname)
    handlePriceUpdate(req, res)    

    const liveContainer = document.getElementById("price-display")

    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data)
        const story = data.newPrice
        liveContainer.textContent = story
    }

    // Handle connection loss
    eventSource.onerror = () => {
    console.log("Connection lost. Attempting to reconnect...")
    }
})

server.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))
import path from 'node:path'
import fs from 'node:fs/promises'

export async function serveStatic(req, res, baseDir) {

  const publicDir = path.join(baseDir, 'public')
  const filePath = path.join(
    publicDir,
    req.url === '/' ? 'index.html' : req.url
  )

  const ext = path.extname(filePath)

  const contentType = getContentType(ext)

  try {
    const content = await fs.readFile(filePath)
    res.statusCode = 200
    res.setHeader('Content-Type', contentType)
    res.end(content)

  } catch (err) {
    if (err.code === 'ENOENT') { 
      const content = await fs.readFile(path.join(publicDir, '404.html'))
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html')
      res.end(content)
    } else {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.end(`<html><h1>Server Error: ${err.code}</h1></html>`)
    }
  }

}

export function getContentType(ext) {

  const types = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml"
  }
  
  return types[ext.toLowerCase()] || "text/html"
}
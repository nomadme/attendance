const http = require('http')

const venue = [
  {id:1, name: "Dallas Convention Center"}
]

const server = http.createServer((req, res) => {
  const {headers, url, method} = req
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(400, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
  })

  let body = []
  req.on('data', chunk => {
    body.push(chunk)
  }).on('end', () => {
    console.log(body)
    body = Buffer.concat(body).toString();
    console.log(body)
  })

  res.end(
    JSON.stringify({
      success:true,
      error: 'bar received',
      data: venue
    })
  )
})

const PORT = 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

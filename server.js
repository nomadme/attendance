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

  res.end(
    JSON.stringify({
      success:false,
      error: 'Test failed',
      data: venue
    })
  )
})

const PORT = 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

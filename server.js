const http = require('http')

const venue = [
  {id:1, name: "Dallas Convention Center"}
]

const server = http.createServer((req, res) => {
  const {headers, url, method} = req
  res.setHeader('Content-Type', 'application/json')
  res.end(
    JSON.stringify({
      success:true,
      data: venue
    })
  )
})

const PORT = 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

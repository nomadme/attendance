const http = require('http')

const venues = [
  {id:1, name: "Dallas Convention Center"},
  {id:2, name: "GrapeVine Convention Center"},
]

const server = http.createServer((req, res) => {
  const {headers, url, method} = req
  let body = []

  req.on('data', chunk => {
    body.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(body).toString()

    let status = 400
    const response = {
      success:false,
      data: null
    }

    if(method === 'GET' && url === '/venues') {
      status = 200
      response.success = true
      response.data = venues
    } else if (method === 'POST' && url === '/venues') {
      //check if the body is valid json text that can be parsed.
      try {
        const {id, name} = JSON.parse(body);
      } catch (e) {
        status = 400
        response.data = e
        console.log(e)
        res.writeHead(status, {
          'Content-Type': 'application/json',
          'X-Powered-By': 'Node.js'
        })
        return res.end(JSON.stringify(response))
      }


      if (!id || !name) {
        status = 400;
      } else {
        venues.push({id, name})
        status = 201
        response.success = true
        response.data = venues
      }
    }

    res.writeHead(status, {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    })
    res.end(JSON.stringify(response))
  })


})

const PORT = 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

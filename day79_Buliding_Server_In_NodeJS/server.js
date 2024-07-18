import http from 'http';
// console.log(http)
const server = http.createServer((req, res)=>{
    // console.log(req)
    res.end('You are in the server.js')
})
// console.log(server)

const port = 1000

server.listen(port, () => (
    console.log(`Server is running on port ${port}`)))
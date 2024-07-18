import http from "http"
const server = http.createServer((req,res)=>{
// console.log(req.url)
if(req.url == '/'){
    res.end('<h1>You are requesting for home routing</h1>')
}else if(req.url == '/superman'){
    res.end('<h1>You are superman</h1>')
}else if(req.url == '/yt'){
    res.end("<h1>You are on youtube</h1>");
}else{
    res.end("<h1>404 not found</h1>");
}
})

const port = 1000

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
// console.log(server)
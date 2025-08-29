// Serving files
const port = 19999
Bun.serve({
    port: port, 
    fetch: function(request) {
        const url = new URL(request.url)
        const path = "www" + url.pathname
        const file = Bun.file(path)
        console.log("request for " + path)
        return new Response(file)
    }
})

console.log("server is running on port " + port)


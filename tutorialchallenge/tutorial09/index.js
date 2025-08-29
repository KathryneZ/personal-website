// Serving securely
// certFile: "/etc/ssl/bun/fullchain.pem",
// kyFile: "/etc/ssl/bun/privkey.pem",
const port = 16000
Bun.serve({
    port: port, 
    certFile: "/etc/ssl/bun/fullchain.pem",
    kyFile: "/etc/ssl/bun/privkey.pem",
    fetch: function(request) {
        const url = new URL(request.url)
        const path = "www" + url.pathname
        const file = Bun.file(path)
        console.log("request for " + path)
        return new Response(file)
    }
})

console.log("server is running on port " + port)


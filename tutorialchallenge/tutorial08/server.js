const port = 16001

Bun.serve({
    port: port,
    certFile: "/etc/ssl/bun/fullchain.pem",
    keyFile: "/etc/ssl/bun/privkey.pem",
    fetch: function(request) {
        const url = new URL(request.url)

        const pathname = url.pathname === "/" ? "/index.htm" : url.pathname;
        const path = "www" + pathname;

        const file = Bun.file(path)

        console.log("request for " + path)
        return new Response(file)
    }
})

console.log("server is running on port " + port)

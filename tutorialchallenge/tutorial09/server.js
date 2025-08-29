const port = 11257
const clients = []
const server = Bun.serve({
    port: port,
    fetch: function(request) {
        const url = new URL(request.url)
        const path = "www" + url.pathname
        const file = Bun.file(path)
        console.log("request for " + path)

        return new Response(file)
    },

websocket:{
    message: function(socket, message) {
        server.publish("chat", message)

        // clients.forEach(function(client){
        //     client.send(message)
        // })
    },
    open: function(socket) {
        socket.subscribe("chat")
        //clients.push(socket)
    },
    close: function(socket) {
        socket.unsubscribe("chat")
        // const clientIndex = clients.indexOf(socket)
        // clients.splice(clientIndex, 1)
    }
}
})

console.log("server is running on port " + port)
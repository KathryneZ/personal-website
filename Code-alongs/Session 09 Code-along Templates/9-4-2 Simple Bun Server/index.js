// Creating routes (static, dynamic) with more responses
// Serving HTML

// Starting a server
const port = 10003
Bun.serve({
    port: port, // Defining a port: Ports 10000 to 20000 have been reserved for student use
    fetch: function(request) {// Handling requests
        console.log(request) 
        const html =  "<!DOCTYPE html><html><head><title>Hello</title></head><body><h1>Hello!</h1></body></html>"
        let response = new Response(
            html, {
                headers: {
                    "Content-Type": "text/html"
                }
            }
           )
        return response // Creating a response
    },
    routes: { //static route
        "/private": function() {
            return new Response(null, {
                status: 403
            })
        },
        "/great/:name": function (response) {// dynamic route
            const greeting = "Hello there, " +response.params.name
            return new Response(greeting, {status: 200})
        },
        "/google": function (){
            return Response.redirect("https://google.come.sg")
        }

    }
})
console.log("server is running on port " + port)

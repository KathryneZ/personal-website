// Test API: https://jsonplaceholder.typicode.com/
//Application Programming Interfaces

// const result = fetch("https://nm2207.nus.edu.sg", {method: "GET" })//add an object as second argument to change the method
// result
//     then(function(response){
//         return response.text()
//     })
//     .then(console.log)

//reading via GET
// fetch("https://jsonplaceholder.typicode.com/", {method: "GET"}) //get is the default method of fetch
//     .then(function(response) {
//         return reponse.json()
//     })
//     .then(function(posts){
//         console.log(posts.length)
//         let countUserEight = 0
//         posts.forEach(function(post){
//             if(post.userID == 8){
//                 counterUserEight ++
//             }
//         })
//         console.log(countUserEight)
//     })

//Create via POST
// fetch("https://jsonplaceholder.typicode.com/posts", 
//     {
//         method: "POST",
//         body: JSON.stringify({
//                 "userId": 10,
//                 "id": 999,
//                 "title": "This is a test",
//                 "body": "Blah"
//         })
    
//     }
// ).then(function(response){
//     console.log(response)
// })


//Update
fetch("hhttps://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
        body: JSON.stringify({
            "body": "Blah",
            // "thisdoesnotmakesense": 11111
        })
}).then(function(reeponse){
    console.log(response)
})

//Delete
fetch("hhttps://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
}).then(function(response){
    console.log(response)
})
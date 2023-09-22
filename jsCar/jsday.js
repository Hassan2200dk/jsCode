const SERVERURL = "http://localhost:8080/api/cars"

const car = fetch(SERVERURL)
.then(response => {
    return response.json()
}).then(data=>{
    console.log(JSON.stringify(data))
})

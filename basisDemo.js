const SERVERURL = "http://localhost:8080/api/cars"

const car = fetch(SERVERURL)
.then(reponse => {
    return reponse.json()
}).then(data=>{
    console.log(JSON.stringify)
})

const newCar = {
    brand: "Toyata",
    model: "RAV",
    pricePrDay: 500,
    bestDiscount: 25
  }  
  
const options = {
    method: "POST",
    headers: {"Content-type": "application/json",},
    body: JSON.stringify(newCar)
}
fetch(SERVERURL, options).then(res=>res.json())
.then(carResponse=>console.log(carResponse))

console.log(car)
console.log("hej")
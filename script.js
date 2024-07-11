// https://api.openweathermap.org/data/2.5/weather?q=alwar&appid=5d0d1225924d886bc267c47bdf4a2e40

let target = 'alwar'
const fetchResults = async (targetlocation) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${targetlocation}&appid=5d0d1225924d886bc267c47bdf4a2e40`
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)

}

fetchResults(target)
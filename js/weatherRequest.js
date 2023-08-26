let cityName = document.getElementById("city");
let precipt = document.getElementById("p");
let temp = document.getElementById("temperature");

async function request(city) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=07ce8d885a60446180b15219232608&q=${city}&aqi=no`);
        if(!response.ok) {
            throw new Error(`Erro na chamada da api: ${responde.status}`);
        }

        let data = await response.json();
        cityName.innerText = data.location.name;
        precipt.innerText = `${data.current.precip_mm}mm`
        temp.innerText = `${data.current.temp_c}Cº`;
    }
    catch (error) {
        alert(`Ocorreu o erro ${error}`)
    }
}
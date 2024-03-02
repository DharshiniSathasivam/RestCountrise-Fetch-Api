const NewDiv = document.querySelector(".container");
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const countryObject = {
        ...element,
        name: element.name.common,
        flags: element.flags.png,
        region: element.region,
        capital: element.capital,
        latlng: element.latlng,
        countryCode: element.cca3 ? element.cca3 : "no countrycode",
      };
      createCountryCard(countryObject);
    });
  })
  .catch((err) => console.log("error : ", err));

  async function getWeather(latlng){
 try{
    let apikey="7b21caf30e04d92e116db74ed2e696b0"
    let weatherapi="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
    let apiObj= await fetch(weatherapi);
    let res=await apiObj.json();
    return res;
 } 
 catch(error){
    console.log("Error :", error)
 }
  }

function createCountryCard(element) {
    const create = document.createElement("div");
  document.body.innerHTML += `
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="${element.flags}" class="card-img-top" alt="...">
      <div class="card-body">
      <p ><span class="card-text"> Capital : ${element.name}</span></p>
      <p ><span class="card-text"> Capital : ${element.capital}</span></p>
      <p ><span class="card-text" > Region : ${element.region}</span></p>
      <p ><span class="card-text"> Country Codes: ${element. countryCode}</span></p>
      <div>
        <button id="btn" class="btn-primary" >Get weather</button>
    </div>
    <div class="display" style="display: none;"></div>
        </div>
    </div>
  </div>
          `;

// NewDiv.appendChild(create)
// const Button1 = create.querySelector("#btn");
//   const Display = create.querySelector(".weather-display");

// Button1.addEventListener("click", async () => {
//     const NewFetch = await getWeather(element.latlng);
//     console.log("Daily Weather:", NewFetch);
// if (NewFetch) {
//       const weather = `
//         <p><span class="card-text">Temperature:</span> ${NewFetch.main.temp}°C</p>
//         <p><span class="card-text">Weather:</span> ${NewFetch.weather[0].description}</p>
//       `;
//       Display.innerHTML = weather;
//       Display.style.display = "block";
//     }
//   });
}
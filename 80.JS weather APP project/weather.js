const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey =  "b9613a14efafd3359eacc6c1e509cada";

weatherForm.addEventListener("submit", async event =>{

// forms have default behaviour where they refresh the page so to prevent that
event.preventDefault(); // to prevent default behavior
const city = cityInput.value; // it should be string
    if(city){
        try{
            const weatherData = await getWeatherData(city);
// since we can only use await with async function since we're within an arrow function we could declare the arrow function as an async function

// we are going to wait for getweatherdata to return the weather data once we recieve it we will call the displayweatherinfo funcion
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter A City");
    }
    
});

async function getWeatherData(city){
// after we have a city we want to get our weather data we need to fetch the weather data we will have to create URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    console.log(response);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
// at the end of getweatherdata return an object that's in a json like format
};

function displayWeatherInfo(data){
    console.log(data);
// so we are going to use some object destructuring
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
// for weather we have to use array destructuring with object destructuring
    card.textContent = ""; // if there's already some text here we would like to reset it
    card.style.display = "flex";
// know we have to create element for card to display on div tag
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
 
};
// the data will be in a json like format

function getWeatherEmoji(weatherId){
    
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return " ⛈ ";
        case (weatherId >= 300 && weatherId < 400):
            return " 🌧 ";
        case (weatherId >= 500 && weatherId < 600):
            return " ⛈ ";
        case (weatherId >= 600 && weatherId < 700):
            return " ❄ ";
        case (weatherId >= 700 && weatherId < 800):
            return " 🌫 ";
        case (weatherId === 800):
            return " ☀ ";
        case (weatherId >= 801 && weatherId < 810):
            return " ☁ ";
        default:
            return "❓";
    }
};

function displayError(message){
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay");

    // take our card element which display the weather data
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
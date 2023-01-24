const btnEl = document.getElementById("btn");
const joke = document.getElementById("joke");

const apikey = "WDVT5muQphOefOtZi6hPhg==HhumttOW35dluCel";

const options = {
    metods: "GET",
    headers: { "x-api-key": apikey },
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();

    const mojak = data[0].joke;
    joke.innerText = mojak;
}

btnEl.addEventListener("click", getjoke);
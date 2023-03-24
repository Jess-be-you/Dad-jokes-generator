const btn = document.getElementById("btn");
const joke = document.getElementById("joke");
const apiKey = "pT1rAMLqlLDwg0p8xsE0dw==2nGLwCxIuidLBGr9";


const options = {
    method: 'GET',
    headers:
    {
        'X-Api-Key': apiKey
    },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke() {
    try {
        joke.innerText = "Updating....";
        btn.disabled = true;
        btn.innerText = "Loading..";

        const response = await fetch(apiUrl, options)
        const data = await response.json();
        btn.disabled = false;
        btn.innerText = "TELL ME A JOKE";

        joke.innerText = data[0].joke;
    }
    catch (error) {
        joke.innerText = "An error occured,try again later";
        console.log("error");
        btn.disabled = false;
        btn.innerText = "TELL ME A JOKE";
    }

}


btn.addEventListener("click", getJoke);
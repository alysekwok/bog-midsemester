const URL = "https://pokeapi.co/api/v2/pokemon/"

//use async function

const searchContainer = document.getElementById("search_image")
const searchValue = document.getElementById("search-bar")

searchValue.addEventListener('keypress', (e) => {
    if (e.key === 'Enter')
        getPokemon(searchValue.value)
})

async function getPokemon(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()

    const imglink = pokemon.sprites.front_default
    const img = document.createElement("img")
    img.src = imglink
    img.width = 300
    if (searchContainer.hasChildNodes()) {
        searchContainer.removeChild(searchContainer.previousSibling)
        searchContainer.appendChild(img)
    } else {
        searchContainer.appendChild(img)
    }
    
}

const textContainer = document.getElementById("pokeText")
const infoButton = document.getElementById("info")

infoButton.addEventListener('click', (e) => {
    getInfo(searchValue.value)
})

async function getInfo(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()
 
    const text = document.createElement("p")
    text.innerText = pokemon.height
    textContainer.replaceChild(text)
}



/*
function renderPokemon(pokeData) {
    letpokeContainer = document.createElement("div")
    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = 

}
*/

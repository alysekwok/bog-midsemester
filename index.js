const URL = "https://pokeapi.co/api/v2/pokemon/"

//use async function

const searchContainer = document.getElementById("search_image")
const searchValue = document.getElementById("search-bar")
const movesButton = document.getElementById("moves")

searchValue.addEventListener('keypress', (e) => {
    if (e.key === 'Enter')
        getPokemon(searchValue.value)
})

movesButton.addEventListener('click', (e) => {
    getMoves(searchValue.value)
})

async function getMoves(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()
    const moves = pokemon.moves
    const text = document.createElement("p")
}

async function getPokemon(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()

    const imglink = pokemon.sprites.front_default
    const img = document.createElement("img")
    img.src = imglink
    img.width = 300
    searchContainer.appendChild(img)
    console.log(searchContainer.childNodes)
    if (searchContainer.hasChildElementCount == 1) {
        searchContainer.appendChild(img)
    } else {
        searchContainer.replaceChild(img, searchContainer.childNodes[1])
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

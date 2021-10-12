
const URL = "https://pokeapi.co/api/v2/pokemon/"
let id

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
    id = pokemon.id

    const imglink = pokemon.sprites.front_default
    const img = document.createElement("img")
    img.src = imglink
    img.width = 300
    searchContainer.appendChild(img)
    if (searchContainer.hasChildElementCount == 1) {
        searchContainer.appendChild(img)
    } else {
        searchContainer.replaceChild(img, searchContainer.childNodes[1])
    }
}

const textContainer = document.getElementById("pokeText")
const infoButton = document.getElementById("info")

const prevButton = document.getElementById("previous")
const nextButton = document.getElementById("next")

infoButton.addEventListener('click', (e) => {
    getInfo(searchValue.value)
})


prevButton.addEventListener('click', (e) => {
    getPrevious(id - 1)
})

nextButton.addEventListener('click', (e) => {
    getNext(id + 1)
})



async function getPrevious(pokeid) {
    if (pokeid >= 1) {
        id--
        getPokemon(pokeid)
    }
}

async function getNext(pokeid) {
    id++
    getPokemon(pokeid)
}


async function getInfo(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()
    const height = pokemon.height
    const weight = pokemon.weight
    const stats = pokemon.stats
    
    textContainer.innerHTML = "Height: " + height + "<br>" + "Weight: " + weight
    // textContainer.innerHTML = "stats:" + stats
}



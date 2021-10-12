
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
    const height = pokemon.height
    const weight = pokemon.weight
    const stats = pokemon.stats
    
    textContainer.innerHTML = "height:" + height
    textContainer.innerHTML = "weight:" + weight
    // textContainer.innerHTML = "stats:" + stats
}

const movesbutton=document.getElementById("moves")

movesbutton.addEventListener('click', (e) => {
    getmoves(searchValue.value)
})

async function getmoves(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()
    const skill = pokemon.moves
    
    textContainer.innerHTML = skill

}

const locationbutton=document.getElementById("location")
locationbutton.addEventListener('click', (e) => {
    getloc(searchValue.value)
})

async function getloc(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()
    const place = pokemon.held_items.location_area_encounters
    
    textContainer.innerHTML = place

}

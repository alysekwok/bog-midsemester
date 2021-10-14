
const URL = "https://pokeapi.co/api/v2/pokemon/"
const statURL = "https://pokeapi.co/api/v2/stat/"
let id

//use async function

const searchContainer = document.getElementById("search_image")
const searchValue = document.getElementById("search-bar")
const movesButton = document.getElementById("moves")
const typeBar = document.getElementById("type-text")

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
    try {
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
        const types = pokemon.types
        typeBar.innerHTML = "Types: "
        for (let i in types) {
            typeBar.innerHTML += JSON.stringify(types[i]["type"]["name"]) + "<br> "
        }
        getInfo(id)
    } catch (e) {
        const img = document.createElement("img")
        img.src="https://www.pngkit.com/png/detail/97-970996_image-of-caution-clipart-caution-sign-clip-art.png"
        img.width = 300
        searchContainer.appendChild(img)
        if (searchContainer.hasChildElementCount == 1) {
            searchContainer.appendChild(img)
        } else {
            searchContainer.replaceChild(img, searchContainer.childNodes[1])
        }
        textContainer.innerHTML = "Does not exist"
        typeBar.innerHTML = "NO TYPE"
    }
}

const textContainer = document.getElementById("pokeText")
const infoButton = document.getElementById("info")

const prevButton = document.getElementById("previous")
const nextButton = document.getElementById("next")

infoButton.addEventListener('click', (e) => {
    getInfo(id)
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
    try {
        const res = await fetch(URL + name)
        // const statRes = await fetch(statURL + name)
        const pokemon = await res.json()
        // const stat = await statRes.json()
        const height = pokemon.height
        const weight = pokemon.weight
        const stats = pokemon.stats
        
        
        textContainer.innerHTML = "Height: " + height + "<br>" + "Weight: " + weight + "<br>" + "Stats: " 
        for (let i = 0; i < 6; i++) {
            textContainer.innerHTML += JSON.stringify(stats[i]["stat"]["name"]) + ": " + JSON.stringify(stats[i]["base_stat"]) + "<br>"
        }
        
        //textContainer.innerHTML += "stats:" + stats
    } catch (e) {
        textContainer.innerHTML = "Does not exist"
    }
}

const movesbutton=document.getElementById("moves")

movesbutton.addEventListener('click', (e) => {
    getmoves(searchValue.value)
})

async function getmoves(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()
    const skill = pokemon.moves
    textContainer.innerHTML = "Moves: " + "<br>"
    for (let i in skill) {
        textContainer.innerHTML += JSON.stringify(skill[i]["move"]["name"]) + "<br>"
    }
    // textContainer.innerHTML = JSON.stringify(skill)


}

const locationbutton=document.getElementById("location")
locationbutton.addEventListener('click', (e) => {
    getloc(searchValue.value)
})

async function getloc(name) {
    const res = await fetch(URL + name)
    const pokemon = await res.json()
    const place = pokemon.location_area_encounters
    const resLoc = await fetch(place)
    const encounterLocation = await resLoc.json()
    textContainer.innerHTML = "Locations: " + "<br>"
    for (let i in encounterLocation) {
        textContainer.innerHTML += JSON.stringify(encounterLocation[i]["location_area"]["name"]) + "<br>"
    }
}

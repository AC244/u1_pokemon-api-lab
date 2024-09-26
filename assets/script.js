// const searchButton = document.querySelector('#button')
// const pokemanInput = document.querySelector('#text')
// const pokemanName = document.querySelector('#pokemanName')
// const imageContainer = document.querySelector('#pokemanImage')
// let textInput = document.querySelector("#inputBar")
// let pokeData = ""

// const getPoke = async (pokeman) => {
//         const pokeType = await axios.get(` https://pokeapi.co/api/v2/pokemon/${pokeman}`) 
//         // const pokeArray = pokeType.data
//          pokeData = pokeType.data
//         console.log(pokeData)
//     }
    
// let button = document.querySelector("#searchButton")

// button.addEventListener('click', async () => {
//     let searchPokeman = textInput.value
//     // console.log(searchPokeman)
    
//     getPoke(searchPokeman)
//     console.log(pokeData.name)
// })

// const inputPkm = document.getElementById('inputPkm');

// const searchPkm = document.getElementById('search');

// const imagePkm = document.getElementById('pkmImage')

// let pkmAPI = 'https://pokeapi.co/api/v2/pokemon/';

// let getPokemon = async (pkName) => {

//   let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkName}`)

//   imagePkm.setAttribute('src', `${pokemon.data.sprites.front_default}`)

// }

// searchPkm.addEventListener('click', () => {

//   getPokemon(inputPkm.value)

// })

let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let textInput = document.querySelector("#inputBar")
let pokemonAbilities = document.getElementById('pokemonAbilities')
let pokemonType = document.getElementById('pokemonType')
let pokeData = ''

const getPoke = async (pokemon) => {
    let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    pokeData = poke.data
    pokemonImage.setAttribute('src', `${poke.data.sprites.front_default}`)
    pokemonName.innerHTML = ''
    pokemonAbilities.innerHTML = ''
    pokemonType.innerHTML = ''
    pokemonName.innerText = `${pokeData.name}`
    for (let i = 0; i < pokeData.abilities.length; i++) {
        let item = document.createElement('p')
        item.innerHTML = `${pokeData.abilities[i].ability.name}`
        pokemonAbilities.appendChild(item)
    }
    for (let i = 0; i < pokeData.types.length; i++) {
        let item = document.createElement('p')
        item.innerHTML = `${pokeData.types[i].type.name}`
        pokemonType.appendChild(item)
    }
}




button.addEventListener('click', async () => {
    let searchPoke = textInput.value
    getPoke(searchPoke)

})
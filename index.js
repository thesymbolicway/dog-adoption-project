const dogImage = "https://dog.ceo/api/breeds/image/random/2"
const dogJson = "http://localhost:3000/dogs"
const dogList = document.querySelector('#dog-image-container')
const saveDogs = document.querySelector('#saved_dogs')
let dogName = document.querySelector('.name')
let dogBreed = document.querySelector('.breed')
let dogPoster = document.querySelector('.detail_image')
let saveBtn = document.querySelector('#save_button')
let dogArray = []



fetch(dogJson)
    .then(response => response.json())
    .then(dogs => {
        renderDogs(dogs)
    })

function renderDogs(dogs) {
    dogs.forEach(dog => {
        const image = document.createElement('img')
        image.src = dog.image
        dogList.append(image)
        image.addEventListener('click', () => showDogDetails(dog))
        // saveBtn.addEventListener('click', () => saveToAdopt(dog))

    })
}

function showDogDetails(dog) {
    dogName.innerText = dog.name
    dogBreed.innerText = dog.breed
    dogPoster.src = dog.image
    console.log(dogImage.src)

    const image = document.createElement('img')
    image.src = dog.image

    saveBtn.addEventListener('click', () => saveToAdopt(image))
}

function saveToAdopt(image) {
        
        saveDogs.append(image)
        image.addEventListener('click', () => showDogDetails(dog))
        console.log(image)
        
    }










    // function handleImageAppending(jsonObject) {
    //     let dogImageContainer = document.getElementById('dog-image-container')
    //     let arrOfDogsURLs = jsonObject.message;
    //     arrOfDogsURLs.forEach(url => {
    //         dogImageContainer.innerHTML += makeImageTagString(url)
    //     const image = document.querySelector('img')
    //     image.addEventListener('click', () => console.log(e.target))
    //     })
    // }
    
    // function makeImageTagString(url){
    //     return `<img src="${url}"/>`
    // }
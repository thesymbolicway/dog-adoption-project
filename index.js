const dogImage = "https://dog.ceo/api/breeds/image/random/2"
const dogJson = "http://localhost:3000/dogs"
const dogList = document.querySelector('#dog-image-container')
const saveDogs = document.querySelector('#saved_dogs')
let dogName = document.querySelector('.name')
let dogBreed = document.querySelector('.breed')
let dogPoster = document.querySelector('.detail_image')
let saveBtn = document.querySelector('#save_button')
let dogArray = []
const dogForm = document.getElementById('new-dog')
let keyPicture = document.getElementById('pic')



fetch(dogJson)
    .then(response => response.json())
    .then(dogs => {
        renderDogs(dogs)
        dogArray = dogs
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

dogForm.addEventListener('submit', (e) => {
    e.preventDefault()
        
    
    let newDog = {
        name: e.target.name.value,
        breed: e.target.breed.value,
        image: e.target.image.value,
    }
    
    dogArray.push(newDog)
    console.log(dogArray)
    renderDogs(dogArray.slice(-1))
        
    
    })

let next = 0;

document.addEventListener('keydown', (event) =>  {
  let pages = ["https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_1343.jpg", 
                "https:\/\/images.dog.ceo\/breeds\/beagle\/n02088364_3171.jpg",
                "https:\/\/images.dog.ceo\/breeds\/papillon\/n02086910_399.jpg",
                "https:\/\/images.dog.ceo\/breeds\/newfoundland\/n02111277_3297.jpg"
            ];
  
  if (event.code === "ArrowRight") {
    if (next >= 0 && next < pages.length - 1) {
      next++;
    } else {
      next = 0;
    };
    keyPicture.src = pages[next];
  };
  if (event.code === "ArrowLeft") {
    if (next >= 0) {
      next--;
    } else {
      next = pages.length - 1;
    };
    keyPicture.src = pages[next];
  };
    if (event.code === "space") {
        let i = Math.floor(Math.random() * pages.length) + 1;
        keyPicture.src = pages[i];
    };
    
    
    
  console.log(event.code)
});
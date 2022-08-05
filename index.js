const dogImage = "https://dog.ceo/api/breeds/image/random/100"
const dogJson = "http://localhost:3000/dogs"
const dogList = document.querySelector('#dog-image-container')
const saveDogs = document.querySelector('#saved_dogs')
let dogName = document.querySelector('.name')
let dogBreed = document.querySelector('.breed')
let dogPoster = document.querySelector('.detail_image')
let dogArray = []
let randomArray = []
const dogForm = document.getElementById('new-dog')
let keyPicture = document.getElementById('pic')
let saveBtn = document.querySelector('#save_button')
let saveParent = document.getElementById('dog_detail')



fetch(dogJson)
.then(response => response.json())
.then(dogs => {
    renderDogs(dogs)
        dogArray = dogs
    })
    
    function renderDogs(dogs) {
        console.log("renderDogs", dogs)
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
        saveBtn.removeChild(saveBtn.firstChild)
        const newSaveBtn = document.createElement('button')
        saveBtn.append(newSaveBtn)
        // saveBtn.append(newSaveBtn)
        // console.log(dogImage.src)
        // const image = document.createElement('img')
        // image.src = dog.image
        console.log("showDogDetails", dog)
        newSaveBtn.addEventListener('click', () => saveToAdopt(dog))
        // newSaveBtn.removeEventListener('click', () => saveToAdopt(dog))
        // saveBtn.addEventListener('click', () => saveToAdopt(dog), () => {once: true})
    }

function saveToAdopt(dog) {
    console.log("saveToAdopt", dog)
    const saveImage = document.createElement('img')
    saveImage.src = dog.image
    saveDogs.append(saveImage)
    console.log(saveImage)
    // saveImage.addEventListener('click', () => showDogDetails(dog))
        
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

fetch(dogImage)
    .then(response => response.json())
    .then(dogImage => {
        randomArray = dogImage.message
    })

let next = 0;
document.addEventListener('keydown', (event) =>  {
  let pages = randomArray;
  
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
    if (event.code === "Space") {
        let i = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
        keyPicture.src = pages[i];
    };
    
    
    
  console.log(event.code)
});


// // "https:\/\/images.dog.ceo\/breeds\/hound-afghan\/n02088094_2173.jpg","https:\/\/images.dog.ceo\/breeds\/pitbull\/20190710_143021.jpg","https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_10072.jpg","https:\/\/images.dog.ceo\/breeds\/newfoundland\/n02111277_6402.jpg","https:\/\/images.dog.ceo\/breeds\/elkhound-norwegian\/n02091467_4636.jpg","https:\/\/images.dog.ceo\/breeds\/pug\/n02110958_13042.jpg","https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_16424.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-english\/jager-2.jpg","https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_8390.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-norfolk\/n02094114_4266.jpg","https:\/\/images.dog.ceo\/breeds\/papillon\/n02086910_5010.jpg","https:\/\/images.dog.ceo\/breeds\/retriever-curly\/n02099429_3276.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_6318.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-norfolk\/n02094114_513.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-english\/murphy.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-english\/3.jpg","https:\/\/images.dog.ceo\/breeds\/beagle\/n02088364_17314.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_2836.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-toy\/n02087046_3490.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-brittany\/n02101388_3344.jpg","https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_15436.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-cairn\/n02096177_4825.jpg","https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_14066.jpg","https:\/\/images.dog.ceo\/breeds\/lhasa\/n02098413_8468.jpg","https:\/\/images.dog.ceo\/breeds\/mountain-swiss\/n02107574_2283.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_3952.jpg","https:\/\/images.dog.ceo\/breeds\/dachshund\/dog-495133_640.jpg","https:\/\/images.dog.ceo\/breeds\/ridgeback-rhodesian\/n02087394_9712.jpg","https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_11785.jpg","https:\/\/images.dog.ceo\/breeds\/corgi-cardigan\/n02113186_9116.jpg","https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_174753.jpg","https:\/\/images.dog.ceo\/breeds\/shihtzu\/n02086240_9551.jpg","https:\/\/images.dog.ceo\/breeds\/entlebucher\/n02108000_986.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-brittany\/n02101388_733.jpg","https:\/\/images.dog.ceo\/breeds\/borzoi\/n02090622_8236.jpg","https:\/\/images.dog.ceo\/breeds\/havanese\/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg","https:\/\/images.dog.ceo\/breeds\/appenzeller\/n02107908_3971.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-english\/3.jpg","https:\/\/images.dog.ceo\/breeds\/hound-plott\/hhh-23456.jpeg","https:\/\/images.dog.ceo\/breeds\/saluki\/n02091831_3067.jpg","https:\/\/images.dog.ceo\/breeds\/mexicanhairless\/n02113978_2804.jpg","https:\/\/images.dog.ceo\/breeds\/poodle-miniature\/n02113712_9159.jpg","https:\/\/images.dog.ceo\/breeds\/whippet\/n02091134_17608.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-norwich\/n02094258_1091.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-westhighland\/n02098286_1490.jpg","https:\/\/images.dog.ceo\/breeds\/coonhound\/n02089078_243.jpg","https:\/\/images.dog.ceo\/breeds\/dingo\/n02115641_10992.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-kerryblue\/n02093859_3113.jpg","https:\/\/images.dog.ceo\/breeds\/retriever-golden\/n02099601_1743.jpg","https:\/\/images.dog.ceo\/breeds\/pointer-germanlonghair\/hans1.jpg"
  
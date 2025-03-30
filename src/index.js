console.log('%c HI', 'color: firebrick')
let breeds = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
document.addEventListener('DOMContentLoaded',function(){
    imagedis()
    breeddis()
})
function imagedis(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(image => displayImages(image))

    })
    .catch(error => console.error(error))  
}
function breeddis(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

}

function displayImages(image){
    const pic = document.getElementById('dog-image-container')
    const img = document.createElement("img")
    img.src = image
    img.alt = "Random dog"
    pic.appendChild(img)
}


function breeddis() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
  
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
      });
  }
  
  function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }
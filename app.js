const newDogPicture = document.querySelector('.new-doggo');
const currentDog = document.querySelector('.current-doggo');

newDogPicture.addEventListener('click', showNewDogPicture);

let audio = new Audio('./sounds/woof.mp3');

async function showNewDogPicture() {
    audio.play();
    const loadedDoggoJSON = await loadDoggo();
    if (loadedDoggoJSON.message) {
        currentDog.src = loadedDoggoJSON.message;
    } 
}

async function loadDoggo() {
    try {
        const loadedDoggoJSON = await (
            await fetch("https://dog.ceo/api/breeds/image/random")
        ).json();
        return loadedDoggoJSON;
    } catch (err) {
        console.log(err);
    }
}
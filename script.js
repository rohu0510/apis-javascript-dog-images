var dogImageDiv = document.getElementById('dog-image');
var refreshBtn = document.getElementById('refresh-btn')

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random').
    then(response => response.json()).
    then(json => {
      dogImageDiv.innerHTML = `<img src=${json.message}>`
    })
}


refreshBtn.addEventListener('click', () => {
  getNewDog();
})


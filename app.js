const searchInput = document.getElementById('search-input');
const songContainers = document.getElementsByClassName('song-cont');
const backToPlayer = document.getElementById('backToPlayer');
backToPlayer.addEventListener("click", function(){
window.location.href = "index.html";
});

const forTheSearchLife = () => {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < songContainers.length; i++) {
        const songName = songContainers[i].querySelector('#stored-song').textContent.toLowerCase();
        const artistName = songContainers[i].querySelector('#stored-artist').textContent.toLowerCase();

        if (songName.includes(searchTerm) || artistName.includes(searchTerm)) {
            songContainers[i].style.display = 'block';
        } else {
            songContainers[i].style.display = 'none';
        }
    }
}


searchInput.addEventListener('input', function() {
    forTheSearchLife();
});

const advertisementContainer = document.getElementById('advertisementContainer');
const advertisements = [
  { url: 'music-images/advert1.jpg', duration: 1000 },
  { url: 'music-images/advert2.jpg', duration: 1000 },
  { url: 'music-images/dominate.jpg', duration: 1000 }
];

let currentAdIndex = 0;

function displayAdvertisement(advertisement) {
  advertisementContainer.innerHTML = `<img src="${advertisement.url}" alt="Advertisement">`;
  setTimeout(rotateAdvertisement, advertisement.duration);
}

function rotateAdvertisement() {
  currentAdIndex = (currentAdIndex + 1) % advertisements.length;
  const nextAdvertisement = advertisements[currentAdIndex];
  displayAdvertisement(nextAdvertisement);
}
displayAdvertisement(advertisements[currentAdIndex]);

const songElements = document.querySelectorAll('.song-cont');


songElements.forEach((songElement, index) => {
  songElement.addEventListener('click', () => {
    
    window.location.href = `index.html?songIndex=${index}`;
  });
});
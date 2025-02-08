const fetchGallery = async () => {
    const gallery = document.getElementById('gallery');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            console.log(`Erreur API ${response}`)
        }
        const data = await response.json();
        
        data.slice(0, 50).forEach(item => {
            gallery.innerHTML +=
                `
                    <div class='photo'>
                    <img src=${item.thumbnailUrl}>
                    <img alt=${item.title}>
                    </div>

                    <div class='photo-title'>${item.title}</div>
                `;
        })
        console.log(data.slice(0, 50))
    } catch (error) {
        console.error(error)
    }
}
fetchGallery();

function gallery() {
		fetch('<https://jsonplaceholder.typicode.com/photos>').then(response => response.json())
		.then(photos => {
			const gallery = document.getElementById('gallery');
			photos.slice(0, 50).forEach(photo => {
				const photoDiv = document.createElement('div');
				photoDiv.className = 'photo';
				const img = document.createElement('img');
				img.src = photo.thumbnailUrl;
				img.alt = photo.title;
				const title = document.createElement('div');
				title.className = 'photo-title';
				title.textContent = photo.title;
				photoDiv.appendChild(img);
				photoDiv.appendChild(title);
				gallery.appendChild(photoDiv);
			});
		})
}

//window.onload = gallery;


// Select all images in the grid
const images = document.querySelectorAll('.ImgGrid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Open lightbox on image click
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close lightbox on clicking the close button or outside the image
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Close lightbox if clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        closeLightbox();
    }
});

// Close lightbox using the close button
document.querySelector('.close').addEventListener('click', closeLightbox);

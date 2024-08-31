document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeButton = document.querySelector('.lightbox-close');
    let currentIndex = 0;

    // Open lightbox on image click
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(img);
        });
    });

    function openLightbox(img) {
        lightboxImg.src = img.src;
        const caption = img.nextElementSibling.textContent; // Get the caption
        lightboxCaption.textContent = caption; // Set the caption in the lightbox
        lightbox.style.display = 'flex';
    }

    // Close lightbox on close button click
    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                navigate(1);
            } else if (e.key === 'ArrowLeft') {
                navigate(-1);
            } else if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        }
    });

    function navigate(direction) {
        currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
        openLightbox(galleryImages[currentIndex]);
    }
});

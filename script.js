/* ---------------- LIGHTBOX ---------------- */
const zoomImgs = document.querySelectorAll('.zoom-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

zoomImgs.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

/* ---------------- COUNTERS ---------------- */
const counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
    counters.forEach(counter => {
        let target = +counter.getAttribute('data-target');
        let count = 0;
        let speed = target / 150;

        let updateCounter = setInterval(() => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.floor(count);
            } else {
                counter.innerText = target;
                clearInterval(updateCounter);
            }
        }, 20);
    });
}

window.addEventListener('scroll', () => {
    const counterSection = document.querySelector('.counters');
    const pos = counterSection.getBoundingClientRect().top;

    if (pos < window.innerHeight && !started) {
        startCounters();
        started = true;
    }
});

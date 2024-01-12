function openLightbox(imagePath) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    lightbox.style.display = 'flex';
    lightboxImage.src = imagePath;

    console.log("called");
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // bold handler
            // const targetTab = button.getAttribute('data-tab');
            buttons.forEach(b => {
                // b.classList.remove('active');
                b.classList.remove('font-bold');
            });
            // contents.forEach(c => c.classList.remove('active'));
            // button.classList.add('active');
            button.classList.add('font-bold');

            // sorting
            const entries = Array.from(document.querySelectorAll('div.entry'));

            const buttonType = button.getAttribute('type');

            entries.sort((a, b) => {
                const aID = a.id;
                const bID = b.id;

                const aHasType = aID.includes(buttonType);
                const bHasType = bID.includes(buttonType);

                if (aHasType && bHasType) {
                    const aInt = parseInt(aID.charAt(aID.length - 1), 10);
                    const bInt = parseInt(aID.charAt(aID.length - 1), 10);

                    return bInt - aInt;
                } else if (aHasType) {
                    return -1;
                } else {
                    return 1;
                }
            });

            const container = document.getElementById('tab-1');

            entries.forEach((item) => {
                container.appendChild(item);
            })

            // document.getElementById(targetTab).classList.add('active');
        });
    });

    const darkModeToggle = document.getElementById('modeToggle');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark');
    });
});
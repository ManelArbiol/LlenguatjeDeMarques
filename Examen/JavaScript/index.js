document.addEventListener('DOMContentLoaded', function () {

    let applauseCount = 0;


    window.addEventListener('click', function() {
        const applauseImg = document.createElement('img');
        applauseImg.src = 'src/clapping-hands.png';
        applauseImg.classList.add('applause-image');
        applauseCount++;
        const offsetX = (applauseCount - 1) * 60;
        applauseImg.style.left = `calc(50% + ${offsetX}px)`;
        document.body.appendChild(applauseImg);
    });

});

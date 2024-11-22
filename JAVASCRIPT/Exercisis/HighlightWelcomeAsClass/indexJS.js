document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const pWord = document.querySelector('p')


    function changeWithToggle(){
        pWord.classList.toggle('highlited');
    }

    button.addEventListener("click", changeWithToggle);
})
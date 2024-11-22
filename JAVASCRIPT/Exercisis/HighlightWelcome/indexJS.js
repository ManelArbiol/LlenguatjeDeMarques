document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const pWord = document.querySelector('p')


    function changeColorBackground(){
        pWord.style.backgroundColor = "lightgreen";
        pWord.style.border = "1px solid black";
    }

    button.addEventListener("click", changeColorBackground);
})
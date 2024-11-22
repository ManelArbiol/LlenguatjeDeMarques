document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('#nameInput');
    const sendButton = document.querySelector('#sendButton');
    const result = document.querySelector('#result');

    function welcomeName(){
        let name = nameInput.value;
        result.textContent = `Hello ${name}!`;
    }

    sendButton.addEventListener("click", welcomeName);
})

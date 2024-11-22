document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#textInput');
    const button = document.querySelector('#add');
    const list = document.querySelector('#list');
    const alertError ="El text és buit";


    button.addEventListener('click', () => {
        const text = input.value;

        if (text === ""){
            alert(alertError);
        }
        else{
            const li = document.createElement('li');
            li.textContent = text;
            list.appendChild(li);


            input.value = "";
        }
    })
})
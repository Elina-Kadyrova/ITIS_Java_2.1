window.addEventListener('DOMContentLoaded', () => {
    buttons = document.querySelectorAll(".btn");
    colors = ['#c2bf61', '#61c264', '#6193c2'];

    for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', function () {
            document.body.style.backgroundColor = window.getComputedStyle(buttons[j]).backgroundColor;
        })
    }
})
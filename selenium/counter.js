document.addEventListener("DOMContentLoaded", function () {
    const plus = document.querySelector("#increase");
    const minus = document.querySelector('#decrease');
    const h1 = document.querySelector('h1')
    let c = 0;

    plus.addEventListener('click', () => {
        c += 1;
        h1.innerHTML = c;
    });

    minus.addEventListener('click', () => {
        c -= 1;
        h1.innerText = c;
    });

})
if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
//let c = 0;

function count() {
    let c = localStorage.getItem('counter');
    c ++;
    document.querySelector('h1').innerText = c;
    localStorage.setItem('counter', c);
}

document.addEventListener('DOMContentLoaded',function () {
    document.querySelector('h1').innerText = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
    //setInterval(count,1000);
});

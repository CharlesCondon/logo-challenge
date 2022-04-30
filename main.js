document.addEventListener("DOMContentLoaded", () => {
    const initial = document.getElementById('start').innerHTML;
    const reset = document.querySelector('.reset');
    let html;
    window.onload = function() {
        html = document.querySelector('#start').innerHTML;
    }
    reset.onclick = () => {
        document.getElementById('start').innerHTML = html;
    }
});
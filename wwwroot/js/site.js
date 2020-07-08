// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let modal = document.getElementById('myModal');
//let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.myBtn').forEach(item => {
    item.addEventListener('click', function () {
        modal.style.display = "block";
    })
})


//btn.onclick = function () {
//    modal.style.display = "block";
//}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
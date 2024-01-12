document.addEventListener("DOMContentLoaded", () => {
    let fotos = document.querySelectorAll(".image img");

    for (let i = 0; i < fotos.length; i++) {
        fotos[i].onclick = () => {
            document.querySelector('.popup-image').style.display = "block";
            document.querySelector('.popup-image img').src = fotos[i].src;
        };
    }

    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = "none";
    };
});
document.addEventListener("DOMContentLoaded", () => {
    const galleries = [
        document.getElementsByClassName("image"),
        document.getElementsByClassName("imagem"),
        document.getElementsByClassName("imager"),
        document.getElementsByClassName("imageb"),
        document.getElementsByClassName("imagea"),
        document.getElementsByClassName("images"),
        document.getElementsByClassName("imagesi"),
        document.getElementsByClassName("imagere"),
        document.getElementsByClassName("imageca"),
        document.getElementsByClassName("imageil"),
        document.getElementsByClassName("imageco"),
        document.getElementsByClassName("imagear"),
        document.getElementsByClassName("imageto"),
        document.getElementsByClassName("imageur"),
        document.getElementsByClassName("imageme"),
        document.getElementsByClassName("imageel"),
        document.getElementsByClassName("imagege"),
        document.getElementsByClassName("imageau"),
        document.getElementsByClassName("imagesa"),
        document.getElementsByClassName("imagein"),
        document.getElementsByClassName("imagemo"),
        document.getElementsByClassName("imagema"),
        document.getElementsByClassName("imageis"),
        document.getElementsByClassName("imagedi"),
        document.getElementsByClassName("imagetr"),
        document.getElementsByClassName("imagecv"),
        document.getElementsByClassName("imagemi"),

    ];

    const previewBox = document.querySelector(".preview-box");
    const previewImg = previewBox.querySelector("img");
    const closeIcon = previewBox.querySelector(".icon");
    const currentImg = previewBox.querySelector(".current-img");
    const totalImg = previewBox.querySelector(".total-img");
    const shadow = document.querySelector(".shadow");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentGallery = null;
    let currentIndex = 0;

    function initializeGallery(gallery, index) {
        totalImg.textContent = gallery.length;

        for (let i = 0; i < gallery.length; i++) {
            gallery[i].addEventListener("click", () => {
                currentIndex = i;
                currentGallery = gallery;
                showPreview();

                prevBtn.style.display = currentIndex === 0 ? "none" : "block";
                nextBtn.style.display =
                    currentIndex >= gallery.length - 1 ? "none" : "block";

                prevBtn.onclick = () => navigate(-1);
                nextBtn.onclick = () => navigate(1);

                document.querySelector("body").style.overflow = "hidden";
                previewBox.classList.add("show");
                shadow.style.display = "block";

                closeIcon.onclick = () => closePreview();
            });
        }
    }

    function showPreview() {
        currentImg.textContent = currentIndex + 1;
        let imageURL = currentGallery[currentIndex].querySelector("img").src;
        previewImg.src = imageURL;
    }

    function navigate(direction) {
        currentIndex += direction;

        prevBtn.style.display = currentIndex === 0 ? "none" : "block";
        nextBtn.style.display =
            currentIndex >= currentGallery.length - 1 ? "none" : "block";

        showPreview();
    }

    function closePreview() {
        currentIndex = 0;
        showPreview();

        prevBtn.style.display = "block";
        nextBtn.style.display = "block";

        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
    }

    
    galleries.forEach((gallery, index) => initializeGallery(gallery, index));



    
});


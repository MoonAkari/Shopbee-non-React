// Modal box
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let login = $$(".navbar__list-item-login");
let sigin = $$(".navbar__list-item-sigin");
let modalBox = $(".modal")
let modalOverlay = $(".modal__overlay");

let preDefault = (e)=>{
    e.preventDefault()
}

const start = function (){
    handleSearchBar()
}

login.forEach((a, b) =>{
    a.addEventListener("click", (e) =>{
        modalBox.classList.add("open__block");
        $(".modal__signin").classList.remove("open__block");
        $(".modal__verify").classList.add("open__block");
    })
});

sigin.forEach((a, b) =>{
    a.addEventListener("click", (e) =>{
        modalBox.classList.add("open__block")
        $(".modal__verify").classList.remove("open__block");
        $(".modal__signin").classList.add("open__block");
    })
});

modalOverlay.addEventListener("click", (e) =>{
    modalBox.classList.remove("open__block")
    e.stopPropagation()
});

// END Modal box

// tìm kiếm box

let a = JSON.stringify(["sách", "giáo dục"])
console.log(a)
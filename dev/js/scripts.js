let burger = document.querySelector("#burger-icon");
let Menu = document.querySelector("#menu");

let canSeeMenu = false;

burger.addEventListener("click", () => {
    

    if(!canSeeMenu){
        Menu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        Menu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})


let closeBtn = document.querySelector("#x-button");

closeBtn.addEventListener("click", () => {
        Menu.classList.remove("show-menu");
        canSeeMenu = false;
})
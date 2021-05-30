function navOpen() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navigation");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active")
        if(burger.classList.contains("active")){
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "";
        }
    })

}

navOpen()

function navCategories() {
    const name = document.querySelectorAll(".navigation__name");
    const drops = document.querySelectorAll(".navigation__dropdown");
    name.forEach(item => {
        item.addEventListener("click", () => {
            let sibling = item.nextElementSibling
            let siblingChild = sibling.children
            let total = sibling.children.length * 40;

            
            console.log(siblingChild)
            if(!item.classList.contains("active")){
                drops.forEach(item => {
                    item.classList.remove("active")
                    item.style.height = 0;
                    item.previousElementSibling.classList.remove("active")
                    for (const child of item.children) {
                        child.classList.remove("active")
                    }
                    item.previousElementSibling.querySelector(".plus-minus").children[1].classList.remove("hide")
                })
                item.classList.add("active")
                sibling.classList.add("active");
                for (const child of siblingChild) {
                    child.classList.add("active")
                }
                item.querySelector(".plus-minus").children[1].classList.add("hide")
                sibling.style.height = total + "px";
                

            }else{
                item.classList.remove("active")
                sibling.classList.remove("active");
                for (const child of siblingChild) {
                    child.classList.remove("active")
                }
                item.querySelector(".plus-minus").children[1].classList.remove("hide")
                sibling.style.height = 0;
            }
            
        })
    })
}

navCategories();

function removeHref() {
    const gallery = document.getElementById("gallery");

    if (window.innerWidth <= 1024) {
        gallery.removeAttribute("href");
    }
}

removeHref()
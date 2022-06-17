sidebar = document.querySelector(".sidebar")

layer = document.querySelector(".layer")
btn = document.querySelector(".toggle-btn")
btn.addEventListener("click", ()=> {
    sidebar.classList.add("active");
    layer.classList.add("trans")
}
)
closeBtn = document.querySelector(".close-menu")
closeBtn.addEventListener("click", ()=> {
    sidebar.classList.remove("active");
    layer.classList.remove("trans")
}
)
    arrow = document.querySelectorAll(".arrow")
    console.log(arrow)
    for (var i=0; i<arrow.length; i++){
        arrow[i].addEventListener("click", (e)=> 
        {console.log(e);
        arrowParent = e.target.parentElement.parentElement.lastElementChild;
        console.log(arrowParent);
        arrowParent.classList.toggle("show");
        if (e.target.getAttribute("src") === "images/icon-arrow-down.png"){
            e.target.setAttribute("src", "images/icon-arrow-up.png")
        }
        else{
            e.target.setAttribute("src", "images/icon-arrow-down.png")
        }
        })
}
navArrow = document.querySelectorAll(".nav-arrow")
for (var i=0; i<navArrow.length; i++){
    navArrow[i].addEventListener("click", (e)=>{
        navArrowParent = e.target.parentElement.parentElement.lastElementChild
        navArrowParent.classList.toggle("show")
        if(e.target.getAttribute("src") === "images/icon-arrow-down.png"){
            e.target.setAttribute("src", "images/icon-arrow-up.png")
        }
        else{
            e.target.setAttribute("src", "images/icon-arrow-down.png")
        }
     })
    }


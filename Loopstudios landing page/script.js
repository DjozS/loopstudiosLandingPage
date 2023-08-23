const menuBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.closeBtn')
const list = document.querySelector('.navUl')    
menuBtn.addEventListener("click", function(){
        menuBtn.style.display = "none";
        list.style.display = "flex";
        closeBtn.style.display = "flex";
    })
closeBtn.addEventListener("click", function(){
        list.style.display = "none";
        closeBtn.style.display = "none";
       if(window.innerWidth < 500){
        menuBtn.style.display = "flex"
       }
    })


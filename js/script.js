var myModal = new bootstrap.Modal(document.getElementById('modalMenu'));
const close = document.querySelector(".btn-close");
const why = document.querySelector("#modal-menu-why");
close.onclick = ()=>console.log("item-text clicked!");
// why.addEventListener("click",()=>myModal.hide());
why.addEventListener("click",()=>window.location.hash="#about");
why.addEventListener('click', function(e) { 
var aboutScrollBtn = document.querySelector("#about-scroll-btn");

    myModal.hide();
    aboutScrollBtn.click();
    aboutScrollBtn.onclick = ()=>console.log("item-text clicked!");
})

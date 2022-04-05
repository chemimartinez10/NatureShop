let oldScroll = 0, newScroll = 0
let maxWidth = window.outerWidth
const header = document.querySelector('header')
let areaPresent = document.getElementById("area-presentation")
const imgPresent1 = document.getElementById('imgpres1')
const imgPresent2 = document.getElementById('imgpres2')
const imgPresent3 = document.getElementById('imgpres3')
const collapseBtn = document.querySelector('.collapse-button')
const hiddenMenu = document.querySelector('.hidden-menu')
const hiddenList = hiddenMenu.querySelectorAll('ul li')
const formulario = document.querySelector('#area-contact .form')

let arrayOffset = []
for (const article of areaPresent.children) {
    arrayOffset.push(article.offsetTop - 400) 
}
arrayOffset.push(formulario.offsetParent.offsetTop - 500)
for(const li of hiddenList){
    li.addEventListener('click', ()=>{
        hiddenMenu.classList.toggle('show')
        
    })
}

collapseBtn.addEventListener('click', ()=>{
    hiddenMenu.classList.toggle('show')
})
window.addEventListener('scroll',(event)=>{
    newScroll = event.target.scrollingElement.scrollTop
    if(newScroll > arrayOffset[0]){
        header.classList.add('active')
        imgPresent1.classList.add('animate')
        if(newScroll > arrayOffset[1]){
            imgPresent2.classList.add('animate')
        }
        if(newScroll > arrayOffset[2]){
            imgPresent3.classList.add('animate')
        }
        if(newScroll > arrayOffset[3]){
            formulario.classList.add('animate')
        }
        if(newScroll > oldScroll){
            header.style.display = 'none'
        }
        else{
            header.style.display = 'block'

        }
    }
    else{
        header.classList.remove('active')
        
    }
    oldScroll = newScroll
})
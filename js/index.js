let oldScroll = 0, newScroll = 0

addEventListener('scroll',(event)=>{
    const header = document.querySelector('header')
    newScroll = event.target.scrollingElement.scrollTop
    if(newScroll > 500){
        header.classList.add('active')
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
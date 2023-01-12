const image360 = document.querySelector('.button-360')
const button360 = document.querySelector('.enable-360')
const imageSofa = document.querySelector('.sofa-image')

function changeImage(status){
if(status){
    image360.setAttribute('src', './images/closeButton.svg')
    button360.animate([{opacity: 0}, {opacity: 1}], {duration: 200})
    imageSofa.animate([{opacity: 0}, {opacity: 1}], {duration: 200})
    imageSofa.setAttribute('src', './images/sofá.gif')
    
} else {
    image360.setAttribute('src', './images/360button.svg')
    button360.animate([{opacity: 0}, {opacity: 1}], {duration: 200})
    imageSofa.animate([{opacity: 0}, {opacity: 1}], {duration: 200})
    imageSofa.setAttribute('src', './images/sofá.png')
    
}
}

let statusGif = false
image360.addEventListener('click', () => {
    changeImage(!statusGif)
    statusGif = !statusGif
})

imageSofa.addEventListener('click', () => {
    changeImage(!statusGif)
    statusGif = !statusGif
})
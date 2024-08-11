/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')
// ====== SWIPPER JS =======

let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

// ====== POPUP ======
const btnOpenVideo = document.querySelectorAll('.beaches__video-content')
const beachesPopup = document.getElementById('popup')
 
function poPup(){
    beachesPopup.classList.add('show-popup')
}

btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', ()=>{
    beachesPopup.classList.remove('show-popup')
})
// ====== GSAP ANIMATIOM ======
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation(){
    gsap.from('.beaches__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.beaches__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.beaches__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.beaches__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.beaches__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

    beachesPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))

/* toggle icon navbar*/
let menuIcon=document.getElementById('menu-icon');
let navbar=document.getElementById('navbar');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
/* scroll section active link*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');
        if(top >= offset && top<offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('headers nav a[href*='+ id +']').classList.add('active');
            });


        };
    });

/*===========sticky navbar========*/
let header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /* remove toggle icon and navbar link when click navbar link*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};



ScrollReveal({
reset: true,
distance:'80px',
duration:2000,
delay:200
});
ScrollReveal().reveal('.home-content,heading,.education', { origin:'top' });
ScrollReveal().reveal('.home-img,.contact form,.portfolio-box', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img,.skills', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });
const typed=new Typed('.multiple-text',{
    strings:['Software Engneering Student'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const circle=document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked =elem.getAttribute("data-percent");
    var percent =Math.floor(dots*marked/100);
    var points ="";
    var rotate =360/dots;
    for(leti=0;i<dots;i++){
        points +=' <div class="points" style="--i:${i};--rot:${rotate}deg"></div>';

    }
    elem.innerHTML=points;
    const pointsMarked=elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked');
    }

    
});

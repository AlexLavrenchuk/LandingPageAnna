// $(document).ready(function(){
//     $('.slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         // centerMode: true,
//         arrows: false,
//         dots: true,
//         responsive: [{
//             breakpoint: 1220,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 centerMode: false
//             }
//         },{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }]
//     });
// });

$(window).scroll(function() {
    $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});

$("h1").fadeIn(1000);


// js
// create slider
const parent = document.querySelector(".slider");

const prevButton = document.createElement("button");
const nextButton = document.createElement("button");

function foo() {
    if (!parent) return console.log("class slider didn't found");
    const [...children] = parent.children;

    parent.setAttribute('style', "position: relative");

    children.forEach( (item, i) => {
        if (i !== 0) {
            item.style.display = "none";
            item.style.position = "absolute";
        } else {
            item.classList.add('active');
        }
    });

    addButton();
    
}

// create Button
function addButton() {    
    prevButton.innerText = 'prev';
    nextButton.innerText = 'next';

    const styleCss = {
        position: "absolute",
        top: 0,
        opacity: 0.5,
        padding: "20px",
        cursor: 'pointer',
        height: parent.clientHeight + 'px'
    }

    Object.assign(prevButton.style, styleCss);
    Object.assign(nextButton.style, styleCss);


    prevButton.style.left = '0';
    nextButton.style.right = '0';

    parent.appendChild(prevButton);
    parent.appendChild(nextButton);
}


function prevSlide() {
    const active = document.querySelector('.active');

    let elem = active.previousElementSibling;

    if (!elem || elem.tagName === 'BUTTON') {
        elem = active.parentElement.lastElementChild;
    } 
    while (elem.tagName === 'BUTTON') {
        elem = elem.previousElementSibling
    }

    elem.classList.add('active');
    elem.style.display = 'block';
    elem.style.position = 'relative';
    active.classList.remove('active');
    active.style.display = 'none';
    active.style.position = 'absolute';

}
function nextSlide() {
    const active = document.querySelector('.active');

    let elem = active.nextElementSibling;

    if (!elem || elem.tagName === 'BUTTON') {
        elem = active.parentElement.firstElementChild;  
    } 

    elem.classList.add('active');
    elem.style.display = 'block';
    elem.style.position = 'relative';
    active.classList.remove('active');
    active.style.display = 'none';
    active.style.position = 'absolute';
}


// event
document.addEventListener("DOMContentLoaded", foo);
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
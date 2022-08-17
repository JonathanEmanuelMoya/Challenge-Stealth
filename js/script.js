let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activate = true;

btnMenu.addEventListener('click', () => {

    /* Change the icon if you press it */
    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    /* Transition for menu button */
    if (activate) {
        menu.style.left = "0";
        menu.style.transition = "0.7s";

        activate = false;
    } else {
        activate == false;
        menu.style.left = "-100%";
        menu.style.transition = "0.7s";

        activate = true;
    }
});

/* Change active class */

let links = document.querySelectorAll('.list li a');

links.forEach((element) => {

    element.addEventListener('click', (event) => {

        links.forEach((link) => {

            link.classList.remove('active');
        });

        event.target.classList.add('active')
    });
});


/* Scroll Effect */

let prevScrollPosition = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

    let currentScrollPosition = window.pageYOffset;

    /* Show and hide navbar */

    if (prevScrollPosition > currentScrollPosition) {

        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.7s";
    } else {
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.7s";
    }

    prevScrollPosition = currentScrollPosition;


    /* Show and hide Scroll styles */

    let up = window.pageYOffset;

    if (up <= 600) {
        containerMenu.style.borderBottom = "none";

        goTop.style.right = "-100%";

    } else {
        containerMenu.style.borderBottom = "3px solid #88203a";

        goTop.style.right = "0";
        goTop.style.transition = "0.7s";
    }

};

/* See Below button */


goTop.addEventListener('click', () => {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let seeBelow = document.querySelector('#below');

seeBelow.addEventListener('click', () => {

    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
})
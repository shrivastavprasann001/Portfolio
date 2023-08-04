gsap.to(
    "#navbar", {
    duration: 1,
    opacity: ".5",
    height: "6rem",
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname) {
    // To remove the footer line when we click on link
    for (tab of tablinks) {
        tab.classList.remove("active-link");
    }
    // To remove active content when we click on link
    for (tabs of tabcontents) {
        tabs.classList.remove("active-tab");
    }
    // jis link pr click karein usi k neeche line aaye 
    event.currentTarget.classList.add("active-link");
    // pehle element ko get karke usko active tab class de dena hai 
    document.getElementById(tabname).classList.add("active-tab");
}

// -----------------Project -> .card height increase---------------
const childElement = document.querySelector('.card_upper');
const parentElement = document.querySelector('.card');
const childElement1 = document.querySelector('.card_2_upper');
const parentElement2 = document.querySelector('.card_2');

childElement.addEventListener('mouseover', () => {
    parentElement.style.height = '20rem';
})

childElement.addEventListener('mouseout', () => {
    parentElement.style.height = '4rem';
})


childElement1.addEventListener('mouseover', () => {
    parentElement2.style.height = '20rem';

})

childElement1.addEventListener('mouseout', () => {
    parentElement2.style.height = '4rem';
})



// MOBILE RESPONSIVE MENU 
const menu = document.getElementById('sidebar-button');
const insidemenu = document.querySelectorAll('#navbar .navtag li a');
var submenu = document.querySelector(".navtag");
// const menu = document.querySelectorAll('.navtag');

menu.onclick = () => {
    submenu.classList.toggle("open");

}
insidemenu.onclick = () => {
    submenu.classList.remove("open");
}




// ------------Google Sheet ---------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzBmHMe6P6JXVn7nUppq0BUvxh7XBo6swIRsM0yvJK3Gc7-7y94L9tJYb1TiyKNVpGx/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

// -----------Scrolling Animation -----------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});
const showhiddenelement = document.querySelectorAll('.hidden');
showhiddenelement.forEach((el) => observer.observe(el));


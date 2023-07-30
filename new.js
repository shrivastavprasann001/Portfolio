var crsr = document.querySelector("#curser")
const navIcon = document.querySelectorAll("nav");
document.addEventListener("mousemove", function (e) {
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"

    // })
    // navIcon.addEventListener('mouseenter', () => {
    //     crsr.style.width = '3.5rem';
    //     crsr.style.height = '3.5rem';
    //     crsr.style.border = '1.5rem';
    // });

    // navIcon.addEventListener('mouseleave', () => {
    //     crsr.style.width = '1.5rem';
    //     crsr.style.height = '1.5rem';
    // });

    // // gsap for about section
    // gsap.to("#about", {
    //     backgroundColor: "#000",
    //     scrollTrigger: {
    //         trigger: "#about",
    //         scrub: 2,
    //         scroller: "body",
    //         // markers: true,
    //         start: "top -40%",
    //         end: "top -80%"

    //     }
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

// MOBILE RESPONSIVE MENU 
var submenu = document.querySelector(".navtag");
function openmenu() {
    submenu.style.right = "0px";
}
function closemenu() {
    submenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzBmHMe6P6JXVn7nUppq0BUvxh7XBo6swIRsM0yvJK3Gc7-7y94L9tJYb1TiyKNVpGx/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

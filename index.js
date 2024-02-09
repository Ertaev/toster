function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        total: t,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function initializeClock(cll, endtime) {
    let clock = document.querySelector(cll);
    let hoursSpan = clock.querySelector(".hours");
    let minutesSpan = clock.querySelector(".minutes");
    let secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
        let t = getTimeRemaining(endtime);
        hoursSpan.innerHTML = ("0" + t.hours + ":").slice(-3);
        minutesSpan.innerHTML = ("0" + t.minutes + ":").slice(-3);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 0);
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock(".timer", deadline);

const accordions = document.querySelectorAll(".drop_list");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        const accordionContent = this.nextElementSibling;
        this.classList.toggle("active");
        accordionContent.classList.toggle("active");

        accordionContent.style.maxHeight = accordionContent.style.maxHeight
            ? null
            : accordionContent.scrollHeight + "px";
    });
});

const footerText = document.querySelector(".footer p");
const btnOffer = document.querySelector(".offer");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const burger = document.querySelector(".burger");
const popupBtn = document.querySelector(".purchase__btn");
const popup = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".close-popup");

btnOffer.addEventListener("click", () => {
    if (footerText.classList.contains("footer-activ")) {
        footerText.classList.remove("footer-activ");
        btnOffer.innerHTML = "Read less";
    } else {
        footerText.classList.add("footer-activ");
        btnOffer.innerHTML = "Read more";
    }
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("menu-open");
    document.documentElement.style.overflowY = "";
});

burger.addEventListener("click", () => {
    menu.classList.add("menu-open");
    document.documentElement.style.overflowY = "hidden";
});

popupBtn.addEventListener("click", () => {
    popup.classList.add("popup-wrapper--active");
    document.documentElement.style.overflowY = "hidden";
});

popupClose.addEventListener("click", () => {
    popup.classList.remove("popup-wrapper--active");
    document.documentElement.style.overflowY = "";
});

window.onclick = function (event) {
    if (event.target.classList.contains("popup-wrapper--active")) {
        event.target.classList.remove("popup-wrapper--active");
        document.documentElement.style.overflowY = "";
    }
};

var swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false,
    },
});

// ===============================
// Loader Hide
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===============================
// Navbar Scroll
// ===============================
// =========================================
// HAMZA ZEESHAN - PREMIUM WEBSITE
// script.js
// =========================================

// ============================
// Navbar Scroll Effect
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ============================
// Active Navigation
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ============================
// Reveal Animation
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

const cards = document.querySelectorAll(

".service-card,.portfolio-card,.testimonial-card,.why-card,.box,.experience-card,.profile-card"

);

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s ease";

    observer.observe(card);

});

// ============================
// Contact Form
// ============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been received.");

        form.reset();

    });

}

// ============================
// Counter Animation
// ============================

const counters = document.querySelectorAll(".stats h2");

const runCounter = (counter) => {

    const text = counter.innerText;

    const target = parseInt(text);

    if (isNaN(target)) return;

    let value = 0;

    const speed = Math.max(1, Math.ceil(target / 100));

    const update = () => {

        value += speed;

        if (value >= target) {

            counter.innerText = text;

        } else {

            if (text.includes("%")) {

                counter.innerText = value + "%";

            } else if (text.includes("+")) {

                counter.innerText = value + "+";

            } else {

                counter.innerText = value;

            }

            requestAnimationFrame(update);

        }

    };

    update();

};

counters.forEach(runCounter);

// ============================
// Button Ripple Effect
// ============================

const buttons = document.querySelectorAll(

".btn-primary,.btn-secondary,.hire-btn"

);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// ============================
// Console
// ============================

console.log("🚀 Hamza Zeeshan Premium Website Loaded Successfully");

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,8,22,.95)";
    } else {
        navbar.style.background = "rgba(255,255,255,.05)";
    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

console.log("Website Loaded Successfully");

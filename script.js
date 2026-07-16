// ======================================
// LOADER
// ======================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);
});

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================
// NAVBAR ON SCROLL
// ======================================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(5,8,22,.95)";
        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background="rgba(255,255,255,.05)";
        navbar.style.boxShadow="none";

    }

});

// ======================================
// ACTIVE NAV LINK
// ======================================

const sections=document.querySelectorAll("section");
const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ======================================
// HERO COUNTER
// ======================================

const counters=document.querySelectorAll(".hero-stats h2");

counters.forEach(counter=>{

    const targetText=counter.innerText;

    const target=parseInt(targetText);

    if(isNaN(target)) return;

    let count=0;

    const speed=Math.max(10,Math.floor(target/80));

    const update=()=>{

        count+=speed;

        if(count>=target){

            counter.innerText=targetText;

        }

        else{

            if(targetText.includes("%")){

                counter.innerText=count+"%";

            }

            else if(targetText.includes("+")){

                counter.innerText=count+"+";

            }

            else{

                counter.innerText=count;

            }

            requestAnimationFrame(update);

        }

    };

    update();

});

// ======================================
// FADE IN ANIMATION
// ======================================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.15});

document.querySelectorAll(".service-card,.portfolio-card,.testimonial-card,.why-card,.about-card").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.7s ease";

    observer.observe(card);

});

console.log("✅ Hamza Zeeshan Website Loaded Successfully");

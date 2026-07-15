// ============================
// AOS Animation
// ============================

AOS.init({
    duration:1000,
    once:true
});

// ============================
// Typing Effect
// ============================

new Typed("#typing",{
    strings:[
        "Professional Data Entry Expert",
        "Creative Logo Designer",
        "PDF Conversion Specialist",
        "Web Research Expert"
    ],
    typeSpeed:70,
    backSpeed:40,
    backDelay:1500,
    loop:true
});

// ============================
// Navbar Background on Scroll
// ============================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="rgba(5,10,25,.95)";
        navbar.style.boxShadow="0 0 20px rgba(0,229,255,.2)";

    }else{

        navbar.style.background="rgba(255,255,255,.05)";
        navbar.style.boxShadow="none";

    }

});

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

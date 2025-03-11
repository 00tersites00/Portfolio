document.addEventListener('DOMContentLoaded', () => {
    aPortfolio = document.getElementById("nav-a-portfolio");
    aSkills = document.getElementById("nav-a-skills");
    aAboutMe = document.getElementById("nav-a-aboutMe");
    aExperiences = document.getElementById("nav-a-experiences");

    aPortfolio.addEventListener("click", (e)=>{
        e.preventDefault();
        const target = document.getElementById('section-portfolio');
        target.scrollIntoView({ behavior: 'smooth' }); 
    })

    aSkills.addEventListener("click", (e)=>{
        e.preventDefault();
        const target = document.getElementById('section-skills');
        target.scrollIntoView({ behavior: 'smooth' }); 
    })

    aAboutMe.addEventListener("click", (e)=>{
        e.preventDefault();
        const target = document.getElementById("section-aboutMe");
        target.scrollIntoView({ behavior: 'smooth' }); 
    })

    aExperiences.addEventListener("click", (e)=>{
        e.preventDefault();
        const target = document.getElementById('section-experiences');
        target.scrollIntoView({ behavior: 'smooth' }); 
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-presentacion");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".section-portfolio");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("section-hidden");
        observer.observe(section);
    });
});

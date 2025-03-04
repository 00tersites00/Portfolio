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

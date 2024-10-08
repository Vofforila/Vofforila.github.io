// Navbar

window.addEventListener("load", function () {
   gsap.from(".navbar-container", {
      duration: 1.2,
      opacity: 0,
      y: -50,
      ease: "power3.out",
   });

   var top_left_navbar = document.getElementsByClassName("top-left-navbar")[0];

   gsap.fromTo(
      top_left_navbar,
      {
         opacity: 0,
         scale: 0.8,
      },
      {
         duration: 1.5,
         opacity: 1,
         scale: 1,
         color: "#ff6347",
         ease: "power2.out",
         delay: 0.3,
      }
   );

   const navButtons = document.querySelectorAll(".navbar-container a");

   navButtons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
         gsap.to(button, {
            duration: 0.3,
            scale: 1.1,
            ease: "power1.out",
         });
      });

      button.addEventListener("mouseleave", () => {
         gsap.to(button, {
            duration: 0.3,
            scale: 1,
            ease: "power1.out",
         });
      });
   });

   top_left_navbar.addEventListener("mouseenter", () => {
      gsap.to(top_left_navbar, {
         duration: 0.3,
         color: "#1e90ff",
         scale: 1.1,
         ease: "power2.out",
      });
   });

   top_left_navbar.addEventListener("mouseleave", () => {
      gsap.to(top_left_navbar, {
         duration: 0.3,
         color: "#ff6347",
         scale: 1,
         ease: "power2.out",
      });
   });
});

// Section 1

document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   const aboutSection = document.querySelector("about-me-image-changer");
   const aboutImage = document.querySelector(".about-me-image");
   const aboutTitle = document.querySelector(".about-me-title");
   const aboutDescription = document.querySelector(".about-me-description");
   const aboutButton = document.getElementById("about-me-button");

   const timeline = gsap.timeline({
      scrollTrigger: {
         trigger: aboutSection,
         start: "top 80%",
         end: "bottom 20%",
         toggleActions: "play none none none",
      },
   });

   timeline
      .from(aboutImage, { duration: 1, y: -50, opacity: 0, ease: "power2.out" })
      .from(aboutTitle, {
         duration: 1,
         delay: 0.2,
         y: -30,
         opacity: 0,
         ease: "power2.out",
      })
      .from(aboutDescription, {
         duration: 1,
         delay: 0.4,
         x: -100,
         opacity: 0,
         ease: "power2.out",
      })
      .from(aboutButton, {
         duration: 1,
         delay: 0.6,
         scale: 0,
         opacity: 0,
         ease: "back.out(1.7)",
      });
});

// Section 2

// GSAP Animation for Skills Experience Section
document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   const skill_experience = document.querySelector(".skill-experience");
   const skill_separator = document.querySelector(".skill-separator");
   const skill_experience_container = document.querySelector(
      ".skill-experience-container"
   );
   const right_skill_container = document.querySelector(
      ".right-skill-container .heading"
   );
   const left_skill_container = document.querySelector(
      ".left-skill-container .heading"
   );
   const soft_skill_container = document.querySelectorAll(
      ".soft-skill-container .button"
   );
   const hard_skill_container = document.querySelectorAll(
      ".hard-skill-container .button"
   );
   const skill_separator_line = document.querySelector(".skill-separator-line");

   const timeline = gsap.timeline({
      scrollTrigger: {
         trigger: skill_separator,
         start: "top 80%",
         end: "bottom 20%",
         toggleActions: "play none none reverse",
         once: true,
      },
   });
   timeline.from(skill_experience, {
      duration: 0.5,
      y: -100,
      opacity: 0,
      ease: "power2.out",
   });

   timeline.from(skill_experience_container, {
      duration: 0.5,
      x: -100,
      opacity: 0,
      ease: "power2.out",
   });

   timeline.from(
      right_skill_container,
      {
         duration: 0.5,
         y: -50,
         opacity: 0,
         ease: "power2.out",
      },
      "-=0.4"
   );

   timeline.from(
      soft_skill_container,
      {
         duration: 0.5,
         scale: 0,
         opacity: 0,
         stagger: 0.1,
         ease: "back.out(1.7)",
      },
      "-=0.3"
   );

   timeline.from(
      skill_separator_line,
      {
         duration: 0.5,
         width: 0,
         ease: "power2.out",
      },
      "-=0.2"
   );

   timeline.from(left_skill_container, {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: "power2.out",
   });

   timeline.from(
      hard_skill_container,
      {
         duration: 0.5,
         scale: 0,
         opacity: 0,
         stagger: 0.1,
         ease: "back.out(1.7)",
      },
      "-=0.3"
   );
});

// Section 3

document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   const projectContainer = document.querySelector(".project-container");
   const projectHeading = projectContainer.querySelector(".heading");
   const projects = projectContainer.querySelectorAll(".project");

   gsap.from(projectHeading, {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
         trigger: projectContainer,
         start: "top 80%",
         end: "top 60%",
         toggleActions: "play none none reverse",
         markers: false,
         scrub: true,
      },
   });

   projects.forEach((project) => {
      gsap.from(project, {
         duration: 0.5,
         y: 50,
         opacity: 0,
         ease: "power2.out",
         scrollTrigger: {
            trigger: project,
            start: "top 90%",
            end: "top 90%",
            toggleActions: "play none none reverse",
            markers: false,
         },
      });
   });
});

// Section 4

document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   const achievementsContainer = document.querySelector(
      ".achivements-container"
   );
   const workExperienceTitle = achievementsContainer.querySelector(
      ".left-achivement-container .title"
   );
   const educationTitle = achievementsContainer.querySelector(
      ".right-achivement-container .title"
   );

   gsap.from(workExperienceTitle, {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
         trigger: achievementsContainer,
         start: "top 80%",
         end: "top 60%",
         toggleActions: "play none none reverse",
         markers: false,
      },
   });

   gsap.from(educationTitle, {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
         trigger: achievementsContainer,
         start: "top 80%",
         end: "top 60%",
         toggleActions: "play none none reverse",
         markers: false,
      },
   });

   const jobEntries = achievementsContainer.querySelectorAll(".job");
   jobEntries.forEach((job) => {
      gsap.from(job, {
         duration: 0.5,
         y: 50,
         opacity: 0,
         ease: "power2.out",
         scrollTrigger: {
            trigger: job,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
         },
      });
   });

   const educationEntries = achievementsContainer.querySelectorAll(".school");
   educationEntries.forEach((school) => {
      gsap.from(school, {
         duration: 0.5,
         y: 50,
         opacity: 0,
         ease: "power2.out",
         scrollTrigger: {
            trigger: school,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
         },
      });
   });
});

// Section 5

document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   const contactContainer = document.querySelector(".contact-container");
   const contactTitle = contactContainer.querySelector(".title");

   gsap.from(contactTitle, {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
         trigger: contactContainer,
         start: "top 100%",
         end: "top 100%",
         toggleActions: "play none none reverse",
         markers: false,
      },
   });

   const contactGroups = contactContainer.querySelectorAll(".contact-grouper");
   contactGroups.forEach((group) => {
      gsap.from(group, {
         duration: 0.5,
         y: 50,
         opacity: 0,
         ease: "power2.out",
         scrollTrigger: {
            trigger: group,
            start: "top 100%",
            end: "top 100%",
            toggleActions: "play none none reverse",
            markers: false,
         },
      });
   });

   const linkedInLink = contactContainer.querySelector("a[href*='linkedin']");
   gsap.from(linkedInLink, {
      duration: 0.5,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
         trigger: linkedInLink,
         start: "top 100%",
         end: "top 100%",
         toggleActions: "play none none reverse",
         markers: false,
      },
   });
});

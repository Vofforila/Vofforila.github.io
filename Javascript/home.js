function Popup(id) {
   const popup = document.getElementById("popup-work");
   const popup_title = document.getElementById("popup-work-title");
   const popup_work_description = document.getElementById(
      "popup-work-description"
   );
   popup_title.innerHTML = id;

   switch (id) {
      case "IT-Teams":
         popup_work_description.innerHTML =
            "Worked at IT Teams as a Flutter Software Development. Developed functionality and database relationships for various clients. Learned how to structure a website using containers and manipulate data with Firebase NoSQL.";
         break;
      case "PRIME-Telecom":
         popup_work_description.innerHTML =
            "Worked at PRIME Telecom as a Support Operator. Managed customer inquiries via phone and email, created and updated tickets based on progress, and monitored server and device statuses using Bash commands.";
         break;
      case "Lima-Credit":
         popup_work_description.innerHTML =
            "Worked at LIMA CREDIT IFN SRL as a System Administrator. Designed and configured the computer network while managing hardware and software installations for pawnshop operations. I learned to oversee software licenses, administer the network, and maintain employee computers effectively.";
         break;
   }

   if (popup) {
      gsap.to(popup, {
         duration: 0.5,
         scale: 1,
         opacity: 1,
         ease: "power2.out",
         onStart: () => {
            popup.classList.add("active");
         },
      });
   }
}

function closePopup() {
   const popup = document.getElementById("popup-work");

   if (popup) {
      gsap.to(popup, {
         duration: 0.5,
         scale: 0,
         opacity: 0,
         ease: "power2.in",
         onComplete: () => {
            popup.classList.remove("active"); // Hide after animation is complete
         },
      });
   }
}

var side_panel = document.getElementById("side-panel");
function openPanel() {
   side_panel.classList.add("open");
}

function closePanel() {
   side_panel.classList.remove("open");
}

window.addEventListener("scroll", function () {
   var main_container = document.getElementById("main");
   main_container.classList.toggle("sticky", window.scrollY > 0);
});

var popup = document.getElementById("popup");
var span = document.getElementsByClassName("close")[0];
const popup_text = document.getElementsByClassName("popup-text")[0];

function Popup(_button_id) {
   switch (_button_id) {
      case "IT-Teams":
         popup_text.innerHTML =
            "Worked at IT Teams as a Flutter Software Development. Developed functionality and database relationships for various clients. Learned how to structure a website using containers and manipulate data with Firebase NoSQL.";
         break;
      case "PRIME-Telecom":
         popup_text.innerHTML =
            "Worked at PRIME Telecom as a Support Operator. Managed customer inquiries via phone and email, created and updated tickets based on progress, and monitored server and device statuses using Bash commands.";
         break;
      case "Lima-Credit":
         popup_text.innerHTML =
            "Worked at LIMA CREDIT IFN SRL as a System Administrator. Designed and configured the computer network while managing hardware and software installations for pawnshop operations. I learned to oversee software licenses, administer the network, and maintain employee computers effectively.";
         break;
   }

   popup.style.display = "block";
}

span.onclick = function () {
   popup.style.display = "none";
};

window.onclick = function (event) {
   if (event.target == popup) {
      popup.style.display = "none";
   }
};

var side_panel = document.getElementById("side-panel");
function openPanel() {
   side_panel.classList.add("open");
}

function closePanel() {
   side_panel.classList.remove("open");
}

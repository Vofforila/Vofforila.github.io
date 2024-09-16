var popup = document.getElementById("popup");
var span = document.getElementsByClassName("close")[0];
const popup_text = document.getElementsByClassName("popup-text")[0];

function Popup(_button_id) {
   switch (_button_id) {
      case "IT-Teams":
         popup_text.innerHTML =
            "Worked in IT Teams Flutter Software Development. Had to develop functionality and database relations for different customers. I learned how to use and structure a website using containers and how to manipulate data using Firebase NoSQL.";
         break;
      case "PRIME-Telecom":
         popup_text.innerHTML =
            "Worked in PRIME Telecom as a support operator. Had to answer phone calls and read email and create tickets and update based on the progress. Also had to check server and devices status via bash commands.";
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

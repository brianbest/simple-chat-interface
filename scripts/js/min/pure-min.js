function parseErrors(e){var t=e;return""===t?!1:!0}function parseEmoji(e){var t=e}function sendMessage(e){if(13===e.keyCode){var t=document.getElementById("chat_area").value;if(parseErrors(t)){t=parseEmoji(t);var n=document.createElement("P"),a=document.createTextNode(t);n.appendChild(a);var r=document.getElementById("msg_area").firstChild;document.getElementById("msg_area").insertBefore(n,r),document.getElementById("chat_area").value=""}}}function chatClicked(){console.log("clicked"),document.addEventListener("keyup",function(){sendMessage(event)},!1)}var emoji={":D":"1F604",";)":"1F609",":P":"1F61C","-_-":"1F620",":(":"1F622"};document.getElementById("chat_area").addEventListener("click",function(){chatClicked()},!1);
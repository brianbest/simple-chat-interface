function sendMessage(e){if(13===e.keyCode){var t=document.getElementById("chat_area").value,n=document.createElement("P"),d=document.createTextNode(t);n.appendChild(d),document.getElementById("msg_area").appendChild(n),document.getElementById("chat_area").value=""}}function chatClicked(){console.log("clicked"),document.addEventListener("keyup",function(){sendMessage(event)},!1)}document.getElementById("chat_area").addEventListener("click",function(){chatClicked()},!1);
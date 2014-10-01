//Pure Javascript version


  function sendMessage(event){
    if (event.keyCode === 13){
      var msg = document.getElementById('chat_area').value;
      console.log(msg+'That msg');
      var msg_holder = document.createElement('P');
      var msg_textNode = document.createTextNode(msg);
      msg_holder.appendChild(msg_textNode);
      document.getElementById('msg_area').appendChild(msg_holder);
      document.getElementById('chat_area').value = "";
    }
  }

  function chatClicked(){
      console.log('clicked');
      document.addEventListener("keydown", function(){sendMessage(event);}, false);
  }




  document.getElementById('chat_area').addEventListener("click", function(){chatClicked();}, false);

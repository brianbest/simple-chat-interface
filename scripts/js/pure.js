//Pure Javascript version

  //Take whats in #chat_area, placein element and append to #msg_area
  //-------------------------------
  function sendMessage(event){
    if (event.keyCode === 13){
      var msg = document.getElementById('chat_area').value;
      var msg_holder = document.createElement('P');
      var msg_textNode = document.createTextNode(msg);
      msg_holder.appendChild(msg_textNode);
      document.getElementById('msg_area').appendChild(msg_holder);

      //Clear chat field when complete
      document.getElementById('chat_area').value = "first";
    }
  }

  //Only once the chat area is activated do we listen for a key up event
  //-------------------------------
  function chatClicked(){
      console.log('clicked');
      document.addEventListener("keyup", function(){sendMessage(event);}, false);
  }



  //Listen for chat area to be activated
  //-------------------------------
  document.getElementById('chat_area').addEventListener("click", function(){chatClicked();}, false);

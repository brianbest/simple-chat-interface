//Pure Javascript version

var emoji ={
  ":D":'1F604',
  ";)":'1F609',
  ":P":'1F61C',
  "-_-":'1F620',
  ":(":'1F622'
};

  //Check for Illegal Messages
  //-------------------------------
  function parseErrors(stuff){
    var message = stuff;
    if (message === ""){
      return false;
    }else{
      return true;
    }
  }


  function parseEmoji(message){
    var check = message;

  }


  //Take whats in #chat_area, placein element and append to #msg_area
  //-------------------------------
  function sendMessage(event){

    //Check if Enter was clicked
    //==========================
    if (event.keyCode === 13){

      var msg = document.getElementById('chat_area').value;

      //Check to see if message is not illegal
      //==========================
      if (parseErrors(msg)){

        //Is there emoji?
        msg = parseEmoji(msg);

        var msg_holder = document.createElement('P');
        var msg_textNode = document.createTextNode(msg);
        msg_holder.appendChild(msg_textNode);

        //Prepend created object to top of the stack
        //==========================
        var pastChild = document.getElementById('msg_area').firstChild;
        document.getElementById('msg_area').insertBefore(msg_holder,pastChild);

        //Clear chat field when complete
        //==========================
        document.getElementById('chat_area').value = "";
      }


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

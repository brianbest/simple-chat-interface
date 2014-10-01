#Simple chat interface

##Description

In this project, you’ll create a client-side, chat [user interface](http://en.wikipedia.org/wiki/User_interface) (UI) that enables a user to add new messages to a list. To add a new message, the user can type messages in a form and either hit the enter key, or press a “send” button.

This project will give you experience with web structure (HTML), style (CSS), coding (JavaScript), [DOM](http://en.wikipedia.org/wiki/Document_Object_Model) Manipulation, [Version Control](http://en.wikipedia.org/wiki/Revision_control), and Form Validation. Below you’ll find resources to help you research and practice these concepts.

In order to teach you the fundamentals, do not use external libraries or third-party code for this project. No jquery, jqueryui, bootstrap, etc. Write everything from scratch!


##Development

In order to meet the requirements of the assignment the first draft of this project will be written in pure JS. As a stretch goal for this project I want to learn how to use [CoffeeScript](http://coffeescript.org/) to accomplish the same result.

So as it turns out I've been doing JS Event listeners wrong this whole time.

This line of code only returns the value of chatActive();
      document.getElementById('chat_area').addEventListener("click", chatActive(),false);
This line of code will actually run the function
      document.getElementById('chat_area').addEventListener("click", function(){chatClicked();}, false);

####Its working!!!

So I have the logic of adding user generated text to the screen working. Now I need to fix some funky things ie: when you hit enter the line return doesn't go away. but yeah this is working now.

I have shown this off to a few people now... random feedback from [Heather](http://hypertasker.com/) apparently my GitHub profile photo looks nothing like me, so thats changing.

My mind is moving towards UI/UX now, how do I make this look awesome? Some of the obvious answers would be MSN Messanger, Facebook, even Twitter. I just want to keep this simple though. So I'm going to take my insperation from [OmniWriter](http://www.ommwriter.com/) and draw on the aforementioned for functionality.

Here is what I wireframed out
[Imgur](http://i.imgur.com/ZtL63Ad.jpg)

The background should be simple and the actual interface is minimal. The fist things you should see is the title and the chat line.

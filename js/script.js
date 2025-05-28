import {dlList} from './linkedlist.js';
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texts");
var terminal = document.getElementById("terminal");


let list = new dlList();
let git = 0;
setTimeout(function() {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e){
    if(e.key == "0"){
        document.location.reload(true);
    } //savepoint
    if(e.key == "Enter"){
      const input = command.innerHTML.trim();
      const curr = list.getCurrent();

    // If user navigated history and did NOT modify the command, reuse it
      if (curr && curr.data === input) {
          list.toFront(curr);
      } else {
          list.insertFirst(input); // or insertLast if you prefer newer at the end
      }


      git = list.findSize(list.getFirst());
      list.resetTraversal();

      addLine("guest@lcterminal.com:~$" + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }else if(e.key == "ArrowUp" && git != 0){
        textarea.value = list.forward();
        command.innerHTML = textarea.value;
    }else if(e.key == "ArrowDown" && git != list.findSize(list.getFirst())+1){
        
        if(textarea.value === undefined){
            textarea.value = "";
        }else{
            textarea.value = list.backward();
        }
        command.innerHTML = textarea.value;
    }

}

function commander(cmd){
    switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!ðŸ˜‚</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      const hist = list.getHistory();      // ← use the new method
      if (hist.length === 0) {
        addLine("(no history)", "error", 0);
      } else {
        loopLines(hist, "color2", 80);
      }
      addLine("<br>", "command", hist.length * 80 + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:luis.chavez1996@gmail.com">luis.chavez1996@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}


function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time){
    var t = "";
    for(let i = 0; i < text.length;i++){
        if(text.charAt(i) == " " && text.charAt(i+1) == " "){
            t += "&nbsp;&nbsp;";
            i++;
        }
        else{
            t += text.charAt(i);
        }
    }
    setTimeout(function(){
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);
        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name,style,time){
    name.forEach(function(item, index){
        addLine(item, style, index * time);
    });
}
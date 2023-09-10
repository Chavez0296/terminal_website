var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texts");
var terminal = document.getElementById("terminal");

var git = 0;
var commands = [];



setTimeout(function() {
    
});

window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;
function enterKey(e){
    if(e.keyCode == 181){
        document.location.reload(true);
    } //savepoint
    

}
function commander(cmd){
    switch(cmd.toLowerCase()){
        case "help":
            loopLines(help,"color2 margin", 80);
            break;
    }
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
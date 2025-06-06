function $(elid) {
    return document.getElementById(elid);
  }
  
var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function nl2br(txt) {
  return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
  e = e || window.KeyboardEvent;
  var w = $("typer");
  var tw = from.value;
  
  w.innerHTML = nl2br(tw);
    
}


function moveIt(count, e) {
  e = e || window.KeyboardEvent;
  var keycode = e.key;
  if (keycode == "ArrowLeft" && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == "ArrowRight" && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function alert(txt) {
  console.log(txt);
}
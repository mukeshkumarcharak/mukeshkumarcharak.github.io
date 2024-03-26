document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    alert("Right click is blocked by the owner...");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("Right click is blocked by the owner...");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("Right click is blocked by the owner...");
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    alert("Right click is blocked by the owner...");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    alert("Right click is blocked by the owner...");
    window.event.returnValue = false;
  });
}

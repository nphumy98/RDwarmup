function show_panel() {
  document.getElementById("left_panel").style.left = 0;
  document.getElementById("right_panel").style.marginLeft = "400px";
}

function hide_panel() {
  document.getElementById("left_panel").style.left = -400;
  document.getElementById("right_panel").style.marginLeft = "0px";
}

var index = 0;

function changeColors() {
  var color = [
    "red",
    "orange",
    "yellow",
    "blue",
    "green",
    "pink",
    "violet",
    "skyblue",
    "magenta",
    "grey",
  ];

  document.getElementsByTagName("body")[0].style.background = color[index++];
  if (color[index] === "grey") index = 0;
}

const button = document.getElementById("button");
const img = document.getElementById("img");
const p = document.getElementById("p");
const body = document.getElementById("body");
const container = document.getElementsByClassName("container")[0];
showPicture = () =>
{
  p.style.display = "none";
  button.style.display = "none";
  img.style.display = "block";
  body.style.backgroundColor = "black";
  container.style.boxShadow ="10px 10px 10px rgba(255, 255, 255, 0.15)";
}
button.onclick = showPicture;
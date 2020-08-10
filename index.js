const scrl = document.querySelector("#showcase");

window.addEventListener("scroll", () => {
  scrl.style.transform=translateY(20px);
  console.log(scrl);
});

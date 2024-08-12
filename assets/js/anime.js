window.onload = function () {
  function show() {
    let all = document.querySelectorAll("aside button span");
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "flex";
    }


    document.getElementById("menu").removeEventListener("click", show);
    document.getElementById("menu").addEventListener("click", hide);
  }

  function hide() {
    let all = document.querySelectorAll("aside button span");
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "none";
    }
    document.getElementById("menu").removeEventListener("click", hide);
    document.getElementById("menu").addEventListener("click", show);
  }

  function reason() {
    document.getElementById("reasons").style.translate = "0px 0px"
  }

  function retract() {
    document.getElementById("reasons").style.translate = "0px -1000px"
  }

  document.getElementById("menu").addEventListener("click", show);
  document.getElementById("test").addEventListener("click", reason);
  document.getElementById("cancel").addEventListener("click", retract);
};

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
    document.get
  }
  document.getElementById("menu").addEventListener("click", show);
  document.getElementById("test").addEventListener("click", reason);
};

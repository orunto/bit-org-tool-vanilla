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

  function notify () {
    document.getElementById("notifs").style.display = "flex"
    document.getElementById("bell").removeEventListener("click", notify);
    document.getElementById("bell").addEventListener("click", closenotify);
  }

  function closenotify () {
    document.getElementById("notifs").style.display = "none"
    document.getElementById("bell").removeEventListener("click", closenotify);
    document.getElementById("bell").addEventListener("click", notify);
  }

  function logout () {
    document.getElementById("logout").style.display = "flex"
    document.getElementById("dropdown").removeEventListener("click", logout);
    document.getElementById("dropdown").addEventListener("click", closelogout);
  }

  function closelogout () {
    document.getElementById("logout").style.display = "none"
    document.getElementById("dropdown").removeEventListener("click", closelogout);
    document.getElementById("dropdown").addEventListener("click", logout);
  }

  document.getElementById("menu").addEventListener("click", show);
  document.getElementById("bell").addEventListener("click", notify);
  document.getElementById("dropdown").addEventListener("click", logout);
};

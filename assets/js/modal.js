window.onload = function () {
  
    function reason() {
      document.getElementById("reasons").style.translate = "0px 0px"
    }
  
    function retract() {
      document.getElementById("reasons").style.translate = "0px -1000px"
    }

    document.getElementById("test").addEventListener("click", reason);
    document.getElementById("cancel").addEventListener("click", retract);
  };
  
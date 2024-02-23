function increaseButtonSize() {
    var yesBtn = document.getElementById("yesBtn");
    var currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.1) + "px";
  }
  
  function showApology() {
    var apologyEmoji = document.getElementById("apologyEmoji");
    apologyEmoji.innerHTML = "<center>😔 Sorry 😔  <br> 😘Thank You😘</center>";
    apologyEmoji.style.display = "block";
    apologyEmoji.classList.add("animated");
    apologyEmoji.classList.add("pulse");
  
    var yesBtn = document.getElementById("yesBtn");
    var noBtn = document.getElementById("noBtn");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  }
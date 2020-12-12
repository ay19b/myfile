let acd=document.querySelector('.accordion button span');
let btn=document.querySelector('.accordion button');
i;


for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
      var d = this.nextElementSibling;
      if (d.style.display === "block") {
        d.style.display = "none";
      } else {
        d.style.display = "block";
      }
    });
  }


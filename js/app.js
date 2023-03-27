let bar = document.querySelector(".bar-icon");
let navbar__links = document.querySelector(".nav-bar__links");

bar.onclick = function () {
    navbar__links.classList.toggle("show");
    let url = window.location.origin;
    console.log(url);
    console.log(this.src);
    if(this.src === `${url}/images/icon/bar.svg`){
        console.log("True");
        this.src = `${url}/images/icon/cross.svg`;
    }
    else{
        this.src = `${url}/images/icon/bar.svg`;
    }
  }
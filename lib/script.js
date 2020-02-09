let modal = document.querySelectorAll(".modal");

class CharacterInfo {
  constructor() {

  }
  createDiv() {
    for (let i = 0; i < modal.length; i++) {
      let imgContent = document.createElement("div");
      imgContent.classList.add("image-content");
      modal[i].appendChild(imgContent);
  
    }
  }
  createSpan() {
    for(let i = 0; i < modal.length; i++) {
      let closeBtn = document.createElement("span");
      closeBtn.classList.add("closeBtn");
      closeBtn.innerText = "&times;"
      modal[i].appendChild(closeBtn);
    }
  }
}
let characterInfo = new CharacterInfo();
characterInfo.createDiv();
characterInfo.createSpan();


let imgContent = document.querySelectorAll(".image-content");

class CharacterInfo2 {
  constructor() {

  }
  createImage() {
    for(let i = 0; i < imgContent.length; i++) {
      let heroImage = document.createElement("img");
      heroImage.classList.add("hero-image");
      imgContent[i].appendChild(heroImage);
    }
  }
  createP() {
    for(let i = 0; i < imgContent.length; i++) {
      let pTag = document.createElement("p");
      pTag.classList.add("main-bio");
      imgContent[i].appendChild(pTag);
    }
  }
}
let characterInfo2 = new CharacterInfo2();
characterInfo2.createImage();
characterInfo2.createP();


let hero1 = document.querySelectorAll(".pop-up");
let image = document.querySelector(".hero-image");
// let url = "https://api.thecatapi.com/v1/images/search"
let url = "https://superheroapi.com/api.php/1115800912092769/251"




for(let i = 0; i < hero1.length; i++) {
  hero1[i].addEventListener("click", toggleData);
function toggleData(e) {
  e.preventDefault();

  let text = document.querySelector(".modal");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }


//   for(let i = 0; i < image.length; i++) {

//   }

  // fetch(url)
  fetch(url)
    .then(res => {
    // .then(res => {
      console.log("success", res)
      return res.json()
    
    })
    .then(res => {
      console.log("Picture results:")
      console.log(res)
      // image.setAttribute("src", res.url )
      // return image
    })
    .catch(err => {
      console.log("something went wrong", err)
    })
};
}

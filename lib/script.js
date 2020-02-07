let modal = document.querySelectorAll(".modal");
let imgContent = document.querySelectorAll(".image-content");

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


let hero1 = document.querySelector(".ironMan");
let url = "https://superheroapi.com/api/1115800912092769/346"

hero1.addEventListener("click", toggleData);
function toggleData() {
  e.preventDefault();

  let text = document.querySlector(".modal");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }


 
  fetch(url)
    .then(res => {
      console.log("success", res)
      return res.json()
    })
    .then(res => {
      randomCatImage.setAttribute("src", res[0].url )
    })
    .catch(err => {
      console.log("something went wrong", err)
    })
};
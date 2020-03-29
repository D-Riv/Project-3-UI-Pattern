let modal = document.querySelectorAll(".modal");

class CharacterInfo {
  constructor() {}
  createDiv() {
    for (let i = 0; i < modal.length; i++) {
      let imgContent = document.createElement("div");
      imgContent.classList.add("image-content");
      modal[i].appendChild(imgContent);
    }
  }
  createSpan() {
    for (let i = 0; i < modal.length; i++) {
      let closeBtn = document.createElement("span");
      closeBtn.classList.add("closeBtn");
      // closeBtn.innerText = "&times;"
      modal[i].appendChild(closeBtn);
    }
  }
}
let characterInfo = new CharacterInfo();
characterInfo.createDiv();
characterInfo.createSpan();

let imgContent = document.querySelectorAll(".image-content");

class CharacterInfo2 {
  constructor() {}
  createImage() {
    for (let i = 0; i < imgContent.length; i++) {
      let heroImage = document.createElement("img");
      heroImage.classList.add("hero-image");
      imgContent[i].appendChild(heroImage);
    }
  }
  createH() {
    for (let i = 0; i < imgContent.length; i++) {
      let hTag = document.createElement("h1");
      hTag.classList.add("main-title");
      imgContent[i].appendChild(hTag);
    }
  }
  
  createp() {
    for (let i = 0; i < imgContent.length; i++) {
      let pTag = document.createElement("p");
      pTag.classList.add("main-bio");
      imgContent[i].appendChild(pTag);
    }
  }
  createp2() {
    for (let i = 0; i < imgContent.length; i++) {
      let pTag = document.createElement("p");
      pTag.classList.add("main-name");
      imgContent[i].appendChild(pTag);
    }
  }
  createp3() {
    for (let i = 0; i < imgContent.length; i++) {
      let pTag3 = document.createElement("p");
      pTag3.classList.add("main-birthplace");
      imgContent[i].appendChild(pTag3);
    }
  }
}
let characterInfo2 = new CharacterInfo2();
characterInfo2.createImage();
characterInfo2.createH();
characterInfo2.createp();
characterInfo2.createp2();
characterInfo2.createp3();



let heroes = document.querySelectorAll(".pop-up");
let image = document.querySelector(".hero-image");
let heading = document.querySelector(".main-title");
let para = document.querySelector(".main-bio");
let para2 = document.querySelector(".main-name");
let para3 = document.querySelector(".main-birthplace");



let url = [
  "https://superheroapi.com/api.php/1115800912092769/346",
  "https://superheroapi.com/api.php/1115800912092769/149",
  "https://superheroapi.com/api.php/1115800912092769/332",
  "https://superheroapi.com/api.php/1115800912092769/659",
  "https://superheroapi.com/api.php/1115800912092769/106",
  "https://superheroapi.com/api.php/1115800912092769/107",
  "https://superheroapi.com/api.php/1115800912092769/620",
  "https://superheroapi.com/api.php/1115800912092769/313",
  "https://superheroapi.com/api.php/1115800912092769/30",
  "https://superheroapi.com/api.php/1115800912092769/69",
  "https://superheroapi.com/api.php/1115800912092769/644",
  "https://superheroapi.com/api.php/1115800912092769/720",
  "https://superheroapi.com/api.php/1115800912092769/38",
  "https://superheroapi.com/api.php/1115800912092769/263",
  "https://superheroapi.com/api.php/1115800912092769/194",
  "https://superheroapi.com/api.php/1115800912092769/298",
  "https://superheroapi.com/api.php/1115800912092769/156",
  "https://superheroapi.com/api.php/1115800912092769/432"
];

let text = document.querySelector(".modal");

for (let i = 0; i < heroes.length; i++) {
  heroes[i].addEventListener("click", toggleData);

  function toggleData(e) {
    e.preventDefault();

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }

    switch (heroes[i]) {
      case heroes[0]:
        fetch(url[0])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            console.log(res);
            image.setAttribute("src", res.image.url);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[1]:
        fetch(url[1])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;
          })
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[2]:
        fetch(url[2])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[3]:
        fetch(url[3])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[4]:
        fetch(url[4])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[5]:
        fetch(url[5])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[6]:
        fetch(url[6])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[7]:
        fetch(url[7])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[8]:
        fetch(url[8])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[9]:
        fetch(url[9])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[10]:
        fetch(url[10])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[11]:
        fetch(url[11])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[12]:
        fetch(url[12])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[13]:
        fetch(url[13])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[14]:
        fetch(url[14])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[15]:
        fetch(url[15])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[16]:
        fetch(url[16])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[17]:
        fetch(url[17])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
      case heroes[18]:
        fetch(url[18])
          .then(res => {
            console.log("success", res);
            return res.json();
          })
          .then(res => {
            image.setAttribute("src", res.image.url);
            // console.log("Picture results:")
            console.log(res);
            heading.innerHTML = res.name;
            para2.innerHTML = `Aliases: ${res.biography.aliases}`;
            para3.innerHTML = `Publisher: ${res.biography.publisher}`;
            para.innerHTML = `Work Occupation: ${res.work.occupation}`;

          })
          
          .catch(err => {
            console.log("something went wrong", err);
          });
        break;
    }
  }
}

let closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", toggleClose);

function toggleClose() {
  text.style.display = "none";
}
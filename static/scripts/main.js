function myFunction() {
  console.log("Hello World");
}

function changeImg() {
  const myImage = document.querySelector("img");
  myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "static/images/orang.png") {
      myImage.setAttribute("src", "static/images/orang2.png");
    } else {
      myImage.setAttribute("src", "static/images/orang.png");
    }
  });
}
function changeImgHelper() {
  const myImage = document.querySelector("img");
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "static/images/orang.png") {
    myImage.setAttribute("src", "static/images/orang2.png");
  } else {
    myImage.setAttribute("src", "static/images/orang.png");
  }
}

function nextImg() {
  let mb = document.querySelector(".next");
  mb.addEventListener("click", () => {
    changeImgHelper();
  });
}

function buttonFun() {
  let myButton = document.querySelector(".btn-user");
  let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is very cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });
}

changeImg();
buttonFun();
nextImg();

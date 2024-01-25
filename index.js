const timeLeftDisplay = document.querySelector("#time-left");
const result = document.querySelector("#result");
const startPauseBtn = document.querySelector("#start-pause");
const squares = document.querySelectorAll(".grid div");

let currentIndex = 76;
const width = 9;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;
    default:
      break;
  }

  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);

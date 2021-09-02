// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    //don't entirely understand next 2 lines of code
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    // without hardcoding 361 how do I access that value? left.length doesn't work
    if (left > 0 && left < 361) {
      dodger.style.left = `${left + 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

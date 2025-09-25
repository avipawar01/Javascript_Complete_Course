
let timerId; 

document.getElementById("start").addEventListener("click", function () {
  if (!timerId) { 
    timerId = setInterval(() => {
      let now = new Date();
      document.getElementById("time").textContent = now.toLocaleTimeString();
    }, 1000);
  }
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null; 
});

const navBtns = document.querySelectorAll(".nav-btn");
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("short");
const longBreak = document.getElementById("long");
const timer = document.querySelector(".time");
const timeStarter = document.querySelector(".pause-btn");
const reset = document.querySelector(".settings");

let isRunning = false;
let timeLeft = 1500;

navBtns.forEach(btn =>{
  btn.addEventListener("click", () =>{
    navBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

pomodoro.addEventListener("click", ()=>{
  timer.textContent = "25:00";
  timeLeft = 1500;
  isRunning = false;
  clearInterval(interval);
  timeStarter.textContent = "S T A R T";
})

shortBreak.addEventListener("click", ()=>{
  timer.textContent = "05:00";
  timeLeft = 300;
  isRunning = false;
  clearInterval(interval);
  timeStarter.textContent = "S T A R T";
})

longBreak.addEventListener("click", ()=>{
  timer.textContent = "15:00";
  timeLeft = 900;
  isRunning = false;
  clearInterval(interval);
  timeStarter.textContent = "S T A R T";
})

function updateTimerDisplay(){
  const minutes = Math.floor(timeLeft/60);
  const seconds = timeLeft % 60;
  timer.textContent = `${minutes}:${seconds < 10 ? "0": ""}${seconds}`;
}

let interval;
timeStarter.addEventListener("click", ()=>{
  if(!isRunning){
    timeLeft--;
    updateTimerDisplay();
    timeStarter.textContent = "P A U S E";

    interval = setInterval(() =>{
      timeLeft--;
      updateTimerDisplay();
      
      if(timeLeft <= 0){
        clearInterval(interval);
        isRunning = false;
        timeStarter.textContent = "S T A R T";
        timeLeft = 1500;
      }
    }, 1000)
    isRunning = true;
  } else{
    clearInterval(interval)
    isRunning = false;
    timeStarter.textContent = "S T A R T";
  }
})

reset.addEventListener("click", ()=>{
    isRunning = false;
    clearInterval(interval);
    timeStarter.textContent = "S T A R T";
    if(pomodoro.classList.contains("active")){
      timer.textContent = "25:00";
      timeLeft = 1500;
    } else if(shortBreak.classList.contains("active")){
      timer.textContent = "05:00";
      timeLeft = 300;
    } else if(longBreak.classList.contains("active")){
      timer.textContent = "15:00";
      timeLeft = 900;
    }  
  })
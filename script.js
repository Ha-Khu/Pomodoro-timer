const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach(btn =>{
  btn.addEventListener("click", () =>{
    navBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
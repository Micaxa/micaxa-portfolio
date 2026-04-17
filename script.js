const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  function toggleMenu(){
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
  
  
  const words = [
    "Mica",
    "a student",
    "a freelancer",
    "a UI Designer",
    "a Frontend Developer"
  ];

  const typingElement = document.querySelector(".typing");

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){
      charIndex--;
      typingElement.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      typingElement.textContent = currentWord.substring(0, charIndex);
    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length){
      speed = 1200; // pause before deleting
      isDeleting = true;
    }

    if(isDeleting && charIndex === 0){
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 300;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
  
  
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach(el => observer.observe(el));
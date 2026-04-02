  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // aparece
      } else {
        entry.target.classList.remove("show"); // some
      }
    });
  }, { threshold: 0.3 }); // 30% visível já ativa

  // Pega todos os elementos com "hidden"
  const elements = document.querySelectorAll(".hidden");
  elements.forEach(el => observer.observe(el));1
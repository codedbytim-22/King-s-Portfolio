document.addEventListener("DOMContentLoaded", () => {
  /* ===== NAVBAR ===== */
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Sticky navbar background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for internal links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.hash !== "") {
        e.preventDefault();
        document.querySelector(link.hash).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  /* ===== MOBILE MENU (if needed) ===== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  /* ===== FORMS ===== */
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent default submission

      // Simple validation
      let valid = true;
      const inputs = form.querySelectorAll("input, textarea, select");
      inputs.forEach((input) => {
        if (input.hasAttribute("required") && input.value.trim() === "") {
          valid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (!valid) {
        alert("Please fill in all required fields.");
        return;
      }

      // Redirect to corresponding success page
      if (form.classList.contains("contact_form")) {
        window.location.href = "contactsuccess.html";
      } else if (form.classList.contains("request_form")) {
        window.location.href = "requestsuccess.html";
      } else if (form.classList.contains("feedback_form")) {
        window.location.href = "feedbacksuccess.html";
      }
    });
  });

  /* ===== FLOATING HERO IMAGE ===== */
  const floatingImg = document.querySelector(".profile img");
  if (floatingImg) {
    let position = 0;
    let direction = 1;
    setInterval(() => {
      if (position > 20) direction = -1;
      if (position < -20) direction = 1;
      position += direction;
      floatingImg.style.transform = `translateY(${position}px)`;
    }, 50);
  }
});

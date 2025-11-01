/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 

/*===== CONTACT FORM reCAPTCHA AND EMAIL VALIDATION =====*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    const emailField = form.querySelector('input[name="email"]');
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", function (event) {
      const recaptchaResponse = grecaptcha.getResponse();
      const emailValue = emailField.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let hasError = false;
      emailError.style.display = "none";
      emailError.textContent = "";

      // reCAPTCHA validation
      if (recaptchaResponse.length === 0) {
        event.preventDefault();
        alert("⚠️ Please verify that you are not a robot before submitting.");
        hasError = true;
      }

      // Email validation
      if (!emailPattern.test(emailValue)) {
        event.preventDefault();
        emailError.textContent = "❌ Please enter a valid email address.";
        emailError.style.display = "block";
        emailField.focus();
        hasError = true;
      }

      // Reset form if no error
      if (!hasError) {
        setTimeout(() => form.reset(), 1000);
      }
    });
  }
});


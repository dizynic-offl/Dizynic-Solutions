// LUCIDE

lucide.createIcons();

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");

if(menuBtn && mobileMenu){

  menuBtn.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

  });

}

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

mobileNavLinks.forEach((link)=>{

  link.addEventListener("click",()=>{

    mobileNavLinks.forEach((item)=>{

      item.classList.remove("active");

    });

    link.classList.add("active");

  });

});

// REVEAL ANIMATION

function revealElements(){

  const elements = document.querySelectorAll(".reveal, .hero-reveal");

  elements.forEach((element)=>{

    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");

    }

  });

}

window.addEventListener("load",()=>{

  document.querySelectorAll(".hero-reveal").forEach((element)=>{

    element.classList.add("active");

  });

});

window.addEventListener("scroll",revealElements);

revealElements();



// COUNTER ANIMATION

window.addEventListener("load",()=>{

  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter)=>{

    const target = parseInt(counter.dataset.target);

    const suffix = counter.dataset.suffix || "";

    let count = 0;

    const speed = target / 600;

    const updateCounter = ()=>{

      count += speed;

      if(count < target){

        counter.textContent = Math.floor(count);

        requestAnimationFrame(updateCounter);

      }else{

        counter.textContent = target + suffix;

      }

    };

    updateCounter();

  });

});



// TESTIMONIAL BUTTON SCROLL

const testimonialSlider = document.querySelector(".testimonial-slider");

const prevBtn = document.querySelector(".prev-testimonial");

const nextBtn = document.querySelector(".next-testimonial");

if(testimonialSlider && prevBtn && nextBtn){

  nextBtn.addEventListener("click",()=>{

    testimonialSlider.scrollBy({
      left:550,
      behavior:"smooth"
    });

  });

  prevBtn.addEventListener("click",()=>{

    testimonialSlider.scrollBy({
      left:-550,
      behavior:"smooth"
    });

  });

}



// =========================================
// PROJECT MODAL
// =========================================

let currentFormMode = "project";

const projectModal = document.querySelector(".project-modal");

const projectModalOverlay = document.querySelector(".project-modal-overlay");

const projectModalClose = document.querySelector(".project-modal-close");

const projectModalTriggers = document.querySelectorAll(".open-project-modal");

// OPEN MODAL

if(projectModal && projectModalTriggers.length){

  projectModalTriggers.forEach((trigger)=>{

    trigger.addEventListener("click",(e)=>{

      e.preventDefault();

      const modalTitle =
        trigger.dataset.modalTitle;

      const modalType =
        trigger.dataset.modalType;

      currentFormMode =
        modalType || "project";  

      const modalButton =
        trigger.dataset.modalButton;

      const modalTitleElement =
        document.getElementById("projectModalTitle");

      const modalButtonElement =
        document.getElementById("projectModalButton");

      if(modalTitleElement && modalTitle){

        modalTitleElement.textContent = modalTitle;

      }

      if(modalButtonElement && modalButton){

        modalButtonElement.innerHTML = `
          <i data-lucide="send"></i>
          ${modalButton}
        `;

        lucide.createIcons();

      }

      projectModal.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });

}

// CLOSE FUNCTION

function closeProjectModal(){

  if(projectModal){

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

  }

}

// CLOSE BUTTON

if(projectModalClose){

  projectModalClose.addEventListener("click",()=>{

    closeProjectModal();

  });

}

// OVERLAY CLICK

if(projectModalOverlay){

  projectModalOverlay.addEventListener("click",()=>{

    closeProjectModal();

  });

}

// ESC KEY

document.addEventListener("keydown",(e)=>{

  if(e.key === "Escape"){

    closeProjectModal();

  }

});




// =========================================
// WHITEPAPER MODAL
// =========================================

const whitepaperModal =
  document.querySelector(".whitepaper-modal");

const whitepaperOverlay =
  document.querySelector(".whitepaper-modal-overlay");

const whitepaperClose =
  document.querySelector(".whitepaper-modal-close");

const whitepaperTriggers =
  document.querySelectorAll(".open-whitepaper-modal");

const whitepaperTitle =
  document.getElementById("whitepaperTitle");

// OPEN MODAL

if(whitepaperModal && whitepaperTriggers.length){

  whitepaperTriggers.forEach((trigger)=>{

    trigger.addEventListener("click",(e)=>{

      e.preventDefault();

      // DYNAMIC TITLE

      const whitepaperName =
        trigger.dataset.whitepaper;

      if(whitepaperTitle && whitepaperName){

        whitepaperTitle.textContent =
          ` ${whitepaperName} Whitepaper`;

      }

      // OPEN

      whitepaperModal.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });

}

// CLOSE FUNCTION

function closeWhitepaperModal(){

  if(whitepaperModal){

    whitepaperModal.classList.remove("active");

    document.body.style.overflow = "";

  }

}

// CLOSE BUTTON

if(whitepaperClose){

  whitepaperClose.addEventListener("click",()=>{

    closeWhitepaperModal();

  });

}

// OVERLAY CLICK

if(whitepaperOverlay){

  whitepaperOverlay.addEventListener("click",()=>{

    closeWhitepaperModal();

  });

}

// ESC KEY

document.addEventListener("keydown",(e)=>{

  if(e.key === "Escape"){

    closeWhitepaperModal();

  }

});




// =========================================
// VALUES ACCORDION
// =========================================

const accordionItems =
  document.querySelectorAll(".accordion-item");

accordionItems.forEach((item)=>{

  const header =
    item.querySelector(".accordion-header");

  header.addEventListener("click",()=>{

    // REMOVE ACTIVE FROM OTHERS

    accordionItems.forEach((accordion)=>{

      if(accordion !== item){

        accordion.classList.remove("active");

      }

    });

    // TOGGLE CURRENT

    item.classList.toggle("active");

  });

});





// =========================================
// CAREERS ACCORDION
// =========================================

const roleCards =
  document.querySelectorAll(".role-card");

roleCards.forEach((card)=>{

  const trigger =
    card.querySelector(".role-top");

  trigger.addEventListener("click",()=>{

    const isActive =
      card.classList.contains("active");

    // CLOSE ALL

    roleCards.forEach((item)=>{

      item.classList.remove("active");

    });

    // OPEN CURRENT

    if(!isActive){

      card.classList.add("active");

    }

  });

});









// =========================================
// DEMO MODAL
// =========================================

const demoModal = document.querySelector(".demo-modal");

const demoTriggers =
  document.querySelectorAll(".open-demo-modal");

const demoClose =
  document.querySelector(".demo-modal-close");

const demoOverlay =
  document.querySelector(".demo-modal-overlay");

const demoModalTitle =
  document.getElementById("demoModalTitle");

const demoProductInput =
  document.getElementById("demoProductInput");

// OPEN MODAL

demoTriggers.forEach(trigger => {

  trigger.addEventListener("click", (e) => {

    e.preventDefault();

    const productName =
      trigger.dataset.demoProduct || "Product";

    // UPDATE TITLE

    demoModalTitle.textContent =
      `Book ${productName} Demo`;

    // UPDATE PRODUCT FIELD

    demoProductInput.value = productName;

    // OPEN MODAL

    demoModal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});

// CLOSE FUNCTION

function closeDemoModal(){

  demoModal.classList.remove("active");

  document.body.style.overflow = "";

}

// CLOSE BUTTON

if(demoClose){

  demoClose.addEventListener(
    "click",
    closeDemoModal
  );

}

// OVERLAY

if(demoOverlay){

  demoOverlay.addEventListener(
    "click",
    closeDemoModal
  );

}

// ESC KEY

document.addEventListener("keydown", (e) => {

  if(
    e.key === "Escape" &&
    demoModal.classList.contains("active")
  ){

    closeDemoModal();

  }

});




// =========================================
// PROJECT FORM SUBMISSION
// =========================================

const projectForm =
  document.getElementById("projectForm");

if(projectForm){

  projectForm.addEventListener(
    "submit",
    async (e)=>{

      e.preventDefault();

      // GET VALUES

      const name =
        document.getElementById("projectName").value.trim();

      const email =
        document.getElementById("projectEmail").value.trim();

      const phone =
        document.getElementById("projectPhone").value.trim();

      const service =
        document.getElementById("projectService").value;

      const urgency =
        document.getElementById("projectUrgency").value;

      const message =
        document.getElementById("projectMessage").value.trim();

      // BUTTON

      const submitButton =
        document.getElementById("projectModalButton");

      // BASIC VALIDATION

      if(
        !name ||
        !email ||
        !phone ||
        !message
      ){

        alert("Please fill all required fields.");

        return;

      }

      try{

        // LOADING STATE

        submitButton.disabled = true;

        submitButton.innerHTML =
          "Sending...";

        // SEND REQUEST

        const apiEndpoint =
          currentFormMode === "consultation"
            ? "/api/consultation"
            : "/api/contact";

        const response = await fetch(
          apiEndpoint,
          {
            method:"POST",

            headers:{
              "Content-Type":"application/json"
            },

            body:JSON.stringify({
              name,
              email,
              phone,
              service,
              urgency,
              message
            })
          }
        );

        const data = await response.json();

        // SUCCESS

        if(data.success){

          const successMessage =
            currentFormMode === "consultation"
              ? "Consultation request submitted successfully!"
              : "Project request submitted successfully!";

          alert(successMessage);

          // RESET FORM

          projectForm.reset();

          // CLOSE MODAL

          closeProjectModal();

        }else{

          alert(
            data.error ||
            "Something went wrong."
          );

        }

      }catch(error){

        alert(
          "Server error. Please try again."
        );

      }finally{

        // RESTORE BUTTON

        submitButton.disabled = false;

        submitButton.innerHTML = `
          <i data-lucide="send"></i>
          START YOUR PROJECT
        `;

        lucide.createIcons();

      }

    }
  );

}









// =========================================
// DEMO FORM SUBMISSION
// =========================================

const demoForm =
  document.getElementById("demoForm");

if(demoForm){

  demoForm.addEventListener(
    "submit",
    async (e)=>{

      e.preventDefault();

      // GET VALUES

      const name =
        document.getElementById(
          "demoName"
        ).value.trim();

      const email =
        document.getElementById(
          "demoEmail"
        ).value.trim();

      const phone =
        document.getElementById(
          "demoPhone"
        ).value.trim();

      const product_interest =
        document.getElementById(
          "demoProductInput"
        ).value.trim();

      const company =
        document.getElementById(
          "demoCompany"
        ).value.trim();

      const company_size =
        document.getElementById(
          "demoCompanySize"
        ).value;

      const preferred_demo_time =
        document.getElementById(
          "demoPreferredTime"
        ).value;

      // BUTTON

      const submitButton =
        document.getElementById(
          "demoSubmitButton"
        );

      // VALIDATION

      if(
        !name ||
        !email ||
        !phone ||
        !product_interest
      ){

        alert(
          "Please fill all required fields."
        );

        return;

      }

      try{

        // LOADING

        submitButton.disabled = true;

        submitButton.innerHTML =
          "Sending...";

        // API REQUEST

        const response = await fetch(
          "/api/demo",
          {
            method:"POST",

            headers:{
              "Content-Type":
              "application/json"
            },

            body:JSON.stringify({
              name,
              email,
              phone,
              product_interest,
              company,
              company_size,
              preferred_demo_time
            })
          }
        );

        const data =
          await response.json();

        // SUCCESS

        if(data.success){

          alert(
            "Demo booked successfully!"
          );

          // RESET FORM

          demoForm.reset();

          // CLOSE MODAL

          closeDemoModal();

        }else{

          alert(
            data.error ||
            "Something went wrong."
          );

        }

      }catch(error){

        alert(
          "Server error. Please try again."
        );

      }finally{

        submitButton.disabled = false;

        submitButton.innerHTML = `
          <i data-lucide="send"></i>
          BOOK DEMO
        `;

        lucide.createIcons();

      }

    }
  );

}







// =========================================
// WHITEPAPER FORM SUBMISSION
// =========================================

const whitepaperForm =
  document.getElementById(
    "whitepaperForm"
  );

if(whitepaperForm){

  whitepaperForm.addEventListener(
    "submit",
    async (e)=>{

      // STOP PAGE REFRESH

      e.preventDefault();

      // GET VALUES

      const name =
        document.getElementById(
          "whitepaperName"
        ).value.trim();

      const email =
        document.getElementById(
          "whitepaperEmail"
        ).value.trim();

      const phone =
        document.getElementById(
          "whitepaperPhone"
        ).value.trim();

      const company =
        document.getElementById(
          "whitepaperCompany"
        ).value.trim();

      const employee_count =
        document.getElementById(
          "whitepaperEmployeeCount"
        ).value;

      // BUTTON

      const submitButton =
        document.getElementById(
          "whitepaperSubmitButton"
        );

      // VALIDATION

      if(
        !name ||
        !email ||
        !phone
      ){

        alert(
          "Please fill all required fields."
        );

        return;

      }

      try{

        // LOADING

        submitButton.disabled = true;

        submitButton.innerHTML =
          "Sending...";

        // API REQUEST

        const response = await fetch(
          "/api/whitepaper",
          {
            method:"POST",

            headers:{
              "Content-Type":
              "application/json"
            },

            body:JSON.stringify({
              name,
              email,
              phone,
              company,
              employee_count
            })
          }
        );

        const data =
          await response.json();

        // SUCCESS

        if(data.success){

          alert(
            "Whitepaper request submitted successfully!"
          );

          // RESET FORM

          whitepaperForm.reset();

          // CLOSE MODAL

          closeWhitepaperModal();

        }else{

          alert(
            data.error ||
            "Something went wrong."
          );

        }

      }catch(error){

        alert(
          "Server error. Please try again."
        );

      }finally{

        submitButton.disabled = false;

        submitButton.innerHTML = `
          <i data-lucide="download"></i>
          DOWNLOAD WHITEPAPER
        `;

        lucide.createIcons();

      }

    }
  );

}
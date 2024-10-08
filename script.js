const testimonials = [
  {
    text: "Sonali helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
    author: "Andy Smith",
    role: "Founder, Apple",
    image: "./img/Rectangle 7.png", // Assuming the image is the same for all; adjust as needed
  },
  {
    text: "Their team was incredibly helpful and guided us every step of the way. The final product exceeded our expectations.",
    author: "Jane Doe",
    role: "CEO, Tech Innovations",
    image: "./img/download.jpg", // Replace with the actual image for this testimonial
  },
  {
    text: "An outstanding experience from start to finish. Highly recommended!",
    author: "John Johnson",
    role: "Creative Director, Design Co.",
    image: "./img/sabinus.jpg", // Replace with the actual image for this testimonial
  },
];

let currentTestimonial = 0; // Track the current testimonial

function switchTestimonial(direction) {
  // Hide the current testimonial
  currentTestimonial =
    (currentTestimonial + direction + testimonials.length) %
    testimonials.length;

  // Update the testimonial content
  document.getElementById("testimonialText").textContent =
    testimonials[currentTestimonial].text;
  document.getElementById("testimonialAuthor").textContent =
    testimonials[currentTestimonial].author;
  document.getElementById("testimonialRole").textContent =
    testimonials[currentTestimonial].role;
  document.getElementById("testimonialImage").src =
    testimonials[currentTestimonial].image;
}

// Initial display setup
document.addEventListener("DOMContentLoaded", () => {
  switchTestimonial(0); // Load the first testimonial on page load
});

//
//
//
//
//
//
//
function toggleLorem(loremClass) {
  document.querySelector(loremClass).classList.toggle("hidden");
}

// Get the main content
var mainContent = document.getElementById("mainContent");

// Get the modals
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the buttons that open the modals
var btn1 = document.getElementById("openModalBtn1");
var btn2 = document.getElementById("openModalBtn2");
var btn3 = document.getElementById("openModalBtn3");

// Get the <span> elements that close the modals
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the respective modal and blur the background
btn1.onclick = function () {
  modal1.style.display = "block";
  mainContent.classList.add("blur");
};

btn2.onclick = function () {
  modal2.style.display = "block";
  mainContent.classList.add("blur");
};

btn3.onclick = function () {
  modal3.style.display = "block";
  mainContent.classList.add("blur");
};

// When the user clicks on <span> (x), close the respective modal and remove the blur
span1.onclick = function () {
  modal1.style.display = "none";
  mainContent.classList.remove("blur");
};

span2.onclick = function () {
  modal2.style.display = "none";
  mainContent.classList.remove("blur");
};

span3.onclick = function () {
  modal3.style.display = "none";
  mainContent.classList.remove("blur");
};

// When the user clicks anywhere outside the modal, close it and remove the blur
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    mainContent.classList.remove("blur");
  } else if (event.target == modal2) {
    modal2.style.display = "none";
    mainContent.classList.remove("blur");
  } else if (event.target == modal3) {
    modal3.style.display = "none";
    mainContent.classList.remove("blur");
  }
};

//
//
//
//
//
// Get modal element
var modal = document.getElementById("modal");
var modalButtons = document.querySelectorAll(".modal-button1");
var closeButton = document.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listeners to the buttons
modalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

// Close modal when clicking the close button
closeButton.addEventListener("click", closeModal);

// Optional: Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Event listeners for arrow clicks
leftArrow.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
});

rightArrow.addEventListener("click", () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
});
// Get modal element
var modal = document.getElementById("modal");
var modalButtons = document.querySelectorAll(".modal-button2");
var closeButton = document.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listeners to the buttons
modalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

// Close modal when clicking the close button
closeButton.addEventListener("click", closeModal);

// Optional: Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Event listeners for arrow clicks
leftArrow.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
});

rightArrow.addEventListener("click", () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
});
// Get modal element
var modal = document.getElementById("modal");
var modalButtons = document.querySelectorAll(".modal-button3");
var closeButton = document.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listeners to the buttons
modalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

// Close modal when clicking the close button
closeButton.addEventListener("click", closeModal);

// Optional: Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
// Get all the buttons
var btn11 = document.querySelector(".toggle-btnm1");
var btn22 = document.querySelector(".toggle-btnm2");
var btn33 = document.querySelector(".toggle-btnm3");

// Get all the lorem content sections
var lor1 = document.querySelector(".lor1");
var lor2 = document.querySelector(".lor2");
var lor3 = document.querySelector(".lor3");

// Add event listeners to toggle visibility
btn11.addEventListener("click", function () {
  lor1.classList.toggle("show");
});

btn22.addEventListener("click", function () {
  lor2.classList.toggle("show");
});

btn33.addEventListener("click", function () {
  lor3.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  // Get all the buttons
  var btn11 = document.querySelector(".toggle-btnm1");
  var btn22 = document.querySelector(".toggle-btnm2");
  var btn33 = document.querySelector(".toggle-btnm3");

  // Get all the lorem content sections
  var lor1 = document.querySelector(".lor1");
  var lor2 = document.querySelector(".lor2");
  var lor3 = document.querySelector(".lor3");

  // Add event listeners to toggle visibility
  btn11.addEventListener("click", function () {
    lor1.classList.toggle("show");
  });

  btn22.addEventListener("click", function () {
    lor2.classList.toggle("show");
  });

  btn33.addEventListener("click", function () {
    lor3.classList.toggle("show");
  });
});
//
//
//
//
//
//
// the section for mobile display testimony is shown
const desktopTestimonials = [
  {
    image: "./img/sabinus.jpg",
    text: "I’ve been to a few different places before but nothing compares to this. The flexible schedule is great.",
    author: "Andy Smith",
    role: "Founder Apple",
  },
  {
    image: "./img/download.jpg",
    text: "Amazing experience! Highly recommend to everyone.",
    author: "Jane Doe",
    role: "CEO TechCo",
  },
  {
    image: "./img/kanayo.jpg",
    text: "Absolutely fantastic service and support!",
    author: "John Johnson",
    role: "Manager BizCorp",
  },
];

let currentIndex = 0;

const updateTestimonial = () => {
  const { image, text, author, role } = desktopTestimonials[currentIndex];
  document.getElementById("testiImage").querySelector("img").src = image;
  document.getElementById("testiText").innerText = text;
  document.getElementById("testiAuthor").innerText = author;
  document.getElementById("testiRole").innerText = role;
};

document.getElementById("leftyArrow").addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? desktopTestimonials.length - 1 : currentIndex - 1;
  updateTestimonial();
});

document.getElementById("rightyArrow").addEventListener("click", () => {
  currentIndex =
    currentIndex === desktopTestimonials.length - 1 ? 0 : currentIndex + 1;
  updateTestimonial();
});

// Initial load
updateTestimonial();

//
//
//
//
//
//
//
//
//
//
function setupToggleButtons() {
  document
    .querySelectorAll(".toggle-btnm1, .toggle-btnm2, .toggle-btnm3")
    .forEach((button) => {
      button.addEventListener("click", () => {
        // Determine which paragraph to toggle based on button class
        const className = button.classList[0].replace("toggle-btn", "lor");
        const paragraph = document.querySelector(`.${className}`);

        // Toggle the display of the paragraph
        if (
          paragraph.style.display === "none" ||
          paragraph.style.display === ""
        ) {
          paragraph.style.display = "block";
        } else {
          paragraph.style.display = "none";
        }
      });
    });
}

// Run the function to set up toggle buttons
setupToggleButtons();
//
//
//
//
//
//
//
//
//
//
//
//
//
// Function to toggle the visibility of the paragraphs
function toggleVisibility(className) {
  const paragraph = document.querySelector(`.${className}`);
  paragraph.classList.toggle("hidden");
}
//
//
//
//
//
//
//
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isVisible = sidebar.style.left === "0px"; // Check if the sidebar is visible

  // Toggle the sidebar position
  sidebar.style.left = isVisible ? "-250px" : "0px"; // Hide or show
}

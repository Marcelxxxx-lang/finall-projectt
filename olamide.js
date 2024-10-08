//Testimonial
// Array of testimonials
const testimonial = [
  {
    image: "./img/Rectangle 7.png",
    text: "Sonali helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
    author: "Andy Smith",
    role: "Founder, Apple",
  },
  {
    image: "./img/unsplash_d2w-_1LJioQ (2).png",
    text: "Working with Sonali was a great experience. His creativity and problem-solving skills are exceptional!",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
  },
  {
    image: "./img/andy.jpg",
    text: "Sonali's work is top-notch! The attention to detail and dedication to the project was beyond my expectations.",
    author: "Michael Lee",
    role: "CTO, InnovateX",
  },
];

let currentTestimonialIndex = 0;

// Elements for displaying the testimonial content
const testimonialImage = document.getElementById("testimonialImage");
const testimonialText = document.getElementById("testimonialText");
const testimonialAuthor = document.getElementById("testimonialAuthor");
const testimonialRole = document.getElementById("testimonialRole");

// Arrow buttons
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// Function to update the testimonial content
function updateTestimonial(index) {
  testimonialText.style.opacity = 0; // Optional: Add fade-out effect

  setTimeout(() => {
    testimonialImage.src = testimonials[index].image;
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.textContent = testimonials[index].author;
    testimonialRole.textContent = testimonials[index].role;

    testimonialText.style.opacity = 1; // Optional: Add fade-in effect
  }, 500); // Adjust timing to match CSS transition
}

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

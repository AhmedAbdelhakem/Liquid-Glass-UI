import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.16.0/+esm";
document.addEventListener("DOMContentLoaded", () => {
  animate("#topnav", { opacity: [0, 1], y: [-40, 0] }, { duration: 0.7, easing: "ease-out" });
  animate(".hero-headline", { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.8, delay: 0.2, easing: "ease-out" });
  animate(".hero-subheadline", { opacity: [0, 1], y: [30, 0] }, { duration: 0.7, delay: 0.4, easing: "ease-out" });
  animate(".hero-form", { opacity: [0, 1], y: [30, 0] }, { duration: 0.7, delay: 0.6, easing: "ease-out" });
  const note = document.querySelector(".hero-note");
  if (note) {
    note.style.opacity = 0;
    setTimeout(() => {
      animate(note, { opacity: [0, 1] }, { duration: 0.7, easing: "ease-out" });
    }, 1300);
  }
  const heroImgs = document.querySelectorAll(".hero-img");
  heroImgs.forEach((img, i) => {
    animate(img, { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] }, { duration: 0.7, delay: 0.8 + i * 0.15, easing: "ease-out" });
  });
  // Notification stack logic
  const stack = document.getElementById("notification-stack");
  const showBtn = document.getElementById("show-notification");
  function createNotification(message) {
    const notif = document.createElement("div");
    notif.className = "backdrop-blur-md rounded-2xl px-6 pt-10 pb-6 w-[350px] flex flex-col gap-3 items-center text-white";
    notif.innerHTML = `
      <div class="relative flex justify-center items-start min-h-[180px]">
        <!-- Overlapping Icon -->
        <div class="absolute -top-7 z-10 flex justify-center w-full">
          <div class="bg-white rounded-full shadow-lg p-2 border-4 border-white">
            <div class="bg-indigo-100 rounded-full p-3 flex items-center justify-center">
              <!-- Example: Briefcase Icon (Heroicons) -->
              <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6V4a3 3 0 016 0v2M4 10h16M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10M4 10l2-2m14 2l-2-2"></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- Notification Card -->
        <div class="flex items-center w-full">
          <!-- PayPal Logo -->
          <div class="bg-indigo-50 rounded-xl p-2 mr-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" class="w-8 h-8" />
          </div>
          <div class="flex-1">
            <div class="font-semibold text-gray-900">Cash In</div>
            <div class="text-xs text-gray-400">12:30PM</div>
          </div>
          <div class="font-bold text-lg text-black ml-2">+190.00</div>
        </div>
      </div>
      <!-- Faint Chart Line (SVG) -->
      <svg width="120" height="24" fill="none" class="mt-2">
        <path d="M2 20 Q 20 10, 40 14 T 80 8 T 118 16" stroke="#6ee7b7" stroke-width="2" fill="none" opacity="0.3"/>
      </svg>
    `;
    stack.appendChild(notif);
    animate(notif, { opacity: [0, 1], y: [-40, 0], scale: [0.95, 1] }, { duration: 0.5, easing: "ease-out" });
    setTimeout(() => removeNotification(notif), 4000);
  }
  function removeNotification(notif) {
    animate(notif, { opacity: [1, 0], y: [0, -40], scale: [1, 0.95] }, { duration: 0.4, easing: "ease-in" }).finished.then(() => notif.remove());
  }
  if (showBtn) {
    showBtn.onclick = () => createNotification("This is a Motion One notification!");
  }
  // Navbar glassy effect on scroll
  const nav = document.getElementById("topnav");
  function updateNavbarGlassy() {
    if (window.scrollY > 10) {
      nav.classList.add("bg-[#4b5b5c]/20", "backdrop-blur-md");
      nav.classList.remove("");
    } else {
      nav.classList.remove("bg-[#4b5b5c]/20", "backdrop-blur-md");
      nav.classList.add("");
    }
  }
  window.addEventListener("scroll", updateNavbarGlassy);
  updateNavbarGlassy(); // Set initial state
}); 
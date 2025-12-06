// Dark / Light Mode
const toggle = document.getElementById("theme-toggle");

// تحديد الوضع الافتراضي حسب النظام
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
}

// عند الضغط على الزر
toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

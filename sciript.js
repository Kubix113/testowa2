// Funkcjonalność rozwijania i zwijania szczegółów naboru
document.getElementById("showDetailsBtn").addEventListener("click", function() {
  const details = document.getElementById("naborDetails");
  
  if (details.style.display === "none") {
      details.style.display = "block"; // Pokaż szczegóły
  } else {
      details.style.display = "none"; // Ukryj szczegóły
  }
});

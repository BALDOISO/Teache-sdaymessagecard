document.getElementById("revealBtn").addEventListener("click", function() {
  const msg = document.getElementById("message");

  if (msg.classList.contains("hidden")) {
    msg.classList.remove("hidden");
    this.textContent = "🌟 You’re the luminary teacher 🌟";
  } else {
    msg.classList.add("hidden");
    this.textContent = "Sir,please click the hidden message ✨";
  }
});

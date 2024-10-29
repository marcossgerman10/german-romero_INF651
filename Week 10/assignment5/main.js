const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinates = document.getElementById("coordinates");

// Click Event: Show welcome message or error
submitButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    outputDiv.textContent = `Welcome, ${name}!`;
    outputDiv.style.backgroundColor = "green";
    outputDiv.style.color = "white";
    outputDiv.classList.remove("error");
  } else {
    outputDiv.textContent = "Error: Please enter a name.";
    outputDiv.style.backgroundColor = "red";
    outputDiv.style.color = "white";
    outputDiv.classList.add("error");
  }
});

// Keyboard Event: Trigger submit on Enter key
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission if field is empty
    submitButton.click();
  }
});

// Mouse Event: Track and display mouse coordinates
mouseTracker.addEventListener("mousemove", (event) => {
  const rect = mouseTracker.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  coordinates.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});
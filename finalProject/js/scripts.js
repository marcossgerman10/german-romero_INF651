// Load habits from localStorage or initialize an empty array
var habits = JSON.parse(localStorage.getItem('habits')) || [];

// Select DOM elements (check if they exist to support multiple pages)
const habitList = document.getElementById('habitList'); // For the index page
const habitManagementList = document.getElementById('habitManagementList'); // For the habits page
const totalHabits = document.getElementById('totalHabits'); // Stats on the home page
const totalStreaks = document.getElementById('totalStreaks'); // Stats on the home page
const addHabitButton = document.getElementById('addHabit'); // Add habit button

// Track the current date
let currentDate = new Date().toDateString(); // Store only the date part

// Update Home Stats
function updateHomeStats() {
    if (totalHabits) {
        totalHabits.textContent = `Total Habits: ${habits.length}`;
    }
    if (totalStreaks) {
        const streaks = habits.reduce((total, habit) => total + habit.streak, 0);
        totalStreaks.textContent = `Total Streaks: ${streaks}`;
    }
}

// Render Habits with Checkboxes (Index Page)
function renderHabitsWithCheckboxes() {
    if (habitList) {
        habitList.innerHTML = ''; // Clear the current list
        const today = new Date().toDateString(); // Get today's date

        habits.forEach((habit, index) => {
            const lastCompletedDate = habit.lastCompleted
                ? new Date(habit.lastCompleted).toDateString()
                : null;

            // Determine if the checkbox should appear and calculate days left
            let isCheckboxAvailable = false;
            let daysLeftForNextCheckbox = null;

            if (habit.frequency === 'daily') {
                isCheckboxAvailable = lastCompletedDate !== today;
                daysLeftForNextCheckbox = isCheckboxAvailable ? 0 : 1;
            } else if (habit.frequency === 'weekly') {
                const lastCompleted = habit.lastCompleted
                    ? new Date(habit.lastCompleted)
                    : null;
                if (lastCompleted) {
                    const nextAvailableDate = new Date(lastCompleted);
                    nextAvailableDate.setDate(nextAvailableDate.getDate() + 7); // Add 7 days
                    const diffTime = nextAvailableDate - new Date();
                    daysLeftForNextCheckbox = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    isCheckboxAvailable = daysLeftForNextCheckbox <= 0;
                } else {
                    isCheckboxAvailable = true;
                    daysLeftForNextCheckbox = 0;
                }
            } else if (habit.frequency === 'monthly') {
                const lastCompleted = habit.lastCompleted
                    ? new Date(habit.lastCompleted)
                    : null;
                if (lastCompleted) {
                    const nextAvailableDate = new Date(lastCompleted);
                    nextAvailableDate.setMonth(nextAvailableDate.getMonth() + 1); // Add 1 month
                    const diffTime = nextAvailableDate - new Date();
                    daysLeftForNextCheckbox = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    isCheckboxAvailable = daysLeftForNextCheckbox <= 0;
                } else {
                    isCheckboxAvailable = true;
                    daysLeftForNextCheckbox = 0;
                }
            }

            // Render the habit list item
            const li = document.createElement('li');
            li.innerHTML = `
                ${habit.name} (${habit.frequency}) ${
                isCheckboxAvailable
                    ? `<input type="checkbox" id="habit-${index}" onchange="markHabitCompleted(${index})">`
                    : daysLeftForNextCheckbox > 0
                    ? `<span>Next check available in ${daysLeftForNextCheckbox} day(s)</span>`
                    : `<span>Next check available tomorrow</span>`
            }
            `;
            habitList.appendChild(li);
        });
    }
}

// Mark Habit as Completed (Index Page)
function markHabitCompleted(index) {
    const today = new Date().toDateString(); // Get today's date

    // Update habit as completed
    habits[index].lastCompleted = today; // Update the last completed date
    habits[index].streak += 1; // Increment the streak

    // Save to localStorage and re-render
    saveHabits();
    renderHabitsWithCheckboxes();
    updateHomeStats();
}

// Reset Habits for a New Day
function checkForNewDay() {
    const today = new Date().toDateString();
    if (today !== currentDate) {
        // A new day has started, reset the date and refresh the list
        currentDate = today;
        renderHabitsWithCheckboxes();
    }
}

// Render Habit Management (Habits Page)
function renderHabitManagement() {
    if (habitManagementList) {
        habitManagementList.innerHTML = ''; // Clear the current list

        habits.forEach((habit, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${habit.name} (${habit.frequency})
                <button onclick="editHabit(${index})">Edit</button>
                <button onclick="deleteHabit(${index})">Delete</button>
            `;
            habitManagementList.appendChild(li);
        });
    }
}

// Add Habit
if (addHabitButton) {
    addHabitButton.addEventListener('click', () => {
        const habitNameInput = document.getElementById('habitName');
        const habitFrequencyInput = document.getElementById('habitFrequency');

        const habitName = habitNameInput.value.trim();
        const habitFrequency = habitFrequencyInput.value;

        if (!habitName) {
            alert('Please enter a habit name.');
            return;
        }

        // Create a new habit object
        const newHabit = { name: habitName, frequency: habitFrequency, streak: 0, lastCompleted: null };

        // Add it to the habits array
        habits.push(newHabit);

        // Save habits to localStorage
        saveHabits();

        // Update the UI
        renderHabitManagement();
        renderHabitsWithCheckboxes(); // Ensure it appears on the index page too
        updateHomeStats();

        // Clear input fields
        habitNameInput.value = '';
        habitFrequencyInput.value = 'daily';
    });
}

// Delete Habit
function deleteHabit(index) {
    if (confirm('Are you sure you want to delete this habit?')) {
        habits.splice(index, 1); // Remove the habit from the array
        saveHabits(); // Save updated habits to localStorage
        renderHabitManagement(); // Re-render the habit management list
        renderHabitsWithCheckboxes(); // Re-render the habits on the index page
        updateHomeStats(); // Update the stats
    }
}

// Edit Habit
function editHabit(index) {
    const newHabitName = prompt('Enter the new name for this habit:', habits[index].name);
    const newFrequency = prompt('Enter the new frequency (daily, weekly, or monthly):', habits[index].frequency);

    if (newHabitName && newFrequency) {
        habits[index].name = newHabitName.trim(); // Update habit name
        habits[index].frequency = newFrequency.trim().toLowerCase(); // Update frequency
        saveHabits(); // Save updated habits to localStorage
        renderHabitManagement(); // Re-render the habit management list
        renderHabitsWithCheckboxes(); // Re-render the habits on the index page
        updateHomeStats(); // Update the stats
    } else {
        alert('Edit canceled or invalid input provided.');
    }
}

// Save Habits to localStorage
function saveHabits() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Initialize the App
window.onload = () => {
    if (habitList) renderHabitsWithCheckboxes(); // Render habits with checkboxes on index page
    if (habitManagementList) renderHabitManagement(); // Render habit management on habits page
    updateHomeStats(); // Update stats on the home page
    checkForNewDay(); // Ensure habits are reset if a new day has started
};


// Function to initialize and render a chart
function renderChart(canvasId, habitsData, chartLabel) {
    const ctx = document.getElementById(canvasId)?.getContext('2d');
    if (ctx && habitsData.length > 0) {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: habitsData.map(habit => habit.name), // Sorted habit names
                datasets: [{
                    label: chartLabel,
                    data: habitsData.map(habit => habit.streak), // Sorted streaks
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                plugins: {
                    legend: { display: true, position: 'top' },
                    tooltip: { enabled: true }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1, // Ensure ticks increment by 1
                            callback: function(value) {
                                return Number.isInteger(value) ? value : null; // Show only integers
                            }
                        },
                        title: { display: true, text: 'Streaks' }
                    },
                    y: { title: { display: true, text: 'Habits' } }
                }
            }
        });
    } else if (!ctx) {
        console.error(`Canvas context not found for chart with ID: ${canvasId}`);
    } else {
        console.error(`No habits found to display on the chart with ID: ${canvasId}`);
    }
}

// Filter habits by frequency and sort them by streak
function getFilteredAndSortedHabits(frequency) {
    return habits
        .filter(habit => habit.frequency === frequency)
        .sort((a, b) => a.streak - b.streak); // Sort by streaks
}

// Update all charts dynamically
function updateAllCharts() {
    // Daily habits chart
    const dailyHabits = getFilteredAndSortedHabits('daily');
    renderChart('dailyChart', dailyHabits, 'Daily Habits Streaks');

    // Weekly habits chart
    const weeklyHabits = getFilteredAndSortedHabits('weekly');
    renderChart('weeklyChart', weeklyHabits, 'Weekly Habits Streaks');

    // Monthly habits chart
    const monthlyHabits = getFilteredAndSortedHabits('monthly');
    renderChart('monthlyChart', monthlyHabits, 'Monthly Habits Streaks');
}

// Update Statistics
function updateStats() {
    const totalHabitsStat = document.getElementById('totalHabitsStat');
    const totalStreaksStat = document.getElementById('totalStreaksStat');
    const topHabitStat = document.getElementById('topHabitStat');


    if (typeof habits !== 'undefined' && habits.length > 0) {
        // Update total habits
        totalHabitsStat.textContent = habits.length;

        // Update total streaks
        const totalStreaks = habits.reduce((total, habit) => total + habit.streak, 0);
        totalStreaksStat.textContent = totalStreaks;

        // Find the top completed habit
        const topHabit = habits.reduce((top, habit) => (habit.streak > (top?.streak || 0) ? habit : top), null);
        topHabitStat.textContent = topHabit ? `${topHabit.name} (${topHabit.streak} streaks)` : 'None';
    } else {
        // Reset stats if no habits exist
        totalHabitsStat.textContent = '0';
        totalStreaksStat.textContent = '0';
        topHabitStat.textContent = 'None';
    }
}

// Call updateStats during page load
window.onload = () => {
    updateStats();
    updateAllCharts();
};

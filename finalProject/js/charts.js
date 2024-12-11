
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
    // Get the elements for each frequency category
    const totalDailyHabitsStat = document.getElementById('totalDailyHabitsStat');
    const totalWeeklyHabitsStat = document.getElementById('totalWeeklyHabitsStat');
    const totalMonthlyHabitsStat = document.getElementById('totalMonthlyHabitsStat');

    const totalDailyStreaksStat = document.getElementById('totalDailyStreaksStat');
    const totalWeeklyStreaksStat = document.getElementById('totalWeeklyStreaksStat');
    const totalMonthlyStreaksStat = document.getElementById('totalMonthlyStreaksStat');

    const topDailyHabitStat = document.getElementById('topDailyHabitStat');
    const topWeeklyHabitStat = document.getElementById('topWeeklyHabitStat');
    const topMonthlyHabitStat = document.getElementById('topMonthlyHabitStat');

    // Filter habits by frequency
    const dailyHabits = habits.filter(habit => habit.frequency === 'daily');
    const weeklyHabits = habits.filter(habit => habit.frequency === 'weekly');
    const monthlyHabits = habits.filter(habit => habit.frequency === 'monthly');

    // Calculate and update statistics for each frequency
    updateFrequencyStats(dailyHabits, totalDailyHabitsStat, totalDailyStreaksStat, topDailyHabitStat);
    updateFrequencyStats(weeklyHabits, totalWeeklyHabitsStat, totalWeeklyStreaksStat, topWeeklyHabitStat);
    updateFrequencyStats(monthlyHabits, totalMonthlyHabitsStat, totalMonthlyStreaksStat, topMonthlyHabitStat);
}

// Helper function to update stats for a specific frequency
function updateFrequencyStats(habits, totalHabitsElement, totalStreaksElement, topHabitElement) {
    if (habits.length > 0) {
        // Update total habits
        totalHabitsElement.textContent = habits.length;

        // Update total streaks
        const totalStreaks = habits.reduce((total, habit) => total + habit.streak, 0);
        totalStreaksElement.textContent = totalStreaks;

        // Find the top completed habit
        const topHabit = habits.reduce((top, habit) => (habit.streak > (top?.streak || 0) ? habit : top), null);
        topHabitElement.textContent = topHabit ? `${topHabit.name} (${topHabit.streak} streaks)` : 'None';
    } else {
        // Reset stats if no habits exist
        totalHabitsElement.textContent = '0';
        totalStreaksElement.textContent = '0';
        topHabitElement.textContent = 'None';
    }
}

// Call updateStats during page load
window.onload = () => {
    updateStats();
    updateAllCharts();
};

# Habit Tracker Web Application

## Overview
The Habit Tracker is a web application to help users manage their daily, weekly, and monthly habits. It features a dynamic interface, insightful charts, and persistent settings.

## Features
- Add, edit, and delete habits.
- Track habit completion by frequency.
- View streak progress using bar charts.
- Enable dark mode for a customizable user experience.

## Setup Instructions
1. Clone the repository:
    ```
    git clone https://github.com/marcossgerman10/german-romero_INF651.git
    ```
2. Open the project folder in your browser or a local server .
3. Navigate through the app:
    - **Home**: View overall habit statistics.
    - **Habits**: Manage habits (add, edit, delete).
    - **Insights**: View progress charts and detailed statistics.
    - **Settings**: Enable dark mode.

## Usage of the app

Once the Habit Tracker app is set up, you can interact with its features across different pages. Here’s how to use each feature effectively:

**Home Page (Default Landing Page)**

A list of all your habits categorized by their frequency (daily, weekly, monthly).
Checkboxes are displayed next to habits that are due for today.
When a checkbox is checked:
The habit is marked as completed for the day, week, or month.
Your streak for that habit is updated.
For habits that are not yet due:
A message appears, showing how many days remain until the next check.

**Habits Page**

-Add a New Habit:
Enter the habit name in the text input field.
Select the habit's frequency (daily, weekly, or monthly) from the dropdown.
Click the "Add Habit" button.
The new habit will immediately appear on the Home page and update your insights.

-Edit an Existing Habit:

Click the "Edit" button next to the habit you want to modify.
Update the name or frequency of the habit.
Save the changes, and they will be reflected on all pages.

-Delete a Habit:

Click the "Delete" button next to the habit.
The habit will be removed from the app and no longer appear on any page.

**Insights Page**

-Charts:
Displays three horizontal bar charts for daily, weekly, and monthly habits.
Each chart shows the streak progress for habits of that frequency.
Habits with higher streaks appear prominently in the charts.

-Statistics:
For each frequency (daily, weekly, monthly), view:
Total number of habits.
Total streak count.
The top-performing habit (based on streak count).

**Settings Page**

Enable Dark Mode:
Check the "Enable Dark Mode" checkbox to switch the app to dark mode.
The dark mode setting is saved and will persist across sessions and all pages.
Uncheck the box to return to light mode.

## Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **Chart.js**


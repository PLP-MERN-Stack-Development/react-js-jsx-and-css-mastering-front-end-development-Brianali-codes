React Task Manager App

This is a fully functional React + Vite project built with Tailwind CSS, featuring component architecture, state management with hooks, API integration, theme switching, and responsive design.

Features
Component Architecture

Reusable Button component with variants (primary, secondary, danger)

Card component for boxed content layout

Navbar with theme toggle (light/dark mode)

Footer with links and copyright info

Layout component that wraps Navbar and Footer for consistent page structure

State Management and Hooks

Uses useState and useEffect for state and side effects

Uses useContext for light/dark theme management

Custom hook useLocalStorage for persistent task data

Task Manager

Add new tasks

Mark tasks as completed or undo

Delete tasks

Filter tasks by All, Active, or Completed

API Integration

Fetches posts from JSONPlaceholder

Displays results in a responsive grid layout

Includes loading and error states

Search feature to filter fetched data

Styling with Tailwind CSS

Fully responsive design for mobile, tablet, and desktop

Dark mode using Tailwind’s dark: classes

Smooth hover and transition effects

Setup Instructions
1. Clone the Repository
git clone <your-repo-url>
cd <repo-folder>

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev


The app will be available at:
http://localhost:5173

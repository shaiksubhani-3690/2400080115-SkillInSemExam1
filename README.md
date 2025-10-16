# 2400080115-SkillInSemExam1

## Calendar Events React Component

A fully functional React application that displays a calendar for the current month and allows users to view events scheduled on specific dates.

---

## 📋 Project Description

This project was developed as part of the Skills In-Semester Exam 1. It demonstrates the implementation of a React component that:

- Displays a simple, interactive calendar for the current month
- Allows users to click on any date to view scheduled events
- Uses React hooks (useState) to manage the selected date state
- Highlights the selected date with visual styling
- Shows event details below the calendar when a date is selected
- Includes predefined events with date, title, and description

---

## 🚀 Features

### ✅ Calendar Display
- Shows the current month and year
- Displays all days of the week (Sun-Sat)
- Properly aligns dates starting from the correct day of the week
- Responsive grid layout

### ✅ Interactive Date Selection
- Click on any date to select it
- Selected dates are visually highlighted with a gradient background
- Smooth hover effects on date cells

### ✅ Event Management
- Predefined array of events with date, title, and description
- Dates with events show a small green indicator dot
- Selected dates with events show a yellow indicator

### ✅ Event Display
- Event details appear below the calendar when a date is selected
- Multiple events per date are supported
- Clean, card-based layout for event information
- Shows formatted date with day of week, month, and year

### ✅ Visual Design
- Beautiful gradient backgrounds
- Modern, clean UI with rounded corners
- Smooth animations and transitions
- Responsive design for mobile devices
- Clear visual hierarchy

---

## 📁 Project Structure

```
2400080115-SkillInSemExam1/
│
├── CalendarEvents.jsx       # Main calendar component
├── CalendarEvents.css       # Styling for calendar component
├── App.js                   # Example app integrating the component
├── App.css                  # Styling for the main app
└── README.md               # Project documentation
```

---

## 🛠️ Technologies Used

- **React** (v18+) - JavaScript library for building user interfaces
- **React Hooks** (useState) - For state management
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JavaScript ES6+** - Modern JavaScript features

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/shaiksubhani-3690/2400080115-SkillInSemExam1.git
   cd 2400080115-SkillInSemExam1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to `http://localhost:3000`

---

## 💻 Component Usage

### Basic Implementation

```jsx
import React from 'react';
import CalendarEvents from './CalendarEvents';
import './CalendarEvents.css';

function App() {
  return (
    <div className="App">
      <CalendarEvents />
    </div>
  );
}

export default App;
```

### Event Data Structure

The component uses a predefined array of events with the following structure:

```javascript
const eventsData = [
  {
    date: '2025-10-16',           // Format: YYYY-MM-DD
    title: 'Event Title',          // Event name
    description: 'Event details'   // Event description
  },
  // ... more events
];
```

---

## 🎨 Customization

### Modifying Events

To add or modify events, edit the `eventsData` array in `CalendarEvents.jsx`:

```javascript
const eventsData = [
  {
    date: '2025-10-16',
    title: 'Your Event Title',
    description: 'Your event description here'
  },
  // Add more events
];
```

### Styling Customization

You can customize the appearance by modifying:
- `CalendarEvents.css` - Calendar component styles
- `App.css` - Main application styles

Key CSS variables you can modify:
- Calendar colors (gradients, backgrounds)
- Font sizes and families
- Border radius and spacing
- Hover and selected states

---

## 📝 Code Features

### React Hooks Used
- **useState**: Manages the selected date state

### Key Functions

1. **handleDateClick(day)** - Handles date selection when user clicks
2. **getEventsForDate(dateString)** - Retrieves events for a specific date
3. **hasEvents(day)** - Checks if a date has any events
4. **isSelected(day)** - Checks if a date is currently selected

### Code Quality
- Clean, well-commented code
- Semantic HTML structure
- Modular component design
- Proper state management
- Responsive and accessible

---

## 🎯 Exam Requirements Fulfilled

✅ Show a simple calendar for the current month  
✅ Dates are clickable  
✅ Uses useState to store the selected date  
✅ Displays events from a predefined array  
✅ Event data includes: date, title, description  
✅ Highlights selected dates visually  
✅ Displays event details below the calendar  
✅ Includes clear code comments  
✅ Has proper styling  
✅ Contains example data  

---

## 📸 Features Showcase

### Calendar Features:
- 📅 Current month display
- 🖱️ Clickable date cells
- 🎨 Visual highlighting for selected dates
- 🟢 Green dots indicate dates with events
- 📱 Responsive design

### Event Features:
- 📋 Event title and description
- 📅 Formatted date display
- 🎴 Card-based event layout
- ✨ Smooth animations

---

## 👨‍💻 Developer Information

**Student Registration Number**: 2400080115  
**Exam**: Skills In-Semester Exam 1  
**Repository**: [2400080115-SkillInSemExam1](https://github.com/shaiksubhani-3690/2400080115-SkillInSemExam1)  
**Date**: October 16, 2025  

---

## 📄 License

This project is created for educational purposes as part of an in-semester examination.

---

## 🙏 Acknowledgments

Developed as part of the Skills In-Semester Exam requirements, demonstrating React component development, state management, and modern web design practices.

---

**Note**: This repository contains only the code related to the Skills In-Semester Exam 1, as per the exam guidelines.

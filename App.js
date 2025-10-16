// App.js
// Example application file showing how to use the CalendarEvents component

import React from 'react';
import CalendarEvents from './CalendarEvents';
import './App.css';

/**
 * Main App Component
 * This is a simple example showing how to integrate the CalendarEvents component
 * into your React application
 */
function App() {
  return (
    <div className="App">
      {/* Main application header */}
      <header className="App-header">
        <h1>React Calendar Events Application</h1>
        <p>Click on any date to view events scheduled for that day</p>
      </header>

      {/* CalendarEvents Component */}
      <CalendarEvents />

      {/* Footer with instructions */}
      <footer className="App-footer">
        <div className="instructions">
          <h3>How to Use:</h3>
          <ul>
            <li>Click on any date in the calendar to view events</li>
            <li>Selected dates are highlighted in purple</li>
            <li>Dates with events show a small green dot</li>
            <li>Event details appear below the calendar when a date is selected</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

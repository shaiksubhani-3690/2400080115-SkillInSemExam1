import React, { useState } from 'react';
import './CalendarEvents.css';

// CalendarEvents Component
// A React component that displays a calendar for the current month
// and shows events for selected dates

// Predefined events array with date, title, and description
const eventsData = [
  {
    date: '2025-10-01',
    title: 'Project Kickoff Meeting',
    description: 'Initial meeting to discuss project scope and timeline'
  },
  {
    date: '2025-10-05',
    title: 'Team Building Activity',
    description: 'Outdoor team building exercises and lunch'
  },
  {
    date: '2025-10-10',
    title: 'Code Review Session',
    description: 'Review pull requests and discuss best practices'
  },
  {
    date: '2025-10-15',
    title: 'Sprint Planning',
    description: 'Plan tasks for the next sprint cycle'
  },
  {
    date: '2025-10-16',
    title: 'Client Presentation',
    description: 'Present project progress to stakeholders'
  },
  {
    date: '2025-10-20',
    title: 'Technical Workshop',
    description: 'Workshop on React best practices and hooks'
  },
  {
    date: '2025-10-25',
    title: 'Monthly Review',
    description: 'Review monthly achievements and set goals'
  },
  {
    date: '2025-10-31',
    title: 'Halloween Party',
    description: 'Office Halloween celebration and costume contest'
  }
];

const CalendarEvents = () => {
  // State to store the currently selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Get current date information
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Get month name
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonthName = monthNames[currentMonth];

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate calendar days array
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Handle date click
  const handleDateClick = (day) => {
    if (day) {
      // Format the date as YYYY-MM-DD
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      setSelectedDate(dateString);
    }
  };

  // Get events for the selected date
  const getEventsForDate = (dateString) => {
    return eventsData.filter(event => event.date === dateString);
  };

  // Check if a date has events
  const hasEvents = (day) => {
    if (!day) return false;
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return eventsData.some(event => event.date === dateString);
  };

  // Check if a date is selected
  const isSelected = (day) => {
    if (!day || !selectedDate) return false;
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateString === selectedDate;
  };

  // Get events for the selected date
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Calendar Events</h1>
      
      {/* Calendar Header with Month and Year */}
      <div className="calendar-header">
        <h2>{currentMonthName} {currentYear}</h2>
      </div>

      {/* Calendar Grid */}
      <div className="calendar">
        {/* Days of week header */}
        <div className="calendar-weekdays">
          <div className="weekday">Sun</div>
          <div className="weekday">Mon</div>
          <div className="weekday">Tue</div>
          <div className="weekday">Wed</div>
          <div className="weekday">Thu</div>
          <div className="weekday">Fri</div>
          <div className="weekday">Sat</div>
        </div>

        {/* Calendar dates */}
        <div className="calendar-dates">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-date ${
                !day ? 'empty' : ''
              } ${
                isSelected(day) ? 'selected' : ''
              } ${
                hasEvents(day) ? 'has-events' : ''
              }`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Section */}
      <div className="events-section">
        <h3>Event Details</h3>
        {selectedDate ? (
          selectedDateEvents.length > 0 ? (
            <div className="events-list">
              <p className="selected-date-info">
                Events for {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              {selectedDateEvents.map((event, index) => (
                <div key={index} className="event-card">
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-events">No events scheduled for this date.</p>
          )
        ) : (
          <p className="no-selection">Click on a date to view events.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarEvents;

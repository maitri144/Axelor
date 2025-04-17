import React, { useState } from "react";

function CustomCalendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = firstDayOfMonth.getDay(); // 0 (Sun) to 6 (Sat)

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarDays = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="empty" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(year, month, day);
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    const isSelected =
      selectedDate &&
      dateObj.getDate() === selectedDate.getDate() &&
      dateObj.getMonth() === selectedDate.getMonth() &&
      dateObj.getFullYear() === selectedDate.getFullYear();

    calendarDays.push(
      <div
        key={day}
        className={`day ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}`}
        onClick={() => setSelectedDate(dateObj)}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>◀</button>
        <h2>{monthNames[month]} {year}</h2>
        <button onClick={nextMonth}>▶</button>
      </div>
      <div className="calendar-grid">
        {dayNames.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
        {calendarDays}
      </div>
      {selectedDate && (
        <p className="selected-info">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
}

export default CustomCalendar;

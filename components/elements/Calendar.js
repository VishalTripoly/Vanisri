'use client';

import { useState } from 'react';
import dayjs from 'dayjs';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function Calendar() {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today);

  const startOfMonth = currentMonth.startOf('month');
  const startDayOfWeek = startOfMonth.day(); // 0 (Sun) to 6 (Sat)
  const daysInMonth = currentMonth.daysInMonth();

  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const nextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));

  const renderDays = () => {
    const totalSlots = startDayOfWeek + daysInMonth;
    const days = [];

    for (let i = 0; i < totalSlots; i++) {
      const dayNum = i - startDayOfWeek + 1;
      const date = currentMonth.date(dayNum);
      const isToday = today.isSame(date, 'day');

      days.push(
        <div
          key={i}
          className={`date-text
            ${i < startDayOfWeek ? '' : ''}
            ${isToday ? 'current-date' : ''}
          `}
        >
          {i >= startDayOfWeek ? dayNum : ''}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-dashboard">
      <div className="month-text">
        <button onClick={prevMonth} className="prev-btn"><i className='icon-6'></i></button>
        <h2 className="month-name">{currentMonth.format('MMMM YYYY')}</h2>
        <button onClick={nextMonth} className="next-btn"><i className='icon-7'></i></button>
      </div>

      <div className="week-text clearfix">
        {weekdays.map((day) => (
          <div className='days-name' key={day}>{day}</div>
        ))}
      </div>

      <div className="full-day clearfix">
        {renderDays()}
      </div>
    </div>
  );
}

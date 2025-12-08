'use client'
import React, { useState } from 'react'

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const isToday = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  const isSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear()
  }

  const days = getDaysInMonth(currentDate)

  // Sample events
  const events = [
    { date: '2025-12-10', title: 'Team Meeting', time: '10:00 AM', color: 'bg-blue-500' },
    { date: '2025-12-15', title: 'Project Deadline', time: '5:00 PM', color: 'bg-red-500' },
    { date: '2025-12-20', title: 'Holiday Party', time: '6:00 PM', color: 'bg-green-500' },
  ]

  return (
    <div className="h-full w-full bg-[#EDF2F7] p-4 md:p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Calendar</h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={previousMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    disabled={!date}
                    className={`
                      aspect-square p-2 rounded-lg text-center transition-all
                      ${!date ? 'invisible' : ''}
                      ${isToday(date) ? 'bg-[#7B61FF] text-white font-bold' : ''}
                      ${isSelected(date) && !isToday(date) ? 'bg-[#7B61FF]/20 text-[#7B61FF] font-semibold' : ''}
                      ${!isToday(date) && !isSelected(date) ? 'hover:bg-gray-100' : ''}
                      ${!date ? '' : 'cursor-pointer'}
                    `}
                  >
                    {date && date.getDate()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ borderColor: event.color.replace('bg-', '') }}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.time}</p>
                        <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                      </div>
                      <span className={`w-3 h-3 rounded-full ${event.color}`}></span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-[#7B61FF] text-white py-3 rounded-lg font-semibold hover:bg-[#6951E0] transition-colors">
                Add New Event
              </button>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Today</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Day</span>
                  <span className="font-semibold">{dayNames[new Date().getDay()]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Events</span>
                  <span className="font-semibold text-[#7B61FF]">{events.length} upcoming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage

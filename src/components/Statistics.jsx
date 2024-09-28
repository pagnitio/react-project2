import React from 'react'
import './Statistics.css';
const statistics = [
    {
      id: 1,
      title: 'Total Users',
      value: '1,234',
    },
    {
      id: 2,
      title: 'Revenue',
      value: '$12,345',
    },
    {
      id: 3,
      title: 'Total Sales',
      value: '567',
    },
  ];

const Statistics = () => {
  return (
    <div>
       <div className="statistics-container">
      {statistics.map(stat => (
        <div key={stat.id} className="stat-item">
          <h3>{stat.title}</h3>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Statistics

import React from 'react'
import './RecentActivities.css';
const activities = [
    { id: 1, activity: 'User John Doe signed up.', time: '2 minutes ago' },
    { id: 2, activity: 'Product XYZ was purchased.', time: '10 minutes ago' },
    { id: 3, activity: 'User Jane Smith updated their profile.', time: '30 minutes ago' },
    { id: 4, activity: 'New order placed: Order #1234.', time: '1 hour ago' },
  ];
const RecentActivities = () => {
  return (
    <div className="activities-container">
      <h2>Recent Activities</h2>
      <ul className="activities-list">
        {activities.map(activity => (
          <li key={activity.id} className="activity-item">
            <p>{activity.activity}</p>
            <span>{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActivities

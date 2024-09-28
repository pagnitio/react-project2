import React from 'react'
import Statistics from '../components/Statistics'
import RecentActivities from '../components/RecentActivities'
const Dashboard = () => {
  return (
    <div className="dashboard-container">
  
    <div className="dashboard-content">
      <Statistics />
      <RecentActivities/>
    </div>
  </div>
  )
}

export default Dashboard

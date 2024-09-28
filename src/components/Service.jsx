import React from 'react'
import "./Service.css";
const services = [
    {
      id: 1,
      title: 'Service One',
      description: 'Description of Service One.',
      icon: '🔧', // You can use FontAwesome icons or any other icons
    },
    {
      id: 2,
      title: 'Service Two',
      description: 'Description of Service Two.',
      icon: '🌐',
    },
    {
      id: 3,
      title: 'Service Three',
      description: 'Description of Service Three.',
      icon: '📈',
    },
  ];

const Service = () => {
  return (
    <div className="service-container">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service

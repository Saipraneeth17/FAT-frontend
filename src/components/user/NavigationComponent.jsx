import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationComponent = () => {
  const navigate = useNavigate();

  const handleBookingsClick = () => {
    navigate('/user/mybookings');
  };

  const handleProfileClick = () => {
    navigate('/user/profile');
  };
  const handleLogoutClick = () => {
    // Perform any logout logic if needed
    // For example, clear user authentication state or tokens
    navigate('/user/login');
  };

  return (
    <div className="nav-container">
      <button className='nav-btn' onClick={handleBookingsClick}>Bookings</button>
      <button className='nav-btn' onClick={handleProfileClick}>Profile</button>
      <button className='nav-btn-logout' onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default NavigationComponent;

// BookingsComponent.js
import React, { useEffect, useState } from 'react';
import Card from '../bookingcard/Card';
import styles from './Bookings.module.css'; // Import CSS module
import logo from '../../../image/FAT-logo.png';
import axios from 'axios';

const TechnicianBookings = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('your_backend_endpoint')
      .then(response => {
        const { bookings } = response.data;
        setBookings(bookings);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div>
      <header className={styles.bookingsTitle}>
        <img src={logo} alt="Logo" />
      </header>
      <section className={styles.bookingsContainer}>
        <h1>My Bookings</h1>
        {/* <BookingCard /> */}
        {bookings.map(booking => (
        //   <BookingCard key={booking.id} booking={booking} />
            <Card key={booking.id} booking={booking}/>
        ))}
      </section>
    </div>
  );
}

export default TechnicianBookings;

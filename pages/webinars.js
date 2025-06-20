'use client';

import React from 'react';

const webinarsData = [
  {
    id: 1,
    title: 'Raising Emotionally Resilient Kids',
    speaker: 'Dr. Neha Sharma (Child Psychologist)',
    date: '2025-07-05',
  },
  {
    id: 2,
    title: 'Early Developmental Milestones Explained',
    speaker: 'Dr. Arjun Malhotra (Pediatric Neurologist)',
    date: '2025-07-10',
  },
  {
    id: 3,
    title: 'Balanced Diet Planning for Kids',
    speaker: 'Dr. Sakshi Verma (Nutrition Expert)',
    date: '2025-07-15',
  },
];

const WebinarsPage = () => {
  const handleViewDetails = (id) => {
    console.log(`Viewing details for webinar ID: ${id}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎓 Upcoming Live Webinars</h1>
      <div style={styles.grid}>
        {webinarsData.map((webinar) => (
          <div key={webinar.id} style={styles.card}>
            <h2 style={styles.title}>{webinar.title}</h2>
            <p style={styles.speaker}>🧑‍⚕️ <strong>Speaker:</strong> {webinar.speaker}</p>
            <p style={styles.date}>📅 <strong>Date:</strong> {new Date(webinar.date).toDateString()}</p>
            <button style={styles.button} onClick={() => handleViewDetails(webinar.id)}>
              🔍 View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    fontFamily: `'Segoe UI', sans-serif`,
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2.5rem',
    color: '#0077b6', // Sky Blue
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.8rem',
    borderRadius: '16px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid #d9d9d9',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  title: {
    fontSize: '1.4rem',
    color: '#ff6700', // Orange
    marginBottom: '0.7rem',
    fontWeight: '600',
  },
  speaker: {
    color: '#000000', // Black
    marginBottom: '0.5rem',
    fontSize: '1rem',
  },
  date: {
    color: '#0077b6', // Sky Blue
    marginBottom: '1rem',
    fontSize: '0.95rem',
  },
  button: {
    backgroundColor: '#ff6700', // Orange
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem 1.3rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s ease-in-out',
  },
};

export default WebinarsPage;

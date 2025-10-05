import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Pokémon Card Dashboard</h1>
      <p>Browse and manage your Pokémon cards with ease.</p>
      <button onClick={() => alert('Get Started!')}>Get Started</button>
    </div>
  );
};

export default LandingPage;

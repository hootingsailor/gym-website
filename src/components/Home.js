import React from 'react';
import './Home.css';
import banner from "../img/5.jpg";

function Home() {
  return (
    <div className='main'>
      <div className="banner">
        <img src={banner} alt="" />
        <h1>I hated every minute of training, but I said, don’t quit. Suffer now and live the rest of your life as a champion. </h1>
      </div>
      
    </div>
  )
}

export default Home;

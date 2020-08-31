import React from 'react';

export const Navigation = () => {


  return (
    <nav>
      <span class="nav-logo">tweeter</span>
      <div class="toggle-form">
        <p><strong>Write</strong> a new tweet</p>
        <ion-icon class="down-arrow" name="arrow-down-outline"></ion-icon>
      </div>
    </nav>
  );
};
import React from 'react';

export const Tweet = () => {
  return (
    <div class="tweet-container">
      <header>
        <div class="username">
          <img src="" alt="Avatar" />
          <p>Jeffrey Cao</p>
        </div>
        <h3 class="tweeter-handler">@Jeffrey Cao</h3>
      </header>
      <p class="tweet">I am a tweet</p>
      <footer>
        <p>14 days ago</p>
        <div class="tweet-buttons">
          <ion-icon name="flag"></ion-icon>
          <ion-icon name="repeat"></ion-icon>
          <ion-icon name="heart"></ion-icon>
        </div>
      </footer>
    </div>
  );
};
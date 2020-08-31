import React from 'react';

export const TweetForm = () => {
  return (
    <section class="new-tweet">
      <div class="tweet-error-message"></div>
      <form action="/tweets/" method="POST">
        <textarea name="text" id="tweet-input" placeholder="What are you humming about?"></textarea>
        <div class="new-tweet-footer">
          <button class="submit-tweet" type="submit">Tweet</button>
          <output class="counter" name="counter" for="tweet-text">140</output>
        </div>
      </form>
    </section>
  );
};
import React, { useState } from 'react';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet(tweet);
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="Tell me what´s going on :-)"
      />
      <button style={{ backgroundColor: 'yellow' }} type="submit">Tweet</button>
    </form>
  );
};

export default TweetInput;

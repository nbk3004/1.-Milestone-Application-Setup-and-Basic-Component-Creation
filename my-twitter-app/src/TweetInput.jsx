// TweetInput component: TweetInput.jsx
import React, { useState, useContext } from 'react';
import { AppContext } from './App';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');
  const { user } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweet.trim()) {
      alert("Tweet can't be empty!");
      return;
    }
    addTweet({ content: tweet, author: user.name, date: new Date() });
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tweet-input">Thanks for visiting my Twitter clone!</label>
      <input style={{marginRight: '25px', padding: '25px'}}
        id="tweet-input"
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
      />
      <button style={{backgroundColor: '#d49999', color: 'black', margin: '5px'}} type="submit"> Tweet</button>
    </form>
  );
};

export default TweetInput;




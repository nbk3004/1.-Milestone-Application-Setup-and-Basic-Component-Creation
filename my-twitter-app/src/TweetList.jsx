// TweetList component: TweetList.jsx
import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
  const ulStyle = {
    padding: '15px',
   justifyContent: 'center',
  
  };

  return (
    <ul style={ulStyle}>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </ul>
  );
};

export default TweetList;


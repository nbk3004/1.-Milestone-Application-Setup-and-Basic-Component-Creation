
// TweetInteractions component: TweetInteractions.jsx
import React from 'react';
import PropTypes from 'prop-types';

const TweetInteractions = ({ likes, onLike }) => {
  return (
    <div style={{ padding: '10px', marginTop: '5px'}}>
      <button onClick={onLike} style={{ margin: '10px'}}>Like {likes}</button>
      <button style={{ margin: '10px' }}>Retweet</button>
      <button style={{ margin: '10px' }}>Reply</button>
    </div>
  );
};

TweetInteractions.propTypes = {
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default TweetInteractions;


import { useState } from 'react';
import PropTypes from 'prop-types';
import TweetInteractions from './TweetInteractions';

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(tweet.likes || 0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <li>
      <p style={{padding: '10px' }} >{tweet.content}</p>
      <small style={{padding: '10px' }}>
        By {tweet.author} on {new Date(tweet.date).toLocaleString()}
      </small>
      <TweetInteractions likes={likes} onLike={handleLike} />
    </li>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.number,
  }).isRequired,
};

export default Tweet;

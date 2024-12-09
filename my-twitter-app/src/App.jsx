const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'Nancy Ben Kacem', profilePicture: 'my-twitter-app\public\nancy_benkacem.webp });
  const [theme, setTheme] = useState('light');



  const addTweet = (tweet, parentTweetId = null) => {
    const newTweet = {
      id: Date.now(),
      text: tweet,
      timestamp: new Date().toLocaleString(),
      user: { ...user },
      replies: [],
      retweets: 0,
    };

    if (parentTweetId) {
      setTweets(
        tweets.map((tweet) =>
          tweet.id === parentTweetId
            ? { ...tweet, replies: [newTweet, ...tweet.replies] }
            : tweet
        )
      );
    } else {
      setTweets([newTweet, ...tweets]);
    }
  };

  const addRetweet = (tweetId) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === tweetId
          ? { ...tweet, retweets: tweet.retweets + 1 }
          : tweet
      )
    );
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Sidebar />
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} addRetweet={addRetweet} addTweet={addTweet} />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;

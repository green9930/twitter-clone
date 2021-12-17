import { useState, useEffect } from 'react';
import { dbService } from 'myFirebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import Tweet from 'components/Tweet';
import TweetForm from 'components/TweetForm';

function Home({ userObj }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, 'tweets'),
      orderBy('createAt', 'desc')
    );

    onSnapshot(q, (snapshot) => {
      const tweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTweets(tweetArr);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <TweetForm userObj={userObj} />
      <ul>
        {tweets.map((twt) => {
          return (
            <Tweet
              userObj={twt}
              key={twt.id}
              message={twt.tweet}
              isOwner={twt.creatorId === userObj.uid}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;

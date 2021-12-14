import { useState, useEffect } from 'react';
import { dbService } from 'myFirebase';
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import Tweet from 'components/Tweet';

function Home({ userObj }) {
  const [tweet, setTweet] = useState('');
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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, 'tweets'), {
        tweet,
        createAt: Date.now(),
        creatorId: userObj.uid, // 누가 트위터를 올린 유저인지 확인 가능
      });
      console.log('Document witten with ID : ', docRef.id);
    } catch (error) {
      console.error('Error adding document : ', error);
    }

    setTweet('');
  };

  const onChange = (e) => {
    const { value } = e.target;
    setTweet(value);
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={tweet}
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="tweet" />
      </form>
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

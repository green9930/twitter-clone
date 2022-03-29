import { useState, useEffect } from 'react';
import { dbService } from 'myFirebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import Tweet from 'containers/Tweet';
import styled from 'styled-components';
import { a11yHidden } from 'styles/mixin';
import Helmet from 'react-helmet';

const MyTweets = ({ userObj }) => {
  const [myTweets, setMyTweets] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, 'tweets'),
      orderBy('createAt', 'desc')
    );

    onSnapshot(q, (snapshot) => {
      const TweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const myTweetArr = TweetArr.filter(
        (tweet) => tweet.creatorId === userObj.uid
      );

      setMyTweets(myTweetArr);
    });
  }, []);

  return (
    <MyTweetsContainer>
      <Helmet>
        <title>My Twitters</title>
      </Helmet>
      <h1 className="a11y-hidden">My Tweets</h1>
      {myTweets.map((twt) => {
        return (
          <TweetContainer>
            <Tweet
              userObj={twt}
              key={twt.id}
              message={twt.tweet}
              isOwner={true}
            />
          </TweetContainer>
        );
      })}
    </MyTweetsContainer>
  );
};

const MyTweetsContainer = styled.div`
  .a11y-hidden {
    ${a11yHidden}
  }
`;

const TweetContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default MyTweets;

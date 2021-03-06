import { useState, useEffect } from 'react';
import { dbService } from 'myFirebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import Tweet from 'containers/Tweet';
import TweetForm from 'containers/TweetForm';
import styled from 'styled-components';
import { calcRem, deviceSizes } from 'theme/theme';
import { a11yHidden } from 'styles/mixin';
import { Helmet } from 'react-helmet-async';

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
    <HomeContainer>
      <Helmet>
        <title>Twitter Home</title>
      </Helmet>
      <h1 className="a11y-hidden">Home</h1>
      <TweetForm userObj={userObj} />
      <TweetContainer>
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
      </TweetContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: ${deviceSizes.mobile};
  margin: 0 ${calcRem(32)};

  .a11y-hidden {
    ${a11yHidden}
  }
`;

const TweetContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Home;

import { useState } from 'react';
import { dbService } from 'myFirebase';
import { addDoc, collection } from 'firebase/firestore';

function Home() {
  const [tweet, setTweet] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, 'tweets'), {
        tweet,
        createAt: Date.now(),
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
    </div>
  );
}

export default Home;

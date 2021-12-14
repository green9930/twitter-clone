import { useState } from 'react';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { dbService } from 'myFirebase';

const Tweet = ({ userObj, message, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(message);

  const userRef = doc(dbService, 'tweets', `${userObj.id}`);

  const onDeleteClick = async () => {
    const confirming = window.confirm(
      'Are you sure you want to delete this tweet?'
    );
    confirming && (await deleteDoc(userRef));
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setNewTweet(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(newTweet, userObj);
    await updateDoc(userRef, {
      tweet: newTweet,
    });
    setEditing(false);
  };

  return (
    <li key={userObj.id}>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <label htmlFor="TweetEditor">Edit yout Tweet </label>
            <input
              name="TweetEditor"
              type="text"
              value={newTweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Tweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <p>{message}</p>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Tweet</button>
              <button onClick={toggleEditing}>Edit Tweet</button>
            </>
          )}
        </>
      )}
    </li>
  );
};

export default Tweet;

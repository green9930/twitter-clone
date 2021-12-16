import { useState } from 'react';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { storageService, dbService } from 'myFirebase';
import { deleteObject, ref } from 'firebase/storage';

const Tweet = ({ userObj, message, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(message);

  const userRef = doc(dbService, 'tweets', `${userObj.id}`);
  const urlRef = ref(storageService, userObj.imageUrl);

  const onDeleteClick = async () => {
    const confirming = window.confirm(
      'Are you sure you want to delete this tweet?'
    );

    if (confirming) {
      await deleteDoc(userRef);
      await deleteObject(urlRef);
    }
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
          {userObj.imageUrl && (
            <img
              src={userObj.imageUrl}
              alt="uploaded file"
              width="50px"
              height="auto"
            />
          )}
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

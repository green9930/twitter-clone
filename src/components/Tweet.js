import { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { dbService } from 'myFirebase';

const Tweet = ({ userObj, key, text, isOwner }) => {
  const onDeleteClick = async () => {
    const confirming = window.confirm(
      'Are you sure you want to delete this tweet?'
    );
    confirming && (await deleteDoc(doc(dbService, 'tweets', `${userObj.id}`)));
  };

  return (
    <li key={key}>
      <p>{text}</p>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>Delete Tweet</button>
          <button>Edit Tweet</button>
        </>
      )}
    </li>
  );
};

export default Tweet;

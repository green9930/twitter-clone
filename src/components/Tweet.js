import { useState } from 'react';

const Tweet = ({ key, text, isOwner }) => {
  return (
    <li key={key}>
      <p>{text}</p>
      {isOwner && (
        <>
          <button>Delete Tweet</button>
          <button>Edit Tweet</button>
        </>
      )}
    </li>
  );
};

export default Tweet;

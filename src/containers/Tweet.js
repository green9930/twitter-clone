import { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { storageService, dbService } from 'myFirebase';
import { deleteObject, ref } from 'firebase/storage';
import TweetEditor from 'components/TweetEditor';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEdit,
  faPlus,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
import TweetMessage from 'components/TweetMessage';

const Tweet = ({ userObj, message, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(message);

  const userRef = doc(dbService, 'tweets', `${userObj.id}`);
  const urlRef = ref(storageService, userObj.imageUrl);

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onDeleteClick = async () => {
    const confirming = window.confirm(
      'Are you sure you want to delete this tweet?'
    );

    if (confirming) {
      await deleteDoc(userRef);
      await deleteObject(urlRef);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(userRef, {
      tweet: newTweet,
    });
    setEditing(false);
  };

  return (
    <li key={userObj.id}>
      {editing ? (
        <EditContainer>
          <UpdateContainer onSubmit={onSubmit}>
            <TweetEditor setNewTweet={setNewTweet} newTweet={newTweet} />
            <UpdateBtnContainer>
              <label htmlFor="update-tweet">
                <FontAwesomeIcon icon={faSyncAlt} />
              </label>
              <input
                id="update-tweet"
                type="submit"
                value="Update Tweet"
                className="a11y-hidden"
              />
            </UpdateBtnContainer>
          </UpdateContainer>
          <EditorBtnContainer>
            <EditorBtn onClick={onDeleteClick}>
              <span>Delete</span>
              <FontAwesomeIcon icon={faTrash} />
            </EditorBtn>
            <EditorBtn onClick={toggleEditing}>
              <span>Cancel</span>
              <FontAwesomeIcon icon={faPlus} className="icon-x" />
            </EditorBtn>
          </EditorBtnContainer>
        </EditContainer>
      ) : (
        <MessageContainer>
          <TweetMessage message={message} userObj={userObj} />
          {isOwner && (
            <BtnContainer>
              <button onClick={onDeleteClick}>
                <span className="a11y-hidden">Delete Tweet</span>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button onClick={toggleEditing}>
                <span className="a11y-hidden">Edit Tweet</span>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </BtnContainer>
          )}
        </MessageContainer>
      )}
    </li>
  );
};

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${calcRem(16)} ${calcRem(32)};
`;

const UpdateContainer = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const UpdateBtnContainer = styled.div`
  color: ${colors.blue};
  margin: 0 ${calcRem(12)};

  :hover {
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation: spin 3s linear infinite;
  }
`;

const EditorBtnContainer = styled.div`
  display: flex;
`;

const EditorBtn = styled.button`
  background: transparent;
  color: ${colors.blue};
  border: transparent;
  cursor: pointer;

  span {
    margin: auto ${calcRem(8)} auto 0;
  }

  .icon-x {
    transform: rotate(45deg);
  }
`;

const MessageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${calcRem(16)} ${calcRem(32)};
  border-radius: ${calcRem(16)};
  overflow: hidden;
`;

const BtnContainer = styled.div`
  position: absolute;
  right: ${calcRem(8)};
  bottom: ${calcRem(8)};

  button {
    background: transparent;
    border: transparent;
    border-radius: 0;
    color: ${colors.blue};

    :hover {
      color: ${colors.black};
    }
  }
`;

export default Tweet;

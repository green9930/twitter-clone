import { useState } from 'react';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { storageService, dbService } from 'myFirebase';
import { deleteObject, ref } from 'firebase/storage';
import TweetEditor from './TweetEditor';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrash,
  faEdit,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';

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

const CancelBtn = styled.button`
  background: transparent;
  color: ${colors.blue};
  border: transparent;
  cursor: pointer;

  .icon-x {
    transform: rotate(45deg);
    margin: auto 0 auto ${calcRem(8)};
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

const TextContainer = styled.div`
  background: ${colors.lightGray_03};
  min-height: ${calcRem(80)};
  max-height: ${calcRem(150)};
  padding: ${calcRem(16)};
  color: ${colors.black};
  word-break: break-all;

  p {
    font-size: ${calcRem(18)};
    white-space: pre-line;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
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
          <CancelBtn onClick={toggleEditing}>
            <span>Cancel</span>
            <FontAwesomeIcon icon={faPlus} className="icon-x" />
          </CancelBtn>
        </EditContainer>
      ) : (
        <MessageContainer>
          {message && (
            <TextContainer>
              <p>{message}</p>
            </TextContainer>
          )}
          {userObj.imageUrl && (
            <ImageContainer>
              <img src={userObj.imageUrl} alt="uploaded file" />
            </ImageContainer>
          )}
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

export default Tweet;

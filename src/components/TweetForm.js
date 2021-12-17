import { useState } from 'react';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { dbService, storageService } from 'myFirebase';
import { v4 } from 'uuid';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import { a11yHidden } from 'styles/mixin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TweetFormContainer = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .a11y-hidden {
    ${a11yHidden}
  }
`;

const MentionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${calcRem(16)} 0;
  color: ${colors.blue};
  font-size: ${calcRem(14)};

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: ${calcRem(8)};
    }
  }
`;

const MentionInput = styled.input`
  width: 100%;
  flex-grow: 1;
`;

const SubmitBtnContainer = styled.div`
  background: ${colors.blue};
  width: ${calcRem(40)};
  height: ${calcRem(40)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 ${calcRem(8)};

  .icon-twitter {
    width: 100%;
    color: ${colors.white};
  }

  :hover {
    background: ${colors.white};
    .icon-twitter {
      color: ${colors.blue};
    }
  }
`;

const SelectedImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${calcRem(16)} 0;

  img {
    width: ${calcRem(240)};
    height: auto;
  }
`;

const ClearBtn = styled.button`
  background: transparent;
  color: ${colors.blue};
  border: transparent;
  cursor: pointer;

  .icon-x {
    transform: rotate(45deg);
    margin: auto 0 auto ${calcRem(8)};
  }

  :hover,
  :active {
    border: transparent;
    outline: transparent;
  }
`;

const TweetForm = ({ userObj }) => {
  const [tweet, setTweet] = useState('');
  const [imgFile, setImgFile] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = '';

    if (imgFile !== '') {
      // file에 대한 reference 생성 (reference에서 폴더 생성 가능)
      // 두번째 인수 : 이미지의 path
      const fileRef = ref(storageService, `${userObj.uid}/${v4()}`);
      // storage 참조 경로로 파일 업로드
      const response = await uploadString(fileRef, imgFile, 'data_url');
      // getDownloadURL(response.ref) : 이미지가 저장된 URL 반환
      imageUrl = await getDownloadURL(response.ref);
    }

    const newTweetPosting = {
      tweet,
      createAt: Date.now(),
      creatorId: userObj.uid, // 누가 트위터를 올린 유저인지 확인 가능
      imageUrl,
    };

    try {
      const docRef = await addDoc(
        collection(dbService, 'tweets'),
        newTweetPosting
      );
      console.log('Document witten with ID : ', docRef.id);
    } catch (error) {
      console.error('Error adding document : ', error);
    }

    setTweet('');
    setImgFile('');
  };

  const onChange = (e) => {
    const { value } = e.target;
    setTweet(value);
  };

  // 이미지는 한 장만 업로드 가능
  const onFileChange = (e) => {
    const { files } = e.target;
    // input으로 들어온 모든 파일 중 첫번째 이미지만 선택되도록 설정
    const myImage = files[0];
    // reader를 만들고 eventListener 추가
    const reader = new FileReader();

    // 파일 로딩이 종료되면 finishedEvent를 가져온다.
    reader.onloadend = (finishedEvent) => {
      const { result } = finishedEvent.currentTarget;
      setImgFile(result);
    };

    reader.readAsDataURL(myImage);
  };

  const clearPhoto = () => {
    setImgFile('');
  };

  return (
    <TweetFormContainer onSubmit={onSubmit}>
      <MentionContainer>
        <MentionInput
          type="text"
          name="upload-tweet"
          value={tweet}
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <SubmitBtnContainer>
          <label htmlFor="submit-tweet">
            <FontAwesomeIcon icon={faTwitter} className="icon-twitter" />
          </label>
          <input
            id="submit-tweet"
            type="submit"
            value="tweet"
            className="a11y-hidden"
          />
        </SubmitBtnContainer>
      </MentionContainer>
      <ImageUploadContainer>
        <label htmlFor="upload-image">
          <span>Upload Image</span>
          <FontAwesomeIcon icon={faPlus} />
        </label>
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="a11y-hidden"
        />
        {imgFile && (
          <SelectedImageContainer>
            <img src={imgFile} alt="uploaded file" />
            <ClearBtn onClick={clearPhoto}>
              <span>Clear</span>
              <FontAwesomeIcon icon={faPlus} className="icon-x" />
            </ClearBtn>
          </SelectedImageContainer>
        )}
      </ImageUploadContainer>
    </TweetFormContainer>
  );
};

export default TweetForm;

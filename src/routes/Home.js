import { useState, useEffect } from 'react';
import { dbService, storageService } from 'myFirebase';
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import Tweet from 'components/Tweet';
import { v4 } from 'uuid';

function Home({ userObj }) {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const [imgFile, setImgFile] = useState('');

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

      console.log(imageUrl);

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
    }
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
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <div className="mention-container">
          <label htmlFor="upload-tweet">Write your Tweeet</label>
          <input
            type="text"
            name="upload-tweet"
            value={tweet}
            onChange={onChange}
            placeholder="What's on your mind?"
            maxLength={120}
          />
        </div>
        <div className="image-container">
          <label htmlFor="upload-image">Upload Image</label>
          <input
            type="file"
            name="upload-image"
            accept="image/*"
            onChange={onFileChange}
          />
          {imgFile && (
            <div>
              <img
                src={imgFile}
                width="50px"
                height="auto"
                alt="uploaded file"
              />
              <button onClick={clearPhoto}>Clear</button>
            </div>
          )}
        </div>
        <input type="submit" value="tweet" />
      </form>
      <ul>
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
      </ul>
    </div>
  );
}

export default Home;

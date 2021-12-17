import { useState, useEffect } from 'react';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { dbService } from 'myFirebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

function Profile({ userObj, refreshUser }) {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const navigate = useNavigate();
  const auth = getAuth();
  // userObj.displayName === auth.currentUser.displayName

  const onLogOutClick = () => {
    signOut(auth);
    navigate('/');
  };

  const getMyTweets = async () => {
    const q = query(
      collection(dbService, 'tweets'),
      // 필터링
      where('creatorId', '==', userObj.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  };

  useEffect(() => {
    getMyTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    setNewDisplayName(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      if (userObj.displayName === null) {
        await updateProfile(userObj, { displayName: 'Anonymous' });
      }
      await updateProfile(userObj, { displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <>
      <h1>{userObj.displayName}'s Profile</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={newDisplayName}
          placeholder="Display Name"
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
}

export default Profile;

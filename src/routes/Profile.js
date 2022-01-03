import { useState, useEffect } from 'react';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { dbService } from 'myFirebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import { Helmet } from 'react-helmet-async';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 ${calcRem(32)};
`;

const ProfileUpdateContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileInput = styled.input`
  flex-grow: 1;
  width: 100%;
  margin-bottom: ${calcRem(8)};
`;

const ProfileUpdateBtn = styled.input`
  width: 100%;
  background: ${colors.blue};
  color: ${colors.white};
  margin-bottom: ${calcRem(32)};

  &:hover {
    background: ${colors.white};
    color: ${colors.blue};
  }
`;
const LogOutBtn = styled.button`
  width: 100%;
  background: ${colors.red};
  color: ${colors.white};
  border: 1px solid transparent;

  &:hover {
    box-sizing: border-box;
    background: ${colors.white};
    color: ${colors.red};
    border: 1px solid ${colors.red};
  }
`;

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
        await updateProfile(userObj, { displayName: 'User' });
      }
      await updateProfile(userObj, { displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <ProfileContainer>
      <Helmet>
        <title>{`${userObj.displayName}s Profile`}</title>
      </Helmet>
      <h1>{userObj.displayName}'s Profile</h1>
      <ProfileUpdateContainer onSubmit={onSubmit}>
        <ProfileInput
          type="text"
          onChange={onChange}
          value={newDisplayName}
          placeholder="Display Name"
        />
        <ProfileUpdateBtn type="submit" value="Update Profile" />
      </ProfileUpdateContainer>
      <LogOutBtn onClick={onLogOutClick}>Log out</LogOutBtn>
    </ProfileContainer>
  );
}

export default Profile;

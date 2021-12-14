import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    const auth = getAuth();
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <h1>My Profile</h1>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
}

export default Profile;

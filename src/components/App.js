import { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import Footer from 'components/Footer';
import { authService } from 'myFirebase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [newUserName, setNewUserName] = useState(''); // 프로필 이름 업데이트용

  useEffect(() => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        if (user.displayName === null) {
          await user.updateProfile({
            displayName: 'User',
          });
        }
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    setNewUserName(authService.currentUser.displayName);
  };

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        'Initializing...'
      )}
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import AppRouter from 'routes/Router';
import Footer from 'containers/Footer';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { calcRem, colors } from 'theme/theme';
import { updateProfile } from 'firebase/auth';
import { authService } from 'myFirebase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [newUserName, setNewUserName] = useState(''); // 프로필 이름 업데이트용

  useEffect(() => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        if (user.displayName === null) {
          await updateProfile(user, {
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
        <Inititializing>
          <span>Initializing...</span>
          <FontAwesomeIcon icon={faSyncAlt} className="spinner" />
        </Inititializing>
      )}
      <Footer />
    </>
  );
}

const Inititializing = styled.div`
  color: ${colors.blue};
  margin-top: ${calcRem(32)};
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    margin: ${calcRem(4)};

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
  }
`;

export default App;

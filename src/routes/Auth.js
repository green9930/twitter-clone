import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import AuthForm from 'components/AuthForm';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleAccountDisplay = styled.p`
  margin: ${calcRem(16)} 0;
  color: ${colors.blue};
  text-align: center;
  cursor: pointer;
`;

const LogInMethodContainer = styled.div`
  display: flex;
  padding: ${calcRem(8)};
  text-align: center;
  vertical-align: center;
`;

const LogInMethod = styled.button`
  display: flex;
  width: 100%;
  margin: 0 ${calcRem(8)};
  white-space: nowrap;
  color: ${colors.black};
  background-color: ${colors.white};
  border: transparent;
  border-radius: ${calcRem(16)};
  justify-content: center;
  align-items: center;

  .method-icon {
    margin: ${calcRem(4)};
  }

  &:hover {
    background-color: ${colors.darkGray};
    color: ${colors.white};
  }
`;

function Auth() {
  const [newAccount, setNewAccount] = useState(true);

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocialClick = async (e) => {
    const { name } = e.target;
    const auth = getAuth();
    let provider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }

    await signInWithPopup(auth, provider);
  };
  return (
    <>
      <AuthForm newAccount={newAccount} />
      <ToggleAccountDisplay onClick={toggleAccount}>
        {newAccount ? 'Sign In' : 'Create Account'}
      </ToggleAccountDisplay>
      <LogInMethodContainer>
        <LogInMethod name="google" onClick={onSocialClick}>
          Continue with Google
          <FontAwesomeIcon className="method-icon" icon={faGoogle} size="1x" />
        </LogInMethod>
        <LogInMethod name="github" onClick={onSocialClick}>
          Continue with Github
          <FontAwesomeIcon className="method-icon" icon={faGithub} size="1x" />
        </LogInMethod>
      </LogInMethodContainer>
    </>
  );
}

export default Auth;

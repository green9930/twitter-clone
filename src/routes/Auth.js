import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import AuthForm from 'components/AuthForm';

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
      <p onClick={toggleAccount}>{newAccount ? 'Sign In' : 'Create Account'}</p>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </>
  );
}

export default Auth;

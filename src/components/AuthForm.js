import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import styled from 'styled-components';
import { calcRem, colors, deviceSizes } from 'theme/theme';
import { a11yHidden } from 'styles/mixin';

const AuthFormContainer = styled.form`
  max-width: ${deviceSizes.mobile};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${calcRem(8)};
  margin: 0 ${calcRem(60)};

  .a11y-hidden {
    ${a11yHidden}
  }
`;

const AuthItemContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  margin: ${calcRem(8)} 0;
`;

const AuthItemInput = styled.input`
  width: 100%;
`;

const AuthSubmitInput = styled.input`
  width: 100%;
  background: ${colors.blue};
  color: ${colors.white};
`;

const ErrorMessageContainer = styled.div`
  word-break: break-all;
  p {
    color: ${colors.red};
    white-space: pre-line;
    width: 100%;
    font-size: ${calcRem(12)};
  }
`;

const AuthForm = ({ newAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      if (newAccount) {
        // create account
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
            const password = userCredential.password;
            console.log(user, password);
          }
        );
      } else {
        // log in
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <AuthFormContainer onSubmit={onSubmit}>
        <AuthItemContainer>
          <label htmlFor="Email" className="a11y-hidden">
            Email
          </label>
          <AuthItemInput
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
        </AuthItemContainer>
        <AuthItemContainer>
          <label htmlFor="password" className="a11y-hidden">
            Password
          </label>
          <AuthItemInput
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
        </AuthItemContainer>
        <AuthItemContainer>
          <AuthSubmitInput
            type="submit"
            value={newAccount ? 'Create Account' : 'Sign In'}
          />
        </AuthItemContainer>
      </AuthFormContainer>
      <ErrorMessageContainer>
        <p className="error">{error}</p>
      </ErrorMessageContainer>
    </>
  );
};

export default AuthForm;

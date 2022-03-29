import { Route, Routes } from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Navigation from 'containers/Navigation';
import UnauthenticatedNav from 'containers/UnauthenticatedNav';
import Profile from 'pages/Profile';
import styled from 'styled-components';
import MyTweets from 'pages/MyTweets';

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <>
      <NavContainer>
        {isLoggedIn ? <Navigation userObj={userObj} /> : <UnauthenticatedNav />}
      </NavContainer>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route
              path="/profile"
              element={<Profile userObj={userObj} refreshUser={refreshUser} />}
            />
            <Route path="/MyTweets" element={<MyTweets userObj={userObj} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/MyTweets" element={<Auth />} />
            <Route path="/profile" element={<Auth />} />
          </>
        )}
      </Routes>
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AppRouter;

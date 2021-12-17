import { Route, Routes } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from 'components/Navigation';
import UnauthenticatedNav from 'components/UnauthenticatedNav';
import Profile from 'routes/Profile';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <>
      <NavContainer>
        {isLoggedIn ? <Navigation userObj={userObj} /> : <UnauthenticatedNav />}
      </NavContainer>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home userObj={userObj} />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        <Route
          path="/profile"
          element={<Profile userObj={userObj} refreshUser={refreshUser} />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;

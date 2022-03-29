import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { calcRem, colors, deviceSizes } from 'theme/theme';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <NavList>
        <NavItemContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </IconContainer>
          <Link to="/">Home</Link>
        </NavItemContainer>
        <NavItemContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </IconContainer>
          <Link to="/profile">{userObj.displayName}'s Profile</Link>
        </NavItemContainer>
        <NavItemContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faBook} size="2x" />
          </IconContainer>
          <Link to="/MyTweets">My Tweets</Link>
        </NavItemContainer>
      </NavList>
    </nav>
  );
};

const NavList = styled.ul`
  display: flex;
  width: ${deviceSizes.mobile};
  align-items: center;
  justify-content: center;
`;

const NavItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: ${calcRem(8)};
  align-items: center;
  font-weight: bold;
`;

const IconContainer = styled.div`
  color: ${colors.blue};
  height: ${calcRem(8)};
  margin-bottom: ${calcRem(32)};
`;

export default Navigation;

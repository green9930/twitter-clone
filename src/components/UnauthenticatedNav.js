import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: auto;
`;

const NavItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
`;
const UnauthenticatedNav = () => {
  return (
    <nav>
      <NavContainer>
        <NavItemContainer>
          <FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} size="2x" />
          <Link to="/" />
        </NavItemContainer>
      </NavContainer>
    </nav>
  );
};

export default UnauthenticatedNav;

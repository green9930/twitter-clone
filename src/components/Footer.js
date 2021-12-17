import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${calcRem(32)};
`;

const Copyright = styled.p`
  margin: ${calcRem(16)} 0;
`;

const Footer = () => {
  const ThisYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <a
        href="https://github.com/green9930"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        green9930
      </a>
      <Copyright>&copy;twitter_clone {ThisYear} </Copyright>
    </FooterContainer>
  );
};

export default Footer;

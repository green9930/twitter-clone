import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';

const TweetMessage = ({ message, userObj }) => {
  return (
    <>
      {message && (
        <TextContainer>
          <p>{message}</p>
        </TextContainer>
      )}
      {userObj.imageUrl && (
        <ImageContainer>
          <img src={userObj.imageUrl} alt="uploaded file" />
        </ImageContainer>
      )}
    </>
  );
};

const TextContainer = styled.div`
  background: ${colors.lightGray_03};
  min-height: ${calcRem(80)};
  max-height: ${calcRem(150)};
  padding: ${calcRem(16)};
  color: ${colors.black};
  word-break: break-all;

  p {
    font-size: ${calcRem(18)};
    white-space: pre-line;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default TweetMessage;

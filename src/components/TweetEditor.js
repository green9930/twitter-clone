import styled from 'styled-components';
import { calcRem } from 'theme/theme';

const EditorInput = styled.input`
  width: 100%;
  min-height: ${calcRem(80)};
  max-height: ${calcRem(150)};
`;

const TweetEditor = ({ setNewTweet, newTweet }) => {
  const onChange = (e) => {
    const { value } = e.target;
    setNewTweet(value);
  };

  return (
    <>
      <label htmlFor="tweet-editor" className="a11y-hidden">
        Edit yout Tweet
      </label>
      <EditorInput
        id="tweet-editor"
        type="text"
        value={newTweet}
        required
        onChange={onChange}
      />
    </>
  );
};

export default TweetEditor;

const TweetEditor = ({ setNewTweet, newTweet }) => {
  const onChange = (e) => {
    const { value } = e.target;
    setNewTweet(value);
  };

  return (
    <>
      <label htmlFor="TweetEditor">Edit yout Tweet </label>
      <input
        name="TweetEditor"
        type="text"
        value={newTweet}
        required
        onChange={onChange}
      />
    </>
  );
};

export default TweetEditor;

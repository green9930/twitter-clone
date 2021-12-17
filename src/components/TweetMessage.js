const TweetMessage = ({ message, userObj }) => {
  return (
    <>
      <p>{message}</p>
      {userObj.imageUrl && (
        <img
          src={userObj.imageUrl}
          alt="uploaded file"
          width="50px"
          height="auto"
        />
      )}
    </>
  );
};

export default TweetMessage;

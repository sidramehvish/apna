const Welcome = ({ onGetPostClick }) => {
  return (
    <center>
      <h1 className="welcome-message"> There is no posts</h1>
      <button type="button" class="btn btn-primary" onClick={onGetPostClick}>
        Get Posts From Server
      </button>
    </center>
  );
};
export default Welcome;

const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={`btn ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="like-btn" text="Like" />
      <Button className="comment-btn" text="Comment" />
      <Button className="share-btn" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

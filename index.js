const Button = (props) => {
  const { color, content } = props;
  return <button className={color}>{content}</button>;
};

const element = (
  <div className="bg-container">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <div>
          <Button color="yellow" content="Like" />
        </div>
        <div>
          <Button color="white" content="Comment" />
        </div>
        <div>
          <Button color="blue" content="Share" />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

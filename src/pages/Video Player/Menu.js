import classes from "./Menu.module.css";

const Menu = (props) => {
  const videoSelectHandler = (event) => {
    props.onSelectVideo(event.target.value);
  };

  return (
    <form onClick={videoSelectHandler}>
      <div className={classes.container}>
        {props.videoValues.map((value, i) => (
          <div className={classes.videoInputs}>
            <input key={i} type="radio" name="src" value={value} />
            {value}
          </div>
        ))}
      </div>
    </form>
  );
};

export default Menu;

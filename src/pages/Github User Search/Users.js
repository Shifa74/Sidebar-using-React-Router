import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={classes.user}>
      <img src={props.avatar} alt="Profile" width="50" height="50" />
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.username}
      </a>
    </div>
  );
};
export default Users;

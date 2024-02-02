import classes from './Video.module.css';

const Video = (props) => {
    return <div className={classes.video}>
        <video loop controls autostart="true" autoPlay src={props.videoSrc} />
    </div>
}

export default Video;
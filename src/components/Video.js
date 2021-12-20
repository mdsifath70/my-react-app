import Image from '../assets/img/3.jpg';
import classes from '../styles/Video.module.css';

export default function Video({ title = '#23 React Hooks Bangla - React useReducer hook Bangla' }) {
    return (
        <div className={classes.video}>
            <img src={Image} alt="Video Img" />
            <p>{title}</p>
            <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    );
}

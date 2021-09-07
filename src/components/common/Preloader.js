import preloader from "./../../assets/images/preloader.svg";
import classes from './Preloader.module.css';


let Preloader = (props) => {
    return <div className={classes.preloaderWrapperStyle}>
    <img src={preloader} className={classes.preloaderStyle}/>
</div>
};

export default Preloader;
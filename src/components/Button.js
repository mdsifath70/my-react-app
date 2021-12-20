import classes from '../styles/Button.module.css';

export default function Button({ className, children }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}

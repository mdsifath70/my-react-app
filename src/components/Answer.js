import classes from '../styles/Answer.module.css';
import CheckBox from './CheckBox';

export default function Answer() {
  return (
    <>
      <CheckBox className={classes.answer} id="option1" text="A New Hope 1" />
      <CheckBox className={classes.answer} id="option2" text="A New Hope 2" />
    </>
  );
}

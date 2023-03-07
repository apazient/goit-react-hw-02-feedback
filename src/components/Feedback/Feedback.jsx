 import style from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  const opitons = [];
  for (const key of Object.keys(options)) {
    opitons.push(key);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={style['thumb-btn']}>
      <button className={style.btn} type="button" onClick={onLeaveFeedback} name={opitons[0]}>
        {capitalizeFirstLetter(opitons[0])}
      </button>
      <button className={style.btn} type="button" onClick={onLeaveFeedback} name={opitons[1]}>
        {capitalizeFirstLetter(opitons[1])}
      </button>

      <button className={style.btn} type="button" onClick={onLeaveFeedback} name={opitons[2]}>
        {capitalizeFirstLetter(opitons[2])}
      </button>
    </div>
  );
};

export default Feedback;

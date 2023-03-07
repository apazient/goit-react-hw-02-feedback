
import style from './Statistics.module.css';
const Statistics =({good,neutral,bad,total,positivePercentage})=>{

    return (
        <ul className={style['statistic-list']}>
            <li className={style.item} key={1} >Good: {good}</li>
            <li className={style.item} key={2} >Neutral: {neutral}</li>
            <li className={style.item} key={3} >Bad: { bad}</li>
            <li className={style.item} key={4} >Total: { total}</li>
            <li className={style.item} key={5} >Positive Feedback: { positivePercentage}</li>
        </ul>
    )    
}

export default Statistics;

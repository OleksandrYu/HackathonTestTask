import styles from './UserInfo.module.css'
import editIcon from '../../assets/icons/edit.svg'

const UserInfo = (props) => {
    return <div className={styles.container}>
        <img className={styles.user_icon} src = {props.icon} alt = "Not Found"/>
        <div className={styles.user_info}>
            <p className={styles.title}>Welcome back, {props.username}!</p>
            <p className={styles.mail}>{props.mail}</p>
            <div className={styles.stats_wrapper}>
                <div className={styles.user_stats}>
                    <p className={styles.stats_title}>Total spendings</p>
                    <p className={styles.loss}>{props.spending} UAH</p>
                </div>
                <div className={styles.user_stats}>
                    <p className={styles.stats_title}>Total income</p>
                    <p className={styles.profit}>{props.income} UAH</p>
                </div>
                <div className={styles.user_stats}>
                    <p className={styles.stats_title}>Current balance</p>
                    <p className={+props.balance > 0 ? styles.profit : styles.loss}>{props.balance} UAH</p>
                </div>
            </div>
        </div>
        <button className={styles.edit_button} onClick={props.onClick}>
            <img src = {editIcon} style={{fill: "white", width: "30px"}} alt="Not Found"/>
        </button>
    </div>
}

export default UserInfo
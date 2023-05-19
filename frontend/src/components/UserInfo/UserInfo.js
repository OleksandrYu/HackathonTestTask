import styles from './UserInfo.module.css'

const UserInfo = (props) => {
    return <div className={styles.container}>
        <img className={styles.user_icon} src = {props.icon} alt = "Not Found"></img>
        <div className={styles.user_info}>
            <p className={styles.title}>Welcome back, {props.username}!</p>
            <p className={styles.mail}>{props.mail}</p>
            <div className={styles.stats_wrapper}>
                <div className={styles.user_stats}>
                    <p className={styles.stats_title}>Total spendings</p>
                    <p className={styles.stats_description}>{props.spending}</p>
                </div>
                <div className={styles.user_stats}>
                    <p className={styles.stats_title}>Total income</p>
                    <p className={styles.stats_description}>{props.income}</p>
                </div>
                <div className={styles.user_stats}>
                    <p className={styles.stats_title}>Total spendings</p>
                    <p className={styles.stats_description}>{props.spending}</p>
                </div>
            </div>
        </div>
    </div>
}

export default UserInfo
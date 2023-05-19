import Card from "../../ui/Card";
import styles from './OperationDetail.module.css'

const OperationDetail = ({operation}) => {
    return (
        <Card>
            <h1>{operation.title}</h1>
            <p className={styles.statement}>Amount</p>
            <p className={styles.details}>{operation.amount} UAH</p>
            <p className={styles.statement}>Spending date</p>
            <p className={styles.details}>{operation.date}</p>
            <p className={styles.statement}>Description</p>
            <p className={styles.details}>{operation.description}</p>
        </Card>
    );
};

export default OperationDetail;

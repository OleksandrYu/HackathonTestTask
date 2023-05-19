import styles from './DropDown.module.css'

const DropDown = (props) => {

    const options = props.options.map((option, index) => (
        <option key = {index} value = {option} className={styles.option}>
            {option}
        </option>
    ))

    return <select className={styles.drop_down} onChange={props.onChange}>
        <option className={styles.option} value = "">Choose option</option>
        {options}
    </select>
}

export default DropDown
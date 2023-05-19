import styles from "./TextArea.module.css";
const TextArea = (props) => {
  return (
    <div className={styles.container}>
      <label htmlFor="desc" className={styles.placeholder}>
        {props.placeholder}
      </label>
      <textarea
        id="desc"
        className={styles.text_area}
        required
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextArea;

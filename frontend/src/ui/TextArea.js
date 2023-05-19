import styles from "./TextArea.module.css";
const TextArea = (props) => {
  return (
    <div className={styles.container}>
      <label
        htmlFor="desc"
        className={styles.placeholder}
        onChange={props.onChange}
      >
        {props.placeholder}
      </label>
      <textarea id="desc" className={styles.text_area} required />
    </div>
  );
};

export default TextArea;

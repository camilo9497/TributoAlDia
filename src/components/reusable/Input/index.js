import styles from './styles.module.css'

const Input = ({text, type, idName, placeholder}) => {
    return (
        <div className={styles.containerInput}>
            <label  className={styles.label} for="name">{text}</label>
            <input  className={styles.input} type={type} id={idName}  required placeholder={placeholder} ></input>
        </div>
    )
}
export default Input
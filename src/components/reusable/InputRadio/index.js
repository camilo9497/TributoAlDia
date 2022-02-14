import styles from './styles.module.css'

const InputRadio = ({text, name, value}) => {
    return (
        <div className={styles.containerInputRadio}>
           <input className={styles.input} containerInputRadio type="radio" name={name} value={value}/>
           <label>{text}</label>
        </div>
    )
}
export default InputRadio
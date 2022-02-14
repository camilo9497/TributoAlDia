import styles from './styles.module.css'

const InputCheck = ({text, checked}) => {
    return (
        <div className={styles.containerInput}>
            <input type="checkbox" checked={checked} />
            <label>{text}</label>
        </div>
    )
}
export default InputCheck
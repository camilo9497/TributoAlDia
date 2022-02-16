import styles from './styles.module.css'

const InputRadio = ({text, name, value, register = ()=> ({}), options = {}, error }) => {
    return (
        <div className={styles.containerInputRadio}>
           <input {...register(name, options)} className={styles.input} containerInputRadio type="radio" name={name} value={value}/>
           <label>{text}</label>
           {error?.message && 
            <p className={styles.error}>{error.message}</p>
            }
        </div>
    )
}
export default InputRadio
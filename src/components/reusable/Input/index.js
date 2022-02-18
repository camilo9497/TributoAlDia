import styles from './styles.module.css'

const Input = ({text, type, placeholder, register = ()=> ({}), name, options = {}, error}) => {

    return (
        <div className={styles.containerInput}>
            <label className={styles.label} htmlFor={name}>{text}</label>
            <input {...register(name, options)}  className={styles.input} type={type} placeholder={placeholder} ></input>
            {error?.message && 
            <p className={styles.error}>{error.message}</p>
            }
        </div>
    )
}
export default Input
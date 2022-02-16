import styles from './styles.module.css'

const InputCheck = ({text, checked, name, register = ()=> {}, options={} }) => {
    return (
        <div className={styles.containerInput}>
            <input {...register(name, options)} type="checkbox" checked={checked} />
            <label>{text}</label>
        </div>
    )
}
export default InputCheck
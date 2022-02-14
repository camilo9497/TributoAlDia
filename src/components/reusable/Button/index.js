import styles from './styles.module.css'

const Button = ({text, type}) => {
    return (
        <button type={type} className={styles.container}>
            {text}
        </button>
    )
}
export default Button
import styles from './styles.module.css'

const Button = ({text, type, handleClick}) => {
    return (
        <button type={type} className={styles.container} onClick={handleClick}>
            {text}
        </button>
    )
}
export default Button
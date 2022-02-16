import styles from './styles.module.css'

const ItemTable = ({text, value, signo}) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>{text}</p>
            <p className={styles.text}>{`${value}`}</p>
        </div>
    )
}
export default ItemTable